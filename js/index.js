// 获取对应值
let usernameDiv = document.querySelector(".username");
let btn = document.querySelector(".btn");
// 开始/结束标志 开始对应false， 结束对应true
let flag = false;
// 定义定时器标志
let timer = null;
// 名字集合
let userArr = ["风间彻", "阿呆", "妮妮", "正男", "野原新之助"];
// 处理按钮的点击事件
btn.onclick = function () {
  if (flag) {
    // 当点击结束时清理定时器
    clearInterval(timer);
    // 按钮文字变为开始
    btn.innerHTML = "开始";
    flag = false;
  } else {
    // 设置定时器负值给timer
    timer = setInterval(() => {
      // 使用math.random 和 math.floor 随机得出名字对应的下标
      let result = Math.floor(Math.random() * userArr.length);
      // 名字框开始随机出现名字
      usernameDiv.innerHTML = userArr[result];
    }, 60);
    btn.innerHTML = "结束";
    flag = true;
  }
};