const myPromise=new Promise((resolve,reject)=>{
    let name="manvi"
    let name1=false
    if (name1){
        let a="is this string"
        resolve(a)
    }
    else if (name){
        let b="i am right"
        resolve(b)
    }
    else{
        reject("i am rejected")}
    })
myPromise.then((messs)=>{
    console.log(messs)
}).catch((m)=>{
    console.log("ADSAFS")
}).finally((a)=>{
    console.log("wertyui")
})