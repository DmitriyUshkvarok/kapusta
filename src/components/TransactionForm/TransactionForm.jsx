import DateCalendar from '../Date/Date';

export default function TransactionForm() {
  return (
    <>
      <DateCalendar />
      <form>
        <label>
          <input type="text" />
          <input type="select" />
        </label>
      </form>
    </>
  );
}
