## Usage Props

| API             | PropType | isRequired | Defaults                                                                                                                                                      | Use                                                                                    |
| :-------------- | :------: | :--------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| firstDate       |  string  |    Yes     | `'moment(Date()).format("YYYY-MM-DD")'`                                                                                                                       | `<Calendar firstDate={"2022-03-29"}/>`                                                 |
| lastDate        |  string  |     No     | `''`                                                                                                                                                          | `<Calendar lastDate={"2022-04-28"}/>`                                                  |
| datesToShow     |  number  |     No     | `'4'`                                                                                                                                                         | `<Calendar datesToShow={4}/>`                                                          |
| steps           |  number  |     No     | `'1'`                                                                                                                                                         | `<Calendar steps={1}/>`                                                                |
| speed           |  number  |     No     | `'100'`                                                                                                                                                       | `<Calendar speed={300}/> `                                                             |
| disabledDates   |  array   |     No     | `'[]'`                                                                                                                                                        | `<Calendar disabledDates={["2022-03-31", "2022-04-06", "2022-04-09", "2022-04-14"]}/>` |
| arrows          | boolean  |     No     | `'true'`                                                                                                                                                      | `<Calendar arrows={true}/>`                                                            |
| swipeToSlide    | boolean  |     No     | `'true'`                                                                                                                                                      | `<Calendar swipeToSlide={true}/> `                                                     |
| onDateChange    | function |     No     | `'function getDate(date){ return date }`                                                                                                                      |
| cardHeaderStyle | function |     No     | `'function CardHeaderStyle(disable){ return {backgroundColor: !disable ? "#f00202" :"#8e8f90",borderRadius: "9px 9px 0 0",color: "#fff", fontSize: "18px"} }` |
| cardBodyStyle   | function |     No     | `'function getDate(disabele){ return { fontWeight: "normal", color: "black", backgroundColor: !disable ? "#fff" : "#f0f0f0"} }`                               |
| nextArrow       | element  |     No     | `<NextArrow/>`                                                                                                                                                |                                                                                        |
| previousArrow   | element  |     No     | `<PreviousArrow/>`                                                                                                                                            |

## Props Usage

if you are using custom arrow for you next icon and previous

#

`'components/arrows.jsx'`

```Javascript
import { StepForwardOutlined} from "@ant-design/icons";

export const NextTestArrow = (props) => {
  const { className, onClick } = props;
  return (
    <StepForwardOutlined
      className={`${className} arrows-class`}
      onClick={onClick}
    />
  );
};

export const PreviousTestArrow = (props) =>{
  const { className, onClick } = props;
  return (
    <StepBackwardOutlined
      className={`${className} arrows-class`}
      onClick={onClick}
    />
  );
};

```

## Use

`function props` onDateChange
`element props` nextArrow
`element props` previousArrow

```javascript
import React from "react";
import Calendar from "carousel-calendar-react-app";

import { NextTestArrow, PreviousTestArrow } from "./components/arrows";

const App = () => {
  function dateHandler(date) {
    console.log(date, "here is your selected date");
  }
  return (
    <Calendar
      onDateChange={dateHandler}
      nextArrow={<NextTestArrow />}
      previousArrow={<PreviousTestArrow />}
    />
  );
};
```

## License

ISC
