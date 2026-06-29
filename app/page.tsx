"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BarChart3,
  CreditCard,
  Globe,
  Zap,
  Lock,
  DollarSign,
  BarChart2,
  ShieldCheck,
  Bug,
  MousePointerClick,
  Activity,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

function NpmIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-4 py-28 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <motion.div
          className="border-border/40 bg-muted/30 rounded-2xl p-1 mb-6 inline-block pointer-events-none"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Badge variant="outline" className="rounded-2xl px-3 py-1 text-sm">
            Open source . Privacy first
          </Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-4xl sm:text-6xl font-semibold tracking-tight mb-6"
        >
          Developer tools and services
          <br />
          <span className="text-muted-foreground">
            that don&apos;t cost a fortune
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-muted-foreground text-lg max-w-xl mx-auto mb-8"
        >
          We build privacy-first developer tools — and help other developers
          build theirs.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-wrap gap-3 justify-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 relative overflow-hidden transition-all duration-500 group cursor-pointer hover:scale-[1.05] hover:shadow-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0d1f3c] to-[#0a1628]" />
            <span className="absolute inset-0 bg-[#0a1620] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2 text-white text-sm font-semibold uppercase tracking-widest">
              Explore Products <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <Button
            variant="ghost"
            size="lg"
            asChild
            className="rounded-2xl border border-white/20 bg-white text-primary hover:bg-white/90 hover:text-primary hover:bg-gray-300 transition-all duration-300"
          >
            <Link href="/services">Our Services</Link>
          </Button>
        </motion.div>
      </section>

      {/* Products Preview */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
            Products
          </p>
          <h2 className="text-3xl font-semibold">What we build</h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="border-border/40 bg-muted/30 max-w-lg mx-auto rounded-2xl">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md border border-border/40 bg-muted flex items-center justify-center">
                    <Image src="/ucoder-insights.png" alt="ucoder insights" height={48} width={48} loading="lazy" className="rounded" />
                  </div>
                  <p className="font-medium text-sm">UCoder Insights</p>
                </div>
                <Badge className="gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-xs font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </Badge>
              </div>

              {/* Feature grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  {
                    icon: <ShieldCheck className="h-4 w-4" />,
                    title: "Privacy-first",
                    desc: "No cookies, no consent banners",
                  },
                  {
                    icon: <Bug className="h-4 w-4" />,
                    title: "Error tracking",
                    desc: "Monitor & manage errors live",
                  },
                  {
                    icon: <MousePointerClick className="h-4 w-4" />,
                    title: "Click heatmaps",
                    desc: "Rage & dead click detection",
                  },
                  {
                    icon: <Activity className="h-4 w-4" />,
                    title: "Real-time",
                    desc: "Live visitor sessions",
                  },
                ].map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="bg-muted/50 rounded-lg p-2.5 space-y-1"
                  >
                    <span className="text-muted-foreground my-2">{icon}</span>
                    <p className="text-xs font-medium leading-none my-2">
                      {title}
                    </p>
                    <p className="text-[11px] text-muted-foreground leading-snug">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {["Free", "< 7.4 KB", "99.9% uptime", "5+ projects"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-[11px] p-2 rounded-md bg-muted text-muted-foreground border border-border/40"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
              <div className="flex justify-between mx-5 gap-2">
                <Button
                  size="sm"
                  asChild
                  variant="secondary"
                  className="bg-[#162030] hover:bg-[#1c2840] text-slate-200 border border-slate-700/50 tracking-wide rounded"
                >
                  <a
                    href="https://insights.ucoder.in?utm_source=ucoder.in&utm_medium=Product_hero_section&utm_campaign=get_started"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started <ArrowRight className="ml-1.5 h-3 w-3" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild className="rounded">
                  <a
                    href="https://www.npmjs.com/package/ucoder-insight"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <NpmIcon className="mr-1.5 h-3.5 w-3.5 text-[#cb3837]" />
                    npm
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
            Services
          </p>
          <h2 className="text-3xl font-semibold">What we do for you</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            We build production-ready web solutions for startups and developers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: <Globe className="h-5 w-5" />,
              title: "Website Development",
              desc: "Custom, fast, mobile-responsive websites built with modern tech.",
              delay: 0,
            },
            {
              icon: <CreditCard className="h-5 w-5" />,
              title: "API Development",
              desc: "RESTful,Web Socket APIs built scalable, secure, and well-documented for your product.",
              delay: 1,
            },
            {
              icon: <BarChart3 className="h-5 w-5" />,
              title: "Analytics Setup",
              desc: "UCoder Insights or any analytics tool, set up and configured for you.",
              delay: 2,
            },
          ].map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={s.delay}
            >
              <Card className="border-border/40 bg-muted/30 h-full rounded">
                <CardContent className="p-5">
                  <div className="text-primary mb-3">{s.icon}</div>
                  <p className="font-medium text-sm mb-1">{s.title}</p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <Button variant="outline" asChild>
            <Link href="/services" target="_blank" rel="noopener noreferrer">
              See All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* About  */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Our Story
          </p>
          <h2 className="text-3xl font-semibold mb-4">Why UCoder exists</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Started by Soumyadip, a student who needed Mixpanel, Sentry, and
            Hotjar but couldn&apos;t afford all three. So he built one tool that
            does it all — and started helping other developers build theirs.
          </p>
          <Button variant="outline" asChild>
            <Link href="/about">
              Read our story <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: <Lock className="h-5 w-5" />,
              title: "Privacy First",
              desc: "No cookies, no IP storage",
              delay: 0,
            },
            {
              icon: <Zap className="h-5 w-5" />,
              title: "Lightweight",
              desc: "Every KB matters",
              delay: 1,
            },
            {
              icon: <DollarSign className="h-5 w-5" />,
              title: "Affordable",
              desc: "Free tier always available",
              delay: 2,
            },
          ].map((m) => (
            <motion.div
              key={m.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={m.delay}
            >
              <Card className="border-border/40 bg-muted/30 text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-3 flex justify-center">
                    {m.icon}
                  </div>
                  <p className="font-medium text-sm mb-1">{m.title}</p>
                  <p className="text-xs text-muted-foreground">{m.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-3">Get in touch</h2>
          <p className="text-muted-foreground mb-6">
            Have a project in mind? Let&apos;s talk.
          </p>
          <Button asChild variant="secondary">
            <a
              href="mailto:support@ucoder.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              support@ucoder.in
            </a>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
