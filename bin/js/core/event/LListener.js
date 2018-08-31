/**
 * Created by d8q8 on 2014/8/12.
 * @module Lcp
 * @class LListener
 * @constructor
 */
var lcp;
(function (lcp) {
    /**
     * 全局侦听类及消息处理
     */
    var LListener = /** @class */ (function () {
        function LListener() {
            this.CLASS_NAME = "LListener";
            this.isInit = false;
            if (this.isInit) {
                console.warn("不可以实例化" + this.CLASS_NAME + "类,请实例Lcp." + this.CLASS_NAME + ".getInstance()开始");
            }
            if (this._dispatcher == null) {
                this._dispatcher = new Laya.EventDispatcher();
                this.isInit = true;
            }
        }
        LListener.getInstance = function () {
            if (this._instance == null)
                this._instance = new LListener();
            return this._instance;
        };
        LListener.prototype.addEventListener = function (type, thisObject, listener) {
            this._dispatcher.on(type, thisObject, listener);
        };
        LListener.prototype.removeEventListener = function (type, thisObject, listener) {
            this._dispatcher.off(type, thisObject, listener);
        };
        LListener.prototype.hasEventListener = function (type) {
            return this._dispatcher.hasListener(type);
        };
        LListener.prototype.event = function (type, obj) {
            this._dispatcher.event(type, obj);
        };
        LListener.prototype.toString = function () {
            return this._dispatcher.toString();
        };
        return LListener;
    }());
    lcp.LListener = LListener;
})(lcp || (lcp = {}));
//# sourceMappingURL=LListener.js.map