import Card from "./Card";

export const Project = () => {
  return (
    <div className="projects-Cointainer">
      <div className="project-MainTitle">
        <h2>PROJECTS</h2>
      </div>
      <div className="project-Description">
        <Card title="OMNIFOOD" image="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDNkYjhmZmU3MWRkNTMzMGRiOWNmNDc1NmM5MjUxYzNhNmIwZDkzMCZjdD1n/TMo04zf9OALfS40QE9/giphy.gif" content="https://portfolio1-practice.netlify.app/" technologies={["html","css","javascript"]}/>
      </div>
    </div>
  );
};
