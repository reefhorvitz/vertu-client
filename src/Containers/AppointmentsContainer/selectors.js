import {APPOINTMENTS_REDUCER} from "../../Redux/consts";
import {PROPERTY, ID, TIME} from './consts';
import {createSelector} from "reselect";

const _getAppointmentByPropertyId = (propertyId) => (state) => state.get(APPOINTMENTS_REDUCER).find(appointment =>(
 appointment.getIn([PROPERTY, ID]) == propertyId
));

export const getAppointmentTimeByPropertyId = (propertyId) => createSelector(
   _getAppointmentByPropertyId(propertyId),
    (appointment) => appointment.get(TIME)
);