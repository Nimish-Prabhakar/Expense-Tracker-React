import React from 'react';
import { Segment, Grid, Icon } from 'semantic-ui-react';

function IndividualExpense({ description, value, color, isExpense }) {
  return (
    <div style={{ margin: 10 }}>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign="right" divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

export default IndividualExpense;
