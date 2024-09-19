import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        {/* COURSE 2 */}

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/2345/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS2345 AI
              </h5>
              <p className="wd-dashboard-course-title">
                Learn everything about AI
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* COURSE 3 */}

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/3456/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS3456 Cybersec
              </h5>
              <p className="wd-dashboard-course-title">
                Learn cyber security fundamentals
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* COURSE 4 */}

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/4567/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS4567 ML
              </h5>
              <p className="wd-dashboard-course-title">
                Everything about ML
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* COURSE 5 */}

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5678/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS5678 Cloud Computing
              </h5>
              <p className="wd-dashboard-course-title">
                Learn why the cloud is so important
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* COURSE 6 */}

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/6789/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS6789 Deep Learning
              </h5>
              <p className="wd-dashboard-course-title">
                The advance stuff!
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* COURSE 7 */}

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/7000/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS7000 Reinforcement Learning
              </h5>
              <p className="wd-dashboard-course-title">
                As interesting as it gets!
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>


      </div>
    </div>
  );
}
