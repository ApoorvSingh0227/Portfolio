export const projects = [
  {
  id: 3,
  slug: "hcidea",
  title: "HCIdea",
  description: "A UX ideation and research hub designed to help Human-Centered Design students overcome decision paralysis.",
  shortDescription: "UX ideation platform for HCD students",
  type: "Website",
  icon: "/images/Asset-6.png",
  timeframe: "Sep 2025 - Dec 2025",
  featured: true,
  highlightImage: "/images/projects/hcidea/featured.jpg",
  featureTitle: "From Ideation to Innovation",
  featureSubtitle: "Helping HCD students discover and refine research topics with AI assistance",
  prototypeLink: "https://www.figma.com/proto/AKLCuhU6sZ7dh0UgkHq0jM/HCIdea-Wireframe?node-id=3603-3&p=f&t=XRoYzbydpFDSMxXb-1&scaling=scale-down&content-scaling=fixed&page-id=3604%3A2&starting-point-node-id=3603%3A3&show-proto-sidebar=1",
  otherLinks: [
    { label: "Low-Fi Prototype", url: "https://marvelapp.com/prototype/11e08bc1" },
    { label: "Full Report", url: "/images/projects/hcidea/HCIdea_report.pdf" }
  ],
  sections: [
    {
      id: "overview",
      title: "Project Overview",
      content: `Our project's primary audience is Human-Centered Design (HCD) students, addressing some of the difficulty that comes with generating an idea and choosing topics for projects. The goal of this project was to design a digital platform that reduces decision paralysis and aids students in choosing feasible and relevant research topics.

Research was conducted with current and former HCD students to gain a better understanding of the experience and identify areas of improvement through design. After sending out a survey and conducting interviews to gain insights, we performed qualitative analysis on responses and built a solution. Once the prototype was built, we tested on users for feedback, implemented changes, and created this report.

Team: Andrew Dinspechin, Lindsey Fortier, Apoorv Singh |
Course: Intro to UX |
Date: December 17, 2025`,
      images: [
        { src: "/images/projects/hcidea/mh.png", alt: "HCIdea Platform Overview", type: "wide" }
      ]
    },
    {
      id: "problem",
      title: "Problem Statement",
      content: `With HCD students being early in their design journey, many often struggle to identify research topics for assignments and group projects. Throughout the course of the degree, it is often a class requirement to generate ideas for research and work in teams. Since students are just starting to learn the principles of design, it can be difficult to know where to start or how to build a strong foundation.

Key challenges identified:

• Many common problems already have existing solutions, making it harder to generate truly novel ideas
• Problem spaces have 'shrunk', becoming more nuanced and increasingly difficult to ideate for
• Students typically aim to secure roles in industry or continue into academic research
• Building strong portfolios, developing versatile skill sets, and forming professional connections are key factors for success

The uncertainty around project direction can cause indecision and frustration, leading to inefficient time management early in the process. With regard to group projects, these challenges are often amplified when trying to attain consensus on a project's direction, demonstrating a clear need for an organized ideation system.`
    },
    {
      id: "solution",
      title: "Proposed Solution",
      content: `We proposed a digital platform, titled 'HCIdea', designed to help HCD students discover and refine research topics for academic and portfolio projects. The platform serves as both an idea generator and research library, aggregating existing publications, case studies, and design examples based on the user's interests or team focus.

Key platform features:

• Idea Generation Hub: Browse existing design examples, industry-sponsored projects, and personalized content recommendations with built-in prompts for brainstorming sessions

• Research Analysis & Aggregation: AI-powered synthesis of complex information, creating connection points between related research with centralized idea maps

• UX Project Guidance: AI assistant that helps assess feasibility and novelty of research ideas, identify technical constraints, and provide brainstorming support

• Community Connection: Student profiles highlighting research interests to foster peer-to-peer networking and simplify finding compatible project partners

• Search & Categorization: Smart search tools that filter by industry trends, tags, and personal interests, surfacing different types of data in an intuitive format

By presenting related design solutions, the system assists in highlighting gaps in under-researched opportunities, helping students identify areas with potential for meaningful exploration.`
      },
      {
        id: "research",
        title: "User Research",
        content: `We conducted user research to better understand the needs of design students during the ideation and discovery phase of their projects. To build empathy and understand users better, we distributed a survey and conducted user interviews.

Methodology:

• Survey: Distributed a mixed-methods survey of 11 questions to establish baseline understanding of HCD students, capturing challenges with product ideation, gaps in UX knowledge, and potential issues when forming teams

• User Interviews: Conducted 20-minute unstructured interviews to gain deeper insight into students' thought processes in the context of ideation, understanding pain points, needs, wants, and motivations in more depth

Participant criteria included current and former students in HCD, Human-Computer Interaction (HCI), User Experience Design (UX), or related fields, as well as individuals who have worked on assignments requiring project idea generation either individually or in teams.`,
        subsections: [
          {
            title: "Survey Demographics",
            content: `• 77.78% of participants were current or former HCD students
• 9 survey participants total
• 5 follow-up user interviews conducted`
          }
        ],
      },
      {
        id: "insights",
        title: "Key Insights",
        content: `Our analysis revealed several critical insights about HCD students' ideation challenges:

Idea Generation and Novelty:
77.78% of participants were neutral or found it easy to come up with an idea for a project. However, generating ideas that are truly novel proved more difficult with 77.78% reporting that coming up with something new or original is 'somewhat' or 'very' challenging. This highlights a common struggle to create ideas that feel distinctive in a saturated problem space.

Uncertainty Around Feasibility and Direction:
Time constraints and project feasibility were identified as some of the most common problems when generating ideas. Students often struggle to estimate the scope of projects within a semester, making it difficult to manage their time effectively.

Gaps in UX Knowledge and Process Understanding:
With many students being early in their design career, understanding design principles and terminology is a common challenge with 88.89% reporting difficulty in this area. 77.78% participants noted the importance of considering their portfolio when selecting an idea, suggesting students understand the value but may not understand the principles needed to achieve it.

Desire for Tools to Support Research and Ideation:
Participants expressed strong interest in AI-powered tools to automate research and ideation. Students currently use a variety of platforms: Google for research, Quora for perspectives, ChatGPT for brainstorming, Behance for inspiration, Miro for collaboration, and Figma for prototyping - highlighting an opportunity to streamline these functions.

Teamwork and Collaboration Challenges:
66.67% participants reported difficulty finding fellow researchers or designers to work with. Indecision, lack of communication, and differences in personal interest were ranked highest among sources of friction between teammates.`
      },
      {
        id: "personas",
        title: "User Personas",
        content: `Based on our research insights, we developed two primary user personas to guide our design decisions.`,
        images: [
          { src: "/images/projects/hcidea/up1.png", alt: "User Persona 1 - The Ambitious Student", type: "wide" },
          { src: "/images/projects/hcidea/up2.png", alt: "User Persona 2 - The Collaborative Learner", type: "wide" }
        ]
      },
      {
        id: "prototype",
        title: "Prototype Development",
        content: `After analyzing the interview and survey data, we conducted an affinity mapping exercise to identify key themes. The team then collaborated and brainstormed features based on what we had learned. We mapped out the user journey and prioritized features for the MVP.`,
        subsections: [
          {
            title: "Low-Fidelity Prototype",
            content: `We first created a low-fidelity, clickable wireframe in POP to better visualize and test the user flows. Key pages included:

• Explore Page: Home screen with categories (Industry Projects, Research Papers, Portfolios, Articles, Tutorials), AI chat help, messages, journal, and profile

• Idea Map Page: Visual map of bookmarked items and journal notes, automatically categorizing bookmarks and ideas while keeping them organized

• Detail Page: Access to research papers, existing design solutions, tutorials, and other content types

• Profile Page: Space for users to specify interests and student information, curating the explore page feed and enabling connections

• AI Chat Sidebar: Resource for brainstorming ideas, asking design questions, and getting portfolio guidance`
          },
          {
            title: "High-Fidelity Prototype",
            content: `The high-fidelity prototype refined the initial concepts with improved visual design and interaction patterns. Key enhancements included:

• Detail pages changed to overlays rather than full pages for smoother navigation
• Added task flows to the AI Chat tool for contextual assistance
• Refined filter functionality on the explore page
• Enhanced journal interface with idea map association
• Improved visual hierarchy and readability`
          }
        ],
        images: [
          { src: "/images/projects/hcidea/lp_ai.jpg", alt: "Low-Fi AI Chat", type: "wide" },
          { src: "/images/projects/hcidea/lp_pin.jpg", alt: "Low-Fi Pin", type: "wide" },
          { src: "/images/projects/hcidea/hp_ai.png", alt: "High-Fi AI Chat", type: "wide" },
          { src: "/images/projects/hcidea/hp_pin.png", alt: "High-Fi Pin", type: "wide" }
        ]
      },
      {
        id: "usability-testing",
        title: "Usability Testing",
        content: `The primary objective was to assess the learnability, efficiency, and overall user satisfaction of the core platform features with our target users. The evaluation aimed to identify specific usability issues and gather qualitative feedback to inform the next iteration.`,
        subsections: [
          {
            title: "Methodology",
            content: `We recruited six (6) current HCD students, representing a mix of academic years, all familiar with the challenge of topic selection. Sessions were conducted remotely via Zoom, where participants interacted directly with a high-fidelity interactive prototype.

Participants were asked to complete seven core tasks:
1. Save an industry project to Idea Map
2. Use "I got nothing" button to generate ideas
3. Make a journal note and save to an Idea Map
4. Send a message to another user
5. Ask AI for project feasibility help
6. Share an Idea Map with another user
7. Add interests to profile

We collected quantitative metrics (task success rates, time-on-task, error counts, SUS scores) and qualitative data (think-aloud commentary, post-test interviews).`
          },
          {
            title: "Quantitative Findings",
            content: `Task Success Rates & Times:

• Save industry project to Idea Map: 83.33% success (48 seconds avg)
• "I got nothing" button: 66.67% success (64 seconds avg)
• Make journal note and save: 100% success (42 seconds avg)
• Send message to user: 100% success (24 seconds avg)
• Ask AI for feasibility help: 83.33% success (24 seconds avg)
• Share Idea Map: 83.33% success (37 seconds avg)
• Add interests to profile: 66.67% success (37 seconds avg)

System Usability Scale (SUS) Score: 86.25/100

The SUS score of 86.25 strongly indicates that participants found the application highly usable, consistent, and recommendable. This excellent global assessment is supported by flawless (100%) success rates on straightforward interactions like sending messages and creating journal notes.`
          },
          {
            title: "Qualitative Findings",
            content: `Reaction to Core Concept:
Participants responded positively to the platform's fundamental purpose. One participant stated, "I actually do like how everything is set up... the concept is great," and emphasized the benefit of "having a place to like, save all of it in one centralized location."

Confusion regarding the "I got nothing" button:
A significant usability issue emerged with the "I got nothing" button. One participant compared it to a "Google, I feel lucky" experience, expecting it to "just throw something at you," and was puzzled when they found they had to "do a little bit more."

Issues with the Idea Map page:
The core organizing principle was not intuitively grasped. One participant admitted they "[were] unsure of what an idea map is" and initially thought of it as a "mood board."

AI Feature Discoverability:
Some users did not immediately think to use the AI for feasibility checks. One participant said they "wouldn't think to ask AI" and expected such metrics directly on project cards.

Navigation and Standard interactions:
Tasks involving universally recognized patterns (sending messages) were completed with ease and described as "pretty straightforward" and "fairly standard."`
          }
        ]
      },
      {
        id: "improvements",
        title: "Prototype Improvements",
        content: `Following the usability evaluation, we implemented targeted refinements to address the identified usability barriers and enhance clarity, functionality, and user experience:

• Increased Legibility: Adjusted tool icon text weight and darkened search bar text to improve readability and visual accessibility

• Terminology Clarity: Renamed "Idea Assistant" to "AI Assistant" to better communicate the feature's purpose and align with user mental models

• Visual Hierarchy: Adjusted opacity of section labels on the dashboard to create clearer visual hierarchy and reduce interface noise

• Enhanced Idea Map Interface: Added more icons to the Idea Map toolbelt, making it more dynamic and intuitive for organizing and interacting with content

• Improved Idea Generation Page: Enhanced the idea generator to ensure recommended projects dynamically follow the theme of the generated prompt

• Clearer Content Attribution: Added visible source attribution to the Idea Map page, helping users understand the origin of ideas and research items

These updates directly respond to user feedback regarding confusion around the AI feature, conceptual clarity of the Idea Map, and overall interface polish.`
      },
      {
        id: "conclusion",
        title: "Conclusion",
        content: `The usability evaluation confirms that the HCIdea platform's core concept strongly resonates with Human-Centered Design students. This is evidenced by the high SUS score of 86.25. Participants validated the need for a centralized tool to support academic ideation and found the basic navigation and standard interactions to be intuitive and efficient.

However, the study also revealed critical usability barriers within several of the platform's unique features. Despite the strong overall impression, task success rates showed that key functions such as the "I got nothing" idea generator and profile editing were not completed successfully by one third of users. Qualitative data indicated that these failures came from mismatched mental models, unclear conceptual labels, and disconnected workflows.

In summary, while HCIdea's foundation is solid and its value proposition is clear, targeted refinements were necessary to ensure its specialized tools are as usable as its core framework.`,
        subsections: [
          {
            title: "Future Work",
            content: `Moving forward, the following steps are recommended to further develop HCIdea:

• Long Term Feature Expansion: Explore integration with academic databases such as IEEE Xplore and ACM Digital Library for direct access to research papers

• Advanced Collaboration Tools: Develop real-time co-editing features for Idea Maps and shared project spaces to support synchronous teamwork

• Personalization and Learning Pathways: Implement adaptive learning features that guide students based on skill level, project type, and career interests

• Extended Usability Testing: Conduct follow-up testing with the refined prototype, focusing on improved AI assistant, Idea Map clarity, and new collaboration flows

• Institutional Partnerships: Pilot the platform within HCD programs to gather longitudinal data on impact on student project outcomes, portfolio quality, and academic confidence

These future directions aim to scale HCIdea from a classroom prototype into a robust, widely adopted tool that reduces decision paralysis and empowers the next generation of human-centered designers.`
          }
        ]
      }
    ]
  },
  {
  id: 4,
  slug: "movielamp",
  title: "Movie Lamp",
  description: "A movie database platform designed to reduce decision fatigue and provide personalized recommendations.",
  shortDescription: "Personalized movie discovery platform",
  type: "App",
  icon: "/images/Asset-7.png",
  timeframe: "Oct 2025 - Dec 2025",
  featured: true,
  highlightImage: "/images/projects/movielamp/featured.jpg",
  featureTitle: "Your Personal Movie Genie",
  featureSubtitle: "Three perfect picks to end decision fatigue",
  prototypeLink: "https://www.figma.com/proto/8zxkeJIT6p8idtv9lSpgs6/Movie-lamp?node-id=0-18&t=X5q1Fh42fdLdMgMY-1",
  otherLinks: [
    { label: "Presentation", url: "/images/projects/movielamp/final.pdf" }
  ],
  sections: [
    {
      id: "overview",
      title: "Project Overview",
      content: `Movie Lamp is a movie database platform designed to solve the fundamental frustration viewers face when trying to choose what to watch. While digital platforms provide unprecedented access to vast film libraries, their core systems for discovery and recommendation are flawed, leading to wasted time and unsatisfactory experiences.

The process of selecting a movie has become a significant source of frustration. Streaming services prioritize their own affiliated content, limiting genuine choice. Users face overwhelming choice and decision fatigue, often spending more time browsing than actually watching. Aggregated ratings from sites like IMDb or Rotten Tomatoes are often unreliable indicators of personal enjoyment.

Our solution focuses on three key innovations:

• A dissected rating system that breaks down movie quality into Story, Visuals, and Enjoyment metrics
• A taste profile with trust meters that puts users in control of their recommendations
• The "Movie Lamp" feature that narrows thousands of options down to three curated picks`,
      images: [
        { src: "/images/projects/movielamp/ssdash.PNG", alt: "Movie Lamp Platform Overview", type: "collage" },
        { src: "/images/projects/movielamp/ssinfo.PNG", alt: "Movie Lamp Platform Overview", type: "collage" },
        { src: "/images/projects/movielamp/ssslider.PNG", alt: "Movie Lamp Platform Overview", type: "collage" },
        { src: "/images/projects/movielamp/sspicks.PNG", alt: "Movie Lamp Platform Overview", type: "collage" }
      ]
    },
    {
      id: "research",
      title: "User Research",
      content: `We conducted 6 semi-structured interviews to identify pain points of users, followed by affinity mapping with the results to identify key issues and focus areas.

Key Research Findings:

Need for a Dissected Rating System:
Multiple interviewees discussed the inaccuracy of current rating systems and how they lack consistency overall. They specifically mentioned how this issue affects horror and comedy genres, where audience expectations vary dramatically from critical reception.

Need to Reduce Overwhelm and Decision Fatigue:
Almost all of our interviewees mentioned the decision fatigue they face due to overwhelming landing pages. They expressed frustration with endless scrolling and the paradox of choice - having too many options actually makes choosing harder.

Issues with Data Collection & Privacy:
Some users highlighted privacy concerns, expressing dislike for how current systems rely on tracking and "looking over the shoulder" at all times. They wanted personalization that respects their privacy and puts them in control.`,
      images: [
        { src: "/images/projects/movielamp/affinity.png", alt: "Affinity Mapping Session", type: "wide" }
      ]
    },
    {
      id: "competitive",
      title: "Competitive Analysis",
      content: `We analyzed existing services to identify gaps and opportunities for differentiation:

• Letterboxd offers social features and personalization, but lacks the curated selection approach we envisioned
• IMDb and Rotten Tomatoes provide extensive databases but rely on aggregated ratings that don't account for personal taste
• Streaming platforms (Netflix, Hulu, etc.) prioritize their own content over genuine recommendations

Our competitive analysis matrix helped us identify that while Letterboxd overlaps with our goal of personalization, we could bring something unique to the table with our Movie Lamp feature and dissected rating system.`,
      images: [
        { src: "/images/projects/movielamp/matrix.jpg", alt: "Competitive Analysis Matrix", type: "wide" }
      ]
    },
    {
      id: "personas",
      title: "User Personas",
      content: `Based on our research, we developed two primary user personas to guide our design decisions.

Zhang Chen | 22 years old | Grad Student:
Enjoys movies as his primary source of entertainment, watching 1-2 movies weekly. Prefers movies as a social activity but appreciates online convenience. Relies on word of mouth and prefers Letterboxd. Needs recommendations based on crowd-sourced data that respects privacy.

Emily Carter | 29 years old | Marketing Specialist:
Uses movies for relaxation occasionally, watching 2-3 movies monthly. Prefers online platforms due to theater time commitment. Currently uses IMDb and Rotten Tomatoes but finds ratings unreliable. Wants a quicker way to select movies without extensive searching.`,
      images: [
        { src: "/images/projects/movielamp/up.jpg", alt: "User Persona - Zhang Chen", type: "wide" }
      ]
    },
    {
      id: "design",
      title: "Design Process",
      content: `With the user experience, we wanted to convey a feeling of calm and reliance. Since our three-picks feature was unique among competitors, we made it the centerpiece and used the genie lamp as the inspiration for our theme.

Our theme is a magical platform to help ease the stress of choosing a movie. The primary colors in the color palette highlight magic, while the secondary theme of iridescence was selected to convey calmness. The lamp became our central focus and is used throughout the app interface and as the app icon.

Core Application Features:

• Dashboard: The dashboard acts as a central hub, showing movies based on your taste profile. Users can click to expand any movie card and view detailed ratings without navigating away from the page. The header features the "Summon the Movie Lamp" button as the primary call-to-action.

• Movie Lamp Feature: This feature picks the best matches and narrows your choices to just three options. Detailed ratings are displayed by default along with genre tags. After user testing feedback, we enhanced this feature to branch into three distinct genres, making the choice even easier.

• Taste Profile & Settings: The profile page includes customizable taste preferences that can be updated anytime. Advanced settings let users control trust levels for different rating websites, personalizing recommendations based on their preferred sources.`,
      images: [
        { src: "/images/projects/movielamp/lfp.jpg", alt: "Movie Lamp Feature", type: "wide" }
      ]
    },
    {
      id: "testing",
      title: "Usability Testing",
      content: `We conducted usability testing with target users to evaluate the effectiveness of our design. Our system received a score of 50 during the SUS (System Usability Scale) test. The feedback we received helped us improve the affordance of some features and rework certain sections.

Key Findings:

Issues with Affordance:
The visuals for the ratings left users confused as they appeared to be sliders rather than static data visualizations. Users attempted to interact with elements that were meant to be display-only.

Confusion with Feature Usage:
The purpose of some features wasn't immediately clear. The presence of two different rating systems wasn't adequately explained through labels, and users didn't understand the difference between them.

Purpose of Movie Lamp:
Users pointed out that being shown three movies could still induce decision fatigue. Based on this feedback, we updated the feature to include branching through distinct genres, making the choice easier by providing clearer differentiation between options.`,
    },
    {
      id: "future",
      title: "Future Work",
      content: `Based on our testing feedback, we have identified several areas for future development:

Tooltips & First Visit Tutorials:
Since some features are complex to explain, we need to implement tooltips and tutorials for better user experience. The current complexity makes it difficult for features to be intuitive at first glance.

Further Testing on Altered Features:
Features like the advanced search were completely reworked based on feedback, so additional testing is needed to validate these changes and solidify the use cases.

Expansion Towards a Social Section:
Given more time, we would like to transform this into a community tool, integrating features for social interactions and group movie watching experiences. This would allow friends to share recommendations and watch together remotely.`
    }
  ]
},
{
    id: 1,
    slug: "citysense",
    title: "CitySense",
    description: "A civic transparency platform for visualizing underground infrastructure and building public trust.",
    shortDescription: "Civic transparency platform for underground infrastructure visualization",
    type: "APP+",
    icon: "/images/Asset-5.png",
    timeframe: "Aug 2025 - Dec 2025",
    featured: true,
    highlightImage: "/images/projects/citysense/featured.jpg",
    featureTitle: "Making the Invisible Visible",
    featureSubtitle: "Building public trust through transparent infrastructure visualization",
    prototypeLink: "https://www.figma.com/proto/awECjuN5DhIZBcOR3mSsjw/CitySense--Copy-?node-id=18-6084&t=ZRX36UHduO4n9fiV-1",
    otherLinks: [
      { label: "Full Report", url: "/images/projects/citysense/freport.pdf" }
    ],
    sections: [
      {
        id: "overview",
        title: "Project Overview",
        content: `As cities modernize by moving utility infrastructure underground into utilidor systems, a critical challenge arises. The invisibility of these systems erodes public awareness, trust, and connection to civic maintenance.

Through generative research with New York City residents, we identified a strong desire for:

• Transparent, real-time communication about underground work
• Recognition of the workers involved
• Accessible visualization of complex infrastructure
• Actionable information for daily decision-making

In response, we designed and developed CitySense, a civic transparency platform comprising a mobile app and physical street installations. CitySense provides real-time visibility into utility health, an interactive underground map, issue reporting, and worker profiles.

Key contributions of this research:
• A novel civic transparency platform bridging the visibility gap in smart city infrastructure
• Empirical findings from a 10-day longitudinal field study on user engagement with transparency tools
• Actionable design implications for fostering public trust through human-centered civic technology`,
        images: [
          { src: "/images/projects/citysense/citysense-1.jpg", alt: "CitySense Platform Overview", type: "wide" }
        ]
      },
      {
        id: "research",
        title: "Generative Research",
        content: `To ground our design in lived experiences, we first conducted a generative research study with five diverse New York City residents. Methods included semi-structured interviews and a participatory design activity where participants ranked utility metrics for a public display.

Key Findings & Design Opportunities:

Our analysis revealed four key findings that directly informed our design:

• Trust Deficit: Participants expressed skepticism about municipal execution and maintenance. Transparency tools must communicate system integrity and governmental accountability to be effective.

• Desire for Simplicity: Across tech-savvy and non-tech users, there was a strong preference for clear, concise, and visual information - not raw data or complex dashboards.

• Human Connection: The invisibility of workers was a recurring concern. Participants felt that recognizing labor would build empathy and trust.

• Actionable Awareness: Information needed to be localized and timely to aid daily decision-making, such as commute routing or business planning.`,
      },
      {
        id: "design",
        title: "Platform Design",
        content: `CitySense is a multi-channel transparency platform consisting of a mobile application and complementary physical installations.

Core Application Features:

• Dashboard: The home screen provides an overview of "Critical Alerts" and "Recent Works" near the user, with color-coded statuses based on the utility type.

• Interactive Map & Legend: A toggle reveals the underground utilidor network, color-coded by utility type (water, gas, electricity, etc.). "Trouble pins" indicate disruptions, with detailed impact reports available on tap.

• Report Tool: Allows users to report issues (leaks, outages) with description, location, and photo upload. A "Report Log" provides status updates on past submissions.

• Workers Page: Features profiles of utility teams and individual technicians, with options to "Connect" (send appreciation) or "Donate" (offer financial support).

• Physical Installations: Street-side kiosks display maps and alerts. Color-coded utility poles with status lights provide at-a-glance awareness: green for working, yellow for maintenance, red for line down.`,
        images: [
          { src: "/images/projects/citysense/ppdash.PNG", alt: "Dashboard Design", type: "collage" },
          { src: "/images/projects/citysense/ppworkpro.PNG", alt: "Interactive Map", type: "collage" },
          { src: "/images/projects/citysense/ppreport.PNG", alt: "Report Tool", type: "collage" },
          { src: "/images/projects/citysense/ppworker.PNG", alt: "Worker Profile", type: "collage" }
        ]
      },
      {
        id: "field-study",
        title: "Field Study",
        content: `We conducted a 10-day longitudinal field study with 10 participants (6 male, 4 female) aged 22 to 46, comprising 9 NYC residents and 1 business owner. Participants represented key user groups: daily commuters, delivery drivers, students, and small business owners.

Methodology:
The study employed a mixed-methods approach:

• Daily Guided Tasks: Over 10 days, participants completed specific tasks (explore dashboard, report issues, use map) and submitted reports on their experience.

• Instrumented Logging: We tracked page views and navigation paths within the prototype.

• Post-Study Interviews: Semi-structured interviews gathered in-depth feedback on overall experience and perceived usefulness.

Daily Task List:
• Day 1 - Explore Dashboard
• Day 2 - Inspect a critical alert
• Day 3 - Report an issue
• Day 4 - Explore the Map and Legend
• Day 5 - Check information for highlighted areas
• Day 6 - Explore workers page
• Day 7 - View worker profile
• Day 8 - Try donation feature
• Day 9 - Connect with worker
• Day 10 - Submit another report`,
      },
      {
        id: "findings",
        title: "Key Findings",
        subsections: [
          {
            title: "Quantitative Findings",
            content: `Task Completion Time:
      Initial exploration tasks (Days 1 and 4) took the longest (average 200-203 seconds), indicating a learning curve. Later, goal-directed tasks were completed much faster (average 75-86 seconds), suggesting that core flows became efficient with familiarity.

      Page Engagement:
      The Dashboard (50 visits) and Map (39 visits) were the most frequently accessed features, establishing them as primary information hubs. The Donate and Connect features had fewest visits (10 each), indicating low organic engagement with social features.`
          },
          {
            title: "Qualitative Themes",
            content: `1. Transparency is Valued, but Clarity is Crucial:
      Participants praised the app's mission. One noted, "It's cool to finally see what's underneath all the construction." However, ambiguous UI elements like "Predictive Insights" and unlabeled progress bars caused confusion.

      2. The Map is Engaging but Not Yet Actionable:
      The interactive map was described as "fascinating" but users struggled to translate engagement into practical use. One participant remarked, "I love seeing the lines, but what do I do if one is red near my house?"

      3. Social Features Feel Detached:
      Worker profiles were highly effective at building trust. "Putting a face to it makes it feel more reliable," stated one user. Yet, Donate and Connect features felt isolated.

      4. Demand for Personalization and Filtering:
      Users requested tools to manage information overload. A business owner said, "I don't care about the water main in Queens. Let me filter just my block and just power outages."`
          },
          {
            title: "Study Participants",
            content: `• P1: 22 - Student
      • P2: 22 - Part time worker, Student
      • P3: 23 - Part time worker, Student
      • P4: 25 - Full time worker
      • P5: 28 - Full time worker
      • P6: 24 - Full time worker
      • P7: 43 - Full time worker
      • P8: 31 - Full time worker
      • P9: 29 - Full time worker
      • P10: 42 - Business Owner`
          }
        ],
        images: [
          { src: "/images/projects/citysense/avgtime.png", alt: "Task Completion Time Graph", type: "wide" },
          { src: "/images/projects/citysense/pagepfreq.png", alt: "Page Engagement Chart", type: "wide" }
        ]
      },
      {
        id: "implications",
        title: "Design Implications",
        content: `Our field study yielded three key design implications for civic transparency platforms:

Prioritize Interpretive Clarity Over Raw Data Display:
Ambiguous metrics and jargon create "transparency theater." Designers should employ plain language, clear legends, and tooltips to ensure every data point is intuitively understood. For example, instead of "Predictive Insights," use "Expected Impact on Your Commute."

Embed Social and Participatory Features into Core Flows:
Social features like donations or messages should not be siloed. They should be triggered contextually. For instance, after a user sees a "Work Completed" alert, the app could suggest "Thank the crew who fixed this?" This ties community engagement directly to tangible system outcomes.

Enable Personalized, Hyper-Local Views:
A one-size-fits-all data dump is overwhelming. Providing user-controlled filters (by location, utility type, severity) and personalized alerts (e.g., "affects your commute route") transforms a generic transparency tool into a personally indispensable utility.`,
        subsections: [
          {
            title: "Future Work",
            content: `Based on participant suggestions, we plan to explore:

• Augmented Reality (AR) map view allowing users to point their camera at the street to see an overlay of underlying utilities
• Implementation of filtering and personalization systems
• Longer-term deployment with larger, more diverse user groups
• Integration with municipal backend systems for real-time data`
          }
        ]
      },
      {
        id: "conclusion",
        title: "Conclusion",
        content: `CitySense demonstrates the potential of civic technology to bridge the growing gap between complex smart city infrastructure and public understanding. Our generative research revealed a deep-seated need for simplicity, accountability, and human connection. The longitudinal field study confirmed that while the vision of transparency resonates strongly, its execution must be meticulously crafted to be clear, actionable, and personally relevant.

The lessons from CitySense extend beyond utilidors. Any system aiming to make institutional processes transparent must design for interpretability, integrate community feedback loops meaningfully, and prioritize the user's context. By doing so, HCI researchers and designers can help build not just smarter cities, but more trustworthy and engaged communities.

Team: Apoorv Singh, Salomi Vaibhav Pradhan, Yuliya Semikina, Abdul Khadar Shaik | 
Institution: Pace University, New York | 
Course: IS 628 Research Methods for UX`,
      }
    ]
  },
    {
  id: 2,
  slug: "spatoo",
  title: "Spatoo",
  description: "UI design for a 3D space shooter game, featuring concept sketches, Unity implementation, color exploration, crosshair iterations, and menu redesign concepts.",
  shortDescription: "Space shooter game UI design",
  type: "Game UI",
  icon: "/images/Asset-9.png",
  timeframe: "Nov 2025 - Present",
  featured: false,
  highlightImage: "/images/ecommerce-featured.jpg",
  featureTitle: "UI Design for Space",
  featureSubtitle: "Crafting interfaces for interstellar combat",
  sections: [
    {
      id: "sketches",
      title: "UI Sketches",
      content: "Initial concept sketches exploring the visual language and layout for the space shooter interface, focusing on readability and sci-fi aesthetics.",
      images: [
        { src: "/images/projects/spatoo/ui1.jpg", alt: "Spatoo UI - Initial Sketches 1", type: "wide" },
        { src: "/images/projects/spatoo/ui2.png", alt: "Spatoo UI - Initial Sketches 2", type: "wide" }
      ]
    },
    {
      id: "unity",
      title: "Unity Implementation",
      content: "Progressive implementation in Unity showing the evolution from basic UI layout to colored interfaces and refined crosshair designs.",
      images: [
        { src: "/images/projects/spatoo/ui3.png", alt: "Spatoo UI - Unity Implementation", type: "wide" },
        { src: "/images/projects/spatoo/ui4.png", alt: "Spatoo UI - Color Exploration", type: "wide" },
        { src: "/images/projects/spatoo/ui5.png", alt: "Spatoo UI - Crosshair Iterations", type: "wide" }
      ]
    },
    {
      id: "menu",
      title: "Menu Design Concepts",
      content: "Explorations for the main menu design, establishing the visual identity and navigation flow for the game's entry point.",
      images: [
        { src: "/images/projects/spatoo/menu1.JPG", alt: "Spatoo Menu - Design Concept", type: "wide" }
      ]
    }
  ]
},
    {
    id: 5,
    slug: "smee",
    title: "SMEE",
    description: "A chilling narrative-driven horror game where 'Hide and Seek' meets supernatural terror in an abandoned toy store cursed by a tormented spirit.",
    shortDescription: "Horror game concept design",
    type: "Game UX",
    icon: "/images/Asset-8.png",
    timeframe: "Feb 2025 - Apr 2025",
    featured: false,
    highlightImage: "/images/ecommerce-featured.jpg",
    featureTitle: "Hide and Seek in the Dark",
    featureSubtitle: "A narrative-driven horror experience",
    otherLinks: [
      { label: "Presentation Slides", url: "/images/projects/smee/presentation.pdf" }
    ],
    sections: [
      {
        id: "slides",
        title: "",
        content: "",
        images: [
          { src: "/images/projects/smee/sp3.jpg", alt: "SMEE - Introduction", type: "wide" },
          { src: "/images/projects/smee/sp4.jpg", alt: "SMEE - Setting", type: "wide" },
          { src: "/images/projects/smee/sp5.jpg", alt: "SMEE - Timeline 1978", type: "wide" },
          { src: "/images/projects/smee/sp6.jpg", alt: "SMEE - Timeline 1995", type: "wide" },
          { src: "/images/projects/smee/sp7.jpg", alt: "SMEE - Character Design", type: "wide" },
          { src: "/images/projects/smee/sp8.jpg", alt: "SMEE - Isaac Stone", type: "wide" },
          { src: "/images/projects/smee/sp9.jpg", alt: "SMEE - Darren Crawford", type: "wide" },
          { src: "/images/projects/smee/sp10.jpg", alt: "SMEE - Other Characters", type: "wide" },
          { src: "/images/projects/smee/sp11.jpg", alt: "SMEE - Procedural Maze Concept", type: "wide" },
          { src: "/images/projects/smee/sp12.jpg", alt: "SMEE - Ultimate Goal", type: "wide" },
          { src: "/images/projects/smee/sp13.jpg", alt: "SMEE - User Interface", type: "wide" },
          { src: "/images/projects/smee/sp14.jpg", alt: "SMEE - Environment", type: "wide" },
          { src: "/images/projects/smee/sp15.jpg", alt: "SMEE - Gameplay", type: "wide" },
          { src: "/images/projects/smee/sp16.jpg", alt: "SMEE - Mechanics", type: "wide" },
          { src: "/images/projects/smee/sp17.jpg", alt: "SMEE - Inventory System", type: "wide" }
        ]
      }
    ]
  },
  {
    id: 6,
    slug: "statera",
    title: "Statera",
    description: "A balanced lifestyle app design focused on helping users maintain equilibrium between work, personal life, and wellness through intuitive interface design.",
    shortDescription: "Balanced lifestyle app design",
    type: "App Design",
    icon: "/images/Asset-3.png",
    timeframe: "Oct 2024 - Dec 2024",
    featured: true,
    prototypeLink: "https://xd.adobe.com/view/e5822530-7888-4654-bfbb-8013f795eae5-b0d1/",
    otherLinks: [
    { label: "Presentation Slides", url: "/images/projects/statera/presentation.pdf" }
    ],
    highlightImage: "/images/ecommerce-featured.jpg",
    featureTitle: "Balance productivity",
    featureSubtitle: "Optimize your workflow with smart tools",
    sections: [
      {
        id: "design",
        title: "",
        content: "",
        images: [
          { src: "/images/projects/statera/sp1.jpg", alt: "Statera Design - Page 1", type: "wide" },
          { src: "/images/projects/statera/sp2.jpg", alt: "Statera Design - Page 2", type: "wide" },
          { src: "/images/projects/statera/sp3.jpg", alt: "Statera Design - Page 3", type: "wide" },
          { src: "/images/projects/statera/sp4.jpg", alt: "Statera Design - Page 4", type: "wide" },
          { src: "/images/projects/statera/sp5.jpg", alt: "Statera Design - Page 5", type: "wide" },
          { src: "/images/projects/statera/sp6.jpg", alt: "Statera Design - Page 6", type: "wide" },
          { src: "/images/projects/statera/sp7.jpg", alt: "Statera Design - Page 7", type: "wide" }
        ]
      }
    ]
  },
    {
    id: 7,
    slug: "vizfy",
    title: "Vizfy",
    description: "A Social Media platform for Data Visualization inspiration. We help you make the mundane data more interesting!",
    shortDescription: "Data visualization Inspiration platform",
    type: "App Design",
    icon: "/images/Asset-2.png",
    timeframe: "Nov 2024 - Dec 2024",
    featured: false,
    highlightImage: "/images/ecommerce-featured.jpg",
    featureTitle: "Visualize with clarity",
    featureSubtitle: "Transform complex data into intuitive insights",
    prototypeLink: "https://xd.adobe.com/view/de4b4e3a-d5ea-4348-b195-c2df11b12d64-8b18/screen/ebdd67b7-56a8-472e-9b55-d0170dba2aab?fullscreen&hints=off",
    otherLinks: [
      { label: "Presentation Slides", url: "/images/projects/vizfy/presentation.pdf" }
    ],
    sections: [
      {
        id: "slides",
        title: "",
        content: "",
        images: [
          { src: "/images/projects/vizfy/vp1.jpg", alt: "Vizfy Design - Page 1", type: "wide" },
          { src: "/images/projects/vizfy/vp2.jpg", alt: "Vizfy Design - Page 2", type: "wide" },
          { src: "/images/projects/vizfy/vp3.jpg", alt: "Vizfy Design - Page 3", type: "wide" },
          { src: "/images/projects/vizfy/vp4.jpg", alt: "Vizfy Design - Page 4", type: "wide" },
          { src: "/images/projects/vizfy/vp5.jpg", alt: "Vizfy Design - Page 5", type: "wide" },
          { src: "/images/projects/vizfy/vp6.jpg", alt: "Vizfy Design - Page 6", type: "wide" },
          { src: "/images/projects/vizfy/vp7.jpg", alt: "Vizfy Design - Page 7", type: "wide" },
          { src: "/images/projects/vizfy/vp8.jpg", alt: "Vizfy Design - Page 8", type: "wide" }
        ]
      }
    ]
  },
    {
    id: 8,
    slug: "joyland",
    title: "Joyland 24'",
    description: "A festival companion app designed to enhance the Joyland Jakarta experience with seamless access to event information, ticket management, artist schedules, safety guidelines, and venue navigation.",
    shortDescription: "Festival companion app",
    type: "App Design",
    icon: "/images/Asset-4.png",
    timeframe: "Nov 2024 - Dec 2024",
    featured: false,
    highlightImage: "/images/ecommerce-featured.jpg",
    featureTitle: "Your Festival Companion",
    featureSubtitle: "Navigate the magic of Joyland with ease",
    otherLinks: [
      { label: "Presentation Slides", url: "/images/projects/joyland/presentation.pdf" }
    ],
    sections: [
      {
        id: "slides",
        title: "",
        content: "",
        images: [
          { src: "/images/projects/joyland/jp1.jpg", alt: "Joyland 24' - Title Page", type: "wide" },
          { src: "/images/projects/joyland/jp2.jpg", alt: "Joyland 24' - Festival Overview", type: "wide" },
          { src: "/images/projects/joyland/jp3.jpg", alt: "Joyland 24' - Primary Goals", type: "wide" }
        ]
      }
    ]
  }
];

// Helper function to get project by slug
export function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug);
}

// Get all projects
export function getAllProjects() {
  return projects;
}

// Get featured projects
export function getFeaturedProjects() {
  return projects.filter(project => project.featured);
}