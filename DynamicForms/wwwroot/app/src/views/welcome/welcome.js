define(['exports', 'aurelia-framework', 'aurelia-router', 'aurelia-event-aggregator', 'aurelia-fetch-client', './schema-process', 'pragma-views'], function (exports, _aureliaFramework, _aureliaRouter, _aureliaEventAggregator, _aureliaFetchClient, _schemaProcess, _pragmaViews) {
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

    var Welcome = exports.Welcome = (_dec = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator, _pragmaViews.DynamicViewLoader, _aureliaRouter.Router), _dec(_class = (_class2 = function () {
        function Welcome(eventAggregator, dynamicViewLoader, router) {
            _classCallCheck(this, Welcome);

            _initDefineProp(this, 'schemaProcess', _descriptor, this);

            _initDefineProp(this, 'selectedId', _descriptor2, this);

            _initDefineProp(this, 'schema', _descriptor3, this);

            _initDefineProp(this, 'model', _descriptor4, this);

            this.eventAggregator = eventAggregator;
            this.dynamicViewLoader = dynamicViewLoader;
            this.router = router;
            this.templateParser = new _pragmaViews.TemplateParser("model");
        }

        Welcome.prototype.attached = function attached() {
            var query = this.router.currentInstruction.queryParams;

            this.fetchSections(query);

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

        Welcome.prototype.fetchSections = function fetchSections(query) {
            var _this = this;

            var httpClient = new _aureliaFetchClient.HttpClient();

            var url = 'api/section';

            if (query) {
                url = url + '/query=' + query;
            }

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

            var result = this.selectedId.sort(function (a, b) {
                return a > b;
            });

            this.schemaProcess = new _schemaProcess.SchemaProcess(this.selectedId, this.eventAggregator);
            this.aside.classList.remove("closed");
        };

        Welcome.prototype.endProcess = function endProcess() {
            this.aside.classList.add("closed");
            this.schema = null;
            this.model = null;
            this.schemaProcess.dispose();
            this.schemaProcess = null;
        };

        Welcome.prototype.newSchema = function newSchema() {
            var _this2 = this;

            this.model = this.schemaProcess.schemas[this.schemaProcess.currentIndex].model;
            this.schema = this.schemaProcess.schemas[this.schemaProcess.currentIndex].schema;

            this.templateParser.parse(this.schema).then(function (html) {
                _this2.dynamicViewLoader.load(html, _this2.detailsElement, _this2);
            });

            requestAnimationFrame(function (_) {
                return _this2.detailsElement.scrollTop = 0;
            });
        };

        Welcome.prototype.cancel = function cancel() {
            this.endProcess();
        };

        Welcome.prototype.next = function next() {
            if (this.schemaProcess.next() == false) {
                this.cancel();
            }
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
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'schema', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'model', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOlsiV2VsY29tZSIsImV2ZW50QWdncmVnYXRvciIsImR5bmFtaWNWaWV3TG9hZGVyIiwicm91dGVyIiwidGVtcGxhdGVQYXJzZXIiLCJhdHRhY2hlZCIsInF1ZXJ5IiwiY3VycmVudEluc3RydWN0aW9uIiwicXVlcnlQYXJhbXMiLCJmZXRjaFNlY3Rpb25zIiwibmV3U2NoZW1hSGFuZGxlciIsIm5ld1NjaGVtYSIsImJpbmQiLCJuZXdTY2hlbWFFdmVudCIsInN1YnNjcmliZSIsIm5leHRDYXB0aW9uIiwiZGV0YWNoZWQiLCJkaXNwb3NlIiwiaHR0cENsaWVudCIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIml0ZW1zIiwic2VjdGlvbnMiLCJzdGFydFByb2Nlc3MiLCJzY2hlbWFQcm9jZXNzIiwicmVzdWx0Iiwic2VsZWN0ZWRJZCIsInNvcnQiLCJhIiwiYiIsImFzaWRlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZW5kUHJvY2VzcyIsImFkZCIsInNjaGVtYSIsIm1vZGVsIiwic2NoZW1hcyIsImN1cnJlbnRJbmRleCIsInBhcnNlIiwibG9hZCIsImh0bWwiLCJkZXRhaWxzRWxlbWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvcCIsImNhbmNlbCIsIm5leHQiLCJwcmV2aW91cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBUWFBLE8sV0FBQUEsTyxXQURaLDZIO0FBU0cseUJBQVlDLGVBQVosRUFBNkJDLGlCQUE3QixFQUFnREMsTUFBaEQsRUFBd0Q7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDcEQsaUJBQUtGLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsaUJBQUtDLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFDQSxpQkFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsaUJBQUtD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QnNCLElBQW5CLE1BQTZCLEtBQWpDLEVBQXdDO0FBQ3BDLHFCQUFLRCxNQUFMO0FBQ0g7QUFDSixTOzswQkFFREUsUSx1QkFBVztBQUNQLGlCQUFLdkIsYUFBTCxDQUFtQnVCLFFBQW5CO0FBQ0gsUyIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInXG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuaW1wb3J0IHtTY2hlbWFQcm9jZXNzfSBmcm9tICcuL3NjaGVtYS1wcm9jZXNzJztcbmltcG9ydCB7RHluYW1pY1ZpZXdMb2FkZXIsIFRlbXBsYXRlUGFyc2VyfSBmcm9tICdwcmFnbWEtdmlld3MnO1xuXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvciwgRHluYW1pY1ZpZXdMb2FkZXIsIFJvdXRlcilcbmV4cG9ydCBjbGFzcyBXZWxjb21lIHtcbiAgICBpdGVtcztcblxuICAgIEBiaW5kYWJsZSBzY2hlbWFQcm9jZXNzO1xuICAgIEBiaW5kYWJsZSBzZWxlY3RlZElkO1xuICAgIEBiaW5kYWJsZSBzY2hlbWE7XG4gICAgQGJpbmRhYmxlIG1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yLCBkeW5hbWljVmlld0xvYWRlciwgcm91dGVyKSB7XG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xuICAgICAgICB0aGlzLmR5bmFtaWNWaWV3TG9hZGVyID0gZHluYW1pY1ZpZXdMb2FkZXI7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyID0gbmV3IFRlbXBsYXRlUGFyc2VyKFwibW9kZWxcIik7XG4gICAgfVxuXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5yb3V0ZXIuY3VycmVudEluc3RydWN0aW9uLnF1ZXJ5UGFyYW1zO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5mZXRjaFNlY3Rpb25zKHF1ZXJ5KTtcblxuICAgICAgICB0aGlzLm5ld1NjaGVtYUhhbmRsZXIgPSB0aGlzLm5ld1NjaGVtYS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5ld1NjaGVtYUV2ZW50ID0gdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKFwibmV3LXNjaGVtYVwiLCB0aGlzLm5ld1NjaGVtYUhhbmRsZXIpO1xuICAgICAgICB0aGlzLm5leHRDYXB0aW9uID0gXCJOZXh0XCI7XG4gICAgfVxuXG4gICAgZGV0YWNoZWQoKSB7XG4gICAgICAgIHRoaXMubmV3U2NoZW1hRXZlbnQuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLm5ld1NjaGVtYUV2ZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVBhcnNlci5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMudGVtcGxhdGVQYXJzZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGZldGNoU2VjdGlvbnMocXVlcnkpIHtcbiAgICAgICAgbGV0IGh0dHBDbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuXG4gICAgICAgIGxldCB1cmwgPSAnYXBpL3NlY3Rpb24nO1xuXG4gICAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICAgICAgdXJsID0gYCR7dXJsfS9xdWVyeT0ke3F1ZXJ5fWA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGh0dHBDbGllbnQuZmV0Y2goJ2FwaS9zZWN0aW9uJylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHNlY3Rpb25zID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gc2VjdGlvbnM7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydFByb2Nlc3MoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjaGVtYVByb2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hUHJvY2Vzcy5kaXNwb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNlbGVjdGVkSWQuc29ydCgoYSxiKSA9PiBhID4gYik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MgPSBuZXcgU2NoZW1hUHJvY2Vzcyh0aGlzLnNlbGVjdGVkSWQsIHRoaXMuZXZlbnRBZ2dyZWdhdG9yKTtcbiAgICAgICAgdGhpcy5hc2lkZS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2VkXCIpO1xuICAgIH1cblxuICAgIGVuZFByb2Nlc3MoKSB7XG4gICAgICAgIHRoaXMuYXNpZGUuY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcbiAgICAgICAgdGhpcy5zY2hlbWEgPSBudWxsO1xuICAgICAgICB0aGlzLm1vZGVsID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY2hlbWFQcm9jZXNzLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5zY2hlbWFQcm9jZXNzID0gbnVsbDtcbiAgICB9XG5cbiAgICBuZXdTY2hlbWEoKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSB0aGlzLnNjaGVtYVByb2Nlc3Muc2NoZW1hc1t0aGlzLnNjaGVtYVByb2Nlc3MuY3VycmVudEluZGV4XS5tb2RlbDtcbiAgICAgICAgdGhpcy5zY2hlbWEgPSB0aGlzLnNjaGVtYVByb2Nlc3Muc2NoZW1hc1t0aGlzLnNjaGVtYVByb2Nlc3MuY3VycmVudEluZGV4XS5zY2hlbWE7XG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZVBhcnNlci5wYXJzZSh0aGlzLnNjaGVtYSlcbiAgICAgICAgICAgIC50aGVuKGh0bWwgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY1ZpZXdMb2FkZXIubG9hZChodG1sLCB0aGlzLmRldGFpbHNFbGVtZW50LCB0aGlzKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8gPT4gdGhpcy5kZXRhaWxzRWxlbWVudC5zY3JvbGxUb3AgPSAwKTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuZW5kUHJvY2VzcygpO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjaGVtYVByb2Nlc3MubmV4dCgpID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJldmlvdXMoKSB7XG4gICAgICAgIHRoaXMuc2NoZW1hUHJvY2Vzcy5wcmV2aW91cygpO1xuICAgIH1cbn0iXX0=