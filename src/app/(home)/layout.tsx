import Footer from '@/components/footer'
import Header from '@/components/header'
import React, { PropsWithChildren } from 'react'

export default function layout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className='pt-15 md:pt-20 flex-1'>
                {children}
            </main>
            <Footer />
        </div>
    )
}
