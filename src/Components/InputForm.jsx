import React from 'react';
import { Form } from 'semantic-ui-react';

function InputForm(props) {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          placeholder="Add An Item"
          label="Description"
        ></Form.Input>
        <Form.Input
          width={4}
          label="Value"
          placeholder="Add the Value"
          icon="dollar"
          iconPosition="left"
        />
      </Form.Group>
      {props.children}
    </Form>
  );
}

export default InputForm;
