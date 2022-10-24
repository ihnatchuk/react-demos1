import React from "react";

function UserComponent(props) {
    let {id, name, email}=props;
    return (
        <div>
            <h2>{id}. {name}</h2>
            <p>{email}</p>
        </div>
    );
}
export default UserComponent;