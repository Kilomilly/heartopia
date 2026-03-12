// add-dog-breeds.js — populate dogBreeds in all 5 locale JSON files
const fs = require('fs');

const data = {
en: {
  navbar: { guideDog: "Dog Breeds Guide" },
  dogBreeds: {
    metaTitle: "Heartopia Dog Breeds: All 11 Breeds & Traits Guide",
    metaDesc: "All 11 dog breeds in Heartopia — how to unlock Dog Caring, adopt your perfect pup, personality traits explained, all training tricks, and level rewards.",
    heroTitle: "Heartopia Dog Breeds: Complete Guide",
    heroDesc: "Everything you need to know about dogs in Heartopia — unlocking Dog Caring, all 11 adoptable breeds, 11 personality traits, training commands, and every level-up reward. No two dogs are identical: each has a unique breed, fur pattern, eye color, and 2 random traits. Updated February 2026.",
    badge: "Dog Caring Guide",
    quote: "The Golden Retriever is secretly the best breed for gold farmers — high-bond Goldens bring Gold Bags as gifts. Pair with the Seek Treasure trick and let your dog fund your adventures.",
    tocTitle: "In this guide",
    sections: {
      unlock: "How to Unlock",
      adoption: "Adoption System",
      breeds: "All 11 Breeds",
      traits: "Personality Traits",
      appearance: "Fur & Eye Variations",
      care: "Daily Care",
      training: "Training & Tricks",
      levels: "Level Rewards",
      tips: "Pro Tips",
      faq: "FAQ"
    },
    stats: {
      s1: "11 Breeds",
      s2: "11 Personality Traits",
      s3: "Up to 3 Dogs",
      s4: "D.G. Level 12 Required",
      s5: "500g Adoption Fee"
    },
    unlock: {
      title: "How to Unlock the Dog Caring Hobby",
      intro: "Dogs require meeting three prerequisites before Mrs. Joan will offer them for adoption. Plan ahead — this takes several days of consistent play.",
      step1: "Reach D.G. Member Level 12 by completing Resident Requests daily to earn contribution medals.",
      step2: "Unlock and complete the Cat Caring tutorial with Mrs. Joan first — Cat Caring is a required prerequisite for Dog Caring.",
      step3: "Visit Mrs. Joan at the Pet Adoption Center and exchange one Hobby Expansion Ticket to activate Dog Caring.",
      timeNote: "⏱ Expect 3–5 days of regular play to reach D.G. Level 12. Cat Care unlocks earlier, so you won't be waiting long once you hit Level 12."
    },
    adoption: {
      title: "How the Dog Adoption System Works",
      rotationTitle: "Daily Rotation",
      rotationDesc: "Mrs. Joan shows 3 random dogs (and 3 cats) every day. The pool resets at the daily server reset. There are no rerolls — if today's dogs aren't what you want, come back tomorrow.",
      howToTitle: "How to Adopt",
      step1: "Approach a dog at the adoption center and select Adopt.",
      step2: "Pay the 500g physical exam fee.",
      step3: "Name your dog — you can rename them later anytime.",
      step4: "Your dog goes directly to your home plot.",
      slotsTitle: "How Many Dogs Can You Own?",
      slotRows: [
        { milestone: "Dog Caring Level 1", dogs: "1 dog" },
        { milestone: "Dog Caring Level 4", dogs: "2 dogs" },
        { milestone: "Dog Caring Level 8", dogs: "3 dogs" }
      ],
      warning: "⚠️ Dogs cannot be returned or rehomed. Boarding costs 20,000g but doesn't remove them permanently. Choose carefully before adopting.",
      tipTitle: "Tips for Getting the Breed You Want",
      tip1: "Visit the adoption center every single day — the rotation is fully random.",
      tip2: "Each dog's breed, traits, fur, and eye color show on their ID card before you commit.",
      tip3: "Adopt your wanted breed immediately — it won't be available tomorrow.",
      tip4: "Rare breeds reportedly appear more often during seasonal events."
    },
    breeds: {
      title: "All 11 Dog Breeds in Heartopia",
      note: "Breed does NOT affect stats or abilities — it only determines body shape and base appearance. Every breed can learn all tricks and reach max bond level.",
      thBreed: "Breed", thSize: "Size", thDesc: "Description", thNote: "Notable For",
      rows: [
        { breed: "Corgi", size: "Small", desc: "Short legs, big personality. Famous for the iconic sploot pose and round bottom.", note: "Most-requested breed" },
        { breed: "Poodle", size: "Small–Med", desc: "Elegant curly coat in standard white. Graceful and intelligent-looking posture.", note: "Unique silhouette" },
        { breed: "Beagle", size: "Medium", desc: "Floppy ears and expressive face. Classic friendly hound appearance.", note: "Great for beginners" },
        { breed: "Shiba Inu", size: "Small–Med", desc: "Fox-like face and independent stance. The iconic Doge look.", note: "Most popular small breed" },
        { breed: "Rural Dog", size: "Medium", desc: "A loyal mixed-breed type, also called the Gardening Dog. Hardy and down-to-earth.", note: "Rare in daily rotation" },
        { breed: "Spotted Dog", size: "Med–Large", desc: "Dalmatian-style black-and-white spots. High-energy, distinct look.", note: "Distinctive pattern" },
        { breed: "Golden Retriever", size: "Large", desc: "Long golden coat, always happy expression. The friendliest large breed.", note: "Brings Gold Bags as gifts" },
        { breed: "Labrador Retriever", size: "Large", desc: "Short coat, sturdy build. Athletic and loyal appearance.", note: "Great for active players" },
        { breed: "Shepherd Dog", size: "Large", desc: "Resembles a German Shepherd. Intelligent and alert posture.", note: "Strong protective look" },
        { breed: "Rottweiler", size: "Large", desc: "Muscular build with distinctive black-and-tan markings.", note: "Bold visual presence" },
        { breed: "Sled Dog", size: "Large", desc: "Wolf-like Husky appearance. Often spawns with the Energetic trait.", note: "Frequent in winter events" }
      ],
      bestTitle: "Which Breed Is Best?",
      bestDesc: "For gold farming, prioritize the Golden Retriever — bonded Goldens bring Gold Bags as daily gifts. For easy daily care, look for any breed with Sluggish + Indifferent traits. For aesthetics, Corgi and Shiba Inu top community polls. Remember: breed never affects gameplay mechanics."
    },
    traits: {
      title: "All 11 Personality Traits",
      intro: "Every dog receives exactly 2 random traits when it spawns. You can see both on the dog's ID card before adopting.",
      note: "Breed does NOT determine traits. A Corgi and a Rottweiler can both roll the same trait combination.",
      thTrait: "Trait", thBehavior: "Behavior", thCare: "Care Level",
      rows: [
        { trait: "Chatterbox", behavior: "Barks frequently; can alert you to nearby items.", care: "Medium" },
        { trait: "Clingy", behavior: "Follows you at home; higher chance of damaging furniture when bored.", care: "High" },
        { trait: "Energetic", behavior: "Wants lots of play and walks; hunger drops faster than average.", care: "High" },
        { trait: "Indifferent", behavior: "Neutral behavior across the board; easy to manage.", care: "Low" },
        { trait: "Lone Wolf", behavior: "Prefers to be alone; needs less social interaction.", care: "Low" },
        { trait: "Naughty", behavior: "More likely to misbehave; damages furniture if left alone too long.", care: "Demanding" },
        { trait: "Quiet", behavior: "Rarely makes noise; calm presence at home.", care: "Low" },
        { trait: "Sensitive", behavior: "Picky eater; won't accept all food types — requires trial and error.", care: "Medium" },
        { trait: "Sluggish", behavior: "Hunger depletes slower; low activity — needs less feeding and walking.", care: "Easiest" },
        { trait: "Sociable", behavior: "Needs frequent interaction; mood drops faster without attention.", care: "High" },
        { trait: "Unsociable", behavior: "Wants minimal interaction; easy to care for.", care: "Low" }
      ],
      tipsTitle: "Trait Tips",
      tip1: "Easiest combo: Sluggish + Indifferent or Sluggish + Lone Wolf — minimal daily effort.",
      tip2: "Hardest combo: Naughty + Clingy — expect furniture damage and constant attention demands.",
      tip3: "Traits don't affect the rate dogs bring gifts — any trait combo can reward you equally."
    },
    appearance: {
      title: "Fur Colors, Patterns & Eye Variations",
      intro: "Each dog's look comes from four independent layers, creating hundreds of unique combinations.",
      colorsTitle: "Fur Colors",
      colors: "Black · White · Cream · Brown · Golden · Gray · Tri-color",
      patternsTitle: "Fur Patterns",
      patterns: "Solid · Spotted · Brindle · Merle · Parti-color · Tuxedo · Sable",
      eyeColorsTitle: "Eye Colors",
      eyeColors: "Brown (most common) · Amber/Gold · Blue · Green · Heterochromia (two different colors — rarest)",
      eyeStylesTitle: "Eye Styles",
      eyeStyles: "Round · Almond · Button",
      totalNote: "The Heartopia community estimates 200–500+ unique dog appearances are possible. Heterochromia is the rarest eye variant — worth keeping even if the breed isn't your first choice."
    },
    care: {
      title: "Daily Dog Care — How to Build Your Bond",
      intro: "Bond level determines how often your dog brings gifts and how quickly Dog Caring XP accumulates. Use the Pet app on your in-game watch to monitor hunger, energy, and happiness for all dogs.",
      feed: { icon: "🍖", title: "Feed", desc: "Tap the food bowl icon to feed dog food or snacks from your inventory. Dogs with Sensitive trait may refuse some foods." },
      play: { icon: "🎾", title: "Play", desc: "Use toys to play. Builds happiness faster than feeding alone. More play options unlock at higher hobby levels." },
      bathe: { icon: "🛁", title: "Bathe", desc: "When your dog gets dirty, select Pet Wash. Follow the 3-stage process: wash, rinse, dry. A clean buff appears on the profile." },
      train: { icon: "🎓", title: "Train", desc: "Teach commands for the most efficient bond and XP gains. Earns Doggie Time Collection stars unlocking exclusive items." },
      goOut: { icon: "🚶", title: "Go Out", desc: "Take your dog on a town walk. If you move too far ahead they return home automatically. Great for social interactions." }
    },
    training: {
      title: "All Dog Training Commands & Tricks",
      intro: "Training is the best daily investment — builds bond, earns XP, and unlocks exclusive Doggie Time Collection rewards.",
      thCommand: "Command", thEffect: "Effect", thPriority: "Priority",
      rows: [
        { command: "Seek Treasure", effect: "Dog searches for hidden items while you play — passive item discovery.", priority: "Train First 🔴" },
        { command: "Give Paw", effect: "Dog offers its paw on command. Increases bond meter.", priority: "Medium 🟡" },
        { command: "Shake Head", effect: "Dog shakes head on command. Earns collection star.", priority: "Medium 🟡" },
        { command: "Fetch", effect: "Dog retrieves thrown items.", priority: "Medium 🟡" }
      ],
      howTitle: "How Training Works",
      howDesc: "Select Train from your dog's interaction menu. Watch the move your dog performs, then applaud (correct) or reprimand (incorrect). Each successful session awards Doggie Time Collection stars which unlock exclusive costumes, currency, and items.",
      tip: "🔴 Prioritize: Teach Seek Treasure first. It's the only command that provides an active gameplay benefit — your dog finds hidden items passively as you explore."
    },
    levels: {
      title: "Dog Caring Hobby — All Level Rewards",
      intro: "Earn XP by feeding, playing, bathing, and training your dog. Spend Hobby Upgrade Tickets to level up.",
      thLevel: "Level", thReward: "Reward",
      rows: [
        { level: "1", reward: "Dog Moment 1 (↑ High-Star Moment chance) · Dog Arrives! 1 — adopt 1st dog" },
        { level: "2", reward: "Handmade Fertilizer Recipe" },
        { level: "3", reward: "Sandbag Pet Toy · Dog Moment 2" },
        { level: "4", reward: "Energy Dog Food unlocked · Dog Arrives! 2 — adopt 2nd dog" },
        { level: "5", reward: "Dog Moment 3 · Auto-Feed 1 — automatic feeder unlocked" },
        { level: "6", reward: "Dog Moment 4" },
        { level: "7", reward: "Dog Moment 5" },
        { level: "8", reward: "Auto-Feed 2 (more feeders) · Dog Arrives! 3 — adopt 3rd dog" },
        { level: "9", reward: "Dog Moment 6 · Come and Play action unlocked" },
        { level: "10", reward: "Dog Moment 7" }
      ],
      note: "Key milestones: Level 4 (2nd dog), Level 5 (Auto-Feed — no more hungry dogs while offline), Level 8 (3rd dog slot)."
    },
    tips: {
      title: "Pro Tips for Dog Owners",
      items: [
        "Adopt the moment your desired breed appears — the daily rotation is random with no rerolls.",
        "Auto-Feed at Level 5 is a game-changer. Unlock it ASAP to remove daily feeding anxiety with multiple dogs.",
        "Teach Seek Treasure first — it's the only trick with a real gameplay benefit beyond bonding.",
        "High bond dogs give more gifts. Daily interaction adds up significantly over time.",
        "Boarding costs 20,000g and doesn't permanently remove the dog. There is no way to release a dog.",
        "Heterochromia (two-colored eyes) dogs are rare — worth keeping regardless of breed or traits.",
        "If you own cats too, dogs and cats will interact with friendly animations — Sociable pets do this most often."
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "How many dog breeds are in Heartopia?",
      a1: "There are 11 confirmed dog breeds: Beagle, Corgi, Golden Retriever, Labrador Retriever, Poodle, Rottweiler, Rural Dog, Shepherd Dog, Shiba Inu, Sled Dog, and Spotted Dog (Dalmatian). With fur patterns, eye colors, and personality combinations, the community estimates 200–500+ unique dog appearances.",
      q2: "Do I need to adopt a cat before getting a dog?",
      a2: "You must complete the Cat Caring tutorial with Mrs. Joan — but you don't necessarily need to actually adopt a cat. Finishing the tutorial is enough to unlock Dog Caring as an available hobby.",
      q3: "Does dog breed affect gameplay stats or abilities?",
      a3: "No. All 11 breeds have identical gameplay stats and can learn every trick equally. A Corgi and a Rottweiler perform identically in every mechanic. Breed differences are purely visual and cosmetic.",
      q4: "How do I get a specific breed I want?",
      a4: "Check the adoption center every day — the rotation is fully random with no rerolls. Your desired breed will eventually appear. Some players report specific breeds appearing more frequently during seasonal events.",
      q5: "Can I have more than one dog?",
      a5: "Yes — up to 3 dogs total. The second slot unlocks at Dog Caring Level 4, and the third at Level 8.",
      q6: "Can I return or rehome a dog I don't want?",
      a6: "Currently no. Dogs cannot be returned to the shelter. The only option is boarding for 20,000g — but they remain part of your household permanently. Choose carefully before adopting.",
      q7: "Do cats and dogs interact with each other?",
      a7: "Yes! If you own both species, they produce friendly interaction animations together. Sociable pets initiate cross-species interactions most often. Lone Wolf and Unsociable pets interact less frequently."
    },
    related: {
      title: "Related Guides",
      r1: "🐱 Cat Care Guide",
      r2: "🎣 Fishing Guide",
      r3: "🐛 Bug Catching Guide",
      r4: "🏠 House & Blueprints",
      r5: "🎁 Redeem Codes"
    }
  }
},
th: {
  navbar: { guideDog: "คู่มือสายพันธุ์สุนัข" },
  dogBreeds: {
    metaTitle: "สายพันธุ์สุนัข Heartopia: 11 สายพันธุ์และคู่มือนิสัย",
    metaDesc: "สุนัข 11 สายพันธุ์ใน Heartopia — วิธีปลดล็อกการดูแลสุนัข, รับเลี้ยงลูกหมาในฝัน, นิสัยทุกแบบ, คำสั่งฝึก และรางวัลทุกระดับ อัปเดตกุมภาพันธ์ 2026",
    heroTitle: "สายพันธุ์สุนัข Heartopia: คู่มือฉบับสมบูรณ์",
    heroDesc: "ทุกสิ่งที่ต้องรู้เกี่ยวกับสุนัขใน Heartopia — ปลดล็อกงานอดิเรกดูแลสุนัข, 11 สายพันธุ์ที่รับเลี้ยงได้, 11 นิสัย, คำสั่งฝึก และรางวัลเลเวลอัป ไม่มีสุนัขสองตัวที่เหมือนกัน อัปเดตกุมภาพันธ์ 2026",
    badge: "คู่มือดูแลสุนัข",
    quote: "Golden Retriever คือสายพันธุ์ที่ดีที่สุดสำหรับการหาทอง — สุนัขที่มีความผูกพันสูงจะนำถุงทองมาเป็นของขวัญ จับคู่กับเทคนิค Seek Treasure แล้วให้สุนัขช่วยหาของให้คุณ",
    tocTitle: "สารบัญ",
    sections: { unlock: "วิธีปลดล็อก", adoption: "ระบบรับเลี้ยง", breeds: "สายพันธุ์ทั้งหมด", traits: "นิสัยสุนัข", appearance: "สีขนและดวงตา", care: "การดูแลประจำวัน", training: "การฝึกและเทคนิค", levels: "รางวัลระดับ", tips: "เคล็ดลับ", faq: "คำถามที่พบบ่อย" },
    stats: { s1: "11 สายพันธุ์", s2: "11 นิสัย", s3: "เลี้ยงได้สูงสุด 3 ตัว", s4: "ต้องถึง D.G. เลเวล 12", s5: "ค่าธรรมเนียมรับเลี้ยง 500g" },
    unlock: {
      title: "วิธีปลดล็อกงานอดิเรกดูแลสุนัข",
      intro: "สุนัขต้องผ่านเงื่อนไขสามอย่างก่อนที่นางโจนจะเสนอการรับเลี้ยง ต้องวางแผนล่วงหน้า — ใช้เวลาหลายวัน",
      step1: "ถึง D.G. Member เลเวล 12 โดยทำ Resident Requests ทุกวันเพื่อสะสมเหรียญ",
      step2: "ปลดล็อกและทำ Cat Caring Tutorial กับนางโจนก่อน — Cat Caring เป็นเงื่อนไขบังคับก่อน Dog Caring",
      step3: "ไปหานางโจนที่ศูนย์รับเลี้ยง แลก Hobby Expansion Ticket 1 ใบเพื่อเปิดใช้งาน Dog Caring",
      timeNote: "⏱ คาดว่าใช้เวลา 3–5 วันในการเล่นปกติเพื่อถึงเลเวล 12 Cat Care จะปลดล็อกก่อนหน้านั้น"
    },
    adoption: {
      title: "ระบบรับเลี้ยงสุนัข",
      rotationTitle: "การหมุนเวียนประจำวัน",
      rotationDesc: "นางโจนแสดงสุนัข 3 ตัว (และแมว 3 ตัว) ทุกวัน รายการรีเซ็ตตามเวลาเซิร์ฟเวอร์ ไม่มีการรีโรล — ถ้าไม่ถูกใจ รอพรุ่งนี้",
      howToTitle: "วิธีรับเลี้ยง",
      step1: "เข้าหาสุนัขที่ศูนย์รับเลี้ยงและเลือก รับเลี้ยง",
      step2: "จ่ายค่าตรวจร่างกาย 500g",
      step3: "ตั้งชื่อสุนัข — สามารถเปลี่ยนชื่อได้ภายหลัง",
      step4: "สุนัขจะถูกส่งไปที่บ้านของคุณทันที",
      slotsTitle: "เลี้ยงสุนัขได้กี่ตัว?",
      slotRows: [
        { milestone: "Dog Caring เลเวล 1", dogs: "1 ตัว" },
        { milestone: "Dog Caring เลเวล 4", dogs: "2 ตัว" },
        { milestone: "Dog Caring เลเวล 8", dogs: "3 ตัว" }
      ],
      warning: "⚠️ สุนัขไม่สามารถคืนได้ ค่าฝากเลี้ยง 20,000g แต่ไม่ได้ลบออกถาวร เลือกให้ดีก่อนรับเลี้ยง",
      tipTitle: "เคล็ดลับหาสายพันธุ์ที่ต้องการ",
      tip1: "ไปที่ศูนย์รับเลี้ยงทุกวัน — การหมุนเวียนสุ่มทั้งหมด",
      tip2: "ดูบัตรประจำตัวสุนัขก่อนรับเลี้ยง จะเห็นสายพันธุ์ นิสัย ขน และดวงตา",
      tip3: "พบสายพันธุ์ที่ต้องการรีบรับเลี้ยงทันที — พรุ่งนี้จะไม่มีแล้ว",
      tip4: "สายพันธุ์หายากพบได้บ่อยขึ้นในช่วงอีเวนต์ตามฤดูกาล"
    },
    breeds: {
      title: "สุนัข 11 สายพันธุ์ใน Heartopia",
      note: "สายพันธุ์ไม่ส่งผลต่อสถิติหรือความสามารถ — กำหนดแค่รูปร่างและลักษณะภายนอกเท่านั้น ทุกสายพันธุ์เรียนเทคนิคและสร้างความผูกพันสูงสุดได้เท่ากัน",
      thBreed: "สายพันธุ์", thSize: "ขนาด", thDesc: "ลักษณะ", thNote: "จุดเด่น",
      rows: [
        { breed: "Corgi", size: "เล็ก", desc: "ขาสั้น นิสัยใหญ่ โด่งดังจากท่า sploot และก้นกลม", note: "สายพันธุ์ที่ขอมากที่สุด" },
        { breed: "Poodle", size: "เล็ก–กลาง", desc: "ขนหยิกสีขาว หน้าตาดูฉลาดและสง่างาม", note: "ทรงขนเป็นเอกลักษณ์" },
        { breed: "Beagle", size: "กลาง", desc: "หูยานและหน้าตาน่ารัก หมาล่าสัตว์ที่เป็นมิตรแบบคลาสสิก", note: "เหมาะสำหรับผู้เริ่มต้น" },
        { breed: "Shiba Inu", size: "เล็ก–กลาง", desc: "หน้าเหมือนจิ้งจอก ท่าทางเป็นอิสระ ดูเหมือน Doge ยอดนิยม", note: "สายพันธุ์เล็กยอดนิยม" },
        { breed: "Rural Dog", size: "กลาง", desc: "หมาลูกผสมที่ซื่อสัตย์ รู้จักในชื่อ Gardening Dog แข็งแกร่ง", note: "หายากในการหมุนเวียน" },
        { breed: "Spotted Dog", size: "กลาง–ใหญ่", desc: "ลายจุดขาวดำสไตล์ดัลเมเชียน พลังงานสูง รูปลักษณ์โดดเด่น", note: "ลายเป็นเอกลักษณ์" },
        { breed: "Golden Retriever", size: "ใหญ่", desc: "ขนสีทอง สีหน้ายิ้มตลอดเวลา สายพันธุ์ใหญ่ที่เป็นมิตรที่สุด", note: "นำถุงทองมาเป็นของขวัญ" },
        { breed: "Labrador Retriever", size: "ใหญ่", desc: "ขนสั้น ร่างกายกำยำ ดูกระฉับกระเฉงและซื่อสัตย์", note: "สำหรับผู้เล่นที่ชอบเคลื่อนไหว" },
        { breed: "Shepherd Dog", size: "ใหญ่", desc: "คล้าย German Shepherd ฉลาดและตื่นตัว", note: "ดูเข้มแข็ง" },
        { breed: "Rottweiler", size: "ใหญ่", desc: "กล้ามเนื้อแน่นพร้อมลายดำ-แทนเป็นเอกลักษณ์", note: "ดูน่าเกรงขาม" },
        { breed: "Sled Dog", size: "ใหญ่", desc: "ดูเหมือนหมาป่า Husky มักมีนิสัย Energetic", note: "พบบ่อยในอีเวนต์ฤดูหนาว" }
      ],
      bestTitle: "สายพันธุ์ไหนดีที่สุด?",
      bestDesc: "เพื่อการฟาร์มทอง เน้นที่ Golden Retriever — สุนัขที่ผูกพันสูงจะนำถุงทองมาเป็นของขวัญประจำวัน สำหรับการดูแลง่าย มองหาสายพันธุ์ใดก็ได้ที่มีนิสัย Sluggish + Indifferent"
    },
    traits: {
      title: "นิสัยสุนัข 11 แบบ",
      intro: "สุนัขแต่ละตัวได้รับนิสัย 2 แบบสุ่มตอนออกมาในคิว ดูได้บนบัตรประจำตัวก่อนรับเลี้ยง",
      note: "สายพันธุ์ไม่กำหนดนิสัย Corgi และ Rottweiler อาจได้นิสัยชุดเดียวกันได้",
      thTrait: "นิสัย", thBehavior: "พฤติกรรม", thCare: "ระดับการดูแล",
      rows: [
        { trait: "Chatterbox", behavior: "เห่าบ่อย สามารถแจ้งเตือนสิ่งของใกล้เคียงได้", care: "ปานกลาง" },
        { trait: "Clingy", behavior: "ติดตามที่บ้าน โอกาสทำลายเฟอร์นิเจอร์เมื่อเบื่อสูงขึ้น", care: "สูง" },
        { trait: "Energetic", behavior: "ต้องการเล่นและเดินมาก ความหิวลดลงเร็วกว่าปกติ", care: "สูง" },
        { trait: "Indifferent", behavior: "พฤติกรรมเป็นกลาง ดูแลง่าย", care: "ต่ำ" },
        { trait: "Lone Wolf", behavior: "ชอบอยู่คนเดียว ต้องการปฏิสัมพันธ์น้อย", care: "ต่ำ" },
        { trait: "Naughty", behavior: "ซุกซนมากขึ้น ทำลายเฟอร์นิเจอร์ถ้าทิ้งไว้นาน", care: "ยาก" },
        { trait: "Quiet", behavior: "แทบไม่ส่งเสียง เงียบสงบ", care: "ต่ำ" },
        { trait: "Sensitive", behavior: "กินอาหารยาก ไม่รับอาหารทุกประเภท", care: "ปานกลาง" },
        { trait: "Sluggish", behavior: "ความหิวลดช้า พลังงานต่ำ ต้องการอาหารน้อย", care: "ง่ายที่สุด" },
        { trait: "Sociable", behavior: "ต้องการปฏิสัมพันธ์บ่อย อารมณ์ตกเร็วถ้าขาดความสนใจ", care: "สูง" },
        { trait: "Unsociable", behavior: "ต้องการปฏิสัมพันธ์น้อย ดูแลง่าย", care: "ต่ำ" }
      ],
      tipsTitle: "เคล็ดลับเรื่องนิสัย",
      tip1: "คอมโบง่ายสุด: Sluggish + Indifferent หรือ Sluggish + Lone Wolf",
      tip2: "คอมโบยากสุด: Naughty + Clingy — เฟอร์นิเจอร์เสียหายและต้องดูแลตลอด",
      tip3: "นิสัยไม่ส่งผลต่ออัตราการนำของขวัญมา — ทุกคอมโบได้รับรางวัลเท่ากัน"
    },
    appearance: {
      title: "สีขน ลาย และดวงตา",
      intro: "รูปลักษณ์สุนัขมาจาก 4 ชั้นอิสระ สร้างคอมโบไม่ซ้ำกันหลายร้อยแบบ",
      colorsTitle: "สีขน", colors: "ดำ · ขาว · ครีม · น้ำตาล · ทอง · เทา · สามสี",
      patternsTitle: "ลายขน", patterns: "สีเดียว · จุด · บรินเดิล · เมอร์เล · พาร์ติ · ทักซิโด้ · เซเบิล",
      eyeColorsTitle: "สีดวงตา", eyeColors: "น้ำตาล (พบบ่อยสุด) · อำพัน · ฟ้า · เขียว · Heterochromia (สองสี — หายากที่สุด)",
      eyeStylesTitle: "รูปแบบดวงตา", eyeStyles: "กลม · อัลมอนด์ · กระดุม",
      totalNote: "ชุมชน Heartopia ประมาณว่ามีรูปลักษณ์สุนัขที่ไม่ซ้ำกันถึง 200–500+ แบบ Heterochromia คือดวงตาที่หายากที่สุด"
    },
    care: {
      title: "การดูแลสุนัขประจำวัน",
      intro: "ระดับความผูกพันกำหนดว่าสุนัขนำของขวัญมาบ่อยแค่ไหน ใช้แอป Pet บนนาฬิกาในเกมตรวจสอบความหิว พลังงาน และความสุขของสุนัขทุกตัว",
      feed: { icon: "🍖", title: "ให้อาหาร", desc: "แตะไอคอนชามอาหารเพื่อให้อาหาร สุนัขที่มีนิสัย Sensitive อาจไม่ยอมรับอาหารบางชนิด" },
      play: { icon: "🎾", title: "เล่น", desc: "ใช้ของเล่นเล่นกับสุนัข สร้างความสุขเร็วกว่าการให้อาหารอย่างเดียว ตัวเลือกการเล่นเพิ่มขึ้นตามระดับ" },
      bathe: { icon: "🛁", title: "อาบน้ำ", desc: "เมื่อสุนัขสกปรก เลือก Pet Wash ทำตาม 3 ขั้นตอน: ล้าง, ฟอก, เช็ดให้แห้ง" },
      train: { icon: "🎓", title: "ฝึก", desc: "สอนคำสั่งเพื่อสร้างความผูกพันและ XP อย่างมีประสิทธิภาพสูงสุด สะสมดาว Doggie Time Collection" },
      goOut: { icon: "🚶", title: "พาออกไป", desc: "พาสุนัขเดินในเมือง ถ้าเดินไกลเกินไปสุนัขจะกลับบ้านอัตโนมัติ" }
    },
    training: {
      title: "คำสั่งและเทคนิคการฝึกสุนัข",
      intro: "การฝึกเป็นการลงทุนประจำวันที่ดีที่สุด — สร้างความผูกพัน ได้ XP และปลดล็อกรางวัลพิเศษ",
      thCommand: "คำสั่ง", thEffect: "ผลลัพธ์", thPriority: "ความสำคัญ",
      rows: [
        { command: "Seek Treasure", effect: "สุนัขค้นหาสิ่งของซ่อนอยู่ขณะเล่น — ค้นหาสิ่งของแบบ passive", priority: "ฝึกก่อน 🔴" },
        { command: "Give Paw", effect: "สุนัขยื่นอุ้งเท้าตามคำสั่ง เพิ่มความผูกพัน", priority: "ปานกลาง 🟡" },
        { command: "Shake Head", effect: "สุนัขส่ายหัวตามคำสั่ง ได้ดาวสะสม", priority: "ปานกลาง 🟡" },
        { command: "Fetch", effect: "สุนัขไปเอาสิ่งของที่โยนไป", priority: "ปานกลาง 🟡" }
      ],
      howTitle: "วิธีฝึก",
      howDesc: "เลือก Train จากเมนูปฏิสัมพันธ์ ดูท่าที่สุนัขทำ แล้วชมเชย (ถูก) หรือตำหนิ (ผิด) แต่ละเซสชันสำเร็จจะได้ดาว Doggie Time Collection ซึ่งปลดล็อกชุดแต่ง สกุลเงิน และไอเท็มพิเศษ",
      tip: "🔴 ลำดับความสำคัญ: ฝึก Seek Treasure ก่อน เป็นคำสั่งเดียวที่ให้ประโยชน์ในการเล่นจริง"
    },
    levels: {
      title: "รางวัลทุกระดับ Dog Caring",
      intro: "รับ XP จากการให้อาหาร เล่น อาบน้ำ และฝึกสุนัข ใช้ Hobby Upgrade Tickets เพื่ออัปเกรด",
      thLevel: "ระดับ", thReward: "รางวัล",
      rows: [
        { level: "1", reward: "Dog Moment 1 · Dog Arrives! 1 — รับเลี้ยงสุนัขตัวแรก" },
        { level: "2", reward: "สูตรปุ๋ยทำมือ" },
        { level: "3", reward: "ของเล่นกระสอบทราย · Dog Moment 2" },
        { level: "4", reward: "อาหารสุนัขพลังงาน · Dog Arrives! 2 — รับเลี้ยงสุนัขตัวที่ 2" },
        { level: "5", reward: "Dog Moment 3 · Auto-Feed 1 — เครื่องให้อาหารอัตโนมัติ" },
        { level: "6", reward: "Dog Moment 4" },
        { level: "7", reward: "Dog Moment 5" },
        { level: "8", reward: "Auto-Feed 2 · Dog Arrives! 3 — รับเลี้ยงสุนัขตัวที่ 3" },
        { level: "9", reward: "Dog Moment 6 · ปลดล็อก Come and Play" },
        { level: "10", reward: "Dog Moment 7" }
      ],
      note: "จุดสำคัญ: เลเวล 4 (สุนัขตัวที่ 2), เลเวล 5 (Auto-Feed — ไม่ต้องกังวลสุนัขหิว), เลเวล 8 (สุนัขตัวที่ 3)"
    },
    tips: {
      title: "เคล็ดลับสำหรับเจ้าของสุนัข",
      items: [
        "รับเลี้ยงทันทีที่พบสายพันธุ์ที่ต้องการ — การหมุนเวียนสุ่มและไม่มีรีโรล",
        "Auto-Feed เลเวล 5 สำคัญมาก ปลดล็อกโดยเร็วที่สุดเพื่อลดความกังวลเรื่องอาหาร",
        "ฝึก Seek Treasure ก่อน — เทคนิคเดียวที่ให้ประโยชน์ในการเล่นจริงนอกจากความผูกพัน",
        "สุนัขที่ผูกพันสูงนำของขวัญมาบ่อยกว่า ปฏิสัมพันธ์ทุกวันสะสมได้มาก",
        "สุนัขตาสองสี (Heterochromia) หายากมาก — ควรเก็บไว้ไม่ว่าสายพันธุ์จะเป็นอะไร"
      ]
    },
    faq: {
      title: "คำถามที่พบบ่อย",
      q1: "Heartopia มีสุนัขกี่สายพันธุ์?", a1: "มี 11 สายพันธุ์ที่ยืนยันแล้ว: Beagle, Corgi, Golden Retriever, Labrador Retriever, Poodle, Rottweiler, Rural Dog, Shepherd Dog, Shiba Inu, Sled Dog และ Spotted Dog เมื่อรวมลาย สีขน และนิสัย คาดว่ามีรูปลักษณ์ที่ไม่ซ้ำกัน 200–500+ แบบ",
      q2: "ต้องรับเลี้ยงแมวก่อนได้สุนัขไหม?", a2: "ต้องทำ Cat Caring Tutorial กับนางโจนให้เสร็จก่อน แต่ไม่จำเป็นต้องรับเลี้ยงแมวจริงๆ แค่ทำ Tutorial ครบก็เพียงพอที่จะปลดล็อก Dog Caring",
      q3: "สายพันธุ์ส่งผลต่อสถิติในเกมไหม?", a3: "ไม่เลย สุนัขทุกสายพันธุ์มีสถิติและความสามารถเท่ากัน ความแตกต่างของสายพันธุ์เป็นแค่รูปลักษณ์และความสวยงาม",
      q4: "ได้สายพันธุ์ที่ต้องการยังไง?", a4: "ตรวจสอบศูนย์รับเลี้ยงทุกวัน การหมุนเวียนสุ่มทั้งหมดโดยไม่มีรีโรล สายพันธุ์ที่ต้องการจะปรากฏในที่สุด",
      q5: "เลี้ยงสุนัขได้มากกว่า 1 ตัวไหม?", a5: "ได้ สูงสุด 3 ตัว ช่องที่สองปลดล็อกที่ Dog Caring เลเวล 4 และช่องที่สามที่เลเวล 8",
      q6: "คืนสุนัขที่ไม่ต้องการได้ไหม?", a6: "ตอนนี้ยังไม่ได้ สุนัขไม่สามารถคืนได้ ทางเลือกเดียวคือฝากเลี้ยง 20,000g แต่ยังอยู่ในครัวเรือนถาวร",
      q7: "แมวกับสุนัขอยู่ด้วยกันได้ไหม?", a7: "ได้! ถ้ามีทั้งสองชนิด จะมีแอนิเมชันปฏิสัมพันธ์ที่น่ารัก สุนัขที่มีนิสัย Sociable จะทำบ่อยที่สุด"
    },
    related: { title: "คู่มือที่เกี่ยวข้อง", r1: "🐱 คู่มือดูแลแมว", r2: "🎣 คู่มือตกปลา", r3: "🐛 คู่มือจับแมลง", r4: "🏠 บ้านและแปลนผัง", r5: "🎁 โค้ดแลกของรางวัล" }
  }
},
pt: {
  navbar: { guideDog: "Guia de Raças de Cães" },
  dogBreeds: {
    metaTitle: "Raças de Cães Heartopia: 11 Raças & Guia de Traços",
    metaDesc: "Todas as 11 raças de cães em Heartopia — como desbloquear o Cuidado Canino, adotar seu cão ideal, traços de personalidade, truques de treino e recompensas por nível.",
    heroTitle: "Raças de Cães Heartopia: Guia Completo",
    heroDesc: "Tudo sobre cães em Heartopia — desbloquear o hobby Cuidado Canino, todas as 11 raças adotáveis, 11 traços de personalidade, comandos de treino e recompensas. Atualizado fevereiro 2026.",
    badge: "Guia de Cuidado Canino",
    quote: "O Golden Retriever é secretamente a melhor raça para farmar ouro — Goldens com alto vínculo trazem Sacos de Ouro como presentes. Combine com o truque Seek Treasure.",
    tocTitle: "Neste guia",
    sections: { unlock: "Como Desbloquear", adoption: "Sistema de Adoção", breeds: "Todas as Raças", traits: "Traços de Personalidade", appearance: "Pelagem e Olhos", care: "Cuidados Diários", training: "Treino e Truques", levels: "Recompensas por Nível", tips: "Dicas Pro", faq: "Perguntas Frequentes" },
    stats: { s1: "11 Raças", s2: "11 Traços", s3: "Até 3 Cães", s4: "Requer D.G. Nível 12", s5: "Taxa de adoção: 500g" },
    unlock: {
      title: "Como Desbloquear o Hobby Cuidado Canino",
      intro: "Cães exigem três pré-requisitos antes que Mrs. Joan ofereça adoção. Planeje com antecedência — leva vários dias.",
      step1: "Alcance o Nível 12 do D.G. Member completando Resident Requests diariamente.",
      step2: "Desbloqueie e complete o tutorial de Cuidado de Gatos com Mrs. Joan primeiro — é pré-requisito obrigatório.",
      step3: "Visite Mrs. Joan no Centro de Adoção e troque um Hobby Expansion Ticket para ativar o Cuidado Canino.",
      timeNote: "⏱ Espere 3–5 dias de jogo regular para atingir o Nível 12. O Cuidado de Gatos desbloqueia antes."
    },
    adoption: {
      title: "Como Funciona o Sistema de Adoção",
      rotationTitle: "Rotação Diária",
      rotationDesc: "Mrs. Joan exibe 3 cães aleatórios (e 3 gatos) por dia. A seleção reinicia no reset diário do servidor. Sem rerrolagem — se não gostar, volte amanhã.",
      howToTitle: "Como Adotar",
      step1: "Aproxime-se de um cão no centro de adoção e selecione Adotar.",
      step2: "Pague a taxa de exame físico de 500g.",
      step3: "Nomeie seu cão — você pode renomear mais tarde.",
      step4: "Seu cão é enviado diretamente para sua casa.",
      slotsTitle: "Quantos Cães Você Pode Ter?",
      slotRows: [
        { milestone: "Cuidado Canino Nível 1", dogs: "1 cão" },
        { milestone: "Cuidado Canino Nível 4", dogs: "2 cães" },
        { milestone: "Cuidado Canino Nível 8", dogs: "3 cães" }
      ],
      warning: "⚠️ Cães não podem ser devolvidos. O internamento custa 20.000g, mas não os remove permanentemente. Escolha com cuidado.",
      tipTitle: "Dicas para Conseguir a Raça Desejada",
      tip1: "Visite o centro de adoção todos os dias — a rotação é completamente aleatória.",
      tip2: "Veja o cartão de ID do cão antes de adotar — mostra raça, traços, pelagem e cor dos olhos.",
      tip3: "Adote imediatamente quando encontrar a raça desejada — não estará disponível amanhã.",
      tip4: "Raças raras aparecem com mais frequência durante eventos sazonais."
    },
    breeds: {
      title: "Todas as 11 Raças de Cães em Heartopia",
      note: "Raça NÃO afeta estatísticas ou habilidades — define apenas forma e aparência. Toda raça pode aprender todos os truques.",
      thBreed: "Raça", thSize: "Tamanho", thDesc: "Descrição", thNote: "Destaque",
      rows: [
        { breed: "Corgi", size: "Pequeno", desc: "Pernas curtas, grande personalidade. Famoso pela pose sploot e traseiro redondo.", note: "Raça mais solicitada" },
        { breed: "Poodle", size: "Peq–Médio", desc: "Pelagem encaracolada elegante em branco padrão. Postura inteligente.", note: "Silhueta única" },
        { breed: "Beagle", size: "Médio", desc: "Orelhas caídas e rosto expressivo. Cão farejador clássico e amigável.", note: "Ótimo para iniciantes" },
        { breed: "Shiba Inu", size: "Peq–Médio", desc: "Rosto de raposa e postura independente. O famoso look do Doge.", note: "Raça pequena mais popular" },
        { breed: "Rural Dog", size: "Médio", desc: "Tipo vira-lata leal, também chamado de Gardening Dog. Resistente.", note: "Raro na rotação" },
        { breed: "Spotted Dog", size: "Méd–Grande", desc: "Manchas preto-e-branco estilo dálmata. Alta energia, visual distinto.", note: "Padrão marcante" },
        { breed: "Golden Retriever", size: "Grande", desc: "Pelagem dourada longa, expressão sempre feliz. O mais amigável.", note: "Traz Sacos de Ouro" },
        { breed: "Labrador Retriever", size: "Grande", desc: "Pelagem curta, estrutura robusta. Atlético e leal.", note: "Ótimo para jogadores ativos" },
        { breed: "Shepherd Dog", size: "Grande", desc: "Parece um Pastor Alemão. Inteligente e alerta.", note: "Visual protetor forte" },
        { breed: "Rottweiler", size: "Grande", desc: "Construção muscular com marcas preto-e-marrom características.", note: "Presença visual marcante" },
        { breed: "Sled Dog", size: "Grande", desc: "Aparência de Husky com cara de lobo. Frequentemente tem o traço Energético.", note: "Frequente em eventos de inverno" }
      ],
      bestTitle: "Qual Raça É a Melhor?",
      bestDesc: "Para farmar ouro, priorize o Golden Retriever — Goldens com alto vínculo trazem Sacos de Ouro como presentes diários. Para cuidado fácil, busque qualquer raça com Sluggish + Indifferent."
    },
    traits: {
      title: "Todos os 11 Traços de Personalidade",
      intro: "Cada cão recebe exatamente 2 traços aleatórios ao aparecer. Ambos são visíveis no cartão de ID antes da adoção.",
      note: "Raça NÃO determina traços. Um Corgi e um Rottweiler podem ter a mesma combinação.",
      thTrait: "Traço", thBehavior: "Comportamento", thCare: "Dificuldade",
      rows: [
        { trait: "Chatterbox", behavior: "Late com frequência; pode alertar sobre itens próximos.", care: "Médio" },
        { trait: "Clingy", behavior: "Segue você em casa; maior chance de danificar móveis quando entediado.", care: "Alto" },
        { trait: "Energetic", behavior: "Quer muito brincar e passear; fome diminui mais rápido.", care: "Alto" },
        { trait: "Indifferent", behavior: "Comportamento neutro; fácil de gerenciar.", care: "Baixo" },
        { trait: "Lone Wolf", behavior: "Prefere ficar sozinho; precisa de menos interação.", care: "Baixo" },
        { trait: "Naughty", behavior: "Mais propenso a se comportar mal; danifica móveis se deixado muito tempo.", care: "Exigente" },
        { trait: "Quiet", behavior: "Raramente faz barulho; presença calma em casa.", care: "Baixo" },
        { trait: "Sensitive", behavior: "Comer exigente; não aceita todos os tipos de comida.", care: "Médio" },
        { trait: "Sluggish", behavior: "Fome diminui mais devagar; baixa atividade — precisa de menos comida.", care: "Mais Fácil" },
        { trait: "Sociable", behavior: "Precisa de interação frequente; humor cai sem atenção.", care: "Alto" },
        { trait: "Unsociable", behavior: "Quer interação mínima; fácil de cuidar.", care: "Baixo" }
      ],
      tipsTitle: "Dicas sobre Traços",
      tip1: "Combinação mais fácil: Sluggish + Indifferent ou Sluggish + Lone Wolf — mínimo esforço diário.",
      tip2: "Combinação mais difícil: Naughty + Clingy — espere danos em móveis e atenção constante.",
      tip3: "Traços não afetam a taxa de presentes — toda combinação pode recompensar igualmente."
    },
    appearance: {
      title: "Variações de Pelagem e Olhos",
      intro: "A aparência de cada cão vem de quatro camadas independentes, criando centenas de combinações únicas.",
      colorsTitle: "Cores de Pelagem", colors: "Preto · Branco · Creme · Marrom · Dourado · Cinza · Tricolor",
      patternsTitle: "Padrões de Pelagem", patterns: "Sólido · Manchado · Malhado · Merle · Parti-color · Smoking · Sable",
      eyeColorsTitle: "Cores dos Olhos", eyeColors: "Marrom (mais comum) · Âmbar · Azul · Verde · Heterocromia (duas cores — mais raro)",
      eyeStylesTitle: "Estilos de Olhos", eyeStyles: "Redondo · Amendoado · Botão",
      totalNote: "A comunidade estima 200–500+ aparências únicas possíveis. Heterocromia é a variante de olhos mais rara."
    },
    care: {
      title: "Cuidados Diários — Como Construir Seu Vínculo",
      intro: "O nível de vínculo determina a frequência de presentes. Use o app Pet no relógio in-game para monitorar fome, energia e felicidade.",
      feed: { icon: "🍖", title: "Alimentar", desc: "Toque no ícone da tigela para alimentar. Cães com traço Sensitive podem recusar certos alimentos." },
      play: { icon: "🎾", title: "Brincar", desc: "Use brinquedos para brincar. Constrói felicidade mais rápido do que alimentar sozinho." },
      bathe: { icon: "🛁", title: "Banhar", desc: "Quando sujo, selecione Pet Wash. Siga o processo de 3 etapas: lavar, enxaguar, secar." },
      train: { icon: "🎓", title: "Treinar", desc: "Ensine comandos para o ganho mais eficiente de vínculo e XP. Ganha estrelas do Doggie Time Collection." },
      goOut: { icon: "🚶", title: "Sair", desc: "Leve seu cão para explorar a cidade. Se você se afastar demais, ele volta para casa automaticamente." }
    },
    training: {
      title: "Todos os Comandos e Truques de Treino",
      intro: "Treinar é o melhor investimento diário — constrói vínculo, ganha XP e desbloqueia recompensas exclusivas.",
      thCommand: "Comando", thEffect: "Efeito", thPriority: "Prioridade",
      rows: [
        { command: "Seek Treasure", effect: "Cão busca itens escondidos enquanto você joga — descoberta passiva de itens.", priority: "Treinar Primeiro 🔴" },
        { command: "Give Paw", effect: "Cão oferece a pata. Aumenta o medidor de vínculo.", priority: "Médio 🟡" },
        { command: "Shake Head", effect: "Cão balança a cabeça. Ganha estrela da coleção.", priority: "Médio 🟡" },
        { command: "Fetch", effect: "Cão busca itens lançados.", priority: "Médio 🟡" }
      ],
      howTitle: "Como Funciona o Treino",
      howDesc: "Selecione Treinar no menu de interação. Observe o movimento do cão e aplauda (correto) ou repreenda (errado). Cada sessão concede estrelas do Doggie Time Collection desbloqueando roupas, moedas e itens exclusivos.",
      tip: "🔴 Prioridade: Ensine Seek Treasure primeiro. É o único comando com benefício real de gameplay."
    },
    levels: {
      title: "Recompensas de Nível — Hobby Cuidado Canino",
      intro: "Ganhe XP alimentando, brincando, banhando e treinando seu cão. Gaste Hobby Upgrade Tickets para subir de nível.",
      thLevel: "Nível", thReward: "Recompensa",
      rows: [
        { level: "1", reward: "Dog Moment 1 · Dog Arrives! 1 — adotar 1º cão" },
        { level: "2", reward: "Receita de Fertilizante Artesanal" },
        { level: "3", reward: "Brinquedo Saco de Areia · Dog Moment 2" },
        { level: "4", reward: "Energy Dog Food disponível · Dog Arrives! 2 — adotar 2º cão" },
        { level: "5", reward: "Dog Moment 3 · Auto-Feed 1 — alimentador automático desbloqueado" },
        { level: "6", reward: "Dog Moment 4" },
        { level: "7", reward: "Dog Moment 5" },
        { level: "8", reward: "Auto-Feed 2 · Dog Arrives! 3 — adotar 3º cão" },
        { level: "9", reward: "Dog Moment 6 · Ação Come and Play desbloqueada" },
        { level: "10", reward: "Dog Moment 7" }
      ],
      note: "Marcos-chave: Nível 4 (2º cão), Nível 5 (Auto-Feed — sem mais cães com fome offline), Nível 8 (3º slot)."
    },
    tips: { title: "Dicas Pro para Donos de Cães", items: ["Adote imediatamente quando a raça desejada aparecer — rotação aleatória sem rerrolagem.", "Auto-Feed no Nível 5 muda tudo. Desbloqueie o quanto antes.", "Ensine Seek Treasure primeiro — único truque com benefício real de gameplay.", "Cães com alto vínculo trazem presentes com mais frequência. Interação diária compensa.", "Cães com olhos Heterocromia são raros — vale manter independentemente da raça."] },
    faq: {
      title: "Perguntas Frequentes",
      q1: "Quantas raças de cães existem em Heartopia?", a1: "11 raças confirmadas: Beagle, Corgi, Golden Retriever, Labrador Retriever, Poodle, Rottweiler, Rural Dog, Shepherd Dog, Shiba Inu, Sled Dog e Spotted Dog. Com padrões de pelagem e personalidade, estima-se 200–500+ aparências únicas.",
      q2: "Preciso adotar um gato antes de ter um cão?", a2: "Você precisa completar o tutorial de Cuidado de Gatos com Mrs. Joan, mas não precisa adotar um gato de verdade. Terminar o tutorial é suficiente para desbloquear o Cuidado Canino.",
      q3: "A raça afeta estatísticas do jogo?", a3: "Não. Todas as 11 raças têm estatísticas idênticas e podem aprender todos os truques igualmente. Diferenças de raça são puramente visuais.",
      q4: "Como conseguir uma raça específica?", a4: "Verifique o centro de adoção todos os dias — rotação completamente aleatória sem rerrolagem. Sua raça desejada aparecerá eventualmente.",
      q5: "Posso ter mais de um cão?", a5: "Sim — até 3 cães. O segundo slot desbloqueia no Nível 4 e o terceiro no Nível 8 do Cuidado Canino.",
      q6: "Posso devolver um cão que não quero?", a6: "Atualmente não. Cães não podem ser devolvidos ao abrigo. A única opção é o internamento por 20.000g — mas continuam no seu lar permanentemente.",
      q7: "Gatos e cães interagem entre si?", a7: "Sim! Se você tiver ambas as espécies, eles produzem animações de interação amigáveis. Animais com traço Sociable iniciam interações entre espécies com mais frequência."
    },
    related: { title: "Guias Relacionados", r1: "🐱 Guia de Cuidado de Gatos", r2: "🎣 Guia de Pesca", r3: "🐛 Guia de Captura de Insetos", r4: "🏠 Casa e Plantas", r5: "🎁 Códigos de Resgate" }
  }
},
es: {
  navbar: { guideDog: "Guía de Razas de Perros" },
  dogBreeds: {
    metaTitle: "Razas de Perros Heartopia: 11 Razas & Guía de Rasgos",
    metaDesc: "Las 11 razas de perros en Heartopia — cómo desbloquear el Cuidado Canino, adoptar tu perro ideal, rasgos de personalidad, trucos de entrenamiento y recompensas por nivel.",
    heroTitle: "Razas de Perros Heartopia: Guía Completa",
    heroDesc: "Todo sobre los perros en Heartopia — desbloquear el hobby Cuidado Canino, las 11 razas adoptables, 11 rasgos de personalidad, comandos de entrenamiento y recompensas. Actualizado febrero 2026.",
    badge: "Guía de Cuidado Canino",
    quote: "El Golden Retriever es la mejor raza para farmear oro — los Goldens con alto vínculo traen Bolsas de Oro como regalos. Combínalo con el truco Seek Treasure.",
    tocTitle: "En esta guía",
    sections: { unlock: "Cómo Desbloquear", adoption: "Sistema de Adopción", breeds: "Todas las Razas", traits: "Rasgos de Personalidad", appearance: "Pelaje y Ojos", care: "Cuidado Diario", training: "Entrenamiento", levels: "Recompensas por Nivel", tips: "Consejos Pro", faq: "Preguntas Frecuentes" },
    stats: { s1: "11 Razas", s2: "11 Rasgos", s3: "Hasta 3 Perros", s4: "Requiere D.G. Nivel 12", s5: "Tarifa de adopción: 500g" },
    unlock: {
      title: "Cómo Desbloquear el Hobby Cuidado Canino",
      intro: "Los perros requieren tres prerrequisitos antes de que Mrs. Joan ofrezca adopciones. Planifica con anticipación — toma varios días.",
      step1: "Alcanza el Nivel 12 de D.G. Member completando Resident Requests diariamente.",
      step2: "Desbloquea y completa el tutorial de Cuidado de Gatos con Mrs. Joan primero — es prerequisito obligatorio.",
      step3: "Visita a Mrs. Joan en el Centro de Adopción y cambia un Hobby Expansion Ticket para activar el Cuidado Canino.",
      timeNote: "⏱ Espera 3–5 días de juego regular para llegar al Nivel 12. El Cuidado de Gatos desbloquea antes."
    },
    adoption: {
      title: "Cómo Funciona el Sistema de Adopción",
      rotationTitle: "Rotación Diaria",
      rotationDesc: "Mrs. Joan muestra 3 perros aleatorios (y 3 gatos) cada día. La selección se reinicia en el reset diario. Sin rerroleos — si no te gustan los de hoy, vuelve mañana.",
      howToTitle: "Cómo Adoptar",
      step1: "Acércate a un perro en el centro de adopción y selecciona Adoptar.",
      step2: "Paga la tarifa de examen físico de 500g.",
      step3: "Ponle nombre a tu perro — puedes renombrarlo más tarde.",
      step4: "Tu perro va directamente a tu hogar.",
      slotsTitle: "¿Cuántos Perros Puedes Tener?",
      slotRows: [
        { milestone: "Cuidado Canino Nivel 1", dogs: "1 perro" },
        { milestone: "Cuidado Canino Nivel 4", dogs: "2 perros" },
        { milestone: "Cuidado Canino Nivel 8", dogs: "3 perros" }
      ],
      warning: "⚠️ Los perros no pueden ser devueltos. El internamiento cuesta 20.000g pero no los elimina permanentemente. Elige con cuidado.",
      tipTitle: "Consejos para Conseguir la Raza Deseada",
      tip1: "Visita el centro de adopción cada día — la rotación es completamente aleatoria.",
      tip2: "Ve la tarjeta de ID del perro antes de adoptar — muestra raza, rasgos, pelaje y color de ojos.",
      tip3: "Adopta inmediatamente cuando encuentres la raza deseada — no estará mañana.",
      tip4: "Las razas raras aparecen con más frecuencia durante eventos de temporada."
    },
    breeds: {
      title: "Las 11 Razas de Perros en Heartopia",
      note: "La raza NO afecta estadísticas ni habilidades — solo determina forma y apariencia. Toda raza puede aprender todos los trucos.",
      thBreed: "Raza", thSize: "Tamaño", thDesc: "Descripción", thNote: "Destacado",
      rows: [
        { breed: "Corgi", size: "Pequeño", desc: "Patas cortas, gran personalidad. Famoso por la pose sploot y el trasero redondo.", note: "Raza más solicitada" },
        { breed: "Poodle", size: "Peq–Mediano", desc: "Pelaje rizado elegante en blanco estándar. Postura inteligente.", note: "Silueta única" },
        { breed: "Beagle", size: "Mediano", desc: "Orejas caídas y cara expresiva. Sabueso clásico y amigable.", note: "Genial para principiantes" },
        { breed: "Shiba Inu", size: "Peq–Mediano", desc: "Cara de zorro y postura independiente. El famoso look del Doge.", note: "Raza pequeña más popular" },
        { breed: "Rural Dog", size: "Mediano", desc: "Tipo mestizo leal, también llamado Gardening Dog. Resistente.", note: "Raro en rotación" },
        { breed: "Spotted Dog", size: "Med–Grande", desc: "Manchas blanco y negro estilo dálmata. Alta energía, aspecto distinto.", note: "Patrón llamativo" },
        { breed: "Golden Retriever", size: "Grande", desc: "Pelaje dorado largo, expresión siempre feliz. El más amigable.", note: "Trae Bolsas de Oro" },
        { breed: "Labrador Retriever", size: "Grande", desc: "Pelaje corto, constitución robusta. Atlético y leal.", note: "Ideal para jugadores activos" },
        { breed: "Shepherd Dog", size: "Grande", desc: "Parece un Pastor Alemán. Inteligente y alerta.", note: "Aspecto protector fuerte" },
        { breed: "Rottweiler", size: "Grande", desc: "Constitución muscular con marcas negro y marrón características.", note: "Presencia visual imponente" },
        { breed: "Sled Dog", size: "Grande", desc: "Apariencia de Husky con cara de lobo. Frecuentemente tiene el rasgo Energético.", note: "Frecuente en eventos invernales" }
      ],
      bestTitle: "¿Cuál Raza Es la Mejor?",
      bestDesc: "Para farmear oro, prioriza el Golden Retriever — los Goldens con alto vínculo traen Bolsas de Oro como regalos diarios. Para cuidado fácil, busca cualquier raza con Sluggish + Indifferent."
    },
    traits: {
      title: "Los 11 Rasgos de Personalidad",
      intro: "Cada perro recibe exactamente 2 rasgos aleatorios al aparecer. Ambos son visibles en la tarjeta de ID antes de adoptar.",
      note: "La raza NO determina los rasgos. Un Corgi y un Rottweiler pueden tener la misma combinación.",
      thTrait: "Rasgo", thBehavior: "Comportamiento", thCare: "Dificultad",
      rows: [
        { trait: "Chatterbox", behavior: "Ladra frecuentemente; puede alertar sobre objetos cercanos.", care: "Medio" },
        { trait: "Clingy", behavior: "Te sigue en casa; mayor probabilidad de dañar muebles cuando se aburre.", care: "Alto" },
        { trait: "Energetic", behavior: "Quiere mucho juego y paseos; el hambre baja más rápido.", care: "Alto" },
        { trait: "Indifferent", behavior: "Comportamiento neutro; fácil de manejar.", care: "Bajo" },
        { trait: "Lone Wolf", behavior: "Prefiere estar solo; necesita menos interacción.", care: "Bajo" },
        { trait: "Naughty", behavior: "Más propenso a portarse mal; daña muebles si se deja solo mucho tiempo.", care: "Exigente" },
        { trait: "Quiet", behavior: "Raramente hace ruido; presencia tranquila en casa.", care: "Bajo" },
        { trait: "Sensitive", behavior: "Come de forma selectiva; no acepta todos los alimentos.", care: "Medio" },
        { trait: "Sluggish", behavior: "El hambre baja más despacio; poca actividad — necesita menos comida.", care: "Más Fácil" },
        { trait: "Sociable", behavior: "Necesita interacción frecuente; el humor baja sin atención.", care: "Alto" },
        { trait: "Unsociable", behavior: "Quiere interacción mínima; fácil de cuidar.", care: "Bajo" }
      ],
      tipsTitle: "Consejos sobre Rasgos",
      tip1: "Combinación más fácil: Sluggish + Indifferent o Sluggish + Lone Wolf — mínimo esfuerzo diario.",
      tip2: "Combinación más difícil: Naughty + Clingy — espera daños en muebles y atención constante.",
      tip3: "Los rasgos no afectan la tasa de regalos — toda combinación puede recompensar por igual."
    },
    appearance: {
      title: "Variaciones de Pelaje y Ojos",
      intro: "La apariencia de cada perro proviene de cuatro capas independientes, creando cientos de combinaciones únicas.",
      colorsTitle: "Colores de Pelaje", colors: "Negro · Blanco · Crema · Marrón · Dorado · Gris · Tricolor",
      patternsTitle: "Patrones de Pelaje", patterns: "Sólido · Manchado · Atigrado · Merle · Bicolor · Esmoquin · Sable",
      eyeColorsTitle: "Colores de Ojos", eyeColors: "Marrón (más común) · Ámbar · Azul · Verde · Heterocromía (dos colores — más raro)",
      eyeStylesTitle: "Estilos de Ojos", eyeStyles: "Redondo · Almendrado · Botón",
      totalNote: "La comunidad estima 200–500+ apariencias únicas posibles. La heterocromía es la variante ocular más rara."
    },
    care: {
      title: "Cuidado Diario — Cómo Construir tu Vínculo",
      intro: "El nivel de vínculo determina la frecuencia de regalos. Usa la app Pet en el reloj del juego para monitorear hambre, energía y felicidad.",
      feed: { icon: "🍖", title: "Alimentar", desc: "Toca el icono del cuenco para alimentar. Los perros con rasgo Sensitive pueden rechazar ciertos alimentos." },
      play: { icon: "🎾", title: "Jugar", desc: "Usa juguetes para jugar. Construye felicidad más rápido que solo alimentar." },
      bathe: { icon: "🛁", title: "Bañar", desc: "Cuando esté sucio, selecciona Pet Wash. Sigue el proceso de 3 pasos: lavar, enjuagar, secar." },
      train: { icon: "🎓", title: "Entrenar", desc: "Enseña comandos para la ganancia más eficiente de vínculo y XP. Gana estrellas del Doggie Time Collection." },
      goOut: { icon: "🚶", title: "Salir", desc: "Lleva a tu perro a explorar el pueblo. Si te alejas demasiado, vuelve a casa automáticamente." }
    },
    training: {
      title: "Todos los Comandos y Trucos de Entrenamiento",
      intro: "Entrenar es la mejor inversión diaria — construye vínculo, gana XP y desbloquea recompensas exclusivas.",
      thCommand: "Comando", thEffect: "Efecto", thPriority: "Prioridad",
      rows: [
        { command: "Seek Treasure", effect: "El perro busca objetos ocultos mientras juegas — descubrimiento pasivo de objetos.", priority: "Entrenar Primero 🔴" },
        { command: "Give Paw", effect: "El perro ofrece su pata. Aumenta el medidor de vínculo.", priority: "Medio 🟡" },
        { command: "Shake Head", effect: "El perro sacude la cabeza. Gana estrella de colección.", priority: "Medio 🟡" },
        { command: "Fetch", effect: "El perro recoge objetos lanzados.", priority: "Medio 🟡" }
      ],
      howTitle: "Cómo Funciona el Entrenamiento",
      howDesc: "Selecciona Entrenar en el menú de interacción. Observa el movimiento del perro y aplaude (correcto) o regaña (incorrecto). Cada sesión exitosa otorga estrellas del Doggie Time Collection que desbloquean disfraces, monedas e ítems exclusivos.",
      tip: "🔴 Prioridad: Enseña Seek Treasure primero. Es el único comando con un beneficio real de gameplay."
    },
    levels: {
      title: "Recompensas de Nivel — Hobby Cuidado Canino",
      intro: "Gana XP alimentando, jugando, bañando y entrenando a tu perro. Gasta Hobby Upgrade Tickets para subir de nivel.",
      thLevel: "Nivel", thReward: "Recompensa",
      rows: [
        { level: "1", reward: "Dog Moment 1 · Dog Arrives! 1 — adoptar 1er perro" },
        { level: "2", reward: "Receta de Fertilizante Artesanal" },
        { level: "3", reward: "Juguete Saco de Arena · Dog Moment 2" },
        { level: "4", reward: "Energy Dog Food disponible · Dog Arrives! 2 — adoptar 2º perro" },
        { level: "5", reward: "Dog Moment 3 · Auto-Feed 1 — alimentador automático desbloqueado" },
        { level: "6", reward: "Dog Moment 4" },
        { level: "7", reward: "Dog Moment 5" },
        { level: "8", reward: "Auto-Feed 2 · Dog Arrives! 3 — adoptar 3er perro" },
        { level: "9", reward: "Dog Moment 6 · Acción Come and Play desbloqueada" },
        { level: "10", reward: "Dog Moment 7" }
      ],
      note: "Hitos clave: Nivel 4 (2º perro), Nivel 5 (Auto-Feed — sin más perros con hambre offline), Nivel 8 (3er slot)."
    },
    tips: { title: "Consejos Pro para Dueños de Perros", items: ["Adopta inmediatamente cuando aparezca la raza deseada — rotación aleatoria sin rerroleos.", "Auto-Feed en el Nivel 5 es un cambio de juego. Desbloquéalo lo antes posible.", "Enseña Seek Treasure primero — el único truco con beneficio real de gameplay.", "Los perros con alto vínculo traen regalos con más frecuencia. La interacción diaria suma.", "Los perros con ojos de Heterocromía son raros — vale la pena mantenerlos sin importar la raza."] },
    faq: {
      title: "Preguntas Frecuentes",
      q1: "¿Cuántas razas de perros hay en Heartopia?", a1: "11 razas confirmadas: Beagle, Corgi, Golden Retriever, Labrador Retriever, Poodle, Rottweiler, Rural Dog, Shepherd Dog, Shiba Inu, Sled Dog y Spotted Dog. Con patrones de pelaje y personalidad, se estiman 200–500+ apariencias únicas.",
      q2: "¿Necesito adoptar un gato antes de tener un perro?", a2: "Debes completar el tutorial de Cuidado de Gatos con Mrs. Joan, pero no necesitas adoptar un gato de verdad. Terminar el tutorial es suficiente para desbloquear el Cuidado Canino.",
      q3: "¿La raza afecta las estadísticas del juego?", a3: "No. Las 11 razas tienen estadísticas idénticas y pueden aprender todos los trucos igualmente. Las diferencias de raza son puramente visuales.",
      q4: "¿Cómo consigo una raza específica?", a4: "Revisa el centro de adopción cada día — rotación completamente aleatoria sin rerroleos. Tu raza deseada aparecerá eventualmente.",
      q5: "¿Puedo tener más de un perro?", a5: "Sí — hasta 3 perros. El segundo slot se desbloquea en el Nivel 4 y el tercero en el Nivel 8 del Cuidado Canino.",
      q6: "¿Puedo devolver un perro que no quiero?", a6: "Actualmente no. Los perros no pueden devolverse al refugio. La única opción es el internamiento por 20.000g, pero permanecen en tu hogar de forma permanente.",
      q7: "¿Los gatos y perros interactúan entre sí?", a7: "¡Sí! Si tienes ambas especies, producen animaciones de interacción amigables. Las mascotas con rasgo Sociable inician interacciones entre especies con más frecuencia."
    },
    related: { title: "Guías Relacionadas", r1: "🐱 Guía de Cuidado de Gatos", r2: "🎣 Guía de Pesca", r3: "🐛 Guía de Captura de Insectos", r4: "🏠 Casa y Planos", r5: "🎁 Códigos de Canje" }
  }
},
id: {
  navbar: { guideDog: "Panduan Ras Anjing" },
  dogBreeds: {
    metaTitle: "Ras Anjing Heartopia: 11 Ras & Panduan Sifat Lengkap",
    metaDesc: "Semua 11 ras anjing di Heartopia — cara buka hobi Perawatan Anjing, adopsi anjing ideal, sifat kepribadian, trik pelatihan, dan semua hadiah level. Update Feb 2026.",
    heroTitle: "Ras Anjing Heartopia: Panduan Lengkap",
    heroDesc: "Semua yang perlu diketahui tentang anjing di Heartopia — buka hobi Perawatan Anjing, 11 ras yang bisa diadopsi, 11 sifat kepribadian, perintah pelatihan, dan hadiah level. Update Februari 2026.",
    badge: "Panduan Perawatan Anjing",
    quote: "Golden Retriever adalah ras terbaik untuk farming emas — Golden yang memiliki ikatan tinggi membawa Kantong Emas sebagai hadiah. Kombinasikan dengan trik Seek Treasure.",
    tocTitle: "Dalam panduan ini",
    sections: { unlock: "Cara Membuka", adoption: "Sistem Adopsi", breeds: "Semua Ras", traits: "Sifat Kepribadian", appearance: "Bulu & Mata", care: "Perawatan Harian", training: "Pelatihan & Trik", levels: "Hadiah Level", tips: "Tips Pro", faq: "Pertanyaan Umum" },
    stats: { s1: "11 Ras", s2: "11 Sifat", s3: "Hingga 3 Anjing", s4: "Butuh D.G. Level 12", s5: "Biaya adopsi 500g" },
    unlock: {
      title: "Cara Membuka Hobi Perawatan Anjing",
      intro: "Anjing membutuhkan tiga prasyarat sebelum Mrs. Joan menawarkan adopsi. Rencanakan dari awal — ini membutuhkan beberapa hari bermain.",
      step1: "Capai Level 12 D.G. Member dengan menyelesaikan Resident Requests setiap hari.",
      step2: "Buka dan selesaikan tutorial Perawatan Kucing dengan Mrs. Joan terlebih dahulu — ini adalah prasyarat wajib.",
      step3: "Kunjungi Mrs. Joan di Pusat Adopsi dan tukarkan satu Hobby Expansion Ticket untuk mengaktifkan Perawatan Anjing.",
      timeNote: "⏱ Perkirakan 3–5 hari bermain rutin untuk mencapai Level 12. Perawatan Kucing terbuka lebih awal."
    },
    adoption: {
      title: "Cara Kerja Sistem Adopsi Anjing",
      rotationTitle: "Rotasi Harian",
      rotationDesc: "Mrs. Joan menampilkan 3 anjing acak (dan 3 kucing) setiap hari. Pilihan direset setiap reset server harian. Tidak ada reroll — jika tidak suka, kembali besok.",
      howToTitle: "Cara Mengadopsi",
      step1: "Dekati seekor anjing di pusat adopsi dan pilih Adopsi.",
      step2: "Bayar biaya pemeriksaan fisik 500g.",
      step3: "Beri nama anjingmu — kamu bisa menggantinya nanti kapan saja.",
      step4: "Anjingmu langsung dikirim ke rumahmu.",
      slotsTitle: "Berapa Banyak Anjing yang Bisa Kamu Punya?",
      slotRows: [
        { milestone: "Perawatan Anjing Level 1", dogs: "1 anjing" },
        { milestone: "Perawatan Anjing Level 4", dogs: "2 anjing" },
        { milestone: "Perawatan Anjing Level 8", dogs: "3 anjing" }
      ],
      warning: "⚠️ Anjing tidak bisa dikembalikan. Penitipan biayanya 20.000g tapi tidak menghapus mereka secara permanen. Pilih dengan hati-hati.",
      tipTitle: "Tips Mendapatkan Ras yang Diinginkan",
      tip1: "Kunjungi pusat adopsi setiap hari — rotasinya sepenuhnya acak.",
      tip2: "Lihat kartu ID anjing sebelum mengadopsi — menampilkan ras, sifat, bulu, dan warna mata.",
      tip3: "Adopsi segera saat ras yang kamu inginkan muncul — tidak akan ada besok.",
      tip4: "Ras langka dilaporkan lebih sering muncul saat event musiman."
    },
    breeds: {
      title: "Semua 11 Ras Anjing di Heartopia",
      note: "Ras TIDAK mempengaruhi statistik atau kemampuan — hanya menentukan bentuk tubuh dan penampilan dasar. Semua ras bisa mempelajari semua trik.",
      thBreed: "Ras", thSize: "Ukuran", thDesc: "Deskripsi", thNote: "Unggulan",
      rows: [
        { breed: "Corgi", size: "Kecil", desc: "Kaki pendek, kepribadian besar. Terkenal dengan pose sploot dan pantat bulat.", note: "Ras paling banyak diminta" },
        { breed: "Poodle", size: "Kecil–Sedang", desc: "Bulu keriting elegan berwarna putih standar. Tampak cerdas dan anggun.", note: "Siluet unik" },
        { breed: "Beagle", size: "Sedang", desc: "Telinga terkulai dan wajah ekspresif. Anjing pemburu klasik yang ramah.", note: "Bagus untuk pemula" },
        { breed: "Shiba Inu", size: "Kecil–Sedang", desc: "Wajah seperti rubah dan sikap mandiri. Tampilan Doge yang ikonik.", note: "Ras kecil paling populer" },
        { breed: "Rural Dog", size: "Sedang", desc: "Jenis anjing campuran yang setia, juga dikenal sebagai Gardening Dog. Kuat.", note: "Jarang di rotasi" },
        { breed: "Spotted Dog", size: "Sed–Besar", desc: "Bintik hitam-putih ala Dalmatian. Energi tinggi, tampilan mencolok.", note: "Pola mencolok" },
        { breed: "Golden Retriever", size: "Besar", desc: "Bulu emas panjang, ekspresi selalu bahagia. Yang paling ramah.", note: "Membawa Kantong Emas" },
        { breed: "Labrador Retriever", size: "Besar", desc: "Bulu pendek, tubuh kekar. Atletis dan setia.", note: "Bagus untuk pemain aktif" },
        { breed: "Shepherd Dog", size: "Besar", desc: "Terlihat seperti German Shepherd. Cerdas dan waspada.", note: "Tampilan pelindung kuat" },
        { breed: "Rottweiler", size: "Besar", desc: "Tubuh berotot dengan tanda hitam-coklat yang khas.", note: "Kehadiran visual yang kuat" },
        { breed: "Sled Dog", size: "Besar", desc: "Penampilan Husky seperti serigala. Sering memiliki sifat Energetic.", note: "Sering di event musim dingin" }
      ],
      bestTitle: "Ras Mana yang Terbaik?",
      bestDesc: "Untuk farming emas, prioritaskan Golden Retriever — Golden dengan ikatan tinggi membawa Kantong Emas sebagai hadiah harian. Untuk perawatan mudah, cari ras apapun dengan sifat Sluggish + Indifferent."
    },
    traits: {
      title: "Semua 11 Sifat Kepribadian",
      intro: "Setiap anjing mendapat tepat 2 sifat acak saat muncul. Keduanya terlihat di kartu ID sebelum adopsi.",
      note: "Ras TIDAK menentukan sifat. Corgi dan Rottweiler bisa mendapat kombinasi sifat yang sama.",
      thTrait: "Sifat", thBehavior: "Perilaku", thCare: "Tingkat Perawatan",
      rows: [
        { trait: "Chatterbox", behavior: "Sering menggonggong; bisa mengingatkan tentang item di sekitar.", care: "Sedang" },
        { trait: "Clingy", behavior: "Mengikutimu di rumah; kemungkinan lebih besar merusak furnitur saat bosan.", care: "Tinggi" },
        { trait: "Energetic", behavior: "Ingin banyak bermain dan jalan; kelaparan turun lebih cepat.", care: "Tinggi" },
        { trait: "Indifferent", behavior: "Perilaku netral; mudah dikelola.", care: "Rendah" },
        { trait: "Lone Wolf", behavior: "Lebih suka sendiri; butuh lebih sedikit interaksi.", care: "Rendah" },
        { trait: "Naughty", behavior: "Lebih cenderung nakal; merusak furnitur jika ditinggal terlalu lama.", care: "Menantang" },
        { trait: "Quiet", behavior: "Jarang membuat kebisingan; kehadiran yang tenang di rumah.", care: "Rendah" },
        { trait: "Sensitive", behavior: "Pemakan pilihan; tidak menerima semua jenis makanan.", care: "Sedang" },
        { trait: "Sluggish", behavior: "Kelaparan turun lebih lambat; aktivitas rendah — butuh lebih sedikit makan.", care: "Termudah" },
        { trait: "Sociable", behavior: "Butuh interaksi sering; suasana hati turun tanpa perhatian.", care: "Tinggi" },
        { trait: "Unsociable", behavior: "Ingin interaksi minimal; mudah dirawat.", care: "Rendah" }
      ],
      tipsTitle: "Tips Sifat",
      tip1: "Kombinasi termudah: Sluggish + Indifferent atau Sluggish + Lone Wolf — usaha harian minimal.",
      tip2: "Kombinasi tersulit: Naughty + Clingy — ekspektasi kerusakan furnitur dan perhatian konstan.",
      tip3: "Sifat tidak mempengaruhi tingkat hadiah — setiap kombinasi bisa memberi hadiah yang sama."
    },
    appearance: {
      title: "Variasi Bulu dan Mata",
      intro: "Penampilan setiap anjing berasal dari empat lapisan independen, menciptakan ratusan kombinasi unik.",
      colorsTitle: "Warna Bulu", colors: "Hitam · Putih · Krem · Coklat · Emas · Abu-abu · Tiga Warna",
      patternsTitle: "Pola Bulu", patterns: "Polos · Berbintik · Brindle · Merle · Parti-color · Tuxedo · Sable",
      eyeColorsTitle: "Warna Mata", eyeColors: "Coklat (paling umum) · Kuning keemasan · Biru · Hijau · Heterokromia (dua warna — paling langka)",
      eyeStylesTitle: "Gaya Mata", eyeStyles: "Bulat · Almond · Kancing",
      totalNote: "Komunitas memperkirakan 200–500+ penampilan unik yang mungkin. Heterokromia adalah variasi mata paling langka."
    },
    care: {
      title: "Perawatan Anjing Harian — Cara Membangun Ikatan",
      intro: "Level ikatan menentukan seberapa sering anjingmu membawa hadiah. Gunakan app Pet di jam tangan dalam game untuk memantau rasa lapar, energi, dan kebahagiaan.",
      feed: { icon: "🍖", title: "Memberi Makan", desc: "Ketuk ikon mangkuk untuk memberi makan. Anjing dengan sifat Sensitive mungkin menolak makanan tertentu." },
      play: { icon: "🎾", title: "Bermain", desc: "Gunakan mainan untuk bermain. Membangun kebahagiaan lebih cepat dari sekadar memberi makan." },
      bathe: { icon: "🛁", title: "Memandikan", desc: "Saat kotor, pilih Pet Wash. Ikuti proses 3 tahap: cuci, bilas, keringkan." },
      train: { icon: "🎓", title: "Melatih", desc: "Ajarkan perintah untuk mendapatkan ikatan dan XP paling efisien. Mendapatkan bintang Doggie Time Collection." },
      goOut: { icon: "🚶", title: "Keluar", desc: "Ajak anjingmu menjelajahi kota. Jika kamu terlalu jauh, mereka otomatis pulang." }
    },
    training: {
      title: "Semua Perintah dan Trik Pelatihan",
      intro: "Melatih adalah investasi harian terbaik — membangun ikatan, mendapat XP, dan membuka hadiah eksklusif.",
      thCommand: "Perintah", thEffect: "Efek", thPriority: "Prioritas",
      rows: [
        { command: "Seek Treasure", effect: "Anjing mencari item tersembunyi saat kamu bermain — penemuan item pasif.", priority: "Latih Pertama 🔴" },
        { command: "Give Paw", effect: "Anjing menawarkan cakarnya. Meningkatkan meter ikatan.", priority: "Sedang 🟡" },
        { command: "Shake Head", effect: "Anjing menggelengkan kepala. Mendapat bintang koleksi.", priority: "Sedang 🟡" },
        { command: "Fetch", effect: "Anjing mengambil item yang dilempar.", priority: "Sedang 🟡" }
      ],
      howTitle: "Cara Kerja Pelatihan",
      howDesc: "Pilih Latih dari menu interaksi. Amati gerakan anjing dan tepuk tangan (benar) atau tegur (salah). Setiap sesi berhasil memberikan bintang Doggie Time Collection yang membuka kostum, mata uang, dan item eksklusif.",
      tip: "🔴 Prioritas: Ajarkan Seek Treasure pertama. Ini satu-satunya perintah dengan manfaat gameplay nyata."
    },
    levels: {
      title: "Hadiah Level — Hobi Perawatan Anjing",
      intro: "Dapatkan XP dengan memberi makan, bermain, memandikan, dan melatih anjingmu. Habiskan Hobby Upgrade Tickets untuk naik level.",
      thLevel: "Level", thReward: "Hadiah",
      rows: [
        { level: "1", reward: "Dog Moment 1 · Dog Arrives! 1 — adopsi anjing pertama" },
        { level: "2", reward: "Resep Pupuk Buatan Tangan" },
        { level: "3", reward: "Mainan Sandbag · Dog Moment 2" },
        { level: "4", reward: "Energy Dog Food tersedia · Dog Arrives! 2 — adopsi anjing ke-2" },
        { level: "5", reward: "Dog Moment 3 · Auto-Feed 1 — pemberi makan otomatis terbuka" },
        { level: "6", reward: "Dog Moment 4" },
        { level: "7", reward: "Dog Moment 5" },
        { level: "8", reward: "Auto-Feed 2 · Dog Arrives! 3 — adopsi anjing ke-3" },
        { level: "9", reward: "Dog Moment 6 · Aksi Come and Play terbuka" },
        { level: "10", reward: "Dog Moment 7" }
      ],
      note: "Tonggak penting: Level 4 (anjing ke-2), Level 5 (Auto-Feed — tidak ada lagi anjing kelaparan offline), Level 8 (slot anjing ke-3)."
    },
    tips: { title: "Tips Pro untuk Pemilik Anjing", items: ["Adopsi segera saat ras yang diinginkan muncul — rotasi acak tanpa reroll.", "Auto-Feed di Level 5 sangat mengubah permainan. Buka sesegera mungkin.", "Ajarkan Seek Treasure pertama — satu-satunya trik dengan manfaat gameplay nyata.", "Anjing dengan ikatan tinggi membawa lebih banyak hadiah. Interaksi harian sangat berarti.", "Anjing bermata Heterokromia langka — layak dijaga terlepas dari rasnya."] },
    faq: {
      title: "Pertanyaan yang Sering Diajukan",
      q1: "Berapa banyak ras anjing di Heartopia?", a1: "11 ras yang dikonfirmasi: Beagle, Corgi, Golden Retriever, Labrador Retriever, Poodle, Rottweiler, Rural Dog, Shepherd Dog, Shiba Inu, Sled Dog, dan Spotted Dog. Dengan pola bulu dan kepribadian, diperkirakan ada 200–500+ penampilan unik.",
      q2: "Apakah saya perlu mengadopsi kucing sebelum mendapat anjing?", a2: "Kamu harus menyelesaikan tutorial Perawatan Kucing dengan Mrs. Joan — tetapi tidak perlu benar-benar mengadopsi kucing. Menyelesaikan tutorial sudah cukup untuk membuka Perawatan Anjing.",
      q3: "Apakah ras mempengaruhi statistik game?", a3: "Tidak. Semua 11 ras memiliki statistik yang identik dan bisa mempelajari semua trik secara setara. Perbedaan ras murni visual.",
      q4: "Bagaimana cara mendapatkan ras tertentu?", a4: "Periksa pusat adopsi setiap hari — rotasi sepenuhnya acak tanpa reroll. Ras yang kamu inginkan akan muncul pada akhirnya.",
      q5: "Bisakah saya memiliki lebih dari satu anjing?", a5: "Ya — hingga 3 anjing. Slot kedua terbuka di Level 4 dan yang ketiga di Level 8 Perawatan Anjing.",
      q6: "Bisakah saya mengembalikan anjing yang tidak saya inginkan?", a6: "Saat ini tidak bisa. Anjing tidak dapat dikembalikan ke tempat penampungan. Satu-satunya pilihan adalah penitipan seharga 20.000g — tetapi mereka tetap menjadi bagian dari rumah tanggamu secara permanen.",
      q7: "Apakah kucing dan anjing berinteraksi satu sama lain?", a7: "Ya! Jika kamu memiliki kedua spesies, mereka menghasilkan animasi interaksi yang ramah. Hewan peliharaan dengan sifat Sociable paling sering memulai interaksi antar spesies."
    },
    related: { title: "Panduan Terkait", r1: "🐱 Panduan Perawatan Kucing", r2: "🎣 Panduan Memancing", r3: "🐛 Panduan Menangkap Serangga", r4: "🏠 Rumah & Cetak Biru", r5: "🎁 Kode Redeem" }
  }
}
};

const locales = ['en','th','pt','es','id'];
for(const locale of locales){
  const filePath = `messages/${locale}.json`;
  const d = JSON.parse(fs.readFileSync(filePath,'utf8'));
  // Add navbar.guideDog
  d.navbar.guideDog = data[locale].navbar.guideDog;
  // Add dogBreeds section
  d.dogBreeds = data[locale].dogBreeds;
  fs.writeFileSync(filePath, JSON.stringify(d, null, 4), 'utf8');
  console.log(`${locale.toUpperCase()} ✓`);
}
console.log('Done!');
