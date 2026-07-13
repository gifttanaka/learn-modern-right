/**
 * ============================================
 * LEARN MODERN RIGHT — COMPLETE APPLICATION
 * Developer: Tanaka Gift Mundodzi
 * Date: 13 July 2026
 * 
 * An aristocratic approach to digital transformation education.
 * ============================================
 */

(function() {
    'use strict';

    // ============================================
    // CONFIGURATION
    // ============================================

    const CONFIG = {
        APP_NAME: 'Learn Modern Right',
        VERSION: '1.0.0',
        DEVELOPER: 'Tanaka Gift Mundodzi',
        DATE: '13 July 2026',
        PELAGIA: {
            NAME: 'Pelagia',
            GREETING: 'Let us begin our journey...',
            ORIGIN: 'Greek — meaning "of the sea"'
        },
        TOTAL_VOICES: 25,
        TOTAL_QUESTIONS: 30,
        STORAGE_KEY: 'learn_modern_right_data',
        // FIXED: Use relative path for GitHub Pages
        VOICES_PATH: './assets/audio/'
    };

    // ============================================
    // DATA — VOICES (25 Lessons)
    // ============================================

    const VOICES = [
        // ===== FOUNDATIONS (5) =====
        {
            id: 1,
            title: 'What is Digital Transformation?',
            category: 'Foundations',
            duration: '2:30',
            file: 'voice1_digital_transformation.mp3',
            script: 'Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It is not merely about technology—it is about reimagining processes, culture, and customer experiences.',
            keyTakeaways: [
                'Integration of digital technology across all business areas',
                'Focus on reimagining processes, culture, and customer experiences',
                '10% technology, 90% transformation — people drive change'
            ]
        },
        {
            id: 2,
            title: 'Why Digital Transformation Matters Now',
            category: 'Foundations',
            duration: '2:45',
            file: 'voice2_why_dx_matters.mp3',
            script: 'We live in an era of unprecedented change. Customer expectations are higher than ever. Competitors can emerge overnight. Technologies evolve at breakneck speed. Digital transformation is not a luxury—it is a necessity for survival.',
            keyTakeaways: [
                'Necessity for survival in an era of rapid change',
                '70% of initiatives fail due to culture, not technology',
                'Understanding the "why" is the first step to success'
            ]
        },
        {
            id: 3,
            title: 'The History of Digital Transformation',
            category: 'Foundations',
            duration: '3:00',
            file: 'voice3_history_dx.mp3',
            script: 'Digital transformation has been evolving for decades. In the 1980s, it was about personal computers and spreadsheets. The 1990s brought the internet and email. The 2000s gave us smartphones and social media. The 2010s introduced cloud computing and AI.',
            keyTakeaways: [
                'Evolution from PCs to AI over four decades',
                'Speed of adoption has accelerated dramatically',
                'Today: Intelligent automation and AI-driven engineering'
            ]
        },
        {
            id: 4,
            title: 'Digital vs. Traditional Business',
            category: 'Foundations',
            duration: '2:15',
            file: 'voice4_digital_vs_traditional.mp3',
            script: 'Traditional businesses are linear. They have fixed processes, hierarchical structures, and they resist change. Digital businesses are exponential. They are agile, data-driven, and customer-obsessed. They see technology as a strategic advantage.',
            keyTakeaways: [
                'Traditional: Linear, hierarchical, sees tech as cost',
                'Digital: Agile, data-driven, sees tech as advantage',
                'Every business must become a digital business'
            ]
        },
        {
            id: 5,
            title: 'The Digital Mindset',
            category: 'Foundations',
            duration: '2:50',
            file: 'voice5_digital_mindset.mp3',
            script: 'Digital transformation starts in the mind. It is a shift from fixed thinking to growth thinking. A digital mindset means embracing experimentation, learning from failure, and constantly asking: "How can we do this better?"',
            keyTakeaways: [
                'Shift from fixed to growth thinking',
                'Embrace experimentation and learn from failure',
                'Mindsets endure — tools change'
            ]
        },
        // ===== SOFTWARE ENGINEERING (5) =====
        {
            id: 6,
            title: "Software Engineering's Role in DX",
            category: 'Software Engineering',
            duration: '3:00',
            file: 'voice6_software_engineering_role.mp3',
            script: 'Software engineers are the architects of the digital world. Every app, every platform, every digital experience is built by engineers. In digital transformation, software engineering is about enabling business strategy, creating seamless experiences, and building the foundation for innovation.',
            keyTakeaways: [
                'Engineers are architects of the digital world',
                'Enables business strategy and creates seamless experiences',
                'Bridges vision and reality'
            ]
        },
        {
            id: 7,
            title: 'Building Scalable Digital Products',
            category: 'Software Engineering',
            duration: '2:45',
            file: 'voice7_building_scalable_products.mp3',
            script: 'Scaling means growing without breaking. It means handling more users, more data, and more complexity—all while maintaining performance. Software engineers think about scalability from day one, choosing technologies that grow and systems that distribute load.',
            keyTakeaways: [
                'Scale means growing without breaking',
                'Choose technologies that grow and distribute load',
                'Start small, think big — build for today, design for tomorrow'
            ]
        },
        {
            id: 8,
            title: 'Agile Development & Digital Transformation',
            category: 'Software Engineering',
            duration: '2:30',
            file: 'voice8_agile_development.mp3',
            script: 'Agile is more than a methodology—it is a mindset. It is about delivering value early and often, embracing change, and responding to feedback. In digital transformation, Agile enables fast iteration, rapid experimentation, and continuous improvement.',
            keyTakeaways: [
                'Agile is a mindset, not just a methodology',
                'Enables fast iteration and rapid experimentation',
                'Cross-functional teams break down silos'
            ]
        },
        {
            id: 9,
            title: 'DevOps: Bridging Development & Operations',
            category: 'Software Engineering',
            duration: '3:00',
            file: 'voice9_devops.mp3',
            script: 'DevOps brings development and operations teams together through collaboration, automation, and continuous delivery. In digital transformation, DevOps enables faster releases, higher quality, and better reliability, breaking down traditional walls between teams.',
            keyTakeaways: [
                'Collaboration between development and operations',
                'Enables faster releases and higher quality',
                'DevOps is a culture, not just a tool'
            ]
        },
        {
            id: 10,
            title: 'API-First Development',
            category: 'Software Engineering',
            duration: '2:45',
            file: 'voice10_api_first.mp3',
            script: 'API-first means designing the API before building the system. APIs enable integration, allowing different systems to work together and making your digital ecosystem flexible and extensible. They turn your products into platforms.',
            keyTakeaways: [
                'Design API before building the system',
                'Enables integration and flexible ecosystems',
                'Turns products into platforms'
            ]
        },
        // ===== KEY TECHNOLOGIES (5) =====
        {
            id: 11,
            title: 'Artificial Intelligence & Software Engineering',
            category: 'Key Technologies',
            duration: '3:15',
            file: 'voice11_ai_software_engineering.mp3',
            script: 'Artificial Intelligence is transforming how we build software. AI helps engineers write better code, find bugs faster, and create smarter applications. AI is not replacing software engineers—it is augmenting them. Engineers who use AI tools are more productive and creative.',
            keyTakeaways: [
                'AI augments, not replaces, software engineers',
                'Enables personalization, automation, and insights',
                'The future of engineering is AI-powered'
            ]
        },
        {
            id: 12,
            title: 'Cloud Computing & Modern Engineering',
            category: 'Key Technologies',
            duration: '2:45',
            file: 'voice12_cloud_computing.mp3',
            script: 'The cloud is the foundation of digital transformation, providing on-demand access to computing resources without physical infrastructure. For software engineers, the cloud enables agility—spin up servers in minutes, scale to meet demand, and experiment without risk.',
            keyTakeaways: [
                'Foundation of digital transformation',
                'Enables agility and experimentation without risk',
                'Focus on solutions, not servers'
            ]
        },
        {
            id: 13,
            title: 'Internet of Things (IoT)',
            category: 'Key Technologies',
            duration: '2:30',
            file: 'voice13_iot.mp3',
            script: 'The Internet of Things—IoT—is the network of physical devices connected to the internet. Smart thermostats, wearable devices, industrial sensors—they are all part of IoT. For software engineers, IoT presents exciting challenges in managing data from billions of devices.',
            keyTakeaways: [
                'Network of connected physical devices',
                'Enables predictive maintenance and real-time monitoring',
                'Engineers are building the intelligent IoT future'
            ]
        },
        {
            id: 14,
            title: 'Blockchain Technology',
            category: 'Key Technologies',
            duration: '3:00',
            file: 'voice14_blockchain.mp3',
            script: 'Blockchain is a decentralized, distributed ledger that records transactions across multiple computers so that the record cannot be altered retroactively. For software engineers, blockchain offers a new paradigm of trust without intermediaries, transparency, and security.',
            keyTakeaways: [
                'Decentralized, tamper-proof ledger',
                'Trust without intermediaries',
                'Powers cryptocurrencies, smart contracts, and traceability'
            ]
        },
        {
            id: 15,
            title: 'Data Analytics & Engineering',
            category: 'Key Technologies',
            duration: '3:00',
            file: 'voice15_data_analytics.mp3',
            script: 'Data is the new oil. But raw data is worthless without analysis. Data engineering transforms raw data into actionable insights by building pipelines that collect, process, and analyze information, making data accessible and reliable for decision-making.',
            keyTakeaways: [
                'Data engineering transforms raw data into insights',
                'Builds pipelines that collect and process information',
                'The future belongs to data-driven organizations'
            ]
        },
        // ===== PEOPLE & CULTURE (5) =====
        {
            id: 16,
            title: 'Digital Culture & Engineering',
            category: 'People & Culture',
            duration: '2:45',
            file: 'voice16_digital_culture.mp3',
            script: 'Digital culture is about people—how teams collaborate, innovate, and adapt. In software engineering, culture matters. Great engineers need psychological safety, autonomy, and purpose. They thrive in environments where they can experiment and learn. Culture eats strategy for breakfast.',
            keyTakeaways: [
                'Culture is about people, not just process',
                'Engineers need psychological safety and autonomy',
                'Culture eats strategy for breakfast'
            ]
        },
        {
            id: 17,
            title: 'Growth Mindset for Engineers',
            category: 'People & Culture',
            duration: '2:30',
            file: 'voice17_growth_mindset.mp3',
            script: 'A growth mindset is the belief that abilities can be developed through dedication and hard work. For software engineers, growth mindset is essential. Technology changes constantly. Engineers who embrace learning will thrive; those who resist will be left behind.',
            keyTakeaways: [
                'Belief that abilities can be developed',
                'Essential for engineers in a rapidly changing field',
                'Lifelong learning is the hallmark of great engineers'
            ]
        },
        {
            id: 18,
            title: 'Building Digital Teams',
            category: 'People & Culture',
            duration: '3:00',
            file: 'voice18_building_teams.mp3',
            script: 'Digital transformation is a team sport. Building digital teams means bringing together diverse skills—software engineers, designers, product managers, business analysts—all working together. Great teams share psychological safety, clear goals, and trust.',
            keyTakeaways: [
                'Digital transformation requires diverse skills',
                'Great teams have psychological safety and trust',
                'Teams are the building blocks of success'
            ]
        },
        {
            id: 19,
            title: 'Overcoming Digital Resistance',
            category: 'People & Culture',
            duration: '2:50',
            file: 'voice19_overcoming_resistance.mp3',
            script: 'Resistance to change is natural. People fear the unknown and question their ability to adapt. In digital transformation, resistance can be overcome through communication, education, and empathy. When people feel ownership, resistance turns into support.',
            keyTakeaways: [
                'Resistance is natural and must be acknowledged',
                'Overcome through communication and empathy',
                'Involve people to turn resistance into support'
            ]
        },
        {
            id: 20,
            title: 'Diversity in Digital Transformation',
            category: 'People & Culture',
            duration: '2:45',
            file: 'voice20_diversity_dx.mp3',
            script: 'Diversity is not merely a buzzword—it is a strategic advantage. Teams with diverse perspectives build better products, solve complex problems, and drive innovation. In software engineering, diversity means different backgrounds, experiences, and ways of thinking.',
            keyTakeaways: [
                'Diversity is a strategic advantage',
                'Different perspectives drive innovation',
                'Build teams that reflect the world you serve'
            ]
        },
        // ===== IMPLEMENTATION (5) =====
        {
            id: 21,
            title: 'Digital Roadmap Planning',
            category: 'Implementation',
            duration: '3:00',
            file: 'voice21_roadmap_planning.mp3',
            script: 'A digital roadmap outlines where you are going and how you will get there. For software engineers, roadmap planning means aligning technology with business strategy, choosing the right priorities, sequencing work, and allocating resources. A good roadmap is flexible and adaptive.',
            keyTakeaways: [
                'Outlines where you are going and how to get there',
                'Aligns technology with business strategy',
                'A roadmap is a guide, not a contract'
            ]
        },
        {
            id: 22,
            title: 'Agile & Lean Engineering',
            category: 'Implementation',
            duration: '2:45',
            file: 'voice22_agile_lean.mp3',
            script: 'Lean engineering eliminates waste and builds what matters. Combined with Agile, Lean engineering creates powerful outcomes: deliver value early, learn from feedback, and iterate continuously. Focus on customer needs, reduce complexity, and build quality in from the start.',
            keyTakeaways: [
                'Lean eliminates waste and builds what matters',
                'Combined with Agile for powerful outcomes',
                'Focus on customer needs and quality from the start'
            ]
        },
        {
            id: 23,
            title: 'Measuring Digital Success',
            category: 'Implementation',
            duration: '2:30',
            file: 'voice23_measuring_success.mp3',
            script: 'You cannot improve what you do not measure. Digital transformation needs clear metrics. For software engineers, this means tracking deployment frequency, lead time, and mean time to recovery. Choose metrics that align with your goals. Measure progress, not perfection.',
            keyTakeaways: [
                'You cannot improve what you do not measure',
                'Track deployment frequency, lead time, and recovery',
                'Measure progress, not perfection'
            ]
        },
        {
            id: 24,
            title: 'Case Studies: Successful DX',
            category: 'Implementation',
            duration: '3:30',
            file: 'voice24_case_studies.mp3',
            script: 'Netflix transformed from a DVD rental service to a global streaming platform through experimentation and customer focus. Amazon started as a bookstore and became a technology giant through customer obsession and data-driven decisions. Microsoft shifted to a "learn-it-all" culture embracing open source and AI.',
            keyTakeaways: [
                'Netflix: Culture of experimentation',
                'Amazon: Customer obsession and data-driven',
                'Microsoft: Shift to "learn-it-all" culture'
            ]
        },
        {
            id: 25,
            title: 'The Future of Digital Transformation',
            category: 'Implementation',
            duration: '2:50',
            file: 'voice25_future_dx.mp3',
            script: 'The future is intelligent, connected, and autonomous. AI will become ubiquitous, edge computing will bring processing closer to the user, and quantum computing will solve previously impossible problems. For software engineers, the future means continuous learning and embracing change.',
            keyTakeaways: [
                'Future is intelligent, connected, and autonomous',
                'Continuous learning is essential for engineers',
                'Focus on customer value and build with quality'
            ]
        }
    ];

    // ============================================
    // DATA — QUIZ QUESTIONS (30)
    // ============================================

    const QUIZ_QUESTIONS = [
        // Module 1: Foundations (5)
        {
            id: 1,
            category: 'Foundations',
            question: 'What is digital transformation?',
            options: [
                'Replacing all employees with robots',
                'Integrating digital technology into all business areas',
                'Buying new computers',
                'Creating a website'
            ],
            correct: 1,
            explanation: 'Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers.'
        },
        {
            id: 2,
            category: 'Foundations',
            question: 'Which is NOT a driver of digital transformation?',
            options: [
                'Customer expectations',
                'Competitive pressure',
                'Maintaining the status quo',
                'Technological advances'
            ],
            correct: 2,
            explanation: 'Maintaining the status quo is the opposite of what drives digital transformation. Customer expectations, competitive pressure, and technological advances are all key drivers.'
        },
        {
            id: 3,
            category: 'Foundations',
            question: 'Digital transformation is primarily about...',
            options: [
                'Technology',
                'People and processes',
                'Cost cutting',
                'Marketing'
            ],
            correct: 1,
            explanation: 'Digital transformation is 10% technology and 90% transformation. It is primarily about people, processes, and culture change.'
        },
        {
            id: 4,
            category: 'Foundations',
            question: 'What does DX stand for in digital transformation?',
            options: [
                'Direct X-ray',
                'Digital Transformation',
                'Data Exchange',
                'Development X'
            ],
            correct: 1,
            explanation: 'DX is the commonly used abbreviation for Digital Transformation in business and technology contexts.'
        },
        {
            id: 5,
            category: 'Foundations',
            question: 'The first step in digital transformation is...',
            options: [
                'Buying software',
                'Defining strategy and vision',
                'Hiring consultants',
                'Upgrading hardware'
            ],
            correct: 1,
            explanation: 'Digital transformation must begin with a clear strategy and vision. Technology decisions should follow strategy, not the other way around.'
        },
        // Module 2: Software Engineering (5)
        {
            id: 6,
            category: 'Software Engineering',
            question: 'Digital leadership requires...',
            options: [
                'Technical skills only',
                'Vision, adaptability, and empathy',
                'Strict management',
                'Following trends'
            ],
            correct: 1,
            explanation: 'Digital leadership requires vision, adaptability, and empathy. Technical skills alone are insufficient for leading digital transformation.'
        },
        {
            id: 7,
            category: 'Software Engineering',
            question: 'What is a digital strategy?',
            options: [
                'An IT department plan',
                'A roadmap for digital transformation',
                'A marketing campaign',
                'A technology purchase'
            ],
            correct: 1,
            explanation: 'A digital strategy is a comprehensive roadmap that guides an organization\'s digital transformation journey, aligning technology with business goals.'
        },
        {
            id: 8,
            category: 'Software Engineering',
            question: 'Which is a characteristic of a digital leader?',
            options: [
                'Resists change',
                'Embraces experimentation',
                'Avoids risk',
                'Focuses only on profits'
            ],
            correct: 1,
            explanation: 'Digital leaders embrace experimentation and learning from failure. They understand that innovation requires taking calculated risks.'
        },
        {
            id: 9,
            category: 'Software Engineering',
            question: 'Digital strategy should align with...',
            options: [
                'IT budget',
                'Business strategy',
                'Competitor strategy',
                'Current trends'
            ],
            correct: 1,
            explanation: 'Digital strategy must align with overall business strategy to ensure technology investments support organizational goals and objectives.'
        },
        {
            id: 10,
            category: 'Software Engineering',
            question: 'Change management in digital transformation is...',
            options: [
                'Optional',
                'Critical for success',
                'Only for large companies',
                'An IT responsibility'
            ],
            correct: 1,
            explanation: 'Change management is critical for digital transformation success. 70% of initiatives fail due to cultural resistance, not technology issues.'
        },
        // Module 3: Key Technologies (5)
        {
            id: 11,
            category: 'Key Technologies',
            question: 'AI stands for...',
            options: [
                'Automated Intelligence',
                'Artificial Intelligence',
                'Advanced Integration',
                'Applied Innovation'
            ],
            correct: 1,
            explanation: 'AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines that are programmed to think and learn.'
        },
        {
            id: 12,
            category: 'Key Technologies',
            question: 'What is cloud computing?',
            options: [
                'Weather prediction',
                'On-demand computing services',
                'Storing files locally',
                'Gaming technology'
            ],
            correct: 1,
            explanation: 'Cloud computing provides on-demand access to computing resources—servers, storage, databases, and software—over the internet without physical infrastructure.'
        },
        {
            id: 13,
            category: 'Key Technologies',
            question: 'IoT stands for...',
            options: [
                'Internet of Technology',
                'Internet of Things',
                'Integration of Tools',
                'Information on Things'
            ],
            correct: 1,
            explanation: 'IoT stands for Internet of Things, the network of physical devices connected to the internet, enabling them to collect and exchange data.'
        },
        {
            id: 14,
            category: 'Key Technologies',
            question: 'Blockchain is primarily used for...',
            options: [
                'Social media',
                'Secure transactions and records',
                'Gaming',
                'Email'
            ],
            correct: 1,
            explanation: 'Blockchain is a decentralized ledger technology primarily used for secure, transparent, and tamper-proof transactions and record-keeping.'
        },
        {
            id: 15,
            category: 'Key Technologies',
            question: 'Which is an example of AI application?',
            options: [
                'Email',
                'Chatbots',
                'Spreadsheets',
                'Websites'
            ],
            correct: 1,
            explanation: 'Chatbots are a common AI application that uses natural language processing to interact with users and provide automated customer service.'
        },
        // Module 4: People & Culture (5)
        {
            id: 16,
            category: 'People & Culture',
            question: 'Digital culture emphasizes...',
            options: [
                'Hierarchy and control',
                'Agility and innovation',
                'Traditional methods',
                'Risk avoidance'
            ],
            correct: 1,
            explanation: 'Digital culture emphasizes agility, innovation, and adaptability. It values experimentation and continuous learning over rigid hierarchies.'
        },
        {
            id: 17,
            category: 'People & Culture',
            question: 'What is a growth mindset?',
            options: [
                'Fixed abilities',
                'Belief in learning and improvement',
                'Avoiding challenges',
                'Ignoring feedback'
            ],
            correct: 1,
            explanation: 'A growth mindset is the belief that abilities can be developed through dedication, effort, and learning. It is essential for navigating digital transformation.'
        },
        {
            id: 18,
            category: 'People & Culture',
            question: 'Digital transformation fails most often due to...',
            options: [
                'Technology issues',
                'Cultural resistance',
                'Budget constraints',
                'Time constraints'
            ],
            correct: 1,
            explanation: '70% of digital transformation initiatives fail due to cultural resistance, not technology issues. People and culture are the biggest challenges.'
        },
        {
            id: 19,
            category: 'People & Culture',
            question: 'What encourages digital adoption?',
            options: [
                'Punishment',
                'Training and support',
                'Ignoring concerns',
                'Mandating change'
            ],
            correct: 1,
            explanation: 'Training and support encourage digital adoption by helping people understand the benefits and feel confident in using new technologies.'
        },
        {
            id: 20,
            category: 'People & Culture',
            question: 'Collaboration in digital culture is...',
            options: [
                'Discouraged',
                'Essential',
                'Optional',
                'Rare'
            ],
            correct: 1,
            explanation: 'Collaboration is essential in digital culture. Digital transformation requires cross-functional teamwork and breaking down traditional silos.'
        },
        // Module 5: Implementation (5)
        {
            id: 21,
            category: 'Implementation',
            question: 'Data-driven decisions are based on...',
            options: [
                'Intuition',
                'Facts and analysis',
                'Popular opinion',
                'Guesswork'
            ],
            correct: 1,
            explanation: 'Data-driven decisions are based on facts, evidence, and analysis rather than intuition or guesswork. Data provides objective insights for better decisions.'
        },
        {
            id: 22,
            category: 'Implementation',
            question: 'What is data analytics?',
            options: [
                'Collecting data',
                'Analyzing data for insights',
                'Storing data',
                'Deleting data'
            ],
            correct: 1,
            explanation: 'Data analytics is the process of examining, cleaning, transforming, and modeling data to discover useful information and support decision-making.'
        },
        {
            id: 23,
            category: 'Implementation',
            question: 'Big Data is characterized by...',
            options: [
                'Small files',
                'Volume, Velocity, Variety',
                'Slow processing',
                'Simple storage'
            ],
            correct: 1,
            explanation: 'Big Data is characterized by the three Vs: Volume (large amounts of data), Velocity (high speed of data generation), and Variety (different types of data).'
        },
        {
            id: 24,
            category: 'Implementation',
            question: 'Data visualization helps to...',
            options: [
                'Hide data',
                'Communicate insights clearly',
                'Confuse users',
                'Slow down analysis'
            ],
            correct: 1,
            explanation: 'Data visualization helps to communicate insights clearly and effectively, making complex data easier to understand and act upon.'
        },
        {
            id: 25,
            category: 'Implementation',
            question: 'KPIs stand for...',
            options: [
                'Key Performance Indicators',
                'Knowledge Process Integration',
                'Key Product Information',
                'Known Problem Issues'
            ],
            correct: 0,
            explanation: 'KPIs stand for Key Performance Indicators, which are measurable values that demonstrate how effectively an organization is achieving key business objectives.'
        },
        // Module 6: Future & Beyond (5)
        {
            id: 26,
            category: 'Implementation',
            question: 'The first phase of a DX roadmap is...',
            options: [
                'Implementation',
                'Assessment and Planning',
                'Evaluation',
                'Scaling'
            ],
            correct: 1,
            explanation: 'The first phase of a digital transformation roadmap is Assessment and Planning, where you evaluate the current state and define the transformation strategy.'
        },
        {
            id: 27,
            category: 'Implementation',
            question: 'A digital roadmap should be...',
            options: [
                'Fixed and rigid',
                'Flexible and adaptive',
                'Ignored',
                'Only for IT'
            ],
            correct: 1,
            explanation: 'A digital roadmap should be flexible and adaptive, allowing for adjustments based on changing circumstances, feedback, and new opportunities.'
        },
        {
            id: 28,
            category: 'Implementation',
            question: 'Stakeholder engagement is...',
            options: [
                'Unimportant',
                'Critical for success',
                'Optional',
                'Only for leaders'
            ],
            correct: 1,
            explanation: 'Stakeholder engagement is critical for digital transformation success. Involving stakeholders builds buy-in, addresses concerns, and ensures alignment with business needs.'
        },
        {
            id: 29,
            category: 'Implementation',
            question: 'Measuring success in DX requires...',
            options: [
                'Only financial metrics',
                'Clear KPIs and milestones',
                'Employee satisfaction only',
                'Technology adoption only'
            ],
            correct: 1,
            explanation: 'Measuring digital transformation success requires clear KPIs and milestones that track progress across multiple dimensions: business outcomes, customer satisfaction, and operational efficiency.'
        },
        {
            id: 30,
            category: 'Implementation',
            question: 'Continuous improvement in DX means...',
            options: [
                'Stop after implementation',
                'Iterate and evolve',
                'Change everything',
                'Ignore feedback'
            ],
            correct: 1,
            explanation: 'Continuous improvement in digital transformation means iterating and evolving based on feedback, data, and changing circumstances. It is an ongoing journey, not a one-time project.'
        }
    ];

    // ============================================
    // APPLICATION STATE
    // ============================================

    let state = {
        user: null,
        currentPage: 'home',
        currentVoice: null,
        isPlaying: false,
        audio: null,
        filterCategory: null,
        searchQuery: '',
        quizAnswers: new Array(30).fill(null),
        currentQuestion: 0,
        quizCompleted: false,
        quizScore: 0,
        showResults: false
    };

    // ============================================
    // STORAGE MANAGER
    // ============================================

    const Storage = {
        save(data) {
            try {
                localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(data));
                return true;
            } catch (e) {
                console.error('Storage save error:', e);
                return false;
            }
        },

        load() {
            try {
                const raw = localStorage.getItem(CONFIG.STORAGE_KEY);
                if (!raw) return null;
                return JSON.parse(raw);
            } catch (e) {
                console.error('Storage load error:', e);
                return null;
            }
        },

        clear() {
            try {
                localStorage.removeItem(CONFIG.STORAGE_KEY);
                return true;
            } catch (e) {
                console.error('Storage clear error:', e);
                return false;
            }
        }
    };

    // ============================================
    // USER DATA
    // ============================================

    function createUser(gender, displayName, identity) {
        return {
            id: 'user_' + Date.now(),
            gender: gender,
            displayName: displayName,
            identity: identity,
            level: 1,
            progress: 0,
            completedVoices: [],
            favorites: [],
            totalPlays: 0,
            listeningTime: 0,
            joinedDate: new Date().toISOString().split('T')[0],
            lastVisit: new Date().toISOString().split('T')[0],
            streak: 1,
            quizScores: [],
            quizAttempts: 0,
            completedAll: false
        };
    }

    function getIdentityOptions() {
        return [
            { gender: 'male', displayName: 'Alexander', identity: 'Alex' },
            { gender: 'female', displayName: 'Alexandra', identity: 'Alexa' },
            { gender: 'other', displayName: 'Taylor', identity: 'Taylor' }
        ];
    }

    // ============================================
    // DOM HELPERS
    // ============================================

    const DOM = {
        get(selector) {
            return document.querySelector(selector);
        },

        getAll(selector) {
            return document.querySelectorAll(selector);
        },

        create(tag, className, innerHTML) {
            const el = document.createElement(tag);
            if (className) el.className = className;
            if (innerHTML) el.innerHTML = innerHTML;
            return el;
        },

        show(element) {
            if (element) element.style.display = '';
        },

        hide(element) {
            if (element) element.style.display = 'none';
        },

        addClass(element, className) {
            if (element) element.classList.add(className);
        },

        removeClass(element, className) {
            if (element) element.classList.remove(className);
        },

        toggleClass(element, className) {
            if (element) element.classList.toggle(className);
        },

        text(element, content) {
            if (element) element.textContent = content;
        },

        html(element, content) {
            if (element) element.innerHTML = content;
        },

        showToast(message, type = 'info', duration = 3000) {
            // Remove existing toast
            const existing = this.get('.notification-toast');
            if (existing) existing.remove();

            const toast = this.create('div', 'notification-toast');
            toast.textContent = message;
            document.body.appendChild(toast);

            // Trigger show animation
            requestAnimationFrame(() => {
                toast.classList.add('show');
            });

            // Auto-hide
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 400);
            }, duration);
        },

        updateProgress(percentage) {
            const bar = this.get('#progress-bar');
            const text = this.get('#loading-percentage');
            if (bar) bar.style.width = percentage + '%';
            if (text) text.textContent = percentage + '%';
        },

        hideLoading() {
            const screen = this.get('#loading-screen');
            const app = this.get('#app');
            if (screen) screen.classList.add('hidden');
            if (app) app.style.display = 'block';
        }
    };

    // ============================================
    // AUDIO MANAGER — FIXED FOR GITHUB PAGES
    // ============================================

    const AudioManager = {
        audio: null,
        currentVoiceId: null,
        isPlaying: false,

        play(voiceId, filePath) {
            // Stop any current audio
            this.stop();

            // FIXED: Use the correct path for GitHub Pages
            // Since app.js is in the root, and audio is in assets/audio/
            const fullPath = './assets/audio/' + filePath;
            console.log(`🎤 Pelagia speaks: ${fullPath}`);

            try {
                this.audio = new Audio(fullPath);
                this.audio.volume = 0.8;

                this.audio.addEventListener('ended', () => {
                    console.log('✅ Pelagia has finished speaking');
                    this.stop();
                    this.updateUI();
                });

                this.audio.addEventListener('error', (e) => {
                    console.error('❌ Pelagia\'s voice could not be found:', e);
                    this.stop();
                    DOM.showToast('Pelagia\'s voice file is not yet ready. Please add the audio files.', 'error');
                    this.updateUI();
                });

                this.audio.play();
                this.currentVoiceId = voiceId;
                this.isPlaying = true;
                this.updateUI();

                // Update user progress
                UserProgress.markVoiceCompleted(voiceId);

                return true;
            } catch (e) {
                console.error('Audio error:', e);
                DOM.showToast('Unable to play voice. Please try again.', 'error');
                return false;
            }
        },

        stop() {
            if (this.audio) {
                this.audio.pause();
                this.audio.currentTime = 0;
                this.audio = null;
            }
            this.currentVoiceId = null;
            this.isPlaying = false;
            this.updateUI();
        },

        toggle(voiceId, filePath) {
            if (this.isPlaying && this.currentVoiceId === voiceId) {
                this.stop();
            } else {
                this.play(voiceId, filePath);
            }
        },

        isPlayingVoice(voiceId) {
            return this.isPlaying && this.currentVoiceId === voiceId;
        },

        updateUI() {
            // Update all play buttons
            const buttons = document.querySelectorAll('.play-btn');
            buttons.forEach(btn => {
                const id = parseInt(btn.dataset.voiceId);
                if (this.isPlaying && this.currentVoiceId === id) {
                    btn.textContent = '⏹ Stop';
                    btn.classList.add('playing');
                    // Find parent card and add active class
                    const card = btn.closest('.voice-card');
                    if (card) card.classList.add('active');
                } else {
                    btn.textContent = '▶ Play';
                    btn.classList.remove('playing');
                    const card = btn.closest('.voice-card');
                    if (card) card.classList.remove('active');
                }
            });
        }
    };

    // ============================================
    // USER PROGRESS
    // ============================================

    const UserProgress = {
        getProgress() {
            if (!state.user) return 0;
            return (state.user.completedVoices.length / CONFIG.TOTAL_VOICES) * 100;
        },

        getLevel() {
            if (!state.user) return 1;
            return state.user.level || 1;
        },

        getCompletedCount() {
            if (!state.user) return 0;
            return state.user.completedVoices.length;
        },

        getFavorites() {
            if (!state.user) return [];
            return state.user.favorites || [];
        },

        isVoiceCompleted(voiceId) {
            if (!state.user) return false;
            return state.user.completedVoices.includes(voiceId);
        },

        isVoiceFavorite(voiceId) {
            if (!state.user) return false;
            return (state.user.favorites || []).includes(voiceId);
        },

        markVoiceCompleted(voiceId) {
            if (!state.user) return;
            if (state.user.completedVoices.includes(voiceId)) return;

            state.user.completedVoices.push(voiceId);
            state.user.totalPlays = (state.user.totalPlays || 0) + 1;

            // Update progress
            const progress = this.getProgress();
            state.user.progress = progress;

            // Update level (every 5 voices)
            state.user.level = 1 + Math.floor(state.user.completedVoices.length / 5);

            // Update streak
            const today = new Date().toISOString().split('T')[0];
            if (state.user.lastVisit === today) {
                // Same day, no change
            } else if (state.user.lastVisit === getYesterday()) {
                state.user.streak = (state.user.streak || 0) + 1;
            } else {
                state.user.streak = 1;
            }
            state.user.lastVisit = today;

            // Check if all completed
            if (state.user.completedVoices.length >= CONFIG.TOTAL_VOICES) {
                state.user.completedAll = true;
                DOM.showToast('🎉 Congratulations! You have completed all 25 voices!', 'success', 5000);
            }

            this.save();
            this.updateUI();
        },

        toggleFavorite(voiceId) {
            if (!state.user) return;

            const favorites = state.user.favorites || [];
            const index = favorites.indexOf(voiceId);

            if (index > -1) {
                favorites.splice(index, 1);
                DOM.showToast('Removed from favorites', 'info');
            } else {
                favorites.push(voiceId);
                DOM.showToast('Added to favorites ⭐', 'success');
            }

            state.user.favorites = favorites;
            this.save();
            this.updateUI();
        },

        saveQuizScore(score) {
            if (!state.user) return;
            if (!state.user.quizScores) state.user.quizScores = [];
            state.user.quizScores.push(score);
            state.user.quizAttempts = (state.user.quizAttempts || 0) + 1;
            this.save();
        },

        getBestQuizScore() {
            if (!state.user || !state.user.quizScores || state.user.quizScores.length === 0) return 0;
            return Math.max(...state.user.quizScores);
        },

        save() {
            Storage.save(state.user);
        },

        updateUI() {
            // Update all UI elements that show progress
            this.updateStats();
            this.updateJourney();
            this.updateVoiceStatus();
            this.updateProfile();
        },

        updateStats() {
            const completed = this.getCompletedCount();
            const total = CONFIG.TOTAL_VOICES;
            const progress = this.getProgress();
            const level = this.getLevel();
            const streak = state.user ? state.user.streak || 0 : 0;
            const favorites = this.getFavorites().length;
            const bestScore = this.getBestQuizScore();

            // Update stat cards
            const statValues = document.querySelectorAll('.stat-value');
            if (statValues.length >= 4) {
                statValues[0].textContent = `${completed}/${total}`;
                statValues[1].textContent = `${streak}🔥`;
                statValues[2].textContent = `${bestScore}/30`;
                statValues[3].textContent = favorites;
            }

            // Update stat subtexts
            const statSubs = document.querySelectorAll('.stat-sub');
            if (statSubs.length >= 4) {
                statSubs[0].textContent = `${Math.round(progress)}% complete`;
                statSubs[1].textContent = 'days of dedication';
                statSubs[2].textContent = `${state.user ? state.user.quizAttempts || 0 : 0} attempts`;
                statSubs[3].textContent = '⭐ cherished voices';
            }

            // Update welcome message
            const welcomeTitle = document.querySelector('.welcome-title');
            if (welcomeTitle && state.user) {
                const name = state.user.displayName || 'Scholar';
                const identity = state.user.identity ? ` (${state.user.identity})` : '';
                welcomeTitle.textContent = `Good day, ${name}${identity}`;
            }

            // Update progress bar in journey
            const journeyBar = document.querySelector('.journey-header .progress-bar');
            if (journeyBar) {
                journeyBar.style.width = `${Math.round(progress)}%`;
                journeyBar.textContent = `${Math.round(progress)}%`;
            }
        },

        updateJourney() {
            const progress = this.getProgress();
            const stages = [
                { name: 'Foundations', range: [0, 20] },
                { name: 'Software Engineering', range: [20, 40] },
                { name: 'Key Technologies', range: [40, 60] },
                { name: 'People & Culture', range: [60, 80] },
                { name: 'Implementation', range: [80, 100] }
            ];

            const items = document.querySelectorAll('.timeline-item');
            items.forEach((item, index) => {
                const stage = stages[index];
                if (!stage) return;

                const isCompleted = progress >= stage.range[1];
                const isCurrent = progress >= stage.range[0] && progress < stage.range[1];

                item.classList.remove('completed', 'active');

                if (isCompleted) {
                    item.classList.add('completed');
                    const marker = item.querySelector('.timeline-marker');
                    if (marker) marker.textContent = '✓';
                    const badge = item.querySelector('.stage-badge');
                    if (badge) {
                        badge.textContent = '✅ Completed';
                        badge.className = 'stage-badge completed';
                    }
                } else if (isCurrent) {
                    item.classList.add('active');
                    const marker = item.querySelector('.timeline-marker');
                    if (marker) marker.textContent = '●';
                    const badge = item.querySelector('.stage-badge');
                    if (badge) {
                        badge.textContent = '🔄 In Progress';
                        badge.className = 'stage-badge current';
                    }
                    // Update progress within stage
                    const pct = ((progress - stage.range[0]) / (stage.range[1] - stage.range[0]) * 100);
                    const progressText = item.querySelector('.stage-progress-text');
                    if (progressText) {
                        progressText.textContent = `${Math.round(pct)}% complete`;
                    }
                } else {
                    const marker = item.querySelector('.timeline-marker');
                    if (marker) marker.textContent = '○';
                    const badge = item.querySelector('.stage-badge');
                    if (badge) {
                        badge.textContent = '🔒 Locked';
                        badge.className = 'stage-badge locked';
                    }
                }
            });
        },

        updateVoiceStatus() {
            const cards = document.querySelectorAll('.voice-card');
            cards.forEach(card => {
                const id = parseInt(card.dataset.voiceId);
                if (!id) return;

                const isCompleted = this.isVoiceCompleted(id);
                const isFavorite = this.isVoiceFavorite(id);

                card.classList.remove('completed');
                if (isCompleted) card.classList.add('completed');

                const status = card.querySelector('.voice-status');
                if (status) {
                    status.textContent = isCompleted ? '✅ Completed' : '⬜ Not started';
                    status.className = `voice-status${isCompleted ? ' completed' : ''}`;
                }

                const favBtn = card.querySelector('.fav-btn');
                if (favBtn) {
                    favBtn.textContent = isFavorite ? '⭐' : '☆';
                    favBtn.style.color = isFavorite ? '#C9A84C' : '';
                }

                // Update icon
                const icon = card.querySelector('.voice-icon');
                if (icon) {
                    icon.textContent = isCompleted ? '✅' : '♪';
                }
            });
        },

        updateProfile() {
            if (!state.user) return;

            const user = state.user;
            const completed = this.getCompletedCount();
            const progress = this.getProgress();
            const level = this.getLevel();
            const streak = user.streak || 0;
            const bestScore = this.getBestQuizScore();
            const totalQuizzes = user.quizAttempts || 0;
            const totalPlays = user.totalPlays || 0;

            // Update profile stats
            const statNumbers = document.querySelectorAll('.profile-stat .stat-number');
            if (statNumbers.length >= 6) {
                statNumbers[0].textContent = level;
                statNumbers[1].textContent = `${Math.round(progress)}%`;
                statNumbers[2].textContent = `${completed}/${CONFIG.TOTAL_VOICES}`;
                statNumbers[3].textContent = `${bestScore}/30`;
                statNumbers[4].textContent = totalQuizzes;
                statNumbers[5].textContent = `${streak}🔥`;
            }

            // Update profile info
            const nameEl = document.querySelector('.profile-name');
            if (nameEl) nameEl.textContent = user.displayName || 'Scholar';

            const usernameEl = document.querySelector('.profile-username');
            if (usernameEl) usernameEl.textContent = `Known as ${user.identity || 'Guest'}`;

            const joinedEl = document.querySelector('.profile-joined');
            if (joinedEl) joinedEl.textContent = `📅 Joined ${user.joinedDate || 'Today'}`;

            const playsEl = document.querySelector('.profile-plays');
            if (playsEl) playsEl.textContent = `🎤 Total plays: ${totalPlays}`;

            // Update avatar initials
            const initials = document.querySelector('.avatar-initials');
            if (initials) {
                const name = user.displayName || 'U';
                initials.textContent = name.charAt(0).toUpperCase();
            }
        }
    };

    // ============================================
    // HELPER FUNCTIONS
    // ============================================

    function getYesterday() {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        return d.toISOString().split('T')[0];
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // ============================================
    // RENDER FUNCTIONS
    // ============================================

    function renderApp() {
        const app = document.getElementById('app');
        if (!app) return;

        app.innerHTML = `
            <div class="app-container">
                <!-- Header -->
                <header class="app-header">
                    <div class="header-content">
                        <div class="brand">
                            <div class="brand-icon">
                                <img src="./assets/images/logo.png" alt="Learn Modern Right Logo" onerror="this.style.display='none'">
                            </div>
                            <div>
                                <h1>Learn Modern Right</h1>
                                <span class="gold-text">with Pelagia</span>
                            </div>
                        </div>
                        <div class="header-meta">
                            <span class="developer">${CONFIG.DEVELOPER}</span>
                            <span class="date">${CONFIG.DATE}</span>
                        </div>
                    </div>
                </header>

                <!-- Navigation -->
                <nav class="main-nav">
                    <div class="nav-content">
                        <button class="nav-item active" data-page="home">
                            <span class="nav-icon">🏛️</span>
                            <span class="nav-label">Home</span>
                        </button>
                        <button class="nav-item" data-page="voices">
                            <span class="nav-icon">🎤</span>
                            <span class="nav-label">Voices</span>
                            <span class="nav-badge">${CONFIG.TOTAL_VOICES}</span>
                        </button>
                        <button class="nav-item" data-page="journey">
                            <span class="nav-icon">🗺️</span>
                            <span class="nav-label">Journey</span>
                        </button>
                        <button class="nav-item" data-page="quiz">
                            <span class="nav-icon">📝</span>
                            <span class="nav-label">Quiz</span>
                            <span class="nav-badge">30</span>
                        </button>
                        <button class="nav-item" data-page="profile">
                            <span class="nav-icon">👤</span>
                            <span class="nav-label">Profile</span>
                        </button>
                    </div>
                </nav>

                <!-- Main Content -->
                <main class="main-content">
                    ${renderHome()}
                    ${renderVoices()}
                    ${renderJourney()}
                    ${renderQuiz()}
                    ${renderProfile()}
                </main>

                <!-- Footer -->
                <footer class="app-footer">
                    <div class="footer-content">
                        <p>© 2026 Learn Modern Right</p>
                        <p class="footer-tech">Built with HTML · CSS · JavaScript · Voice of Pelagia</p>
                        <div class="footer-links">
                            <a href="#">About</a>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>
                </footer>
            </div>
        `;

        // Show the app
        DOM.hideLoading();

        // Initialize event listeners
        initEventListeners();

        // Initialize user
        initUser();

        // Update UI
        UserProgress.updateUI();

        // Show welcome toast
        setTimeout(() => {
            DOM.showToast('🎤 Pelagia: "Let us begin our journey..."', 'info', 4000);
        }, 1000);
    }

    function renderHome() {
        const completed = state.user ? state.user.completedVoices.length : 0;
        const total = CONFIG.TOTAL_VOICES;
        const progress = UserProgress.getProgress();
        const streak = state.user ? state.user.streak || 0 : 0;
        const bestScore = UserProgress.getBestQuizScore();
        const favorites = state.user ? (state.user.favorites || []).length : 0;

        return `
            <div id="page-home" class="page active">
                <div class="welcome-section">
                    <h2 class="welcome-title">Good day, Scholar</h2>
                    <p class="welcome-sub">An aristocratic approach to digital transformation education.</p>
                    <p class="welcome-pelagia">🎤 Pelagia awaits your command.</p>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <span class="stat-label">Voices Completed</span>
                        <span class="stat-value">${completed}/${total}</span>
                        <span class="stat-sub">${Math.round(progress)}% complete</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">Learning Streak</span>
                        <span class="stat-value">${streak}🔥</span>
                        <span class="stat-sub">days of dedication</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">Quiz Best Score</span>
                        <span class="stat-value">${bestScore}/30</span>
                        <span class="stat-sub">${state.user ? state.user.quizAttempts || 0 : 0} attempts</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">Favorites</span>
                        <span class="stat-value">${favorites}</span>
                        <span class="stat-sub">⭐ cherished voices</span>
                    </div>
                </div>

                <div class="quick-actions">
                    <h3 class="section-title">Quick Actions</h3>
                    <div class="action-buttons">
                        <button class="action-btn gold" onclick="navigateTo('voices')">🎤 Listen to Pelagia</button>
                        <button class="action-btn primary" onclick="navigateTo('journey')">📚 Continue Learning</button>
                        <button class="action-btn secondary" onclick="navigateTo('quiz')">📝 Take Quiz</button>
                    </div>
                </div>

                <div class="voice-trigger-panel">
                    <h3 class="section-title">Featured Voices</h3>
                    <div class="voice-grid">
                        ${VOICES.slice(0, 4).map(voice => `
                            <div class="voice-trigger ${UserProgress.isVoiceCompleted(voice.id) ? 'completed' : ''}">
                                <span class="voice-trigger-name">
                                    ${UserProgress.isVoiceCompleted(voice.id) ? '✅ ' : ''}
                                    ${voice.title}
                                </span>
                                <span class="voice-trigger-category">${voice.category}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    function renderVoices() {
        const filtered = getFilteredVoices();

        return `
            <div id="page-voices" class="page">
                <div class="voice-center-header">
                    <h2 class="page-title">The Voice Library</h2>
                    <p class="page-subtitle">Pelagia's wisdom awaits. Select a voice to begin.</p>
                    <div class="voice-stats">
                        <span>🎯 ${UserProgress.getCompletedCount()} / ${CONFIG.TOTAL_VOICES} voices completed</span>
                        <span>📚 ${filtered.length} voices available</span>
                    </div>
                </div>

                <div class="voice-controls">
                    <div class="control-group">
                        <label class="control-label">🔊 Volume</label>
                        <input type="range" class="volume-slider" min="0" max="100" value="80" 
                               oninput="setVolume(this.value)">
                    </div>
                    <div class="control-group">
                        <span class="voice-count">${filtered.length} voices</span>
                    </div>
                </div>

                <div class="category-filter">
                    ${['All Voices', 'Foundations', 'Software Engineering', 'Key Technologies', 'People & Culture', 'Implementation'].map((cat, i) => `
                        <button class="filter-btn ${i === 0 ? 'active' : ''}" 
                                data-filter="${i === 0 ? 'all' : cat.toLowerCase().replace(/ /g, '-')}"
                                onclick="filterVoices(this)">
                            ${cat}
                        </button>
                    `).join('')}
                </div>

                <div class="voices-grid">
                    ${filtered.map(voice => `
                        <div class="voice-card ${UserProgress.isVoiceCompleted(voice.id) ? 'completed' : ''}" 
                             data-voice-id="${voice.id}">
                            <div class="voice-card-header">
                                <div class="voice-name-wrapper">
                                    <span class="voice-icon">${UserProgress.isVoiceCompleted(voice.id) ? '✅' : '♪'}</span>
                                    <h3 class="voice-name">${voice.title}</h3>
                                </div>
                                <span class="voice-category">${voice.category}</span>
                            </div>

                            <div class="voice-card-body">
                                <p class="voice-script">${voice.script}</p>
                                <ul class="voice-key-takeaways">
                                    ${voice.keyTakeaways.map(t => `<li>${t}</li>`).join('')}
                                </ul>
                            </div>

                            <div class="voice-card-footer">
                                <div class="voice-meta">
                                    <span class="voice-duration">⏱️ ${voice.duration}</span>
                                    <span class="voice-status ${UserProgress.isVoiceCompleted(voice.id) ? 'completed' : ''}">
                                        ${UserProgress.isVoiceCompleted(voice.id) ? '✅ Completed' : '⬜ Not started'}
                                    </span>
                                    <button class="play-btn fav-btn" 
                                            data-voice-id="${voice.id}"
                                            onclick="toggleFavorite(${voice.id})"
                                            style="${UserProgress.isVoiceFavorite(voice.id) ? 'color: #C9A84C;' : ''}">
                                        ${UserProgress.isVoiceFavorite(voice.id) ? '⭐' : '☆'}
                                    </button>
                                </div>
                                <button class="play-btn ${AudioManager.isPlayingVoice(voice.id) ? 'playing' : ''}" 
                                        data-voice-id="${voice.id}"
                                        onclick="toggleVoice(${voice.id}, '${voice.file}')">
                                    ${AudioManager.isPlayingVoice(voice.id) ? '⏹ Stop' : '▶ Play'}
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    function renderJourney() {
        const progress = UserProgress.getProgress();
        const stages = [
            { name: 'Foundations', description: 'Understanding the fundamentals of digital transformation', range: [0, 20] },
            { name: 'Software Engineering', description: 'Exploring the role of engineering in DX', range: [20, 40] },
            { name: 'Key Technologies', description: 'Mastering the technologies that drive change', range: [40, 60] },
            { name: 'People & Culture', description: 'Leading with empathy and building digital culture', range: [60, 80] },
            { name: 'Implementation', description: 'Executing and sustaining digital transformation', range: [80, 100] }
        ];

        return `
            <div id="page-journey" class="page">
                <div class="journey-header">
                    <h2 class="page-title">Your Learning Journey</h2>
                    <p class="page-subtitle">The path to digital mastery, guided by Pelagia.</p>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${Math.round(progress)}%">
                            ${Math.round(progress)}%
                        </div>
                    </div>
                </div>

                <div class="timeline">
                    ${stages.map((stage, index) => {
                        const isCompleted = progress >= stage.range[1];
                        const isCurrent = progress >= stage.range[0] && progress < stage.range[1];
                        const pct = isCurrent ? ((progress - stage.range[0]) / (stage.range[1] - stage.range[0]) * 100) : 0;

                        return `
                            <div class="timeline-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'active' : ''}">
                                <div class="timeline-marker">${isCompleted ? '✓' : isCurrent ? '●' : '○'}</div>
                                <div class="timeline-content">
                                    <div class="timeline-header">
                                        <h4 class="stage-name">${stage.name}</h4>
                                        <span class="stage-badge ${isCompleted ? 'completed' : isCurrent ? 'current' : 'locked'}">
                                            ${isCompleted ? '✅ Completed' : isCurrent ? '🔄 In Progress' : '🔒 Locked'}
                                        </span>
                                    </div>
                                    <p class="stage-description">${stage.description}</p>
                                    ${isCurrent ? `<div class="stage-progress"><span class="stage-progress-text">${Math.round(pct)}% complete</span></div>` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <div class="journey-actions">
                    <button class="action-btn gold" onclick="navigateTo('voices')">🎤 Voice-Guided Tour</button>
                    <button class="action-btn primary" onclick="navigateTo('voices')">📚 Continue Learning</button>
                </div>
            </div>
        `;
    }

    function renderQuiz() {
        const total = CONFIG.TOTAL_QUESTIONS;
        const current = state.currentQuestion;
        const answers = state.quizAnswers;
        const question = QUIZ_QUESTIONS[current];
        const answered = answers[current] !== null;

        return `
            <div id="page-quiz" class="page">
                <div class="quiz-header">
                    <h2 class="page-title">📝 Knowledge Assessment</h2>
                    <p class="page-subtitle">Test your understanding of digital transformation.</p>
                </div>

                ${state.showResults ? `
                    <div class="quiz-results">
                        <div class="results-card">
                            <div class="results-score">
                                <span class="score-number">${state.quizScore}/30</span>
                                <span class="score-label">Your Score</span>
                            </div>
                            <div class="results-feedback">
                                <p>${state.quizScore >= 25 ? '🌟 Outstanding! You are a true digital scholar.' :
                                    state.quizScore >= 20 ? '📚 Well done! You have a strong understanding.' :
                                    state.quizScore >= 15 ? '📖 Good effort! Review the voices to improve.' :
                                    '🎤 Pelagia suggests revisiting the voices for deeper understanding.'}</p>
                            </div>
                            <button class="action-btn primary" onclick="resetQuiz()">🔄 Retry Quiz</button>
                        </div>
                    </div>
                ` : `
                    <div class="quiz-container">
                        <div class="quiz-progress">
                            <span>Question ${current + 1} of ${total}</span>
                            <div class="progress-bar-container">
                                <div class="progress-bar" style="width: ${((current + 1) / total * 100)}%">
                                    ${Math.round((current + 1) / total * 100)}%
                                </div>
                            </div>
                            <span class="quiz-category">Category: ${question.category}</span>
                        </div>

                        <div class="quiz-question">
                            <h3>${question.question}</h3>
                            <div class="quiz-options">
                                ${question.options.map((option, i) => `
                                    <button class="quiz-option ${answers[current] === i ? 'selected' : ''}"
                                            onclick="answerQuestion(${current}, ${i})">
                                        ${option}
                                    </button>
                                `).join('')}
                            </div>
                            ${answered ? `
                                <div class="quiz-explanation">
                                    <p>${question.explanation}</p>
                                    <button class="action-btn gold" onclick="nextQuestion()">
                                        ${current < total - 1 ? 'Next Question →' : '📊 See Results'}
                                    </button>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `}
            </div>
        `;
    }

    function renderProfile() {
        const user = state.user;

        if (!user) {
            return `
                <div id="page-profile" class="page">
                    <div class="profile-header">
                        <h2 class="page-title">👤 Profile & Settings</h2>
                        <p class="page-subtitle">Your digital identity and preferences.</p>
                    </div>
                    <div class="profile-login">
                        <div class="login-card">
                            <h3>👋 Welcome, New Scholar</h3>
                            <p>Choose your identity to begin your journey with Pelagia.</p>
                            <div class="login-options">
                                ${getIdentityOptions().map(opt => `
                                    <button class="login-option" onclick="setIdentity('${opt.gender}', '${opt.displayName}', '${opt.identity}')">
                                        ${opt.gender === 'male' ? '👨' : opt.gender === 'female' ? '👩' : '🧑'} ${opt.displayName}
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        const completed = UserProgress.getCompletedCount();
        const progress = UserProgress.getProgress();
        const level = UserProgress.getLevel();
        const streak = user.streak || 0;
        const bestScore = UserProgress.getBestQuizScore();
        const totalQuizzes = user.quizAttempts || 0;
        const totalPlays = user.totalPlays || 0;

        return `
            <div id="page-profile" class="page">
                <div class="profile-header">
                    <h2 class="page-title">👤 Profile & Settings</h2>
                    <p class="page-subtitle">Your digital identity and preferences.</p>
                </div>

                <div class="profile-content">
                    <div class="profile-card">
                        <div class="profile-avatar">
                            <span class="avatar-initials">${user.displayName.charAt(0).toUpperCase()}</span>
                        </div>
                        <div class="profile-info">
                            <h3 class="profile-name">${user.displayName}</h3>
                            <p class="profile-username">Known as ${user.identity}</p>
                            <p class="profile-joined">📅 Joined ${user.joinedDate}</p>
                            <p class="profile-plays">🎤 Total plays: ${totalPlays}</p>
                        </div>
                    </div>

                    <div class="profile-stats-grid">
                        <div class="profile-stat">
                            <span class="stat-label">Level</span>
                            <span class="stat-number">${level}</span>
                        </div>
                        <div class="profile-stat">
                            <span class="stat-label">Progress</span>
                            <span class="stat-number">${Math.round(progress)}%</span>
                        </div>
                        <div class="profile-stat">
                            <span class="stat-label">Voices</span>
                            <span class="stat-number">${completed}/${CONFIG.TOTAL_VOICES}</span>
                        </div>
                        <div class="profile-stat">
                            <span class="stat-label">Quiz Best</span>
                            <span class="stat-number">${bestScore}/30</span>
                        </div>
                        <div class="profile-stat">
                            <span class="stat-label">Quizzes Taken</span>
                            <span class="stat-number">${totalQuizzes}</span>
                        </div>
                        <div class="profile-stat">
                            <span class="stat-label">Streak</span>
                            <span class="stat-number">${streak}🔥</span>
                        </div>
                    </div>

                    <div class="settings-section">
                        <h4 class="settings-title">⚙️ Preferences</h4>
                        <div class="settings-group">
                            <div class="setting-row">
                                <span class="setting-label">👤 Identity</span>
                                <span style="font-size: 0.9rem; color: #718096;">${user.identity} (${user.gender})</span>
                            </div>
                            <div class="setting-row">
                                <span class="setting-label">🌓 Dark Mode</span>
                                <label class="toggle-switch">
                                    <input type="checkbox" onchange="toggleDarkMode(this.checked)">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                            <div class="setting-row">
                                <span class="setting-label">🔊 Auto-Play Voices</span>
                                <label class="toggle-switch">
                                    <input type="checkbox" onchange="toggleAutoPlay(this.checked)">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                            <div class="setting-row">
                                <span class="setting-label">🗑️ Reset Progress</span>
                                <button class="action-btn danger" onclick="resetProgress()">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // ============================================
    // FILTER FUNCTIONS
    // ============================================

    function getFilteredVoices() {
        let filtered = [...VOICES];

        if (state.filterCategory && state.filterCategory !== 'all') {
            filtered = filtered.filter(v => 
                v.category.toLowerCase().replace(/ /g, '-') === state.filterCategory
            );
        }

        if (state.searchQuery) {
            const query = state.searchQuery.toLowerCase();
            filtered = filtered.filter(v =>
                v.title.toLowerCase().includes(query) ||
                v.script.toLowerCase().includes(query)
            );
        }

        return filtered;
    }

    function filterVoices(button) {
        const filter = button.dataset.filter;
        state.filterCategory = filter;

        // Update active state
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Re-render voices
        const container = document.querySelector('.voices-grid');
        if (container) {
            const filtered = getFilteredVoices();
            container.innerHTML = filtered.map(voice => `
                <div class="voice-card ${UserProgress.isVoiceCompleted(voice.id) ? 'completed' : ''}" 
                     data-voice-id="${voice.id}">
                    <div class="voice-card-header">
                        <div class="voice-name-wrapper">
                            <span class="voice-icon">${UserProgress.isVoiceCompleted(voice.id) ? '✅' : '♪'}</span>
                            <h3 class="voice-name">${voice.title}</h3>
                        </div>
                        <span class="voice-category">${voice.category}</span>
                    </div>

                    <div class="voice-card-body">
                        <p class="voice-script">${voice.script}</p>
                        <ul class="voice-key-takeaways">
                            ${voice.keyTakeaways.map(t => `<li>${t}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="voice-card-footer">
                        <div class="voice-meta">
                            <span class="voice-duration">⏱️ ${voice.duration}</span>
                            <span class="voice-status ${UserProgress.isVoiceCompleted(voice.id) ? 'completed' : ''}">
                                ${UserProgress.isVoiceCompleted(voice.id) ? '✅ Completed' : '⬜ Not started'}
                            </span>
                            <button class="play-btn fav-btn" 
                                    data-voice-id="${voice.id}"
                                    onclick="toggleFavorite(${voice.id})"
                                    style="${UserProgress.isVoiceFavorite(voice.id) ? 'color: #C9A84C;' : ''}">
                                ${UserProgress.isVoiceFavorite(voice.id) ? '⭐' : '☆'}
                            </button>
                        </div>
                        <button class="play-btn ${AudioManager.isPlayingVoice(voice.id) ? 'playing' : ''}" 
                                data-voice-id="${voice.id}"
                                onclick="toggleVoice(${voice.id}, '${voice.file}')">
                            ${AudioManager.isPlayingVoice(voice.id) ? '⏹ Stop' : '▶ Play'}
                        </button>
                    </div>
                </div>
            `).join('');

            // Update voice count
            const count = document.querySelector('.voice-count');
            if (count) count.textContent = `${filtered.length} voices`;
        }
    }

    // ============================================
    // NAVIGATION FUNCTIONS
    // ============================================

    function navigateTo(page) {
        state.currentPage = page;

        // Update nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.page === page) {
                item.classList.add('active');
            }
        });

        // Update pages
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const target = document.getElementById(`page-${page}`);
        if (target) target.classList.add('active');

        // Update URL hash without causing scroll
        history.pushState(null, '', `#${page}`);
    }

    // ============================================
    // VOICE FUNCTIONS
    // ============================================

    function toggleVoice(voiceId, filePath) {
        AudioManager.toggle(voiceId, filePath);
    }

    function toggleFavorite(voiceId) {
        UserProgress.toggleFavorite(voiceId);
    }

    function setVolume(value) {
        const volume = value / 100;
        if (AudioManager.audio) {
            AudioManager.audio.volume = volume;
        }
    }

    // ============================================
    // QUIZ FUNCTIONS
    // ============================================

    function answerQuestion(index, answer) {
        state.quizAnswers[index] = answer;
        renderQuizContent();
    }

    function nextQuestion() {
        const total = CONFIG.TOTAL_QUESTIONS;
        if (state.currentQuestion < total - 1) {
            state.currentQuestion++;
            renderQuizContent();
        } else {
            // Calculate score
            let score = 0;
            state.quizAnswers.forEach((ans, i) => {
                if (ans !== null && ans === QUIZ_QUESTIONS[i].correct) {
                    score++;
                }
            });
            state.quizScore = score;
            state.showResults = true;
            state.quizCompleted = true;

            // Save score
            UserProgress.saveQuizScore(score);

            renderQuizContent();
            DOM.showToast(`🎉 Quiz complete! Score: ${score}/30`, 'success', 4000);
        }
    }

    function resetQuiz() {
        state.quizAnswers = new Array(CONFIG.TOTAL_QUESTIONS).fill(null);
        state.currentQuestion = 0;
        state.quizCompleted = false;
        state.quizScore = 0;
        state.showResults = false;
        renderQuizContent();
    }

    function renderQuizContent() {
        const container = document.querySelector('#page-quiz');
        if (!container) return;

        const total = CONFIG.TOTAL_QUESTIONS;
        const current = state.currentQuestion;
        const answers = state.quizAnswers;
        const question = QUIZ_QUESTIONS[current];
        const answered = answers[current] !== null;

        if (state.showResults) {
            container.innerHTML = `
                <div class="quiz-header">
                    <h2 class="page-title">📝 Knowledge Assessment</h2>
                    <p class="page-subtitle">Test your understanding of digital transformation.</p>
                </div>
                <div class="quiz-results">
                    <div class="results-card">
                        <div class="results-score">
                            <span class="score-number">${state.quizScore}/30</span>
                            <span class="score-label">Your Score</span>
                        </div>
                        <div class="results-feedback">
                            <p>${state.quizScore >= 25 ? '🌟 Outstanding! You are a true digital scholar.' :
                                state.quizScore >= 20 ? '📚 Well done! You have a strong understanding.' :
                                state.quizScore >= 15 ? '📖 Good effort! Review the voices to improve.' :
                                '🎤 Pelagia suggests revisiting the voices for deeper understanding.'}</p>
                        </div>
                        <button class="action-btn primary" onclick="resetQuiz()">🔄 Retry Quiz</button>
                    </div>
                </div>
            `;
            return;
        }

        container.innerHTML = `
            <div class="quiz-header">
                <h2 class="page-title">📝 Knowledge Assessment</h2>
                <p class="page-subtitle">Test your understanding of digital transformation.</p>
            </div>
            <div class="quiz-container">
                <div class="quiz-progress">
                    <span>Question ${current + 1} of ${total}</span>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${((current + 1) / total * 100)}%">
                            ${Math.round((current + 1) / total * 100)}%
                        </div>
                    </div>
                    <span class="quiz-category">Category: ${question.category}</span>
                </div>

                <div class="quiz-question">
                    <h3>${question.question}</h3>
                    <div class="quiz-options">
                        ${question.options.map((option, i) => `
                            <button class="quiz-option ${answers[current] === i ? 'selected' : ''}"
                                    onclick="answerQuestion(${current}, ${i})">
                                ${option}
                            </button>
                        `).join('')}
                    </div>
                    ${answered ? `
                        <div class="quiz-explanation">
                            <p>${question.explanation}</p>
                            <button class="action-btn gold" onclick="nextQuestion()">
                                ${current < total - 1 ? 'Next Question →' : '📊 See Results'}
                            </button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }

    // ============================================
    // USER FUNCTIONS
    // ============================================

    function initUser() {
        const saved = Storage.load();
        if (saved) {
            state.user = saved;
            UserProgress.updateUI();
            return;
        }

        // No user found, show profile page with login options
        navigateTo('profile');
    }

    function setIdentity(gender, displayName, identity) {
        state.user = createUser(gender, displayName, identity);
        Storage.save(state.user);
        UserProgress.updateUI();
        DOM.showToast(`🎤 Welcome, ${displayName}! Pelagia awaits.`, 'success', 3000);
        navigateTo('home');
        renderApp();
    }

    function resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            Storage.clear();
            state.user = null;
            state.quizAnswers = new Array(CONFIG.TOTAL_QUESTIONS).fill(null);
            state.currentQuestion = 0;
            state.quizCompleted = false;
            state.quizScore = 0;
            state.showResults = false;
            DOM.showToast('Progress reset successfully.', 'info', 3000);
            renderApp();
        }
    }

    function toggleDarkMode(enabled) {
        if (enabled) {
            document.documentElement.style.setProperty('--color-cream', '#1E293B');
            document.documentElement.style.setProperty('--color-ivory', '#1A1A2E');
            document.documentElement.style.setProperty('--color-primary', '#E2E8F0');
            document.documentElement.style.setProperty('--color-primary-light', '#A0AEC0');
            document.documentElement.style.setProperty('--color-text', '#EDF2F7');
            document.documentElement.style.setProperty('--color-text-light', '#A0AEC0');
        } else {
            document.documentElement.style.setProperty('--color-cream', '#F5F0E8');
            document.documentElement.style.setProperty('--color-ivory', '#FFFFF0');
            document.documentElement.style.setProperty('--color-primary', '#1E293B');
            document.documentElement.style.setProperty('--color-primary-light', '#334155');
            document.documentElement.style.setProperty('--color-text', '#2D3748');
            document.documentElement.style.setProperty('--color-text-light', '#718096');
        }
    }

    function toggleAutoPlay(enabled) {
        // Future feature: Auto-play next voice
        console.log('Auto-play:', enabled);
    }

    // ============================================
    // EVENT LISTENERS
    // ============================================

    function initEventListeners() {
        // Navigation clicks
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                const page = item.dataset.page;
                if (page) navigateTo(page);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                const pages = ['home', 'voices', 'journey', 'quiz', 'profile'];
                const currentIndex = pages.indexOf(state.currentPage);
                let newIndex = currentIndex;
                if (e.key === 'ArrowLeft' && currentIndex > 0) newIndex = currentIndex - 1;
                if (e.key === 'ArrowRight' && currentIndex < pages.length - 1) newIndex = currentIndex + 1;
                if (newIndex !== currentIndex) {
                    navigateTo(pages[newIndex]);
                }
            }
        });

        // Handle hash change for direct links
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.replace('#', '');
            if (hash && ['home', 'voices', 'journey', 'quiz', 'profile'].includes(hash)) {
                navigateTo(hash);
            }
        });

        // Handle popstate
        window.addEventListener('popstate', () => {
            const hash = window.location.hash.replace('#', '') || 'home';
            navigateTo(hash);
        });
    }

    // ============================================
    // LOADING SCREEN SIMULATION
    // ============================================

    function simulateLoading() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 8 + 2;
            if (progress > 100) progress = 100;
            DOM.updateProgress(Math.round(progress));

            if (progress >= 100) {
                clearInterval(interval);
                renderApp();
            }
        }, 150);
    }

    // ============================================
    // EXPOSE GLOBALLY
    // ============================================

    window.navigateTo = navigateTo;
    window.toggleVoice = toggleVoice;
    window.toggleFavorite = toggleFavorite;
    window.setVolume = setVolume;
    window.filterVoices = filterVoices;
    window.answerQuestion = answerQuestion;
    window.nextQuestion = nextQuestion;
    window.resetQuiz = resetQuiz;
    window.setIdentity = setIdentity;
    window.resetProgress = resetProgress;
    window.toggleDarkMode = toggleDarkMode;
    window.toggleAutoPlay = toggleAutoPlay;

    // ============================================
    // INITIALIZE
    // ============================================

    console.log(`📜 ${CONFIG.APP_NAME} — ${CONFIG.VERSION}`);
    console.log(`👨‍💻 Developer: ${CONFIG.DEVELOPER}`);
    console.log(`📅 Date: ${CONFIG.DATE}`);
    console.log(`🎤 ${CONFIG.PELAGIA.NAME}: "${CONFIG.PELAGIA.GREETING}"`);

    // Start loading
    DOM.updateProgress(0);
    simulateLoading();

})();
