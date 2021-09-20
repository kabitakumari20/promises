let data = true
let data1=false
const myPromise = new Promise((resolve, reject) => {
  if (data1) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  }
  else if (data){
    const name="my name is manvi"
    resolve(name)
  }
  else {
    const why = 'Still working on something else'
    reject(why)
    // console.warn(why)
  }
})
myPromise.then((message)=>{
  console.log(message);
})
