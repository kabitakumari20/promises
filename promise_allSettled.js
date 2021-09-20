const promises1=new Promise((resolve,reject)=>{
    resolve("manvi_mahi")
});
const promises2=new Promise((resolve,reject)=>{
    if (false){
        resolve(18)
    }else{
        reject("erro")
    }
});
const promises3=new Promise((resolve,reject)=>{
    if (true){
        resolve("mahi")
    }else{
        reject ("kavita")
    }
});
const promise4=new Promise((resolve,reject)=>{
    resolve("banglore")
})
const all_promises=Promise. allSettled([promises1,promises2,promises3,promise4])
all_promises.then((result)=>{
    console.log(result)
});