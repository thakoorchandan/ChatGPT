import { createClient } from "@/lib/supabase/supabase-server";
import { NextResponse } from "next/server";

// POST
export async function POST(req: Request): Promise<Response> {
  const { messages } = await req.json();
  // If no message, return 400
  if (!messages) {
    return new Response("No message!", { status: 400 });
  }

  // Create Supabase Server Client
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If no session, return 401
  if (!session) {
    return new Response("Not authorized!", { status: 401 });
  }

  // Insert Message
  const { data: messagesInserted, error } = await supabase
    .from("messages")
    .insert(
      messages.map((message: any) => {
        return {
          chat: message.chat,
          content: message.content,
          role: message.role,
          owner: session?.user?.id,
          embedding: message.embedding,
          token_size: message.token_size,
        };
      })
    )
    .select("id,role,content");

  if (error) {
    return new Response(error.message, { status: 400 });
  } else {
    return NextResponse.json(messagesInserted);
  }
}
