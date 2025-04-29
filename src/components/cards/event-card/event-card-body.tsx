import { buttonVariants } from '@/components/ui/button'
import { CardDescription } from '@/components/ui/card'
import Link from 'next/link'

interface EventCardBodyProps {
    title: string
    date?: string
    href: string
}

export default function EventCardBody({ date = "A definir", href, title }: EventCardBodyProps) {
    return (
        <CardDescription>
            <p className="text-sm text-gray-600 mb-3">{title}</p>
            <p className="text-sm font-semibold text-gray-700 mb-4">Data: <span className="font-normal">{date}</span></p>
            <Link
                href={href}
                className={`${buttonVariants({variant: 'ghost'})} bg-pink-600 text-white hover:text-white hover:bg-pink-700`}
            >
                Mais Detalhes
            </Link>
        </CardDescription>
    )
}
