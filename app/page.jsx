'use client';
//Convert this into a client component
import { useState, useEffect } from 'react';
import LoadingPage from './loading';
import Link from "next/link";
import Courses from './components/Courses';
import CourseSearch from './components/CourseSearch';


// Since we're going to add a Search bar, we'll need to fetch data frequently, this means that we are going to need next from the user perspective so we can use hooks
const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchCourses = async ()=>{
      const rest= await fetch("http://localhost:3000/api/courses/");
      const data = await rest.json();
      setCourses(data);
      setLoading(false);
    }

    fetchCourses();
  },[])


  if(loading){
    return <LoadingPage/>
  }
  return (
    <div>
      <h1>Welcome to Traversy Media</h1>
      <CourseSearch getSearchResults={(results)=>setCourses(results)}/>
      <Courses courses={courses}/>
    </div>
  )
}

export default HomePage;
