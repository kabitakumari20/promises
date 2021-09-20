// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });

// p.then((result) => {
//     console.log(result);
//     return result * 2;
// }).then((result) => {
//     console.log(result);
//     return result * 3;
// });


// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });

// p.then((result) => {
//     console.log(result); // 10
//     return result * 2;
// }).then((result) => {
//     console.log(result); // 20
//     return result * 3;
// }).then((result) => {
//     console.log(result); // 60
//     return result * 4;
// }).then((result)=>{
//     console.log(result) //240
// })


// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });

// p.then((result) => {
//     console.log(result); // 10
//     return result * 2;
// })

// p.then((result) => {
//     console.log(result); // 10
//     return result * 3;
// })

// p.then((result) => {
//     console.log(result); // 10
//     return result * 4;
// });


let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 1000);
});

p.then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result * 2);
        }, 3 * 1000);
    });
}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result * 3);
        }, 3 * 1000);
    });
}).then((result) =>{
    console.log(result)

});

// const mypro=new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(10), 1000); 
//   })
// mypro.then(function(result) {
//     console.log(result)
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve(result*2),1000)
//     })
  
// }).then(function(result) { 
//     console.log(result)

  
// });
  

// const pro=new Promise((resolve,reject)=>{
//     setTimeout (()=>{resolve(12)},3*1000)
// })
// pro.then((result)=>{
//     console.log(result)
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve(result*2)},3*100)
//     })
// }).then((result)=>console.log(result))


// const mypro=new Promise((resolve,reject)=>{
//     resolve(20)
// });
// mypro.then((result)=>{
//     console.log(result)
//     return new Promise((resolve,reject)=>{resolve(result*3)
//     })
// }).then((result)=>{
//     console.log(result)
//     return new Promise((resolve,reject)=>{resolve(result*2)
//     })
// }).then((result)=>{
//     console.log(result)
// })