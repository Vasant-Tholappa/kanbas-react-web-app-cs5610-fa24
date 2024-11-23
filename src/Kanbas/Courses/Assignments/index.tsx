import React, { useState, useEffect } from "react";
import AssignmentControls from "./AssignmentControls";
import AssignmentLessonControlButtons from "./AssignmentLessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import * as db from "../../Database";
import { addAssignment, deleteAssignment, updateAssignment, setAssignments }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux"
export default function Assignments() {
  const { cid } = useParams();
  // const assignments = db.assignments
  // const [assignments, setAssignments] = useState<any[]>(db.assignments);

  const [assignmentName, setAssignmentName] = useState("");
  const [description, setDescription] = useState("");

  const [points, setPoints] = useState("");

  const [dueDate, setDueDate] = useState("");

  const [availableDate, setAvailableDate] = useState("");

  const [availableUntil, setAvailableUntil] = useState("");


  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  



  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };




  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = { title: assignmentName, description: description, points: points, duedate: dueDate, availabledate: availableDate, availableuntil: availableUntil, course: cid };
    const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
    dispatch(addAssignment(assignment));
  };




  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);



  const handleDeleteAssignment = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this Assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div>

<AssignmentControls assignmentName = {assignmentName} setAssignmentName = {setAssignmentName}  description = {description}  setDescription = {setDescription} points = {points} setPoints = {setPoints} dueDate = {dueDate} setDueDate = {setDueDate} availableDate = {availableDate} setAvailableDate = {setAvailableDate} availableUntil = {availableUntil} setAvailableUntil = {setAvailableUntil} 
        addAssignment={createAssignmentForCourse}/>
        
        <br /><br /><br /><br />
      
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center"> 
            <div>
              <BsGripVertical className="me-2 fs-3" /> 
              <IoIosArrowDown className="me-2 fs-3"/> 
              ASSIGNMENTS 
            </div>
            <div className="d-flex align-items-center">
              <div className="percentage-badge me-3">
                40% of Total
              </div>
              <AssignmentControlButtons/>
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">

            {assignments
            // .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (

            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <MdEditNote className="me-2 fs-3" />
              <Link 
                className="wd-assignment-link" 
                to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} 
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {assignment.title}
              </Link>
                {/* <AssignmentLessonControlButtons
                    assignmentId={assignment._id}
                    deleteAssignment={() => handleDeleteAssignment(assignment._id)}
                  /> */}
                <AssignmentLessonControlButtons
                    assignmentId={assignment._id}
                    deleteAssignment={(assignmentId) => removeAssignment(assignmentId)}
                  />  
            </li>
            ))}

            
          </ul>
        </li>
        
      </ul>

    </div>

);}


          