import React from 'react';
import ISO_6391_Languages from 'iso-639-1';

import Select from 'react-select';

// Props
export interface LanguageSelectProps {
  language?: string;
  onChange?: (
    field: 'country' | 'currency' | 'language',
    language: string
  ) => void;
}

// Constants
export const DEFAULT_LANGUAGE = 'English - English';

// Component
const LanguageSelect: React.FC<LanguageSelectProps> = ({
  language = DEFAULT_LANGUAGE,
  onChange,
}) => {
  // Prepare data
  const data = ISO_6391_Languages.getLanguages([
    'en',
    'de',
    'pl',
    'fr',
    'it',
    'es',
  ]).map(({ name, nativeName }) => {
    return {
      value: name + ' - ' + nativeName,
      label: name + ' - ' + nativeName,
    };
  });
  const defaultValue = { value: language, label: language };

  // Render
  return (
    <div>
      <label>
        Language
        <Select
          options={data}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            onChange?.('language', newValue?.value || '');
          }}
        />
      </label>
    </div>
  );
};

export default LanguageSelect;
