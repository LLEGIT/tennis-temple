import GoBackButton from "@/app/components/go-back-button";
import players from "./../../data/players.json";
import Image from "next/image";

export default async function PlayerPage({params}) {
    const playerSlug = (await params).slug;
    const player = players.find((player) => player.slug === playerSlug);

    return (
        <div className={'p-5 space-y-5'}>
            <GoBackButton destination={'/'} />
            <div className={'space-y-5 flex flex-col items-center'}>
                <h2 className={'text-center tracking-widest underline underline-offset-4 decoration-blue-500 decoration-4'}>{player.name}</h2>
                <Image width={200} height={150} src={player.gif} alt={player.name + '\'s gif'} />
                <p>{player.description}</p>
            </div>
            <div className={'flex flex-col items-center space-y-5'}>
                <h3 className={'text-center font-black underline decoration-2'}>Some stats about the player:</h3>
                <ul>
                    <li><strong>Current ranking:</strong> #{player.current_ranking}</li>
                    <li><strong>Highest ranking:</strong> #{player.highest_ranking}</li>
                    <li><strong>Career titles:</strong> {player.career_titles}</li>
                    <li><strong>Win/loss ratio:</strong> {player.win_loss_ratio}</li>
                    <li><strong>Aces:</strong> {player.aces}</li>
                    <li><strong>Age:</strong> {player.age}</li>
                    <li><strong>Height:</strong> {player.height}m</li>
                    <li><strong>Weight:</strong> {player.weight}kg</li>
                    <li><strong>Playstyle:</strong> {player.playstyle}</li>
                </ul>
            </div>
        </div>
    );
}
