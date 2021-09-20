const promises1=new Promise((resolve,reject)=>{
    resolve("manvi")
});
const promises2=new Promise((resolve,reject)=>{
    if (true){
        resolve(18)
    }else{
        reject("erro")
    }
});
const promises3=new Promise((resolve,reject)=>{
    resolve("mahi")
});
const all_promises=Promise. all([promises1,promises2,promises3])
all_promises.then((result)=>{
    console.log(result)
});
