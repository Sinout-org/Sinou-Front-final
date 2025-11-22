"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const frameworks = [
    { name: "Vue", color: "#42b883" },
    { name: "React", color: "#61dafb" },
    { name: "Preact", color: "#673ab8" },
    { name: "Lit", color: "#324fff" },
    { name: "Svelte", color: "#ff3e00" },
    { name: "Solid", color: "#2c4f7c" },
    { name: "Qwik", color: "#ac7ef4" },
];

export function FrameworkLogos() {
    return (
        <section className="py-12 border-y border-border bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 text-center mb-8">
                <h2 className="text-2xl font-semibold text-muted-foreground">
                    Vite powers your favorite frameworks
                </h2>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                    {[...frameworks, ...frameworks, ...frameworks].map((fw, i) => (
                        <div
                            key={i}
                            className="text-2xl font-bold flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default"
                            style={{ color: fw.color }}
                        >
                            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: fw.color }}></span>
                            {fw.name}
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center ml-16">
                    {[...frameworks, ...frameworks, ...frameworks].map((fw, i) => (
                        <div
                            key={i}
                            className="text-2xl font-bold flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default"
                            style={{ color: fw.color }}
                        >
                            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: fw.color }}></span>
                            {fw.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
