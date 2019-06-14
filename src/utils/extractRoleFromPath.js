function extractRoleFromPath(path) {
  return path.replace(/\//g, '').toLowerCase();
}

export default extractRoleFromPath;
