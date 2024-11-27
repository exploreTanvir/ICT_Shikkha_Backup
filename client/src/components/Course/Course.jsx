import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AllCourseMenu } from "../AllCourse/AllCourseMenu";
import "./course.css";

import CourseDetails from "./CourseDetails/CourseDetails";

const Course = () => {

  const { courseId } = useParams();
  const course = AllCourseMenu[courseId];


  

  return (
    <section className="py-5">
      <div className="faqTitle text-center mb-4">
        <span>কোর্স সম্পর্কে বিস্তারিত</span>
      </div>

      <div className="container">
        
        <div className="row courseRow">
        
          <div className="col-lg-8 faqRight">
          <h2 className="fw-bold fs-2 mt-3">{course.tilte}</h2>
          <div className="my-4 mb-5 d-flex align-items-center courseTop" style={{gap: "27px"}}>

          <div>               
                    <img className="Instructors rounded-circle" src={course.instructor} alt="" />
                  </div>

          <div className="gap-2">
                    <h5>কোর্স ইন্সট্রাক্টর</h5>
                    <h6>{course.instructorName}</h6>
                  </div>

          <div className="gap-2">
                    <h5>ক্যাটাগরি</h5>
                    <h6>একাডেমিক</h6>
                  </div>
          <div className="gap-2">
                    <h5>কোর্স সার্টিফিকেট</h5>
                    <h6>সার্টিফিকেট থাকবে না</h6>
                  </div>
          </div>
          <CourseDetails/>
            
          </div>



          <div className="col-lg-4 col-md-12">
            <div className="card" id="card ">
              <div>
              <div className={course.class}>
                  <img src={course.courseImg} alt="" />
                 </div>
                <div className="px-3">
                <h4 className="text-center courseTitle mt-3">{course.tilte}</h4>
               <div className="d-flex align-items-center justify-content-between py-2">
               <h5 className="card-title mb-3">৳ {course.price} <del className="fs-6 text-black-50">{course.pastPrice}</del></h5>
               <div className="d-flex gap-2 align-items-center">
                    <h6>{course.instructorName}</h6>
                    <img className="Instructor" src={course.instructor} alt="" />
                  </div>
               </div>
                <div>
                  <button
                    type="button"
                    className="allCoursesBtn d-flex align-items-center fs-5 justify-content-center me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    এনরোল করুন <i className="fa fa-arrow-right ms-2 courseIcon"></i>
                  </button>
                </div>
                <div className="desc mt-4">
                 <div className="d-flex justify-content-between border-bottom">
                 <p>
                    <i className="fa-solid fa-user-group me-2"></i>কোর্সটি করছেন 
                  </p>
                  <p>{course.people} জন</p>
                 </div>
                 <div className="d-flex justify-content-between border-bottom mt-1">
                  <p>
                    <i className="fa-solid fa-stopwatch me-2"></i>সময় লাগবে 
                  </p>
                  <p>{course.time}</p>
                  </div>
                  <div className="d-flex justify-content-between border-bottom mt-1">
                  <p>
                    <i className="fa-regular fa-circle-play me-2"></i> ভিডিও
                  </p>
                  <p>{course.vdo} টি</p>
                  </div>
                  <div className="d-flex justify-content-between border-bottom mt-1">
                  <p>
                    <i className="fa-solid fa-calendar-days me-2"></i>সময়সীমা 
                  </p>
                  <p>{course.mnth} মাস</p>
                  </div>
                </div>
                </div>
              </div>
            </div>



        </div>



        </div>
        <ToastContainer
      position="top-right"
      autoClose={5000}
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
      </div>
    </section>
  );
};

export default Course;
