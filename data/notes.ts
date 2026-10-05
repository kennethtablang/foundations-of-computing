import type { Topic } from "./types.ts";

export interface NoteSection {
  title: string;
  points: string[];
}

export const notes: Record<Topic, NoteSection[]> = {
  "03": [
    {
      title: "What is a computer?",
      points: [
        "A programmable computing device that can **process, store, and retrieve** data, following the software's instructions.",
        "The word \"computer\" first meant **a person** who manually carried out calculations.",
        "1940s–1950s: room-sized machines with **thousands of vacuum tubes**, with only a fraction of today's PC power.",
      ],
    },
    {
      title: "Digital vs. Analog",
      points: [
        "**Digital**: a sequential device that handles data **one at a time** in binary **0 and 1**. One transistor = one binary digit.",
        "**Analog**: data is represented by **physical quantities** such as electric voltage.",
        "Analog data is compact but constantly subject to **noise corruption**.",
        "One **capacitor** = one continuous variable (analog). Digital needs **various transistors**.",
        "Analog computers were phased out **shortly after World War II**.",
      ],
    },
    {
      title: "Analog pioneers",
      points: [
        "**James Thomson** (19th century): foundational work; invented the **wheel-and-disc integrator**.",
        "With his brother **Lord Kelvin**, he built a device that integrates a product of two functions.",
        "**Kelvin**: general-purpose machine for **linear differential equations**, plus a **tide-predicting** computer used at the **Port of Liverpool** until the 1960s.",
        "**Vannevar Bush**: the **Differential Analyzer**, the first large-scale, general-purpose analog computer. It weighed **100 tons** and used wheels, discs, shafts, gears, and up to **150 motors**. Set-up took technicians a long time.",
      ],
    },
    {
      title: "Four generations of digital computers",
      points: [
        "**1st – Vacuum tubes**: current flows through a vacuum; three terminals: **cathode, grid, plate**. Examples: ABC (1942), Colossus (1944), ENIAC (mid-1940s), UNIVAC I (1951), Whirlwind (1951), IBM 701 (1953).",
        "**2nd – Transistors**: smaller, cheaper, more reliable. A **three-terminal solid-state** device; the third terminal controls the current between the other two. **University of Manchester** prototype in 1953, full size in 1955.",
        "**3rd – Integrated circuits**: **Jack Kilby**, Texas Instruments, **1958**, using **germanium**. Users had keyboards, monitors, and an **OS**; a central program monitored memory to run several apps.",
        "**4th – Microprocessors**: **Intel 4004** was the first, giving computer functions at chip level (ALU and control unit). Thousands of ICs fit on one silicon chip that fits in the palm.",
      ],
    },
    {
      title: "Key components",
      points: [
        "**Hardware** = physical parts. **Software** = instructions telling the computer what to do.",
        "Three key components: **Input Unit**, **Output Unit**, **CPU**.",
        "**Input**: converts commands to digital language. Keyboard, mouse, scanner, joystick, trackball.",
        "**CPU**: converts human language into machine language. It has three parts:",
        "• **Memory Unit**: saves data immediately; stores input and result data; measured in bits and **bytes (8 bits)**.",
        "• **Control Unit**: the central component; converts human to machine language, maintains data flow, sends commands to the ALU.",
        "• **ALU**: calculations (add, subtract, multiply), **comparison and decision-making**, only when necessary.",
        "**Output**: shows results. **Monitor** (primary), printers, projectors, speakers, headphones, plotters.",
      ],
    },
    {
      title: "Operating systems",
      points: [
        "**OS**: software that controls hardware to make it usable. Handles processors, I/O and communication devices, and data; provides **hardware sharing, error recovery, network communication management**.",
        "Advantages: **Abstraction**, **Executable programs**, **User-friendly**.",
        "Disadvantages: **Volatility** (lose contents), **Expensive** (small orgs), **Unpredictable** (never secure).",
        "**Windows**: Microsoft; Windows 1.0 in **1985** vs. Apple's 1984 GUI; **over 90%** of PCs and laptops; weaker on phones and tablets.",
        "**Mac OS**: Apple, for Macintosh; GUI, multitasking, memory security.",
        "**Android**: Google and the **Open Handset Alliance**; first phone in **late 2008**; the most widely used mobile OS.",
        "**iOS**: Apple; developed from **Mac OS X in 2007**; multitasking in **2010 (iOS 4.0)**.",
      ],
    },
  ],
  "04": [
    {
      title: "The Web",
      points: [
        "A network of web pages found using a **link address**, named for its **interconnected** nature.",
        "Documents connect through **hypertext/hypermedia links** (hyperlinks), so users move smoothly between pages.",
      ],
    },
    {
      title: "History of the Web",
      points: [
        "**Tim Berners-Lee**, a British scientist, invented the WWW in **1989 at CERN**, combining computers, data networks, and hypertext.",
        "Proposals: **March 1989** and **May 1990**. Formalized in **November 1990** with **Robert Cailliau** (a Belgian systems engineer).",
        "By the end of 1990, the first web server and browser ran at CERN on a **NeXT computer**, with a red-ink label: \"This machine is a server. DO NOT POWER IT DOWN!!\"",
        "The first web page went live on **August 6, 1991**: info.cern.ch/hypertext/WWW/TheProject.html.",
        "**March 1991**: available to CERN users. **August 1991**: announced on **Internet newsgroups**.",
        "**1993**: **NCSA** (National Center for Supercomputing Applications) released PC and Macintosh versions.",
      ],
    },
    {
      title: "The Internet",
      points: [
        "A **massive interconnection of networks** connecting millions of computers.",
        "Made of physical cables: **copper telephone wires, TV cables, fiber optics**. Wi-Fi and 3G/4G still rely on them.",
        "Loading a site: computer → **request to server** → server retrieves the site → **sends the data back**.",
      ],
    },
    {
      title: "History of the Internet",
      points: [
        "**1960s**: **Licklider** (1962) proposed a global network. **Kleinrock, Merrill, Roberts**: packet switching → first WAN. **Roberts** published the **ARPANET** plan, the standard for military networking.",
        "**1980s**: **PhoneNet** (1982) linked ARPANET and **Telenet** (first commercial network), allowing email between nations. **DNS** by Mockapetris, Postel, Partridge. **symbolics.com** was the first domain (1984).",
        "**1990s**: ARPANET decommissioned. **HTML and URL** created at CERN. **1995**: Windows 95; Amazon, Yahoo, eBay; **Java** enabled animation.",
        "**2000s**: the **dot-com bubble** (1995–2000) burst; most companies were gone by 2001. **Google** beat Yahoo! and MSN Search. **Wi-Fi** and smartphones emerged.",
      ],
    },
    {
      title: "Web vs. Internet",
      points: [
        "The web is an **application built on the internet**.",
        "Internet = **infrastructure**. Web = **system of information** accessed through it.",
        "Email doesn't need the web; it uses **SMTP** (Simple Mail Transfer Protocol), a secure email relay service.",
      ],
    },
    {
      title: "How they changed the world",
      points: [
        "**Communication**: instant via email and social media. Risk: impulsive messages cause misunderstanding. **Re-think before sending.**",
        "**Information**: e-books, search engines like Google. Risk: fake news and misinformation. **Fact-check with reputable sources.**",
        "**Entertainment**: Facebook, Twitter, Twitch, YouTube Gaming, Netflix, Disney+, Spotify, Apple Music. Risk: lack of human connection and fatigue. **Limit your time.**",
        "**Education**: COVID-19 lockdowns brought video classes and the **NEO eLMS**. Risk: over-reliance. **Focused learning and supervision.**",
      ],
    },
  ],
  "05": [
    {
      title: "Computer networking",
      points: [
        "Links computers to **share resources through the internet**: web browsing, email, file and image sharing, downloading music.",
        "Companies, schools, and agencies use networks for **word processing, scientific computation, and control processing**.",
      ],
    },
    {
      title: "Networks by geography (smallest → largest)",
      points: [
        "**PAN**: smallest; personal devices (earphones-to-smartphone, computer-to-printer).",
        "**LAN**: a building, house, or several buildings in a limited area.",
        "**CAN**: multiple buildings on a campus (universities, large organizations).",
        "**MAN**: city buildings, traffic lights, parking meters, connected **wirelessly**.",
        "**WAN**: cities, provinces, countries; can be made of **LANs and MANs**.",
      ],
    },
    {
      title: "Network architecture",
      points: [
        "A **diagram** of network devices and services that serve the clients' connectivity needs.",
        "Biggest goal of networks: **fulfilling the needs of the client**.",
        "Three enterprise types: **access networks** (users and devices in campuses and branches), **data center networks** (link servers with data and apps), and **WANs** (users to services, e.g., hospital staff to health apps).",
      ],
    },
    {
      title: "OSI model",
      points: [
        "**Open Systems Interconnection**, by the **International Organization for Standardization**, **1984**. An open standard for interlinking different networks.",
        "**Seven layers**, from the physical interface to the application interface. Aims for hardware/software **compatibility** and faster new technologies.",
        "**1 Physical**: electrical and mechanical connections; signal and media.",
        "**2 Data link**: error recovery, flow control, sequencing; the **MAC** layer; flow of data.",
        "**3 Network**: network controller; packets with **routing headers**; addressing and routing.",
        "**4 Transport**: **end-to-end delivery**, message integrity, segmenting and reassembling; error-free packets.",
        "**5 Session**: start, manage, and end connections.",
        "**6 Presentation**: converts code; **compression and encryption**; protocol conversion and data translation.",
        "**7 Application**: works with browsers and email; records the message, understands the request.",
      ],
    },
    {
      title: "Wired vs. wireless",
      points: [
        "**Wired** (cabling and connectors). Pros: faster, inexpensive, no outside interference. Cons: special tools, labor-intensive.",
        "**Wireless** (radio signals; most common at home). Pros: user mobility, simple installation. Cons: security issues, slower.",
      ],
    },
    {
      title: "Network devices",
      points: [
        "**LAN Ethernet cable**: limited by length and durability; too long or poor quality gives a bad signal.",
        "**Hub**: broadcasts data to all connected devices. **Switch**: direct sender-to-destination link for privacy; best for interconnecting.",
        "**Cable modem**: broadband to the ISP over a cable line; needs a **splitter** for cable TV.",
        "**Server**: provides resources, data, services; handles databases, email, shared files.",
        "**Firewall**: monitors traffic using security policies; the barrier between a private network and the public Internet.",
        "**Wireless access point**: links wireless devices to wired LANs; speed depends on the clients' wireless tech.",
        "**Wireless router**: router + switch + access point; most common way to reach the ISP. **Wi-Fi modem**: modem + router.",
      ],
    },
    {
      title: "Topologies",
      points: [
        "**Protocol** = the rules for exchanging info. **Topology** = the physical and logical arrangement of nodes.",
        "**Point-to-point**: simplest; two devices connected directly.",
        "**Token ring**: deterministic, fixed time slots. A bad token can stop traffic. Replaced by **Ethernet**.",
        "**Bus**: shared **coaxial cable**; all devices see the traffic and wait for pauses. Rarely used now.",
        "**Star**: most common in LANs; all devices connect to a central switch or hub. A **switch** is better than a hub (a multiport repeater).",
        "**Mesh**: many paths. **Fully meshed** = a direct path to every device; **partially meshed** = multiple paths but not all direct.",
      ],
    },
  ],
  "06": [
    {
      title: "Internet privacy",
      points: [
        "A **fundamental human right**: privacy of an owner's **displayed, stored, and confidential** information.",
        "Importance: **control over identity and personal info**. Without it: **identity theft** and **stealing money**.",
        "Without privacy, **third-party companies** collect and analyze every online activity.",
      ],
    },
    {
      title: "Protecting your privacy",
      points: [
        "**Secure the browser**: Chrome and Firefox are the most used, but security is **not automatic**. Check reviews; try browsers for a period.",
        "**VPN**: the **best way** to have privacy. Changes the IP address and **encrypts** traffic against snoopers.",
        "**Double-check links**: never trust links from suspicious emails, sketchy sites, or ads. Phishing links **resemble trusted brands**.",
        "**Limit social media sharing**: lock the account or make it private. Don't post clues like a **favorite color or pet's name**.",
        "**Multi-factor authentication**: an extra step besides a password (e.g., Google's code sent to your phone).",
      ],
    },
    {
      title: "Network security technologies",
      points: [
        "Network security ensures **integrity, confidentiality, and accessibility**.",
        "**Firewall**: a hardware or software wall between trusted and untrusted networks; allows only verified traffic by preset rules.",
        "**IDS**: watches the network or host for malicious activity. **Network IDS** uses **signature-based** detection and machine learning.",
        "**HIDS**: runs on each host; compares **file system snapshots** and alerts the admin when critical files change.",
        "**WPA3**: the latest wireless security protocol by the **Wi-Fi Alliance**. Filters at the **entry**; **forward secrecy** keeps past sessions safe.",
        "**VPN**: connects a remote device to the enterprise server by **piggybacking on a public network**.",
        "**Email security**: emails can embed scripts. Best defense: **deep-learning spam filters** that filter spam domains.",
      ],
    },
    {
      title: "Consequences of failure (and fixes)",
      points: [
        "The internet is a collection of networks, so failures share consequences. They fail when **privacy and security aren't monitored**.",
        "**Revenue loss**: even minutes of downtime. Fix: **proper cable management** and check-ups.",
        "**Maintenance cost**: time, new cables, upgraded devices. Fix: **daily monitoring**.",
        "**Lesser productivity**: staff stay idle. Fix: **backup network and backup ISP**.",
        "**Damaged reputation**: seen as negligence and bad management. Fix: maintain systems and reassure everyone.",
        "**Legal repercussions**: missed deliverables. Fix: **alert every concerned party** right away.",
      ],
    },
  ],
  "07": [
    {
      title: "Moore's Law",
      points: [
        "Transistors in an IC **double every two years** (observed by **Gordon Moore, 1965**).",
        "Chip example: **P50,000** (1970) → P25,000 (1972) → P12,500 (1974) → **P48.50** (1990) → **under P1.00** today.",
        "**2015**: Moore said the law would be **less reliable** as companies shift to **non-silicon** computing.",
      ],
    },
    {
      title: "Six innovations",
      points: [
        "**Graphene transistors**: a one-atom-thick sheet, the most conductive material; rolled into **nanotubes**. **2019**: a 16-bit nanotube CPU printed **\"Hello, World!\"**.",
        "**Quantum computing**: **qubits**; 1 qubit = 2 bits (2^n). Subatomic particles follow **probability**. Uses: drug properties, complex circuits.",
        "**DNA computing**: **parallel processing** checks all answers at once; tiny storage; very stable (**cave bear**, 300 millennia). DNA fingerprinting; decoding banking, military, and communications data.",
        "**Neuromorphic**: imitates the **human brain** with less energy. **Intel (2020)**: small mammal's neural capacity.",
        "**Optical**: **photons** and light-intensity levels; speed of light; early stage. Fiber optics, optical chips, wireless optical networks.",
        "**Distributed**: **Folding@home** (proteins; Alzheimer's, cancer, COVID-19). ~**750,000** participants, **1.5 exaflops**, 75% of **El Capitan**.",
        "The future: **non-silicon transistors**, **deep-learning software**, and **crowdsourced computing power**.",
      ],
    },
    {
      title: "Collapse OS",
      points: [
        "An **open-source** OS for after a societal collapse, by **Virgil Dupras**; helps reconfigure damaged smartphones.",
        "**2019**: Dupras envisioned the global supply chain collapsing by **2030**. Political and social power remain; **scavengers** win.",
        "Runs on **Z80 8-bit** CPUs (desktops, cash registers, graphing calculators).",
        "Features: improvised machines and interfaces, compile assembler, read/write storage, edit text, **self-replicate** (with enough RAM and storage), read SD cards. Kernels joined by **glue code**.",
        "Roadmap: **8080 and 6502** CPUs; **LCD and E-ink**; floppies, CDs, RAM/ROMs; **TI-83+/TI-84+** and **TRS-80s**.",
        "Goal: return a post-collapse civilization to the **computer age** using simpler, scavenged chips.",
      ],
    },
  ],
  "08": [
    {
      title: "Digital divide",
      points: [
        "The gap between those **with and without Internet access**.",
        "Four factors: **availability** (no extra mile needed), **affordability** (household income), **quality of service** (speed for the price), **relevance** (local need and interest).",
        "Measured by **device saturation** or **ISP coverage**. UN Broadband Commission: **3.6 billion** unconnected, about **53.6%** of the world (2022).",
      ],
    },
    {
      title: "Impacts and solutions",
      points: [
        "Lower-income people are hit hardest. Lost **healthcare** (a social factor of health), **economic** (e-commerce), and **educational** opportunities (seen in COVID-19).",
        "There is **no single solution**. The unconnected live in **low-density or low-income** areas that telcos don't find feasible to serve.",
        "**Community networks** bring affordable access. **Effective Broadband for Health** (Internet Society, **Nepal**): telehealth. **Murambinda** (**Zimbabwe**): education, healthcare, agriculture, and digital literacy.",
      ],
    },
    {
      title: "Digital inequality",
      points: [
        "Differences in **knowledge and skill** in using technology across backgrounds, IT experience, and demographics.",
        "Critical for **social and economic growth**; it resists national development.",
        "**Divide** = haves vs. have-nots of **access**. **Inequality** = differences in **IT skills** even with access.",
      ],
    },
    {
      title: "Five elements of digital inequality",
      points: [
        "**Educational**: teach skills; lack of basic education and tech skills.",
        "**Infrastructural**: reliable **Internet towers and power supply** in rural areas.",
        "**Social**: trust and awareness; rural and illiterate citizens are unaware, unmotivated, unsupported.",
        "**Economical**: lack of **digitization investment**; e-commerce sites fail.",
        "**Usable design**: **UX, multilingual UI, accessibility**.",
      ],
    },
    {
      title: "Digital equity and inclusion",
      points: [
        "**Digital equity**: IT capacity for full participation in **society, democracy, and the economy**; matters for civic and cultural duties, jobs, essential services.",
        "**Digital inclusion**: access to ICT for everyone, **including the least privileged**. Strategies must **evolve as fast as technology**.",
      ],
    },
  ],
};
