import {APPOINTMENTS_REDUCER} from "../../Redux/consts";
import {PROPERTY, ID, TIME} from './consts';
import {createSelector} from "reselect";

const _getAppointmentByPropertyId = (propertyId) => (state) => state.get(APPOINTMENTS_REDUCER).find(appointment =>(
 appointment.getIn([PROPERTY, ID]) == propertyId
));

const _getAppointments = state => state.get(APPOINTMENTS_REDUCER);

export const getAppointmentTimeByPropertyId = (propertyId) => createSelector(
   _getAppointmentByPropertyId(propertyId),
    (appointment) => appointment.get(TIME)
);

export const getPropertyIdByAppointmentId = (appointmentId) => createSelector(
  _getAppointments,
  appointments => {
      const index = appointments.findIndex(appointment => appointment.get(ID) == appointmentId);
      return appointments.getIn([index, PROPERTY, ID]);
  }
);

export const getAppointmentIdByPropertyId = (propertyId) => createSelector(
    _getAppointmentByPropertyId(propertyId),
    appointment => appointment.get(ID)
)
