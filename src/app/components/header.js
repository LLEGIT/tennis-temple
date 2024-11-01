export default function Header() {
    return (
        <div className={'bg-yellowAtp h-20 flex flex-row items-center justify-center gap-4'}>
            <h1 className={'font-bold text-center '}>Find what kind of player you are</h1>
            <svg width={20} height={20} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 7L10 0H8L2 7V9H7L6 16H8L14 9L14 7H9Z" fill="#000000"/>
            </svg>
        </div>
    );
}
