import {
  Monitor,
  GraduationCap,
  Box,
  Lightbulb,
  Target,
  Sparkles,
  Scaling,
  Plane,
  Shield,
  Crosshair,
  Navigation,
  Radio,
  Glasses,
} from "lucide-react";

export const solutions = [
  {
    icon: Monitor,
    title: "Immersive Training",
    description:
      "Simulation-based environments that allow users to practice real-world scenarios safely and effectively.",
  },
  {
    icon: GraduationCap,
    title: "Immersive Learning Platforms",
    description:
      "Interactive digital learning systems designed to increase engagement and improve knowledge retention.",
  },
  {
    icon: Box,
    title: "Simulation-Based Experiences",
    description:
      "Realistic virtual environments that replicate complex operational scenarios.",
  },
];

export const whyJtac = [
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description:
      "We continuously explore emerging technologies to deliver forward-looking solutions.",
  },
  {
    icon: Target,
    title: "Practical Applications",
    description:
      "Our solutions are designed with real-world use cases and industry challenges in mind.",
  },
  {
    icon: Sparkles,
    title: "Engaging Experiences",
    description:
      "We focus on creating immersive environments that enhance engagement and learning outcomes.",
  },
  {
    icon: Scaling,
    title: "Scalable Solutions",
    description:
      "Our technology platforms are designed to scale across organizations and industries.",
  },
];

export const products = [
  {
    slug: "helicopter-simulator",
    title: "Helicopter Simulator",
    shortDescription:
      "Our helicopter simulator provides immersive flight training environments designed to replicate real-world helicopter operations.",
    icon: Plane,
    heroDescription:
      "The Helicopter Simulator is an advanced training system designed to replicate real-world helicopter flight operations in a safe and controlled simulation environment. The system enables pilots and trainees to practice flight procedures, mission scenarios, and emergency handling without the risks and operational costs associated with live helicopter training.",
    subDescription:
      "By combining realistic cockpit interfaces, flight dynamics simulation, and immersive visual environments, the Helicopter Simulator supports effective pilot training and operational readiness.",
    features: [
      {
        title: "Realistic Cockpit Environment",
        description:
          "Replicates helicopter cockpit layout and operational controls for authentic pilot training.",
      },
      {
        title: "Advanced Flight Dynamics Simulation",
        description:
          "Simulates helicopter flight behavior under various environmental and operational conditions.",
      },
      {
        title: "Mission Scenario Training",
        description:
          "Enables training across a variety of operational scenarios, including navigation and mission-based exercises.",
      },
      {
        title: "Emergency Procedure Simulation",
        description:
          "Allows pilots to practice handling unexpected flight situations and system failures.",
      },
      {
        title: "Configurable Training Modules",
        description:
          "Training scenarios can be customized according to specific operational requirements.",
      },
    ],
    advantages: [
      "Reduces operational costs compared to live flight training",
      "Enables safe practice of high-risk scenarios",
      "Improves pilot readiness and procedural accuracy",
      "Allows repeated and scalable training sessions",
      "Enhances overall flight training effectiveness",
    ],
    cta: {
      title: "Enhance Helicopter Pilot Training with Advanced Simulation",
      description:
        "Contact us to learn how our helicopter simulation solutions can support your training programs.",
      button: "Request More Information",
    },
  },
  {
    slug: "tank-simulator",
    title: "Tank Simulator",
    shortDescription:
      "The tank simulator is designed to support realistic armored vehicle training through immersive simulation environments.",
    icon: Shield,
    heroDescription:
      "The Tank Simulator is a tactical training system designed to replicate armored vehicle operations and combat scenarios within a controlled digital environment. The system enables operators and crews to train in realistic battlefield situations without the risks and logistical challenges of live exercises.",
    subDescription:
      "Through immersive simulation and scenario-based training, the Tank Simulator helps improve tactical decision-making, crew coordination, and operational performance.",
    features: [
      {
        title: "Armored Vehicle Operation Simulation",
        description:
          "Realistic control systems that replicate tank operation and maneuvering.",
      },
      {
        title: "Tactical Scenario Training",
        description:
          "Enables simulation of battlefield environments and mission-based exercises.",
      },
      {
        title: "Crew Coordination Training",
        description:
          "Supports multi-role training for driver, gunner, and commander.",
      },
      {
        title: "Dynamic Operational Environment",
        description:
          "Training scenarios can include different terrains and mission objectives.",
      },
      {
        title: "Repeatable Training Sessions",
        description:
          "Allows continuous practice for improved skill development.",
      },
    ],
    advantages: [
      "Safe training environment for complex tactical scenarios",
      "Enhances teamwork and crew coordination",
      "Reduces reliance on expensive live training exercises",
      "Enables scenario-based operational readiness training",
      "Supports scalable and repeatable training programs",
    ],
    cta: {
      title: "Improve Tactical Readiness Through Advanced Simulation",
      description:
        "Explore how our tank simulation systems can strengthen your training capabilities.",
      button: "Request a Demo",
    },
  },
  {
    slug: "gun-simulator",
    title: "Gun Simulator",
    shortDescription:
      "The gun simulator provides immersive firearms training environments designed to enhance weapon handling, decision-making, and tactical awareness.",
    icon: Crosshair,
    heroDescription:
      "The Gun Simulator is an immersive firearms training platform designed to improve weapon handling skills, tactical awareness, and decision-making through realistic simulation scenarios.",
    subDescription:
      "The system allows trainees to engage in scenario-based exercises within a safe digital environment, enabling consistent and measurable training outcomes.",
    features: [
      {
        title: "Weapon Handling Simulation",
        description: "Replicates firearm operation and handling procedures.",
      },
      {
        title: "Scenario-Based Training",
        description:
          "Realistic operational scenarios designed to improve situational awareness.",
      },
      {
        title: "Interactive Target Engagement",
        description: "Allows trainees to practice accuracy and reaction time.",
      },
      {
        title: "Training Performance Monitoring",
        description: "Provides measurable feedback on trainee performance.",
      },
      {
        title: "Configurable Training Modules",
        description:
          "Training environments can be customized to suit different operational needs.",
      },
    ],
    advantages: [
      "Enhances firearms training safety",
      "Improves tactical awareness and reaction time",
      "Allows consistent and repeatable training exercises",
      "Provides measurable training performance insights",
      "Reduces costs associated with live ammunition training",
    ],
    cta: {
      title: "Deliver Safer and More Effective Firearms Training",
      description:
        "Discover how immersive gun simulation can enhance your training programs.",
      button: "Contact Our Team",
    },
  },
  {
    slug: "flight-training-device",
    title: "Flight Training Device (FTD)",
    shortDescription:
      "The Flight Training Device (FTD) provides mid-level aviation simulation capabilities designed to support pilot training and flight procedure development.",
    icon: Navigation,
    heroDescription:
      "The Flight Training Device (FTD) is a professional aviation training system designed to provide realistic cockpit-based procedural training for pilots. Positioned below a full-flight simulator in complexity, the FTD focuses on procedural learning, instrument familiarization, and operational training.",
    subDescription:
      "This system enables aviation organizations to conduct effective pilot training through realistic cockpit simulation and interactive flight scenarios.",
    features: [
      {
        title: "Realistic Cockpit Configuration",
        description: "Replicates aircraft cockpit systems and controls.",
      },
      {
        title: "Instrument and Procedure Training",
        description:
          "Enables pilots to practice flight procedures and instrument operations.",
      },
      {
        title: "Operational Scenario Simulation",
        description:
          "Allows training for different flight phases and conditions.",
      },
      {
        title: "Pilot Familiarization Training",
        description:
          "Helps trainees understand cockpit workflows and flight operations.",
      },
      {
        title: "Scalable Training Platform",
        description:
          "Can be integrated into broader aviation training programs.",
      },
    ],
    advantages: [
      "Cost-effective alternative to full flight simulators",
      "Supports procedural and instrument training",
      "Enhances pilot familiarity with cockpit operations",
      "Enables repeated training without aircraft usage",
      "Improves pilot preparedness before live flight training",
    ],
    cta: {
      title: "Support Efficient Pilot Training with Advanced FTD Solutions",
      description:
        "Learn how our Flight Training Device can enhance your aviation training programs.",
      button: "Request Product Details",
    },
  },
  {
    slug: "gfac",
    title: "GFAC (Ground Forward Air Control)",
    shortDescription:
      "The Ground Forward Air Control training platform, designed to support advanced tactical coordination and operational training environments.",
    icon: Radio,
    heroDescription:
      "GFAC 2 is a next-generation tactical coordination training system designed to support complex operational planning and mission-based training environments. Building upon the capabilities of the previous GFAC platform, GFAC 2 introduces enhanced simulation environments and collaborative training capabilities.",
    subDescription:
      "The system enables teams to train together in realistic mission scenarios, improving coordination, decision-making, and operational effectiveness.",
    features: [
      {
        title: "Mission Coordination Simulation",
        description: "Enables multi-role training for operational teams.",
      },
      {
        title: "Scenario-Based Tactical Training",
        description: "Simulates realistic operational environments.",
      },
      {
        title: "Collaborative Training Environment",
        description:
          "Allows multiple participants to interact within the same simulation scenario.",
      },
      {
        title: "Operational Planning Exercises",
        description: "Supports mission planning and execution training.",
      },
      {
        title: "Enhanced Simulation Capabilities",
        description:
          "Builds upon the GFAC platform with improved training functionality.",
      },
    ],
    advantages: [
      "Strengthens team coordination and mission planning",
      "Enables realistic operational scenario training",
      "Supports collaborative and multi-user training environments",
      "Enhances decision-making under operational conditions",
      "Improves overall mission readiness",
    ],
    cta: {
      title: "Strengthen Tactical Coordination with GFAC 2",
      description:
        "Discover the next generation of operational training systems.",
      button: "Schedule a Consultation",
    },
  },
  {
    slug: "vts-helicopter",
    title: "VTS Helicopter",
    shortDescription:
      "VTS Helicopter is a VR-based procedural training system designed to support helicopter familiarization and operational procedure training.",
    icon: Glasses,
    heroDescription:
      "VTS Helicopter (Virtual Training System) is a VR-based procedural training platform designed to support helicopter cockpit familiarization and operational procedure training.",
    subDescription:
      "The system enables trainees to explore helicopter systems, cockpit layouts, and operational workflows through immersive virtual environments, providing flexible and accessible training without the need for physical aircraft.",
    features: [
      {
        title: "VR-Based Cockpit Familiarization",
        description:
          "Immersive virtual cockpit environments for procedural learning.",
      },
      {
        title: "Interactive Training Modules",
        description:
          "Step-by-step training for helicopter systems and procedures.",
      },
      {
        title: "Software-Based Training Platform",
        description:
          "Accessible through digital systems without requiring full simulator hardware.",
      },
      {
        title: "Procedural Workflow Training",
        description:
          "Helps trainees understand operational processes and cockpit operations.",
      },
      {
        title: "Flexible Training Deployment",
        description: "Can be implemented in classrooms or training centers.",
      },
    ],
    advantages: [
      "Cost-efficient training alternative",
      "Enhances cockpit familiarization before live training",
      "Enables flexible training environments",
      "Improves knowledge retention through immersive learning",
      "Supports scalable training programs",
    ],
    cta: {
      title: "Accelerate Helicopter Training with Virtual Simulation",
      description:
        "Explore how VTS Helicopter can support your training ecosystem.",
      button: "Request a Demo",
    },
  },
];

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Technology", href: "/#technology" },
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/#solutions" },
  ],
  contact: [
    { label: "Contact Us", href: "/#cta" },
    { label: "Request Demo", href: "/#cta" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
  ],
};

export const coreValues = [
  {
    title: "Innovation",
    description:
      "We embrace new ideas and technologies to create transformative solutions.",
  },
  {
    title: "Impact",
    description:
      "We focus on delivering solutions that generate measurable value for organizations.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in strong partnerships to drive meaningful technological advancement.",
  },
  {
    title: "Excellence",
    description:
      "We strive for the highest standards in technology, design, and service delivery.",
  },
];

export const capabilities = [
  {
    title: "Immersive Learning Platforms",
    description:
      "Digital environments designed to enhance learning engagement and knowledge retention.",
  },
  {
    title: "Simulation-Based Training",
    description:
      "Interactive training solutions that replicate real-world scenarios for safer and more effective skill development.",
  },
  {
    title: "Digital Experience Solutions",
    description:
      "Immersive technologies that enable organizations to deliver engaging and impactful digital interactions.",
  },
  {
    title: "Technology Integration",
    description:
      "End-to-end integration of immersive platforms into existing organizational systems and learning ecosystems.",
  },
];

export const aboutWhyUs = [
  {
    title: "Innovation-Driven",
    description:
      "We continuously explore emerging technologies to deliver forward-looking solutions.",
  },
  {
    title: "Practical Industry Applications",
    description:
      "Our solutions are designed with real-world use cases in mind, ensuring practical value for organizations.",
  },
  {
    title: "User-Centered Design",
    description:
      "We prioritize usability and engagement to ensure effective learning and training outcomes.",
  },
  {
    title: "Scalable Technology",
    description:
      "Our platforms are built to support organizations of different sizes and industries.",
  },
];

export const blogPosts = [
  {
    slug: "future-of-immersive-training",
    title: "The Future of Immersive Training in Defense and Aviation",
    excerpt:
      "As technology advances, immersive training solutions are transforming how defense and aviation professionals prepare for real-world operations.",
    content: [
      "Immersive training technology has rapidly evolved over the past decade, offering new possibilities for defense and aviation sectors. Traditional classroom-based training, while still valuable, is increasingly being supplemented by simulation-based environments that provide realistic, hands-on experience.",
      "Modern immersive training platforms leverage advanced graphics, real-time physics engines, and interactive environments to create scenarios that closely replicate operational conditions. This allows trainees to practice complex procedures, respond to emergencies, and develop critical decision-making skills — all within a safe and controlled setting.",
      "In the defense sector, simulation-based training reduces the logistical burden and cost associated with live exercises. Trainees can rehearse mission scenarios repeatedly without consuming physical resources, while still gaining meaningful operational experience.",
      "Aviation training has similarly benefited from immersive technology. Flight simulation devices now offer high-fidelity cockpit environments, realistic flight dynamics, and diverse weather and terrain conditions. Pilots can train for rare but critical situations that would be impractical or dangerous to replicate in actual flight.",
      "Looking ahead, the integration of artificial intelligence and adaptive learning algorithms promises to make immersive training even more effective. Systems that can dynamically adjust difficulty levels, provide real-time feedback, and personalize training pathways will help organizations maximize training outcomes while minimizing time and cost.",
      "At JTAC Immersive Technology, we are committed to developing next-generation training solutions that harness these advancements to deliver safer, smarter, and more effective training experiences.",
    ],
    image:
      "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=1200&q=80",
    category: "Industry Insights",
    date: "2026-03-10",
    author: "JTAC Editorial",
    readTime: "5 min read",
  },
  {
    slug: "simulation-based-learning-education",
    title: "How Simulation-Based Learning Is Reshaping Education",
    excerpt:
      "From medical training to engineering, simulation-based learning provides students with safe, repeatable, and engaging environments to develop practical skills.",
    content: [
      "Education is undergoing a significant transformation as institutions seek more engaging and effective learning methods. Simulation-based learning has emerged as a powerful approach that bridges the gap between theoretical knowledge and practical application.",
      "Unlike traditional learning methods that rely heavily on lectures and textbooks, simulation-based learning places students in interactive environments where they can experiment, make mistakes, and learn through direct experience. This experiential approach has been shown to improve knowledge retention and skill development.",
      "In medical education, simulation-based training allows students to practice surgical procedures, diagnose conditions, and manage patient interactions without risk to actual patients. The ability to repeat scenarios and receive immediate feedback accelerates the learning curve significantly.",
      "Engineering and technical fields similarly benefit from simulation environments that let students interact with complex systems and processes. Rather than studying diagrams, students can manipulate virtual equipment, observe outcomes, and develop intuitive understanding of how systems behave.",
      "The scalability of simulation-based learning also makes it an attractive option for organizations with large training populations. Digital platforms can deliver consistent training experiences across multiple locations simultaneously, reducing the need for physical training infrastructure.",
      "As immersive technologies continue to mature, the line between virtual training and real-world experience will continue to blur, creating unprecedented opportunities for education and professional development.",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    category: "Education",
    date: "2026-03-05",
    author: "JTAC Editorial",
    readTime: "4 min read",
  },
  {
    slug: "digital-transformation-enterprise",
    title: "Digital Transformation: Why Enterprises Need Immersive Technology",
    excerpt:
      "Organizations that embrace immersive technology are gaining competitive advantages through improved training, collaboration, and operational efficiency.",
    content: [
      "Digital transformation has become a strategic imperative for organizations across industries. While many companies have adopted cloud computing, data analytics, and automation, immersive technology represents the next frontier in digital innovation.",
      "Immersive technology — including virtual reality, augmented reality, and advanced simulation platforms — offers organizations new ways to train employees, collaborate across distances, and visualize complex data. These capabilities are becoming increasingly critical as businesses face growing complexity and competition.",
      "In manufacturing, immersive technology enables digital twin applications that allow engineers to simulate production processes, identify potential issues, and optimize workflows before physical implementation. This reduces costly errors and accelerates time-to-market for new products.",
      "For workforce training, immersive platforms provide standardized, repeatable experiences that ensure consistent skill development regardless of location. Companies with distributed workforces can deliver uniform training quality while reducing travel and facility costs.",
      "Customer engagement is another area where immersive technology is making an impact. Interactive product demonstrations, virtual showrooms, and augmented reality experiences are helping businesses create more compelling and memorable customer interactions.",
      "As the technology matures and costs decrease, adoption of immersive solutions is expected to accelerate across sectors. Organizations that invest in these capabilities now will be better positioned to attract talent, improve operational performance, and drive innovation.",
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    category: "Technology",
    date: "2026-02-28",
    author: "JTAC Editorial",
    readTime: "5 min read",
  },
  {
    slug: "helicopter-simulation-pilot-training",
    title: "Advancing Helicopter Pilot Training Through Simulation",
    excerpt:
      "Advanced helicopter simulators are proving to be essential tools for developing pilot skills, improving safety, and reducing training costs.",
    content: [
      "Helicopter operations require a unique combination of technical skill, situational awareness, and quick decision-making. Training for these demanding roles has traditionally required extensive flight hours, which carry significant cost and risk implications.",
      "Modern helicopter simulation technology is changing this equation by providing highly realistic training environments that reproduce the full spectrum of flight conditions and operational scenarios. Today's simulators feature accurate flight dynamics models, detailed cockpit replications, and immersive visual systems that create convincing training experiences.",
      "One of the key advantages of simulation-based helicopter training is the ability to safely practice emergency procedures. Engine failures, instrument malfunctions, and adverse weather conditions can all be reliably simulated, allowing pilots to develop and maintain critical response skills without actual risk.",
      "Mission-specific training scenarios further enhance the value of helicopter simulation. Pilots can rehearse complex operations — from search and rescue to tactical missions — in environments that accurately represent their operational theaters. This preparation improves mission readiness and reduces the learning curve when transitioning to live operations.",
      "The economic benefits of simulation are also significant. While simulator acquisition represents a substantial initial investment, the ongoing operational costs are far lower than live flight training. Fuel savings, reduced aircraft wear, and lower maintenance requirements deliver meaningful long-term cost reductions.",
      "At JTAC, our helicopter simulation solutions are designed to help training organizations maximize the benefits of simulator-based instruction while maintaining the highest standards of training effectiveness.",
    ],
    image:
      "https://images.unsplash.com/photo-1621528079827-406e91ce54e0?w=1200&q=80",
    category: "Products",
    date: "2026-02-20",
    author: "JTAC Editorial",
    readTime: "5 min read",
  },
  {
    slug: "vr-ar-workplace-training",
    title: "VR and AR in Workplace Training: Trends and Benefits",
    excerpt:
      "Virtual and augmented reality technologies are becoming mainstream tools for workplace training, offering measurable improvements in learning outcomes.",
    content: [
      "Virtual Reality (VR) and Augmented Reality (AR) have moved beyond the realm of gaming and entertainment to become valuable tools for workplace training and development. Organizations across industries are discovering that immersive technologies can deliver training experiences that are more engaging, effective, and cost-efficient than traditional methods.",
      "VR training immerses learners in fully digital environments where they can interact with simulated equipment, processes, and scenarios. This is particularly valuable for high-risk industries such as oil and gas, construction, and emergency services, where hands-on practice in real environments carries significant safety concerns.",
      "AR training, on the other hand, overlays digital information onto the physical world, providing real-time guidance and support. Maintenance technicians can use AR to see step-by-step repair instructions superimposed on actual equipment, reducing errors and improving efficiency.",
      "Research consistently shows that immersive training leads to better learning outcomes. Studies indicate that VR-trained employees retain information longer, make fewer errors, and complete tasks faster compared to those trained through traditional methods. The emotional engagement and sense of presence that immersive experiences create appear to strengthen memory formation and skill acquisition.",
      "The business case for VR and AR training is also strengthening as hardware costs decrease and content development tools become more accessible. Cloud-based platforms now allow organizations to deploy and manage immersive training programs at scale without extensive on-premises infrastructure.",
      "As these technologies continue to evolve, we can expect to see even broader adoption across industries, with AI-powered adaptive learning and collaborative virtual environments opening new possibilities for workforce development.",
    ],
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1200&q=80",
    category: "Industry Insights",
    date: "2026-02-14",
    author: "JTAC Editorial",
    readTime: "5 min read",
  },
  {
    slug: "building-effective-training-ecosystems",
    title: "Building Effective Training Ecosystems with Immersive Technology",
    excerpt:
      "A comprehensive training ecosystem that integrates immersive technology can significantly enhance organizational learning and development outcomes.",
    content: [
      "Creating an effective training program requires more than just investing in the latest technology. Organizations need to build comprehensive training ecosystems that integrate immersive technology with existing learning infrastructure, assessment frameworks, and organizational objectives.",
      "A well-designed training ecosystem starts with clear learning objectives aligned to operational requirements. Immersive training modules should be developed to address specific skill gaps and performance targets, ensuring that technology investment delivers measurable returns.",
      "Integration with existing Learning Management Systems (LMS) is critical for tracking progress, managing certifications, and maintaining training records. Modern immersive training platforms increasingly support industry-standard integration protocols, making it easier to incorporate simulation-based modules into established training workflows.",
      "Blended learning approaches that combine immersive experiences with classroom instruction, mentoring, and on-the-job training tend to deliver the best outcomes. Each learning modality has strengths, and a thoughtful combination ensures comprehensive skill development.",
      "Assessment and analytics capabilities are also essential components of an immersive training ecosystem. Performance data collected during simulation exercises provides objective measures of competency, helping instructors identify areas that need additional attention and enabling data-driven training program optimization.",
      "At JTAC Immersive Technology, we work with organizations to design and implement training ecosystems that leverage the full potential of immersive technology while maintaining practical operability and measurable effectiveness.",
    ],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    category: "Best Practices",
    date: "2026-02-07",
    author: "JTAC Editorial",
    readTime: "6 min read",
  },
];
