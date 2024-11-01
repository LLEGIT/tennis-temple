import Link from "next/link";

export default function GoBackButton({destination}) {
    return (
        <Link href={destination}>
            <svg width={20} height={20} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10L8 14L6 14L0 8L6 2L8 2L8 6L16 6L16 10L8 10Z" fill="#000000"/>
            </svg>
        </Link>
    );
}
