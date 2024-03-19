function dymaic_key (key: string, value: string) {
    let dynamic_obj = {}
    dynamic_obj[key] = value
    return dynamic_obj
}
let user_pre = dymaic_key("theme", "dark")
let user_pre2 = dymaic_key("theme", "light")
console.log(user_pre2);
