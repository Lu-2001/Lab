
var timerId = setInterval(test1,300);
var finish1 = false;//When it is 'true', continue function 2.

/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

let num = 1;
function testTime(){
    var date = new Date();
    console.log(num);
    function f(){
        if (num >= 1024){
            clearInterval(timerId);
            finish1 = true;
        }
        if (date.getSeconds() === 0){
            clearInterval(timerId);
            console.log("The start of next minute!");
            finish1 = true;
        }
        num *= 2;
    }
    return f();
}

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
    var telRe = /\d{11}/;
    var maiRe = /^\w+([.-_]?\w+)*@\w+\.([-_])*\w{2,4}([.\w])*$/;
    if (telRe.test(telephone) && maiRe.test(mail)){
        console.log("Both the telephone and the mail are correct!");
    }
    else if(telRe.test(telephone) && !maiRe.test(mail)){
        console.log("The telephone is correct and the mail is wrong!");
    }
    else if (!telRe.test(telephone) && maiRe.test(mail)){
        console.log("The telephone is wrong and the mail is correct!");
    }
    else {
        console.log("Both the telephone and the mail are wrong!")
    }
}

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    let re = /(\b[a-zA-Z]+\b)\s+\1/gi;
    let result = str.match(re);
    let resSet = new Set(result);
    console.log(resSet);
}

/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    wantInput = wantInput.toUpperCase();
    actualInput = actualInput.toUpperCase();
    let actualSet = new Set(actualInput);
    let needSet = new Set();
    for (let i = 0; i < wantInput.length; i++){
        if (!actualSet.has(wantInput[i])){
            needSet.add(wantInput[i]);
        }
    }
    console.log(needSet);
}

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该数组打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    str = str.trim();
    let strArray = str.split(" ");
    strArray.reverse();
    let str2 = "";
    for (let i = 0; i < strArray.length; i++){
        if (strArray[i] !== ""){
            str2 = str2.concat(" ", strArray[i]);
        }
    }
    console.log(str2.trim());
}

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    let twoSumMap = new Map();
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                twoSumMap.set(i, j);
            }
        }
    }
    for (let key of twoSumMap.keys()){
        let k = twoSumMap.get(key);
        console.log([nums[key], nums[k]]);
    }
}

/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    let max = 1;
    let len = str.length;
    if (len <= 1) {
        max = len;
    }
    let record = 0;
    for (let i = 0; i < len; i++) {
        let index = str.indexOf(str[i], record);
        if (index < i) {
            record = index + 1;
        }
        max = Math.max(max, i - record + 1);
    }
    console.log(max);
}

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}

function DevelopingCountry() {
    Country.call(this);
}
DevelopingCountry.prototype.sayHi = function () {
    console.log("Hi,i am a developing country.");
};

function PoorCountry() {}
PoorCountry.prototype = new Country();
PoorCountry.prototype.saySad = function () {
    console.log("I am a sad poor country.");
};

let developedCountry = Object.create(new Country());
developedCountry.sayHappy = function () {
  console.log("I am a Happy developed country.");
};

const developingCountry = new DevelopingCountry();
const poorCountry = new PoorCountry();


function test1 () {
    testTime();
    if (finish1){
        console.log("Function 1 has finished!\n");

        testMail("15845454541","1368099869@qq.com.cn");
        console.log("Function 2 has finished!\n");

        testRedundancy("Is is the iS is IS cost of of gasoline going up up");
        console.log("Function 3 has finished!\n");

        testKeyBoard("7_This_is_a_test","_hs_s__es");
        console.log("Function 4 has finished!\n");

        testSpecialReverse(" the   sky is blue  ");
        console.log("Function 5 has finished!\n");

        twoSum([2,7,11,15], 9);
        console.log("Function 6 has finished!");

        lengthOfLongestSubstring("abcda");
        console.log("Function 7 has finished!\n");

        developingCountry.sayHi();
        poorCountry.saySad();
        developedCountry.sayHappy();
        console.log("Function 8 has finished!")

    }
}
test1();
