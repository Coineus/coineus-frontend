// import { LOCAL_KEYS } from 'constants/keys';
// import { WS_BASE_URL } from 'constants/routes';
import React from 'react';

import loading from '../../loading.svg';
// import { operationArchive, operationDelete } from 'services/operationService';

type TableProps = {
  heads: string[];
  rows: string[][];
};

const Table = ({ heads, rows }: TableProps) => {
  // useEffect(() => {
  //   const ws = new WebSocket(WS_BASE_URL);
  //   ws.onopen = (event) => {
  //     console.log(event);
  //     ws.send('');
  //   };
  //   ws.onmessage = function (event) {
  //     const json = JSON.parse(event.data);
  //     try {
  //       console.log(json);
  //       setWsCoins(json);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // }, []);

  // const remove = (coinsymbol: string) => {
  //   operationDelete({
  //     coinsymbol,
  //     userid: localStorage.getItem(LOCAL_KEYS.USER_ID) ?? '',
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // };

  // const sell = (coinsymbol: string) => {
  //   operationArchive({
  //     coinsymbol,
  //     userid: localStorage.getItem(LOCAL_KEYS.USER_ID) ?? '',
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // };

  return (
    <div className="bg-white rounded-3xl px-4 pt-1 pb-2 border">
      <table className="w-full">
        <tr className="text-left">
          {heads.map((head) => (
            <th className="font-normal text-ghost text-sm px-4 py-3 border-b" key={head}>
              {head}
            </th>
          ))}
          <th className="font-normal text-ghost text-sm px-4 py-3 border-b"></th>
          <th className="font-normal text-ghost text-sm px-4 py-3 border-b"></th>
        </tr>
        {rows.map((row, i) => (
          <tr key={'row-' + i}>
            {row.map((item, j) => (
              <td className="font-semibold px-4 py-3 text-sm" key={'item-' + j}>
                {item === undefined ? <img src={loading} alt="loading" /> : item}
              </td>
            ))}
            <td className="font-semibold px-4 py-3 text-sm transition ease-in-out delay-150 cursor-pointer hover:text-green-400">
              Sell
            </td>
            <td className="font-semibold px-4 py-3 text-sm transition ease-in-out delay-150 cursor-pointer hover:text-red-500">
              Remove
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
