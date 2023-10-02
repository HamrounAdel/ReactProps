import Player from './Player';
import players from './players';

const PlayersList = () => {
  return (
    <div  style={{display:'flex', justifyContent:'space-around'}}>
      {players.map((player) => (
        <Player  key={player.imgg} {...player}  />
      ))}
    </div>
  );
};

export default PlayersList;