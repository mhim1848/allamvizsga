import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '@root/prismaHandler'

const updateQuestions = async ( req : NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'PUT') {
        return res.status(405).json({message: 'Method not allowed'});
    }

    const questionDetails = JSON.parse(req.body);
    
    try {
        const updatedRating = await prisma.question.update({
            where: {
                id: req.query.id as string
            },
            data: {
                rating: questionDetails.rating
            }
        });

        if (updatedRating === null) {
            throw new Error("The given email does not exist in the db");
        }

        // Prisma clienteket valahogy be kellene zárni.
        // await prisma.$disconnect()
        res.json(updatedRating);
    } catch (Exception) {
        console.log("Error occured while looking up user emails.");
    }
}

export default updateQuestions;