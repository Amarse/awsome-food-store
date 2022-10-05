import { useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

export default function DetailModal({ onClose, show, storeList }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {show ? (
        <Modal closeIcon open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
          <Header icon="archive" content="Archive Old Messages" />
          <Modal.Content>
            <p></p>
          </Modal.Content>
          <Modal.Actions>
            <Button color="red" onClick={() => setOpen(false)}>
              <Icon name="remove" /> No
            </Button>
            <Button color="green" onClick={() => setOpen(false)}>
              <Icon name="checkmark" /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
      ) : null}
    </>
  );
}
