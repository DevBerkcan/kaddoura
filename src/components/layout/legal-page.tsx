import { type ReactNode } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";

interface LegalPageProps {
  eyebrow: string;
  title: string;
  /** Für Legal Cockpit: HTML-String via dangerouslySetInnerHTML */
  html?: string;
  children?: ReactNode;
}

export function LegalPage({ eyebrow, title, html, children }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-primary to-brand-primary-dark pt-28 pb-24">
      <div className="max-w-[860px] mx-auto px-6 sm:px-10">
        <div className="mb-10">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1
            className="font-display font-extrabold text-white leading-tight mt-3"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
          >
            {title}
          </h1>
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-12 text-brand-tertiary">
          {html ? (
            <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : (
            <div className="prose prose-sm max-w-none">{children}</div>
          )}
        </div>
      </div>
    </main>
  );
}
