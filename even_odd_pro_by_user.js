const readlineSync=require("readline-sync")
const even_odd=new Promise((resolve,reject)=>{
    var num=readlineSync.questionInt("enter the num=")
        if (num%2==0){
            resolve(`even num,${num}`)
        }
        else {
            reject(`odd num,${num}`)
        }
});   
even_odd.then((callback)=>{
    console.log(callback)
}).catch((calback1)=>{
    console.log(calback1)
})


