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

    var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

    var Welcome = exports.Welcome = (_dec = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator, _pragmaViews.DynamicViewLoader), _dec(_class = (_class2 = function () {
        function Welcome(eventAggregator, dynamicViewLoader, templateParser) {
            _classCallCheck(this, Welcome);

            _initDefineProp(this, 'selectedId', _descriptor, this);

            _initDefineProp(this, 'currentSchema', _descriptor2, this);

            _initDefineProp(this, 'currentModel', _descriptor3, this);

            this.eventAggregator = eventAggregator;
            this.dynamicViewLoader = dynamicViewLoader;
            this.templateParser = new _pragmaViews.TemplateParser("model");
        }

        Welcome.prototype.attached = function attached() {
            this.fetchSections();

            this.newSchemaHandler = this.newSchema.bind(this);
            this.newSchemaEvent = this.eventAggregator.subscribe("new-schema", this.newSchemaHandler);
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
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'selectedId', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'currentSchema', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'currentModel', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOlsiV2VsY29tZSIsImV2ZW50QWdncmVnYXRvciIsImR5bmFtaWNWaWV3TG9hZGVyIiwidGVtcGxhdGVQYXJzZXIiLCJhdHRhY2hlZCIsImZldGNoU2VjdGlvbnMiLCJuZXdTY2hlbWFIYW5kbGVyIiwibmV3U2NoZW1hIiwiYmluZCIsIm5ld1NjaGVtYUV2ZW50Iiwic3Vic2NyaWJlIiwiZGV0YWNoZWQiLCJkaXNwb3NlIiwiaHR0cENsaWVudCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIml0ZW1zIiwic2VjdGlvbnMiLCJzdGFydFByb2Nlc3MiLCJzY2hlbWFQcm9jZXNzIiwic2VsZWN0ZWRJZCIsImFzaWRlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZW5kUHJvY2VzcyIsImFkZCIsImN1cnJlbnRTY2hlbWEiLCJjdXJyZW50TW9kZWwiLCJldmVudCIsIm1vZGVsIiwic2NoZW1hIiwicGFyc2UiLCJsb2FkIiwiaHRtbCIsImRldGFpbHNFbGVtZW50IiwiY2FuY2VsIiwibmV4dCIsInByZXZpb3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFPYUEsTyxXQUFBQSxPLFdBRFosc0c7QUFTRyx5QkFBWUMsZUFBWixFQUE2QkMsaUJBQTdCLEVBQWdEQyxjQUFoRCxFQUFnRTtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUM1RCxpQkFBS0YsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxpQkFBS0MsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUNBLGlCQUFLQyxjQUFMLEdBQXNCLGdDQUFtQixPQUFuQixDQUF0QjtBQUNIOzswQkFFREMsUSx1QkFBVztBQUNQLGlCQUFLQyxhQUFMOztBQUVBLGlCQUFLQyxnQkFBTCxHQUF3QixLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBeEI7QUFDQSxpQkFBS0MsY0FBTCxHQUFzQixLQUFLUixlQUFMLENBQXFCUyxTQUFyQixDQUErQixZQUEvQixFQUE2QyxLQUFLSixnQkFBbEQsQ0FBdEI7QUFDSCxTOzswQkFFREssUSx1QkFBVztBQUNQLGlCQUFLRixjQUFMLENBQW9CRyxPQUFwQjtBQUNBLGlCQUFLSCxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsaUJBQUtILGdCQUFMLEdBQXdCLElBQXhCO0FBQ0EsaUJBQUtILGNBQUwsQ0FBb0JTLE9BQXBCO0FBQ0EsaUJBQUtULGNBQUwsR0FBc0IsSUFBdEI7QUFDSCxTOzswQkFFREUsYSw0QkFBZ0I7QUFBQTs7QUFDWixnQkFBSVEsYUFBYSxvQ0FBakI7O0FBRUFBLHVCQUFXQyxLQUFYLENBQWlCLGFBQWpCLEVBQ0tDLElBREwsQ0FDVTtBQUFBLHVCQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxhQURWLEVBRUtGLElBRkwsQ0FFVSxvQkFBWTtBQUNkLHNCQUFLRyxLQUFMLEdBQWFDLFFBQWI7QUFDSCxhQUpMO0FBS0gsUzs7MEJBRURDLFksMkJBQWU7QUFDWCxnQkFBSSxLQUFLQyxhQUFULEVBQXdCO0FBQ3BCLHFCQUFLQSxhQUFMLENBQW1CVCxPQUFuQjtBQUNIOztBQUVELGlCQUFLUyxhQUFMLEdBQXFCLGlDQUFrQixLQUFLQyxVQUF2QixFQUFtQyxLQUFLckIsZUFBeEMsQ0FBckI7QUFDQSxpQkFBS3NCLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsTUFBckIsQ0FBNEIsUUFBNUI7QUFDSCxTOzswQkFFREMsVSx5QkFBYTtBQUNULGlCQUFLSCxLQUFMLENBQVdDLFNBQVgsQ0FBcUJHLEdBQXJCLENBQXlCLFFBQXpCO0FBQ0EsaUJBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxpQkFBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNBLGlCQUFLUixhQUFMLENBQW1CVCxPQUFuQjtBQUNBLGlCQUFLUyxhQUFMLEdBQXFCLElBQXJCO0FBQ0gsUzs7MEJBRURkLFMsc0JBQVV1QixLLEVBQU87QUFBQTs7QUFDYixpQkFBS0QsWUFBTCxHQUFvQkMsTUFBTUMsS0FBMUI7QUFDQSxpQkFBS0gsYUFBTCxHQUFxQkUsTUFBTUUsTUFBM0I7O0FBRUEsaUJBQUs3QixjQUFMLENBQW9COEIsS0FBcEIsQ0FBMEIsS0FBS0wsYUFBL0IsRUFDS2IsSUFETCxDQUNVLGdCQUFRO0FBQ1YsdUJBQUtiLGlCQUFMLENBQXVCZ0MsSUFBdkIsQ0FBNEJDLElBQTVCLEVBQWtDLE9BQUtDLGNBQXZDO0FBQ0gsYUFITDtBQUlILFM7OzBCQUVEQyxNLHFCQUFTO0FBQ0wsaUJBQUtYLFVBQUw7QUFDSCxTOzswQkFFRFksSSxtQkFBTztBQUNILGlCQUFLakIsYUFBTCxDQUFtQmlCLElBQW5CO0FBQ0gsUzs7MEJBRURDLFEsdUJBQVc7QUFDUCxpQkFBS2xCLGFBQUwsQ0FBbUJrQixRQUFuQjtBQUNILFMiLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcbmltcG9ydCB7U2NoZW1hUHJvY2Vzc30gZnJvbSAnLi9zY2hlbWEtcHJvY2Vzcyc7XG5pbXBvcnQge0R5bmFtaWNWaWV3TG9hZGVyLCBUZW1wbGF0ZVBhcnNlcn0gZnJvbSAncHJhZ21hLXZpZXdzJztcblxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IsIER5bmFtaWNWaWV3TG9hZGVyKVxuZXhwb3J0IGNsYXNzIFdlbGNvbWUge1xuICAgIGl0ZW1zO1xuICAgIHNjaGVtYVByb2Nlc3M7XG5cbiAgICBAYmluZGFibGUgc2VsZWN0ZWRJZDtcbiAgICBAYmluZGFibGUgY3VycmVudFNjaGVtYTtcbiAgICBAYmluZGFibGUgY3VycmVudE1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yLCBkeW5hbWljVmlld0xvYWRlciwgdGVtcGxhdGVQYXJzZXIpIHtcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBldmVudEFnZ3JlZ2F0b3I7XG4gICAgICAgIHRoaXMuZHluYW1pY1ZpZXdMb2FkZXIgPSBkeW5hbWljVmlld0xvYWRlcjtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVBhcnNlciA9IG5ldyBUZW1wbGF0ZVBhcnNlcihcIm1vZGVsXCIpO1xuICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICB0aGlzLmZldGNoU2VjdGlvbnMoKTtcblxuICAgICAgICB0aGlzLm5ld1NjaGVtYUhhbmRsZXIgPSB0aGlzLm5ld1NjaGVtYS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5ld1NjaGVtYUV2ZW50ID0gdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKFwibmV3LXNjaGVtYVwiLCB0aGlzLm5ld1NjaGVtYUhhbmRsZXIpO1xuICAgIH1cblxuICAgIGRldGFjaGVkKCkge1xuICAgICAgICB0aGlzLm5ld1NjaGVtYUV2ZW50LmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFFdmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMubmV3U2NoZW1hSGFuZGxlciA9IG51bGw7XG4gICAgICAgIHRoaXMudGVtcGxhdGVQYXJzZXIuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyID0gbnVsbDtcbiAgICB9XG5cbiAgICBmZXRjaFNlY3Rpb25zKCkge1xuICAgICAgICBsZXQgaHR0cENsaWVudCA9IG5ldyBIdHRwQ2xpZW50KCk7XG5cbiAgICAgICAgaHR0cENsaWVudC5mZXRjaCgnYXBpL3NlY3Rpb24nKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oc2VjdGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBzZWN0aW9ucztcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXJ0UHJvY2VzcygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2NoZW1hUHJvY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5zY2hlbWFQcm9jZXNzLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NoZW1hUHJvY2VzcyA9IG5ldyBTY2hlbWFQcm9jZXNzKHRoaXMuc2VsZWN0ZWRJZCwgdGhpcy5ldmVudEFnZ3JlZ2F0b3IpO1xuICAgICAgICB0aGlzLmFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZWRcIik7XG4gICAgfVxuXG4gICAgZW5kUHJvY2VzcygpIHtcbiAgICAgICAgdGhpcy5hc2lkZS5jbGFzc0xpc3QuYWRkKFwiY2xvc2VkXCIpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2hlbWEgPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnRNb2RlbCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NoZW1hUHJvY2Vzcy5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuc2NoZW1hUHJvY2VzcyA9IG51bGw7XG4gICAgfVxuXG4gICAgbmV3U2NoZW1hKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1vZGVsID0gZXZlbnQubW9kZWw7XG4gICAgICAgIHRoaXMuY3VycmVudFNjaGVtYSA9IGV2ZW50LnNjaGVtYTtcblxuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyLnBhcnNlKHRoaXMuY3VycmVudFNjaGVtYSlcbiAgICAgICAgICAgIC50aGVuKGh0bWwgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY1ZpZXdMb2FkZXIubG9hZChodG1sLCB0aGlzLmRldGFpbHNFbGVtZW50LCB0aGlzKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLmVuZFByb2Nlc3MoKTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MubmV4dCgpO1xuICAgIH1cblxuICAgIHByZXZpb3VzKCkge1xuICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MucHJldmlvdXMoKTtcbiAgICB9XG59Il19