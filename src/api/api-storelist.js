import axios from 'axios';

const API_URL = process.env.API_URL;

export var api = {
  async getStoreList() {
    const res = await axios.get(API_URL);
    const data = res.data;
    return { stores: data };
  },

  async getStoreId(id) {
      const path = await axios.get(API_URL + `${id}.json`);
      return path;
  }
};
