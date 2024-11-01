import Image from "next/image";
import Link from "next/link";

export default function PlayerCard({player}) {
    const playerImageBaseUrl = 'https://www.atptour.com/-/media/alias/player-gladiator-headshot/';

    return (
        <div className={'card w-[50%]'}>
            <Link href={'/player/' + player.slug}>
                <div className={'card__content'}>

                    <div className={'card__front'} id={player.slug + '-front'}>
                        <Image width={200} height={100} src={playerImageBaseUrl + player.image_id}
                               alt={player.name + '\s photo'}/>
                    </div>
                    <div className={'card__back text-sm flex flex-col space-y-2'} id={player.slug + '-back'}>
                        <p className={'text-center underline decoration-2 decoration-yellowAtp'}>{player.name}</p>
                        <p className={'text-center'}>{player.short_description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
