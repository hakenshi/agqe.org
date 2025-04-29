import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { PropsWithChildren } from "react";

type EventCardProps = {
    src: string
    alt: string
} & PropsWithChildren

export default function EventCard({ alt, src, children }: EventCardProps) {

    return (
        <Card className="bg-gray-50 rounded-lg shadow-md overflow-hidden grid md:grid-cols-[auto_auto] items-center">
            <CardHeader className="w-full md:w-72 md:h-72">
                <Image
                    src={src}
                    alt={alt}
                    width={600}
                    height={800}
                    className="rounded w-full h-full"
                />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}
