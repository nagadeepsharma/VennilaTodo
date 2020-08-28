//New keyword
/*function details(a,b){
    this.a=a
    this.b=b
    this.c=function(){
        console.log(this.a)
   }
}
var o= new details(4,5)
console.log(o)
c()*/

//Ananymous function
/*(function hello(){
    console.log("hello");
})()*/

/*
Clousure
function cl1(a){
    return function cl2(b){
        console.log(a+b);
    }
}
var b=cl1(5)
b(6)

//or
var b=cl1(5)(5)
*/

/*var arr=[1,2,3,4]
var name="hitesh"
var arr=[...arr,name]
console.log(arr);*/

/* This And Bind
var b={
    name:'bind',
    value:'important',
    details:function(){console.log(`
    Hello World! The most Valuable Keyword In React Is ${this.name} 
    And it is ${this.value} 
    `)}
}

var c={
    name:'bind',
    value:'important',
}
b.details.bind(c)()
*/



