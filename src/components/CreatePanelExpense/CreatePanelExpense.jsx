import ListPanelBalance from '../ListPanelBalance/ListPanelBalance';
import Summary from '../Summary/Summary';

const expenseData = [
  { name: 'Undeground', sum: '30', category: 'Transport', date: '21.11.2019' },
  { name: 'Bananas', sum: '50', category: 'Products', date: '21.11.2019' },
  {
    name: 'Kindergarten',
    sum: '20 000',
    category: 'Other',
    date: '21.11.2019',
  },
  { name: 'Undeground', sum: '30', category: 'Transport', date: '21.11.2019' },
  { name: 'Undeground', sum: '30', category: 'Transport', date: '21.11.2019' },
  { name: 'Bananas', sum: '50', category: 'Products', date: '21.11.2019' },
  {
    name: 'Kindergarten',
    sum: '20 000',
    category: 'Other',
    date: '21.11.2019',
  },
  { name: 'Bananas', sum: '50', category: 'Products', date: '21.11.2019' },
  {
    name: 'Kindergarten',
    sum: '20 000',
    category: 'Other',
    date: '21.11.2019',
  },
  { name: 'Bananas', sum: '50', category: 'Products', date: '21.11.2019' },
  {
    name: 'Kindergarten',
    sum: '20 000',
    category: 'Other',
    date: '21.11.2019',
  },
];

const data = [
  { month: 'January', sum: '10 000' },
  { month: 'February', sum: '20 000' },
  { month: 'March', sum: '8 000' },
  { month: 'April', sum: '13 000' },
  { month: 'May', sum: '100 000' },
  { month: 'June', sum: '20 000' },
  { month: 'July', sum: '10 000' },
  { month: 'August', sum: '30 000' },
  { month: 'September', sum: '40 000' },
  { month: 'October', sum: '400' },
  { month: 'November', sum: '23 000' },
  { month: 'December', sum: '12 000' },
];

const CreatePanelExpense = () => {
  return (
    <>
      <ListPanelBalance data={expenseData} />
      <Summary data={data} />
    </>
  );
};

export default CreatePanelExpense;
