import React from 'react';

function courseCard(props) {

    return (
        <card className={"note"}>
            <h1>{props.g_course}</h1>
            <p>{props.g_city}</p>
        </card> ); }

export default courseCard;