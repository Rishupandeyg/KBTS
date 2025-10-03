import { motion } from "framer-motion";
import { Lightbulb, Globe, Star, BookOpen, Briefcase, Users } from "lucide-react"; // ✅ sab icons import
import Tilt from "react-parallax-tilt"; // optional

export default function Features() {
  // Parent container animation
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Each card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Mission Section */}
      <section className="py-20 px-6 bg-gray-950">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-10 text-center">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Our mission is to discover, cultivate, and elevate emerging creative
            talent, empowering individuals to thrive in film, television,
            modeling, advertising, and live performances.
          </p>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              variants={cardVariants}
              className="bg-black border border-red-600 rounded-2xl p-8 shadow-xl min-h-[280px]"
            >
              <BookOpen className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">
                Immersive Education
              </h3>
              <p className="text-gray-400">
                We deliver bespoke, high-caliber training blending performance
                techniques with real industry insights—equipping artists with
                confidence, versatility, and professionalism.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="bg-black border border-red-600 rounded-2xl p-8 shadow-xl min-h-[280px]"
            >
              <Briefcase className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">
                Hands-On Experience
              </h3>
              <p className="text-gray-400">
                Through shows, shoots, campaigns, and real assignments, we
                ensure that every talent learns by doing—growing in collaborative
                and professional environments.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="bg-black border border-red-600 rounded-2xl p-8 shadow-xl min-h-[280px]"
            >
              <Users className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">
                Mentorship
              </h3>
              <p className="text-gray-400">
                Industry experts, producers, and casting professionals guide
                talent with personalized mentorship, career pathways, and
                authentic opportunities for growth.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-10 text-center">
            Our Vision
          </h2>
          <p className="text-gray-300 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Our vision is to be the leading global incubator of emerging
            creative talent, transforming untapped potential into industry-ready
            professionals who inspire and excel.
          </p>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              variants={cardVariants}
              className="bg-black border border-red-600 rounded-2xl p-8 shadow-xl min-h-[280px]"
            >
              <Lightbulb className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">
                Innovation
              </h3>
              <p className="text-gray-400">
                We aim to set new benchmarks in entertainment development by
                embracing innovation, creativity, and strategic partnerships
                that scale our influence globally.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="bg-black border border-red-600 rounded-2xl p-8 shadow-xl min-h-[280px]"
            >
              <Globe className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">
                Global Reach
              </h3>
              <p className="text-gray-400">
                We envision nurturing talent that transitions seamlessly into
                global entertainment industries, carrying excellence and
                inclusivity across every stage and screen.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="bg-black border border-red-600 rounded-2xl p-8 shadow-xl min-h-[280px]"
            >
              <Star className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">
                Excellence
              </h3>
              <p className="text-gray-400">
                Our vision celebrates diversity, elevates underrepresented
                voices, and shapes inclusive narratives while upholding
                world-class creative professionalism.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
