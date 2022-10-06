import useSWR from 'swr';
import Error from '../../../pages/_error.js';
import styles from './storeListDetail.module.css';

const pathId = (id) => fetch(`http://localhost:9000/stores/${id}`).then((res) => res.json());

export default function StoreItemDetail({ id }) {

  const { data, error } = useSWR(id, pathId);

  if (error)
    return (
      <div>
       
      </div>
    );
  if (!data) return <div> <Error /></div>;

  return (
    <>
      <div className={styles.detail_wrap}>
        <div className={styles.name_container}>
          <span className={styles.name}>{data.name}</span>
        </div>
        <div className={styles.container}>
          <div className={styles.detail_image}>
            <img src={data.image} className={styles.image} />
          </div>
          <ul className={styles.contents}>
            <li className={styles.description}>
              {data.description.split('\n').map((str, index) => {
                return <p key={index}>{str}</p>;
              })}
            </li>
            <li className={styles.url}>
              <a href={data.url} target="_blank">
                {data.url}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
