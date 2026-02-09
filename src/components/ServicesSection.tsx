import { ShieldCheck, Cpu, Monitor } from "lucide-react";

const services = [
  { title: "Managed Security", desc: "24/7 monitoring and response", icon: ShieldCheck },
  { title: "Vulnerability Assessment", desc: "Regular scans and remediation", icon: Cpu },
  { title: "Security Consulting", desc: "Strategy, architecture & training", icon: Monitor },
];

export default function Services() {
  return (
    <section
      aria-label="Services"
      className="py-16 bg-gradient-to-b from-[hsl(var(--secondary)/0.14)] to-[hsl(var(--secondary)/0.02)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-8 font-[Cinzel] text-secondary-foreground">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article key={s.title} className="p-6 rounded-lg shadow-sm bg-secondary text-secondary-foreground">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-md bg-secondary-foreground/10">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-medium">{s.title}</h3>
                </div>
                <p className="text-sm text-secondary-foreground/80">{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}