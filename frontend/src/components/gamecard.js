export default function GameCard(props) {
  return (
    <article className="game-card">
      <h2 className="game-card-title">{props.title}</h2>
      <p className="game-card-genre">{props.genre}</p>
      <img className="game-card-image" src={props.imageUrl} alt={props.title} />
    </article>
  );
}
