"use client";

import dynamic from 'next/dynamic';
import { ModernMenu } from "@/components/ModernMenu";
import { ViteHero } from "@/components/vite-hero";
import { ViteFeatures } from "@/components/vite-features";
import { FrameworkLogos } from "@/components/framework-logos";
import { CodeComparison } from "@/components/code-comparison";
import { TechTeam } from "@/components/tech-team";

const Footer7 = dynamic(() => import("@/components/footer-7").then(mod => mod.Footer7));

/**
 * Componente principal da página inicial da aplicação Sinout.
 * Renderiza a landing page com estilo inspirado no Vite.
 */
export default function Home() {
  // Configuração dos itens do menu de navegação
  const menuItems = [
    { label: "Guide", href: "/guide" },
    { label: "Config", href: "/config" },
    { label: "Plugins", href: "/plugins" },
    { label: "Resources", href: "/resources" },
    { label: "Version", href: "/version" },
  ];

  // Configuração dos links sociais
  const socialItems = [
    { label: "GitHub", href: "https://github.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Discord", href: "https://discord.com" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">

      {/* Menu de navegação */}
      <ModernMenu items={menuItems} socialItems={socialItems} />

      <main className="flex-grow">
        {/* Hero Section */}
        <ViteHero />

        {/* Framework Logos Marquee */}
        <FrameworkLogos />

        {/* Features Grid */}
        <ViteFeatures />

        {/* Code Comparison Section */}
        <CodeComparison />

        {/* Team Section */}
        <TechTeam />
      </main>

      {/* Rodapé */}
      <Footer7 className="mt-auto border-t border-border bg-muted/30" />
    </div>
  );
}