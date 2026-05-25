import { Course, Achiever, Faculty, FaqItem, TrainingActivity, OlqItem } from './types';

export const COURSES: Course[] = [
  {
    id: 'nda',
    name: 'NDA Preparation (with XI-XII Foundation)',
    duration: '1 Year / 2 Year Foundation / 6 Months Crash',
    eligibility: '10th Passed (for 2-Yr Foundation), 11th Passed (for 1-Yr Program), or 12th Appeared/Passed of Any/Science Stream. Age limit: 16.5 to 19.5 years.',
    overview: 'Our flagship integrated program prepares students concurrently for CBSE/RBSE XII board exams and the NDA written examination, alongside structured officer-mindset development and weekly physical training on our dedicated grounds in Jaipur.',
    syllabus: [
      'Mathematics (Algebra, Trigonometry, Analytical Geometry, Calculus, Vector, Statistics & Probability)',
      'General Ability Test (English Vocabulary, Grammar, Reading Comprehension)',
      'General Knowledge (Physics, Chemistry, General Science, Indian History, Geography, Civics, Current Affairs)'
    ],
    features: [
      'Exhaustive written syllabus coaching by Er. Vinay Bhabhra (MNIT Jaipur Alumni)',
      'Comprehensive study materials with last 10 years solved papers',
      'Weekly physical fitness & drill training under military mentors',
      'Integrated mock tests every Saturday matching precise UPSC standards',
      'Regular English communication class and personality polishing sessions'
    ],
    targetExams: ['NDA Written Paper (UPSC)', 'Navy Tech Cadet Entry', 'Army TES (Technical Entry Scheme)']
  },
  {
    id: 'cds',
    name: 'CDS Exam Coaching',
    duration: '3 Months / 6 Months Extensive Program',
    eligibility: 'Graduates or Final Year Students of any discipline (for IMA/OTA) or B.E/B.Tech (for Navy/Air Force). Age: 19 to 25 years.',
    overview: 'High-intensity coaching specialized in Combined Defence Services Exam conducted by UPSC. Focused on core command strategies, high-speed problem solving, and intensive General Knowledge analyses.',
    syllabus: [
      'Elementary Mathematics (Arithmetic, Algebra, Geometry, Mensuration, Trigonometry)',
      'English Language (Comprehension, Spotting Errors, Sentence Ordering, Synonyms/Antonyms)',
      'General Studies (General Science, Indian Polity, Economy, Geography, History, National Updates)'
    ],
    features: [
      'Specialized sessions on core Science and Polity trends in CDS exams',
      'Logical shortcut tricks in Elementary Mathematics to solve 100 questions fast',
      'English grooming by Col. Mukherjee to excel in both written and spoken SSB',
      'Real-time CBT simulated test series and past papers analysis',
      'Direct interaction with selected candidates and defense officers'
    ],
    targetExams: ['CDS (IMA - Indian Military Academy)', 'CDS (OTA - Officers Training Academy)', 'CDS (AFA - Air Force Academy)', 'CDS (INA - Indian Naval Academy)']
  },
  {
    id: 'afcat',
    name: 'AFCAT Preparation',
    duration: '3 Months / 6 Months Comprehensive',
    eligibility: 'Graduates in any discipline with minimum 60% with Maths & Physics at 10+2 level, or B.E./B.Tech. Age: 20 to 24 (Flying Branch) or 20 to 26 (Ground Duty).',
    overview: 'Customized coaching path designed for the Air Force Common Admission Test, optimizing numerical ability, reasoning strength, spatial awareness, and aeronautical GK streams.',
    syllabus: [
      'Verbal Ability in English (Comprehension, Error Detection, Sentence Completion, Idioms)',
      'Numerical Ability (Decimal Fractions, Time & Work, Profit & Loss, Simple Interest, Speed & Distance)',
      'Reasoning & Military Aptitude (Analogy, Odd One Out, Spatial Ability, Venn Diagrams)',
      'General Awareness (History, Geography, Environment, Defence News, Sports, Basic Science)'
    ],
    features: [
      'Intensive speed training for numerical reasoning and spatial reasoning tests',
      'High-grade online simulated test platforms customized on Air Force formats',
      'Rigorous SSB Mock Boards curated directly by Ex-GTO military veterans',
      'Dynamic Defence current affairs modules updated weekly',
      'Personalised daily doubt resolution circles'
    ],
    targetExams: ['AFCAT Flying Branch', 'AFCAT Ground Duty (Technical)', 'AFCAT Ground Duty (Non-Technical)']
  },
  {
    id: 'ssb',
    name: 'SSB Interview Mentorship (Services Selection Board)',
    duration: '14 Days Intensive / Unlimited practice till selection',
    eligibility: 'Candidates who cleared NDA/CDS/AFCAT/TGC/UES/NCC or other direct graduate entry channels.',
    overview: 'An elite, transformative bootcamp led directly by Ex-GTO Col. J.S. Chouhan, YSM. We replicate official selection board tasks, providing individual feedback on Officer Like Qualities (OLQs), psychological tests, and ground tasks.',
    syllabus: [
      'Stage I Screening (OIR - Officer Intelligence Rating, PPDT - Picture Perception & Discussion Test)',
      'Stage II Psychology (TAT - Thematic Apperception, WAT - Word Association, SRT - Situation Reaction, SD - Self Description)',
      'GTO Ground Tasks (GD, MPE - Military Planning, PGT/HGT/FGT, Command Task, Individual Obstacles)',
      'Personal Interview (Mock Interviews with Col. Chouhan, deep analysis of PIQ - Personal Information Questionnaire)'
    ],
    features: [
      'Fully equipped outdoor GTO obstacle ground replica in Jaipur',
      'Unbiased, objective, and individualized feedback on your natural personality',
      'Personalised PIQ dossier curation and mock SSB board reviews',
      'Daily GD (Group Discussion) & lecturette training on burning global, military, and national issues',
      'Special sessions on Voice Modulations, Positive Body Language, and group control tactics'
    ],
    targetExams: ['Army, Navy, and Air Force SSB Boards', 'NSB (Naval Selection Board)', 'AFSB (Air Force Selection Board)']
  }
];

export const ACHIEVERS: Achiever[] = [
  {
    name: 'Gaurvi Soni',
    exam: 'NDA-1, 2024',
    year: '2024',
    status: 'SELECTED',
    details: 'Written & SSB Selected — Air Force stream recommendation',
    image: 'https://static.wixstatic.com/media/14d0b9_8bd15a22b9d3448297aaaadd6c6b2bac~mv2.jpg'
  },
  {
    name: 'Kangan Shekhawat',
    exam: 'NDA-1 2024',
    year: '2024',
    status: 'SELECTED',
    details: 'Written & SSB Selected — Army stream recommendation',
    image: 'https://static.wixstatic.com/media/14d0b9_902b2d2614704b26a703f798097e044c~mv2.jpg'
  },
  {
    name: 'Piyush Goyal',
    exam: 'AFCAT-2, 2023',
    year: '2023',
    status: 'SELECTED',
    details: 'Successfully commissioned in Indian Air Force',
    image: 'https://static.wixstatic.com/media/14d0b9_7d4570eff4734163a08edf246b49b5a5~mv2.jpg'
  },
  {
    name: 'Ravi Pratap Singh',
    exam: 'IMA 157, CDS-2, 2023',
    year: '2023',
    status: 'SELECTED',
    details: 'Indian Military Academy (IMA) selection',
    image: 'https://static.wixstatic.com/media/14d0b9_5ac193ce6a564d9d88dc1b1105b32847~mv2.jpg'
  },
  {
    name: 'Rishabh Singh Shekhawat',
    exam: 'AFCAT & CDS (IMA)',
    year: '2022',
    status: 'SELECTED',
    details: 'Multi-exam achiever selected for training standard',
    image: 'https://static.wixstatic.com/media/14d0b9_9b164d15cb8b4bf7a4787b13106e8322~mv2.jpg'
  },
  {
    name: 'Ridhambh Jain',
    exam: 'NDA-2 2021',
    year: '2021',
    status: 'SELECTED',
    details: 'Written & SSB Selected',
    image: 'https://static.wixstatic.com/media/14d0b9_666809dae2f743e586a58b9761f3d716~mv2.jpg'
  },
  {
    name: 'Suchita Vashishth',
    exam: 'CDS -1 (OTA)',
    year: '2021',
    status: 'SELECTED',
    details: 'Officer Training Academy Recommendation',
    image: 'https://static.wixstatic.com/media/14d0b9_6e0d94ddc83744c79e72429cc640bde1~mv2.jpg'
  },
  {
    name: 'Ajay Singh Mann',
    exam: 'NDA-2, 2021',
    year: '2021',
    status: 'SELECTED',
    school: 'Rashtriya Military School (RMS), Bengaluru',
    image: 'https://static.wixstatic.com/media/14d0b9_9ef6948084dd4ee394ef0a231372ae2e~mv2.jpg'
  },
  {
    name: 'Nitin Geat',
    exam: 'NDA-2, 2018',
    year: '2018',
    status: 'SELECTED',
    school: 'Rashtriya Military School (RMS), Bengaluru',
    image: 'https://static.wixstatic.com/media/14d0b9_b3fdd57e8e8447008dc698ebc76ea3a1~mv2.jpg'
  },
  {
    name: 'Rohit Singh Basera',
    exam: 'NDA-I 2018',
    year: '2018',
    status: 'SELECTED',
    school: 'Rashtriya Military School (RMS), Belgaum',
    image: 'https://static.wixstatic.com/media/14d0b9_089391e6fffa4bd0b25cedb277f60abe~mv2.jpg'
  },
  {
    name: 'Deepak Sharma',
    exam: 'CDS-2, 2017',
    year: '2017',
    status: 'SELECTED',
    school: 'Sainik School, Chittorgarh',
    image: 'https://static.wixstatic.com/media/14d0b9_623093dd85ff45599652780b8293d07b~mv2.jpg'
  },
  {
    name: 'Samyak Bhabhra',
    exam: 'NDA-2020',
    year: '2020',
    status: 'SELECTED',
    school: 'Maharishi Patanjali Vidya Mandir (MPS), Jaipur',
    image: 'https://static.wixstatic.com/media/14d0b9_3c9bc6a437c8454fb6bb847b3d9694db~mv2.jpg'
  },
  {
    name: 'Rajneesh Kumar',
    exam: 'AFCAT, INET 2020',
    year: '2020',
    status: 'SELECTED',
    details: 'Double recommendation in Air Force & Navy pathways',
    image: 'https://static.wixstatic.com/media/14d0b9_3985aee9b4d34da18d3d063bb79c4604~mv2.jpg'
  },
  {
    name: 'Yogesh Dhayal',
    exam: 'CDS (INA) AFCAT 2020',
    year: '2020',
    status: 'SELECTED',
    image: 'https://static.wixstatic.com/media/14d0b9_747ed14536f640df98c65687dad4e478~mv2.jpg'
  },
  {
    name: 'Karan Singh',
    exam: 'INET 2020',
    year: '2020',
    status: 'SELECTED',
    image: 'https://static.wixstatic.com/media/14d0b9_ce9600162a154a5db3fa8dfd4a5af0f9~mv2.jpg'
  },
  {
    name: 'Himanshu Moond',
    exam: 'NDA 2020',
    year: '2020',
    status: 'SELECTED',
    image: 'https://static.wixstatic.com/media/14d0b9_52b0969765d24c538c3bd287f4e11cac~mv2.jpg'
  },
  {
    name: 'Sachin Yadav',
    exam: 'NDA 2019',
    year: '2019',
    status: 'SELECTED',
    image: 'https://static.wixstatic.com/media/14d0b9_ef55232f644d4fc08b7cd1601a346d5f~mv2.jpg'
  },
  {
    name: 'Sachin Chandela',
    exam: 'NDA 2019',
    year: '2019',
    status: 'SELECTED',
    image: 'https://static.wixstatic.com/media/14d0b9_096cd1c581c849f69c8d80d2e1972dc8~mv2.jpg'
  },
  {
    name: 'Manmohan Singh',
    exam: 'X-Y Group, AA/SSR',
    year: '2019',
    status: 'SELECTED',
    image: 'https://static.wixstatic.com/media/14d0b9_87192159974d4f2b9fe0eeea3b56bc2f~mv2.jpg'
  },
  {
    name: 'Mukund Singh',
    exam: 'NDA-2, 2017',
    year: '2017',
    status: 'SELECTED',
    image: 'https://static.wixstatic.com/media/14d0b9_eef1a0905a194bbaace99c78a8c285a9~mv2.jpg'
  }
];

export const FACULTY_MEMBERS: Faculty[] = [
  {
    name: 'Col. Joginender Singh Chouhan (Retd.) YSM',
    title: 'Executive Director & Senior SSB Coach (Ex. GTO)',
    role: 'Group Testing Officer (GTO) Expert',
    bio: 'Commissioned into the esteemed Rajputana Rifles regiment. Served as official Group Testing Officer (GTO) at the Service Selection Board (SSB) Centre for three and a half years. Drawing from over 15 years of instructional excellence, his military methodology has successfully commissioned more than 1,000 male officers and 80 female officers into the Indian Armed Forces.',
    experience: '15+ Years Post-Retirement Coaching',
    achievementsCount: '1,080+ Commissioned Cadets',
    qualifications: ['Commissioned Rajputana Rifles Officer', 'Qualified GTO, SSB Services Selection Centre', 'Yudh Seva Medal (YSM) Awardee'],
    image: 'https://static.wixstatic.com/media/14d0b9_9accde8acb1e4b5abe9d50c22c377cf7~mv2.jpg'
  },
  {
    name: 'Col. (Dr.) K Mukherjee',
    title: 'Director of Academics & Personality Development',
    role: 'Language Lab & Interview Expert',
    bio: 'Commissioned into the Army Educational Corps (AEC). Served as Education Officer in various formation headquarters and distinguished academic instructor at the Indian Military Academy (IMA) Dehradun and Officers Training Academy (OTA) Chennai. He served as Registrar at Sainik School Purulia and Sainik School Goalpara, and OSD (Defence) overseeing all 5 Rashtriya Military Schools of India. Specializes in spoken English proficiency, high-impact public lecturing, and SSB psychological profiling.',
    experience: '20+ Years Educational Leadership',
    achievementsCount: 'Language Labs Architect',
    qualifications: ['Ph.D. in English Literature', 'Former Deputy Commandant, AEC Training College & Centre', 'Ex-Registrar, Sainik Schools'],
    image: 'https://static.wixstatic.com/media/14d0b9_be190ff95a6e41e6ae6aa39a6c6e1d8f~mv2_d_3120_4160_s_4_2.jpg'
  },
  {
    name: 'Er. Vinay Bhabhra Sir',
    title: 'Co-Founder & Chief Mentor of NDA Mathematics',
    role: 'Written Exam Architect',
    bio: 'Engineering graduate (1996 Batch) from Malviya Regional Engineering College (MREC, now MNIT Jaipur). A pioneer in written exam techniques, Vinay Sir focuses on logical deduction shortcuts, creative concept mapping, and mathematical mental calculations. Over the past 12 years, his conceptual learning roadmap in Jaipur has enabled over 800 candidates to ace UPSC NDA & CDS written papers.',
    experience: '12+ Years Written Exam Pedagogy',
    achievementsCount: '800+ Written Exam Cleared',
    qualifications: ['B.Tech Graduate, MNIT Jaipur (1996)', 'Subject Matter Expert in Advanced & Coordination Geometry & Calculus'],
    image: 'https://static.wixstatic.com/media/14d0b9_aaf9d39955884d64ada58a22dc41c44d~mv2.jpg'
  }
];

export const SSB_OLQS: OlqItem[] = [
  { number: 'OLQ 1', title: 'Effective Intelligence', description: 'The capacity of a person to cope with and solve practical problems of varying complexities.', coreAspect: 'Factor I: Planning & Organising' },
  { number: 'OLQ 2', title: 'Reasoning Ability', description: 'The ability to understand coordinates, analyze statements, draw logical conclusions, and think rationally.', coreAspect: 'Factor I: Planning & Organising' },
  { number: 'OLQ 3', title: 'Organising Ability', description: 'The talent to arrange resources in a systematic manner to achieve efficient, clear objectives.', coreAspect: 'Factor I: Planning & Organising' },
  { number: 'OLQ 4', title: 'Power of Expression', description: 'The ease, clarity, and effectiveness with which you articulate ideas verbally and in writing.', coreAspect: 'Factor I: Planning & Organising' },
  { number: 'OLQ 5', title: 'Social Adaptability', description: 'The knack of adjusting smoothly and co-operatively with different groups, showing respect for others.', coreAspect: 'Factor II: Social Adjustment' },
  { number: 'OLQ 6', title: 'Co-operation', description: 'The active attitude to work as a team member, contributing constructively to group goals.', coreAspect: 'Factor II: Social Adjustment' },
  { number: 'OLQ 7', title: 'Sense of Responsibility', description: 'Knowing your duty, being completely dependable, and dedicating yourself to physical or moral obligations.', coreAspect: 'Factor II: Social Adjustment' },
  { number: 'OLQ 8', title: 'Initiative', description: 'Taking the first steps in a situation, sustaining the action, and leading courageously.', coreAspect: 'Factor III: Social Effectiveness' },
  { number: 'OLQ 9', title: 'Self Confidence', description: 'Belief in one\'s own capabilities to handle unexpected, highly stressful conditions smoothly.', coreAspect: 'Factor III: Social Effectiveness' },
  { number: 'OLQ 10', title: 'Speed of Decision', description: 'The ability to make swift, logical choices, especially under extreme timelines or pressure.', coreAspect: 'Factor III: Social Effectiveness' },
  { number: 'OLQ 11', title: 'Ability to Influence Group', description: 'Inspiring, convincing, and carrying the team members along with you in achieving the mission.', coreAspect: 'Factor III: Social Effectiveness' },
  { number: 'OLQ 12', title: 'Liveliness', description: 'The capacity to keep and radiate cheerfulness even in highly adverse environments.', coreAspect: 'Factor III: Social Effectiveness' },
  { number: 'OLQ 13', title: 'Determination', description: 'Sustained effort and resilient willpower to achieve objectives despite major physical obstacles.', coreAspect: 'Factor IV: Dynamic (Guts)' },
  { number: 'OLQ 14', title: 'Courage', description: 'Taking calculated risks in high stakes or difficult operations without showing panic or fear.', coreAspect: 'Factor IV: Dynamic (Guts)' },
  { number: 'OLQ 15', title: 'Stamina', description: 'The physical and mental endurance to tolerate extreme, prolonged physical hardships.', coreAspect: 'Factor IV: Dynamic (Guts)' }
];

export const DAILY_SHEDULE: TrainingActivity[] = [
  { time: '05:30 AM — 07:00 AM', activity: 'Physical Training (PT) & Endurance', description: 'Warm-ups, 5km tactical run, mock SSB high-jump obstacles, and drill posture practice at the stadium ground.', focus: 'Physical' },
  { time: '09:00 AM — 11:30 AM', activity: 'Mathematics written exam lectures', description: 'Conceptual learning of high-scoring topics, shortcut derivations in algebra and trigonometry with Er. Vinay Bhabhra.', focus: 'Academic' },
  { time: '11:45 AM — 01:30 PM', activity: 'General Studies Analysis & English Labs', description: 'Daily editorial debate, vocabulary drill, spoken English training, and interactive maps analysis under Col. Dr. Mukherjee.', focus: 'Academic' },
  { time: '02:30 PM — 04:30 PM', activity: 'SSB Psychology & Personal Interview Mock', description: 'Interactive assessment of Situation Reaction Tests (SRT) and individual feedback sessions on PIQs with Ex-GTO officers.', focus: 'Leadership' },
  { time: '04:45 PM — 06:15 PM', activity: 'Outdoor Group Tasks (GTO Prep)', description: 'Collaborative military planning exercises (MPE), double ditch, command task drills on the mock obstacle arena.', focus: 'Discipline' }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Admission',
    question: 'How can we register for the academic session 2026-27 at Axiom?',
    answer: 'Admissions are officially open. You can apply directly through our website, visit our campus in Vaishali Nagar, Jaipur, or consult our admission desks via WhatsApp/call (+91-9314533083, +91-7023133083). We also accept admissions for XI & XII Foundation with NDA integrated coaching.'
  },
  {
    category: 'General',
    question: 'What makes Axiom Defence Academy different from other institutes in Jaipur?',
    answer: 'Unlike institutes run by general trainers, Axiom is directed and taught daily by genuine military legends—specifically Col. J.S. Chouhan, YSM (an official Ex-GTO with more than three years in the SSB Centre) and Col. (Dr.) K Mukherjee (distinguished IMA/OTA Chief Instructor). We provide actual physical obstacle training and don\'t invent fake success metrics.'
  },
  {
    category: 'Hostel',
    question: 'Does the academy provide separate hostel facilities for boys and girls?',
    answer: 'Yes, we facilitate highly disciplined, clean, and nutritious residential hostel facilities in the vicinity of Vaishali Nagar. The hostels operate under strict timing protocols, supervised studying hours, and clean dining services to help outstation aspirants stay perfectly focused.'
  },
  {
    category: 'SSB',
    question: 'How long are the SSB training batches and can written exam students join?',
    answer: 'The SSB Interview preparation course is an intensive 14-Day specialized bootcamp. However, students in our long-term NDA, CDS, or AFCAT written batches get structured, custom personality development and weekly SSB guidance absolutely free of charge from day one.'
  },
  {
    category: 'General',
    question: 'Who conducts the written Mathematics sections for NDA at Axiom?',
    answer: 'All advanced and basic Mathematics branches are coached by Er. Vinay Bhabhra, an esteemed alumnus of MNIT Jaipur (1996 batch) who has taught for over 12 years and helped more than 800 candidates clear UPSC written exams successfully.'
  }
];

export const PHOTO_GALLERY = [
  {
    title: 'Elite Cadets Physical Obstacle Training Ground',
    category: 'Physical',
    url: 'https://static.wixstatic.com/media/14d0b9_2507b521903643488d857e976ab59f78~mv2.jpg'
  },
  {
    title: 'Morning Assembly & Structured Discipline Drill',
    category: 'Discipline',
    url: 'https://static.wixstatic.com/media/14d0b9_b76ca5d069dc46b58010d14bfdfe0bce~mv2.jpg'
  },
  {
    title: 'Intensive Classroom Lectures & UPSC Written Mock Board',
    category: 'Academic',
    url: 'https://static.wixstatic.com/media/14d0b9_c7c825d458444116878005b55f1bf6f2~mv2.jpg'
  },
  {
    title: 'Outdoor GTO Obstacle Simulation Arena',
    category: 'Physical',
    url: 'https://static.wixstatic.com/media/14d0b9_1c152006ead04820b67b6ba09014daf9~mv2.jpg'
  },
  {
    title: 'SSB Personal Interview & Mock Board Curation',
    category: 'SSB Preparation',
    url: 'https://static.wixstatic.com/media/14d0b9_8e034413e3884107be88ee8014313876~mv2.jpg'
  },
  {
    title: 'Academic Director Col. Chouhan Addressing Cadets',
    category: 'Academic',
    url: 'https://static.wixstatic.com/media/14d0b9_4384a11896c140a1a66b7c08529f1781~mv2.jpg'
  },
  {
    title: 'Celebratory Selected Cadets Roster Honors',
    category: 'Celebration',
    url: 'https://static.wixstatic.com/media/14d0b9_1c4fcd63ee734c6d8a62edaaaa4c0b76~mv2.jpg'
  },
  {
    title: 'Physical Posture Post & Tactical Endurance Run',
    category: 'Physical',
    url: 'https://static.wixstatic.com/media/14d0b9_aa57457231c742dd8441d862a35e0e76~mv2.jpg'
  },
  {
    title: 'Cadets Collaborative GTO Strategic Planning Session',
    category: 'SSB Preparation',
    url: 'https://static.wixstatic.com/media/14d0b9_2818102d48624580be3e3db598b847be~mv2.jpg'
  }
];
