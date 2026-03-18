"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Users, Zap, CheckCircle, Layout, GitBranch, Calendar, Bot, Brain, Search, Code, Database, HelpCircle, Globe, Layers, MousePointer } from "lucide-react";

const ACCENT = "#4F6EF7";
const ACCENT2 = "#22d3ee";
const BG = "#0B0F1A";
const BG2 = "#111827";
const CARD = "#1A2035";
const MUTED = "#94a3b8";
const WHITE = "#f8fafc";

// ─── Slide Components ─────────────────────────────────────────

const TitleSlide = () => (
  <div className="h-full flex flex-col justify-center items-center text-center p-16" style={{ background: `linear-gradient(150deg, ${BG} 0%, #131B2E 40%, #1a1f3a 70%, ${BG} 100%)` }}>
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: ACCENT }}>
        <Bot size={28} color="white" />
      </div>
      <span className="text-3xl font-bold text-white tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>AI Task Hub</span>
    </div>
    <div className="w-20 h-0.5 rounded-full mb-8" style={{ backgroundColor: ACCENT }} />
    <h1 className="text-5xl font-bold text-white mb-5 tracking-tight leading-tight max-w-3xl">Human × AI Collaboration Canvas</h1>
    <p className="text-lg font-light max-w-2xl leading-relaxed" style={{ color: MUTED }}>A canvas-based workspace where humans and AI agents collaborate, branch ideas, and manage tasks together.</p>
    <div className="mt-10 flex items-center gap-2 text-sm" style={{ color: MUTED }}>
      <span>Alp — DIG 245 Radical Software — Final Project Proposal</span>
    </div>
  </div>
);

const IntroSlide = () => (
  <div className="h-full flex flex-col justify-center p-16" style={{ backgroundColor: BG }}>
    <h2 className="text-3xl font-bold text-white mb-2">The Concept</h2>
    <div className="w-16 h-0.5 rounded-full mb-8" style={{ backgroundColor: ACCENT }} />
    <div className="rounded-2xl p-8" style={{ backgroundColor: CARD, borderLeft: `4px solid ${ACCENT}` }}>
      <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1" }}>
        AI Task Hub is a canvas-based collaboration tool where humans and AI agents coexist as equals in a shared workspace. Users can create branching note canvases to explore ideas, assign tasks to registered AI agents, and manage their work through a day-by-day week view. The core experience centers on an infinite canvas where users branch out into different topics — placing their thoughts, research, and prompts — while AI agents autonomously perform research or execute agentic tasks within each branch. The result is a spatial, visual way to orchestrate human-AI workflows that goes beyond linear chat interfaces.
      </p>
    </div>
    <div className="flex gap-6 mt-8">
      {[
        { icon: <Layout size={20} />, label: "Canvas Workspace" },
        { icon: <Bot size={20} />, label: "Agent Registry" },
        { icon: <Calendar size={20} />, label: "Week View Tasks" },
        { icon: <GitBranch size={20} />, label: "Branching Ideas" },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium" style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}>
          {item.icon}
          {item.label}
        </div>
      ))}
    </div>
  </div>
);

const AudienceSlide = () => (
  <div className="h-full flex flex-col p-16" style={{ backgroundColor: BG }}>
    <h2 className="text-3xl font-bold text-white mb-2">Audience & User Story</h2>
    <div className="w-16 h-0.5 rounded-full mb-8" style={{ backgroundColor: ACCENT }} />
    <div className="grid grid-cols-2 gap-8 flex-1">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Who is this for?</h3>
        <div className="space-y-4">
          {[
            { title: "Students & Researchers", desc: "People managing multi-topic projects who want AI to help with parallel research threads." },
            { title: "Solo Developers", desc: "Builders who use multiple AI tools and want one place to orchestrate agent work alongside their own notes." },
            { title: "Knowledge Workers", desc: "Anyone who thinks spatially and wants to organize tasks, notes, and AI outputs in a visual canvas." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: ACCENT }} />
              <div>
                <p className="text-white font-medium">{item.title}</p>
                <p className="text-sm" style={{ color: MUTED }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl p-8 flex flex-col justify-center" style={{ backgroundColor: CARD }}>
        <div className="flex items-center gap-2 mb-4">
          <Users size={20} color={ACCENT} />
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: ACCENT }}>User Story</span>
        </div>
        <p className="text-white leading-relaxed italic" style={{ fontSize: "1.05rem" }}>
          "As a student working on a multi-part research project, I want to create a canvas where I can branch out into sub-topics, assign AI agents to gather sources and summarize findings for each branch, and view my week's tasks in a calendar — so that I can manage the complexity of my project without losing track of any thread."
        </p>
      </div>
    </div>
  </div>
);

const IdentitySlide = () => (
  <div className="h-full flex flex-col p-16" style={{ backgroundColor: BG }}>
    <h2 className="text-3xl font-bold text-white mb-2">Identity & Style Guide</h2>
    <div className="w-16 h-0.5 rounded-full mb-8" style={{ backgroundColor: ACCENT }} />
    <div className="grid grid-cols-3 gap-8 flex-1">
      <div className="col-span-1 flex flex-col items-center justify-center rounded-2xl p-8" style={{ backgroundColor: CARD }}>
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: ACCENT }}>
          <Bot size={44} color="white" />
        </div>
        <span className="text-2xl font-bold text-white tracking-tight mb-1" style={{ fontFamily: "'Georgia', serif" }}>AI Task Hub</span>
        <span className="text-xs" style={{ color: MUTED }}>Human × AI Collaboration</span>
      </div>
      <div className="col-span-2 space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider mb-3 block" style={{ color: MUTED }}>Color Palette</span>
          <div className="flex gap-3">
            {[
              { color: "#4F6EF7", label: "Primary Blue" },
              { color: "#22d3ee", label: "Cyan Accent" },
              { color: "#0B0F1A", label: "Background" },
              { color: "#1A2035", label: "Card Surface" },
              { color: "#f8fafc", label: "Text White" },
              { color: "#94a3b8", label: "Muted Text" },
            ].map((c, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-lg border border-white/10" style={{ backgroundColor: c.color }} />
                <span className="text-xs" style={{ color: MUTED }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider mb-3 block" style={{ color: MUTED }}>Typography</span>
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>Georgia Serif</span>
              <span className="text-sm" style={{ color: MUTED }}>— Headings & Brand</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-lg text-white">System Sans-Serif</span>
              <span className="text-sm" style={{ color: MUTED }}>— Body, UI, Labels</span>
            </div>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider mb-3 block" style={{ color: MUTED }}>Design Principles</span>
          <div className="flex gap-3">
            {["Clean & Spatial", "Node-based UI", "Blue tones + Dark mode", "Minimal chrome"].map((p, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg text-sm font-medium" style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CompetitionSlide = () => (
  <div className="h-full flex flex-col p-16" style={{ backgroundColor: BG }}>
    <h2 className="text-3xl font-bold text-white mb-2">Competition Scan</h2>
    <div className="w-16 h-0.5 rounded-full mb-8" style={{ backgroundColor: ACCENT }} />
    <div className="grid grid-cols-3 gap-6 flex-1">
      {[
        {
          name: "Miro + AI",
          url: "miro.com",
          what: "Infinite whiteboard with AI sidekick for brainstorming and diagramming.",
          diff: "No agent registry, no task assignment to AI, no branching agent workflows.",
          color: "#FFD02F",
        },
        {
          name: "Notion AI",
          url: "notion.so",
          what: "Document-based workspace with inline AI writing and Q&A features.",
          diff: "Linear document model — no spatial canvas, no multi-agent orchestration.",
          color: "#E5E5E5",
        },
        {
          name: "tldraw / make-real",
          url: "tldraw.com",
          what: "Canvas-based drawing tool with AI-powered shape-to-code generation.",
          diff: "Focuses on drawing/prototyping, not on ongoing task management or agent delegation.",
          color: "#1DA1F2",
        },
      ].map((comp, i) => (
        <div key={i} className="rounded-2xl p-6 flex flex-col" style={{ backgroundColor: CARD }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm" style={{ backgroundColor: comp.color + "20", color: comp.color }}>
              {comp.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-white font-semibold">{comp.name}</h3>
              <span className="text-xs" style={{ color: MUTED }}>{comp.url}</span>
            </div>
          </div>
          <p className="text-sm mb-4 flex-1" style={{ color: "#cbd5e1" }}>{comp.what}</p>
          <div className="rounded-lg p-3" style={{ backgroundColor: `${BG}` }}>
            <span className="text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: ACCENT }}>Our Differentiator</span>
            <p className="text-xs" style={{ color: MUTED }}>{comp.diff}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const FlowchartUserSlide = () => (
  <div className="h-full flex flex-col p-16" style={{ backgroundColor: BG }}>
    <h2 className="text-3xl font-bold text-white mb-1">User Flow</h2>
    <p className="text-sm mb-8" style={{ color: MUTED }}>What the user sees at each step</p>
    <div className="flex-1 flex items-center justify-center">
      <div className="flex items-center gap-3">
        {[
          { label: "Landing Page", sub: "Login / Sign Up", icon: <Globe size={18} /> },
          { label: "Week View", sub: "See daily tasks", icon: <Calendar size={18} /> },
          { label: "Canvas", sub: "Create notes & branches", icon: <Layout size={18} /> },
          { label: "Assign Agent", sub: "Pick agent, set prompt", icon: <Bot size={18} /> },
          { label: "Agent Works", sub: "Research / execute", icon: <Zap size={18} /> },
          { label: "Review Output", sub: "View results in branch", icon: <CheckCircle size={18} /> },
        ].map((step, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex flex-col items-center text-center" style={{ width: 120 }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}>
                {step.icon}
              </div>
              <span className="text-white font-semibold text-sm mb-1">{step.label}</span>
              <span className="text-xs" style={{ color: MUTED }}>{step.sub}</span>
            </div>
            {i < 5 && <ArrowRight size={16} color={MUTED} className="flex-shrink-0" />}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FlowchartDataSlide = () => (
  <div className="h-full flex flex-col p-16" style={{ backgroundColor: BG }}>
    <h2 className="text-3xl font-bold text-white mb-1">Data Flow</h2>
    <p className="text-sm mb-8" style={{ color: MUTED }}>How data moves through the application</p>
    <div className="flex-1 flex items-center justify-center">
      <div className="flex flex-col gap-6 items-center" style={{ width: "100%", maxWidth: 800 }}>
        {/* Top row */}
        <div className="flex justify-center gap-8">
          <Box label="User Input" sub="Notes, prompts, tasks" color={ACCENT} />
          <Box label="Agent Registry" sub="Stored agent configs" color={ACCENT2} />
        </div>
        {/* Arrow down */}
        <svg width="20" height="30" viewBox="0 0 20 30"><path d="M10 0 L10 22 M4 16 L10 24 L16 16" stroke={MUTED} strokeWidth="1.5" fill="none" /></svg>
        {/* Middle */}
        <Box label="Application State (React)" sub="Canvas nodes, connections, tasks, agents" color="#f97316" large />
        {/* Arrow down */}
        <svg width="20" height="30" viewBox="0 0 20 30"><path d="M10 0 L10 22 M4 16 L10 24 L16 16" stroke={MUTED} strokeWidth="1.5" fill="none" /></svg>
        {/* Bottom row */}
        <div className="flex justify-center gap-8">
          <Box label="localStorage / DB" sub="Persist canvas state" color="#a855f7" />
          <Box label="LLM API" sub="Agent task execution" color="#22c55e" />
          <Box label="Rendered Canvas" sub="Visual output to user" color="#f43f5e" />
        </div>
      </div>
    </div>
  </div>
);

const Box = ({ label, sub, color, large }) => (
  <div className="rounded-xl px-5 py-3 text-center" style={{ backgroundColor: CARD, border: `1px solid ${color}40`, minWidth: large ? 320 : 160 }}>
    <div className="text-sm font-semibold" style={{ color }}>{label}</div>
    <div className="text-xs mt-0.5" style={{ color: MUTED }}>{sub}</div>
  </div>
);

const WireframesSlide = () => (
  <div className="h-full flex flex-col p-16" style={{ backgroundColor: BG }}>
    <h2 className="text-3xl font-bold text-white mb-2">Wireframes</h2>
    <div className="w-16 h-0.5 rounded-full mb-6" style={{ backgroundColor: ACCENT }} />
    <div className="grid grid-cols-3 gap-6 flex-1">
      {/* Week View */}
      <div className="rounded-xl overflow-hidden border" style={{ borderColor: "#ffffff10" }}>
        <div className="px-4 py-2 text-xs font-semibold" style={{ backgroundColor: CARD, color: MUTED }}>Week View</div>
        <div className="p-4" style={{ backgroundColor: "#0D1220" }}>
          <div className="flex gap-2 mb-3">
            <div className="rounded px-2 py-0.5 text-xs" style={{ backgroundColor: ACCENT, color: "white" }}>Week View</div>
            <div className="rounded px-2 py-0.5 text-xs" style={{ backgroundColor: CARD, color: MUTED }}>Canvas</div>
          </div>
          <div className="grid grid-cols-5 gap-1">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => (
              <div key={i} className="rounded p-1.5 text-center" style={{ backgroundColor: CARD }}>
                <div className="text-xs font-bold text-white">{d}</div>
                <div className="text-xs mt-1" style={{ color: MUTED }}>+</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Canvas Empty */}
      <div className="rounded-xl overflow-hidden border" style={{ borderColor: "#ffffff10" }}>
        <div className="px-4 py-2 text-xs font-semibold" style={{ backgroundColor: CARD, color: MUTED }}>Canvas (Empty)</div>
        <div className="p-4 flex flex-col items-center justify-center" style={{ backgroundColor: "#0D1220", minHeight: 140 }}>
          <div className="text-2xl mb-1" style={{ color: "#ffffff20" }}>+</div>
          <div className="text-xs" style={{ color: MUTED }}>Double-click to create a note</div>
          <div className="text-xs" style={{ color: MUTED }}>or drag tasks from Week View</div>
        </div>
      </div>
      {/* Canvas with Notes */}
      <div className="rounded-xl overflow-hidden border" style={{ borderColor: "#ffffff10" }}>
        <div className="px-4 py-2 text-xs font-semibold" style={{ backgroundColor: CARD, color: MUTED }}>Canvas (Active)</div>
        <div className="p-4 relative" style={{ backgroundColor: "#0D1220", minHeight: 140 }}>
          <div className="absolute top-3 left-3 rounded-lg p-2 border text-xs" style={{ backgroundColor: CARD, borderColor: "#ffffff15", width: 80 }}>
            <div className="font-semibold text-white mb-1">Note</div>
            <div style={{ color: MUTED }}>Research...</div>
          </div>
          <svg className="absolute" style={{ top: 32, left: 83 }} width="40" height="30"><path d="M0 15 Q20 0 40 15" stroke={ACCENT} strokeWidth="1" fill="none" /></svg>
          <div className="absolute top-2 right-3 rounded-lg p-2 border text-xs" style={{ backgroundColor: CARD, borderColor: `${ACCENT}40`, width: 80 }}>
            <div className="font-semibold" style={{ color: ACCENT }}>Agent</div>
            <div style={{ color: MUTED }}>Working...</div>
          </div>
          <div className="absolute bottom-3 left-8 rounded px-2 py-1 text-xs" style={{ backgroundColor: ACCENT, color: "white" }}>Submit</div>
        </div>
      </div>
    </div>
    <p className="text-xs mt-4 text-center" style={{ color: MUTED }}>Based on current UI prototypes (see attached screenshots). Full wireframes will be developed in Figma.</p>
  </div>
);

const TechSlide = () => (
  <div className="h-full flex flex-col p-16" style={{ backgroundColor: BG }}>
    <h2 className="text-3xl font-bold text-white mb-2">Technology</h2>
    <div className="w-16 h-0.5 rounded-full mb-6" style={{ backgroundColor: ACCENT }} />
    <div className="grid grid-cols-2 gap-8 flex-1">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider mb-3 block" style={{ color: ACCENT }}>Tech Stack</span>
        <div className="space-y-2 mb-6">
          {[
            { label: "Frontend", value: "React + Tailwind CSS" },
            { label: "Canvas Engine", value: "React Flow or custom canvas (HTML5 Canvas / SVG)" },
            { label: "State Management", value: "React Context / Zustand" },
            { label: "AI Integration", value: "Anthropic Claude API or OpenAI API" },
            { label: "Persistence", value: "localStorage (MVP) → Firebase / Supabase" },
            { label: "Hosting", value: "GitHub Pages or Davidson Domains" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-sm font-semibold" style={{ color: MUTED, minWidth: 130 }}>{item.label}</span>
              <span className="text-sm text-white">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider mb-3 block" style={{ color: ACCENT }}>Pseudocode — Core Logic</span>
        <div className="rounded-xl p-4 text-xs font-mono leading-relaxed overflow-auto" style={{ backgroundColor: CARD, color: "#a5d6ff", maxHeight: 280 }}>
          <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>{`// When user creates a note on canvas
onCanvasDoubleClick(position):
  newNode = createNode(position, type="note")
  canvas.addNode(newNode)

// When user submits a prompt to a node
onNodeSubmit(nodeId, prompt):
  agent = getAssignedAgent(nodeId)
  if agent:
    response = await agent.execute(prompt)
    node.setOutput(response)
    node.setStatus("complete")
  else:
    node.setContent(prompt) // just a note

// When user connects two nodes
onConnect(sourceId, targetId):
  canvas.addEdge(sourceId, targetId)
  // child node inherits context from parent

// Week View sync
onTaskDragToCanvas(task, position):
  node = createNode(position, type="task")
  node.linkToTask(task.id)
  canvas.addNode(node)`}</pre>
        </div>
      </div>
    </div>
  </div>
);

const UnknownsSlide = () => (
  <div className="h-full flex flex-col p-16" style={{ backgroundColor: BG }}>
    <h2 className="text-3xl font-bold text-white mb-2">Unknowns & Open Questions</h2>
    <div className="w-16 h-0.5 rounded-full mb-8" style={{ backgroundColor: ACCENT }} />
    <div className="grid grid-cols-2 gap-6 flex-1">
      {[
        { icon: <Layout size={18} />, q: "Canvas rendering performance", detail: "How to keep the canvas smooth with many nodes? React Flow vs. custom canvas vs. pure SVG — which scales best for this use case?" },
        { icon: <Bot size={18} />, q: "LLM integration in a client-side app", detail: "How best (considering cost, latency, and security) to call an LLM API from a web app? Do I need a backend proxy or can I use client-side calls for the MVP?" },
        { icon: <GitBranch size={18} />, q: "Context passing between branches", detail: "How do I pass context from a parent node to child nodes so the agent has relevant history? What's the right data structure for this?" },
        { icon: <Database size={18} />, q: "Persistence strategy", detail: "localStorage is fine for a prototype, but how do I serialize a full canvas graph with agent outputs? What's the max payload before things break?" },
        { icon: <Zap size={18} />, q: "Agent orchestration scope", detail: "How much 'agentic' behavior can I realistically implement? A single LLM call per node, or multi-step tool-use agents?" },
        { icon: <MousePointer size={18} />, q: "Drag and drop between views", detail: "How to implement dragging tasks from Week View into the Canvas? What libraries or patterns work best with React?" },
      ].map((item, i) => (
        <div key={i} className="rounded-xl p-5 flex gap-4" style={{ backgroundColor: CARD }}>
          <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}>
            {item.icon}
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-1">{item.q}</h4>
            <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DataSlide = () => (
  <div className="h-full flex flex-col p-16" style={{ backgroundColor: BG }}>
    <h2 className="text-3xl font-bold text-white mb-2">Data Sources</h2>
    <div className="w-16 h-0.5 rounded-full mb-8" style={{ backgroundColor: ACCENT }} />
    <div className="grid grid-cols-2 gap-8 flex-1">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Does this project use data?</h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "#cbd5e1" }}>
          Yes — the application generates and stores user-created data (notes, tasks, canvas layouts, agent configurations). It also consumes data from external LLM APIs when agents execute tasks.
        </p>
        <div className="space-y-3">
          {[
            { label: "User-Generated", items: "Canvas nodes, edges, note contents, task assignments, agent configs" },
            { label: "LLM API Responses", items: "Text completions, research summaries, agent outputs from Claude or OpenAI" },
            { label: "Application State", items: "Week view tasks, canvas layout positions, connection graph" },
          ].map((src, i) => (
            <div key={i} className="rounded-lg p-4" style={{ backgroundColor: CARD }}>
              <span className="text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: ACCENT }}>{src.label}</span>
              <p className="text-xs" style={{ color: MUTED }}>{src.items}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Potential Data Sources</h3>
        <div className="space-y-3">
          {[
            { name: "Anthropic Claude API", use: "Primary LLM for agent task execution", url: "anthropic.com" },
            { name: "OpenAI API", use: "Alternative / fallback LLM provider", url: "openai.com" },
            { name: "Web Search APIs", use: "If agents need to perform research tasks", url: "serper.dev / tavily.com" },
            { name: "localStorage / IndexedDB", use: "Client-side persistence for MVP", url: "Browser native" },
            { name: "Supabase / Firebase", use: "Backend persistence if time allows", url: "supabase.com" },
          ].map((src, i) => (
            <div key={i} className="flex items-center gap-4 rounded-lg p-3" style={{ backgroundColor: CARD }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${ACCENT2}15`, color: ACCENT2 }}>
                <Database size={14} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">{src.name}</span>
                  <span className="text-xs" style={{ color: MUTED }}>{src.url}</span>
                </div>
                <p className="text-xs" style={{ color: MUTED }}>{src.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const TimelineSlide = () => (
  <div className="h-full flex flex-col p-16" style={{ backgroundColor: BG }}>
    <h2 className="text-3xl font-bold text-white mb-2">Project Timeline</h2>
    <div className="w-16 h-0.5 rounded-full mb-8" style={{ backgroundColor: ACCENT }} />
    <div className="flex-1 flex items-center">
      <div className="w-full space-y-4">
        {[
          { phase: "Proposal", desc: "Pitch deck, wireframes, identity, flowcharts", week: "Week 1", pct: 100, color: ACCENT },
          { phase: "Prototype", desc: "Canvas with draggable nodes + connections (proof of concept)", week: "Week 2–3", pct: 100, color: ACCENT },
          { phase: "Design", desc: "Figma iterations, moodboard, design system refinement", week: "Week 4", pct: 60, color: ACCENT2 },
          { phase: "Design + Prototype", desc: "Combine coded design with working prototype (95%)", week: "Week 5", pct: 30, color: "#a855f7" },
          { phase: "Final Deliverables", desc: "Polish, about page, screencast, documentation", week: "Week 6", pct: 10, color: "#f43f5e" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-6">
            <div className="text-xs font-semibold text-right" style={{ color: MUTED, minWidth: 70 }}>{item.week}</div>
            <div className="flex-1 rounded-xl p-4" style={{ backgroundColor: CARD }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold text-sm">{item.phase}</span>
                <span className="text-xs" style={{ color: item.color }}>{item.pct}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: `${item.color}20` }}>
                <div className="h-1.5 rounded-full" style={{ width: `${item.pct}%`, backgroundColor: item.color }} />
              </div>
              <p className="text-xs mt-2" style={{ color: MUTED }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ClosingSlide = () => (
  <div className="h-full flex flex-col justify-center items-center text-center p-16" style={{ background: `linear-gradient(150deg, ${BG} 0%, #131B2E 40%, #1a1f3a 70%, ${BG} 100%)` }}>
    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: ACCENT }}>
      <Bot size={36} color="white" />
    </div>
    <h2 className="text-4xl font-bold text-white mb-4">AI Task Hub</h2>
    <p className="text-lg font-light max-w-xl mb-8" style={{ color: MUTED }}>A new way to think, plan, and work — together with AI.</p>
    <div className="w-20 h-0.5 rounded-full mb-8" style={{ backgroundColor: ACCENT }} />
    <p className="text-sm" style={{ color: MUTED }}>Alp — DIG 245 Radical Software — Davidson College</p>
    <p className="text-sm mt-1" style={{ color: MUTED }}>Questions & feedback welcome</p>
  </div>
);


// ─── Main Presentation ────────────────────────────────────────

export default function Presentation() {
  const [slide, setSlide] = useState(0);

  const slides = [
    <TitleSlide />,
    <IntroSlide />,
    <AudienceSlide />,
    <IdentitySlide />,
    <CompetitionSlide />,
    <FlowchartUserSlide />,
    <FlowchartDataSlide />,
    <WireframesSlide />,
    <TechSlide />,
    <UnknownsSlide />,
    <DataSlide />,
    <TimelineSlide />,
    <ClosingSlide />,
  ];

  const total = slides.length;

  const goNext = useCallback(() => setSlide(s => Math.min(s + 1, total - 1)), [total]);
  const goPrev = useCallback(() => setSlide(s => Math.max(s - 1, 0)), []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  const slideNames = ["Title", "Concept", "Audience", "Identity", "Competition", "User Flow", "Data Flow", "Wireframes", "Technology", "Unknowns", "Data", "Timeline", "Closing"];

  return (
    <div className="w-full flex flex-col" style={{ fontFamily: "system-ui, -apple-system, sans-serif", backgroundColor: BG, color: WHITE }}>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(16px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
      
      {/* Slide area */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <div key={slide} className="absolute inset-0" style={{ animation: "fadeSlideIn 0.3s ease-out forwards" }}>
          {slides[slide]}
        </div>
        
        {/* Navigation */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-3" style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}>
          <button onClick={goPrev} disabled={slide === 0} className="text-white/60 hover:text-white disabled:opacity-20 transition-colors p-1">
            <ChevronLeft size={22} />
          </button>
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {Array.from({ length: total }, (_, i) => (
                <button key={i} onClick={() => setSlide(i)} className="transition-all" style={{ width: i === slide ? 20 : 6, height: 6, borderRadius: 3, backgroundColor: i === slide ? ACCENT : "rgba(255,255,255,0.2)" }} />
              ))}
            </div>
            <span className="text-xs ml-2" style={{ color: MUTED }}>{slide + 1}/{total} — {slideNames[slide]}</span>
          </div>
          <button onClick={goNext} disabled={slide === total - 1} className="text-white/60 hover:text-white disabled:opacity-20 transition-colors p-1">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
