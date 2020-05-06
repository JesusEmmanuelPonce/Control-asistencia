import React, { useState, useEffect } from 'react';
import './clock.css';

const Clock = () => {

    const [clock, setClock] = useState('00:00:00');

    useEffect(()=>{
        const clock = setInterval(() => {
            const event = new Date();
            let h = event.getHours();
            let m = event.getMinutes();
            let s = event.getSeconds();
            
                if(s < 10) {
                    s = '0' + s 
                }
                if(m < 10) {
                    m = '0' + m
                }
                if(h < 10) {
                    h = '0' + h
                }

            const hour = [h,':',m,':',s];
            setClock(hour);
        }, 1000);

        return () => clearTimeout(clock);
    })

    return(
        <div className="container-watch">
            { clock }
        </div>
    )
}

export default Clock;