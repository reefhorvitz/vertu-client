import getAllAppointmentsQuery from '../../graphql/queries/appointments/getAllAppointments'
import {graphqlRequest} from "./index";

export async function getAllAppointments(userId) {
    const query = getAllAppointmentsQuery(userId);
    const appointments = await graphqlRequest(query);
    return appointments
}