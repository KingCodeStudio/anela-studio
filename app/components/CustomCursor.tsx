"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "arrow" | "pointer" | "kcs";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<CursorMode>("arrow");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const cursor = cursorRef.current;

      if (!cursor) return;

      /*
       * IMPORTANT:
       * Put the cursor's CENTER exactly on the mouse.
       */
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;

      const target = event.target as HTMLElement | null;

      if (!target) return;

      /*
       * =========================
       * KCS LOGO
       * =========================
       */

      const kcsElement = target.closest(".kingCodeLink");

      if (kcsElement) {
        setMode("kcs");
        return;
      }

      /*
       * =========================
       * ANELA NAVIGATION
       * =========================
       *
       * About
       * Services
       * Clients
       */

      const navigationLink = target.closest(
        ".navigation a"
      );

      if (navigationLink) {
        setMode("pointer");
        return;
      }

      /*
       * =========================
       * ALL OTHER CLICKABLE
       * =========================
       */

      const clickableElement = target.closest(
        "a, button, [role='button']"
      );

      if (clickableElement) {
        setMode("pointer");
        return;
      }

      /*
       * =========================
       * NORMAL ANELA CURSOR
       * =========================
       */

      setMode("arrow");
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`customCursor customCursor--${mode}`}
      aria-hidden="true"
    >
      {/* ANELA NORMAL ARROW */}

      <span className="cursorArrow">
        <span className="cursorChevron cursorChevron--left" />
        <span className="cursorChevron cursorChevron--right" />
      </span>

      {/* ANELA POINTER */}

      <span className="cursorPointer" />

      {/* KING CODE STUDIO */}

      <span className="cursorKcs">
        <span className="kcsOuter">
          <span className="kcsBlack">
            <span className="kcsGold">
              <img
                src="/branding/king-code-studio.png"
                alt=""
              />
            </span>
          </span>
        </span>
      </span>
    </div>
  );
}