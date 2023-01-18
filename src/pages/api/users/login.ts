import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  if(email === "test" && password === "test") {
    return res.status(200).json({email, password})
  }

  res.status(200).redirect("/weather")
}