import BuySellCard from 'components/BuySellCard';
import Table from 'components/Table';
import DashboardTemplate from 'components/templates/DashboardTemplate';
import { LOCAL_KEYS } from 'constants/keys';
import { APP_URL, WS_BASE_URL } from 'constants/routes';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { operationGetAll } from 'services/operationService';
import { getCurrentUser } from 'services/userService';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [operations, setOperations] = useState<any>([]);
  const [wsCoins, setWsCoins] = useState<any>({});

  const tableData = {
    heads: ['Sembol', 'Alış Fiyatı', 'Miktar', 'Anlık', ''],
  };

  useEffect(() => {
    (async () => {
      const currentUserRes = await getCurrentUser();
      if (currentUserRes.data) {
        localStorage.setItem(LOCAL_KEYS.USER_ID, currentUserRes.data.id);
        localStorage.setItem(LOCAL_KEYS.USER_EMAIL, currentUserRes.data.email);
        localStorage.setItem(LOCAL_KEYS.USER_NAME, currentUserRes.data.username);
      } else {
        Object.keys(LOCAL_KEYS).forEach((localKey) => {
          localStorage.removeItem(localKey);
        });
        navigate(APP_URL.LOGIN);
      }

      fillTableWithOperations();
    })();
  }, []);

  const fillTableWithOperations = async () => {
    const allOperationRes = await operationGetAll();
    if (allOperationRes.data) {
      let rowOperation = allOperationRes.data.map(
        (op: { coinsymbol: string; buycost: number; coinamount: number }) => {
          return [
            op.coinsymbol,
            op.buycost,
            op.coinamount,
            wsCoins[op.coinsymbol.split('/')[0]],
            '',
          ];
        },
      );
      console.log(rowOperation);
      setOperations(rowOperation);
    }
  };

  useEffect(() => {
    let rowOperation = operations;

    rowOperation.map((op: any) => {
      let opx = op;
      if (op[0]) {
        console.log(wsCoins);
        if (op[0].split('/')[0]) {
          opx[3] = wsCoins[op[0].split('/')[0].toLocaleLowerCase()]
            ? wsCoins[op[0].split('/')[0].toLocaleLowerCase()].usd
            : '';
        }
      }
      return opx;
    });

    console.log(rowOperation);

    if (rowOperation) {
      setOperations(rowOperation);
    }
  }, [wsCoins]);

  useEffect(() => {
    const ws = new WebSocket(WS_BASE_URL);
    ws.onopen = (event) => {
      console.log(event);
      ws.send('');
    };
    ws.onmessage = function (event) {
      const json = JSON.parse(event.data);
      try {
        console.log(json);
        setWsCoins(json);
      } catch (err) {
        console.log(err);
      }
    };
  }, []);

  return (
    <DashboardTemplate title="Dashboard">
      <div className="flex gap-x-6">
        <div>
          {/* <h4>Varlıklarım</h4> */}
          <BuySellCard afterBuy={fillTableWithOperations} />
        </div>
        <div className="flex-1">
          <Table heads={tableData.heads} rows={operations} />
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default DashboardPage;
