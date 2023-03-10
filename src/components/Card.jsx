export const Card = ({ image, title, content, technologies }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        {/* <h3 className="card-title">{title}</h3> */}
        <ul className="tecnologies-List">

        {technologies?.map((element,id) => {
            return <li key={id}><ion-icon name="bookmark-outline"></ion-icon> {element}</li>;
        })}
        </ul>
        <a className="card-text" href={content} target="_blank"> Check It out! </a>
      </div>
    </div>
  );
};

export default Card;
