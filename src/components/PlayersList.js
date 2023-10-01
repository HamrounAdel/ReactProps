import Player from './Player';
import Array from './Array';

const PlayersList = () => {
  return (
    <div>
      {Array.map((player) => (
        <Player key={player.name} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;