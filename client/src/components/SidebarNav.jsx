import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarNav = () => {
  // State to track which dropdown is open
  const [openIndex, setOpenIndex] = useState(null);

  const handleDropdown = (index) => {
    // If the same dropdown is clicked again, close it
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index); // Open the clicked dropdown
    }
  };

  return (
    <>
      <nav className="sidbar-nav">
        <ul>
          <li className="dashboard">
            <Link to="#">
              <div className="icon-container">
                <ion-icon name="desktop-sharp"></ion-icon>
              </div>
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              to="#"
              className={`inner-toggle ${openIndex === 0 ? "open" : ""}`}
              onClick={() => handleDropdown(0)} // Handle click for the "Pages" dropdown
            >
              <div className="icon-container">
                <ion-icon name="document-text-outline"></ion-icon>
              </div>
              <span>Pages</span>
              <i
                className={`fa-solid fa-chevron-left toggle-icon ${
                  openIndex === 0 ? "rotate" : ""
                }`}
              ></i>
            </Link>
            <ul className="inner-drop">
              <li>
                <Link to="/pages/home">Home</Link>
              </li>
              <li>
                <Link to="/pages/about">About</Link>
              </li>
              <li>
                <Link to="/pages/services">Services</Link>
              </li>
              <li>
                <Link to="/pages/contact">Contact</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="#"
              className={`inner-toggle ${openIndex === 1 ? "open" : ""}`}
              onClick={() => handleDropdown(1)} // Handle click for the second dropdown
            >
              <div className="icon-container">
                <ion-icon name="reader-outline"></ion-icon>
              </div>
              <span>Blogs</span>
              <i
                className={`fa-solid fa-chevron-left toggle-icon ${
                  openIndex === 1 ? "rotate" : ""
                }`}
              ></i>
            </Link>
            <ul className="inner-drop">
              <li>
                <Link to="#">All Blogs</Link>
              </li>
              <li>
                <Link to="#">+ New Blog</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="#"
              className={`inner-toggle ${openIndex === 2 ? "open" : ""}`}
              onClick={() => handleDropdown(2)} // Handle click for the second dropdown
            >
              <div className="icon-container">
                <ion-icon name="reorder-four-outline"></ion-icon>
              </div>
              <span>sections</span>
              <i
                className={`fa-solid fa-chevron-left toggle-icon ${
                  openIndex === 2 ? "rotate" : ""
                }`}
              ></i>
            </Link>
            <ul className="inner-drop">
              <li>
                <Link to="#">Pricing</Link>
              </li>
              <li>
                <Link to="#">Footer</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="#"
              className={`inner-toggle ${openIndex === 3 ? "open" : ""}`}
              onClick={() => handleDropdown(3)} // Handle click for the second dropdown
            >
              <div className="icon-container">
                <ion-icon name="code-working-outline"></ion-icon>
              </div>
              <span>Portfolio</span>
              <i
                className={`fa-solid fa-chevron-left toggle-icon ${
                  openIndex === 3 ? "rotate" : ""
                }`}
              ></i>
            </Link>
            <ul className="inner-drop">
              <li>
                <Link to="#">All Projects</Link>
              </li>
              <li>
                <Link to="/projects/create">+ New Project</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SidebarNav;
