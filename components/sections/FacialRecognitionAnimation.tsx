"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Eye, Smile, Frown, Meh, Angry, Heart } from "lucide-react";

const FacialRecognitionAnimation = () => {
    const [currentEmotion, setCurrentEmotion] = useState(0);
    const [isDetecting, setIsDetecting] = useState(false);
    const controls = useAnimation();

    const emotions = [
        { name: "Felicidade", icon: Smile, color: "text-yellow-400", bg: "bg-yellow-400/20" },
        { name: "Tristeza", icon: Frown, color: "text-blue-400", bg: "bg-blue-400/20" },
        { name: "Raiva", icon: Angry, color: "text-red-400", bg: "bg-red-400/20" },
        { name: "Neutro", icon: Meh, color: "text-gray-400", bg: "bg-gray-400/20" },
        { name: "Alegria", icon: Heart, color: "text-pink-400", bg: "bg-pink-400/20" }
    ];

    const facialPoints = [
        // Olhos
        { x: 35, y: 35 }, { x: 65, y: 35 },
        // Nariz
        { x: 50, y: 45 }, { x: 48, y: 52 }, { x: 52, y: 52 },
        // Boca
        { x: 40, y: 60 }, { x: 50, y: 65 }, { x: 60, y: 60 },
        // Queixo
        { x: 50, y: 75 },
        // Sobrancelhas
        { x: 32, y: 28 }, { x: 38, y: 28 }, { x: 62, y: 28 }, { x: 68, y: 28 }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsDetecting(true);
            controls.start({
                scale: [1, 1.05, 1],
                transition: { duration: 0.5 }
            });

            setTimeout(() => {
                setCurrentEmotion((prev) => (prev + 1) % emotions.length);
                setIsDetecting(false);
            }, 1500);
        }, 3000);

        return () => clearInterval(interval);
    }, [controls, emotions.length]);

    const currentEmotionData = emotions[currentEmotion];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500 mb-4"
                    >
                        Reconhecimento Facial em Ação
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        Veja como nossa IA detecta emoções em tempo real, transformando expressões faciais em comunicação.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Animation Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            {/* Face Outline */}
                            <motion.div
                                animate={controls}
                                className="w-80 h-80 rounded-full border-4 border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center relative overflow-hidden"
                            >
                                {/* Facial Points Animation */}
                                {facialPoints.map((point, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{
                                            opacity: isDetecting ? 1 : 0.3,
                                            scale: isDetecting ? 1 : 0.8
                                        }}
                                        transition={{
                                            delay: isDetecting ? index * 0.05 : 0,
                                            duration: 0.3
                                        }}
                                        className="absolute w-2 h-2 bg-purple-400 rounded-full"
                                        style={{
                                            left: `${point.x}%`,
                                            top: `${point.y}%`,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    />
                                ))}

                                {/* Scanning Lines */}
                                <motion.div
                                    animate={{
                                        y: isDetecting ? [0, 320, 0] : 0,
                                        opacity: isDetecting ? [0, 1, 0] : 0
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: isDetecting ? Infinity : 0,
                                        ease: "linear"
                                    }}
                                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                                />

                                {/* Eye Icon */}
                                <motion.div
                                    animate={{ scale: isDetecting ? [1, 1.2, 1] : 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-purple-400/60"
                                >
                                    <Eye className="w-24 h-24" />
                                </motion.div>
                            </motion.div>

                            {/* Emotion Indicator */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
                            >
                                <div className={`flex items-center gap-3 px-6 py-3 rounded-full ${currentEmotionData.bg} border border-border backdrop-blur-sm`}>
                                    <currentEmotionData.icon className={`w-6 h-6 ${currentEmotionData.color}`} />
                                    <span className="font-semibold text-foreground">
                                        {currentEmotionData.name}
                                    </span>
                                    <motion.div
                                        animate={{ scale: isDetecting ? [1, 1.2, 1] : 1 }}
                                        className="w-2 h-2 bg-green-400 rounded-full"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Tecnologia Avançada de Detecção
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Nossa IA analisa 42 pontos faciais em tempo real, detectando micro-expressões
                                e traduzindo-as em comunicação clara e precisa.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border"
                            >
                                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                    <span className="text-purple-400 font-bold">42</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Pontos Faciais</h4>
                                    <p className="text-sm text-muted-foreground">Mapeamento preciso de expressões</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border"
                            >
                                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                    <span className="text-blue-400 font-bold">7</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Emoções Principais</h4>
                                    <p className="text-sm text-muted-foreground">Felicidade, tristeza, raiva, medo, nojo, surpresa, neutral</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border"
                            >
                                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                                    <span className="text-pink-400 font-bold">⚡</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Processamento em Tempo Real</h4>
                                    <p className="text-sm text-muted-foreground">Análise instantânea de expressões faciais</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FacialRecognitionAnimation;