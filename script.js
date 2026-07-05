// ALL 102 QUESTIONS - FCPE 102
const masterQuestions = [
    { topic: "Early Computing Devices", question: "Which device is regarded as the first computing device?", options: ["A. Pascaline", "B. Analytical Engine", "C. Abacus", "D. ENIAC"], answer: "C", explanation: "The Abacus is the oldest known calculating tool, used for thousands of years." },
    { topic: "Early Computing Devices", question: "The Abacus was first used around:", options: ["A. 1945 AD", "B. 1642 AD", "C. 1400 BC", "D. 2400 BC"], answer: "D", explanation: "Historical records show the Abacus originated around 2400 BC in Mesopotamia." },
    { topic: "Early Computing Devices", question: "Who invented the Pascaline?", options: ["A. Alan Turing", "B. Blaise Pascal", "C. Charles Babbage", "D. John von Neumann"], answer: "B", explanation: "Blaise Pascal created the Pascaline in 1642 to help his father with tax calculations." },
    { topic: "Early Computing Devices", question: "The Pascaline could perform:", options: ["A. Multiplication only", "B. Division only", "C. Addition and subtraction", "D. Programming"], answer: "C", explanation: "The Pascaline was limited to basic addition and subtraction operations." },
    { topic: "Early Computing Devices", question: "Who invented the Stepped Reckoner?", options: ["A. Alan Turing", "B. Herman Hollerith", "C. Leibniz", "D. Blaise Pascal"], answer: "C", explanation: "Gottfried Wilhelm Leibniz improved the Pascaline to create the Stepped Reckoner." },
    { topic: "Early Computing Devices", question: "The Jacquard Loom used:", options: ["A. Vacuum tubes", "B. Punched cards", "C. Magnetic drums", "D. ICs"], answer: "B", explanation: "Punched cards controlled the pattern of the weave, inspiring early programming concepts." },
    { topic: "Pioneers & Concepts", question: "The Difference Engine was designed by:", options: ["A. Charles Babbage", "B. Alan Turing", "C. Ada Lovelace", "D. John von Neumann"], answer: "A", explanation: "Charles Babbage designed the Difference Engine to calculate polynomial functions." },
    { topic: "Pioneers & Concepts", question: "The Analytical Engine was designed in:", options: ["A. 1822", "B. 1837", "C. 1843", "D. 1890"], answer: "B", explanation: "Babbage proposed the Analytical Engine in 1837, the first general-purpose computer concept." },
    { topic: "Pioneers & Concepts", question: "Who is known as the first programmer?", options: ["A. Grace Hopper", "B. Ada Lovelace", "C. Alan Turing", "D. Herman Hollerith"], answer: "B", explanation: "Ada Lovelace wrote the first published algorithm for the Analytical Engine." },
    { topic: "Pioneers & Concepts", question: "Herman Hollerith used punched cards for:", options: ["A. NASA Missions", "B. Banking", "C. US Census Processing", "D. Military Operations"], answer: "C", explanation: "His tabulating machine reduced the 1890 US Census processing time from years to months." },
    { topic: "Pioneers & Concepts", question: "Who is called the Father of the Computer?", options: ["A. Alan Turing", "B. Bill Gates", "C. Charles Babbage", "D. John von Neumann"], answer: "C", explanation: "Charles Babbage earned this title for his pioneering designs of programmable computers." },
    { topic: "Pioneers & Concepts", question: "Who proposed the Turing Machine?", options: ["A. Alan Turing", "B. Ada Lovelace", "C. Charles Babbage", "D. Gordon Moore"], answer: "A", explanation: "Alan Turing introduced the theoretical Turing Machine in 1936." },
    { topic: "Pioneers & Concepts", question: "Who is known as the Father of Computer Science?", options: ["A. Charles Babbage", "B. Alan Turing", "C. Ted Hoff", "D. Tim Berners-Lee"], answer: "B", explanation: "Turing's mathematical work laid the theoretical foundation for all computing." },
    { topic: "Architecture", question: "The Von Neumann Architecture consists mainly of:", options: ["A. CPU, Memory and I/O", "B. Keyboard, Mouse and Monitor", "C. Internet and Database", "D. RAM and ROM only"], answer: "A", explanation: "Von Neumann defined the core components: Central Processing Unit, Memory, Input/Output." },
    { topic: "Pioneers & Concepts", question: "Who pioneered the concept of loops in programming?", options: ["A. Alan Turing", "B. Charles Babbage", "C. Ada Lovelace", "D. Tim Berners-Lee"], answer: "C", explanation: "Ada Lovelace introduced iterative logic and loops in her notes on the Analytical Engine." },
    { topic: "Computer Generations", question: "First-generation computers used:", options: ["A. Transistors", "B. Integrated Circuits", "C. Vacuum Tubes", "D. Microprocessors"], answer: "C", explanation: "Vacuum tubes were the primary switching component for first-generation machines." },
    { topic: "Computer Generations", question: "ENIAC contained approximately:", options: ["A. 2,300 transistors", "B. 18,000 vacuum tubes", "C. 1 million ICs", "D. 500 processors"], answer: "B", explanation: "ENIAC weighed 30 tons and used over 18,000 vacuum tubes." },
    { topic: "Computer Generations", question: "Which of the following is a first-generation computer?", options: ["A. IBM 1401", "B. ENIAC", "C. Apple I", "D. Intel 4004"], answer: "B", explanation: "ENIAC (1945) is the most famous first-generation computer." },
    { topic: "Computer Generations", question: "First-generation computers were programmed using:", options: ["A. Python", "B. COBOL", "C. Machine Language", "D. Java"], answer: "C", explanation: "Programmers had to write raw binary code directly for these machines." },
    { topic: "Computer Generations", question: "Memory in first-generation computers was stored on:", options: ["A. SSD", "B. Hard Disk", "C. Flash Memory", "D. Magnetic Drums"], answer: "D", explanation: "Rotating magnetic drums were the primary storage medium." },
    { topic: "Computer Generations", question: "The transistor was invented in:", options: ["A. 1945", "B. 1947", "C. 1956", "D. 1965"], answer: "B", explanation: "Bell Labs researchers invented the transistor in 1947." },
    { topic: "Computer Generations", question: "Second-generation computers used:", options: ["A. Vacuum Tubes", "B. ICs", "C. Transistors", "D. Microprocessors"], answer: "C", explanation: "Transistors replaced vacuum tubes for better reliability and efficiency." },
    { topic: "Computer Generations", question: "Which programming language became common in second-generation computers?", options: ["A. Python", "B. Java", "C. COBOL", "D. Kotlin"], answer: "C", explanation: "COBOL and FORTRAN were the first widely used high-level languages." },
    { topic: "Computer Generations", question: "Which is a second-generation computer?", options: ["A. ENIAC", "B. IBM 1401", "C. IBM PC", "D. Apple Macintosh"], answer: "B", explanation: "The IBM 1401 was a popular transistor-based second-generation machine." },
    { topic: "Computer Generations", question: "Third-generation computers used:", options: ["A. Vacuum Tubes", "B. Transistors", "C. Integrated Circuits", "D. Microprocessors"], answer: "C", explanation: "Integrated Circuits packed many transistors onto a single chip." },
    { topic: "Computer Generations", question: "The Integrated Circuit was invented by:", options: ["A. Bill Gates and Paul Allen", "B. Jack Kilby and Robert Noyce", "C. Alan Turing and John von Neumann", "D. Steve Jobs and Steve Wozniak"], answer: "B", explanation: "Kilby and Noyce independently invented the IC in 1958–1959." },
    { topic: "Computer Generations", question: "IBM System/360 belongs to:", options: ["A. First Generation", "B. Second Generation", "C. Third Generation", "D. Fourth Generation"], answer: "C", explanation: "The System/360 series revolutionized third-generation computing." },
    { topic: "Computer Generations", question: "Moore's Law was proposed in:", options: ["A. 1958", "B. 1965", "C. 1971", "D. 1981"], answer: "B", explanation: "Gordon Moore published his famous observation in 1965." },
    { topic: "Computer Generations", question: "Fourth-generation computers are based on:", options: ["A. Vacuum Tubes", "B. Integrated Circuits", "C. Microprocessors", "D. AI Chips"], answer: "C", explanation: "Microprocessors put an entire CPU on one chip." },
    { topic: "Computer Generations", question: "The first commercial microprocessor was:", options: ["A. Intel Pentium", "B. Intel 8080", "C. Intel 4004", "D. ARM Cortex"], answer: "C", explanation: "Released in 1971, the Intel 4004 was the first single-chip processor." },
    { topic: "Internet & Modern Tech", question: "ARPANET was developed in:", options: ["A. 1959", "B. 1969", "C. 1979", "D. 1991"], answer: "B", explanation: "The first ARPANET connection was established in October 1969." },
    { topic: "Internet & Modern Tech", question: "Who invented the World Wide Web?", options: ["A. Bill Gates", "B. Steve Jobs", "C. Tim Berners-Lee", "D. Alan Turing"], answer: "C", explanation: "Tim Berners-Lee created the WWW while working at CERN." },
    { topic: "Internet & Modern Tech", question: "The World Wide Web was introduced in:", options: ["A. 1981", "B. 1985", "C. 1991", "D. 1995"], answer: "C", explanation: "The first public website launched in 1991." },
    { topic: "Internet & Modern Tech", question: "Google was founded in:", options: ["A. 1994", "B. 1995", "C. 1998", "D. 2000"], answer: "C", explanation: "Larry Page and Sergey Brin founded Google in September 1998." },
    { topic: "AI & Computing Trends", question: "IBM Deep Blue defeated:", options: ["A. Magnus Carlsen", "B. Garry Kasparov", "C. Bobby Fischer", "D. Viswanathan Anand"], answer: "B", explanation: "Deep Blue beat world chess champion Garry Kasparov in 1997." },
    { topic: "AI & Computing Trends", question: "ChatGPT became widely known in:", options: ["A. 2018", "B. 2020", "C. 2022", "D. 2024"], answer: "C", explanation: "OpenAI released ChatGPT to the public in November 2022." },
    { topic: "AI & Computing Trends", question: "The AlexNet breakthrough occurred in:", options: ["A. 2008", "B. 2010", "C. 2012", "D. 2015"], answer: "C", explanation: "AlexNet won the 2012 ImageNet competition by a huge margin, sparking the deep learning boom." },
    { topic: "Internet & Modern Tech", question: "AWS was launched in:", options: ["A. 2004", "B. 2006", "C. 2010", "D. 2012"], answer: "B", explanation: "Amazon Web Services launched its first cloud services in 2006." },
    { topic: "Internet & Modern Tech", question: "Microsoft Azure was launched in:", options: ["A. 2008", "B. 2009", "C. 2010", "D. 2011"], answer: "C", explanation: "Microsoft Azure entered public preview in 2010." },
    { topic: "Internet & Modern Tech", question: "Smartphones in use globally by 2024 were approximately:", options: ["A. 3.2 billion", "B. 4.8 billion", "C. 5.5 billion", "D. 6.8 billion"], answer: "D", explanation: "Global smartphone penetration reached roughly 6.8 billion devices in 2024." },
    { topic: "Programming Languages", question: "1GL refers to:", options: ["A. Assembly Language", "B. Machine Language", "C. SQL", "D. Python"], answer: "B", explanation: "First-generation languages are raw binary machine code." },
    { topic: "Programming Languages", question: "2GL refers to:", options: ["A. Assembly Language", "B. Java", "C. Python", "D. FORTRAN"], answer: "A", explanation: "Second-generation languages use human-readable mnemonics for machine instructions." },
    { topic: "Programming Languages", question: "FORTRAN belongs to:", options: ["A. 1GL", "B. 2GL", "C. 3GL", "D. 4GL"], answer: "C", explanation: "FORTRAN is a classic third-generation high-level language." },
    { topic: "Programming Languages", question: "SQL is an example of:", options: ["A. 2GL", "B. 3GL", "C. 4GL", "D. 5GL"], answer: "C", explanation: "Structured Query Language is a third-generation domain-specific language." },
    { topic: "Programming Languages", question: "Prolog is classified as:", options: ["A. 2GL", "B. 3GL", "C. 4GL", "D. 5GL"], answer: "D", explanation: "Prolog is a fifth-generation logic programming language." },
    { topic: "Programming Languages", question: "Which programming language dominates AI today according to the lecture?", options: ["A. COBOL", "B. Pascal", "C. Python", "D. BASIC"], answer: "C", explanation: "Python leads in AI due to its rich ecosystem of machine learning libraries." },
    { topic: "Hardware & Design", question: "VHDL and Verilog are:", options: ["A. Databases", "B. Operating Systems", "C. Hardware Description Languages", "D. Browsers"], answer: "C", explanation: "These languages describe and design digital hardware circuits." },
    { topic: "Hardware & Design", question: "FPGA programming commonly uses:", options: ["A. Java", "B. HTML", "C. VHDL and Verilog", "D. PHP"], answer: "C", explanation: "Field Programmable Gate Arrays are configured using hardware description languages." },
    { topic: "Architecture", question: "Most modern computers are based on:", options: ["A. Harvard Architecture", "B. Von Neumann Architecture", "C. Analog Architecture", "D. Quantum Architecture"], answer: "B", explanation: "Nearly all general-purpose computers use the von Neumann stored-program model." },
    { topic: "Hardware & Design", question: "Which of the following is an Instruction Set Architecture?", options: ["A. MATLAB", "B. ARM", "C. ROS", "D. ArcGIS"], answer: "B", explanation: "ARM is one of the most widely used processor instruction set architectures." },
    { topic: "Software & Tools", question: "Linux is an example of:", options: ["A. Database Software", "B. Operating System", "C. Compiler", "D. Browser"], answer: "B", explanation: "Linux is a free, open-source operating system kernel." },
    { topic: "Software & Tools", question: "Docker is primarily used for:", options: ["A. Networking", "B. Simulation", "C. Containerization", "D. CAD Design"], answer: "C", explanation: "Docker packages software and dependencies into portable containers." },
    { topic: "Engineering Automation", question: "PLC stands for:", options: ["A. Programmable Logic Controller", "B. Process Logic Computer", "C. Power Line Circuit", "D. Program Level Controller"], answer: "A", explanation: "PLCs are specialized industrial computers for machine control." },
    { topic: "Engineering Automation", question: "SCADA stands for:", options: ["A. Supervisory Control and Data Acquisition", "B. Software Control and Data Analysis", "C. System Control and Data Access", "D. Smart Computing Data Architecture"], answer: "A", explanation: "SCADA systems monitor and control large-scale industrial processes." },
    { topic: "Engineering Automation", question: "ROS stands for:", options: ["A. Robotics Open Software", "B. Robot Operating System", "C. Real Operating System", "D. Robotic Online Service"], answer: "B", explanation: "ROS is a flexible framework for writing robot software." },
    { topic: "Engineering Tools", question: "MATLAB and Simulink are commonly used for:", options: ["A. Accounting", "B. Database Management", "C. System Modeling and Controller Design", "D. Graphic Design"], answer: "C", explanation: "These tools are standard for mathematical modeling and control systems." },
    { topic: "Algorithms", question: "Which algorithm is widely used for autonomous navigation?", options: ["A. COBOL", "B. SQL", "C. Dijkstra Algorithm", "D. Pascal Algorithm"], answer: "C", explanation: "Dijkstra's algorithm finds the shortest path for routing and navigation." },
    { topic: "Agricultural Applications", question: "GPS-guided tractors can save approximately:", options: ["A. 2–5% fuel", "B. 10–15% fuel", "C. 20–25% fuel", "D. 30–35% fuel"], answer: "B", explanation: "Precision guidance eliminates overlapping passes to reduce fuel use." },
    { topic: "Agricultural Applications", question: "VRT stands for:", options: ["A. Variable Rate Technology", "B. Visual Routing Technology", "C. Variable Relay Technique", "D. Virtual Robot Technology"], answer: "A", explanation: "VRT adjusts fertilizer/chemical application based on real-time field conditions." },
    { topic: "Agricultural Applications", question: "NDVI is used to:", options: ["A. Analyze computer networks", "B. Measure internet speed", "C. Map crop health", "D. Design robots"], answer: "C", explanation: "The Normalized Difference Vegetation Index measures plant health from satellite imagery." },
    { topic: "Agricultural Applications", question: "Which software is commonly used for GIS mapping in agriculture?", options: ["A. MATLAB", "B. ArcGIS", "C. AutoCAD", "D. ANSYS"], answer: "B", explanation: "ArcGIS is the leading Geographic Information System software." },
    { topic: "Agricultural Applications", question: "AI pest detection commonly uses:", options: ["A. CNNs", "B. SQL", "C. COBOL", "D. Pascal"], answer: "A", explanation: "Convolutional Neural Networks excel at image recognition for pest detection." },
    { topic: "Mining & Geology", question: "Surpac is used for:", options: ["A. Geological Modelling", "B. CAD Design", "C. Programming", "D. Networking"], answer: "A", explanation: "Surpac creates 3D geological models and mine designs." },
    { topic: "Mining & Geology", question: "Leapfrog Geo is used for:", options: ["A. Accounting", "B. Database Management", "C. 3D Geological Modelling", "D. Robotics"], answer: "C", explanation: "Leapfrog builds accurate 3D models of subsurface geology." },
    { topic: "Mining & Geology", question: "LiDAR drones generate:", options: ["A. Databases", "B. Point Clouds", "C. Operating Systems", "D. Web Pages"], answer: "B", explanation: "LiDAR creates millions of 3D coordinate points to map terrain." },
    { topic: "Mining & Geology", question: "Wenco is an example of:", options: ["A. CAD Software", "B. Fleet Management System", "C. Programming Language", "D. GIS Software"], answer: "B", explanation: "Wenco tracks and manages mining truck fleets." },
    { topic: "Civil Engineering", question: "ETABS is mainly used for:", options: ["A. Structural Analysis", "B. Database Design", "C. Programming", "D. Networking"], answer: "A", explanation: "ETABS designs and analyzes multi-story building structures." },
    { topic: "Civil Engineering", question: "STAAD.Pro is based on:", options: ["A. Artificial Intelligence", "B. GIS", "C. Finite Element Method", "D. Machine Learning"], answer: "C", explanation: "The Finite Element Method calculates stress and displacement in structures." },
    { topic: "Civil Engineering", question: "SAFE is used for:", options: ["A. Foundation Design", "B. Website Design", "C. Programming", "D. Robotics"], answer: "A", explanation: "SAFE analyzes and designs concrete foundations and slabs." },
    { topic: "Civil Engineering", question: "Revit is associated with:", options: ["A. CFD", "B. BIM", "C. PLC", "D. Database Management"], answer: "B", explanation: "Revit is the leading Building Information Modeling (BIM) tool." },
    { topic: "Civil Engineering", question: "HEC-RAS is used for:", options: ["A. Hydraulic Modelling", "B. Software Development", "C. AI Training", "D. Networking"], answer: "A", explanation: "HEC-RAS simulates river flow and flood behavior." },
    { topic: "Civil Engineering", question: "Smart bridges use embedded:", options: ["A. Monitors", "B. Sensors", "C. Routers", "D. CPUs Only"], answer: "B", explanation: "Sensors monitor strain, vibration, and structural health in real time." },
    { topic: "Chemical & Process", question: "ASPEN HYSYS is used for:", options: ["A. Process Simulation", "B. CAD Design", "C. GIS Analysis", "D. Robotics"], answer: "A", explanation: "HYSYS models oil, gas, and chemical processing plants." },
    { topic: "Chemical & Process", question: "DWSIM is:", options: ["A. A Database", "B. An Open-Source Process Simulator", "C. A CAD Package", "D. A Programming Language"], answer: "B", explanation: "DWSIM is a free alternative to ASPEN HYSYS." },
    { topic: "Chemical & Process", question: "Peng–Robinson is a:", options: ["A. CAD Tool", "B. Programming Language", "C. Equation of State Model", "D. GIS Package"], answer: "C", explanation: "It predicts fluid properties like pressure and volume." },
    { topic: "Mechanical & Manufacturing", question: "OpenFOAM is widely used for:", options: ["A. Accounting", "B. CFD Analysis", "C. Database Design", "D. Office Applications"], answer: "B", explanation: "OpenFOAM simulates fluid flow and heat transfer." },
    { topic: "Chemical & Process", question: "APC stands for:", options: ["A. Automatic Process Controller", "B. Advanced Process Control", "C. Applied Programming Control", "D. Automated Production Centre"], answer: "B", explanation: "Advanced Process Control optimizes complex industrial operations." },
    { topic: "Mechanical & Manufacturing", question: "SolidWorks is primarily a:", options: ["A. CAD Software", "B. Spreadsheet Package", "C. Browser", "D. Database"], answer: "A", explanation: "SolidWorks creates 3D mechanical designs." },
    { topic: "Mechanical & Manufacturing", question: "CATIA is widely used in:", options: ["A. Agriculture", "B. Aerospace and Automotive Industries", "C. Banking", "D. Education"], answer: "B", explanation: "CATIA designs aircraft, cars, and other complex products." },
    { topic: "Mechanical & Manufacturing", question: "Mastercam is used for:", options: ["A. CNC Toolpath Generation", "B. Cloud Computing", "C. Networking", "D. AI Development"], answer: "A", explanation: "Mastercam generates instructions for CNC machining." },
    { topic: "Mechanical & Manufacturing", question: "ANSYS Mechanical is used for:", options: ["A. FEA Analysis", "B. Accounting", "C. Programming", "D. GIS Mapping"], answer: "A", explanation: "Finite Element Analysis tests strength and deformation." },
    { topic: "Mechanical & Manufacturing", question: "Which software is commonly used for CFD?", options: ["A. OpenFOAM", "B. Excel", "C. Word", "D. PowerPoint"], answer: "A", explanation: "Computational Fluid Dynamics tools like OpenFOAM simulate fluid behavior." },
    { topic: "Mechanical & Manufacturing", question: "ADAMS software is used for:", options: ["A. Multibody Dynamics", "B. Database Management", "C. Networking", "D. Programming"], answer: "A", explanation: "ADAMS simulates motion of connected mechanical parts." },
    { topic: "Management & Data", question: "CPLEX is mainly used for:", options: ["A. Optimization Problems", "B. CAD Design", "C. GIS Mapping", "D. Robotics"], answer: "A", explanation: "CPLEX solves complex mathematical optimization models." },
    { topic: "Management & Data", question: "Microsoft Project is used for:", options: ["A. Programming", "B. Project Scheduling", "C. Database Design", "D. Networking"], answer: "B", explanation: "It plans and tracks engineering project timelines." },
    { topic: "Management & Data", question: "SPC stands for:", options: ["A. Software Process Control", "B. Statistical Process Control", "C. Smart Production Centre", "D. System Programming Control"], answer: "B", explanation: "SPC uses statistics to maintain consistent manufacturing quality." },
    { topic: "Management & Data", question: "Six Sigma uses:", options: ["A. DMAIC", "B. SQL", "C. PLC", "D. CFD"], answer: "A", explanation: "Define, Measure, Analyze, Improve, Control is the Six Sigma framework." },
    { topic: "Management & Data", question: "Arena software is used for:", options: ["A. Database Design", "B. Discrete Event Simulation", "C. Networking", "D. Robotics"], answer: "B", explanation: "Arena simulates factory operations and workflow." },
    { topic: "Management & Data", question: "ERP stands for:", options: ["A. Engineering Resource Planning", "B. Enterprise Resource Planning", "C. Electronic Resource Processing", "D. Enterprise Routing Protocol"], answer: "B", explanation: "ERP integrates finance, production, and supply chain data." },
    { topic: "Management & Data", question: "Which programming language is widely used for data analysis and machine learning?", options: ["A. COBOL", "B. BASIC", "C. Python", "D. Pascal"], answer: "C", explanation: "Python dominates modern data science and AI development." },
    { topic: "Management & Data", question: "Pandas and NumPy are used for:", options: ["A. Data Analysis", "B. CAD Design", "C. GIS Mapping", "D. Networking"], answer: "A", explanation: "These libraries handle large datasets and mathematical calculations." },
    { topic: "Management & Data", question: "TensorFlow is used for:", options: ["A. Machine Learning", "B. CAD Design", "C. GIS Mapping", "D. Accounting"], answer: "A", explanation: "TensorFlow builds and trains neural networks." },
    { topic: "Management & Data", question: "GitHub is primarily used for:", options: ["A. Version Control", "B. Accounting", "C. CAD Design", "D. Robotics"], answer: "A", explanation: "GitHub tracks changes and collaborates on code." },
    { topic: "Management & Data", question: "Jira is mainly used for:", options: ["A. Networking", "B. Database Design", "C. Project Management", "D. CAD Modelling"], answer: "C", explanation: "Jira tracks tasks and bugs for software and engineering projects." },
    { topic: "Management & Data", question: "AWS, Azure and Google Cloud are examples of:", options: ["A. Programming Languages", "B. Cloud Platforms", "C. Databases", "D. Operating Systems"], answer: "B", explanation: "These platforms provide on-demand computing resources." },
    { topic: "Future Trends", question: "Industry 4.0 heavily relies on:", options: ["A. Vacuum Tubes", "B. Punch Cards", "C. Industrial Internet of Things (IIoT)", "D. Magnetic Drums"], answer: "C", explanation: "Connected sensors and smart machines drive modern manufacturing." },
    { topic: "Future Trends", question: "Cobots are:", options: ["A. Coding Robots", "B. Computer Bots", "C. Collaborative Robots", "D. Cloud Robots"], answer: "C", explanation: "Cobots work safely alongside human workers." },
    { topic: "Future Trends", question: "A Digital Twin is:", options: ["A. A Physical Machine", "B. A Virtual Replica of a System", "C. A Database Server", "D. A Programming Tool"], answer: "B", explanation: "Digital twins mirror real systems for testing and monitoring." },
    { topic: "Future Trends", question: "Quantum Computing is expected to revolutionize:", options: ["A. Optimization and Simulation", "B. Typing Documents", "C. Printing", "D. Data Entry"], answer: "A", explanation: "Quantum computers excel at problems too complex for classical systems." },
    { topic: "Future Trends", question: "Engineers with skills in programming, AI and data analysis are expected to:", options: ["A. Become Irrelevant", "B. Avoid Technology", "C. Lead the Engineering Industry", "D. Stop Using Computers"], answer: "C", explanation: "Digital literacy is now a core requirement for modern engineering." },
    { topic: "Summary", question: "Which of the following is common to all engineering disciplines?", options: ["A. CAD and Digital Design", "B. Simulation and Modelling", "C. Artificial Intelligence", "D. All of the Above"], answer: "D", explanation: "Computing tools are now essential across every engineering field." },
    { topic: "Summary", question: "Computing has transformed engineering from:", options: ["A. Science to Art", "B. Art to Data-Driven Science", "C. Agriculture to Industry", "D. Business to Science"], answer: "B", explanation: "Engineering has shifted from rule-of-thumb practice to evidence-based computation." },
    { topic: "Electrical Engineering Pathways", question: "Which of the following is NOT a career path in Electrical Engineering?", options: ["A. Smart Grid Engineer", "B. Renewable Energy Engineer", "C. Software Tester", "D. Power Electronics Engineer"], answer: "C", explanation: "Software Tester belongs to software development/IT, not core electrical engineering." },
    { topic: "Electrical Engineering Pathways", question: "Which programming language is recommended for Smart Grid Engineers?", options: ["A. Java", "B. Python", "C. PHP", "D. Ruby"], answer: "B", explanation: "Python has rich libraries for grid analysis, data processing, and automation." },
    { topic: "Electrical Engineering Pathways", question: "Which software is commonly used for grid simulation?", options: ["A. AutoCAD", "B. Pandapower", "C. Photoshop", "D. Blender"], answer: "B", explanation: "Pandapower is an open-source tool designed specifically for power system and smart grid simulation." },
    { topic: "Electrical Engineering Pathways", question: "The protocol commonly used in smart grid systems is ______.", options: ["A. HTTP", "B. FTP", "C. IEC 61850", "D. SMTP"], answer: "C", explanation: "IEC 61850 is the international standard communication protocol for electrical substations and smart grids." },
    { topic: "Electrical Engineering Pathways", question: "Renewable Energy Engineers study ______.", options: ["A. Database Management", "B. Solar PV Fundamentals", "C. Computer Graphics", "D. Software Testing"], answer: "B", explanation: "Solar Photovoltaic (PV) systems are a core renewable energy technology." },
    { topic: "Electrical Engineering Pathways", question: "Which of the following is a free software for solar modelling?", options: ["A. PVLib", "B. AutoCAD", "C. MATLAB", "D. CorelDraw"], answer: "A", explanation: "PVLib is an open-source Python library for solar energy system performance modelling." },
    { topic: "Electrical Engineering Pathways", question: "Which device is commonly studied by Power Electronics Engineers?", options: ["A. MOSFET", "B. Printer", "C. Scanner", "D. Router"], answer: "A", explanation: "MOSFET is a key power semiconductor device used for switching and power conversion." },
    { topic: "Electrical Engineering Pathways", question: "LTspice is mainly used for ______.", options: ["A. Networking", "B. Simulation of electronic circuits", "C. Web development", "D. Video editing"], answer: "B", explanation: "LTspice is a free SPICE-based simulator for analyzing analog and power electronic circuits." },
    { topic: "Electrical Engineering Pathways", question: "Which programming language is essential for IoT and Smart Metering Engineers?", options: ["A. COBOL", "B. C/C++", "C. BASIC", "D. Pascal"], answer: "B", explanation: "C/C++ offers low-level hardware control and high efficiency for embedded IoT devices and smart meters." },
    { topic: "Electrical Engineering Pathways", question: "MQTT is an example of a ______ protocol.", options: ["A. Database", "B. Messaging protocol", "C. Operating system", "D. Compiler"], answer: "B", explanation: "MQTT is a lightweight messaging protocol designed for low-bandwidth IoT and machine-to-machine communication." },
    { topic: "Electrical Engineering Pathways", question: "Grafana is mainly used for ______.", options: ["A. PCB Design", "B. Dashboard Visualization", "C. Video Streaming", "D. Database Creation"], answer: "B", explanation: "Grafana builds interactive dashboards to visualize energy, sensor, and system data." },
    { topic: "Electrical Engineering Pathways", question: "Which database is commonly used for time-series energy data?", options: ["A. Oracle", "B. Access", "C. InfluxDB", "D. MongoDB"], answer: "C", explanation: "InfluxDB is optimized for storing and querying time-stamped sensor and energy measurement data." },
    { topic: "Electrical Engineering Pathways", question: "Which machine learning method is used in load forecasting?", options: ["A. LSTM", "B. Bubble Sort", "C. Quick Sort", "D. DFS"], answer: "A", explanation: "Long Short-Term Memory (LSTM) networks excel at analyzing sequential time-series data for power load prediction." },
    { topic: "Electrical Engineering Pathways", question: "SoC in battery systems means ______.", options: ["A. State of Charge", "B. System of Control", "C. Source of Current", "D. Speed of Charging"], answer: "A", explanation: "State of Charge indicates the remaining energy level in a battery relative to its full capacity." },
    { topic: "Electrical Engineering Pathways", question: "PyBaMM is used for ______.", options: ["A. Battery Modelling", "B. PCB Fabrication", "C. Robotics Simulation", "D. Database Design"], answer: "A", explanation: "Python Battery Mathematical Modelling (PyBaMM) simulates battery performance and behavior." },
    { topic: "Computer Engineering", question: "Which of the following is an embedded communication protocol?", options: ["A. SPI", "B. HTML", "C. CSS", "D. XML"], answer: "A", explanation: "Serial Peripheral Interface (SPI) is a standard protocol for communication between microcontrollers and peripheral chips." },
    { topic: "Computer Engineering", question: "FreeRTOS is an example of ______.", options: ["A. Database", "B. Real-Time Operating System", "C. Spreadsheet", "D. Browser"], answer: "B", explanation: "FreeRTOS is an open-source OS designed for deterministic real-time execution on embedded devices." },
    { topic: "Computer Engineering", question: "Verilog is primarily used for ______.", options: ["A. Database Management", "B. Web Design", "C. Digital Circuit Design", "D. Networking"], answer: "C", explanation: "Verilog is a hardware description language used to model and design digital logic circuits." },
    { topic: "Computer Engineering", question: "FPGA stands for ______.", options: ["A. Fully Programmed Gate Array", "B. Field Programmable Gate Array", "C. Fast Program Generator Application", "D. Field Processor Graphics Application"], answer: "B", explanation: "FPGAs are integrated circuits that can be reconfigured after manufacturing to implement custom hardware designs." },
    { topic: "Computer Engineering", question: "Which tool is used for waveform viewing?", options: ["A. GTKWave", "B. Wireshark", "C. GNS3", "D. MATLAB"], answer: "A", explanation: "GTKWave displays and analyzes digital signal waveforms from circuit simulations." },
    { topic: "Computer Engineering", question: "TinyML mainly involves deploying machine learning models on ______.", options: ["A. Supercomputers", "B. Mainframes", "C. Microcontrollers", "D. Servers"], answer: "C", explanation: "TinyML runs lightweight AI models directly on low-power microcontrollers without cloud connectivity." },
    { topic: "Computer Engineering", question: "TensorFlow Lite Micro is designed for ______.", options: ["A. Databases", "B. Embedded Machine Learning", "C. Video Editing", "D. Computer Graphics"], answer: "B", explanation: "This framework optimizes TensorFlow models for resource-constrained embedded devices." },
    { topic: "Computer Engineering", question: "AES and RSA are examples of ______.", options: ["A. Programming Languages", "B. Communication Devices", "C. Cryptographic Algorithms", "D. Operating Systems"], answer: "C", explanation: "AES and RSA are standard algorithms used to encrypt data and secure communications." },
    { topic: "Computer Engineering", question: "Wireshark is mainly used for ______.", options: ["A. Network Analysis", "B. PCB Design", "C. Database Management", "D. Robotics"], answer: "A", explanation: "Wireshark captures and inspects network packets for troubleshooting and security auditing." },
    { topic: "Computer Engineering", question: "The OSI model consists of ______ layers.", options: ["A. 4", "B. 5", "C. 6", "D. 7"], answer: "D", explanation: "The Open Systems Interconnection model defines 7 abstraction layers for network communication." },
    { topic: "Computer Engineering", question: "Which software is used for network simulation?", options: ["A. Packet Tracer", "B. Blender", "C. AutoCAD", "D. Excel"], answer: "A", explanation: "Cisco Packet Tracer designs and simulates network topologies and protocols." },
    { topic: "Computer Engineering", question: "KiCad is used for ______.", options: ["A. PCB Design", "B. Networking", "C. Data Analysis", "D. Robotics"], answer: "A", explanation: "KiCad is a free, open-source suite for designing Printed Circuit Boards." },
    { topic: "Mechatronics Engineering", question: "ROS2 is primarily associated with ______.", options: ["A. Database Systems", "B. Robotics", "C. Accounting", "D. Networking"], answer: "B", explanation: "Robot Operating System 2 is a framework for building complex robotic systems." },
    { topic: "Mechatronics Engineering", question: "PID controllers are widely used in ______.", options: ["A. Database Management", "B. Control Systems", "C. Accounting", "D. Web Development"], answer: "B", explanation: "Proportional-Integral-Derivative controllers regulate variables like speed, temperature, and position in automation." },
    { topic: "Mechatronics Engineering", question: "PLC stands for ______.", options: ["A. Programmable Logic Controller", "B. Personal Logic Computer", "C. Process Language Controller", "D. Program Loader Circuit"], answer: "A", explanation: "PLCs are rugged industrial computers that control machinery and manufacturing processes." },
    { topic: "Mechatronics Engineering", question: "OPC-UA is commonly used in ______.", options: ["A. Industrial Automation", "B. Video Editing", "C. Accounting", "D. Computer Gaming"], answer: "A", explanation: "OPC Unified Architecture is a standard protocol for secure industrial data exchange." },
    { topic: "Mechatronics Engineering", question: "A Digital Twin is basically a ______.", options: ["A. Physical Machine", "B. Virtual representation of a physical system", "C. Database", "D. Programming Language"], answer: "B", explanation: "Digital twins mirror real-world systems to simulate performance and predict issues." },
    { topic: "Mechatronics Engineering", question: "OpenCV is mainly used in ______.", options: ["A. Computer Vision", "B. Networking", "C. Accounting", "D. Database Management"], answer: "A", explanation: "Open Source Computer Vision Library processes images and video for detection and analysis." },
    { topic: "Mechatronics Engineering", question: "YOLO is mainly used for ______.", options: ["A. Database Queries", "B. Object Detection", "C. Video Editing", "D. Computer Networking"], answer: "B", explanation: "You Only Look Once is a fast algorithm for detecting and classifying objects in images." },
    { topic: "Mechatronics Engineering", question: "PLA and ABS are materials commonly used in ______.", options: ["A. Networking", "B. Cloud Computing", "C. 3D Printing", "D. Database Design"], answer: "C", explanation: "Polylactic Acid and Acrylonitrile Butadiene Styrene are popular filaments for additive manufacturing." },
    { topic: "Mechanical Engineering", question: "FEA stands for ______.", options: ["A. Finite Element Analysis", "B. Fundamental Engineering Application", "C. Fast Electrical Algorithm", "D. Flexible Engineering Analysis"], answer: "A", explanation: "FEA simulates how structures react to stress, heat, and vibration." },
    { topic: "Mechanical Engineering", question: "CFD stands for ______.", options: ["A. Computational Fluid Dynamics", "B. Computer File Development", "C. Complex Functional Design", "D. Circuit Flow Dynamics"], answer: "A", explanation: "CFD numerically analyzes fluid flow, heat transfer, and aerodynamics." },
    { topic: "Mechanical Engineering", question: "Which equation is fundamental in fluid mechanics?", options: ["A. Euler Equation", "B. Navier-Stokes Equation", "C. Quadratic Equation", "D. Maxwell Equation"], answer: "B", explanation: "The Navier-Stokes equations describe the motion of viscous fluids." },
    { topic: "Mechanical Engineering", question: "FFT in predictive maintenance means ______.", options: ["A. Fast Fourier Transform", "B. Fast Function Tool", "C. Fourier File Transfer", "D. Fundamental Frequency Test"], answer: "A", explanation: "FFT converts vibration signals to identify fault frequencies in rotating machinery." },
    { topic: "Mechanical Engineering", question: "HVAC stands for ______.", options: ["A. Heat Ventilation and Air Control", "B. Heating, Ventilation and Air Conditioning", "C. High Voltage Air Conditioning", "D. Heat Value and Air Control"], answer: "B", explanation: "HVAC systems control indoor temperature, air quality, and humidity." },
    { topic: "Innovation & Market", question: "Africa leapfrogs by skipping ______ systems.", options: ["A. Digital", "B. Legacy", "C. Renewable", "D. Electrical"], answer: "B", explanation: "Leapfrogging means adopting modern technology without building outdated legacy infrastructure first." },
    { topic: "Innovation & Market", question: "The innovation mindset should start with the ______.", options: ["A. Technology", "B. Funding", "C. Problem", "D. Investor"], answer: "C", explanation: "Successful innovation begins by clearly defining the problem users face, not starting with available technology." },
    { topic: "Innovation & Market", question: "The first stage from concept to market is ______.", options: ["A. Research", "B. Problem Identification", "C. Pitching", "D. Scaling"], answer: "B", explanation: "You must identify and validate the core problem before designing a solution." },
    { topic: "Innovation & Market", question: "MVP stands for ______.", options: ["A. Maximum Value Product", "B. Minimum Viable Product", "C. Market Value Proposal", "D. Main Venture Plan"], answer: "B", explanation: "An MVP is the simplest version of a product that delivers enough value to real users." },
    { topic: "Innovation & Market", question: "The Build-Measure-Learn cycle is associated with ______.", options: ["A. Research", "B. MVP Development", "C. Accounting", "D. Networking"], answer: "B", explanation: "This iterative cycle is central to the Lean Startup method for building MVPs." },
    { topic: "Innovation & Market", question: "According to the notes, field testing should last for a minimum of ______ days.", options: ["A. 7", "B. 14", "C. 21", "D. 30"], answer: "D", explanation: "30 days of real-world use helps uncover durability, usability, and adoption issues." },
    { topic: "Innovation & Market", question: "The Business Model Canvas contains ______ blocks.", options: ["A. 5", "B. 7", "C. 9", "D. 12"], answer: "C", explanation: "The 9 blocks cover value proposition, customers, channels, finances, and partners." },
    { topic: "Innovation & Market", question: "PAYG means ______.", options: ["A. Pay As You Go", "B. Pay All Yearly Gains", "C. Product Access Yield Group", "D. Payment and Yield Growth"], answer: "A", explanation: "PAYG lets users pay for services in small installments as they use them." },
    { topic: "Innovation & Market", question: "Investors fund ______ as much as ideas.", options: ["A. Technology", "B. Confidence", "C. Programming", "D. Hardware"], answer: "B", explanation: "Investors invest in capable teams and execution confidence as much as the product idea." },
    { topic: "Innovation & Market", question: "According to the notes, solo founders almost always fail because one person cannot master engineering, sales, finance and operations simultaneously.", options: ["A. True", "B. False"], answer: "A", explanation: "Diverse team skills reduce risk and cover all critical business functions." },
    { topic: "Civil Engineering Pathways", question: "Which of the following is a career path in Civil Engineering?", options: ["A. Embedded Systems Engineer", "B. BIM Manager/Digital Engineer", "C. Cybersecurity Engineer", "D. Power Electronics Engineer"], answer: "B", explanation: "Building Information Modelling is a core digital role in modern civil engineering." },
    { topic: "Civil Engineering Pathways", question: "BIM stands for ______.", options: ["A. Building Information Modelling", "B. Basic Information Management", "C. Building Integrated Management", "D. Building Innovation Method"], answer: "A", explanation: "BIM creates 3D digital models that integrate structural, architectural, and systems data." },
    { topic: "Civil Engineering Pathways", question: "Which software is commonly used for BIM projects?", options: ["A. MATLAB", "B. AutoCAD Revit", "C. Wireshark", "D. LTspice"], answer: "B", explanation: "Autodesk Revit is the industry-leading BIM design and documentation tool." },
    { topic: "Civil Engineering Pathways", question: "Which of these is an example of cloud collaboration in BIM?", options: ["A. GitHub", "B. BIM 360", "C. Oracle", "D. GNS3"], answer: "B", explanation: "BIM 360 lets teams access, review, and manage models online from anywhere." },
    { topic: "Civil Engineering Pathways", question: "In BIM, LOD means ______.", options: ["A. Level of Development", "B. Level of Design", "C. Logic of Design", "D. Length of Development"], answer: "A", explanation: "LOD defines how detailed and reliable the model information is at each project stage." },
    { topic: "African Tech Opportunities", question: "Which African sector opportunity includes solar microgrids and smart meters?", options: ["A. Healthcare", "B. Agriculture", "C. Energy", "D. Education"], answer: "C", explanation: "Energy access and grid modernization are key priority areas across Africa." },
    { topic: "African Tech Opportunities", question: "Telemedicine belongs to which sector?", options: ["A. Fintech", "B. Logistics", "C. Education", "D. Healthcare"], answer: "D", explanation: "Telemedicine delivers medical services remotely using digital tools." },
    { topic: "African Tech Opportunities", question: "Mobile wallets and USSD credit are opportunities in ______.", options: ["A. Fintech", "B. Agriculture", "C. Healthcare", "D. Logistics"], answer: "A", explanation: "Financial technology innovations expand access to payments and banking." },
    { topic: "African Tech Opportunities", question: "Offline-first platforms and AI tutoring belong to ______.", options: ["A. Energy", "B. Education", "C. Fintech", "D. Healthcare"], answer: "B", explanation: "EdTech solutions improve learning access and outcomes." },
    { topic: "African Tech Opportunities", question: "Route optimisation and freight matching are opportunities in ______.", options: ["A. Agriculture", "B. Logistics", "C. Energy", "D. Healthcare"], answer: "B", explanation: "Logistics tech reduces costs and delays in moving goods across the continent." },
    { topic: "Product Design & Validation", question: "According to the notes, engineers should start with the ______ and not the technology.", options: ["A. Funding", "B. Customer", "C. Problem", "D. Market"], answer: "C", explanation: "Technology is only a tool to solve real, verified problems." },
    { topic: "Product Design & Validation", question: "Which of these is a discovery method for identifying problems?", options: ["A. Guesswork", "B. Immersion", "C. Random Selection", "D. Assumption"], answer: "B", explanation: "Immersion means living or working in the user's environment to understand their needs deeply." },
    { topic: "Product Design & Validation", question: "Competitor analysis tries to answer the question:", options: ["A. Who is solving this already?", "B. How much money is available?", "C. Who is the richest investor?", "D. Which country has the best economy?"], answer: "A", explanation: "Competitor analysis identifies existing solutions, gaps, and differentiators." },
    { topic: "Product Design & Validation", question: "The most valuable research finding is understanding why previous solutions ______.", options: ["A. Were expensive", "B. Failed in Africa", "C. Used technology", "D. Were complicated"], answer: "B", explanation: "Learning from past failures avoids repeating mistakes and builds local relevance." },
    { topic: "Product Design & Validation", question: "Design thinking is ______.", options: ["A. Linear", "B. One-time", "C. Iterative", "D. Sequential only"], answer: "C", explanation: "Design thinking repeats empathize, define, ideate, prototype, and test to improve solutions." },
    { topic: "Product Design & Validation", question: "During ideation, engineers should generate at least ______ ideas before filtering.", options: ["A. 10", "B. 20", "C. 30", "D. 50+"], answer: "D", explanation: "Generating many ideas first unlocks creativity before narrowing to the best options." },
    { topic: "Product Design & Validation", question: "The simplest version that delivers core value is called ______.", options: ["A. Prototype", "B. MVP", "C. Beta Version", "D. Demo System"], answer: "B", explanation: "An MVP focuses only on what users need most, avoiding unnecessary features." },
    { topic: "Product Design & Validation", question: "Which of these is a core feature of a smart prepaid meter MVP?", options: ["A. Predictive Analytics", "B. Cloud Dashboard", "C. Accurate Measurement", "D. Social Media Integration"], answer: "C", explanation: "Reliable energy measurement is the essential core function of a meter." },
    { topic: "Product Design & Validation", question: "Which stage follows implementation?", options: ["A. Field Testing", "B. Ideation", "C. Research", "D. Problem Identification"], answer: "A", explanation: "After building the product, you test it in real user environments." },
    { topic: "Product Design & Validation", question: "Lab success does not always guarantee ______.", options: ["A. Business Success", "B. Real-world Success", "C. Funding", "D. Marketing"], answer: "B", explanation: "Controlled lab conditions often differ from harsh, unpredictable real-world environments." },
    { topic: "Product Design & Validation", question: "Which African environmental factor can destroy unprotected electronics?", options: ["A. Rainfall", "B. Wind", "C. Voltage Swings", "D. Snowfall"], answer: "C", explanation: "Unstable power grids cause surges and drops that damage sensitive hardware." },
    { topic: "Product Design & Validation", question: "A software that assumes 4G connectivity may fail in areas with only ______.", options: ["A. Wi-Fi", "B. Fibre", "C. 2G", "D. Satellite"], answer: "C", explanation: "Many rural and underserved areas still rely on slower 2G networks." },
    { topic: "Business Models & Funding", question: "The Business Model Canvas contains how many blocks?", options: ["A. 5", "B. 7", "C. 8", "D. 9"], answer: "D", explanation: "The 9-block framework covers all key parts of a sustainable business." },
    { topic: "Business Models & Funding", question: "Which pricing model involves daily micropayments?", options: ["A. Subscription", "B. Transaction Fee", "C. PAYG", "D. Institutional Pricing"], answer: "C", explanation: "Pay-As-You-Go makes high-value products affordable for low-income users." },
    { topic: "Business Models & Funding", question: "Which pricing model charges a predictable monthly fee?", options: ["A. Subscription", "B. One-Time Payment", "C. PAYG", "D. Transaction Fee"], answer: "A", explanation: "Recurring subscriptions create steady revenue and long-term user relationships." },
    { topic: "Business Models & Funding", question: "In a transaction fee model, the platform takes a ______ of each deal.", options: ["A. Salary", "B. Percentage", "C. Grant", "D. Loan"], answer: "B", explanation: "Platforms earn revenue by taking a small cut of every transaction they facilitate." },
    { topic: "Business Models & Funding", question: "According to the notes, branding should focus on ______ first.", options: ["A. Aesthetics", "B. Technology", "C. Trust", "D. Marketing"], answer: "C", explanation: "Users adopt new solutions only when they trust they will work reliably." },
    { topic: "Business Models & Funding", question: "The sequence of an effective pitch is Hook → Solution → Traction → ______.", options: ["A. Funding", "B. Ask", "C. Team Formation", "D. Testing"], answer: "B", explanation: "Always end with a clear, specific request for what you need next." },
    { topic: "Business Models & Funding", question: "Which funding source comes first?", options: ["A. Accelerator", "B. Venture Capital", "C. Grants", "D. Public Listing"], answer: "C", explanation: "Grants provide non-dilutive funding at the earliest, highest-risk stages." },
    { topic: "Business Models & Funding", question: "A working project built in 48 hours can outweigh a high GPA for tech employers because of ______.", options: ["A. Portfolio", "B. Grades", "C. Attendance", "D. Certification"], answer: "A", explanation: "Demonstrated skills and completed projects prove ability better than academic grades alone." },
    { topic: "Business Models & Funding", question: "Which hackathon opportunity is organised by NITDA and Wema Bank?", options: ["A. DevFest", "B. Hackaholics", "C. NASA Space Apps", "D. Hult Prize"], answer: "B", explanation: "Hackaholics is a leading Nigerian tech innovation competition." },
    { topic: "Business Models & Funding", question: "Which hackathon gives up to $1M seed funding to the global winner?", options: ["A. DevFest", "B. ALX Buildathons", "C. Hult Prize", "D. NASA Space Apps"], answer: "C", explanation: "The Hult Prize is known as the 'Nobel Prize for students' for social impact startups." },
    { topic: "Business Models & Funding", question: "Which international hackathon focuses on Earth and space challenges?", options: ["A. Google Solution Challenge", "B. Hult Prize", "C. NASA Space Apps", "D. DevFest"], answer: "C", explanation: "NASA Space Apps invites global teams to solve real space and Earth science problems." },
    { topic: "Business Models & Funding", question: "Which funding programme offers a $5,000 non-refundable grant?", options: ["A. Y Combinator", "B. Bank of Industry", "C. Tony Elumelu Foundation", "D. Microsoft for Startups"], answer: "C", explanation: "The Tony Elumelu Foundation Entrepreneurship Programme supports African startups with seed capital." },
    { topic: "Business Models & Funding", question: "Which funding programme offers loans up to ₦10 million?", options: ["A. Ventures Platform", "B. BOI", "C. Google for Startups", "D. Y Combinator"], answer: "B", explanation: "The Bank of Industry provides financing for Nigerian industrial and tech ventures." },
    { topic: "Business Models & Funding", question: "Which startup programme offers up to $150,000 Azure credits?", options: ["A. Microsoft for Startups", "B. Google for Startups", "C. TEF", "D. BOI"], answer: "A", explanation: "Microsoft for Startups gives cloud resources and technical support to early-stage companies." },
    { topic: "Business Models & Funding", question: "Which accelerator offers $500,000 investment?", options: ["A. Ventures Platform", "B. Y Combinator", "C. TEF", "D. BOI"], answer: "B", explanation: "Y Combinator provides $500k in funding plus intensive mentorship." },
    { topic: "Business Models & Funding", question: "Investors generally avoid solo founders because of ______ risk.", options: ["A. Financial", "B. Market", "C. Key-Man", "D. Technical"], answer: "C", explanation: "Key-man risk means the business depends entirely on one person's presence and skills." },
    { topic: "Founding Teams", question: "Which pillar of a founding team builds the product?", options: ["A. Seller", "B. Operator", "C. Builder", "D. Designer"], answer: "C", explanation: "The Builder leads engineering, coding, and technical development." },
    { topic: "Founding Teams", question: "Which pillar acquires customers and raises funds?", options: ["A. Designer", "B. Builder", "C. Seller", "D. Operator"], answer: "C", explanation: "The Seller drives business development, sales, and investor relations." },
    { topic: "Founding Teams", question: "Which pillar bridges engineering and user needs?", options: ["A. Operator", "B. Designer", "C. Builder", "D. Seller"], answer: "B", explanation: "The Designer ensures the product is usable, intuitive, and solves real user problems." },
    { topic: "Founding Teams", question: "Which pillar manages logistics and day-to-day execution?", options: ["A. Operator", "B. Designer", "C. Builder", "D. Seller"], answer: "A", explanation: "The Operator handles operations, processes, and team coordination." },
    { topic: "Case Studies", question: "Flutterwave’s business model is primarily based on ______.", options: ["A. Subscription", "B. Transaction Fees", "C. Advertising", "D. Grants"], answer: "B", explanation: "Flutterwave earns revenue by charging a small percentage fee on every payment processed." }
];

// === GLOBAL STATE VARIABLES ===
let questions = [];
let userAnswers = [];
let currentQuestionIdx = 0;
let countdownTimer;
let remainingSeconds = 30 * 60; // 15 Minutes

// === SHUFFLE QUESTIONS FUNCTION ===
function shuffleQuestions(array) {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

// === START EXAM FUNCTION ===
function startExam() {
    // Pick 50 random questions from full 102
    questions = shuffleQuestions([...masterQuestions]).slice(0, 50);
    userAnswers = new Array(questions.length).fill(null);
    currentQuestionIdx = 0;
    remainingSeconds = 30 * 60;

    // Switch UI views
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('exam-header').classList.remove('hidden');
    document.getElementById('exam-workspace').classList.remove('hidden');
    document.getElementById('results-workspace').classList.add('hidden');

    renderMatrix();
    loadQuestion(currentQuestionIdx);
    startTimer();
}

// === TIMER FUNCTIONS ===
function startTimer() {
    clearInterval(countdownTimer);
    updateTimerDisplay();
    countdownTimer = setInterval(() => {
        remainingSeconds--;
        updateTimerDisplay();
        if (remainingSeconds <= 0) {
            clearInterval(countdownTimer);
            autoSubmitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(remainingSeconds / 60).toString().padStart(2, '0');
    const seconds = (remainingSeconds % 60).toString().padStart(2, '0');
    document.getElementById('timer-string').innerText = `${minutes}:${seconds}`;
}

// === NAVIGATION MATRIX ===
function renderMatrix() {
    const grid = document.getElementById('matrix-grid');
    grid.innerHTML = '';
    
    questions.forEach((q, index) => {
        const btn = document.createElement('button');
        btn.innerText = index + 1;
        btn.className = `nav-btn ${userAnswers[index] !== null ? 'answered' : 'unanswered'}`;
        if (index === currentQuestionIdx) btn.classList.add('active');
        
        btn.onclick = () => {
            currentQuestionIdx = index;
            loadQuestion(currentQuestionIdx);
            renderMatrix();
        };
        grid.appendChild(btn);
    });
}

// === LOAD CURRENT QUESTION ===
function loadQuestion(idx) {
    const q = questions[idx];
    document.getElementById('question-topic').innerText = q.topic;
    document.getElementById('question-text').innerText = q.question;
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = `option-btn ${userAnswers[idx] === option.charAt(0) ? 'selected' : ''}`;
        btn.innerText = option;
        btn.onclick = () => selectAnswer(idx, option.charAt(0));
        container.appendChild(btn);
    });

    // Enable/disable navigation buttons
    document.getElementById('prev-btn').disabled = idx === 0;
    document.getElementById('next-btn').disabled = idx === questions.length - 1;
}

// === SAVE SELECTED ANSWER ===
function selectAnswer(idx, answerLetter) {
    userAnswers[idx] = answerLetter;
    loadQuestion(idx);
    renderMatrix();
}

// === CHANGE QUESTION (PREV/NEXT) ===
function changeQuestion(direction) {
    const newIdx = currentQuestionIdx + direction;
    if (newIdx >= 0 && newIdx < questions.length) {
        currentQuestionIdx = newIdx;
        loadQuestion(currentQuestionIdx);
        renderMatrix();
    }
}

// === MANUAL SUBMIT CONFIRMATION ===
function triggerManualSubmit() {
    const unanswered = userAnswers.filter(a => a === null).length;
    const confirmMsg = unanswered > 0 
        ? `You have ${unanswered} unanswered question(s).\nAre you sure you want to submit?`
        : "Are you sure you want to submit your exam?";
    
    if (confirm(confirmMsg)) {
        submitExam();
    }
}

// === AUTO SUBMIT WHEN TIME RUNS OUT ===
function autoSubmitExam() {
    alert("Time is up! Your exam has been submitted automatically.");
    submitExam();
}

// === CALCULATE SCORE & SHOW RESULTS ===
function submitExam() {
    clearInterval(countdownTimer);
    let score = 0;
    const correctionsContainer = document.getElementById('corrections-container');
    correctionsContainer.innerHTML = '';

    // Calculate score and build corrections
    questions.forEach((q, idx) => {
        const isCorrect = userAnswers[idx] === q.answer;
        if (isCorrect) score++;

        // Build correction card
        const card = document.createElement('div');
        card.className = `correction-card ${isCorrect ? 'card-correct' : 'card-incorrect'}`;
        card.innerHTML = `
            <span class="badge ${isCorrect ? 'badge-correct' : 'badge-incorrect'}">
                ${isCorrect ? 'CORRECT' : 'INCORRECT'}
            </span>
            <h4>Question ${idx + 1}: ${q.question}</h4>
            <div class="options-review">
                ${q.options.map(opt => {
                    const letter = opt.charAt(0);
                    let classes = 'opt-review';
                    if (letter === q.answer) classes += ' opt-correct';
                    if (letter === userAnswers[idx] && userAnswers[idx] !== q.answer) classes += ' opt-your';
                    return `<div class="${classes}">${opt}</div>`;
                }).join('')}
            </div>
            <div class="explanation-box">
                <strong>Explanation:</strong> ${q.explanation}
            </div>
        `;
        correctionsContainer.appendChild(card);
    });

    // Update score display
    document.getElementById('score-out').innerText = score;

    // Switch to results view
    document.getElementById('exam-header').classList.add('hidden');
    document.getElementById('exam-workspace').classList.add('hidden');
    document.getElementById('results-workspace').classList.remove('hidden');
}

// === RETURN TO START SCREEN ===
function returnToStart() {
    document.getElementById('results-workspace').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
}
