function QuizGame() {

  this.questions = [
  {  question: "1. What do you love most about showering?",
     answers: [
        "I can quietly reflect on the meaning of life.",
        "It's how I get my best ideas!",
        "It gets the job done.",
        "What's a shower?"
                ],
     answerScore: [5, 2, 1, -1]
    },
  { question: "2. Which best describes your personal toilet-flushing etiquette?",
    answers: [
        "Flush before amd after. Avoid those toilet STDs.",
        "Um, I just flush every time I go. Is that so strange?",
        "If it's yellow let it mellow. Brown, flush it down.",
        "There are people around the world who don't have water, and here YOU are, shitting in it! Compost toilet all the way."
                  ],
    answerScore: [3, 2, 1, -1]
    },
  { question: "3. Where do you draw the line at meat & dairy?",
    answers: [
        "I'd eat a puppy. You don't know me.",
        "I'd be a vegetarian if bacon grew on trees.",
        "I don't eat cows, they make cheese! CHEESE!",
        "Vegan Level 5. I don't eat anything that casts a shadow."
                  ],
    answerScore: [20, 16, 12, 6]
    },
  { question: "4. Your friend claims she's full, but she's barely touched her meal. What do you tell her? ",
    answers: [
        "Go make more room! It's not bulemia if you're trying to squeeze in dessert!",
        "Portion sizes are just too big these days, aren't they?",
        "Didn't your mother ever tell you there are kids in Africa starving?",
        "More for me!"
                  ],
    answerScore: [3, 2, 1, 0]
      },
  { question: "5. Sounds like you should be walking or biking that fat ass to work every day",
    answers: [
        "Walk? I'm not a savage! I'd rather just drive to the gym in my Range Rover.",
        "Sometimes I have to park my Corolla a couple blocks away from work. Does that count?",
        "Ain't nobody got time for that! I get my exercise by running for the bus every morning.",
        "Look, just because I walk everywhere doesn't mean I'm a savage."
                  ],
    answerScore: [30, 15, 2, 0]
      },
  { question: "6. If you're all such ballers, do you fly business class?",
      answers: [
        "Yeah right. Only my private jet can accommodate my frequent flyer lifestyle.",
        "I wish! I have to fly coach so many times every year!",
        "Nope. I only fly a couple times a year anyway.",
        "I wasn't kidding when I said I have to walk everywhere."
                  ],
    answerScore: [30, 13, 7, 0]
    },
  { question: "7. How would MTV describe your crib?",
    answers: [
        "It ain't no crib, it's a mansion!",
        "It's just a  plain old house.",
        "My townhouse could be described as 'cosy'.",
        "At best, my apartment could be referred to as a 'condo'."
                  ],
    answerScore: [10, 5, 1, -2]
      },
  { question: "8. How often do you go to your holiday home?",
    answers: [
        "No idea. It's tough to get away from my fabulous busy lifestyle.",
        "Almost never. It's almost always rented out.",
        "What's a holiday home?",
        "What's a holiday?"
                  ],
    answerScore: [13, 7, 0, -3]
      },
  { question: "9. When you can't escape on holiday, how do you put up with cold spells or heat waves?",
    answers: [
        "Crank up the heat in winter. Ask Frances to blast my AC all summer. I love technology!",
        "I'll turn up the heat or AC as little as I can. I know it's not ideal. Don't judge me!",
        "Space heater to deal with the cold, and electric fan for extreme heat.",
        "Put on a sweater if I'm cold. Strip down to my birthday soon when it's hot."
                  ],
    answerScore: [8, 6, 4, -3]
      },
    { question: "10. There's nothing better than buying new clothes and new shoes. Am I right??",
      answers: [
        "Hell ya! I buy a new wardrobe every year!",
        "I guess! I usually just buy stuff when I'm in the mood.",
        "Meh. I usually only shop for new stuff if I need it.",
        "I prefer to mend my belongings. Just because I'm resourceful doesn't mean I'm a savage."
                  ],
      answerScore: [7, 3, 2, -1]
      },
    { question: "11. How much of your closet never sees the light of day?",
      answers: [
        "LOL I don't want to know. That's like opening Pandora's box.",
        "I probably don't use about half my wardrobe!",
        "Most of my closet gets used! I'm sure I've got some clothes stashed in there that I've never used though.",
        "I'm quite the clutterphobe. I only keep what I actually use."
                  ],
      answerScore: [7, 3, 2, -1]
      },
    { question: "12. What's the most environmentally-friendly technology you used this week?",
      answers: [
        "My MacBook! The battery lasts forever.",
        "My fridge! It's especially energy efficient!",
        "My drying rack! I always use it in summer.",
        "My LED-compact fluorescent lightbulbs! I always turn them off when I leave the room. Even if others are still there."
                  ],
      answerScore: [3, 2, 1, 0]
      },
    { question: "13. Describe your level of technology addiction.",
      answers: [
        "Ironhacker: You need it to live. ",
        "Apple Whore: You're just addicted to convenience.",
        "Hipster: You own a dark room, a typewriter, a vintage library, and an Instagram page to show off. ",
        "Grandma: You use Internet Explorer."
                  ],
      answerScore: [10, 6, 4, 1]
      },

]; }
