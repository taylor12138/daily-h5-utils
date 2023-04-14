//延时函数
export const sleep = (delay = 1e3) => new Promise((resolve) => {
    setTimeout(resolve, delay);
});

//基于 requestAnimationFrame 的延时函数
export const animationSleep = (delay = 1e3) => new Promise((resolve) => {
    const time = performance.now();
    const innerCb = (innerTime) => {
        const diff = innerTime - time;
        if (diff >= delay) {
            resolve();
            return;
        }
        window.requestAnimationFrame(innerCb);
    };
    window.requestAnimationFrame(innerCb);
});