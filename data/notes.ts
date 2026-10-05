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
};
