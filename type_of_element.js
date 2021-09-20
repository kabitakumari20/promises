var readlineSync=require("readline-sync")
var str=readlineSync.question("enter ur number ya string=")
// let str = 'b12c'
var i=0
while (i<str.length){
    b = Number(str[i]);
    if (b === b){
        console.log(`${str[i]}:- Number`)
    }else {
        console.log(`${str[i]}:- String`)
    }
    i++
}
