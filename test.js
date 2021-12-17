var obj= {
    num: 2
}

var add = function(num2, num3, num4){
    return this.num + num2 + num3 + num4
}

var arr = [2,3,4]

//call method 
console.log(add.call(obj, 3,4,5));

// apply 
console.log(add.apply(obj, arr));

//bind 
var bound = add.bind(obj)
console.log(bound(3,4,5));

console.log('-------------------------------------');

//memoization

const memoizedAdd = ()=>{
    let cache = {}
    return(value)=>{
        if (value in cache){
            console.log('Fetching from cache');
            return cache[value]
        }
        else{
            console.log('calculating result');
            let result = value +10
            cache[value] = result
            return result
        }
    }
}

const newAdd = memoizedAdd()
console.log(newAdd(9));
console.log(newAdd(9));


if(0){
    console.log('+ve');
}


const array = ['a', 'b', 'c']
const iterator = array.values()
iterator.next()
console.log(iterator.next());

const goBanana = ()=>'b'+'a'+ +'a'+'a'
goBanana()

var a='42'; var b=Number(a)
console.log(a==b);
console.log('b= ', b);
console.log(typeof(b));
console.log(a+b);
console.log(a===b);


var a1 = [1,2,3]
var b1 = [1,2,3]
var c1 = "1,2,3"

console.log(typeof(c1));
// console.log(a1==c1);
// console.log(b1==c1);
console.log(a1==b1);


let maps = new Map()
maps.set('Angular')
maps.set('React')
maps.set('vue')
maps.set('React')
console.log(maps)


let array1=[1,[2,3]]
let array2 = [...array1]

array2[0]=10
array2[1][0]=20
console.log(array1[0]);
console.log(array1[1][0]);

let ar= [1,[2,3,[4], 5],6]
let flatArray = ar.flat(2)
console.log(ar.length);
console.log(ar);
console.log(flatArray.length);
console.log(flatArray);


const nums = [20, '10', NaN, 3]
console.log(nums.indexOf(NaN));


let one= {
    first : "java"
}

let two = {
    last : "script"
}

let newObj = Object.assign(one, two)

newObj['first']='node'
newObj['last']='React'
console.log(one['first']);
console.log(one['last']);


let arrr = []
let str='LCO'
let result = arrr + arrr + str.split('')
console.log(result);

const str2 = 'hellowoerlhgfd'
let str3 = str2.split('')
console.log(str3);


var title = "lco"
var obj3 = { 
    title: ' iwc',
    testOne :() =>{
        console.log(this.title);
    },
    testTwo: function(){
        console.log(this.title);
    }
}

obj3.testOne()
obj3.testTwo()

var abc = 10

console.log(+abc);
console.log(abc);


// const obj = {
//     a: ()=>{
//         return this
//     },
//     b : function(){
//         return this
//     }
// }

// var abcd = obj.a()
// console.log(abcd);
// console.log(obj.a());
// console.log('========================');
// const pqrs = obj.b()
// console.log(pqrs);
// console.log(obj.b());


const array12345 = [5,1,3,2,6]

function double(x){
    return x*2
}
function binary (x){
    return x.toString(2)
}

const output = array12345.map(binary)
console.log('output :', output);