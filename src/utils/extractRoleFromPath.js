function extractRoleFromPath(path) {
  return path.replace(/\//g, '');
}

export default extractRoleFromPath;
