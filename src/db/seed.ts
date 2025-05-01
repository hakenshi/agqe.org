import { db } from "./db";
import { usersSchema, sponsorsSchema } from "./schema";

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

    try {
        console.log("Deleting existing users...")
        await db.delete(usersSchema)

        console.log("Inserting new users...")
        await db.insert(usersSchema).values(usersToInsert)

        console.log("Deleting existing sponsors...")
        await db.delete(sponsorsSchema)
        console.log("Inserting new sponsors...")
        await db.insert(sponsorsSchema).values(sponsorsToInsert)

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