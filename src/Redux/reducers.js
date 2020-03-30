import {combineReducers} from "redux-immutable";
import { connectRouter } from 'connected-react-router/immutable'
import ApartmentReducer from '../Containers/ApartmentsContainer/reducer';
import AppointmentsReducer from '../Containers/AppointmentsContainer/reducer';
import AuthReducer from "../Containers/AuthContainer/reducer";
import FiltersReducer from "../Containers/Filters/reducer";
import PropertyMetadataReducer from "../Containers/PropertyMetadata/reducer";
import PropertyManagerReducer from "../Containers/PropertyManager/reducer";
import VideoReducer from "../Containers/Video/reducer";
import {reducer as toastrReducer} from 'react-redux-toastr'


export default (history) => combineReducers({
    apartments: ApartmentReducer,
    appointments: AppointmentsReducer,
    auth: AuthReducer,
    filters: FiltersReducer,
    propertyMetadata: PropertyMetadataReducer,
    propertyManager: PropertyManagerReducer,
    video: VideoReducer,
    toastr: toastrReducer,
    router: connectRouter(history)
});