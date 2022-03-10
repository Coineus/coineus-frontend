import BuySellCard from 'components/BuySellCard';
import Table from 'components/Table';
import DashboardTemplate from 'components/templates/DashboardTemplate';
import React from 'react';

const DashboardPage = () => {
  const tableData = {
    heads: ['Sembol', 'Alış Fiyatı', 'Anlık', 'Kar/Zarar', '#'],
    rows: [
      ['BTC/USDT', '$2000', '$1900', '%-5', 'Bas'],
      ['BTC/USDT', '$2000', '$1900', '%-5', 'Bas'],
      ['BTC/USDT', '$2000', '$1900', '%-5', 'Bas'],
    ],
  };

  return (
    <DashboardTemplate title="Dashboard">
      <div className="flex gap-x-6">
        <div>
          {/* <h4>Varlıklarım</h4> */}
          <BuySellCard />
        </div>
        <div className="flex-1">
          <Table heads={tableData.heads} rows={tableData.rows} />
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default DashboardPage;
