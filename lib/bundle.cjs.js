'use strict';

// 前置执行的防抖
var leadDebounce = function leadDebounce(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
  var timer = null;
  return function () {
    if (timer) return;
    if (fn) fn.apply(this, arguments);
    timer = setTimeout(function () {
      clearTimeout(timer);
      timer = null;
    }, delay);
  };
};

// 数值显示优化
var numberFormat = function numberFormat(number) {
  if (!number) {
    return 0;
  }
  if (number >= 1e8) {
    return "".concat(Math.floor(number / 1e6) / 100, "\u4EBF");
  }
  if (number >= 1e4) {
    return "".concat(Math.floor(number / 1e2) / 100, "\u4E07");
  }
  return number;
};

// 返回min - max 之间随机整数
var randomRange = function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 获取时间
var getBeijingTime = function getBeijingTime(aDate) {
  var beijingTime = new Date(aDate + (new Date(aDate).getTimezoneOffset() + 480) * 60000);
  return {
    year: +beijingTime.getFullYear(),
    month: +beijingTime.getMonth() + 1,
    date: +beijingTime.getDate(),
    hour: +beijingTime.getHours()
  };
};

//延时函数
var sleep = function sleep() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1e3;
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
};

//基于 requestAnimationFrame 的延时函数
var animationSleep = function animationSleep() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1e3;
  return new Promise(function (resolve) {
    var time = performance.now();
    var innerCb = function innerCb(innerTime) {
      var diff = innerTime - time;
      if (diff >= delay) {
        resolve();
        return;
      }
      window.requestAnimationFrame(innerCb);
    };
    window.requestAnimationFrame(innerCb);
  });
};
var a = function a() {
  console.log(1111);
};
exports.a = a;
exports.animationSleep = animationSleep;
exports.getBeijingTime = getBeijingTime;
exports.leadDebounce = leadDebounce;
exports.numberFormat = numberFormat;
exports.randomRange = randomRange;
exports.sleep = sleep;
