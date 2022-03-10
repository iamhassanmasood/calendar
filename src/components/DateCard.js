import React, {Fragment} from 'react';
import {CardWrapper, MonthWrapper, MonthHeading, DateHeading, DaysHeading} from './styledcomponents'




export default function DateCard({month, date, day}){


     return(     
       <Fragment> 
         <CardWrapper>
          <MonthWrapper>
            <MonthHeading>
              {month}          
            </MonthHeading>
          </MonthWrapper>
          <DateHeading>{date}</DateHeading>
          <DaysHeading>{day}</DaysHeading>
        </CardWrapper>
       </Fragment>  
     )
 }


