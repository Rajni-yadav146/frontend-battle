"use client";

import React from "react";

// Inline Custom Icon Components for self-containment
const EnvelopeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    />
  </svg>
);

const ChatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 0 5.41 20.97a5.969 5.969 0 0 1-.474-3.658A7.481 7.481 0 0 1 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
    />
  </svg>
);

const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5 animate-spin"
    style={{ animationDuration: "12s" }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.297 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

const PaperPlaneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
    />
  </svg>
);

export default function NodeGraphWorkspace() {
  return (
    <div className="w-full max-w-[960px] mx-auto rounded-2xl bg-[#0A1923] border border-[#163041] shadow-2xl shadow-black/80 overflow-hidden relative flex flex-col group">
      
      {/* 1. Window Header Bar */}
      <div className="flex items-center justify-between border-b border-[#163041] px-6 py-4 bg-[#08151D]">
        <div className="flex items-center gap-3">
          {/* Mac-Style Micro Dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]/90 block" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/90 block" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]/90 block" />
          </div>
          <span className="font-mono text-[11px] text-muted-foreground ml-3 uppercase tracking-widest">
            WORKSPACE // NEURAL_ORCHESTRATOR
          </span>
        </div>
        <div className="font-mono text-[10px] text-primary bg-primary/5 px-2.5 py-0.5 rounded border border-primary/20 uppercase font-black tracking-wider">
          ACTIVE_NODES: 05
        </div>
      </div>

      {/* 2. Graph Canvas area */}
      <div className="relative p-6 md:p-10 bg-background/5 h-auto min-h-[360px] md:h-[480px] overflow-hidden flex flex-col justify-center">
        
        {/* SVG Grid background */}
        <div className="absolute inset-0 animated-grid-bg opacity-10 pointer-events-none" />

        {/* 3. Connecting SVG Paths (Responsive desktop only) */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" 
          viewBox="0 0 960 480"
          preserveAspectRatio="none"
        >
          {/* Node 1 to Focus Node Connection */}
          <path
            d="M 260,176 Q 306,176 352,210"
            fill="none"
            stroke="#1D3E53"
            strokeWidth="1.5"
          />
          <path
            d="M 260,176 Q 306,176 352,210"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeDasharray="6, 20"
            className="animate-[dash_3s_linear_infinite]"
          />

          {/* Node 2 to Focus Node Connection */}
          <path
            d="M 260,326 Q 306,326 352,290"
            fill="none"
            stroke="#1D3E53"
            strokeWidth="1.5"
          />
          <path
            d="M 260,326 Q 306,326 352,290"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeDasharray="6, 20"
            className="animate-[dash_3s_linear_infinite]"
            style={{ animationDirection: "reverse" }}
          />

          {/* Focus Node to Node 3 Connection */}
          <path
            d="M 608,210 Q 654,176 700,176"
            fill="none"
            stroke="#1D3E53"
            strokeWidth="1.5"
          />
          <path
            d="M 608,210 Q 654,176 700,176"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeDasharray="6, 20"
            className="animate-[dash_4s_linear_infinite]"
          />

          {/* Focus Node to Node 4 Connection */}
          <path
            d="M 608,290 Q 654,326 700,326"
            fill="none"
            stroke="#1D3E53"
            strokeWidth="1.5"
          />
          <path
            d="M 608,290 Q 654,326 700,326"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeDasharray="6, 20"
            className="animate-[dash_4s_linear_infinite]"
          />
        </svg>

        {/* 4. Desktop Absolute Layout - Percentages mapped to aspect ratio */}
        <div className="hidden md:block absolute inset-0">
          
          {/* LEFT COLUMN: Input Triggers */}
          <div className="absolute left-[4.16%] top-[140px] w-[22.91%] h-[72px] bg-[#0B1E29] border border-[#1D3E53] rounded-xl p-4 flex items-center gap-3 hover:border-primary/40 transition-colors duration-250 cursor-pointer shadow-lg shadow-black/30">
            <div className="p-2.5 rounded-lg bg-[#114C5A]/50 text-primary shrink-0">
              <EnvelopeIcon />
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-0.5">Email Trigger</h4>
              <span className="font-sans text-[9px] text-muted-foreground uppercase font-black tracking-wide block">IMAP Inbox Connected</span>
            </div>
          </div>

          <div className="absolute left-[4.16%] top-[290px] w-[22.91%] h-[72px] bg-[#0B1E29] border border-[#1D3E53] rounded-xl p-4 flex items-center gap-3 hover:border-primary/40 transition-colors duration-250 cursor-pointer shadow-lg shadow-black/30">
            <div className="p-2.5 rounded-lg bg-[#114C5A]/50 text-primary shrink-0">
              <ChatIcon />
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-0.5">AI Agent Chat</h4>
              <span className="font-sans text-[9px] text-muted-foreground uppercase font-black tracking-wide block">User: Trigger Report</span>
            </div>
          </div>

          {/* CENTER COLUMN: Focus Hero Node */}
          <div className="absolute left-[36.66%] top-[160px] w-[26.66%] h-[160px] bg-[#0B1E29] border-2 border-primary rounded-2xl p-5 flex flex-col justify-between shadow-xl shadow-primary/10 scale-[1.02] transition-all duration-300">
            <div className="absolute top-2.5 right-3.5 font-mono text-[9px] text-primary/70 tracking-widest font-black">
              MODULE_05
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                <GearIcon />
              </div>
              <div>
                <h4 className="font-mono text-sm font-black text-white uppercase tracking-wider">Edit Fields</h4>
                <span className="font-sans text-[9px] text-muted-foreground uppercase font-black tracking-wider block">Manual Logic Rule</span>
              </div>
            </div>

            <div className="border-t border-[#163041] pt-3.5 flex flex-col gap-1.5 font-mono text-[10px]">
              <div className="flex items-center justify-between text-muted">
                <span>source:</span>
                <span className="text-white font-medium">imap.body_text</span>
              </div>
              <div className="flex items-center justify-between text-muted">
                <span>transform:</span>
                <span className="text-primary font-bold">llm_summarize()</span>
              </div>
              <div className="flex items-center justify-between text-muted">
                <span>auth:</span>
                <span className="text-[#27C93F] font-bold">verified</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Output Actions */}
          <div className="absolute left-[72.91%] top-[140px] w-[22.91%] h-[72px] bg-[#0B1E29] border border-[#1D3E53] rounded-xl p-4 flex items-center gap-3 hover:border-primary/40 transition-colors duration-250 cursor-pointer shadow-lg shadow-black/30">
            <div className="p-2.5 rounded-lg bg-[#114C5A]/50 text-accent shrink-0">
              <PaperPlaneIcon />
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-0.5">Telegram Alert</h4>
              <span className="font-sans text-[9px] text-muted-foreground uppercase font-black tracking-wide block">sendAndWait Message</span>
            </div>
          </div>

          <div className="absolute left-[72.91%] top-[290px] w-[22.91%] h-[72px] bg-[#0B1E29] border border-[#1D3E53] rounded-xl p-4 flex items-center gap-3 hover:border-primary/40 transition-colors duration-250 cursor-pointer shadow-lg shadow-black/30">
            <div className="p-2.5 rounded-lg bg-[#114C5A]/50 text-accent shrink-0">
              <EnvelopeIcon />
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-0.5">Send Email</h4>
              <span className="font-sans text-[9px] text-muted-foreground uppercase font-black tracking-wide block">reports@partners.com</span>
            </div>
          </div>

        </div>

        {/* 5. Mobile Flex Stack Layout */}
        <div className="md:hidden flex flex-col gap-6 w-full py-4 relative z-10">
          {/* Input Group */}
          <div className="space-y-4">
            <div className="font-mono text-[9px] text-primary tracking-widest uppercase">Inputs</div>
            
            <div className="bg-[#0B1E29] border border-[#1D3E53] rounded-xl p-4 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#114C5A]/50 text-primary">
                <EnvelopeIcon />
              </div>
              <div>
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Email Trigger</h4>
                <span className="font-sans text-[9px] text-muted-foreground uppercase block font-semibold">IMAP Inbox Connected</span>
              </div>
            </div>

            <div className="bg-[#0B1E29] border border-[#1D3E53] rounded-xl p-4 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#114C5A]/50 text-primary">
                <ChatIcon />
              </div>
              <div>
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">AI Agent Chat</h4>
                <span className="font-sans text-[9px] text-muted-foreground uppercase block font-semibold">User: Trigger Report</span>
              </div>
            </div>
          </div>

          {/* Focus Core logic Node */}
          <div className="space-y-4">
            <div className="font-mono text-[9px] text-primary tracking-widest uppercase">Logic Execution</div>
            
            <div className="bg-[#0B1E29] border-2 border-primary rounded-2xl p-5 relative shadow-xl shadow-primary/5">
              <div className="absolute top-2.5 right-3.5 font-mono text-[9px] text-primary/70 font-black">
                MODULE_05
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <GearIcon />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-black text-white uppercase tracking-wider">Edit Fields</h4>
                  <span className="font-sans text-[9px] text-muted-foreground uppercase block font-semibold">Manual Logic Rule</span>
                </div>
              </div>

              <div className="border-t border-[#163041] pt-3.5 flex flex-col gap-1.5 font-mono text-[10px]">
                <div className="flex items-center justify-between text-muted">
                  <span>source:</span>
                  <span className="text-white">imap.body_text</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>transform:</span>
                  <span className="text-primary font-bold">llm_summarize()</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>auth:</span>
                  <span className="text-[#27C93F] font-bold">verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Output Group */}
          <div className="space-y-4">
            <div className="font-mono text-[9px] text-primary tracking-widest uppercase">Outputs</div>
            
            <div className="bg-[#0B1E29] border border-[#1D3E53] rounded-xl p-4 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#114C5A]/50 text-accent">
                <PaperPlaneIcon />
              </div>
              <div>
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Telegram Alert</h4>
                <span className="font-sans text-[9px] text-muted-foreground uppercase block font-semibold">sendAndWait Message</span>
              </div>
            </div>

            <div className="bg-[#0B1E29] border border-[#1D3E53] rounded-xl p-4 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#114C5A]/50 text-accent">
                <EnvelopeIcon />
              </div>
              <div>
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Send Email</h4>
                <span className="font-sans text-[9px] text-muted-foreground uppercase block font-semibold">reports@partners.com</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -40;
          }
        }
      `}</style>
    </div>
  );
}
