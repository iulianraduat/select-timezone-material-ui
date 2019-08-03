import React, { useState } from 'react';
import SelectTimezoneMaterialUi from '../src/SelectTimezoneMaterialUi';

const ATDynamicUpdateValuesControlledComponent: React.FC = () => {
  const [form, setForm] = useState({ timezoneName: 'Africa/Asmara' });

  const options = ['Africa/Asmara', 'America/Antigua', 'Asia/Chita', 'Europe/Vienna', 'Australia/Brisbane'];

  /* simulate update of the timezone in a controlled mode */
  setTimeout(() => {
    const timezoneName: string = pickRandomOption(options);
    setForm({ ...form, timezoneName });
  }, 500);

  const handleChange = (timezoneName: string, timezoneOffset: number) => {
    setForm({ ...form, timezoneName });
  };

  console.log({ newTimezoneName: form.timezoneName });
  return <SelectTimezoneMaterialUi timezoneName={form.timezoneName} onChange={handleChange} />;
};

let index: number = 0;

const pickRandomOption = (selectOptions: string[]): string => {
  index = (index + 1) % selectOptions.length;
  return selectOptions[index];
};

export default ATDynamicUpdateValuesControlledComponent;
