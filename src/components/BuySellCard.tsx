import { LOCAL_KEYS } from 'constants/keys';
import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { operationAdd } from 'services/operationService';

import coinPairs from '../constants/coinPairs.json';

const BuySellCard = ({ afterBuy }: { afterBuy: Function }) => {
  const [isBuy, setIsBuy] = useState(true);
  const [amount, setAmount] = useState<string | number>('');
  const [price, setPrice] = useState<string | number>('');
  const [selectedPair, setSelectedPair] = useState<null | {
    value: string;
    label: string;
  }>(null);

  const options = coinPairs.map((x) => {
    return { value: x.symbol, label: x.name };
  });

  const customStyles: StylesConfig = {
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'black',
    }),
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? '1px solid #e5e7eb' : '1px solid #e5e7eb',
      // color: '#9ca3af',
      padding: 4,
      borderRadius: 12,
      fontSize: 14,
    }),
    input: (provided) => ({
      ...provided,
      color: '#9ca3af',
    }),
  };

  const handlePairSelect = (x: any) => {
    setSelectedPair(x);
  };

  const buyClick = () => {
    if (
      typeof price !== 'string' &&
      typeof amount !== 'string' &&
      selectedPair &&
      selectedPair.value
    ) {
      operationAdd({
        buycost: price,
        coinamount: amount,
        coinsymbol: selectedPair.label + '/USD',
        userid: localStorage.getItem(LOCAL_KEYS.USER_ID) ?? '',
      }).then(() => afterBuy());
    }
  };

  return (
    <div className="rounded-3xl bg-card border">
      <div className="flex text-ghost">
        <div
          aria-hidden="true"
          onClick={() => setIsBuy(!isBuy)}
          className={
            'text-center flex-1 cursor-pointer px-6 py-4 w-36 border-b ' +
            (isBuy ? 'border-b-primary border-b-2' : '')
          }
        >
          <p className={'m-0 ' + (isBuy ? 'text-primary font-semibold' : '')}>
            Add Operation
          </p>
        </div>
        {/* <div
          aria-hidden="true"
          onClick={() => setIsBuy(!isBuy)}
          className={
            'text-center flex-1 cursor-pointer px-6 py-4 w-36 border-b ' +
            (!isBuy ? 'border-b-primary border-b-2' : '')
          }
        >
          <p className={'m-0 ' + (!isBuy ? 'text-primary font-semibold' : '')}>Sell</p>
        </div> */}
      </div>
      <div className="p-4">
        <div className="mb-4">
          <Select
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: '#5841d8',
              },
            })}
            onChange={handlePairSelect}
            styles={customStyles}
            options={options}
          />
        </div>
        <div className="flex gap-x-4 mb-4">
          <div>
            <input
              value={amount}
              type="number"
              step="0.1"
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              placeholder="Amount"
            />
          </div>
          <div>
            <input
              value={price}
              type="number"
              step="0.1"
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              placeholder="Price"
            />
          </div>
        </div>
        <button onClick={buyClick}>{isBuy ? 'Buy' : 'Sell'}</button>
      </div>
    </div>
  );
};

export default BuySellCard;
