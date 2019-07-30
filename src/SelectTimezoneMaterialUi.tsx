import * as React from 'react';
import { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import { getTimeZoneOptions } from './Timezones';
import { InputLabelProps } from '@material-ui/core/InputLabel';
import { SelectOption, SingleSelect } from 'react-select-material-ui';

const SelectTimezoneMaterialUi: React.FC<SelectTimezoneMaterialUiProps> = ({
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
    msgNoOptionsMatchFilter: 'No timezone matches the filter'
  };

  const defaultValue: number | undefined = React.useMemo(() => {
    const matchingOption = options.find((option: SelectOption) => option.label === timezoneName);
    return matchingOption ? matchingOption.value : undefined;
  }, [options, timezoneName]);

  return (
    <SingleSelect
      {...rest}
      options={options}
      defaultValue={defaultValue}
      placeholder="Timezone ..."
      onChange={handleChange}
      SelectProps={selectProps}
    />
  );
};

interface SelectTimezoneMaterialUiProps {
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
