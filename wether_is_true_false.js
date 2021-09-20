const myPromise = new Promise((resolve, reject) => {  
    let data=true
    if(data){ 
        const a="my name is manvi"   
        resolve(a);
        // console.log(a);  
    }
    else {    
        reject(a);
        // console.log(a);  
    }
});

myPromise.then((message)=>{
    console.log(message);
})