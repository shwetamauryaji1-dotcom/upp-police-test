const questions = [
  // ✅ QUESTION 1
  {
    question: "यदि किसी संख्या का 25% = 180 है, तो वह संख्या क्या होगी?",
    options: ["540", "640", "720", "800"],
    correct: 3,
    topic: "Percentage",
    explanation: "माना संख्या x है। x * 25/100 = 180 => x = 180 * 4 = 720।"
  },
  // ✅ QUESTION 2
  {
    question: "दो संख्याओं का अनुपात 3 : 5 है। यदि उनका योग 160 है, तो बड़ी संख्या क्या होगी?",
    options: ["60", "90", "100", "120"],
    correct: 3,
    topic: "Ratio",
    explanation: "3x + 5x = 160 => 8x = 160 => x = 20। बड़ी संख्या = 5 * 20 = 100।"
  },
  // ✅ QUESTION 3
  {
    question: "₹8000 पर 2 वर्ष का साधारण ब्याज ₹1600 है। वार्षिक ब्याज दर क्या होगी?",
    options: ["8%", "9%", "10%", "12%"],
    correct: 3,
    topic: "SI",
    explanation: "R = (SI * 100) / (P * T) => (1600 * 100) / (8000 * 2) = 10%।"
  },
  // ✅ QUESTION 4
  {
    question: "A अकेले किसी कार्य को 12 दिनों में करता है और B उसे 18 दिनों में। दोनों मिलकर कार्य कितने दिनों में करेंगे?",
    options: ["6 दिन", "7.2 दिन", "9 दिन", "10 दिन"],
    correct: 2,
    topic: "Time & Work",
    explanation: "समय = (A * B) / (A + B) => (12 * 18) / 30 = 216 / 30 = 7.2 दिन।"
  },
  // ✅ QUESTION 5
  {
    question: "श्रृंखला को पूरा करें: 2, 6, 12, 20, ?",
    options: ["28", "30", "32", "36"],
    correct: 2,
    topic: "Series",
    explanation: "अंतर: +4, +6, +8, अगला +10 होगा। 20 + 10 = 30।"
  },
  // ✅ QUESTION 6
  {
    question: "यदि CAT को DBU लिखा जाए, तो DOG को कैसे लिखा जाएगा?",
    options: ["EPH", "EPI", "FPH", "FOH"],
    correct: 1,
    topic: "Coding-Decoding",
    explanation: "प्रत्येक अक्षर में +1 किया गया है। D+1=E, O+1=P, G+1=H।"
  },
  // ✅ QUESTION 7
  {
    question: "A, B का भाई है। C, A की माता है। D, C का पिता है। D का B से क्या संबंध है?",
    options: ["पिता", "दादा/नाना", "मामा", "चाचा"],
    correct: 2,
    topic: "Blood Relation",
    explanation: "माता के पिता को नाना (Maternal Grandfather) कहते हैं।"
  },
  // ✅ QUESTION 8
  {
    question: "राम पूर्व की ओर 10 मीटर चलता है, फिर दाईं ओर मुड़कर 5 मीटर चलता है। वह प्रारंभिक बिंदु से किस दिशा में है?",
    options: ["पूर्व", "दक्षिण-पूर्व", "उत्तर-पूर्व", "दक्षिण"],
    correct: 2,
    topic: "Direction",
    explanation: "पूर्व + दक्षिण दिशा का संयोजन 'दक्षिण-पूर्व' (South-East) कहलाता है।"
  },
  // ✅ QUESTION 9
  {
    question: "कथन: सभी पेन स्याही हैं। कुछ स्याही किताबें हैं। निष्कर्ष: कुछ पेन किताबें हैं।",
    options: ["निष्कर्ष सही है", "निष्कर्ष गलत है", "निष्कर्ष निश्चित नहीं", "कोई नहीं"],
    correct: 3,
    topic: "Syllogism",
    explanation: "पेन और किताब के बीच कोई सीधा संबंध नहीं दिया गया है।"
  },
  // ✅ QUESTION 10
  {
    question: "उत्तर की ओर मुख किए व्यक्ति बाईं ओर मुड़ता है। नई दिशा क्या होगी?",
    options: ["पूर्व", "पश्चिम", "उत्तर", "दक्षिण"],
    correct: 2,
    topic: "Direction",
    explanation: "उत्तर से 90 डिग्री घड़ी की उल्टी दिशा (Anti-clockwise) पश्चिम होती है।"
  },
  // ✅ QUESTION 11
  {
    question: "एक व्यक्ति 20 किमी/घंटा की गति से चलता है। 3 घंटे में वह कितनी दूरी तय करेगा?",
    options: ["40 किमी", "50 किमी", "60 किमी", "70 किमी"],
    correct: 3,
    topic: "Speed & Distance",
    explanation: "दूरी = चाल * समय => 20 * 3 = 60 किमी।"
  },
  // ✅ QUESTION 12
  {
    question: "श्रृंखला में अगली संख्या क्या होगी: 5, 10, 20, 40, ?",
    options: ["60", "70", "80", "100"],
    correct: 3,
    topic: "Series",
    explanation: "प्रत्येक संख्या को 2 से गुणा किया जा रहा है। 40 * 2 = 80।"
  },
  // ✅ QUESTION 13
  {
    question: "यदि A = 1, B = 2, तो Z = ?",
    options: ["24", "25", "26", "27"],
    correct: 3,
    topic: "Coding",
    explanation: "यह वर्णमाला के अक्षरों का स्थानीय मान (Place Value) है।"
  },
  // ✅ QUESTION 14
  {
    question: "पिता पुत्र से 30 वर्ष बड़ा है। यदि पुत्र की आयु 10 वर्ष है, तो पिता की आयु क्या होगी?",
    options: ["30", "35", "40", "45"],
    correct: 3,
    topic: "Age",
    explanation: "10 + 30 = 40 वर्ष।"
  },
  // ✅ QUESTION 15
  {
    question: "एक वस्तु ₹500 में खरीदकर ₹600 में बेची गई। लाभ प्रतिशत क्या है?",
    options: ["10%", "20%", "25%", "15%"],
    correct: 2,
    topic: "Profit & Loss",
    explanation: "लाभ = 100। लाभ% = (100/500)*100 = 20%।"
  },
  // ✅ QUESTION 16
  {
    question: "प्रथम 5 प्राकृतिक संख्याओं का औसत क्या होगा?",
    options: ["2", "2.5", "3", "4"],
    correct: 3,
    topic: "Average",
    explanation: "(1+2+3+4+5)/5 = 15/5 = 3।"
  },
  // ✅ QUESTION 17
  {
    question: "150 मीटर लंबी ट्रेन 54 किमी/घंटा की चाल से एक खंभे को कितने समय में पार करेगी?",
    options: ["10 सेकंड", "12 सेकंड", "15 सेकंड", "20 सेकंड"],
    correct: 1,
    topic: "Train",
    explanation: "54 किमी/घंटा = 15 मी/से। समय = 150/15 = 10 सेकंड।"
  },
  // ✅ QUESTION 18
  {
    question: "यदि 1 जनवरी 2024 को सोमवार था, तो 31 दिसंबर 2024 को क्या दिन होगा?",
    options: ["सोमवार", "मंगलवार", "बुधवार", "रविवार"],
    correct: 2,
    topic: "Calendar",
    explanation: "2024 एक लीप वर्ष है, इसलिए साल का आखिरी दिन पहले दिन से एक दिन आगे होगा।"
  },
  // ✅ QUESTION 19
  {
    question: "लुप्त पद ज्ञात करें: 1, 4, 9, 16, ?",
    options: ["20", "24", "25", "36"],
    correct: 3,
    topic: "Series",
    explanation: "यह वर्गों की श्रृंखला है (1², 2², 3², 4², 5²=25)।"
  },
  // ✅ QUESTION 20
  {
    question: "विषम शब्द चुनिए:",
    options: ["जनवरी", "मार्च", "जुलाई", "सितंबर"],
    correct: 4,
    topic: "Odd One Out",
    explanation: "सितंबर में 30 दिन होते हैं, बाकी सब में 31 दिन।"
  },
  // ✅ QUESTION 21
  {
    question: "यदि '+' का अर्थ 'x' और 'x' का अर्थ '-' हो, तो 5 + 4 x 10 = ?",
    options: ["10", "20", "30", "40"],
    correct: 1,
    topic: "Mathematical Operations",
    explanation: "5 * 4 - 10 = 20 - 10 = 10।"
  },
  // ✅ QUESTION 22
  {
    question: "एक पासे के विपरीत फलक पर क्या होगा यदि 1 के पास 2 और 3 हैं?",
    options: ["4", "5", "6", "जानकारी अधूरी है"],
    correct: 4,
    topic: "Dice",
    explanation: "पासे की पूरी स्थिति के बिना विपरीत फलक निश्चित नहीं किया जा सकता।"
  },
  // ✅ QUESTION 23
  {
    question: "दीवार घड़ी में 3:00 बजे हैं। घंटे और मिनट की सुई के बीच कोण क्या होगा?",
    options: ["45°", "90°", "180°", "120°"],
    correct: 2,
    topic: "Clock",
    explanation: "3 बजे सुइयां लंबवत होती हैं, जो 90° का कोण बनाती हैं।"
  },
  // ✅ QUESTION 24
  {
    question: "A, B से लंबा है लेकिन C से छोटा है। सबसे लंबा कौन है?",
    options: ["A", "B", "C", "तय नहीं कर सकते"],
    correct: 3,
    topic: "Ranking",
    explanation: "क्रम: C > A > B। अतः C सबसे लंबा है।"
  },
  // ✅ QUESTION 25
  {
    question: "एक आयत की लंबाई 10cm और चौड़ाई 5cm है। क्षेत्रफल क्या होगा?",
    options: ["15", "50", "30", "25"],
    correct: 2,
    topic: "Mensuration",
    explanation: "क्षेत्रफल = ल. * चौ. = 10 * 5 = 50 वर्ग सेमी।"
  },
  // ✅ QUESTION 26
  {
    question: "किसी कूट भाषा में 'WATER' को 'XBUfs' लिखा जाता है, तो 'FIRE' का कोड क्या होगा?",
    options: ["GJsf", "GJSF", "HKtg", "EHQD"],
    correct: 2,
    topic: "Coding",
    explanation: "प्रत्येक अक्षर में +1 किया गया है।"
  },
  // ✅ QUESTION 27
  {
    question: "यदि 5 आदमी एक काम 10 दिन में करते हैं, तो 10 आदमी वही काम कितने दिन में करेंगे?",
    options: ["2", "5", "10", "20"],
    correct: 2,
    topic: "Time & Work",
    explanation: "M1D1 = M2D2 => 5 * 10 = 10 * D2 => D2 = 5 दिन।"
  },
  // ✅ QUESTION 28
  {
    question: "एक कक्षा में 40 छात्र हैं। राम का स्थान ऊपर से 15वां है। नीचे से उसका स्थान क्या होगा?",
    options: ["25वां", "26वां", "24वां", "27वां"],
    correct: 2,
    topic: "Ranking",
    explanation: "कुल + 1 - ऊपर से स्थान = 40 + 1 - 15 = 26वां।"
  },
  // ✅ QUESTION 29
  {
    question: "8, 27, 64, 125, ?",
    options: ["216", "250", "150", "175"],
    correct: 1,
    topic: "Series",
    explanation: "यह घनों (Cubes) की श्रृंखला है (2³, 3³, 4³, 5³, 6³=216)।"
  },
  // ✅ QUESTION 30
  {
    question: "डॉक्टर : अस्पताल :: शिक्षक : ?",
    options: ["छात्र", "किताब", "स्कूल", "कक्षा"],
    correct: 3,
    topic: "Analogy",
    explanation: "डॉक्टर अस्पताल में कार्य करता है, शिक्षक स्कूल में।"
  },
  // ✅ QUESTION 31
  {
    question: "एक व्यक्ति अपनी आय का 80% खर्च करता है और ₹2000 बचाता है। उसकी आय क्या है?",
    options: ["8000", "10000", "12000", "15000"],
    correct: 2,
    topic: "Percentage",
    explanation: "बचत = 20%। 20% = 2000 => 100% = 10000।"
  },
  // ✅ QUESTION 32
  {
    question: "7, 9, 13, 21, ?",
    options: ["29", "31", "37", "40"],
    correct: 3,
    topic: "Series",
    explanation: "अंतर दुगुना हो रहा है: +2, +4, +8, अगला +16 होगा। 21 + 16 = 37।"
  },
  // ✅ QUESTION 33
  {
    question: "एक वृत्त की त्रिज्या 7cm है। उसकी परिधि क्या होगी? (π = 22/7)",
    options: ["22", "44", "88", "154"],
    correct: 2,
    topic: "Mensuration",
    explanation: "परिधि = 2πr = 2 * 22/7 * 7 = 44cm।"
  },
  // ✅ QUESTION 34
  {
    question: "उत्तर प्रदेश पुलिस का सर्वोच्च अधिकारी कौन होता है?",
    options: ["DGP", "SP", "IG", "DIG"],
    correct: 1,
    topic: "Mental Aptitude",
    explanation: "DGP (Director General of Police) राज्य पुलिस का मुखिया होता है।"
  },
  // ✅ QUESTION 35
  {
    question: "अंधेरे में भागते अपराधी को पकड़ने के लिए आप क्या करेंगे?",
    options: ["गोली चलाएंगे", "चिल्लाएंगे", "पीछा करेंगे और बैकअप मांगेंगे", "छोड़ देंगे"],
    correct: 3,
    topic: "Mental Aptitude",
    explanation: "यह एक पुलिस अधिकारी के लिए सबसे विवेकपूर्ण कदम है।"
  },
  // ✅ QUESTION 36
  {
    question: "दो संख्याओं का HCF 12 और LCM 72 है। यदि एक संख्या 24 है, तो दूसरी क्या होगी?",
    options: ["36", "48", "60", "72"],
    correct: 1,
    topic: "Number System",
    explanation: "HCF * LCM = A * B => 12 * 72 = 24 * B => B = 36।"
  },
  // ✅ QUESTION 37
  {
    question: "विषम आकृति का चयन करें:",
    options: ["वर्ग", "आयत", "वृत्त", "त्रिभुज"],
    correct: 3,
    topic: "Classification",
    explanation: "वृत्त में भुजाएँ (Sides) नहीं होती हैं।"
  },
  // ✅ QUESTION 38
  {
    question: "यदि दक्षिण को पूर्व कहा जाए, तो उत्तर को क्या कहा जाएगा?",
    options: ["पश्चिम", "दक्षिण", "पूर्व", "उत्तर"],
    correct: 1,
    topic: "Direction Sense",
    explanation: "दिशाओं को 90 डिग्री घड़ी की विपरीत दिशा में घुमाया गया है।"
  },
  // ✅ QUESTION 39
  {
    question: "₹1200 का 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज क्या होगा?",
    options: ["240", "252", "260", "264"],
    correct: 2,
    topic: "CI",
    explanation: "ब्याज = 1200 * (1.1 * 1.1) - 1200 = 1452 - 1200 = 252।"
  },
  // ✅ QUESTION 40
  {
    question: "दिए गए शब्दों को शब्दकोश क्रम में व्यवस्थित करें: Apple, Application, Apply",
    options: ["1,2,3", "2,1,3", "1,3,2", "3,2,1"],
    correct: 1,
    topic: "Dictionary Order",
    explanation: "Alphabetical क्रम के अनुसार Apple सबसे पहले आएगा।"
  },
  // ✅ QUESTION 41
  {
    question: "3, 5, 9, 17, ?",
    options: ["25", "33", "35", "40"],
    correct: 2,
    topic: "Series",
    explanation: "प्रत्येक अंतर पिछले से दुगुना है: +2, +4, +8, अगला +16 होगा। 17+16=33।"
  },
  // ✅ QUESTION 42
  {
    question: "एक संख्या के 3/4 का मान 60 है। संख्या का आधा क्या होगा?",
    options: ["30", "40", "45", "80"],
    correct: 2,
    topic: "Fractions",
    explanation: "संख्या = (60*4)/3 = 80। आधा = 40।"
  },
  // ✅ QUESTION 43
  {
    question: "दर्पण में देखने पर घड़ी 9:30 दिखाती है। वास्तविक समय क्या है?",
    options: ["2:30", "3:30", "4:30", "1:30"],
    correct: 1,
    topic: "Clock & Mirror",
    explanation: "दर्पण समय को 11:60 से घटाएं। 11:60 - 9:30 = 2:30।"
  },
  // ✅ QUESTION 44
  {
    question: "यदि 'MAN' = 28, तो 'BOY' = ?",
    options: ["42", "40", "38", "36"],
    correct: 1,
    topic: "Coding",
    explanation: "MAN: 13+1+14 = 28। BOY: 2+15+25 = 42।"
  },
  // ✅ QUESTION 45
  {
    question: "20% और 10% की दो क्रमिक छूटें किस एकल छूट के बराबर हैं?",
    options: ["30%", "28%", "25%", "22%"],
    correct: 2,
    topic: "Discount",
    explanation: "x+y - xy/100 => 20+10 - (200/100) = 28%।"
  },
  // ✅ QUESTION 46
  {
    question: "वेन आरेख चुनें: भारत, उत्तर प्रदेश, लखनऊ",
    options: ["तीन अलग गोले", "एक के अंदर एक तीन गोले", "दो गोले जुड़े हुए", "कोई नहीं"],
    correct: 2,
    topic: "Venn Diagram",
    explanation: "लखनऊ UP में है और UP भारत में।"
  },
  // ✅ QUESTION 47
  {
    question: "3 घंटे और 40 मिनट में कुल कितने मिनट होते हैं?",
    options: ["180", "200", "220", "240"],
    correct: 3,
    topic: "Time",
    explanation: "3 * 60 + 40 = 180 + 40 = 220 मिनट।"
  },
  // ✅ QUESTION 48
  {
    question: "एक आयताकार मैदान का परिमाप 60m है। यदि लंबाई 20m है, तो चौड़ाई क्या होगी?",
    options: ["5m", "10m", "15m", "20m"],
    correct: 2,
    topic: "Mensuration",
    explanation: "2(L+B) = 60 => 20+B = 30 => B = 10m।"
  },
  // ✅ QUESTION 49
  {
    question: "12, 15, 21, 30, ?",
    options: ["39", "42", "45", "48"],
    correct: 2,
    topic: "Series",
    explanation: "अंतर 3 का गुणज है: +3, +6, +9, अगला +12 होगा। 30+12=42।"
  },
  // ✅ QUESTION 50
  {
    question: "यदि 'कल के बाद' शुक्रवार है, तो 'कल से पहले' क्या दिन था?",
    options: ["सोमवार", "मंगलवार", "बुधवार", "रविवार"],
    correct: 1,
    topic: "Calendar",
    explanation: "कल के बाद शुक्रवार => कल गुरुवार => आज बुधवार => कल (बीता) मंगलवार => कल से पहले सोमवार।"
  }
];
