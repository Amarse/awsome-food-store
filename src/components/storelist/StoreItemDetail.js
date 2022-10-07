import styles from './storeListDetail.module.css';

export default function StoreItemDetail(props) {
  console.log(props);
  const { item } = props;

  return (
    <>
      <div className={styles.detail_wrap}>
        <div className={styles.name_container}>
          <span className={styles.name}>{item.name}</span>
        </div>
        <div className={styles.container}>
          <div className={styles.detail_image}>
            <img src={item.image} className={styles.image} />
          </div>
          <ul className={styles.contents}>
            <li className={styles.description}>
              {item.description.split('\n').map((str, index) => {
                return <p key={index}>{str}</p>;
              })}
            </li>
            <li className={styles.url}>
              <a href={item.url} target="_blank">
                {item.url}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
