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

    var Welcome = exports.Welcome = (_dec = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator, _pragmaViews.DynamicViewLoader, _aureliaRouter.Router, _aureliaFramework.ObserverLocator), _dec(_class = (_class2 = function () {
        function Welcome(eventAggregator, dynamicViewLoader, router, observerLocator) {
            _classCallCheck(this, Welcome);

            _initDefineProp(this, 'schemaProcess', _descriptor, this);

            _initDefineProp(this, 'selectedId', _descriptor2, this);

            _initDefineProp(this, 'schema', _descriptor3, this);

            _initDefineProp(this, 'model', _descriptor4, this);

            this.eventAggregator = eventAggregator;
            this.dynamicViewLoader = dynamicViewLoader;
            this.router = router;
            this.observerLocator = observerLocator;
            this.templateParser = new _pragmaViews.TemplateParser("model");
        }

        Welcome.prototype.attached = function attached() {
            var query = this.router.currentInstruction.queryString;

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

            if ((query || "").length > 0) {
                url = url + '?' + query;
            }

            httpClient.fetch(url).then(function (response) {
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

            this.schemaProcess = new _schemaProcess.SchemaProcess(this.selectedId, this.eventAggregator, this.observerLocator);
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

            if (this.model) {
                this.schemaProcess.disposeModel(this.model);
            }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOlsiV2VsY29tZSIsImV2ZW50QWdncmVnYXRvciIsImR5bmFtaWNWaWV3TG9hZGVyIiwicm91dGVyIiwib2JzZXJ2ZXJMb2NhdG9yIiwidGVtcGxhdGVQYXJzZXIiLCJhdHRhY2hlZCIsInF1ZXJ5IiwiY3VycmVudEluc3RydWN0aW9uIiwicXVlcnlTdHJpbmciLCJmZXRjaFNlY3Rpb25zIiwibmV3U2NoZW1hSGFuZGxlciIsIm5ld1NjaGVtYSIsImJpbmQiLCJuZXdTY2hlbWFFdmVudCIsInN1YnNjcmliZSIsIm5leHRDYXB0aW9uIiwiZGV0YWNoZWQiLCJkaXNwb3NlIiwiaHR0cENsaWVudCIsInVybCIsImxlbmd0aCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIml0ZW1zIiwic2VjdGlvbnMiLCJzdGFydFByb2Nlc3MiLCJzY2hlbWFQcm9jZXNzIiwicmVzdWx0Iiwic2VsZWN0ZWRJZCIsInNvcnQiLCJhIiwiYiIsImFzaWRlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZW5kUHJvY2VzcyIsImFkZCIsInNjaGVtYSIsIm1vZGVsIiwiZGlzcG9zZU1vZGVsIiwic2NoZW1hcyIsImN1cnJlbnRJbmRleCIsInBhcnNlIiwibG9hZCIsImh0bWwiLCJkZXRhaWxzRWxlbWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvcCIsImNhbmNlbCIsIm5leHQiLCJwcmV2aW91cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBU2FBLE8sV0FBQUEsTyxXQURaLGdLO0FBU0cseUJBQVlDLGVBQVosRUFBNkJDLGlCQUE3QixFQUFnREMsTUFBaEQsRUFBd0RDLGVBQXhELEVBQXlFO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ3JFLGlCQUFLSCxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLGlCQUFLQyxpQkFB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LGlCQUFMLENBQXVCNEMsSUFBdkIsQ0FBNEJDLElBQTVCLEVBQWtDLE9BQUtDLGNBQXZDO0FBQ0gsYUFITDs7QUFLQUMsa0NBQXNCO0FBQUEsdUJBQUssT0FBS0QsY0FBTCxDQUFvQkUsU0FBcEIsR0FBZ0MsQ0FBckM7QUFBQSxhQUF0QjtBQUNILFM7OzBCQUVEQyxNLHFCQUFTO0FBQ0wsaUJBQUtiLFVBQUw7QUFDSCxTOzswQkFFRGMsSSxtQkFBTztBQUNILGdCQUFJLEtBQUt2QixhQUFMLENBQW1CdUIsSUFBbkIsTUFBNkIsS0FBakMsRUFBd0M7QUFDcEMscUJBQUtELE1BQUw7QUFDSDtBQUNKLFM7OzBCQUVERSxRLHVCQUFXO0FBQ1AsaUJBQUt4QixhQUFMLENBQW1Cd0IsUUFBbkI7QUFDSCxTIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJ1xyXG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcbmltcG9ydCB7U2NoZW1hUHJvY2Vzc30gZnJvbSAnLi9zY2hlbWEtcHJvY2Vzcyc7XHJcbmltcG9ydCB7RHluYW1pY1ZpZXdMb2FkZXIsIFRlbXBsYXRlUGFyc2VyfSBmcm9tICdwcmFnbWEtdmlld3MnO1xyXG5pbXBvcnQge09ic2VydmVyTG9jYXRvcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IsIER5bmFtaWNWaWV3TG9hZGVyLCBSb3V0ZXIsIE9ic2VydmVyTG9jYXRvcilcclxuZXhwb3J0IGNsYXNzIFdlbGNvbWUge1xyXG4gICAgaXRlbXM7XHJcblxyXG4gICAgQGJpbmRhYmxlIHNjaGVtYVByb2Nlc3M7XHJcbiAgICBAYmluZGFibGUgc2VsZWN0ZWRJZDtcclxuICAgIEBiaW5kYWJsZSBzY2hlbWE7XHJcbiAgICBAYmluZGFibGUgbW9kZWw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yLCBkeW5hbWljVmlld0xvYWRlciwgcm91dGVyLCBvYnNlcnZlckxvY2F0b3IpIHtcclxuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcclxuICAgICAgICB0aGlzLmR5bmFtaWNWaWV3TG9hZGVyID0gZHluYW1pY1ZpZXdMb2FkZXI7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlckxvY2F0b3IgPSBvYnNlcnZlckxvY2F0b3I7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVBhcnNlciA9IG5ldyBUZW1wbGF0ZVBhcnNlcihcIm1vZGVsXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5yb3V0ZXIuY3VycmVudEluc3RydWN0aW9uLnF1ZXJ5U3RyaW5nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZmV0Y2hTZWN0aW9ucyhxdWVyeSk7XHJcblxyXG4gICAgICAgIHRoaXMubmV3U2NoZW1hSGFuZGxlciA9IHRoaXMubmV3U2NoZW1hLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFFdmVudCA9IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShcIm5ldy1zY2hlbWFcIiwgdGhpcy5uZXdTY2hlbWFIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLm5leHRDYXB0aW9uID0gXCJOZXh0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFFdmVudC5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFFdmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFIYW5kbGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaFNlY3Rpb25zKHF1ZXJ5KSB7XHJcbiAgICAgICAgbGV0IGh0dHBDbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xyXG4gICAgICAgIGxldCB1cmwgPSAnYXBpL3NlY3Rpb24nO1xyXG5cclxuICAgICAgICBpZiAoKHF1ZXJ5IHx8IFwiXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgJz8nICsgcXVlcnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGh0dHBDbGllbnQuZmV0Y2godXJsKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oc2VjdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHNlY3Rpb25zO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFByb2Nlc3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NoZW1hUHJvY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zZWxlY3RlZElkLnNvcnQoKGEsYikgPT4gYSA+IGIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2NoZW1hUHJvY2VzcyA9IG5ldyBTY2hlbWFQcm9jZXNzKHRoaXMuc2VsZWN0ZWRJZCwgdGhpcy5ldmVudEFnZ3JlZ2F0b3IsIHRoaXMub2JzZXJ2ZXJMb2NhdG9yKTtcclxuICAgICAgICB0aGlzLmFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZW5kUHJvY2VzcygpIHtcclxuICAgICAgICB0aGlzLmFzaWRlLmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XHJcbiAgICAgICAgdGhpcy5zY2hlbWEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2NoZW1hUHJvY2Vzcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlbWFQcm9jZXNzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBuZXdTY2hlbWEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlbWFQcm9jZXNzLmRpc3Bvc2VNb2RlbCh0aGlzLm1vZGVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuc2NoZW1hUHJvY2Vzcy5zY2hlbWFzW3RoaXMuc2NoZW1hUHJvY2Vzcy5jdXJyZW50SW5kZXhdLm1vZGVsO1xyXG4gICAgICAgIHRoaXMuc2NoZW1hID0gdGhpcy5zY2hlbWFQcm9jZXNzLnNjaGVtYXNbdGhpcy5zY2hlbWFQcm9jZXNzLmN1cnJlbnRJbmRleF0uc2NoZW1hO1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyLnBhcnNlKHRoaXMuc2NoZW1hKVxyXG4gICAgICAgICAgICAudGhlbihodG1sID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY1ZpZXdMb2FkZXIubG9hZChodG1sLCB0aGlzLmRldGFpbHNFbGVtZW50LCB0aGlzKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8gPT4gdGhpcy5kZXRhaWxzRWxlbWVudC5zY3JvbGxUb3AgPSAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5lbmRQcm9jZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zY2hlbWFQcm9jZXNzLm5leHQoKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91cygpIHtcclxuICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MucHJldmlvdXMoKTtcclxuICAgIH1cclxufSJdfQ==