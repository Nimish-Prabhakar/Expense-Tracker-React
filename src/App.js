import {
  Container,
  Header,
  Statistic,
  Segment,
  Grid,
  Icon,
  Form,
  Button,
} from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
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
      <Header as="h3">History</Header>
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
      <Header as="h3">Add New Transaction</Header>
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
        <Button.Group style={{ marginTop: '20px' }}>
          <Button>Cancel</Button>
          <Button.Or></Button.Or>
          <Button primary>Ok</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
