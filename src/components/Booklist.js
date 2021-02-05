import React, { useContext, useEffect } from 'react';
import { MachineContext } from '../state/index';

import { Delete } from './Deleteicon'

function Booklist({}) {
  const [machine, sendToMachine] = useContext(MachineContext);
  const { books, error } = machine.context;
  const list = books.records;

  useEffect(() => {
    sendToMachine('LOAD_BOOKS');
    // eslint-disable-next-line
  }, []);

  // const removeBook = async () => { 
  //   sendToMachine('DELETE_BOOK');
  // }

  return (
    <>
      {machine.matches('list.loading') && (
        <span className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-loader animate-spin text-2xl"
          >
            <line x1="12" y1="2" x2="12" y2="6"></line>
            <line x1="12" y1="18" x2="12" y2="22"></line>
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
            <line x1="2" y1="12" x2="6" y2="12"></line>
            <line x1="18" y1="12" x2="22" y2="12"></line>
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
          </svg>
        </span>
      )}
      <section>
        {list && list.length > 0 && (
          <div>
            {list.map((b) => (
              <div key={b.id}>
                {b.fields.Name}
                {b.fields.Published}
                {b.fields.Author}
                {b.fields.Currency}
                {b.fields.Category}
                <Delete id={b.id}/>
              </div>
            ))}
          </div>
        )}
      </section>
      <div>
        {machine.matches('list.failed') && (
          <span>Data cannot be loaded {error.toString()}</span>
        )}
      </div>
    </>
  );
}

export default Booklist;
