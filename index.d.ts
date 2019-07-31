import * as React from 'react';
import { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import { InputLabelProps } from '@material-ui/core/InputLabel';
import { InputProps } from '@material-ui/core/Input';

export interface SelectTimezoneMaterialUiProps extends React.Props<SelectTimezoneMaterialUi> {
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

declare class SelectTimezoneMaterialUi extends React.Component<SelectTimezoneMaterialUiProps> {}

declare module 'select-timezone-material-ui' {}

export default SelectTimezoneMaterialUi;
