"use client";

import { KeyboardEvent, useEffect, useId, useMemo, useRef, useState } from 'react';
import { scalePoint } from 'd3-scale';
import { curveCatmullRom, line } from 'd3-shape';
import { Film, Flag, LucideIcon, Newspaper, Trophy, Users } from 'lucide-react';

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

type MilestoneMeta = RoadmapMilestone & {
  index: number;
  yearOrder: number;
  yearTotal: number;
  yearLabel: string;
  markerColor: string;
  trackColor: string;
};

const TRANS_FLAG_COLORS = ['#5BCEFA', '#F5A9B8', '#FFFFFF', '#F5A9B8', '#5BCEFA'] as const;
const ROADMAP_ICONS: LucideIcon[] = [Flag, Film, Users, Trophy, Newspaper];
const YEAR_PILL_MIN_WIDTH = 58;
const YEAR_PILL_HEIGHT = 24;

function buildSegmentPath(from: Point, to: Point, handleDistance: number) {
  return `M ${from.x} ${from.y} C ${from.x + handleDistance} ${from.y}, ${to.x - handleDistance} ${to.y}, ${to.x} ${to.y}`;
}

function getActiveAccent(color: string) {
  return color === '#FFFFFF' ? '#835CA3' : color;
}

function getTrackColor(color: string) {
  return color === '#FFFFFF' ? '#E8DFEE' : color;
}

export function AchievementsRoadmap({ lang, milestones }: AchievementsRoadmapProps) {
  const visibleMilestones = milestones;
  const [activeIndex, setActiveIndex] = useState(0);
  const instanceId = useId().replace(/:/g, '');
  const shadowFilterId = `roadmapSoftShadow-${instanceId}`;
  const timelineViewportRef = useRef<HTMLDivElement>(null);
  const cardsViewportRef = useRef<HTMLOListElement>(null);

  const { milestonesMeta, points, backbonePath, handleDistance, viewWidth, viewHeight } = useMemo(() => {
    const timelineHeight = 486;
    const topY = 162;
    const bottomY = 332;
    const sidePadding = 94;
    const timelineWidth = Math.max(1200, visibleMilestones.length * 214);
    const startX = sidePadding;
    const endX = timelineWidth - sidePadding;

    const uniqueYears = Array.from(new Set(visibleMilestones.map((milestone) => milestone.year)));
    const yearScale = scalePoint<string>().domain(uniqueYears).range([startX, endX]).padding(0.46);

    const yearCounts: Record<string, number> = {};
    for (const milestone of visibleMilestones) {
      yearCounts[milestone.year] = (yearCounts[milestone.year] ?? 0) + 1;
    }

    const yearSeen: Record<string, number> = {};
    const milestonesMeta: MilestoneMeta[] = visibleMilestones.map((milestone, index) => {
      const yearOrder = (yearSeen[milestone.year] ?? 0) + 1;
      yearSeen[milestone.year] = yearOrder;
      const yearTotal = yearCounts[milestone.year] ?? 1;
      const markerColor = TRANS_FLAG_COLORS[uniqueYears.indexOf(milestone.year) % TRANS_FLAG_COLORS.length];
      const yearLabel = yearTotal > 1 ? `${milestone.year} · ${yearOrder}/${yearTotal}` : milestone.year;

      return {
        ...milestone,
        index,
        yearOrder,
        yearTotal,
        yearLabel,
        markerColor,
        trackColor: getTrackColor(markerColor),
      };
    });

    const clusterSpacing = Math.max(34, Math.min(68, 300 / Math.max(2, uniqueYears.length)));

    const points: Point[] = milestonesMeta.map((milestone, index) => {
      const baseX = yearScale(milestone.year) ?? startX;
      const clusterOffset = milestone.yearTotal > 1
        ? (milestone.yearOrder - (milestone.yearTotal + 1) / 2) * clusterSpacing
        : 0;

      return {
        x: baseX + clusterOffset,
        y: index % 2 === 0 ? topY : bottomY,
      };
    });

    const nominalStep = points.length > 1 ? (endX - startX) / (points.length - 1) : 0;
    const handleDistance = Math.max(34, Math.min(96, nominalStep * 0.45));

    const backbonePath =
      line<Point>()
        .x((point) => point.x)
        .y((point) => point.y)
        .curve(curveCatmullRom.alpha(0.8))(points) ?? '';

    return {
      milestonesMeta,
      points,
      backbonePath,
      handleDistance,
      viewWidth: timelineWidth,
      viewHeight: timelineHeight,
    };
  }, [visibleMilestones]);

  useEffect(() => {
    if (activeIndex <= milestonesMeta.length - 1) return;
    setActiveIndex(0);
  }, [activeIndex, milestonesMeta.length]);

  useEffect(() => {
    const timelineViewport = timelineViewportRef.current;
    if (timelineViewport && points[activeIndex]) {
      const maxTimelineScroll = timelineViewport.scrollWidth - timelineViewport.clientWidth;
      if (maxTimelineScroll > 0) {
        const target = Math.min(Math.max(points[activeIndex].x - timelineViewport.clientWidth / 2, 0), maxTimelineScroll);
        timelineViewport.scrollTo({ left: target, behavior: 'smooth' });
      }
    }

    const cardsViewport = cardsViewportRef.current;
    if (!cardsViewport) return;

    const activeCard = cardsViewport.querySelector<HTMLElement>(`[data-roadmap-card-index="${activeIndex}"]`);
    if (!activeCard) return;

    const cardLeft = activeCard.offsetLeft;
    const cardRight = cardLeft + activeCard.offsetWidth;
    const visibleLeft = cardsViewport.scrollLeft;
    const visibleRight = visibleLeft + cardsViewport.clientWidth;

    if (cardLeft < visibleLeft || cardRight > visibleRight) {
      const target = cardLeft - (cardsViewport.clientWidth - activeCard.offsetWidth) / 2;
      const maxCardsScroll = cardsViewport.scrollWidth - cardsViewport.clientWidth;
      const clampedTarget = Math.min(Math.max(target, 0), maxCardsScroll);
      cardsViewport.scrollTo({ left: clampedTarget, behavior: 'smooth' });
    }
  }, [activeIndex, points]);

  if (!milestonesMeta.length) return null;

  const activeMilestone = milestonesMeta[activeIndex];
  const ActiveIcon = ROADMAP_ICONS[activeIndex % ROADMAP_ICONS.length];
  const activeColor = activeMilestone.markerColor;
  const activeAccent = getActiveAccent(activeColor);

  function handleMarkerKeyDown(event: KeyboardEvent<SVGGElement>, index: number) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    setActiveIndex(index);
  }

  return (
    <div className="overflow-hidden rounded-[28px] border border-brand-lavender/25 bg-[radial-gradient(circle_at_top_right,rgba(137,194,227,0.26),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,244,248,0.96))] p-4 sm:p-6 md:p-7">
      <div className="grid overflow-hidden rounded-full border border-brand-softGray bg-white" style={{ gridTemplateColumns: `repeat(${milestonesMeta.length}, minmax(0, 1fr))` }}>
        {milestonesMeta.map((milestone) => (
          <span key={`stripe-${milestone.index}`} className="h-2.5" style={{ backgroundColor: milestone.markerColor }} aria-hidden="true" />
        ))}
      </div>

      <div className="mt-4 md:hidden">
        <div
          role="tablist"
          aria-label={lang === 'es' ? 'Hitos por año' : 'Milestones by year'}
          className="-mx-1 flex items-stretch gap-2 overflow-x-auto px-1 pb-1"
        >
          {milestonesMeta.map((milestone, index) => {
            const Icon = ROADMAP_ICONS[milestone.index % ROADMAP_ICONS.length];
            const isActive = activeIndex === index;
            const tabAccent = getActiveAccent(milestone.markerColor);
            return (
              <button
                key={`mobile-tab-${milestone.index}`}
                type="button"
                role="tab"
                id={`roadmap-tab-${instanceId}-${index}`}
                aria-controls={`roadmap-panel-${instanceId}-${index}`}
                aria-selected={isActive}
                className="flex min-w-[88px] flex-col items-center gap-1 rounded-xl border bg-white px-3 py-2 text-center transition-all duration-200 ease-out"
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                style={isActive ? { borderColor: tabAccent, boxShadow: `0 0 0 2px ${tabAccent}40` } : undefined}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border" style={{ borderColor: tabAccent, backgroundColor: isActive ? `${tabAccent}1A` : '#FFFFFF' }}>
                  <Icon className="h-4 w-4 text-brand-charcoal" strokeWidth={2.2} />
                </span>
                <span className="font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-charcoal">{milestone.yearLabel}</span>
              </button>
            );
          })}
        </div>

        <article
          role="tabpanel"
          id={`roadmap-panel-${instanceId}-${activeIndex}`}
          aria-labelledby={`roadmap-tab-${instanceId}-${activeIndex}`}
          aria-live="polite"
          className="relative mt-3 overflow-hidden rounded-2xl border bg-white/98 p-4 shadow-soft"
          style={{ borderColor: activeAccent, boxShadow: `0 0 0 2px ${activeAccent}33` }}
        >
          <div className="absolute left-0 top-0 h-full w-1.5" style={{ backgroundColor: activeColor }} aria-hidden="true" />
          <div className="relative flex items-center gap-2.5 pl-1">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand-softGray bg-brand-bg text-brand-charcoal">
              <ActiveIcon className="h-4 w-4" strokeWidth={2.3} />
            </span>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-brand-charcoal">{activeMilestone.yearLabel}</p>
          </div>
          <p className="relative mt-3 pl-1 font-display text-[1.02rem] font-semibold leading-tight text-brand-charcoal">{activeMilestone.title}</p>
          <p className="relative mt-2 pl-1 text-sm leading-relaxed text-brand-text/78">{activeMilestone.detail}</p>
        </article>
      </div>

      <div className="mt-6 hidden md:block">
        <div ref={timelineViewportRef} className="-mx-1 overflow-x-auto px-1 pb-2">
          <svg
            className="h-auto w-full"
            style={{ minWidth: `${Math.max(1120, milestonesMeta.length * 182)}px` }}
            viewBox={`0 0 ${viewWidth} ${viewHeight}`}
            role="img"
            aria-label={lang === 'es' ? 'Infografia del recorrido de logros de Disforia FC' : 'Disforia FC achievements roadmap infographic'}
          >
            <defs>
              <filter id={shadowFilterId} x="-20%" y="-25%" width="140%" height="170%">
                <feDropShadow dx="0" dy="10" stdDeviation="8" floodOpacity="0.14" />
              </filter>
            </defs>

            <path d={backbonePath} fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="84" strokeLinecap="round" />

            {points.slice(0, -1).map((point, index) => {
              const next = points[index + 1];
              const segmentColor = milestonesMeta[index]?.trackColor ?? TRANS_FLAG_COLORS[index % TRANS_FLAG_COLORS.length];
              const isActiveSegment = activeIndex === index || activeIndex === index + 1;
              return (
                <g key={`${point.x}-${next.x}`} filter={`url(#${shadowFilterId})`}>
                  <path
                    d={buildSegmentPath(point, next, handleDistance)}
                    fill="none"
                    stroke={segmentColor}
                    strokeWidth={isActiveSegment ? 66 : 58}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity={isActiveSegment ? 1 : 0.64}
                    style={{ transition: 'opacity 220ms ease-out, stroke-width 220ms ease-out' }}
                  />
                  {isActiveSegment ? (
                    <path
                      d={buildSegmentPath(point, next, handleDistance)}
                      fill="none"
                      stroke="rgba(255,255,255,0.34)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : null}
                </g>
              );
            })}

            {points.map((point, index) => {
              const milestone = milestonesMeta[index];
              const Icon = ROADMAP_ICONS[index % ROADMAP_ICONS.length];
              const markerY = point.y - (index % 2 === 0 ? 78 : 104);
              const isActive = activeIndex === index;
              const markerAccent = getActiveAccent(milestone.markerColor);
              const yearPillY = index % 2 === 0 ? markerY + 34 : markerY - 58;
              const yearPillWidth = Math.max(YEAR_PILL_MIN_WIDTH, 20 + milestone.yearLabel.length * 7);

              return (
                <g
                  key={`${point.x}-marker`}
                  role="button"
                  tabIndex={0}
                  aria-label={`${milestone.year} ${milestone.title}`.trim()}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleMarkerKeyDown(event, index)}
                  style={{ cursor: 'pointer' }}
                >
                  <title>{`${milestone.year} · ${milestone.title}`}</title>
                  {isActive ? (
                    <>
                      <line x1={point.x} y1={markerY + 36} x2={point.x} y2={viewHeight - 8} stroke={markerAccent} strokeWidth={4.5} strokeLinecap="round" opacity={0.44} />
                      <circle cx={point.x} cy={viewHeight - 8} r={6.8} fill={markerAccent} opacity={0.72} />
                    </>
                  ) : null}
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
                    stroke={markerAccent}
                    strokeWidth={isActive ? 7 : 6}
                    style={{ transition: 'r 220ms ease-out, stroke-width 220ms ease-out' }}
                  />
                  <Icon x={point.x - (isActive ? 11 : 10)} y={markerY - (isActive ? 11 : 10)} size={isActive ? 22 : 20} color="#000000" strokeWidth={2.2} />
                  <rect
                    x={point.x - yearPillWidth / 2}
                    y={yearPillY}
                    width={yearPillWidth}
                    height={YEAR_PILL_HEIGHT}
                    rx={YEAR_PILL_HEIGHT / 2}
                    fill="rgba(255,255,255,0.92)"
                    stroke={isActive ? markerAccent : 'rgba(0,0,0,0.09)'}
                    strokeWidth={isActive ? 1.8 : 1}
                  />
                  <text
                    x={point.x}
                    y={yearPillY + 16}
                    textAnchor="middle"
                    fill={isActive ? '#000000' : 'rgba(0,0,0,0.58)'}
                    fontSize={isActive ? 13.8 : 12.8}
                    fontWeight={isActive ? 700 : 600}
                    style={{ transition: 'fill 220ms ease-out' }}
                  >
                    {milestone.yearLabel}
                  </text>
                  <circle cx={point.x} cy={markerY} r={37} fill="transparent" />
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <ol ref={cardsViewportRef} className="mt-5 hidden gap-3 md:mt-6 md:flex md:overflow-x-auto md:pb-2">
        {milestonesMeta.map((milestone, index) => {
          const Icon = ROADMAP_ICONS[index % ROADMAP_ICONS.length];
          const isActive = activeIndex === index;
          const cardAccent = getActiveAccent(milestone.markerColor);
          return (
            <li
              key={`${milestone.year}-${milestone.title}`}
              data-roadmap-card-index={index}
              className={`relative min-w-[248px] flex-1 overflow-hidden rounded-2xl border bg-white/96 shadow-soft transition-all duration-200 ease-out ${
                isActive ? 'border-transparent' : 'border-brand-softGray/90'
              }`}
              style={isActive ? { borderColor: cardAccent, boxShadow: `0 0 0 2px ${cardAccent}40` } : undefined}
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
                <div className="absolute left-0 top-0 h-full w-1.5 transition-all duration-200 ease-out" style={{ backgroundColor: milestone.markerColor, opacity: isActive ? 1 : 0.78 }} aria-hidden="true" />
                <div className="flex items-center gap-2.5 pl-1">
                  <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full border text-brand-charcoal transition-all duration-200 ease-out ${isActive ? 'border-brand-lavender/50 bg-brand-lavender/10' : 'border-brand-softGray bg-brand-bg'}`}>
                    <Icon className="h-4 w-4" strokeWidth={2.3} />
                  </span>
                  <p className={`font-display text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ease-out ${isActive ? 'text-brand-charcoal' : 'text-brand-lavender'}`}>{milestone.yearLabel}</p>
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
