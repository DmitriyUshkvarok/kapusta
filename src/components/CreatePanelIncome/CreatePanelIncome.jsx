import ListPanelBalance from '../ListPanelBalance/ListPanelBalance';
import Summary from '../Summary/Summary';

const CreatePanelIncome = () => {
  return (
    <>
      <ListPanelBalance data={[]} />
      <Summary data={[]} />
    </>
  );
};

export default CreatePanelIncome;
