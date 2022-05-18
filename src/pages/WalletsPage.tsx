/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import DashboardTemplate from 'components/templates/DashboardTemplate';
import React, { useEffect, useState } from 'react';
import { Wallet } from 'react-iconly';
import { useNavigate } from 'react-router-dom';
import { walletAdd, walletGetAll } from 'services/walletService';

const AddWalletModal = ({
  show,
  setShow,
  walletAdded,
}: {
  show: boolean;
  setShow: Function;
  walletAdded: Function;
}) => {
  const [name, setName] = useState('');

  let classAdd = show
    ? 'modal-transition-show opacity-100'
    : 'modal-transition-hide opacity-0';

  const addWallet = () => {
    walletAdd({ name }).then(() => {
      walletAdded();
    });
  };
  return (
    <div
      onClick={() => setShow(false)}
      className={'fixed inset-0 bg-opacity-20 bg-black z-50 ' + classAdd}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute bg-white max-w-md sm:w-136 rounded-md p-3 sm:p-6 m-auto top-32 inset-x-4 flex justify-center"
      >
        <div className="w-full">
          <h2 className="font-semibold text-xl mb-4 text-center">Enter Wallet</h2>
          <input
            className="w-full mb-4"
            value={name}
            placeholder="Wallet Name"
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <button onClick={addWallet}>Add Wallet</button>
        </div>
      </div>
    </div>
  );
};

const WalletCard = ({ name, id }: { name: string; id: string }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(id)}
      className="bg-white rounded-lg border shadow p-4 w-48 relative overflow-hidden cursor-pointer hover:transform group hover:scale-110 transition"
    >
      <div className="flex">
        <div className="absolute -bottom-5 -left-5 transition text-gray-300 group-hover:text-primary">
          <Wallet size={72} set="bold" />
        </div>
        <span className="ml-12 w-full font-semibold text-lg text-black">{name}</span>
      </div>
    </button>
  );
};

const WalletsPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    walletAdded();
  }, []);

  const walletAdded = () => {
    walletGetAll().then((res) => {
      if (res.data) {
        setWallets(res.data);
      }
    });
  };

  return (
    <DashboardTemplate title="Wallet">
      <AddWalletModal walletAdded={walletAdded} setShow={setModalShow} show={modalShow} />
      <div className="flex gap-x-6 mb-4">
        <div>
          <button onClick={() => setModalShow(true)}>Add Wallet</button>
        </div>
      </div>
      <div className="flex gap-x-6">
        {wallets.map((wallet: { id: string; name: string }) => (
          <WalletCard key={wallet.id} id={wallet.id} name={wallet.name} />
        ))}
      </div>
    </DashboardTemplate>
  );
};

export default WalletsPage;
