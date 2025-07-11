import Link from "next/link";
import { PropsWithChildren } from "react";

interface EventCardHeaderProps extends PropsWithChildren {
    href: string
}

export default function EventCardHeader({ href, children }: EventCardHeaderProps) {
    return (
        <h3 className="text-xl font-bold mb-2 text-pink-700">
            <Link href={href} className="hover:underline">
                {children}
            </Link>
        </h3>
    )
}
