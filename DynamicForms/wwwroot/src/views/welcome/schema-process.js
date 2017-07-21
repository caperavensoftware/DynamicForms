import {HttpClient, json} from 'aurelia-fetch-client';

export class SchemaProcess {
    eventAggregator;
    currentIndex;
    idCollection;
    schemas;
    atEnd;

    constructor(idCollection, eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.idCollection = idCollection;
        this.atEnd = false;
        this.initialize();
    }

    dispose() {
        this.schemas = null;
        this.idCollection = null;
        this.currentIndex = -1;
    }

    initialize() {
        this.currentIndex = 0;
        this.schemas = [];
        this.getCurrentSchema();
    }

    next() {
        if (this.atEnd == true) {
            this.updateServer();
            return false;
        }

        if (this.currentIndex < this.idCollection.length -1) {
            this.currentIndex = this.currentIndex + 1;
        }

        this.atEnd = this.currentIndex == this.idCollection.length -1;
        this.getCurrentSchema();
        return true;
    }

    previous() {
        if (this.currentIndex > 0) {
            this.currentIndex = this.currentIndex - 1;
        }

        this.getCurrentSchema();
    }

    getCurrentSchema() {
        const id = this.idCollection[this.currentIndex];

        if (this.currentIndex > this.schemas.length - 1) {
            this.setCurrentSchema(id);
        }
        else {
            this.publishSchema();
        }
    }

    setCurrentSchema(id) {
        const httpClient = new HttpClient();

        httpClient.fetch(`api/section/${id}`)
            .then(response => response.json())
            .then(schema => {
                const model = this.createModelFromSchema(schema);

                this.schemas.push({
                    id: id,
                    model: model,
                    schema: schema
                });

                this.publishSchema();
            });
    }

    publishSchema() {
        this.eventAggregator.publish("new-schema");
    }

    createModelFromSchema(schema) {
        const model = {};

        for(let field of schema.fields) {
            model[field.field] = "";
        }

        return model;
    }

    updateServer() {
        const result = [];

        for (let schema of this.schemas) {
            result.push({
                id: schema.id,
                model: schema.model
            })
        }


        const httpClient = new HttpClient();
        
        httpClient.fetch(`api/section/`, {
            method: 'post',
            body: json(result)
        })
    }
}