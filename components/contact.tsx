"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Santidonatoo",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/santinodonato",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:santinodonato1@gmail.com",
    icon: Mail,
  },
]

export function Contact() {
  return (
    <section id="contacto" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            ¿Hablamos?
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Siempre abierto a nuevas oportunidades y proyectos. No dudes en
            contactarme.
          </p>

          <div className="flex items-center justify-center gap-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.2,
                  color: "#00BFFF",
                  textShadow: "0 0 20px rgba(0, 191, 255, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <link.icon size={32} className="transition-all duration-300" />
                <span className="text-sm font-medium">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Santino Donato. Hecho con{" "}
            <span className="text-primary">Next.js</span> &{" "}
            <span className="text-primary">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
