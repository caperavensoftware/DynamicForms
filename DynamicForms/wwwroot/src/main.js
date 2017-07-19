export function configure(aurelia) {
    return new Promise((resolve) => {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .globalResources()
            .plugin('pragma-views', builder =>
                builder
                    .useGroup()
                    .useInput()
                    .useDynamicScreens()
                    .useCollections()
            );

        aurelia.start().then(() => {
            aurelia.setRoot();
            resolve();
        });
    });
}