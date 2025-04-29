import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { PropsWithChildren } from "react";

type EventCardProps = {
    src: string
    alt: string
} & PropsWithChildren

export default function EventCard({ alt, src, children }: EventCardProps) {

    return (
        <Card className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col tablet:flex-row items-center">
            <CardHeader>
                <Image
                    src={src}
                    alt={alt}
                    width={600}
                    height={800}
                    className="w-full tablet:w-1/3 h-48 tablet:h-full object-cover"
                />
            </CardHeader>
            <CardContent>
                <div className="p-6 flex-1">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}
