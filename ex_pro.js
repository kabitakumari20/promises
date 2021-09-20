var isMomHappy = false;
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            var reason =('mom is not happy');
            reject(reason);}});
willIGetNewPhone.then((callbak)=>{
    console.log(a)
}).catch((calbak_reject)=>{
    console.log(calbak_reject)
})