import { NeonBadge } from '@/components/ui';

interface CardBadgesProps {
  isNew?: boolean;
  isLimited?: boolean;
  isSoldOut?: boolean;
}

export function CardBadges({ isNew, isLimited, isSoldOut }: CardBadgesProps) {
  if (!isNew && !isLimited && !isSoldOut) return null;

  return (
    <div className="absolute top-3 left-3 z-20 flex flex-col gap-1">
      {isNew && <NeonBadge variant="cyan">New</NeonBadge>}
      {isLimited && <NeonBadge variant="purple">Limited</NeonBadge>}
      {isSoldOut && <NeonBadge variant="pink">Sold Out</NeonBadge>}
    </div>
  );
}
