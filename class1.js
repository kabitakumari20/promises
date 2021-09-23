class user{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    nav(name){
        console.log(this.name)
        console.log(name)
    }
}
let a=new user("manvi",20)
let b = a.nav('kabita')