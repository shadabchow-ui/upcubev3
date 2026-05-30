"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { EthenRobotPreview } from "components/ethen/EthenRobotPreview";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type VoiceStatus =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "ready" }
  | { type: "error"; message: string };

const starters = [
  { label: "Help me choose a product" },
  { label: "I want to build with AI" },
  { label: "I need cloud tools" },
];

export function EthenTalk() {
  const [open, setOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState<VoiceStatus>({ type: "idle" });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const closePanel = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        closePanel();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, closePanel]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const sendChatMessage = useCallback(async (text: string) => {
    setChatMessages((prev) => [...prev, { role: "user", content: text }]);
    setChatLoading(true);
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Thanks for your question. I'm here to help you explore Upcube products and features.",
        },
      ]);
      setChatLoading(false);
    }, 800);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = chatInput.trim();
      if (!trimmed || chatLoading) return;
      sendChatMessage(trimmed);
      setChatInput("");
    },
    [chatInput, chatLoading, sendChatMessage],
  );

  const handleStarterClick = useCallback(
    (label: string) => {
      sendChatMessage(label);
    },
    [sendChatMessage],
  );

  const handleSpeak = useCallback(async () => {
    setVoiceStatus({ type: "loading" });
    try {
      const res = await fetch("/api/ethen/realtime-session", { method: "POST" });
      const data = await res.json();
      if (data.enabled && data.session) {
        setVoiceStatus({ type: "ready" });
      } else {
        setVoiceStatus({ type: "error", message: data.error || "Voice mode is not configured yet." });
      }
    } catch {
      setVoiceStatus({ type: "error", message: "Voice mode is unavailable right now." });
    }
  }, []);

  const openPanel = useCallback(() => {
    setOpen(true);
  }, []);

  const voiceStatusLabel = () => {
    if (voiceStatus.type === "loading") return "Connecting…";
    if (voiceStatus.type === "ready") return "Voice ready!";
    if (voiceStatus.type === "error") return voiceStatus.message;
    return null;
  };

  return (
    <>
      {!open && (
        <button
          className="ethen-talk__fab"
          onClick={openPanel}
          aria-label="Talk to Ethen"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12c0 1.88.54 3.63 1.46 5.12L2 22l4.88-1.46C8.37 21.46 10.12 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
              fill="currentColor"
            />
          </svg>
          Talk to Ethen
        </button>
      )}

      {open && (
        <div className="ethen-talk__overlay">
          <div className="ethen-talk__backdrop" onClick={closePanel} />
          <div className="ethen-talk__panel">
            <div className="ethen-talk__header">
              <h2 className="ethen-talk__title">Meet Ethen</h2>
              <p className="ethen-talk__subtitle">Your Upcube AI guide.</p>
              <button
                className="ethen-talk__close"
                onClick={closePanel}
                aria-label="Close"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="ethen-talk__body">
              <div className="ethen-talk__avatar-section">
                <div className="ethen-talk__avatar-card">
                  <EthenRobotPreview />
                </div>
                <button
                  className="ethen-talk__cta"
                  onClick={handleSpeak}
                  disabled={voiceStatus.type === "loading"}
                >
                  Speak with Ethen
                </button>
                {voiceStatus.type !== "idle" && (
                  <p
                    className={`ethen-talk__voice-status ethen-talk__voice-status--${voiceStatus.type}`}
                  >
                    {voiceStatusLabel()}
                  </p>
                )}
              </div>

              {chatMessages.length > 0 && (
                <div className="ethen-talk__messages">
                  {chatMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`ethen-talk__message ethen-talk__message--${msg.role}`}
                    >
                      {msg.content}
                    </div>
                  ))}
                  {chatLoading && (
                    <div className="ethen-talk__message ethen-talk__message--assistant ethen-talk__message--loading">
                      Ethen is thinking&hellip;
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}

              <p className="ethen-talk__disclosure">
                You&rsquo;re speaking with Ethen, an AI guide for Upcube. Do
                not share sensitive personal information.
              </p>

              {chatMessages.length === 0 && (
                <div className="ethen-talk__starters">
                  <p className="ethen-talk__starters-label">
                    Try asking about:
                  </p>
                  <div className="ethen-talk__starters-grid">
                    {starters.map((s) => (
                      <button
                        key={s.label}
                        className="ethen-talk__starter"
                        onClick={() => handleStarterClick(s.label)}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="ethen-talk__input-row">
                <form
                  onSubmit={handleSubmit}
                  className="ethen-talk__input-form"
                >
                  <input
                    className="ethen-talk__text-input"
                    type="text"
                    placeholder="Ask Ethen about Upcube..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    disabled={chatLoading}
                  />
                  <button
                    type="submit"
                    className="ethen-talk__send-btn"
                    disabled={!chatInput.trim() || chatLoading}
                    aria-label="Send"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
