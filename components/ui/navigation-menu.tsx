'use client';

import Link from 'next/link';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

type ClassNameProps = { className?: string };

function mergeClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function navigationMenuTriggerStyle() {
  return 'inline-flex min-h-12 items-center justify-center rounded-full px-3 text-sm font-medium text-brand-secondary/86 transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent';
}

export function NavigationMenu({ children, className }: PropsWithChildren<ClassNameProps>) {
  return <nav aria-label="Main navigation" className={mergeClasses('w-full', className)}>{children}</nav>;
}

export function NavigationMenuList({ children, className }: PropsWithChildren<ClassNameProps>) {
  return <ul className={mergeClasses('flex items-center gap-2', className)}>{children}</ul>;
}

export function NavigationMenuItem({ children, className }: PropsWithChildren<ClassNameProps>) {
  return <li className={className}>{children}</li>;
}

export function NavigationMenuLink({ className, href, children, ...props }: ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link href={href} className={mergeClasses(navigationMenuTriggerStyle(), className)} {...props}>
      {children}
    </Link>
  );
}

export function NavigationMenuTrigger({ children, className }: PropsWithChildren<ClassNameProps>) {
  return <span className={mergeClasses(navigationMenuTriggerStyle(), className)}>{children}</span>;
}

export function NavigationMenuContent({ children, className }: PropsWithChildren<ClassNameProps>) {
  return <div className={mergeClasses('rounded-2xl border border-brand-secondary/12 bg-brand-surface p-2 shadow-soft', className)}>{children}</div>;
}
