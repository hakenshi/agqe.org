import { db } from "./db";
import { usersSchema } from "./schema";

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
    try {
        console.log("Deleting existing users...")
        await db.delete(usersSchema)

        console.log("Inserting new users...")
        await db.insert(usersSchema).values(usersToInsert)

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