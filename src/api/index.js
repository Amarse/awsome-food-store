import axios from 'axios';

const API_URL = 'http://localhost:9000/stores';

var api = {
  async getFoodStores() {
    const res = await axios.get(`${API_URL}`);
    const data = res.data;
    return { stores: data };
  },
};

export default api;
