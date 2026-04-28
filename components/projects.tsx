"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

// ============================================================
// EDITABLE PROJECTS DATA
// To add a new project, simply add a new object to this array
// following the same structure as the existing projects.
// ============================================================
const projects = [
  {
    title: "API REST con Spring Boot",
    description:
      "API RESTful desarrollada con Spring Boot y Kotlin. Implementa autenticación JWT, validación de datos y conexión con MySQL.",
    tags: ["Kotlin", "Spring Boot", "MySQL", "JWT"],
    github: "https://github.com/Santidonatoo",
    demo: null, // Set to URL string if there's a live demo
  },
  {
    title: "Sistema de Gestión Universitaria",
    description:
      "Aplicación de escritorio para gestionar estudiantes, materias y calificaciones. Desarrollada en Java con patrón MVC.",
    tags: ["Java", "MySQL", "MVC", "Swing"],
    github: "https://github.com/Santidonatoo",
    demo: null,
  },
  // Add more projects here following the same structure:
  // {
  //   title: "Project Name",
  //   description: "Short description of the project",
  //   tags: ["Tech1", "Tech2", "Tech3"],
  //   github: "https://github.com/...",
  //   demo: "https://..." or null,
  // },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Proyectos
          </h2>
          <p className="text-muted-foreground text-lg">
            Algunos de mis trabajos recientes
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 0 30px rgba(0, 191, 255, 0.2)",
              }}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                      <span className="text-sm">Código</span>
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span className="text-sm">Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
