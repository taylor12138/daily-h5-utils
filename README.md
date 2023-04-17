# daily-h5-utils

> 用于日常使用的工具库

本工具库提供了以下功能：

-   前置防抖函数函数 [`leadDebounce`](#leadDebounce)
-   数字格式化函数 [`numberFormat`](#numberFormat)
-   获取随机整数函数 [`randomRange`](#randomRange)
-   格式化时间函数  [`getBeijingTime`](#getBeijingTime)
-   延时函数  [`sleep`](#sleep)
-   基于requestAnimationFrame的延时函数  [`animationSleep`](#animationSleep)



## 快速开始

### 安装

```js
npm i --save daily-h5-utils
```

### 使用

```js
import {
    leadDebounce,
    numberFormat,
    randomRange,
    getBeijingTime,
    sleep,
    animationSleep
} from 'daily-h5-utils';
```



## 函数列表

### [leadDebounce](#leadDebounce)

前置放抖函数

```js
import {
    leadDebounce,
} from 'daily-h5-utils';

const handleClick = () => {
  console.log('我点击了')
}

leadDebounce(() => {
  handleClick();
}, 1000);
```

**参数**

| 字段名         | 类型       | 默认值     | 含义           |
| -------------- | ---------- | ---------- | -------------- |
| leadDebounceCb | () => void | () => void | 防抖执行的回调 |
| delay          | number     | 400        | 防抖时长       |

**返回**

无



### [numberFormat](#numberFormat)

分别以万 / 亿 格式化数字

```js
import {
    numberFormat,
} from 'daily-h5-utils';

numberFormat(10000000)
```

**参数**

| 字段名 | 类型   | 默认值 | 含义         |
| ------ | ------ | ------ | ------------ |
| number | number |        | 格式化前数字 |

**返回**

| 字段名 | 类型             | 默认值 | 含义         |
| ------ | ---------------- | ------ | ------------ |
| number | number \| string | 0      | 格式化后数字 |



### [randomRange](#randomRange)

在2个区间内随机获取一个整数返回

```js
import {
    randomRange,
} from 'daily-h5-utils';

console.log(randomRange(10, 15)) //12
```

**参数**

| 字段名 | 类型   | 默认值 | 含义   |
| ------ | ------ | ------ | ------ |
| min    | number |        | 最小值 |
| max    | number |        | 最大值 |



### [getBeijingTime](#getBeijingTime)

通过传入系统时间，可以获取格式化后对应的年月日时分秒

```js
import {
    getBeijingTime,
} from 'daily-h5-utils';

const formatStr = getBeijingTimeInNumber(new Date());
console.log(formatStr);
/*
{
    "year": 2023,
    "month": 5,
    "date": 3,
    "hour": 17,
    "minute": 59,
    "second": 55
}
*/
```

**参数**

| 字段名 | 类型   | 默认值               | 含义   |
| ------ | ------ | -------------------- | ------ |
| time   | number | 当前北京时间的时间戳 | 时间戳 |

**返回**

| 字段名    | 类型   | 默认值 | 含义                   |
| --------- | ------ | ------ | ---------------------- |
| formatStr | object |        | 包含年月日时分秒的对象 |



### [sleep](#sleep)

延时函数

```js
import {
    sleep,
} from 'daily-h5-utils';

sleep(1000).then(() => {
	console.log('延时执行');
});
```

**参数**

| 字段名  | 类型       | 默认值     | 含义       |
| ------- | ---------- | ---------- | ---------- |
| sleepCb | () => void | () => void | 延时的回调 |
| delay   | number     | 1000       | 延时时长   |

**返回**

无



### [animationSleep](#animationSleep)

基于requestAnimationFrame的延时函数

对比起 `setInterval`和 `setTimeout`的优势

- requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧。
- 在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的的cpu，gpu和内存使用量。

```js
import {
    animationSleep,
} from 'daily-h5-utils';

animationSleep(1000).then(() => {
	console.log('延时执行');
});
```

**参数**

| 字段名           | 类型       | 默认值     | 含义       |
| ---------------- | ---------- | ---------- | ---------- |
| animationSleepCb | () => void | () => void | 延时的回调 |
| delay            | number     | 1000       | 延时时长   |

**返回**

无
