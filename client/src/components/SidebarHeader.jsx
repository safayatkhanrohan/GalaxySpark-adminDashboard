import { Link } from "react-router-dom";

const SidebarHeader = () => {
  return (
    <div className="sidebar-header">
      <div className="logo">
        <Link to="/">
          <ion-icon name="apps-outline"></ion-icon>
          <span className="logo-text">GalaxySpark</span>
        </Link>
      </div>
    </div>
  );
};

export default SidebarHeader;
