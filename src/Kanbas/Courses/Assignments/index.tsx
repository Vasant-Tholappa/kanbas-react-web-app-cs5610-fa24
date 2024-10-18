import AssignmentControls from "./AssignmentControls";
import AssignmentLessonControlButtons from "./AssignmentLessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments
  return (
    <div>
      
        <AssignmentControls /><br /><br /><br /><br />
      
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
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
              <AssignmentControlButtons />
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">

            {assignments
            .filter((assignment: any) => assignment.course === cid)
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
              <AssignmentLessonControlButtons />
            </li>
            ))}
            
          </ul>
        </li>
        
      </ul>
    </div>

);}


          