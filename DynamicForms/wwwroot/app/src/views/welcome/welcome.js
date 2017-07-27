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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOlsiV2VsY29tZSIsImV2ZW50QWdncmVnYXRvciIsImR5bmFtaWNWaWV3TG9hZGVyIiwicm91dGVyIiwidGVtcGxhdGVQYXJzZXIiLCJhdHRhY2hlZCIsInF1ZXJ5IiwiY3VycmVudEluc3RydWN0aW9uIiwicXVlcnlQYXJhbXMiLCJmZXRjaFNlY3Rpb25zIiwibmV3U2NoZW1hSGFuZGxlciIsIm5ld1NjaGVtYSIsImJpbmQiLCJuZXdTY2hlbWFFdmVudCIsInN1YnNjcmliZSIsIm5leHRDYXB0aW9uIiwiZGV0YWNoZWQiLCJkaXNwb3NlIiwiaHR0cENsaWVudCIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIml0ZW1zIiwic2VjdGlvbnMiLCJzdGFydFByb2Nlc3MiLCJzY2hlbWFQcm9jZXNzIiwicmVzdWx0Iiwic2VsZWN0ZWRJZCIsInNvcnQiLCJhIiwiYiIsImFzaWRlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZW5kUHJvY2VzcyIsImFkZCIsInNjaGVtYSIsIm1vZGVsIiwic2NoZW1hcyIsImN1cnJlbnRJbmRleCIsInBhcnNlIiwibG9hZCIsImh0bWwiLCJkZXRhaWxzRWxlbWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvcCIsImNhbmNlbCIsIm5leHQiLCJwcmV2aW91cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBUWFBLE8sV0FBQUEsTyxXQURaLDZIO0FBU0cseUJBQVlDLGVBQVosRUFBNkJDLGlCQUE3QixFQUFnREMsTUFBaEQsRUFBd0Q7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDcEQsaUJBQUtGLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsaUJBQUtDLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFDQSxpQkFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsaUJBQUtD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QnNCLElBQW5CLE1BQTZCLEtBQWpDLEVBQXdDO0FBQ3BDLHFCQUFLRCxNQUFMO0FBQ0g7QUFDSixTOzswQkFFREUsUSx1QkFBVztBQUNQLGlCQUFLdkIsYUFBTCxDQUFtQnVCLFFBQW5CO0FBQ0gsUyIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcidcclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xyXG5pbXBvcnQge1NjaGVtYVByb2Nlc3N9IGZyb20gJy4vc2NoZW1hLXByb2Nlc3MnO1xyXG5pbXBvcnQge0R5bmFtaWNWaWV3TG9hZGVyLCBUZW1wbGF0ZVBhcnNlcn0gZnJvbSAncHJhZ21hLXZpZXdzJztcclxuXHJcbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yLCBEeW5hbWljVmlld0xvYWRlciwgUm91dGVyKVxyXG5leHBvcnQgY2xhc3MgV2VsY29tZSB7XHJcbiAgICBpdGVtcztcclxuXHJcbiAgICBAYmluZGFibGUgc2NoZW1hUHJvY2VzcztcclxuICAgIEBiaW5kYWJsZSBzZWxlY3RlZElkO1xyXG4gICAgQGJpbmRhYmxlIHNjaGVtYTtcclxuICAgIEBiaW5kYWJsZSBtb2RlbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihldmVudEFnZ3JlZ2F0b3IsIGR5bmFtaWNWaWV3TG9hZGVyLCByb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcclxuICAgICAgICB0aGlzLmR5bmFtaWNWaWV3TG9hZGVyID0gZHluYW1pY1ZpZXdMb2FkZXI7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVBhcnNlciA9IG5ldyBUZW1wbGF0ZVBhcnNlcihcIm1vZGVsXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5yb3V0ZXIuY3VycmVudEluc3RydWN0aW9uLnF1ZXJ5UGFyYW1zO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZmV0Y2hTZWN0aW9ucyhxdWVyeSk7XHJcblxyXG4gICAgICAgIHRoaXMubmV3U2NoZW1hSGFuZGxlciA9IHRoaXMubmV3U2NoZW1hLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFFdmVudCA9IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShcIm5ldy1zY2hlbWFcIiwgdGhpcy5uZXdTY2hlbWFIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLm5leHRDYXB0aW9uID0gXCJOZXh0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFFdmVudC5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFFdmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFIYW5kbGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaFNlY3Rpb25zKHF1ZXJ5KSB7XHJcbiAgICAgICAgbGV0IGh0dHBDbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xyXG5cclxuICAgICAgICBsZXQgdXJsID0gJ2FwaS9zZWN0aW9uJztcclxuXHJcbiAgICAgICAgaWYgKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHVybCA9IGAke3VybH0vcXVlcnk9JHtxdWVyeX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBodHRwQ2xpZW50LmZldGNoKCdhcGkvc2VjdGlvbicpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oc2VjdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHNlY3Rpb25zO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFByb2Nlc3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NoZW1hUHJvY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zZWxlY3RlZElkLnNvcnQoKGEsYikgPT4gYSA+IGIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2NoZW1hUHJvY2VzcyA9IG5ldyBTY2hlbWFQcm9jZXNzKHRoaXMuc2VsZWN0ZWRJZCwgdGhpcy5ldmVudEFnZ3JlZ2F0b3IpO1xyXG4gICAgICAgIHRoaXMuYXNpZGUuY2xhc3NMaXN0LnJlbW92ZShcImNsb3NlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmRQcm9jZXNzKCkge1xyXG4gICAgICAgIHRoaXMuYXNpZGUuY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcclxuICAgICAgICB0aGlzLnNjaGVtYSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zY2hlbWFQcm9jZXNzLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld1NjaGVtYSgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5zY2hlbWFQcm9jZXNzLnNjaGVtYXNbdGhpcy5zY2hlbWFQcm9jZXNzLmN1cnJlbnRJbmRleF0ubW9kZWw7XHJcbiAgICAgICAgdGhpcy5zY2hlbWEgPSB0aGlzLnNjaGVtYVByb2Nlc3Muc2NoZW1hc1t0aGlzLnNjaGVtYVByb2Nlc3MuY3VycmVudEluZGV4XS5zY2hlbWE7XHJcblxyXG4gICAgICAgIHRoaXMudGVtcGxhdGVQYXJzZXIucGFyc2UodGhpcy5zY2hlbWEpXHJcbiAgICAgICAgICAgIC50aGVuKGh0bWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5keW5hbWljVmlld0xvYWRlci5sb2FkKGh0bWwsIHRoaXMuZGV0YWlsc0VsZW1lbnQsIHRoaXMpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXyA9PiB0aGlzLmRldGFpbHNFbGVtZW50LnNjcm9sbFRvcCA9IDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLmVuZFByb2Nlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNjaGVtYVByb2Nlc3MubmV4dCgpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZW1hUHJvY2Vzcy5wcmV2aW91cygpO1xyXG4gICAgfVxyXG59Il19