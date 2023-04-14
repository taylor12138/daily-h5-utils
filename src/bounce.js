// 前置执行的防抖
export const leadDebounce = (fn, delay = 400) => {
    let timer = null;
    return function () {
        if (timer) return;

        if (fn) fn.apply(this, arguments);
        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
        }, delay);
    };
};