import players from './../data/players.json';
import PlayerCard from "@/app/components/player-card";

export default function Players() {
    return (
        <div className={'flex flex-wrap'}>
            {players.map((player, key) => <PlayerCard key={key} player={player}/>)}
        </div>
    );
}
