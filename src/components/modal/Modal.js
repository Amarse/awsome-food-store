import {  Modal } from 'semantic-ui-react';

export default function DetailModal({ onClose = () => {}, children }) {

  return (
    <>
      <Modal style={{top: "20%"}}
        closeIcon
        open={true}
        onClose={onClose}>
        <Modal.Content>{children}</Modal.Content>
      </Modal>
    </>
  );
}
