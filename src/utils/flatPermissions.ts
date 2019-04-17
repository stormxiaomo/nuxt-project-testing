import { Permission, Permissions } from "../types/Permissions";

const PermissionReducer = (parent, level) => (pre: object, permission: Permission) => {
  const { children, code, label } = permission;

  const morePermissionItems = children.length > 0
    ? flatPermissions(children, code, level + 1)
    : {};

  return { ...pre, [code]: { code, label, parent, level}, ...morePermissionItems};
};

export function flatPermissions(permissions: Permissions, parent: string = "", level = 0): object {
  const FlattenPermission = permissions.reduce(PermissionReducer(parent, level), {});
  return FlattenPermission;
}