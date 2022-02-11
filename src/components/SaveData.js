const Save = (key, data) => {
  localStorage.setItem(key, JSON.stringify(Array.from(data)));
};
export const saved = (key) => JSON.parse(localStorage.getItem(`${key}`));
export default Save;
