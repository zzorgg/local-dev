import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  uniColor?: boolean;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img src="/code.png" alt="logo" className="h-6 w-6" />
      <span className="text-foreground font-medium text-base">local dev</span>
    </div>
  );
};
