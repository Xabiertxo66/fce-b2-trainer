// ============ Banco de contenidos B2 First ============
// Todos los ejercicios siguen el formato real del examen Cambridge B2 First (FCE).
// Cada tipo de ejercicio tiene varias baterías (sets) seleccionables.

const DATA = {

  // ---- Reading & Use of English Part 1: Multiple-choice cloze ----
  mcCloze: {
    title: "Part 1 · Multiple-choice cloze",
    instructions: "Lee el texto y elige la palabra correcta (A, B, C o D) para cada hueco.",
    sets: [
      {
        name: "Texto 1 · Learning new skills",
        text: [
          "Have you ever wondered why some people seem to ", 0,
          " up new skills so quickly? Scientists who study learning believe that natural talent is often less important than regular practice. ", 1,
          " to recent research, the brain forms stronger connections when we repeat an activity again and again. This process, ", 2,
          " as 'myelination', helps signals travel faster between brain cells.\n\nHowever, simply repeating something is not ", 3,
          ". Experts say that learners make the fastest progress when they practise just beyond their comfort zone and ", 4,
          " attention to their mistakes. This is why video games are so effective at teaching: they constantly ", 5,
          " the level of difficulty to match the player.\n\nSo if you are ", 6,
          " of giving up on the guitar, a language or a sport, remember that struggling is a normal part of the process. In fact, scientists claim that the feeling of effort is a ", 7,
          " that your brain is actually changing."
        ],
        gaps: [
          { options: ["pick", "catch", "take", "put"], answer: 0 },
          { options: ["Referring", "According", "Regarding", "Relating"], answer: 1 },
          { options: ["called", "named", "known", "titled"], answer: 2 },
          { options: ["enough", "plenty", "sufficient", "complete"], answer: 0 },
          { options: ["give", "make", "pay", "put"], answer: 2 },
          { options: ["adjust", "repair", "fix", "convert"], answer: 0 },
          { options: ["thinking", "considering", "wondering", "planning"], answer: 0 },
          { options: ["mark", "sign", "notice", "symbol"], answer: 1 }
        ]
      },
      {
        name: "Texto 2 · City foxes",
        text: [
          "Foxes were first ", 0,
          " in London in the 1930s, when new suburbs spread into the countryside. Instead of moving away, the animals discovered that cities could ", 1,
          " them with everything they needed: food, shelter and surprisingly few enemies. Today, experts ", 2,
          " that around 10,000 foxes live in London alone.\n\nCity foxes have an unfair ", 3,
          " for being aggressive. In fact, they are shy creatures that would much ", 4,
          " avoid humans altogether. They are also remarkably intelligent: researchers have watched foxes looking both ", 5,
          " before crossing busy roads.\n\nOf course, not everyone is ", 6,
          " of their new neighbours. Gardeners often complain about holes in their lawns. Even so, surveys show that most city residents would ", 7,
          " seeing foxes disappear from their streets."
        ],
        gaps: [
          { options: ["spotted", "appeared", "looked", "shown"], answer: 0 },
          { options: ["provide", "give", "offer", "deliver"], answer: 0 },
          { options: ["estimate", "count", "measure", "value"], answer: 0 },
          { options: ["reputation", "celebrity", "opinion", "impression"], answer: 0 },
          { options: ["rather", "prefer", "like", "want"], answer: 0 },
          { options: ["ways", "sides", "directions", "paths"], answer: 0 },
          { options: ["fond", "keen", "interested", "pleased"], answer: 0 },
          { options: ["hate", "refuse", "deny", "avoid"], answer: 0 }
        ]
      },
      {
        name: "Texto 3 · Music and studying",
        text: [
          "Can music really help you study? Scientists have been trying to ", 0,
          " out the answer for decades. According to some studies, listening to calm music can ", 1,
          " stress levels and help students concentrate. Others, however, suggest that music with lyrics has a negative ", 2,
          " on memory, because the brain tries to process the words ", 3,
          " of focusing on the task.\n\nThe type of music seems to ", 4,
          " a crucial role. Fast, loud songs tend to interrupt concentration, ", 5,
          " instrumental music often improves it. Interestingly, the effect also depends on personality: extroverts appear to ", 6,
          " with background noise better than introverts.\n\nSo what should you do before your next exam? Experts recommend experimenting to find out what ", 7,
          " best for you."
        ],
        gaps: [
          { options: ["work", "take", "put", "get"], answer: 0 },
          { options: ["reduce", "descend", "decline", "shorten"], answer: 0 },
          { options: ["effect", "affect", "damage", "harm"], answer: 0 },
          { options: ["instead", "apart", "except", "out"], answer: 0 },
          { options: ["play", "make", "do", "keep"], answer: 0 },
          { options: ["whereas", "despite", "unless", "moreover"], answer: 0 },
          { options: ["cope", "manage", "handle", "face"], answer: 0 },
          { options: ["works", "goes", "does", "results"], answer: 0 }
        ]
      }
    ]
  },

  // ---- Part 2: Open cloze ----
  openCloze: {
    title: "Part 2 · Open cloze",
    instructions: "Escribe UNA palabra en cada hueco. Cuenta como correcta cualquier respuesta válida.",
    sets: [
      {
        name: "Texto 1 · My first job",
        text: [
          "Last summer I decided to get a part-time job for the first time ", 0,
          " my life. At first, my parents were not keen ", 1,
          " the idea, because they thought it would interfere ", 2,
          " my studies. In the end, they agreed, as long ", 3,
          " I promised to keep my grades up.\n\nI worked in a small café near the beach. Even ", 4,
          " the hours were long, I really enjoyed it. Not only ", 5,
          " I earn my own money, but I also became much more confident when talking to strangers. If I ", 6,
          " known how much I would learn, I would have started working ", 7,
          " earlier."
        ],
        gaps: [
          { answers: ["in"] },
          { answers: ["on"] },
          { answers: ["with"] },
          { answers: ["as"] },
          { answers: ["though", "if"] },
          { answers: ["did"] },
          { answers: ["had"] },
          { answers: ["much", "far", "even"] }
        ]
      },
      {
        name: "Texto 2 · My grandmother's English",
        text: [
          "My grandmother, ", 0,
          " is seventy-three, decided two years ago to learn English. Nobody in the family took her seriously at first: my uncle said she was ", 1,
          " old to start, and my mother expected her to give ", 2,
          " after a week or two.\n\nShe proved them wrong. She has ", 3,
          " missed a single class, and she practises online with students from all ", 4,
          " the world. Last month she wrote her first email in English, and next year she is planning to travel to Ireland ", 5,
          " her own.\n\n'Age is just a number,' she told me. 'The ", 6,
          " you start, the sooner you improve. I only wish I ", 7,
          " started earlier.'"
        ],
        gaps: [
          { answers: ["who"] },
          { answers: ["too"] },
          { answers: ["up"] },
          { answers: ["never", "not"] },
          { answers: ["over", "around", "round"] },
          { answers: ["on"] },
          { answers: ["sooner", "earlier"] },
          { answers: ["had"] }
        ]
      },
      {
        name: "Texto 3 · Cycling to school",
        text: [
          "Even ", 0,
          " most students in my town live close to their school, very ", 1,
          " of them walk there in the morning. The majority are driven ", 2,
          " their parents, which causes huge traffic jams at the school gates.\n\nOur headteacher has decided to do something ", 3,
          " it. From next term, students ", 4,
          " be encouraged to cycle, and the school is going to build a bike shed ", 5,
          " that bikes can be left safely. Anyone who cycles at ", 6,
          " three days a week will get free tickets for the cinema.\n\nIn my opinion, it is ", 7,
          " a good idea that other schools should copy it."
        ],
        gaps: [
          { answers: ["though", "if"] },
          { answers: ["few"] },
          { answers: ["by"] },
          { answers: ["about"] },
          { answers: ["will"] },
          { answers: ["so"] },
          { answers: ["least"] },
          { answers: ["such"] }
        ]
      }
    ]
  },

  // ---- Part 3: Word formation ----
  wordFormation: {
    title: "Part 3 · Word formation",
    instructions: "Transforma la palabra en mayúsculas para completar cada frase.",
    sets: [
      {
        name: "Batería 1",
        items: [
          { sentence: "Her ___ to detail makes her an excellent editor.", root: "ATTEND", answers: ["attention"] },
          { sentence: "The film was so ___ that I fell asleep halfway through.", root: "PREDICT", answers: ["predictable"] },
          { sentence: "There has been a significant ___ in air quality this year.", root: "IMPROVE", answers: ["improvement"] },
          { sentence: "It was very ___ of him to forget her birthday again.", root: "THOUGHT", answers: ["thoughtless"] },
          { sentence: "The instructions were confusing, so I followed them ___ .", root: "CORRECT", answers: ["incorrectly"] },
          { sentence: "Climbing without a rope is extremely ___ .", root: "DANGER", answers: ["dangerous"] },
          { sentence: "She showed great ___ when she admitted her mistake.", root: "HONEST", answers: ["honesty"] },
          { sentence: "Scientists have made an important ___ about sleep and memory.", root: "DISCOVER", answers: ["discovery"] }
        ]
      },
      {
        name: "Batería 2",
        items: [
          { sentence: "The ___ of the internet changed the way we communicate.", root: "INVENT", answers: ["invention"] },
          { sentence: "You need special ___ to enter the laboratory.", root: "PERMIT", answers: ["permission"] },
          { sentence: "The children waited for the magician with growing ___ .", root: "EXCITE", answers: ["excitement"] },
          { sentence: "It's ___ to cycle at night without lights.", root: "LEGAL", answers: ["illegal"] },
          { sentence: "The team celebrated their ___ win over the champions.", root: "EXPECT", answers: ["unexpected"] },
          { sentence: "She spoke with great ___ about her plans for the future.", root: "CONFIDENT", answers: ["confidence"] },
          { sentence: "This smartphone is one of the most ___ products of the year.", root: "SUCCESS", answers: ["successful"] },
          { sentence: "He was criticised for his ___ behaviour at the ceremony.", root: "RESPONSIBLE", answers: ["irresponsible"] }
        ]
      },
      {
        name: "Batería 3",
        items: [
          { sentence: "Her ___ as a singer grew rapidly after the video went viral.", root: "POPULAR", answers: ["popularity"] },
          { sentence: "The museum offers free ___ to students on Fridays.", root: "ADMIT", answers: ["admission"] },
          { sentence: "There is a surprising ___ between the two paintings.", root: "SIMILAR", answers: ["similarity"] },
          { sentence: "I was completely ___ of the danger until it was too late.", root: "AWARE", answers: ["unaware"] },
          { sentence: "The town is famous for the ___ of its people.", root: "FRIENDLY", answers: ["friendliness"] },
          { sentence: "The evidence was not ___ enough to change my mind.", root: "CONVINCE", answers: ["convincing"] },
          { sentence: "The company's ___ has doubled since January.", root: "PRODUCE", answers: ["production"] },
          { sentence: "He apologised for the ___ caused by the delay.", root: "CONVENIENT", answers: ["inconvenience"] }
        ]
      }
    ]
  },

  // ---- Part 4: Key word transformations ----
  transformations: {
    title: "Part 4 · Key word transformations",
    instructions: "Completa la segunda frase para que signifique lo mismo que la primera, usando la palabra dada (entre 2 y 5 palabras, incluida la palabra dada).",
    sets: [
      {
        name: "Batería 1",
        items: [
          {
            first: "I haven't seen my cousins for three years.",
            key: "TIME",
            second: "The last ___ my cousins was three years ago.",
            answers: ["time i saw", "time that i saw"]
          },
          {
            first: "\"You should study more,\" the teacher told me.",
            key: "ADVISED",
            second: "The teacher ___ more.",
            answers: ["advised me to study"]
          },
          {
            first: "They are building a new stadium in my town.",
            key: "BEING",
            second: "A new stadium ___ in my town.",
            answers: ["is being built"]
          },
          {
            first: "I regret not going to the concert.",
            key: "WISH",
            second: "I ___ to the concert.",
            answers: ["wish i had gone", "wish that i had gone"]
          },
          {
            first: "It was wrong of you to shout at your brother.",
            key: "SHOULD",
            second: "You ___ at your brother.",
            answers: ["should not have shouted", "shouldn't have shouted"]
          },
          {
            first: "Despite feeling tired, she finished the race.",
            key: "EVEN",
            second: "She finished the race ___ felt tired.",
            answers: ["even though she", "even if she"]
          }
        ]
      },
      {
        name: "Batería 2",
        items: [
          {
            first: "It's a pity I can't drive.",
            key: "WISH",
            second: "I ___ drive.",
            answers: ["wish i could"]
          },
          {
            first: "They cancelled the concert because of the storm.",
            key: "CALLED",
            second: "The concert was ___ because of the storm.",
            answers: ["called off"]
          },
          {
            first: "He started playing chess five years ago.",
            key: "BEEN",
            second: "He has ___ chess for five years.",
            answers: ["been playing"]
          },
          {
            first: "It isn't necessary for you to bring food.",
            key: "HAVE",
            second: "You ___ bring food.",
            answers: ["do not have to", "don't have to"]
          },
          {
            first: "\"Did you break the window?\" the teacher asked me.",
            key: "IF",
            second: "The teacher asked me ___ broken the window.",
            answers: ["if i had"]
          },
          {
            first: "Maria is a better swimmer than me.",
            key: "WELL",
            second: "I can't swim as ___ Maria.",
            answers: ["well as"]
          }
        ]
      },
      {
        name: "Batería 3",
        items: [
          {
            first: "Someone stole my bike last week.",
            key: "HAD",
            second: "I ___ stolen last week.",
            answers: ["had my bike"]
          },
          {
            first: "I'm sure he forgot about the meeting.",
            key: "MUST",
            second: "He ___ about the meeting.",
            answers: ["must have forgotten"]
          },
          {
            first: "Unless you hurry, you'll miss the bus.",
            key: "IF",
            second: "You'll miss the bus ___ hurry.",
            answers: ["if you do not", "if you don't"]
          },
          {
            first: "It was such a boring film that we left early.",
            key: "SO",
            second: "The film was ___ we left early.",
            answers: ["so boring that"]
          },
          {
            first: "I find it difficult to get up early.",
            key: "USED",
            second: "I am not ___ up early.",
            answers: ["used to getting"]
          },
          {
            first: "They will announce the results tomorrow.",
            key: "BE",
            second: "The results will ___ tomorrow.",
            answers: ["be announced"]
          }
        ]
      }
    ]
  },

  // ---- Part 5: Reading comprehension ----
  reading: {
    title: "Part 5 · Reading comprehension",
    instructions: "Lee el texto y elige la mejor respuesta para cada pregunta.",
    sets: [
      {
        name: "Lectura 1 · Teenage entrepreneurs",
        passageTitle: "The rise of the teenage entrepreneur",
        passage: [
          "When 16-year-old Maya Chen started selling hand-painted phone cases online, she never imagined that two years later she would be managing a business with customers in fifteen countries. \"I just wanted to earn some pocket money,\" she laughs. \"Suddenly I was learning about taxes, shipping and customer service — things they definitely don't teach you at school.\"",
          "Maya is part of a growing wave of teenage entrepreneurs who are using social media platforms to turn hobbies into businesses. According to a recent survey, nearly one in five teenagers in Europe has tried to make money online, whether by selling crafts, editing videos or offering tutoring to younger students.",
          "Psychologists are divided about this trend. Some argue that running a small business teaches skills that traditional education ignores: resilience, communication and financial planning. Others warn that the pressure of managing customers and deadlines can add stress to already demanding school years. Dr Elena Rossi, who studies adolescent behaviour, takes a middle position. \"The key is balance,\" she says. \"A few hours a week can be genuinely educational. The problem starts when the business becomes more important than sleep, friends or homework.\"",
          "Maya herself admits that the journey has not always been smooth. Last year, an unexpected flood of orders before Christmas forced her to work late into the night for weeks. \"I nearly gave up,\" she recalls. \"Then I learned the most important lesson of all: you can't do everything yourself.\" She now pays two classmates to help with packaging, and she has strict rules about switching off her phone after nine o'clock.",
          "Her advice for other teenagers thinking of starting a business? \"Start small, don't spend money you don't have, and remember why you started. If it stops being fun, it's just another homework assignment.\""
        ],
        questions: [
          {
            q: "What surprised Maya about her business?",
            options: [
              "How quickly it grew beyond her expectations.",
              "How little money she earned at the beginning.",
              "How easy it was to manage taxes and shipping.",
              "How unhelpful her school was."
            ],
            answer: 0
          },
          {
            q: "According to the survey mentioned in paragraph 2, teenage entrepreneurship is…",
            options: [
              "limited to selling handmade products.",
              "more common among students who dislike school.",
              "an activity that a significant minority of teenagers has tried.",
              "declining because of social media."
            ],
            answer: 2
          },
          {
            q: "What is Dr Elena Rossi's opinion?",
            options: [
              "Teenagers should never run businesses during term time.",
              "Business skills matter more than school subjects.",
              "A business is beneficial as long as it doesn't take over a teenager's life.",
              "Schools should teach financial planning instead."
            ],
            answer: 2
          },
          {
            q: "What was 'the most important lesson' Maya learned?",
            options: [
              "To stop taking orders before Christmas.",
              "To delegate tasks instead of doing everything alone.",
              "To keep her phone on at all times.",
              "To work late at night when necessary."
            ],
            answer: 1
          },
          {
            q: "The phrase \"an unexpected flood of orders\" (paragraph 4) suggests that the orders were…",
            options: [
              "cancelled without warning.",
              "damaged by water.",
              "very numerous and sudden.",
              "impossible to deliver."
            ],
            answer: 2
          },
          {
            q: "What is Maya's overall message in the final paragraph?",
            options: [
              "A business should stay enjoyable and financially careful.",
              "Homework is less important than business.",
              "Teenagers should invest as much money as possible.",
              "Starting big is the only way to succeed."
            ],
            answer: 0
          }
        ]
      },
      {
        name: "Lectura 2 · A year without new clothes",
        passageTitle: "My year without new clothes",
        passage: [
          "It started as a joke. Last January, my older sister challenged me to spend a whole year without buying a single item of clothing. I accepted mostly to prove her wrong — she was convinced I wouldn't survive a month. I should admit that fashion had always been my weakness: I spent most of my pocket money on trainers and T-shirts, many of which I wore only once or twice.",
          "The first weeks were surprisingly hard. It wasn't that I needed anything new; it was the habit I missed. Shopping had been my way of celebrating good news, recovering from bad days and, above all, spending time with friends at the shopping centre. Without it, Saturday afternoons felt strangely empty — until I discovered that my friends didn't actually care whether I bought anything. They just wanted my company.",
          "Around March, something changed. I found a repair café in my neighbourhood where volunteers teach you to fix your own clothes. My first attempt at sewing a button was a disaster, but by summer I could repair jeans and even adjust a jacket that had never fitted me properly. Clothes stopped being things I owned and became things I understood.",
          "Did I save money? Less than you might think — I spent some of it on fabric and a second-hand sewing machine. The real change was in how I see clothes now. The fashion industry produces enormous quantities of clothing every year, and much of it ends up in landfill within months. Once you have repaired a shirt with your own hands, throwing one away feels absurd.",
          "My year officially ended three weeks ago. My sister took me shopping to celebrate, expecting the old me to reappear. I walked around the shop, touched a few jumpers, checked how they were made — and left without buying anything. Some habits, it turns out, break more easily than you expect."
        ],
        questions: [
          {
            q: "Why did the writer accept the challenge?",
            options: [
              "To show her sister that she was wrong about her.",
              "Because she had stopped liking fashion.",
              "To save money for something special.",
              "Because her sister offered her a reward."
            ],
            answer: 0
          },
          {
            q: "What did the writer find most difficult at the beginning?",
            options: [
              "Not having enough clothes to wear.",
              "Losing the routine that shopping gave her.",
              "Her friends' reaction to the challenge.",
              "Explaining the challenge to her family."
            ],
            answer: 1
          },
          {
            q: "What do we learn about the repair café in paragraph 3?",
            options: [
              "The writer improved gradually despite a bad start.",
              "The writer taught other volunteers to sew.",
              "The writer's first repair was a great success.",
              "The café sold second-hand jackets."
            ],
            answer: 0
          },
          {
            q: "What does the writer say about money in paragraph 4?",
            options: [
              "She saved less than expected because of new expenses.",
              "She saved a large amount very quickly.",
              "She spent more than in a normal year.",
              "She stopped receiving pocket money."
            ],
            answer: 0
          },
          {
            q: "The writer says \"throwing one away feels absurd\" to show that…",
            options: [
              "repairing clothes changed her attitude to waste.",
              "her shirts were too expensive to throw away.",
              "she no longer owns any shirts.",
              "the fashion industry recycles most clothing."
            ],
            answer: 0
          },
          {
            q: "What happened when the challenge ended?",
            options: [
              "She realised she no longer wanted to buy clothes.",
              "She immediately bought several jumpers.",
              "Her sister apologised for the challenge.",
              "She decided to repeat the challenge."
            ],
            answer: 0
          }
        ]
      }
    ]
  },

  // ---- Listening (con síntesis de voz) ----
  listening: [
    {
      title: "Recording 1 · A student talks about her exchange trip",
      script: "Hi, I'm Sophie. Last term I spent three months on a school exchange in Manchester. Before I left, I was mostly worried about the food and the weather, but honestly, my biggest problem turned out to be something completely different: understanding people's accents. In class it was fine, but at my host family's dinner table everyone spoke so fast that for the first two weeks I just smiled and nodded. My host mother noticed and started summarising the conversation for me, which helped a lot. By the end of the trip I could even understand the grandfather's jokes, and believe me, that's an achievement. If you're planning an exchange, my advice is simple: don't pretend you understand when you don't. People are much more patient than you expect.",
      questions: [
        {
          q: "What was Sophie most worried about before the trip?",
          options: ["The local accents.", "The food and the weather.", "Her host family.", "Missing school."],
          answer: 1
        },
        {
          q: "What was her biggest real difficulty?",
          options: ["Understanding fast speech at home.", "The lessons at school.", "The cold weather.", "Being homesick."],
          answer: 0
        },
        {
          q: "How did her host mother help?",
          options: ["She spoke another language.", "She gave her private lessons.", "She summarised conversations.", "She told jokes slowly."],
          answer: 2
        },
        {
          q: "What advice does Sophie give?",
          options: ["Admit it when you don't understand.", "Practise accents before travelling.", "Avoid family dinners.", "Always smile and nod."],
          answer: 0
        }
      ]
    },
    {
      title: "Recording 2 · A radio announcement about a summer course",
      script: "Are you between fourteen and seventeen and looking for something different this summer? Green Valley Adventure Camp is now accepting applications for its July programme. This year, alongside the usual climbing, kayaking and mountain biking, we're introducing two brand-new workshops: wildlife photography and outdoor cooking. The camp runs for two weeks, from the fifth to the nineteenth of July, and places are limited to sixty participants. The full price is four hundred and fifty pounds, but if you apply before the thirty-first of May, you'll receive a fifteen per cent discount. And remember, no previous experience is needed for any activity — our qualified instructors will take care of everything. To apply, visit our website or call the number at the end of this announcement. Don't leave it too late: last year all places were taken three weeks before the deadline.",
      questions: [
        {
          q: "What is new at the camp this year?",
          options: ["Climbing and kayaking.", "Mountain biking.", "Photography and cooking workshops.", "A longer programme."],
          answer: 2
        },
        {
          q: "How long does the camp last?",
          options: ["One week.", "Two weeks.", "Three weeks.", "The whole of July."],
          answer: 1
        },
        {
          q: "How can you get a discount?",
          options: ["By applying before 31st May.", "By having previous experience.", "By booking online.", "By bringing a friend."],
          answer: 0
        },
        {
          q: "What happened last year?",
          options: ["The camp was cancelled.", "Places sold out early.", "The price went up.", "The deadline was extended."],
          answer: 1
        }
      ]
    },
    {
      title: "Recording 3 · A boy talks about volunteering at an animal shelter",
      script: "Hi, I'm Dan. Every Saturday morning I volunteer at the local animal shelter. I originally signed up because I wanted a dog, and my parents said I should find out how much work animals really are. I think they secretly hoped the experience would put me off, but their plan failed completely — after three weeks I loved animals even more than before. My main job is walking the dogs, though I've also learned to clean the cages properly and even to help feed the older cats, who can be surprisingly fussy about their food. The hardest part isn't the work itself; it's saying goodbye when an animal you like gets adopted. You feel happy and sad at exactly the same time. If you're thinking about volunteering, my tip is simple: be patient. The animals don't trust you at first, but when they finally do, it's the best feeling in the world.",
      questions: [
        {
          q: "Why did Dan start volunteering at the shelter?",
          options: ["His parents wanted him to see how much work animals need.", "He wanted to earn some money.", "His school required volunteer work.", "A friend invited him to join."],
          answer: 0
        },
        {
          q: "What was the result of his parents' plan?",
          options: ["It failed — he liked animals even more.", "It worked — he stopped wanting a dog.", "They bought him a dog after three weeks.", "He gave up after a month."],
          answer: 0
        },
        {
          q: "What does Dan find hardest?",
          options: ["Saying goodbye to adopted animals.", "Cleaning the cages.", "Feeding the older cats.", "Getting up early on Saturdays."],
          answer: 0
        },
        {
          q: "What advice does he give to future volunteers?",
          options: ["Be patient with the animals.", "Start with cats, not dogs.", "Volunteer every day.", "Bring food for the animals."],
          answer: 0
        }
      ]
    },
    {
      title: "Recording 4 · A school announcement about a photography competition",
      script: "Attention, all students! The annual Westfield School Photography Competition is back, and this year the theme is 'Everyday Heroes'. We want pictures of the people who make our community better: nurses, cleaners, coaches, neighbours — anyone whose work often goes unnoticed. You can enter up to three photographs, taken with any camera, including your phone. Send your entries to the art department by email before Friday the twentieth of November. Remember to include a short title for each photo and, very importantly, the permission of the person who appears in it. A jury made up of teachers and a professional photographer will choose the winners. First prize is a weekend photography course in the capital, and the ten best images will be exhibited in the school library throughout December. Last year we received over two hundred entries, so don't wait until the last minute. Good luck!",
      questions: [
        {
          q: "What kind of photos does the competition want?",
          options: ["People whose work is often not noticed.", "Famous local celebrities.", "School sports events.", "Landscapes of the local area."],
          answer: 0
        },
        {
          q: "What must each entry include?",
          options: ["A title and the person's permission.", "A professional camera.", "A payment of ten pounds.", "The photographer's age."],
          answer: 0
        },
        {
          q: "What is the first prize?",
          options: ["A weekend photography course.", "A new camera.", "Money for the school library.", "A trip abroad."],
          answer: 0
        },
        {
          q: "Why should students send their entries early?",
          options: ["Many entries are expected, as in previous years.", "The prize gets smaller over time.", "Only the first ten entries are accepted.", "The theme may change in November."],
          answer: 0
        }
      ]
    }
  ],

  // ---- Writing ----
  writing: {
    tasks: [
      {
        id: "essay",
        label: "Part 1 · Essay (obligatorio)",
        prompt: "In your English class you have been talking about the environment. Write an essay (140–190 words) on this question:\n\n\"Some people say that young people can do very little to protect the environment. Do you agree?\"\n\nNotes — write about: 1. transport, 2. shopping habits, 3. (your own idea).",
        min: 140, max: 190,
        guide: [
          "Párrafo 1: introduce el tema con tus propias palabras (no copies la pregunta).",
          "Párrafos 2-3: desarrolla las dos ideas dadas (transporte y consumo), con un ejemplo cada una.",
          "Párrafo 4: añade TU propia idea (la tercera nota es obligatoria).",
          "Conclusión: da tu opinión clara respondiendo a la pregunta."
        ],
        phrases: [
          "It is often said that…", "Firstly, / Secondly, / Finally,",
          "One clear example of this is…", "On the one hand… on the other hand…",
          "What is more,…", "As far as I am concerned,…",
          "In conclusion, I firmly believe that…", "To sum up,…"
        ]
      },
      {
        id: "article",
        label: "Part 2 · Article",
        prompt: "You see this announcement on an international website for teenagers:\n\nARTICLES WANTED — \"The best app I have ever used\"\nTell us about an app you love. What does it do? Why do you recommend it? The best articles will be published next month.\n\nWrite your article (140–190 words).",
        min: 140, max: 190,
        guide: [
          "Título llamativo y pregunta directa al lector para enganchar.",
          "Tono informal-neutro: puedes usar contracciones y dirigirte al lector (you).",
          "Estructura: qué app es → qué hace → por qué la recomiendas.",
          "Cierra con una frase memorable o una recomendación directa."
        ],
        phrases: [
          "Have you ever wondered…?", "Believe it or not,…",
          "The best thing about it is…", "What makes it special is…",
          "Trust me,…", "Why not give it a try?",
          "You won't regret it!", "All in all,…"
        ]
      },
      {
        id: "email",
        label: "Part 2 · Email / Letter",
        prompt: "You have received this email from your English-speaking friend Alex:\n\n\"Guess what — I'm coming to your town for a week this summer! Can you recommend things to do? Also, what's the weather like, and what clothes should I bring?\"\n\nWrite your email (140–190 words).",
        min: 140, max: 190,
        guide: [
          "Saludo informal (Hi Alex,) y reacciona a la noticia (That's great news!).",
          "Responde a TODAS las preguntas: cosas que hacer, tiempo, ropa.",
          "Tono informal: contracciones, exclamaciones, preguntas.",
          "Despedida informal: Can't wait to see you! / Write back soon!"
        ],
        phrases: [
          "It was great to hear from you!", "I can't believe you're coming!",
          "You should definitely…", "If I were you, I'd bring…",
          "Another thing you'd love is…", "As for the weather,…",
          "Let me know when you arrive.", "Looking forward to seeing you!"
        ]
      },
      {
        id: "review",
        label: "Part 2 · Review",
        prompt: "You see this announcement in an international magazine:\n\nREVIEWS WANTED — Series worth watching\nHave you seen a series recently that you couldn't stop watching? Write a review describing it and explaining why other teenagers would (or wouldn't) enjoy it.\n\nWrite your review (140–190 words).",
        min: 140, max: 190,
        guide: [
          "Título con el nombre de la serie.",
          "Párrafo 1: presenta la serie (género, plataforma, de qué trata) SIN spoilers.",
          "Párrafo 2: qué destaca (actores, guion, ritmo) y algún punto débil para ser creíble.",
          "Párrafo final: recomendación clara y a quién le gustará."
        ],
        phrases: [
          "Set in…, the series follows…", "What really stands out is…",
          "The plot is full of unexpected twists.", "My only criticism is that…",
          "The acting is outstanding.", "It's a must-see for anyone who…",
          "I would thoroughly recommend it to…", "Don't miss it!"
        ]
      }
    ],
    checklist: [
      "¿Has respondido a TODAS las partes de la tarea?",
      "¿Está entre 140 y 190 palabras?",
      "¿Tiene párrafos claros (introducción, desarrollo, conclusión)?",
      "¿Has usado conectores variados (however, although, what is more…)?",
      "¿Has incluido al menos 2 estructuras de nivel B2 (condicionales, pasiva, relativas…)?",
      "¿Has revisado ortografía y concordancias (he does, three years…)?",
      "¿El tono es el adecuado (formal para essay, informal para email)?"
    ]
  },

  // ---- Speaking ----
  speaking: {
    parts: [
      {
        title: "Part 1 · Interview (2 min)",
        desc: "El examinador te hace preguntas personales. Responde con 2-3 frases: idea + razón o ejemplo. Nunca contestes solo 'yes' o 'no'.",
        seconds: 120,
        prompts: [
          "Where are you from? What do you like most about living there?",
          "What do you usually do at the weekend?",
          "Do you prefer watching films at home or at the cinema? Why?",
          "What kind of music do you listen to? Has your taste changed?",
          "What would you like to do when you finish school?",
          "Do you enjoy studying English? What do you find most difficult?",
          "Tell us about your best friend. How did you meet?",
          "What's your favourite way to relax after a busy day?"
        ]
      },
      {
        title: "Part 2 · Long turn (1 min hablando)",
        desc: "Te dan dos fotos y debes compararlas y responder una pregunta durante 1 minuto TÚ SOLO. Practica describiendo estas situaciones: compara, especula (might, could, seems) y da tu opinión.",
        seconds: 60,
        prompts: [
          "Compare these two situations: studying alone at home vs. studying with friends in a library. Why might people choose each one?",
          "Compare: eating fast food with friends vs. a family dinner at home. What do people enjoy about each?",
          "Compare: a crowded music festival vs. a small concert. Why might people prefer one or the other?",
          "Compare: doing sport outdoors vs. training in a gym. What are the advantages of each?",
          "Compare: travelling with your family vs. travelling with friends. What can people learn from each experience?",
          "Compare: working in a supermarket vs. working as a lifeguard in summer. Why might teenagers choose each job?",
          "Compare: reading a book vs. listening to an audiobook. What might people enjoy about each?"
        ]
      },
      {
        title: "Part 3 · Collaborative task (3 min)",
        desc: "Conversación con tu compañero/a sobre unas ideas escritas. Practica proponiendo, reaccionando y llegando a un acuerdo. Ideal para practicar con alguien, o grábate haciendo los dos papeles.",
        seconds: 180,
        prompts: [
          "Your school wants to spend money on ONE of these: a new library, sports equipment, a school trip, computers, or a music room. Discuss the benefits of each and decide which would be best.",
          "These things can make a town attractive for teenagers: a cinema, sports facilities, parks, shopping centres, fast internet. Talk about how important each one is, then choose the two most important.",
          "Ways to learn a language: watching series, travelling abroad, using apps, having a penfriend, taking classes. Discuss how effective each one is and agree on the best combination.",
          "Ideas for reducing stress before exams: doing sport, planning a timetable, sleeping more, studying with friends, taking breaks. Discuss how helpful each one is and choose the most useful."
        ]
      },
      {
        title: "Part 4 · Discussion (4 min)",
        desc: "Preguntas de opinión relacionadas con el tema de la Part 3. Da tu opinión, justifícala y añade ejemplos. Frases útiles: 'In my view…', 'It depends on…', 'That's a good point, but…'",
        seconds: 240,
        prompts: [
          "Do you think schools should teach practical skills like cooking or managing money? Why?",
          "Is it better to save money or spend it on experiences? Why do you think so?",
          "Some people say teenagers spend too much time online. Do you agree?",
          "How important is it for young people to do sport regularly?",
          "Will people still learn foreign languages in the future, now that we have translation apps?",
          "Should schools give students more homework or less? Why?",
          "Is it important for teenagers to have a part-time job? What can they learn from it?"
        ]
      }
    ],
    tips: [
      "Si no entiendes una pregunta, pide que la repitan: 'Sorry, could you say that again?' — no penaliza.",
      "Usa 'fillers' naturales mientras piensas: 'Well…', 'Let me think…', 'That's an interesting question…'",
      "En Part 2 no describas foto a foto: COMPARA desde el principio ('In both pictures…', 'while in the second one…').",
      "En Part 3 interactúa: 'What do you think?', 'I see your point, but…' — evalúan la conversación, no el monólogo.",
      "Los errores pequeños no suspenden. Quedarse callado, sí."
    ]
  },

  // ---- Vocabulario: flashcards ----
  flashcards: [
    { front: "come up with", meaning: "inventar, ocurrírsele (una idea)", example: "She came up with a brilliant solution to the problem." },
    { front: "look forward to", meaning: "estar deseando (que llegue algo)", example: "I'm really looking forward to the summer holidays." },
    { front: "put off", meaning: "posponer, aplazar", example: "Don't put off studying until the night before the exam." },
    { front: "give up", meaning: "rendirse, dejar (un hábito)", example: "He gave up playing video games during exam week." },
    { front: "run out of", meaning: "quedarse sin algo", example: "We ran out of time before finishing the project." },
    { front: "get on with", meaning: "llevarse bien con alguien", example: "I get on really well with my classmates." },
    { front: "turn down", meaning: "rechazar / bajar (volumen)", example: "She turned down the job offer because of the salary." },
    { front: "set up", meaning: "montar, fundar (un negocio)", example: "They set up an online shop selling handmade jewellery." },
    { front: "find out", meaning: "descubrir, enterarse", example: "I found out about the concert too late to buy tickets." },
    { front: "carry on", meaning: "continuar", example: "Despite the rain, they carried on playing." },
    { front: "take up", meaning: "empezar (un hobby)", example: "My sister has taken up photography recently." },
    { front: "deal with", meaning: "ocuparse de, afrontar", example: "Teachers have to deal with many problems every day." },
    { front: "make up your mind", meaning: "decidirse", example: "I can't make up my mind between the two options." },
    { front: "keen on", meaning: "aficionado a, entusiasmado con", example: "She's very keen on water sports." },
    { front: "fed up with", meaning: "harto de", example: "I'm fed up with doing the same exercises every day." },
    { front: "responsible for", meaning: "responsable de", example: "He is responsible for organising the school trip." },
    { front: "succeed in", meaning: "lograr, tener éxito en", example: "She succeeded in passing the exam on her first attempt." },
    { front: "depend on", meaning: "depender de", example: "Whether we go out depends on the weather." },
    { front: "do your best", meaning: "hacerlo lo mejor posible", example: "Just do your best — that's all anyone can ask." },
    { front: "make progress", meaning: "progresar, avanzar", example: "You've made real progress with your English this term." },
    { front: "take part in", meaning: "participar en", example: "Hundreds of students took part in the competition." },
    { front: "pay attention to", meaning: "prestar atención a", example: "Pay attention to the instructions before you start." },
    { front: "have a good time", meaning: "pasarlo bien", example: "We had a really good time at the festival." },
    { front: "it's worth + -ing", meaning: "merece la pena (hacer algo)", example: "It's worth visiting the old town if you have time." },
    { front: "hardly ever", meaning: "casi nunca", example: "I hardly ever watch TV during the week." },
    { front: "as long as", meaning: "siempre que, con tal de que", example: "You can borrow my bike as long as you're careful." },
    { front: "in spite of", meaning: "a pesar de", example: "In spite of the noise, she kept studying." },
    { front: "whereas", meaning: "mientras que (contraste)", example: "I love winter, whereas my brother prefers summer." },
    { front: "achieve a goal", meaning: "alcanzar un objetivo", example: "Working hard is the only way to achieve your goals." },
    { front: "broaden your horizons", meaning: "ampliar horizontes", example: "Travelling abroad really broadens your horizons." },
    { front: "break down", meaning: "averiarse / venirse abajo", example: "Our car broke down on the way to the airport." },
    { front: "bring up", meaning: "criar / sacar un tema", example: "She was brought up by her grandparents." },
    { front: "come across", meaning: "encontrar por casualidad", example: "I came across an old photo while tidying my room." },
    { front: "cut down on", meaning: "reducir el consumo de", example: "The doctor told him to cut down on sugar." },
    { front: "end up", meaning: "acabar (en una situación)", example: "We got lost and ended up in a tiny village." },
    { front: "figure out", meaning: "entender, resolver", example: "I can't figure out how this app works." },
    { front: "get over", meaning: "superar (enfermedad, ruptura)", example: "It took her months to get over the flu." },
    { front: "get rid of", meaning: "deshacerse de", example: "We should get rid of all these old magazines." },
    { front: "hang out", meaning: "pasar el rato", example: "We usually hang out at the park after school." },
    { front: "keep up with", meaning: "seguir el ritmo de", example: "He walks so fast that I can't keep up with him." },
    { front: "let down", meaning: "decepcionar", example: "I promised to help, and I won't let you down." },
    { front: "look after", meaning: "cuidar de", example: "Can you look after my dog this weekend?" },
    { front: "look up", meaning: "buscar (en un diccionario)", example: "Look the word up if you don't know it." },
    { front: "make up", meaning: "inventar / reconciliarse", example: "They argued, but they made up the next day." },
    { front: "pick up", meaning: "recoger / aprender sin estudiar", example: "My dad picks me up after training." },
    { front: "point out", meaning: "señalar, hacer notar", example: "She pointed out a mistake in my essay." },
    { front: "put up with", meaning: "aguantar, tolerar", example: "I can't put up with this noise any longer." },
    { front: "show off", meaning: "presumir", example: "He's always showing off his new phone." },
    { front: "sort out", meaning: "resolver, organizar", example: "Don't worry, we'll sort out the problem together." },
    { front: "take after", meaning: "parecerse a (un familiar)", example: "Everyone says I take after my mother." },
    { front: "take off", meaning: "despegar / quitarse (ropa)", example: "The plane took off two hours late." },
    { front: "turn out", meaning: "resultar", example: "The exam turned out to be easier than expected." },
    { front: "turn up", meaning: "aparecer, presentarse", example: "He turned up an hour late, as usual." },
    { front: "sign up for", meaning: "apuntarse a", example: "I've signed up for a photography course." },
    { front: "stand out", meaning: "destacar", example: "Her essay stood out from all the others." },
    { front: "work out", meaning: "hacer ejercicio / salir bien", example: "Everything worked out fine in the end." },
    { front: "on purpose", meaning: "a propósito", example: "I'm sure he didn't do it on purpose." },
    { front: "by heart", meaning: "de memoria", example: "We had to learn the poem by heart." },
    { front: "take it easy", meaning: "tomárselo con calma", example: "You've been studying all day — take it easy tonight!" },
    { front: "in the long run", meaning: "a la larga", example: "Studying a little every day pays off in the long run." }
  ],

  // ---- Gramática ----
  grammar: {
    title: "Gramática B2",
    sets: [
      {
        name: "Quiz 1",
        items: [
          {
            q: "If I ___ harder last year, I would have passed the exam.",
            options: ["studied", "had studied", "would study", "have studied"],
            answer: 1, note: "Tercer condicional: if + past perfect, would have + participio."
          },
          {
            q: "The homework ___ by tomorrow morning.",
            options: ["must finish", "must be finished", "must have finish", "must finishing"],
            answer: 1, note: "Pasiva con modal: modal + be + participio."
          },
          {
            q: "She asked me where ___ the day before.",
            options: ["did I go", "I had gone", "I have gone", "do I go"],
            answer: 1, note: "Estilo indirecto: la pregunta pierde el orden interrogativo y el pasado retrocede."
          },
          {
            q: "I wish I ___ taller — I'd love to play basketball professionally.",
            options: ["am", "was/were", "will be", "have been"],
            answer: 1, note: "Wish + pasado simple para deseos sobre el presente."
          },
          {
            q: "By the time we arrived, the film ___ .",
            options: ["already started", "has already started", "had already started", "was already starting"],
            answer: 2, note: "Past perfect: acción anterior a otra acción pasada."
          },
          {
            q: "My brother ___ play with toy cars for hours when he was little.",
            options: ["used to", "is used to", "would used to", "use to"],
            answer: 0, note: "Used to + infinitivo para hábitos del pasado."
          },
          {
            q: "That's the girl ___ brother plays in the school band.",
            options: ["who", "which", "whose", "that"],
            answer: 2, note: "Whose expresa posesión en oraciones de relativo."
          },
          {
            q: "You ___ have seen Marta at the party — she was in London!",
            options: ["mustn't", "shouldn't", "can't", "wouldn't"],
            answer: 2, note: "Can't have + participio: deducción negativa sobre el pasado."
          },
          {
            q: "I'm not used ___ up so early at the weekend.",
            options: ["to get", "to getting", "getting", "get"],
            answer: 1, note: "Be used to + -ing (estar acostumbrado a)."
          },
          {
            q: "___ it was raining heavily, the match wasn't cancelled.",
            options: ["Despite", "Although", "However", "In spite of"],
            answer: 1, note: "Although + oración completa; despite/in spite of + sustantivo o -ing."
          },
          {
            q: "The teacher made us ___ the exercise again.",
            options: ["to do", "doing", "do", "done"],
            answer: 2, note: "Make + objeto + infinitivo sin 'to'."
          },
          {
            q: "This time next week, I ___ on a beach in Greece.",
            options: ["will lie", "will be lying", "am lying", "lie"],
            answer: 1, note: "Futuro continuo: acción en desarrollo en un momento futuro."
          }
        ]
      },
      {
        name: "Quiz 2",
        items: [
          {
            q: "By next June, I ___ English for five years.",
            options: ["will study", "will have been studying", "am studying", "have studied"],
            answer: 1, note: "Futuro perfecto continuo: duración de una acción hasta un momento futuro."
          },
          {
            q: "She suggested ___ to the beach instead of the pool.",
            options: ["to go", "going", "go", "that going"],
            answer: 1, note: "Suggest + -ing (nunca suggest + to + infinitivo)."
          },
          {
            q: "I'd rather you ___ smoke in here.",
            options: ["don't", "didn't", "won't", "not"],
            answer: 1, note: "Would rather + sujeto + pasado simple para el presente/futuro."
          },
          {
            q: "The house ___ we stayed last summer was over a century old.",
            options: ["which", "where", "that", "what"],
            answer: 1, note: "Where sustituye a 'in which' para lugares."
          },
          {
            q: "He denied ___ the money from the drawer.",
            options: ["to steal", "steal", "stealing", "to have stolen"],
            answer: 2, note: "Deny + -ing (igual que admit, avoid, enjoy…)."
          },
          {
            q: "You ___ better go home before it gets dark.",
            options: ["would", "had", "should", "must"],
            answer: 1, note: "Had better + infinitivo sin 'to': consejo con advertencia."
          },
          {
            q: "This is the first time I ___ sushi — it's delicious!",
            options: ["eat", "ate", "have eaten", "am eating"],
            answer: 2, note: "It's the first time + present perfect."
          },
          {
            q: "The teacher let us ___ home early on Friday.",
            options: ["to go", "going", "go", "went"],
            answer: 2, note: "Let + objeto + infinitivo sin 'to' (compárese con allow + to)."
          },
          {
            q: "___ the homework, she went out with her friends.",
            options: ["Having finished", "Finished", "To finish", "Finish"],
            answer: 0, note: "Having + participio: acción completada antes de la principal."
          },
          {
            q: "There's no point ___ about it now — it's done.",
            options: ["to worry", "worrying", "worry", "worried"],
            answer: 1, note: "There's no point (in) + -ing."
          },
          {
            q: "He apologised ___ late to the meeting.",
            options: ["for being", "to be", "of being", "for be"],
            answer: 0, note: "Apologise for + -ing."
          },
          {
            q: "I look forward to ___ from you soon.",
            options: ["hear", "hearing", "be heard", "have heard"],
            answer: 1, note: "Look forward to + -ing ('to' es preposición aquí)."
          }
        ]
      }
    ]
  },

  // ---- Info del examen (dashboard) ----
  examParts: [
    { name: "Reading & Use of English", time: "1 h 15 min", weight: "40% de la nota", detail: "7 partes, 52 preguntas" },
    { name: "Writing", time: "1 h 20 min", weight: "20% de la nota", detail: "2 textos de 140-190 palabras" },
    { name: "Listening", time: "40 min aprox.", weight: "20% de la nota", detail: "4 partes, 30 preguntas" },
    { name: "Speaking", time: "14 min (en parejas)", weight: "20% de la nota", detail: "4 partes con otro candidato" }
  ]
};
