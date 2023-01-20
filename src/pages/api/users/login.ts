import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/database/client"
import { sign } from "jsonwebtoken"
import { compare } from "bcrypt"

type UserToReceive = {
  id: string,
  email: string
  name: string
  password: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = JSON.parse(req.body)

  const user: UserToReceive | null = await prisma.users.findUnique({
    where: {
      email: email
    },
    select: {
      id: true,
      email: true,
      password: true,
      name: true,
      favorites: true
    }
  })

  if(!user) return res.status(400).json({ success: false, msg: "There is no user with that email!"})

  const passwordsMatch = await compare(password, user.password)
  
  if(!passwordsMatch) return res.status(400).json({ success: false, msg: "Wrong password!"})  

  //@ts-ignore
  delete user.password

  const token = sign(user, process.env.TOKEN_SECRET as string, { 
    expiresIn: "100 days"
  })

  res.status(200).json({ success: true, token })
}