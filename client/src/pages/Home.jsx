import { useRef } from "react";

import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"
import PanelCard from "../components/PanelCard";
import ActivityLog from "../components/ActivityLog";

const Home = () => {
  const sidebarRef = useRef(null);
  return (
    <div className="main-container">
      <Sidebar ref={sidebarRef} />
      <div className="main">
        <Header sidebarRef={sidebarRef} />
        <div className="row g-3 mb-2">
          <PanelCard
            amount="50"
            label="Total Projects"
            colorClass="bg-primary"
            iconName="medkit-outline"
            link="/"
            linkText="View Projects"
          />
          <PanelCard
            amount="12"
            label="Teams Members"
            colorClass="text-success bg-success"
            iconName="people"
            link="/"
            linkText="View Teams"
          />
          <PanelCard
            amount="11"
            label="Total Blogs"
            colorClass="text-info bg-info"
            iconName="create-outline"
            link="/"
            linkText="View All"
          />
          <PanelCard
            amount="7"
            label="Total Pages"
            colorClass="text-danger bg-danger"
            iconName="documents-outline"
            link="/"
            linkText="View Pages"
          />
        </div>

        <div className="row g-3 mb-2">
          <div className="col-md-6 offset-md-6">
            <ActivityLog />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home