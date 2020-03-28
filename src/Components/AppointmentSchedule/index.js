import React, {useState} from 'react';
import ScheduleApartmentData from "../../Containers/AppointmentSchedule/ScheduleApartmentData";
import ScheduleCalendar from "./ScheduleCalendar";
import Modal from "../Modals";
import moment from "moment";

const AppointmentSchedule = ({propertyId, closeModal, createAppointment}) => {
    document.documentElement.scrollTop = 0;
    const [time, setTime] = useState('10:00');
    const [date, setDate] = useState(new Date());
    const onConfirm = () => {
        const [hours, minutes] = time.split(':');
        const appointmentTime = moment(date).hours(parseInt(hours)).minutes(parseInt(minutes));
        createAppointment(appointmentTime);
        closeModal();
    };
    return (
        <Modal>
            <div id="boxes" className="reschedule-tour-pop ">
                <div id="dialog" className="window center">
                    <ScheduleApartmentData closeModal={closeModal} propertyId={propertyId}/>
                    <ScheduleCalendar time={time} setTime={setTime} setDate={setDate} onConfirm={onConfirm}/>
                </div>
            </div>
        </Modal>
    );
}

export default AppointmentSchedule;