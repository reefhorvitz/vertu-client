import React, {useEffect} from 'react';
import {addCalenderToJquery} from "../../../js/jquery.calendar";
import ConfirmImage from '../../../static/images/go.png';

const $ = window.jQuery;
addCalenderToJquery($);

const ScheduleCalendar = ({time, setTime, setDate, onConfirm}) => {
    useEffect(() => {
        $('#pnlEventCalendar').calendar({
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'], onSelect: function (event) {
                setDate(event.date);
            }
        });
        }, []);

    return (
        <div className="event-calender">
            <div className="event-cal">
                <h4>Select a Date & Time Range</h4>
                <div id="pnlEventCalendar"></div>
                <div className="event-time">
                    <label>Time</label>
                    <input type="time" id="appt" name="appt" min="09:00" max="18:00" value={time}
                           onChange={e => setTime(e.target.value)}/>
                        <span onClick={onConfirm} className="confirm-date"><img src={ConfirmImage}/></span>
                </div>
            </div>
        </div>

);
};

export default ScheduleCalendar;