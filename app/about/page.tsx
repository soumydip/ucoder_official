"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Lock, Zap, DollarSign, Github, Twitter, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5},
  }),
};

const team = [
  {
    initials: "SM",
    avatar: "/team/soumyadip.jpeg",
    name: "Soumyadip Maity",
    role: "Founder & Core Developer",
    bio: "Final-year CS student from West Bengal. Building UCoder Insights solo — from architecture to deployment.",
    github: "https://github.com/soumydip",
    twitter: "https://x.com/soumyadip2maity",
    portfolio: "https://soumyadip.ucoder.in?utm_source=ucoder.in&utm_medium=about_page&utm_campaign=portfolio_link",
  },
  {
    initials: "SS",
    avatar: null,
    name: "Shubhankar Sarkar",
    role: "Data & Algorithms Lead",
    bio: "Designing and optimizing the data algorithms that power UCoder Insights — accurate, fast, and privacy-preserving.",
    github: "https://github.com/shudhanker",
    twitter: "https://x.com/sarkar316731",
    portfolio: "https://shubhankar.ucoder.in?utm_source=ucoder.in&utm_medium=about_page&utm_campaign=portfolio_link",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col pt-16">

      {/* ── Hero ── */}
      <section className="relative mx-auto max-w-6xl px-4 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
        </div>
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
          About
        </motion.p>
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
          About UCoder
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
          className="text-muted-foreground text-lg max-w-md mx-auto">
          We build developer tools and help others build theirs.
        </motion.p>
      </section>

      {/* ── Story ── */}
      <section className="mx-auto max-w-3xl px-4 py-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card className="border-border/40 bg-muted/30">
            <CardContent className="p-8">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="text-2xl font-semibold mb-4">Why UCoder exists</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                UCoder started as a freelancing management platform. While building it, we needed
                an analytics solution — but every existing tool was either too expensive, too heavy,
                or required us to compromise on user privacy.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                UCoder Insights was the answer. Built from scratch, solo, as a B.Tech student.
                Alongside that, we help other developers and businesses build their web products —
                affordable, fast, and privacy-first.
              </p>
              <blockquote className="border-l-2 border-primary pl-4 text-sm text-muted-foreground italic">
                &ldquo;I didn&apos;t build this to compete with Mixpanel. I built it because I
                needed it, and I figured other developers probably do too.&rdquo;
                <br />
                <span className="mt-2 block text-xs not-italic uppercase">
                  — Soumyadip Maity, Founder
                </span>
              </blockquote>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* ── Mission ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }} className="text-center mb-10">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Mission</p>
          <h2 className="text-3xl font-semibold">What we stand for</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: <Lock className="h-5 w-5" />, title: "Privacy First", desc: "No cookies, no IP storage — by default, always.", delay: 0 },
            { icon: <Zap className="h-5 w-5" />, title: "Lightweight", desc: "Every KB matters. We obsess over bundle size.", delay: 1 },
            { icon: <DollarSign className="h-5 w-5" />, title: "Affordable", desc: "Free tier always available. Fair pricing always.", delay: 2 },
          ].map((m) => (
            <motion.div key={m.title} variants={fadeUp} initial="hidden"
              whileInView="visible" viewport={{ once: true }} custom={m.delay}>
              <Card className="border-border/40 bg-muted/30 text-center h-full">
                <CardContent className="p-6">
                  <div className="text-primary flex justify-center mb-3">{m.icon}</div>
                  <p className="font-medium text-sm mb-1">{m.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }} className="text-center mb-10">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Team</p>
          <h2 className="text-3xl font-semibold">The people behind UCoder</h2>
          <p className="text-muted-foreground text-sm mt-2">
            Developers building for developers — with privacy at the core.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {team.map((t, i) => (
            <motion.div key={t.name} variants={fadeUp} initial="hidden"
              whileInView="visible" viewport={{ once: true }} custom={i}>
              <Card className="border-border/40 bg-muted/30 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-12 w-12 ring-2 ring-border">
                      {t.avatar && (
                        <AvatarImage
                          src={t.avatar}
                          alt={t.name}
                          className="object-cover"
                        />
                      )}
                      <AvatarFallback className="text-sm font-semibold bg-primary/10 text-primary">
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {t.bio}
                  </p>

                  <div className="flex items-center gap-3">
                    <a href={t.github} target="_blank" rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href={t.twitter} target="_blank" rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors">
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a href={t.portfolio} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink className="h-3 w-3" />
                      Portfolio
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-3">Want to work with us?</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Whether it&apos;s a product idea or a project — we&apos;d love to hear from you.
          </p>
          <Button asChild>
            <a href="mailto:support@ucoder.in">Get in touch</a>
          </Button>
        </motion.div>
      </section>

    </div>
  );
}