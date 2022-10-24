import React from "react";

function UserComponent(props) {
    let {item}=props;
    return (
        <div>
            <h2>{item.id}. {item.name}</h2>
            <p>{item.email}</p>
        </div>
    );
}
export default UserComponent;