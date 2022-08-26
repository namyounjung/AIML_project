import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Footer from '../../components/footer';

function Cal(){
    const [value, onChange] = useState(new Date());

    return (
        <div >
            <span> 달력 </span>
            <Calendar onChange={onChange} value={value} />
            <Footer />
        </div>
       
    )
}

export default Cal;