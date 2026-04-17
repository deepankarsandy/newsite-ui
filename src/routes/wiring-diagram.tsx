import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/wiring-diagram")({
  component: WiringDiagram,
});

function WiringDiagram() {
  const [hoveredComponent, setHoveredComponent] = useState<
    "meter" | "mainMcb" | "spd" | "relay" | "rccb" | "roomMcb" | "earthBar" | "earthPit" | null
  >(null);

  const componentDetails = {
    meter: { title: "Utility Meter", desc: "Incoming power from the grid." },
    mainMcb: {
      title: "Main 2-Pole MCB",
      desc: "Your primary isolator. Handles short circuits and overload for the whole board.",
    },
    spd: {
      title: "Type 2 SPD",
      desc: "Wired in parallel. Catches voltage spikes and dumps them to earth. The wires connecting this to Phase/Neutral and Earth MUST be as short as possible (< 50cm total).",
    },
    relay: {
      title: "Voltage Protection Relay",
      desc: "Wired in series. Monitors for sustained high or low voltages (swells/sags) and disconnects power to protect appliances.",
    },
    rccb: {
      title: "RCCB / ELCB",
      desc: "Life safety device. Detects earth leakage (shocks) and trips immediately.",
    },
    roomMcb: {
      title: "Room MCBs",
      desc: "Individual branch protection for specific rooms or heavy appliances.",
    },
    earthBar: {
      title: "Main Earth Busbar",
      desc: "The central gathering point for all earth wires in your DB.",
    },
    earthPit: {
      title: "Far Earth Pit (40ft)",
      desc: "Your deep earth connection. Because it's 40ft away, use a thick wire (10-16mm²) to reduce high-frequency impedance.",
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 font-sans text-slate-800 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-slate-900">
            Electrical Distribution Board Layout
          </h1>
          <p className="text-slate-600">
            Hover over any component to see its purpose. Notice how the SPD is wired in parallel
            immediately after the Main MCB, ensuring the shortest possible lead to the local Earth
            Busbar before the long 40ft run to the pit.
          </p>
        </div>

        {/* Legend */}
        <div className="mb-4 flex flex-wrap gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="h-1 w-6 bg-red-500"></div>
            <span className="text-sm font-medium">Phase (L)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-6 bg-slate-800"></div>
            <span className="text-sm font-medium">Neutral (N)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-6 bg-green-500"></div>
            <span className="text-sm font-medium">Earth (E)</span>
          </div>
        </div>

        {/* Diagram Area */}
        <div className="relative overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-lg">
          <div className="min-w-[1000px] p-8">
            <svg viewBox="0 0 1000 600" className="h-auto w-full">
              <defs>
                {/* Arrowhead for dimensions */}
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="5"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
                </marker>

                {/* Wavy line for earth pit distance */}
                <pattern
                  id="zigzag"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 0 10 L 5 0 L 15 20 L 20 10"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="3"
                  />
                </pattern>
              </defs>
              {/* WIRING PATHS (Background Layer) */}
              {/* Phase (Red) paths */}
              <path d="M 150 130 L 220 130" fill="none" stroke="#ef4444" strokeWidth="4" />{" "}
              {/* Meter to MCB */}
              <path d="M 320 130 L 450 130" fill="none" stroke="#ef4444" strokeWidth="4" />{" "}
              {/* MCB to Relay */}
              <path d="M 550 130 L 650 130" fill="none" stroke="#ef4444" strokeWidth="4" />{" "}
              {/* Relay to RCCB */}
              <path
                d="M 750 130 L 820 130 L 820 70 L 850 70"
                fill="none"
                stroke="#ef4444"
                strokeWidth="4"
              />{" "}
              {/* RCCB to MCB1 */}
              <path d="M 820 130 L 850 130" fill="none" stroke="#ef4444" strokeWidth="4" />{" "}
              {/* RCCB to MCB2 */}
              <path
                d="M 820 130 L 820 190 L 850 190"
                fill="none"
                stroke="#ef4444"
                strokeWidth="4"
              />{" "}
              {/* RCCB to MCB3 */}
              {/* Phase tap to SPD */}
              <circle cx="350" cy="130" r="4" fill="#ef4444" />
              <path
                d="M 350 130 L 350 320 L 330 320"
                fill="none"
                stroke="#ef4444"
                strokeWidth="4"
              />
              {/* Neutral (Black) paths */}
              <path d="M 150 170 L 220 170" fill="none" stroke="#1e293b" strokeWidth="4" />{" "}
              {/* Meter to MCB */}
              <path d="M 320 170 L 450 170" fill="none" stroke="#1e293b" strokeWidth="4" />{" "}
              {/* MCB to Relay */}
              <path d="M 550 170 L 650 170" fill="none" stroke="#1e293b" strokeWidth="4" />{" "}
              {/* Relay to RCCB */}
              <path
                d="M 750 170 L 820 170 L 820 280 L 850 280"
                fill="none"
                stroke="#1e293b"
                strokeWidth="4"
              />{" "}
              {/* RCCB to N-Bar */}
              {/* Neutral tap to SPD */}
              <circle cx="380" cy="170" r="4" fill="#1e293b" />
              <path
                d="M 380 170 L 380 360 L 330 360"
                fill="none"
                stroke="#1e293b"
                strokeWidth="4"
              />
              {/* Earth (Green) paths */}
              <path d="M 280 400 L 280 470" fill="none" stroke="#22c55e" strokeWidth="5" />{" "}
              {/* SPD to Earth Bar */}
              <path
                d="M 330 480 L 330 540 L 500 540"
                fill="none"
                stroke="#22c55e"
                strokeWidth="5"
              />{" "}
              {/* Earth Bar towards Pit */}
              <rect x="500" y="530" width="100" height="20" fill="url(#zigzag)" />{" "}
              {/* Break in line indicating distance */}
              <path
                d="M 600 540 L 800 540 L 800 500"
                fill="none"
                stroke="#22c55e"
                strokeWidth="5"
              />{" "}
              {/* Towards Pit */}
              {/* Earth from Rooms */}
              <path
                d="M 850 240 L 800 240 L 800 480 L 330 480"
                fill="none"
                stroke="#22c55e"
                strokeWidth="3"
                strokeDasharray="5,5"
              />
              <text x="750" y="235" className="fill-slate-500 text-xs font-semibold">
                Earth from rooms
              </text>
              {/* COMPONENTS (Foreground Layer) */}
              {/* 1. Meter */}
              <g
                onMouseEnter={() => setHoveredComponent("meter")}
                onMouseLeave={() => setHoveredComponent(null)}
                className="cursor-pointer transition-transform hover:-translate-y-1"
              >
                <rect
                  x="50"
                  y="100"
                  width="100"
                  height="100"
                  rx="8"
                  fill="#f8fafc"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                />
                <rect x="65" y="115" width="70" height="30" fill="#e2e8f0" />
                <text x="100" y="135" textAnchor="middle" className="font-mono text-xs">
                  0142 kWh
                </text>
                <text
                  x="100"
                  y="175"
                  textAnchor="middle"
                  className="fill-slate-700 text-sm font-bold"
                >
                  METER
                </text>
                <circle cx="100" cy="190" r="5" fill="#ef4444" /> {/* Indicator light */}
              </g>
              {/* 2. Main MCB */}
              <g
                onMouseEnter={() => setHoveredComponent("mainMcb")}
                onMouseLeave={() => setHoveredComponent(null)}
                className="cursor-pointer transition-transform hover:-translate-y-1"
              >
                <rect
                  x="220"
                  y="100"
                  width="100"
                  height="100"
                  rx="8"
                  fill="#ffffff"
                  stroke="#94a3b8"
                  strokeWidth="3"
                />
                <rect
                  x="245"
                  y="130"
                  width="50"
                  height="40"
                  rx="4"
                  fill="#f1f5f9"
                  stroke="#cbd5e1"
                  strokeWidth="1"
                />
                <line x1="245" y1="150" x2="295" y2="150" stroke="#cbd5e1" strokeWidth="2" />{" "}
                {/* switch toggle */}
                <text
                  x="270"
                  y="120"
                  textAnchor="middle"
                  className="fill-slate-700 text-xs font-bold"
                >
                  MAIN MCB
                </text>
                <text x="270" y="185" textAnchor="middle" className="fill-slate-500 text-[10px]">
                  63A 2-Pole
                </text>
              </g>
              {/* 3. Type 2 SPD */}
              <g
                onMouseEnter={() => setHoveredComponent("spd")}
                onMouseLeave={() => setHoveredComponent(null)}
                className="cursor-pointer transition-transform hover:-translate-y-1"
              >
                <rect
                  x="230"
                  y="300"
                  width="100"
                  height="100"
                  rx="8"
                  fill="#fff1f2"
                  stroke="#fda4af"
                  strokeWidth="3"
                />
                <rect x="245" y="325" width="30" height="40" rx="2" fill="#22c55e" />{" "}
                {/* Cartridge 1 - Green means good */}
                <rect x="285" y="325" width="30" height="40" rx="2" fill="#22c55e" />{" "}
                {/* Cartridge 2 */}
                <text
                  x="280"
                  y="318"
                  textAnchor="middle"
                  className="fill-red-700 text-sm font-bold"
                >
                  Type 2 SPD
                </text>
                <text
                  x="280"
                  y="385"
                  textAnchor="middle"
                  className="fill-red-600 text-[10px] font-semibold"
                >
                  Surge Protector
                </text>
                {/* SPD Terminals indicator */}
                <circle cx="330" cy="320" r="3" fill="#ef4444" /> {/* L in */}
                <circle cx="330" cy="360" r="3" fill="#1e293b" /> {/* N in */}
                <circle cx="280" cy="400" r="3" fill="#22c55e" /> {/* E out */}
              </g>
              {/* 4. Voltage Relay */}
              <g
                onMouseEnter={() => setHoveredComponent("relay")}
                onMouseLeave={() => setHoveredComponent(null)}
                className="cursor-pointer transition-transform hover:-translate-y-1"
              >
                <rect
                  x="450"
                  y="100"
                  width="100"
                  height="100"
                  rx="8"
                  fill="#f0fdf4"
                  stroke="#86efac"
                  strokeWidth="3"
                />
                <rect x="465" y="125" width="70" height="25" fill="#022c22" rx="2" />{" "}
                {/* Digital Display */}
                <text
                  x="500"
                  y="142"
                  textAnchor="middle"
                  className="fill-green-400 font-mono text-xs"
                >
                  232 V
                </text>
                <text
                  x="500"
                  y="118"
                  textAnchor="middle"
                  className="fill-green-800 text-xs font-bold"
                >
                  V-RELAY
                </text>
                <text x="500" y="185" textAnchor="middle" className="fill-green-700 text-[10px]">
                  Over/Under Volt
                </text>
              </g>
              {/* 5. RCCB */}
              <g
                onMouseEnter={() => setHoveredComponent("rccb")}
                onMouseLeave={() => setHoveredComponent(null)}
                className="cursor-pointer transition-transform hover:-translate-y-1"
              >
                <rect
                  x="650"
                  y="100"
                  width="100"
                  height="100"
                  rx="8"
                  fill="#ffffff"
                  stroke="#94a3b8"
                  strokeWidth="3"
                />
                <circle cx="720" cy="130" r="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />{" "}
                {/* Test Button */}
                <text x="720" y="133" textAnchor="middle" className="text-[8px] font-bold">
                  T
                </text>
                <rect
                  x="665"
                  y="130"
                  width="30"
                  height="40"
                  rx="4"
                  fill="#f1f5f9"
                  stroke="#cbd5e1"
                  strokeWidth="1"
                />
                <text
                  x="700"
                  y="120"
                  textAnchor="middle"
                  className="fill-slate-700 text-xs font-bold"
                >
                  RCCB
                </text>
                <text x="700" y="185" textAnchor="middle" className="fill-slate-500 text-[10px]">
                  30mA Leakage
                </text>
              </g>
              {/* 6. Room MCBs */}
              <g
                onMouseEnter={() => setHoveredComponent("roomMcb")}
                onMouseLeave={() => setHoveredComponent(null)}
                className="cursor-pointer transition-transform hover:-translate-y-1"
              >
                {/* MCB 1 */}
                <rect
                  x="850"
                  y="50"
                  width="80"
                  height="40"
                  rx="4"
                  fill="#ffffff"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                />
                <text x="890" y="75" textAnchor="middle" className="text-xs font-bold">
                  Room 1
                </text>
                {/* MCB 2 */}
                <rect
                  x="850"
                  y="110"
                  width="80"
                  height="40"
                  rx="4"
                  fill="#ffffff"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                />
                <text x="890" y="135" textAnchor="middle" className="text-xs font-bold">
                  Room 2
                </text>
                {/* MCB 3 */}
                <rect
                  x="850"
                  y="170"
                  width="80"
                  height="40"
                  rx="4"
                  fill="#ffffff"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                />
                <text x="890" y="195" textAnchor="middle" className="text-xs font-bold">
                  Kitchen
                </text>
              </g>
              {/* 7. Neutral & Earth Bars */}
              <g
                onMouseEnter={() => setHoveredComponent("earthBar")}
                onMouseLeave={() => setHoveredComponent(null)}
              >
                {/* N-Bar */}
                <rect
                  x="850"
                  y="270"
                  width="80"
                  height="20"
                  rx="2"
                  fill="#e2e8f0"
                  stroke="#94a3b8"
                />
                <circle cx="865" cy="280" r="3" fill="#1e293b" />
                <circle cx="890" cy="280" r="3" fill="#1e293b" />
                <circle cx="915" cy="280" r="3" fill="#1e293b" />
                <text
                  x="890"
                  y="305"
                  textAnchor="middle"
                  className="fill-slate-600 text-xs font-semibold"
                >
                  Neutral Bar
                </text>

                {/* E-Bar (Main DB) */}
                <rect
                  x="230"
                  y="470"
                  width="100"
                  height="20"
                  rx="2"
                  fill="#dcfce7"
                  stroke="#4ade80"
                  strokeWidth="2"
                  className="cursor-pointer transition-transform hover:scale-105"
                />
                <circle cx="250" cy="480" r="3" fill="#166534" />
                <circle cx="280" cy="480" r="3" fill="#166534" />
                <circle cx="310" cy="480" r="3" fill="#166534" />
                <text
                  x="280"
                  y="505"
                  textAnchor="middle"
                  className="fill-green-800 text-xs font-bold"
                >
                  DB Earth Busbar
                </text>
              </g>
              {/* 8. Earth Pit */}
              <g
                onMouseEnter={() => setHoveredComponent("earthPit")}
                onMouseLeave={() => setHoveredComponent(null)}
                className="cursor-pointer transition-transform hover:-translate-y-1"
              >
                <path
                  d="M 770 500 L 830 500 L 820 580 L 780 580 Z"
                  fill="#854d0e"
                  stroke="#713f12"
                  strokeWidth="2"
                />{" "}
                {/* Ground representation */}
                <line x1="800" y1="500" x2="800" y2="560" stroke="#a16207" strokeWidth="6" />{" "}
                {/* Electrode rod */}
                <text
                  x="800"
                  y="490"
                  textAnchor="middle"
                  className="fill-amber-900 text-sm font-bold"
                >
                  Earth Pit
                </text>
                <text
                  x="800"
                  y="600"
                  textAnchor="middle"
                  className="fill-amber-800 text-xs font-semibold"
                >
                  40ft Away
                </text>
              </g>
              {/* --- ANNOTATIONS --- */}
              {/* SPD Lead Length Warning */}
              <g>
                <path
                  d="M 180 340 Q 150 400 240 430"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  markerEnd="url(#arrow)"
                />
                <rect
                  x="30"
                  y="290"
                  width="160"
                  height="45"
                  rx="4"
                  fill="#fef2f2"
                  stroke="#fca5a5"
                />
                <text
                  x="110"
                  y="308"
                  textAnchor="middle"
                  className="fill-red-700 text-[10px] font-bold"
                >
                  CRITICAL RULE:
                </text>
                <text x="110" y="322" textAnchor="middle" className="fill-red-800 text-[10px]">
                  Total length of these 3
                </text>
                <text x="110" y="332" textAnchor="middle" className="fill-red-800 text-[10px]">
                  wires MUST be &lt; 50cm
                </text>
              </g>
              {/* Distance Warning */}
              <g>
                <path
                  d="M 550 480 Q 550 510 580 530"
                  fill="none"
                  stroke="#eab308"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  markerEnd="url(#arrow)"
                />
                <rect
                  x="420"
                  y="440"
                  width="180"
                  height="45"
                  rx="4"
                  fill="#fefce8"
                  stroke="#fde047"
                />
                <text
                  x="510"
                  y="458"
                  textAnchor="middle"
                  className="fill-yellow-800 text-[10px] font-bold"
                >
                  40ft DISTANCE SOLUTION:
                </text>
                <text x="510" y="472" textAnchor="middle" className="fill-yellow-900 text-[10px]">
                  Use thick 10mm² to 16mm²
                </text>
                <text x="510" y="482" textAnchor="middle" className="fill-yellow-900 text-[10px]">
                  copper wire for this long run.
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* Info Panel */}
        <div className="mt-6 min-h-[100px] rounded-xl bg-slate-800 p-6 text-white shadow-xl transition-all duration-300">
          {hoveredComponent ? (
            <div>
              <h3 className="mb-2 text-xl font-bold text-sky-400">
                {componentDetails[hoveredComponent].title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                {componentDetails[hoveredComponent].desc}
              </p>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-center text-slate-400 opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2 h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              <p>
                Hover or tap on any component in the diagram above to view its technical details and
                installation tips.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
