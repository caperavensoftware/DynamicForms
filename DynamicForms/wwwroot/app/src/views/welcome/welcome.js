define(['exports', 'aurelia-framework', 'aurelia-event-aggregator', 'aurelia-fetch-client', './schema-process', 'pragma-views'], function (exports, _aureliaFramework, _aureliaEventAggregator, _aureliaFetchClient, _schemaProcess, _pragmaViews) {
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

    var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

    var Welcome = exports.Welcome = (_dec = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator, _pragmaViews.DynamicViewLoader), _dec(_class = (_class2 = function () {
        function Welcome(eventAggregator, dynamicViewLoader, templateParser) {
            _classCallCheck(this, Welcome);

            _initDefineProp(this, 'schemaProcess', _descriptor, this);

            _initDefineProp(this, 'selectedId', _descriptor2, this);

            _initDefineProp(this, 'currentSchema', _descriptor3, this);

            _initDefineProp(this, 'currentModel', _descriptor4, this);

            this.eventAggregator = eventAggregator;
            this.dynamicViewLoader = dynamicViewLoader;
            this.templateParser = new _pragmaViews.TemplateParser("model");
        }

        Welcome.prototype.attached = function attached() {
            this.fetchSections();

            this.newSchemaHandler = this.newSchema.bind(this);
            this.newSchemaEvent = this.eventAggregator.subscribe("new-schema", this.newSchemaHandler);
            this.nextCaption = "Next";
        };

        Welcome.prototype.detached = function detached() {
            this.newSchemaEvent.dispose();
            this.newSchemaEvent = null;
            this.newSchemaHandler = null;
            this.templateParser.dispose();
            this.templateParser = null;
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

        Welcome.prototype.startProcess = function startProcess() {
            if (this.schemaProcess) {
                this.schemaProcess.dispose();
            }

            this.schemaProcess = new _schemaProcess.SchemaProcess(this.selectedId, this.eventAggregator);
            this.aside.classList.remove("closed");
        };

        Welcome.prototype.endProcess = function endProcess() {
            this.aside.classList.add("closed");
            this.currentSchema = null;
            this.currentModel = null;
            this.schemaProcess.dispose();
            this.schemaProcess = null;
        };

        Welcome.prototype.newSchema = function newSchema(event) {
            var _this2 = this;

            this.currentModel = event.model;
            this.currentSchema = event.schema;

            this.templateParser.parse(this.currentSchema).then(function (html) {
                _this2.dynamicViewLoader.load(html, _this2.detailsElement, _this2);
            });
        };

        Welcome.prototype.cancel = function cancel() {
            this.endProcess();
        };

        Welcome.prototype.next = function next() {
            this.schemaProcess.next();
        };

        Welcome.prototype.previous = function previous() {
            this.schemaProcess.previous();
        };

        return Welcome;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'schemaProcess', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'selectedId', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'currentSchema', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'currentModel', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOlsiV2VsY29tZSIsImV2ZW50QWdncmVnYXRvciIsImR5bmFtaWNWaWV3TG9hZGVyIiwidGVtcGxhdGVQYXJzZXIiLCJhdHRhY2hlZCIsImZldGNoU2VjdGlvbnMiLCJuZXdTY2hlbWFIYW5kbGVyIiwibmV3U2NoZW1hIiwiYmluZCIsIm5ld1NjaGVtYUV2ZW50Iiwic3Vic2NyaWJlIiwibmV4dENhcHRpb24iLCJkZXRhY2hlZCIsImRpc3Bvc2UiLCJodHRwQ2xpZW50IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiaXRlbXMiLCJzZWN0aW9ucyIsInN0YXJ0UHJvY2VzcyIsInNjaGVtYVByb2Nlc3MiLCJzZWxlY3RlZElkIiwiYXNpZGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJlbmRQcm9jZXNzIiwiYWRkIiwiY3VycmVudFNjaGVtYSIsImN1cnJlbnRNb2RlbCIsImV2ZW50IiwibW9kZWwiLCJzY2hlbWEiLCJwYXJzZSIsImxvYWQiLCJodG1sIiwiZGV0YWlsc0VsZW1lbnQiLCJjYW5jZWwiLCJuZXh0IiwicHJldmlvdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQU9hQSxPLFdBQUFBLE8sV0FEWixzRztBQVNHLHlCQUFZQyxlQUFaLEVBQTZCQyxpQkFBN0IsRUFBZ0RDLGNBQWhELEVBQWdFO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQzVELGlCQUFLRixlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLGlCQUFLQyxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0EsaUJBQUtDLGNBQUwsR0FBc0IsZ0NBQW1CLE9BQW5CLENBQXRCO0FBQ0g7OzBCQUVEQyxRLHVCQUFXO0FBQ1AsaUJBQUtDLGFBQUw7O0FBRUEsaUJBQUtDLGdCQUFMLEdBQXdCLEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUF4QjtBQUNBLGlCQUFLQyxjQUFMLEdBQXNCLEtBQUtSLGVBQUwsQ0FBcUJTLFNBQXJCLENBQStCLFlBQS9CLEVBQTZDLEtBQUtKLGdCQUFsRCxDQUF0QjtBQUNBLGlCQUFLSyxXQUFMLEdBQW1CLE1BQW5CO0FBQ0gsUzs7MEJBRURDLFEsdUJBQVc7QUFDUCxpQkFBS0gsY0FBTCxDQUFvQkksT0FBcEI7QUFDQSxpQkFBS0osY0FBTCxHQUFzQixJQUF0QjtBQUNBLGlCQUFLSCxnQkFBTCxHQUF3QixJQUF4QjtBQUNBLGlCQUFLSCxjQUFMLENBQW9CVSxPQUFwQjtBQUNBLGlCQUFLVixjQUFMLEdBQXNCLElBQXRCO0FBQ0gsUzs7MEJBRURFLGEsNEJBQWdCO0FBQUE7O0FBQ1osZ0JBQUlTLGFBQWEsb0NBQWpCOztBQUVBQSx1QkFBV0MsS0FBWCxDQUFpQixhQUFqQixFQUNLQyxJQURMLENBQ1U7QUFBQSx1QkFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsYUFEVixFQUVLRixJQUZMLENBRVUsb0JBQVk7QUFDZCxzQkFBS0csS0FBTCxHQUFhQyxRQUFiO0FBQ0gsYUFKTDtBQUtILFM7OzBCQUVEQyxZLDJCQUFlO0FBQ1gsZ0JBQUksS0FBS0MsYUFBVCxFQUF3QjtBQUNwQixxQkFBS0EsYUFBTCxDQUFtQlQsT0FBbkI7QUFDSDs7QUFFRCxpQkFBS1MsYUFBTCxHQUFxQixpQ0FBa0IsS0FBS0MsVUFBdkIsRUFBbUMsS0FBS3RCLGVBQXhDLENBQXJCO0FBQ0EsaUJBQUt1QixLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCLFFBQTVCO0FBQ0gsUzs7MEJBRURDLFUseUJBQWE7QUFDVCxpQkFBS0gsS0FBTCxDQUFXQyxTQUFYLENBQXFCRyxHQUFyQixDQUF5QixRQUF6QjtBQUNBLGlCQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsaUJBQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxpQkFBS1IsYUFBTCxDQUFtQlQsT0FBbkI7QUFDQSxpQkFBS1MsYUFBTCxHQUFxQixJQUFyQjtBQUNILFM7OzBCQUVEZixTLHNCQUFVd0IsSyxFQUFPO0FBQUE7O0FBQ2IsaUJBQUtELFlBQUwsR0FBb0JDLE1BQU1DLEtBQTFCO0FBQ0EsaUJBQUtILGFBQUwsR0FBcUJFLE1BQU1FLE1BQTNCOztBQUVBLGlCQUFLOUIsY0FBTCxDQUFvQitCLEtBQXBCLENBQTBCLEtBQUtMLGFBQS9CLEVBQ0tiLElBREwsQ0FDVSxnQkFBUTtBQUNWLHVCQUFLZCxpQkFBTCxDQUF1QmlDLElBQXZCLENBQTRCQyxJQUE1QixFQUFrQyxPQUFLQyxjQUF2QztBQUNILGFBSEw7QUFJSCxTOzswQkFFREMsTSxxQkFBUztBQUNMLGlCQUFLWCxVQUFMO0FBQ0gsUzs7MEJBRURZLEksbUJBQU87QUFDSCxpQkFBS2pCLGFBQUwsQ0FBbUJpQixJQUFuQjtBQUNILFM7OzBCQUVEQyxRLHVCQUFXO0FBQ1AsaUJBQUtsQixhQUFMLENBQW1Ca0IsUUFBbkI7QUFDSCxTIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5pbXBvcnQge1NjaGVtYVByb2Nlc3N9IGZyb20gJy4vc2NoZW1hLXByb2Nlc3MnO1xuaW1wb3J0IHtEeW5hbWljVmlld0xvYWRlciwgVGVtcGxhdGVQYXJzZXJ9IGZyb20gJ3ByYWdtYS12aWV3cyc7XG5cbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yLCBEeW5hbWljVmlld0xvYWRlcilcbmV4cG9ydCBjbGFzcyBXZWxjb21lIHtcbiAgICBpdGVtcztcblxuICAgIEBiaW5kYWJsZSBzY2hlbWFQcm9jZXNzO1xuICAgIEBiaW5kYWJsZSBzZWxlY3RlZElkO1xuICAgIEBiaW5kYWJsZSBjdXJyZW50U2NoZW1hO1xuICAgIEBiaW5kYWJsZSBjdXJyZW50TW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcihldmVudEFnZ3JlZ2F0b3IsIGR5bmFtaWNWaWV3TG9hZGVyLCB0ZW1wbGF0ZVBhcnNlcikge1xuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcbiAgICAgICAgdGhpcy5keW5hbWljVmlld0xvYWRlciA9IGR5bmFtaWNWaWV3TG9hZGVyO1xuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyID0gbmV3IFRlbXBsYXRlUGFyc2VyKFwibW9kZWxcIik7XG4gICAgfVxuXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hTZWN0aW9ucygpO1xuXG4gICAgICAgIHRoaXMubmV3U2NoZW1hSGFuZGxlciA9IHRoaXMubmV3U2NoZW1hLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmV3U2NoZW1hRXZlbnQgPSB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoXCJuZXctc2NoZW1hXCIsIHRoaXMubmV3U2NoZW1hSGFuZGxlcik7XG4gICAgICAgIHRoaXMubmV4dENhcHRpb24gPSBcIk5leHRcIjtcbiAgICB9XG5cbiAgICBkZXRhY2hlZCgpIHtcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFFdmVudC5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMubmV3U2NoZW1hRXZlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm5ld1NjaGVtYUhhbmRsZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVBhcnNlciA9IG51bGw7XG4gICAgfVxuXG4gICAgZmV0Y2hTZWN0aW9ucygpIHtcbiAgICAgICAgbGV0IGh0dHBDbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuXG4gICAgICAgIGh0dHBDbGllbnQuZmV0Y2goJ2FwaS9zZWN0aW9uJylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHNlY3Rpb25zID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gc2VjdGlvbnM7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydFByb2Nlc3MoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjaGVtYVByb2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hUHJvY2Vzcy5kaXNwb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MgPSBuZXcgU2NoZW1hUHJvY2Vzcyh0aGlzLnNlbGVjdGVkSWQsIHRoaXMuZXZlbnRBZ2dyZWdhdG9yKTtcbiAgICAgICAgdGhpcy5hc2lkZS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2VkXCIpO1xuICAgIH1cblxuICAgIGVuZFByb2Nlc3MoKSB7XG4gICAgICAgIHRoaXMuYXNpZGUuY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NoZW1hID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdXJyZW50TW9kZWwgPSBudWxsO1xuICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MgPSBudWxsO1xuICAgIH1cblxuICAgIG5ld1NjaGVtYShldmVudCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNb2RlbCA9IGV2ZW50Lm1vZGVsO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2hlbWEgPSBldmVudC5zY2hlbWE7XG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZVBhcnNlci5wYXJzZSh0aGlzLmN1cnJlbnRTY2hlbWEpXG4gICAgICAgICAgICAudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmR5bmFtaWNWaWV3TG9hZGVyLmxvYWQoaHRtbCwgdGhpcy5kZXRhaWxzRWxlbWVudCwgdGhpcylcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5lbmRQcm9jZXNzKCk7XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5zY2hlbWFQcm9jZXNzLm5leHQoKTtcbiAgICB9XG5cbiAgICBwcmV2aW91cygpIHtcbiAgICAgICAgdGhpcy5zY2hlbWFQcm9jZXNzLnByZXZpb3VzKCk7XG4gICAgfVxufSJdfQ==