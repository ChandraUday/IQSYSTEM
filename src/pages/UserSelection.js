import React from "react"; 
import { useNavigate } from "react-router-dom";
import "./UserSelection.css"; 



const UserSelection = () => {
       const navigate = useNavigate();
    
  
    return (
       <div className="panel-container">
      <button className="panel-button" onClick={() => navigate("/user")}>
        User Panel
      </button>

      <button className="panel-button" onClick={() => navigate("/admin")}>
        Admin Panel
      </button>
    </div>
    );
  };

  export default UserSelection;