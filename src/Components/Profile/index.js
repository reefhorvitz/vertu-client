import React, {useState} from 'react';
import ProfileBackground from '../../static/images/profile-bg.png';

const Profile = ({name, phone, email, img,
                     updateDetails}) => {
    const [newName, setNewName] = useState(name);
    const [newPhone, setNewPhone] = useState(phone);
    const [newEmail, setNewEmail] = useState(email);
    const [newImg, setNewImg] = useState(img);
    const onSave = (e) => {
        e.preventDefault();
        updateDetails(newName, newPhone, newEmail)
    };

    return (
        <React.Fragment>
            <div className="profile-img-lft">
                <img src={ProfileBackground} className="img-responsive"/>
            </div>
            <div className="profile-info-rgt profile-edit">
                <div className="profile-info-text">
                    <h2>My Profile</h2>
                    <form>
                        <span className="profile-img">
                            <span>
                                <img src={newImg} className="img-responsive"/>
                            </span>
                        </span>
                        <span className="profile-name"><label>name</label>
                            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}/>
                        </span>
                        <span className="profile-phone"><label>Phone</label>
                            <input type="text" value={newPhone} onChange={(e) => setNewPhone(e.target.value)}/>
                        </span>
                        <span className="profile-contact"><label>Email</label>
                            <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/>
                        </span>
                        <span className="profile-log">
                            <input onClick={onSave} type="submit" value="Save"/>
                        </span>
                    </form>
                </div>
            </div>
        </React.Fragment>);
}

export default Profile;