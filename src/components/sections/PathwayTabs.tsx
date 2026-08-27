"use client";

import { useState } from "react";

export type PathwayTab = {
  label: string;
  body: React.ReactNode;
};

type Theme = "purple" | "green" | "orange";

const themes: Record<Theme, { active: string; panel: string }> = {
  purple: {
    active: "border-white/15 bg-[linear-gradient(100deg,#4a1454_0%,#2a0d30_55%,#1a0a1e_100%)]",
    panel: "bg-[linear-gradient(150deg,#2a0d30_0%,#1a0a1e_45%,#141110_100%)]",
  },
  green: {
    active: "border-white/15 bg-[linear-gradient(100deg,#0f5c2a_0%,#0a3018_55%,#0b1710_100%)]",
    panel: "bg-[linear-gradient(150deg,#0d3d1e_0%,#0b2013_45%,#141110_100%)]",
  },
  orange: {
    active: "border-white/15 bg-[linear-gradient(100deg,#6d3a13_0%,#3d2110_55%,#1d1209_100%)]",
    panel: "bg-[linear-gradient(150deg,#3a1f0e_0%,#22140a_45%,#141110_100%)]",
  },
};

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function PathwayTabs({
  tabs,
  theme = "purple",
  id,
}: {
  tabs: PathwayTab[];
  theme?: Theme;
  id: string;
}) {
  const [active, setActive] = useState(0);
  const t = themes[theme];
  const panelId = `${id}-panel`;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-6">
      {/* Tab list — an accordion below lg, a tab rail from lg up */}
      <div className="flex flex-col gap-2.5 lg:h-full">
        {tabs.map((tab, i) => {
          const selected = i === active;
          return (
            <div key={tab.label} className="flex flex-col gap-3 lg:flex-1">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-expanded={selected}
                aria-controls={selected ? panelId : undefined}
                className={`flex w-full items-center justify-between gap-4 rounded-xl border px-5 py-3.5 text-left text-sm transition-colors duration-300 lg:h-full ${
                  selected
                    ? `${t.active} text-foreground`
                    : "border-white/10 bg-[#1b1817] text-foreground/80 hover:border-white/20 hover:text-foreground"
                }`}
              >
                <span>{tab.label}</span>
                <ArrowIcon />
              </button>

              {/* Mobile: the answer opens directly under the tab that was tapped */}
              {selected && (
                <div
                  id={panelId}
                  role="region"
                  aria-live="polite"
                  className={`rounded-xl border border-white/10 px-6 py-6 lg:hidden ${t.panel}`}
                >
                  <div className="space-y-4 text-sm font-light leading-6 text-foreground/85">
                    {tab.body}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop panel — h-full matches the tab column; content is centred so the
          answer fills the box without a large empty gap at the bottom */}
      <div
        role="region"
        aria-live="polite"
        className={`hidden rounded-xl border border-white/10 px-6 py-6 sm:px-8 sm:py-7 lg:flex lg:h-full lg:min-h-72 lg:flex-col lg:justify-center ${t.panel}`}
      >
        <div className="space-y-4 text-sm font-light leading-6 text-foreground/85">
          {tabs[active].body}
        </div>
      </div>
    </div>
  );
}
