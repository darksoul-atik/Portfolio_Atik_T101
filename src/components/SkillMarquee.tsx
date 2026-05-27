import { skillCloud } from "@/data/portfolio";

export function SkillMarquee() {
  const skills = [...skillCloud, ...skillCloud];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] py-5 shadow-card backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee gap-3 px-3 hover:[animation-play-state:paused]">
        {skills.map((skill, index) => (
          <span key={`${skill}-${index}`} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
