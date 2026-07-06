// ============ Banco de contenidos B2 First ============
// Todos los ejercicios siguen el formato real del examen Cambridge B2 First (FCE).

const DATA = {

  // ---- Reading & Use of English Part 1: Multiple-choice cloze ----
  mcCloze: {
    title: "Part 1 · Multiple-choice cloze",
    instructions: "Lee el texto y elige la palabra correcta (A, B, C o D) para cada hueco.",
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

  // ---- Part 2: Open cloze ----
  openCloze: {
    title: "Part 2 · Open cloze",
    instructions: "Escribe UNA palabra en cada hueco. Cuenta como correcta cualquier respuesta válida.",
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

  // ---- Part 3: Word formation ----
  wordFormation: {
    title: "Part 3 · Word formation",
    instructions: "Transforma la palabra en mayúsculas para completar cada frase.",
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

  // ---- Part 4: Key word transformations ----
  transformations: {
    title: "Part 4 · Key word transformations",
    instructions: "Completa la segunda frase para que signifique lo mismo que la primera, usando la palabra dada (entre 2 y 5 palabras, incluida la palabra dada).",
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

  // ---- Parts 5-7: Reading comprehension ----
  reading: {
    title: "Part 5 · Reading comprehension",
    instructions: "Lee el texto y elige la mejor respuesta para cada pregunta.",
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
          "Do you enjoy studying English? What do you find most difficult?"
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
          "Compare: travelling with your family vs. travelling with friends. What can people learn from each experience?"
        ]
      },
      {
        title: "Part 3 · Collaborative task (3 min)",
        desc: "Conversación con tu compañero/a sobre unas ideas escritas. Practica proponiendo, reaccionando y llegando a un acuerdo. Ideal para practicar con alguien, o grábate haciendo los dos papeles.",
        seconds: 180,
        prompts: [
          "Your school wants to spend money on ONE of these: a new library, sports equipment, a school trip, computers, or a music room. Discuss the benefits of each and decide which would be best.",
          "These things can make a town attractive for teenagers: a cinema, sports facilities, parks, shopping centres, fast internet. Talk about how important each one is, then choose the two most important.",
          "Ways to learn a language: watching series, travelling abroad, using apps, having a penfriend, taking classes. Discuss how effective each one is and agree on the best combination."
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
          "Will people still learn foreign languages in the future, now that we have translation apps?"
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
    { front: "broaden your horizons", meaning: "ampliar horizontes", example: "Travelling abroad really broadens your horizons." }
  ],

  // ---- Gramática ----
  grammar: [
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
  ],

  // ---- Info del examen (dashboard) ----
  examParts: [
    { name: "Reading & Use of English", time: "1 h 15 min", weight: "40% de la nota", detail: "7 partes, 52 preguntas" },
    { name: "Writing", time: "1 h 20 min", weight: "20% de la nota", detail: "2 textos de 140-190 palabras" },
    { name: "Listening", time: "40 min aprox.", weight: "20% de la nota", detail: "4 partes, 30 preguntas" },
    { name: "Speaking", time: "14 min (en parejas)", weight: "20% de la nota", detail: "4 partes con otro candidato" }
  ]
};
