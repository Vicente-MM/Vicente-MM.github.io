// Project data - single source of truth for all project cards
const PROJECTS = {
    visionSystem: {
        id: 'vision-system',
        title: 'High-Speed Inspection System',
        organization: 'Bosch Australia',
        timeframe: '2024-2025',
        impact: 'Built a <strong>multithreaded</strong> C#/.NET vision system for a <strong>~$8M</strong> manufacturing line, integrating <strong>40+ cameras</strong>, PLC handshakes, SQL logging, and an operator HMI.',
        tags: ['Production', 'Multithreaded Vision', 'PROFINET'],
        image: 'images/vision_system.png',
        imageAlt: 'Vision System',
        link: 'vision-inspection-system.html',
        tier: 'flagship',
        categories: ['featured', 'industrial']
    },
    
    solarisMk2: {
        id: 'solaris-mk2',  
        title: 'Solaris Mk II & GSE Electronics',
        organization: 'Monash HPR',
        timeframe: '2023-2025',
        impact: 'Built and operated avionics and ground systems for a <strong>4 kN</strong> hybrid engine, owning <strong>control software</strong>, ground electronics and test preparation for <strong>hot-fire campaigns</strong>.',
        tags: ['Hot-Fire Ops', 'Distributed Control', 'STM32'],
        image: 'images/solaris_showcase.png',
        imageAlt: 'Solaris Mk II Showcase',
        link: 'solaris-mk-ii.html',
        tier: 'flagship',
        categories: ['featured', 'rocketry']
    },

    irec2025: {
        id: 'irec-2025',
        title: 'IREC 2025: Project Zenith',
        organization: 'Monash HPR',
        timeframe: '2025',
        impact: 'Performed pad operations and technical presentation at <strong>IREC 2025</strong> for Project Zenith, contributing to a successful flight and the <strong>Jim Furfaro Technical Excellence Award</strong>.',
        tags: ['Pad Ops', 'Jim Furfaro Award'],
        image: 'images/irec_pad_photo.png',
        imageAlt: 'IREC Pad Operations',
        link: 'irec-2025-zenith.html',
        tier: 'flagship',
        categories: ['featured', 'robotics']
    },
    
    fruitRobot: {
        id: 'fruit-robot',
        title: 'Autonomous Fruit Robot',
        organization: 'Monash University',
        timeframe: '2025',
        impact: 'Programmed <strong>autonomous mobile robot</strong> integrating <strong>YOLO</strong> perception, <strong>EKF SLAM</strong>, navigation and path planning to collect fruit autonomously.',
        tags: ['System Integration'],
        image: 'images/penguin_pi.png',
        imageAlt: 'Autonomous fruit robot',
        link: 'autonomous-fruit-robot.html',
        tier: 'flagship',
        categories: ['robotics']
    },
    
    yoloDetection: {
        id: 'yolo-detection',
        title: 'Real-Time YOLO Detection',
        organization: 'Bosch Australia',
        timeframe: '2024',
        impact: 'Built a real-time YOLO detection pipeline for a <strong>live manufacturing line</strong>, using dataset automation and transfer learning to achieve <strong>2x faster development</strong> and <strong>1.5x faster inference</strong>.',
        tags: ['Production ML', 'Dataset Automation'],
        image: 'images/water_bottle_yolo.png',
        imageAlt: 'YOLO Detection',
        tier: 'supporting',
        categories: ['industrial']
    },
    
    digitalTwin: {
        id: 'digital-twin',
        title: 'Robotic Palletizer Digital Twin',
        organization: 'Bosch Australia',
        timeframe: '2024',
        impact: 'Built a <strong>Siemens NX MCD</strong> digital twin with Python and Excel automation, enabling <strong>Software-In-The-Loop</strong> testing and reducing setup time by <strong>~50%</strong>',
        tags: ['Siemens NX', 'SIL'],
        image: 'images/bams_simulation.png',
        imageAlt: 'Palletizer digital twin simulation',
        tier: 'supporting',
        categories: ['industrial']
    },
    
    imageStitching: {
        id: 'image-stitching',
        title: 'Image Stitching Algorithm',
        organization: 'Bosch Australia',
        timeframe: '2024',
        impact: 'Replaced <strong>commercial vision software</strong> with a custom image-stitching algorithm, successfully stitching <strong>100% of the test image set</strong> and eliminating contractor costs.',
        tags: ['Production Replacement'],
        image: 'images/stitching_algo.png',
        imageAlt: 'Image stitching algorithm',
        tier: 'supporting',
        categories: ['industrial']
    },
    
    arcPyro: {
        id: 'arc-pyro',
        title: '14kV High Voltage Ignitor',
        organization: 'Monash HPR',
        timeframe: '2025',
        impact: 'Designed and tested a <strong>14 kV</strong> arc-ignition system for hybrid rockets, including <strong>safety interlocks</strong> and documentation required for <strong>university safety approval</strong>.',
        tags: ['High Voltage', 'Safety Docs'],
        image: 'images/arc_pyro_bench.png',
        imageAlt: 'Arc-Pyro Ignitor',
        link: 'arc-pyro-ignitor.html',
        tier: 'notable',
        categories: ['rocketry']
    },
    
    solarisMk3: {
        id: 'solaris-mk3',
        title: 'Solaris Mk III Testing',
        organization: 'Monash HPR',
        timeframe: '2023-2025',
        impact: 'Supported R2S competition hot-fire of a <strong>10 kN</strong> <strong>LOX-paraffin</strong> hybrid engine, then worked on early LOX feed system architectures, <strong>P&IDs</strong>, and informal failure analyses.',
        tags: ['Hot-Fire Ops', 'LOX'],
        image: 'images/solaris_mk3_hotfire.png',
        imageAlt: 'Solaris Mk III',
        link: 'solaris-mk-iii.html',
        tier: 'notable',
        categories: ['rocketry']
    },
    
    fillStation: {
        id: 'fill-station',
        title: 'N2O Fill Station',
        organization: 'Monash HPR / Design Methods',
        timeframe: '2025',
        impact: 'Developed a <strong>nitrous oxide</strong> fill station with <strong>remote valve control</strong> and <strong>real-time pressure monitoring</strong> to improve accessibility and safety for hobby-grade hybrid rockets.',
        tags: ['Propellant Handling', 'Remote Actuation'],
        image: 'images/hobby_fill_station.png',
        imageAlt: 'Fill Station',
        tier: 'supporting',
        categories: ['rocketry']
    },
    
    chameleonLogger: {
        id: 'chameleon-logger',
        title: 'L1 Flight Data Logger',
        organization: 'Monash HPR',
        timeframe: '2023',
        impact: 'Built a <strong>1 kHz</strong> Arduino-based flight data logger capturing acceleration and altitude data, flown to approximately <strong>1,200 ft</strong>.',
        tags: ['Flight-Proven'],
        image: 'images/chamelion_launch.png',
        imageAlt: 'Chameleon Flight',
        tier: 'supporting',
        categories: ['rocketry']
    },
    
    robotCompetitions: {
        id: 'robot-competitions',
        title: 'Robotics Hackathons',
        organization: 'Monash University',
        timeframe: '2023-2025',
        impact: 'Achieved multiple <strong>podium finishes</strong> in <strong>30+ team</strong> robotics competitions through rapid prototyping and efficient teamwork.',
        tags: ['Competition Robotics'],
        image: 'images/rbc_2024_bot.png',
        imageAlt: 'Robotics competition arena',
        tier: 'supporting',
        categories: ['robotics']
    },
    
    terminalAI: {
        id: 'terminal-ai',
        title: 'Terminal APAC AI Challenge',
        organization: 'Terminal (Citadel)',
        timeframe: '2023',
        impact: 'Implemented real-time strategy logic as a <strong>solo entrant</strong>, placing <strong>top five out of 33 teams</strong> in the Terminal APAC AI competition.',
        tags: ['Real-Time Strategy'],
        image: 'images/terminal.png',
        imageAlt: 'Terminal APAC competition',
        tier: 'supporting',
        categories: ['robotics']
    },
    
    // avionicsAdvisor: {
    //     id: 'avionics-advisor',
    //     title: 'Avionics Advisor',
    //     organization: 'Monash HPR',
    //     timeframe: '2025-Present',
    //     impact: 'Mentored avionics teams on system architecture, safety, and debugging during design, focusing on reliability and integration issues.',
    //     tags: ['Mentoring', 'Architecture', 'Reliability'],
    //     image: null,
    //     placeholder: 'Advisory',
    //     tier: 'supporting',
    //     categories: ['rocketry']
    // }
};

// Category metadata
const CATEGORIES = {
    featured: {
        title: 'Featured Work',
        showOnIndex: true
    },
    industrial: {
        title: 'Industrial Automation & Computer Vision',
        altBg: true
    },
    rocketry: {
        title: 'Rocketry & Propulsion',
        altBg: true
    },
    robotics: {
        title: 'Robotics & Competitions',
        altBg: true
    }
};
