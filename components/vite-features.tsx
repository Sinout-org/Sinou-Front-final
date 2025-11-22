"use client";

import { motion } from "framer-motion";
import { Zap, Box, Lock, Settings, Code, Smartphone } from "lucide-react";

const features = [
    {
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
        title: "Instant Server Start",
        description: "On demand file serving over native ESM, no bundling required!"
    },
    {
        icon: <Box className="w-6 h-6 text-purple-500" />,
        title: "Lightning Fast HMR",
        description: "Hot Module Replacement (HMR) that stays fast regardless of app size."
    },
    {
        icon: <Settings className="w-6 h-6 text-blue-500" />,
        title: "Rich Features",
        description: "Out-of-the-box support for TypeScript, JSX, CSS and more."
    },
    {
        icon: <Lock className="w-6 h-6 text-green-500" />,
        title: "Optimized Build",
        description: "Pre-configured Rollup build with multi-page and library mode support."
    },
    {
        icon: <Code className="w-6 h-6 text-pink-500" />,
        title: "Universal Plugins",
        description: "Rollup-superset plugin interface shared between dev and build."
    },
    {
        icon: <Smartphone className="w-6 h-6 text-orange-500" />,
        title: "Fully Typed APIs",
        description: "Flexible programmatic APIs with full TypeScript typing."
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function ViteFeatures() {
    return (
        <section className="py-12 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group p-6 rounded-xl bg-card border border-border hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 relative z-10">{feature.title}</h3>
                            <p className="text-muted-foreground relative z-10">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
