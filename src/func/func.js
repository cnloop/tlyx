export function isMobile() {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}

export function mouseScroll(cb) {
    //判断浏览器类型
    var client = (function() {
        var engine = {
            ie: 0,
            gecko: 0,
            webkit: 0,
            khtml: 0,
            opera: 0,
            ver: null
        };
        return {
            engine: engine
        };
    })();

    var EventUtil = {
        getEvent: function(event) {
            return event ? event : window.event;
        },
        addHandler: function(element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        },
        getWheelDelta: function(event) {
            var driect = null;
            if (event.wheelDelta) {
                driect = client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta;
            } else {
                driect = -event.detail * 40;
            }
            return driect > 0 ? 1 : -1;
        }
    };

    //调用方法getWheelDelta()
    (function() {
        function handleMouseWheel(event) {
            event = EventUtil.getEvent(event);
            var delta = EventUtil.getWheelDelta(event);
            cb(delta);
        }
        EventUtil.addHandler(
            document,
            "mousewheel",
            debounce(function(event) {
                event = EventUtil.getEvent(event);
                var delta = EventUtil.getWheelDelta(event);
                cb(delta);
            }, 100)
        );
        EventUtil.addHandler(document, "DOMMouseScroll", handleMouseWheel);
    })();
}

export function throttle(fn, delay) {
    var timer, // 定时器
        firstFlag = true; // 是否为第一次调用

    return function() {
        var ctx = this,
            args = arguments;

        if (firstFlag) {
            // 如果是第一次调用，不需延迟执行
            fn && fn.apply(ctx, args);
            return (firstFlag = false);
        }

        if (timer) {
            // 如果定时器还在，说明前一次延迟执行还没有完成
            return false;
        }

        timer = setTimeout(function() {
            // 设置延迟执行
            clearTimeout(timer);
            timer = null;
            fn && fn.apply(ctx, args);
        }, delay || 500);
    };
}

export function debounce(fn, wait) {
    var timer = null;
    return function() {
        var ctx = this,
            args = arguments;
        if (timer) clearInterval(timer); // 如果存在延迟执行函数，则清除
        timer = setTimeout(function() {
            fn && fn.apply(ctx, args);
        }, wait || 300);
    };
}
