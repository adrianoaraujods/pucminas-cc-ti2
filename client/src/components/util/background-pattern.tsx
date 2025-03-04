import { cn } from "@/lib/utils";

function BackgroundPattern() {
  return (
    <>
      <div
        className={cn(
          "absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_-33%_50%,rgba(50,120,200,0.3),rgba(255,255,255,0))]"
        )}
      />
      <div
        className={cn(
          "absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_100%_-33%,rgba(50,120,200,0.3),rgba(255,255,255,0))]"
        )}
      />
      <div
        className={cn(
          "absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_100%_130%,rgba(50,120,200,0.3),rgba(255,255,255,0))]"
        )}
      />
    </>
  );
}

export { BackgroundPattern };
