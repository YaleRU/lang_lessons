export type LexExample = {
  label: string
  th: string
  rom: string
  tail: string
  alone: string
}

export type LexExtra = {
  th: string
  rom: string
}

export type Lexeme = {
  n: number
  th: string
  rom: string
  ru: string
  gloss: string
  notes: string[]
  extras: LexExtra[]
  examples: LexExample[]
}

export type LexiconPart = {
  id: "verbs" | "nouns" | "adjectives"
  title: string
  items: Lexeme[]
}

export const LEXICON: LexiconPart[] = [
  {
    "id": "verbs",
    "title": "Глаголы",
    "items": [
      {
        "n": 1,
        "th": "ไป",
        "rom": "bpai",
        "ru": "пай",
        "gloss": "Идти, ехать туда. Виберг: go. Leipzig–Jakarta: to go.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я иду.",
            "th": "ผมไปครับ",
            "rom": "phǒm bpai khráp",
            "tail": "",
            "alone": "ไป"
          },
          {
            "label": "Женщина. Я иду.",
            "th": "ฉันไปค่ะ",
            "rom": "chǎn bpai khâ",
            "tail": "",
            "alone": "ไป"
          },
          {
            "label": "Я не иду.",
            "th": "ผมไม่ไปครับ",
            "rom": "phǒm mâi bpai khráp",
            "tail": "",
            "alone": "ไป"
          },
          {
            "label": "Мужчина. Вы идёте?",
            "th": "คุณไปไหมครับ",
            "rom": "khun bpai mǎi khráp",
            "tail": "",
            "alone": "ไป"
          },
          {
            "label": "Женщина. Вы идёте?",
            "th": "คุณไปไหมคะ",
            "rom": "khun bpai mǎi khá",
            "tail": "",
            "alone": "ไป"
          },
          {
            "label": "Вчера я пошёл.",
            "th": "เมื่อวานผมไปครับ",
            "rom": "mʉ̂ʉa-waan phǒm bpai khráp",
            "tail": "",
            "alone": "ไป"
          },
          {
            "label": "Я собираюсь идти.",
            "th": "ผมจะไปครับ",
            "rom": "phǒm jà bpai khráp",
            "tail": "",
            "alone": "ไป"
          }
        ]
      },
      {
        "n": 2,
        "th": "มา",
        "rom": "maa",
        "ru": "ма",
        "gloss": "Приходить, движение сюда. Виберг: come. Swadesh, Leipzig–Jakarta: to come.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я прихожу.",
            "th": "ผมมาครับ",
            "rom": "phǒm maa khráp",
            "tail": "",
            "alone": "มา"
          },
          {
            "label": "Женщина. Я прихожу.",
            "th": "ฉันมาค่ะ",
            "rom": "chǎn maa khâ",
            "tail": "",
            "alone": "มา"
          },
          {
            "label": "Я не прихожу.",
            "th": "ผมไม่มาครับ",
            "rom": "phǒm mâi maa khráp",
            "tail": "",
            "alone": "มา"
          },
          {
            "label": "Мужчина. Вы приходите?",
            "th": "คุณมาไหมครับ",
            "rom": "khun maa mǎi khráp",
            "tail": "",
            "alone": "มา"
          },
          {
            "label": "Женщина. Вы приходите?",
            "th": "คุณมาไหมคะ",
            "rom": "khun maa mǎi khá",
            "tail": "",
            "alone": "มา"
          },
          {
            "label": "Вчера я пришёл.",
            "th": "เมื่อวานผมมาครับ",
            "rom": "mʉ̂ʉa-waan phǒm maa khráp",
            "tail": "",
            "alone": "มา"
          },
          {
            "label": "Я собираюсь прийти.",
            "th": "ผมจะมาครับ",
            "rom": "phǒm jà maa khráp",
            "tail": "",
            "alone": "มา"
          }
        ]
      },
      {
        "n": 3,
        "th": "ให้",
        "rom": "hâi",
        "ru": "хай",
        "gloss": "Давать. Виберг: give. Swadesh, Leipzig–Jakarta: to give.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я даю воду.",
            "th": "ผมให้น้ำครับ",
            "rom": "phǒm hâi náam khráp",
            "tail": "",
            "alone": "ให้"
          },
          {
            "label": "Женщина. Я даю воду.",
            "th": "ฉันให้น้ำค่ะ",
            "rom": "chǎn hâi náam khâ",
            "tail": "",
            "alone": "ให้"
          },
          {
            "label": "Я не даю воду.",
            "th": "ผมไม่ให้น้ำครับ",
            "rom": "phǒm mâi hâi náam khráp",
            "tail": "",
            "alone": "ให้"
          },
          {
            "label": "Мужчина. Вы даёте воду?",
            "th": "คุณให้น้ำไหมครับ",
            "rom": "khun hâi náam mǎi khráp",
            "tail": "",
            "alone": "ให้"
          },
          {
            "label": "Женщина. Вы даёте воду?",
            "th": "คุณให้น้ำไหมคะ",
            "rom": "khun hâi náam mǎi khá",
            "tail": "",
            "alone": "ให้"
          },
          {
            "label": "Вчера я дал воду.",
            "th": "เมื่อวานผมให้น้ำครับ",
            "rom": "mʉ̂ʉa-waan phǒm hâi náam khráp",
            "tail": "",
            "alone": "ให้"
          },
          {
            "label": "Я собираюсь дать воду.",
            "th": "ผมจะให้น้ำครับ",
            "rom": "phǒm jà hâi náam khráp",
            "tail": "",
            "alone": "ให้"
          }
        ]
      },
      {
        "n": 4,
        "th": "เอา",
        "rom": "ao",
        "ru": "ау",
        "gloss": "Брать. Виберг: take. Leipzig–Jakarta: to take. В быту здесь เอา.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я беру воду.",
            "th": "ผมเอาน้ำครับ",
            "rom": "phǒm ao náam khráp",
            "tail": "",
            "alone": "เอา"
          },
          {
            "label": "Женщина. Я беру воду.",
            "th": "ฉันเอาน้ำค่ะ",
            "rom": "chǎn ao náam khâ",
            "tail": "",
            "alone": "เอา"
          },
          {
            "label": "Я не беру воду.",
            "th": "ผมไม่เอาน้ำครับ",
            "rom": "phǒm mâi ao náam khráp",
            "tail": "",
            "alone": "เอา"
          },
          {
            "label": "Мужчина. Вы берёте воду?",
            "th": "คุณเอาน้ำไหมครับ",
            "rom": "khun ao náam mǎi khráp",
            "tail": "",
            "alone": "เอา"
          },
          {
            "label": "Женщина. Вы берёте воду?",
            "th": "คุณเอาน้ำไหมคะ",
            "rom": "khun ao náam mǎi khá",
            "tail": "",
            "alone": "เอา"
          },
          {
            "label": "Вчера я взял воду.",
            "th": "เมื่อวานผมเอาน้ำครับ",
            "rom": "mʉ̂ʉa-waan phǒm ao náam khráp",
            "tail": "",
            "alone": "เอา"
          },
          {
            "label": "Я собираюсь взять воду.",
            "th": "ผมจะเอาน้ำครับ",
            "rom": "phǒm jà ao náam khráp",
            "tail": "",
            "alone": "เอา"
          }
        ]
      },
      {
        "n": 5,
        "th": "ทำ",
        "rom": "tham",
        "ru": "тхам",
        "gloss": "Делать. По-тайски это же слово закрывает и make. Виберг: make. Leipzig–Jakarta: to do/make.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я делаю работу.",
            "th": "ผมทำงานครับ",
            "rom": "phǒm tham ngaan khráp",
            "tail": "",
            "alone": "ทำ"
          },
          {
            "label": "Женщина. Я делаю работу.",
            "th": "ฉันทำงานค่ะ",
            "rom": "chǎn tham ngaan khâ",
            "tail": "",
            "alone": "ทำ"
          },
          {
            "label": "Я не делаю работу.",
            "th": "ผมไม่ทำงานครับ",
            "rom": "phǒm mâi tham ngaan khráp",
            "tail": "",
            "alone": "ทำ"
          },
          {
            "label": "Мужчина. Вы делаете работу?",
            "th": "คุณทำงานไหมครับ",
            "rom": "khun tham ngaan mǎi khráp",
            "tail": "",
            "alone": "ทำ"
          },
          {
            "label": "Женщина. Вы делаете работу?",
            "th": "คุณทำงานไหมคะ",
            "rom": "khun tham ngaan mǎi khá",
            "tail": "",
            "alone": "ทำ"
          },
          {
            "label": "Вчера я делал работу.",
            "th": "เมื่อวานผมทำงานครับ",
            "rom": "mʉ̂ʉa-waan phǒm tham ngaan khráp",
            "tail": "",
            "alone": "ทำ"
          },
          {
            "label": "Я собираюсь делать работу.",
            "th": "ผมจะทำงานครับ",
            "rom": "phǒm jà tham ngaan khráp",
            "tail": "",
            "alone": "ทำ"
          }
        ]
      },
      {
        "n": 6,
        "th": "พูด",
        "rom": "phûut",
        "ru": "пхуут",
        "gloss": "Говорить. Виберг: say. Swadesh: to say.",
        "notes": [
          "«Сказать кому-то» часто звучит как บอก bɔ̀ɔk, низкий тон: Викисловарь даёт bɔ̀ɔk и IPA /bɔːk̚˨˩/. В сетке стоит พูด: это слово уже в курсе и закрывает речь вообще."
        ],
        "extras": [
          {
            "th": "บอก",
            "rom": "bɔ̀ɔk"
          }
        ],
        "examples": [
          {
            "label": "Озвучить фразу:",
            "th": "ผมบอกคุณครับ",
            "rom": "phǒm bɔ̀ɔk khun khráp",
            "tail": "Я вам сказал.",
            "alone": "บอก"
          },
          {
            "label": "Мужчина. Я говорю с вами.",
            "th": "ผมพูดกับคุณครับ",
            "rom": "phǒm phûut gàp khun khráp",
            "tail": "",
            "alone": "พูด"
          },
          {
            "label": "Женщина. Я говорю с вами.",
            "th": "ฉันพูดกับคุณค่ะ",
            "rom": "chǎn phûut gàp khun khâ",
            "tail": "",
            "alone": "พูด"
          },
          {
            "label": "Я не говорю с вами.",
            "th": "ผมไม่พูดกับคุณครับ",
            "rom": "phǒm mâi phûut gàp khun khráp",
            "tail": "",
            "alone": "พูด"
          },
          {
            "label": "Мужчина. Вы говорите со мной?",
            "th": "คุณพูดกับผมไหมครับ",
            "rom": "khun phûut gàp phǒm mǎi khráp",
            "tail": "",
            "alone": "พูด"
          },
          {
            "label": "Женщина. Вы говорите со мной?",
            "th": "คุณพูดกับฉันไหมคะ",
            "rom": "khun phûut gàp chǎn mǎi khá",
            "tail": "",
            "alone": "พูด"
          },
          {
            "label": "Вчера я говорил с вами.",
            "th": "เมื่อวานผมพูดกับคุณครับ",
            "rom": "mʉ̂ʉa-waan phǒm phûut gàp khun khráp",
            "tail": "",
            "alone": "พูด"
          },
          {
            "label": "Я собираюсь говорить с вами.",
            "th": "ผมจะพูดกับคุณครับ",
            "rom": "phǒm jà phûut gàp khun khráp",
            "tail": "",
            "alone": "พูด"
          }
        ]
      },
      {
        "n": 7,
        "th": "เห็น",
        "rom": "hěn",
        "ru": "хен",
        "gloss": "Видеть. Виберг: see. Swadesh, Leipzig–Jakarta: to see. NSM: SEE. Тон восходящий: Викисловарь hěn, IPA /hen˩˩˦/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я вас вижу.",
            "th": "ผมเห็นคุณครับ",
            "rom": "phǒm hěn khun khráp",
            "tail": "",
            "alone": "เห็น"
          },
          {
            "label": "Женщина. Я вас вижу.",
            "th": "ฉันเห็นคุณค่ะ",
            "rom": "chǎn hěn khun khâ",
            "tail": "",
            "alone": "เห็น"
          },
          {
            "label": "Я вас не вижу.",
            "th": "ผมไม่เห็นคุณครับ",
            "rom": "phǒm mâi hěn khun khráp",
            "tail": "",
            "alone": "เห็น"
          },
          {
            "label": "Мужчина. Вы меня видите?",
            "th": "คุณเห็นผมไหมครับ",
            "rom": "khun hěn phǒm mǎi khráp",
            "tail": "",
            "alone": "เห็น"
          },
          {
            "label": "Женщина. Вы меня видите?",
            "th": "คุณเห็นฉันไหมคะ",
            "rom": "khun hěn chǎn mǎi khá",
            "tail": "",
            "alone": "เห็น"
          },
          {
            "label": "Вчера я вас видел.",
            "th": "เมื่อวานผมเห็นคุณครับ",
            "rom": "mʉ̂ʉa-waan phǒm hěn khun khráp",
            "tail": "",
            "alone": "เห็น"
          },
          {
            "label": "Я собираюсь вас увидеть.",
            "th": "ผมจะเห็นคุณครับ",
            "rom": "phǒm jà hěn khun khráp",
            "tail": "",
            "alone": "เห็น"
          }
        ]
      },
      {
        "n": 8,
        "th": "รู้",
        "rom": "rúu",
        "ru": "ру",
        "gloss": "Знать. Виберг: know. Swadesh, Leipzig–Jakarta: to know. NSM: KNOW. Тон высокий: thai-language.com даёт ruu H, Викисловарь rúu, IPA /ruː˦˥/. Курс в รู้จัก пишет rúu.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я знаю.",
            "th": "ผมรู้ครับ",
            "rom": "phǒm rúu khráp",
            "tail": "",
            "alone": "รู้"
          },
          {
            "label": "Женщина. Я знаю.",
            "th": "ฉันรู้ค่ะ",
            "rom": "chǎn rúu khâ",
            "tail": "",
            "alone": "รู้"
          },
          {
            "label": "Я не знаю.",
            "th": "ผมไม่รู้ครับ",
            "rom": "phǒm mâi rúu khráp",
            "tail": "",
            "alone": "รู้"
          },
          {
            "label": "Мужчина. Вы знаете?",
            "th": "คุณรู้ไหมครับ",
            "rom": "khun rúu mǎi khráp",
            "tail": "",
            "alone": "รู้"
          },
          {
            "label": "Женщина. Вы знаете?",
            "th": "คุณรู้ไหมคะ",
            "rom": "khun rúu mǎi khá",
            "tail": "",
            "alone": "รู้"
          },
          {
            "label": "Вчера я знал.",
            "th": "เมื่อวานผมรู้ครับ",
            "rom": "mʉ̂ʉa-waan phǒm rúu khráp",
            "tail": "",
            "alone": "รู้"
          },
          {
            "label": "Я буду знать.",
            "th": "ผมจะรู้ครับ",
            "rom": "phǒm jà rúu khráp",
            "tail": "",
            "alone": "รู้"
          }
        ]
      },
      {
        "n": 9,
        "th": "อยาก",
        "rom": "yàak",
        "ru": "йаак",
        "gloss": "Хотеть. Виберг: want. NSM: WANT.",
        "notes": [
          "Озвучить отдельно хотение: อยาก. Во фразе за ним стоит глагол กิน, само อยาก не меняется."
        ],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я хочу есть.",
            "th": "ผมอยากกินครับ",
            "rom": "phǒm yàak gin khráp",
            "tail": "",
            "alone": "อยาก"
          },
          {
            "label": "Женщина. Я хочу есть.",
            "th": "ฉันอยากกินค่ะ",
            "rom": "chǎn yàak gin khâ",
            "tail": "",
            "alone": "อยาก"
          },
          {
            "label": "Я не хочу есть.",
            "th": "ผมไม่อยากกินครับ",
            "rom": "phǒm mâi yàak gin khráp",
            "tail": "",
            "alone": "อยาก"
          },
          {
            "label": "Мужчина. Вы хотите есть?",
            "th": "คุณอยากกินไหมครับ",
            "rom": "khun yàak gin mǎi khráp",
            "tail": "",
            "alone": "อยาก"
          },
          {
            "label": "Женщина. Вы хотите есть?",
            "th": "คุณอยากกินไหมคะ",
            "rom": "khun yàak gin mǎi khá",
            "tail": "",
            "alone": "อยาก"
          },
          {
            "label": "Вчера я хотел есть.",
            "th": "เมื่อวานผมอยากกินครับ",
            "rom": "mʉ̂ʉa-waan phǒm yàak gin khráp",
            "tail": "",
            "alone": "อยาก"
          },
          {
            "label": "С จะ клетка редкая. Форма อยาก та же:",
            "th": "ผมจะอยากกินครับ",
            "rom": "phǒm jà yàak gin khráp",
            "tail": "",
            "alone": "อยาก"
          }
        ]
      },
      {
        "n": 10,
        "th": "เป็น",
        "rom": "bpen",
        "ru": "пен",
        "gloss": "Быть кем-то, роль. Виберг: be. NSM: BE SOMEONE/SOMETHING.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я врач.",
            "th": "ผมเป็นหมอครับ",
            "rom": "phǒm bpen mɔ̌ɔ khráp",
            "tail": "",
            "alone": "เป็น"
          },
          {
            "label": "Женщина. Я врач.",
            "th": "ฉันเป็นหมอค่ะ",
            "rom": "chǎn bpen mɔ̌ɔ khâ",
            "tail": "",
            "alone": "เป็น"
          },
          {
            "label": "Я не врач. Отрицание роли в курсе строится через ไม่ใช่:",
            "th": "ผมไม่ใช่หมอครับ",
            "rom": "phǒm mâi-châi mɔ̌ɔ khráp",
            "tail": "",
            "alone": ""
          },
          {
            "label": "Мужчина. Вы врач?",
            "th": "คุณเป็นหมอไหมครับ",
            "rom": "khun bpen mɔ̌ɔ mǎi khráp",
            "tail": "",
            "alone": "เป็น"
          },
          {
            "label": "Женщина. Вы врач?",
            "th": "คุณเป็นหมอไหมคะ",
            "rom": "khun bpen mɔ̌ɔ mǎi khá",
            "tail": "",
            "alone": "เป็น"
          },
          {
            "label": "Вчера я был врачом.",
            "th": "เมื่อวานผมเป็นหมอครับ",
            "rom": "mʉ̂ʉa-waan phǒm bpen mɔ̌ɔ khráp",
            "tail": "",
            "alone": "เป็น"
          },
          {
            "label": "Я собираюсь быть врачом.",
            "th": "ผมจะเป็นหมอครับ",
            "rom": "phǒm jà bpen mɔ̌ɔ khráp",
            "tail": "",
            "alone": "เป็น"
          }
        ]
      },
      {
        "n": 11,
        "th": "มี",
        "rom": "mii",
        "ru": "мии",
        "gloss": "Иметься, есть в наличии. Виберг: have. NSM: THERE IS.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Здесь есть вода.",
            "th": "ที่นี่มีน้ำครับ",
            "rom": "thîi-nîi mii náam khráp",
            "tail": "",
            "alone": "มี"
          },
          {
            "label": "Женщина. Здесь есть вода.",
            "th": "ที่นี่มีน้ำค่ะ",
            "rom": "thîi-nîi mii náam khâ",
            "tail": "",
            "alone": "มี"
          },
          {
            "label": "Здесь нет воды.",
            "th": "ที่นี่ไม่มีน้ำครับ",
            "rom": "thîi-nîi mâi mii náam khráp",
            "tail": "",
            "alone": "มี"
          },
          {
            "label": "Мужчина. Здесь есть вода?",
            "th": "ที่นี่มีน้ำไหมครับ",
            "rom": "thîi-nîi mii náam mǎi khráp",
            "tail": "",
            "alone": "มี"
          },
          {
            "label": "Женщина. Здесь есть вода?",
            "th": "ที่นี่มีน้ำไหมคะ",
            "rom": "thîi-nîi mii náam mǎi khá",
            "tail": "",
            "alone": "มี"
          },
          {
            "label": "Вчера здесь была вода.",
            "th": "เมื่อวานที่นี่มีน้ำครับ",
            "rom": "mʉ̂ʉa-waan thîi-nîi mii náam khráp",
            "tail": "",
            "alone": "มี"
          },
          {
            "label": "Здесь будет вода.",
            "th": "ที่นี่จะมีน้ำครับ",
            "rom": "thîi-nîi jà mii náam khráp",
            "tail": "",
            "alone": "มี"
          }
        ]
      },
      {
        "n": 12,
        "th": "ได้",
        "rom": "dâai",
        "ru": "даай",
        "gloss": "Мочь. Место слова меняет смысл, само ได้ не спрягается. Виберг: can. NSM: CAN. Запись курса: dâai.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я могу идти. ได้ стоит после глагола.",
            "th": "ผมไปได้ครับ",
            "rom": "phǒm bpai dâai khráp",
            "tail": "",
            "alone": "ได้"
          },
          {
            "label": "Женщина. Я могу идти.",
            "th": "ฉันไปได้ค่ะ",
            "rom": "chǎn bpai dâai khâ",
            "tail": "",
            "alone": "ได้"
          },
          {
            "label": "Я не могу идти. Здесь ไม่ได้ стоит после глагола.",
            "th": "ผมไปไม่ได้ครับ",
            "rom": "phǒm bpai mâi-dâai khráp",
            "tail": "",
            "alone": "ได้"
          },
          {
            "label": "Вчера я не пошёл. Здесь ไม่ได้ стоит перед глаголом и значит «не сделал».",
            "th": "เมื่อวานผมไม่ได้ไปครับ",
            "rom": "mʉ̂ʉa-waan phǒm mâi-dâai bpai khráp",
            "tail": "",
            "alone": "ได้"
          },
          {
            "label": "Мужчина. Вы можете идти?",
            "th": "คุณไปได้ไหมครับ",
            "rom": "khun bpai dâai mǎi khráp",
            "tail": "",
            "alone": "ได้"
          },
          {
            "label": "Женщина. Вы можете идти?",
            "th": "คุณไปได้ไหมคะ",
            "rom": "khun bpai dâai mǎi khá",
            "tail": "",
            "alone": "ได้"
          },
          {
            "label": "С จะ фраза ближе к «я смогу пойти». Клетка редкая, форма ได้ та же.",
            "th": "ผมจะไปได้ครับ",
            "rom": "phǒm jà bpai dâai khráp",
            "tail": "",
            "alone": "ได้"
          }
        ]
      },
      {
        "n": 13,
        "th": "ต้อง",
        "rom": "dtɔ̂ɔng",
        "ru": "тонг",
        "gloss": "Надо, должен. Виберг: must.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Мне надо идти.",
            "th": "ผมต้องไปครับ",
            "rom": "phǒm dtɔ̂ɔng bpai khráp",
            "tail": "",
            "alone": "ต้อง"
          },
          {
            "label": "Женщина. Мне надо идти.",
            "th": "ฉันต้องไปค่ะ",
            "rom": "chǎn dtɔ̂ɔng bpai khâ",
            "tail": "",
            "alone": "ต้อง"
          },
          {
            "label": "Мне не надо идти. ไม่ стоит перед ต้อง.",
            "th": "ผมไม่ต้องไปครับ",
            "rom": "phǒm mâi dtɔ̂ɔng bpai khráp",
            "tail": "",
            "alone": "ต้อง"
          },
          {
            "label": "Мужчина. Вам надо идти?",
            "th": "คุณต้องไปไหมครับ",
            "rom": "khun dtɔ̂ɔng bpai mǎi khráp",
            "tail": "",
            "alone": "ต้อง"
          },
          {
            "label": "Женщина. Вам надо идти?",
            "th": "คุณต้องไปไหมคะ",
            "rom": "khun dtɔ̂ɔng bpai mǎi khá",
            "tail": "",
            "alone": "ต้อง"
          },
          {
            "label": "Вчера мне надо было идти.",
            "th": "เมื่อวานผมต้องไปครับ",
            "rom": "mʉ̂ʉa-waan phǒm dtɔ̂ɔng bpai khráp",
            "tail": "",
            "alone": "ต้อง"
          },
          {
            "label": "Мне надо будет идти.",
            "th": "ผมจะต้องไปครับ",
            "rom": "phǒm jà dtɔ̂ɔng bpai khráp",
            "tail": "",
            "alone": "ต้อง"
          }
        ]
      },
      {
        "n": 14,
        "th": "กิน",
        "rom": "gin",
        "ru": "гин",
        "gloss": "Есть, принимать пищу. Swadesh, Leipzig–Jakarta: to eat.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я ем рис.",
            "th": "ผมกินข้าวครับ",
            "rom": "phǒm gin khâao khráp",
            "tail": "",
            "alone": "กิน"
          },
          {
            "label": "Женщина. Я ем рис.",
            "th": "ฉันกินข้าวค่ะ",
            "rom": "chǎn gin khâao khâ",
            "tail": "",
            "alone": "กิน"
          },
          {
            "label": "Я не ем рис.",
            "th": "ผมไม่กินข้าวครับ",
            "rom": "phǒm mâi gin khâao khráp",
            "tail": "",
            "alone": "กิน"
          },
          {
            "label": "Мужчина. Вы едите рис?",
            "th": "คุณกินข้าวไหมครับ",
            "rom": "khun gin khâao mǎi khráp",
            "tail": "",
            "alone": "กิน"
          },
          {
            "label": "Женщина. Вы едите рис?",
            "th": "คุณกินข้าวไหมคะ",
            "rom": "khun gin khâao mǎi khá",
            "tail": "",
            "alone": "กิน"
          },
          {
            "label": "Вчера я ел рис.",
            "th": "เมื่อวานผมกินข้าวครับ",
            "rom": "mʉ̂ʉa-waan phǒm gin khâao khráp",
            "tail": "",
            "alone": "กิน"
          },
          {
            "label": "Я собираюсь есть рис.",
            "th": "ผมจะกินข้าวครับ",
            "rom": "phǒm jà gin khâao khráp",
            "tail": "",
            "alone": "กิน"
          }
        ]
      },
      {
        "n": 15,
        "th": "ดื่ม",
        "rom": "dʉ̀ʉm",
        "ru": "дыым",
        "gloss": "Пить. Swadesh, Leipzig–Jakarta: to drink. Тон низкий: Викисловарь dʉ̀ʉm, IPA /dɯːm˨˩/. В письменном частотном файле ранг 1 230: базовое слово стоит далеко от верхушки.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я пью воду.",
            "th": "ผมดื่มน้ำครับ",
            "rom": "phǒm dʉ̀ʉm náam khráp",
            "tail": "",
            "alone": "ดื่ม"
          },
          {
            "label": "Женщина. Я пью воду.",
            "th": "ฉันดื่มน้ำค่ะ",
            "rom": "chǎn dʉ̀ʉm náam khâ",
            "tail": "",
            "alone": "ดื่ม"
          },
          {
            "label": "Я не пью воду.",
            "th": "ผมไม่ดื่มน้ำครับ",
            "rom": "phǒm mâi dʉ̀ʉm náam khráp",
            "tail": "",
            "alone": "ดื่ม"
          },
          {
            "label": "Мужчина. Вы пьёте воду?",
            "th": "คุณดื่มน้ำไหมครับ",
            "rom": "khun dʉ̀ʉm náam mǎi khráp",
            "tail": "",
            "alone": "ดื่ม"
          },
          {
            "label": "Женщина. Вы пьёте воду?",
            "th": "คุณดื่มน้ำไหมคะ",
            "rom": "khun dʉ̀ʉm náam mǎi khá",
            "tail": "",
            "alone": "ดื่ม"
          },
          {
            "label": "Вчера я пил воду.",
            "th": "เมื่อวานผมดื่มน้ำครับ",
            "rom": "mʉ̂ʉa-waan phǒm dʉ̀ʉm náam khráp",
            "tail": "",
            "alone": "ดื่ม"
          },
          {
            "label": "Я собираюсь пить воду.",
            "th": "ผมจะดื่มน้ำครับ",
            "rom": "phǒm jà dʉ̀ʉm náam khráp",
            "tail": "",
            "alone": "ดื่ม"
          }
        ]
      },
      {
        "n": 16,
        "th": "นอน",
        "rom": "nɔɔn",
        "ru": "нон",
        "gloss": "Спать и лежать. Одно слово на sleep и lie. Swadesh: sleep, lie. Тон средний: Викисловарь nɔɔn, IPA /nɔːn˧/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я сплю дома.",
            "th": "ผมนอนที่บ้านครับ",
            "rom": "phǒm nɔɔn thîi-bâan khráp",
            "tail": "",
            "alone": "นอน"
          },
          {
            "label": "Женщина. Я сплю дома.",
            "th": "ฉันนอนที่บ้านค่ะ",
            "rom": "chǎn nɔɔn thîi-bâan khâ",
            "tail": "",
            "alone": "นอน"
          },
          {
            "label": "Я не сплю дома.",
            "th": "ผมไม่นอนที่บ้านครับ",
            "rom": "phǒm mâi nɔɔn thîi-bâan khráp",
            "tail": "",
            "alone": "นอน"
          },
          {
            "label": "Мужчина. Вы спите дома?",
            "th": "คุณนอนที่บ้านไหมครับ",
            "rom": "khun nɔɔn thîi-bâan mǎi khráp",
            "tail": "",
            "alone": "นอน"
          },
          {
            "label": "Женщина. Вы спите дома?",
            "th": "คุณนอนที่บ้านไหมคะ",
            "rom": "khun nɔɔn thîi-bâan mǎi khá",
            "tail": "",
            "alone": "นอน"
          },
          {
            "label": "Вчера я спал дома.",
            "th": "เมื่อวานผมนอนที่บ้านครับ",
            "rom": "mʉ̂ʉa-waan phǒm nɔɔn thîi-bâan khráp",
            "tail": "",
            "alone": "นอน"
          },
          {
            "label": "Я собираюсь спать дома.",
            "th": "ผมจะนอนที่บ้านครับ",
            "rom": "phǒm jà nɔɔn thîi-bâan khráp",
            "tail": "",
            "alone": "นอน"
          }
        ]
      },
      {
        "n": 17,
        "th": "นั่ง",
        "rom": "nâng",
        "ru": "нанг",
        "gloss": "Сидеть. Swadesh: to sit. Тон падающий: Викисловарь nâng, IPA /naŋ˥˩/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я сижу.",
            "th": "ผมนั่งครับ",
            "rom": "phǒm nâng khráp",
            "tail": "",
            "alone": "นั่ง"
          },
          {
            "label": "Женщина. Я сижу.",
            "th": "ฉันนั่งค่ะ",
            "rom": "chǎn nâng khâ",
            "tail": "",
            "alone": "นั่ง"
          },
          {
            "label": "Я не сижу.",
            "th": "ผมไม่นั่งครับ",
            "rom": "phǒm mâi nâng khráp",
            "tail": "",
            "alone": "นั่ง"
          },
          {
            "label": "Мужчина. Вы сидите?",
            "th": "คุณนั่งไหมครับ",
            "rom": "khun nâng mǎi khráp",
            "tail": "",
            "alone": "นั่ง"
          },
          {
            "label": "Женщина. Вы сидите?",
            "th": "คุณนั่งไหมคะ",
            "rom": "khun nâng mǎi khá",
            "tail": "",
            "alone": "นั่ง"
          },
          {
            "label": "Вчера я сидел.",
            "th": "เมื่อวานผมนั่งครับ",
            "rom": "mʉ̂ʉa-waan phǒm nâng khráp",
            "tail": "",
            "alone": "นั่ง"
          },
          {
            "label": "Я собираюсь сесть.",
            "th": "ผมจะนั่งครับ",
            "rom": "phǒm jà nâng khráp",
            "tail": "",
            "alone": "นั่ง"
          }
        ]
      },
      {
        "n": 18,
        "th": "ยืน",
        "rom": "yʉʉn",
        "ru": "йыын",
        "gloss": "Стоять. Swadesh, Leipzig–Jakarta: to stand. Тон средний: thai-language.com yeuun M, Викисловарь yʉʉn.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я стою.",
            "th": "ผมยืนครับ",
            "rom": "phǒm yʉʉn khráp",
            "tail": "",
            "alone": "ยืน"
          },
          {
            "label": "Женщина. Я стою.",
            "th": "ฉันยืนค่ะ",
            "rom": "chǎn yʉʉn khâ",
            "tail": "",
            "alone": "ยืน"
          },
          {
            "label": "Я не стою.",
            "th": "ผมไม่ยืนครับ",
            "rom": "phǒm mâi yʉʉn khráp",
            "tail": "",
            "alone": "ยืน"
          },
          {
            "label": "Мужчина. Вы стоите?",
            "th": "คุณยืนไหมครับ",
            "rom": "khun yʉʉn mǎi khráp",
            "tail": "",
            "alone": "ยืน"
          },
          {
            "label": "Женщина. Вы стоите?",
            "th": "คุณยืนไหมคะ",
            "rom": "khun yʉʉn mǎi khá",
            "tail": "",
            "alone": "ยืน"
          },
          {
            "label": "Вчера я стоял.",
            "th": "เมื่อวานผมยืนครับ",
            "rom": "mʉ̂ʉa-waan phǒm yʉʉn khráp",
            "tail": "",
            "alone": "ยืน"
          },
          {
            "label": "Я собираюсь встать.",
            "th": "ผมจะยืนครับ",
            "rom": "phǒm jà yʉʉn khráp",
            "tail": "",
            "alone": "ยืน"
          }
        ]
      },
      {
        "n": 19,
        "th": "เดิน",
        "rom": "dəən",
        "ru": "дын",
        "gloss": "Идти пешком. Swadesh: to walk.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я иду пешком.",
            "th": "ผมเดินครับ",
            "rom": "phǒm dəən khráp",
            "tail": "",
            "alone": "เดิน"
          },
          {
            "label": "Женщина. Я иду пешком.",
            "th": "ฉันเดินค่ะ",
            "rom": "chǎn dəən khâ",
            "tail": "",
            "alone": "เดิน"
          },
          {
            "label": "Я не иду пешком.",
            "th": "ผมไม่เดินครับ",
            "rom": "phǒm mâi dəən khráp",
            "tail": "",
            "alone": "เดิน"
          },
          {
            "label": "Мужчина. Вы идёте пешком?",
            "th": "คุณเดินไหมครับ",
            "rom": "khun dəən mǎi khráp",
            "tail": "",
            "alone": "เดิน"
          },
          {
            "label": "Женщина. Вы идёте пешком?",
            "th": "คุณเดินไหมคะ",
            "rom": "khun dəən mǎi khá",
            "tail": "",
            "alone": "เดิน"
          },
          {
            "label": "Вчера я шёл пешком.",
            "th": "เมื่อวานผมเดินครับ",
            "rom": "mʉ̂ʉa-waan phǒm dəən khráp",
            "tail": "",
            "alone": "เดิน"
          },
          {
            "label": "Я собираюсь идти пешком.",
            "th": "ผมจะเดินครับ",
            "rom": "phǒm jà dəən khráp",
            "tail": "",
            "alone": "เดิน"
          }
        ]
      },
      {
        "n": 20,
        "th": "ได้ยิน",
        "rom": "dâai-yin",
        "ru": "даай-йин",
        "gloss": "Слышать. Swadesh: to hear. NSM: HEAR. Викисловарь пишет первую часть dâi, IPA /daj˥˩.jin˧/: падающий, потом средний. Курс пишет ได้ как dâai. Беру dâai-yin.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я вас слышу.",
            "th": "ผมได้ยินคุณครับ",
            "rom": "phǒm dâai-yin khun khráp",
            "tail": "",
            "alone": "ได้ยิน"
          },
          {
            "label": "Женщина. Я вас слышу.",
            "th": "ฉันได้ยินคุณค่ะ",
            "rom": "chǎn dâai-yin khun khâ",
            "tail": "",
            "alone": "ได้ยิน"
          },
          {
            "label": "Я вас не слышу.",
            "th": "ผมไม่ได้ยินคุณครับ",
            "rom": "phǒm mâi dâai-yin khun khráp",
            "tail": "",
            "alone": "ได้ยิน"
          },
          {
            "label": "Мужчина. Вы меня слышите?",
            "th": "คุณได้ยินผมไหมครับ",
            "rom": "khun dâai-yin phǒm mǎi khráp",
            "tail": "",
            "alone": "ได้ยิน"
          },
          {
            "label": "Женщина. Вы меня слышите?",
            "th": "คุณได้ยินฉันไหมคะ",
            "rom": "khun dâai-yin chǎn mǎi khá",
            "tail": "",
            "alone": "ได้ยิน"
          },
          {
            "label": "Вчера я вас слышал.",
            "th": "เมื่อวานผมได้ยินคุณครับ",
            "rom": "mʉ̂ʉa-waan phǒm dâai-yin khun khráp",
            "tail": "",
            "alone": "ได้ยิน"
          },
          {
            "label": "Я собираюсь вас услышать.",
            "th": "ผมจะได้ยินคุณครับ",
            "rom": "phǒm jà dâai-yin khun khráp",
            "tail": "",
            "alone": "ได้ยิน"
          }
        ]
      },
      {
        "n": 21,
        "th": "ตก",
        "rom": "dtòk",
        "ru": "ток",
        "gloss": "Падать. В погоде: дождь идёт. Leipzig–Jakarta: to fall.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Идёт дождь.",
            "th": "ฝนตกครับ",
            "rom": "fǒn dtòk khráp",
            "tail": "",
            "alone": "ตก"
          },
          {
            "label": "Женщина. Идёт дождь.",
            "th": "ฝนตกค่ะ",
            "rom": "fǒn dtòk khâ",
            "tail": "",
            "alone": "ตก"
          },
          {
            "label": "Дождь не идёт.",
            "th": "ฝนไม่ตกครับ",
            "rom": "fǒn mâi dtòk khráp",
            "tail": "",
            "alone": "ตก"
          },
          {
            "label": "Мужчина. Идёт дождь?",
            "th": "ฝนตกไหมครับ",
            "rom": "fǒn dtòk mǎi khráp",
            "tail": "",
            "alone": "ตก"
          },
          {
            "label": "Женщина. Идёт дождь?",
            "th": "ฝนตกไหมคะ",
            "rom": "fǒn dtòk mǎi khá",
            "tail": "",
            "alone": "ตก"
          },
          {
            "label": "Вчера шёл дождь.",
            "th": "เมื่อวานฝนตกครับ",
            "rom": "mʉ̂ʉa-waan fǒn dtòk khráp",
            "tail": "",
            "alone": "ตก"
          },
          {
            "label": "Дождь собирается.",
            "th": "ฝนจะตกครับ",
            "rom": "fǒn jà dtòk khráp",
            "tail": "",
            "alone": "ตก"
          }
        ]
      },
      {
        "n": 22,
        "th": "วิ่ง",
        "rom": "wîng",
        "ru": "винг",
        "gloss": "Бежать. Leipzig–Jakarta: to run. Тон падающий: Викисловарь wîng, IPA /wiŋ˥˩/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я бегу.",
            "th": "ผมวิ่งครับ",
            "rom": "phǒm wîng khráp",
            "tail": "",
            "alone": "วิ่ง"
          },
          {
            "label": "Женщина. Я бегу.",
            "th": "ฉันวิ่งค่ะ",
            "rom": "chǎn wîng khâ",
            "tail": "",
            "alone": "วิ่ง"
          },
          {
            "label": "Я не бегу.",
            "th": "ผมไม่วิ่งครับ",
            "rom": "phǒm mâi wîng khráp",
            "tail": "",
            "alone": "วิ่ง"
          },
          {
            "label": "Мужчина. Вы бежите?",
            "th": "คุณวิ่งไหมครับ",
            "rom": "khun wîng mǎi khráp",
            "tail": "",
            "alone": "วิ่ง"
          },
          {
            "label": "Женщина. Вы бежите?",
            "th": "คุณวิ่งไหมคะ",
            "rom": "khun wîng mǎi khá",
            "tail": "",
            "alone": "วิ่ง"
          },
          {
            "label": "Вчера я бежал.",
            "th": "เมื่อวานผมวิ่งครับ",
            "rom": "mʉ̂ʉa-waan phǒm wîng khráp",
            "tail": "",
            "alone": "วิ่ง"
          },
          {
            "label": "Я собираюсь бежать.",
            "th": "ผมจะวิ่งครับ",
            "rom": "phǒm jà wîng khráp",
            "tail": "",
            "alone": "วิ่ง"
          }
        ]
      },
      {
        "n": 23,
        "th": "ตาย",
        "rom": "dtaai",
        "ru": "таай",
        "gloss": "Умереть. Swadesh: to die. NSM: DIE. Тон средний: Викисловарь dtaai, IPA /taːj˧/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Собака умерла.",
            "th": "หมาตายครับ",
            "rom": "mǎa dtaai khráp",
            "tail": "",
            "alone": "ตาย"
          },
          {
            "label": "Женщина. Собака умерла.",
            "th": "หมาตายค่ะ",
            "rom": "mǎa dtaai khâ",
            "tail": "",
            "alone": "ตาย"
          },
          {
            "label": "Собака не умерла.",
            "th": "หมาไม่ตายครับ",
            "rom": "mǎa mâi dtaai khráp",
            "tail": "",
            "alone": "ตาย"
          },
          {
            "label": "Мужчина. Собака умерла?",
            "th": "หมาตายไหมครับ",
            "rom": "mǎa dtaai mǎi khráp",
            "tail": "",
            "alone": "ตาย"
          },
          {
            "label": "Женщина. Собака умерла?",
            "th": "หมาตายไหมคะ",
            "rom": "mǎa dtaai mǎi khá",
            "tail": "",
            "alone": "ตาย"
          },
          {
            "label": "Вчера собака умерла.",
            "th": "เมื่อวานหมาตายครับ",
            "rom": "mʉ̂ʉa-waan mǎa dtaai khráp",
            "tail": "",
            "alone": "ตาย"
          },
          {
            "label": "Собака умрёт. Глагол тот же.",
            "th": "หมาจะตายครับ",
            "rom": "mǎa jà dtaai khráp",
            "tail": "",
            "alone": "ตาย"
          }
        ]
      },
      {
        "n": 24,
        "th": "หัวเราะ",
        "rom": "hǔua-rɔ́",
        "ru": "хыа-ро",
        "gloss": "Смеяться. Leipzig–Jakarta: to laugh. Викисловарь hǔua-rɔ́, IPA /hua̯˩˩˦.rɔʔ˦˥/: восходящий, потом высокий. Второй слог кончается гортанной смычкой.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я смеюсь.",
            "th": "ผมหัวเราะครับ",
            "rom": "phǒm hǔua-rɔ́ khráp",
            "tail": "",
            "alone": "หัวเราะ"
          },
          {
            "label": "Женщина. Я смеюсь.",
            "th": "ฉันหัวเราะค่ะ",
            "rom": "chǎn hǔua-rɔ́ khâ",
            "tail": "",
            "alone": "หัวเราะ"
          },
          {
            "label": "Я не смеюсь.",
            "th": "ผมไม่หัวเราะครับ",
            "rom": "phǒm mâi hǔua-rɔ́ khráp",
            "tail": "",
            "alone": "หัวเราะ"
          },
          {
            "label": "Мужчина. Вы смеётесь?",
            "th": "คุณหัวเราะไหมครับ",
            "rom": "khun hǔua-rɔ́ mǎi khráp",
            "tail": "",
            "alone": "หัวเราะ"
          },
          {
            "label": "Женщина. Вы смеётесь?",
            "th": "คุณหัวเราะไหมคะ",
            "rom": "khun hǔua-rɔ́ mǎi khá",
            "tail": "",
            "alone": "หัวเราะ"
          },
          {
            "label": "Вчера я смеялся.",
            "th": "เมื่อวานผมหัวเราะครับ",
            "rom": "mʉ̂ʉa-waan phǒm hǔua-rɔ́ khráp",
            "tail": "",
            "alone": "หัวเราะ"
          },
          {
            "label": "Я собираюсь засмеяться.",
            "th": "ผมจะหัวเราะครับ",
            "rom": "phǒm jà hǔua-rɔ́ khráp",
            "tail": "",
            "alone": "หัวเราะ"
          }
        ]
      },
      {
        "n": 25,
        "th": "คิด",
        "rom": "khít",
        "ru": "кхит",
        "gloss": "Думать. NSM: THINK. Курс: khít, высокий. Викисловарь: kít, IPA /kʰit̚˦˥/. Беру khít.",
        "notes": [
          "Клетки с จะ здесь нет: «собираюсь думать, что да» уводит фразу. С จะ глагол คิด остался бы тем же."
        ],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я думаю, что да.",
            "th": "ผมคิดว่าใช่ครับ",
            "rom": "phǒm khít wâa châi khráp",
            "tail": "",
            "alone": "คิด"
          },
          {
            "label": "Женщина. Я думаю, что да.",
            "th": "ฉันคิดว่าใช่ค่ะ",
            "rom": "chǎn khít wâa châi khâ",
            "tail": "",
            "alone": "คิด"
          },
          {
            "label": "Я не думаю, что да.",
            "th": "ผมไม่คิดว่าใช่ครับ",
            "rom": "phǒm mâi khít wâa châi khráp",
            "tail": "",
            "alone": "คิด"
          },
          {
            "label": "Мужчина. Вы думаете, что да?",
            "th": "คุณคิดว่าใช่ไหมครับ",
            "rom": "khun khít wâa châi mǎi khráp",
            "tail": "",
            "alone": "คิด"
          },
          {
            "label": "Женщина. Вы думаете, что да?",
            "th": "คุณคิดว่าใช่ไหมคะ",
            "rom": "khun khít wâa châi mǎi khá",
            "tail": "",
            "alone": "คิด"
          },
          {
            "label": "Вчера я думал, что да.",
            "th": "เมื่อวานผมคิดว่าใช่ครับ",
            "rom": "mʉ̂ʉa-waan phǒm khít wâa châi khráp",
            "tail": "",
            "alone": "คิด"
          }
        ]
      },
      {
        "n": 26,
        "th": "รู้สึก",
        "rom": "rúu-sʉ̀k",
        "ru": "ру-сык",
        "gloss": "Чувствовать. NSM: FEEL. Викисловарь rúu-sʉ̀k, IPA /ruː˦˥.sɯk̚˨˩/: высокий, потом низкий.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я чувствую усталость.",
            "th": "ผมรู้สึกเหนื่อยครับ",
            "rom": "phǒm rúu-sʉ̀k nʉ̀ai khráp",
            "tail": "",
            "alone": "รู้สึก"
          },
          {
            "label": "Женщина. Я чувствую усталость.",
            "th": "ฉันรู้สึกเหนื่อยค่ะ",
            "rom": "chǎn rúu-sʉ̀k nʉ̀ai khâ",
            "tail": "",
            "alone": "รู้สึก"
          },
          {
            "label": "Я не чувствую усталости.",
            "th": "ผมไม่รู้สึกเหนื่อยครับ",
            "rom": "phǒm mâi rúu-sʉ̀k nʉ̀ai khráp",
            "tail": "",
            "alone": "รู้สึก"
          },
          {
            "label": "Мужчина. Вы устали?",
            "th": "คุณรู้สึกเหนื่อยไหมครับ",
            "rom": "khun rúu-sʉ̀k nʉ̀ai mǎi khráp",
            "tail": "",
            "alone": "รู้สึก"
          },
          {
            "label": "Женщина. Вы устали?",
            "th": "คุณรู้สึกเหนื่อยไหมคะ",
            "rom": "khun rúu-sʉ̀k nʉ̀ai mǎi khá",
            "tail": "",
            "alone": "รู้สึก"
          },
          {
            "label": "Вчера я чувствовал усталость.",
            "th": "เมื่อวานผมรู้สึกเหนื่อยครับ",
            "rom": "mʉ̂ʉa-waan phǒm rúu-sʉ̀k nʉ̀ai khráp",
            "tail": "",
            "alone": "รู้สึก"
          },
          {
            "label": "Я почувствую усталость.",
            "th": "ผมจะรู้สึกเหนื่อยครับ",
            "rom": "phǒm jà rúu-sʉ̀k nʉ̀ai khráp",
            "tail": "",
            "alone": "รู้สึก"
          }
        ]
      },
      {
        "n": 27,
        "th": "เกิด",
        "rom": "gə̀ət",
        "ru": "гыыт",
        "gloss": "Случаться. Второе бытовое значение: родиться. NSM: HAPPEN. Тон низкий: Викисловарь gə̀ət, IPA /kɤːt̚˨˩/.",
        "notes": [
          "ขึ้น khʉ̂n здесь то же слово, что «вверх» в курсе. В เกิดอะไรขึ้น оно входит в вопрос «что случилось»."
        ],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Что случилось? Вопрос со словом «что», без ไหม.",
            "th": "เกิดอะไรขึ้นครับ",
            "rom": "gə̀ət à-rai khʉ̂n khráp",
            "tail": "",
            "alone": "เกิด"
          },
          {
            "label": "Женщина. Что случилось?",
            "th": "เกิดอะไรขึ้นคะ",
            "rom": "gə̀ət à-rai khʉ̂n khá",
            "tail": "",
            "alone": "เกิด"
          },
          {
            "label": "Вчера что случилось?",
            "th": "เมื่อวานเกิดอะไรขึ้นครับ",
            "rom": "mʉ̂ʉa-waan gə̀ət à-rai khʉ̂n khráp",
            "tail": "",
            "alone": "เกิด"
          },
          {
            "label": "Ребёнок родился.",
            "th": "เด็กเกิดครับ",
            "rom": "dèk gə̀ət khráp",
            "tail": "",
            "alone": "เกิด"
          },
          {
            "label": "Ребёнок не родился.",
            "th": "เด็กไม่เกิดครับ",
            "rom": "dèk mâi gə̀ət khráp",
            "tail": "",
            "alone": "เกิด"
          },
          {
            "label": "Мужчина. Ребёнок родился?",
            "th": "เด็กเกิดไหมครับ",
            "rom": "dèk gə̀ət mǎi khráp",
            "tail": "",
            "alone": "เกิด"
          },
          {
            "label": "Женщина. Ребёнок родился?",
            "th": "เด็กเกิดไหมคะ",
            "rom": "dèk gə̀ət mǎi khá",
            "tail": "",
            "alone": "เกิด"
          },
          {
            "label": "Ребёнок родится.",
            "th": "เด็กจะเกิดครับ",
            "rom": "dèk jà gə̀ət khráp",
            "tail": "",
            "alone": "เกิด"
          }
        ]
      },
      {
        "n": 28,
        "th": "อยู่",
        "rom": "yùu",
        "ru": "йуу",
        "gloss": "Находиться, жить. NSM: LIVE и BE SOMEWHERE.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я дома.",
            "th": "ผมอยู่บ้านครับ",
            "rom": "phǒm yùu bâan khráp",
            "tail": "",
            "alone": "อยู่"
          },
          {
            "label": "Женщина. Я дома.",
            "th": "ฉันอยู่บ้านค่ะ",
            "rom": "chǎn yùu bâan khâ",
            "tail": "",
            "alone": "อยู่"
          },
          {
            "label": "Меня нет дома.",
            "th": "ผมไม่อยู่บ้านครับ",
            "rom": "phǒm mâi yùu bâan khráp",
            "tail": "",
            "alone": "อยู่"
          },
          {
            "label": "Мужчина. Вы дома?",
            "th": "คุณอยู่บ้านไหมครับ",
            "rom": "khun yùu bâan mǎi khráp",
            "tail": "",
            "alone": "อยู่"
          },
          {
            "label": "Женщина. Вы дома?",
            "th": "คุณอยู่บ้านไหมคะ",
            "rom": "khun yùu bâan mǎi khá",
            "tail": "",
            "alone": "อยู่"
          },
          {
            "label": "Вчера я был дома.",
            "th": "เมื่อวานผมอยู่บ้านครับ",
            "rom": "mʉ̂ʉa-waan phǒm yùu bâan khráp",
            "tail": "",
            "alone": "อยู่"
          },
          {
            "label": "Я собираюсь быть дома.",
            "th": "ผมจะอยู่บ้านครับ",
            "rom": "phǒm jà yùu bâan khráp",
            "tail": "",
            "alone": "อยู่"
          }
        ]
      }
    ]
  },
  {
    "id": "nouns",
    "title": "Существительные",
    "items": [
      {
        "n": 1,
        "th": "น้ำ",
        "rom": "náam",
        "ru": "нам",
        "gloss": "Вода. Swadesh, Leipzig–Jakarta: water.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это вода.",
            "th": "นี่น้ำครับ",
            "rom": "nîi náam khráp",
            "tail": "",
            "alone": "น้ำ"
          },
          {
            "label": "Женщина. Это вода.",
            "th": "นี่น้ำค่ะ",
            "rom": "nîi náam khâ",
            "tail": "",
            "alone": "น้ำ"
          },
          {
            "label": "Это не вода.",
            "th": "นี่ไม่ใช่น้ำครับ",
            "rom": "nîi mâi-châi náam khráp",
            "tail": "",
            "alone": "น้ำ"
          },
          {
            "label": "Мужчина. Это вода?",
            "th": "นี่น้ำไหมครับ",
            "rom": "nîi náam mǎi khráp",
            "tail": "",
            "alone": "น้ำ"
          },
          {
            "label": "Женщина. Это вода?",
            "th": "นี่น้ำไหมคะ",
            "rom": "nîi náam mǎi khá",
            "tail": "",
            "alone": "น้ำ"
          },
          {
            "label": "Один стакан воды. Слово น้ำ не меняется, число и счётное слово стоят после.",
            "th": "น้ำหนึ่งแก้วครับ",
            "rom": "náam nʉ̀ng gâeo khráp",
            "tail": "",
            "alone": "น้ำ"
          }
        ]
      },
      {
        "n": 2,
        "th": "ไฟ",
        "rom": "fai",
        "ru": "фай",
        "gloss": "Огонь. Swadesh, Leipzig–Jakarta: fire. Тон средний: Викисловарь fai, IPA /faj˧/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это огонь.",
            "th": "นี่ไฟครับ",
            "rom": "nîi fai khráp",
            "tail": "",
            "alone": "ไฟ"
          },
          {
            "label": "Женщина. Это огонь.",
            "th": "นี่ไฟค่ะ",
            "rom": "nîi fai khâ",
            "tail": "",
            "alone": "ไฟ"
          },
          {
            "label": "Это не огонь.",
            "th": "นี่ไม่ใช่ไฟครับ",
            "rom": "nîi mâi-châi fai khráp",
            "tail": "",
            "alone": "ไฟ"
          },
          {
            "label": "Мужчина. Это огонь?",
            "th": "นี่ไฟไหมครับ",
            "rom": "nîi fai mǎi khráp",
            "tail": "",
            "alone": "ไฟ"
          },
          {
            "label": "Женщина. Это огонь?",
            "th": "นี่ไฟไหมคะ",
            "rom": "nîi fai mǎi khá",
            "tail": "",
            "alone": "ไฟ"
          }
        ]
      },
      {
        "n": 3,
        "th": "บ้าน",
        "rom": "bâan",
        "ru": "баан",
        "gloss": "Дом. Leipzig–Jakarta: house.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это дом.",
            "th": "นี่บ้านครับ",
            "rom": "nîi bâan khráp",
            "tail": "",
            "alone": "บ้าน"
          },
          {
            "label": "Женщина. Это дом.",
            "th": "นี่บ้านค่ะ",
            "rom": "nîi bâan khâ",
            "tail": "",
            "alone": "บ้าน"
          },
          {
            "label": "Это не дом.",
            "th": "นี่ไม่ใช่บ้านครับ",
            "rom": "nîi mâi-châi bâan khráp",
            "tail": "",
            "alone": "บ้าน"
          },
          {
            "label": "Мужчина. Это дом?",
            "th": "นี่บ้านไหมครับ",
            "rom": "nîi bâan mǎi khráp",
            "tail": "",
            "alone": "บ้าน"
          },
          {
            "label": "Женщина. Это дом?",
            "th": "นี่บ้านไหมคะ",
            "rom": "nîi bâan mǎi khá",
            "tail": "",
            "alone": "บ้าน"
          }
        ]
      },
      {
        "n": 4,
        "th": "ฝน",
        "rom": "fǒn",
        "ru": "фон",
        "gloss": "Дождь. Leipzig–Jakarta: rain.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это дождь.",
            "th": "นี่ฝนครับ",
            "rom": "nîi fǒn khráp",
            "tail": "",
            "alone": "ฝน"
          },
          {
            "label": "Женщина. Это дождь.",
            "th": "นี่ฝนค่ะ",
            "rom": "nîi fǒn khâ",
            "tail": "",
            "alone": "ฝน"
          },
          {
            "label": "Это не дождь.",
            "th": "นี่ไม่ใช่ฝนครับ",
            "rom": "nîi mâi-châi fǒn khráp",
            "tail": "",
            "alone": "ฝน"
          },
          {
            "label": "Мужчина. Это дождь?",
            "th": "นี่ฝนไหมครับ",
            "rom": "nîi fǒn mǎi khráp",
            "tail": "",
            "alone": "ฝน"
          },
          {
            "label": "Женщина. Это дождь?",
            "th": "นี่ฝนไหมคะ",
            "rom": "nîi fǒn mǎi khá",
            "tail": "",
            "alone": "ฝน"
          }
        ]
      },
      {
        "n": 5,
        "th": "ชื่อ",
        "rom": "chʉ̂ʉ",
        "ru": "чыы",
        "gloss": "Имя. Swadesh, Leipzig–Jakarta: name.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это имя мамы.",
            "th": "นี่ชื่อแม่ครับ",
            "rom": "nîi chʉ̂ʉ mɛ̂ɛ khráp",
            "tail": "",
            "alone": "ชื่อ"
          },
          {
            "label": "Женщина. Это имя мамы.",
            "th": "นี่ชื่อแม่ค่ะ",
            "rom": "nîi chʉ̂ʉ mɛ̂ɛ khâ",
            "tail": "",
            "alone": "ชื่อ"
          },
          {
            "label": "Это не имя мамы.",
            "th": "นี่ไม่ใช่ชื่อแม่ครับ",
            "rom": "nîi mâi-châi chʉ̂ʉ mɛ̂ɛ khráp",
            "tail": "",
            "alone": "ชื่อ"
          },
          {
            "label": "Мужчина. Это имя мамы?",
            "th": "นี่ชื่อแม่ไหมครับ",
            "rom": "nîi chʉ̂ʉ mɛ̂ɛ mǎi khráp",
            "tail": "",
            "alone": "ชื่อ"
          },
          {
            "label": "Женщина. Это имя мамы?",
            "th": "นี่ชื่อแม่ไหมคะ",
            "rom": "nîi chʉ̂ʉ mɛ̂ɛ mǎi khá",
            "tail": "",
            "alone": "ชื่อ"
          },
          {
            "label": "Как вас зовут? Вопрос со словом «что», без ไหม.",
            "th": "คุณชื่ออะไรครับ",
            "rom": "khun chʉ̂ʉ à-rai khráp",
            "tail": "",
            "alone": "ชื่อ"
          }
        ]
      },
      {
        "n": 6,
        "th": "คน",
        "rom": "khon",
        "ru": "кхон",
        "gloss": "Человек. Swadesh: person. Курс пишет khon. Викисловарь в строке Paiboon даёт kon, IPA /kʰon˧/, тон средний. Беру khon.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это человек.",
            "th": "นี่คนครับ",
            "rom": "nîi khon khráp",
            "tail": "",
            "alone": "คน"
          },
          {
            "label": "Женщина. Это человек.",
            "th": "นี่คนค่ะ",
            "rom": "nîi khon khâ",
            "tail": "",
            "alone": "คน"
          },
          {
            "label": "Это не человек.",
            "th": "นี่ไม่ใช่คนครับ",
            "rom": "nîi mâi-châi khon khráp",
            "tail": "",
            "alone": "คน"
          },
          {
            "label": "Мужчина. Это человек?",
            "th": "นี่คนไหมครับ",
            "rom": "nîi khon mǎi khráp",
            "tail": "",
            "alone": "คน"
          },
          {
            "label": "Женщина. Это человек?",
            "th": "นี่คนไหมคะ",
            "rom": "nîi khon mǎi khá",
            "tail": "",
            "alone": "คน"
          }
        ]
      },
      {
        "n": 7,
        "th": "เด็ก",
        "rom": "dèk",
        "ru": "дек",
        "gloss": "Ребёнок. Leipzig–Jakarta: child. Тон низкий: Викисловарь dèk, IPA /dek̚˨˩/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это ребёнок.",
            "th": "นี่เด็กครับ",
            "rom": "nîi dèk khráp",
            "tail": "",
            "alone": "เด็ก"
          },
          {
            "label": "Женщина. Это ребёнок.",
            "th": "นี่เด็กค่ะ",
            "rom": "nîi dèk khâ",
            "tail": "",
            "alone": "เด็ก"
          },
          {
            "label": "Это не ребёнок.",
            "th": "นี่ไม่ใช่เด็กครับ",
            "rom": "nîi mâi-châi dèk khráp",
            "tail": "",
            "alone": "เด็ก"
          },
          {
            "label": "Мужчина. Это ребёнок?",
            "th": "นี่เด็กไหมครับ",
            "rom": "nîi dèk mǎi khráp",
            "tail": "",
            "alone": "เด็ก"
          },
          {
            "label": "Женщина. Это ребёнок?",
            "th": "นี่เด็กไหมคะ",
            "rom": "nîi dèk mǎi khá",
            "tail": "",
            "alone": "เด็ก"
          },
          {
            "label": "Один ребёнок. Счётное слово คน стоит после числа.",
            "th": "เด็กหนึ่งคนครับ",
            "rom": "dèk nʉ̀ng khon khráp",
            "tail": "",
            "alone": "เด็ก"
          }
        ]
      },
      {
        "n": 8,
        "th": "ตา",
        "rom": "dtaa",
        "ru": "таа",
        "gloss": "Глаз. Swadesh: eye. Тон средний: Викисловарь dtaa, IPA /taː˧/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это глаз.",
            "th": "นี่ตาครับ",
            "rom": "nîi dtaa khráp",
            "tail": "",
            "alone": "ตา"
          },
          {
            "label": "Женщина. Это глаз.",
            "th": "นี่ตาค่ะ",
            "rom": "nîi dtaa khâ",
            "tail": "",
            "alone": "ตา"
          },
          {
            "label": "Это не глаз.",
            "th": "นี่ไม่ใช่ตาครับ",
            "rom": "nîi mâi-châi dtaa khráp",
            "tail": "",
            "alone": "ตา"
          },
          {
            "label": "Мужчина. Это глаз?",
            "th": "นี่ตาไหมครับ",
            "rom": "nîi dtaa mǎi khráp",
            "tail": "",
            "alone": "ตา"
          },
          {
            "label": "Женщина. Это глаз?",
            "th": "นี่ตาไหมคะ",
            "rom": "nîi dtaa mǎi khá",
            "tail": "",
            "alone": "ตา"
          }
        ]
      },
      {
        "n": 9,
        "th": "หู",
        "rom": "hǔu",
        "ru": "хуу",
        "gloss": "Ухо. Swadesh: ear. Тон восходящий: Викисловарь hǔu, IPA /huː˩˩˦/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это ухо.",
            "th": "นี่หูครับ",
            "rom": "nîi hǔu khráp",
            "tail": "",
            "alone": "หู"
          },
          {
            "label": "Женщина. Это ухо.",
            "th": "นี่หูค่ะ",
            "rom": "nîi hǔu khâ",
            "tail": "",
            "alone": "หู"
          },
          {
            "label": "Это не ухо.",
            "th": "นี่ไม่ใช่หูครับ",
            "rom": "nîi mâi-châi hǔu khráp",
            "tail": "",
            "alone": "หู"
          },
          {
            "label": "Мужчина. Это ухо?",
            "th": "นี่หูไหมครับ",
            "rom": "nîi hǔu mǎi khráp",
            "tail": "",
            "alone": "หู"
          },
          {
            "label": "Женщина. Это ухо?",
            "th": "นี่หูไหมคะ",
            "rom": "nîi hǔu mǎi khá",
            "tail": "",
            "alone": "หู"
          }
        ]
      },
      {
        "n": 10,
        "th": "จมูก",
        "rom": "jà-mùuk",
        "ru": "ча-муук",
        "gloss": "Нос. Swadesh, Leipzig–Jakarta: nose. Оба слога низкие: Викисловарь jà-mùuk, IPA /t͡ɕa˨˩.muːk̚˨˩/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это нос.",
            "th": "นี่จมูกครับ",
            "rom": "nîi jà-mùuk khráp",
            "tail": "",
            "alone": "จมูก"
          },
          {
            "label": "Женщина. Это нос.",
            "th": "นี่จมูกค่ะ",
            "rom": "nîi jà-mùuk khâ",
            "tail": "",
            "alone": "จมูก"
          },
          {
            "label": "Это не нос.",
            "th": "นี่ไม่ใช่จมูกครับ",
            "rom": "nîi mâi-châi jà-mùuk khráp",
            "tail": "",
            "alone": "จมูก"
          },
          {
            "label": "Мужчина. Это нос?",
            "th": "นี่จมูกไหมครับ",
            "rom": "nîi jà-mùuk mǎi khráp",
            "tail": "",
            "alone": "จมูก"
          },
          {
            "label": "Женщина. Это нос?",
            "th": "นี่จมูกไหมคะ",
            "rom": "nîi jà-mùuk mǎi khá",
            "tail": "",
            "alone": "จมูก"
          }
        ]
      },
      {
        "n": 11,
        "th": "ปาก",
        "rom": "bpàak",
        "ru": "паак",
        "gloss": "Рот. Swadesh, Leipzig–Jakarta: mouth. Тон низкий: Викисловарь bpàak, IPA /paːk̚˨˩/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это рот.",
            "th": "นี่ปากครับ",
            "rom": "nîi bpàak khráp",
            "tail": "",
            "alone": "ปาก"
          },
          {
            "label": "Женщина. Это рот.",
            "th": "นี่ปากค่ะ",
            "rom": "nîi bpàak khâ",
            "tail": "",
            "alone": "ปาก"
          },
          {
            "label": "Это не рот.",
            "th": "นี่ไม่ใช่ปากครับ",
            "rom": "nîi mâi-châi bpàak khráp",
            "tail": "",
            "alone": "ปาก"
          },
          {
            "label": "Мужчина. Это рот?",
            "th": "นี่ปากไหมครับ",
            "rom": "nîi bpàak mǎi khráp",
            "tail": "",
            "alone": "ปาก"
          },
          {
            "label": "Женщина. Это рот?",
            "th": "นี่ปากไหมคะ",
            "rom": "nîi bpàak mǎi khá",
            "tail": "",
            "alone": "ปาก"
          }
        ]
      },
      {
        "n": 12,
        "th": "ฟัน",
        "rom": "fan",
        "ru": "фан",
        "gloss": "Зуб. Swadesh: tooth. Тон средний: Викисловарь fan, IPA /fan˧/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это зуб.",
            "th": "นี่ฟันครับ",
            "rom": "nîi fan khráp",
            "tail": "",
            "alone": "ฟัน"
          },
          {
            "label": "Женщина. Это зуб.",
            "th": "นี่ฟันค่ะ",
            "rom": "nîi fan khâ",
            "tail": "",
            "alone": "ฟัน"
          },
          {
            "label": "Это не зуб.",
            "th": "นี่ไม่ใช่ฟันครับ",
            "rom": "nîi mâi-châi fan khráp",
            "tail": "",
            "alone": "ฟัน"
          },
          {
            "label": "Мужчина. Это зуб?",
            "th": "นี่ฟันไหมครับ",
            "rom": "nîi fan mǎi khráp",
            "tail": "",
            "alone": "ฟัน"
          },
          {
            "label": "Женщина. Это зуб?",
            "th": "นี่ฟันไหมคะ",
            "rom": "nîi fan mǎi khá",
            "tail": "",
            "alone": "ฟัน"
          }
        ]
      },
      {
        "n": 13,
        "th": "ลิ้น",
        "rom": "lín",
        "ru": "лин",
        "gloss": "Язык, орган. Swadesh, Leipzig–Jakarta: tongue. Тон высокий: Викисловарь lín, IPA /lin˦˥/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это язык.",
            "th": "นี่ลิ้นครับ",
            "rom": "nîi lín khráp",
            "tail": "",
            "alone": "ลิ้น"
          },
          {
            "label": "Женщина. Это язык.",
            "th": "นี่ลิ้นค่ะ",
            "rom": "nîi lín khâ",
            "tail": "",
            "alone": "ลิ้น"
          },
          {
            "label": "Это не язык.",
            "th": "นี่ไม่ใช่ลิ้นครับ",
            "rom": "nîi mâi-châi lín khráp",
            "tail": "",
            "alone": "ลิ้น"
          },
          {
            "label": "Мужчина. Это язык?",
            "th": "นี่ลิ้นไหมครับ",
            "rom": "nîi lín mǎi khráp",
            "tail": "",
            "alone": "ลิ้น"
          },
          {
            "label": "Женщина. Это язык?",
            "th": "นี่ลิ้นไหมคะ",
            "rom": "nîi lín mǎi khá",
            "tail": "",
            "alone": "ลิ้น"
          }
        ]
      },
      {
        "n": 14,
        "th": "มือ",
        "rom": "mʉʉ",
        "ru": "мыы",
        "gloss": "Кисть руки. Leipzig–Jakarta: arm/hand, ручная часть. Тон средний: Викисловарь mʉʉ.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это кисть.",
            "th": "นี่มือครับ",
            "rom": "nîi mʉʉ khráp",
            "tail": "",
            "alone": "มือ"
          },
          {
            "label": "Женщина. Это кисть.",
            "th": "นี่มือค่ะ",
            "rom": "nîi mʉʉ khâ",
            "tail": "",
            "alone": "มือ"
          },
          {
            "label": "Это не кисть.",
            "th": "นี่ไม่ใช่มือครับ",
            "rom": "nîi mâi-châi mʉʉ khráp",
            "tail": "",
            "alone": "มือ"
          },
          {
            "label": "Мужчина. Это кисть?",
            "th": "นี่มือไหมครับ",
            "rom": "nîi mʉʉ mǎi khráp",
            "tail": "",
            "alone": "มือ"
          },
          {
            "label": "Женщина. Это кисть?",
            "th": "นี่มือไหมคะ",
            "rom": "nîi mʉʉ mǎi khá",
            "tail": "",
            "alone": "มือ"
          }
        ]
      },
      {
        "n": 15,
        "th": "เท้า",
        "rom": "tháao",
        "ru": "тхаао",
        "gloss": "Ступня. Leipzig–Jakarta делит «нога / ступня» на два тайских слова. Это ступня. Тон высокий: Викисловарь даёт táao, IPA /tʰaːw˦˥/. Беру tháao: ท в курсе пишется th.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это ступня.",
            "th": "นี่เท้าครับ",
            "rom": "nîi tháao khráp",
            "tail": "",
            "alone": "เท้า"
          },
          {
            "label": "Женщина. Это ступня.",
            "th": "นี่เท้าค่ะ",
            "rom": "nîi tháao khâ",
            "tail": "",
            "alone": "เท้า"
          },
          {
            "label": "Это не ступня.",
            "th": "นี่ไม่ใช่เท้าครับ",
            "rom": "nîi mâi-châi tháao khráp",
            "tail": "",
            "alone": "เท้า"
          },
          {
            "label": "Мужчина. Это ступня?",
            "th": "นี่เท้าไหมครับ",
            "rom": "nîi tháao mǎi khráp",
            "tail": "",
            "alone": "เท้า"
          },
          {
            "label": "Женщина. Это ступня?",
            "th": "นี่เท้าไหมคะ",
            "rom": "nîi tháao mǎi khá",
            "tail": "",
            "alone": "เท้า"
          }
        ]
      },
      {
        "n": 16,
        "th": "ขา",
        "rom": "khǎa",
        "ru": "кхаа",
        "gloss": "Нога. Вторая половина того же значения Leipzig–Jakarta. Тон восходящий: Викисловарь kǎa, IPA /kʰaː˩˩˦/. Беру khǎa.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это нога.",
            "th": "นี่ขาครับ",
            "rom": "nîi khǎa khráp",
            "tail": "",
            "alone": "ขา"
          },
          {
            "label": "Женщина. Это нога.",
            "th": "นี่ขาค่ะ",
            "rom": "nîi khǎa khâ",
            "tail": "",
            "alone": "ขา"
          },
          {
            "label": "Это не нога.",
            "th": "นี่ไม่ใช่ขาครับ",
            "rom": "nîi mâi-châi khǎa khráp",
            "tail": "",
            "alone": "ขา"
          },
          {
            "label": "Мужчина. Это нога?",
            "th": "นี่ขาไหมครับ",
            "rom": "nîi khǎa mǎi khráp",
            "tail": "",
            "alone": "ขา"
          },
          {
            "label": "Женщина. Это нога?",
            "th": "นี่ขาไหมคะ",
            "rom": "nîi khǎa mǎi khá",
            "tail": "",
            "alone": "ขา"
          }
        ]
      },
      {
        "n": 17,
        "th": "หัว",
        "rom": "hǔua",
        "ru": "хыа",
        "gloss": "Голова. Swadesh: head. Тон восходящий: Викисловарь hǔua, IPA /hua̯˩˩˦/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это голова.",
            "th": "นี่หัวครับ",
            "rom": "nîi hǔua khráp",
            "tail": "",
            "alone": "หัว"
          },
          {
            "label": "Женщина. Это голова.",
            "th": "นี่หัวค่ะ",
            "rom": "nîi hǔua khâ",
            "tail": "",
            "alone": "หัว"
          },
          {
            "label": "Это не голова.",
            "th": "นี่ไม่ใช่หัวครับ",
            "rom": "nîi mâi-châi hǔua khráp",
            "tail": "",
            "alone": "หัว"
          },
          {
            "label": "Мужчина. Это голова?",
            "th": "นี่หัวไหมครับ",
            "rom": "nîi hǔua mǎi khráp",
            "tail": "",
            "alone": "หัว"
          },
          {
            "label": "Женщина. Это голова?",
            "th": "นี่หัวไหมคะ",
            "rom": "nîi hǔua mǎi khá",
            "tail": "",
            "alone": "หัว"
          }
        ]
      },
      {
        "n": 18,
        "th": "ผม",
        "rom": "phǒm",
        "ru": "пхом",
        "gloss": "Волосы на голове. То же слово, что мужское «я», тон тот же. Swadesh: hair.",
        "notes": [
          "Обе фразы начинаются на phǒm. Смысл держит продолжение: признак волос или действие говорящего."
        ],
        "extras": [],
        "examples": [
          {
            "label": "Волосы короткие. Мужчина говорит.",
            "th": "ผมสั้นครับ",
            "rom": "phǒm sân khráp",
            "tail": "",
            "alone": "ผม"
          },
          {
            "label": "Волосы короткие. Женщина говорит.",
            "th": "ผมสั้นค่ะ",
            "rom": "phǒm sân khâ",
            "tail": "",
            "alone": "ผม"
          },
          {
            "label": "Волосы не короткие.",
            "th": "ผมไม่สั้นครับ",
            "rom": "phǒm mâi sân khráp",
            "tail": "",
            "alone": "ผม"
          },
          {
            "label": "Мужчина. Волосы короткие?",
            "th": "ผมสั้นไหมครับ",
            "rom": "phǒm sân mǎi khráp",
            "tail": "",
            "alone": "ผม"
          },
          {
            "label": "Женщина. Волосы короткие?",
            "th": "ผมสั้นไหมคะ",
            "rom": "phǒm sân mǎi khá",
            "tail": "",
            "alone": "ผม"
          },
          {
            "label": "Мужское «я», для сравнения звука. Я ем рис.",
            "th": "ผมกินข้าวครับ",
            "rom": "phǒm gin khâao khráp",
            "tail": "",
            "alone": "ผม"
          }
        ]
      },
      {
        "n": 19,
        "th": "เลือด",
        "rom": "lʉ̂ʉat",
        "ru": "лыат",
        "gloss": "Кровь. Swadesh: blood. Тон падающий: Викисловарь lʉ̂ʉat, IPA /lɯa̯t̚˥˩/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это кровь.",
            "th": "นี่เลือดครับ",
            "rom": "nîi lʉ̂ʉat khráp",
            "tail": "",
            "alone": "เลือด"
          },
          {
            "label": "Женщина. Это кровь.",
            "th": "นี่เลือดค่ะ",
            "rom": "nîi lʉ̂ʉat khâ",
            "tail": "",
            "alone": "เลือด"
          },
          {
            "label": "Это не кровь.",
            "th": "นี่ไม่ใช่เลือดครับ",
            "rom": "nîi mâi-châi lʉ̂ʉat khráp",
            "tail": "",
            "alone": "เลือด"
          },
          {
            "label": "Мужчина. Это кровь?",
            "th": "นี่เลือดไหมครับ",
            "rom": "nîi lʉ̂ʉat mǎi khráp",
            "tail": "",
            "alone": "เลือด"
          },
          {
            "label": "Женщина. Это кровь?",
            "th": "นี่เลือดไหมคะ",
            "rom": "nîi lʉ̂ʉat mǎi khá",
            "tail": "",
            "alone": "เลือด"
          }
        ]
      },
      {
        "n": 20,
        "th": "หมา",
        "rom": "mǎa",
        "ru": "маа",
        "gloss": "Собака. Swadesh: dog. Тон восходящий: Викисловарь mǎa, IPA /maː˩˩˦/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это собака.",
            "th": "นี่หมาครับ",
            "rom": "nîi mǎa khráp",
            "tail": "",
            "alone": "หมา"
          },
          {
            "label": "Женщина. Это собака.",
            "th": "นี่หมาค่ะ",
            "rom": "nîi mǎa khâ",
            "tail": "",
            "alone": "หมา"
          },
          {
            "label": "Это не собака.",
            "th": "นี่ไม่ใช่หมาครับ",
            "rom": "nîi mâi-châi mǎa khráp",
            "tail": "",
            "alone": "หมา"
          },
          {
            "label": "Мужчина. Это собака?",
            "th": "นี่หมาไหมครับ",
            "rom": "nîi mǎa mǎi khráp",
            "tail": "",
            "alone": "หมา"
          },
          {
            "label": "Женщина. Это собака?",
            "th": "นี่หมาไหมคะ",
            "rom": "nîi mǎa mǎi khá",
            "tail": "",
            "alone": "หมา"
          }
        ]
      },
      {
        "n": 21,
        "th": "ไข่",
        "rom": "khài",
        "ru": "кхай",
        "gloss": "Яйцо. Swadesh: egg. Тон низкий: Викисловарь kài, IPA /kʰaj˨˩/. Беру khài.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это яйцо.",
            "th": "นี่ไข่ครับ",
            "rom": "nîi khài khráp",
            "tail": "",
            "alone": "ไข่"
          },
          {
            "label": "Женщина. Это яйцо.",
            "th": "นี่ไข่ค่ะ",
            "rom": "nîi khài khâ",
            "tail": "",
            "alone": "ไข่"
          },
          {
            "label": "Это не яйцо.",
            "th": "นี่ไม่ใช่ไข่ครับ",
            "rom": "nîi mâi-châi khài khráp",
            "tail": "",
            "alone": "ไข่"
          },
          {
            "label": "Мужчина. Это яйцо?",
            "th": "นี่ไข่ไหมครับ",
            "rom": "nîi khài mǎi khráp",
            "tail": "",
            "alone": "ไข่"
          },
          {
            "label": "Женщина. Это яйцо?",
            "th": "นี่ไข่ไหมคะ",
            "rom": "nîi khài mǎi khá",
            "tail": "",
            "alone": "ไข่"
          }
        ]
      },
      {
        "n": 22,
        "th": "เนื้อ",
        "rom": "nʉ́ʉa",
        "ru": "ныа",
        "gloss": "Мясо. Swadesh: flesh/meat. Тон высокий: Викисловарь nʉ́ʉa, IPA /nɯa̯˦˥/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это мясо.",
            "th": "นี่เนื้อครับ",
            "rom": "nîi nʉ́ʉa khráp",
            "tail": "",
            "alone": "เนื้อ"
          },
          {
            "label": "Женщина. Это мясо.",
            "th": "นี่เนื้อค่ะ",
            "rom": "nîi nʉ́ʉa khâ",
            "tail": "",
            "alone": "เนื้อ"
          },
          {
            "label": "Это не мясо.",
            "th": "นี่ไม่ใช่เนื้อครับ",
            "rom": "nîi mâi-châi nʉ́ʉa khráp",
            "tail": "",
            "alone": "เนื้อ"
          },
          {
            "label": "Мужчина. Это мясо?",
            "th": "นี่เนื้อไหมครับ",
            "rom": "nîi nʉ́ʉa mǎi khráp",
            "tail": "",
            "alone": "เนื้อ"
          },
          {
            "label": "Женщина. Это мясо?",
            "th": "นี่เนื้อไหมคะ",
            "rom": "nîi nʉ́ʉa mǎi khá",
            "tail": "",
            "alone": "เนื้อ"
          }
        ]
      },
      {
        "n": 23,
        "th": "ปลา",
        "rom": "bplaa",
        "ru": "плаа",
        "gloss": "Рыба. Swadesh: fish. Тон средний: Викисловарь bplaa, IPA /plaː˧/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это рыба.",
            "th": "นี่ปลาครับ",
            "rom": "nîi bplaa khráp",
            "tail": "",
            "alone": "ปลา"
          },
          {
            "label": "Женщина. Это рыба.",
            "th": "นี่ปลาค่ะ",
            "rom": "nîi bplaa khâ",
            "tail": "",
            "alone": "ปลา"
          },
          {
            "label": "Это не рыба.",
            "th": "นี่ไม่ใช่ปลาครับ",
            "rom": "nîi mâi-châi bplaa khráp",
            "tail": "",
            "alone": "ปลา"
          },
          {
            "label": "Мужчина. Это рыба?",
            "th": "นี่ปลาไหมครับ",
            "rom": "nîi bplaa mǎi khráp",
            "tail": "",
            "alone": "ปลา"
          },
          {
            "label": "Женщина. Это рыба?",
            "th": "นี่ปลาไหมคะ",
            "rom": "nîi bplaa mǎi khá",
            "tail": "",
            "alone": "ปลา"
          }
        ]
      },
      {
        "n": 24,
        "th": "ลม",
        "rom": "lom",
        "ru": "лом",
        "gloss": "Ветер. Leipzig–Jakarta: wind. Тон средний: Викисловарь lom, IPA /lom˧/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это ветер.",
            "th": "นี่ลมครับ",
            "rom": "nîi lom khráp",
            "tail": "",
            "alone": "ลม"
          },
          {
            "label": "Женщина. Это ветер.",
            "th": "นี่ลมค่ะ",
            "rom": "nîi lom khâ",
            "tail": "",
            "alone": "ลม"
          },
          {
            "label": "Это не ветер.",
            "th": "นี่ไม่ใช่ลมครับ",
            "rom": "nîi mâi-châi lom khráp",
            "tail": "",
            "alone": "ลม"
          },
          {
            "label": "Мужчина. Это ветер?",
            "th": "นี่ลมไหมครับ",
            "rom": "nîi lom mǎi khráp",
            "tail": "",
            "alone": "ลม"
          },
          {
            "label": "Женщина. Это ветер?",
            "th": "นี่ลมไหมคะ",
            "rom": "nîi lom mǎi khá",
            "tail": "",
            "alone": "ลม"
          }
        ]
      },
      {
        "n": 25,
        "th": "เกลือ",
        "rom": "glʉʉa",
        "ru": "глыа",
        "gloss": "Соль. Leipzig–Jakarta: salt. Тон средний: Викисловарь glʉʉa, IPA /klɯa̯˧/. В частотном файле ранг 2 793.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Это соль.",
            "th": "นี่เกลือครับ",
            "rom": "nîi glʉʉa khráp",
            "tail": "",
            "alone": "เกลือ"
          },
          {
            "label": "Женщина. Это соль.",
            "th": "นี่เกลือค่ะ",
            "rom": "nîi glʉʉa khâ",
            "tail": "",
            "alone": "เกลือ"
          },
          {
            "label": "Это не соль.",
            "th": "นี่ไม่ใช่เกลือครับ",
            "rom": "nîi mâi-châi glʉʉa khráp",
            "tail": "",
            "alone": "เกลือ"
          },
          {
            "label": "Мужчина. Это соль?",
            "th": "นี่เกลือไหมครับ",
            "rom": "nîi glʉʉa mǎi khráp",
            "tail": "",
            "alone": "เกลือ"
          },
          {
            "label": "Женщина. Это соль?",
            "th": "นี่เกลือไหมคะ",
            "rom": "nîi glʉʉa mǎi khá",
            "tail": "",
            "alone": "เกลือ"
          }
        ]
      },
      {
        "n": 26,
        "th": "กลางคืน",
        "rom": "glaang-khʉʉn",
        "ru": "глаанг-кхыын",
        "gloss": "Ночь. Swadesh: night. Викисловарь: glaang-kʉʉn, оба слога средние, IPA /klaːŋ˧.kʰɯːn˧/. Беру kh во втором слоге, как курс пишет ค.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Сейчас ночь. Для времени суток берётся ตอนนี้ из курса:",
            "th": "ตอนนี้กลางคืนครับ",
            "rom": "dtɔɔn-níi glaang-khʉʉn khráp",
            "tail": "",
            "alone": "กลางคืน"
          },
          {
            "label": "Женщина. Сейчас ночь.",
            "th": "ตอนนี้กลางคืนค่ะ",
            "rom": "dtɔɔn-níi glaang-khʉʉn khâ",
            "tail": "",
            "alone": "กลางคืน"
          },
          {
            "label": "Сейчас не ночь.",
            "th": "ตอนนี้ไม่ใช่กลางคืนครับ",
            "rom": "dtɔɔn-níi mâi-châi glaang-khʉʉn khráp",
            "tail": "",
            "alone": "กลางคืน"
          },
          {
            "label": "Мужчина. Сейчас ночь?",
            "th": "ตอนนี้กลางคืนไหมครับ",
            "rom": "dtɔɔn-níi glaang-khʉʉn mǎi khráp",
            "tail": "",
            "alone": "กลางคืน"
          },
          {
            "label": "Женщина. Сейчас ночь?",
            "th": "ตอนนี้กลางคืนไหมคะ",
            "rom": "dtɔɔn-níi glaang-khʉʉn mǎi khá",
            "tail": "",
            "alone": "กลางคืน"
          }
        ]
      }
    ]
  },
  {
    "id": "adjectives",
    "title": "Прилагательные",
    "items": [
      {
        "n": 1,
        "th": "ใหญ่",
        "rom": "yài",
        "ru": "яй",
        "gloss": "Большой. Dixon: размер. Swadesh, Leipzig–Jakarta: big.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Дом большой.",
            "th": "บ้านใหญ่ครับ",
            "rom": "bâan yài khráp",
            "tail": "",
            "alone": "ใหญ่"
          },
          {
            "label": "Женщина говорит. Дом большой.",
            "th": "บ้านใหญ่ค่ะ",
            "rom": "bâan yài khâ",
            "tail": "",
            "alone": "ใหญ่"
          },
          {
            "label": "Дом не большой.",
            "th": "บ้านไม่ใหญ่ครับ",
            "rom": "bâan mâi yài khráp",
            "tail": "",
            "alone": "ใหญ่"
          },
          {
            "label": "Мужчина. Дом большой?",
            "th": "บ้านใหญ่ไหมครับ",
            "rom": "bâan yài mǎi khráp",
            "tail": "",
            "alone": "ใหญ่"
          },
          {
            "label": "Женщина. Дом большой?",
            "th": "บ้านใหญ่ไหมคะ",
            "rom": "bâan yài mǎi khá",
            "tail": "",
            "alone": "ใหญ่"
          },
          {
            "label": "Этот дом больше того.",
            "th": "บ้านนี้ใหญ่กว่าบ้านนั้นครับ",
            "rom": "bâan níi yài gwàa bâan nán khráp",
            "tail": "",
            "alone": "ใหญ่"
          }
        ]
      },
      {
        "n": 2,
        "th": "เล็ก",
        "rom": "lék",
        "ru": "лек",
        "gloss": "Маленький. Dixon: размер. Swadesh, Leipzig–Jakarta: small.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Дом маленький.",
            "th": "บ้านเล็กครับ",
            "rom": "bâan lék khráp",
            "tail": "",
            "alone": "เล็ก"
          },
          {
            "label": "Женщина говорит. Дом маленький.",
            "th": "บ้านเล็กค่ะ",
            "rom": "bâan lék khâ",
            "tail": "",
            "alone": "เล็ก"
          },
          {
            "label": "Дом не маленький.",
            "th": "บ้านไม่เล็กครับ",
            "rom": "bâan mâi lék khráp",
            "tail": "",
            "alone": "เล็ก"
          },
          {
            "label": "Мужчина. Дом маленький?",
            "th": "บ้านเล็กไหมครับ",
            "rom": "bâan lék mǎi khráp",
            "tail": "",
            "alone": "เล็ก"
          },
          {
            "label": "Женщина. Дом маленький?",
            "th": "บ้านเล็กไหมคะ",
            "rom": "bâan lék mǎi khá",
            "tail": "",
            "alone": "เล็ก"
          },
          {
            "label": "Этот дом меньше того.",
            "th": "บ้านนี้เล็กกว่าบ้านนั้นครับ",
            "rom": "bâan níi lék gwàa bâan nán khráp",
            "tail": "",
            "alone": "เล็ก"
          }
        ]
      },
      {
        "n": 3,
        "th": "ยาว",
        "rom": "yaao",
        "ru": "йаао",
        "gloss": "Длинный. Dixon: размер. Swadesh, Leipzig–Jakarta: long. Тон средний: Викисловарь yaao, IPA /jaːw˧/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Нога длинная.",
            "th": "ขายาวครับ",
            "rom": "khǎa yaao khráp",
            "tail": "",
            "alone": "ยาว"
          },
          {
            "label": "Женщина говорит. Нога длинная.",
            "th": "ขายาวค่ะ",
            "rom": "khǎa yaao khâ",
            "tail": "",
            "alone": "ยาว"
          },
          {
            "label": "Нога не длинная.",
            "th": "ขาไม่ยาวครับ",
            "rom": "khǎa mâi yaao khráp",
            "tail": "",
            "alone": "ยาว"
          },
          {
            "label": "Мужчина. Нога длинная?",
            "th": "ขายาวไหมครับ",
            "rom": "khǎa yaao mǎi khráp",
            "tail": "",
            "alone": "ยาว"
          },
          {
            "label": "Женщина. Нога длинная?",
            "th": "ขายาวไหมคะ",
            "rom": "khǎa yaao mǎi khá",
            "tail": "",
            "alone": "ยาว"
          },
          {
            "label": "Эта нога длиннее той.",
            "th": "ขานี้ยาวกว่าขานั้นครับ",
            "rom": "khǎa níi yaao gwàa khǎa nán khráp",
            "tail": "",
            "alone": "ยาว"
          }
        ]
      },
      {
        "n": 4,
        "th": "สั้น",
        "rom": "sân",
        "ru": "сан",
        "gloss": "Короткий. Dixon: размер, пара к long. Тон падающий: Викисловарь sân, IPA /san˥˩/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Нога короткая.",
            "th": "ขาสั้นครับ",
            "rom": "khǎa sân khráp",
            "tail": "",
            "alone": "สั้น"
          },
          {
            "label": "Женщина говорит. Нога короткая.",
            "th": "ขาสั้นค่ะ",
            "rom": "khǎa sân khâ",
            "tail": "",
            "alone": "สั้น"
          },
          {
            "label": "Нога не короткая.",
            "th": "ขาไม่สั้นครับ",
            "rom": "khǎa mâi sân khráp",
            "tail": "",
            "alone": "สั้น"
          },
          {
            "label": "Мужчина. Нога короткая?",
            "th": "ขาสั้นไหมครับ",
            "rom": "khǎa sân mǎi khráp",
            "tail": "",
            "alone": "สั้น"
          },
          {
            "label": "Женщина. Нога короткая?",
            "th": "ขาสั้นไหมคะ",
            "rom": "khǎa sân mǎi khá",
            "tail": "",
            "alone": "สั้น"
          },
          {
            "label": "Эта нога короче той.",
            "th": "ขานี้สั้นกว่าขานั้นครับ",
            "rom": "khǎa níi sân gwàa khǎa nán khráp",
            "tail": "",
            "alone": "สั้น"
          }
        ]
      },
      {
        "n": 5,
        "th": "กว้าง",
        "rom": "gwâang",
        "ru": "гваанг",
        "gloss": "Широкий. Leipzig–Jakarta: wide. Тон падающий: Викисловарь gwâang, IPA /kwaːŋ˥˩/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Дом широкий.",
            "th": "บ้านกว้างครับ",
            "rom": "bâan gwâang khráp",
            "tail": "",
            "alone": "กว้าง"
          },
          {
            "label": "Женщина говорит. Дом широкий.",
            "th": "บ้านกว้างค่ะ",
            "rom": "bâan gwâang khâ",
            "tail": "",
            "alone": "กว้าง"
          },
          {
            "label": "Дом не широкий.",
            "th": "บ้านไม่กว้างครับ",
            "rom": "bâan mâi gwâang khráp",
            "tail": "",
            "alone": "กว้าง"
          },
          {
            "label": "Мужчина. Дом широкий?",
            "th": "บ้านกว้างไหมครับ",
            "rom": "bâan gwâang mǎi khráp",
            "tail": "",
            "alone": "กว้าง"
          },
          {
            "label": "Женщина. Дом широкий?",
            "th": "บ้านกว้างไหมคะ",
            "rom": "bâan gwâang mǎi khá",
            "tail": "",
            "alone": "กว้าง"
          },
          {
            "label": "Этот дом шире того.",
            "th": "บ้านนี้กว้างกว่าบ้านนั้นครับ",
            "rom": "bâan níi gwâang gwàa bâan nán khráp",
            "tail": "",
            "alone": "กว้าง"
          }
        ]
      },
      {
        "n": 6,
        "th": "สูง",
        "rom": "sǔung",
        "ru": "суунг",
        "gloss": "Высокий. Dixon: размер. Слово уже в курсе. В Swadesh-100 его нет.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина. Я высокий.",
            "th": "ผมสูงครับ",
            "rom": "phǒm sǔung khráp",
            "tail": "",
            "alone": "สูง"
          },
          {
            "label": "Женщина. Я высокая.",
            "th": "ฉันสูงค่ะ",
            "rom": "chǎn sǔung khâ",
            "tail": "",
            "alone": "สูง"
          },
          {
            "label": "Я не высокий.",
            "th": "ผมไม่สูงครับ",
            "rom": "phǒm mâi sǔung khráp",
            "tail": "",
            "alone": "สูง"
          },
          {
            "label": "Мужчина. Вы высокого роста?",
            "th": "คุณสูงไหมครับ",
            "rom": "khun sǔung mǎi khráp",
            "tail": "",
            "alone": "สูง"
          },
          {
            "label": "Женщина. Вы высокого роста?",
            "th": "คุณสูงไหมคะ",
            "rom": "khun sǔung mǎi khá",
            "tail": "",
            "alone": "สูง"
          },
          {
            "label": "Я выше вас.",
            "th": "ผมสูงกว่าคุณครับ",
            "rom": "phǒm sǔung gwàa khun khráp",
            "tail": "",
            "alone": "สูง"
          }
        ]
      },
      {
        "n": 7,
        "th": "ใหม่",
        "rom": "mài",
        "ru": "май",
        "gloss": "Новый. Dixon: возраст. Swadesh, Leipzig–Jakarta: new. Тон низкий: Викисловарь mài, IPA /maj˨˩/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Дом новый.",
            "th": "บ้านใหม่ครับ",
            "rom": "bâan mài khráp",
            "tail": "",
            "alone": "ใหม่"
          },
          {
            "label": "Женщина говорит. Дом новый.",
            "th": "บ้านใหม่ค่ะ",
            "rom": "bâan mài khâ",
            "tail": "",
            "alone": "ใหม่"
          },
          {
            "label": "Дом не новый.",
            "th": "บ้านไม่ใหม่ครับ",
            "rom": "bâan mâi mài khráp",
            "tail": "",
            "alone": "ใหม่"
          },
          {
            "label": "Мужчина. Дом новый?",
            "th": "บ้านใหม่ไหมครับ",
            "rom": "bâan mài mǎi khráp",
            "tail": "",
            "alone": "ใหม่"
          },
          {
            "label": "Женщина. Дом новый?",
            "th": "บ้านใหม่ไหมคะ",
            "rom": "bâan mài mǎi khá",
            "tail": "",
            "alone": "ใหม่"
          },
          {
            "label": "Этот дом новее того.",
            "th": "บ้านนี้ใหม่กว่าบ้านนั้นครับ",
            "rom": "bâan níi mài gwàa bâan nán khráp",
            "tail": "",
            "alone": "ใหม่"
          }
        ]
      },
      {
        "n": 8,
        "th": "เก่า",
        "rom": "gào",
        "ru": "гао",
        "gloss": "Старый, о вещи. Dixon: возраст. Leipzig–Jakarta: old. Тон низкий: Викисловарь gào, IPA /kaw˨˩/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Дом старый.",
            "th": "บ้านเก่าครับ",
            "rom": "bâan gào khráp",
            "tail": "",
            "alone": "เก่า"
          },
          {
            "label": "Женщина говорит. Дом старый.",
            "th": "บ้านเก่าค่ะ",
            "rom": "bâan gào khâ",
            "tail": "",
            "alone": "เก่า"
          },
          {
            "label": "Дом не старый.",
            "th": "บ้านไม่เก่าครับ",
            "rom": "bâan mâi gào khráp",
            "tail": "",
            "alone": "เก่า"
          },
          {
            "label": "Мужчина. Дом старый?",
            "th": "บ้านเก่าไหมครับ",
            "rom": "bâan gào mǎi khráp",
            "tail": "",
            "alone": "เก่า"
          },
          {
            "label": "Женщина. Дом старый?",
            "th": "บ้านเก่าไหมคะ",
            "rom": "bâan gào mǎi khá",
            "tail": "",
            "alone": "เก่า"
          },
          {
            "label": "Этот дом старше того.",
            "th": "บ้านนี้เก่ากว่าบ้านนั้นครับ",
            "rom": "bâan níi gào gwàa bâan nán khráp",
            "tail": "",
            "alone": "เก่า"
          }
        ]
      },
      {
        "n": 9,
        "th": "แก่",
        "rom": "gɛ̀ɛ",
        "ru": "гээ",
        "gloss": "Старый, о человеке. Dixon: возраст. Пара к เก่า. Тон низкий: Викисловарь gɛ̀ɛ, IPA /kɛː˨˩/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Он старый.",
            "th": "เขาแก่ครับ",
            "rom": "khǎo gɛ̀ɛ khráp",
            "tail": "",
            "alone": "แก่"
          },
          {
            "label": "Женщина говорит. Он старый.",
            "th": "เขาแก่ค่ะ",
            "rom": "khǎo gɛ̀ɛ khâ",
            "tail": "",
            "alone": "แก่"
          },
          {
            "label": "Он не старый.",
            "th": "เขาไม่แก่ครับ",
            "rom": "khǎo mâi gɛ̀ɛ khráp",
            "tail": "",
            "alone": "แก่"
          },
          {
            "label": "Мужчина. Он старый?",
            "th": "เขาแก่ไหมครับ",
            "rom": "khǎo gɛ̀ɛ mǎi khráp",
            "tail": "",
            "alone": "แก่"
          },
          {
            "label": "Женщина. Он старый?",
            "th": "เขาแก่ไหมคะ",
            "rom": "khǎo gɛ̀ɛ mǎi khá",
            "tail": "",
            "alone": "แก่"
          },
          {
            "label": "Он старше меня.",
            "th": "เขาแก่กว่าผมครับ",
            "rom": "khǎo gɛ̀ɛ gwàa phǒm khráp",
            "tail": "",
            "alone": "แก่"
          }
        ]
      },
      {
        "n": 10,
        "th": "ดี",
        "rom": "dii",
        "ru": "дии",
        "gloss": "Хороший. Dixon: оценка. Swadesh, Leipzig–Jakarta: good. NSM: GOOD. Тон средний: Викисловарь dii, IPA /diː˧/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Вода хорошая.",
            "th": "น้ำดีครับ",
            "rom": "náam dii khráp",
            "tail": "",
            "alone": "ดี"
          },
          {
            "label": "Женщина говорит. Вода хорошая.",
            "th": "น้ำดีค่ะ",
            "rom": "náam dii khâ",
            "tail": "",
            "alone": "ดี"
          },
          {
            "label": "Вода не хорошая.",
            "th": "น้ำไม่ดีครับ",
            "rom": "náam mâi dii khráp",
            "tail": "",
            "alone": "ดี"
          },
          {
            "label": "Мужчина. Вода хорошая?",
            "th": "น้ำดีไหมครับ",
            "rom": "náam dii mǎi khráp",
            "tail": "",
            "alone": "ดี"
          },
          {
            "label": "Женщина. Вода хорошая?",
            "th": "น้ำดีไหมคะ",
            "rom": "náam dii mǎi khá",
            "tail": "",
            "alone": "ดี"
          },
          {
            "label": "Эта вода лучше той.",
            "th": "น้ำนี้ดีกว่าน้ำนั้นครับ",
            "rom": "náam níi dii gwàa náam nán khráp",
            "tail": "",
            "alone": "ดี"
          }
        ]
      },
      {
        "n": 11,
        "th": "แย่",
        "rom": "yɛ̂ɛ",
        "ru": "йээ",
        "gloss": "Плохой, скверный. Dixon: оценка, BAD. Тон падающий: Викисловарь yɛ̂ɛ, IPA /jɛː˥˩/. В частотном файле ранг 1 589. เลว leeo, средний тон, IPA /leːw˧/, стоит на ранге 2 317. В сетке แย่.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Сегодня плохо.",
            "th": "วันนี้แย่ครับ",
            "rom": "wan-níi yɛ̂ɛ khráp",
            "tail": "",
            "alone": "แย่"
          },
          {
            "label": "Женщина говорит. Сегодня плохо.",
            "th": "วันนี้แย่ค่ะ",
            "rom": "wan-níi yɛ̂ɛ khâ",
            "tail": "",
            "alone": "แย่"
          },
          {
            "label": "Сегодня не плохо.",
            "th": "วันนี้ไม่แย่ครับ",
            "rom": "wan-níi mâi yɛ̂ɛ khráp",
            "tail": "",
            "alone": "แย่"
          },
          {
            "label": "Мужчина. Сегодня плохо?",
            "th": "วันนี้แย่ไหมครับ",
            "rom": "wan-níi yɛ̂ɛ mǎi khráp",
            "tail": "",
            "alone": "แย่"
          },
          {
            "label": "Женщина. Сегодня плохо?",
            "th": "วันนี้แย่ไหมคะ",
            "rom": "wan-níi yɛ̂ɛ mǎi khá",
            "tail": "",
            "alone": "แย่"
          },
          {
            "label": "Вчера было плохо.",
            "th": "เมื่อวานแย่ครับ",
            "rom": "mʉ̂ʉa-waan yɛ̂ɛ khráp",
            "tail": "",
            "alone": "แย่"
          },
          {
            "label": "Сегодня хуже, чем вчера.",
            "th": "วันนี้แย่กว่าเมื่อวานครับ",
            "rom": "wan-níi yɛ̂ɛ gwàa mʉ̂ʉa-waan khráp",
            "tail": "",
            "alone": "แย่"
          }
        ]
      },
      {
        "n": 12,
        "th": "ดำ",
        "rom": "dam",
        "ru": "дам",
        "gloss": "Чёрный. Dixon: цвет. Swadesh: black. Тон средний: Викисловарь dam, IPA /dam˧/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Собака чёрная.",
            "th": "หมาดำครับ",
            "rom": "mǎa dam khráp",
            "tail": "",
            "alone": "ดำ"
          },
          {
            "label": "Женщина говорит. Собака чёрная.",
            "th": "หมาดำค่ะ",
            "rom": "mǎa dam khâ",
            "tail": "",
            "alone": "ดำ"
          },
          {
            "label": "Собака не чёрная.",
            "th": "หมาไม่ดำครับ",
            "rom": "mǎa mâi dam khráp",
            "tail": "",
            "alone": "ดำ"
          },
          {
            "label": "Мужчина. Собака чёрная?",
            "th": "หมาดำไหมครับ",
            "rom": "mǎa dam mǎi khráp",
            "tail": "",
            "alone": "ดำ"
          },
          {
            "label": "Женщина. Собака чёрная?",
            "th": "หมาดำไหมคะ",
            "rom": "mǎa dam mǎi khá",
            "tail": "",
            "alone": "ดำ"
          }
        ]
      },
      {
        "n": 13,
        "th": "ขาว",
        "rom": "khǎao",
        "ru": "кхаао",
        "gloss": "Белый. Dixon: цвет. Swadesh: white. Тон восходящий: Викисловарь kǎao, IPA /kʰaːw˩˩˦/. Беру khǎao.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Дом белый.",
            "th": "บ้านขาวครับ",
            "rom": "bâan khǎao khráp",
            "tail": "",
            "alone": "ขาว"
          },
          {
            "label": "Женщина говорит. Дом белый.",
            "th": "บ้านขาวค่ะ",
            "rom": "bâan khǎao khâ",
            "tail": "",
            "alone": "ขาว"
          },
          {
            "label": "Дом не белый.",
            "th": "บ้านไม่ขาวครับ",
            "rom": "bâan mâi khǎao khráp",
            "tail": "",
            "alone": "ขาว"
          },
          {
            "label": "Мужчина. Дом белый?",
            "th": "บ้านขาวไหมครับ",
            "rom": "bâan khǎao mǎi khráp",
            "tail": "",
            "alone": "ขาว"
          },
          {
            "label": "Женщина. Дом белый?",
            "th": "บ้านขาวไหมคะ",
            "rom": "bâan khǎao mǎi khá",
            "tail": "",
            "alone": "ขาว"
          }
        ]
      },
      {
        "n": 14,
        "th": "แดง",
        "rom": "dɛɛng",
        "ru": "дэенг",
        "gloss": "Красный. Dixon: цвет. Swadesh: red. Тон средний: Викисловарь dɛɛng, IPA /dɛːŋ˧/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Дом красный.",
            "th": "บ้านแดงครับ",
            "rom": "bâan dɛɛng khráp",
            "tail": "",
            "alone": "แดง"
          },
          {
            "label": "Женщина говорит. Дом красный.",
            "th": "บ้านแดงค่ะ",
            "rom": "bâan dɛɛng khâ",
            "tail": "",
            "alone": "แดง"
          },
          {
            "label": "Дом не красный.",
            "th": "บ้านไม่แดงครับ",
            "rom": "bâan mâi dɛɛng khráp",
            "tail": "",
            "alone": "แดง"
          },
          {
            "label": "Мужчина. Дом красный?",
            "th": "บ้านแดงไหมครับ",
            "rom": "bâan dɛɛng mǎi khráp",
            "tail": "",
            "alone": "แดง"
          },
          {
            "label": "Женщина. Дом красный?",
            "th": "บ้านแดงไหมคะ",
            "rom": "bâan dɛɛng mǎi khá",
            "tail": "",
            "alone": "แดง"
          },
          {
            "label": "Этот дом краснее того.",
            "th": "บ้านนี้แดงกว่าบ้านนั้นครับ",
            "rom": "bâan níi dɛɛng gwàa bâan nán khráp",
            "tail": "",
            "alone": "แดง"
          }
        ]
      },
      {
        "n": 15,
        "th": "เขียว",
        "rom": "khǐao",
        "ru": "кхиао",
        "gloss": "Зелёный. Swadesh: green. Dixon считает чёрный, белый и красный ядром, зелёный в минимальный набор не входит. Тон восходящий: Викисловарь kǐao, IPA /kʰia̯w˩˩˦/. Беру khǐao.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Дом зелёный.",
            "th": "บ้านเขียวครับ",
            "rom": "bâan khǐao khráp",
            "tail": "",
            "alone": "เขียว"
          },
          {
            "label": "Женщина говорит. Дом зелёный.",
            "th": "บ้านเขียวค่ะ",
            "rom": "bâan khǐao khâ",
            "tail": "",
            "alone": "เขียว"
          },
          {
            "label": "Дом не зелёный.",
            "th": "บ้านไม่เขียวครับ",
            "rom": "bâan mâi khǐao khráp",
            "tail": "",
            "alone": "เขียว"
          },
          {
            "label": "Мужчина. Дом зелёный?",
            "th": "บ้านเขียวไหมครับ",
            "rom": "bâan khǐao mǎi khráp",
            "tail": "",
            "alone": "เขียว"
          },
          {
            "label": "Женщина. Дом зелёный?",
            "th": "บ้านเขียวไหมคะ",
            "rom": "bâan khǐao mǎi khá",
            "tail": "",
            "alone": "เขียว"
          }
        ]
      },
      {
        "n": 16,
        "th": "เหลือง",
        "rom": "lʉ̌ʉang",
        "ru": "лыанг",
        "gloss": "Жёлтый. Swadesh: yellow. Как и зелёный, это дополнение к трём цветам Диксона. Тон восходящий: Викисловарь lʉ̌ʉang, IPA /lɯa̯ŋ˩˩˦/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Дом жёлтый.",
            "th": "บ้านเหลืองครับ",
            "rom": "bâan lʉ̌ʉang khráp",
            "tail": "",
            "alone": "เหลือง"
          },
          {
            "label": "Женщина говорит. Дом жёлтый.",
            "th": "บ้านเหลืองค่ะ",
            "rom": "bâan lʉ̌ʉang khâ",
            "tail": "",
            "alone": "เหลือง"
          },
          {
            "label": "Дом не жёлтый.",
            "th": "บ้านไม่เหลืองครับ",
            "rom": "bâan mâi lʉ̌ʉang khráp",
            "tail": "",
            "alone": "เหลือง"
          },
          {
            "label": "Мужчина. Дом жёлтый?",
            "th": "บ้านเหลืองไหมครับ",
            "rom": "bâan lʉ̌ʉang mǎi khráp",
            "tail": "",
            "alone": "เหลือง"
          },
          {
            "label": "Женщина. Дом жёлтый?",
            "th": "บ้านเหลืองไหมคะ",
            "rom": "bâan lʉ̌ʉang mǎi khá",
            "tail": "",
            "alone": "เหลือง"
          }
        ]
      },
      {
        "n": 17,
        "th": "ร้อน",
        "rom": "rɔ́ɔn",
        "ru": "рон",
        "gloss": "Жарко. Swadesh: hot. Dixon: физическое свойство.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Сегодня жарко.",
            "th": "วันนี้ร้อนครับ",
            "rom": "wan-níi rɔ́ɔn khráp",
            "tail": "",
            "alone": "ร้อน"
          },
          {
            "label": "Женщина говорит. Сегодня жарко.",
            "th": "วันนี้ร้อนค่ะ",
            "rom": "wan-níi rɔ́ɔn khâ",
            "tail": "",
            "alone": "ร้อน"
          },
          {
            "label": "Сегодня не жарко.",
            "th": "วันนี้ไม่ร้อนครับ",
            "rom": "wan-níi mâi rɔ́ɔn khráp",
            "tail": "",
            "alone": "ร้อน"
          },
          {
            "label": "Мужчина. Сегодня жарко?",
            "th": "วันนี้ร้อนไหมครับ",
            "rom": "wan-níi rɔ́ɔn mǎi khráp",
            "tail": "",
            "alone": "ร้อน"
          },
          {
            "label": "Женщина. Сегодня жарко?",
            "th": "วันนี้ร้อนไหมคะ",
            "rom": "wan-níi rɔ́ɔn mǎi khá",
            "tail": "",
            "alone": "ร้อน"
          },
          {
            "label": "Вчера было жарко.",
            "th": "เมื่อวานร้อนครับ",
            "rom": "mʉ̂ʉa-waan rɔ́ɔn khráp",
            "tail": "",
            "alone": "ร้อน"
          },
          {
            "label": "Сегодня жарче, чем вчера.",
            "th": "วันนี้ร้อนกว่าเมื่อวานครับ",
            "rom": "wan-níi rɔ́ɔn gwàa mʉ̂ʉa-waan khráp",
            "tail": "",
            "alone": "ร้อน"
          }
        ]
      },
      {
        "n": 18,
        "th": "หนาว",
        "rom": "nǎao",
        "ru": "наао",
        "gloss": "Холодно, о погоде и о человеке на холоде. Swadesh: cold. Пара к เย็น.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Сегодня холодно.",
            "th": "วันนี้หนาวครับ",
            "rom": "wan-níi nǎao khráp",
            "tail": "",
            "alone": "หนาว"
          },
          {
            "label": "Женщина говорит. Сегодня холодно.",
            "th": "วันนี้หนาวค่ะ",
            "rom": "wan-níi nǎao khâ",
            "tail": "",
            "alone": "หนาว"
          },
          {
            "label": "Сегодня не холодно.",
            "th": "วันนี้ไม่หนาวครับ",
            "rom": "wan-níi mâi nǎao khráp",
            "tail": "",
            "alone": "หนาว"
          },
          {
            "label": "Мужчина. Сегодня холодно?",
            "th": "วันนี้หนาวไหมครับ",
            "rom": "wan-níi nǎao mǎi khráp",
            "tail": "",
            "alone": "หนาว"
          },
          {
            "label": "Женщина. Сегодня холодно?",
            "th": "วันนี้หนาวไหมคะ",
            "rom": "wan-níi nǎao mǎi khá",
            "tail": "",
            "alone": "หนาว"
          },
          {
            "label": "Вчера было холодно.",
            "th": "เมื่อวานหนาวครับ",
            "rom": "mʉ̂ʉa-waan nǎao khráp",
            "tail": "",
            "alone": "หนาว"
          },
          {
            "label": "Сегодня холоднее, чем вчера.",
            "th": "วันนี้หนาวกว่าเมื่อวานครับ",
            "rom": "wan-níi nǎao gwàa mʉ̂ʉa-waan khráp",
            "tail": "",
            "alone": "หนาว"
          }
        ]
      },
      {
        "n": 19,
        "th": "เย็น",
        "rom": "yen",
        "ru": "ен",
        "gloss": "Прохладный, о воде и воздухе. В курсе это же слово значит вечер около 16–18. Вторая половина Swadesh cold.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Вода прохладная.",
            "th": "น้ำเย็นครับ",
            "rom": "náam yen khráp",
            "tail": "",
            "alone": "เย็น"
          },
          {
            "label": "Женщина говорит. Вода прохладная.",
            "th": "น้ำเย็นค่ะ",
            "rom": "náam yen khâ",
            "tail": "",
            "alone": "เย็น"
          },
          {
            "label": "Вода не прохладная.",
            "th": "น้ำไม่เย็นครับ",
            "rom": "náam mâi yen khráp",
            "tail": "",
            "alone": "เย็น"
          },
          {
            "label": "Мужчина. Вода прохладная?",
            "th": "น้ำเย็นไหมครับ",
            "rom": "náam yen mǎi khráp",
            "tail": "",
            "alone": "เย็น"
          },
          {
            "label": "Женщина. Вода прохладная?",
            "th": "น้ำเย็นไหมคะ",
            "rom": "náam yen mǎi khá",
            "tail": "",
            "alone": "เย็น"
          },
          {
            "label": "Эта вода прохладнее той.",
            "th": "น้ำนี้เย็นกว่าน้ำนั้นครับ",
            "rom": "náam níi yen gwàa náam nán khráp",
            "tail": "",
            "alone": "เย็น"
          }
        ]
      },
      {
        "n": 20,
        "th": "หนัก",
        "rom": "nàk",
        "ru": "нак",
        "gloss": "Тяжёлый. Leipzig–Jakarta: heavy. Тон низкий: Викисловарь nàk, IPA /nak̚˨˩/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Книга тяжёлая.",
            "th": "หนังสือหนักครับ",
            "rom": "nǎng-sʉ̌ʉ nàk khráp",
            "tail": "",
            "alone": "หนัก"
          },
          {
            "label": "Женщина говорит. Книга тяжёлая.",
            "th": "หนังสือหนักค่ะ",
            "rom": "nǎng-sʉ̌ʉ nàk khâ",
            "tail": "",
            "alone": "หนัก"
          },
          {
            "label": "Книга не тяжёлая.",
            "th": "หนังสือไม่หนักครับ",
            "rom": "nǎng-sʉ̌ʉ mâi nàk khráp",
            "tail": "",
            "alone": "หนัก"
          },
          {
            "label": "Мужчина. Книга тяжёлая?",
            "th": "หนังสือหนักไหมครับ",
            "rom": "nǎng-sʉ̌ʉ nàk mǎi khráp",
            "tail": "",
            "alone": "หนัก"
          },
          {
            "label": "Женщина. Книга тяжёлая?",
            "th": "หนังสือหนักไหมคะ",
            "rom": "nǎng-sʉ̌ʉ nàk mǎi khá",
            "tail": "",
            "alone": "หนัก"
          },
          {
            "label": "Эта книга тяжелее той.",
            "th": "หนังสือนี้หนักกว่าหนังสือนั้นครับ",
            "rom": "nǎng-sʉ̌ʉ níi nàk gwàa nǎng-sʉ̌ʉ nán khráp",
            "tail": "",
            "alone": "หนัก"
          }
        ]
      },
      {
        "n": 21,
        "th": "แห้ง",
        "rom": "hɛ̂ɛng",
        "ru": "хэенг",
        "gloss": "Сухой. Swadesh: dry. Тон падающий: Викисловарь hɛ̂ɛng, IPA /hɛːŋ˥˩/.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Руки сухие.",
            "th": "มือแห้งครับ",
            "rom": "mʉʉ hɛ̂ɛng khráp",
            "tail": "",
            "alone": "แห้ง"
          },
          {
            "label": "Женщина говорит. Руки сухие.",
            "th": "มือแห้งค่ะ",
            "rom": "mʉʉ hɛ̂ɛng khâ",
            "tail": "",
            "alone": "แห้ง"
          },
          {
            "label": "Руки не сухие.",
            "th": "มือไม่แห้งครับ",
            "rom": "mʉʉ mâi hɛ̂ɛng khráp",
            "tail": "",
            "alone": "แห้ง"
          },
          {
            "label": "Мужчина. Руки сухие?",
            "th": "มือแห้งไหมครับ",
            "rom": "mʉʉ hɛ̂ɛng mǎi khráp",
            "tail": "",
            "alone": "แห้ง"
          },
          {
            "label": "Женщина. Руки сухие?",
            "th": "มือแห้งไหมคะ",
            "rom": "mʉʉ hɛ̂ɛng mǎi khá",
            "tail": "",
            "alone": "แห้ง"
          },
          {
            "label": "Эти руки суше тех.",
            "th": "มือนี้แห้งกว่ามือนั้นครับ",
            "rom": "mʉʉ níi hɛ̂ɛng gwàa mʉʉ nán khráp",
            "tail": "",
            "alone": "แห้ง"
          }
        ]
      },
      {
        "n": 22,
        "th": "แข็ง",
        "rom": "khɛ̌ng",
        "ru": "кхэнг",
        "gloss": "Твёрдый. Leipzig–Jakarta: hard. Викисловарь kɛ̌ng, восходящий, IPA /xɛŋ˩˩˦/. Беру khɛ̌ng.",
        "notes": [
          "น้ำแข็ง в быту значит «лёд». Отрицание น้ำไม่แข็ง разбирает то же сочетание: вода, и она не твёрдая."
        ],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Вода твёрдая, лёд.",
            "th": "น้ำแข็งครับ",
            "rom": "náam khɛ̌ng khráp",
            "tail": "",
            "alone": "แข็ง"
          },
          {
            "label": "Женщина говорит. Вода твёрдая, лёд.",
            "th": "น้ำแข็งค่ะ",
            "rom": "náam khɛ̌ng khâ",
            "tail": "",
            "alone": "แข็ง"
          },
          {
            "label": "Вода не твёрдая.",
            "th": "น้ำไม่แข็งครับ",
            "rom": "náam mâi khɛ̌ng khráp",
            "tail": "",
            "alone": "แข็ง"
          },
          {
            "label": "Мужчина. Это лёд?",
            "th": "น้ำแข็งไหมครับ",
            "rom": "náam khɛ̌ng mǎi khráp",
            "tail": "",
            "alone": "แข็ง"
          },
          {
            "label": "Женщина. Это лёд?",
            "th": "น้ำแข็งไหมคะ",
            "rom": "náam khɛ̌ng mǎi khá",
            "tail": "",
            "alone": "แข็ง"
          }
        ]
      },
      {
        "n": 23,
        "th": "หวาน",
        "rom": "wǎan",
        "ru": "ваан",
        "gloss": "Сладкий. Leipzig–Jakarta: sweet. Тон восходящий: Викисловарь wǎan, IPA /waːn˩˩˦/.",
        "notes": [
          "น้ำหวาน также значит «сладкий напиток». Вопрос น้ำหวานไหม спрашивает и «сладкая ли вода», и «это сладкий напиток?»."
        ],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Вода сладкая.",
            "th": "น้ำหวานครับ",
            "rom": "náam wǎan khráp",
            "tail": "",
            "alone": "หวาน"
          },
          {
            "label": "Женщина говорит. Вода сладкая.",
            "th": "น้ำหวานค่ะ",
            "rom": "náam wǎan khâ",
            "tail": "",
            "alone": "หวาน"
          },
          {
            "label": "Вода не сладкая.",
            "th": "น้ำไม่หวานครับ",
            "rom": "náam mâi wǎan khráp",
            "tail": "",
            "alone": "หวาน"
          },
          {
            "label": "Мужчина. Вода сладкая?",
            "th": "น้ำหวานไหมครับ",
            "rom": "náam wǎan mǎi khráp",
            "tail": "",
            "alone": "หวาน"
          },
          {
            "label": "Женщина. Вода сладкая?",
            "th": "น้ำหวานไหมคะ",
            "rom": "náam wǎan mǎi khá",
            "tail": "",
            "alone": "หวาน"
          },
          {
            "label": "Эта вода слаще той.",
            "th": "น้ำนี้หวานกว่าน้ำนั้นครับ",
            "rom": "náam níi wǎan gwàa náam nán khráp",
            "tail": "",
            "alone": "หวาน"
          }
        ]
      },
      {
        "n": 24,
        "th": "ขม",
        "rom": "khǒm",
        "ru": "кхом",
        "gloss": "Горький. Leipzig–Jakarta: bitter. Тон восходящий: Викисловарь kǒm, IPA /kʰom˩˩˦/. Беру khǒm. В частотном файле ранг 5 338.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Вода горькая.",
            "th": "น้ำขมครับ",
            "rom": "náam khǒm khráp",
            "tail": "",
            "alone": "ขม"
          },
          {
            "label": "Женщина говорит. Вода горькая.",
            "th": "น้ำขมค่ะ",
            "rom": "náam khǒm khâ",
            "tail": "",
            "alone": "ขม"
          },
          {
            "label": "Вода не горькая.",
            "th": "น้ำไม่ขมครับ",
            "rom": "náam mâi khǒm khráp",
            "tail": "",
            "alone": "ขม"
          },
          {
            "label": "Мужчина. Вода горькая?",
            "th": "น้ำขมไหมครับ",
            "rom": "náam khǒm mǎi khráp",
            "tail": "",
            "alone": "ขม"
          },
          {
            "label": "Женщина. Вода горькая?",
            "th": "น้ำขมไหมคะ",
            "rom": "náam khǒm mǎi khá",
            "tail": "",
            "alone": "ขม"
          },
          {
            "label": "Эта вода горше той.",
            "th": "น้ำนี้ขมกว่าน้ำนั้นครับ",
            "rom": "náam níi khǒm gwàa náam nán khráp",
            "tail": "",
            "alone": "ขม"
          }
        ]
      },
      {
        "n": 25,
        "th": "ไกล",
        "rom": "glai",
        "ru": "глай",
        "gloss": "Далёкий. Leipzig–Jakarta: far. NSM: FAR.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Дом далеко.",
            "th": "บ้านไกลครับ",
            "rom": "bâan glai khráp",
            "tail": "",
            "alone": "ไกล"
          },
          {
            "label": "Женщина говорит. Дом далеко.",
            "th": "บ้านไกลค่ะ",
            "rom": "bâan glai khâ",
            "tail": "",
            "alone": "ไกล"
          },
          {
            "label": "Дом не далеко.",
            "th": "บ้านไม่ไกลครับ",
            "rom": "bâan mâi glai khráp",
            "tail": "",
            "alone": "ไกล"
          },
          {
            "label": "Мужчина. Дом далеко?",
            "th": "บ้านไกลไหมครับ",
            "rom": "bâan glai mǎi khráp",
            "tail": "",
            "alone": "ไกล"
          },
          {
            "label": "Женщина. Дом далеко?",
            "th": "บ้านไกลไหมคะ",
            "rom": "bâan glai mǎi khá",
            "tail": "",
            "alone": "ไกล"
          },
          {
            "label": "Этот дом дальше того.",
            "th": "บ้านนี้ไกลกว่าบ้านนั้นครับ",
            "rom": "bâan níi glai gwàa bâan nán khráp",
            "tail": "",
            "alone": "ไกล"
          }
        ]
      },
      {
        "n": 26,
        "th": "ใกล้",
        "rom": "glâi",
        "ru": "глай",
        "gloss": "Близкий. NSM: NEAR. Пара к ไกล, слово уже в курсе.",
        "notes": [],
        "extras": [],
        "examples": [
          {
            "label": "Мужчина говорит. Дом близко.",
            "th": "บ้านใกล้ครับ",
            "rom": "bâan glâi khráp",
            "tail": "",
            "alone": "ใกล้"
          },
          {
            "label": "Женщина говорит. Дом близко.",
            "th": "บ้านใกล้ค่ะ",
            "rom": "bâan glâi khâ",
            "tail": "",
            "alone": "ใกล้"
          },
          {
            "label": "Дом не близко.",
            "th": "บ้านไม่ใกล้ครับ",
            "rom": "bâan mâi glâi khráp",
            "tail": "",
            "alone": "ใกล้"
          },
          {
            "label": "Мужчина. Дом близко?",
            "th": "บ้านใกล้ไหมครับ",
            "rom": "bâan glâi mǎi khráp",
            "tail": "",
            "alone": "ใกล้"
          },
          {
            "label": "Женщина. Дом близко?",
            "th": "บ้านใกล้ไหมคะ",
            "rom": "bâan glâi mǎi khá",
            "tail": "",
            "alone": "ใกล้"
          },
          {
            "label": "Этот дом ближе того.",
            "th": "บ้านนี้ใกล้กว่าบ้านนั้นครับ",
            "rom": "bâan níi glâi gwàa bâan nán khráp",
            "tail": "",
            "alone": "ใกล้"
          }
        ]
      }
    ]
  }
]
