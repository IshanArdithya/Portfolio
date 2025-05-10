import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

export const AnimatedCircleGridPattern = () => (
  <AnimatedGridPattern
    width={75}
    height={75}
    maxOpacity={0.3}
    duration={0.9}
    strokeDasharray={0}
    className={cn(
      "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
      "inset-x-0 inset-y-[-40%] h-[200%] skew-y-0 skew-x-0"
    )}
  />
);

export const AnimatedCircleFooterGridPattern = () => (
  <AnimatedGridPattern
    width={75}
    height={75}
    maxOpacity={0.3}
    duration={0.9}
    strokeDasharray={0}
    className={cn(
      "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
      "inset-x-0 inset-y-[-15%] h-[200%] skew-y-0 skew-x-0"
    )}
  />
);
