import { getAllSponsors } from '@/actions/sponsors'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const dynamic = 'force-dynamic';

export default async function ApoiadoresPage() {

  const sponsors = await getAllSponsors()

  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-10 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Nossos Apoiadores</h1>
          <p className="mt-2 text-lg opacity-90">Pessoas e empresas que acreditam e fortalecem nossa luta.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Agradecemos imensamente a todos os nossos apoiadores e parceiros. Seu suporte é fundamental para que a AGQE continue promovendo a cidadania, o respeito e os direitos
              da comunidade LGBTQIAP+ em São João da Boa Vista e região.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <Card key={sponsor.id} className="bg-white p-5 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                <CardHeader className='sr-only'>
                  <h3 className="text-lg font-semibold text-gray-800">{sponsor.name}</h3>
                </CardHeader>
                <CardContent>
                  <Image
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-200"
                    src={sponsor.logo ?? '/default-profile.png'}
                    alt={sponsor.name}
                    width={300}
                    height={300}
                  />
                  <h4 className="text-lg font-semibold text-gray-800">{sponsor.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center pt-10 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Quer Apoiar a AGQE?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Sua contribuição ajuda a fortalecer nossas ações e a construir uma sociedade mais justa e igualitária. Entre em contato conosco para saber como você ou sua empresa
              podem fazer a diferença.
            </p>
            <Link
              href="/contato"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg">
              Seja um Apoiador
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
