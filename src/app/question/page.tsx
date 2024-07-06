import Header from './components/Header';
import RecordForm from './components/RecordForm';
import { cn } from '@/styles/utils';
import { poppins } from '@/styles/fonts';

const Question = () => (
  <main className="flex flex-col items-center p-24 pb-104">
    <Header />
    <h1
      className={cn(
        poppins.className,
        'mb-40 mt-60 text-60 font-extrabold text-primary',
      )}
    >
      WAKe
    </h1>
    <RecordForm />
  </main>
);

export default Question;
