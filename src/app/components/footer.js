import Image from "next/image";

export default function Footer() {
    const tennisLogoAnimatedSrc = 'https://data.textstudio.com/output/sample/animated/7/6/8/9/tennis-12-9867.gif';

    return (
        <footer className={'flex flex-col space-y-2 items-center justify-center bg-yellowAtp h-28'}>
            <p className={'tracking-wider text-center'}>Created by LLEGIT, webdevelopper </p>
            <p className={'tracking-wider text-center'}>Using <a href={'https://nextjs.org'}>Next.js</a> framework</p>
        </footer>
    );
}
