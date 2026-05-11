"use client";

import { useEffect, useRef, useState } from "react";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoxMTgxNSwiaWF0IjoxNzc2ODQ0ODU1LCJleHAiOjQ5MDEwNDcyNTV9.iaeWbHQSVBHeon5jYQPz4SN4u9ygqFOH__xbe6jha9w";

const CSS_ID = "srfx-csr-style-css";
const JS_ID = "srfx-csr-js-js";

export function CarShowroom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.getElementById(CSS_ID)) {
      const link = document.createElement("link");
      link.id = CSS_ID;
      link.rel = "stylesheet";
      link.href = "https://showroom.carcuro.com/style.css?v=1.1.8";
      link.type = "text/css";
      document.head.appendChild(link);
    }

    const mount = () => {
      container.innerHTML = "";
      const el = document.createElement("car-showroom");
      el.setAttribute("companytoken", TOKEN);
      container.appendChild(el);

      // Watch for the widget's first real content to appear, then hide spinner
      const observer = new MutationObserver(() => {
        if (container.querySelector("car-showroom")?.shadowRoot?.children.length ||
            container.querySelector("[class]")) {
          setLoading(false);
          observer.disconnect();
        }
      });
      observer.observe(container, { childList: true, subtree: true });

      // Fallback: hide spinner after 4 s regardless
      setTimeout(() => { setLoading(false); observer.disconnect(); }, 4000);
    };

    if (!document.getElementById(JS_ID)) {
      const script = document.createElement("script");
      script.id = JS_ID;
      script.src = "https://showroom.carcuro.com/showroom.es.js?v=1.1.8";
      script.type = "text/javascript";
      script.onload = mount;
      document.body.appendChild(script);
    } else {
      mount();
    }
  }, []);

  return (
    <div className="relative min-h-[500px]">
      {/* Spinner overlay */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
          <div className="w-12 h-12 rounded-full border-4 border-brand-primary/20 border-t-brand-primary animate-spin" />
          <p className="font-body text-sm text-brand-neutral/60">
            Fahrzeuge werden geladen…
          </p>
        </div>
      )}
      <div
        ref={containerRef}
        className={loading ? "opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-500"}
      />
    </div>
  );
}
