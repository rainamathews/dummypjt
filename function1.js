// //syntax
// // function name("parameters")
// //{
//   //  body  of the function
//     //return
// //}
// //defination
 function test()
{
    console.log("test is working");

}

// //invoke/call
 test()
 test()
 console.log("normal flow");
 function greet(name)
 {
     console.log('gud mrng',name);}
     greet("arun")//here arun is actual parameter//output will be gud mrng arun
   greet()//op will be gud mrng undefined


function mult(num1,num2)
{
    return(num1*num2)
}
let res=mult(5,6)
console.log("result=",res);

//create a js function findpow(m,n) which displays m^n findpow(3,2y)