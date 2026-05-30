"use client";

import { useRouter } from "next/navigation";
import { useCallback, useRef, type FormEvent } from "react";
import { UPCUBE_CHAT_URL } from "lib/upcube-universal/product-links";

/* TODO: Future API integration — replace no-op submit with
   a fetch to /api/chat sending { prompt: string }.
   Use OPENAI_API_KEY from env (server-side only).
   For now, navigates to the Ethen workspace. */

export function HeroChatPanel() {
  const router = useRouter();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      const prompt = inputRef.current?.value?.trim();
      if (prompt) {
        // TODO: POST to /api/chat with { prompt } and navigate to result.
        router.push(UPCUBE_CHAT_URL);
      } else {
        router.push(UPCUBE_CHAT_URL);
      }
    },
    [router],
  );

  return (
    <section className="uc-home__chat-panel" aria-label="Upcube AI chat entry">
      <form className="uc-home__chat-composer" onSubmit={handleSubmit}>
        <div className="uc-home__chat-composer-inner">
          <textarea
            ref={inputRef}
            id="upcube-home-prompt"
            name="prompt"
            rows={1}
            placeholder="Ask Upcube anything..."
            autoComplete="off"
          />
          <button type="submit" className="uc-home__chat-send" aria-label="Send to Ethen">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M3 9h10M9 4l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>
    </section>
  );
}
