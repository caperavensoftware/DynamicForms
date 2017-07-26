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
            var params = this.router.currentInstruction.params;
            console.log(params);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOlsiV2VsY29tZSIsImV2ZW50QWdncmVnYXRvciIsImR5bmFtaWNWaWV3TG9hZGVyIiwicm91dGVyIiwidGVtcGxhdGVQYXJzZXIiLCJhdHRhY2hlZCIsInBhcmFtcyIsImN1cnJlbnRJbnN0cnVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFNlY3Rpb25zIiwibmV3U2NoZW1hSGFuZGxlciIsIm5ld1NjaGVtYSIsImJpbmQiLCJuZXdTY2hlbWFFdmVudCIsInN1YnNjcmliZSIsIm5leHRDYXB0aW9uIiwiZGV0YWNoZWQiLCJkaXNwb3NlIiwiaHR0cENsaWVudCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIml0ZW1zIiwic2VjdGlvbnMiLCJzdGFydFByb2Nlc3MiLCJzY2hlbWFQcm9jZXNzIiwicmVzdWx0Iiwic2VsZWN0ZWRJZCIsInNvcnQiLCJhIiwiYiIsImFzaWRlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZW5kUHJvY2VzcyIsImFkZCIsInNjaGVtYSIsIm1vZGVsIiwic2NoZW1hcyIsImN1cnJlbnRJbmRleCIsInBhcnNlIiwibG9hZCIsImh0bWwiLCJkZXRhaWxzRWxlbWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvcCIsImNhbmNlbCIsIm5leHQiLCJwcmV2aW91cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBUWFBLE8sV0FBQUEsTyxXQURaLDZIO0FBU0cseUJBQVlDLGVBQVosRUFBNkJDLGlCQUE3QixFQUFnREMsTUFBaEQsRUFBd0Q7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDcEQsaUJBQUtGLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsaUJBQUtDLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFDQSxpQkFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsaUJBQUtDLGNB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LGlCQUFLdkIsYUFBTCxDQUFtQnVCLFFBQW5CO0FBQ0gsUyIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInXG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuaW1wb3J0IHtTY2hlbWFQcm9jZXNzfSBmcm9tICcuL3NjaGVtYS1wcm9jZXNzJztcbmltcG9ydCB7RHluYW1pY1ZpZXdMb2FkZXIsIFRlbXBsYXRlUGFyc2VyfSBmcm9tICdwcmFnbWEtdmlld3MnO1xuXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvciwgRHluYW1pY1ZpZXdMb2FkZXIsIFJvdXRlcilcbmV4cG9ydCBjbGFzcyBXZWxjb21lIHtcbiAgICBpdGVtcztcblxuICAgIEBiaW5kYWJsZSBzY2hlbWFQcm9jZXNzO1xuICAgIEBiaW5kYWJsZSBzZWxlY3RlZElkO1xuICAgIEBiaW5kYWJsZSBzY2hlbWE7XG4gICAgQGJpbmRhYmxlIG1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yLCBkeW5hbWljVmlld0xvYWRlciwgcm91dGVyKSB7XG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xuICAgICAgICB0aGlzLmR5bmFtaWNWaWV3TG9hZGVyID0gZHluYW1pY1ZpZXdMb2FkZXI7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyID0gbmV3IFRlbXBsYXRlUGFyc2VyKFwibW9kZWxcIik7XG4gICAgfVxuXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMucm91dGVyLmN1cnJlbnRJbnN0cnVjdGlvbi5wYXJhbXM7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZldGNoU2VjdGlvbnMoKTtcblxuICAgICAgICB0aGlzLm5ld1NjaGVtYUhhbmRsZXIgPSB0aGlzLm5ld1NjaGVtYS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5ld1NjaGVtYUV2ZW50ID0gdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKFwibmV3LXNjaGVtYVwiLCB0aGlzLm5ld1NjaGVtYUhhbmRsZXIpO1xuICAgICAgICB0aGlzLm5leHRDYXB0aW9uID0gXCJOZXh0XCI7XG4gICAgfVxuXG4gICAgZGV0YWNoZWQoKSB7XG4gICAgICAgIHRoaXMubmV3U2NoZW1hRXZlbnQuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLm5ld1NjaGVtYUV2ZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVBhcnNlci5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMudGVtcGxhdGVQYXJzZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGZldGNoU2VjdGlvbnMoKSB7XG4gICAgICAgIGxldCBodHRwQ2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcblxuICAgICAgICBodHRwQ2xpZW50LmZldGNoKCdhcGkvc2VjdGlvbicpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihzZWN0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHNlY3Rpb25zO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnRQcm9jZXNzKCkge1xuICAgICAgICBpZiAodGhpcy5zY2hlbWFQcm9jZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MuZGlzcG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zZWxlY3RlZElkLnNvcnQoKGEsYikgPT4gYSA+IGIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zY2hlbWFQcm9jZXNzID0gbmV3IFNjaGVtYVByb2Nlc3ModGhpcy5zZWxlY3RlZElkLCB0aGlzLmV2ZW50QWdncmVnYXRvcik7XG4gICAgICAgIHRoaXMuYXNpZGUuY2xhc3NMaXN0LnJlbW92ZShcImNsb3NlZFwiKTtcbiAgICB9XG5cbiAgICBlbmRQcm9jZXNzKCkge1xuICAgICAgICB0aGlzLmFzaWRlLmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XG4gICAgICAgIHRoaXMuc2NoZW1hID0gbnVsbDtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NoZW1hUHJvY2Vzcy5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuc2NoZW1hUHJvY2VzcyA9IG51bGw7XG4gICAgfVxuXG4gICAgbmV3U2NoZW1hKCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5zY2hlbWFQcm9jZXNzLnNjaGVtYXNbdGhpcy5zY2hlbWFQcm9jZXNzLmN1cnJlbnRJbmRleF0ubW9kZWw7XG4gICAgICAgIHRoaXMuc2NoZW1hID0gdGhpcy5zY2hlbWFQcm9jZXNzLnNjaGVtYXNbdGhpcy5zY2hlbWFQcm9jZXNzLmN1cnJlbnRJbmRleF0uc2NoZW1hO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGVQYXJzZXIucGFyc2UodGhpcy5zY2hlbWEpXG4gICAgICAgICAgICAudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmR5bmFtaWNWaWV3TG9hZGVyLmxvYWQoaHRtbCwgdGhpcy5kZXRhaWxzRWxlbWVudCwgdGhpcylcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShfID0+IHRoaXMuZGV0YWlsc0VsZW1lbnQuc2Nyb2xsVG9wID0gMCk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLmVuZFByb2Nlc3MoKTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5zY2hlbWFQcm9jZXNzLm5leHQoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByZXZpb3VzKCkge1xuICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MucHJldmlvdXMoKTtcbiAgICB9XG59Il19