import patterns from "./pattern"
import utils from "./utils"
import constant from "./constant"

patterns.diamond(6)
patterns.equilateral(5)

// utils.permission()
utils.validateUsers(constant.users)
// utils.hasPermission(constant.permissions)

console.log(utils.hasPermission("getUsers", "trainee", "read"));
// console.log("validation");
