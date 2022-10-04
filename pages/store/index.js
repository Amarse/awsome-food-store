import { useEffect, useState } from 'react';
import api from '../../src/api/index.js';
import FoodList from '../../src/components/foodList/FoodList.js';

export default function Store() {
  const [storeList, setStoreList] = useState([]);

  async function getData() {
    const { stores } = await api.getFoodStores();
    setStoreList(stores);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <FoodList storeList={storeList} />
    </div>
  );
}
