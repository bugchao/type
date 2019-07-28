console.log('hello ts');
function getData () {
    const str:string = "hello"
    return str;
}

console.log(getData());

var flag:boolean = true;
console.log(`Bootlean: ${flag}`);
var num:number = 123;
console.log(`Number ${num}`);
// num = "23";  error 
var str:string = "this is string";
console.log(`String ${str}`);

// 定义数组两种方式
var arr = [1,2,3]; // es5
var arr1:number[] = [1,2,3,3];
console.log(`Array Number${arr1}`);
var arr2:Array<number> = [11,22,33];
console.log(`Arraynumber${arr2}`);

// 元组类型（tuple)

let arr3:[number,string]  = [123, "string"];
console.log(`tupel ${arr3}`);

// 枚举类型 （enum);
enum Flag { success, error };
let s:Flag = Flag.success;
console.log(`Enum${s}`);

enum Error3 { undefined=1,null=2};
var err:Error3 = Error3.undefined;
console.log(`Error3 Enum ${err}`);

// 任意类型（any)

var any1:any = 123;
console.log(`Any any1 ${any1}`);

// null undefined (其他类型)

var num1:number | undefined;
console.log(`Undefined ${num1}`);

//void 用定义方法没哟返回值

function testVoid ():void {
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

function fun():string {
    return '123';
}
// 匿名函数

var fun1 = function ():any {

}
fun1();

// 传参数

function getInfo(name:string, sex:number):any {
    return { name, sex };
}

console.log(getInfo('zhansna', 20));
console.log(getInfo("xisi", 123));

const getInfo1 = function(name:string, sex:number):void {

}

getInfo1('xiaowu', 123);

// 方法可选参数 函数形参和实参可以不一样

const getFa = function(name?: string, age?:number):string {
    return `${name}${age}`
}
console.log(getFa());

// 默认参数

const getDefInfo = function(name?:string, sex:number = 20):void {
    console.log(`default ${sex}`)
};

getDefInfo();

// 剩余参数

function sum(...arr:number[]):number  {
    let su = 0;
    arr.map(ac => {
        su += ac;
    })
    return su;
}

console.log(sum(1,2,3,4));


// 函数重载
function getInfok(name:string):string;
function getInfok(age:number):number;
function getInfok(str:any):any {
    if (typeof str === 'string') {
        console.log(`我叫${str}`)
    } else {
        console.log(`我的年龄是${str}`)
    }
}


// 定义类

class Person {
    name:string; //属性
    constructor(n:string) { // 构造函数类的时候触发的方法
        this.name = n;

    }
    run():void { 
        console.log(`Person name ${this.name}`)
    }
    getName():string{
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }
}

var p = new Person('zhansan');
// p.run();
console.log(p.getName());
console.log(p.setName('小四'));
console.log(p.getName());

abstract class Animal {
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    abstract eat():any;
}

class Dog extends Animal {
    constructor(name:any) {
        super(name);
    }
    eat () {
        console.log("小狗吃肉")
    }
}


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

//装饰器

// 通俗的讲装饰器是一个方法，可以注入到类、方法、属性参数来扩展类，属性、方法、参数的功能
// 常见装饰器有： 类装饰器、属性装饰器、方法装饰器、参数装饰器
// 装饰器的写法： 普通装饰（无法传参） 装饰器工厂（可传参）
// 装饰器是过去几年中js最大成就之一，已经是ES7标准特性之一

// 类装饰器： 类装饰器在类声明之前被声明（紧靠类声明）类装饰器应用于构造函数，可以用来监视，修改或替换类定义，传入一个参数
/**
 * 
 

function logClass(params:any) {
    console.log(params);
    params.prototype.name='xiaobai';
    params.prototype.getName = function() {
        return this.name;
    }
}

@logClass
class HttpClient {
    constructor() {

    }
    getData() {

    }
}

var http:any = new HttpClient();
console.log(http.name);
console.log(http.getName());

 */
 

/**
 
 // 装饰器工厂
function decorateHttp(params:any) {
    return function (target:any) {
        console.log(params, '传参数');
        console.log(target);
        target.prototype.name= 'xiaobai';
    }
}

@decorateHttp('小白')
class HttpClient1 {
    constructor() {

    }
    getData() {

    }
}
 */


 // 类装饰器
// 下面是一个重载构造函数的例子
// 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数
// 如果类装饰返回一个值，他会使用提供的构造函数来替换类的声明


/**
 * 
 * @param target 
function deClass(target:any) {
    console.log(target);
    return class extends target {
        name:any='小黑'
        getName() {
            console.log(this.name);
        }
    }
}

@deClass
class HttpClient {
    public name:string|undefined
    constructor(name:string) {
        console.log(`源contrucotr ${name}`)
    }
    getName() {
        console.log(this.name);
    }
}

const h = new HttpClient('小牛');
 
 */



/**
 * 属性装饰器
 * 属性装饰器表达式会在运行时当作函数被调用，传入下列两个参数：
 *  对于静态成语说是类型的构造函数，对于实例成员是类的原形对象
 *  成员的名字
 */



/**
 const deAttr = function(target:any, name: string) {
     console.log(target,name );
     target[name] = 123
    }
    
    class Member {
        @deAttr 
        public name:string | undefined;
        constructor(){
            console.log(this.name);
        }
    }
    var m = new Member();
    
 */


// 方法装饰器

/**
 * 
 const getMethod = function(target: any, methodName:string, param:any) { 
    console.log(target);
    target.apiUrl = 'baidu.com'
    target.getUrl = function() {
        return this.apiUrl;
    }
    const oMethod = param.value;
    param.value = function(name:any) {
        console.log("扩展方法");
        oMethod.call(this, name)
    }
}

class MethodClass {
    constructor(){
        
    }
    @getMethod
    getData() {
        console.log('我是原生的方法')
    }
}

var method = new MethodClass();

method.getData();
 */


const getAttr = function(target:any, methodName:string, paramsIndex:number) {
    console.log(target, methodName, paramsIndex);
}


class AttributeClass {
    getData(@getAttr name:any) {
        console.log(name)
    }
}

var attr = new AttributeClass();
attr.getData('小白');

