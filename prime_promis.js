var readlineSync=require("readline-sync");
const pro=new Promise((resolve,reject)=>{
    var num=readlineSync.questionInt("enter the num=");
    var i=2
    count=0
    while (i<=num){
        if (num%i==0){
            count=count+1
        }
        i++
    }
    if (count==1){
        resolve(num)
    }
    else{
        reject(num)
    }
})
pro.then((prime)=>{
    console.log(`this is prime num = ${prime}.`)
}).catch((no_prime)=>{
    console.log(`this is not prime num = ${no_prime}.`)
})
