let done = true
let done1=false
const isItDoneYet = new Promise((resolve, reject) => {
  setTimeout(function show(){
    console.log("i am from  navgurukul")
    if (done1) {
      const workDone = 'Here is the thing I built'
      resolve(workDone)
    }
    else if (done){
      const name="my name is manvi"
      resolve(name)
    }
    else {
      const why = 'Still working on something else'
      reject(why)
    }
},5000);
})
console.warn(isItDoneYet)
// isItDoneYet.then((m)=>{
//   console.log(mwret)
// })
//  .catch((b)=>{
//   console.log("6666666666")
// }).finally((x)=>{
//   console.log("i am always with u")
// })
