import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import StatsDisplay from './StatsDisplay';

function ExpenseDisplay({ textAlign, columns }) {
  return (
    <div style={{ marginTop: 15 }}>
      <Segment textAlign={textAlign}>
        <Grid columns={columns} divided>
          <Grid.Row>
            <Grid.Column>
              <StatsDisplay title="Income" value="1000" color="green" />
            </Grid.Column>
            <Grid.Column>
              <StatsDisplay title="Expenses" value="623.50" color="red" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

export default ExpenseDisplay;
