import constant from '../constant';

/**
 *
 * @param {String} moduleName
 * @param {String} role
 * @param {String} permissionType
 */
const hasPermission = (moduleName: string , role: string, permissionType: string): boolean => {
    const permission = constant.permissions;

    try {
        // Check permission type of module_name includes role or not
        if ( permission[moduleName]['all'].includes(role)) {
           return true;
        }
        else {
            if (permission[moduleName][permissionType].includes(role)) {
                return true;
            }
            return false;
        }

    } catch (err) {
        console.log(err);
    }
};
export default hasPermission;