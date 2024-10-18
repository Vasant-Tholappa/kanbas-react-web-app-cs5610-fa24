import { NavLink } from "react-router-dom";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = [
    { label: "Modules", path: `/Kanbas/Courses/${cid}/Modules`},
    { label: "Piazza",   path: `/Kanbas/Courses/${cid}/Piazza`},
    { label: "Zoom",  path: `/Kanbas/Courses/${cid}/Zoom`},
    { label: "Assignments",     path: `/Kanbas/Courses/${cid}/Assignments`},
    { label: "Quizzes",      path: `/Kanbas/Courses/${cid}/Quizzes`},
    { label: "Grades",     path: `/Kanbas/Courses/${cid}/Grades`},
    { label: "People",      path: `/Kanbas/Courses/${cid}/People`},
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link to={`/Kanbas/Courses/${cid}/Home`} className={`list-group-item border border-0
                        ${pathname.includes("Home") ? 'active' : ''}`}>
                    Home
                  </Link>
                  {links.map((link) => (
                    <Link key={link.path} to={link.path} className={`list-group-item border border-0
                          ${pathname.includes(link.label) ? 'active' : ''}`}>
                      
                      {link.label}
                    </Link>
            ))}
    </div>
  );
}

