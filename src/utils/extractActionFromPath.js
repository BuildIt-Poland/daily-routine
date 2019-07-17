function extractActionFromPath(path) {
  return path.split('/')[2] || '';
}

export default extractActionFromPath;
