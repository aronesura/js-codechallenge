import React from 'react';
import countries from 'i18n-iso-countries';
import Select from 'react-select';
import { CountrySelectOption, CountrySelectInput } from './CountrySelectOption';
import { ICountry } from 'types/country.types';

// Register countries
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

// --- TASK G ---
// Please replace "any" with a proper type in this file (and where it is needed).

// Props
export interface CountrySelectProps {
  value?: ICountry;
  onChange?: (
    field: 'country' | 'currency' | 'language',
    value: ICountry
  ) => void;
}

// Constants
export const DEFAULT_COUNTRY: ICountry = {
  code: 'US',
  name: 'United States of America',
};

// Component
export const CountrySelect: React.FC<CountrySelectProps> = ({
  value = DEFAULT_COUNTRY,
  onChange,
}) => {
  // Prepare Data
  const data: { value: ICountry; label: string }[] = Object.entries(
    countries.getNames('en', { select: 'official' })
  ).map(([code, name]) => {
    return {
      value: { code, name },
      label: name,
    };
  });
  const defaultValue = { value: value, label: value.name };

  // Render
  return (
    <div>
      <label>
        Country
        <Select
          options={data}
          components={{
            Option: CountrySelectOption,
            SingleValue: CountrySelectInput,
          }}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            onChange?.(
              'country',
              (newValue as { value: ICountry; label: string })?.value
            );
          }}
          styles={{
            input: (styles) => ({
              ...styles,
              position: 'absolute',
              inset: 0,
              margin: 0,
              padding: 0,
            }),
          }}
        />
      </label>
    </div>
  );
};

export default CountrySelect;
