import AssignmentPopUp from "./AssignmentPopUp";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { CiSearch } from "react-icons/ci";
import ProtectedContent from "../../Account/ProtectedContent";
export default function AssignmentControls({ assignmentName, setAssignmentName, description, setDescription, points, setPoints, dueDate, setDueDate, availableDate, setAvailableDate, availableUntil, setAvailableUntil, addAssignment }:
  { assignmentName: string; setAssignmentName: (name: string) => void; description: string; setDescription: (name: string) => void; points: string; setPoints: (name: string) => void; dueDate: string; setDueDate: (name: string) => void; availableDate: string; setAvailableDate: (name: string) => void; availableUntil: string; setAvailableUntil: (name: string) => void; addAssignment: () => void; }) {
  return (

    <div id="wd-assignment-controls" className="d-flex justify-content-between align-items-center mb-3">
      <div className="search-bar d-flex align-items-center">
        <CiSearch className="me-2" style={{ fontSize: '1.5rem' }} />
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          style={{ maxWidth: '500px' }}
        />
      </div>
      <div>
        <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-2">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>
        <ProtectedContent><button id="wd-add-assignment-btn" className="btn btn-lg btn-danger"
        data-bs-toggle="modal" data-bs-target="#wd-add-assignment-dialog">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button></ProtectedContent>
        
      </div>
      <AssignmentPopUp  dialogTitle = "Add Assignment" assignmentName = {assignmentName} setAssignmentName = {setAssignmentName}  description = {description}  setDescription = {setDescription} points = {points} setPoints = {setPoints} dueDate = {dueDate} setDueDate = {setDueDate} availableDate = {availableDate} setAvailableDate = {setAvailableDate} availableUntil = {availableUntil} setAvailableUntil = {setAvailableUntil} addAssignment = {addAssignment} />
    </div>
);}