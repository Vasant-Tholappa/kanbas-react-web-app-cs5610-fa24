import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
            {/* COURSE 1 */}
          <div className="wd-dashboard-course col">
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5  className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>

            </div>
            
          </div>
          
          {/* COURSE 2 */}

          <div className="wd-dashboard-course col">
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/2345/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5  className="wd-dashboard-course-title card-title">
                    CS2345 AI
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Learn everything about AI
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>

            </div>
            
          </div>

          {/* COURSE 3 */}

          <div className="wd-dashboard-course col" >
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/3456/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5  className="wd-dashboard-course-title card-title">
                    CS3456 Cybersec
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Learn cyber security fundamentals
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>

            </div>
            
          </div>

          {/* COURSE 4 */}

          <div className="wd-dashboard-course col" >
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/4567/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5  className="wd-dashboard-course-title card-title">
                    CS4567 ML
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Everything about ML
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>

            </div>
            
          </div>

          {/* COURSE 5 */}

          <div className="wd-dashboard-course col">
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5678/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5  className="wd-dashboard-course-title card-title">
                    CS5678 Cloud Computing
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Learn why the cloud is so important
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>

            </div>
            
          </div>

          {/* COURSE 6 */}

          <div className="wd-dashboard-course col" >
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/6789/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5  className="wd-dashboard-course-title card-title">
                    CS6789 Deep Learning
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    The advance stuff!
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>

            </div>
            
          </div>

          {/* COURSE 7 */}

          <div className="wd-dashboard-course col" >
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/7000/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5  className="wd-dashboard-course-title card-title">
                    CS7000 Reinforcement Learning
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    As interesting as it gets!
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>

            </div>
            
          </div>

          {/* COURSE 8 */}

          <div className="wd-dashboard-course col" >
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/7000/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5  className="wd-dashboard-course-title card-title">
                    CS8000 Extra Topics
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Explore the new!
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>

            </div>
            
          </div>

        </div>


      </div>
    </div>
  );
}
