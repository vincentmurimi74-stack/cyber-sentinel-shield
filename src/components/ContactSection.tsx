import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly.",
    });
    setForm({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden theme-light bg-background text-foreground"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/80" />
        <div className="absolute -top-24 left-[-10%] h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-24 right-[-10%] h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Contact Us
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-card/50 backdrop-blur-md border border-border/70 p-8 rounded-lg shadow-lg relative z-10"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Your Name
              </label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe"
                required
                maxLength={100}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Email Address
              </label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="john@example.com"
                required
                maxLength={255}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Service Required
              </label>
              <Input
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                placeholder="e.g. Penetration Testing"
                required
                maxLength={200}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Message
              </label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your needs..."
                rows={4}
                required
                maxLength={1000}
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-lg bg-[#f8da01] text-accent-foreground hover:bg-[#f8da01]/90 font-semibold tracking-wider capitalize"
            >
              Send Message
            </Button>
          </form>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg min-h-[400px] border border-border/70 bg-card/30 backdrop-blur-sm relative z-10">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8215234823456!2d29.7545!3d-1.9403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xa3c1b7f8e3e0a29e!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
