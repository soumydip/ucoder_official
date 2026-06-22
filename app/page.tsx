"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-4 py-28 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Badge variant="outline" className="mb-6">
            Open source · Privacy first
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
          <Button asChild size="lg">
            <Link href="/products">
              Explore Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="lg" asChild>
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
          <Card className="border-border/40 bg-muted/30 max-w-lg mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium">UCoder Insights</p>
                <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                  Live ✓
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Privacy-first web analytics. No cookies, no IP storage, &lt;
                7.4KB SDK.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-5">
                <span>Free</span>
                <span>·</span>
                <span>&lt; 7.4KB</span>
                <span>·</span>
                <span>99.9% uptime</span>
                <span>·</span>
                <span>5+ projects</span>
              </div>
              <Button size="sm" asChild>
                <Link href="https://insights.ucoder.in">
                  Get Started <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
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
              title: "Payment Integration",
              desc: "Razorpay, Stripe, and more — integrated cleanly into your product.",
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
              <Card className="border-border/40 bg-muted/30 h-full">
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
            <Link href="/services">
              See All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* About Snippet */}
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
          <Button asChild>
            <Link href="mailto:support@ucoder.in">support@ucoder.in</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}