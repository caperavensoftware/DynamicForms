import {HttpClient, json} from 'aurelia-fetch-client';

export class SchemaProcess {
    eventAggregator;
    currentIndex;
    idCollection;
    schemas;

    constructor(idCollection, eventAggregator, observerLocator) {
        this.eventAggregator = eventAggregator;
        this.idCollection = idCollection;
        this.observerLocator = observerLocator;
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
        this.currentIndex = this.currentIndex + 1;
        return this.getCurrentSchema();
    }

    previous() {
        this.currentIndex = this.currentIndex - 1;
        this.getCurrentSchema();
    }

    getCurrentSchema() {
        if (this.currentIndex < 0) {
            this.currentIndex = 0;
            return false;
        }
        
        if (this.currentIndex > this.idCollection.length - 1) {
            this.currentIndex = this.currentIndex = this.idCollection.length - 1;
            this.updateServer();
            return false;
        }
        
        const id = this.idCollection[this.currentIndex];

        if (this.currentIndex > this.schemas.length - 1) {
            this.setCurrentSchema(id);
        }
        else {
            this.publishSchema();
        }
        
        return true;
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
    
    propertyChanged(model, fieldname, sectionId) {
        const value = model[fieldname];
        
        if (value == true) {
            this.addSectionIdToCollection(sectionId);
        }
        else {
            this.removeSectionIdFromCollection(sectionId);
        }
    }

    addSectionIdToCollection(sectionId) {
        const idCollection = sectionId.split(",");
        
        for (let id of idCollection) {
            const hasSectionId = this.idCollection.indexOf(id) > -1;

            if (!hasSectionId) {
                this.idCollection.push(id);
            }
        }
    }

    removeSectionIdFromCollection(sectionId) {
        const idCollection = sectionId.split(",");
        
        for (let id of idCollection) {
            const index = this.idCollection.indexOf(id);
            const hasSectionId = index > -1;

            if (hasSectionId) {
                this.idCollection.splice(index, 1);
                this.removeSchemaFromCollection(id);
            }
        }
    }
    
    removeSchemaFromCollection(sectionId) {
        const schema = this.schemas.find(item => item.id == sectionId);
        
        if (schema != undefined) {
            const index = this.schemas.indexOf(schema);
            this.schemas.splice(index,  1);
        }
    }

    createModelFromSchema(schema) {
        const model = {};
        model.subscriptions = [];

        for(let field of schema.fields) {
            model[field.field] = "";
            
            if (parseInt(field.sectionId) > 0) {
                model.subscriptions.push(this.observerLocator.getObserver(model, field.field).subscribe(() => this.propertyChanged(model, field.field, field.sectionId)));    
            }
        }

        for(let ds of schema.datasources) {
            model[ds.id] = [];
            const detailModel = {};

            for(let field of ds.fields) {
                detailModel[field.field] = "";
            }
            
            model[`${ds.id}Schema`] = detailModel;
            model.createInstance = this.createInstance.bind(this,  detailModel, model[ds.id]);
            
            if (ds.defaultRowCount > 0) {
                for (let i = 0; i < ds.defaultRowCount; i++) {
                    const d = this.createInstance(detailModel, model[ds.id]);
                    model[ds.id].push(d);
                }
            }
        }

        
        return model;
    }
    
    disposeModel(model) {
        while(model.subscriptions.length) {
            model.subscriptions.pop();
        }
        
        model.createInstance = null;
    }

    createInstance(detailModel, collection) {
        const obj = Object.create(detailModel);
        obj.id = collection.length + 1;
        return obj;
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