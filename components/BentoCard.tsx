import React, { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  headerAction?: ReactNode;
  noPadding?: boolean;
}

const BentoCard: React.FC<BentoCardProps> = ({ 
  children, 
  className = "", 
  title,
  subtitle,
  headerAction,
  noPadding = false
}) => {
  return (
    <div 
      className={`
        bento-card relative overflow-hidden rounded-3xl 
        bg-zinc-900/50 border border-zinc-800 
        backdrop-blur-sm flex flex-col
        ${noPadding ? '' : 'p-6'}
        ${className}
      `}
    >
      {(title || headerAction) && (
        <div className={`flex justify-between items-start mb-4 z-10 ${noPadding ? 'p-6 pb-0' : ''}`}>
          <div>
            {title && <h3 className="text-zinc-100 font-bold text-lg leading-tight">{title}</h3>}
            {subtitle && <p className="text-zinc-500 text-sm mt-1">{subtitle}</p>}
          </div>
          {headerAction}
        </div>
      )}
      <div className={`flex-1 z-10 relative ${noPadding ? '' : ''}`}>
        {children}
      </div>
      
      {/* Decorative gradient background bloom */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
    </div>
  );
};

export default BentoCard;