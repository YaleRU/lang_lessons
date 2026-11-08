export type Letter = {
  th: string
  rom: string
  ru: string
  how: string
  alone: string
  word: string
  wordRom: string
}

export const CONSONANTS: Letter[] = [
  { th: "ก", rom: "gɔɔ", ru: "го", how: "К без выдоха.", alone: "กอ", word: "กิน", wordRom: "gin" },
  { th: "ข", rom: "khɔ̌ɔ", ru: "кхо", how: "К с выдохом. Высокий класс: слог буквы восходящий.", alone: "ขอ", word: "ข้าว", wordRom: "khâao" },
  { th: "ฃ", rom: "khɔ̌ɔ", ru: "кхо", how: "Тот же звук, что у ข. Буква устарела.", alone: "ฃอ", word: "ขวด", wordRom: "khùat" },
  { th: "ค", rom: "khɔɔ", ru: "кхо", how: "К с выдохом.", alone: "คอ", word: "คุณ", wordRom: "khun" },
  { th: "ฅ", rom: "khɔɔ", ru: "кхо", how: "Тот же звук, что у ค. Буква устарела.", alone: "ฅอ", word: "คน", wordRom: "khon" },
  { th: "ฆ", rom: "khɔɔ", ru: "кхо", how: "К с выдохом.", alone: "ฆอ", word: "ระฆัง", wordRom: "rá-khang" },
  { th: "ง", rom: "ngɔɔ", ru: "нго", how: "Нг, бывает и в начале слова.", alone: "งอ", word: "งาน", wordRom: "ngaan" },
  { th: "จ", rom: "jɔɔ", ru: "джо", how: "Ч без выдоха.", alone: "จอ", word: "จะ", wordRom: "jà" },
  { th: "ฉ", rom: "chɔ̌ɔ", ru: "чхо", how: "Ч с выдохом. Высокий класс: слог буквы восходящий.", alone: "ฉอ", word: "ฉัน", wordRom: "chǎn" },
  { th: "ช", rom: "chɔɔ", ru: "чхо", how: "Ч с выдохом.", alone: "ชอ", word: "ชอบ", wordRom: "chɔ̂ɔp" },
  { th: "ซ", rom: "sɔɔ", ru: "со", how: "С.", alone: "ซอ", word: "เลี้ยวซ้าย", wordRom: "líao sáai" },
  { th: "ฌ", rom: "chɔɔ", ru: "чхо", how: "Ч с выдохом.", alone: "ฌอ", word: "เฌอ", wordRom: "chəə" },
  { th: "ญ", rom: "yɔɔ", ru: "йо", how: "Й. На конце слога читается как н.", alone: "ญอ", word: "หญิง", wordRom: "yǐng" },
  { th: "ฎ", rom: "dɔɔ", ru: "до", how: "Д. Тот же звук, что у ด.", alone: "ฎอ", word: "ชฎา", wordRom: "chá-daa" },
  { th: "ฏ", rom: "dtɔɔ", ru: "то", how: "Т без выдоха. Тот же звук, что у ต.", alone: "ฏอ", word: "ปฏัก", wordRom: "bpà-dtàk" },
  { th: "ฐ", rom: "thɔ̌ɔ", ru: "тхо", how: "Т с выдохом. Высокий класс: слог буквы восходящий.", alone: "ฐอ", word: "ฐาน", wordRom: "thǎan" },
  { th: "ฑ", rom: "thɔɔ", ru: "тхо", how: "Т с выдохом.", alone: "ฑอ", word: "มณโฑ", wordRom: "mon-thoo" },
  { th: "ฒ", rom: "thɔɔ", ru: "тхо", how: "Т с выдохом.", alone: "ฒอ", word: "ผู้เฒ่า", wordRom: "phûu-thâo" },
  { th: "ณ", rom: "nɔɔ", ru: "но", how: "Н. Тот же звук, что у น.", alone: "ณอ", word: "เณร", wordRom: "nəən" },
  { th: "ด", rom: "dɔɔ", ru: "до", how: "Д.", alone: "ดอ", word: "ด้วย", wordRom: "dûai" },
  { th: "ต", rom: "dtɔɔ", ru: "то", how: "Т без выдоха.", alone: "ตอ", word: "ตอนนี้", wordRom: "dtɔɔn-níi" },
  { th: "ถ", rom: "thɔ̌ɔ", ru: "тхо", how: "Т с выдохом. Высокий класс: слог буквы восходящий.", alone: "ถอ", word: "ถูก", wordRom: "thùuk" },
  { th: "ท", rom: "thɔɔ", ru: "тхо", how: "Т с выдохом.", alone: "ทอ", word: "ที่", wordRom: "thîi" },
  { th: "ธ", rom: "thɔɔ", ru: "тхо", how: "Т с выдохом. Тот же звук, что у ท.", alone: "ธอ", word: "ธง", wordRom: "thong" },
  { th: "น", rom: "nɔɔ", ru: "но", how: "Н.", alone: "นอ", word: "นี่", wordRom: "nîi" },
  { th: "บ", rom: "bɔɔ", ru: "бо", how: "Б.", alone: "บอ", word: "บ้าน", wordRom: "bâan" },
  { th: "ป", rom: "bpɔɔ", ru: "по", how: "П без выдоха. Один звук.", alone: "ปอ", word: "ปิด", wordRom: "bpìt" },
  { th: "ผ", rom: "phɔ̌ɔ", ru: "пхо", how: "П с выдохом. Высокий класс: слог буквы восходящий.", alone: "ผอ", word: "ผม", wordRom: "phǒm" },
  { th: "ฝ", rom: "fɔ̌ɔ", ru: "фо", how: "Ф. Высокий класс: слог буквы восходящий.", alone: "ฝอ", word: "ฝน", wordRom: "fǒn" },
  { th: "พ", rom: "phɔɔ", ru: "пхо", how: "П с выдохом.", alone: "พอ", word: "พรุ่งนี้", wordRom: "phrûng-níi" },
  { th: "ฟ", rom: "fɔɔ", ru: "фо", how: "Ф.", alone: "ฟอ", word: "ฟัน", wordRom: "fan" },
  { th: "ภ", rom: "phɔɔ", ru: "пхо", how: "П с выдохом. Тот же звук, что у พ.", alone: "ภอ", word: "สำเภา", wordRom: "sǎm-phao" },
  { th: "ม", rom: "mɔɔ", ru: "мо", how: "М.", alone: "มอ", word: "มา", wordRom: "maa" },
  { th: "ย", rom: "yɔɔ", ru: "йо", how: "Й.", alone: "ยอ", word: "ยินดี", wordRom: "yin-dii" },
  { th: "ร", rom: "rɔɔ", ru: "ро", how: "Р. На конце слога часто почти не слышен.", alone: "รอ", word: "รัก", wordRom: "rák" },
  { th: "ล", rom: "lɔɔ", ru: "ло", how: "Л.", alone: "ลอ", word: "ลง", wordRom: "long" },
  { th: "ว", rom: "wɔɔ", ru: "во", how: "В.", alone: "วอ", word: "วันนี้", wordRom: "wan-níi" },
  { th: "ศ", rom: "sɔ̌ɔ", ru: "со", how: "С. Высокий класс: слог буквы восходящий.", alone: "ศอ", word: "ศุกร์", wordRom: "sùk" },
  { th: "ษ", rom: "sɔ̌ɔ", ru: "со", how: "С. Тот же звук, что у ส.", alone: "ษอ", word: "ฤๅษี", wordRom: "rʉʉ-sǐi" },
  { th: "ส", rom: "sɔ̌ɔ", ru: "со", how: "С. Высокий класс: слог буквы восходящий.", alone: "สอ", word: "สวัสดี", wordRom: "sà-wàt-dii" },
  { th: "ห", rom: "hɔ̌ɔ", ru: "хо", how: "Х. Высокий класс: слог буквы восходящий.", alone: "หอ", word: "หิว", wordRom: "hǐu" },
  { th: "ฬ", rom: "lɔɔ", ru: "ло", how: "Л. Тот же звук, что у ล.", alone: "ฬอ", word: "จุฬา", wordRom: "jù-laa" },
  { th: "อ", rom: "ɔɔ", ru: "о", how: "Гортанная смычка, если слог начинается с гласной.", alone: "ออ", word: "อะไร", wordRom: "à-rai" },
  { th: "ฮ", rom: "hɔɔ", ru: "хо", how: "Х. Тот же звук, что у ห.", alone: "ฮอ", word: "นกฮูก", wordRom: "nók-hûuk" },
]

export const VOWELS: Letter[] = [
  { th: "อะ", rom: "à", ru: "краткое а", how: "Короткий слог без конечной согласной. Средний класс даёт низкий тон.", alone: "อะ", word: "จะ", wordRom: "jà" },
  { th: "อา", rom: "aa", ru: "долгое а", how: "Долгий гласный. Живой слог без знака: средний тон.", alone: "อา", word: "มา", wordRom: "maa" },
  { th: "อิ", rom: "ì", ru: "краткое и", how: "Короткое и. В слове тон берётся из слога, не из буквы.", alone: "อิ", word: "กิน", wordRom: "gin" },
  { th: "อี", rom: "ii", ru: "долгое и", how: "Долгое и.", alone: "อี", word: "มี", wordRom: "mii" },
  { th: "อุ", rom: "ù", ru: "краткое у", how: "Короткое у.", alone: "อุ", word: "คุณ", wordRom: "khun" },
  { th: "อู", rom: "ùu", ru: "долгое у", how: "Долгое у. В อยู่ тон низкий из-за знака, не из-за буквы.", alone: "อู", word: "อยู่", wordRom: "yùu" },
  { th: "เอ", rom: "ee", ru: "э", how: "Закрытое э.", alone: "เอ", word: "เล่ม", wordRom: "lêm" },
  { th: "แอ", rom: "ɛɛ", ru: "открытое э", how: "Открытое э, как в записи ɛ.", alone: "แอ", word: "แปด", wordRom: "bpɛ̀ɛt" },
  { th: "โอ", rom: "oo", ru: "о", how: "Закрытое о.", alone: "โอ", word: "โมง", wordRom: "moong" },
  { th: "ออ", rom: "ɔɔ", ru: "открытое о", how: "Открытое о, как в записи ɔ.", alone: "ออ", word: "ชอบ", wordRom: "chɔ̂ɔp" },
  { th: "เออ", rom: "əə", ru: "ы", how: "В записи ə. В слове เงิน слог короткий.", alone: "เออ", word: "เงิน", wordRom: "ngən" },
  { th: "เอือ", rom: "ʉa", ru: "ыа", how: "Гласный ʉa, как в เมื่อ.", alone: "เอือ", word: "เมื่อวาน", wordRom: "mʉ̂ʉa-waan" },
  { th: "ไอ", rom: "ai", ru: "ай", how: "Гласный ai. Знак тона меняет тон, не сам гласный.", alone: "ไอ", word: "ไม่", wordRom: "mâi" },
]
