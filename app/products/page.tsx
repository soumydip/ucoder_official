"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-4 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Products
          </p>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4"
        >
          What we build
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-muted-foreground text-lg max-w-md mx-auto"
        >
          Lightweight, privacy-first tools for developers.
        </motion.p>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* UCoder Insights */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <Card className="border-border/40 bg-muted/30 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold">UCoder Insights</p>
                  <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                    Live ✓
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  Privacy-first web analytics. No cookies, no IP storage, &lt;
                  7.4KB SDK. One tool replacing Mixpanel + Sentry + Hotjar.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-5">
                  <span>Free forever</span>
                  <span>·</span>
                  <span>&lt; 7.4KB</span>
                  <span>·</span>
                  <span>99.9% uptime</span>
                  <span>·</span>
                  <span>5+ projects</span>
                </div>
                <Button size="sm" asChild>
                  <a href="https://insights.ucoder.in">
                    Get Started <ArrowRight className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <Card className="border-border/40 bg-muted/10 h-full opacity-60">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold text-muted-foreground">
                    Next Product
                  </p>
                  <Badge
                    variant="outline"
                    className="text-yellow-500 border-yellow-500/30"
                  >
                    Coming Soon
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  Something new is being built. UCoder products come from real
                  developer needs — when the community needs it, we build it.
                </p>
                <Button size="sm" variant="outline" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-3">
            Have an idea for a tool developers need?
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            We build what developers actually need. Tell us what&apos;s missing.
          </p>
          <Button asChild>
            <a href="mailto:support@ucoder.in">support@ucoder.in</a>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
