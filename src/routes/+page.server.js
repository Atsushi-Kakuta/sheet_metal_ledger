/** @type {import('./$types').Actions} */
import { prisma } from "$lib/prisma"

export const actions = {
    create: async (event) => {
        try {
            const user = await prisma.user.create({
                data: {
                    entry_person: 'elsa@prisma.io',
                    receipt_date: '2022/01/01',
                    repair_point: 'Elsa Prisma',
                },
            })
            return user;
        } catch (e) {
            console.error(e)
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // The .code property can be accessed in a type-safe manner
                if (e.code === 'P2002') {
                    console.log(
                        'There is a unique constraint violation, a new user cannot be created with this email'
                    )
                }
            }
        }
    }
    // show: async (event) => {
    //
    // }
    // update: async (event) => {
    //
    // }
    // delete: async (event) => {
    //
    // }
};