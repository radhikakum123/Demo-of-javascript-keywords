console.log("block of scope");
/*let a=20;
if(a==20)
{
    let b=30;
    const c=40;

    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);*/
//console.log(b);//b is not defined in the block so will not display.
//console.log(c);//c is not defined in the block so will not display.
/*
{
    let d=50;
}
console.log(d);//d is not defined inblockso will not display.*/

//without argument Function Return 
/*function fn()
{
    var p=20;
    const q=30;
    return p;
    //console.log(p);

}
console.log(fn());*/
//function hoisting
/*fn();
function fn()
{
    let p=20;
    const q=30;

    console.log(p);  
}*/

/*function fn()
{
    let p=20;
    const q=30;
  
}
    console.log(p);  //p will not display because its out of function scope.
    fn();//function out ofscope.*/

    /*let a=30;
     a=10;
    console.log(a);//will display last value given*/

    /*const a=10;
    a=20;
    console.log(a);//can't even assign new value.*/

//Using var:it can display outside of scope. it will treat as a global variable.
/*var x=20;
if(1==1)
{
    console.log(x);
    var y=30;
}
console.log(y);*/
/*var a=20;
var a=30;
console.log(a);//it will take last enternd value.*/
/*var a;
console.log(a);
a=hello;//not defined before display.*/
/*var a;
if(10>3)
{
    //a=hello;
    console.log(a);//undefined a.
}*/
//console.log(a);//undefined error will display.
/*function displayAge()
{
    var age=20;
    console.log(age);
}
displayAge();*/
/*if(true)
{
    var name="abc";
    console.log(name);
}*/
/*for(var i=0;i<5;i++)
{

}
console.log(i);*///it retuns last value.


/*let age=20;
var age=30;
console.log(age);//can not define at a time.*/
