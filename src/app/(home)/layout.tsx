import Header from '@/components/header'
import React, { PropsWithChildren } from 'react'

export default function layout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}
