# select-timezone-material-ui

It allows you to select one of the timezones defined by [Moment.Timezone](https://momentjs.com/timezone/) from a material-ui like dropdown component

---

## Demo

You can access the storybook for this component [here](https://iulian-radu-at.github.io/select-timezone-material-ui/).

## Props

The component accepts the props defined bellow in the table.

### Props accepted by SelectTimezoneMaterialUi

| Name                | Type                                                   | Required | Default   | Description                                             |
|---------------------|--------------------------------------------------------|----------|-----------|---------------------------------------------------------|
| FormHelperTextProps | FormHelperTextProps                                    | no       | undefined | The props passed to helper text                         |
| helperText          | string                                                 | no       | undefined | The helper text                                         |
| id                  | string                                                 | no       | undefined | The id of the field                                     |
| InputLabelProps     | InputLabelProps                                        | no       | undefined | The Props passed to label                               |
| label               | string                                                 | yes      | -         | The label of the field                                  |
| onChange            | (timezoneName: string, timezoneOffset: number) => void | yes      | -         | The callback function called when the option is changed |
| showTimezoneOffset  | boolean                                                | no       | false     | The options include the GMT offset if it is true        |
| timezoneName        | string                                                 | no       | undefined | The initially selected timezone                         |

---

## Versions

| SelectTimezoneMaterialUi _uses_ | Material-ui | React  |
|--------------------------------:|:-----------:|:------:|
|                           1.0.x |    4.2.0    | 16.8.6 |

### About versioning schema used for SelectTimezoneMaterialUi

- Major - it will be increased if the major version of the dependat package changes or there are breaking changes in the code of SelectTimezoneMaterialUi
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of SelectTimezoneMaterialUi

---

## Example

The base component which allows to create read-only or creatable select components for selecting only one or more values:

```js
import * as React from "react";
import SelectTimezoneMaterialUi from "input-material-ui";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SelectTimezoneMaterialUi
          label="Timezone"
          helpertext="Please select a timezone from the list"
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
