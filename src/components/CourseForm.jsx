import React, { useState } from 'react';
import axios from 'axios';

function CourseForm() {
    const [course, setCourse] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/user_courses_no_auth/create', {
            g_course: course,
            g_city: city
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Course:
                <input type="text" value={course} onChange={e => setCourse(e.target.value)} />
            </label>
            <label>
                City:
                <input type="text" value={city} onChange={e => setCity(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default CourseForm;