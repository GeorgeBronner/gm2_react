import React, { useState } from 'react';
import axios from 'axios';

function CourseForm() {
    const [courseId, setCourse] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/user_courses_no_auth/add_course', {
            garmin_id: courseId,
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
        setCourse('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                CourseId:
                <input type="text" value={courseId} onChange={e => setCourse(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default CourseForm;