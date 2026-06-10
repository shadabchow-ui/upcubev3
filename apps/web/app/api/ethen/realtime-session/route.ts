import { NextResponse } from "next/server";

export async function POST() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { enabled: false, error: "Voice mode is not configured yet." },
      { status: 200 },
    );
  }

  try {
    const response = await fetch(
      "https://api.openai.com/v1/realtime/sessions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-realtime-preview-2026-04-08",
          voice: "alloy",
          modalities: ["audio", "text"],
          instructions:
            "You are Ethen, an AI guide for Upcube. Help users understand Ethen, agent categories, real-world workflows, trust, and how to get started. Be concise and helpful.",
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI realtime session error:", response.status, errorText);
      return NextResponse.json(
        { enabled: false, error: "Failed to create voice session." },
        { status: 200 },
      );
    }

    const data = await response.json();
    return NextResponse.json({ enabled: true, session: data });
  } catch (error) {
    console.error("OpenAI realtime session fetch failed:", error);
    return NextResponse.json(
      { enabled: false, error: "Voice mode is unavailable right now." },
      { status: 200 },
    );
  }
}
