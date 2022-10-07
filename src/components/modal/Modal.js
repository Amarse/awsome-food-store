import {  Modal } from 'semantic-ui-react';

export default function DetailModal({ onClose = () => {}, children }) {

  return (
    <>
      <Modal closeIcon animation={false} style={{top: "20%"}}
        open={true}
        onClose={onClose}>
          <Modal.Header></Modal.Header>
        <Modal.Content>{children}</Modal.Content>
      </Modal>
    </>
  );
}
