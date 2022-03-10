import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';

const BuySellCard = () => {
  const [isBuy, setIsBuy] = useState(true);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

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

  return (
    <div className="rounded-3xl bg-card">
      <div className="flex text-ghost">
        <div
          aria-hidden="true"
          onClick={() => setIsBuy(!isBuy)}
          className={
            'text-center flex-1 cursor-pointer px-6 py-4 w-36 border-b ' +
            (isBuy ? 'border-b-primary border-b-2' : '')
          }
        >
          <p className={'m-0 ' + (isBuy ? 'text-primary font-semibold' : '')}>Buy</p>
        </div>
        <div
          aria-hidden="true"
          onClick={() => setIsBuy(!isBuy)}
          className={
            'text-center flex-1 cursor-pointer px-6 py-4 w-36 border-b ' +
            (!isBuy ? 'border-b-primary border-b-2' : '')
          }
        >
          <p className={'m-0 ' + (!isBuy ? 'text-primary font-semibold' : '')}>Sell</p>
        </div>
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
            styles={customStyles}
            options={options}
          />
        </div>
        <div className="flex gap-x-4 mb-4">
          <div>
            <Input borderWeight="light" bordered placeholder="Amount" color="primary" />
          </div>
          <div>
            <Input borderWeight="light" bordered placeholder="Amount" color="primary" />
          </div>
        </div>
        <Button css={{ width: '100%' }}>{isBuy ? 'Buy' : 'Sell'}</Button>
      </div>
    </div>
  );
};

export default BuySellCard;
