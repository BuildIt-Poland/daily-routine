function extractQuoteIDFromPath(path) {
  return path.split('/')[3];
}

export default extractQuoteIDFromPath;
