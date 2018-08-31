var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by d8q8 on 2014/8/12.
 * @module Lcp
 * @class LEvent
 * @constructor
 */
var lcp;
(function (lcp) {
    /**
     * 自定义事件类
     */
    var LEvent = /** @class */ (function (_super) {
        __extends(LEvent, _super);
        function LEvent(type, obj) {
            if (obj === void 0) { obj = null; }
            var _this = _super.call(this) || this;
            _this.CLASS_NAME = "LEvent";
            if (obj) {
                _this.obj = obj;
            }
            _this.typeStr = type;
            return _this;
        }
        LEvent.prototype.toString = function () {
            console.log(this.CLASS_NAME, "type", "bubbles", "cancelable");
        };
        Object.defineProperty(LEvent.prototype, "param", {
            /**
             * 传参获取
             * @returns {Object}
             */
            get: function () {
                return this.obj;
            },
            enumerable: true,
            configurable: true
        });
        return LEvent;
    }(Laya.Event));
    lcp.LEvent = LEvent;
})(lcp || (lcp = {}));
//# sourceMappingURL=LEvents.js.map