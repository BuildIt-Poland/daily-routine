function addToLocalStorage(key, value) {
  const item = localStorage.getItem(value);

  if (!item) {
    localStorage.setItem(key, value);
  }
}

export default addToLocalStorage;
