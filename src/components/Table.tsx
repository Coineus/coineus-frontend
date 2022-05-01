import React from 'react';

type TableProps = {
  heads: string[];
  rows: string[][];
};

const Table = ({ heads, rows }: TableProps) => {
  return (
    <div className="bg-white rounded-3xl px-4 pt-1 pb-2 border">
      <table className="w-full">
        <tr className="text-left">
          {heads.map((head) => (
            <th className="font-normal text-ghost text-sm px-4 py-3 border-b" key={head}>
              {head}
            </th>
          ))}
        </tr>
        {rows.map((row) => (
          <tr key={'row'}>
            {row.map((item) => (
              <td className="font-semibold px-4 py-3 text-sm" key={item}>
                {item}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
