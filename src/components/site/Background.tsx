import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

/** Ambient brand background: grid, animated blobs, cursor glow, scroll progress. */
export function Background() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.2 });
  const [fine, setFine] = useState(false);

  useEffect(() => {
    setFine(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!fine) return;
    const onMove = (e: PointerEvent) => {
      setPointer({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [fine]);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[image:var(--gradient-brand)]"
      />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_50%_0%,#000_10%,transparent_75%)]" />
        <div
          className="blob left-[-10%] top-[-10%] h-[42rem] w-[42rem]"
          style={{ background: "var(--color-primary)" }}
        />
        <div
          className="blob right-[-15%] top-[20%] h-[36rem] w-[36rem] [animation-delay:-6s]"
          style={{ background: "var(--color-secondary)", opacity: 0.22 }}
        />
        <div
          className="blob bottom-[-15%] left-[25%] h-[38rem] w-[38rem] [animation-delay:-12s]"
          style={{ background: "var(--color-accent)", opacity: 0.25 }}
        />
        {fine ? (
          <div
            className="absolute h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 transition-transform duration-500 ease-out"
            style={{
              left: `${pointer.x * 100}%`,
              top: `${pointer.y * 100}%`,
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 22%, transparent) 0%, transparent 65%)",
            }}
          />
        ) : null}
      </div>
    </>
  );
}
