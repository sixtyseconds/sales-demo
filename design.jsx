import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Video, MessageCircle, TrendingUp, 
  Target, Megaphone, PlayCircle, FileVideo,
  ArrowRight, ChevronRight, Sparkles, Globe,
  Mail, LinkedinIcon, MessageSquare
} from 'lucide-react';

const ModernShowcase = () => {
  const [currentStep, setCurrentStep] = useState('challenges');
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [selectedSolution, setSelectedSolution] = useState(null);

  const challenges = [
    {
      id: 'leads',
      title: 'Generate Steady Leads',
      icon: <Target className="w-8 h-8" />,
      color: 'from-purple-500 to-blue-500',
      description: 'Struggling to maintain a consistent pipeline of quality leads?',
      solutions: ['ai-prospecting', 'multi-channel']
    },
    {
      id: 'scale',
      title: 'Scale Outreach',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-500',
      description: 'Need to reach more prospects without sacrificing personalization?',
      solutions: ['ai-personalization', 'automation']
    },
    {
      id: 'content',
      title: 'Create More Content',
      icon: <FileVideo className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      description: 'Want to produce engaging video content at scale?',
      solutions: ['video-creation', 'templates']
    },
    {
      id: 'standout',
      title: 'Stand Out',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      description: 'Looking to cut through the noise and grab attention?',
      solutions: ['personalized-video', 'engagement']
    }
  ];

  const solutions = {
    'ai-prospecting': {
      title: 'AI-Powered Prospecting',
      description: 'Let AI find and qualify your ideal customers',
      features: [
        'Automatic ICP identification',
        'Real-time data enrichment',
        'Smart lead scoring',
        'Engagement prediction'
      ],
      demo: 'prospecting-demo'
    },
    'multi-channel': {
      title: 'Multi-Channel Outreach',
      description: 'Reach prospects where they're most responsive',
      features: [
        'Email sequences',
        'LinkedIn automation',
        'Video messages',
        'SMS integration'
      ],
      demo: 'channel-demo'
    },
    // Add more solutions...
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {currentStep === 'challenges' && (
          <motion.div
            key="challenges"
            className="h-screen flex flex-col"
            {...fadeIn}
          >
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-10 pb-8 text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                What's Your Biggest Challenge?
              </h1>
              <p className="text-gray-400 text-lg">
                Select your primary focus and we'll show you how to solve it
              </p>
            </motion.div>

            {/* Challenge Grid */}
            <div className="flex-1 max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-1 items-center">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setSelectedChallenge(challenge);
                    setCurrentStep('solutions');
                  }}
                  className={`group cursor-pointer rounded-2xl p-6 bg-gradient-to-br ${challenge.color} 
                    bg-opacity-10 hover:bg-opacity-20 backdrop-blur-xl border border-white/10 
                    hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                      {challenge.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{challenge.title}</h3>
                      <p className="text-gray-300">{challenge.description}</p>
                    </div>
                  </div>
                  <motion.div 
                    className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-white"
                    whileHover={{ x: 5 }}
                  >
                    <span>Discover solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {currentStep === 'solutions' && selectedChallenge && (
          <motion.div
            key="solutions"
            className="h-screen"
            {...fadeIn}
          >
            {/* Solution-specific content here */}
            <div className="relative h-full">
              <button 
                onClick={() => setCurrentStep('challenges')}
                className="absolute top-4 left-4 text-white/60 hover:text-white flex items-center gap-2"
              >
                ← Back to Challenges
              </button>
              
              {/* Solution content will go here */}
              <div className="pt-20 px-4 max-w-7xl mx-auto">
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-3xl font-bold mb-8 text-center"
                >
                  Solutions for {selectedChallenge.title}
                </motion.h2>
                
                {/* Solutions grid or interactive showcase */}
                <div className="grid md:grid-cols-2 gap-8">
                  {selectedChallenge.solutions.map((solutionId, index) => {
                    const solution = solutions[solutionId];
                    return (
                      <motion.div
                        key={solutionId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10"
                      >
                        <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                        <p className="text-gray-400 mb-4">{solution.description}</p>
                        <ul className="space-y-2 mb-6">
                          {solution.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button className="bg-emerald-500/20 hover:bg-emerald-500/30 py-2 px-4 rounded-lg flex items-center gap-2">
                          <PlayCircle className="w-5 h-5" />
                          Watch Demo
                        </button>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModernShowcase;