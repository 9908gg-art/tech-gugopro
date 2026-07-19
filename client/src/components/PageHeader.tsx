import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <div className="space-y-4 py-12 text-center">
      <h1 className="text-4xl font-bold text-foreground md:text-5xl">{title}</h1>
      {subtitle && <p className="text-lg text-muted-foreground md:text-xl">{subtitle}</p>}
      {children}
    </div>
  );
}
