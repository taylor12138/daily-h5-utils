// 获取时间
export const getBeijingTime = (aDate) => {
    const beijingTime = new Date(
        aDate + (new Date(aDate).getTimezoneOffset() + 480) * 60000
    );
    return {
        year: +beijingTime.getFullYear(),
        month: +beijingTime.getMonth() + 1,
        date: +beijingTime.getDate(),
        hour: +beijingTime.getHours()
    };
};
