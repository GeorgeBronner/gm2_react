import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { RouterProvider } from 'react-router-dom';
import router from "../Router";

function App() {
    return (
        <div className="App">
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </div>
    );
}

export default App;