const mypro=new Promise((resolve,reject)=>{
    resolve({name:"manvi",age:20,class:12})
});
mypro.then((result)=>{
    console.log(result)
    return new Promise((resolve,reject)=>{
        resolve((result["name"])="mani")
        console.log(result)
        return new Promise((resolve,reject)=>{
            resolve((result["age"])=18)
            console.log(result)
            return new Promise((resolve,reject)=>{
                resolve((result["class"])="graduation")
                console.log(result)
            })
        })
    });   
});