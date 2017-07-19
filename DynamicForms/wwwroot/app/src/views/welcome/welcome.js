define(['exports', 'aurelia-framework', 'aurelia-fetch-client'], function (exports, _aureliaFramework, _aureliaFetchClient) {
    'use strict';

    exports.__esModule = true;
    exports.Welcome = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _desc, _value, _class, _descriptor;

    var Welcome = exports.Welcome = (_class = function () {
        function Welcome() {
            _classCallCheck(this, Welcome);

            _initDefineProp(this, 'selectedId', _descriptor, this);
        }

        Welcome.prototype.attached = function attached() {
            this.fetchSections();
        };

        Welcome.prototype.fetchSections = function fetchSections() {
            var _this = this;

            var httpClient = new _aureliaFetchClient.HttpClient();

            httpClient.fetch('api/section').then(function (response) {
                return response.json();
            }).then(function (sections) {
                _this.items = sections;
            });
        };

        Welcome.prototype.selectedIdChanged = function selectedIdChanged(newValue) {
            console.log(newValue);
        };

        return Welcome;
    }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'selectedId', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOlsiV2VsY29tZSIsImF0dGFjaGVkIiwiZmV0Y2hTZWN0aW9ucyIsImh0dHBDbGllbnQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJpdGVtcyIsInNlY3Rpb25zIiwic2VsZWN0ZWRJZENoYW5nZWQiLCJuZXdWYWx1ZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUdhQSxPLFdBQUFBLE87Ozs7Ozs7MEJBS1RDLFEsdUJBQVc7QUFDUCxpQkFBS0MsYUFBTDtBQUNILFM7OzBCQUVEQSxhLDRCQUFnQjtBQUFBOztBQUNaLGdCQUFJQyxhQUFhLG9DQUFqQjs7QUFFQUEsdUJBQVdDLEtBQVgsQ0FBaUIsYUFBakIsRUFDS0MsSUFETCxDQUNVO0FBQUEsdUJBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLGFBRFYsRUFFS0YsSUFGTCxDQUVVLG9CQUFZO0FBQ2Qsc0JBQUtHLEtBQUwsR0FBYUMsUUFBYjtBQUNILGFBSkw7QUFLSCxTOzswQkFFREMsaUIsOEJBQWtCQyxRLEVBQVU7QUFDeEJDLG9CQUFRQyxHQUFSLENBQVlGLFFBQVo7QUFDSCxTIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcblxuZXhwb3J0IGNsYXNzIFdlbGNvbWUge1xuICAgIGl0ZW1zO1xuXG4gICAgQGJpbmRhYmxlIHNlbGVjdGVkSWQ7XG5cbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaFNlY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgZmV0Y2hTZWN0aW9ucygpIHtcbiAgICAgICAgbGV0IGh0dHBDbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuXG4gICAgICAgIGh0dHBDbGllbnQuZmV0Y2goJ2FwaS9zZWN0aW9uJylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHNlY3Rpb25zID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gc2VjdGlvbnM7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZElkQ2hhbmdlZChuZXdWYWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XG4gICAgfVxufSJdfQ==