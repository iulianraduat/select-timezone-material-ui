import React from 'react';
import SelectTimezoneMaterialUi from '../src/SelectTimezoneMaterialUi';
import { storiesOf } from '@storybook/react';

const style: React.CSSProperties = {
  height: 20
};

const showSelectedValue = (id: string) => (timezoneName: string, timezoneOffset: number) =>
  (document.getElementById(id).textContent = `${timezoneName} (${timezoneOffset})`);

storiesOf('SelectTimezoneMaterialUi', module)
  .add('options does not contain timezone offset', () => (
    <div>
      <SelectTimezoneMaterialUi onChange={showSelectedValue('stzmui1')} />
      <div style={style} />
      Selected timezone: <span id="stzmui1" />
    </div>
  ))
  .add('options contain timezone offset', () => (
    <div>
      <SelectTimezoneMaterialUi showTimezoneOffset={true} onChange={showSelectedValue('stzmui2')} />
      <div style={style} />
      Selected timezone: <span id="stzmui2" />
    </div>
  ))
  .add('with label', () => (
    <div>
      <SelectTimezoneMaterialUi label="Timezone" onChange={showSelectedValue('stzmui3')} />
      <div style={style} />
      Selected timezone: <span id="stzmui3" />
    </div>
  ))
  .add('with helper text', () => (
    <div>
      <SelectTimezoneMaterialUi
        helperText="Please select a timezone from the list"
        onChange={showSelectedValue('stzmui4')}
      />
      <div style={style} />
      Selected timezone: <span id="stzmui4" />
    </div>
  ))
  .add('with preselected timezone (without GMT in option)', () => (
    <div>
      <SelectTimezoneMaterialUi timezoneName="Etc/UTC" onChange={showSelectedValue('stzmui5')} />
      <div style={style} />
      Selected timezone: <span id="stzmui5" />
    </div>
  ))
  .add('with preselected timezone (with GMT in option)', () => (
    <div>
      <SelectTimezoneMaterialUi
        timezoneName="Etc/UTC (GMT+00:00)"
        showTimezoneOffset={true}
        onChange={showSelectedValue('stzmui6')}
      />
      <div style={style} />
      Selected timezone: <span id="stzmui6" />
    </div>
  ));
