import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({  name, id, skills }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div  className="bgImage" />
      <h1> {name} </h1>
      <h1>{skills}</h1>
    </div>
  );
}

export default ProjectItem;