/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MonitorSpeaker, TabletSmartphone ,Copy, Check, ExternalLink, ChevronRight, Zap, Shield, Layout, Menu, X, Gamepad2, FileText, Lock, MessageSquare, Terminal, Monitor, Smartphone, Download, Crown, Star, Activity, Server } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [executorPlatform, setExecutorPlatform] = useState('all');
  const [minUNC, setMinUNC] = useState(0);
  const [minSUNC, setMinSUNC] = useState(0);
  const [executorType, setExecutorType] = useState('all');
  const [keyType, setKeyType] = useState('all');
  
  const scriptCode = 'loadstring(game:HttpGet("https://api.jnkie.com/api/v1/luascripts/public/dfd1439234b07fc708b342fe632fc4a207181ec03af70c3062aa229a0c760a0a/download"))()';
  const discordUrl = 'https://discord.gg'; // Placeholder Discord

  const handleCopy = () => {
    navigator.clipboard.writeText(scriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navigate = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderHome = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-24 md:pb-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            v2.4.0 is now live
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Gaming Experience</span>
          </h1>
          
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
            Junko Hub provides the most advanced and optimized scripts for your favorite games. 
            No ads, no waiting, just pure performance.
          </p>

          <div className="space-y-4 mb-10">
            {[
              'No ads, no waiting — instant access',
              'Bypass the 24-hour key system',
              'All scripts and features included'
            ].map((feature, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                key={i} 
                className="flex items-center gap-3 text-sm text-gray-300"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-purple-400" />
                </div>
                {feature}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => {
                document.getElementById('install-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Get Script
            </button>
            <button 
              onClick={() => navigate('premium')}
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-purple-500/20 transition-all active:scale-95 flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              <Crown className="w-5 h-5" />
              Buy Premium
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-10 lg:mt-0"
        >
          <div className="absolute inset-0 bg-purple-500/20 blur-[80px] rounded-full"></div>
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm overflow-hidden group hover:border-purple-500/30 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Pet Simulator 99</div>
            <div className="text-gray-400 font-medium uppercase tracking-widest text-xs mb-8">Premium Support</div>
            
            <div className="space-y-3">
              {[
                { name: 'Auto Farm Coins & Diamonds', active: true },
                { name: 'Auto Minigames', active: true },
                { name: 'Auto Complete Obbies', active: true },
                { name: 'Auto Use Items & Potions', active: true },
              ].map((feature, idx) => (
                <motion.div 
                  whileHover={{ scale: 1.02, x: 5 }}
                  key={idx} 
                  className="flex items-center justify-between bg-white/5 p-3 md:p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-sm md:text-base text-gray-200 font-medium">{feature.name}</span>
                  <Check className="w-5 h-5 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Installation Section */}
      <motion.div 
        id="install-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mt-24 md:mt-32 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Install in Seconds</h2>
        <p className="text-gray-400 mb-8 md:mb-10 px-4">Copy and paste this code into your Roblox executor (Delta, Velocity, Wave, or any compatible executor)</p>
        
        <div className="max-w-3xl mx-auto relative group px-4 sm:px-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-[#0f0a1a] border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 shadow-2xl">
            <div className="w-full overflow-x-auto bg-black/30 rounded-xl p-4 border border-white/5">
              <code className="text-left font-mono text-purple-300 text-xs md:text-sm whitespace-nowrap">
                {scriptCode}
              </code>
            </div>
            <button 
              onClick={handleCopy}
              className={`w-full md:w-auto flex-shrink-0 flex items-center justify-center gap-2 px-6 py-4 md:py-3 rounded-xl font-bold transition-all active:scale-95 ${
                copied 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-purple-500 text-white hover:bg-purple-400'
              }`}
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Copied!
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Code
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="mt-24 md:mt-40 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {[
          { icon: Zap, color: 'purple', title: 'Lightning Fast', desc: 'Our scripts are optimized for the best performance, ensuring zero lag and instant execution.' },
          { icon: Shield, color: 'fuchsia', title: 'Secure & Safe', desc: 'Safety is our priority. All scripts are thoroughly tested to ensure they are undetectable and safe to use.' },
          { icon: Layout, color: 'blue', title: 'Easy Interface', desc: 'A clean and intuitive UI that makes it easy for anyone to use our scripts without any hassle.' }
        ].map((feat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.07] transition-colors group"
          >
            <div className={`w-12 h-12 bg-${feat.color}-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <feat.icon className={`w-6 h-6 text-${feat.color}-400`} />
            </div>
            <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderGames = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Supported <span className="text-purple-500">Games</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">We are constantly updating and adding new games to our hub. Here are the currently supported experiences.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Pet Simulator 99 Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/5 border border-purple-500/30 rounded-3xl overflow-hidden group hover:border-purple-500/60 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]"
        >
          <div className="h-48 bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://tr.rbxcdn.com/180DAY-25b77b4cb49ae9390a08b111a6bff20c/768/432/Image/Webp/noFilter')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity mix-blend-overlay"></div>
            <Gamepad2 className="w-20 h-20 text-purple-400/50 drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              WORKING
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Pet Simulator 99</h3>
            <p className="text-gray-400 text-sm mb-6">The ultimate script for PS99. Features auto farm, auto hatch, auto obby, and much more.</p>
            <button 
              onClick={() => navigate('home')}
              className="w-full bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 border border-purple-500/30 py-3 rounded-xl font-semibold transition-colors"
            >
              Get Script
            </button>
          </div>
        </motion.div>

          {/* Jujutsu Legacy Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/5 border border-purple-500/30 rounded-3xl overflow-hidden group hover:border-purple-500/60 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]"
        >
          <div className="h-48 bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://tr.rbxcdn.com/180DAY-9c82acfebaeefd049e89f2a66e9e210c/768/432/Image/Webp/noFilter')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity mix-blend-overlay"></div>
            <Gamepad2 className="w-20 h-20 text-purple-400/50 drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              WORKING
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Jujutsu Lecacy</h3>
            <p className="text-gray-400 text-sm mb-6">The ultimate script for Jujutu Legacy. Features auto farm, Set clan, set technique, and much more.</p>
            <button 
              onClick={() => navigate('home')}
              className="w-full bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 border border-purple-500/30 py-3 rounded-xl font-semibold transition-colors"
            >
              Get Script
            </button>
          </div>
        </motion.div>

        {/* Coming Soon Cards */}
        {[1, 2].map((i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <div className="h-48 bg-white/5 flex items-center justify-center relative">
              <Lock className="w-12 h-12 text-gray-500" />
              <div className="absolute top-4 right-4 bg-gray-500/20 text-gray-400 text-xs font-bold px-3 py-1 rounded-full border border-gray-500/30">
                COMING SOON
              </div>
            </div>
            <div className="p-6">
              <div className="h-6 w-3/4 bg-white/10 rounded mb-3"></div>
              <div className="h-4 w-full bg-white/5 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-white/5 rounded mb-6"></div>
              <div className="w-full bg-white/5 py-3 rounded-xl border border-white/10 text-center text-gray-500 font-semibold">
                In Development
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderTerms = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-24">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
        <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-8">
          <FileText className="w-8 h-8 text-purple-400" />
        </div>
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using Junko Hub, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Junko Hub's website for personal, non-commercial transitory viewing only.</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-400">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose;</li>
              <li>Attempt to decompile or reverse engineer any software contained on the site;</li>
              <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Disclaimer</h2>
            <p>The materials on Junko Hub's website are provided on an 'as is' basis. Junko Hub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>
        </div>
      </div>
    </div>
  );

  const renderPrivacy = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-24">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
        <div className="w-16 h-16 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center mb-8">
          <Shield className="w-8 h-8 text-fuchsia-400" />
        </div>
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>Your privacy is important to us. It is Junko Hub's policy to respect your privacy regarding any information we may collect from you across our website.</p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Information We Collect</h2>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Data Storage</h2>
            <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Third-Party Access</h2>
            <p>We don't share any personally identifying information publicly or with third-parties, except when required to by law.</p>
          </section>
        </div>
      </div>
    </div>
  );

  const renderStatus = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Script <span className="text-purple-500">Status</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Check the real-time operational status of Junko Hub and its features.</p>
      </div>

      {/* Overall Status */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-green-500/10 border border-green-500/20 rounded-3xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
      >
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 relative">
          <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
          <Activity className="w-10 h-10 text-green-400 relative z-10" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-2">All Systems Operational</h2>
          <p className="text-gray-300 text-lg">Junko Hub is currently working perfectly on the latest Roblox version. No major issues detected.</p>
        </div>
      </motion.div>

      {/* Detailed Status Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Core Features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Server className="w-5 h-5 text-purple-400"/> Core Systems</h3>
          <div className="space-y-4">
            {[
              { name: 'Authentication (Key System)', status: 'Operational', color: 'text-green-400', bg: 'bg-green-400/10' },
              { name: 'Script Execution', status: 'Operational', color: 'text-green-400', bg: 'bg-green-400/10' },
              { name: 'Premium Verification', status: 'Operational', color: 'text-green-400', bg: 'bg-green-400/10' },
              { name: 'Auto-Updater', status: 'Operational', color: 'text-green-400', bg: 'bg-green-400/10' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="text-gray-300 font-medium">{item.name}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.bg} ${item.color} border border-current`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Supported Games */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Gamepad2 className="w-5 h-5 text-fuchsia-400"/> Game Scripts</h3>
          <div className="space-y-4">
            {[
              { name: 'Pet Simulator 99', status: 'Working', color: 'text-green-400', bg: 'bg-green-400/10' },
              { name: 'Jujutsu Legacy', status: 'Updating', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
              
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="text-gray-300 font-medium">{item.name}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.bg} ${item.color} border border-current`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderPremium = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Upgrade to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Premium</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Support Junko Hub and get exclusive perks. You can still use it for free, but Premium gives you the ultimate experience.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free Tier */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Free Version</h3>
            <div className="text-3xl font-extrabold mb-2">$0 <span className="text-lg text-gray-500 font-medium">/ forever</span></div>
            <p className="text-gray-400">The standard Junko Hub experience.</p>
          </div>
          
          <div className="space-y-4 mb-8 flex-grow">
            {[
              'Access to all basic scripts',
              'Standard execution speed',
              'Community support',
              'Ad-supported key system'
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-gray-500" />
                {feature}
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => navigate('home')}
            className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 py-4 rounded-xl font-bold transition-colors"
          >
            Continue Free
          </button>
        </motion.div>

        {/* Premium Tier */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-b from-purple-900/40 to-fuchsia-900/10 border border-purple-500/30 rounded-3xl p-8 flex flex-col relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg uppercase tracking-wider">
            Recommended
          </div>
          
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-purple-400">Premium</h3>
            </div>
            <div className="text-3xl font-extrabold mb-2 flex items-center gap-2">
              1,500 <span className="text-lg text-gray-400 font-medium">Robux</span>
            </div>
            <p className="text-gray-300">Unlock the full potential of Junko Hub.</p>
          </div>
          
          <div className="space-y-4 mb-8 flex-grow">
            {[
              'No Key System (Instant Access)',
              'Premium exclusive scripts',
              'Priority execution & updates',
              'Direct developer support',
              'Custom Discord Role'
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-purple-400" />
                </div>
                {feature}
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => window.open('https://www.roblox.com/pt/game-pass/1780331223/', '_blank')}
            className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white py-4 rounded-xl font-bold shadow-lg shadow-purple-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <Star className="w-5 h-5" />
            Buy with Robux
          </button>
        </motion.div>
      </div>
    </div>
  );

  const executorsList = [
    { name: 'Seliware', platform: 'Windows', icon: Monitor, status: 'Working', colorClass: 'from-gray-900/40', iconClass: 'text-gray-400/50', desc: 'Premium Executor with 99% UNC and 94% sUNC Executes Various Powerful Scripts.', unc: 99, sunc: 94, isPaid: true, hasKey: false },
    { name: 'Velocity', platform: 'Windows', icon: Monitor, status: 'Working', colorClass: 'from-white-900/40', iconClass: 'text-white-400/50', desc: 'Keyless Executor with 99% UNC and sUNC 94% supports several scripts.', unc: 99, sunc: 94, isPaid: false, hasKey: false },
    { name: 'Wave', platform: 'Windows', icon: Monitor, status: 'Working', colorClass: 'from-blue-900/40', iconClass: 'text-blue-400/50', desc: 'Premium Windows executor with 99% UNC and 100% sUNC support and high execution capability.', unc: 99, sunc: 100, isPaid: true, hasKey: false },
    { name: 'Potassium', platform: 'Windows', icon: Monitor, status: 'Working', colorClass: 'from-red-900/40', iconClass: 'text-red-400/50', desc: 'Executor with 99% UNC and 100% sUNC and supports several powerful scripts.', unc: 99, sunc: 100, isPaid: true, hasKey: false },
    { name: 'Cosmic', platform: 'Windows', icon: Monitor, status: 'Working', colorClass: 'from-black-900/40', iconClass: 'text-black-400/50', desc: 'Premium Windows executor with 99% UNC and 100% sUNC support and high execution capability.', unc: 99, sunc: 100, isPaid: true, hasKey: false },
    { name: 'Bunni', platform: 'Windows', icon: Monitor, status: 'Working', colorClass: 'from-yellow-900/40', iconClass: 'text-yellow-400/50', desc: 'Free Executor With Key has 99% UNC and 100% sUNC.', unc: 99, sunc: 100, isPaid: false, hasKey: true },





    { name: 'Delta', platform: 'Android', icon: Smartphone, status: 'Working', colorClass: 'from-purple-900/40', iconClass: 'text-purple-400/50', desc: 'A highly stable and popular executor with a great user interface.', unc: 99, sunc: 100, isPaid: false, hasKey: true },
    { name: 'Vega X', platform: 'Android', icon: Smartphone, status: 'Working', colorClass: 'from-red-900/40', iconClass: 'text-red-400/50', desc: 'Excellent mobile executor supporting a wide range of complex scripts.', unc: 98, sunc: 98, isPaid: false, hasKey: true },

    { name: 'CodeX', platform: 'Android / iOS', icon: Smartphone, status: 'Working', colorClass: 'from-fuchsia-900/40', iconClass: 'text-fuchsia-400/50', desc: 'Excellent mobile executor supporting a wide range of complex scripts.', unc: 98, sunc: 96, isPaid: true, hasKey: true },
    { name: 'Arceus X Neo', platform: 'Android / iOS', icon: Smartphone, status: 'Updating', colorClass: 'from-yellow-900/40', iconClass: 'text-yellow-400/50', desc: 'One of the oldest and most known mobile executors.', unc: 99, sunc: 100, isPaid: false, hasKey: true },
    { name: 'Cryptic', platform: 'Android / iOS', icon: Smartphone, status: 'Working', colorClass: 'from-green-900/40', iconClass: 'text-green-400/50', desc: 'Excellent mobile executor supporting a wide range of complex scripts.', unc: 98, sunc: 97, isPaid: false, hasKey: true },
 
      { name: 'Opiumware', platform: 'Mac', icon: Monitor, status: 'Working', colorClass: 'from-blue-900/40', iconClass: 'text-blue-400/50', desc: 'A highly stable and popular executor with a great user interface.', unc: 99, sunc: 100, isPaid: false, hasKey: true },

   
  ];

  const platformTabs = [
    { id: 'all', label: 'All Platforms', icon: Terminal },
    { id: 'windows', label: 'Windows', icon: MonitorSpeaker  },
    { id: 'Android / iOS', label: 'Android', icon: TabletSmartphone  },
    { id: 'ios', label: 'iOS', icon: Smartphone },
    { id: 'mac', label: 'Mac', icon: Monitor }
  ];

  const getFilteredExecutors = () => {
    let filtered = executorsList;

    // Filter by platform
    if (executorPlatform !== 'all') {
      if (executorPlatform === 'windows') filtered = filtered.filter(e => e.platform === 'Windows');
      if (executorPlatform === 'Android / iOS') filtered = filtered.filter(e => e.platform.includes('Android'));
      if (executorPlatform === 'ios') filtered = filtered.filter(e => e.platform.includes('iOS'));
      if (executorPlatform === 'mac') filtered = filtered.filter(e => e.platform === 'Mac');
    }

    // Filter by UNC
    filtered = filtered.filter(e => e.unc >= minUNC);

    // Filter by sUNC
    filtered = filtered.filter(e => e.sunc >= minSUNC);

    // Filter by type (Paid/Free)
    if (executorType === 'paid') filtered = filtered.filter(e => e.isPaid);
    if (executorType === 'free') filtered = filtered.filter(e => !e.isPaid);

    // Filter by key type - if keyless is selected, show only free keyless executors
    if (keyType === 'keyless') {
      filtered = filtered.filter(e => !e.hasKey && !e.isPaid);
    }
    if (keyType === 'withkey') filtered = filtered.filter(e => e.hasKey);

    return filtered;
  };

  const renderExecutors = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Supported <span className="text-purple-500">Executors</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Junko Hub is highly optimized and compatible with all major executors. Choose your preferred platform below.</p>
      </div>

      {/* Platform Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
        <AnimatePresence mode="wait">
          {platformTabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setExecutorPlatform(tab.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                executorPlatform === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{tab.label}</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Additional Filters */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mb-12">
        <h3 className="text-xl font-bold mb-6">Advanced Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* UNC Filter */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-gray-300">Min UNC: {minUNC}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={minUNC}
              onChange={(e) => setMinUNC(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          {/* sUNC Filter */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-gray-300">Min sUNC: {minSUNC}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={minSUNC}
              onChange={(e) => setMinSUNC(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-gray-300">Type</label>
            <select
              value={executorType}
              onChange={(e) => setExecutorType(e.target.value)}
              className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 font-semibold cursor-pointer transition-all"
            >
              <option value="all">All Types</option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
          </div>

          {/* Key Type Filter */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-gray-300">Key System</label>
            <select
              value={keyType}
              onChange={(e) => setKeyType(e.target.value)}
              className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 font-semibold cursor-pointer transition-all"
            >
              <option value="all">All</option>
              <option value="keyless">Keyless</option>
              <option value="withkey">With Key</option>
            </select>
          </div>
        </div>
      </div>

      {/* Executors Grid */}
      {getFilteredExecutors().length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredExecutors().map((exec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 group"
            >
              <div className={`h-32 bg-gradient-to-br ${exec.colorClass} to-transparent relative overflow-hidden flex items-center justify-center border-b border-white/5`}>
                <exec.icon className={`w-16 h-16 ${exec.iconClass} group-hover:scale-110 transition-transform duration-500`} />
                <div className={`absolute top-4 right-4 ${exec.status === 'Working' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'} text-xs font-bold px-3 py-1 rounded-full border flex items-center gap-1`}>
                  {exec.status === 'Working' && <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>}
                  {exec.status.toUpperCase()}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold">{exec.name}</h3>
                </div>
                <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">{exec.platform}</div>
                
                {/* Specs Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded font-semibold border border-purple-500/30">
                    UNC: {exec.unc}%
                  </div>
                  <div className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded font-semibold border border-blue-500/30">
                    sUNC: {exec.sunc}%
                  </div>
                  <div className={`${exec.isPaid ? 'bg-red-500/20 text-red-300 border-red-500/30' : 'bg-green-500/20 text-green-300 border-green-500/30'} text-xs px-2 py-1 rounded font-semibold border`}>
                    {exec.isPaid ? 'Paid' : 'Free'}
                  </div>
                  {!exec.isPaid && (
                    <div className={`${exec.hasKey ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'} text-xs px-2 py-1 rounded font-semibold border`}>
                      {exec.hasKey ? 'With Key' : 'Keyless'}
                    </div>
                  )}
                </div>
                
                <p className="text-gray-400 text-sm mb-6 h-10">{exec.desc}</p>
                <button 
                  onClick={() => window.open('https://www.executors.online/executors', '_blank')}
                  className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">Nenhum executor disponível para esta plataforma no momento.</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0510] text-white font-sans selection:bg-purple-500/30 flex flex-col">
      {/* Background Grid & Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-900/20 blur-[120px] rounded-full"></div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0510] backdrop-blur-md">
        <nav className="flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto w-full">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigate('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Junko<span className="text-purple-500">Hub</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-400">
            <button onClick={() => navigate('home')} className={`hover:text-white transition-colors ${activeTab === 'home' ? 'text-white' : ''}`}>Home</button>
            <button onClick={() => navigate('games')} className={`hover:text-white transition-colors ${activeTab === 'games' ? 'text-white' : ''}`}>Games</button>
            <button onClick={() => navigate('executors')} className={`hover:text-white transition-colors ${activeTab === 'executors' ? 'text-white' : ''}`}>Executors</button>
            <button onClick={() => navigate('status')} className={`hover:text-white transition-colors ${activeTab === 'status' ? 'text-white' : ''}`}>Status</button>
            <a href={discordUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">Discord <ExternalLink className="w-3 h-3" /></a>
          </div>

          <div className="hidden md:block">
            <button 
              onClick={() => navigate('premium')}
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 px-5 py-2.5 rounded-full text-sm font-bold text-white shadow-lg shadow-purple-500/20 transition-all active:scale-95 flex items-center gap-2"
            >
              <Crown className="w-4 h-4" />
              Buy Premium
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[73px] left-0 right-0 z-50 border-b border-white/5 bg-[#0a0510] backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              <button 
                onClick={() => navigate('home')} 
                className={`text-left text-lg font-medium ${activeTab === 'home' ? 'text-purple-400' : 'text-gray-300'}`}
              >
                Home
              </button>
              <button 
                onClick={() => navigate('games')} 
                className={`text-left text-lg font-medium ${activeTab === 'games' ? 'text-purple-400' : 'text-gray-300'}`}
              >
                Games
              </button>
              <button 
                onClick={() => navigate('executors')} 
                className={`text-left text-lg font-medium ${activeTab === 'executors' ? 'text-purple-400' : 'text-gray-300'}`}
              >
                Executors
              </button>
              <button 
                onClick={() => navigate('status')} 
                className={`text-left text-lg font-medium ${activeTab === 'status' ? 'text-purple-400' : 'text-gray-300'}`}
              >
                Status
              </button>
              <a 
                href={discordUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="text-left text-lg text-gray-300 hover:text-white font-medium flex items-center gap-2"
              >
                Discord <ExternalLink className="w-4 h-4" />
              </a>
              <button 
                onClick={() => navigate('premium')}
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-4 py-3 rounded-xl font-bold text-center mt-2 shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2"
              >
                <Crown className="w-5 h-5" />
                Buy Premium
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'home' && renderHome()}
            {activeTab === 'games' && renderGames()}
            {activeTab === 'executors' && renderExecutors()}
            {activeTab === 'status' && renderStatus()}
            {activeTab === 'premium' && renderPremium()}
            {activeTab === 'terms' && renderTerms()}
            {activeTab === 'privacy' && renderPrivacy()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 px-4 sm:px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('home')}>
            <Zap className="w-5 h-5 text-purple-500 fill-purple-500" />
            <span className="font-bold">Junko Hub</span>
          </div>
          <p className="text-gray-500 text-sm text-center md:text-left">© 2026 Junko Hub. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
            <button onClick={() => navigate('terms')} className={`hover:text-white transition-colors ${activeTab === 'terms' ? 'text-white' : ''}`}>Terms</button>
            <button onClick={() => navigate('privacy')} className={`hover:text-white transition-colors ${activeTab === 'privacy' ? 'text-white' : ''}`}>Privacy</button>
            <a href={discordUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Discord <MessageSquare className="w-3 h-3" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

