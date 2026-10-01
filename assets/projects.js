const projects = [
  {
    slug: "nocal-nutrition",
    title: "NoCal Nutrition",
    year: "2026",
    summary: "A meal tracking app that uses AI to track overall nutrition quality in a simple way instead of counting calories.",
    indexCover: "assets/media/nocal/icon.jpg",
    hoverCover: "assets/media/nocal/cover.png",
    heroMedia: {
      type: "image",
      src: "../assets/media/nocal/today.png",
      alt: "NoCal app today screen",
      style: "iphone"
    },
    appStoreUrl: "https://apps.apple.com/ca/app/nocal-nutrition/id6760211001",
    sections: [
      {
        heading: "Why I Made This",
        content: [
          {
            type: "list",
            items: [
              "I wanted an app that would motivate me to eat healthier but other apps in the space focused too much on counting calories.",
              "One thing I've found consistently motivating is having one number that I can work to improve (eg. golf score, 5k running time, etc.) so I wanted that for nutrition.",
            ]
          }
        ]
      },
      {
        heading: "What I Built",
        content: [
          {
            type: "paragraph",
            text: "I designed the app around nutrition scores, using a single number to summarize the nutritional quality of each meal and day. I used colour-coded scores and backgrounds so the difference between scores could be easily felt, and I created several ways of visualizing historical scores to help users see their progress over time."
          },
          {
            type: "paragraph",
            text: "The biggest challenge was generating scores that felt accurate and consistent. I initially tried OpenAI's latest GPT-mini model but found that it could return wildly different scores for the same meal and often struggled to satisfy the formatting and length constraints I wanted. So I made a test suite that could run scoring many times with different prompts or models and output statistics on the consistency. I found that GPT-4.1 worked best for scoring, likely because it is the latest non-reasoning model. "
          },
          {
            type: "paragraph",
            text: "After implementing meal scoring I got a couple of friends to test the app. Their feedback was that they wanted more context around the scores, including the option to track macros and get additional insight into why they received a particular score and what they could do better. I didn't want to compromise the simplicity of the core experience, so I incorporated macro tracking and AI feedback as optional secondary features that users could access when they wanted additional detail. I'm currently using GPT-5 for generating feedback because it was the most affordable model that consistently provided useful feedback while satisfying the output constraints I wanted."
          },
          {
            type: "paragraph",
            text: "I used Supabase for the backend, SwiftUI for the iOS app, and used Codex to drive the development of both."
          }
        ]
      },
      {
        heading: "Outcome",
        content: [
          {
            type: "paragraph",
            text: "Just launched."
          }
        ]
      }
    ],
    inlineImages: [
      {
        type: "image",
        src: "../assets/media/nocal/history.png",
        alt: "NoCal history screen",
        style: "iphone"
      },
      {
        type: "image",
        src: "../assets/media/nocal/insights.png",
        alt: "NoCal insights screen",
        style: "iphone"
      },
      {
        type: "image",
        src: "../assets/media/nocal/meal-entry.png",
        alt: "NoCal meal entry screen",
        style: "iphone"
      },
      {
        type: "image",
        src: "../assets/media/nocal/report.jpg",
        alt: "NoCal report screen",
        style: "iphone"
      }
    ]
  },
  {
    slug: "shoulder-angels",
    title: "Shoulder Angels",
    year: "2025",
    summary: "An experiment bringing to life the cartoon trope of an angel and devil on your shoulder using OpenAI's realtime API.",
    indexCover: "assets/media/shoulder-angels/icon.png",
    hoverCover: "assets/media/shoulder-angels/cover.png",
    video: "https://www.youtube.com/embed/-DabF-5oAUE",
    sections: [
      {
        heading: "Why I Made This",
        content: [
          {
            type: "list",
            items: [
              "I've found that sometimes getting bad advice can be useful (as long as you know it's bad advice). But all the AI products I've seen only attempt to give good advice.",
              "The idea of bad advice made me think of the cartoon devil on your shoulder and I thought it would be fun to recreate that now that it's easily possible with AI."
            ]
          }
        ]
      },
      {
        heading: "What I Built",
        content: [
          {
            type: "paragraph",
            text: "I played around with this idea on both iOS and web using OpenAI's realtime API to handle the voices. I tried out ElevenLabs too which had better voices but didn't have a good way to have multiple different voices respond to one prompt. With OpenAI I could run two realtime sessions in parallel with the angel as the main one responding first, and then pipe the same question into the devil's session so it could respond next."
          },
        ]
      },
      {
        heading: "Outcome",
        content: [
          {
            type: "paragraph",
            text: "It was a fun demo but the realtime API is expensive and this isn't useful enough that people might pay for it so I haven't launched it publicly."
          }
        ]
      }
    ]
  },
  {
    slug: "daily-basics",
    title: "Daily Basics",
    year: "2025",
    summary: "A simple habit tracker focusing on six core pillars of wellbeing.",
    indexCover: "assets/media/daily-basics/icon.png",
    hoverCover: "assets/media/daily-basics/cover.png",
    heroMedia: {
      type: "image",
      src: "../assets/media/daily-basics/today.png",
      alt: "Daily Basics app today screen",
      style: "iphone"
    },
    appStoreUrl: "https://apps.apple.com/us/app/daily-basics-core-habits/id6746773786",
    sections: [
      {
        heading: "Why I Made This",
        content: [
          {
            type: "list",
            items: [
              "I felt like people can get too focused on tracking increasingly specific and complicated things when they might not even have the basics taken care of.",
              "I'd seen radar charts used in sports statistics and thought they could be a cool visual to use in a habit tracker.",
              "I'd found reasons not to launch the last few projects I'd started so I wanted to just launch something simple."
            ]
          }
        ]
      },
      {
        heading: "What I Built",
        content: [
          {
            type: "paragraph",
            text: "I made a simple MVP that broke down six basic things you should focus on doing every day. The idea is that users could define what success means in each area for them and then log whether they met, didn't meet, or partially met their goal."
          },
          {
            type: "paragraph",
            text: "Features:"
          },
          {
            type: "list",
            items: [
              "Log daily status of the six core habits (or personalize them to custom goals).",
              "See daily and historical radar chart visuals and track streaks."
            ]
          }
        ]
      },
      {
        heading: "Outcome",
        content: [
          {
            type: "paragraph",
            text: "I launched an MVP on the app store but haven't seen any traction in terms of downloads and haven't continued working on it for a few reasons:"
          },
          {
            type: "list",
            items: [
              "It's stuck in a catch-22 where it doesn't feel worth investing more in building features or marketing without more traction but those would be required for any chance of getting that traction.",
              "Based on the experience of the people that tried it, it only felt useful for a couple weeks to get a baseline of where you're at. After that it didn't feel as useful to keep using long-term because you either fix the areas where you weren't hitting your goals or just decide you're not going to.",
              "I think it would probably be best positioned as a short-term intervention to help people who may be struggling to do the bare minimum each day (eg. with depression). But I would need more confidence in its effectiveness to actually market it that way."
            ]
          }
        ]
      }
    ],
    inlineImages: [
      {
        type: "image",
        src: "../assets/media/daily-basics/history.png",
        alt: "Daily Basics history screen",
        style: "iphone"
      },
      {
        type: "image",
        src: "../assets/media/daily-basics/goals.png",
        alt: "Daily Basics goals screen",
        style: "iphone"
      }
    ]
  },
  {
    slug: "project-archive",
    title: "Project Archive",
    year: "2013-2016",
    summary: "Older university projects and stuff I made for fun.",
    indexCover: "assets/media/project-archive/magic-crystal-ball.png",
    hoverCover: "assets/media/project-archive/archive.png",
    externalUrl: "https://www.behance.net/adamthagard",
    sections: []
  }
];
