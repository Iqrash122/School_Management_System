import { useLocation, Link } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  const pageTitle =
    pathnames[pathnames.length - 1]?.replace("-", " ") || "Dashboard";

  return (
    <div className="mb-6">
      {/* PAGE TITLE */}
      <h1 className="text-2xl font-semibold capitalize text-zinc-800">
        {pageTitle}
      </h1>

      {/* BREADCRUMB */}
      <nav className="text-sm text-zinc-500 mt-1">
        <Link to="/dashboard" className="hover:text-emerald-600">
          Dashboard
        </Link>

        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <span key={index}>
              {" "}
              /{" "}
              {isLast ? (
                <span className="text-zinc-800 capitalize">
                  {name.replace("-", " ")}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="hover:text-emerald-600 capitalize"
                >
                  {name.replace("-", " ")}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
