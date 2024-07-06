import Calendar from './components/Calendar';
import Header from './components/Header';
import RecordList from './components/RecordList';

const Records = () => (
  <main className="pt-170">
    <div className="fixed left-0 top-0 w-full">
      <Header />
      <Calendar />
    </div>
    <RecordList />
  </main>
);

export default Records;
