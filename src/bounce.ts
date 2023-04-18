type INormalCb = () => void

// 前置执行的防抖
export const leadDebounce = (leadDebounceCb : INormalCb, delay = 400) => {
    let timer:any = null;
    return function () {
        if (timer) return;
        //@ts-ignore
        if (leadDebounceCb) leadDebounceCb.apply(this, arguments);
        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
        }, delay);
    };
};