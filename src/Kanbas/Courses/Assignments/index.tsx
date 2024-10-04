import AssignmentControls from "./AssignmentControls";
import AssignmentLessonControlButtons from "./AssignmentLessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
// export default function Assignments() {
//     return (
//       <div id="wd-assignments">
//         <input id="wd-search-assignment"
//                placeholder="Search for Assignments" />
//         <button id="wd-add-assignment-group">+ Group</button>
//         <button id="wd-add-assignment">+ Assignment</button>
//         <h3 id="wd-assignments-title">
//           ASSIGNMENTS 40% of Total <button>+</button>
//         </h3>
//         <ul id="wd-assignment-list">
//           <li className="wd-assignment-list-item">
//             <a className="wd-assignment-link"
//               href="#/Kanbas/Courses/1234/Assignments/123">
//               A1 - ENV + HTML
//             </a>
//             <div>Multiple Modules | <b>Not available until</b> May 6 at 12:00am |</div>
//             <div><b>Due</b> May 13 at 11:59pm | 100 pts</div>
//           </li>
//           <li className="wd-assignment-list-item">
//             <a className="wd-assignment-link"
//               href="#/Kanbas/Courses/1234/Assignments/123">
//               A2 - CSS + BOOTSTRAP
//             </a>
//             <div>Multiple Modules | <b>Not available until</b> May 13 at 12:00am |</div>
//             <div><b>Due</b> May 20 at 11:59pm | 100 pts</div>
//           </li>
//           <li className="wd-assignment-list-item">
//             <a className="wd-assignment-link"
//               href="#/Kanbas/Courses/1234/Assignments/123">
//               A3 - JAVASCRIPT + REACT
//             </a>
//             <div>Multiple Modules | <b>Not available until</b> May 20 at 12:00am |</div>
//             <div><b>Due</b> May 27 at 11:59pm | 100 pts</div>
//           </li>
//         </ul>
//       </div>
//   );}
 


// second method
// export default function Assignments() {
//   return (
//     <div id="wd-assignments">
//       <AssignmentControls /><br /><br /><br /><br />
//       {/* <input id="wd-search-assignment"
//              placeholder="Search for Assignments" />
//       <button id="wd-add-assignment-group">+ Group</button>
//       <button id="wd-add-assignment">+ Assignment</button> */}


//       <h3 id="wd-assignments-title">
//         ASSIGNMENTS 40% of Total <button>+</button>
//       </h3>
//       <ul id="wd-assignment-list">


//         <li className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gray">
//           <a className="wd-assignment-link list-group-item p-3 ps-1"
//             href="#/Kanbas/Courses/1234/Assignments/123">
//             A1 - ENV + HTML
//           </a> 
//           <div className="wd-title p-3 ps-2 bg-secondary">Multiple Modules | <b>Not available until</b> May 6 at 12:00am |</div>
//           <div className="wd-title p-3 ps-2 bg-secondary"><b>Due</b> May 13 at 11:59pm | 100 pts</div>
//         </li>



//         <li className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gray">
//           <a className="wd-assignment-link list-group-item p-3 ps-1"
//             href="#/Kanbas/Courses/1234/Assignments/123">
//             A2 - CSS + BOOTSTRAP
//           </a>
//           <div className="wd-title p-3 ps-2 bg-secondary">Multiple Modules | <b>Not available until</b> May 13 at 12:00am |</div>
//           <div className="wd-title p-3 ps-2 bg-secondary"><b>Due</b> May 20 at 11:59pm | 100 pts</div>
//         </li>



//         <li className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gray">
//           <a className="wd-assignment-link list-group-item p-3 ps-1"
//             href="#/Kanbas/Courses/1234/Assignments/123">
//             A3 - JAVASCRIPT + REACT
//           </a>
//           <div className="wd-title p-3 ps-2 bg-secondary">Multiple Modules | <b>Not available until</b> May 20 at 12:00am |</div>
//           <div className="wd-title p-3 ps-2 bg-secondary"><b>Due</b> May 27 at 11:59pm | 100 pts</div>
//         </li>



//       </ul>
//     </div>
// );}




export default function Assignments() {
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

            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> 
              <MdEditNote className="me-2 fs-3"/>
              <a className="wd-assignment-link "
              href="#/Kanbas/Courses/1234/Assignments/123" style={{ color: 'inherit', textDecoration: 'none' }}>
              A1
            </a>
              <AssignmentLessonControlButtons /> 
            </li>


            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <MdEditNote className="me-2 fs-3"/>
              <a className="wd-assignment-link "
              href="#/Kanbas/Courses/1234/Assignments/123" style={{ color: 'inherit', textDecoration: 'none' }}>
              A2
            </a>
              <AssignmentLessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <MdEditNote className="me-2 fs-3"/>
              <a className="wd-assignment-link "
              href="#/Kanbas/Courses/1234/Assignments/123" style={{ color: 'inherit', textDecoration: 'none' }}>
              A3
            </a>
              <AssignmentLessonControlButtons />
            </li>
            
          </ul>
        </li>
        
      </ul>
    </div>

);}


          