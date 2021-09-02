import patterns from "./pattern"
import utils from "./utils"
import constant from "./constant"
patterns.diamond(6)
patterns.equilateral(5)
utils.validateUsers(constant.users)
console.log(utils.hasPermission("getUsers", constant.TRAINEE, "read"));

