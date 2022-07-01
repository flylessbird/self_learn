var is_weekend = function (dt) {
    var date1 = new Date(dt)
    var weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var day = weekDay[date1.getDay()]
    if (day == "Sunday" || day == "Saturday") {
        return "Weekend"
    }
    return "not weekend"
}
console.log(is_weekend("Nov 15, 2014"));