import React, { useState, useEffect} from 'react';
import DateCard from './DateCard'
const { datesGenerator } = require('dates-generator');
const presentDay = new Date();
const year = presentDay.getFullYear();
const month = presentDay.getMonth();

const body = {
  year,
  month, // 0 - 11, 0 = Jan - 11 = Dec
  startingDay:0, // starting day of the calendar, 0 = Sun - 6 = Sat, default is 0 if anything is not passed
};

export default function App() {
    const _months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    const _days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const [records, setRecords] = useState([])
    const { dates, previousYear, previousMonth, nextYear, nextMonth }  = datesGenerator(body);
  
    useEffect(()=>{
      let merged = [].concat.apply([], dates);
      setRecords(merged)
    }, [])
  return (
      <>
      {records.map((item, idx)=><DateCard month={_months[item.month]} date={item.date} day={"Wednesday"} key={idx}/>)}
      </>
  )
}
