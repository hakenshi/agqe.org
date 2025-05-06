import { db } from "./db";
import { usersSchema, sponsorsSchema, eventImagesSchema, eventsSchema, eventTypeEnum } from "./schema";

async function seed() {
    console.log("seeding the database.")

    const usersToInsert = [
        { firstName: 'João Pedro', secondName: 'G. B. de Oliveira', photo: "/images/volunteer/JoaoPedro.jpg", occupation: "Presidente", color: "pink", joinedAt: new Date() },
        { firstName: 'Wellington', secondName: 'Ambrozio Jacó', photo: "/images/volunteer/Wellington.jpg", occupation: "Vice-Presidente", color: "purple", joinedAt: new Date() },
        { firstName: 'Chrysthopher', secondName: 'Eluís Dekay', photo: "/images/volunteer/Chrysthopher.jpg", occupation: "Assessor de Políticas", color: "blue", joinedAt: new Date() },
        { firstName: 'Patricia', secondName: 'Maria M. T. Mollo', photo: "/images/volunteer/Patricia.jpg", occupation: "Advogada", color: "teal", joinedAt: new Date() },
        { firstName: 'Alessandra', secondName: 'Windson Francis', photo: "/images/volunteer/Alessandra.jpg", occupation: "Coordenadora Trans", color: "red", joinedAt: new Date() },
        { firstName: 'Ettore', secondName: 'Yazbeck', photo: "/images/volunteer/Ettore.jpg", occupation: "Coordenador de Eventos", color: "indigo", joinedAt: new Date() },
        { firstName: 'Pedro', secondName: 'Alves', photo: "/images/volunteer/Pedro.jpg", occupation: "Coordenador de Eventos", color: "yellow", joinedAt: new Date() },
        { firstName: 'Wellington', secondName: 'Freitas', photo: "/images/volunteer/WellingtonF.JPG", occupation: "Coordenador de Eventos", color: "green", joinedAt: new Date() },
        { firstName: 'Mitchell', secondName: 'Willyans R.', photo: "/images/volunteer/Mitchell.jpg", occupation: "Assessor de Eventos", color: "gray", joinedAt: new Date() },
        { firstName: 'Lou', secondName: 'Bruscato', photo: "/images/volunteer/Luigi..jpg", occupation: "Coord. Jovens/Adolesc.", color: "orange", joinedAt: new Date() },
        { firstName: 'Luís Felipe', secondName: 'Colósimo', photo: "/images/volunteer/luisFelipe.jpg", occupation: "Web Designer", color: "cyan", joinedAt: new Date() },
        { firstName: 'Amanda', secondName: 'Domingues', photo: "/images/volunteer/amanda.jpg", occupation: "Coord. Ações/Eventos", color: "lime", joinedAt: new Date() }
    ];

    const sponsorsToInsert = [
        { name: "Doritos", logo: "/images/apoio/1.png", website: "", sponsoringSince: new Date() },
        { name: "Burger King", logo: "/images/apoio/2.png", website: "", sponsoringSince: new Date() },
        { name: "PARADASP", logo: "/images/apoio/3.png", website: "", sponsoringSince: new Date() },
        { name: "Antra", logo: "/images/apoio/4.png", website: "", sponsoringSince: new Date() },
        { name: "ARTGAY", logo: "/images/apoio/5.png", website: "", sponsoringSince: new Date() },
        { name: "IBRAT", logo: "/images/apoio/6.png", website: "", sponsoringSince: new Date() },
        { name: "Coord. Política Diversidade Sexual", logo: "/images/apoio/7.png", website: "", sponsoringSince: new Date() },
        { name: "Aliança Nacional LGBTI", logo: "/images/apoio/8.png", website: "", sponsoringSince: new Date() },
        { name: "Grupo Dignidade", logo: "/images/apoio/9.png", website: "", sponsoringSince: new Date() },
        { name: "REDEGAY", logo: "/images/apoio/10.png", website: "", sponsoringSince: new Date() },
        { name: "Copabacana", logo: "/images/apoio/11.png", website: "", sponsoringSince: new Date() },
        { name: "CLAC", logo: "/images/apoio/12.png", website: "", sponsoringSince: new Date() },
        { name: "Greenpeace", logo: "/images/apoio/14.png", website: "", sponsoringSince: new Date() },
        { name: "Prefeitura São João", logo: "/images/apoio/15.png", website: "", sponsoringSince: new Date() },
        { name: "Depto. Cultura SJBV", logo: "/images/apoio/16.png", website: "", sponsoringSince: new Date() },
        { name: "Líbero Hotel", logo: "/images/apoio/17.png", website: "", sponsoringSince: new Date() },
        { name: "Mais Orgulho", logo: "/images/apoio/18.png", website: "", sponsoringSince: new Date() },
        { name: "AGQE", logo: "/images/apoio/19.png", website: "", sponsoringSince: new Date() },
        { name: "São João Turismo", logo: "/images/apoio/20.png", website: "", sponsoringSince: new Date() },
        { name: "Fly", logo: "/images/apoio/21.png", website: "", sponsoringSince: new Date() },
        { name: "Med 4 You", logo: "/images/apoio/22.png", website: "", sponsoringSince: new Date() },
        { name: "APEOESP", logo: "/images/apoio/24.png", website: "", sponsoringSince: new Date() },
        { name: "Francielli Delalibera", logo: "/images/apoio/25.png", website: "", sponsoringSince: new Date() },
        { name: "Big Bom Supermercados", logo: "/images/apoio/26.png", website: "", sponsoringSince: new Date() },
        { name: "F.B Eventos e Cerimonial", logo: "/images/apoio/27.png", website: "", sponsoringSince: new Date() },
        { name: "Unicópias e Impressões", logo: "/images/apoio/28.png", website: "", sponsoringSince: new Date() },
        { name: "Jess Comunicação Visual", logo: "/images/apoio/29.png", website: "", sponsoringSince: new Date() },
        { name: "Grupo Plural", logo: "/images/apoio/30.png", website: "", sponsoringSince: new Date() },
        { name: "Felice Pizzaria", logo: "/images/apoio/31.png", website: "", sponsoringSince: new Date() },
        { name: "A.W Moda Íntima", logo: "/images/apoio/33.png", website: "", sponsoringSince: new Date() },
        { name: "Brothers Cenografia", logo: "/images/apoio/34.png", website: "", sponsoringSince: new Date() },
        { name: "Long Way Store", logo: "/images/apoio/35.png", website: "", sponsoringSince: new Date() },
        { name: "SAN", logo: "/images/apoio/36.png", website: "", sponsoringSince: new Date() },
        { name: "Anistia Internacional", logo: "/images/apoio/37.png", website: "", sponsoringSince: new Date() },
        { name: "Armazém Asgard", logo: "/images/apoio/38.png", website: "", sponsoringSince: new Date() }
    ];

    const eventsToInsert = [
        {
            name: "PROIBIDO PROIBIR: Roda de Conversa sobre HIV + Festa",
            eventType: "event" as typeof eventTypeEnum.enumValues['1'],
            slug: "proibido-proibir-roda-de-conversa-sobre-hiv-festa",
            description: "Evento especial com bate-papo informativo sobre HIV com convidados, seguido por festa com DJs da cena paulistana.",
            content: `A Casa Pagú, no dia 21 de Março de 2020, iniciou um novo ciclo de eventos. A novidade é que, a partir desta data, nossas festas vieram acompanhadas de nossos ideais, mostrando o mundo que acreditamos ser possível, livre de preconceitos e rigidez.
    O primeiro evento desta nova fase foi o PROIBIDO PROIBIR, uma roda de conversa sobre HIV com convidados mais que especiais: Jenniffer Besse (Podcast 1Ligação) recebeu David Oliveira para compartilhar sua experiência em um bate-papo lindo, com muita realidade sobre o HIV no Brasil.
    Recebemos também Chrysthopher Dekay (Assessor de Políticas para a Diversidade), representando a Associação Grupo Quatro Estações, nossa apoiadora, com informações sobre a nossa região, prevenção, distribuição de material preventivo e muito mais!
    A Festa: Dessa vez, a festa foi regada pelo melhor da discotecagem paulistana do pessoal da casa feminista Presidenta Bar, na Augusta.
    - DJ residente do Presidenta Bar, Camila Possolo, trazendo o melhor do punk feminista e música indie.
    - DJ Renato Mutt agitando com muito garage, post-punk revival e new punk.
    - DJ Jennifer Besse representando a cena das Brasilidades.
    A ideia foi que as pessoas se sentissem à vontade para participar e tirar suas dúvidas, num ambiente descontraído e acolhedor, porque cremos que todos temos espaço de fala e pertencimento.
    Participação e Ingressos: Para este dia, abrimos as portas às 16 horas. A entrada na festa foi gratuita apenas para quem participou do bate-papo (mediante envio prévio de nome para Maria Paula Magalhães).
    Ingressos apenas para a festa foram vendidos antecipadamente por R$ 10,00 ou na portaria por R$ 15,00. Os ingressos eram limitados.
    Regras: Proibida a entrada com bebidas alcoólicas e para menores de 18 anos.`,
            date: new Date("2020-03-21T16:00:00"),
            location: "Casa Pagú, São João da Boa Vista"
        },
        {
            name: "12ª Parada do Orgulho da Diversidade de São João da Boa Vista",
            eventType: "event" as typeof eventTypeEnum.enumValues['1'],
            slug: "12-parada-orgulho-diversidade-sao-joao-da-boa-vista",
            description: "Edição marcante realizada em formato virtual/presencial adaptado.",
            content: `A 12ª edição da Parada do Orgulho da Diversidade chegou mais colorida, empoderada, renovada e com muitas novidades! Devido ao contexto da época (Pandemia COVID-19), o formato e atrações foram adaptados. Apresentação: Judy Rainbow e Convidada Especial. DJs: [Informações não disponíveis]. Shows: [Informações não disponíveis]. Apoio: Prefeitura Municipal de São João da Boa Vista, Departamento Municipal de Cultura, Departamento Municipal de Saúde.`,
            date: new Date("2020-07-19T13:00:00"),
            location: "Largo da Estação Ferroviária, São João da Boa Vista"
        },
        {
            name: "11ª Parada do Orgulho da Diversidade",
            eventType: "gallery" as typeof eventTypeEnum.enumValues['0'],
            slug: "11-parada-orgulho-diversidade",
            description: "Celebrando a diversidade e a força inspirada em Frida Kahlo.",
            content: `11ª Parada do Orgulho da Diversidade. Tema: "Todos Podem ser Frida."`,
            date: new Date("2019-07-21T13:00:00"),
            location: "São João da Boa Vista"
        }
    ];

    try {
        console.log("Deleting existing users...")
        await db.delete(usersSchema)

        console.log("Inserting new users...")
        await db.insert(usersSchema).values(usersToInsert)

        console.log("Deleting existing sponsors...")
        await db.delete(sponsorsSchema)
        console.log("Inserting new sponsors...")
        await db.insert(sponsorsSchema).values(sponsorsToInsert)

        console.log("Deleting existing event images...")

        await db.delete(eventImagesSchema)

        console.log("Deleting existing events...")

        await db.delete(eventImagesSchema)

        console.log("Inserting new events...")
        const insertedEvents = await db.insert(eventsSchema).values(eventsToInsert).returning({ id: eventsSchema.id, slug: eventsSchema.slug })
        const eventMap = Object.fromEntries(insertedEvents.map(e => [e.slug, e.id]));


        const eventImagesToInsert = [
            // PROIBIDO PROIBIR
            { eventId: eventMap["proibido-proibir-roda-de-conversa-sobre-hiv-festa"], imageUrl: "images/event/pp_baner.jpeg" },
            // 12ª Parada
            { eventId: eventMap["12-parada-orgulho-diversidade-sao-joao-da-boa-vista"], imageUrl: "images/event/e1.jpg" },
            // 11ª Parada (galeria)
            ...Array.from({ length: 20 }, (_, i) => ({
                eventId: eventMap["11-parada-orgulho-diversidade"],
                imageUrl: `images/parada11/${i + 1}.jpg`
            }))
        ];

        console.log("Inserting event images...")

        await db.insert(eventImagesSchema).values(eventImagesToInsert)

        console.log('Database successfully seeded with staff data.')

    }
    catch (error) {
        console.error('Error while trying to seed the database: ', error);
        process.exit(1)
    }
    finally {
        console.log("Seeding script finsished.")
        process.exit(0)
    }
}

seed()