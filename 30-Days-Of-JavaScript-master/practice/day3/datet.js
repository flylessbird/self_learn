var date = function(dt,min) {
    return new Date (dt.getTime()+min*60000)
}
console.log(date(new Date(2022,3,4),30).toString());