function dymaic_key(key, value) {
    var dynamic_obj = {};
    dynamic_obj[key] = value;
    return dynamic_obj;
}
var user_pre = dymaic_key("theme", "dark");
var user_pre2 = dymaic_key("theme", "light");
console.log(user_pre2);
