function extractRoleFromPath(path) {
  const role = path.match(/([^/]+)/);
  return role ? role[0] : '';
}

export default extractRoleFromPath;
