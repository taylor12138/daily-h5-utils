// 数值显示优化
export const numberFormat = (number:number):number|string => {
    if (!number) {
        return 0;
    }
    if (number >= 1e8) {
        return `${Math.floor(number / 1e6) / 100}亿`;
    }
    if (number >= 1e4) {
        return `${Math.floor(number / 1e2) / 100}万`;
    }
    return number;
};

// 返回min - max 之间随机整数
 export const randomRange = (min:number, max:number):number => {
    if(min === undefined || max === undefined)return 0;
    if(min > max)return min;
    return Math.floor(Math.random()*(max-min+1))+min
 }