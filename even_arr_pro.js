const my_pro=new Promise((resolve,reject)=>{
    var arr=[2,3,4,5,6,7,8]
    var i=0
    var empty=[]
    while (i<arr.length){
        if (arr[i]%2==0){
            var even=arr[i]
            empty.push(even)
        }
        i++
    }resolve (`even,${empty}`)
});
my_pro.then((even)=>{
    console.log(even)
})
// .catch((odd)=>{
//     console.log(odd)
// });





var x=8
console.log(x++)
// console.log(++x)