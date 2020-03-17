import React from 'react';
import styles from './styles.module.css';
import Modal from "../index";

const StillInterested = () => {
    return (
        <Modal>
            <div id="boxes">
                <div id="dialog" className="window"><h3>Still Interested?</h3>
                    <div id="lorem"><p>Share your contact information with the virtual agent and the virtual agent will
                        contact you again regarding your interest in this listing</p></div>
                    <div id="popupfoot"><a href="#" className="share">Share My Information</a><a className="next-time"
                                                                                                  href="#">Maybe Next
                        time</a></div>
                    <a href="#" className="close"><i className="fa fa-close" aria-hidden="true"></i></a>
                </div>
                <div id="mask"></div>
            </div>
        </Modal>
    );
}

export default StillInterested;