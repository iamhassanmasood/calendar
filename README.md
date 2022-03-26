## Usage Props

| API           | PropType | isRequired | Defaults                                 | Use |
| :------------ | :------: | :--------: | :--------------------------------------- | --- |
| firstDate     |  string  |    Yes     | `'moment(Date()).format("YYYY-MM-DD")'`  |
| lastDate      |  string  |     No     | `''`                                     |
| datesToShow   |  number  |     No     | `'4'`                                    |
| steps         |  number  |     No     | `'1'`                                    |
| speed         |  number  |     No     | `'100'`                                  |
| disabledDates |  array   |     No     | `'[]'`                                   |
| arrows        | boolean  |     No     | `'true'`                                 |
| swipeToSlide  | boolean  |     No     | `'true'`                                 |
| onDateChange  | function |     No     | `'function getDate(date){ return date }` |
| nextArrow     | element  |     No     | `<NextArrow/>`                           |
| previousArrow | element  |     No     | `<PreviousArrow/>`                       |

## License

ISC
