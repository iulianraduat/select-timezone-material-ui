import { FormHelperTextProps, InputLabelProps } from '@mui/material';
import * as React from 'react';
import { SelectOption, SingleSelect } from 'react-select-material-ui';
import { getTimeZoneOptions } from './Timezones';

const SelectTimezoneMaterialUi: React.FC<SelectTimezoneMaterialUiProps> = ({
  defaultTimezoneName,
  onChange,
  showTimezoneOffset,
  timezoneName,
  ...rest
}) => {
  const handleChange = React.useCallback(
    (timezoneOffset: number, timezoneOption?: SelectOption) => {
      onChange && onChange(timezoneOption ? timezoneOption.label : '', timezoneOffset);
    },
    [onChange]
  );

  const options: SelectOption[] = React.useMemo(() => getTimeZoneOptions(showTimezoneOffset), [showTimezoneOffset]);

  const selectProps = {
    msgNoOptionsAvailable: 'No timezone was defined',
    msgNoOptionsMatchFilter: 'No timezone matches the filter',
  };

  const defaultValue: number | undefined = React.useMemo(() => {
    if (defaultTimezoneName === undefined) {
      return undefined;
    }

    const matchingOption = options.find((option: SelectOption) => option.label === defaultTimezoneName);
    return matchingOption ? matchingOption.value : undefined;
  }, [options, defaultTimezoneName]);

  const value: number | undefined = React.useMemo(() => {
    if (timezoneName === undefined) {
      return undefined;
    }

    const matchingOption = options.find((option: SelectOption) => option.label === timezoneName);
    return matchingOption ? matchingOption.value : undefined;
  }, [options, timezoneName]);

  // FIXME nu este timezone schimbat pe baza lui value
  console.log({ value, defaultValue, options });

  return (
    <SingleSelect
      key={timezoneName}
      {...rest}
      options={options}
      defaultValue={defaultValue}
      value={value}
      placeholder="Timezone ..."
      onChange={handleChange}
      SelectProps={selectProps}
    />
  );
};

interface SelectTimezoneMaterialUiProps {
  defaultTimezoneName?: string;
  FormHelperTextProps?: FormHelperTextProps;
  helperText?: string;
  id?: string;
  InputLabelProps?: InputLabelProps;
  label?: string;
  onChange: (timezoneName: string, timezoneOffset: number) => void;
  showTimezoneOffset?: boolean;
  timezoneName?: string;
}

export default SelectTimezoneMaterialUi;
