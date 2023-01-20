import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/database/client"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, favorites } = JSON.parse(req.body)

  console.log(req.body)

  const updatedUser = await prisma.users.update({
    where: {
      id: id
    },
    data: {
      favorites: favorites
    }
  })

  if(!updatedUser) return res.status(400).json({ msg: "There was an error while updating the favorites!", success: false })

  res.status(200).json({ success: true, updatedUser })
}