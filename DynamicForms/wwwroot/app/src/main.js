define(['exports'], function (exports) {
    'use strict';

    exports.__esModule = true;
    exports.configure = configure;
    function configure(aurelia) {
        return new Promise(function (resolve) {
            aurelia.use.standardConfiguration().developmentLogging().globalResources().plugin('pragma-views', function (builder) {
                return builder.useGroup().useInput().useDynamicScreens().useCollections();
            });

            aurelia.start().then(function () {
                aurelia.setRoot();
                resolve();
            });
        });
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY29uZmlndXJlIiwiYXVyZWxpYSIsIlByb21pc2UiLCJyZXNvbHZlIiwidXNlIiwic3RhbmRhcmRDb25maWd1cmF0aW9uIiwiZGV2ZWxvcG1lbnRMb2dnaW5nIiwiZ2xvYmFsUmVzb3VyY2VzIiwicGx1Z2luIiwiYnVpbGRlciIsInVzZUdyb3VwIiwidXNlSW5wdXQiLCJ1c2VEeW5hbWljU2NyZWVucyIsInVzZUNvbGxlY3Rpb25zIiwic3RhcnQiLCJ0aGVuIiwic2V0Um9vdCJdLCJtYXBwaW5ncyI6Ijs7OztZQUFnQkEsUyxHQUFBQSxTO0FBQVQsYUFBU0EsU0FBVCxDQUFtQkMsT0FBbkIsRUFBNEI7QUFDL0IsZUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzVCRixvQkFBUUcsR0FBUixDQUNLQyxxQkFETCxHQUVLQyxrQkFGTCxHQUdLQyxlQUhMLEdBSUtDLE1BSkwsQ0FJWSxjQUpaLEVBSTRCO0FBQUEsdUJBQ3BCQyxRQUNLQyxRQURMLEdBRUtDLFFBRkwsR0FHS0MsaUJBSEwsR0FJS0MsY0FKTCxFQURvQjtBQUFBLGFBSjVCOztBQVlBWixvQkFBUWEsS0FBUixHQUFnQkMsSUFBaEIsQ0FBcUIsWUFBTTtBQUN2QmQsd0JBQVFlLE9BQVI7QUFDQWI7QUFDSCxhQUhEO0FBSUgsU0FqQk0sQ0FBUDtBQWtCSCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBhdXJlbGlhLnVzZVxyXG4gICAgICAgICAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuICAgICAgICAgICAgLmRldmVsb3BtZW50TG9nZ2luZygpXHJcbiAgICAgICAgICAgIC5nbG9iYWxSZXNvdXJjZXMoKVxyXG4gICAgICAgICAgICAucGx1Z2luKCdwcmFnbWEtdmlld3MnLCBidWlsZGVyID0+XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZUdyb3VwKClcclxuICAgICAgICAgICAgICAgICAgICAudXNlSW5wdXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC51c2VEeW5hbWljU2NyZWVucygpXHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZUNvbGxlY3Rpb25zKClcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBhdXJlbGlhLnNldFJvb3QoKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0iXX0=