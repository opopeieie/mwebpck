import $ from 'jquery'
    /**
     * @name viewContainer
     */
var viewContainer = null,

    /**
     * @name $debugView
     */
    $debugView = null,

    /**
     * @name debugEnable
     * @type {boolean}
     */
    debugEnable = true;

function combination(container,...templates){
    container = $(container);
    if(templates.length<1){
        return;
    }
    templates.forEach(function(val){
        container.append(val);
    });
    return container[0].outerHTML;
}

/**
 * 获取container
 * @public
 * @method getViewContainer
 * @returns {*}
 */
var getViewContainer = function() {
    return viewContainer ? viewContainer : viewContainer = $('.view-container')[0];
};

function textAutoSize(ta) {
    var map = new Map();
    var createEvent = function (name) {
        return new Event(name, {bubbles: true})
    };
    try {
        new Event('test');
    } catch (e) {
        // IE does not support `new Event()`
        createEvent = function (name) {
            var evt = document.createEvent('Event');
            evt.initEvent(name, true, false);
            return evt;
        };
    }

    if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

    var heightOffset = null;
    var cachedHeight = null;

    function _changeOverflow(value) {
        {
            // Chrome/Safari-specific fix:
            // When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
            // made available by removing the scrollbar. The following forces the necessary text reflow.
            var width = ta.style.width;
            ta.style.width = '0px';
            // Force reflow:
            /* jshint ignore:start */
            ta.offsetWidth;
            /* jshint ignore:end */
            ta.style.width = width;
        }

        ta.style.overflowY = value;
    }

    /**
     * textArea辅助
     * @method _resize
     * @private
     */
    function _resize() {
        var originalHeight = ta.style.height;
        var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

        ta.style.height = 'auto';

        var endHeight = ta.scrollHeight + heightOffset;

        if (ta.scrollHeight === 0) {
            // If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
            ta.style.height = originalHeight;
            return;
        }

        ta.style.height = endHeight + 5 + 'px';


        // prevents scroll-position jumping

        if (docTop) {
            document.documentElement.scrollTop = docTop;
        }
    }


    /**
     * textArea辅助
     * @method _update
     * @private
     */
    function _update() {
        _resize();

        var styleHeight = Math.round(parseFloat(ta.style.height));
        var computed = window.getComputedStyle(ta, null);
        var actualHeight = Math.round(parseFloat(computed.height));

        // The actual height not matching the style height (set via the _resize method) indicates that
        // the max-height has been exceeded, in which case the overflow should be set to visible.
        if (actualHeight !== styleHeight) {
            if (computed.overflowY !== 'visible') {
                _changeOverflow('visible');
                _resize();
                actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
            }
        } else {
            // Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
            if (computed.overflowY !== 'hidden') {
                _changeOverflow('hidden');
                _resize();
                actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
            }
        }

        if (cachedHeight !== actualHeight) {
            cachedHeight = actualHeight;
            var evt = createEvent('autosize:resized');
            ta.dispatchEvent(evt);
        }
    }

    ta.addEventListener('input', _update, false);
    ta.addEventListener('click', _update, false);
    // ta.addEventListener('autosize:_update', _update, false);
    ta.style.overflowX = 'hidden';
    ta.style.wordWrap = 'break-word';
}

/**
 * 获取当前文件路径
 * @method getCurrAbsPath
 * @public
 * @returns {*|string|path}
 */
var getCurrAbsPath = function () {
    var errorObj = {}, stack;
    try {
        errorObj.error();
    }
    catch (e) {
        stack = e.stack || e.sourceURL || e.stacktrace;
    }
    var rExtractUri = /(?:http|https|file):\/\/.*?\/.+?.js/,
        absPath = rExtractUri.exec(stack);
    return absPath[0] || '';
};

/**
 * 是否存在此属性
 * @method hasOwnProperty
 * @param {{}} obj
 * @param {*} prop
 * @returns {boolean}
 */
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

/**
 * 判断是否位基础类型
 * @method isPrimitive
 * @param arg
 * @returns {boolean}
 */
function isPrimitive(arg) {
    return arg === null ||
        typeof arg === 'boolean' ||
        typeof arg === 'number' ||
        typeof arg === 'string' ||
        typeof arg === 'symbol' ||  // ES6 symbol
        typeof arg === 'undefined';
}

/**
 * 是否位function
 * @method isFunction
 * @param {*} arg
 * @returns {boolean}
 */
function isFunction(arg) {
    return typeof arg === 'function';
}

/**
 * 是否位时间类型
 * @method isDate
 * @param {*} d
 * @returns {*|boolean}
 */
function isDate(d) {
    return isObject(d) && Object.prototype.toString.call(d) === '[object Date]';
}

/**
 * 是否位对象
 * @method isObject
 * @param {*} arg
 * @returns {boolean}
 */
function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}


/**
 * 是否位undefined
 * @method isUndefined
 * @param {*} arg
 * @returns {boolean}
 */
function isUndefined(arg) {
    return arg === void 0;
}

/**
 * 是否位string
 * @method isString
 * @param {*} arg
 * @returns {boolean}
 */
function isString(arg) {
    return typeof arg === 'string';
}

/**
 * 是否位Number
 * @method isNumber
 * @param {*} arg
 * @returns {boolean}
 */
function isNumber(arg) {
    return typeof arg === 'number';
}

/**
 * 是否位null或者undefined
 * @method isNullOrUndefined
 * @param {*} arg
 * @returns {boolean}
 */
function isNullOrUndefined(arg) {
    return arg == null;
}

/**
 * 是否为null
 * @method isNull
 * @param {*} arg
 * @returns {boolean}
 */
function isNull(arg) {
    return arg === null;
}

/**
 * 是否为数组
 * @param {*} arg
 * @returns {boolean}
 */
function isArray(arg) {
    return Array.isArray(arg);
}




export {getViewContainer,
    textAutoSize,
    getCurrAbsPath,
    hasOwnProperty,
    isPrimitive,
    isFunction,
    isDate,
    isObject,
    isUndefined,
    isString,
    isNumber,
    isNullOrUndefined,
    isNull,
    isArray,
    combination
}



