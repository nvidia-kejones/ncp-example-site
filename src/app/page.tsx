import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-gray-100">
      <div className="bg-yellow-500 text-black py-2">
        <div className="container mx-auto px-4 text-center">
          <strong>Disclaimer:</strong> This is an example website for demonstration purposes only. NCP Example is a
          fictional company.
        </div>
      </div>

      <header className="border-b border-gray-800 bg-[#0A0A0A] py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">NCP Example</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1) 0%, rgba(14, 165, 233, 0) 50%)",
            }}
          />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                Accelerate Your AI Infrastructure
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                High-performance GPU cloud platform designed for the most demanding AI and machine learning workloads
              </p>
              <Link href="https://build.ncpexample.com">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg rounded-lg transition-colors">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-[#0C0C0C]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Cloud Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">GPU Compute</h3>
                <p className="text-gray-400">
                  Enterprise-grade GPU infrastructure for training and inference at any scale.
                </p>
              </div>
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">AI Model Deployment</h3>
                <p className="text-gray-400">Streamlined deployment pipeline with automatic scaling and monitoring.</p>
              </div>
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Data Processing</h3>
                <p className="text-gray-400">
                  High-throughput data processing optimized for machine learning workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-[#0A0A0A]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Scalable Infrastructure</h3>
                <p className="text-gray-400">Automatically scale resources based on workload demands</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Global Network</h3>
                <p className="text-gray-400">Low-latency connectivity across worldwide data centers</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Security</h3>
                <p className="text-gray-400">Enterprise-grade security with ISO 27001 certification</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">24/7 Support</h3>
                <p className="text-gray-400">Expert support team available around the clock</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-[#0C0C0C]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-800">
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Starter</h3>
                  <p className="text-4xl font-bold mb-6">
                    $99<span className="text-lg text-gray-400">/mo</span>
                  </p>
                  <ul className="space-y-4 mb-8 text-gray-300">
                    <li>2 GPU instances</li>
                    <li>5TB storage</li>
                    <li>Basic support</li>
                  </ul>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 transition-colors">Choose Plan</Button>
                </div>
              </div>
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-lg border border-cyan-500/50">
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Pro</h3>
                  <p className="text-4xl font-bold mb-6">
                    $299<span className="text-lg text-gray-400">/mo</span>
                  </p>
                  <ul className="space-y-4 mb-8 text-gray-300">
                    <li>8 GPU instances</li>
                    <li>20TB storage</li>
                    <li>Priority support</li>
                  </ul>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 transition-colors">Choose Plan</Button>
                </div>
              </div>
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-800">
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                  <p className="text-4xl font-bold mb-6">Custom</p>
                  <ul className="space-y-4 mb-8 text-gray-300">
                    <li>Unlimited GPU instances</li>
                    <li>Custom storage options</li>
                    <li>24/7 dedicated support</li>
                  </ul>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 transition-colors">Contact Us</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0A0A0A]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to accelerate your AI projects?</h2>
            <p className="mb-8 text-gray-400 text-lg">Experience the next generation of GPU cloud computing</p>
            <Link href="https://build.ncpexample.com">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg rounded-lg transition-colors">
                Get Started
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-[#0A0A0A] py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-gray-400">
              <strong>Disclaimer:</strong> NCP Example is a fictional company created for demonstration purposes only.
            </p>
            <p className="text-gray-400">
              This website is not associated with any real cloud provider or GPU manufacturer.
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

