import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProtectedContent from "./Account/ProtectedContent";
import { enroll, unenroll } from "./Account/reducer";
import { Enrollment, User } from "./Account/reducer";

interface Course {
  _id: string;
  name: string;
  description: string;
  enrolled: boolean;
}

export default function Dashboard({
  courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment  }: 
  {
  courses: Course[]; course: Course;
  setCourse: (course: Course) => void; addNewCourse: () => void; deleteCourse: (courseId: string) => void; updateCourse: () => void; enrolling: boolean; setEnrolling: (enrolling: boolean) => void;  updateEnrollment: (courseId: string, enrolled: boolean) => void }) {
  const { currentUser, enrollments } = useSelector(
    (state: { accountReducer: { currentUser: User | null; enrollments: Enrollment[] } }) => state.accountReducer);


  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);

  const toggleShowAllCourses = () => {
    setShowAllCourses(!showAllCourses); };

  const isEnrolled = (courseId: string) =>
    enrollments.some((enrollment: Enrollment) => enrollment.user === currentUser?._id && enrollment.course === courseId);

  const handleEnrollmentToggle = (courseId: string) => {
    if (isEnrolled(courseId)) {
      dispatch(unenroll({ courseId }));
    } else {
      dispatch(enroll({ courseId }));
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
      <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1>
      <hr />

      {currentUser?.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end"
          onClick={toggleShowAllCourses}
        >
          Enrollments
        </button>
      )}
      <hr />

      {currentUser?.role === "FACULTY" && (
        <ProtectedContent>
          <h5>
            New Course
              <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
                Add
              </button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          <input defaultValue={course.name} className="form-control mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })}/>
          <textarea defaultValue={course.description} className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </ProtectedContent>
      )}

      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : currentUser?.role === "FACULTY" ? "Courses" : "My Enrolled Courses"}
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            // .filter((course) => 
            //   currentUser?.role === "FACULTY" || showAllCourses || isEnrolled(course._id)
            // )
            .map((course) => (
              <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link to={isEnrolled(course._id) || currentUser?.role === "FACULTY" ? `/Kanbas/Courses/${course._id}/Home` : "#"}
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                    <img src="/images/reactjs.jpg" width="100%" height={160} alt="Course thumbnail"/>
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                      {enrolling && (
                      <button onClick={(event) => {
                        event.preventDefault();
                        updateEnrollment(course._id, !course.enrolled);
                      }}
                      className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                        {course.enrolled ? "Unenroll" : "Enroll"}
                      </button>
                    )}
                        {course.name}
                      </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description}
                      </p>
                      <button className="btn btn-primary">Go</button>
                    </div>
                  </Link>
                  
                  {currentUser?.role === "STUDENT" && (
                    <div> <button onClick={() => handleEnrollmentToggle(course._id)} className={`btn ${isEnrolled(course._id) ? "btn-danger" : "btn-success"} float-end me-2`}>
                    {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                  </button></div>
                  )}

                  {currentUser?.role === "FACULTY" && (
                    <ProtectedContent>
                      <div>
                      <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end" id="wd-delete-course-click">
                        Delete
                      </button>
                      <button id="wd-edit-course-click" onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }} className="btn btn-warning me-2 float-end">
                        Edit
                      </button>
                      </div>
                      
                    </ProtectedContent>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}