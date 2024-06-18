import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import CourseList from "./CourseList";
import CourseForm from "./CourseForm";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<><CourseList /></>} />
                <Route path="/add-course" element={<CourseForm />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;