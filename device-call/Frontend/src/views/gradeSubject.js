import { FaArrowCircleRight, FaPlay } from 'react-icons/fa';
import { PiInfinityBold, PiCertificateDuotone, PiVirtualRealityFill, PiStudent } from 'react-icons/pi';
import { IoDocumentOutline, IoLanguageOutline } from 'react-icons/io5';
import { TiLockClosedOutline, TiTick } from 'react-icons/ti';
import { MdTipsAndUpdates } from 'react-icons/md';
import { SlBadge } from 'react-icons/sl';
import DefaultImage from '../assets/images/Deafult.png'
export const grades = [6, 7, 8, 9, 10, 11, 12];
export const subjects = ['Mathematics', 'Science', 'Physics', 'Chemistry', 'Biology']
export const gradeSubjects = {
  6: ['Mathematics', 'Science'],
  7: ['Mathematics', 'Science'],
  8: ['Mathematics', 'Science'],
  9: ['Mathematics', 'Science'],
  10: ['Mathematics', 'Science'],
  11: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
  12: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
}

export const courseSelection = ['Hospitality', 'Nursing', 'Computer Science', 'Engineering', 'Business Management', 'Art and Design', 'Health Sciences', 'Education and Training', 'Physics']
export const GradesInValueName = [
  { value: 0, name: "Select Grade" },
  { value: 1, name: 6 },
  { value: 2, name: 7 },
  { value: 3, name: 8 },
  { value: 4, name: 9 },
  { value: 5, name: 10 },
  { value: 6, name: 11 },
  { value: 7, name: 12 }
]

export const courseSelectionInValueName = [{ value: 0, name: "Select Course" },
{ value: 1, name: "Hospitality" },
{ value: 2, name: "Nursing" },
{ value: 3, name: "Computer Science" },
{ value: 4, name: "Engineering" },
{ value: 5, name: "Business Management" },
{ value: 6, name: "Art and Design" },
{ value: 7, name: "Health Sciences" },
{ value: 8, name: "Education and Training" },
{ value: 9, name: "Physics" }
]

export const subjectInValueName = [
  { value: 1, label: 'Mathematics' },
  { value: 2, label: 'Science' },
  { value: 3, label: 'Physics' },
  { value: 4, label: 'Biology' },
  { value: 5, label: 'Chemistry' }
]

export function nameTOId(category_name) {
  const nameToId = {
    'K-12 VR': 1,
    'Enterprise VR': 2,
    'Higher Ed VR': 3
  }
  return nameToId[category_name]
}

export function IdToName(category_id) {
  const IdToName = {
    1: 'K-12 VR',
    2: 'Enterprise VR',
    3: 'Higher Ed VR'
  }
  return IdToName[category_id]
}



export function getData(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




//json data for expanded Card 
export const expnadedCardJson = {
  navigation: ['Bussiness', 'Business Analytics & Intelligence', 'Data Modeling'],
  higlightedTextA: 'Microsoft Power BI Desktop for Business Intelligence',
  highlightTextB: 'Master Power BI Desktop for data prep, data analysis, data visualization & dashboard design w/ top Power BI instructors!',
  detailedExplanation: [{ icons: 'SlBadge', text: 'New Authenticate Way to learn' }, { icons: 'PiStudent', text: `` }],
  createdBy: 'Qvolv PVT LTD.',
  otherContentInHeader: [
    { icons: 'MdTipsAndUpdates', text: 'Last Updated 04/2024' },
    { icons: 'IoLanguageOutline', text: 'English' }
  ],
  whatwillyoulearn: [
    { icons: 'TiTick', text: 'Build professional-quality business intelligence reports from the ground up' },
    { icons: 'TiTick', text: 'Blend and transform raw data into beautiful interactive visuals & dashboards' },
    { icons: 'TiTick', text: 'Design and implement the same tools used by professional data analysts and data scientists' },
    { icons: 'TiTick', text: 'Showcase your skills with two full-scale course projects (with step-by-step solutions)' },
    { icons: 'TiTick', text: 'Explore powerful artificial intelligence tools and advanced data analysis & visualization techniques' },
    { icons: 'TiTick', text: 'Learn from a #1 best-selling instructor and professional Power BI developer' }
  ],
  thismodulesIncludes: [
    { icons: 'FaPlay', text: `` },
    { icons: 'IoDocumentOutline', text: `` },

    { icons: 'PiInfinityBold', text: 'Full lifetime access' },
    { icons: 'TiLockClosedOutline', text: 'Closed captions' },
    { icons: 'PiCertificateDuotone', text: 'Certificate of completion' },
    { icons: 'PiVirtualRealityFill', text: 'Access on mobile and TV' }],
  playerContent: [
    { icons: 'FaArrowCircleRight', text: { module: 'Pulley and contraints' } },
    { icons: 'FaArrowCircleRight', text: [{ Chapter: `Newton's law` }] },
    {
      icons: 'FaArrowCircleRight', text: [{ description: `Newton's laws of motion are fundamental principles that describe the relationship between the motion of an object and the forces acting on it. When dealing with systems involving pulleys and constraints, these laws help us analyze and understand the motion and forces within the system. Let's discuss each of Newton's laws in the context of pulleys and constraints.` }]
    }],

}



// returing icons 
export const iconsRender = (val) => {
  switch (val) {
    case 'FaPlay':
      return (<FaPlay className='icons' />)
    case 'PiInfinityBold':
      return (<PiInfinityBold className='icons' />)
    case 'IoDocumentOutline':
      return (<IoDocumentOutline className='icons' />)
    case 'TiLockClosedOutline':
      return (<TiLockClosedOutline className='icons' />)
    case 'PiCertificateDuotone':
      return (<PiCertificateDuotone className='icons' />)
    case 'PiVirtualRealityFill':
      return (<PiVirtualRealityFill className='icons' />);
    case 'TiTick':
      return (<TiTick className="icons font_change_tick_icons" />);
    case 'FaArrowCircleRight':
      return (<FaArrowCircleRight className="icons font_change_hand_icons" />)
    case 'MdTipsAndUpdates':
      return (<MdTipsAndUpdates className="icons" />)
    case 'IoLanguageOutline':
      return (<IoLanguageOutline className="icons" />)
    case 'SlBadge':
      return (<SlBadge className="icons" />)
    case 'PiStudent':
      return (<PiStudent className="icons" />)
  }
}



export const subjectMatchedGrades = (grades, subjects) => {
  const matchedSubjects = grades.map((grade) => {
    if (subjects[grade]) {
      return subjects[grade]
    } else {
      return null
    }
  }).flat()

  return removeDuplicateSubjects(matchedSubjects)
}

function removeDuplicateSubjects(subjects) {
  return [...new Set(subjects)]
}




export const gradesMatchSubject = (gradesWithSubjects, subjects) => {
  let gradesWithSubject = [];
  for (let grade in gradesWithSubjects) {
    for (let subject of subjects) {
      if (gradesWithSubjects[grade].includes(subject)) {
        gradesWithSubject.push(parseInt(grade));
        break;
      }
    }
  }
  return gradesWithSubject;
};




const whatuLearnHigherEd = [
  {
    description: "Virtual Hotel Management Simulation",
    whatwillyoulearn: [
      "Efficiently manage hotel reservations and bookings.",
      "Optimize staffing levels and schedules.",
      "Enhance guest services and satisfaction.",
      "Utilize management tools and techniques in a virtual setting.",
      "Develop strategies for handling peak seasons and unexpected situations.",
      "Implement cost-effective practices to improve profitability."
    ]
  },
  {
    description: "Customer Service Excellence in Hospitality",
    whatwillyoulearn: [
      "Improve communication skills with guests and colleagues.",
      "Resolve customer complaints effectively.",
      "Enhance problem-solving abilities in hospitality scenarios.",
      "Maximize guest satisfaction through personalized service.",
      "Implement service recovery strategies.",
      "Handle diverse guest needs and expectations."
    ]
  },
  {
    description: "Event Management in Virtual Environments",
    whatwillyoulearn: [
      "Plan and organize virtual events efficiently.",
      "Manage event logistics and resources.",
      "Utilize marketing strategies tailored for virtual environments.",
      "Engage attendees effectively in virtual settings.",
      "Coordinate with vendors and stakeholders.",
      "Troubleshoot and resolve event-related challenges."
    ]
  },
  {
    description: "Front Desk Operations and Guest Relations",
    whatwillyoulearn: [
      "Manage guest check-in and check-out processes efficiently.",
      "Handle guest inquiries and complaints with professionalism.",
      "Utilize front desk management software and tools effectively.",
      "Maintain a welcoming and efficient front desk environment.",
      "Collaborate with other hotel departments for seamless guest experiences.",
      "Implement strategies to enhance guest loyalty and satisfaction."
    ]
  },
  {
    description: "Patient Care and Communication in VR",
    whatwillyoulearn: [
      "Develop effective communication strategies with patients and healthcare teams.",
      "Enhance empathy and patient-centered care practices.",
      "Manage patient interactions in simulated healthcare environments.",
      "Utilize virtual tools for patient assessment and care planning.",
      "Apply medical protocols and procedures in virtual patient scenarios.",
      "Adapt to diverse patient needs and medical conditions."
    ]
  },
  {
    description: "Anatomy and Physiology VR Lab",
    whatwillyoulearn: [
      "Explore the structure and function of human anatomy in a virtual environment.",
      "Conduct virtual dissections and physiological experiments.",
      "Understand organ systems and their interrelationships.",
      "Utilize virtual tools for anatomical visualization and exploration.",
      "Analyze medical case studies and scenarios.",
      "Apply anatomical knowledge in healthcare and educational contexts."
    ]
  },
  {
    description: "Medical Emergency Response Training",
    whatwillyoulearn: [
      "Assess and prioritize medical emergencies in virtual scenarios.",
      "Perform CPR and basic life support techniques.",
      "Manage trauma and emergency situations effectively.",
      "Utilize medical equipment and resources in simulated emergencies.",
      "Coordinate with healthcare teams and first responders.",
      "Adapt to dynamic and high-pressure emergency situations."
    ]
  },
  {
    description: "Virtual Programming Environments (Python, Java, etc.)",
    whatwillyoulearn: [
      "Write, debug, and test code in a simulated programming environment.",
      "Learn programming language syntax, semantics, and best practices.",
      "Apply algorithms and data structures in coding exercises.",
      "Develop software applications and programs.",
      "Collaborate on coding projects and assignments.",
      "Prepare for technical interviews and coding challenges."
    ]
  },
  {
    description: "Cybersecurity Training and Simulations",
    whatwillyoulearn: [
      "Identify and assess cybersecurity threats in virtual environments.",
      "Implement security measures to protect systems and data.",
      "Detect and respond to cyber attacks and incidents.",
      "Utilize cybersecurity tools and technologies effectively.",
      "Apply cryptography and secure communication principles.",
      "Develop cybersecurity strategies and policies."
    ]
  },
  {
    description: "Artificial Intelligence and Machine Learning Demonstrations",
    whatwillyoulearn: [
      "Understand fundamental AI and ML concepts and algorithms.",
      "Implement machine learning models in virtual environments.",
      "Train and evaluate AI models using real-world datasets.",
      "Apply AI techniques to solve complex problems.",
      "Explore applications of AI and ML in various industries.",
      "Stay updated with advancements in AI and ML technologies."
    ]
  },
  {
    description: "Virtual Reality Development Workshop",
    whatwillyoulearn: [
      "Design and develop VR applications and experiences.",
      "Use VR development tools and platforms effectively.",
      "Implement VR interaction and user interface design.",
      "Optimize VR applications for performance and user experience.",
      "Collaborate on VR development projects and teams.",
      "Explore emerging trends and technologies in VR."
    ]
  },
  {
    description: "Database Management Systems in Virtual Environments",
    whatwillyoulearn: [
      "Design and implement database schemas and structures.",
      "Manage data storage, retrieval, and manipulation.",
      "Optimize database performance and efficiency.",
      "Implement database security and access controls.",
      "Utilize SQL and NoSQL databases in virtual environments.",
      "Troubleshoot and resolve database-related issues."
    ]
  },
  {
    description: "Civil Engineering: Virtual Construction Site Management",
    whatwillyoulearn: [
      "Plan and schedule construction projects in virtual environments.",
      "Manage resources, materials, and equipment on virtual construction sites.",
      "Implement safety protocols and regulations.",
      "Coordinate with construction teams and stakeholders.",
      "Utilize construction management software and tools.",
      "Resolve challenges and issues in virtual construction projects."
    ]
  },
  {
    description: "Mechanical Engineering: CAD Modeling and Simulation",
    whatwillyoulearn: [
      "Create and modify CAD models for mechanical components and systems.",
      "Simulate mechanical behavior and performance in virtual environments.",
      "Analyze stress, strain, and structural integrity of mechanical designs.",
      "Optimize designs for manufacturing and assembly processes.",
      "Collaborate on mechanical engineering projects and designs.",
      "Stay updated with advancements in CAD and simulation technologies."
    ]
  },
  {
    description: "Electrical Engineering: Circuit Design and Analysis in VR",
    whatwillyoulearn: [
      "Design and simulate electronic circuits in a virtual environment.",
      "Analyze circuit performance, voltage, and current characteristics.",
      "Troubleshoot and debug circuit designs and simulations.",
      "Implement digital and analog signal processing techniques.",
      "Collaborate on electrical engineering projects and assignments.",
      "Apply principles of electrical engineering in practical scenarios."
    ]
  },
  {
    description: "Chemical Engineering: Process Simulation and Safety Training",
    whatwillyoulearn: [
      "Simulate chemical processes and reactions in virtual environments.",
      "Optimize process efficiency, yield, and safety.",
      "Implement safety protocols and risk assessment in chemical simulations.",
      "Utilize process simulation software and tools effectively.",
      "Analyze and interpret data from chemical simulations.",
      "Apply chemical engineering principles to solve real-world challenges."
    ]
  },
  {
    description: "Aerospace Engineering: Flight Simulations and Aircraft Design",
    whatwillyoulearn: [
      "Design and model aircraft structures and components.",
      "Conduct flight simulations to analyze aerodynamics and performance.",
      "Optimize aircraft designs for efficiency and safety.",
      "Utilize aerospace engineering software and tools.",
      "Collaborate on aerospace engineering projects and designs.",
      "Stay updated with advancements in aerospace engineering."
    ]
  },
  {
    description: "Virtual Business Strategy Simulations",
    whatwillyoulearn: [
      "Develop and implement business strategies in virtual environments.",
      "Analyze market dynamics and competitive landscapes.",
      "Make data-driven decisions for business growth and sustainability.",
      "Manage financial resources and budgeting in simulated business scenarios.",
      "Collaborate with virtual teams and stakeholders.",
      "Enhance leadership and decision-making skills through strategic simulations."
    ]
  },
  {
    description: "Leadership and Team Management Training",
    whatwillyoulearn: [
      "Develop effective leadership styles and strategies.",
      "Build and motivate high-performing teams in virtual environments.",
      "Resolve conflicts and manage team dynamics.",
      "Provide constructive feedback and coaching to team members.",
      "Lead and facilitate team meetings and discussions.",
      "Adapt leadership approaches to diverse organizational contexts."
    ]
  },
  {
    description: "Marketing Campaign Planning in VR",
    whatwillyoulearn: [
      "Plan and develop comprehensive marketing strategies in virtual environments.",
      "Conduct market research and analyze consumer behavior.",
      "Execute and monitor digital marketing campaigns.",
      "Utilize analytics tools to measure campaign effectiveness.",
      "Enhance customer engagement and brand visibility.",
      "Adapt marketing strategies to changing market trends."
    ]
  },
  {
    description: "Supply Chain Management in Virtual Environments",
    whatwillyoulearn: [
      "Optimize supply chain logistics and operations.",
      "Manage inventory levels and distribution channels.",
      "Implement supply chain sustainability practices.",
      "Utilize supply chain management software and tools effectively.",
      "Collaborate with suppliers, distributors, and stakeholders.",
      "Resolve supply chain disruptions and challenges."
    ]
  },
  {
    description: "3D Modeling and Sculpting in Virtual Reality",
    whatwillyoulearn: [
      "Create 3D models and sculptures using virtual tools.",
      "Master techniques for 3D modeling and digital sculpting.",
      "Texture, paint, and refine 3D models in virtual environments.",
      "Optimize 3D models for different platforms and applications.",
      "Collaborate on 3D modeling projects and creative designs.",
      "Stay updated with advancements in 3D modeling technologies."
    ]
  },
  {
    description: "Environmental Science: Virtual Field Studies",
    whatwillyoulearn: [
      "Conduct virtual field studies and environmental assessments.",
      "Analyze ecosystems, biodiversity, and natural resources.",
      "Evaluate environmental impacts and sustainability.",
      "Utilize GIS and remote sensing technologies in environmental studies.",
      "Collaborate on environmental research projects.",
      "Apply environmental science principles to address global challenges."
    ]
  },
  {
    description: "Digital Art and Animation Techniques in Virtual Reality",
    whatwillyoulearn: [
      "Create digital art and animations using virtual reality tools.",
      "Master techniques for digital painting and illustration.",
      "Animate characters and scenes in virtual environments.",
      "Optimize digital art and animations for different platforms.",
      "Collaborate on digital art and animation projects.",
      "Explore emerging trends in digital art and animation."
    ]
  },
  {
    description: "Music Composition and Production in Virtual Reality",
    whatwillyoulearn: [
      "Compose and produce music using virtual reality tools.",
      "Master music theory and composition techniques.",
      "Record, mix, and master audio tracks in virtual environments.",
      "Create soundscapes and music for different media.",
      "Collaborate on music composition and production projects.",
      "Explore innovative approaches to music creation in VR."
    ]
  },
  {
    description: "Virtual History and Archaeology Expeditions",
    whatwillyoulearn: [
      "Explore historical sites and artifacts in virtual environments.",
      "Analyze historical events and cultures through virtual simulations.",
      "Conduct archaeological excavations and research.",
      "Utilize digital tools for historical documentation and preservation.",
      "Collaborate on historical and archaeological studies.",
      "Apply historical knowledge to understand contemporary issues."
    ]
  },
  {
    description: "Virtual Psychology Experiments and Research",
    whatwillyoulearn: [
      "Conduct psychological experiments and studies in virtual settings.",
      "Analyze behavior, cognition, and emotional responses.",
      "Apply psychological theories and research methods.",
      "Utilize virtual environments for therapy and mental health interventions.",
      "Collaborate on psychological research projects.",
      "Explore ethical considerations in virtual psychology."
    ]
  },
  {
    description: "Virtual Law and Legal Practice Simulations",
    whatwillyoulearn: [
      "Engage in simulated legal cases and courtroom proceedings.",
      "Analyze legal issues and apply principles of law.",
      "Prepare legal documents and arguments in virtual environments.",
      "Utilize legal research tools and databases.",
      "Collaborate with virtual legal teams and stakeholders.",
      "Explore diverse areas of law and legal practice."
    ]
  },
  {
    description: "Virtual Language Learning and Cultural Exchange",
    whatwillyoulearn: [
      "Learn and practice languages in immersive virtual environments.",
      "Develop linguistic proficiency and communication skills.",
      "Explore cultural diversity and global perspectives.",
      "Engage in virtual language exchanges and interactions.",
      "Collaborate with language learners and speakers worldwide.",
      "Apply language skills in practical and real-world scenarios."
    ]
  },
  {
    description: "Virtual Physical Therapy and Rehabilitation",
    whatwillyoulearn: [
      "Develop rehabilitation plans and exercises in virtual settings.",
      "Assess and monitor patient progress in virtual therapy sessions.",
      "Implement therapeutic techniques and modalities.",
      "Utilize virtual tools for physical therapy interventions.",
      "Collaborate with healthcare teams and patients.",
      "Apply principles of physical therapy in diverse clinical settings."
    ]
  },
  {
    description: "Virtual Mathematics and Problem-Solving Challenges",
    whatwillyoulearn: [
      "Solve mathematical problems and puzzles in virtual environments.",
      "Apply mathematical concepts and techniques.",
      "Explore advanced topics in algebra, calculus, and geometry.",
      "Utilize mathematical modeling and simulation.",
      "Collaborate on mathematical research and projects.",
      "Develop critical thinking and problem-solving skills."
    ]
  },
  {
    description: "Virtual Physics Experiments and Concepts",
    whatwillyoulearn: [
      "Conduct physics experiments and demonstrations in virtual environments.",
      "Explore principles of mechanics, electricity, and optics.",
      "Analyze and interpret experimental data.",
      "Utilize simulations for studying complex physical phenomena.",
      "Collaborate on physics research and projects.",
      "Apply physics concepts to real-world applications."
    ]
  },
  {
    description: "Virtual Chemistry Lab: Experiments and Molecular Modeling",
    whatwillyoulearn: [
      "Perform chemistry experiments and simulations in virtual labs.",
      "Explore chemical reactions and molecular structures.",
      "Analyze experimental data and results.",
      "Utilize molecular modeling software and tools.",
      "Collaborate on chemistry research and projects.",
      "Apply principles of chemistry in practical and theoretical contexts."
    ]
  },
  {
    description: "Virtual Biology: Microscopy and Cellular Research",
    whatwillyoulearn: [
      "Study microscopic organisms and cellular structures in virtual labs.",
      "Conduct biological experiments and investigations.",
      "Analyze biological data and research findings.",
      "Utilize microscopy techniques and digital imaging.",
      "Collaborate on biological research and projects.",
      "Apply biological principles to ecological and medical studies."
    ]
  },
  {
    description: "Virtual Geology: Field Studies and Geological Mapping",
    whatwillyoulearn: [
      "Conduct geological field studies and explorations in virtual environments.",
      "Analyze geological formations and processes.",
      "Create geological maps and visualizations.",
      "Utilize GIS and remote sensing technologies.",
      "Collaborate on geological research and projects.",
      "Apply geological knowledge to environmental and resource management."
    ]
  },
  {
    description: "Virtual Astronomy: Space Exploration and Celestial Phenomena",
    whatwillyoulearn: [
      "Explore celestial bodies and astronomical phenomena in virtual environments.",
      "Analyze space missions and astronomical observations.",
      "Study planetary systems and cosmological theories.",
      "Utilize telescopes and observatories in virtual simulations.",
      "Collaborate on astronomical research and projects.",
      "Apply principles of astronomy to space exploration and discovery."
    ]
  },
  {
    description: "Virtual Climate Science and Environmental Change",
    whatwillyoulearn: [
      "Study climate patterns, weather systems, and environmental change.",
      "Analyze climate data and models in virtual environments.",
      "Explore impacts of human activities on the environment.",
      "Utilize GIS and remote sensing technologies for climate research.",
      "Collaborate on climate science and environmental projects.",
      "Apply climate science knowledge to address global challenges."
    ]
  },
  {
    description: "Virtual Engineering Design and Prototyping",
    whatwillyoulearn: [
      "Design and prototype engineering solutions in virtual environments.",
      "Analyze engineering problems and develop innovative solutions.",
      "Create digital models and simulations for testing and validation.",
      "Utilize CAD, CAM, and 3D printing technologies.",
      "Collaborate on engineering design projects.",
      "Apply engineering principles to practical and real-world applications."
    ]
  },
  {
    description: "Virtual Architecture: Design and Urban Planning",
    whatwillyoulearn: [
      "Design architectural structures and urban environments in virtual simulations.",
      "Analyze architectural styles, principles, and historical contexts.",
      "Create digital models and visualizations of architectural designs.",
      "Utilize BIM and architectural design software.",
      "Collaborate on architectural projects and urban planning.",
      "Apply sustainable and innovative practices in architectural design."
    ]
  },
  {
    description: "Virtual Robotics: Programming and Control Systems",
    whatwillyoulearn: [
      "Program and control robotic systems in virtual environments.",
      "Design and simulate robotic mechanisms and behaviors.",
      "Analyze sensor data and implement navigation algorithms.",
      "Utilize robotics simulation software and tools.",
      "Collaborate on robotic engineering projects.",
      "Apply principles of robotics to automation and artificial intelligence."
    ]
  },
  {
    description: "Virtual Renewable Energy Systems and Sustainability",
    whatwillyoulearn: [
      "Study renewable energy technologies and systems in virtual environments.",
      "Analyze energy efficiency, sustainability, and environmental impacts.",
      "Design and simulate renewable energy solutions.",
      "Utilize GIS and data analytics for renewable energy projects.",
      "Collaborate on renewable energy research and applications.",
      "Apply principles of renewable energy to address global energy challenges."
    ]
  },
  {
    description: "Virtual Marine Biology and Oceanography",
    whatwillyoulearn: [
      "Explore marine ecosystems, biodiversity, and oceanography in virtual environments.",
      "Conduct marine biological and ecological research.",
      "Analyze oceanographic data and environmental impacts.",
      "Utilize underwater mapping and exploration technologies.",
      "Collaborate on marine biology and oceanography projects.",
      "Apply marine science knowledge to marine conservation and management."
    ]
  },
  {
    description: "Virtual Aviation: Flight Training and Simulation",
    whatwillyoulearn: [
      "Learn and practice aviation skills and flight maneuvers in virtual environments.",
      "Simulate aircraft operations and flight scenarios.",
      "Analyze flight performance and aerodynamics.",
      "Utilize flight simulators and aviation training tools.",
      "Collaborate on aviation training and flight simulation exercises.",
      "Apply aviation knowledge to pilot training and aircraft operations."
    ]
  },
  {
    description: "Virtual Social Sciences: Research and Methodology",
    whatwillyoulearn: [
      "Conduct social science research and studies in virtual environments.",
      "Analyze social phenomena, behaviors, and cultural trends.",
      "Apply qualitative and quantitative research methods.",
      "Utilize social science theories and frameworks.",
      "Collaborate on social science research projects.",
      "Apply social science knowledge to address societal challenges and issues."
    ]
  },
  {
    description: "Virtual Economics and Financial Markets",
    whatwillyoulearn: [
      "Study economic principles, theories, and financial markets in virtual environments.",
      "Analyze economic trends, policies, and global financial systems.",
      "Apply econometric models and quantitative analysis.",
      "Utilize financial data and analytics tools.",
      "Collaborate on economic and financial research projects.",
      "Apply economic knowledge to decision-making and policy analysis."
    ]
  },
  {
    description: "Virtual Political Science and International Relations",
    whatwillyoulearn: [
      "Explore political systems, governance, and international relations in virtual environments.",
      "Analyze political ideologies, policies, and geopolitical issues.",
      "Apply political science theories and methodologies.",
      "Utilize diplomatic and negotiation simulations.",
      "Collaborate on political science and international relations research.",
      "Apply political science knowledge to global governance and diplomacy."
    ]
  },
  {
    description: "Virtual Education and Pedagogy",
    whatwillyoulearn: [
      "Explore educational theories, methodologies, and practices in virtual environments.",
      "Analyze teaching and learning strategies.",
      "Develop instructional materials and assessments.",
      "Utilize educational technology and virtual learning platforms.",
      "Collaborate on educational research and curriculum development.",
      "Apply pedagogical knowledge to improve teaching and learning outcomes."
    ]
  },
  {
    description: "Virtual Journalism and Media Production",
    whatwillyoulearn: [
      "Explore journalism ethics, practices, and media production in virtual environments.",
      "Conduct news reporting and investigative journalism.",
      "Write and edit news articles and multimedia content.",
      "Utilize digital media tools and platforms.",
      "Collaborate on journalism and media production projects.",
      "Apply journalistic principles to communicate news and information effectively."
    ]
  },
  {
    description: "Virtual Art Gallery Creation and Curation",
    whatwillyoulearn: [
      "Understand the principles of virtual art gallery design and curation.",
      "Explore the use of digital tools for creating immersive art experiences.",
      "Learn to curate and organize art exhibitions in virtual spaces.",
      "Develop skills in art interpretation and critical analysis.",
      "Collaborate with artists and fellow curators on virtual projects.",
      "Utilize marketing strategies to promote virtual art events and engage audiences."
    ]
  },
  {
    description: "Animation Production in Virtual Studios",
    whatwillyoulearn: [
      "Explore the creative process of developing animated narratives.",
      "Gain proficiency in 2D and 3D animation techniques.",
      "Learn how to design and build virtual environments for animation.",
      "Understand the workflow of virtual production from concept to final render.",
      "Experiment with motion capture and virtual reality in animation.",
      "Enhance storytelling through character animation and visual pacing."
  ]
  },
  {
    description: "Medical Diagnosis and Treatment Planning in VR",
    whatwillyoulearn: [
      "Explore the application of VR technologies in enhancing diagnostic accuracy.",
      "Learn to simulate patient interactions for effective treatment planning.",
      "Understand the role of immersive environments in medical training and assessment.",
      "Develop skills in analyzing patient data and crafting personalized treatment strategies.",
      "Collaborate with healthcare professionals to improve patient outcomes using VR tools.",
      "Evaluate case studies on the impact of VR in real-world medical settings."
  ]
  },
  {
    description: "Physical Therapy and Rehabilitation Exercises",
    whatwillyoulearn: [
      "Understand the principles of physical therapy and rehabilitation techniques.",
      "Learn to assess patient needs and create personalized exercise plans.",
      "Explore the use of technology and tools in rehabilitation practices.",
      "Develop skills in demonstrating and modifying therapeutic exercises.",
      "Gain insights into the psychological aspects of patient motivation and recovery.",
      "Evaluate the effectiveness of different rehabilitation approaches through case studies."
  ]  
  },
  {
    description: "Virtual Classroom Teaching and Pedagogy Practice",
    whatwillyoulearn: [
      "Explore effective strategies for engaging students in virtual learning environments.",
      "Understand the principles of online instructional design and course development.",
      "Learn to utilize various digital tools and platforms for interactive teaching.",
      "Develop skills in assessing student performance and providing feedback remotely.",
      "Implement inclusive pedagogical practices to support diverse learners.",
      "Analyze case studies of successful virtual teaching practices and their outcomes."
  ]  
  },
  {
    description: "Language Learning and Cultural Immersion in VR",
    whatwillyoulearn: [
      "Experience immersive language practice in virtual environments.",
      "Explore cultural contexts through interactive VR scenarios.",
      "Develop conversational skills with virtual native speakers.",
      "Utilize gamification techniques to enhance language retention."
  ]  
  },
  {
    description: "Educational Leadership and Administration Training Scenarios",
    whatwillyoulearn: [
      "Explore key principles of effective educational leadership and administration.",
      "Analyze real-world scenarios to develop problem-solving skills.",
      "Learn strategies for fostering collaborative school cultures.",
      "Understand data-driven decision-making for educational improvement.",
      "Develop skills in conflict resolution and communication within teams.",
      "Evaluate leadership styles and their impact on school performance."
    ]  
  },
  {
    description: "Quantum Mechanics Visualization",
    whatwillyoulearn: [
      "Understand the fundamental concepts of quantum mechanics through visualization techniques.",
      "Explore the behavior of particles using 3D simulations and animations.",
      "Learn to interpret wave functions and probability distributions visually.",
      "Develop skills in using software tools for quantum mechanics modeling.",
      "Analyze real-world applications of quantum concepts through interactive scenarios.",
      "Gain insights into the philosophical implications of quantum theory."
  ]  
  },
  {
    description: "Astrophysics Simulations",
    whatwillyoulearn: [
      "Understand key concepts in astrophysics through interactive simulations.",
      "Explore the formation and evolution of celestial bodies using modeling tools.",
      "Learn to simulate gravitational interactions in star systems and galaxies.",
      "Develop skills in data analysis and visualization of astrophysical phenomena.",
      "Analyze the impact of variables like dark matter and energy in simulations.",
      "Gain insights into current research and discoveries in astrophysics through virtual experiments."
  ]  
  },
  {
    description: "Thermodynamics Experiments",
    whatwillyoulearn: [
      "Understand the fundamental laws of thermodynamics through hands-on experiments.",
      "Explore the concepts of energy transfer, heat, and work in practical settings.",
      "Investigate real-world applications of thermodynamic principles in engineering.",
      "Gain insights into the relationship between thermodynamics and other scientific disciplines."
  ]
  },
  {
    description: "Internal Combustion Engine",
    whatwillyoulearn: [
      "Understand the fundamental principles of internal combustion engine operation.",
      "Explore the components and systems of various engine types.",
      "Learn to analyze engine performance metrics and efficiency.",
      "Develop skills in troubleshooting and diagnosing engine issues.",
      "Investigate the impact of fuel types and combustion processes on performance.",
      "Gain insights into emerging technologies and innovations in engine design."
    ]  
  },
  {
    description: "3-Phase Induction Motor",
    whatwillyoulearn: [
      "Understand the operating principles of 3-phase induction motors.",
      "Explore the construction and key components of induction motors.",
      "Learn to analyze motor performance characteristics and efficiency.",
      "Develop skills in starting, controlling, and troubleshooting induction motors."
    ]
  },
  {
    description: "Computer Assembly & Disassembly",
    whatwillyoulearn: [
      "Familiarize yourself with various computer hardware components and their functions.",
      "Master the tools and safety practices required for assembling and disassembling computers.",
      "Learn to read and interpret technical specifications for compatibility.",
      "Gain experience in configuring BIOS/UEFI settings after assembly.",
      "Understand the importance of static electricity precautions and grounding techniques.",
      "Explore common upgrades and modifications to enhance computer performance."
  ]  
  },
  {
    description: "Training Module on use of Ventilators",
    whatwillyoulearn: [
      "Understand the principles of mechanical ventilation and its clinical applications.",
      "Learn to identify different types of ventilators and their components.",
      "Develop skills in setting up and operating ventilators for various patient needs.",
      "Understand best practices for infection control and patient safety during ventilation."
  ]
  },
  {
    description: "Thermal Power Plant",
    whatwillyoulearn: [
      "Understand the economic factors influencing the design and operation of thermal power plants.",
      "Explore the integration of thermal power with renewable energy sources.",
      "Learn about the technologies used for emissions control and environmental compliance.",
      "Develop skills in predictive maintenance and operational troubleshooting.",
      "Examine case studies of successful thermal power projects and their operational challenges.",
      "Gain insights into the future of thermal power in the context of global energy transitions."
  ]
  },
  {
    description: "HPLC Analysis",
    whatwillyoulearn: [
      "Understand the principles and theory of High-Performance Liquid Chromatography (HPLC).",
      "Explore the components of HPLC systems and their functions.",
      "Learn to prepare samples and mobile phases for effective HPLC analysis.",
      "Develop skills in method development and optimization for various compounds.",
      "Gain hands-on experience in operating HPLC equipment and interpreting chromatograms.",
      "Examine applications of HPLC in pharmaceuticals, food safety, and environmental analysis."
  ]  
  },
  {
    description: "Training Module on how to perform CPR with defibrilator",
    whatwillyoulearn: [
      "Understand the principles and importance of CPR and defibrillation in emergency situations.",
      "Develop skills in recognizing signs of cardiac arrest and responding quickly.",
      "Gain hands-on practice in using an automated external defibrillator (AED) with CPR.",
      "Understand the legal and ethical considerations when providing emergency care."
  ]
  },
  {
    description: "CNC Machine construction details and programming simulations",
    whatwillyoulearn: [
      "Understand the basic components and construction of CNC machines.",
      "Explore different types of CNC machines and their specific applications.",
      "Learn about the principles of CNC programming and G-code syntax.",
      "Develop skills in creating, editing, and simulating CNC programs using software.",
      "Gain hands-on experience in setting up and operating CNC machines.",
      "Analyze common machining processes and troubleshoot programming issues."
  ]  
  },
  {
    description: "Labor and Birth",
    whatwillyoulearn: [
      "Understand the stages of labor and the physiological changes in the body.",
      "Explore different methods of pain management during labor and delivery.",
      "Learn about the roles of healthcare providers in the labor and birth process.",
      "Develop skills in supporting expectant parents through labor and delivery.",
      "Gain insights into common complications and interventions during childbirth.",
      "Examine the emotional and psychological aspects of labor and postpartum care."
  ]    
  },
  {
    description: "Parenteral Product Manufacturing",
    whatwillyoulearn: [
      "Understand the fundamentals of parenteral products and their classifications.",
      "Explore the manufacturing processes and techniques for sterile preparations.",
      "Learn about quality control measures and regulatory requirements in parenteral manufacturing.",
      "Develop skills in aseptic processing and contamination control strategies.",
      "Gain insights into the formulation and stability of parenteral products.",
      "Examine case studies of successful parenteral product development and market trends."
  ]
  },
  {
    description: "Marshal Stability Test, Aggregate crusing value test",
    whatwillyoulearn: [
      "Understand the significance of the Marshall Stability Test in assessing asphalt mix performance.",
      "Learn the procedure for conducting the Marshall Stability Test and interpreting results.",
      "Explore the principles and importance of the Aggregate Crushing Value Test in material quality evaluation.",
      "Develop skills in preparing samples and performing aggregate crushing tests accurately."
  ]  
  },
  {
    description: "Cloud Computing",
    whatwillyoulearn: [
      "Understand the fundamental concepts and models of cloud computing, including IaaS, PaaS, and SaaS.",
      "Explore different cloud deployment models: public, private, hybrid, and community clouds.",
      "Learn about key cloud service providers and their offerings.",
      "Develop skills in managing cloud resources and optimizing performance.",
      "Gain insights into security, compliance, and best practices in cloud environments.",
      "Analyze real-world use cases and applications of cloud computing across industries."
  ]    
  }
];



const whatuLearnK12 = [
  {
    topic_name: "Leaf Structure of Leaf",
    whatWillULearn: [
      "Understand the basic structure of a leaf.",
      "Identify the different parts of a leaf.",
      "Describe the function of each part of a leaf.",
      "Explain how leaves are adapted for photosynthesis.",
      "Understand the process of transpiration in leaves.",
      "Recognize the importance of leaves in the plant lifecycle."
    ]
  },
  {
    topic_name: "Transparent, Opaque and Translucent Objects",
    whatWillULearn: [
      "Understand the difference between transparent, opaque, and translucent objects.",
      "Identify examples of each type of object.",
      "Describe how light interacts differently with each type of object.",
      "Discuss real-world applications of transparent, opaque, and translucent objects."
    ]
  },
  {
    topic_name: "Electric Conductors Semi-Conductors and Insulators",
    whatWillULearn: [
      "Differentiate between electric conductors and insulators.",
      "Identify common materials that are good conductors and insulators of electricity.",
      "Understand the factors that determine whether a material is a good conductor or insulator."
    ]
  },
  {
    topic_name: "Introduction Parts of a Plant",
    whatWillULearn: [
      "Learn about the different parts of a plant and their functions.",
      "Understand how each part contributes to the overall health and growth of the plant.",
      "Discuss the importance of each plant part in the plant's lifecycle."
    ]
  },
  {
    topic_name: "Flower Reproductive Parts of Flower",
    whatWillULearn: [
      "Identify and describe the reproductive parts of a flower.",
      "Understand the process of reproduction in flowering plants.",
      "Explain the role of each reproductive part in the pollination and seed formation process."
    ]
  },
  {
    topic_name: "Human Body and Its The Human Skeletal System",
    whatWillULearn: [
      "Learn about the human skeletal system and its functions.",
      "Identify the different bones in the human body and their roles.",
      "Understand how the skeletal system supports the body and protects internal organs."
    ]
  },
  {
    topic_name: "A Line Lines",
    whatWillULearn: [
      "Understand the concept of a line and its characteristics.",
      "Identify different types of lines (e.g., straight, curved).",
      "Discuss the mathematical properties of lines and their applications in geometry."
    ]
  },
  {
    topic_name: "Pictograph Pictogram",
    whatWillULearn: [
      "Understand what a pictograph (or pictogram) is and how it represents data.",
      "Create and interpret pictographs using given data sets.",
      "Discuss the advantages and limitations of using pictographs to represent data."
    ]
  },
  {
    topic_name: "Addition and Subtraction of Subtract like fractions",
    whatWillULearn: [
      "Learn how to add and subtract like fractions.",
      "Practice solving problems involving addition and subtraction of like fractions.",
      "Understand the concept of finding a common denominator to add or subtract fractions."
    ]
  },
  {
    topic_name: "A Bar Graph Bar Graph",
    whatWillULearn: [
      "Understand what a bar graph is and how it is used to represent data.",
      "Create and interpret bar graphs from given data sets.",
      "Discuss the advantages of using bar graphs to visualize categorical data."
    ]
  },
  {
    topic_name: "Making Symmetric Figures : Ink- Line and Plane of Symmetry",
    whatWillULearn: [
      "Understand the concept of symmetry in figures.",
      "Identify and draw symmetric figures using ink-line and plane symmetry.",
      "Discuss real-life examples of symmetry and its applications."
    ]
  },
  {
    topic_name: "Three Dimensional Shapes Three Dimensional Geometric Figures",
    whatWillULearn: [
      "Learn about three-dimensional shapes (3D shapes) and their properties.",
      "Identify and classify common 3D shapes (e.g., cube, cuboid, sphere).",
      "Calculate the volume and surface area of basic 3D shapes."
    ]
  },
  {
    topic_name: "Drawing a Pictograph Pictogram",
    whatWillULearn: [
      "Understand how to create a pictograph (or pictogram) from given data.",
      "Interpret pictographs to extract information and draw conclusions.",
      "Discuss the effectiveness of pictographs in communicating data visually."
    ]
  },
  {
    topic_name: 'Photosynthesis "Food Making Process In Plants Photosynthesis in green plants"',
    whatWillULearn: [
      "Understand the process of photosynthesis in green plants.",
      "Explain how plants use sunlight to produce food (glucose) and oxygen.",
      "Discuss the importance of photosynthesis in the ecosystem and for human life."
    ]
  },
  {
    topic_name: "Digestion In Humans Parts of Digestive System",
    whatWillULearn: [
      "Learn about the human digestive system and its components.",
      "Identify the organs involved in the digestion process and their functions.",
      "Understand the process of digestion from ingestion to absorption of nutrients."
    ]
  },
  {
    topic_name: "Light Travels Along a Straight Line Travelling of Light",
    whatWillULearn: [
      "Understand the concept of light and how it travels in a straight line.",
      "Discuss the properties of light that allow it to travel in a straight line.",
      "Explore practical applications of light traveling in a straight line."
    ]
  },
  {
    topic_name: "Speed Speed",
    whatWillULearn: [
      "Understand the concept of speed and its calculation.",
      "Differentiate between speed and velocity.",
      "Solve problems involving speed, distance, and time."
    ]
  },
  {
    topic_name: "The Human Heart",
    whatWillULearn: [
      "Learn about the structure and function of the human heart.",
      "Identify the different chambers and valves of the heart.",
      "Understand the process of blood circulation and the role of the heart in pumping blood."
    ]
  },
  {
    topic_name: "Types of Human Blood Vessels",
    whatWillULearn: [
      "Identify and describe the different types of blood vessels in the human body.",
      "Understand the functions of arteries, veins, and capillaries.",
      "Discuss how blood vessels are adapted to their specific functions."
    ]
  },
  {
    topic_name: "Blood Flow in the Human Heart",
    whatWillULearn: [
      "Understand the pathway of blood flow through the human heart.",
      "Describe the role of valves in maintaining blood flow direction.",
      "Discuss the importance of efficient blood circulation for overall health."
    ]
  },
  {
    topic_name: "Sexual Reproduction Sexual Reproduction in Plants",
    whatWillULearn: [
      "Understand the process of sexual reproduction in plants.",
      "Compare and contrast sexual and asexual reproduction in plants.",
      "Discuss the advantages and disadvantages of sexual reproduction in plants."
    ]
  },
  {
    topic_name: "Distance-Time Graph Distance-Time Graph for Uniform Motion",
    whatWillULearn: [
      "Understand how to interpret a distance-time graph for uniform motion.",
      "Analyze the motion of an object based on its distance-time graph.",
      "Discuss the relationship between speed and the slope of a distance-time graph."
    ]
  },
  {
    topic_name: "Area of a Triangle Area of Triangle",
    whatWillULearn: [
      "Learn how to calculate the area of a triangle using base and height.",
      "Understand the different methods to find the area of a triangle (e.g., using trigonometry).",
      "Apply the formula for the area of a triangle to solve practical problems."
    ]
  },
  {
    topic_name: "Right-Angled Triangles and Pythagoras Property Pythagorean Theorem",
    whatWillULearn: [
      "Understand the Pythagorean Theorem and its applications in right-angled triangles.",
      "Solve problems involving the sides and hypotenuse of a right-angled triangle.",
      "Discuss real-world applications of the Pythagorean Theorem."
    ]
  },
  {
    topic_name: "Right-Angled Triangles and Pythagoras Property Use of pythagoras theorem",
    whatWillULearn: [
      "Explore different applications of the Pythagorean Theorem in geometry and real life.",
      "Solve problems involving distances, heights, and lengths using the Pythagorean Theorem.",
      "Understand the historical and mathematical significance of the Pythagorean Theorem."
    ]
  },
  {
    topic_name: "Force A Push or a Pull Force and Effects of Forces",
    whatWillULearn: [
      "Understand the concept of force as a push or a pull.",
      "Discuss Newton's laws of motion and how forces affect motion.",
      "Explore different types of forces and their effects on objects."
    ]
  },
  {
    topic_name: "Factors affecting Friction Factors Affecting Friction",
    whatWillULearn: [
      "Identify and discuss factors that affect friction between surfaces.",
      "Understand how different materials and conditions influence friction.",
      "Discuss practical applications of reducing or increasing friction."
    ]
  },
  {
    topic_name: "Sound is Produced by a Vibrating Making Sound",
    whatWillULearn: [
      "Understand how sound is produced by vibrations.",
      "Explore the properties of sound waves and their characteristics.",
      "Discuss the transmission and reception of sound in different mediums."
    ]
  },
  {
    topic_name: "Parts of the Nucleus",
    whatWillULearn: [
      "Learn about the structure and components of the nucleus.",
      "Identify the different parts of the nucleus and their functions.",
      "Discuss the role of the nucleus in cell function and genetic information."
    ]
  },
  {
    topic_name: "Sexual Life Cycle of Butterfly",
    whatWillULearn: [
      "Understand the stages of the sexual life cycle of a butterfly.",
      "Describe the process of metamorphosis and its significance.",
      "Discuss the adaptations of butterflies for successful reproduction."
    ]
  },
  {
    topic_name: "Sexual Life Cycle of Frog",
    whatWillULearn: [
      "Learn about the sexual life cycle of frogs.",
      "Describe the stages of frog development from egg to adult.",
      "Discuss the ecological importance of frogs in ecosystems."
    ]
  },
  {
    topic_name: "A Force can Change the Force and Effects of Forces",
    whatWillULearn: [
      "Understand how forces can change the state of motion or shape of an object.",
      "Discuss examples of forces causing changes in objects (e.g., acceleration, deformation).",
      "Explore Newton's laws of motion and their applications in understanding force."
    ]
  },
  {
    topic_name: "Force of Friction Friction and its Causes",
    whatWillULearn: [
      "Understand the force of friction and its role in opposing motion.",
      "Identify different types of friction (e.g., static, kinetic).",
      "Discuss factors that affect the magnitude of friction between surfaces."
    ]
  },
  {
    topic_name: "Sound Produced by Humans Vibrations and Sound",
    whatWillULearn: [
      "Understand how humans produce sound through vocal cords and other means.",
      "Explore the physiology of sound production in humans.",
      "Discuss the role of sound in communication and expression."
    ]
  },
  {
    topic_name: "Amplitude, Time Period And Pitch",
    whatWillULearn: [
      "Understand the concepts of amplitude, time period, and pitch in sound waves.",
      "Describe how these parameters affect the characteristics of sound.",
      "Discuss the perception of pitch and its cultural and biological implications."
    ]
  },
  {
    topic_name: "Amplitude, Time Period And The Decibel Scale",
    whatWillULearn: [
      "Understand the concepts of amplitude, time period, and the decibel scale in sound.",
      "Discuss the measurement of sound intensity and loudness.",
      "Explore the applications of the decibel scale in assessing noise levels."
    ]
  },
  {
    topic_name: "Amplitude, Time Period And Loudness",
    whatWillULearn: [
      "Understand the concepts of amplitude, time period, and the decibel scale in sound.",
      "Discuss the measurement of sound intensity and loudness.",
      "Explore the applications of the decibel scale in assessing noise levels."
    ]
  },
  {
    topic_name: "Laws of Reflection",
    whatWillULearn: [
      "Understand the laws governing reflection of light.",
      "Differentiate between regular and diffused reflection.",
      "Examine how reflection occurs on different surfaces.",
      "Discuss practical applications of reflection in daily life and technology."
    ]
  },
  {
    topic_name: "Regular And Diffused Reflection",
    whatWillULearn: [
      "Understand the differences between regular and diffused reflection.",
      "Learn how regular reflection occurs on smooth surfaces.",
      "Explore how diffused reflection occurs on rough surfaces.",
      "Examine real-world examples of regular and diffused reflection."
    ]
  },
  {
    topic_name: "Amplitude, Time Period And Frequency",
    whatWillULearn: [
      "Understand the concepts of amplitude, time period, and frequency in wave motion.",
      "Learn how amplitude affects the intensity of waves.",
      "Explore the relationship between time period and frequency.",
      "Examine real-world applications of amplitude, time period, and frequency."
    ]
  },
  {
    topic_name: "Noise and Music",
    whatWillULearn: [
      "Understand the characteristics of noise and music as sound phenomena.",
      "Differentiate between noise and musical tones based on their properties.",
      "Explore how noise and music are perceived by the human ear.",
      "Examine the effects of noise pollution and the importance of music in culture."
    ]
  },
  {
    topic_name: "What is an Atom? The Atom",
    whatWillULearn: [
      "Understand the basic structure and components of an atom.",
      "Learn about the nucleus, protons, neutrons, and electrons.",
      "Explore atomic models throughout history, including Rutherford's model.",
      "Discuss the significance of atoms in chemistry and physics."
    ]
  },
  {
    topic_name: "What is a Molecule? The Molecules",
    whatWillULearn: [
      "Understand the concept of molecules and molecular structures.",
      "Learn about different types of molecules: organic, inorganic, and biological.",
      "Explore how atoms combine to form molecules through chemical bonding.",
      "Discuss the role of molecules in living organisms and materials science."
    ]
  },
  {
    topic_name: "The Structure of an Rutherford’s Atomic Model",
    whatWillULearn: [
      "Understand the structure proposed by Rutherford for the atom.",
      "Learn about the nucleus and the arrangement of electrons.",
      "Examine the experimental evidence that led to Rutherford's atomic model.",
      "Discuss the limitations and advancements in atomic theory since Rutherford."
    ]
  },
  {
    topic_name: "The Hierarchy of Classification- Groups Paramecium",
    whatWillULearn: [
      "Understand the hierarchical classification system in biology.",
      "Learn about taxonomic ranks: domain, kingdom, phylum, class, order, family, genus, and species.",
      "Explore the classification of Paramecium within the Protista kingdom.",
      "Discuss the importance of classification in understanding biodiversity."
    ]
  },
  {
    topic_name: "First Law of Newton's First Law of Motion",
    whatWillULearn: [
      "Understand Newton's First Law of Motion and its significance in physics.",
      "Learn about the concept of inertia and how it relates to objects at rest and in motion.",
      "Explore examples illustrating Newton's First Law in everyday situations.",
      "Discuss the implications of Newton's First Law on the behavior of objects."
    ]
  },
  {
    topic_name: "Inertia and Mass Newton's First Law",
    whatWillULearn: [
      "Understand the concept of inertia as described by Newton's First Law of Motion.",
      "Learn about the relationship between mass and inertia.",
      "Explore how inertia affects the motion of objects.",
      "Discuss real-world applications of inertia and its role in physics."
    ]
  },
  {
    topic_name: "Gravitation Gravity",
    whatWillULearn: [
      "Understand the concept of gravitation and gravity.",
      "Learn about the gravitational force between objects with mass.",
      "Explore how gravity affects the motion of celestial bodies.",
      "Discuss the universal law of gravitation proposed by Isaac Newton."
    ]
  },
  {
    topic_name: "Archimedes’s Principle Archimedes Principle",
    whatWillULearn: [
      "Understand Archimedes's Principle and its applications in fluid mechanics.",
      "Learn about buoyancy and how it relates to the weight of displaced fluid.",
      "Explore how Archimedes's Principle is used to determine the density of objects.",
      "Discuss real-world examples of Archimedes's Principle in action."
    ]
  },
  {
    topic_name: "Work Work",
    whatWillULearn: [
      "Understand the concept of work in physics.",
      "Learn about the relationship between force, displacement, and work done.",
      "Explore different forms of work and energy transformation.",
      "Discuss the units and calculations involved in measuring work."
    ]
  },
  {
    topic_name: "Energy Introduction to Energy and",
    whatWillULearn: [
      "Understand the concept of energy and its various forms.",
      "Learn about kinetic and potential energy and their interconversion.",
      "Explore the law of conservation of energy and its applications.",
      "Discuss real-world examples of energy transfer and transformation."
    ]
  },
  {
    topic_name: "Propagation of Sound Sound Waves",
    whatWillULearn: [
      "Understand the propagation of sound waves through different mediums.",
      "Learn about the characteristics of sound waves: frequency, amplitude, and wavelength.",
      "Explore how sound waves travel and interact with their environment.",
      "Discuss applications of sound waves in communication, medicine, and technology."
    ]
  },
  {
    topic_name: "Applications of Ultrasound Ultrasound-Sonar",
    whatWillULearn: [
      "Understand the applications of ultrasound technology in medicine and industry.",
      "Learn about how ultrasound waves are generated and transmitted.",
      "Explore the principles of ultrasound imaging and diagnostics.",
      "Discuss the use of ultrasound in SONAR systems for underwater detection."
    ]
  },
  {
    topic_name: "The Structure of an Atomic Models",
    whatWillULearn: [
      "Understand the different atomic models proposed throughout history.",
      "Learn about the contributions of scientists like Bohr, Rutherford, and Thomson.",
      "Explore how experimental evidence shaped the development of atomic theory.",
      "Discuss the modern understanding of atomic structure and subatomic particles."
    ]
  },
  {
    topic_name: "Production of Sound Sound Needs a Medium to",
    whatWillULearn: [
      "Understand the requirement of a medium for the propagation of sound waves.",
      "Learn about how sound is produced and transmitted through different mediums.",
      "Explore the role of air, water, and solids in transmitting sound waves.",
      "Discuss the limitations and exceptions to sound propagation."
    ]
  },
  {
    topic_name: "Similarity of Triangles Similarity of Triangles",
    whatWillULearn: [
      "Understand the concept of similarity in geometric shapes, specifically triangles.",
      "Learn about criteria for triangle similarity: AA (Angle-Angle), SAS (Side-Angle-Side), and SSS (Side-Side-Side).",
      "Explore applications of triangle similarity in solving geometric problems.",
      "Discuss real-world examples where triangle similarity is used."
    ]
  },
  {
    topic_name: "Heights and Distances Application of Trigonometry",
    whatWillULearn: [
      "Understand how trigonometric ratios are used to solve height and distance problems.",
      "Learn about sine, cosine, and tangent functions and their applications.",
      "Explore the principles of angle of elevation and angle of depression.",
      "Discuss practical examples where trigonometry is applied in navigation and surveying."
    ]
  },
  {
    topic_name: "Volume and Surface Area of",
    whatWillULearn: [
      "Understand how to calculate the volume and surface area of geometric solids.",
      "Learn formulas for calculating volume and surface area of cubes, cuboids, cylinders, spheres, and cones.",
      "Explore practical applications of volume and surface area calculations in everyday life and engineering.",
      "Discuss the relationship between volume, surface area, and three-dimensional shapes."
    ]
  },
  {
    topic_name: "Probability – A Theoretical Probability",
    whatWillULearn: [
      "Understand the concept of probability and its theoretical foundations.",
      "Learn about different types of probability: theoretical, experimental, and subjective.",
      "Explore how probability is calculated using counting principles and probability distributions.",
      "Discuss real-world applications of probability in statistics, games of chance, and decision-making."
    ]
  },
  {
    topic_name: "Nutrition Digestive System",
    whatWillULearn: [
      "Understand the process of nutrition and its importance for living organisms.",
      "Learn about the components and functions of the digestive system.",
      "Explore how nutrients are digested, absorbed, and utilized by the body.",
      "Discuss the role of enzymes, vitamins, and minerals in nutrition."
    ]
  },
  {
    topic_name: "Respiration Cellular Respiration",
    whatWillULearn: [
      "Understand the process of cellular respiration in living organisms.",
      "Learn about the role of mitochondria in producing ATP.",
      "Explore aerobic and anaerobic respiration and their energy yields.",
      "Discuss the importance of respiration in maintaining life processes."
    ]
  },
  {
    topic_name: "Transportation Blood Vessels",
    whatWillULearn: [
      "Understand the function and structure of blood vessels in the circulatory system.",
      "Learn about arteries, veins, and capillaries and their roles in transporting blood.",
      "Explore how blood circulation delivers oxygen and nutrients and removes waste products.",
      "Discuss common disorders and diseases related to blood vessels."
    ]
  },
  {
    topic_name: "Do Organisms Create Exact Copies of Themselves? How DNA Replicates",
    whatWillULearn: [
      "Understand the process of DNA replication and its importance in genetics.",
      "Learn about the structure of DNA and the roles of DNA polymerase and other enzymes.",
      "Explore the steps involved in semi-conservative DNA replication.",
      "Discuss how errors in DNA replication can lead to genetic mutations."
    ]
  },
  {
    topic_name: "Electromagnetic Induction Faraday’s Law of Electromagnetic Induction",
    whatWillULearn: [
      "Understand Faraday's Law of Electromagnetic Induction and its applications.",
      "Learn how changing magnetic fields induce electric currents.",
      "Explore electromagnetic induction in transformers and generators.",
      "Discuss real-world applications of electromagnetic induction."
    ]
  },
  {
    topic_name: "Electric Electric Generator",
    whatWillULearn: [
      "Understand the principles of electric generators and their role in electricity generation.",
      "Learn about electromagnetic induction and how it produces electrical energy.",
      "Explore different types of generators: AC generators and DC generators.",
      "Discuss the components and working principles of electric generators."
    ]
  },
  {
    topic_name: "Respiration The Human Respiratory System",
    whatWillULearn: [
      "Understand the structure and function of the human respiratory system.",
      "Learn about the organs involved: nose, trachea, bronchi, lungs, and diaphragm.",
      "Explore the process of inhalation and exhalation and the role of respiratory muscles.",
      "Discuss respiratory disorders and the importance of lung health."
    ]
  },
  {
    topic_name: "Transportation Blood Flow through the Heart",
    whatWillULearn: [
      "Understand the circulation of blood through the human heart.",
      "Learn about the structure and function of the heart: chambers, valves, and cardiac cycle.",
      "Explore the pathway of blood flow: pulmonary and systemic circulation.",
      "Discuss common heart conditions and the importance of cardiovascular health."
    ]
  },
  {
    topic_name: "Relative Velocity Relative motion",
    whatWillULearn: [
      "Understand the concept of relative velocity in physics.",
      "Learn how relative motion is calculated between two moving objects.",
      "Explore examples of relative motion in everyday life and physics.",
      "Discuss the importance of frame of reference in determining relative velocity."
    ]
  },
  {
    topic_name: "The speed of a travelling wave The Speed of Sound",
    whatWillULearn: [
      "Understand the concept of wave speed and its calculation.",
      "Learn about the factors that affect the speed of sound waves.",
      "Explore how sound waves travel through different mediums.",
      "Discuss the relationship between frequency, wavelength, and wave speed."
    ]
  },
  {
    topic_name: "Quantum Mechanical Aufbau Principle",
    whatWillULearn: [
      "Understand the Aufbau principle in quantum mechanics.",
      "Learn how electrons occupy atomic orbitals based on increasing energy levels.",
      "Explore the order of filling electrons in subshells and shells.",
      "Discuss the application of the Aufbau principle in predicting electron configurations."
    ]
  },
  {
    topic_name: "Ionization of Acids and Bases pH of a Solution",
    whatWillULearn: [
      "Understand the concept of pH and its significance in acid-base chemistry.",
      "Learn about the ionization of acids and bases in aqueous solutions.",
      "Explore how pH is calculated using the concentration of hydrogen ions.",
      "Discuss the role of pH in biological systems and environmental science."
    ]
  },
  {
    topic_name: "Neural Control and Coordination Central Neural System Human brain",
    whatWillULearn: [
      "Understand the structure and function of the central nervous system (CNS).",
      "Learn about the brain and its divisions: cerebrum, cerebellum, brain stem, and spinal cord.",
      "Explore how the CNS integrates sensory information and coordinates responses.",
      "Discuss common neurological disorders and their impact on human health."
    ]
  },
  {
    topic_name: "Neural Control and Coordination Sensory Reception and Eye",
    whatWillULearn: [
      "Understand sensory reception and the role of the eye in vision.",
      "Learn about the structure of the eye: cornea, lens, retina, and optic nerve.",
      "Explore how light is focused on the retina and converted into neural signals.",
      "Discuss common eye disorders and the importance of eye care."
    ]
  },
  {
    topic_name: "Neural Control and Coordination Sensory Reception and Ear",
    whatWillULearn: [
      "Understand sensory reception and the role of the ear in hearing and balance.",
      "Learn about the structure of the ear: outer ear, middle ear, inner ear, and cochlea.",
      "Explore how sound waves are transmitted through the ear and converted into nerve impulses.",
      "Discuss common ear disorders and the importance of hearing health."
    ]
  },
  {
    topic_name: "Breathing and Exchange of Gases Respiratory Organs Anatomy of Respiratory System",
    whatWillULearn: [
      "Understand the process of breathing and gas exchange in the respiratory system.",
      "Learn about the organs involved: lungs, diaphragm, trachea, bronchi, and alveoli.",
      "Explore how oxygen and carbon dioxide are exchanged in the alveoli.",
      "Discuss respiratory disorders and the factors affecting lung function."
    ]
  },
  {
    topic_name: "Muscular and Skeletal System",
    whatWillULearn: [
      "Understand the structure and function of the muscular and skeletal systems.",
      "Learn about muscles: types (skeletal, smooth, cardiac), functions, and movements.",
      "Explore the structure of bones, joints, and connective tissues.",
      "Discuss how muscles and bones work together in movement and support."
    ]
  },
  {
    topic_name: "Digestive System and Nutrition",
    whatWillULearn: [
      "Understand the structure and functions of the digestive system.",
      "Learn about organs: mouth, esophagus, stomach, small intestine, large intestine, liver, and pancreas.",
      "Explore the process of digestion: mechanical and chemical breakdown of food.",
      "Discuss the role of enzymes and nutrients in digestion and overall health."
    ]
  },
  {
    topic_name: "Circulatory System",
    whatWillULearn: [
      "Understand the structure and function of the circulatory system.",
      "Learn about the heart and blood vessels: arteries, veins, and capillaries.",
      "Explore how blood circulates through the body and delivers oxygen and nutrients.",
      "Discuss common circulatory disorders and the importance of cardiovascular health."
    ]
  },
  {
    topic_name: "Excretory System",
    whatWillULearn: [
      "Understand the structure and function of the excretory system.",
      "Learn about organs: kidneys, ureters, urinary bladder, and urethra.",
      "Explore how the excretory system removes waste products from the body.",
      "Discuss the regulation of water balance and the importance of kidney health."
    ]
  },
  {
    topic_name: "Types of Chemical Reactions",
    whatWillULearn: [
      "Understand the different types of chemical reactions.",
      "Learn about synthesis, decomposition, combustion, single displacement, and double displacement reactions.",
      "Explore how chemical equations represent reactions and conservation of mass.",
      "Discuss real-world examples of chemical reactions in everyday life and industry."
    ]
  },
  {
    topic_name: "Properties and Reactions of Acids",
    whatWillULearn: [
      "Understand the properties of acids and their behavior in aqueous solutions.",
      "Learn about acidic characteristics: pH, taste, and reaction with metals and bases.",
      "Explore common acids and their industrial and biological applications.",
      "Discuss safety precautions when handling acids and their environmental impact."
    ]
  },
  {
    topic_name: "Properties and Reactions of Bases",
    whatWillULearn: [
      "Understand the properties of bases and their behavior in aqueous solutions.",
      "Learn about basic characteristics: pH, taste, and reaction with acids.",
      "Explore common bases and their applications in industry and everyday life.",
      "Discuss the concept of alkalinity and its importance in environmental science."
    ]
  },
  {
    topic_name: "Physical and Chemical Properties of Metals",
    whatWillULearn: [
      "Understand the physical and chemical properties of metals.",
      "Learn about metallic luster, malleability, ductility, and electrical conductivity.",
      "Explore how metals react with acids, bases, and other substances.",
      "Discuss the uses of metals in industry, technology, and everyday life."
    ]
  },
  {
    topic_name: "Physical and Chemical Properties of Non-Metals",
    whatWillULearn: [
      "Understand the physical and chemical properties of non-metals.",
      "Learn about properties such as dull appearance, brittleness, and poor conductivity.",
      "Explore how non-metals react with acids, bases, and other substances.",
      "Discuss the uses of non-metals in industry, technology, and daily life."
    ]
  },
  {
    topic_name: "Elasticity and Plasticity",
    whatWillULearn: [
      "Understand the concepts of elasticity and plasticity in materials.",
      "Learn about how materials respond to stress and deformation.",
      "Explore the difference between elastic and plastic deformation.",
      "Discuss real-world examples where elasticity and plasticity play a crucial role."
    ]
  },
  {
    topic_name: "Hooke’s Law and its Applications",
    whatWillULearn: [
      "Understand Hooke's Law and its application in studying elastic materials.",
      "Learn how force and extension are related in elastic objects.",
      "Explore the limitations and practical applications of Hooke's Law.",
      "Discuss how Hooke's Law is used in engineering and material science."
    ]
  },
  {
    topic_name: "Laws of Thermodynamics",
    whatWillULearn: [
      "Understand the laws of thermodynamics and their fundamental principles.",
      "Learn about the concepts of energy transfer, entropy, and heat flow.",
      "Explore how the laws of thermodynamics apply to systems and processes.",
      "Discuss the implications of thermodynamic principles in engineering and physics."
    ]
  },
  {
    topic_name: "Heat Transfer Mechanisms",
    whatWillULearn: [
      "Understand the mechanisms of heat transfer: conduction, convection, and radiation.",
      "Learn how heat energy moves between objects and substances.",
      "Explore real-world examples of heat transfer mechanisms in action.",
      "Discuss the role of insulation and thermal conductivity in heat transfer."
    ]
  },
  {
    topic_name: "Thermal Expansion",
    whatWillULearn: [
      "Understand thermal expansion and its effects on solids, liquids, and gases.",
      "Learn about linear, area, and volumetric expansion in different materials.",
      "Explore applications of thermal expansion in engineering and everyday objects.",
      "Discuss how temperature changes affect the dimensions of materials."
    ]
  },
  {
    topic_name: "Specific Heat Capacity and Calorimetry",
    whatWillULearn: [
      "Understand specific heat capacity and its role in heat transfer.",
      "Learn how specific heat capacity is defined and calculated.",
      "Explore the principles of calorimetry and how it measures heat changes.",
      "Discuss practical applications of specific heat capacity in various fields."
    ]
  },
  {
    topic_name: "Characteristics and Types of Waves",
    whatWillULearn: [
      "Understand the characteristics of waves: amplitude, wavelength, frequency, and speed.",
      "Learn about the different types of waves: mechanical and electromagnetic.",
      "Explore wave behavior: reflection, refraction, diffraction, and interference.",
      "Discuss real-world applications of waves in communication, medicine, and technology."
    ]
  },
]




export function whatuLearnForHigherEd(descriptionRecieved) {
  const isModuleExists = whatuLearnHigherEd.find((content) => content.description === descriptionRecieved);
  if (isModuleExists) {
    return isModuleExists.whatwillyoulearn
  } else {
    return null
  }
}

export function whatuLearnForK12(topicNameRecieved) {
  const isModuleExists = whatuLearnK12.find((content) => content.topic_name === topicNameRecieved);
  if (isModuleExists) {
    return isModuleExists.whatWillULearn
  } else {
    return null
  }
}

function parseJwt(token) {
  var base64Url = token?.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}

export function isTokenExpire(tokenInfo) {
  const { exp } = parseJwt(tokenInfo);
  let expireTime = new Date(exp * 1000);
  const currentDate = new Date();
  return expireTime <= currentDate
}

export const categoryId = (categoryNameArray) => {
  let categoryNameIdPair = {
    'k12':1,
    'higher-ed':2,
  }
  for (let name in categoryNameIdPair) {
    if (categoryNameArray.includes(name)) {
      return categoryNameIdPair[name]
    }
  }
  
  return null;
}



