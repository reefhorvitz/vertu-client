import React from 'react';
import ReduxToastr from "react-redux-toastr";

const Toastr = () => {
    return (
        <ReduxToastr
            timeOut={3000}
            newestOnTop={false}
            preventDuplicates
            position="bottom-right"
            getState={(state) => state.get('toastr')}
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick/>
    );
};

export default Toastr;