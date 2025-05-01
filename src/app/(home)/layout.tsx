import Footer from '@/components/footer'
import Header from '@/components/header'
import React, { PropsWithChildren } from 'react'

export default function layout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            <main className='pt-15 md:pt-20'>
                {children}
            </main>
            <Footer />
        </>
    )
}
