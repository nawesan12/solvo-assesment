import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/database/client"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const user = await prisma.users.findUnique({
    where: {
      id: String(id)
    }
  })

  res.status(200).json(user)
}