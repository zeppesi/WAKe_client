import { Record as RecordType } from '@/types';
import dayjs from 'dayjs';

const Record = ({ record }: { record: RecordType }) => (
  <article className="flex border-b text-14">
    <time className="flex items-center border-r px-8">
      {dayjs(record.createdAt).format('hh:mm')}
    </time>
    <div className="w-full">
      <h5 className="px-12 py-14 font-semibold">{record.content.text}</h5>
      <p className="bg-gray p-12">{record.text}</p>
    </div>
  </article>
);

export default Record;
