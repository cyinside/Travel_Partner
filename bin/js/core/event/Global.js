var Global;
(function (Global) {
    //新建事件
    function Event(type, obj) {
        if (obj === void 0) { obj = null; }
        return new lcp.LEvent(type, obj);
    }
    Global.Event = Event;
    //派发事件
    function dispatchEvent(type, obj) {
        if (obj === void 0) { obj = null; }
        var event = new lcp.LEvent(type, obj);
        lcp.LListener.getInstance().event(type, obj);
    }
    Global.dispatchEvent = dispatchEvent;
    //监听事件
    function addEventListener(type, thisObject, listener) {
        lcp.LListener.getInstance().addEventListener(type, thisObject, listener);
    }
    Global.addEventListener = addEventListener;
})(Global || (Global = {}));
//# sourceMappingURL=Global.js.map