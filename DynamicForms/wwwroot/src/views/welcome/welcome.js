import {bindable, inject} from 'aurelia-framework';
import {Router} from 'aurelia-router'
import {EventAggregator} from 'aurelia-event-aggregator';
import {HttpClient} from 'aurelia-fetch-client';
import {SchemaProcess} from './schema-process';
import {DynamicViewLoader, TemplateParser} from 'pragma-views';

@inject(EventAggregator, DynamicViewLoader, Router)
export class Welcome {
    items;

    @bindable schemaProcess;
    @bindable selectedId;
    @bindable schema;
    @bindable model;

    constructor(eventAggregator, dynamicViewLoader, router) {
        this.eventAggregator = eventAggregator;
        this.dynamicViewLoader = dynamicViewLoader;
        this.router = router;
        this.templateParser = new TemplateParser("model");
    }

    attached() {
        const params = this.router.currentInstruction.params;
        console.log(params);
        
        this.fetchSections();

        this.newSchemaHandler = this.newSchema.bind(this);
        this.newSchemaEvent = this.eventAggregator.subscribe("new-schema", this.newSchemaHandler);
        this.nextCaption = "Next";
    }

    detached() {
        this.newSchemaEvent.dispose();
        this.newSchemaEvent = null;
        this.newSchemaHandler = null;
        this.templateParser.dispose();
        this.templateParser = null;
    }

    fetchSections() {
        let httpClient = new HttpClient();

        httpClient.fetch('api/section')
            .then(response => response.json())
            .then(sections => {
                this.items = sections;
            });
    }

    startProcess() {
        if (this.schemaProcess) {
            this.schemaProcess.dispose();
        }

        const result = this.selectedId.sort((a,b) => a > b);
        
        this.schemaProcess = new SchemaProcess(this.selectedId, this.eventAggregator);
        this.aside.classList.remove("closed");
    }

    endProcess() {
        this.aside.classList.add("closed");
        this.schema = null;
        this.model = null;
        this.schemaProcess.dispose();
        this.schemaProcess = null;
    }

    newSchema() {
        this.model = this.schemaProcess.schemas[this.schemaProcess.currentIndex].model;
        this.schema = this.schemaProcess.schemas[this.schemaProcess.currentIndex].schema;

        this.templateParser.parse(this.schema)
            .then(html => {
                this.dynamicViewLoader.load(html, this.detailsElement, this)
            });

        requestAnimationFrame(_ => this.detailsElement.scrollTop = 0);
    }

    cancel() {
        this.endProcess();
    }

    next() {
        if (this.schemaProcess.next() == false) {
            this.cancel();
        }
    }

    previous() {
        this.schemaProcess.previous();
    }
}