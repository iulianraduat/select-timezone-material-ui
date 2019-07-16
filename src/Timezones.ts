import * as moment from 'moment-timezone';
import { SelectOption } from 'react-select-material-ui';

const reUnderline: RegExp = /_/g;

export const getTimeZoneOptions = (showTimezoneOffset?: boolean) => {
  const timeZones = moment.tz.names();
  const offsetTmz = [];

  for (const i in timeZones) {
    const tz = timeZones[i];
    const tzOffset = moment.tz(tz).format('Z');
    const value: string = parseInt(
      tzOffset
        .replace(':00', '.00')
        .replace(':15', '.25')
        .replace(':30', '.50')
        .replace(':45', '.75')
    ).toFixed(2);
    const tzName = tz.replace(reUnderline, ' ');

    const timeZoneOption: SelectOption = {
      label: showTimezoneOffset ? `${tzName} (GMT${tzOffset})` : tzName,
      value
    };
    offsetTmz.push(timeZoneOption);
  }

  return offsetTmz;

  /*
  return _.sortBy(offsetTmz, [
    function(el) {
      return -el.time;
    }
  ]);
  */
};
