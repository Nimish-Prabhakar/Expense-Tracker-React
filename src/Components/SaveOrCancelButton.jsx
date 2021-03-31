import React from 'react';
import { Button } from 'semantic-ui-react';

function SaveOrCancelButton() {
  return (
    <Button.Group style={{ marginTop: '20px' }}>
      <Button>Cancel</Button>
      <Button.Or></Button.Or>
      <Button primary>Ok</Button>
    </Button.Group>
  );
}

export default SaveOrCancelButton;
