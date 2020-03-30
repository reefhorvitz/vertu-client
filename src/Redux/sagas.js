import ApartmentsSags from '../Containers/ApartmentsContainer/sagas';
import ApointmentssSags from '../Containers/AppointmentsContainer/sagas';
import PropertyMetadataSags from '../Containers/PropertyMetadata/sagas';
import PropertyMangerSags from '../Containers/PropertyManager/sagas';
import VideoSags from '../Containers/Video/sagas';
import AuthSags from '../Containers/AuthContainer/sagas';
import ToastrSags from '../Containers/Toastr/sagas';

export default [ApartmentsSags, PropertyMetadataSags, ApointmentssSags, PropertyMangerSags, VideoSags, AuthSags,
    ToastrSags]