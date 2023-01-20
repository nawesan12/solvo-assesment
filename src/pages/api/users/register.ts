import type { NextApiRequest, NextApiResponse } from "next"
import type { Secret } from "jsonwebtoken"
import { prisma } from "@/database/client"
import { hash } from "bcrypt"
import { sign } from "jsonwebtoken"

type UserToUpload = {
  email: string
  name: string
  password: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, name, password } = req.body

  const userAlreadyExists = await prisma.users.findUnique({
    where: { 
      email: email as string
    }
  })

  if(userAlreadyExists) return res.status(400).json({ success: false, msg: "An user with this email already exists!" })

  const encryptedPassword = await hash(password, 10)

  const newUser: UserToUpload = {
    email,
    name,
    password: encryptedPassword
  }

  const savedUser = await prisma.users.create({
    data: newUser
  })

  if(!savedUser) return res.status(400).json({ success: false, msg: "An error ocurred while creating the user." })

  //@ts-ignore
  delete savedUser.password

  const token = sign(savedUser, process.env.TOKEN_SECRET as Secret, {
    expiresIn: "100 days"
  })

  res.status(200).json({ success: true, savedUser, token })
}