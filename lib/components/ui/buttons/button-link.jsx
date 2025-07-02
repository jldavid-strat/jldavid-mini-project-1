import { Button } from "./button";
import Link from "next/link";

export function ButtonLink({to, name}) {
    return (
        <Button asChild variant="outline">
            <Link href={to}>{name}
            </Link>
        </Button>
    )
}