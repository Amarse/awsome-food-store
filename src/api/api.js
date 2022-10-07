import axios from 'axios';

const API_URL = process.env.API_URL;

export async function getStoreList() {
  const res = await axios.get(API_URL);
  const data = res.data;
  const items = [];
  for (const key in data) {
    items.push({ id: key, ...data[key] });
  }
  return items;
}

export async function getStorePath(id) {
  const allId = await getStoreList();
  return allId.find((item) => item.id === id);
}
