"use client";

import { useEffect } from "react";

const ORNAMENT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" style="display:block;border-radius:50%;overflow:hidden;">
  <defs>
    <radialGradient id="devEmeraldGrad" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#245C45"/>
      <stop offset="50%" stop-color="#132E22"/>
      <stop offset="100%" stop-color="#081711"/>
    </radialGradient>
    <linearGradient id="devGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF2D6"/>
      <stop offset="30%" stop-color="#E5CD8B"/>
      <stop offset="70%" stop-color="#C5A059"/>
      <stop offset="100%" stop-color="#8C6826"/>
    </linearGradient>
  </defs>
  <circle cx="64" cy="64" r="61" fill="none" stroke="url(#devGoldGrad)" stroke-width="1.5" opacity="0.5"/>
  <circle cx="64" cy="64" r="57" fill="none" stroke="url(#devGoldGrad)" stroke-width="1.8" stroke-dasharray="4, 3" opacity="0.85"/>
  <circle cx="64" cy="64" r="51" fill="url(#devEmeraldGrad)" stroke="url(#devGoldGrad)" stroke-width="3"/>
  <circle cx="64" cy="64" r="46" fill="none" stroke="url(#devGoldGrad)" stroke-width="1" opacity="0.6"/>
  <polygon points="64,18 66,20 64,22 62,20" fill="url(#devGoldGrad)"/>
  <polygon points="64,106 66,108 64,110 62,108" fill="url(#devGoldGrad)"/>
  <polygon points="18,64 20,66 22,64 20,62" fill="url(#devGoldGrad)"/>
  <polygon points="106,64 108,66 110,64 108,62" fill="url(#devGoldGrad)"/>
  <text x="44" y="70" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" font-weight="400" fill="url(#devGoldGrad)" text-anchor="middle">A</text>
  <text x="64" y="66" font-family="Georgia, serif" font-size="20" font-style="italic" fill="#FFF2D6" text-anchor="middle">&amp;</text>
  <text x="84" y="70" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" font-weight="400" fill="url(#devGoldGrad)" text-anchor="middle">B</text>
  <text x="64" y="85" font-family="-apple-system, sans-serif" font-size="8.5" font-weight="600" letter-spacing="3" fill="url(#devGoldGrad)" opacity="0.9" text-anchor="middle">2027</text>
</svg>`;

export default function DevtoolsIndicatorOrnament() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const applyOrnamentToDevtools = () => {
      // Find Next.js dev overlay / portal
      const portal = document.querySelector("nextjs-portal");
      if (!portal || !portal.shadowRoot) return;

      const shadowRoot = portal.shadowRoot;

      // 1. Inject styling into shadowRoot for the dev indicator
      let customStyle = shadowRoot.getElementById("wedding-devtool-style") as HTMLStyleElement | null;
      if (!customStyle) {
        customStyle = document.createElement("style");
        customStyle.id = "wedding-devtool-style";
        customStyle.textContent = `
          button[data-nextjs-dev-tools-button] {
            background: linear-gradient(135deg, #1A4030 0%, #132E22 100%) !important;
            border: 1px solid rgba(197, 160, 89, 0.6) !important;
            box-shadow: 0 4px 14px rgba(19, 46, 34, 0.35) !important;
            border-radius: 9999px !important;
            padding: 4px !important;
            transition: all 0.3s ease !important;
          }
          button[data-nextjs-dev-tools-button]:hover {
            transform: scale(1.08) !important;
            border-color: #E5CD8B !important;
            box-shadow: 0 0 16px rgba(229, 205, 139, 0.45) !important;
          }
          .wedding-devtools-ornament {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 22px !important;
            height: 22px !important;
            min-width: 22px !important;
            min-height: 22px !important;
            vertical-align: middle !important;
          }
          .wedding-devtools-ornament svg {
            width: 100% !important;
            height: 100% !important;
          }
        `;
        shadowRoot.appendChild(customStyle);
      }

      // 2. Replace the Next.js icon with our ornament
      const devtoolsBtn = shadowRoot.querySelector("button[data-nextjs-dev-tools-button]");
      if (devtoolsBtn) {
        // If our ornament container already exists inside, don't replace again
        if (!devtoolsBtn.querySelector(".wedding-devtools-ornament")) {
          // Look for any default Next.js SVG inside the button
          const defaultSvg = devtoolsBtn.querySelector("svg");
          const ornamentSpan = document.createElement("span");
          ornamentSpan.className = "wedding-devtools-ornament";
          ornamentSpan.setAttribute("data-wedding-ornament", "true");
          ornamentSpan.innerHTML = ORNAMENT_SVG;

          if (defaultSvg) {
            defaultSvg.replaceWith(ornamentSpan);
          } else {
            devtoolsBtn.prepend(ornamentSpan);
          }
        }
      }
    };

    // Run initially
    applyOrnamentToDevtools();

    // Observe DOM mutations to catch dev portal mounting or updates
    const observer = new MutationObserver(() => {
      applyOrnamentToDevtools();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Also run periodic checks during initial load
    const intervalId = setInterval(applyOrnamentToDevtools, 400);
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
    }, 10000);

    return () => {
      observer.disconnect();
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
