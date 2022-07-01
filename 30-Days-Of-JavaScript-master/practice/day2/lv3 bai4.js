var str = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
var reg = /\d{4,5}/g;
var arr = str.match(reg)
function myFunction(num) {
    return parseInt(num);
}
arr.map(myFunction)
console.log(arr);
// console.log(arr.split(','));
