import React from 'react';
import axios from 'axios';

export default class GarminCoursesTable extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/user_courses/readall_ids_w_year`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                const courses = res.data;
                this.setState({ courses });
            })
    }

    deleteUserCourse = (id) => {
        axios.delete(`http://127.0.0.1:8000/user_courses/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                console.log(response);
                // After deleting the course, fetch the updated list of courses
                this.componentDidMount();
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <div className="course-table-container">
                <table>
                    <thead>
                    <tr>
                        <th>Course</th>
                        <th>City</th>
                        <th>Year</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.courses.map(course => (
                        <tr key={course.id}>
                            <td>{course.g_course}</td>
                            <td>{course.g_city}</td>
                            <td>{course.year}</td>
                            <td>
                                <button onClick={() => this.deleteUserCourse(course.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}