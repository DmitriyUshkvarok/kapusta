import StatisticPanelBalance from '@/src/components/StatisticPanelBalance/StatisticPanelBalance';
export default function StatisticLayout({ children }) {
  return (
    <>
      <div>
        <StatisticPanelBalance />
      </div>
      <p>panel income and expense</p>
      {children}
    </>
  );
}
