import Icon from "@/app/components/icon";

export default function Header() {
    return (
        <div className={'bg-yellowAtp h-20 flex flex-row items-center justify-center'}>
            <h1 className={'font-bold text-center flex items-center gap-4'}>Find what kind of player you are <Icon name={'bolt'} /></h1>
        </div>
    );
}
