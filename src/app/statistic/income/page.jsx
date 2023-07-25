import IncomeList from '@/src/components/IncomeList/IncomeList';
import DiagramIncome from '@/src/components/DiagramIncome/DiagramIncome';

const IncomePage = () => {
  return (
    <>
      <div>
        <IncomeList />
      </div>
      <div>
        <DiagramIncome />
      </div>
    </>
  );
};

export default IncomePage;
