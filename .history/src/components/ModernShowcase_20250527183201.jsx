import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { 
  Users, Video, MessageCircle, TrendingUp, 
  Target, Megaphone, PlayCircle, FileVideo,
  ArrowRight, ChevronRight, Sparkles, Globe,
  Mail, LinkedinIcon, MessageSquare, ArrowLeft,
  Clock, Search, Zap, MousePointer, Check
} from 'lucide-react';

const ModernShowcase = ({ currency, showPricing: initialShowPricing }) => {
  const navigate = useNavigate();
  const { challengeId } = useParams();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState('challenges');
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [audienceIndex, setAudienceIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState(0);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const [shuffledAudience, setShuffledAudience] = useState([]);
  const [showPricing, setShowPricing] = useState(initialShowPricing || false);
  const [selectedCurrency, setSelectedCurrency] = useState(currency || 'GBP');
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [navigationHistory, setNavigationHistory] = useState(['challenges']);

  // Utility function to convert UK spelling to US spelling when USD is selected
  const convertSpelling = (text) => {
    if (selectedCurrency !== 'USD') return text;
    
    const spellingMap = {
      'personalisation': 'personalization',
      'Personalisation': 'Personalization',
      'personalised': 'personalized',
      'Personalised': 'Personalized',
      'optimisation': 'optimization',
      'Optimisation': 'Optimization',
      'customisation': 'customization',
      'Customisation': 'Customization',
      'utilise': 'utilize',
      'Utilise': 'Utilize',
      'behavioural': 'behavioral',
      'Behavioural': 'Behavioral',
      'organisation': 'organization',
      'Organisation': 'Organization',
      'realise': 'realize',
      'Realise': 'Realize',
      'colour': 'color',
      'Colour': 'Color',
      'behaviour': 'behavior',
      'Behaviour': 'Behavior',
      'centre': 'center',
      'Centre': 'Center',
      'favour': 'favor',
      'Favour': 'Favor',
      'honour': 'honor',
      'Honour': 'Honor',
      'labour': 'labor',
      'Labour': 'Labor',
      'neighbour': 'neighbor',
      'Neighbour': 'Neighbor',
      'analyse': 'analyze',
      'Analyse': 'Analyze',
      'defence': 'defense',
      'Defence': 'Defense',
      'licence': 'license',
      'Licence': 'License',
      'offence': 'offense',
      'Offence': 'Offense',
      'grey': 'gray',
      'Grey': 'Gray',
      'programme': 'program',
      'Programme': 'Program',
      'specialise': 'specialize',
      'Specialise': 'Specialize',
      'recognise': 'recognize',
      'Recognise': 'Recognize',
      'organise': 'organize',
      'Organise': 'Organize',
      'emphasise': 'emphasize',
      'Emphasise': 'Emphasize',
      'summarise': 'summarize',
      'Summarise': 'Summarize',
      'categorise': 'categorize',
      'Categorise': 'Categorize',
      'prioritise': 'prioritize',
      'Prioritise': 'Prioritize',
      'minimise': 'minimize',
      'Minimise': 'Minimize',
      'maximise': 'maximize',
      'Maximise': 'Maximize',
      'standardise': 'standardize',
      'Standardise': 'Standardize',
      'modernise': 'modernize',
      'Modernise': 'Modernize',
      'characterise': 'characterize',
      'Characterise': 'Characterize',
      'criticise': 'criticize',
      'Criticise': 'Criticize',
      'apologise': 'apologize',
      'Apologise': 'Apologize'
    };

    let convertedText = text;
    Object.entries(spellingMap).forEach(([uk, us]) => {
      convertedText = convertedText.replace(new RegExp(uk, 'g'), us);
    });
    
    return convertedText;
  };

  const audienceTypes = [
    'recruiting',
    'sourcing',
    'video',
    'enrichment',
    'sales',
    'content',
    'prospecting',
    'data entry',
    'marketing',
    'new audiences',
    'leads',
    'referrals',
    'prospects',
    'candidates'
  ];

  const colors = [
    { color: '#8129D7', shadow: 'rgba(129,41,215,0.5)' },  // Purple
    { color: '#03AD9C', shadow: 'rgba(3,173,156,0.5)' },   // Green
    { color: '#2A5EDB', shadow: 'rgba(42,94,219,0.5)' }    // Blue
  ];

  const challenges = [
    {
      id: 'outreach',
      title: 'Multi Channel Outreach',
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-[#8129D7]/40 to-[#9747FF]/40 hover:from-[#8129D7] hover:to-[#9747FF]',
      description: 'Full-funnel engagement that converts',
      subtext: 'AI-Powered lead generation & nurturing',
      features: [
        {
          title: convertSpelling('Personalised AI Emails with Video'),
          description: convertSpelling('Grab and hold attention with custom video messages, researched and tailored to each prospect. Linking to dynamic, personalised landing pages.')
        },
        {
          title: 'Advanced Data Sourcing',
          description: 'Comprehensive data sourcing using Ideal Customer Profile analysis to identify your most appropriate B2B prospects with precision.'
        },
        {
          title: 'Dedicated Success Team',
          description: convertSpelling('Our internal optimisation experts continuously refine and improve your campaigns using data-driven insights and industry leading practices.')
        },
        {
          title: 'Full-Funnel & Multi-Channel',
          description: convertSpelling('Seamless top and middle funnel strategies that utilise email outreach, paid advertising and smart retargeting for consistent engagement.')
        }
      ],
      additionalInfo: {
        integration: 'All of this feeds automatically into your CRM, live notifications and our live Analytics Dashboard.',
        compatibility: convertSpelling('Works hand-in-hand with our Personalised Landing Pages and Bespoke Content Creation.')
      },
      solutions: ['outreach-solution']
    },
    {
      id: 'landing',
      title: convertSpelling('Personalised Landing Pages'),
      icon: <Globe className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-[#2A5EDB]/40 to-[#4C7AE6]/40 hover:from-[#2A5EDB] hover:to-[#4C7AE6]',
      description: 'Dynamic pages that adapt to every visitor',
      subtext: 'Real-time personalization engine',
      features: [
        {
          title: convertSpelling('Intelligent Personalisation'),
          description: convertSpelling('Pages dynamically adapt to each visitor using real-time data, company information and behavioural insights to create a truly personalised experience for every visitor.')
        },
        {
          title: 'Custom Video Integration',
          description: convertSpelling('Embed quality, personalised videos that speak directly to your prospect, featuring their name and tailored messaging and voiceovers.')
        },
        {
          title: 'Dynamic AI Voiceovers',
          description: 'Our AI automatically crafts custom voiceovers to hold viewer engagement and send messages that truly resonate.'
        },
        {
          title: 'Advanced Analytics & Testing',
          description: 'Our pages feature built-in user analytics with real time tracking to show exactly how prospects engage with your content.'
        }
      ],
      additionalInfo: {
        compatibility: 'Works hand-in-hand with our Multi Channel Outreach and Bespoke Content Creation.'
      },
      solutions: ['landing-solution']
    },
    {
      id: 'content',
      title: 'Bespoke Video Content',
      icon: <FileVideo className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-[#03AD9C]/40 to-[#06C4B0]/40 hover:from-[#03AD9C] hover:to-[#06C4B0]',
      description: 'Scale your video content effortlessly',
      subtext: 'AI-powered video automation',
      features: [
        {
          title: 'Bespoke Video Production',
          description: 'Our expert in-house media team are on hand to craft incredible videos for adverts, product explainers and motion graphics to elevate your brand.'
        },
        {
          title: 'Autonomous Content AI',
          description: 'Our AI agent automatically monitors your website and creates brand-aligned videos using pre-approved templates vetted by your marketing team.'
        },
        {
          title: 'Smart Rebuildable Template System',
          description: 'Mix and match from our pre-built templates to create unique videos in minutes. All templates merge brand consistency with creative flexibility.'
        },
        {
          title: 'Developer Friendly API',
          description: 'Integrate video creation directly into your workflows with our robust API. Generate, customise and retrieve videos programmatically for seamless automation.'
        }
      ],
      additionalInfo: {
        compatibility: 'Works hand-in-hand with our Multi Channel Outreach and our Personalised Landing Pages.'
      },
      solutions: ['content-solution']
    },
    {
      id: 'tools',
      title: 'Smart Prospecting Tools',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-[#8129D7]/40 to-[#2A5EDB]/40 hover:from-[#8129D7] hover:to-[#2A5EDB]',
      description: 'Supercharge your team\'s productivity',
      subtext: 'AI-powered prospecting suite',
      features: [
        {
          title: 'Intelligent Chrome Extension',
          description: 'Access our complete prospecting toolkit directly in your browser. Extract data, personalize outreach, and manage campaigns with a single click.'
        },
        {
          title: 'Advanced LinkedIn Automation',
          description: 'Smart profile analysis, automated connection requests, and personalised messaging with built-in safety limits and natural engagement patterns.'
        },
        {
          title: 'Instant Page Builder',
          description: 'Create dynamic landing pages in seconds using AI-powered templates. Each page automatically personalizes to your prospect\'s company and role.'
        },
        {
          title: 'Video Prospecting Studio',
          description: 'Generate personalised video messages at scale using our modular system. Mix pre-recorded segments with custom intros for maximum impact.'
        }
      ],
      solutions: ['tools-solution']
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
    'ai-personalisation': {
      title: convertSpelling('Personalised Outreach at Scale'),
      subtitle: 'Smart Messaging',
      description: "Reach more prospects while keeping it personal.",
      features: [
        {
          icon: <MessageCircle className="w-5 h-5" />,
          title: 'AI Message Crafting',
          description: 'Generate personalised messages that resonate'
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
      title: 'Professional Videos & AI Content',
      subtitle: 'Video Content Creation',
      description: 'Create engaging content that converts and nurtures.',
      features: [
        {
          icon: <Video className="w-5 h-5" />,
          title: 'Quick Videos',
          description: 'Short, impactful videos for high conversion rates'
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: 'Custom Intros',
          description: convertSpelling('Personalised video messages for prospects')
        },
        {
          icon: <FileVideo className="w-5 h-5" />,
          title: 'Explainer Videos',
          description: 'In-depth content to educate and nurture your audience'
        },
        {
          icon: <MousePointer className="w-5 h-5" />,
          title: 'Smart CTAs',
          description: 'Interactive elements that drive engagement'
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
          description: convertSpelling('Create personalised video messages')
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
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { 
      opacity: 0, 
      y: -30, 
      transition: { 
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      } 
    }
  };

  const cardVariants = {
    initial: { scale: 0.95, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -8,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: { 
      rotate: [0, -10, 10, 0],
      scale: [1, 1.1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Add useEffect for shuffling on mount
  useEffect(() => {
    setShuffledAudience(shuffleArray(audienceTypes));
  }, []);

  // Add useEffect for initial delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationStarted(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Modify the existing useEffect for rotation
  useEffect(() => {
    if (!isAnimationStarted || shuffledAudience.length === 0) return;
    
    const interval = setInterval(() => {
      setAudienceIndex((current) => (current + 1) % shuffledAudience.length);
      setCurrentColor((current) => (current + 1) % colors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAnimationStarted, shuffledAudience]);

  // Update useEffect to handle URL-based navigation
  useEffect(() => {
    const path = location.pathname;
    
    // Handle pricing routes (both regular and currency-specific)
    if (path === '/pricing' || path.endsWith('/pricing')) {
      setShowPricing(true);
      setCurrentStep('pricing');
    } 
    // Handle solution routes with challengeId
    else if (challengeId) {
      const challenge = challenges.find(c => c.id === challengeId);
      if (challenge) {
        setSelectedChallenge(challenge);
        setCurrentStep('solutions');
      } else {
        // Navigate back to the appropriate home page based on currency
        const prefix = getCurrencyPrefix();
        navigate(prefix || '/', { replace: true });
      }
    } 
    // Handle home/challenges routes
    else {
      setCurrentStep('challenges');
      setShowPricing(false);
    }
  }, [location.pathname, challengeId, currency]);

  // Update currency when prop changes (from route)
  useEffect(() => {
    if (currency && currency !== selectedCurrency) {
      setSelectedCurrency(currency);
    }
  }, [currency]);

  // Update showPricing when prop changes (from route)
  useEffect(() => {
    if (initialShowPricing !== undefined) {
      setShowPricing(initialShowPricing);
      if (initialShowPricing) {
        setCurrentStep('pricing');
      }
    }
  }, [initialShowPricing]);

  const pricingPlans = [
    {
      name: 'Self Managed',
      price: '399',
      description: convertSpelling('Access to our Personalisation Technology. Perfect for teams with established email infrastructure.'),
      features: [
        {
          name: '2000 Self-Serve AI Video Emails/month',
          tooltip: convertSpelling('Create personalised video messages with AI-powered customisation for each prospect.'),
          included: true
        },
        {
          name: 'Basic Template Landing Page',
          tooltip: 'We host a template landing page ready that auto populates with your selected video.',
          included: true
        },
        {
          name: convertSpelling('Basic Personalisation'),
          tooltip: convertSpelling('Personalise the landing page content with each prospects name.'),
          included: true
        },
        {
          name: 'Self-Serve AI VoiceOver',
          tooltip: 'Add your own professional voiceovers using AI technology.',
          included: true
        },
        {
          name: 'Standard Support',
          tooltip: 'Chat & Email Support during business hours.',
          included: true
        },
        {
          name: 'B2B Contact Sourcing',
          tooltip: 'Fresh, verified B2B contact data for your target market.',
          included: false
        },
        {
          name: convertSpelling('Optimisation Team'),
          tooltip: convertSpelling('Dedicated team for campaign optimisation and strategy.'),
          included: false
        },
        {
          name: convertSpelling('Campaign Optimisation'),
          tooltip: convertSpelling('Regular campaign optimisation and performance reviews.'),
          included: false
        },
        {
          name: 'Deliverability Setup & Management',
          tooltip: 'Our dedicated team ensure maximum message delivery.',
          included: false
        },
        {
          name: 'Smart Follow-ups',
          tooltip: convertSpelling('AI-powered follow-up sequences based on prospect behaviour.'),
          included: false
        },
        {
          name: 'Ad Videos',
          tooltip: 'Bespoke videos with professional editing - Perfect for capturing attention.',
          included: false
        },
        {
          name: 'CRM Integration',
          tooltip: 'Webhooks, HubSpot, Pipedrive, Zoho.',
          included: false
        },
        {
          name: 'Stats Updates',
          tooltip: 'Comprehensive performance metrics and insights.',
          included: false
        },
        {
          name: 'Managed Replies',
          tooltip: 'Our internal team monitor and reply to prospect messages on time.',
          included: false
        }
      ],
      gradient: 'from-[#8129D7]/40 to-[#9747FF]/40',
      buttonGradient: 'from-[#8129D7] to-[#9747FF]'
    },
    {
      name: 'Growth',
      price: '999',
      description: 'Ideal for SMEs scaling engagement & automation',
      features: [
        {
          name: '4,000 AI Video Emails/month',
          tooltip: convertSpelling('We generate and send personalised AI-crafted emails with embedded video content.'),
          included: true
        },
        {
          name: 'Custom Landing Page',
          tooltip: 'Professionally built and fully hosted landing page with your branding.',
          included: true
        },
        {
          name: convertSpelling('Advanced Personalisation'),
          tooltip: convertSpelling('Personalise the landing page content with each prospects name.'),
          included: true
        },
        {
          name: 'Pro AI Voice',
          tooltip: 'Choose a ProAI voiceover to hold engagement.',
          included: true
        },
        {
          name: 'Priority Support',
          tooltip: 'Chat, Email & Live Slack Support.',
          included: true
        },
        {
          name: '2,000 B2B Contacts/month',
          tooltip: 'Fresh, verified B2B contact data for your target market.',
          included: true
        },
        {
          name: convertSpelling('Optimisation Team'),
          tooltip: convertSpelling('Dedicated team for campaign optimisation and strategy.'),
          included: true
        },
        {
          name: convertSpelling('Monthly Optimisation'),
          tooltip: convertSpelling('Regular campaign optimisation and performance reviews.'),
          included: true
        },
        {
          name: 'Deliverability Setup & Management',
          tooltip: 'Our dedicated team ensure maximum message delivery.',
          included: true
        },
        {
          name: 'Smart Follow-ups',
          tooltip: convertSpelling('AI-powered follow-up sequences based on prospect behaviour.'),
          included: true
        },
        {
          name: '2x 30 second Ad Videos',
          tooltip: 'Bespoke videos with professional editing - Perfect for capturing attention.',
          included: true
        },
        {
          name: 'CRM Integration',
          tooltip: 'Webhooks, HubSpot, Pipedrive, Zoho.',
          included: true
        },
        {
          name: 'Daily Stats',
          tooltip: 'Comprehensive daily performance metrics and insights.',
          included: true
        },
        {
          name: 'Managed Replies',
          tooltip: 'Our internal team monitor and reply to prospect messages on time.',
          included: false
        }
      ],
      gradient: 'from-[#2A5EDB]/40 to-[#4C7AE6]/40',
      buttonGradient: 'from-[#2A5EDB] to-[#4C7AE6]',
      popular: true
    },
    {
      name: 'Scale',
      price: '1699',
      description: 'For high-volume, multi-channel outreach',
      features: [
        {
          name: '10,000 AI Video Emails/month',
          tooltip: convertSpelling('We generate and send personalised AI-crafted emails with embedded video content.'),
          included: true
        },
        {
          name: 'Custom Landing Page',
          tooltip: 'Professionally built and fully hosted landing page with your branding.',
          included: true
        },
        {
          name: convertSpelling('Hyper Personalisation'),
          tooltip: convertSpelling('Personalise the landing page content with each prospects name as well as intro sentence.'),
          included: true
        },
        {
          name: 'Pro AI Voice Clone',
          tooltip: 'Choose a Pro AI voiceover or we can clone your own.',
          included: true
        },
        {
          name: 'Priority Support',
          tooltip: 'Chat, Email & Live Slack Support.',
          included: true
        },
        {
          name: '5,000 B2B Contacts/month',
          tooltip: 'Fresh, verified B2B contact data for your target market.',
          included: true
        },
        {
          name: convertSpelling('Optimisation Team'),
          tooltip: convertSpelling('Dedicated team for campaign optimisation and strategy.'),
          included: true
        },
        {
          name: convertSpelling('Weekly Optimisation'),
          tooltip: convertSpelling('Regular campaign optimisation and performance reviews.'),
          included: true
        },
        {
          name: 'Deliverability Setup & Management',
          tooltip: 'Our dedicated team ensure maximum message delivery.',
          included: true
        },
        {
          name: 'Smart Follow-ups',
          tooltip: convertSpelling('AI-powered follow-up sequences based on prospect behaviour.'),
          included: true
        },
        {
          name: '4x 30 second Ad Videos',
          tooltip: 'Bespoke videos with professional editing - Perfect for capturing attention.',
          included: true
        },
        {
          name: 'CRM Integration',
          tooltip: 'All + Salesforce & Custom API.',
          included: true
        },
        {
          name: 'Live Stats',
          tooltip: 'Live performance metrics and insights, directly to your messaging platform.',
          included: true
        },
        {
          name: 'Managed Replies',
          tooltip: 'Our internal team monitor and reply to prospect messages on time.',
          included: true
        }
      ],
      gradient: 'from-[#03AD9C]/40 to-[#06C4B0]/40',
      buttonGradient: 'from-[#03AD9C] to-[#06C4B0]',
      isCustom: true
    }
  ];

  // Update currency conversion rates
  const currencyRates = {
    GBP: { symbol: '£', rate: 1 },
    EUR: { symbol: '€', rate: 1.17 },
    USD: { symbol: '$', rate: 1.27 }
  };

  // Update price formatting to handle 'POA'
  const formatPrice = (basePrice, currency, period) => {
    if (basePrice === 'POA') return 'POA';
    const rate = currencyRates[currency].rate;
    const symbol = currencyRates[currency].symbol;
    const multiplier = period === 'annual' ? 10 : 1; // 12 months - 2 months free = 10 months
    return `${symbol}${Math.round(basePrice * rate * multiplier).toLocaleString()}`;
  };

  // Get currency prefix for URLs
  const getCurrencyPrefix = () => {
    if (currency === 'GBP') return '/UK';
    if (currency === 'USD') return '/US';
    if (currency === 'EUR') return '/EU';
    return '';
  };

  // Update navigation handlers
  const handleNavigation = (nextStep, challenge = null) => {
    const prefix = getCurrencyPrefix();
    
    if (nextStep === 'solutions' && challenge) {
      navigate(`${prefix}/solutions/${challenge.id}`);
    } else if (nextStep === 'pricing') {
      navigate(`${prefix}/pricing`);
    } else {
      navigate(prefix || '/');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#1a1a2e] to-black text-white overflow-y-auto overflow-x-hidden relative [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-black/20 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
      {/* Background Elements Container */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Enhanced Background Mesh with Animation */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:32px_32px] opacity-40"
          animate={{
            backgroundPosition: ["0px 0px", "32px 32px"],
            transition: {
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
        
        {/* Enhanced Gradient Orbs */}
        <motion.div 
          className="absolute -top-[400px] -left-[400px] w-[1000px] h-[1000px] bg-[#8129D7]/30 rounded-full blur-[120px] mix-blend-screen"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-[400px] -right-[400px] w-[1000px] h-[1000px] bg-[#2A5EDB]/30 rounded-full blur-[120px] mix-blend-screen"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>
      
      {/* Content Wrapper with 96% scale */}
      <div className="mx-auto max-w-[96%] h-[96%] transform scale-96 origin-top">
        <AnimatePresence mode="wait">
          {currentStep === 'challenges' && (
            <LayoutGroup>
              <motion.div
                key="challenges"
                className="min-h-[96vh] flex flex-col justify-between relative z-10"
                {...fadeIn}
              >
                {/* Enhanced Header with stagger animation */}
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="pt-6 md:pt-12 pb-6 md:pb-8 text-center px-4 relative z-20"
                >
                  <motion.h1 
                    variants={itemVariants}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight relative"
                  >
                    <span className="relative bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-transparent leading-[1.15] block pb-1">
                      Unlock the power of AI Agents
                    </span>
                  </motion.h1>
                  <motion.p 
                    variants={itemVariants}
                    className="text-white/60 text-base md:text-xl lg:text-2xl max-w-4xl mx-auto font-light leading-[1.6] mb-4"
                  >
                    We build systems for&nbsp;
                    <motion.span
                      key={`word-system-${shuffledAudience[audienceIndex]}-${currentColor}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        y: [20, 0, 0, -20]
                      }}
                      transition={{
                        duration: 3,
                        times: [0, 0.2, 0.8, 1],
                        ease: [0.64, 0.112, 0.32, 1]
                      }}
                      className="font-medium relative inline-block min-w-[120px] text-center"
                    >
                      <motion.span
                        initial={{ color: "#FFFFFF" }}
                        animate={{
                          color: [
                            "#FFFFFF",
                            colors[currentColor].color, 
                            colors[currentColor].color, 
                            "#FFFFFF"
                          ],
                          textShadow: [
                            "0 0 20px rgba(255,255,255,0)",
                            `0 0 25px ${colors[currentColor].shadow}`,
                            `0 0 25px ${colors[currentColor].shadow}`,
                            "0 0 20px rgba(255,255,255,0)"
                          ]
                        }}
                        transition={{
                          duration: 3,
                          times: [0, 0.2, 0.8, 1],
                          ease: "easeInOut"
                        }}
                      >
                        {shuffledAudience[audienceIndex]}
                      </motion.span>
                    </motion.span>
                    &nbsp;and can find, research and outreach to&nbsp;
                    <motion.span
                      key={`word-audience-${shuffledAudience[(audienceIndex + 5) % shuffledAudience.length]}-${(currentColor + 1) % colors.length}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        y: [20, 0, 0, -20]
                      }}
                      transition={{
                        duration: 3,
                        times: [0, 0.2, 0.8, 1],
                        ease: [0.64, 0.112, 0.32, 1],
                        delay: 0.5
                      }}
                      className="font-medium relative inline-block min-w-[120px] text-center"
                    >
                      <motion.span
                        initial={{ color: "#FFFFFF" }}
                        animate={{
                          color: [
                            "#FFFFFF",
                            colors[(currentColor + 1) % colors.length].color, 
                            colors[(currentColor + 1) % colors.length].color, 
                            "#FFFFFF"
                          ],
                          textShadow: [
                            "0 0 20px rgba(255,255,255,0)",
                            `0 0 25px ${colors[(currentColor + 1) % colors.length].shadow}`,
                            `0 0 25px ${colors[(currentColor + 1) % colors.length].shadow}`,
                            "0 0 20px rgba(255,255,255,0)"
                          ]
                        }}
                        transition={{
                          duration: 3,
                          times: [0, 0.2, 0.8, 1],
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      >
                        {shuffledAudience[(audienceIndex + 5) % shuffledAudience.length]}
                      </motion.span>
                    </motion.span>
                    &nbsp;with {convertSpelling('personalised')} content.
                  </motion.p>
                </motion.div>

                {/* Challenge Grid */}
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="max-w-7xl mx-auto px-4 py-2 grid md:grid-cols-2 gap-6 md:gap-8 items-start relative z-20"
                >
                  {challenges.map((challenge, index) => (
                    <motion.div
                      key={challenge.id}
                      variants={itemVariants}
                      whileHover="hover"
                      onHoverStart={() => setHoveredCard(challenge.id)}
                      onHoverEnd={() => setHoveredCard(null)}
                      onClick={() => {
                        handleNavigation('solutions', challenge);
                      }}
                      className={`group cursor-pointer rounded-2xl p-8 md:p-10 ${challenge.color}
                        relative overflow-hidden transform-gpu
                        shadow-[0_0_30px_rgba(255,255,255,0.05)]
                        hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]
                        transition-all duration-500`}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"
                        initial={false}
                        animate={hoveredCard === challenge.id ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-b from-white/[0.15] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="relative z-10">
                        <div className="flex items-start gap-6 md:gap-8">
                          <motion.div 
                            variants={iconVariants}
                            className="p-4 md:p-5 rounded-xl bg-white/10 backdrop-blur-sm
                              shadow-[0_0_15px_rgba(255,255,255,0.05)]
                              group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
                              group-hover:bg-white/20
                              transition-all duration-500"
                          >
                            {challenge.icon}
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white leading-[1.3]">
                              {challenge.title}
                            </h3>
                            <p className="text-white text-lg md:text-xl mb-2 leading-[1.4]">
                              {challenge.description}
                            </p>
                            <p className="text-white/80 text-base md:text-lg leading-[1.4]">
                              {challenge.subtext}
                            </p>
                          </div>
                        </div>
                        <motion.div 
                          className="mt-6 md:mt-8 flex items-center gap-4 text-white"
                        >
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 font-medium flex items-center gap-2"
                          >
                            <PlayCircle className="w-5 h-5" />
                            Watch Demo
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavigation('pricing');
                            }}
                            className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 font-medium"
                          >
                            View Pricing
                          </motion.button>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Footer with Sixty Seconds text */}
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="w-full text-center pb-8 relative z-20 mt-8"
                >
                  <motion.div
                    variants={itemVariants}
                    className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-sm font-medium text-white/90 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                  >
                    Sixty Seconds - Your Business in Motion
                  </motion.div>
                </motion.div>
              </motion.div>
            </LayoutGroup>
          )}

          {currentStep === 'solutions' && selectedChallenge && (
            <motion.div
              key="solutions"
              className="min-h-[96vh] relative z-10"
              {...fadeIn}
            >
              <div className="relative h-full max-w-5xl mx-auto px-4 py-12 md:py-16 z-20">
                <motion.button 
                  onClick={handleBack}
                  className="group mb-12 md:mb-16 inline-flex items-center gap-3 text-white/60 hover:text-white text-lg md:text-xl font-medium"
                  whileHover={{ x: -5 }}
                >
                  <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                  <span>Back</span>
                </motion.button>
                
                <div className="space-y-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto"
                  >
                    <div className="text-center mb-12 md:mb-16">
                      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight relative">
                        <span className="relative bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-transparent leading-[1.15] block pb-1">
                          {selectedChallenge.title}
                        </span>
                      </h2>
                      <div className="inline-block px-6 py-3 rounded-full bg-white/5 text-lg md:text-xl font-medium text-white/90 backdrop-blur-xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        {selectedChallenge.description}
                      </div>
                    </div>

                    <div className="backdrop-blur-2xl bg-white/[0.02] rounded-2xl p-8 md:p-10 border border-white/[0.08] shadow-[0_0_30px_rgba(255,255,255,0.03)]">
                      <div className="flex items-center justify-between mb-8 md:mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white/90 leading-[1.3]">Key Features</h3>
                        <div className="flex items-center gap-4">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#8129D7] to-[#2A5EDB] hover:from-[#9747FF] hover:to-[#4C7AE6] text-white font-medium shadow-lg shadow-indigo-500/20 flex items-center gap-2"
                          >
                            <PlayCircle className="w-5 h-5" />
                            Watch Demo
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavigation('pricing');
                              setShowPricing(true);
                            }}
                            className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 font-medium text-white"
                          >
                            View Pricing
                          </motion.button>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
                        {selectedChallenge.features.map((feature, i) => (
                          <motion.div 
                            key={i} 
                            className="group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                          >
                            <div className="flex flex-col gap-4 p-6 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 backdrop-blur-xl h-full">
                              <h4 className="font-medium text-white/90 text-lg leading-[1.4]">{feature.title}</h4>
                              <p className="text-white/60 text-base font-light flex-grow leading-[1.6]">{feature.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Additional Information Section */}
                      {(selectedChallenge.additionalInfo?.integration || selectedChallenge.additionalInfo?.compatibility) && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="space-y-6"
                        >
                          {selectedChallenge.additionalInfo.integration && (
                            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl">
                              <p className="text-white/80 text-lg leading-relaxed">
                                {selectedChallenge.additionalInfo.integration}
                              </p>
                            </div>
                          )}
                          {selectedChallenge.additionalInfo.compatibility && (
                            <div className="p-6 rounded-xl bg-gradient-to-br from-white/[0.02] to-white/[0.04] border border-white/[0.05] backdrop-blur-xl">
                              <p className="text-white/80 text-lg leading-relaxed">
                                {selectedChallenge.additionalInfo.compatibility}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {showPricing && (
            <motion.div
              key="pricing"
              className="min-h-[96vh] relative z-10"
              {...fadeIn}
            >
              <div className="relative h-full max-w-7xl mx-auto px-4 py-12 md:py-16 z-20">
                <motion.button 
                  onClick={handleBack}
                  className="group mb-12 md:mb-16 inline-flex items-center gap-3 text-white/60 hover:text-white text-lg md:text-xl font-medium"
                  whileHover={{ x: -5 }}
                >
                  <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                  <span>Back</span>
                </motion.button>

                <div className="space-y-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto text-center"
                  >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                      <span className="bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-transparent">
                        Scale Your Outreach, Your Way
                      </span>
                    </h2>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto mb-8">
                      Choose the plan that matches your growth ambitions
                    </p>

                    {/* Currency and Billing Toggle */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                      {/* Currency Toggle */}
                      <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1 backdrop-blur-xl">
                        {Object.keys(currencyRates).map((currencyOption) => (
                          <button
                            key={currencyOption}
                            onClick={() => {
                              // Navigate to the appropriate currency-specific URL
                              const newPrefix = currencyOption === 'GBP' ? '/UK' : 
                                               currencyOption === 'USD' ? '/US' : 
                                               currencyOption === 'EUR' ? '/EU' : '';
                              
                              if (showPricing) {
                                navigate(`${newPrefix}/pricing`);
                              } else if (selectedChallenge) {
                                navigate(`${newPrefix}/solutions/${selectedChallenge.id}`);
                              } else {
                                navigate(newPrefix || '/');
                              }
                            }}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                              selectedCurrency === currencyOption
                                ? 'bg-white/10 text-white'
                                : 'text-white/60 hover:text-white'
                            }`}
                          >
                            {currencyOption}
                          </button>
                        ))}
                      </div>

                      {/* Billing Period Toggle */}
                      <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1 backdrop-blur-xl">
                        <button
                          onClick={() => setBillingPeriod('monthly')}
                          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                            billingPeriod === 'monthly'
                              ? 'bg-white/10 text-white'
                              : 'text-white/60 hover:text-white'
                          }`}
                        >
                          Monthly
                        </button>
                        <button
                          onClick={() => setBillingPeriod('annual')}
                          className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                            billingPeriod === 'annual'
                              ? 'bg-white/10 text-white'
                              : 'text-white/60 hover:text-white'
                          }`}
                        >
                          Annual
                          <span className="absolute -top-3 -right-2 flex h-5 w-5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/20"></span>
                            <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500/20 text-[10px] text-emerald-400 items-center justify-center font-medium">
                              17%
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                    
                    {billingPeriod === 'annual' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-8"
                      >
                        Save 17% with annual billing
                      </motion.div>
                    )}
                  </motion.div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {pricingPlans.slice(0, 3).map((plan, index) => (
                      <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (index * 0.1) }}
                        className={`relative rounded-2xl bg-gradient-to-br ${plan.gradient}
                          backdrop-blur-xl border border-white/10 overflow-hidden
                          transform-gpu transition-all duration-300
                          hover:border-white/20 hover:shadow-2xl flex flex-col`}
                      >
                        {plan.popular && (
                          <div className="absolute top-0 right-0 mt-4 mr-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white backdrop-blur-xl border border-white/20">
                              Most Popular
                            </span>
                          </div>
                        )}
                        <div className="p-8 flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                          <div className="flex items-baseline mb-2">
                            <span className="text-4xl font-bold text-white">
                              {formatPrice(plan.price, selectedCurrency, billingPeriod)}
                            </span>
                            {plan.price !== 'Custom' && (
                              <span className="text-white/60 ml-2">/{billingPeriod === 'annual' ? 'year' : 'month'}</span>
                            )}
                          </div>
                          {billingPeriod === 'monthly' && plan.price !== 'Custom' && (
                            <div className="flex items-center gap-2 mb-4">
                              <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-emerald-400 text-sm flex items-center gap-1.5"
                              >
                                <ArrowRight className="w-3 h-3" />
                                <span>Save 17% with annual billing</span>
                              </motion.div>
                            </div>
                          )}
                          <p className="text-white/80 mb-6 min-h-[48px]">{plan.description}</p>
                          {selectedCurrency === 'GBP' && plan.price !== 'Custom' && (
                            <p className="text-white/60 text-sm mb-4">*Price excludes VAT</p>
                          )}
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                            className={`w-full py-3 rounded-lg bg-white/5 hover:bg-gradient-to-r ${plan.buttonGradient} 
                              text-white font-medium shadow-lg transition-all duration-300 border border-white/10 hover:border-transparent
                              hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]`}
                          >
                            Get Started
                          </motion.button>
                        </div>
                        <div className="border-t border-white/10 p-6">
                          <p className="text-sm font-medium text-white/80 mb-4">What's included:</p>
                          <ul className="space-y-3">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="group relative flex items-start gap-3">
                                {feature.included ? (
                                  <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                ) : (
                                  <div className="w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <div className="w-1 h-1 rounded-full bg-white/20" />
                                  </div>
                                )}
                                <span className={`text-sm ${feature.included ? 'text-white/90' : 'text-white/40'} leading-relaxed`}>
                                  {feature.name}
                                </span>
                                {feature.tooltip && (
                                  <div className="absolute left-0 -top-2 w-64 translate-y-[-100%] p-2 bg-gray-900 rounded-lg text-xs text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-50 shadow-xl border border-white/10">
                                    {feature.tooltip}
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                          <p className="text-sm font-medium text-white/80 mb-4 mt-6">Bolt Ons:</p>
                          <ul className="space-y-3">
                             <li className="group relative flex items-start gap-3">
                              <div className="w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-1 h-1 rounded-full bg-white/20" />
                              </div>
                              <span className="text-sm text-white/40 leading-relaxed">
                                Automated AI Workflows
                              </span>
                              <div className="absolute left-0 -top-2 w-64 translate-y-[-100%] p-2 bg-gray-900 rounded-lg text-xs text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-50 shadow-xl border border-white/10">
                                Custom built workflows to automate almost anything.
                              </div>
                            </li>
                            <li className="group relative flex items-start gap-3">
                              <div className="w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-1 h-1 rounded-full bg-white/20" />
                              </div>
                              <span className="text-sm text-white/40 leading-relaxed">
                                Automated Video Workflows
                              </span>
                              <div className="absolute left-0 -top-2 w-64 translate-y-[-100%] p-2 bg-gray-900 rounded-lg text-xs text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-50 shadow-xl border border-white/10">
                                Custom built workflows to automate video production.
                              </div>
                            </li>
                            <li className="group relative flex items-start gap-3">
                              <div className="w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-1 h-1 rounded-full bg-white/20" />
                              </div>
                              <span className="text-sm text-white/40 leading-relaxed">
                                One-Off Bespoke 60s Video
                              </span>
                              <div className="absolute left-0 -top-2 w-64 translate-y-[-100%] p-2 bg-gray-900 rounded-lg text-xs text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-50 shadow-xl border border-white/10">
                                Bespoke, high quality product/brand explainer video.
                              </div>
                            </li>
                          </ul>
                        </div>
                      </motion.div>
                    ))}

                    {/* Custom Plan CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="md:col-span-3 mt-8"
                    >
                      <div className="rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 overflow-hidden p-8 md:p-10 transition-all duration-300">
                        <div className="relative z-10">
                          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                            <div className="flex-1">
                              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Looking for something custom?</h3>
                              <p className="text-xl text-white/80 mb-6 max-w-2xl">Get a tailored solution that perfectly fits your enterprise needs</p>
                              <div className="flex flex-wrap gap-6">
                                {[
                                  { name: 'Unlimited Users', tooltip: 'No restrictions on team size' },
                                  { name: 'Custom AI Email Volume', tooltip: 'Tailored to your specific needs' },
                                  { name: 'Unlimited B2B Contacts', tooltip: 'Access our entire B2B database' },
                                  { name: 'Dedicated Success Team', tooltip: '24/7 support and strategy optimization' },
                                  { name: 'Custom Integrations', tooltip: 'Connect with any tools in your tech stack' },
                                  { name: 'Enterprise Security', tooltip: 'Advanced security and compliance features' }
                                ].map((feature, i) => (
                                  <div key={i} className="group relative flex items-center gap-2">
                                    <div className="p-1 rounded-full bg-emerald-500/10">
                                      <Check className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <span className="text-white/90">{feature.name}</span>
                                    {feature.tooltip && (
                                      <div className="absolute left-0 -top-2 w-64 translate-y-[-100%] p-2 bg-gray-900/90 
                                        rounded-lg text-xs text-white opacity-0 invisible group-hover:opacity-100 
                                        group-hover:visible transition-all duration-200 pointer-events-none z-50 
                                        shadow-xl border border-white/10 backdrop-blur-sm"
                                      >
                                        {feature.tooltip}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="flex-shrink-0">
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                }}
                                className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#8129D7] to-[#2A5EDB] 
                                  hover:from-[#9747FF] hover:to-[#4C7AE6] text-white font-medium shadow-lg 
                                  transition-all duration-300 flex items-center gap-2"
                              >
                                Get in Touch
                                <ArrowRight className="w-5 h-5" />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ModernShowcase;