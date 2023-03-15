import Card from "./Card";

export const Project = () => {
  return (
    <div className="projects-Cointainer">
      <div className="project-MainTitle">
        <h2>PROJECTS</h2>
      </div>
      <div className="project-Description">
        <Card
          key="OMNIFOOD"
          title="OMNIFOOD"
          image="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDNkYjhmZmU3MWRkNTMzMGRiOWNmNDc1NmM5MjUxYzNhNmIwZDkzMCZjdD1n/TMo04zf9OALfS40QE9/giphy.gif"
          content="https://portfolio1-practice.netlify.app/"
          technologies={["html", "css", "javascript"]}
        />
        <Card
          key="GIFEXPERTAPP"
          title="GIFEXPERTAPP"
          image="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDc3YjhhNWQwNDgzNWU5M2QyYzg5OTA4MmJiNjAyYjIzOTQ3ZjAzMCZjdD1n/aTxnuuCrxkuso5bguH/giphy.gif"
          content="https://hilarious-crumble-475acb.netlify.app"
          technologies={["React", "css"]}
        />
        <Card
          key="DOGSAPP"
          title="DOGSAPP"
          image="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTdjZmEzNWQxZWE1OWNmZmFkZTVkOTBiYTM5Y2YzYTcwYzQ0ZTE5ZCZjdD1n/uJiOW4IoB8ys9msPPN/giphy.gif"
          content="https://dogportfolio1.netlify.app/"
          technologies={["React", "css"]}
        />
      </div>
    </div>
  );
};
