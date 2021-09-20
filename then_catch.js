let data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject ("some isu")
    },2000)
})
data.then((item)=>{
    console.log(item)
}).catch((err)=>{
    console.log("catch block",err)
}).finally((a)=>{
    console.log("manvi")
})
  