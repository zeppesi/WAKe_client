'use client';

import Record from './Record';
import { useRecordList } from '../hooks/useRecordList';

const RecordList = () => {
  const { records } = useRecordList();
  return (
    <section>
      {records.map(record => (
        <Record key={record.id} record={record} />
      ))}
    </section>
  );
};

export default RecordList;
