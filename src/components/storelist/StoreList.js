import { Row, Col } from 'antd';
import StoreListItem from './StoreListItem.js';

export default function StoreList(props) {
  const { items } = props;
  return (
    <>
      <div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col span={6} key={item.id}>
                <StoreListItem id={item.id} thumb={item.thumb} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
