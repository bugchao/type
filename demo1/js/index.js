"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('hello ts');
function getData() {
    var str = "hello";
    return str;
}
console.log(getData());
var flag = true;
console.log("Bootlean: " + flag);
var num = 123;
console.log("Number " + num);
// num = "23";  error 
var str = "this is string";
console.log("String " + str);
// 定义数组两种方式
var arr = [1, 2, 3]; // es5
var arr1 = [1, 2, 3, 3];
console.log("Array Number" + arr1);
var arr2 = [11, 22, 33];
console.log("Arraynumber" + arr2);
// 元组类型（tuple)
var arr3 = [123, "string"];
console.log("tupel " + arr3);
// 枚举类型 （enum);
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 0] = "success";
    Flag[Flag["error"] = 1] = "error";
})(Flag || (Flag = {}));
;
var s = Flag.success;
console.log("Enum" + s);
var Error3;
(function (Error3) {
    Error3[Error3["undefined"] = 1] = "undefined";
    Error3[Error3["null"] = 2] = "null";
})(Error3 || (Error3 = {}));
;
var err = Error3.undefined;
console.log("Error3 Enum " + err);
// 任意类型（any)
var any1 = 123;
console.log("Any any1 " + any1);
// null undefined (其他类型)
var num1;
console.log("Undefined " + num1);
//void 用定义方法没哟返回值
function testVoid() {
    console.log('run');
}
testVoid();
// never 类型
// var a2:never;
// a2 = ((() => {
//     throw new Error('Error');
// }))();
// console.log(a2);
// 函数
// 函数声明方法
function fun() {
    return '123';
}
// 匿名函数
var fun1 = function () {
};
fun1();
// 传参数
function getInfo(name, sex) {
    return { name: name, sex: sex };
}
console.log(getInfo('zhansna', 20));
console.log(getInfo("xisi", 123));
var getInfo1 = function (name, sex) {
};
getInfo1('xiaowu', 123);
// 方法可选参数 函数形参和实参可以不一样
var getFa = function (name, age) {
    return "" + name + age;
};
console.log(getFa());
// 默认参数
var getDefInfo = function (name, sex) {
    if (sex === void 0) { sex = 20; }
    console.log("default " + sex);
};
getDefInfo();
// 剩余参数
function sum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var su = 0;
    arr.map(function (ac) {
        su += ac;
    });
    return su;
}
console.log(sum(1, 2, 3, 4));
function getInfok(str) {
    if (typeof str === 'string') {
        console.log("\u6211\u53EB" + str);
    }
    else {
        console.log("\u6211\u7684\u5E74\u9F84\u662F" + str);
    }
}
// 定义类
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        console.log("Person name " + this.name);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person('zhansan');
// p.run();
console.log(p.getName());
console.log(p.setName('小四'));
console.log(p.getName());
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log("小狗吃肉");
    };
    return Dog;
}(Animal));
// 接口
// 1. 属性接口
// function printLabel():void {
//     console.log('printLabel');
// }
// ts定义传入参数
// function printLabel(label:string):void {
//     console.log(label)
// }
/**
 *
    function printLabel(labelInfo: {label:string}):void {
        
    }

    // printLabel('label');
    // printLabel({name: 'zhansna'})
    printLabel({label: 'zhansan'});

 */
// 对批量方法闯入参数进行约束
// 接口 ：行为和动作的规范，对批量方法进行约束
/**
 *
interface FullName {
    firstName: string;
    secondName: string;
}

function printName(name:FullName) {
     //必须传入对象firstName secondName
    console.log(name.firstName+ '---' + name.secondName);

 }


const obj = {secondName: "永超", firstName: "邓", age: 29}
printName(obj);
 */
// 可选属性
/**
    interface fullName {
        firstName: string;
        secondName?: string;
    }

    function getName(name:fullName) {
        console.log(name);
    }

    getName({firstName: '张', secondName: '三'})
*/
// interface config {
//     type: string;
//     url: string;
//     data?:string;
//     dataType: string;
// }
// function request(config: config) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(config.type, config.url, true);
//     xhr.send(config.data);
//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4 && xhr.status) {
//             console.log('成功')
//         }
//         if (config.dataType === 'json') {
//             console.log(JSON.parse(xhr.responseText));
//         } else {
//             console.log(xhr.responseText);
//         }
//     }
// }
// request({
//     type: 'GET',
//     url: 'https://www.baidu.com',
//     dataType: 'json'
// })
// 函数类型接口： 对方法闯入的参数以及返回值进行约束
// 加密的函数类型接口
// interface encrypt {
//     (key: string, value:string):string
// }
// var md5:encrypt = function(key:string, value:string):string{ 
//     return key + value;   
// }
// md5('name', 'zhnsan');
// 可索引接口： 数组、对象的约束
// interface userArr{
//     [index:number]:string
// }
// var arrc1:userArr = ['1', '2']
// 类型接口： 对类约束和抽象类有点相似
// interface AnimalC {
//     name:string;
//     eat1(str:string):void;
// }
// class Dog4 implements AnimalC {
//     name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     eat1(str:string) {
//     }
// }
// 泛型，软件工程中，我们不仅要创建一致定义良好API.同时也要考虑可重用性。组件不经能够支持当前数据类型，同时也能支持未来的数据类型这在创建大型系统时为你提供十分灵活的功能
// 在想C#和java这样的语言中。可以使用泛型来创建可重要的组件，一个组件可以支持多种类型的数据，这样用户就可以自己的数据类型来使用组件
//通俗理解： 泛型就是解决类 接口方法的复用性、以及时不特定数据类型支持
// 泛型： 可以支持不特定的数据类型 要求：传入的参数和返回的参数一致
// function getDataInfo<T>(value:T):string {
//     return '123';
// }
// getDataInfo<number>(123);
// getDataInfo<string>('123');
// class MinClass {
//     public list:number[] = [];
//     add(num:number) {
//         this.list.push(num);
//     }
//     min():number {
//         var minNumber = this.list[0];
//         for (var i= 0;i<this.list.length-0;i++) {
//             if(this.list[i] < minNumber) {
//                 minNumber = this.list[i];
//             }
//         }
//         return minNumber;
//     }
// }
// var mink = new MinClass();
// mink.add(31);
// mink.add(10);
// mink.add(2);
// console.log(mink.min());
/**
class MinClas<T>{
    public list:T[] = [];
    add(value:T):void {
        this.list.push(value);
    }
    min():T {
        let minNum = this.list[0];
        this.list.forEach((it) => {
            if (it < minNum) {
                minNum = it;
            }
        })
        return minNum;
    }
}


var minS = new MinClas<string>();
minS.add('12');
minS.add('true');
minS.add('c');
console.log(minS.min());
 
*/
// 泛型接口
/**

interface ConfigFn {
    (value1:string,value2:string):string;
}


var setData:ConfigFn = function(value1:string, value2:string) {
    return value1+value2;
}


 */
//  interface ConfigFn { 
//      <T>(value:T):T;
//  }
// var getString:ConfigFn = function<T>(value:T):T {
//     return value;
// }
// getString<number>(1);
// interface ConfigFn1<T> {
//     (value:T):T;
// }
// function getNumber<T>(value:T):T {
//     return value;
// }
// getNumber<string>("123");
/**


class MaxClass {
    public list:number[] = [];
    add(num:number) {1
        this.list.push(num);
    }

    max():number {
        let max = this.list[0];
        this.list.forEach(it => {
            if(it > max ) {
                max = it;
            }
        })
        return max;
    }
}

var c = new MaxClass();
c.add(12);
c.add(123);
c.add(10);
var max = c.max();
console.log(max);

 */
// 类的泛型
/**
 *
 
class MaxClass<T> {
    public list:T[]=[];
    add(value:T):void {
        this.list.push(value);

    }
    max():T {
        var max = this.list[0];
        this.list.map(item => {
            if (item > max ) {
                max =item ;
            }
        })
        return max;
    }
}

var strMax = new MaxClass<string>();

strMax.add('a');
strMax.add('b');
strMax.add('c');
strMax.add('z');
strMax.add('D');

console.log(strMax.max());


 */
//  // 泛型接口
//  interface ConfigFn {
//      <T>(value:T):T;
//  }
// var getC:ConfigFn = function<T>(value:T):T { return value;}
// getC<string>("st");
// 把类当作参数类型的列
/**
 *
 *
class User {
    name: string | undefined;
    age: number | undefined;
}

class SqliteDb {
    add(info:User):boolean {
        console.log(info);
        return true;
    }
}

var u = new User();
u.name= 'wuxiaobai';
u.age=29;

var db = new SqliteDb();
db.add(u);

 */
// 泛类型的类
/**
 *
class SqliteDb<T> {
    add(info:T):boolean {
        console.log(info);
        return true;
    }
}

class Artical {
    id:string | undefined;
    title: string | undefined;
}

var  a = new Artical();
a.id = '1';
a.title = '小白说天下';

var db = new SqliteDb<Artical>();
db.add(a);

 */
// interface DBI<T>{
//     add(info:T):boolean;
//     update(info:T):boolean;
//     delete():boolean;
//     get():any[];
// }
