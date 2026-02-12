import { Search, MessageSquare, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Import the provided cybersecurity image (adjust path/name as needed)
import cyberSecurityBg from "@/assets/cyber-security-gear-lock-pattern.jpg";

const services = [
  {
    icon: Search,
    title: "Penetration Testing",
    points: [
      "Conducting deep reconnaissance to uncover hidden vulnerabilities within IT infrastructures.",
      "Executing simulated attacks that mimic real-world adversaries, exposing system weaknesses.",
    ],
  },
  {
    icon: MessageSquare,
    title: "Security Consulting",
    points: [
      "Crafting tactical recommendations to bolster cybersecurity defenses.",
      "Assisting in the deployment of fortified security strategies and solutions.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Defense Mechanisms",
    points: [
      "Maintaining a vigilant watch against malicious incursions with continuous monitoring and rapid countermeasures.",
      "Deploying advanced defense technologies to detect and repel cyber threats with surgical accuracy.",
    ],
  },
];

const ServicesSection = () => (
  <section
    id="services"
    className="relative py-20 overflow-hidden"
    style={{
      backgroundImage: `url(${cyberSecurityBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Dark semi-transparent overlay – ensures perfect readability */}
    <div
      className="absolute inset-0"
      style={{
        backgroundColor: "rgba(15, 23, 42, 0.72)", // dark overlay – adjust 0.72 for stronger/weaker
        backdropFilter: "blur(3px)", // light blur for premium feel
      }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 drop-shadow-md">
        Our Services
      </h2>
      <p className="text-center text-gray-200 max-w-2xl mx-auto mb-12">
        Comprehensive cybersecurity solutions tailored to your needs.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <Card
            key={s.title}
            className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-md bg-white/90 flex flex-col"
          >
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                <s.icon className="w-7 h-7 text-blue-700" />
              </div>
              <CardTitle className="text-xl text-gray-900">{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ul className="space-y-3 text-gray-700 text-sm leading-relaxed flex-1">
                {s.points.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors inline-block"
              >
                Learn More →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;