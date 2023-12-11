import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export const POST = async (req: NextRequest) => {
  try {
    const { data } = await req.json();
    console.log(data)
    const res = await sql`INSERT INTO users (title, description, isDone) VALUES (${data.title.toString()}, ${data.description.toString()}, ${data.isDone})`;
    
    return NextResponse.json({ todo: data }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
  return null;
};
