import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '@root/prismaHandler'

export default async function registrationHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({message: 'Method not allowed'});
    }
    
    try {
        const userData = JSON.parse(req.body);
    
        const newUser = await prisma.user.create({
            data: userData,
        });

        res.json(newUser);
    } catch (Exception) {
        console.log("Error occured while handling signup form data.");
    }
}