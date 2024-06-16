import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CourseList from "./CourseList";
import CourseCard from "./CourseCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <CourseList />
      <CourseCard g_course='Trump' g_city='NYC'/>
      <Footer />
    </div>
  );
}

export default App;
