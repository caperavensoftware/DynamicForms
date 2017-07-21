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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOlsiV2VsY29tZSIsImV2ZW50QWdncmVnYXRvciIsImR5bmFtaWNWaWV3TG9hZGVyIiwidGVtcGxhdGVQYXJzZXIiLCJhdHRhY2hlZCIsImZldGNoU2VjdGlvbnMiLCJuZXdTY2hlbWFIYW5kbGVyIiwibmV3U2NoZW1hIiwiYmluZCIsIm5ld1NjaGVtYUV2ZW50Iiwic3Vic2NyaWJlIiwibmV4dENhcHRpb24iLCJkZXRhY2hlZCIsImRpc3Bvc2UiLCJodHRwQ2xpZW50IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiaXRlbXMiLCJzZWN0aW9ucyIsInN0YXJ0UHJvY2VzcyIsInNjaGVtYVByb2Nlc3MiLCJyZXN1bHQiLCJzZWxlY3RlZElkIiwic29ydCIsImEiLCJiIiwiYXNpZGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJlbmRQcm9jZXNzIiwiYWRkIiwic2NoZW1hIiwibW9kZWwiLCJzY2hlbWFzIiwiY3VycmVudEluZGV4IiwicGFyc2UiLCJsb2FkIiwiaHRtbCIsImRldGFpbHNFbGVtZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsVG9wIiwiY2FuY2VsIiwibmV4dCIsInByZXZpb3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFPYUEsTyxXQUFBQSxPLFdBRFosc0c7QUFTRyx5QkFBWUMsZUFBWixFQUE2QkMsaUJBQTdCLEVBQWdEQyxjQUFoRCxFQUFnRTtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUM1RCxpQkFBS0YsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxpQkFBS0MsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUNBLGlCQUFLQyxjQUFMLEdBQXNCLGdDQUFtQixPQUFuQixDQUF0QjtBQUNIOzswQkFFREMsUSx1QkFBVztBQUNQLGlCQUFLQyxhQUFMOztBQUVBLGlCQUFLQyxnQkFBTCxHQUF3QixLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBeEI7QUFDQSxpQkFBS0MsY0FBTCxHQUFzQixLQUFLUixlQUFMLENBQXFCUyxTQUFyQixDQUErQixZQUEvQixFQUE2QyxLQUFLSixnQkFBbEQsQ0FBdEI7QUFDQSxpQkFBS0ssV0FBTCxHQUFtQixNQUFuQjtBQUNILFM7OzBCQUVEQyxRLHVCQUFXO0FBQ1AsaUJBQUtILGNBQUwsQ0FBb0JJLE9BQXBCO0FBQ0EsaUJBQUtKLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxpQkFBS0gsZ0JBQUwsR0FBd0IsSUFBeEI7QUFDQSxpQkFBS0gsY0FBTCxDQUFvQlUsT0FBcEI7QUFDQSxpQkFBS1YsY0FBTCxHQUFzQixJQUF0QjtBQUNILFM7OzBCQUVERSxhLDRCQUFnQjtBQUFBOztBQUNaLGdCQUFJUyxhQUFhLG9DQUFqQjs7QUFFQUEsdUJBQVdDLEtBQVgsQ0FBaUIsYUFBakIsRUFDS0MsSUFETCxDQUNVO0FBQUEsdUJBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLGFBRFYsRUFFS0YsSUFGTCxDQUVVLG9CQUFZO0FBQ2Qsc0JBQUtHLEtBQUwsR0FBYUMsUUFBYjtBQUNILGFBSkw7QUFLSCxTOzswQkFFREMsWSwyQkFBZTtBQUNYLGdCQUFJLEtBQUtDLGFBQVQsRUFBd0I7QUFDcEIscUJBQUtBLGFBQUwsQ0FBbUJULE9BQW5CO0FBQ0g7O0FBRUQsZ0JBQU1VLFNBQVMsS0FBS0MsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsdUJBQVNELElBQUlDLENBQWI7QUFBQSxhQUFyQixDQUFmOztBQUVBLGlCQUFLTCxhQUFMLEdBQXFCLGlDQUFrQixLQUFLRSxVQUF2QixFQUFtQyxLQUFLdkIsZUFBeEMsQ0FBckI7QUFDQSxpQkFBSzJCLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsTUFBckIsQ0FBNEIsUUFBNUI7QUFDSCxTOzswQkFFREMsVSx5QkFBYTtBQUNULGlCQUFLSCxLQUFMLENBQVdDLFNBQVgsQ0FBcUJHLEdBQXJCLENBQXlCLFFBQXpCO0FBQ0EsaUJBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsaUJBQUtDLEtBQUwsR0FBYSxJQUFiO0FBQ0EsaUJBQUtaLGFBQUwsQ0FBbUJULE9BQW5CO0FBQ0EsaUJBQUtTLGFBQUwsR0FBcUIsSUFBckI7QUFDSCxTOzswQkFFRGYsUyx3QkFBWTtBQUFBOztBQUNSLGlCQUFLMkIsS0FBTCxHQUFhLEtBQUtaLGFBQUwsQ0FBbUJhLE9BQW5CLENBQTJCLEtBQUtiLGFBQUwsQ0FBbUJjLFlBQTlDLEVBQTRERixLQUF6RTtBQUNBLGlCQUFLRCxNQUFMLEdBQWMsS0FBS1gsYUFBTCxDQUFtQmEsT0FBbkIsQ0FBMkIsS0FBS2IsYUFBTCxDQUFtQmMsWUFBOUMsRUFBNERILE1BQTFFOztBQUVBLGlCQUFLOUIsY0FBTCxDQUFvQmtDLEtBQXBCLENBQTBCLEtBQUtKLE1BQS9CLEVBQ0tqQixJQURMLENBQ1UsZ0JBQVE7QUFDVix1QkFBS2QsaUJBQUwsQ0FBdUJvQyxJQUF2QixDQUE0QkMsSUFBNUIsRUFBa0MsT0FBS0MsY0FBdkM7QUFDSCxhQUhMOztBQUtBQyxrQ0FBc0I7QUFBQSx1QkFBSyxPQUFLRCxjQUFMLENBQW9CRSxTQUFwQixHQUFnQyxDQUFyQztBQUFBLGFBQXRCO0FBQ0gsUzs7MEJBRURDLE0scUJBQVM7QUFDTCxpQkFBS1osVUFBTDtBQUNILFM7OzBCQUVEYSxJLG1CQUFPO0FBQ0gsZ0JBQUksS0FBS3RCLGFBQUwsQ0FBbUJzQixJQUFuQixNQUE2QixLQUFqQyxFQUF3QztBQUNwQyxxQkFBS0QsTUFBTDtBQUNIO0FBQ0osUzs7MEJBRURFLFEsdUJBQVc7QUFDUCxpQkFBS3ZCLGFBQUwsQ0FBbUJ1QixRQUFuQjtBQUNILFMiLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcbmltcG9ydCB7U2NoZW1hUHJvY2Vzc30gZnJvbSAnLi9zY2hlbWEtcHJvY2Vzcyc7XG5pbXBvcnQge0R5bmFtaWNWaWV3TG9hZGVyLCBUZW1wbGF0ZVBhcnNlcn0gZnJvbSAncHJhZ21hLXZpZXdzJztcblxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IsIER5bmFtaWNWaWV3TG9hZGVyKVxuZXhwb3J0IGNsYXNzIFdlbGNvbWUge1xuICAgIGl0ZW1zO1xuXG4gICAgQGJpbmRhYmxlIHNjaGVtYVByb2Nlc3M7XG4gICAgQGJpbmRhYmxlIHNlbGVjdGVkSWQ7XG4gICAgQGJpbmRhYmxlIHNjaGVtYTtcbiAgICBAYmluZGFibGUgbW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcihldmVudEFnZ3JlZ2F0b3IsIGR5bmFtaWNWaWV3TG9hZGVyLCB0ZW1wbGF0ZVBhcnNlcikge1xuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcbiAgICAgICAgdGhpcy5keW5hbWljVmlld0xvYWRlciA9IGR5bmFtaWNWaWV3TG9hZGVyO1xuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyID0gbmV3IFRlbXBsYXRlUGFyc2VyKFwibW9kZWxcIik7XG4gICAgfVxuXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hTZWN0aW9ucygpO1xuXG4gICAgICAgIHRoaXMubmV3U2NoZW1hSGFuZGxlciA9IHRoaXMubmV3U2NoZW1hLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmV3U2NoZW1hRXZlbnQgPSB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoXCJuZXctc2NoZW1hXCIsIHRoaXMubmV3U2NoZW1hSGFuZGxlcik7XG4gICAgICAgIHRoaXMubmV4dENhcHRpb24gPSBcIk5leHRcIjtcbiAgICB9XG5cbiAgICBkZXRhY2hlZCgpIHtcbiAgICAgICAgdGhpcy5uZXdTY2hlbWFFdmVudC5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMubmV3U2NoZW1hRXZlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm5ld1NjaGVtYUhhbmRsZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnRlbXBsYXRlUGFyc2VyLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVBhcnNlciA9IG51bGw7XG4gICAgfVxuXG4gICAgZmV0Y2hTZWN0aW9ucygpIHtcbiAgICAgICAgbGV0IGh0dHBDbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuXG4gICAgICAgIGh0dHBDbGllbnQuZmV0Y2goJ2FwaS9zZWN0aW9uJylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHNlY3Rpb25zID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gc2VjdGlvbnM7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydFByb2Nlc3MoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjaGVtYVByb2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hUHJvY2Vzcy5kaXNwb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNlbGVjdGVkSWQuc29ydCgoYSxiKSA9PiBhID4gYik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNjaGVtYVByb2Nlc3MgPSBuZXcgU2NoZW1hUHJvY2Vzcyh0aGlzLnNlbGVjdGVkSWQsIHRoaXMuZXZlbnRBZ2dyZWdhdG9yKTtcbiAgICAgICAgdGhpcy5hc2lkZS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2VkXCIpO1xuICAgIH1cblxuICAgIGVuZFByb2Nlc3MoKSB7XG4gICAgICAgIHRoaXMuYXNpZGUuY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcbiAgICAgICAgdGhpcy5zY2hlbWEgPSBudWxsO1xuICAgICAgICB0aGlzLm1vZGVsID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY2hlbWFQcm9jZXNzLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5zY2hlbWFQcm9jZXNzID0gbnVsbDtcbiAgICB9XG5cbiAgICBuZXdTY2hlbWEoKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSB0aGlzLnNjaGVtYVByb2Nlc3Muc2NoZW1hc1t0aGlzLnNjaGVtYVByb2Nlc3MuY3VycmVudEluZGV4XS5tb2RlbDtcbiAgICAgICAgdGhpcy5zY2hlbWEgPSB0aGlzLnNjaGVtYVByb2Nlc3Muc2NoZW1hc1t0aGlzLnNjaGVtYVByb2Nlc3MuY3VycmVudEluZGV4XS5zY2hlbWE7XG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZVBhcnNlci5wYXJzZSh0aGlzLnNjaGVtYSlcbiAgICAgICAgICAgIC50aGVuKGh0bWwgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY1ZpZXdMb2FkZXIubG9hZChodG1sLCB0aGlzLmRldGFpbHNFbGVtZW50LCB0aGlzKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8gPT4gdGhpcy5kZXRhaWxzRWxlbWVudC5zY3JvbGxUb3AgPSAwKTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuZW5kUHJvY2VzcygpO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjaGVtYVByb2Nlc3MubmV4dCgpID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJldmlvdXMoKSB7XG4gICAgICAgIHRoaXMuc2NoZW1hUHJvY2Vzcy5wcmV2aW91cygpO1xuICAgIH1cbn0iXX0=