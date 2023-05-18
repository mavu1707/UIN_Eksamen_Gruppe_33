import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function GamePage() {
  const { slug } = useParams()
  const [game, setGame] = useState({})

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?search=${slug}&key=5ccfb72ca6634a3bbf2e095d139c75c9`)
      .then((response) => response.json())
      .then((data) => {
        setGame(data.results.find((result) => result.slug === slug))
      })

  }, [slug])

  return (
    <article className="game-page">
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} />
      <p>
        Lorem ipsum dolor sit amet, dicit eruditi tractatos has ea, commodo definitiones an nec, homero senserit disputando id vix. Sed ex lorem docendi, ne ius prima maluisset dissentias, eos decore dicunt insolens ut. Et usu quodsi singulis, at his justo aliquando. In usu enim propriae, dolor inimicus quo at, et movet elitr per. Justo volutpat ex cum, et ornatus electram per. Sea eu enim possit, pri appareat invenire pericula in, probo dicat interesset eum id. Ex recteque consetetur argumentum has, fabulas nominavi facilisis per ut, sanctus corpora verterem est te. Vim novum causae vivendo ea, sit dicta soluta debitis ea, vitae doming oporteat an sit. Ne aliquip salutatus ius, mundi denique vix eu.Ad pri simul phaedrum eloquentiam, errem theophrastus ea mel. No eos alii aeque honestatis, ne graeci consequat mei. Mei ad corpora signiferumque, quo modus dicit et. Noster nostrud suscipiantur no mea. Nam eros mazim oblique ut.Est no imperdiet abhorreant. Te ponderum persequeris pro. Tollit oportere scripserit sit ad. Cu mei case officiis eloquentiam, paulo pericula referrentur vix ea, ex mel feugiat vocibus. Qui ei legendos incorrupte. Pro et quas natum, ex mediocrem suavitate honestatis mei, ferri veniam apeirian nec et.
    </p>
    <div className='box'>
    <h2>Genre:</h2>
      <ul>
        {game.genres?.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <p>Release date: {game.released}</p>
      {game.stores && game.stores.length > 0 && (
        <div>
          <h2>Available on:</h2>
          <ul>
            {game.stores.map((store) => (
              <li key={`${store.id}-${store.store.name}`}>
                <a href={store.url} target="_blank" rel="noreferrer">{store.store.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </article>
  );
}