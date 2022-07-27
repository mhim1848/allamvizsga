import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import authOptions from "../auth/[...nextauth]";
import { prisma } from "@root/prismaHandler";

const getEmails = async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = await unstable_getServerSession(req, res, authOptions);

  // if (session) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const userEmail = JSON.parse(req.body).userEmail;

  try {
    const checkedEmail = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
      select: {
        email: true,
        password: true,
      },
    });

    res.json(checkedEmail);
  } catch (Exception) {
    console.log("Error occured while looking up user emails.");
  }
  //    } else {
  //         res.json({"error": "You must sign in to access content behind this page."});
  //    }
};

export default getEmails;
