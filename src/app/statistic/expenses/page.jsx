import ExpensesList from '@/src/components/ExpensesList/ExpensesList';
import DiagramaExpense from '@/src/components/DiagramExpenses/DiagramaExpense';
import styles from '../../../sass/components/_statistic-page.module.scss';

const ExpensesPage = () => {
  return (
    <>
      <div>
        <ExpensesList />
      </div>
      <div>
        <DiagramaExpense />
      </div>
    </>
  );
};

export default ExpensesPage;
