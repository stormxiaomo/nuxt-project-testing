import {Permissions} from "../types/Permissions";

/** for quickly solved : loop all of the permissions */
export function findLabel(code: string, permissions: Permissions): string {
  for(const permission of permissions){
    if(code === permission.code) {
      return permission.label
    }
    else {
      const label = findLabel(code, permission.children)
      if(label) return label;
    }
  }
  return null;
}

/** for more performance solved : loop only by index key */
/*
const getLabelText = (codeStr, indexes, permissions) => {
  const permissionData = permissions.find(permission => permission.code === codeStr);
  const label = !permissionData ? null : permissionData.label;
  if(indexes.length === 0) return label;
  
  const [ index, ...nextIndexes] = indexes;
  return getLabelText(`${codeStr}-${index}`, nextIndexes, permissionData.children);
}

export function findLabel(code: string, permissions: Permissions): string {
  if(!code) return null;
  const [codeStr, ...indexes] = code.split('-');
  const permissionData = permissions.find(permission => permission.code === codeStr);
  const label = !permissionData ? 'unkonw code' : permissionData.label;
  if(indexes.length === 0) return label;
  
  const [ index, ...nextIndexes] = indexes;;
  return getLabelText(`${codeStr}-${index}`, nextIndexes, permissionData.children);
}
*/