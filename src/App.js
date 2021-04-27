import { Container } from 'semantic-ui-react';
import MainHeader from './Components/MainHeader';
import SaveOrCancelButton from './Components/SaveOrCancelButton';
import InputForm from './Components/InputForm';
import StatsDisplay from './Components/StatsDisplay';
import ExpenseDisplay from './Components/ExpenseDisplay';
import IndividualExpense from './Components/IndividualExpense';

function App() {
  return (
    <Container>
      <MainHeader title="Expense Tracker" />
      <StatsDisplay title="Your Balance" value="2,204" size="small" />
      <ExpenseDisplay textAlign="center" columns={2} />
      <MainHeader title="History" size="medium" style={{ marginTop: '30px' }} />
      <IndividualExpense description="income" value="$250.0" />
      <IndividualExpense description="pastry" value="$55.0" isExpense />
      <IndividualExpense description="funds" value="$25.0" />
      <IndividualExpense description="clothes" value="$215.0" isExpense />
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
