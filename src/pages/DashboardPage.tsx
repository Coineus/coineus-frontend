import BuySellCard from 'components/BuySellCard';
import Table from 'components/Table';
import DashboardTemplate from 'components/templates/DashboardTemplate';
import { LOCAL_KEYS } from 'constants/keys';
import { APP_URL } from 'constants/routes';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { operationGetAll } from 'services/operationService';
import { getCurrentUser } from 'services/userService';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [operations, setOperations] = useState([]);

  const tableData = {
    heads: ['Sembol', 'Alış Fiyatı', 'Miktar', 'Anlık', 'Kar/Zarar'],
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
          return [op.coinsymbol, op.buycost, op.coinamount, '', ''];
        },
      );
      setOperations(rowOperation);
    }
  };

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
