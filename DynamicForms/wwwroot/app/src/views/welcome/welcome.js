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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOlsiV2VsY29tZSIsImV2ZW50QWdncmVnYXRvciIsImR5bmFtaWNWaWV3TG9hZGVyIiwidGVtcGxhdGVQYXJzZXIiLCJhdHRhY2hlZCIsImZldGNoU2VjdGlvbnMiLCJuZXdTY2hlbWFIYW5kbGVyIiwibmV3U2NoZW1hIiwiYmluZCIsIm5ld1NjaGVtYUV2ZW50Iiwic3Vic2NyaWJlIiwibmV4dENhcHRpb24iLCJkZXRhY2hlZCIsImRpc3Bvc2UiLCJodHRwQ2xpZW50IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiaXRlbXMiLCJzZWN0aW9ucyIsInN0YXJ0UHJvY2VzcyIsInNjaGVtYVByb2Nlc3MiLCJyZXN1bHQiLCJzZWxlY3RlZElkIiwic29ydCIsImEiLCJiIiwiYXNpZGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJlbmRQcm9jZXNzIiwiYWRkIiwic2NoZW1hIiwibW9kZWwiLCJzY2hlbWFzIiwiY3VycmVudEluZGV4IiwicGFyc2UiLCJsb2FkIiwiaHRtbCIsImRldGFpbHNFbGVtZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsVG9wIiwiY2FuY2VsIiwibmV4dCIsInByZXZpb3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFPYUEsTyxXQUFBQSxPLFdBRFosc0c7QUFTRyx5QkFBWUMsZUFBWixFQUE2QkMsaUJBQTdCLEVBQWdEQyxjQUFoRCxFQUFnRTtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUM1RCxpQkFBS0YsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxpQkFBS0MsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUNBLGlCQUFLQyxjQUFMLEdBQXNCLGdDQUFtQixPQUFuQixDQUF0QjtBQUNIOzswQkFFREMsUSx1QkFBVztBQUNQLGlCQUFLQyxhQUFMOztBQUVBLGlCQUFLQyxnQkFBTCxHQUF3QixLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBeEI7QUFDQSxpQkFBS0MsY0FBTCxHQUFzQixLQUFLUixlQUFMLENBQXFCUyxTQUFyQixDQUErQixZQUEvQixFQUE2QyxLQUFLSixnQkFBbEQsQ0FBdEI7QUFDQSxpQkFBS0ssV0FBTCxHQUFtQixNQUFuQjtBQUNILFM7OzBCQUVEQyxRLHVCQUFXO0FBQ1AsaUJBQUtILGNBQUwsQ0FBb0JJLE9BQXBCO0FBQ0EsaUJBQUtKLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxpQkFBS0gsZ0JBQUwsR0FBd0IsSUFBeEI7QUFDQSxpQkFBS0gsY0FBTCxDQUFvQlUsT0FBcEI7QUFDQSxpQkFBS1YsY0FBTCxHQUFzQixJQUF0QjtBQUNILFM7OzBCQUVERSxhLDRCQUFnQjtBQUFBOztBQUNaLGdCQUFJUyxhQUFhLG9DQUFqQjs7QUFFQUEsdUJBQVdDLEtBQVgsQ0FBaUIsYUFBakIsRUFDS0MsSUFETCxDQUNVO0FBQUEsdUJBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLGFBRFYsRUFFS0YsSUFGTCxDQUVVLG9CQUFZO0FBQ2Qsc0JBQUtHLEtBQUwsR0FBYUMsUUFBYjtBQUNILGFBSkw7QUFLSCxTOzswQkFFREMsWSwyQkFBZTtBQUNYLGdCQUFJLEtBQUtDLGFBQVQsRUFBd0I7QUFDcEIscUJBQUtBLGFBQUwsQ0FBbUJULE9BQW5CO0FBQ0g7O0FBRUQsZ0JBQU1VLFNBQVMsS0FBS0MsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsdUJBQVNELElBQUlDLENBQWI7QUFBQSxhQUFyQixDQUFmOztBQUVBLGlCQUFLTCxhQUFMLEdBQXFCLGlDQUFrQixLQUFLRSxVQUF2QixFQUFtQyxLQUFLdkIsZUFBeEMsQ0FBckI7QUFDQSxpQkFBSzJCLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsTUFBckIsQ0FBNEIsUUFBNUI7QUFDSCxTOzswQkFFREMsVSx5QkFBYTtBQUNULGlCQUFLSCxLQUFMLENBQVdDLFNBQVgsQ0FBcUJHLEdBQXJCLENBQXlCLFFBQXpCO0FBQ0EsaUJBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsaUJBQUtDLEtBQUwsR0FBYSxJQUFiO0FBQ0EsaUJBQUtaLGFBQUwsQ0FBbUJULE9BQW5CO0FBQ0EsaUJBQUtTLGFBQUwsR0FBcUIsSUFBckI7QUFDSCxTOzswQkFFRGYsUyx3QkFBWTtBQUFBOztBQUNSLGlCQUFLMkIsS0FBTCxHQUFhLEtBQUtaLGFBQUwsQ0FBbUJhLE9BQW5CLENBQTJCLEtBQUtiLGFBQUwsQ0FBbUJjLFlBQTlDLEVBQTRERixLQUF6RTtBQUNBLGlCQUFLRCxNQUFMLEdBQWMsS0FBS1gsYUFBTCxDQUFtQmEsT0FBbkIsQ0FBMkIsS0FBS2IsYUFBTCxDQUFtQmMsWUFBOUMsRUFBNERILE1BQTFFOztBQUVBLGlCQUFLOUIsY0FBTCxDQUFvQmtDLEtBQXBCLENBQTBCLEtBQUtKLE1BQS9CLEVBQ0tqQixJQURMLENBQ1UsZ0JBQVE7QUFDVix1QkFBS2QsaUJBQUwsQ0FBdUJvQyxJQUF2QixDQUE0QkMsSUFBNUIsRUFBa0MsT0FBS0MsY0FBdkM7QUFDSCxhQUhMOztBQUtBQyxrQ0FBc0I7QUFBQSx1QkFBSyxPQUFLRCxjQUFMLENBQW9CRSxTQUFwQixHQUFnQyxDQUFyQztBQUFBLGFBQXRCO0FBQ0gsUzs7MEJBRURDLE0scUJBQVM7QUFDTCxpQkFBS1osVUFBTDtBQUNILFM7OzBCQUVEYSxJLG1CQUFPO0FBQ0gsZ0JBQUksS0FBS3RCLGFBQUwsQ0FBbUJzQixJQUFuQixNQUE2QixLQUFqQyxFQUF3QztBQUNwQyxxQkFBS0QsTUFBTDtBQUNIO0FBQ0osUzs7MEJBRURFLFEsdUJBQVc7QUFDUCxpQkFBS3ZCLGFBQUwsQ0FBbUJ1QixRQUFuQjtBQUNILFMiLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcbmltcG9ydCB7U2NoZW1hUHJvY2Vzc30gZnJvbSAnLi9zY2hlbWEtcHJvY2Vzcyc7XHJcbmltcG9ydCB7RHluYW1pY1ZpZXdMb2FkZXIsIFRlbXBsYXRlUGFyc2VyfSBmcm9tICdwcmFnbWEtdmlld3MnO1xyXG5cclxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IsIER5bmFtaWNWaWV3TG9hZGVyKVxyXG5leHBvcnQgY2xhc3MgV2VsY29tZSB7XHJcbiAgICBpdGVtcztcclxuXHJcbiAgICBAYmluZGFibGUgc2NoZW1hUHJvY2VzcztcclxuICAgIEBiaW5kYWJsZSBzZWxlY3RlZElkO1xyXG4gICAgQGJpbmRhYmxlIHNjaGVtYTtcclxuICAgIEBiaW5kYWJsZSBtb2RlbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihldmVudEFnZ3JlZ2F0b3IsIGR5bmFtaWNWaWV3TG9hZGVyLCB0ZW1wbGF0ZVBhcnNlcikge1xyXG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgICAgIHRoaXMuZHluYW1pY1ZpZXdMb2FkZXIgPSBkeW5hbWljVmlld0xvYWRlcjtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyID0gbmV3IFRlbXBsYXRlUGFyc2VyKFwibW9kZWxcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaFNlY3Rpb25zKCk7XHJcblxyXG4gICAgICAgIHRoaXMubmV3U2NoZW1hSGFuZGxlciA9IHRoaXMubmV3U2NoZW1hLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFFdmVudCA9IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShcIm5ldy1zY2hlbWFcIiwgdGhpcy5uZXdTY2hlbWFIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLm5leHRDYXB0aW9uID0gXCJOZXh0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFFdmVudC5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFFdmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFIYW5kbGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaFNlY3Rpb25zKCkge1xyXG4gICAgICAgIGxldCBodHRwQ2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcclxuXHJcbiAgICAgICAgaHR0cENsaWVudC5mZXRjaCgnYXBpL3NlY3Rpb24nKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHNlY3Rpb25zID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBzZWN0aW9ucztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRQcm9jZXNzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNjaGVtYVByb2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlbWFQcm9jZXNzLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2VsZWN0ZWRJZC5zb3J0KChhLGIpID0+IGEgPiBiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MgPSBuZXcgU2NoZW1hUHJvY2Vzcyh0aGlzLnNlbGVjdGVkSWQsIHRoaXMuZXZlbnRBZ2dyZWdhdG9yKTtcclxuICAgICAgICB0aGlzLmFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZW5kUHJvY2VzcygpIHtcclxuICAgICAgICB0aGlzLmFzaWRlLmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XHJcbiAgICAgICAgdGhpcy5zY2hlbWEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2NoZW1hUHJvY2Vzcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlbWFQcm9jZXNzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBuZXdTY2hlbWEoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuc2NoZW1hUHJvY2Vzcy5zY2hlbWFzW3RoaXMuc2NoZW1hUHJvY2Vzcy5jdXJyZW50SW5kZXhdLm1vZGVsO1xyXG4gICAgICAgIHRoaXMuc2NoZW1hID0gdGhpcy5zY2hlbWFQcm9jZXNzLnNjaGVtYXNbdGhpcy5zY2hlbWFQcm9jZXNzLmN1cnJlbnRJbmRleF0uc2NoZW1hO1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyLnBhcnNlKHRoaXMuc2NoZW1hKVxyXG4gICAgICAgICAgICAudGhlbihodG1sID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY1ZpZXdMb2FkZXIubG9hZChodG1sLCB0aGlzLmRldGFpbHNFbGVtZW50LCB0aGlzKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8gPT4gdGhpcy5kZXRhaWxzRWxlbWVudC5zY3JvbGxUb3AgPSAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5lbmRQcm9jZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zY2hlbWFQcm9jZXNzLm5leHQoKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91cygpIHtcclxuICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MucHJldmlvdXMoKTtcclxuICAgIH1cclxufSJdfQ==