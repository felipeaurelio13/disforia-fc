'use client';

import { useState, useCallback, useEffect } from 'react';
import { SafeImage } from '@/components/ui/SafeImage';
import type { GalleryItem, Locale } from '@/content/site';

export function BranchGalleryModal({
  items,
  lang,
  triggerContent,
}: {
  items: GalleryItem[];
  lang: Locale;
  triggerContent: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, closeModal, goNext, goPrev]);

  const current = items[currentIndex];

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        onClick={openModal}
        className="group relative inline-flex items-center justify-center transition-transform hover:scale-105"
      >
        {triggerContent}
      </button>

      {/* Modal */}
      {isOpen && current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt[lang]}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/90 backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label={lang === 'es' ? 'Cerrar' : 'Close'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white/90 backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label={lang === 'es' ? 'Anterior' : 'Previous'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white/90 backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label={lang === 'es' ? 'Siguiente' : 'Next'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="relative mx-auto max-h-[85vh] w-full max-w-[90vw] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <SafeImage
              src={current.src}
              alt={current.alt[lang]}
              width={1024}
              height={683}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
              sizes="90vw"
            />
            <div className="mt-4 flex flex-col items-center justify-between gap-2 text-sm text-white/70 sm:flex-row">
              <span>{current.credit}</span>
              <span className="tabular-nums">
                {currentIndex + 1} / {items.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
