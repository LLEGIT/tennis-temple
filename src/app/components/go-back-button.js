import Link from "next/link";
import Icon from "@/app/components/icon";

export default function GoBackButton({destination}) {
    return (
        <Link href={destination}>
            <Icon name={'arrow-left'} />
        </Link>
    );
}
