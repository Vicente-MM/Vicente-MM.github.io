// Project data - single source of truth for all project cards
const PROJECTS = {
    pilotValve: {
        id: 'pilot-valve',
        title: 'Solaris Mk II Fluids System',
        organization: 'Monash HPR',
        timeframe: '2024-2025',
        impact: 'Designed, machined and tested a high pressure (70 Bar), 3-way pneumatic pilot valve for the Solaris Mk II hybrid rocket engine.',
        tags: ['CNC/Manual Machining', 'Mechanical Design', 'Prototyping & Testing'],
        image: 'images/mk2.6_valve_render_6.jpg',
        imageAlt: 'Solaris Mk II Pilot Valve render',
        link: 'pilot-valve.html',
        tier: 'notable'
    },
    
    COPV: {
        id: 'copv',  
        title: 'Solaris Mk III Composite Pressure Vessel (COPV)',
        organization: 'Monash HPR',
        timeframe: '2025',
        impact: 'Designed, fabricated and static-fired a composite combustion chamber at the international Race2Space propulsion competition. Established and documented a novel composites manufacturing process for the team.',
        tags: ['Composite Manufacturing', 'ANSYS FEA/ACP', 'Material Testing (ASTM D5868)'],
        image: 'images/Solaris Mk III test fire photo.jpg',
        imageAlt: 'Solaris Mk III static fire test',
        link: 'copv.html',
        tier: 'notable'
    },

    NDT: {
        id: 'ndt',
        title: 'Ultrasonic Inspection of Composites',
        organization: 'Monash HPR',
        timeframe: '2026',
        impact: 'Collaborated with Boeing NDT laboratory to conduct ultrasonic inspection of flat-plate carbon fibre samples. Improved in-house composite manufacturing and quality assurance processes.',
        tags: ['Ultrasonic NDT', 'Process Documentation', 'Quality Assurance'],
        image: 'images/NDT_Scan.png',
        imageAlt: 'Lay-up of sample carbon-fibre panel',
        link: 'ndt.html',
        tier: 'notable'
    },

    Scan3D: {
        id: '3d-scan',
        title: '3D Scanning and Reverse Engineering',
        organization: 'Mercedes-Benz',
        timeframe: '2026',
        impact: 'Utilised 3D scanning and scan-to-CAD technology to reverse engineer discontinued vehicle spare parts.',
        tags: ['Siemens NX', '3D Scanning'],
        image: 'images/Scanbox.jpg',
        imageAlt: '3D Scan Setup',
        link: '3dscan.html',
        tier: 'notable'
    },
};


