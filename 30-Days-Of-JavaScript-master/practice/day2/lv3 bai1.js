var str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// split with each ' '
// join with seperator ' '
// default is ,
var reg = /love/ig
var obj = str.match(reg)
console.log(obj.length);