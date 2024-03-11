import React from 'react';
import CurrencyData from 'currency-codes/data';
import Select from 'react-select';

// Props
export interface CurrencySelectProps {
  value?: string;
  onChange?: (
    field: 'country' | 'currency' | 'language',
    currency: string
  ) => void;
}

// Constants
export const DEFAULT_CURRENCY = 'USD - US Dollar';

// Component
const CurrencySelect: React.FC<CurrencySelectProps> = ({
  value = DEFAULT_CURRENCY,
  onChange,
}) => {
  // Prepare data
  const data = CurrencyData.map(({ code, currency }) => {
    return {
      value: code + ' - ' + currency,
      label: code + ' - ' + currency,
    };
  });
  const defaultValue = { value: value, label: value };

  // Render
  return (
    <div>
      <label>
        Currency
        <Select
          options={data}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            onChange?.('currency', newValue?.value || '');
          }}
        />
      </label>
    </div>
  );
};

export default CurrencySelect;
