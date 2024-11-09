import { useRef } from "react";

import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"
import PanelCard from "../components/PanelCard";

const Home = () => {
  const sidebarRef = useRef(null);
  return (
    <div className="main-container">
      <Sidebar ref={sidebarRef} />
      <div className="main">
        <Header sidebarRef={sidebarRef} />
        <div className="row g-3 mb-2">
          <PanelCard
            amount="TK 0"
            label="Income Today"
            colorClass="bg-primary"
            iconName="pricetags-outline"
            link="/"
            linkText="View Projects"
          />
          <PanelCard
            amount="TK 0"
            label="Income This Month"
            colorClass="text-success bg-success"
            iconName="logo-usd"
            link="/period-report"
            linkText="View Reports"
          />
          <PanelCard
            amount="User 0"
            label="User Active"
            colorClass="text-info bg-info"
            iconName="person"
            link="/prepaid-list"
            linkText="View All"
          />
          <PanelCard
            amount="Users 0"
            label="Total Users"
            colorClass="text-danger bg-danger"
            iconName="people"
            link="/"
            linkText="View reports"
          />
        </div>
      </div>
    </div>
  );
}

export default Home