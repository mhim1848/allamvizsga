import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@root/prismaHandler";
import { unstable_getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]";

const getQuestions = async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = await unstable_getServerSession(req, res, authOptions);

  // if (session) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const questions = await prisma.question.findMany({
      include: { Image: true },
    });

    if (questions === null) {
      console.log("No questions stored in the database.");
    }

    res.json(questions);
  } catch (Exception) {
    console.log("Error occured while looking up existing questions.");
  }
  // } else {
  //     res.json({"error": "You must sign in to access content behind this page."});
  // }
};

export default getQuestions;
