// 前置执行的防抖
export const leadDebounce = (leadDebounceCb, delay = 400) => {
    let timer = null;
    return function () {
        if (timer) return;

        if (leadDebounceCb) leadDebounceCb.apply(this, arguments);
        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
        }, delay);
    };
};