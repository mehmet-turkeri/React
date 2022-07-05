import React from 'react'
import CourseCard from './components/CourseCard';
import data from './data'
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
     <CourseCard data={data}/>
  
    </div>
  );
}

export default App
