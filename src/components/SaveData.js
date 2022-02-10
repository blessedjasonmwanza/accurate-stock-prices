const Save = (key, data) => {
  data = Array.from(data);
  localStorage.setItem(key, JSON.stringify(data));
};
export const saved = (key) => {
  return JSON.parse(localStorage.getItem(`${key}`));
}
export default Save;