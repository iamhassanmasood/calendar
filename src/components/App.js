import React, { useState, useEffect} from 'react';
import moment from "moment"
import DateCard from './DateCard'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

export default function App() {

    const [records, setRecords] = useState([])
    const generateDates = () => {
      const date = moment("2022-03-10");
      const disabledDates = ["2022-03-10", "2022-03-11", "2022-03-12"];
      const first =  moment(new Date());
      const last = moment("2022-07-10");
      const numberOfDays = last
        ? moment.duration(last.diff(first)).asDays() + 1
        : 60;
      const dates = [];
      for (let i = 0; i < numberOfDays; i += 1) {
        const isDisabled = !!disabledDates.includes(date.format('YYYY-MM-DD'));
        dates.push({
          date: date.format('YYYY-MM-DD'),
          day: date.format('D'),
          day_of_week: date.format('dddd'),
          month: date.format('MMMM'),
          disabled: isDisabled,
        });
        date.add(1, 'days');
      }
      return setRecords(dates);
    };
  
    useEffect(()=>{
      const first = moment(new Date());
      const selected = moment("2022-07-10");
      const selectedDayIndex = moment.duration(selected.diff(first)).asDays();
      console.log(selectedDayIndex, "selectedDayIndex")
      generateDates()
    }, [])
    
  return (
      <Carousel autoplay>
      {records.map((item, idx)=><DateCard month={item.month} date={item.day} day={item.day_of_week} key={idx}/>)}
      </Carousel>
  )
}
