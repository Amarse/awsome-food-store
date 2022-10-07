import styles from './about.module.css';
import { Container, Header } from 'semantic-ui-react';

export default function About() {
  return (
    <>
      <Container text className={styles.about_wrap}>
        <Header as="h2">AWESOME FOOD STORE</Header>
        <p className={styles.framework}>프레임 워크 : Next.js</p>
        <p className={styles.style}>스타일 라이브러리 : semantic-ui-react</p>
        <p className={styles.package}>
          <span className={styles.package_id}>폴더 구조 : </span>
          <a href="https://www.notion.so/alicewonderland/Next-js-e23c280c5e0749869e46bbca6cb35208" target="_blank">
            바로가기
          </a>
        </p>
        <p className={styles.package}>
          vue 와 다른 방식으로 적응 하는데 다소 시간이 걸린 것과 next 주력 기능들의 이해와 퍼포먼스가 좋지 않은 점이
          이번 과제를 하면서 아쉬웠습니다. 듣기만 했던 next.js 써보면서 조금 더 깊게 알아가 보고 싶단 생각이 들었습니다.
          감사합니다.  
        </p>
      </Container>
    </>
  );
}
