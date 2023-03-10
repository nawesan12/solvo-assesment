import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/database/client"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const users = await prisma.users.findMany({})

  res.status(200).json(users)
}