import { getEventBySlug } from "@/actions/events"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import Image from "next/image"

export default async function GaleriaPage({ params }: { params: { slug: string } }) {

  const { slug } = await params

  const event = await getEventBySlug(slug)

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-2xl text-center font-semibold">{event?.name}</h2>
        <p className="text-xl text-center my-5 font-semibold">Galeria de Fotos</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {event?.images.map(image => (
            <Dialog key={image.id}>
              <DialogTrigger className="cursor-pointer">
                <Image className="rounded" src={image.imageUrl} alt={`imagem do evento ${event.name}`} width={800} height={600} />
              </DialogTrigger>
              <DialogContent className="min-w-0 md:min-w-5xl">
                <DialogHeader className="pb-1">
                  <DialogTitle className="sr-only">
                    {event.name}
                  </DialogTitle>
                </DialogHeader>
                <Image className="w-full h-full rounded" src={image.imageUrl} alt={`imagem do evento ${event.name}`} width={1920} height={1080} />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
