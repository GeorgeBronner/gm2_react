import React from 'react';

function courseCard(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <card className={"note"}>
            <h1>{props.g_course}</h1>
            <p>{props.g_city}</p>
            <button onClick={handleClick}>DELETE</button>
        </card>);
}

export default courseCard;