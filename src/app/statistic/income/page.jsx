import Link from 'next/link';
const IncomePage = () => {
  return (
    <div>
      <Link href="/statistic/income">income prev</Link>
      <p>income</p>
      <Link href="/statistic/expense">expense next</Link>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
      </ul>
      <div>dinamic panel</div>
    </div>
  );
};

export default IncomePage;
