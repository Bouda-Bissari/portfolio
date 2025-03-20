import { Code, Package, Truck, ShoppingBag, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "800",
  subsets: ["latin"],
});
// Définition des projets
const projects = [
  {
    id: 1,
    title: "Inscription à un concours",
    description:
      "Projet de classe pour l'inscription à un concours pour une école",
    icon: Code,
  },
  {
    id: 2,
    title: "Gestion de stock",
    description: "Projet réalisé en Java Swing pour la gestion de stock",
    icon: Package,
  },
  {
    id: 3,
    title: "Salle de gym",
    description:
      "Projet avec Spring Boot et Angular pour la gestion d'une salle de gym",
    icon: Code,
  },
  {
    id: 4,
    title: "Boutique en ligne",
    description: "Gérer une boutique (disponible sur watchandpassion.shop)",
    icon: ShoppingBag,
  },
  {
    id: 5,
    title: "App de livraison",
    description: "Projet en cours : application de livraison",
    icon: Truck,
  },
  {
    id: 6,
    title: "Réseau social Outfits",
    description: "Projet en cours : app pour partager ses outfits en ligne",
    icon: Loader2,
  },
];

function Projects() {
  return (
    <motion.div
      className="md:p-4 p-2  w-full min-h-48 bg-amber-900  rounded-lg mb-3"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.h1
        className={`text-white uppercase text-xl ${poppins.className}`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 mt-4">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
              className="bg-orange-500 rounded-lg p-4 hover:bg-black/70 bg-black/50  hover:backdrop-blur-lg hover:cursor-pointer transition-all ease-out"
            >
              <div className="flex items-center space-x-2">
                <Icon className="text-white" size={24} />
                <h2 className="text-white font-bold">{project.title}</h2>
              </div>
              <p className="text-white mt-2">{project.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
