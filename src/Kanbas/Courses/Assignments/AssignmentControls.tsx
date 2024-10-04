import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { CiSearch } from "react-icons/ci";
export default function AssignmentControls() {
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
        <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button>
      </div>
    </div>
);}
