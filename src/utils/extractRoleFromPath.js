function extractRoleFromPath(path) {
  return path.split('/')[0].toLowerCase();
}

export default extractRoleFromPath;
