import { useParams } from "react-router";  
import { Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as db from "../../Database";

export default function AssignmentPopUp({ dialogTitle, assignmentName, setAssignmentName, description, setDescription, points, setPoints, dueDate, setDueDate, availableDate, setAvailableDate, availableUntil, setAvailableUntil, addAssignment }:
  { dialogTitle: string; assignmentName: string; setAssignmentName: (name: string) => void; description: string; setDescription: (name: string) => void; points: string; setPoints: (name: string) => void; dueDate: string; setDueDate: (name: string) => void; availableDate: string; setAvailableDate: (name: string) => void; availableUntil: string; setAvailableUntil: (name: string) => void; addAssignment: () => void; }) {
//   const { cid, aid } = useParams();
//   const assignments = db.assignments

    return (

      <div id="wd-add-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {dialogTitle} </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
          <div className="col">
            <label htmlFor="wd-name">Assignment Title</label>
            <input id="wd-name" value={assignmentName} className="form-control" 
            onChange={(e) => setAssignmentName(e.target.value)}/>
          </div>


          <div className="col">
            <label htmlFor="wd-description">Assignment Description</label>
            <textarea id="wd-description" cols={40} rows={5} className="form-control"
            onChange={(e) => setDescription(e.target.value)}>
              {description}
            
            </textarea>
          </div>

          <div className="col">
            <label htmlFor="wd-points">Points</label>
            <input id="wd-points" value={points} className="form-control" onChange={(e) => setPoints(e.target.value)}/>
          </div>
          


          <div className="col-md-4">
            <label htmlFor="wd-due-date">Due</label>
            <input type="date" id="wd-due-date" value={dueDate} className="form-control" onChange={(e) => setDueDate(e.target.value)}/>
          </div>


          <div className="col-md-4">  
            <label htmlFor="wd-available-from">Available From</label>
            <input type="date" id="wd-available-from" value={availableDate} className="form-control" onChange={(e) => setAvailableDate(e.target.value)}/>
          </div>

          <div className="col-md-4">
            <label htmlFor="wd-available-until">Available Until</label>
            <input type="date" id="wd-available-until" value={availableUntil} className="form-control" onChange={(e) => setAvailableUntil(e.target.value)}/>
          </div>


          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Cancel </button>
            <button onClick={addAssignment} type="button" data-bs-dismiss="modal" className="btn btn-danger">
              Add Assignment </button>
          </div>
        </div>
      </div>
    </div>
    );
}