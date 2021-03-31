import { Container, Statistic, Segment, Grid, Icon } from 'semantic-ui-react';
import MainHeader from './Components/MainHeader';
import SaveOrCancelButton from './Components/SaveOrCancelButton';
import InputForm from './Components/InputForm';

function App() {
  return (
    <Container>
      <MainHeader title="Expense Tracker" />
      <Statistic size="small">
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>2,204</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: 'left' }}>
                  Income:
                </Statistic.Label>
                <Statistic.Value>1000</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: 'left' }}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>623.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader title="History" size="medium" style={{ marginTop: '30px' }} />
      <Segment color="red">
        <Grid columns={3} textAlign="right" divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Chocolate
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10.0
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="yellow">
        <Grid columns={3} textAlign="right" divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Clothes
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $100.0
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="blue">
        <Grid columns={3} textAlign="right" divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Pastry
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $25.0
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader
        title="Add New Transaction"
        size="medium"
        style={{ marginTop: '30px' }}
      />
      <InputForm>
        <SaveOrCancelButton />
      </InputForm>
    </Container>
  );
}

export default App;
