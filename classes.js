class user{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}
class client extends user{
    constructor(name,age, gmail){
        super(name,age)
        this.hgty = gmail
    } 
}
const d = new client('a', 3, '56')
console.log(d);