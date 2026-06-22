"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  CreditCard,
  BarChart3,
  Code2,
  Zap,
  ShoppingCart,
  MessageSquare,
  Clock,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, easeInOut: "easeInOut" },
  }),
};

const services = [
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Website Development",
    desc: "Custom, fast, mobile-responsive websites built with Next.js, React, and modern tech stacks.",
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Payment Integration",
    desc: "Razorpay, Stripe, PayPal and more — integrated cleanly and securely into your product.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Analytics Setup",
    desc: "UCoder Insights or any analytics tool, properly configured and deployed for your site.",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "API Development",
    desc: "RESTful APIs built scalable, secure, and well-documented for your product.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Performance Optimization",
    desc: "Speed up your existing website — Core Web Vitals, bundle size, caching, and more.",
  },
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    title: "E-commerce Development",
    desc: "Full e-commerce solutions with product management, cart, and payment flow.",
  },
];

const steps = [
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Tell us what you need",
    desc: "Contact us with your project idea — no commitment required.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "We plan together",
    desc: "We discuss scope, timeline, and pricing — transparent from the start.",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "We build & deliver",
    desc: "Clean code, on time, with support after delivery.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-4 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
        </div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-xs text-muted-foreground uppercase tracking-widest mb-4"
        >
          Services
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4"
        >
          We build for you
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-muted-foreground text-lg max-w-md mx-auto"
        >
          Production-ready web solutions for startups, developers, and
          businesses.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <Card className="border-border/40 bg-muted/30 h-full">
                <CardContent className="p-5">
                  <div className="text-primary mb-3">{s.icon}</div>
                  <p className="font-medium text-sm mb-2">{s.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
            Process
          </p>
          <h2 className="text-3xl font-semibold">How it works</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="text-center"
            >
              <div className="text-primary flex justify-center mb-3">
                {s.icon}
              </div>
              <p className="text-xs text-muted-foreground mb-1">
                Step {i + 1}
              </p>
              <p className="font-medium text-sm mb-2">{s.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Note */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="border-border/40 bg-muted/30 max-w-xl mx-auto text-center">
            <CardContent className="p-8">
              <h3 className="font-semibold text-lg mb-2">
                Transparent pricing
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Every project is different. We discuss scope and give you a fair
                quote — no hidden fees, no surprises.
              </p>
              <Button asChild>
                <a href="mailto:support@ucoder.in">
                  Get a free quote
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-3">
            Ready to build something?
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Tell us about your project. We&apos;ll get back within 24 hours.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button asChild>
              <a href="mailto:support@ucoder.in">Contact Us</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:support@ucoder.in">support@ucoder.in</a>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}