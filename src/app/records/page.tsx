import Calendar from './components/Calendar';
import Header from './components/Header';

const Records = () => (
  <main>
    <div className="fixed left-0 top-0 w-full">
      <Header />
      <Calendar />
    </div>
  </main>
);

export default Records;
