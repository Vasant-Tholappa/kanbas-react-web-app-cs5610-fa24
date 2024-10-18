import { useParams } from "react-router";  
import { Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments

    return (

      <div>

      {assignments
        .filter((assignment: any) => assignment._id === aid)
        .map((assignment: any) => (
      <div style={{ marginLeft: 'auto', marginRight: 0, width: '1200px' }}>
      <div id="wd-assignments-editor" className="container mt-4" >
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value={assignment.title} className="form-control" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label htmlFor="wd-description">Assignment Description</label>
            <textarea id="wd-description" cols={40} rows={5} className="form-control">
              {assignment.description}
            
            </textarea>
          </div>
        </div>

        <div style={{ marginLeft: '400px' }}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="wd-points">Points</label>
            <input id="wd-points" value={assignment.points} className="form-control" />
          </div>
        </div>

        

        
        </div>
        <div style={{ marginLeft: '400px' }}>
        <div className="row mb-3" >
          <div className="col">
            <label htmlFor="wd-group">Assignment Group</label>
            <select id="wd-group" className="form-control">
              <option value="VAL1">ASSIGNMENTS</option>
            </select>
          </div>
        </div>
          </div>
        
        <div style={{ marginLeft: '400px' }}>
        <div className="row mb-3">
          <div className="col"> 
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
            <select id="wd-display-grade-as" className="form-control">
              <option value="VAL1">Percentage</option>
            </select>
          </div>
        </div>
          </div>



        
        <div >

        <div style={{ marginLeft: '400px' }}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="wd-submission-type">Submission Type</label>
            <select id="wd-submission-type" className="form-control">
              <option value="VAL1">Online</option>
            </select>
          </div>
        </div>
        </div>

        <div style={{ marginLeft: '400px' }}>
        <div className="mb-3">
          <label>Online Entry Options</label><br />
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-text-entry" />
            <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-website-url" />
            <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-file-upload" />
            <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
          </div>
        </div>
          </div>
          
          </div>





        

        

        <div >

        <div style={{ marginLeft: '400px' }}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="wd-assign-to">Assign to</label>
            <input id="wd-assign-to" value="Everyone" className="form-control" />
          </div>
        </div>

          </div>

        

        <div style={{ marginLeft: '400px' }}>
        <div className="col-md-4">
            <label htmlFor="wd-due-date">Due</label>
            <input type="date" id="wd-due-date" value={assignment.duedate} className="form-control" />
          </div>
        </div>
        
        <div style={{ marginLeft: '400px' }}>
        <div className="row mb-3">
          

          <div className="col-md-4">  
            <label htmlFor="wd-available-from">Available From</label>
            <input type="date" id="wd-available-from" value={assignment.availabledate} className="form-control" />
          </div>

          <div className="col-md-4">
            <label htmlFor="wd-available-until">Available Until</label>
            <input type="date" id="wd-available-until" value={assignment.availableuntil} className="form-control" />
          </div>
        </div>

        </div>

        </div>

        
        

        <div className="d-flex justify-content-end">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2" id="wd-cancel">
            Cancel
          </Link>
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger" id="wd-save">
            Save
          </Link>
        </div>
      </div>
      </div>
      ))}
      </div>
    );
}
