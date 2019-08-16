import React from "react";

//create props const
const CharacterProps = (props) => {
    return (
        <div>
            <p className="name">{props.name}</p>
        </div>
    )
}
//Export comp
export default CharacterProps;