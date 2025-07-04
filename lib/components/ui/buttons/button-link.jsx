import { Button } from "./button";
import Link from "next/link";

export function ButtonLink({to, name, className}) {
    return (
        <Button asChild className={className} variant="outline">
            <Link href={to}>{name}
            </Link>
        </Button>
    )
}