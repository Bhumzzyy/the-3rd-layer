'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target,
  Users,
  BarChart3,
  Layers,
  Search,
  Database,
  Cpu,
  Layout,
  Palette,
  Code2,
  Server,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Smartphone,
  Cloud,
  Globe,
  Radio,
  Activity,
  TrendingUp,
  RefreshCw,
  ArrowRight,
  Sparkles,
  Lock,
} from 'lucide-react';

/* ==========================================================================
   CUSTOM TECHNICAL SVG VISUALS (1 per stage - 100% custom vector illustrations)
   ========================================================================== */

// 01 DISCOVER — Layered Isometric Blueprint & System Mapping (Matches Reference Image)
function DiscoverVisual() {
  return (
    <svg viewBox="0 0 380 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[290px] xl:max-h-[330px] select-none">
      {/* Background Coordinate Grid */}
      <defs>
        <pattern id="disc-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#ffffff" fillOpacity="0.08" />
        </pattern>
        <linearGradient id="plane-orange-grad" x1="60" y1="120" x2="320" y2="240" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DE3D1C" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#DE3D1C" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="380" height="320" fill="url(#disc-grid)" opacity="0.8" />

      {/* Vertical Connecting Ray Vectors linking the planes */}
      <line x1="80" y1="90" x2="80" y2="250" stroke="#ffffff" strokeOpacity="0.15" strokeDasharray="3 3" />
      <line x1="220" y1="40" x2="220" y2="200" stroke="#ffffff" strokeOpacity="0.15" strokeDasharray="3 3" />
      <line x1="330" y1="100" x2="330" y2="260" stroke="#ffffff" strokeOpacity="0.15" strokeDasharray="3 3" />
      <line x1="190" y1="150" x2="190" y2="310" stroke="#ffffff" strokeOpacity="0.15" strokeDasharray="3 3" />

      {/* BOTTOM PLANE (Floor Wireframe Layer) */}
      <g transform="translate(0, 70)">
        <polygon points="190,240 80,180 220,130 330,190" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 3" fill="none" />
        <line x1="135" y1="210" x2="275" y2="160" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="0.8" />
        <line x1="150" y1="155" x2="260" y2="215" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="0.8" />
        <circle cx="190" cy="240" r="2.5" fill="#ffffff" fillOpacity="0.4" />
        <circle cx="80" cy="180" r="2.5" fill="#ffffff" fillOpacity="0.4" />
        <circle cx="330" cy="190" r="2.5" fill="#ffffff" fillOpacity="0.4" />
      </g>

      {/* MIDDLE PLANE (ACTIVE GLOWING ORANGE STRATEGY LAYER) */}
      <g transform="translate(0, 30)">
        {/* Fill with orange gradient */}
        <polygon points="190,190 80,130 220,80 330,140" fill="url(#plane-orange-grad)" stroke="#DE3D1C" strokeWidth="1.8" />
        
        {/* Isometric Grid Lines on Orange Plane */}
        <line x1="135" y1="160" x2="275" y2="110" stroke="#DE3D1C" strokeOpacity="0.6" strokeWidth="1" />
        <line x1="150" y1="105" x2="260" y2="165" stroke="#DE3D1C" strokeOpacity="0.6" strokeWidth="1" />
        
        {/* Central Glowing Core Node */}
        <circle cx="205" cy="135" r="14" fill="#DE3D1C" fillOpacity="0.2" className="animate-pulse" />
        <circle cx="205" cy="135" r="6" fill="#DE3D1C" />
        <circle cx="205" cy="135" r="2" fill="#ffffff" />
        
        {/* Corner Registration Ticks */}
        <circle cx="80" cy="130" r="3" fill="#DE3D1C" />
        <circle cx="330" cy="140" r="3" fill="#DE3D1C" />
        <circle cx="190" cy="190" r="3" fill="#DE3D1C" />
        <circle cx="220" cy="80" r="3" fill="#DE3D1C" />
      </g>

      {/* TOP PLANE (Schematic Blueprint Wireframe) */}
      <g transform="translate(0, -10)">
        <polygon points="190,140 80,80 220,30 330,90" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1.2" fill="#0A0A0A" fillOpacity="0.5" />
        
        {/* Technical Cutout & Internal Matrix */}
        <line x1="135" y1="110" x2="275" y2="60" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1" />
        <line x1="150" y1="55" x2="260" y2="115" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1" />
        <polygon points="170,85 140,70 180,50 210,65" stroke="#ffffff" strokeOpacity="0.8" strokeWidth="1" fill="none" />
        
        {/* Registration Marks and Crosshairs */}
        <path d="M75,80 L85,80 M80,75 L80,85" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1" />
        <path d="M325,90 L335,90 M330,85 L330,95" stroke="#DE3D1C" strokeWidth="1" />
        <circle cx="190" cy="140" r="2.5" fill="#ffffff" />
      </g>

      {/* Floating Coordinate Tags & Technical Labels */}
      <g className="font-mono text-[8px] fill-white/40">
        <text x="235" y="45" fill="#DE3D1C">▲ 01 // ORIGIN</text>
        <text x="50" y="270">COORD: 21.17° N</text>
        <text x="270" y="295">AXIS.Z: 140MM</text>
      </g>
    </svg>
  );
}

// 02 RESEARCH — Intelligence Network & Radar Coordinate System
function ResearchVisual() {
  return (
    <svg viewBox="0 0 380 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[290px] xl:max-h-[330px] select-none">
      <defs>
        <linearGradient id="radar-sweep" x1="190" y1="160" x2="310" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DE3D1C" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#DE3D1C" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Radar Concentric Rings */}
      <circle cx="190" cy="160" r="130" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1" />
      <circle cx="190" cy="160" r="95" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="190" cy="160" r="60" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1" />
      <circle cx="190" cy="160" r="25" stroke="#DE3D1C" strokeOpacity="0.4" strokeWidth="1.2" />

      {/* Crosshair Axes */}
      <line x1="40" y1="160" x2="340" y2="160" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="190" y1="20" x2="190" y2="300" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" />

      {/* Rotating Radar Sweep Cone */}
      <path d="M190,160 L300,85 A130,130 0 0,0 260,55 Z" fill="url(#radar-sweep)" />

      {/* Network Interconnection Vectors */}
      <line x1="190" y1="160" x2="110" y2="90" stroke="#DE3D1C" strokeOpacity="0.6" strokeWidth="1.2" />
      <line x1="190" y1="160" x2="270" y2="100" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1" />
      <line x1="190" y1="160" x2="260" y2="230" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="190" y1="160" x2="100" y2="220" stroke="#DE3D1C" strokeOpacity="0.6" strokeWidth="1.2" />
      <line x1="110" y1="90" x2="270" y2="100" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="0.8" strokeDasharray="2 2" />

      {/* Node 1: DATA (Top Left) */}
      <circle cx="110" cy="90" r="5" fill="#DE3D1C" />
      <circle cx="110" cy="90" r="10" stroke="#DE3D1C" strokeOpacity="0.4" strokeWidth="1" />
      <text x="110" y="75" textAnchor="middle" className="font-mono text-[8px] fill-[#DE3D1C] font-bold">DATA // 98.4%</text>

      {/* Node 2: MARKET (Top Right) */}
      <rect x="260" y="90" width="20" height="20" fill="#0A0A0A" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1" />
      <circle cx="270" cy="100" r="2.5" fill="#ffffff" />
      <text x="270" y="125" textAnchor="middle" className="font-mono text-[8px] fill-white/60">MARKET</text>

      {/* Node 3: COMPETITORS (Bottom Right) */}
      <circle cx="260" cy="230" r="5" fill="#0A0A0A" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1" />
      <text x="260" y="250" textAnchor="middle" className="font-mono text-[8px] fill-white/50">COMPETITORS</text>

      {/* Node 4: TECH (Bottom Left) */}
      <polygon points="100,212 108,226 92,226" fill="#DE3D1C" fillOpacity="0.3" stroke="#DE3D1C" strokeWidth="1" />
      <text x="100" y="242" textAnchor="middle" className="font-mono text-[8px] fill-[#DE3D1C]">TECH STACK</text>

      {/* Central Intelligence Core Node */}
      <circle cx="190" cy="160" r="7" fill="#DE3D1C" className="animate-pulse" />
      <circle cx="190" cy="160" r="2.5" fill="#ffffff" />
      <text x="190" y="180" textAnchor="middle" className="font-mono text-[9px] fill-white font-bold tracking-widest">SYNTHESIS</text>

      {/* Metric Indicators */}
      <text x="50" y="45" className="font-mono text-[8px] fill-white/40">QUERY: GLOBAL_BENCHMARK</text>
      <text x="275" y="295" className="font-mono text-[8px] fill-[#DE3D1C]">STATUS: MAPPED // OK</text>
    </svg>
  );
}

// 03 DESIGN — UI Wireframe & Editorial Design System Layout
function DesignVisual() {
  return (
    <svg viewBox="0 0 380 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[290px] xl:max-h-[330px] select-none">
      {/* Outer Browser Window Frame */}
      <rect x="35" y="30" width="310" height="255" rx="3" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.2" fill="#0E0E0E" />
      
      {/* Window Header Bar */}
      <rect x="35" y="30" width="310" height="24" fill="#181818" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" />
      <circle cx="50" cy="42" r="3" fill="#ffffff" fillOpacity="0.3" />
      <circle cx="60" cy="42" r="3" fill="#ffffff" fillOpacity="0.3" />
      <circle cx="70" cy="42" r="3" fill="#DE3D1C" />
      <text x="190" y="45" textAnchor="middle" className="font-mono text-[8px] fill-white/40 uppercase tracking-widest">DESIGN_SYSTEM // ATOMS.V3</text>

      {/* Wireframe Hero Typography Area */}
      <rect x="55" y="70" width="160" height="18" fill="#DE3D1C" fillOpacity="0.15" stroke="#DE3D1C" strokeWidth="1" />
      <text x="65" y="83" className="font-display text-[11px] fill-[#DE3D1C] uppercase tracking-tight font-black">HEADLINE.BRUTALIST</text>
      
      {/* Paragraph Skeleton Lines */}
      <line x1="55" y1="100" x2="230" y2="100" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
      <line x1="55" y1="108" x2="200" y2="108" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
      <line x1="55" y1="116" x2="170" y2="116" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="2" />

      {/* Component Wireframe Cards (2 Columns) */}
      <rect x="55" y="135" width="125" height="75" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1" fill="#141414" />
      <rect x="65" y="145" width="40" height="8" fill="#DE3D1C" />
      <line x1="65" y1="165" x2="160" y2="165" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="65" y1="175" x2="140" y2="175" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
      <rect x="65" y="188" width="50" height="12" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="0.8" fill="none" />

      <rect x="195" y="135" width="130" height="75" stroke="#DE3D1C" strokeWidth="1.2" fill="#DE3D1C" fillOpacity="0.08" />
      <circle cx="215" cy="155" r="10" stroke="#DE3D1C" strokeWidth="1" fill="none" />
      <line x1="235" y1="150" x2="310" y2="150" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.5" />
      <line x1="235" y1="160" x2="290" y2="160" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" />
      <rect x="235" y="180" width="75" height="16" fill="#DE3D1C" />
      <text x="272" y="191" textAnchor="middle" className="font-mono text-[7px] fill-white font-bold">CTA.CONVERT</text>

      {/* Alignment Dimension Lines & Specs */}
      <line x1="180" y1="135" x2="195" y2="135" stroke="#DE3D1C" strokeWidth="1" />
      <text x="187" y="130" textAnchor="middle" className="font-mono text-[7px] fill-[#DE3D1C]">16PX</text>
      <line x1="55" y1="220" x2="325" y2="220" stroke="#ffffff" strokeOpacity="0.15" strokeDasharray="3 3" />

      {/* Interactive Cursor Pointer with Coordinates */}
      <g transform="translate(240, 165)">
        <polygon points="0,0 4,14 7,10 12,12 14,8 9,6 14,0" fill="#ffffff" stroke="#0A0A0A" strokeWidth="1" />
        <rect x="16" y="8" width="55" height="15" fill="#DE3D1C" rx="2" />
        <text x="43" y="18" textAnchor="middle" className="font-mono text-[7px] fill-white font-bold">X:320 Y:180</text>
      </g>

      {/* Bottom Token Spec Row */}
      <text x="55" y="245" className="font-mono text-[8px] fill-white/40">SPACING: 8PT GRID</text>
      <text x="185" y="245" className="font-mono text-[8px] fill-white/40">TYPE: INTER + BEBAS</text>
      <text x="280" y="245" className="font-mono text-[8px] fill-[#DE3D1C]">TOKENS: SYNCED</text>
    </svg>
  );
}

// 04 DEVELOP — Full-Stack Deep Architecture Stack
function DevelopVisual() {
  return (
    <svg viewBox="0 0 380 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[290px] xl:max-h-[330px] select-none">
      <defs>
        <linearGradient id="dev-layer-grad" x1="0" y1="0" x2="280" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DE3D1C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#DE3D1C" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Vertical Data Flow Backbone (Bus) */}
      <line x1="90" y1="40" x2="90" y2="280" stroke="#ffffff" strokeOpacity="0.2" strokeDasharray="4 4" strokeWidth="1.2" />
      <line x1="290" y1="40" x2="290" y2="280" stroke="#ffffff" strokeOpacity="0.2" strokeDasharray="4 4" strokeWidth="1.2" />
      
      {/* Animated Flow Center Line */}
      <line x1="190" y1="40" x2="190" y2="280" stroke="#DE3D1C" strokeWidth="1.5" strokeOpacity="0.7" />
      <circle cx="190" cy="110" r="3" fill="#ffffff" />
      <circle cx="190" cy="175" r="3" fill="#ffffff" />
      <circle cx="190" cy="240" r="3" fill="#ffffff" />

      {/* LAYER 1: CLIENT TIER (Top) */}
      <g transform="translate(50, 45)">
        <rect width="280" height="42" rx="2" fill="#121212" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1" />
        <rect x="10" y="10" width="6" height="6" fill="#DE3D1C" />
        <text x="25" y="18" className="font-mono text-[9px] fill-white font-bold">TIER 01 // CLIENT APPLICATION</text>
        <text x="25" y="32" className="font-mono text-[8px] fill-white/50">NEXT.JS 15 APP ROUTER · REACT 19 SSR</text>
        <rect x="210" y="12" width="60" height="18" fill="#DE3D1C" fillOpacity="0.2" stroke="#DE3D1C" strokeWidth="0.8" />
        <text x="240" y="24" textAnchor="middle" className="font-mono text-[7px] fill-[#DE3D1C] font-bold">SUB-100MS</text>
      </g>

      {/* LAYER 2: API & MIDDLEWARE GATEWAY (Middle Active) */}
      <g transform="translate(50, 115)">
        <rect width="280" height="46" rx="2" fill="url(#dev-layer-grad)" stroke="#DE3D1C" strokeWidth="1.5" />
        <polygon points="10,18 16,14 16,22" fill="#DE3D1C" />
        <text x="25" y="20" className="font-mono text-[9px] fill-[#DE3D1C] font-bold">TIER 02 // API & LOGIC PIPELINES</text>
        <text x="25" y="35" className="font-mono text-[8px] fill-white/70">TYPESCRIPT · EDGE MIDDLEWARE · REST</text>
        <text x="240" y="28" textAnchor="middle" className="font-mono text-[10px] fill-white font-bold">{'</>'}</text>
      </g>

      {/* LAYER 3: DATABASE & CACHE TIER */}
      <g transform="translate(50, 185)">
        <rect width="280" height="42" rx="2" fill="#121212" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1" />
        <circle cx="13" cy="21" r="3" fill="#ffffff" fillOpacity="0.4" />
        <text x="25" y="18" className="font-mono text-[9px] fill-white font-bold">TIER 03 // DATA & STATE LAYER</text>
        <text x="25" y="32" className="font-mono text-[8px] fill-white/50">POSTGRESQL · PRISMA · REDIS SYNC</text>
        <rect x="215" y="12" width="55" height="18" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.2" />
        <text x="242" y="24" textAnchor="middle" className="font-mono text-[7px] fill-white/60">ACID_COMP</text>
      </g>

      {/* LAYER 4: CLOUD INFRASTRUCTURE (Base) */}
      <g transform="translate(50, 250)">
        <rect width="280" height="38" rx="2" fill="#0A0A0A" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1" />
        <text x="25" y="17" className="font-mono text-[8px] fill-white/50">TIER 04 // CLOUD INFRASTRUCTURE</text>
        <text x="25" y="29" className="font-mono text-[7px] fill-[#DE3D1C]">VERCEL EDGE · AWS DISTRIBUTED · CDN</text>
        <circle cx="265" cy="19" r="3" fill="#DE3D1C" className="animate-pulse" />
      </g>
    </svg>
  );
}

// 05 TEST — QA Matrix, Security Shield & Validation Suite
function TestVisual() {
  return (
    <svg viewBox="0 0 380 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[290px] xl:max-h-[330px] select-none">
      <defs>
        <linearGradient id="shield-grad" x1="190" y1="70" x2="190" y2="240" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DE3D1C" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#DE3D1C" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* Radar Target Background Grid */}
      <circle cx="190" cy="155" r="125" stroke="#ffffff" strokeOpacity="0.08" />
      <circle cx="190" cy="155" r="90" stroke="#ffffff" strokeOpacity="0.12" strokeDasharray="3 3" />
      <line x1="40" y1="155" x2="340" y2="155" stroke="#ffffff" strokeOpacity="0.1" />
      <line x1="190" y1="20" x2="190" y2="290" stroke="#ffffff" strokeOpacity="0.1" />

      {/* Central Cybernetic Validation Shield */}
      <path
        d="M190,65 L260,95 L260,165 C260,215 190,250 190,250 C190,250 120,215 120,165 L120,95 Z"
        fill="url(#shield-grad)"
        stroke="#DE3D1C"
        strokeWidth="1.8"
      />
      <path
        d="M190,80 L245,105 L245,160 C245,200 190,230 190,230 C190,230 135,200 135,160 L135,105 Z"
        stroke="#ffffff"
        strokeOpacity="0.2"
        strokeWidth="1"
        fill="none"
      />

      {/* Validation Big Checkmark */}
      <polyline points="160,155 182,175 225,130" stroke="#DE3D1C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* 4 Peripheral QA Radar Verification Nodes */}
      {/* Node 1: CROSS-BROWSER (Top Left) */}
      <g transform="translate(45, 60)">
        <rect width="85" height="32" rx="2" fill="#141414" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />
        <circle cx="12" cy="16" r="3" fill="#DE3D1C" />
        <text x="22" y="14" className="font-mono text-[7px] fill-white font-bold">CROSS-BROWSER</text>
        <text x="22" y="24" className="font-mono text-[6px] fill-[#DE3D1C]">VERIFIED 100%</text>
      </g>

      {/* Node 2: LIGHTHOUSE 98+ (Top Right) */}
      <g transform="translate(250, 60)">
        <rect width="85" height="32" rx="2" fill="#141414" stroke="#DE3D1C" strokeWidth="1" />
        <text x="12" y="14" className="font-mono text-[7px] fill-[#DE3D1C] font-bold">PERFORMANCE</text>
        <text x="12" y="24" className="font-mono text-[7px] fill-white font-bold">LIGHTHOUSE 99/100</text>
      </g>

      {/* Node 3: SECURITY PEN-TEST (Bottom Left) */}
      <g transform="translate(45, 220)">
        <rect width="85" height="32" rx="2" fill="#141414" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />
        <text x="10" y="14" className="font-mono text-[7px] fill-white font-bold">SECURITY AUDIT</text>
        <text x="10" y="24" className="font-mono text-[6px] fill-white/50">ZERO VULNERABILITY</text>
      </g>

      {/* Node 4: MOBILE RESPONSIVE (Bottom Right) */}
      <g transform="translate(250, 220)">
        <rect width="85" height="32" rx="2" fill="#141414" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />
        <text x="10" y="14" className="font-mono text-[7px] fill-white font-bold">VIEWPORT AUDIT</text>
        <text x="10" y="24" className="font-mono text-[6px] fill-[#DE3D1C]">PASS // ALL SIZES</text>
      </g>

      {/* Scanning Horizontal Beam line */}
      <line x1="120" y1="150" x2="260" y2="150" stroke="#DE3D1C" strokeWidth="1" strokeOpacity="0.8" className="animate-pulse" />
      <text x="190" y="280" textAnchor="middle" className="font-mono text-[8px] fill-[#DE3D1C] tracking-widest font-bold">ALL SYSTEMS VERIFIED // PRODUCTION READY</text>
    </svg>
  );
}

// 06 LAUNCH — Cloud Infrastructure & Global Edge Deployment
function LaunchVisual() {
  return (
    <svg viewBox="0 0 380 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[290px] xl:max-h-[330px] select-none">
      <defs>
        <radialGradient id="launch-core-glow" cx="190" cy="120" r="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DE3D1C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#DE3D1C" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central Cloud Node Container */}
      <circle cx="190" cy="115" r="65" fill="url(#launch-core-glow)" />
      
      {/* Cloud Isometric Outline */}
      <path
        d="M150,135 C135,135 125,122 130,108 C132,100 140,94 150,94 C153,82 165,72 180,72 C198,72 210,84 212,98 C222,98 230,106 230,116 C230,126 222,135 210,135 Z"
        stroke="#ffffff"
        strokeWidth="1.8"
        fill="#141414"
      />
      
      {/* Central Rocket / Deployment Vector Arrow */}
      <polygon points="190,82 198,105 190,100 182,105" fill="#DE3D1C" />
      <line x1="190" y1="100" x2="190" y2="122" stroke="#DE3D1C" strokeWidth="2" />
      <circle cx="190" cy="125" r="2.5" fill="#ffffff" />
      <text x="190" y="148" textAnchor="middle" className="font-mono text-[8px] fill-[#DE3D1C] font-bold">▲ DEPLOY LIVE</text>

      {/* Distribution Branches to Global Edge Nodes */}
      <line x1="150" y1="135" x2="80" y2="210" stroke="#DE3D1C" strokeWidth="1.2" />
      <line x1="190" y1="135" x2="190" y2="210" stroke="#DE3D1C" strokeWidth="1.2" />
      <line x1="220" y1="135" x2="300" y2="210" stroke="#DE3D1C" strokeWidth="1.2" />

      {/* Edge Node 1: US-EAST (Left) */}
      <g transform="translate(40, 210)">
        <rect width="80" height="38" rx="2" fill="#101010" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />
        <circle cx="12" cy="14" r="2.5" fill="#DE3D1C" />
        <text x="20" y="16" className="font-mono text-[7px] fill-white font-bold">EDGE // US-EAST</text>
        <text x="20" y="27" className="font-mono text-[6px] fill-white/50">LATENCY: 18MS</text>
      </g>

      {/* Edge Node 2: EU-CENTRAL (Center) */}
      <g transform="translate(150, 210)">
        <rect width="80" height="38" rx="2" fill="#101010" stroke="#DE3D1C" strokeWidth="1.2" />
        <circle cx="12" cy="14" r="2.5" fill="#DE3D1C" className="animate-pulse" />
        <text x="20" y="16" className="font-mono text-[7px] fill-[#DE3D1C] font-bold">EDGE // EU-CENTRAL</text>
        <text x="20" y="27" className="font-mono text-[6px] fill-white/70">LATENCY: 12MS</text>
      </g>

      {/* Edge Node 3: AP-SOUTH (Right) */}
      <g transform="translate(260, 210)">
        <rect width="80" height="38" rx="2" fill="#101010" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />
        <circle cx="12" cy="14" r="2.5" fill="#DE3D1C" />
        <text x="20" y="16" className="font-mono text-[7px] fill-white font-bold">EDGE // AP-SOUTH</text>
        <text x="20" y="27" className="font-mono text-[6px] fill-white/50">LATENCY: 22MS</text>
      </g>

      {/* Live Status Telemetry Readouts */}
      <text x="50" y="45" className="font-mono text-[8px] fill-white/40">DNS: PROPAGATED (100%)</text>
      <text x="245" y="45" className="font-mono text-[8px] fill-[#DE3D1C]">STATUS: 200 OK (LIVE)</text>
      <text x="190" y="285" textAnchor="middle" className="font-mono text-[8px] fill-white/50">GLOBAL CDN REPLICATION COMPLETE</text>
    </svg>
  );
}

// 07 SUPPORT — Monitoring Dashboard & SLA Scale Telemetry
function SupportVisual() {
  return (
    <svg viewBox="0 0 380 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[290px] xl:max-h-[330px] select-none">
      {/* Background Oscilloscope Matrix */}
      <defs>
        <linearGradient id="wave-grad" x1="0" y1="120" x2="0" y2="210" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DE3D1C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#DE3D1C" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="35" y="30" width="310" height="180" rx="3" fill="#0C0C0C" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
      
      {/* Grid Lines inside Monitor Screen */}
      <line x1="35" y1="75" x2="345" y2="75" stroke="#ffffff" strokeOpacity="0.08" />
      <line x1="35" y1="120" x2="345" y2="120" stroke="#ffffff" strokeOpacity="0.08" />
      <line x1="35" y1="165" x2="345" y2="165" stroke="#ffffff" strokeOpacity="0.08" />
      <line x1="110" y1="30" x2="110" y2="210" stroke="#ffffff" strokeOpacity="0.08" />
      <line x1="190" y1="30" x2="190" y2="210" stroke="#ffffff" strokeOpacity="0.08" />
      <line x1="270" y1="30" x2="270" y2="210" stroke="#ffffff" strokeOpacity="0.08" />

      {/* Live Oscilloscope Sine/Pulse Waveform */}
      <path
        d="M35,140 L85,140 L100,120 L115,160 L130,135 L145,140 L185,140 L200,90 L215,185 L230,110 L245,140 L285,140 L300,130 L315,150 L345,140"
        stroke="#DE3D1C"
        strokeWidth="2"
        fill="none"
      />
      {/* Wave Fill Area */}
      <path
        d="M35,140 L85,140 L100,120 L115,160 L130,135 L145,140 L185,140 L200,90 L215,185 L230,110 L245,140 L285,140 L300,130 L315,150 L345,140 L345,210 L35,210 Z"
        fill="url(#wave-grad)"
      />

      {/* Moving Telemetry Pulse Peak */}
      <circle cx="200" cy="90" r="4" fill="#ffffff" />
      <circle cx="200" cy="90" r="9" stroke="#DE3D1C" strokeWidth="1" className="animate-ping" />

      {/* Top Telemetry Header inside Dashboard */}
      <text x="50" y="50" className="font-mono text-[8px] fill-[#DE3D1C] font-bold">HEARTBEAT // ACTIVE</text>
      <text x="260" y="50" className="font-mono text-[8px] fill-white/50">99.99% UPTIME SLA</text>

      {/* 3 Metric Gauges on Bottom */}
      <g transform="translate(35, 230)">
        {/* Metric 1: UPTIME */}
        <rect width="95" height="48" rx="2" fill="#121212" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
        <text x="12" y="18" className="font-mono text-[7px] fill-white/50">SYSTEM HEALTH</text>
        <text x="12" y="36" className="font-mono text-[13px] fill-[#DE3D1C] font-bold">99.99%</text>
      </g>

      <g transform="translate(142, 230)">
        {/* Metric 2: RESPONSE TIME */}
        <rect width="95" height="48" rx="2" fill="#121212" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
        <text x="12" y="18" className="font-mono text-[7px] fill-white/50">P95 LATENCY</text>
        <text x="12" y="36" className="font-mono text-[13px] fill-white font-bold">42 MS</text>
      </g>

      <g transform="translate(250, 230)">
        {/* Metric 3: CAPACITY */}
        <rect width="95" height="48" rx="2" fill="#121212" stroke="#DE3D1C" strokeWidth="1" />
        <text x="12" y="18" className="font-mono text-[7px] fill-[#DE3D1C] font-bold">AUTO-SCALE</text>
        <text x="12" y="36" className="font-mono text-[13px] fill-white font-bold">2.4X POOL</text>
      </g>
    </svg>
  );
}

/* ==========================================================================
   PROCESS DATA SPECIFICATION
   ========================================================================== */

interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  tagline: string;
  desc: string;
  duration: string;
  output: string;
  microSteps: { num: string; label: string }[];
  keyFocus: { label: string; icon: any }[];
  visualCallouts: {
    topLeft: string[];
    right: string[];
    bottomRight: string[];
  };
  visualComponent: React.ComponentType;
}

const stages: ProcessStage[] = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'SCOPE & AUDIT',
    tagline: 'TURN IDEAS INTO DIRECTION',
    desc: 'Understanding your business goals, target audience, and digital bottleneck analysis. We identify opportunities, define the scope, and set a clear direction for a successful build.',
    duration: 'WEEK 01',
    output: 'System Scope & Architecture Blueprint',
    microSteps: [
      { num: '01', label: 'BUSINESS ANALYSIS' },
      { num: '02', label: 'AUDIENCE RESEARCH' },
      { num: '03', label: 'TECHNICAL AUDIT' },
      { num: '04', label: 'SCOPE DEFINITION' },
    ],
    keyFocus: [
      { label: 'BUSINESS GOALS', icon: Target },
      { label: 'AUDIENCE AUDIT', icon: Users },
      { label: 'BOTTLENECK ANALYSIS', icon: BarChart3 },
      { label: 'SCOPE MAPPING', icon: Layers },
    ],
    visualCallouts: {
      topLeft: ['IDEAS', 'INSIGHTS', 'OPPORTUNITIES'],
      right: ['ANALYZE', 'DEFINE', 'ALIGN'],
      bottomRight: ['FOUNDATION', "FOR WHAT'S NEXT"],
    },
    visualComponent: DiscoverVisual,
  },
  {
    step: '02',
    title: 'RESEARCH',
    subtitle: 'STRATEGY & SPEC',
    tagline: 'SYNTHESIZE DATA INTO STRATEGY',
    desc: 'Rigorous competitive intelligence, technological feasibility studies, and database schema mapping. We eliminate unknowns and architect the technical foundation before writing code.',
    duration: 'WEEK 01–02',
    output: 'Technical Strategy & System Blueprint',
    microSteps: [
      { num: '01', label: 'MARKET AUDIT' },
      { num: '02', label: 'COMPETITIVE MAP' },
      { num: '03', label: 'TECH EVALUATION' },
      { num: '04', label: 'SCHEMA SPEC' },
    ],
    keyFocus: [
      { label: 'MARKET INTELLIGENCE', icon: Search },
      { label: 'TECH STACK AUDIT', icon: Cpu },
      { label: 'DATABASE SCHEMAS', icon: Database },
      { label: 'SYSTEM ROADMAP', icon: Layers },
    ],
    visualCallouts: {
      topLeft: ['COLLECT', 'ANALYZE', 'COMPARE'],
      right: ['BENCHMARK', 'SPECS', 'DATA'],
      bottomRight: ['INTELLIGENCE', 'DEFINED'],
    },
    visualComponent: ResearchVisual,
  },
  {
    step: '03',
    title: 'DESIGN',
    subtitle: 'EDITORIAL UI/UX',
    tagline: 'SHAPE FORM, FUNCTION & IDENTITY',
    desc: 'Bespoke high-contrast design systems, typography hierarchies, and atomic design tokens. We build fluid, high-converting digital interfaces engineered with editorial Swiss precision.',
    duration: 'WEEK 02–03',
    output: 'Production Design Tokens & Prototypes',
    microSteps: [
      { num: '01', label: 'WIREFRAME FLOWS' },
      { num: '02', label: 'TYPOGRAPHY TOKENS' },
      { num: '03', label: 'DESIGN SYSTEM' },
      { num: '04', label: 'PROTOTYPE QA' },
    ],
    keyFocus: [
      { label: 'DESIGN SYSTEMS', icon: Layout },
      { label: 'EDITORIAL TOKENS', icon: Palette },
      { label: 'WIREFRAMES', icon: Layers },
      { label: 'MICRO-INTERACTIONS', icon: Sparkles },
    ],
    visualCallouts: {
      topLeft: ['GRID', 'TOKENS', 'SPACING'],
      right: ['HIERARCHY', 'SYSTEM', 'UI'],
      bottomRight: ['PIXEL-PERFECT', 'PROTOTYPES'],
    },
    visualComponent: DesignVisual,
  },
  {
    step: '04',
    title: 'DEVELOP',
    subtitle: 'FULL-STACK CODE',
    tagline: 'ENGINEER ROBUST PRODUCTION SYSTEMS',
    desc: 'Clean, scalable Next.js and TypeScript engineering built for sub-second page performance. We build robust API pipelines, responsive layouts, and rock-solid state architectures.',
    duration: 'WEEK 03–05',
    output: 'Scalable Full-Stack Application Codebase',
    microSteps: [
      { num: '01', label: 'FRONTEND ARCH' },
      { num: '02', label: 'API PIPELINES' },
      { num: '03', label: 'DATABASE SCHEMAS' },
      { num: '04', label: 'SSR OPTIMIZATION' },
    ],
    keyFocus: [
      { label: 'NEXT.JS 15', icon: Code2 },
      { label: 'TYPESCRIPT', icon: Cpu },
      { label: 'API ARCHITECTURE', icon: Server },
      { label: 'SUB-100MS SPEED', icon: Zap },
    ],
    visualCallouts: {
      topLeft: ['CODE', 'PIPELINES', 'APIS'],
      right: ['SYSTEM', 'PERF', 'LOGIC'],
      bottomRight: ['PRODUCTION', 'ENGINEERED'],
    },
    visualComponent: DevelopVisual,
  },
  {
    step: '05',
    title: 'TEST',
    subtitle: 'QA & SECURITY',
    tagline: 'VALIDATE RIGOR, SPEED & INTEGRITY',
    desc: 'Cross-browser stress testing, mobile responsiveness verification, lighthouse speed audits, and security vulnerability hardening before deploying into live production.',
    duration: 'WEEK 05',
    output: 'QA Validation & Security Audit Report',
    microSteps: [
      { num: '01', label: 'CROSS-BROWSER' },
      { num: '02', label: 'MOBILE AUDIT' },
      { num: '03', label: 'SECURITY SCAN' },
      { num: '04', label: 'LIGHTHOUSE 95+' },
    ],
    keyFocus: [
      { label: 'CROSS-BROWSER QA', icon: CheckCircle2 },
      { label: 'MOBILE RESPONSIVE', icon: Smartphone },
      { label: 'SECURITY HARDENING', icon: Lock },
      { label: 'LIGHTHOUSE 95+', icon: ShieldCheck },
    ],
    visualCallouts: {
      topLeft: ['BUILD', 'TEST', 'SCAN'],
      right: ['VALIDATE', 'SECURE', 'VERIFY'],
      bottomRight: ['ZERO-DEFECT', 'SIGN-OFF'],
    },
    visualComponent: TestVisual,
  },
  {
    step: '06',
    title: 'LAUNCH',
    subtitle: 'CLOUD DEPLOYMENT',
    tagline: 'ORCHESTRATE ZERO-DOWNTIME ROLLOUT',
    desc: 'Seamless zero-downtime production deployment, SSL and DNS orchestration, edge caching CDN rules, and real-time observability telemetry setup for global reach.',
    duration: 'WEEK 06',
    output: 'Live Production Deployment & Observability',
    microSteps: [
      { num: '01', label: 'DNS MAPPING' },
      { num: '02', label: 'CDN PROPAGATION' },
      { num: '03', label: 'SSL HARDENING' },
      { num: '04', label: 'LIVE TELEMETRY' },
    ],
    keyFocus: [
      { label: 'ZERO-DOWNTIME CI/CD', icon: Cloud },
      { label: 'GLOBAL CDN SETUP', icon: Globe },
      { label: 'DNS & SSL ORCH', icon: Lock },
      { label: 'LIVE TELEMETRY', icon: Radio },
    ],
    visualCallouts: {
      topLeft: ['BUILD', 'DEPLOY', 'PROPAGATE'],
      right: ['GLOBAL EDGE', 'CDN', 'LIVE'],
      bottomRight: ['100% OPERATIONAL', 'ACTIVE'],
    },
    visualComponent: LaunchVisual,
  },
  {
    step: '07',
    title: 'SUPPORT',
    subtitle: 'SLA & SCALE',
    tagline: 'CONTINUOUS EVOLUTION & HIGH AVAILABILITY',
    desc: 'Continuous uptime monitoring, security patch deployments, conversion rate optimization sprints, and dedicated ongoing engineering partnership to scale your product.',
    duration: 'CONTINUOUS',
    output: 'Monthly SLA Maintenance & Growth Sprints',
    microSteps: [
      { num: '01', label: '24/7 MONITORING' },
      { num: '02', label: 'SECURITY SPRINT' },
      { num: '03', label: 'CRO & ANALYTICS' },
      { num: '04', label: 'SLA GUARANTEE' },
    ],
    keyFocus: [
      { label: '24/7 MONITORING', icon: Activity },
      { label: 'SECURITY PATCHES', icon: ShieldCheck },
      { label: 'CRO & ANALYTICS', icon: TrendingUp },
      { label: 'FEATURE ITERATION', icon: RefreshCw },
    ],
    visualCallouts: {
      topLeft: ['MONITOR', 'OPTIMIZE', 'DEFEND'],
      right: ['SCALE', 'MAINTAIN', 'GROW'],
      bottomRight: ['99.99% UPTIME', 'GUARANTEED'],
    },
    visualComponent: SupportVisual,
  },
];

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */

export default function Process() {
  const [activeIdx, setActiveIdx] = useState(0); // Default to 01 DISCOVER as requested
  const active = stages[activeIdx];
  const ActiveVisual = active.visualComponent;

  return (
    <section id="process" className="pt-20 md:pt-28 pb-8 md:pb-12 px-6 md:px-12 bg-[#0A0A0A] text-[#F3F0E9] border-b border-[#0A0A0A] relative dark-grain">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-white/20 pb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold block mb-2">
              05 / EXECUTION FRAMEWORK
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-white">
              HOW WE WORK
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-[#F3F0E9]/70 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            A linear, high-velocity engineering process engineered to take concepts to market-ready production without bloat.
          </p>
        </div>

        {/* ==========================================================================
            DESKTOP VERTICAL NAVIGATION & DYNAMIC DETAIL PANEL (lg:grid)
            ========================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 border border-white/10 bg-[#0A0A0A] shadow-[0_0_60px_rgba(222,61,28,0.06)]">
          {/* LEFT SIDE: Vertical Process Navigation (~28% to 33% width) */}
          <div
            role="tablist"
            aria-label="Process Stages"
            className="lg:col-span-4 xl:col-span-3 border-r border-white/10 divide-y divide-white/10 flex flex-col justify-between bg-[#0A0A0A]"
          >
            {stages.map((s, idx) => {
              const isActive = activeIdx === idx;

              return (
                <button
                  key={s.step}
                  role="tab"
                  id={`process-tab-${s.step}`}
                  aria-controls={`process-panel-${s.step}`}
                  aria-selected={isActive}
                  tabIndex={0}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  onFocus={() => setActiveIdx(idx)}
                  className={`w-full text-left px-5 py-4 xl:px-6 xl:py-5.5 transition-all duration-200 flex items-center justify-between relative group cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#DE3D1C]/20 via-[#DE3D1C]/5 to-transparent text-white'
                      : 'text-white/50 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  {/* Left Orange Border Indicator */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#DE3D1C] shadow-[0_0_12px_rgba(222,61,28,0.8)] transition-opacity duration-200 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                    }`}
                  />

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2.5">
                      <span
                        className={`text-xs font-mono font-bold transition-colors ${
                          isActive ? 'text-[#DE3D1C]' : 'text-white/40 group-hover:text-[#DE3D1C]'
                        }`}
                      >
                        [{s.step}]
                      </span>
                      <h4
                        className={`text-xl xl:text-2xl font-display uppercase tracking-tight leading-none transition-colors ${
                          isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                        }`}
                      >
                        {s.title}
                      </h4>
                    </div>

                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider block transition-colors ${
                        isActive ? 'text-[#DE3D1C] font-semibold' : 'text-white/40'
                      }`}
                    >
                      {s.subtitle}
                    </span>
                  </div>

                  {/* Right Status Indicator */}
                  <div className="flex items-center gap-2">
                    {isActive ? (
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#DE3D1C] animate-pulse shadow-[0_0_8px_rgba(222,61,28,0.8)]" />
                        <span className="text-[9px] font-mono uppercase tracking-widest text-[#DE3D1C] font-bold">
                          ACTIVE
                        </span>
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all">
                        →
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: Large Dynamic Detail & Technical Visual Panel (~67% to 72% width) */}
          <div
            id={`process-panel-${active.step}`}
            role="tabpanel"
            aria-labelledby={`process-tab-${active.step}`}
            className="lg:col-span-8 xl:col-span-9 p-7 sm:p-9 xl:p-11 min-h-[580px] flex flex-col justify-between bg-[#080808] relative overflow-hidden"
          >
            {/* Subtle Technical Dot Grid Overlay across entire right panel */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col justify-between h-full space-y-7"
              >
                {/* 1. Top Metadata Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="text-xs font-mono font-bold text-[#DE3D1C] tracking-widest uppercase">
                    STAGE // [{active.step}] / {active.subtitle}
                  </div>

                  <div className="text-[11px] font-mono text-white/50 uppercase tracking-widest">
                    TIMELINE: {active.duration}
                  </div>
                </div>

                {/* 2. Main Middle Area: Text Details (Left) + Seamless SVG Schematic (Right) */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
                  {/* Left Text Column */}
                  <div className="xl:col-span-6 space-y-4">
                    <div>
                      <h3 className="text-4xl sm:text-5xl xl:text-6xl font-display uppercase tracking-tight text-white leading-none">
                        {active.title}
                      </h3>
                      <span className="text-[#DE3D1C] font-mono font-bold text-xs sm:text-sm tracking-widest mt-2 block">
                        {active.tagline}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#F3F0E9]/75 font-light leading-relaxed max-w-lg">
                      {active.desc}
                    </p>

                    {/* 4-Step Sequential Micro-Grid with Vertical Dividers (No top/bottom borders) */}
                    <div className="grid grid-cols-4 divide-x divide-white/15 py-3 mt-6">
                      {active.microSteps.map((m) => (
                        <div key={m.num} className="px-3 first:pl-0 last:pr-0">
                          <span className="text-xs sm:text-sm font-mono font-bold text-white block leading-none">
                            {m.num}
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-white/50 block mt-1.5 leading-tight">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Custom SVG Visual Column — Seamless Editorial Blueprint (No enclosing card box) */}
                  <div className="xl:col-span-6 relative flex items-center justify-center p-2 min-h-[280px] xl:min-h-[320px]">
                    {/* Top-Left Technical Callouts (with horizontal dash under it, matching reference) */}
                    <div className="absolute top-2 left-2 flex flex-col text-[8px] sm:text-[9px] font-mono text-white/50 tracking-wider space-y-0.5 pointer-events-none select-none">
                      {active.visualCallouts.topLeft.map((t, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                          {i === 0 && <span className="w-1 h-1 bg-[#DE3D1C]" />}
                          <span>{t}</span>
                        </span>
                      ))}
                      <span className="text-white/30 pt-0.5">—</span>
                    </div>

                    {/* Right Edge Technical Callouts */}
                    <div className="absolute top-4 right-2 flex flex-col text-[8px] sm:text-[9px] font-mono text-white/40 tracking-wider text-right space-y-0.5 pointer-events-none select-none">
                      {active.visualCallouts.right.map((t, i) => (
                        <span key={i}>{t}</span>
                      ))}
                    </div>

                    {/* Bottom-Right Callouts with dash */}
                    <div className="absolute bottom-2 right-2 flex flex-col text-[8px] sm:text-[9px] font-mono text-white/40 tracking-wider text-right space-y-0.5 pointer-events-none select-none">
                      {active.visualCallouts.bottomRight.map((t, i) => (
                        <span key={i} className={i === 0 ? 'text-[#DE3D1C]' : ''}>
                          {i === 0 && <span className="text-white/30 mr-1">—</span>}
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Stage-Specific Vector Blueprint Illustration */}
                    <div className="w-full h-full flex items-center justify-center py-2">
                      <ActiveVisual />
                    </div>
                  </div>
                </div>

                {/* 3. Key Focus & Methodology Pill Box Row */}
                <div className="space-y-3 pt-6 border-t border-white/10">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#DE3D1C] font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#DE3D1C]" />
                    <span>KEY FOCUS & METHODOLOGY</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {active.keyFocus.map((focusItem, fIdx) => {
                      const IconComponent = focusItem.icon;
                      return (
                        <div
                          key={fIdx}
                          className="border border-white/20 bg-white/[0.015] hover:bg-white/[0.04] hover:border-[#DE3D1C]/60 p-3 sm:py-3.5 sm:px-4 flex items-center gap-3 transition-colors shadow-sm"
                        >
                          <IconComponent className="w-4 h-4 text-[#DE3D1C] shrink-0" />
                          <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold truncate">
                            {focusItem.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Bottom Deliverable & Step Progress Bar */}
                <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono">
                  <div className="space-y-0.5">
                    <span className="text-white/40 uppercase text-[10px] tracking-widest block">
                      DELIVERABLE MILESTONE
                    </span>
                    <span className="text-white font-medium text-xs sm:text-sm">
                      {active.output}
                    </span>
                  </div>

                  <div className="flex items-center gap-5">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest hidden sm:inline">
                      STEP {active.step} OF 07
                    </span>
                    <button
                      onClick={() => setActiveIdx((activeIdx + 1) % stages.length)}
                      className="inline-flex items-center gap-2 border border-white/25 hover:border-[#DE3D1C] hover:bg-[#DE3D1C] hover:text-white px-5 py-2.5 text-xs font-mono uppercase font-bold tracking-widest text-white transition-all cursor-pointer shadow-sm"
                      title="Advance to next process stage"
                    >
                      <span>NEXT STAGE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ==========================================================================
            MOBILE & TABLET VIEW (< lg)
            Vertical stage list with active detail panel directly below
            ========================================================================== */}
        <div className="block lg:hidden space-y-8">
          {/* Stage selector buttons */}
          <div className="border border-white/15 divide-y divide-white/10 bg-[#0A0A0A]">
            {stages.map((s, idx) => {
              const isActive = activeIdx === idx;

              return (
                <button
                  key={s.step}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full p-4.5 flex items-center justify-between text-left transition-all cursor-pointer relative ${
                    isActive
                      ? 'bg-gradient-to-r from-[#DE3D1C]/20 via-[#DE3D1C]/5 to-transparent text-white'
                      : 'text-white/60 hover:bg-white/[0.02]'
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#DE3D1C] ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#DE3D1C]' : 'text-white/40'}`}>
                      [{s.step}]
                    </span>
                    <div>
                      <h4 className="text-xl font-display uppercase tracking-tight text-white leading-none">
                        {s.title}
                      </h4>
                      <span className={`text-[10px] font-mono uppercase tracking-wider block mt-0.5 ${isActive ? 'text-[#DE3D1C]' : 'text-white/40'}`}>
                        {s.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isActive ? (
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#DE3D1C] animate-pulse" />
                        <span className="text-[9px] font-mono uppercase text-[#DE3D1C] font-bold">
                          ACTIVE
                        </span>
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-white/30">→</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Detail Container for Mobile */}
          <div className="border border-white/15 bg-[#0B0B0B] p-6 space-y-6">
            <div className="flex justify-between items-center text-[10px] font-mono text-white/50 uppercase tracking-widest border-b border-white/10 pb-3">
              <span className="text-[#DE3D1C] font-bold">STAGE // [{active.step}] {active.subtitle}</span>
              <span>{active.duration}</span>
            </div>

            <div>
              <h3 className="text-3xl font-display uppercase tracking-tight text-white leading-none">
                {active.title}
              </h3>
              <span className="text-[#DE3D1C] font-mono font-bold text-xs tracking-widest mt-1 block">
                {active.tagline}
              </span>
              <p className="text-xs text-white/75 font-light leading-relaxed mt-3">
                {active.desc}
              </p>
            </div>

            {/* Mobile SVG Illustration */}
            <div className="border border-white/10 bg-black/40 p-4 min-h-[220px] flex items-center justify-center">
              <ActiveVisual />
            </div>

            {/* 4 Micro Steps */}
            <div className="grid grid-cols-2 gap-2 border-t border-b border-white/10 py-3">
              {active.microSteps.map((m) => (
                <div key={m.num} className="p-1.5">
                  <span className="text-xs font-mono font-bold text-white block">
                    {m.num}
                  </span>
                  <span className="text-[8px] font-mono uppercase tracking-wider text-white/50 block mt-0.5">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Key Focus */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#DE3D1C] font-bold block">
                KEY FOCUS & METHODOLOGY
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {active.keyFocus.map((f, i) => {
                  const IconC = f.icon;
                  return (
                    <div key={i} className="p-2 border border-white/15 bg-white/[0.02] flex items-center gap-2">
                      <IconC className="w-3.5 h-3.5 text-[#DE3D1C] shrink-0" />
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/90">
                        {f.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Deliverable */}
            <div className="pt-4 border-t border-white/10 text-xs font-mono space-y-1">
              <span className="text-white/40 uppercase text-[10px] block">
                DELIVERABLE MILESTONE
              </span>
              <span className="text-white/90">
                {active.output}
              </span>
            </div>
          </div>
        </div>

        {/* Section Bottom Footer line */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t border-white/15 text-xs font-mono text-[#F3F0E9]/50">
          <div>STANDARD TIMELINE: 2–6 WEEKS FROM DISCOVERY TO LAUNCH</div>
          <div className="text-[#DE3D1C] font-bold uppercase tracking-wider">100% TRANSPARENT SPRINTS</div>
        </div>
      </div>
    </section>
  );
}