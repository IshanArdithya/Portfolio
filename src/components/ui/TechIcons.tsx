import Image from "next/image";
import { techIcons } from "@/constants/constants";
import { useTheme } from "@/context/ThemeContext";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export const TechIcon = ({ type }: { type: string }) => {
  const { theme } = useTheme();
  const { image, name, description } = techIcons[type] || {};

  return image ? (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full border ${theme.borderMuted} p-1`}
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
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={image} alt={name} width={80} height={80} />
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ) : null;
};
