'use client';

import Record from './Record';
import { useRecordList } from '../hooks/useRecordList';

const RecordList = () => {
  const { records } = useRecordList();
  return (
    <section>
      {records.length ? (
        records.map(record => <Record key={record.id} record={record} />)
      ) : (
        <div className="flex h-400 flex-col items-center justify-center">
          <h1 className="text-center text-40 font-bold">
            얼마나
            <br />
            바빴는지
            <br />
            기록할 틈이
            <br />
            없었네요
          </h1>
        </div>
      )}
    </section>
  );
};

export default RecordList;
