"use client";

import { useRouter } from "next/navigation";
import { useCallback, useRef, useState, type FormEvent } from "react";
import { UPCUBE_CHAT_URL } from "lib/upcube-universal/product-links";

export function HeroChatPanel() {
  const router = useRouter();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmptyError, setIsEmptyError] = useState(false);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      const prompt = inputRef.current?.value?.trim();

      if (!prompt) {
        setIsEmptyError(true);
        inputRef.current?.focus();
        return;
      }

      setIsEmptyError(false);
      setIsSubmitting(true);

      const url = new URL(UPCUBE_CHAT_URL);
      url.searchParams.set("prompt", prompt);
      router.push(url.toString());
    },
    [router],
  );

  const handleChange = useCallback(() => {
    if (isEmptyError) {
      setIsEmptyError(false);
    }
  }, [isEmptyError]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        formRef.current?.requestSubmit();
      }
    },
    [],
  );

  return (
    <section className="uc-home__chat-panel" aria-label="Upcube AI chat entry">
      <form
        className="uc-home__chat-composer"
        onSubmit={handleSubmit}
        noValidate
        ref={formRef}
      >
        <div
          className={
            isEmptyError
              ? "uc-home__chat-composer-inner uc-home__chat-composer--error"
              : "uc-home__chat-composer-inner"
          }
        >
          <textarea
            ref={inputRef}
            id="upcube-home-prompt"
            name="prompt"
            rows={1}
            placeholder="Ask Upcube anything..."
            autoComplete="off"
            disabled={isSubmitting}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            aria-describedby={isEmptyError ? "chat-error" : undefined}
          />
          <button
            type="submit"
            className="uc-home__chat-send"
            aria-label="Send to Ethen"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="uc-home__chat-spinner" aria-hidden="true" />
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M3 9h10M9 4l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        {isEmptyError ? (
          <p className="uc-home__chat-error" id="chat-error" role="alert">
            Enter a question to continue.
          </p>
        ) : null}
      </form>
      <p className="uc-home__chat-helper">
        Ask about products, research, cloud, or anything Upcube.
      </p>
    </section>
  );
}
