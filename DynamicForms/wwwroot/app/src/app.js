define(['exports'], function (exports) {
    'use strict';

    exports.__esModule = true;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var App = exports.App = function () {
        function App() {
            _classCallCheck(this, App);

            this.router = null;
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
            config.title = 'Application Title';
            config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'views/welcome/welcome', nav: true, title: 'Welcome' }]);

            this.router = router;
        };

        return App;
    }();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJyb3V0ZXIiLCJjb25maWd1cmVSb3V0ZXIiLCJjb25maWciLCJ0aXRsZSIsIm1hcCIsInJvdXRlIiwibmFtZSIsIm1vZHVsZUlkIiwibmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQUFhQSxHLFdBQUFBLEc7Ozs7aUJBQ1RDLE0sR0FBUyxJOzs7c0JBRVRDLGUsNEJBQWdCQyxNLEVBQVFGLE0sRUFBUTtBQUM1QkUsbUJBQU9DLEtBQVAsR0FBZSxtQkFBZjtBQUNBRCxtQkFBT0UsR0FBUCxDQUFXLENBQ1AsRUFBRUMsT0FBTyxDQUFDLEVBQUQsRUFBSyxTQUFMLENBQVQsRUFBMEJDLE1BQU0sU0FBaEMsRUFBMkNDLFVBQVUsdUJBQXJELEVBQThFQyxLQUFLLElBQW5GLEVBQXlGTCxPQUFPLFNBQWhHLEVBRE8sQ0FBWDs7QUFJQSxpQkFBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0gsUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXBwIHtcclxuICAgIHJvdXRlciA9IG51bGw7XHJcblxyXG4gICAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XHJcbiAgICAgICAgY29uZmlnLnRpdGxlID0gJ0FwcGxpY2F0aW9uIFRpdGxlJztcclxuICAgICAgICBjb25maWcubWFwKFtcclxuICAgICAgICAgICAgeyByb3V0ZTogWycnLCAnd2VsY29tZSddLCBuYW1lOiAnd2VsY29tZScsIG1vZHVsZUlkOiAndmlld3Mvd2VsY29tZS93ZWxjb21lJywgbmF2OiB0cnVlLCB0aXRsZTogJ1dlbGNvbWUnIH0sXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgfVxyXG59Il19