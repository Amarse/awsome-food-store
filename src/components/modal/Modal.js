import {  Modal } from 'semantic-ui-react';

export default function DetailModal(props) {

  return (
    <>
      <Modal closeIcon style={{top: "20%"}}
        open={true}
        onClose={props.onClose}>
          <Modal.Header></Modal.Header>
        <Modal.Content>{props.children}</Modal.Content>
      </Modal>
    </>
  );
}
