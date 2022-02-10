const Save = (key, data) => {
  const unique = [];
  data = Array.from(data);
  const newData = data.filter((item) => {
    if(!unique.includes(item.symbol)){
      unique.push(item.symbol);
      return true;
    }else{
      return false;
    }
  });
  console.log(newData);
  localStorage.setItem(key, JSON.stringify(data));
};
export const saved = (key) => {
  return JSON.parse(localStorage.getItem(`${key}`));
}
export default Save;