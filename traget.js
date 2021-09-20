var readlineSync=require("readline-sync")
const my_pro=new Promise((resolve,reject)=>{
    var arr=[2,11,7,12,11]
    var i=0
    var traget=readlineSync.questionInt("enter ur traget=")
    var empty=[]
    while (i<arr.length){
        var j=0
        while (j<arr.length){
            var add=arr[i]+arr[j]
            if (add==traget){
                empty.push(i)
            }
            j++
        }
        i++
    }
    resolve(empty)
});
my_pro.then((traget)=>{
    console.log(traget)
})
