"use client";

import { useEffect, useRef } from "react";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoxMTgxNSwiaWF0IjoxNzc2ODQ0ODU1LCJleHAiOjQ5MDEwNDcyNTV9.iaeWbHQSVBHeon5jYQPz4SN4u9ygqFOH__xbe6jha9w";

const CSS_ID = "srfx-csr-style-css";
const JS_ID = "srfx-csr-js-js";

export function CarShowroom() {
  const containerRef = useRef<HTMLDivElement>(null);

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

  return <div ref={containerRef} />;
}
