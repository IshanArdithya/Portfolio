import Image from "next/image";
import { techIcons } from "@/constants/constants";
import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export const TechIcon = ({
  type,
  onOpenChange,
}: {
  type: string;
  onOpenChange?: (open: boolean) => void;
}) => {
  const { theme } = useTheme();
  const { image, name, description } = techIcons[type] || {};
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [touchTimer, setTouchTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleTouchStart = () => {
    if (!isMobile) return;
    const timer = setTimeout(() => {
      setIsActive(true);
      if (onOpenChange) onOpenChange(true);
    }, 500);
    setTouchTimer(timer);
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    if (touchTimer) clearTimeout(touchTimer);
    setIsActive(false);
    if (onOpenChange) onOpenChange(false);
  };

  return image ? (
    <HoverCard
      openDelay={100}
      closeDelay={100}
      open={isActive}
      onOpenChange={(open) => {
        if (!isMobile) {
          setIsActive(open);
          if (onOpenChange) onOpenChange(open);
        }
      }}
    >
      <HoverCardTrigger asChild>
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full border ${theme.borderMuted} p-1 select-none`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          <Image
            src={image}
            alt={name}
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        className={`w-80 ${theme.navBackground} ${theme.borderMuted} ${theme.text} select-none`}
      >
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={image} alt={name} width={80} height={80} />
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className={`text-sm ${theme.textMuted}`}>{description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ) : null;
};
