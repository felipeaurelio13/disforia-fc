"use client";

import { useState } from 'react';
import { curveCatmullRom, line } from 'd3-shape';
import { Film, Flag, LucideIcon, Newspaper, PlaneTakeoff, Trophy } from 'lucide-react';

type RoadmapMilestone = {
  year: string;
  title: string;
  detail: string;
};

type AchievementsRoadmapProps = {
  lang: 'es' | 'en';
  milestones: RoadmapMilestone[];
};

type Point = {
  x: number;
  y: number;
};

const TRANS_FLAG_COLORS = ['#5BCEFA', '#F5A9B8', '#FFFFFF', '#F5A9B8', '#5BCEFA'] as const;
const ROADMAP_ICONS: LucideIcon[] = [Flag, Newspaper, Film, Trophy, PlaneTakeoff];

function buildSegmentPath(from: Point, to: Point, handleDistance: number) {
  return `M ${from.x} ${from.y} C ${from.x + handleDistance} ${from.y}, ${to.x - handleDistance} ${to.y}, ${to.x} ${to.y}`;
}

export function AchievementsRoadmap({ lang, milestones }: AchievementsRoadmapProps) {
  const visibleMilestones = milestones.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!visibleMilestones.length) return null;

  const viewWidth = 1200;
  const viewHeight = 420;
  const topY = 120;
  const bottomY = 300;
  const startX = 84;
  const endX = 1116;

  const step = visibleMilestones.length > 1 ? (endX - startX) / (visibleMilestones.length - 1) : 0;

  const points = visibleMilestones.map((_, index) => ({
    x: startX + step * index,
    y: index % 2 === 0 ? topY : bottomY,
  }));

  const backbonePath =
    line<Point>()
      .x((point) => point.x)
      .y((point) => point.y)
      .curve(curveCatmullRom.alpha(0.8))(points) ?? '';

  return (
    <div className="overflow-hidden rounded-[28px] border border-brand-lavender/25 bg-[radial-gradient(circle_at_top_right,rgba(137,194,227,0.26),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,244,248,0.96))] p-4 sm:p-6 md:p-7">
      <div className="grid grid-cols-5 overflow-hidden rounded-full border border-brand-softGray bg-white">
        {TRANS_FLAG_COLORS.map((color) => (
          <span key={color} className="h-2.5" style={{ backgroundColor: color }} aria-hidden="true" />
        ))}
      </div>

      <div className="mt-6 hidden md:block">
        <svg
          className="w-full"
          viewBox={`0 0 ${viewWidth} ${viewHeight}`}
          role="img"
          aria-label={lang === 'es' ? 'Infografia del recorrido de logros de Disforia FC' : 'Disforia FC achievements roadmap infographic'}
        >
          <path d={backbonePath} fill="none" stroke="rgba(0,0,0,0.09)" strokeWidth="80" strokeLinecap="round" />

          {points.slice(0, -1).map((point, index) => {
            const next = points[index + 1];
            const isActiveSegment = activeIndex === index || activeIndex === index + 1;
            return (
              <path
                key={`${point.x}-${next.x}`}
                d={buildSegmentPath(point, next, step * 0.45)}
                fill="none"
                stroke={TRANS_FLAG_COLORS[index % TRANS_FLAG_COLORS.length]}
                strokeWidth={isActiveSegment ? 66 : 60}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={isActiveSegment ? 1 : 0.62}
                style={{ transition: 'opacity 220ms ease-out, stroke-width 220ms ease-out' }}
              />
            );
          })}

          {points.map((point, index) => {
            const Icon = ROADMAP_ICONS[index % ROADMAP_ICONS.length];
            const markerY = point.y - (index % 2 === 0 ? 78 : 104);
            const markerColor = TRANS_FLAG_COLORS[index % TRANS_FLAG_COLORS.length];
            const isActive = activeIndex === index;
            return (
              <g key={`${point.x}-marker`}>
                <line
                  x1={point.x}
                  y1={point.y}
                  x2={point.x}
                  y2={markerY}
                  stroke={isActive ? 'rgba(0,0,0,0.36)' : 'rgba(0,0,0,0.2)'}
                  strokeWidth={isActive ? 3.8 : 3}
                  strokeLinecap="round"
                  style={{ transition: 'stroke 220ms ease-out, stroke-width 220ms ease-out' }}
                />
                <circle
                  cx={point.x}
                  cy={markerY}
                  r={isActive ? 29 : 25}
                  fill="white"
                  stroke={markerColor}
                  strokeWidth={isActive ? 7 : 6}
                  style={{ transition: 'r 220ms ease-out, stroke-width 220ms ease-out' }}
                />
                <Icon x={point.x - (isActive ? 11 : 10)} y={markerY - (isActive ? 11 : 10)} size={isActive ? 22 : 20} color="#000000" strokeWidth={2.2} />
                <text
                  x={point.x}
                  y={markerY - 36}
                  textAnchor="middle"
                  fill={isActive ? '#000000' : 'rgba(0,0,0,0.58)'}
                  fontSize={isActive ? 17 : 14}
                  fontWeight={isActive ? 700 : 600}
                  style={{ transition: 'fill 220ms ease-out, font-size 220ms ease-out' }}
                >
                  {visibleMilestones[index]?.year}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <ol className="mt-5 grid gap-3 md:mt-6 md:grid-cols-2 xl:grid-cols-5">
        {visibleMilestones.map((milestone, index) => {
          const Icon = ROADMAP_ICONS[index % ROADMAP_ICONS.length];
          const markerColor = TRANS_FLAG_COLORS[index % TRANS_FLAG_COLORS.length];
          const isActive = activeIndex === index;
          return (
            <li
              key={`${milestone.year}-${milestone.title}`}
              className={`relative overflow-hidden rounded-2xl border bg-white/96 shadow-soft transition-all duration-200 ease-out ${
                isActive ? 'border-brand-lavender/55 ring-2 ring-brand-lavender/20' : 'border-brand-softGray/90'
              }`}
            >
              <button
                type="button"
                className="w-full p-4 text-left"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                aria-label={`${milestone.year} ${milestone.title}`}
              >
                <div className="absolute left-0 top-0 h-full w-1.5 transition-all duration-200 ease-out" style={{ backgroundColor: markerColor, opacity: isActive ? 1 : 0.78 }} aria-hidden="true" />
                <div className="flex items-center gap-2.5 pl-1">
                  <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full border text-brand-charcoal transition-all duration-200 ease-out ${isActive ? 'border-brand-lavender/50 bg-brand-lavender/10' : 'border-brand-softGray bg-brand-bg'}`}>
                    <Icon className="h-4 w-4" strokeWidth={2.3} />
                  </span>
                  <p className={`font-display text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ease-out ${isActive ? 'text-brand-charcoal' : 'text-brand-lavender'}`}>{milestone.year}</p>
                </div>
                <p className="mt-3 pl-1 font-display text-[1.02rem] font-semibold leading-tight text-brand-charcoal">{milestone.title}</p>
                <p className="mt-2 pl-1 text-sm leading-relaxed text-brand-text/78">{milestone.detail}</p>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
