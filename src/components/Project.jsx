import Card from "./Card";

export const Project = () => {
  return (
    <div className="projects-Cointainer">
      <div className="inner-Container">
        <div className="main-title-container">
          <div className="project-MainTitle">
            <h2>PROJECTS</h2>
          </div>
          <div className="ghost">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="project-Description">
        <Card
            key="NETFLIX-CLONE"
            title="NETFLIX CLONE"
            image="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTEwNmI3dDBtYnEwemhhbmxwaDA2ajY3MTBuaTdvNnNpYndsNHcxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oZWvibFiuV1YSOnYd5/giphy.gif"
            content="https://github.com/Joshua030/netflix-clone"
            technologies={["Next", "Typescript", "css" ,"Hasura"]}
          />
          <Card
            key="OMNIFOOD"
            title="OMNIFOOD"
            image="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDNkYjhmZmU3MWRkNTMzMGRiOWNmNDc1NmM5MjUxYzNhNmIwZDkzMCZjdD1n/TMo04zf9OALfS40QE9/giphy.gif"
            content="https://portfolio1-practice.netlify.app/"
            technologies={["html", "css", "javascript"]}
          />
            <Card
            key="COFEESTORE"
            title="COFEESTORE"
            image="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDk0ODdhYjdmNTk5Yjk3Y2EzMDVkYzdlMWIyYjVmMTQ5MzM0NWNmNCZjdD1n/q1R6rEnYnTZrJwXU2W/giphy.gif"
            content="https://coffee-store-rho.vercel.app/"
            technologies={["React", "css", "AirTable"]}
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
        
          <Card
            key="ATRAMENTUM"
            title="ATRAMENTUM"
            image="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDY3OWMyZTJlMDVjODMxN2Y0NDU2NWUxZjhjNTlmNjVjN2ZkZGE4ZiZjdD1n/pmjdMiwQEz5acXzwmN/giphy.gif"
            content="https://github.com/Joshua030/Atramentum"
            technologies={["React", "css", "Typescript"]}
          />
        </div>
      </div>
    </div>
  );
};
