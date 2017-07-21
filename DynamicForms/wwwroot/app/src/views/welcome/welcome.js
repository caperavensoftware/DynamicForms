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

            _initDefineProp(this, 'schema', _descriptor3, this);

            _initDefineProp(this, 'model', _descriptor4, this);

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

            var result = this.selectedId.sort(function (a, b) {
                return a > b;
            });
            console.log(result);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOlsiV2VsY29tZSIsImV2ZW50QWdncmVnYXRvciIsImR5bmFtaWNWaWV3TG9hZGVyIiwidGVtcGxhdGVQYXJzZXIiLCJhdHRhY2hlZCIsImZldGNoU2VjdGlvbnMiLCJuZXdTY2hlbWFIYW5kbGVyIiwibmV3U2NoZW1hIiwiYmluZCIsIm5ld1NjaGVtYUV2ZW50Iiwic3Vic2NyaWJlIiwibmV4dENhcHRpb24iLCJkZXRhY2hlZCIsImRpc3Bvc2UiLCJodHRwQ2xpZW50IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiaXRlbXMiLCJzZWN0aW9ucyIsInN0YXJ0UHJvY2VzcyIsInNjaGVtYVByb2Nlc3MiLCJyZXN1bHQiLCJzZWxlY3RlZElkIiwic29ydCIsImEiLCJiIiwiY29uc29sZSIsImxvZyIsImFzaWRlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZW5kUHJvY2VzcyIsImFkZCIsInNjaGVtYSIsIm1vZGVsIiwic2NoZW1hcyIsImN1cnJlbnRJbmRleCIsInBhcnNlIiwibG9hZCIsImh0bWwiLCJkZXRhaWxzRWxlbWVudCIsImNhbmNlbCIsIm5leHQiLCJwcmV2aW91cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBT2FBLE8sV0FBQUEsTyxXQURaLHNHO0FBU0cseUJBQVlDLGVBQVosRUFBNkJDLGlCQUE3QixFQUFnREMsY0FBaEQsRUFBZ0U7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDNUQsaUJBQUtGLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsaUJBQUtDLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFDQSxpQkFBS0MsY0FBTCxHQUFzQixnQ0FBbUIsT0FBbkIsQ0FBdEI7QUFDSDs7MEJBRURDLFEsdUJBQVc7QUFDUCxpQkFBS0MsYUFBTDs7QUFFQSxpQkFBS0MsZ0JBQUwsR0FBd0IsS0FBS0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQXhCO0FBQ0EsaUJBQUtDLGNBQUwsR0FBc0IsS0FBS1IsZUFBTCxDQUFxQlMsU0FBckIsQ0FBK0IsWUFBL0IsRUFBNkMsS0FBS0osZ0JBQWxELENBQXRCO0FBQ0EsaUJBQUtLLFdBQUwsR0FBbUIsTUFBbkI7QUFDSCxTOzswQkFFREMsUSx1QkFBVztBQUNQLGlCQUFLSCxjQUFMLENBQW9CSSxPQUFwQjtBQUNBLGlCQUFLSixjQUFMLEdBQXNCLElBQXRCO0FBQ0EsaUJBQUtILGdCQUFMLEdBQXdCLElBQXhCO0FBQ0EsaUJBQUtILGNBQUwsQ0FBb0JVLE9BQXBCO0FBQ0EsaUJBQUtWLGNBQUwsR0FBc0IsSUFBdEI7QUFDSCxTOzswQkFFREUsYSw0QkFBZ0I7QUFBQTs7QUFDWixnQkFBSVMsYUFBYSxvQ0FBakI7O0FBRUFBLHVCQUFXQyxLQUFYLENBQWlCLGFBQWpCLEVBQ0tDLElBREwsQ0FDVTtBQUFBLHVCQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxhQURWLEVBRUtGLElBRkwsQ0FFVSxvQkFBWTtBQUNkLHNCQUFLRyxLQUFMLEdBQWFDLFFBQWI7QUFDSCxhQUpMO0FBS0gsUzs7MEJBRURDLFksMkJBQWU7QUFDWCxnQkFBSSxLQUFLQyxhQUFULEVBQXdCO0FBQ3BCLHFCQUFLQSxhQUFMLENBQW1CVCxPQUFuQjtBQUNIOztBQUVELGdCQUFNVSxTQUFTLEtBQUtDLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLFVBQUNDLENBQUQsRUFBR0MsQ0FBSDtBQUFBLHVCQUFTRCxJQUFJQyxDQUFiO0FBQUEsYUFBckIsQ0FBZjtBQUNBQyxvQkFBUUMsR0FBUixDQUFZTixNQUFaOztBQUVBLGlCQUFLRCxhQUFMLEdBQXFCLGlDQUFrQixLQUFLRSxVQUF2QixFQUFtQyxLQUFLdkIsZUFBeEMsQ0FBckI7QUFDQSxpQkFBSzZCLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsTUFBckIsQ0FBNEIsUUFBNUI7QUFDSCxTOzswQkFFREMsVSx5QkFBYTtBQUNULGlCQUFLSCxLQUFMLENBQVdDLFNBQVgsQ0FBcUJHLEdBQXJCLENBQXlCLFFBQXpCO0FBQ0EsaUJBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsaUJBQUtDLEtBQUwsR0FBYSxJQUFiO0FBQ0EsaUJBQUtkLGFBQUwsQ0FBbUJULE9BQW5CO0FBQ0EsaUJBQUtTLGFBQUwsR0FBcUIsSUFBckI7QUFDSCxTOzswQkFFRGYsUyx3QkFBWTtBQUFBOztBQUNSLGlCQUFLNkIsS0FBTCxHQUFhLEtBQUtkLGFBQUwsQ0FBbUJlLE9BQW5CLENBQTJCLEtBQUtmLGFBQUwsQ0FBbUJnQixZQUE5QyxFQUE0REYsS0FBekU7QUFDQSxpQkFBS0QsTUFBTCxHQUFjLEtBQUtiLGFBQUwsQ0FBbUJlLE9BQW5CLENBQTJCLEtBQUtmLGFBQUwsQ0FBbUJnQixZQUE5QyxFQUE0REgsTUFBMUU7O0FBRUEsaUJBQUtoQyxjQUFMLENBQW9Cb0MsS0FBcEIsQ0FBMEIsS0FBS0osTUFBL0IsRUFDS25CLElBREwsQ0FDVSxnQkFBUTtBQUNWLHVCQUFLZCxpQkFBTCxDQUF1QnNDLElBQXZCLENBQTRCQyxJQUE1QixFQUFrQyxPQUFLQyxjQUF2QztBQUNILGFBSEw7QUFJSCxTOzswQkFFREMsTSxxQkFBUztBQUNMLGlCQUFLVixVQUFMO0FBQ0gsUzs7MEJBRURXLEksbUJBQU87QUFDSCxnQkFBSSxLQUFLdEIsYUFBTCxDQUFtQnNCLElBQW5CLE1BQTZCLEtBQWpDLEVBQXdDO0FBQ3BDLHFCQUFLRCxNQUFMO0FBQ0g7QUFDSixTOzswQkFFREUsUSx1QkFBVztBQUNQLGlCQUFLdkIsYUFBTCxDQUFtQnVCLFFBQW5CO0FBQ0gsUyIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuaW1wb3J0IHtTY2hlbWFQcm9jZXNzfSBmcm9tICcuL3NjaGVtYS1wcm9jZXNzJztcbmltcG9ydCB7RHluYW1pY1ZpZXdMb2FkZXIsIFRlbXBsYXRlUGFyc2VyfSBmcm9tICdwcmFnbWEtdmlld3MnO1xuXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvciwgRHluYW1pY1ZpZXdMb2FkZXIpXG5leHBvcnQgY2xhc3MgV2VsY29tZSB7XG4gICAgaXRlbXM7XG5cbiAgICBAYmluZGFibGUgc2NoZW1hUHJvY2VzcztcbiAgICBAYmluZGFibGUgc2VsZWN0ZWRJZDtcbiAgICBAYmluZGFibGUgc2NoZW1hO1xuICAgIEBiaW5kYWJsZSBtb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKGV2ZW50QWdncmVnYXRvciwgZHluYW1pY1ZpZXdMb2FkZXIsIHRlbXBsYXRlUGFyc2VyKSB7XG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xuICAgICAgICB0aGlzLmR5bmFtaWNWaWV3TG9hZGVyID0gZHluYW1pY1ZpZXdMb2FkZXI7XG4gICAgICAgIHRoaXMudGVtcGxhdGVQYXJzZXIgPSBuZXcgVGVtcGxhdGVQYXJzZXIoXCJtb2RlbFwiKTtcbiAgICB9XG5cbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaFNlY3Rpb25zKCk7XG5cbiAgICAgICAgdGhpcy5uZXdTY2hlbWFIYW5kbGVyID0gdGhpcy5uZXdTY2hlbWEuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFFdmVudCA9IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShcIm5ldy1zY2hlbWFcIiwgdGhpcy5uZXdTY2hlbWFIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5uZXh0Q2FwdGlvbiA9IFwiTmV4dFwiO1xuICAgIH1cblxuICAgIGRldGFjaGVkKCkge1xuICAgICAgICB0aGlzLm5ld1NjaGVtYUV2ZW50LmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFFdmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMubmV3U2NoZW1hSGFuZGxlciA9IG51bGw7XG4gICAgICAgIHRoaXMudGVtcGxhdGVQYXJzZXIuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyID0gbnVsbDtcbiAgICB9XG5cbiAgICBmZXRjaFNlY3Rpb25zKCkge1xuICAgICAgICBsZXQgaHR0cENsaWVudCA9IG5ldyBIdHRwQ2xpZW50KCk7XG5cbiAgICAgICAgaHR0cENsaWVudC5mZXRjaCgnYXBpL3NlY3Rpb24nKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oc2VjdGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBzZWN0aW9ucztcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXJ0UHJvY2VzcygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2NoZW1hUHJvY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5zY2hlbWFQcm9jZXNzLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2VsZWN0ZWRJZC5zb3J0KChhLGIpID0+IGEgPiBiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2NoZW1hUHJvY2VzcyA9IG5ldyBTY2hlbWFQcm9jZXNzKHRoaXMuc2VsZWN0ZWRJZCwgdGhpcy5ldmVudEFnZ3JlZ2F0b3IpO1xuICAgICAgICB0aGlzLmFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZWRcIik7XG4gICAgfVxuXG4gICAgZW5kUHJvY2VzcygpIHtcbiAgICAgICAgdGhpcy5hc2lkZS5jbGFzc0xpc3QuYWRkKFwiY2xvc2VkXCIpO1xuICAgICAgICB0aGlzLnNjaGVtYSA9IG51bGw7XG4gICAgICAgIHRoaXMubW9kZWwgPSBudWxsO1xuICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MgPSBudWxsO1xuICAgIH1cblxuICAgIG5ld1NjaGVtYSgpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuc2NoZW1hUHJvY2Vzcy5zY2hlbWFzW3RoaXMuc2NoZW1hUHJvY2Vzcy5jdXJyZW50SW5kZXhdLm1vZGVsO1xuICAgICAgICB0aGlzLnNjaGVtYSA9IHRoaXMuc2NoZW1hUHJvY2Vzcy5zY2hlbWFzW3RoaXMuc2NoZW1hUHJvY2Vzcy5jdXJyZW50SW5kZXhdLnNjaGVtYTtcblxuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyLnBhcnNlKHRoaXMuc2NoZW1hKVxuICAgICAgICAgICAgLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5keW5hbWljVmlld0xvYWRlci5sb2FkKGh0bWwsIHRoaXMuZGV0YWlsc0VsZW1lbnQsIHRoaXMpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuZW5kUHJvY2VzcygpO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjaGVtYVByb2Nlc3MubmV4dCgpID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJldmlvdXMoKSB7XG4gICAgICAgIHRoaXMuc2NoZW1hUHJvY2Vzcy5wcmV2aW91cygpO1xuICAgIH1cbn0iXX0=