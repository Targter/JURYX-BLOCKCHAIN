// pages/api/panelist/rounds.ts
import { prisma } from "@dbConfig/dbConfig"; // Adjust path
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { eventId } = req.body;

  try {
    const rounds = await prisma.round.findMany({
      where: { eventId },
      orderBy: { order: 'asc' }, // sort by round order
    });

    res.status(200).json({ rounds });
  } catch (error) {
    console.error("Error fetching rounds:", error);
    res.status(500).json({ error: "Failed to fetch rounds" });
  }
}
