export const storage = {
  save ({ key, value }) {
    return localStorage.setItem(key, value);
  },
  get ({ key }) {
    return localStorage.getItem(key);
  }
}
