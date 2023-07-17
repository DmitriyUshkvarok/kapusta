import PrivatRoute from '@/src/components/PrivateRoute/PrivatRoute';
import BalanceTopPanel from '@/src/components/BalanceTopPanel/BalanceTopPanel';

const BalancePage = () => {
  return (
    <PrivatRoute>
      <div>привет это домашняя страница</div>
      <BalanceTopPanel />
    </PrivatRoute>
  );
};

export default BalancePage;