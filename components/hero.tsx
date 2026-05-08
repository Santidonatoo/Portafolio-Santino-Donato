"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const roles = ["Estudiante de Lic. en Sistemas", "Desarrollador Full Stack", "Tech Enthusiast"];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const currentText = roles[currentRole];
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    if (!isDeleting && displayedText === currentText) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1),
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden"
    >
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,191,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,191,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,191,255,0.15)_0%,_transparent_70%)]" />

      <motion.div
        style={{ y: yText, opacity: opacityText }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center z-10 max-w-3xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-primary text-sm tracking-widest uppercase mb-4 neon-glow-text"
        >
          Hola, soy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-foreground"
        >
          Santino Donato
        </motion.h1>

        <div className="h-12 md:h-14 mb-8">
          <span className="text-xl md:text-2xl text-primary font-mono neon-glow-text">
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="inline-block w-0.5 h-6 md:h-7 bg-primary ml-1 align-middle shadow-[0_0_8px_rgba(0,191,255,0.8)]"
            />
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto text-pretty"
        >
          Estudiante de cuarto año de Licenciatura en Sistemas en la UNLa.
          Apasionado por la tecnología, el desarrollo de software y el trabajo
          en equipo. Proactivo, organizado y en constante aprendizaje.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mx-auto grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          <motion.a
            href="https://www.linkedin.com/in/santinodonato"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/40 text-foreground font-semibold rounded-lg transition-all duration-300 hover:border-primary hover:bg-primary/10"
          >
            LinkedIn
          </motion.a>

          <motion.a
            href="#proyectos"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 191, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 neon-glow"
          >
            Ver proyectos
          </motion.a>

          <motion.a
            href="/CV%20Santino%20Donato.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/40 text-foreground font-semibold rounded-lg transition-all duration-300 hover:border-primary hover:bg-primary/10"
          >
            Descargar CV
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-primary neon-glow-text"
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
