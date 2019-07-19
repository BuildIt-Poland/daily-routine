function extractRoleFromPath(path) {
  const match = path.match(/([^/]+)/);

  if (!match) {
    return;
  }

  return match[0];
}

export default extractRoleFromPath;
