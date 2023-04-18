// 获取时间
export const getBeijingTime = (aDate: number) => {
    const time = aDate || +Date.now();
    const beijingTime = new Date(
        time + (new Date(time).getTimezoneOffset() + 480) * 60000
    );
    return {
        year: +beijingTime.getFullYear(),
        month: +beijingTime.getMonth() + 1,
        date: +beijingTime.getDate(),
        hour: +beijingTime.getHours()
    };
};
