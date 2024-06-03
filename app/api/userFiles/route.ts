import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const { username } = await req.json();

  if (!username) {
    return NextResponse.json({
      message: "No username provided",
    });
  }

  const result = await fetch(`${process.env.NEXT_PUBLIC_AWS_API_URL}/getUserFiles`, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": process.env.NEXT_PUBLIC_AWS_API_KEY!,
    },
    body: JSON.stringify({
      username: username,
    }),
  });

  const data = await result.json();
  
  return NextResponse.json({
    ...data,
  });
}
