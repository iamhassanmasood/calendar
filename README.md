## Usage Props

| API                  |            PropType            | isRequired | Defaults                                                                                   | Use                                                                                 |
| :------------------- | :----------------------------: | :--------: | :----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| firstDate            |             string             |    Yes     | `moment(Date()).format("YYYY-MM-DD")`                                                      | `<Calendar firstDate={"2022-03-29"}/>`                                              |
| lastDate             |             string             |     No     | `""`                                                                                       | `<Calendar lastDate={"2022-04-28"}/>`                                               |
| dateFormat           | `["MM-DD-YYYY", "YYYY-MM-DD"]` |     No     | `'YYYY-MM-DD'`                                                                             | `<Calendar dateFormat={"YYYY-MM-DD"}/>`                                             |
| datesToShow          |             number             |     No     | `4`                                                                                        | `<Calendar datesToShow={4}/>`                                                       |
| steps                |             number             |     No     | `1`                                                                                        | `<Calendar steps={1}/>`                                                             |
| speed                |             number             |     No     | `100`                                                                                      | `<Calendar speed={300}/> `                                                          |
| closeDates           |             array              |     No     | `[]`                                                                                       | `<Calendar closeDates={["2022-03-31", "2022-04-06", "2022-04-09", "2022-04-14"]}/>` |
| arrows               |            boolean             |     No     | `true`                                                                                     | `<Calendar arrows={true}/>`                                                         |
| swipeToSlide         |            boolean             |     No     | `true`                                                                                     | `<Calendar swipeToSlide={true}/> `                                                  |
| onDateChange         |            function            |     No     | `function getDate(date){ return date }`                                                    |
| cardHeaderStyle      |             object             |     No     | `{backgroundColor:"#8e8f90", borderRadius: "9px 9px 0 0",color: "#fff", fontSize: "18px"}` |
| cardBodyStyle        |             object             |     No     | `{ fontWeight: "normal", color: "black", backgroundColor: "#fff" }`                        |
| cardHeaderStyleClose |             object             |     No     | `{backgroundColor: "#f00202",borderRadius: "9px 9px 0 0",color: "#fff", fontSize: "18px"}` |
| cardBodyStyleClose   |             object             |     No     | `{ fontWeight: "normal", color: "black", backgroundColor: "#f0f0f0"}`                      |
| nextArrow            |            element             |     No     | `<NextArrow/>`                                                                             |                                                                                     |
| previousArrow        |            element             |     No     | `<PreviousArrow/>`                                                                         |

## Props Usage

if you are using custom arrow for you next icon and previous

#

`'components/arrows.jsx'`

```Javascript
import { StepForwardOutlined, StepBackwardOutlined} from "@ant-design/icons";

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
  function getDate(date) {
    console.log(date, "here is your selected date");
  }
  return (
    <Calendar
      dateFormat={"YYYY-MM-DD"}
      onDateChange={getDate}
      nextArrow={<NextTestArrow />}
      previousArrow={<PreviousTestArrow />}
    />
  );
};
```

## License

ISC
