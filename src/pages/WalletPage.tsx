import DashboardTemplate from 'components/templates/DashboardTemplate';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { walletGetOperationsById } from 'services/walletService';

const WalletPage = () => {
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      walletGetOperationsById({ id }).then((res) => {
        console.log(res);
      });
    }
  }, []);

  return (
    <DashboardTemplate title="Wallet">
      <div>{id}</div>
    </DashboardTemplate>
  );
};

export default WalletPage;
