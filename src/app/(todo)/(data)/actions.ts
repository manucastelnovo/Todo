"use server";
import { sql } from "@vercel/postgres";

export async function createTodo(formData: FormData) {
  try {

    const description = formData.get("description");
    const title = formData.get("title");
    const isDone = false;

    if (!description || !title) {
      throw new Error("Missing required fields");
    }

    await sql`INSERT INTO users (title, description, isDone) VALUES (${title.toString()}, ${description.toString()}, ${isDone})`;

  } catch (error) {

    return { error: 'Something went wrong', status: 500 }
    
  }
}
