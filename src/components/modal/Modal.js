import {  Modal } from 'semantic-ui-react';

export default function DetailModal({ onClose = () => {}, children }) {
  console.log(children)
  return (
    <>
      <Modal
        closeIcon
        open={true}
        onClose={onClose}
      >
        <Modal.Content>{children}</Modal.Content>
      </Modal>
    </>
  );
}
