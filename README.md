# select-timezone-material-ui ![Weekly downloads](https://img.shields.io/npm/dw/select-timezone-material-ui 'Weekly downloads')

It allows you to select one of the timezones defined by [Moment.Timezone](https://momentjs.com/timezone/) from a material-ui like dropdown component.

Selecting a timezone will also select all other timezones with the same offset.

---

## Demo

You can access the storybook for this component [here](https://iulian-radu-at.github.io/select-timezone-material-ui/).

## Props

The component accepts the props defined bellow in the table.

### Props accepted by SelectTimezoneMaterialUi

| Name                | Type                                                   | Required | Default   | Description                                             |
| ------------------- | ------------------------------------------------------ | -------- | --------- | ------------------------------------------------------- |
| defaultTimezoneName | string                                                 | no       | undefined | The initially selected timezone                         |
| FormHelperTextProps | FormHelperTextProps                                    | no       | undefined | The props passed to helper text                         |
| helperText          | string                                                 | no       | undefined | The helper text                                         |
| id                  | string                                                 | no       | undefined | The id of the field                                     |
| InputLabelProps     | InputLabelProps                                        | no       | undefined | The Props passed to label                               |
| label               | string                                                 | yes      | -         | The label of the field                                  |
| onChange            | (timezoneName: string, timezoneOffset: number) => void | yes      | -         | The callback function called when the option is changed |
| showTimezoneOffset  | boolean                                                | no       | false     | The options include the GMT offset if it is true        |
| timezoneName        | string                                                 | no       | undefined | The selected timezone                                   |

---

## Versions

| SelectTimezoneMaterialUi _uses_ | Material-ui |      React       |
| ------------------------------: | :---------: | :--------------: |
|                           1.0.x |    4.2.0    |      16.8.6      |
|                           2.0.x |    4.3.0    |      16.8.6      |
|                           2.1.x |    4.3.1    |      16.8.6      |
|                           2.2.x |    4.9.0    |      16.9.0      |
|                           2.3.x |    4.9.7    |      16.9.0      |
|                           2.4.x |   4.10.2    |      16.9.0      |
|                           2.5.x |   4.11.0    |      16.9.0      |
|                           2.6.x |   4.11.3    | 16.9.0 or 17.0.0 |
|                           2.7.x |   4.12.3    | 16.9.0 or 17.0.0 |
|                           2.8.x |    5.0.3    | 16.9.0 or 17.0.0 |

### About versioning schema used for SelectTimezoneMaterialUi

- Major - it will be increased if the major version of the dependat package changes or there are breaking changes in the code of SelectTimezoneMaterialUi
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of SelectTimezoneMaterialUi

---

## Example

The base component which allows to create read-only or creatable select components for selecting only one or more values:

```js
import * as React from 'react';
import SelectTimezoneMaterialUi from 'input-material-ui';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SelectTimezoneMaterialUi
          label="Timezone"
          helperText="Please select a timezone from the list"
          onChange={onChange}
        />
      </div>
    );
  }

  handleChange = (timezoneName: string, timezoneOffset: number) => {
    console.log(timezoneName);
  };
}

export default App;
```

---

## Changelog

### 1.0.0

- select-timezone-material-ui is made publicly available

### 1.0.1

- Fixed the default selected timezones when timezoneName is provided
- Added more examples to storybook

### 1.0.2

- Changed the text of the placeholder

### 1.0.3

- Made the options to keep the underline in name

### 2.0.0

- Made the component to be controlled and uncontrolled

### 2.1.0

- Using a bug fix version of react-select-material-ui
- Updated packages

### 2.2.0

- Updated packages

### 2.3.0

- Updated packages
- Moved from npm to yarn

### 2.4.0

- Updated packages

### 2.5.0

- Updated packages

### 2.5.1

- Fixed crash produced by "export \* from"

### 2.6.0

- Accepting React 17 as peerDependencies
- Fixed security warnings

### 2.7.0

- Updated the packages

### 2.8.0

- Updated the packages
