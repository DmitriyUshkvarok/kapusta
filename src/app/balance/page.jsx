import PrivatRoute from '@/src/components/PrivateRoute/PrivatRoute';
import Expense from './expense/page';

const BalancePage = () => {
  return (
    <PrivatRoute>
      <Expense />
    </PrivatRoute>
  );
};

export default BalancePage;
