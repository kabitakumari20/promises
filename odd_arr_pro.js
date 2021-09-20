const my_pro=new Promise((resolve,reject)=>{
    var arr=[2,3,4,5,6,7,8]
    var i=0
    var empty=[]
    while (i<arr.length){
        if (arr[i]%2!=0){
            var odd=arr[i]
            empty.push(odd)
        }
        i++
    }resolve (`odd,${empty}`)
});
my_pro.then((even)=>{
    console.log(even)
})
