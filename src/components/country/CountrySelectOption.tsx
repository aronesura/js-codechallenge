import React from 'react';
import { OptionProps, SingleValueProps, components } from 'react-select';
import { Stack, Typography } from '@mui/material';

/* --- [TASK] ---
Country flags in select field

CURRENT SCENARIO
- The `CountrySelect` displays only the names of the countries.

DESIRED SCENARIO
- The `CountrySelect` displays the corresponding country flag next to the title.
- Flags are visible in both the options and the input field, drawing inspiration from this example:

FURTHER DETAILS
- No expectation to alter the dimensions of the select field, though it's optional.
- Implement a well-considered layout strategy.
- Retrieve flag icons from:
    `https://catamphetamine.gitlab.io/country-flag-icons/3x2/<ISO_CODE>.svg` (codes are in uppercase)
- Note that the `'i18n-iso-countries'` package in use already contains the compatible codes.
- Flags appearing on the `SettingsSelector`-Button is optional
--- [TASK] --- */

// Component
const { Option, SingleValue } = components;

export const CountrySelectOption = (props: OptionProps<any>) => {
  return (
    <div>
      <Option {...props}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <img
            src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${props.data.value.code}.svg`}
            style={{ width: 30 }}
            alt={props.data.value.code}
          />
          <Typography>{props.data.label}</Typography>
        </Stack>
      </Option>
    </div>
  );
};

export const CountrySelectInput = (props: SingleValueProps<any>) => {
  const data = props.getValue()[0];
  return (
    <div>
      <SingleValue {...props}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <img
            src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${data.value.code}.svg`}
            style={{ width: 30 }}
            alt={data.value.code}
          />
          <Typography>{data.label}</Typography>
        </Stack>
      </SingleValue>
    </div>
  );
};
