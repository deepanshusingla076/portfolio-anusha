import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  speed?: number; // ms per frame
  charSet?: string;
  className?: string;
  startDelay?: number; // ms to wait before starting animation
};

const defaultCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()-_=+[]{}<>/\\|~";

export default function ScrambleText({ text, speed = 30, charSet = defaultCharSet, className, startDelay = 300 }: Props) {
  // `speed` controls how quickly characters are revealed (ms per reveal step).
  const revealSpeed = Math.max(20, speed);
  const flickerSpeed = 40; // ms for random flicker updates

  const [display, setDisplay] = useState<string>(() => text.replace(/./g, " "));
  const rafRef = useRef<number | null>(null);
  const revealRef = useRef(0);
  const lastRevealTime = useRef<number | null>(null);
  const lastFlicker = useRef<number | null>(null);

  useEffect(() => {
    revealRef.current = 0;
    lastRevealTime.current = null;
    lastFlicker.current = null;

    const length = text.length;

    let startTimer: number | null = null;

    function startAnimation() {
      function step(ts: number) {
        if (lastFlicker.current === null) lastFlicker.current = ts;
        if (lastRevealTime.current === null) lastRevealTime.current = ts;

        // handle reveal progress
        const revealElapsed = ts - (lastRevealTime.current || 0);
        if (revealElapsed >= revealSpeed) {
          const revealSteps = Math.floor(revealElapsed / revealSpeed);
          revealRef.current = Math.min(length, revealRef.current + revealSteps);
          lastRevealTime.current = ts;
        }

        // handle flicker updates (random chars for unrevealed)
        const flickerElapsed = ts - (lastFlicker.current || 0);
        if (flickerElapsed >= flickerSpeed) {
          let out = "";
          for (let i = 0; i < length; i++) {
            if (i < revealRef.current) out += text[i];
            else out += charSet.charAt(Math.floor(Math.random() * charSet.length));
          }
          setDisplay(out);
          lastFlicker.current = ts;
        }

        if (revealRef.current < length) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          setDisplay(text);
        }
      }

      rafRef.current = requestAnimationFrame(step);
    }

    if (startDelay > 0) {
      startTimer = window.setTimeout(() => startAnimation(), startDelay);
    } else {
      startAnimation();
    }

    return () => {
      if (startTimer) window.clearTimeout(startTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [text, speed, charSet, startDelay]);

  // Render a hidden reserve span (visibility hidden) to lock layout, and overlay scrambled text
  return (
    <span className={`${className ?? ""} relative inline-block`} style={{ whiteSpace: "pre" }}>
      <span style={{ visibility: "hidden", display: "inline-block" }}>{text}</span>
      <span aria-hidden style={{ position: "absolute", left: 0, top: 0, whiteSpace: "pre" }}>{display}</span>
    </span>
  );
}
