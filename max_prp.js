const max=new Promise((resolve,reject)=>{
    var arr=[1,2,34,4,115,6,7,8]
    var i=0
    var max=0
    while (i<arr.length){
        if (arr[i]>max){
            max=arr[i]
        }
        i++
    }resolve(max)

});
max.then((max1)=>{
    console.log(max1)
});