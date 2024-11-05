import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import ProtectedContent from "../../Account/ProtectedContent";
export default function AssignmentLessonControlButtons({ assignmentId, deleteAssignment}: { assignmentId: string; deleteAssignment: (assignmentId: string) => void; } ) {
  return (
    <div className="float-end">
      <ProtectedContent><FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)}/></ProtectedContent>
      
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
