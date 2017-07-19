import {bindable} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

export class Welcome {
    items;

    @bindable selectedId;

    attached() {
        this.fetchSections();
    }

    fetchSections() {
        let httpClient = new HttpClient();

        httpClient.fetch('api/section')
            .then(response => response.json())
            .then(sections => {
                this.items = sections;
            });
    }

    selectedIdChanged(newValue) {
        console.log(newValue);
    }
}