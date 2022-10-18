import { Modal } from 'semantic-ui-react';

export default function DetailModal(props) {
  const { onClose } = props;
  return (
    <>
      <Modal closeIcon style={{ top: '20%' }} open={true} onClose={onClose}>
        <Modal.Header></Modal.Header>
        <Modal.Content>{props.children}</Modal.Content>
      </Modal>
    </>
  );
}
