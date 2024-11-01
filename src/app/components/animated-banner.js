import Image from "next/image";

export default function AnimatedBanner() {
    const tennisBallAnimatedSrc = 'https://cdn.pixabay.com/animation/2023/11/30/10/12/10-12-20-59_512.gif';

    return (
        <div className={'bg-black h-12 flex justify-center'}>
            {Array.from({length: 7}).map((item) => <Image className={'contrast-200'} width={40} height={20} key={item} src={tennisBallAnimatedSrc}
                                                          alt={'tennis ball animated'}/>)}
        </div>
    );
}
