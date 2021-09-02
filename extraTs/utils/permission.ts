// permissions =
// {
//     'getUsers': {
//     all: ['head-trainer'],
//     read : ['trainee', 'trainer'],
//     write : ['trainer'],
//     delete: [],
//     }
// }

// const hasPermission = (moduleName, role, permissionType) =>
//     let found = false
//     const obj = permissions[moduleName]         // fetching the module from name
//     const permission = obj[permissionType]      // fetching type of permission
//     permission.forEach(element => {     // iterating to check permission
//         if(element == role){
//                 found = true        // if role is found in permission the return true
//                 return found
//         }
//     });

//     return found            // if not found, automatically return false
// }

// console.log(hasPermission('getUsers','trainer','read'))

//  export default hasPermission

import constant from '../constant';

/**
 *
 * @param {String} moduleName
 * @param {String} role
 * @param {String} permissionType
 */
const hasPermission = (moduleName , role: string, permissionType: string): boolean => {
    const permission = constant.permissions;

    try {
        // Check permission type of module_name includes role or not
        if ( permission [moduleName][''].includes(role)) {
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