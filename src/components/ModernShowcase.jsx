import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { 
  Users, Video, MessageCircle, TrendingUp, 
  Target, Megaphone, PlayCircle, FileVideo,
  ArrowRight, ChevronRight, Sparkles, Globe,
  Mail, LinkedinIcon, MessageSquare, ArrowLeft,
  Clock, Search, Zap, MousePointer, Check
} from 'lucide-react';

const ModernShowcase = () => {
  const [currentStep, setCurrentStep] = useState('challenges');
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const challenges = [
    {
      id: 'leads',
      title: 'Generate More Leads',
      icon: <Target className="w-8 h-8" />,
      color: 'from-purple-500 to-blue-500',
      description: 'Need more qualified prospects?',
      subtext: 'AI-powered lead generation',
      solutions: ['ai-prospecting']
    },
    {
      id: 'scale',
      title: 'Scale Your Outreach',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-500',
      description: 'Want to reach more prospects?',
      subtext: 'Personalized messaging at scale',
      solutions: ['ai-personalization']
    },
    {
      id: 'content',
      title: 'Create More Content',
      icon: <FileVideo className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      description: 'Need engaging video content?',
      subtext: 'AI video creation in minutes',
      solutions: ['content-creation']
    },
    {
      id: 'standout',
      title: 'Stand Out',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      description: 'Want to cut through the noise?',
      subtext: 'AI-powered personalization',
      solutions: ['personalization']
    }
  ];

  const solutions = {
    'ai-prospecting': {
      title: 'AI-Powered Lead Generation',
      subtitle: 'Smart Prospecting',
      description: 'Find and qualify your ideal customers automatically.',
      features: [
        {
          icon: <Search className="w-5 h-5" />,
          title: 'AI Lead Research',
          description: 'Automatically find and qualify prospects that match your ICP'
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: 'Real-time Enrichment',
          description: 'Get detailed company and contact data instantly'
        },
        {
          icon: <Target className="w-5 h-5" />,
          title: 'Smart Scoring',
          description: 'AI ranks prospects by likelihood to convert'
        },
        {
          icon: <Check className="w-5 h-5" />,
          title: 'Auto-Qualification',
          description: 'Let AI pre-qualify leads based on your criteria'
        }
      ],
      cta: 'Watch Demo',
      demo: 'Try It Now'
    },
    'ai-personalization': {
      title: 'Personalized Outreach at Scale',
      subtitle: 'Smart Messaging',
      description: "Reach more prospects while keeping it personal.",
      features: [
        {
          icon: <MessageCircle className="w-5 h-5" />,
          title: 'AI Message Crafting',
          description: 'Generate personalized messages that resonate'
        },
        {
          icon: <Globe className="w-5 h-5" />,
          title: 'Multi-Channel',
          description: 'Reach prospects on their preferred platforms'
        },
        {
          icon: <Clock className="w-5 h-5" />,
          title: 'Smart Timing',
          description: 'AI determines the best time to reach out'
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: 'Engagement Tracking',
          description: 'See who engages with your outreach'
        }
      ],
      cta: 'See It Work',
      demo: 'Try Demo'
    },
    'content-creation': {
      title: 'Instant Content Creation',
      subtitle: 'Professional Videos & AI Content',
      description: 'Create engaging content in minutes.',
      features: [
        {
          icon: <Video className="w-5 h-5" />,
          title: 'Quick Videos',
          description: 'Create short, high-converting videos for sales outreach'
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: 'Custom Intros',
          description: 'Personalize videos for each prospect'
        },
        {
          icon: <Globe className="w-5 h-5" />,
          title: 'Explainer Videos',
          description: 'Create in-depth content to nurture your audience'
        },
        {
          icon: <MousePointer className="w-5 h-5" />,
          title: 'Smart CTAs',
          description: 'Add interactive elements that convert'
        }
      ],
      cta: 'Watch Demo',
      demo: 'Create Now'
    },
    'personalization': {
      title: 'Stand Out & Convert',
      subtitle: 'Smart Engagement',
      description: "Make every interaction feel personal and relevant.",
      features: [
        {
          icon: <Video className="w-5 h-5" />,
          title: 'Custom Videos',
          description: 'Create personalized video messages'
        },
        {
          icon: <Globe className="w-5 h-5" />,
          title: 'Dynamic Pages',
          description: 'Landing pages that adapt to each visitor'
        },
        {
          icon: <MessageSquare className="w-5 h-5" />,
          title: 'Live Tracking',
          description: 'Monitor engagement in real-time'
        },
        {
          icon: <Target className="w-5 h-5" />,
          title: 'Smart Follow-up',
          description: 'AI determines perfect timing for follow-ups'
        }
      ],
      cta: 'See Demo',
      demo: 'Try It Now'
    },
    'multi-channel': {
      title: 'Multi-Channel Outreach',
      description: "Reach prospects where they're most responsive",
      features: [
        'Email sequences',
        'LinkedIn automation',
        'Video messages',
        'SMS integration'
      ],
      demo: 'channel-demo'
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -8,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: { 
      rotate: 5, 
      scale: 1.1,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1
      }
    }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#000108] text-white overflow-y-scroll overflow-x-hidden relative [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-black/20 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
      {/* Background Mesh with Animation */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:24px_24px] opacity-50"
        animate={{
          backgroundPosition: ["0px 0px", "24px 24px"],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />
      
      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      <AnimatePresence mode="wait">
        {currentStep === 'challenges' && (
          <LayoutGroup>
            <motion.div
              key="challenges"
              className="min-h-screen flex flex-col relative z-10"
              {...fadeIn}
            >
              {/* Header with stagger animation */}
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="pt-8 md:pt-16 pb-8 md:pb-12 text-center px-4"
              >
                <motion.div
                  variants={itemVariants}
                  className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium text-white/80 backdrop-blur-sm border border-white/10 hover:bg-white/20 hover:border-white/20 transition-colors cursor-pointer"
                >
                  AI Sales Solutions
                </motion.div>
                <motion.h1 
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight"
                >
                  Unlock AI-Powered Sales
                </motion.h1>
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
                >
                  Boost conversions with cutting-edge AI tools
                </motion.p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="text-center mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Choose Your Challenge
                </h2>
              </motion.div>

              {/* Challenge Grid with improved animations */}
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="flex-1 max-w-6xl mx-auto px-4 py-4 grid md:grid-cols-2 gap-4 items-start"
              >
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge.id}
                    variants={itemVariants}
                    whileHover="hover"
                    onHoverStart={() => setHoveredCard(challenge.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    onClick={() => {
                      setSelectedChallenge(challenge);
                      setCurrentStep('solutions');
                    }}
                    className={`group cursor-pointer rounded-2xl p-6 md:p-8 bg-gradient-to-br 
                      ${challenge.id === 'leads' ? 'from-[#8129D7] to-[#2A5EDB]' : 
                      challenge.id === 'scale' ? 'from-[#2A5EDB] to-[#03AD9C]' : 
                      challenge.id === 'content' ? 'from-[#03AD9C] to-[#8129D7]' : 
                      'from-[#2A5EDB] to-[#03AD9C]'}
                      bg-opacity-5 hover:bg-opacity-10 backdrop-blur-xl border border-white/10 
                      hover:border-white/20 transition-all duration-300 relative overflow-hidden`}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={hoveredCard === challenge.id ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 md:gap-6">
                        <motion.div 
                          variants={iconVariants}
                          className="p-3 md:p-4 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors"
                        >
                          {challenge.icon}
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3 
                            className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                            layout
                          >
                            {challenge.title}
                          </motion.h3>
                          <motion.p 
                            className="text-white/80 text-base md:text-lg mb-1"
                            layout
                          >
                            {challenge.description}
                          </motion.p>
                          <motion.p 
                            className="text-white/60 text-sm md:text-base"
                            layout
                          >
                            {challenge.subtext}
                          </motion.p>
                        </div>
                      </div>
                      <motion.div 
                        className="mt-4 md:mt-6 flex items-center gap-2 text-white/60 group-hover:text-white"
                        whileHover={{ x: 5 }}
                        layout
                      >
                        <span className="font-medium text-sm md:text-base">Explore Solution</span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </LayoutGroup>
        )}

        {currentStep === 'solutions' && selectedChallenge && (
          <motion.div
            key="solutions"
            className="min-h-screen relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-full max-w-4xl mx-auto px-4 py-8 md:py-16">
              <motion.button 
                onClick={() => setCurrentStep('challenges')}
                className="group mb-8 md:mb-12 inline-flex items-center gap-2 text-white/60 hover:text-white text-base md:text-lg font-medium"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                <span>Back</span>
              </motion.button>
              
              <div className="space-y-12">
                {selectedChallenge.solutions.map((solutionId, index) => {
                  const solution = solutions[solutionId];
                  return (
                    <motion.div
                      key={solutionId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mx-auto"
                    >
                      <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                          {solution.title}
                        </h2>
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 text-base md:text-lg font-medium text-white/80 backdrop-blur-sm border border-white/10">
                          {solution.subtitle}
                        </div>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                          {solution.description}
                        </p>
                      </div>

                      <div className="backdrop-blur-xl bg-white/[0.03] rounded-2xl p-6 md:p-8 border border-white/10">
                        <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-white/80">Key Features</h3>
                        <div className="grid sm:grid-cols-2 gap-6 mb-8 md:mb-12">
                          {solution.features.map((feature, i) => (
                            <motion.div 
                              key={i} 
                              className="group"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + (i * 0.1) }}
                            >
                              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] group-hover:bg-white/[0.04] border border-white/5 group-hover:border-white/10 transition-all duration-300">
                                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                                  {feature.icon}
                                </div>
                                <div>
                                  <h4 className="font-medium text-white/90 mb-1">{feature.title}</h4>
                                  <p className="text-white/60 text-sm">{feature.description}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                          <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 py-3 md:py-4 px-6 rounded-xl flex items-center justify-center gap-3 text-white font-medium border border-white/10 hover:border-white/20 transition-colors"
                          >
                            <PlayCircle className="w-5 h-5" />
                            {solution.cta}
                          </motion.button>
                          
                          <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-white/5 hover:bg-white/10 py-3 md:py-4 px-6 rounded-xl flex items-center justify-center gap-3 text-white font-medium border border-white/10 hover:border-white/20 transition-colors"
                          >
                            <MousePointer className="w-5 h-5" />
                            {solution.demo}
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModernShowcase; 