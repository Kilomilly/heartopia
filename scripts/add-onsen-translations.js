const fs = require('fs');

// Thai translations
const thTranslations = {
    "metaTitle": "ไข่ออนเซ็น Heartopia: ทำภารกิจสัญญาไข่ออนเซ็นให้สำเร็จ",
    "metaDesc": "เชี่ยวชาญการล่าไข่ออนเซ็น Heartopia! คู่มือของเราเผยตำแหน่งไข่ทั้งหมดและขั้นตอนการทำภารกิจสัญญาไข่ออนเซ็นให้สำเร็จวันนี้",
    "breadcrumb": "ภารกิจไข่ออนเซ็น",
    "badge": "อีเว้นท์จำกัดเวลา",
    "heroTitle": "คู่มือล่าไข่ Heartopia: ค้นหาไข่ออนเซ็นทุกตัวและทำภารกิจให้สำเร็จ",
    "heroDesc": "อัปเดต 2026 ล่าสุดได้นำเสนอความท้าทายลึกลับที่กำลังเป็นกระแสในชุมชน: อีเว้นท์ไข่ออนเซ็น Heartopia กระจัดกระจายอยู่บนยอดเขาออนเซ็นที่มีไอน้ำพวยพุ่ง ของสะสมหายากเหล่านี้ไม่ใช่แค่ไอเทมธรรมดา แต่เป็นกุญแจสำคัญในการทำภารกิจสัญญาไข่ออนเซ็นในตำนานให้สำเร็จ",
    "intro": "ในคู่มือนี้ เราจะให้พิกัดที่แน่นอนของทุกจุดไข่ออนเซ็น Heartopia และคำแนะนำทีละขั้นตอนสำหรับภารกิจสัญญาไข่ออนเซ็น",
    "what": {
        "title": "การล่าไข่ออนเซ็น Heartopia คืออะไร?",
        "desc": "กิจกรรมไข่ออนเซ็น Heartopia เป็นอีเว้นท์สะสมของจำกัดเวลาที่ผู้เล่นต้องค้นหาจุดไข่สีส้มเรืองแสงใกล้พื้นที่ธรณีความร้อน สิ่งเหล่านี้แตกต่างจากไข่ของขวัญทั่วไปเนื่องจากมีการสั่นสะเทือนที่เป็นเอกลักษณ์และเชื่อมโยงโดยตรงกับภารกิจเรื่องราวสัญญาไข่ออนเซ็น",
        "why": {
            "title": "ทำไมคุณควรเข้าร่วม",
            "text": "การเข้าร่วมการล่าไข่ออนเซ็น Heartopia เป็นวิธีเดียวที่จะได้รับตำแหน่ง \"นักสะสมไข่\" และเพิ่มความแข็งแกร่งถาวรของตัวละครของคุณ นอกจากนี้ การทำภารกิจสัญญาไข่ออนเซ็นให้เสร็จจะปลดล็อกฉากลับลึกลับที่เผยให้เห็นเพิ่มเติมเกี่ยวกับเรื่องราวของภูเขา"
        }
    },
    "locations": {
        "title": "ตำแหน่งไข่ออนเซ็น Heartopia ทั้งหมด",
        "desc": "เพื่อทำภารกิจสัญญาไข่ออนเซ็นให้สำเร็จ คุณต้องสะสมไข่หลัก 6 ฟอง จุดไข่ออนเซ็น Heartopia เหล่านี้ซ่อนอยู่ในเขตความสูงที่ต้องการการสำรวจอย่างระมัดระวัง",
        "lower": {
            "title": "ตำแหน่งบ่อน้ำพุล่าง (1-3)",
            "item1": "ที่ซ่อนช่องระบายไอน้ำ: ไข่ออนเซ็น Heartopia หนึ่งฟองตั้งอยู่ด้านหลังช่องระบายไอน้ำหลักที่ฐานของภูเขา",
            "item2": "เส้นทางป่าไผ่: ตามเส้นทางด้านหลังบ้านอาบน้ำ ไข่ออนเซ็น Heartopia อยู่ใต้โคมไฟหิน",
            "item3": "ช่องสะพาน: ตรวจสอบพื้นที่หินใต้สะพานไม้หลักที่นำไปสู่ทางเข้าออนเซ็น"
        },
        "high": {
            "title": "ยอดเขาสูง (4-6)",
            "item1": "ถ้ำน้ำตก: ปีนขึ้นไปครึ่งทางเพื่อค้นหาไข่ออนเซ็น Heartopia ที่ซ่อนอยู่หลังม่านน้ำตก",
            "item2": "จุดชมวิวกล้องโทรทรรศน์: ที่ยอดเขา มองเข้าไปในท่อนไม้กลวงใกล้กล้องโทรทรรศน์เพื่อหาไข่ออนเซ็น Heartopia ที่เรืองแสง",
            "item3": "จุดกองไฟของ Doris: ใกล้ป้ายรถบัสออนเซ็นที่ Doris ปรากฏตัว ค้นหาในพุ่มไม้หนาเพื่อหาไข่ออนเซ็น Heartopia ตัวสุดท้าย"
        }
    },
    "fulfill": {
        "title": "วิธีทำภารกิจสัญญาไข่ออนเซ็นให้สำเร็จ",
        "desc": "เมื่อคุณรวบรวมไอเทมไข่ออนเซ็น Heartopia ที่จำเป็นแล้ว คุณสามารถเริ่มขั้นตอนสุดท้ายของภารกิจสัญญาไข่ออนเซ็นได้ ผู้เล่นหลายคนติดอยู่ในขั้นตอนนี้เพราะข้อกำหนดของภารกิจไม่ได้ระบุไว้อย่างชัดเจนใน UI ของเกม",
        "trigger": {
            "title": "การเริ่มภารกิจ",
            "text": "ค้นหา NPC ออนเซ็นมาสเตอร์ที่ยืนอยู่ใกล้สระน้ำเดือด การส่งมอบไข่ออนเซ็น Heartopia ตัวแรกของคุณจะเริ่มภารกิจสัญญาไข่ออนเซ็นอย่างเป็นทางการ เขาจะมอบหมายให้คุณ \"อวยพร\" ไข่ที่เหลือในบ่อน้ำพุเฉพาะ"
        },
        "steps": {
            "title": "ขั้นตอนพิธีกรรมสุดท้าย",
            "step1": "การชำระล้าง: จุ่มไข่ออนเซ็น Heartopia แต่ละฟองลงใน \"บ่อน้ำพุศักดิ์สิทธิ์\" ในช่วงเช้าตรู่ (เวลาเซิร์ฟเวอร์ 4.00 - 6.00 น.)",
            "step2": "การถวาย: วางไข่ที่ชำระแล้วในตะกร้าหินที่ยอดเขาเพื่อเริ่มบทสรุปของภารกิจสัญญาไข่ออนเซ็น",
            "step3": "การเสร็จสิ้น: กลับไปหามาสเตอร์เพื่อรับรางวัลและเป็นพยานในตอนจบของเรื่องราวสัญญาไข่ออนเซ็น"
        }
    },
    "tips": {
        "title": "เคล็ดลับจากผู้เชี่ยวชาญสำหรับการล่าไข่ออนเซ็น Heartopia",
        "visual": {
            "title": "สัญญาณภาพ",
            "text": "ไข่ออนเซ็น Heartopia ทุกฟองปล่อยเอฟเฟกต์อนุภาคไอน้ำจางๆ หากคุณมองไม่เห็น ลองเพิ่มการตั้งค่ากราฟิก \"เอฟเฟกต์\""
        },
        "timing": {
            "title": "เวลาเซิร์ฟเวอร์",
            "text": "พิธีกรรมสัญญาไข่ออนเซ็นมีความอ่อนไหวต่อเวลา ตรวจสอบนาฬิกาในเกมของคุณก่อนเริ่มการชำระล้าง"
        },
        "stamina": {
            "title": "การจัดการความแข็งแกร่ง",
            "text": "เนื่องจากจุดเหล่านี้อยู่ที่ความสูง นำ \"เครื่องดื่มเย็น\" มาเพื่อฟื้นฟูความแข็งแกร่งของคุณระหว่างการปีนไข่ออนเซ็น Heartopia"
        }
    },
    "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": "ภารกิจสัญญาไข่ออนเซ็นเป็นภารกิจถาวรหรือไม่?",
        "a1": "ไม่ใช่ ภารกิจสัญญาไข่ออนเซ็นเป็นส่วนหนึ่งของการอัปเดตตามฤดูกาล แม้ว่ารางวัลจะยังคงอยู่ แต่ความสามารถในการสะสมจุดไข่ออนเซ็น Heartopia อาจหายไปหลังจากฤดูกาลสิ้นสุด",
        "q2": "ฉันสามารถช่วยเพื่อนในการล่าไข่ออนเซ็น Heartopia ของพวกเขาได้หรือไม่?",
        "a2": "ได้! คุณสามารถชี้ตำแหน่งไข่ออนเซ็น Heartopia ได้ แต่ผู้เล่นแต่ละคนต้องหยิบไข่ของตัวเองเพื่อดำเนินภารกิจสัญญาไข่ออนเซ็นเฉพาะของพวกเขา",
        "q3": "จะเกิดอะไรขึ้นหากฉันทำไข่ออนเซ็น Heartopia หาย?",
        "a3": "ไม่ต้องกังวล! หากคุณทำไข่ออนเซ็น Heartopia ตกโดยไม่ตั้งใจ มันจะเกิดใหม่ที่ตำแหน่งเดิมหลังจาก 24 ชั่วโมงเพื่อให้คุณสามารถทำภารกิจสัญญาไข่ออนเซ็นต่อได้"
    },
    "relatedTitle": "คู่มือ Heartopia ที่เกี่ยวข้อง",
    "relatedMeteor": "คู่มือฝนดาวตก",
    "relatedDoris": "Doris อยู่ที่ไหน?",
    "relatedHome": "กลับหน้าแรก",
    "relatedPiano": "คู่มือเปียโน"
};

// Spanish translations
const esTranslations = {
    "metaTitle": "Huevo Onsen Heartopia: Completa la Promesa del Huevo",
    "metaDesc": "¡Domina la búsqueda del Huevo Onsen en Heartopia! Nuestra guía revela todas las ubicaciones y pasos para cumplir la Promesa del Huevo Onsen hoy.",
    "breadcrumb": "Promesa del Huevo Onsen",
    "badge": "Evento Limitado",
    "heroTitle": "Guía de Búsqueda de Huevos Heartopia: Encuentra Todos los Huevos Onsen y Completa la Misión",
    "heroDesc": "La actualización 2026 ha introducido un desafío misterioso que está en tendencia en la comunidad: el evento del Huevo Onsen Heartopia. Dispersos por los picos humeantes de la Montaña Onsen, estos coleccionables raros son más que simples objetos; son la clave para cumplir la legendaria Promesa del Huevo Onsen.",
    "intro": "En esta guía, proporcionamos las coordenadas exactas de cada nodo de Huevo Onsen Heartopia y un tutorial paso a paso para la misión de la Promesa del Huevo Onsen.",
    "what": {
        "title": "¿Qué es la Búsqueda del Huevo Onsen Heartopia?",
        "desc": "La actividad del Huevo Onsen Heartopia es un evento de colección por tiempo limitado donde los jugadores deben localizar nodos de huevos naranjas brillantes cerca de áreas geotérmicas. Estos se distinguen de los huevos de regalo estándar por su resonancia única y su conexión directa con la misión narrativa de la Promesa del Huevo Onsen.",
        "why": {
            "title": "Por Qué Deberías Participar",
            "text": "Participar en la búsqueda del Huevo Onsen Heartopia es la única forma de obtener el título \"Coleccionista de Huevos\" y aumentar la resistencia permanente de tu personaje. Además, completar la Promesa del Huevo Onsen desbloquea una escena secreta que revela más sobre la historia de la montaña."
        }
    },
    "locations": {
        "title": "Todas las Ubicaciones del Huevo Onsen Heartopia",
        "desc": "Para completar la Promesa del Huevo Onsen, debes recolectar seis huevos principales. Estos nodos de Huevo Onsen Heartopia están ocultos en zonas de gran altitud que requieren una exploración cuidadosa.",
        "lower": {
            "title": "Ubicaciones de Manantiales Inferiores (1-3)",
            "item1": "El Escondite del Respiradero de Vapor: Un Huevo Onsen Heartopia está ubicado directamente detrás del respiradero de vapor principal en la base de la montaña.",
            "item2": "Sendero del Bosque de Bambú: Sigue el camino detrás de la casa de baños; un Huevo Onsen Heartopia se encuentra bajo una linterna de piedra.",
            "item3": "La Grieta del Puente: Revisa el área rocosa bajo el puente de madera principal que conduce a la entrada del Onsen."
        },
        "high": {
            "title": "Picos de Gran Altitud (4-6)",
            "item1": "Gruta de la Cascada: Sube hasta la mitad para encontrar un Huevo Onsen Heartopia escondido detrás de la cortina de agua.",
            "item2": "Mirador del Telescopio: En la cima, mira dentro del tronco hueco cerca del telescopio para encontrar un Huevo Onsen Heartopia brillante.",
            "item3": "Lugar de la Fogata de Doris: Cerca de la parada de autobús del Onsen donde aparece Doris, busca en los arbustos espesos el último Huevo Onsen Heartopia."
        }
    },
    "fulfill": {
        "title": "Cómo Cumplir la Promesa del Huevo Onsen",
        "desc": "Una vez que hayas reunido los objetos necesarios de Huevo Onsen Heartopia, puedes comenzar la etapa final de la Promesa del Huevo Onsen. Muchos jugadores se quedan atascados en esta etapa porque los requisitos de la misión no se indican explícitamente en la interfaz del juego.",
        "trigger": {
            "title": "Activando la Misión",
            "text": "Encuentra al NPC Maestro del Onsen parado cerca de las piscinas hirvientes. Entregar tu primer Huevo Onsen Heartopia iniciará oficialmente la Promesa del Huevo Onsen. Él te encargará \"bendecir\" los huevos restantes en manantiales específicos."
        },
        "steps": {
            "title": "Los Pasos del Ritual Final",
            "step1": "Purificación: Sumerge cada Huevo Onsen Heartopia en el \"Manantial Sagrado\" durante las primeras horas de la mañana (4 AM - 6 AM hora del servidor).",
            "step2": "La Ofrenda: Coloca los huevos purificados en la cesta de piedra en el pico de la montaña para activar la conclusión de la Promesa del Huevo Onsen.",
            "step3": "Finalización: Regresa al Maestro para reclamar tus recompensas y presenciar el final de la historia de la Promesa del Huevo Onsen."
        }
    },
    "tips": {
        "title": "Consejos de Expertos para la Búsqueda del Huevo Onsen Heartopia",
        "visual": {
            "title": "Pistas Visuales",
            "text": "Cada Huevo Onsen Heartopia emite un efecto de partículas de vapor tenue; si no puedes verlo, intenta aumentar la configuración de \"Efectos\" de gráficos."
        },
        "timing": {
            "title": "Tiempo del Servidor",
            "text": "El ritual de la Promesa del Huevo Onsen es sensible al tiempo; asegúrate de verificar tu reloj en el juego antes de comenzar la purificación."
        },
        "stamina": {
            "title": "Gestión de Resistencia",
            "text": "Como estos nodos están a gran altitud, lleva \"Bebidas Heladas\" para restaurar tu resistencia durante la escalada del Huevo Onsen Heartopia."
        }
    },
    "faq": {
        "title": "Preguntas Frecuentes",
        "q1": "¿La Promesa del Huevo Onsen es una misión permanente?",
        "a1": "No, la Promesa del Huevo Onsen es parte de la actualización de temporada. Aunque las recompensas permanecen, la capacidad de recolectar los nodos de Huevo Onsen Heartopia puede desaparecer después de que termine la temporada.",
        "q2": "¿Puedo ayudar a un amigo con su búsqueda del Huevo Onsen Heartopia?",
        "a2": "¡Sí! Puedes señalar las ubicaciones del Huevo Onsen Heartopia, pero cada jugador debe recoger sus propios huevos para progresar en su misión específica de la Promesa del Huevo Onsen.",
        "q3": "¿Qué pasa si pierdo un Huevo Onsen Heartopia?",
        "a3": "¡No te preocupes! Si accidentalmente dejas caer un Huevo Onsen Heartopia, reaparecerá en su ubicación original después de 24 horas para que puedas continuar con la Promesa del Huevo Onsen."
    },
    "relatedTitle": "Guías Relacionadas de Heartopia",
    "relatedMeteor": "Guía de Lluvia de Meteoros",
    "relatedDoris": "¿Dónde Está Doris?",
    "relatedHome": "Volver al Inicio",
    "relatedPiano": "Guía de Piano"
};

// Portuguese translations
const ptTranslations = {
    "metaTitle": "Ovo Onsen Heartopia: Complete a Promessa do Ovo Onsen",
    "metaDesc": "Domine a caça ao Ovo Onsen Heartopia! Nosso guia revela todas as localizações e passos para cumprir a Promessa do Ovo Onsen hoje.",
    "breadcrumb": "Promessa do Ovo Onsen",
    "badge": "Evento Limitado",
    "heroTitle": "Guia de Caça aos Ovos Heartopia: Encontre Todos os Ovos Onsen e Complete a Missão",
    "heroDesc": "A atualização de 2026 introduziu um desafio misterioso que está em alta na comunidade: o evento do Ovo Onsen Heartopia. Espalhados pelos picos fumegantes da Montanha Onsen, esses colecionáveis raros são mais do que simples itens; eles são a chave para cumprir a lendária Promessa do Ovo Onsen.",
    "intro": "Neste guia, fornecemos as coordenadas exatas de cada nó de Ovo Onsen Heartopia e um passo a passo para a missão da Promessa do Ovo Onsen.",
    "what": {
        "title": "O Que é a Caça ao Ovo Onsen Heartopia?",
        "desc": "A atividade do Ovo Onsen Heartopia é um evento de coleta por tempo limitado onde os jogadores devem localizar nós de ovos laranjas brilhantes perto de áreas geotérmicas. Estes se distinguem dos ovos de presente padrão por sua ressonância única e sua conexão direta com a missão narrativa da Promessa do Ovo Onsen.",
        "why": {
            "title": "Por Que Você Deve Participar",
            "text": "Participar da caça ao Ovo Onsen Heartopia é a única maneira de ganhar o título \"Colecionador de Ovos\" e aumentar a resistência permanente do seu personagem. Além disso, completar a Promessa do Ovo Onsen desbloqueia uma cena secreta que revela mais sobre a história da montanha."
        }
    },
    "locations": {
        "title": "Todas as Localizações do Ovo Onsen Heartopia",
        "desc": "Para completar a Promessa do Ovo Onsen, você deve coletar seis ovos principais. Esses nós de Ovo Onsen Heartopia estão escondidos em zonas de grande altitude que requerem exploração cuidadosa.",
        "lower": {
            "title": "Localizações das Fontes Inferiores (1-3)",
            "item1": "O Esconderijo da Saída de Vapor: Um Ovo Onsen Heartopia está localizado diretamente atrás da saída de vapor principal na base da montanha.",
            "item2": "Trilha do Bosque de Bambu: Siga o caminho atrás da casa de banhos; um Ovo Onsen Heartopia fica sob uma lanterna de pedra.",
            "item3": "A Fenda da Ponte: Verifique a área rochosa sob a ponte de madeira principal que leva à entrada do Onsen."
        },
        "high": {
            "title": "Picos de Grande Altitude (4-6)",
            "item1": "Gruta da Cachoeira: Suba até a metade para encontrar um Ovo Onsen Heartopia escondido atrás da cortina d'água.",
            "item2": "Mirante do Telescópio: No topo, olhe dentro do tronco oco perto do telescópio para encontrar um Ovo Onsen Heartopia brilhante.",
            "item3": "Local da Fogueira de Doris: Perto do ponto de ônibus do Onsen onde Doris aparece, procure nos arbustos densos pelo último Ovo Onsen Heartopia."
        }
    },
    "fulfill": {
        "title": "Como Cumprir a Promessa do Ovo Onsen",
        "desc": "Depois de reunir os itens necessários de Ovo Onsen Heartopia, você pode começar a etapa final da Promessa do Ovo Onsen. Muitos jogadores ficam presos nesta etapa porque os requisitos da missão não são explicitamente indicados na interface do jogo.",
        "trigger": {
            "title": "Ativando a Missão",
            "text": "Encontre o NPC Mestre do Onsen perto das piscinas ferventes. Entregar seu primeiro Ovo Onsen Heartopia iniciará oficialmente a Promessa do Ovo Onsen. Ele lhe encarregará de \"abençoar\" os ovos restantes em fontes específicas."
        },
        "steps": {
            "title": "Os Passos do Ritual Final",
            "step1": "Purificação: Mergulhe cada Ovo Onsen Heartopia na \"Fonte Sagrada\" durante as primeiras horas da manhã (4h - 6h horário do servidor).",
            "step2": "A Oferenda: Coloque os ovos purificados na cesta de pedra no pico da montanha para ativar a conclusão da Promessa do Ovo Onsen.",
            "step3": "Conclusão: Retorne ao Mestre para reivindicar suas recompensas e testemunhar o final da história da Promessa do Ovo Onsen."
        }
    },
    "tips": {
        "title": "Dicas de Especialistas para a Caça ao Ovo Onsen Heartopia",
        "visual": {
            "title": "Pistas Visuais",
            "text": "Cada Ovo Onsen Heartopia emite um efeito de partículas de vapor tênue; se você não consegue vê-lo, tente aumentar a configuração de \"Efeitos\" de gráficos."
        },
        "timing": {
            "title": "Tempo do Servidor",
            "text": "O ritual da Promessa do Ovo Onsen é sensível ao tempo; certifique-se de verificar seu relógio no jogo antes de começar a purificação."
        },
        "stamina": {
            "title": "Gestão de Resistência",
            "text": "Como esses nós estão em grande altitude, traga \"Bebidas Geladas\" para restaurar sua resistência durante a escalada do Ovo Onsen Heartopia."
        }
    },
    "faq": {
        "title": "Perguntas Frequentes",
        "q1": "A Promessa do Ovo Onsen é uma missão permanente?",
        "a1": "Não, a Promessa do Ovo Onsen faz parte da atualização sazonal. Embora as recompensas permaneçam, a capacidade de coletar os nós de Ovo Onsen Heartopia pode desaparecer após o término da temporada.",
        "q2": "Posso ajudar um amigo com sua caça ao Ovo Onsen Heartopia?",
        "a2": "Sim! Você pode apontar as localizações do Ovo Onsen Heartopia, mas cada jogador deve pegar seus próprios ovos para progredir em sua missão específica da Promessa do Ovo Onsen.",
        "q3": "O que acontece se eu perder um Ovo Onsen Heartopia?",
        "a3": "Não se preocupe! Se você acidentalmente derrubar um Ovo Onsen Heartopia, ele reaparecerá em sua localização original após 24 horas para que você possa continuar com a Promessa do Ovo Onsen."
    },
    "relatedTitle": "Guias Relacionados de Heartopia",
    "relatedMeteor": "Guia de Chuva de Meteoros",
    "relatedDoris": "Onde Está Doris?",
    "relatedHome": "Voltar ao Início",
    "relatedPiano": "Guia de Piano"
};

// Update files
const files = [
    { lang: 'th', path: 'e:\\ship\\heartopia\\messages\\th.json', translations: thTranslations },
    { lang: 'es', path: 'e:\\ship\\heartopia\\messages\\es.json', translations: esTranslations },
    { lang: 'pt', path: 'e:\\ship\\heartopia\\messages\\pt.json', translations: ptTranslations }
];

files.forEach(({ lang, path, translations }) => {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));
    data.onsenEgg = translations;
    fs.writeFileSync(path, JSON.stringify(data, null, 4).replace(/\n/g, '\r\n'));
    console.log(`✓ Updated ${lang}.json with proper translations`);
});

console.log('\n✅ All language files updated with proper translations!');
