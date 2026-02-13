import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cyber1 from "@/assets/cyber1.jpg";
import cyber2 from "@/assets/cyber2.jpg";
import cyber3 from "@/assets/cyber3.jpg";
import cyber4 from "@/assets/cyber4.jpg";

const slides = [
  {
    img: cyber1,
    title: "Defending the Digital Realm",
    sub: "Elite cyber warriors protecting your infrastructure",
  },
  {
    img: cyber2,
    title: "Impenetrable Shields",
    sub: "Advanced defense mechanisms against all threats",
  },
  {
    img: cyber3,
    title: "Penetration Testing",
    sub: "Uncovering vulnerabilities before adversaries do",
  },
  {
    img: cyber4,
    title: "Global Cyber Defense",
    sub: "Protecting businesses across continents",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % slides.length),
    [],
  );
  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-background text-foreground"
    >
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.img}
            alt={s.title}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/55 to-background/85" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 560px at 70% 30%, hsl(var(--primary) / 0.22), transparent 62%), radial-gradient(700px 480px at 25% 78%, hsl(var(--accent) / 0.10), transparent 60%)",
            }}
          />
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 gap-6 md:gap-8 lg:gap-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-[0.1em] ">
          {slides[current].title}
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
          {slides[current].sub}
        </p>
        <a
          href="#contact"
          className="bg-accent text-accent-foreground rounded-lg px-8 py-3 font-semibold tracking-wider uppercase hover:bg-accent/90 transition-colors"
        >
          Contact Us
        </a>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-secondary/50 hover:bg-secondary/80 text-foreground p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-secondary/50 hover:bg-secondary/80 text-foreground p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? "bg-accent" : "bg-foreground/35"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
