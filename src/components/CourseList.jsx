import React from 'react';
import axios from 'axios';
import CourseCard from "./CourseCard";

export default class CourseList extends React.Component {
  state = {
    courses: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/user_courses_no_auth/readall`)
      .then(res => {
        const courses = res.data;
        this.setState({ courses });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.courses
            .map(course =>
              <CourseCard g_course={course.g_course} g_city={course.g_city}/>
            )
        }
      </ul>
    )
  }
}
