import { motion } from "framer-motion"
import { siteConfig } from "./config/site"
import { Button } from "./components/ui/button"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-purple-200 mb-12"
          >
            {siteConfig.tagline}
          </motion.p>
        </div>
      </section>

      {/* MCPs Section - OpenClaw Integrations */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-center"
          >
            MCP-Powered Integrations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-purple-300 text-center mb-12 max-w-2xl mx-auto"
          >
            Natural language commands that connect OpenClaw to your tools — no clicks required.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.mcpServers.map((mcp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all border border-white/10"
              >
                <div className="text-3xl mb-3">{mcp.icon}</div>
                <h3 className="text-xl font-bold mb-2">{mcp.name}</h3>
                <p className="text-purple-300 text-sm mb-4">{mcp.description}</p>
                <div className="space-y-2">
                  {mcp.commands.slice(0, 3).map((cmd, i) => (
                    <p key={i} className="text-xs text-green-400 font-mono bg-black/30 rounded px-2 py-1 truncate">
                      {cmd}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure - Containers */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-center"
          >
            Production Infrastructure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-purple-300 text-center mb-12 max-w-2xl mx-auto"
          >
            Self-hosted on Hetzner VPS — 13 Docker containers, monitored and secured.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteConfig.containers.map((container, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all border border-white/5"
              >
                <div className="text-2xl mb-2">{container.icon}</div>
                <h3 className="text-lg font-bold mb-1">{container.name}</h3>
                <p className="text-purple-300 text-sm">{container.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Can Do */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            What I Can Do
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-4">{capability.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                <p className="text-purple-200">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Deploy */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Ready to Deploy
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {siteConfig.deployment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-purple-200 mb-4">{item.description}</p>
                <div className="text-3xl font-bold text-green-400">{item.price}</div>
                <p className="text-sm text-purple-300 mt-2">{item.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire Me */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Why Hire Me?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all"
              >
                <div className="text-4xl mb-4">{benefit.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-purple-200">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to boost your productivity? Let's work together!
            </h2>
            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full transition-all hover:scale-105"
                asChild
              >
                <a href="https://t.me/openclaw">
                  Start Chatting →
                </a>
              </Button>
              <p className="text-purple-200">
                Or message me on Telegram at @openclaw
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-purple-300">
        <p>Email: {siteConfig.contact.email}</p>
      </footer>
    </div>
  )
}

export default App
