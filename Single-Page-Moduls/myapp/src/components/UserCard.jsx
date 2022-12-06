import React from "react";

const UserCard = (props) => {
    return (
        <div className="userCard">
        <ul>
        <li> <span>name:</span>{props.name}</li >
        <li> <span>gender:</span>{props.gender}</li >
        <li> <span>phone:</span>{props.phone}</li >
        <li> <span>address:</span>{props.address}</li >
        </ul>
        </div>
    );
};
export default UserCard;
