import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import SelectTimezoneMaterialUi from '../src/SelectTimezoneMaterialUi';
import ATDynamicUpdateValuesControlledComponent from './ATDynamicUpdateValuesControlledComponent';

const meta: Meta<typeof SelectTimezoneMaterialUi> = {
  title: 'SelectTimezoneMaterialUi',
  component: SelectTimezoneMaterialUi,
} as Meta<typeof SelectTimezoneMaterialUi>;
export default meta;
type Story = StoryObj<typeof SelectTimezoneMaterialUi>;

const style: React.CSSProperties = {
  height: 20,
};

const showSelectedValue =
  (id: string) => (timezoneName: string, timezoneOffset: number) =>
    (document.getElementById(
      id
    )!.textContent = `${timezoneName} (${timezoneOffset})`);

export const OptionsDoesNotContainTimezoneOffset = () => (
  <div>
    <SelectTimezoneMaterialUi onChange={showSelectedValue('stzmui1')} />
    <div style={style} />
    Selected timezone: <span id="stzmui1" />
  </div>
);
OptionsDoesNotContainTimezoneOffset.storyName =
  'Options does not contain timezone offset';

export const OptionsContainTimezoneOffset = () => (
  <div>
    <SelectTimezoneMaterialUi
      showTimezoneOffset={true}
      onChange={showSelectedValue('stzmui2')}
    />
    <div style={style} />
    Selected timezone: <span id="stzmui2" />
  </div>
);
OptionsContainTimezoneOffset.storyName = 'Options contain timezone offset';

export const Controlled = () => (
  <div>
    <SelectTimezoneMaterialUi
      timezoneName="America/New_York"
      onChange={showSelectedValue('stzmuic')}
    />
    <div style={style} />
    Selected timezone: <span id="stzmuic" />
  </div>
);
Controlled.storyName = 'Controlled';

export const UncontrolledWithDefaultTimezoneName = () => (
  <div>
    <SelectTimezoneMaterialUi
      defaultTimezoneName="America/New_York"
      onChange={showSelectedValue('stzmuiuc')}
    />
    <div style={style} />
    Selected timezone: <span id="stzmuiuc" />
  </div>
);
UncontrolledWithDefaultTimezoneName.storyName =
  'Uncontrolled with default timezone name';

export const WithLabel = () => (
  <div>
    <SelectTimezoneMaterialUi
      label="Timezone"
      onChange={showSelectedValue('stzmuil')}
    />
    <div style={style} />
    Selected timezone: <span id="stzmuil" />
  </div>
);
WithLabel.storyName = 'With label';

export const WithHelperText = () => (
  <div>
    <SelectTimezoneMaterialUi
      helperText="Please select a timezone from the list"
      onChange={showSelectedValue('stzmuiht')}
    />
    <div style={style} />
    Selected timezone: <span id="stzmuiht" />
  </div>
);
WithHelperText.storyName = 'With helper text';

export const WithPreselectedTimezoneWithoutGmtInOption = () => (
  <div>
    <SelectTimezoneMaterialUi
      timezoneName="Etc/UTC"
      onChange={showSelectedValue('stzmuipt1')}
    />
    <div style={style} />
    Selected timezone: <span id="stzmuipt1" />
  </div>
);
WithPreselectedTimezoneWithoutGmtInOption.storyName =
  'With preselected timezone (without GMT in option)';

export const WithPreselectedTimezoneWithGmtInOption = () => (
  <div>
    <SelectTimezoneMaterialUi
      timezoneName="Etc/UTC (GMT+00:00)"
      showTimezoneOffset={true}
      onChange={showSelectedValue('stzmuipt2')}
    />
    <div style={style} />
    Selected timezone: <span id="stzmuipt2" />
  </div>
);
WithPreselectedTimezoneWithGmtInOption.storyName =
  'With preselected timezone (with GMT in option)';

export const DynamicUpdateOfTimezoneForAControlledComponent = () => (
  <div>
    <ATDynamicUpdateValuesControlledComponent />
    <p>The selected timezone should change every 0.5 seconds.</p>
  </div>
);
DynamicUpdateOfTimezoneForAControlledComponent.storyName =
  'Dynamic update of timezone for a controlled component';
