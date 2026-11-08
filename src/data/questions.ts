export type Topic = 
  | "Lahat ng Paksa"
  | "El Filibusterismo"
  | "Mga Sanaysay at Anotasyon"
  | "Paglalakbay sa Asya at Amerika"
  | "Pangalawang Paglalakbay sa Europa"
  | "Dapitan at Huling Araw"
  | "Talahulugan at Terminolohiya";

export interface MultipleChoiceQuestion {
  id: number;
  topic: Topic;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  // --- GROUP 1: RIZAL BILANG MANANALAYSAY & LONDON/PARIS ---
  {
    id: 1,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino ang Pilipinong bayani na nagsuri sa kasaysayan ng Pilipinas mula sa pananaw ng mga Pilipino?",
    options: ["Marcelo H. del Pilar", "Jose Rizal", "Graciano Lopez Jaena", "Antonio Luna"],
    answer: "Jose Rizal",
    explanation: "Si Jose Rizal ay nagsuri sa kasaysayan upang iwasto ang mga maling pananaw ng mga Espanyol sa sinaunang kabihasnang Pilipino."
  },
  {
    id: 2,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang orihinal na may-akda ng Sucesos de las Islas Filipinas na nilagyan ni Rizal ng anotasyon?",
    options: ["Pedro Chirino", "Antonio de Morga", "Francisco Colin", "Salvador Font"],
    answer: "Antonio de Morga",
    explanation: "Si Antonio de Morga ang may-akda ng Sucesos de las Islas Filipinas (1609)."
  },
  {
    id: 3,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Noong anong taon unang inilimbag ang Sucesos de las Islas Filipinas sa Mexico City?",
    options: ["1593", "1609", "1890", "1907"],
    answer: "1609",
    explanation: "Unang lumabas ang aklat na ito noong 1609."
  },
  {
    id: 4,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Taon kung kailan opisyal na inilathala ang anotasyong bersyon ni Rizal sa Sucesos de las Islas Filipinas?",
    options: ["1888", "1889", "1890", "1891"],
    answer: "1890",
    explanation: "Inilathala ito noong Enero 1890."
  },
  {
    id: 5,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Saang lungsod sa Pransiya inilathala ang anotasyong bersyon ng Sucesos ni Rizal?",
    options: ["Marseilles", "Paris, France", "Biarritz", "Lyon"],
    answer: "Paris, France",
    explanation: "Sa Paris inilathala ang aklat ni Morga na may anotasyon ni Rizal."
  },
  {
    id: 6,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Anong institusyong Ingles sa London ang pangunahing pinagkunan ni Rizal ng mga sangguniang pangkasaysayan?",
    options: ["British Museum", "Bodleian Library", "Madrid Royal Library", "National Archives of UK"],
    answer: "British Museum",
    explanation: "Dito sinuri ni Rizal ang mga lumang dokumento tungkol sa Pilipinas."
  },
  {
    id: 7,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Anong barko ang sinakyan ni Rizal mula New York hanggang sa makarating sa daungan ng Liverpool sa Inglatera?",
    options: ["SS City of Rome", "S.S. Melbourne", "Bapor Don Juan", "Isla de Panay"],
    answer: "SS City of Rome",
    explanation: "Lulan ng SS City of Rome, ipinakita niya ang kanyang husay sa paglalaro ng yo-yo."
  },
  {
    id: 8,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino ang mag-asawang may-ari ng tinuluyang bahay ni Rizal sa London?",
    options: ["Charles at Georgina Becket", "George at Nellie Taufer", "Juan at Paz Luna", "Edmund at Tottie Plauchut"],
    answer: "Charles at Georgina Becket",
    explanation: "Sila ang mag-asawang nagmay-ari ng tinuluyan ni Rizal sa London."
  },
  {
    id: 9,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino sa mga anak ng pamilya Becket ang nagkaroon ng malalim na damdamin kay Rizal na tinatawag ding 'Tottie'?",
    options: ["Blanche Becket", "Florence Becket", "Grace Becket", "Gertrude Becket"],
    answer: "Gertrude Becket",
    explanation: "Si Gertrude (Tottie) ang nagkagusto kay Rizal kaya lumipat siya ng tirahan."
  },
  {
    id: 10,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Ano ang pangalan ng isa pang anak na babae ng pamilya Becket na binanggit sa liham ni Rizal noong Hunyo 12, 1888 na tinatawag na 'Sisi'?",
    options: ["Blanche Becket", "Florence Becket", "Grace Becket", "Georgina Becket"],
    answer: "Blanche Becket",
    explanation: "Si Blanche (Sisi) ang isa pang anak na binanggit sa liham."
  },
  {
    id: 11,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Ano ang pangalan ng dalawa pang anak na babae ng pamilya Becket bukod kina Gertrude at Blanche na sina Flory at Grace?",
    options: ["Florence at Grace", "Maria at Teresa", "Elena at Clara", "Ana at Sofia"],
    answer: "Florence at Grace",
    explanation: "Sila sina Florence (Flory) at Grace Becket."
  },
  {
    id: 12,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Ano ang bansag sa hindi nakilalang seryal na mamamatay-tao sa London noong panahong naroroon si Rizal?",
    options: ["Eminencia Negro", "Jack the Ripper", "Kardenal Moreno", "Pilibustero"],
    answer: "Jack the Ripper",
    explanation: "Si Jack the Ripper ang naghasik ng takot sa London noong panahong iyon."
  },
  {
    id: 13,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Anong akda ni Rizal ang nagtatampok ng mga kasabihan, palaisipan, at mga tula ng mga katutubong Pilipino?",
    options: ["Two Eastern Fables", "Specimens of Tagalog Folklore", "Makamisa", "Mi Retiro"],
    answer: "Specimens of Tagalog Folklore",
    explanation: "Naglalaman ito ng tatlong bahagi: kasabihan, palaisipan, at tula."
  },
  {
    id: 14,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino ang iskolar na tumulong kay Rizal sa British Museum at nagbigay sa kanya ng parangal na 'Una perla de hombre'?",
    options: ["Dr. H. Kern", "Dr. Reinhold Rost", "Dr. Lorenzo P. Marques", "Ferdinand Blumentritt"],
    answer: "Dr. Reinhold Rost",
    explanation: "Si Dr. Reinhold Rost ang tumawag kay Rizal ng 'isang perlas na tao'."
  },
  {
    id: 15,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Anong journal ang naglathala sa mga pananaliksik ni Rizal tungkol sa mga tradisyong Asyano at Specimens of Tagalog Folklore?",
    options: ["La Solidaridad", "Trübner's Record", "El Nuevo Regimen", "La Patria"],
    answer: "Trübner's Record",
    explanation: "Sa Trübner's Record inilathala ang mga pag-aaral na ito."
  },
  {
    id: 16,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng pag-aaral ni Rizal noong Hulyo 1889 na naghahambing ng mga pabula ng Pilipinas at Japan?",
    options: ["Specimens of Tagalog Folklore", "Two Eastern Fables", "Filipinas Dentro de Cien Años", "Sobre la Indolencia"],
    answer: "Two Eastern Fables",
    explanation: "Inihambing dito ang mga pabula sa dalawang bansa."
  },
  {
    id: 17,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang Dutch na iskolar na nagsuri sa Two Eastern Fables ni Rizal at naglahad nito sa International Congress of Orientalists?",
    options: ["Dr. H. Kern", "Dr. Reinhold Rost", "Edmund Plauchut", "Antonio Ma. Regidor"],
    answer: "Dr. H. Kern",
    explanation: "Si Dr. H. Kern ang nag-analisa at naglathala ng monograpo ukol dito noong 1889 sa Leyden."
  },
  {
    id: 18,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Saang lungsod idinaos ang International Congress of Orientalists na nagtalakay sa akda ni Rizal?",
    options: ["Paris", "Stockholm", "Leyden", "London"],
    answer: "Stockholm",
    explanation: "Binanggit sa ulat ang Stockholm bilang lungsod ng kumperensya."
  },
  {
    id: 19,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino ang kaibigang nagpatuloy kay Rizal sa Paris sa adres na 45 Rue Maubeuge noong 1889 habang idinaraos ang Eksposisyong Unibersal?",
    options: ["Valentin Ventura", "Juan Luna", "Trinidad Pardo de Tavera", "Jose Ma. Basa"],
    answer: "Valentin Ventura",
    explanation: "Si Valentin Ventura ang nagpatuloy kay Rizal sa Paris sa 45 Rue Maubeuge."
  },
  {
    id: 20,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino-sino ang magkapatid na Pardo de Tavera na dinalaw at nakasama ni Rizal sa Paris?",
    options: ["Dr. Trinidad at Dr. Felix Pardo de Tavera", "Juan at Antonio Pardo de Tavera", "Paz at Trinidad Pardo de Tavera", "Jose at Felix Pardo de Tavera"],
    answer: "Dr. Trinidad at Dr. Felix Pardo de Tavera",
    explanation: "Sila ang mga kaibigan ni Rizal sa Paris."
  },
  {
    id: 21,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino ang pintor na kaibigan ni Rizal na naging asawa ni Paz Pardo de Tavera at nagkaroon ng anak na pinag-ninuhan ni Rizal noong Hunyo 24, 1889?",
    options: ["Juan Luna", "Felix Hidalgo", "Valentin Ventura", "Sixto Lopez"],
    answer: "Juan Luna",
    explanation: "Si Juan Luna ang ama ng batang pinag-ninuhan ni Rizal noong Hunyo 24, 1889."
  },
  {
    id: 22,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong taon isinilang si Antonio de Morga ayon sa ulat?",
    options: ["1559", "1593", "1598", "1636"],
    answer: "1559",
    explanation: "Ipinanganak si Antonio de Morga sa Seville, Spain noong 1559."
  },
  {
    id: 23,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong taon nagsilbi si Antonio de Morga bilang kapitan-heneral ng Pilipinas ayon sa ulat?",
    options: ["1559", "1593", "1598", "1636"],
    answer: "1593",
    explanation: "Nagsilbi siyang kapitan-heneral simula 1593."
  },
  {
    id: 24,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong taon naging hukom sa Audiencia si Antonio de Morga?",
    options: ["1593", "1598", "1609", "1868"],
    answer: "1598",
    explanation: "Naging hukom siya sa Audiencia noong 1598 (at namatay noong 1636)."
  },
  {
    id: 25,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong taon inilathala ang unang salin sa Ingles ng Sucesos ni Morga na inilabas sa London?",
    options: ["1868", "1907", "1890", "1609"],
    answer: "1868",
    explanation: "Unang salin sa Ingles ay noong 1868."
  },
  {
    id: 26,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang naglimbag ng Ingles na salin ng Sucesos nina Blair at Robertson na inilathala sa Cleveland noong 1907?",
    options: ["Garnier Frères", "Blair at Robertson", "Trübner", "Imprenta de Sucesores"],
    answer: "Blair at Robertson",
    explanation: "Sila ang naglimbag nito sa Cleveland noong 1907."
  },
  {
    id: 27,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong palimbag ang naglimbag ng anotasyong edisyon ni Rizal sa akda ni Morga sa Paris?",
    options: ["Garnier Frères", "La Solidaridad", "Trübner's Record", "Imprenta Moderna"],
    answer: "Garnier Frères",
    explanation: "Ang Garnier Frères ang palimbagang naglabas ng edisyong ito sa Paris."
  },
  {
    id: 28,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang historyador na nagtalakay sa mga dahilan kung bakit pinili ni Rizal ang akda ni Morga?",
    options: ["Ambrosio Rianzares", "Ambeth R. Ocampo", "Teodoro Agoncillo", "Renato Constantino"],
    answer: "Ambeth R. Ocampo",
    explanation: "Si Ambeth R. Ocampo ang nagtalakay sa mga motibo ni Rizal sa pagpili kay Morga."
  },
  {
    id: 29,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng makasaysayang sulatin ni Rizal na may petsang Disyembre 8, 1888?",
    options: ["Tawalisi ni Ibn Batuta", "Ma-yi", "Filipinas Dentro de Cien Años", "Sobre la Indolencia"],
    answer: "Ma-yi",
    explanation: "Ang Ma-yi ay may petsang Disyembre 8, 1888."
  },
  {
    id: 30,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng sulatin ni Rizal na may petsang Enero 7, 1889 tungkol sa tala ni Ibn Batuta?",
    options: ["Tawalisi ni Ibn Batuta", "Ma-yi", "Verdades Nuevas", "Ingratitudes"],
    answer: "Tawalisi ni Ibn Batuta",
    explanation: "Ang Tawalisi ni Ibn Batuta ay may petsang Enero 7, 1889."
  },
  {
    id: 31,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Saang pahayagan madalas ilathala ni Rizal ang Filipinas Dentro de Cien Años at iba pang sanaysay?",
    options: ["La Solidaridad", "La Patria", "El Heraldo de Madrid", "La Independencia"],
    answer: "La Solidaridad",
    explanation: "Ang La Solidaridad ang opisyal na pahayagan ng Propaganda."
  },
  {
    id: 32,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng sanaysay ni Rizal na tumatalakay sa sinasabing katamaran ng mga Pilipino?",
    options: ["Sobre la Indolencia de los Filipinos", "Filipinas Dentro de Cien Años", "La Politica Colonial", "Ingratitudes"],
    answer: "Sobre la Indolencia de los Filipinos",
    explanation: "Sinuri rito ni Rizal ang ugat ng katamaran ng mga Pilipino dulot ng sistema."
  },
  {
    id: 33,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng sulatin ni Rizal tungkol sa mga patakarang kolonyal ng Espanya sa Pilipinas?",
    options: ["La Politica Colonial en Filipinas", "Historia de la Familia Rizal", "Los Pueblos del Archipelago", "Diferencias"],
    answer: "La Politica Colonial en Filipinas",
    explanation: "Tinalakay dito ang mga patakaran ng pamahalaang kolonyal."
  },
  {
    id: 34,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng sulatin ni Rizal tungkol sa kasaysayan ng pamilya Rizal sa Calamba?",
    options: ["Historia de la Familia Rizal de Calamba", "Los Pueblos del Archipelago Indico", "Ma-yi", "Tawalisi"],
    answer: "Historia de la Familia Rizal de Calamba",
    explanation: "Ito ang sulatin tungkol sa kasaysayan ng pamilya sa Calamba."
  },
  {
    id: 35,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong akda o talaan ng mga akdang pangkasaysayan ang may pamagat na 'Los Pueblos del Archipelago Indico'?",
    options: ["Los Pueblos del Archipelago Indico", "Historia de la Familia Rizal", "La Politica Colonial", "Diferencias"],
    answer: "Los Pueblos del Archipelago Indico",
    explanation: "Binanggit ito sa talaan ng mga akdang pangkasaysayan ni Rizal."
  },
  {
    id: 36,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Noong buwan at taon binalak itatag ni Rizal ang Asosasyong Internasyonal ng mga Filipinohista sa Paris?",
    options: ["Agosto 1889", "Enero 1890", "Hulyo 1889", "Oktubre 1891"],
    answer: "Agosto 1889",
    explanation: "Plano itong itatag noong Agosto 1889 sa Paris."
  },
  {
    id: 37,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang napiling Pangulo ng Asosasyong Internasyonal ng mga Filipinohista?",
    options: ["Ferdinand Blumentritt", "Edmund Plauchut", "Dr. Reinhold Rost", "Dr. Antonio Ma. Regidor"],
    answer: "Ferdinand Blumentritt",
    explanation: "Si Ferdinand Blumentritt ang napiling pangulo."
  },
  {
    id: 38,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang Pranses na itinalaga bilang Pangalawang Pangulo ng samahan ng mga Filipinohista?",
    options: ["Edmund Plauchut", "Ferdinand Blumentritt", "Valentin Ventura", "Antonio Ma. Regidor"],
    answer: "Edmund Plauchut",
    explanation: "Si Edmund Plauchut ang bise presidente."
  },
  {
    id: 39,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino-sino ang mga itinalagang tagapayo (advisers) ng samahan ng mga Filipinohista?",
    options: ["Dr. Reinhold Rost at Dr. Antonio Ma. Regidor", "Juan Luna at Felix Pardo de Tavera", "Ambrosio Salvador at Deodato Arellano", "Valentin Ventura at Sixto Lopez"],
    answer: "Dr. Reinhold Rost at Dr. Antonio Ma. Regidor",
    explanation: "Sila ang mga tagapayo ng samahan habang si Rizal ang kalihim."
  },
  {
    id: 40,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong pamahalaan ang tumanggi at hindi pumayag sa planong pribadong kumbensyon ng mga Filipinohista sa Paris?",
    options: ["Pamahalaang Pranses", "Pamahalaang Espanyol", "Pamahalaang Ingles", "Pamahalaang Aleman"],
    answer: "Pamahalaang Pranses",
    explanation: "Ang Pamahalaang Pranses ang hindi pumayag sa pribadong kumbensyon."
  },
  {
    id: 41,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong sanaysay ni Rizal noong 1890 ang tumugon sa paratang ng pamahalaan laban sa mga 'anak na walang turing'?",
    options: ["Mga Kawalang Turing (Ingratitudes)", "Verdades Nuevas", "Diferencias", "Por Telefono"],
    answer: "Mga Kawalang Turing (Ingratitudes)",
    explanation: "Tumugon ito sa paratang na walang utang na loob ang mga Pilipino."
  },
  {
    id: 42,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang gobernador-heneral na binanggit sa konteksto ng paratang na 'anak na walang turing' laban sa mga kritiko?",
    options: ["Valeriano Weyler", "Eulogio Despujol", "Emilio Terrero", "Camilo de Polavieja"],
    answer: "Valeriano Weyler",
    explanation: "Si Valeriano Weyler ang naglabas ng pahayag laban sa mga tumutuligsa."
  },
  {
    id: 43,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong bilangguang binanggit ni Rizal sa kanyang pagtalakay sa kawalan ng katarungan sa ilalim ng kolonyalismo?",
    options: ["Bilibid", "Fort Santiago", "Montjuïc", "Cuartel de España"],
    answer: "Bilibid",
    explanation: "Binanggit ang Bilibid sa pagtalakay sa kawalan ng katarungan."
  },
  {
    id: 44,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong taon nagsumite ang mga residente ng mga reklamo hinggil sa Hacienda de Calamba ayon sa ulat?",
    options: ["1887", "1888", "1889", "1890"],
    answer: "1887",
    explanation: "Taong 1887 nang isumite ang mga reklamo."
  },
  {
    id: 45,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Kailan isinagawa ang opisyal na pag-uusisa at pagtatanong hinggil sa lawak at ani ng mga lupa sa Calamba?",
    options: ["Disyembre 30, 1887", "Hulyo 3, 1892", "Enero 7, 1889", "Oktubre 7, 1891"],
    answer: "Disyembre 30, 1887",
    explanation: "Sinimulan ang pag-uusisa noong Disyembre 30, 1887."
  },
  {
    id: 46,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong orden ng mga relihiyoso ang may kontrol at nagmamay-ari sa asyendang pinagtalunan sa Calamba?",
    options: ["Orden ng mga Dominikano", "Mga Heswita", "Mga Pransiskano", "Mga Augustinian"],
    answer: "Orden ng mga Dominikano",
    explanation: "Ang mga Dominikano ang nagmamay-ari ng asyenda."
  },
  {
    id: 47,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano-ano ang ilan sa mga pangunahing reklamo hinggil sa Hacienda de Calamba na inilahad sa ulat?",
    options: ["Walang resibo at mataas na upa", "Mababang sahod sa paggawa", "Kakulangan sa patubig", "Sapilitang pagpapatira sa kabundukan"],
    answer: "Walang resibo at mataas na upa",
    explanation: "Ang kawalan ng resibo at pagpapataw ng mataas na upa ang mga pangunahing reklamo."
  },
  {
    id: 48,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong ideya ang binigyang-diin ni Rizal sa paghubog sa mga kabataang may budhi at katarungan?",
    options: ["Pananagutan ng mga guro", "Kahalagahan ng militarismo", "Pag-aaral ng wikang banyaga", "Pagpapalawak ng kalakalan"],
    answer: "Pananagutan ng mga guro",
    explanation: "Binigyang-diin ang pananagutan ng mga guro sa paghubog sa kabataan."
  },
  {
    id: 49,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng sulating naglalahad ng puna sa pamamahala, katiwalian, at pananagutan sa lipunan na inilathala sa ilalim ng inisyal na A.G.D.G.?",
    options: ["Ang Katotohanan Para sa Lahat", "Verdades Nuevas", "Por Telefono", "Diferencias"],
    answer: "Ang Katotohanan Para sa Lahat",
    explanation: "Ang Katotohanan Para sa Lahat ang naglalahad ng mga punang ito."
  },
  {
    id: 50,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang mga inisyal ng naglathala ng sulating pinagtalunan sa 'Ang Katotohanan Para sa Lahat'?",
    options: ["A.G.D.G.", "J.P.R.", "M.H.P.", "G.L.J."],
    answer: "A.G.D.G.",
    explanation: "A.G.D.G. ang mga inisyal na ginamit."
  },
  {
    id: 51,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong sanaysay ni Rizal ang inilathala sa La Solidaridad noong Hulyo 31, 1889 bilang pagtugon sa mga paratang ni Vicente Belloc y Sánchez?",
    options: ["Verdades Nuevas (Mga Bagong Katotohanan)", "Verdades Viejas", "Diferencias", "Ingratitudes"],
    answer: "Verdades Nuevas (Mga Bagong Katotohanan)",
    explanation: "Ang Verdades Nuevas ay tumugon kay Vicente Belloc y Sánchez."
  },
  {
    id: 52,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang Kastilang awtor at dating opisyal na pumuna sa mga Pilipino na tinugon ni Rizal sa Verdades Nuevas?",
    options: ["Don Vicente Belloc", "Salvador Font", "Antonio de Morga", "Wenceslao Retana"],
    answer: "Don Vicente Belloc",
    explanation: "Si Don Vicente Belloc y Sánchez ang Kastilang opisyal na pumuna sa mga Pilipino."
  },
  {
    id: 53,
    topic: "Talahulugan at Terminolohiya",
    question: "Anong terminong Latin ang ginamit ni Rizal upang suriin at baguhin ang kasalukuyang kalagayan dahil sa pang-aabuso?",
    options: ["Status quo", "Unus instar omnium", "Consummatum est", "Perla de hombre"],
    answer: "Status quo",
    explanation: "Tumutukoy ang status quo sa kasalukuyang kalagayan o sistema."
  },
  {
    id: 54,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang tawag sa katutubong sistemang pagsulat ng mga Pilipino bago dumating ang mga Kastila?",
    options: ["Baybayin", "Alibata", "Abakada", "Sansrito"],
    answer: "Baybayin",
    explanation: "Ang Baybayin ang katutubong sistema ng pagsulat."
  },
  {
    id: 55,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng satirikong akda ni Rizal na tumutuligsa sa impluwensya ng mga prayle at kolonyal na kapangyarihan sa pamamagitan ng telepono?",
    options: ["Por Telefono", "Makamisa", "Pobres Frailes", "Verdades Nuevas"],
    answer: "Por Telefono",
    explanation: "Ang Por Telefono ay satirikong akda ukol sa impluwensya ng mga prayle."
  },
  {
    id: 56,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong sanaysay ni Rizal ang sumagot sa panig ng konserbatibong pahayagang La Patria ukol sa reporma?",
    options: ["Mga Pagkaiba (Diferencias)", "Verdades Nuevas", "Ingratitudes", "La Politica Colonial"],
    answer: "Mga Pagkaiba (Diferencias)",
    explanation: "Ang Diferencias ay sumagot sa La Patria."
  },
  {
    id: 57,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pangalan ng konserbatibong pahayagan sa Espanya na naging katunggali ni Rizal sa pagtatalo tungkol sa reporma?",
    options: ["La Patria", "La Solidaridad", "El Heraldo de Madrid", "La Independencia"],
    answer: "La Patria",
    explanation: "Ang La Patria ang pahayagang naglathala ng Verdades Viejas."
  },
  {
    id: 58,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng mga artikulo o paratang na inilathala sa La Patria na tinugon ng panig ni Rizal?",
    options: ["Verdades Viejas (Mga Lumang Katotohanan)", "Verdades Nuevas", "Ingratitudes", "Diferencias"],
    answer: "Verdades Viejas (Mga Lumang Katotohanan)",
    explanation: "Ang Verdades Viejas ang mga lumang paratang ng La Patria."
  },
  {
    id: 59,
    topic: "Talahulugan at Terminolohiya",
    question: "Ano ang tawag sa pagbabago sa pamahalaan at lipunan na buong-tapang na ipinaglalaban ni Rizal sa kanyang mga sanaysay?",
    options: ["Reporma", "Rebolusyon", "Sedisyon", "Assimilation"],
    answer: "Reporma",
    explanation: "Reporma ang pangunahing mithiin na isinusulong sa mga sanaysay."
  },
  {
    id: 60,
    topic: "Talahulugan at Terminolohiya",
    question: "Sino ang mga relihiyosong opisyal na madalas pinuna ni Rizal dahil sa labis na pakikialam sa pamahalaang sibil?",
    options: ["Prayle", "Paring Sekular", "Obispo", "Arsobispo"],
    answer: "Prayle",
    explanation: "Ang mga prayle ang tinukoy sa labis na pakikialam sa gobyerno."
  },
  {
    id: 61,
    topic: "Talahulugan at Terminolohiya",
    question: "Ano ang tawag sa pinuno ng pamahalaang pambayan noong panahon ng Kastila?",
    options: ["Gobernadorcillo", "Cabeza de Barangay", "Encomendero", "Alkalde Mayor"],
    answer: "Gobernadorcillo",
    explanation: "Gobernadorcillo ang tawag sa pinuno ng pamahalaang pambayan."
  },
  {
    id: 62,
    topic: "Talahulugan at Terminolohiya",
    question: "Anong puwersang panseguridad ng pamahalaang kolonyal ang madalas banggitin sa mga ulat ukol sa pang-aabuso?",
    options: ["Guardia Civil", "Katipunan", "Cuerpo de Vigilancia", "Artilyeriya"],
    answer: "Guardia Civil",
    explanation: "Ang Guardia Civil ang puwersang panseguridad noong panahong iyon."
  },
  {
    id: 63,
    topic: "Talahulugan at Terminolohiya",
    question: "Anong terminolohiya ang tumutukoy sa mapanlinlang at walang prinsipyo na paraan ng pagpapanatili ng kapangyarihan?",
    options: ["Makiyabelismo", "Filibusterismo", "Embrutecer", "Status quo"],
    answer: "Makiyabelismo",
    explanation: "Makiyabelismo ang tawag sa taktikang walang prinsipyo para sa kapangyarihan."
  },
  {
    id: 64,
    topic: "Talahulugan at Terminolohiya",
    question: "Ano ang bansag na ipinapataw ng mga kolonyalista sa mga itinuturing na subersibo o kalaban ng pamahalaang Espanyol?",
    options: ["Pilibustero", "Ilustrado", "Inquilino", "Tulisán"],
    answer: "Pilibustero",
    explanation: "Pilibustero ang bansag sa mga kalaban ng pamahalaan."
  },

  // --- GROUP 2: EL FILIBUSTERISMO AT OPTALMOLOHIYA ---
  {
    id: 65,
    topic: "El Filibusterismo",
    question: "Ano ang buong pamagat ng ikalawang nobela ni Jose Rizal na karugtong ng Noli Me Tangere?",
    options: ["El Filibusterismo", "Noli Me Tangere", "Makamisa", "Sucesos de las Islas Filipinas"],
    answer: "El Filibusterismo",
    explanation: "El Filibusterismo ang ikalawang nobela ni Rizal."
  },
  {
    id: 66,
    topic: "El Filibusterismo",
    question: "Ano ang uri ng nobela na iniuugnay sa El Filibusterismo ayon sa ulat?",
    options: ["Nobelang Politikal", "Nobelang Romantiko", "Nobelang Sosyolohikal", "Nobelang Kultural"],
    answer: "Nobelang Politikal",
    explanation: "Isang Nobelang Politikal o Aklat ng Isip ang El Filibusterismo."
  },
  {
    id: 67,
    topic: "El Filibusterismo",
    question: "Ano naman ang uri ng nobela na iniuugnay sa Noli Me Tangere?",
    options: ["Nobelang Romantiko", "Nobelang Politikal", "Nobelang Historikal", "Nobelang Rebolusyonaryo"],
    answer: "Nobelang Romantiko",
    explanation: "Ang Noli Me Tangere ay Nobelang Romantiko o Aklat ng Puso."
  },
  {
    id: 68,
    topic: "El Filibusterismo",
    question: "Anong paglalarawan ang iniuugnay sa Noli Me Tangere pagdating sa pagsusuri sa lipunan?",
    options: ["Diagnosis ng sakit ng lipunan", "Lunas o reseta", "Pagsusuri sa ekonomiya", "Kasaysayan ng digmaan"],
    answer: "Diagnosis ng sakit ng lipunan",
    explanation: "Ang Noli ang diagnosis habang ang Fili ang lunas o reseta."
  },
  {
    id: 69,
    topic: "El Filibusterismo",
    question: "Kaninong alaala inihandog ni Dr. Jose Rizal ang nobelang El Filibusterismo?",
    options: ["GOMBURZA", "Mga magsasaka ng Calamba", "Leonor Rivera", "Kanyang ama"],
    answer: "GOMBURZA",
    explanation: "Inihandog ito sa tatlong paring martir."
  },
  {
    id: 70,
    topic: "El Filibusterismo",
    question: "Sino ang matandang paring martir at kura ng Bacoor, Cavite na kabilang sa GOMBURZA?",
    options: ["Padre Mariano Gomez", "Padre Jose Burgos", "Padre Jacinto Zamora", "Padre Pedro Pelaez"],
    answer: "Padre Mariano Gomez",
    explanation: "Si Padre Mariano Gomez ang kura ng Bacoor, Cavite."
  },
  {
    id: 71,
    topic: "El Filibusterismo",
    question: "Sino ang paring martir na nagtaguyod sa karapatan ng mga paring sekular?",
    options: ["Padre Jose Burgos", "Padre Mariano Gomez", "Padre Jacinto Zamora", "Padre Pedro Pelaez"],
    answer: "Padre Burgos",
    explanation: "Si Padre Jose Burgos ang nagtaguyod sa mga paring sekular."
  },
  {
    id: 72,
    topic: "El Filibusterismo",
    question: "Sino ang paring martir na nadawit sa paratang sa Pag-aalsa sa Cavite dahil sa kanyang hilig sa poker?",
    options: ["Padre Jacinto Zamora", "Padre Mariano Gomez", "Padre Jose Burgos", "Padre Pedro Pelaez"],
    answer: "Padre Jacinto Zamora",
    explanation: "Si Padre Jacinto Zamora ang nadawit sa paratang."
  },
  {
    id: 73,
    topic: "El Filibusterismo",
    question: "Kailan naganap ang araw ng pagbitay sa GOMBURZA sa Bagumbayan?",
    options: ["Pebrero 17, 1872", "Disyembre 30, 1896", "Hulyo 3, 1892", "Hunyo 26, 1892"],
    answer: "Pebrero 17, 1872",
    explanation: "Binitay sila noong Pebrero 17, 1872."
  },
  {
    id: 74,
    topic: "El Filibusterismo",
    question: "Anong pamamaraan ang ginamit sa pagbitay sa tatlong paring martir sa Bagumbayan?",
    options: ["Garote", "Pagbaril", "Pagbitay sa bitayan", "Saksak"],
    answer: "Garote",
    explanation: "Ginagamit ang garote sa pagbitay sa kanila."
  },
  {
    id: 75,
    topic: "El Filibusterismo",
    question: "Anong pag-aalsa noong 1872 ang iniuugnay ng mga awtoridad sa GOMBURZA?",
    options: ["Cavite Mutiny", "Pag-aalsa ni Dagohoy", "Rebolusyon sa Balintawak", "Pag-aalsa sa Basi"],
    answer: "Cavite Mutiny",
    explanation: "Ang Cavite Mutiny noong 1872 ang idiniin sa kanila."
  },
  {
    id: 76,
    topic: "El Filibusterismo",
    question: "Sino ang paring Pilipino na pinagpatuluyan ni Padre Burgos sa kanyang pakikibaka para sa mga paring sekular?",
    options: ["Padre Pedro Pelaez", "Padre Agaton", "Padre Florentino", "Padre Salvi"],
    answer: "Padre Pedro Pelaez",
    explanation: "Si Padre Pedro Pelaez ang sinundan ng pakikibaka ni Padre Burgos."
  },
  {
    id: 77,
    topic: "El Filibusterismo",
    question: "Sino ang kapatid ni Jose Rizal na may malapit na ugnayan kay Padre Burgos?",
    options: ["Paciano Rizal", "Lucia Rizal", "Narcisa Rizal", "Trinidad Rizal"],
    answer: "Paciano Rizal",
    explanation: "Si Paciano Rizal ay malapit kay Padre Burgos."
  },
  {
    id: 78,
    topic: "El Filibusterismo",
    question: "Sino ang kaibigang pinadalhan ni Rizal ng liham noong Abril 18, 1889 tungkol sa impluwensya ng GOMBURZA?",
    options: ["Mariano Ponce", "Ferdinand Blumentritt", "Graciano Lopez Jaena", "Valentin Ventura"],
    answer: "Mariano Ponce",
    explanation: "Si Mariano Ponce ang binigyan ng liham ukol dito."
  },
  {
    id: 79,
    topic: "El Filibusterismo",
    question: "Anong pangyayari sa Calamba ang malaki ang impluwensya sa madilim na tono ng El Filibusterismo?",
    options: ["Krisis Agraryo sa Calamba", "Sunog sa pamilihan", "Pag-aalsa ng mga magsasaka", "Pagpapatapon kay Paciano"],
    answer: "Krisis Agraryo sa Calamba",
    explanation: "Ang Krisis Agraryo sa Calamba ang nagbigay ng madilim na tono sa nobela."
  },
  {
    id: 80,
    topic: "El Filibusterismo",
    question: "Sino ang Gobernador-Heneral na nagpagawa ng imbestigasyon hinggil sa mga lupa at buwis sa asyenda sa Calamba?",
    options: ["Gobernador-Heneral Emilio Terrero", "Gobernador-Heneral Valeriano Weyler", "Gobernador-Heneral Eulogio Despujol", "Gobernador-Heneral Camilo de Polavieja"],
    answer: "Gobernador-Heneral Emilio Terrero",
    explanation: "Si Gobernador-Heneral Emilio Terrero ang nag-utos ng imbestigasyon."
  },
  {
    id: 81,
    topic: "El Filibusterismo",
    question: "Anong hukuman sa Espanya ang kumampi sa mga Dominikano sa pagtatalo sa lupa sa Calamba?",
    options: ["Korte Suprema ng Madrid", "Hukuman sa Seville", "Royal Audiencia", "Konseho ng Indya"],
    answer: "Korte Suprema ng Madrid",
    explanation: "Ang Korte Suprema ng Madrid ang kumampi sa mga prayle."
  },
  {
    id: 82,
    topic: "El Filibusterismo",
    question: "Sino ang Gobernador-Heneral na nagpatupad ng malupit na pagpapaalis sa mga taga-Calamba?",
    options: ["Valeriano Weyler", "Emilio Terrero", "Eulogio Despujol", "Camilo de Polavieja"],
    answer: "Valeriano Weyler",
    explanation: "Si Valeriano Weyler ang nagpatupad ng marahas na pagpapaalis."
  },
  {
    id: 83,
    topic: "El Filibusterismo",
    question: "Sino ang dating kasintahan ni Rizal na nagpakasal sa ibang lalaki na binanggit sa ulat?",
    options: ["Leonor Rivera", "Nellie Boustead", "Josephine Bracken", "Suzanne Jacoby"],
    answer: "Leonor Rivera",
    explanation: "Si Leonor Rivera ang nagpakasal sa iba."
  },
  {
    id: 84,
    topic: "El Filibusterismo",
    question: "Ano ang bansag sa itinuturing na subersibo o kaaway ng pamahalaang Espanyol?",
    options: ["Filibustero", "Pilibustero", "Insurrecto", "Subversivo"],
    answer: "Filibustero",
    explanation: "Filibustero ang tawag sa mga subersibo noon."
  },
  {
    id: 85,
    topic: "El Filibusterismo",
    question: "Sino ang tauhang nagbalik na mayaman at mapaghiganting mag-aalahas sa El Filibusterismo?",
    options: ["Simoun", "Basilio", "Isagani", "Kabesang Tales"],
    answer: "Simoun",
    explanation: "Si Simoun ang mag-aalahas na nagbalik."
  },
  {
    id: 86,
    topic: "El Filibusterismo",
    question: "Kailan lumisan si Rizal sa Pilipinas upang ipagpatuloy ang pagkilos sa Europa ayon sa ulat?",
    options: ["Pebrero 3, 1888", "Nobyembre 20, 1891", "Oktubre 18, 1891", "Hulyo 15, 1892"],
    answer: "Pebrero 3, 1888",
    explanation: "Lumisan siya noong Pebrero 3, 1888."
  },
  {
    id: 87,
    topic: "El Filibusterismo",
    question: "Saang lungsod sa Belgium inilimbag ang El Filibusterismo?",
    options: ["Genta (Ghent), Belgium", "Brussels, Belgium", "Antwerp, Belgium", "Paris, France"],
    answer: "Genta (Ghent), Belgium",
    explanation: "Inilimbag ito sa Genta (Ghent)."
  },
  {
    id: 88,
    topic: "El Filibusterismo",
    question: "Kailan opisyal na nailimbag ang El Filibusterismo?",
    options: ["Setyembre 18, 1891", "Oktubre 18, 1891", "Nobyembre 20, 1891", "Disyembre 30, 1896"],
    answer: "Setyembre 18, 1891",
    explanation: "Nailimbag ito noong Setyembre 18, 1891."
  },
  {
    id: 89,
    topic: "El Filibusterismo",
    question: "Sino ang kaibigang tumulong sa pananalapi sa pagpapalimbag ng El Filibusterismo nang maubusan ng pondo si Rizal?",
    options: ["Valentin Ventura", "Maximo Viola", "Jose Alejandro", "Edilberto Evangelista"],
    answer: "Valentin Ventura",
    explanation: "Si Valentin Ventura ang nagligtas sa pagpapalimbag."
  },
  {
    id: 90,
    topic: "El Filibusterismo",
    question: "Sino ang kasama ni Rizal na binanggit sa ulat kaugnay ng matinding pagtitipid at pagkain ng biskwit habang nasa Genta?",
    options: ["Alejandro (Jose Alejandro)", "Edilberto Evangelista", "Mariano Ponce", "Sixto Lopez"],
    answer: "Alejandro (Jose Alejandro)",
    explanation: "Si Jose Alejandro ang kasama niya sa silid."
  },
  {
    id: 91,
    topic: "El Filibusterismo",
    question: "Sino ang isa pang Pilipinong iskolar/inhinyero na binanggit sa bahagi ng ulat tungkol sa pagpapalimbag sa Europa?",
    options: ["Edilberto Evangelista", "Jose Alejandro", "Valentin Ventura", "Maximo Viola"],
    answer: "Edilberto Evangelista",
    explanation: "Si Edilberto Evangelista ang binanggit sa bahaging ito."
  },
  {
    id: 92,
    topic: "El Filibusterismo",
    question: "Ilang kabanata ang orihinal na dami ng mga kabanata ng El Filibusterismo bago magbawas?",
    options: ["44 na kabanata", "39 na kabanata", "40 na kabanata", "45 na kabanata"],
    answer: "44 na kabanata",
    explanation: "44 ang orihinal ngunit naging 39 na lamang."
  },
  {
    id: 93,
    topic: "El Filibusterismo",
    question: "Ilang kabanata ang natira sa nailimbag na El Filibusterismo?",
    options: ["39 na kabanata", "44 na kabanata", "35 na kabanata", "37 na kabanata"],
    answer: "39 na kabanata",
    explanation: "39 na kabanata ang nailimbag dahil kinulang sa pondo."
  },
  {
    id: 94,
    topic: "El Filibusterismo",
    question: "Anong bahagi ng nobela ang tinanggal ni Rizal upang makatipid sa gastos sa imprenta?",
    options: ["Paunang Salita", "Huling Kabanata", "Dahon ng Pamagat", "Tala ng mga Tauhan"],
    answer: "Paunang Salita",
    explanation: "Tinanggal ang Paunang Salita para makatipid."
  },
  {
    id: 95,
    topic: "El Filibusterismo",
    question: "Sino-sino ang mga pinadalhan ni Rizal ng mga unang sipi ng El Filibusterismo sa Hong Kong at iba pa?",
    options: ["Jose Ma. Basa at Sixto Lopez", "Valentin Ventura at Maximo Viola", "Juan at Antonio Luna", "Ferdinand Blumentritt at Mariano Ponce"],
    answer: "Jose Ma. Basa at Sixto Lopez",
    explanation: "Sila ang mga unang pinadalhan sa labas ng bansa."
  },
  {
    id: 96,
    topic: "El Filibusterismo",
    question: "Anong pahayagan sa Madrid ang naglathala nang serye ng El Filibusterismo noong Oktubre 1891?",
    options: ["El Nuevo Regimen", "La Solidaridad", "La Patria", "El Heraldo de Madrid"],
    answer: "El Nuevo Regimen",
    explanation: "Ang El Nuevo Regimen ang naglathala ng mga serye nito."
  },
  {
    id: 97,
    topic: "El Filibusterismo",
    question: "Ano ang tawag o pangalan sa unang edisyon ng El Filibusterismo?",
    options: ["Edisyong Genta", "Edisyong Paris", "Edisyong Madrid", "Edisyong London"],
    answer: "Edisyong Genta",
    explanation: "Edisyong Genta ang tawag sa unang edisyon."
  },
  {
    id: 98,
    topic: "El Filibusterismo",
    question: "Magkano ang napakataas na presyong naabot ng ilang natirang sipi ng nobela ayon sa ulat?",
    options: ["400 pesetas", "100 pesetas", "200 pesetas", "500 pesetas"],
    answer: "400 pesetas",
    explanation: "Umabot sa 400 pesetas ang presyo ng bawat sipi dahil sa kakulangan."
  },
  {
    id: 99,
    topic: "El Filibusterismo",
    question: "Sino ang rebolusyonaryong bayani na malaki ang naimpluwensyahan ng nobela sa pagtatag ng Katipunan?",
    options: ["Andres Bonifacio", "Emilio Aguinaldo", "Apolinario Mabini", "Antonio Luna"],
    answer: "Andres Bonifacio",
    explanation: "Si Andres Bonifacio ang naimpluwensyahan ng nobela."
  },
  {
    id: 100,
    topic: "El Filibusterismo",
    question: "Anong lihim na kilusang rebolusyonaryo ang binanggit kaugnay ng impluwensya ng akda?",
    options: ["Katipunan", "La Liga Filipina", "Propaganda Movement", "Hermandad"],
    answer: "Katipunan",
    explanation: "Ang Katipunan ang lihim na kilusang itinatag."
  },
  {
    id: 101,
    topic: "El Filibusterismo",
    question: "Ano ang pangalan ng sasakyang pandagat sa unang bahagi ng El Filibusterismo?",
    options: ["Bapor Tabo", "Bapor Don Juan", "Bapor Cebu", "Bapor España"],
    answer: "Bapor Tabo",
    explanation: "Bapor Tabo ang sasakyang pandagat sa umpisa ng nobela."
  },
  {
    id: 102,
    topic: "El Filibusterismo",
    question: "Sino ang mag-aaral ng medisina sa nobela na niyayang makisangkot ni Simoun sa paghihimagsik?",
    options: ["Basilio", "Isagani", "Kabesang Tales", "Juanito Pelaez"],
    answer: "Basilio",
    explanation: "Si Basilio ang mag-aaral ng medisina."
  },
  {
    id: 103,
    topic: "El Filibusterismo",
    question: "Sino ang kabataang makata at mag-aaral sa nobela na naugnay kay Paulita Gomez?",
    options: ["Isagani", "Basilio", "Juanito Pelaez", "Sandoval"],
    answer: "Isagani",
    explanation: "Si Isagani ang makata at kasintahan ni Paulita noon."
  },
  {
    id: 104,
    topic: "El Filibusterismo",
    question: "Sino ang magsasakang biktima ng kawalang-katarungan sa lupa at naging tulisan?",
    options: ["Kabesang Tales", "Tandang Selo", "Simoun", "Basilio"],
    answer: "Kabesang Tales",
    explanation: "Si Kabesang Tales ang magsasakang inapi sa lupa."
  },
  {
    id: 105,
    topic: "El Filibusterismo",
    question: "Sino ang dating kasintahan ni Ibarra sa Noli na pumasok sa kumbento ng Santa Clara sa Fili?",
    options: ["Maria Clara", "Paulita Gomez", "Juli", "Huli"],
    answer: "Maria Clara",
    explanation: "Si Maria Clara ay pumasok sa kumbento."
  },
  {
    id: 106,
    topic: "El Filibusterismo",
    question: "Sino ang paring tumanggap kay Simoun at nakinig sa kanyang huling mga sandali sa katapusan ng nobela?",
    options: ["Padre Florentino", "Padre Salvi", "Padre Camorra", "Padre Agaton"],
    answer: "Padre Florentino",
    explanation: "Si Padre Florentino ang nag-alaga at tumanggap kay Simoun."
  },
  {
    id: 107,
    topic: "El Filibusterismo",
    question: "Sino ang dalagang minahal ni Isagani ngunit piniling magpakasal kay Juanito Pelaez?",
    options: ["Paulita Gomez", "Maria Clara", "Juli", "Ben Zayb"],
    answer: "Paulita Gomez",
    explanation: "Si Paulita Gomez ang nagpakasal kay Juanito Pelaez."
  },
  {
    id: 108,
    topic: "El Filibusterismo",
    question: "Sino ang lalaking napangasawa ni Paulita Gomez sa katapusan ng kwento?",
    options: ["Juanito Pelaez", "Isagani", "Basilio", "Sandoval"],
    answer: "Juanito Pelaez",
    explanation: "Si Juanito Pelaez ang pinakasalan ni Paulita."
  },
  {
    id: 109,
    topic: "El Filibusterismo",
    question: "Ano ang tawag sa makapinsalang lampara na itinakda ni Simoun na gamitin sa pagsabog sa pagtitipon?",
    options: ["Makapinsalang lampara (may nitro-gliserina)", "Lamparang tanso", "Lamparang de-langis", "Lamparang kristal"],
    answer: "Makapinsalang lampara (may nitro-gliserina)",
    explanation: "Ang lamparang ito ay may dalang nitro-gliserina."
  },
  {
    id: 110,
    topic: "El Filibusterismo",
    question: "Anong planong pang-edukasyon ng mga mag-aaral ang nabigo at naging dahilan ng sama ng loob sa nobela?",
    options: ["Akademya ng Wikang Kastila", "Paaralan sa Talisay", "Kolehiyo ng San Juan de Letran", "Unibersidad ng Santo Tomas"],
    answer: "Akademya ng Wikang Kastila",
    explanation: "Ang Akademya ng Wikang Kastila ang ipinaglaban ngunit ibinasura."
  },
  {
    id: 111,
    topic: "El Filibusterismo",
    question: "Anong pangyayari ang nagpalala at nagtulak kay Simoun upang ipagpatuloy ang kanyang marahas na paghihiganti?",
    options: ["Pagkamatay ni Maria Clara", "Pagkamatay ni Juli", "Pagkamatay ni Kabesang Tales", "Pagkamatay ni Tandang Selo"],
    answer: "Pagkamatay ni Maria Clara",
    explanation: "Ang balita ng pagkamatay ni Maria Clara ang nagpalala sa damdamin ni Simoun."
  },
  {
    id: 112,
    topic: "El Filibusterismo",
    question: "Ano ang ipinakita ng kabiguan ni Simoun sa huli ng nobela?",
    options: ["Na ang marahas na paghihiganti ay hindi awtomatikong magdudulot ng katarungan", "Na ang edukasyon ay walang silbi", "Na ang simbahan ang magpapalaya sa bayan", "Na dapat sumuko sa mga Kastila"],
    answer: "Na ang marahas na paghihiganti ay hindi awtomatikong magdudulot ng katarungan",
    explanation: "Ipinakita rito na ang dahas ay hindi solusyon."
  },
  {
    id: 113,
    topic: "El Filibusterismo",
    question: "Anong simbolismo ang iniuugnay ng ulat sa katauhan ni Maria Clara sa loob ng nobela?",
    options: ["Inang Bayan", "Simbahan", "Katarungan", "Katiwalian"],
    answer: "Inang Bayan",
    explanation: "Si Maria Clara ay sinisimbolo bilang Inang Bayan."
  },
  {
    id: 114,
    topic: "El Filibusterismo",
    question: "Sino ang kasama sa kilusang propaganda na nagkaroon ng hindi pagkakaunawaan kay Rizal kaya siya tumigil sa pagsulat?",
    options: ["Marcelo H. del Pilar", "Graciano Lopez Jaena", "Mariano Ponce", "Antonio Luna"],
    answer: "Marcelo H. del Pilar",
    explanation: "Nagkaroon ng isyu sa pamumuno kaya huminto si Rizal sa pagsulat sa La Solidaridad."
  },
  {
    id: 115,
    topic: "El Filibusterismo",
    question: "Kailan ipinaalam ni Rizal kay Marcelo H. del Pilar na titigil na siyang sumulat para sa La Solidaridad?",
    options: ["Oktubre 7, 1891", "Nobyembre 20, 1891", "Enero 31, 1892", "Hulyo 3, 1892"],
    answer: "Oktubre 7, 1891",
    explanation: "Ipinahayag ito ni Rizal noong Oktubre 7, 1891."
  },
  {
    id: 116,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Kailan dumating si Rizal sa Hong Kong pagkaalis sa Europa?",
    options: ["Nobyembre 20, 1891", "Disyembre 1, 1891", "Enero 31, 1892", "Hunyo 26, 1892"],
    answer: "Nobyembre 20, 1891",
    explanation: "Dumating siya noong Nobyembre 20, 1891."
  },
  {
    id: 117,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang kaibigang sumalubong at tumulong kay Rizal sa Hong Kong?",
    options: ["Jose Ma. Basa", "Sixto Lopez", "Valentin Ventura", "Ferdinand Blumentritt"],
    answer: "Jose Ma. Basa",
    explanation: "Si Jose Ma. Basa ang sumalubong sa kanya sa Hong Kong."
  },
  {
    id: 118,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Ano ang eksaktong tirahan ni Rizal sa Hong Kong ayon sa ulat?",
    options: ["Blg. 5 D'Aguilar Street", "Blg. 2 Rednaxela Terrace", "45 Rue Maubeuge", "Kalye Ylaya"],
    answer: "Blg. 5 D'Aguilar Street",
    explanation: "Blg. 5 D'Aguilar Street ang kanyang tirahan, habang ang klinika ay sa Blg. 2 Rednaxela Terrace."
  },
  {
    id: 119,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Ano ang eksaktong lokasyon ng klinika ni Rizal sa Hong Kong?",
    options: ["Blg. 2 Rednaxela Terrace", "Blg. 5 D'Aguilar Street", "Rue Maubeuge", "Binondo"],
    answer: "Blg. 2 Rednaxela Terrace",
    explanation: "Sa Blg. 2 Rednaxela Terrace matatagpuan ang klinika."
  },
  {
    id: 120,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Ano ang propesyon at espesyalisasyon ni Rizal na buong-husay niyang pinraktis sa Hong Kong?",
    options: ["Optalmologo (manggagamot ng mga mata)", "Inhinyero", "Agri-kulturista", "Abugado"],
    answer: "Optalmologo (manggagamot ng mga mata)",
    explanation: "Optalmologo ang kanyang propesyon."
  },
  {
    id: 121,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang kaibigang doktor sa Hong Kong na nag-refer ng maraming pasyente kay Rizal?",
    options: ["Dr. Lorenzo P. Marques", "Dr. Ariston Bautista Lin", "Dr. Reinhold Rost", "Dr. H. Kern"],
    answer: "Dr. Lorenzo P. Marques",
    explanation: "Si Dr. Lorenzo P. Marques ang nag-refer ng mga pasyente sa mata."
  },
  {
    id: 122,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Anong petsa ang iniugnay ng ulat sa malaking tagumpay ni Rizal bilang optalmologo sa Hong Kong?",
    options: ["Enero 31, 1892", "Nobyembre 20, 1891", "Disyembre 1, 1891", "Hulyo 3, 1892"],
    answer: "Enero 31, 1892",
    explanation: "Enero 31, 1892 ang petsang iniugnay sa kanyang tagumpay doon."
  },
  {
    id: 123,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang ina ni Rizal na inoperahan niya para sa sakit na katarata sa kaliwang mata?",
    options: ["Doña Teodora Alonso", "Lucia Rizal", "Narcisa Rizal", "Trinidad Rizal"],
    answer: "Doña Teodora Alonso",
    explanation: "Si Doña Teodora Alonso ang kanyang inang inoperahan."
  },
  {
    id: 124,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang bayaw ni Rizal na nagbalita sa kanya sa Hong Kong tungkol sa malupit na deportasyon sa Calamba?",
    options: ["Manuel T. Hidalgo", "Silvestre Ubaldo", "Paciano Rizal", "Mariano Herbosa"],
    answer: "Manuel T. Hidalgo",
    explanation: "Si Manuel T. Hidalgo ang nagbalita nito."
  },
  {
    id: 125,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Kailan nabalitaan ni Rizal ang deportasyon ng 25 katao sa Calamba?",
    options: ["Disyembre 1, 1891", "Nobyembre 20, 1891", "Enero 31, 1892", "Oktubre 7, 1891"],
    answer: "Disyembre 1, 1891",
    explanation: "Disyembre 1, 1891 nang matanggap niya ang balita."
  },
  {
    id: 126,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Ilang katao mula sa Calamba ang nabalitaan ni Rizal na sapilitang ipinatapon?",
    options: ["25 katao", "10 katao", "50 katao", "100 katao"],
    answer: "25 katao",
    explanation: "25 katao ang ipinatapon mula sa Calamba."
  },
  {
    id: 127,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang bayaw ni Rizal na kasama niyang sumunod na pumunta sa Hong Kong kasama ang pamilya?",
    options: ["Silvestre Ubaldo", "Manuel T. Hidalgo", "Antonino Lopez", "Mariano Herbosa"],
    answer: "Silvestre Ubaldo",
    explanation: "Si Silvestre Ubaldo ang kasamang pumunta sa Hong Kong."
  },
  {
    id: 128,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang nagpadala kay Rizal ng mga aklat medikal tulad ng Diagnostic Pathology?",
    options: ["Dr. Ariston Bautista Lin", "Don Antonio Vergel de Dios", "G. Boustead", "Dr. Lorenzo Marques"],
    answer: "Dr. Ariston Bautista Lin",
    explanation: "Si Dr. Ariston Bautista Lin ang nagpadala ng aklat medikal."
  },
  {
    id: 129,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang nag-alok at tumulong kay Rizal sa pagbili ng mga instrumentong medikal sa Hong Kong?",
    options: ["Don Antonio Vergel de Dios", "Dr. Ariston Bautista Lin", "Jose Ma. Basa", "G. Boustead"],
    answer: "Don Antonio Vergel de Dios",
    explanation: "Si Don Antonio Vergel de Dios ang nag-alok tumulong sa mga instrumento."
  },
  {
    id: 130,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang ama ni Nellie na nagpadala kay Rizal ng liham ng pagpupuri sa kanyang tagumpay?",
    options: ["G. Boustead", "George Taufer", "Charles Becket", "Reinhold Rost"],
    answer: "G. Boustead",
    explanation: "Si G. Boustead ang ama ni Nellie."
  },

  // --- GROUP 3: IKALAWANG PAGBABALIK, DAPITAN, AT MGA HULING ARAW ---
  {
    id: 131,
    topic: "Dapitan at Huling Araw",
    question: "Kailan naganap ang ikalawang pagbabalik ni Rizal sa Pilipinas mula sa Hong Kong?",
    options: ["Hunyo 26, 1892", "Hulyo 3, 1892", "Hulyo 6, 1892", "Hulyo 15, 1892"],
    answer: "Hunyo 26, 1892",
    explanation: "Bumalik siya noong Hunyo 26, 1892."
  },
  {
    id: 132,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang kapatid na kasama ni Rizal sa kanyang pagbalik sa Pilipinas noong Hunyo 1892?",
    options: ["Lucia Rizal", "Narcisa Rizal", "Saturnina Rizal", "Trinidad Rizal"],
    answer: "Lucia Rizal",
    explanation: "Si Lucia Rizal ang kanyang kasama sa pag-uwi."
  },
  {
    id: 133,
    topic: "Dapitan at Huling Araw",
    question: "Anong bapor ang sinakyan nina Rizal at Lucia mula Hong Kong patungong Maynila?",
    options: ["Bapor Don Juan", "Bapor Cebu", "Bapor España", "Isla de Panay"],
    answer: "Bapor Don Juan",
    explanation: "Lulan sila ng Bapor Don Juan."
  },
  {
    id: 134,
    topic: "Dapitan at Huling Araw",
    question: "Saang hotel tumuloy sina Rizal at Lucia sa Maynila pagdating nila?",
    options: ["Hotel de Oriente", "Manila Hotel", "Oriente Palace", "Hotel de Paris"],
    answer: "Hotel de Oriente",
    explanation: "Tumuloy sila sa Hotel de Oriente."
  },
  {
    id: 135,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang numero ng silid ni Rizal sa Hotel de Oriente?",
    options: ["Silid 22", "Silid 10", "Silid 45", "Silid 5"],
    answer: "Silid 22",
    explanation: "Silid 22 ang numero ng kanyang silid."
  },
  {
    id: 136,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang gobernador-heneral na kinausap ni Rizal sa Malacañang matapos ang kanyang pagbabalik?",
    options: ["Eulogio Despujol", "Valeriano Weyler", "Camilo de Polavieja", "Ramon Blanco"],
    answer: "Eulogio Despujol",
    explanation: "Si Gobernador-Heneral Eulogio Despujol ang kanyang kinausap."
  },
  {
    id: 137,
    topic: "Dapitan at Huling Araw",
    question: "Kailan isinagawa ang ipinabalik na panayam o pakikipag-usap ni Rizal kay Gobernador-Heneral Despujol?",
    options: ["Hunyo 29, 1892", "Hulyo 3, 1892", "Hunyo 26, 1892", "Hulyo 6, 1892"],
    answer: "Hunyo 29, 1892",
    explanation: "Nagkaroon ng panayam noong Hunyo 29, 1892."
  },
  {
    id: 138,
    topic: "Dapitan at Huling Araw",
    question: "Sino-sino ang mga kapatid na babae na binisita ni Rizal sa kanyang pagbalik sa Maynila maliban kay Lucia?",
    options: ["Narcisa at Saturnina", "Trinidad at Josepha", "Olympia at Maria", "Maria at Paz"],
    answer: "Narcisa at Saturnina",
    explanation: "Sina Narcisa at Saturnina ang kanyang binisita."
  },
  {
    id: 139,
    topic: "Dapitan at Huling Araw",
    question: "Kailan isinagawa ni Rizal ang kanyang paglalakbay sa Gitnang Luzon sakay ng tren?",
    options: ["Hunyo 27, 1892", "Hunyo 28, 1892", "Hulyo 3, 1892", "Hulyo 6, 1892"],
    answer: "Hunyo 27, 1892",
    explanation: "Naglakbay siya sa Gitnang Luzon noong Hunyo 27, 1892."
  },
  {
    id: 140,
    topic: "Dapitan at Huling Araw",
    question: "Saang istasyon ng tren sumakay si Rizal patungong Gitnang Luzon?",
    options: ["Istasyon ng Tutuban", "Istasyon ng Paco", "Istasyon ng Caloocan", "Istasyon ng Binondo"],
    answer: "Istasyon ng Tutuban",
    explanation: "Sa Istasyon ng Tutuban siya sumakay ng tren."
  },
  {
    id: 141,
    topic: "Dapitan at Huling Araw",
    question: "Ano-ano ang mga pangunahing lugar sa Gitnang Luzon na binisita ni Rizal noong Hunyo 1892?",
    options: ["Malolos, San Fernando, Tarlac, at Bacolor", "Calamba, Biñan, at Santa Rosa", "Vigan, Laoag, at Paoay", "Cavite, Imus, at Bacoor"],
    answer: "Malolos, San Fernando, Tarlac, at Bacolor",
    explanation: "Sila ang mga binisitang bayan sa Gitnang Luzon."
  },
  {
    id: 142,
    topic: "Dapitan at Huling Araw",
    question: "Kailan naganap ang pagbabalik ni Rizal sa Maynila mula sa kanyang paglalakbay sa Gitnang Luzon?",
    options: ["Hunyo 28, 1892", "Hunyo 29, 1892", "Hulyo 3, 1892", "Hulyo 6, 1892"],
    answer: "Hunyo 28, 1892",
    explanation: "Bumalik siya sa Maynila noong Hunyo 28, 1892."
  },
  {
    id: 143,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pangalan ng samahang itinatag ni Rizal upang pag-isahin ang mga Pilipino at itaguyod ang reporma noong Hulyo 1892?",
    options: ["La Liga Filipina", "Katipunan", "Asosasyong Internasyonal", "Sociedad de Agricultores"],
    answer: "La Liga Filipina",
    explanation: "La Liga Filipina ang samahang itinatag."
  },
  {
    id: 144,
    topic: "Dapitan at Huling Araw",
    question: "Kailan opisyal na itinatag ang La Liga Filipina?",
    options: ["Hulyo 3, 1892", "Hunyo 26, 1892", "Hulyo 6, 1892", "Hulyo 15, 1892"],
    answer: "Hulyo 3, 1892",
    explanation: "Itinatag ito noong Hulyo 3, 1892."
  },
  {
    id: 145,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang may-ari ng tahanan sa Tondo kung saan itinatag ang La Liga Filipina?",
    options: ["Doroteo Ongjunco", "Ambrosio Salvador", "Deodato Arellano", "Bonifacio Arevalo"],
    answer: "Doroteo Ongjunco",
    explanation: "Si Doroteo Ongjunco ang may-ari ng bahay sa Kalye Ylaya, Tondo."
  },
  {
    id: 146,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang unang nahalal na Pangulo ng La Liga Filipina?",
    options: ["Ambrosio Salvador", "Deodato Arellano", "Bonifacio Arevalo", "Agustin dela Rosa"],
    answer: "Ambrosio Salvador",
    explanation: "Si Ambrosio Salvador ang pangulo."
  },
  {
    id: 147,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang naglingkod bilang Kalihim ng La Liga Filipina?",
    options: ["Deodato Arellano", "Bonifacio Arevalo", "Agustin dela Rosa", "Domingo Franco"],
    answer: "Deodato Arellano",
    explanation: "Si Deodato Arellano ang kalihim."
  },
  {
    id: 148,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang naglingkod bilang Ingat-yaman (Treasurer) ng La Liga Filipina?",
    options: ["Bonifacio Arevalo", "Agustin dela Rosa", "Ambrosio Salvador", "Deodato Arellano"],
    answer: "Bonifacio Arevalo",
    explanation: "Si Bonifacio Arevalo ang ingat-yaman."
  },
  {
    id: 149,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang naglingkod bilang Piskal ng La Liga Filipina?",
    options: ["Agustin dela Rosa", "Domingo Franco", "Jose Ramos", "Moises Salvador"],
    answer: "Agustin dela Rosa",
    explanation: "Si Agustin dela Rosa ang piskal."
  },
  {
    id: 150,
    topic: "Dapitan at Huling Araw",
    question: "Sino-sino ang iba pang mga mahahalagang kasapi at tagapagtatag na dumalo sa pagtitipon ng La Liga Filipina?",
    options: [
      "Andres Bonifacio, Apolinario Mabini, Domingo Franco, Pedro Serrano Laktaw, at iba pa",
      "Juan Luna, Valentin Ventura, at Trinidad Pardo de Tavera",
      "Pio Valenzuela, Jacinto, at Aguinaldo",
      "Morga, Blumentritt, at Rost"
    ],
    answer: "Andres Bonifacio, Apolinario Mabini, Domingo Franco, Pedro Serrano Laktaw, at iba pa",
    explanation: "Sila ang mga dumalo kasama sina Jose Ramos, Moises Salvador, Numeriano Adriano, Teodoro Plata, at Juan Zulueta."
  },
  {
    id: 151,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang buwanang butaw na sinisingil sa bawat kasapi ng La Liga Filipina?",
    options: ["10 sentimos", "5 sentimos", "25 sentimos", "1 piso"],
    answer: "10 sentimos",
    explanation: "10 sentimos ang buwanang butaw."
  },
  {
    id: 152,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang Latin na sagisag o moto ng La Liga Filipina?",
    options: ["Unus instar omnium", "Consummatum est", "Status quo", "Perla de hombre"],
    answer: "Unus instar omnium",
    explanation: "Unus instar omnium ang moto nito."
  },
  {
    id: 153,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang kahulugan sa Tagalog ng 'Unus instar omnium'?",
    options: ["Bawa't isa ay katulad ng lahat", "Ang kalayaan ay para sa lahat", "Pagkakaisa hanggang wakas", "Mabuhay ang Inang Bayan"],
    answer: "Bawa't isa ay katulad ng lahat",
    explanation: "Ito ay nangangahulugang 'Bawa't isa ay katulad ng lahat'."
  },
  {
    id: 154,
    topic: "Dapitan at Huling Araw",
    question: "Ano-ano ang mga pangunahing larangan na nais suportahan at itaguyod ng La Liga Filipina?",
    options: ["Edukasyon, agrikultura, at komersyo", "Militarismo at pagtatanggol", "Sining at panitikan lamang", "Relihiyon at misyon"],
    answer: "Edukasyon, agrikultura, at komersyo",
    explanation: "Edukasyon, agrikultura, at komersyo ang mga pangunahing larangan."
  },
  {
    id: 155,
    topic: "Dapitan at Huling Araw",
    question: "Kailan opisyal na dinakip si Rizal sa Maynila matapos itatag ang Liga?",
    options: ["Hulyo 6, 1892", "Hulyo 7, 1892", "Hulyo 15, 1892", "Hulyo 17, 1892"],
    answer: "Hulyo 6, 1892",
    explanation: "Dinakip siya noong Hulyo 6, 1892."
  },
  {
    id: 156,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pangalan ng polyeto na ginamit na dahilan upang dakpin si Rizal?",
    options: ["Pobres Frailes", "Verdades Nuevas", "Por Telefono", "Ingratitudes"],
    answer: "Pobres Frailes",
    explanation: "Ang Pobres Frailes ang polyetong ginawang dahilan."
  },
  {
    id: 157,
    topic: "Dapitan at Huling Araw",
    question: "Anong pangalan ang ginamit sa loob ng polyetong Pobres Frailes?",
    options: ["Padre Jacinto", "Dimas Alang", "Laong Laan", "Teniuz"],
    answer: "Padre Jacinto",
    explanation: "Padre Jacinto ang pangalang ginamit sa polyeto."
  },
  {
    id: 158,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang kapatid na babae ni Rizal na inuugnay sa bagahe kung saan sinabing natagpuan ang polyeto?",
    options: ["Lucia Rizal", "Narcisa Rizal", "Saturnina Rizal", "Trinidad Rizal"],
    answer: "Lucia Rizal",
    explanation: "Si Lucia Rizal ang kasama niya noon."
  },
  {
    id: 159,
    topic: "Dapitan at Huling Araw",
    question: "Saang bilangguan unang pinadala si Rizal noong Hulyo 1892?",
    options: ["Fort Santiago", "Bilibid", "Montjuïc", "Cuartel de España"],
    answer: "Fort Santiago",
    explanation: "Sa Fort Santiago siya unang ikinulong."
  },
  {
    id: 160,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang pamangkin at ayudante ng gobernador-heneral na sumama sa pagdala kay Rizal sa Fort Santiago?",
    options: ["Ramon Despujol", "Enrique Villamor", "Rafael Dominguez", "Koronel Olive"],
    answer: "Ramon Despujol",
    explanation: "Si Ramon Despujol ang nagdala sa kanya sa muog."
  },
  {
    id: 161,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang taong sumalubong sa pagdating ni Rizal sa Fort Santiago?",
    options: ["Enrique Villamor", "Ramon Despujol", "Koronel Olive", "Kapitan Delgras"],
    answer: "Enrique Villamor",
    explanation: "Si Enrique Villamor ang sumalubong sa kanya."
  },
  {
    id: 162,
    topic: "Dapitan at Huling Araw",
    question: "Anong pahayagan ang nagbalita tungkol sa pagkakadakip kay Rizal noong Hulyo 7, 1892?",
    options: ["Gaceta de Manila", "La Solidaridad", "El Heraldo de Madrid", "La Independencia"],
    answer: "Gaceta de Manila",
    explanation: "Ang Gaceta de Manila ang nagbalita nito."
  },
  {
    id: 163,
    topic: "Dapitan at Huling Araw",
    question: "Kailan inilipat si Rizal mula sa Fort Santiago patungong Dapitan sa Mindanao?",
    options: ["Hulyo 15, 1892", "Hulyo 6, 1892", "Hulyo 17, 1892", "Hunyo 26, 1892"],
    answer: "Hulyo 15, 1892",
    explanation: "Inilipat siya noong Hulyo 15, 1892."
  },
  {
    id: 164,
    topic: "Dapitan at Huling Araw",
    question: "Anong barko ang sinakyan ni Rizal patungong Dapitan?",
    options: ["Bapor Cebu", "Bapor Don Juan", "Bapor España", "Isla de Panay"],
    answer: "Bapor Cebu",
    explanation: "Lulan siya ng Bapor Cebu."
  },
  {
    id: 165,
    topic: "Dapitan at Huling Araw",
    question: "Kailan dumating si Rizal sa Dapitan?",
    options: ["Hulyo 17, 1892", "Hulyo 15, 1892", "Hulyo 6, 1892", "Agosto 1893"],
    answer: "Hulyo 17, 1892",
    explanation: "Dumating siya noong Hulyo 17, 1892."
  },
  {
    id: 166,
    topic: "Dapitan at Huling Araw",
    question: "Saang dalampasigan lumunsad si Rizal nang dumating siya sa Dapitan?",
    options: ["Dalampasigan ng Sta. Cruz", "Dalampasigan ng Talisay", "Maynila Bay", "Manila Port"],
    answer: "Dalampasigan ng Sta. Cruz",
    explanation: "Sa Dalampasigan ng Sta. Cruz siya lumunsad."
  },
  {
    id: 167,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang kapitang kasama ni Rizal sa pagdating sa Dapitan sakay ng Bapor Cebu?",
    options: ["Kapitan Delgras", "Kapitan Rafael Dominguez", "Ricardo Carnicero", "A. Alemany"],
    answer: "Kapitan Delgras",
    explanation: "Si Kapitan Delgras ang kapitan ng barko."
  },
  {
    id: 168,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pangalan ng unang tinuluyan at pinag-opisinahan ni Rizal sa Dapitan?",
    options: ["Casa Real", "Casa Residencia sa Talisay", "Hotel de Oriente", "Cuartel de España"],
    answer: "Casa Real",
    explanation: "Casa Real ang unang tinuluyan niya."
  },
  {
    id: 169,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang superyor ng mga Heswita na nakipag-ugnayan tungkol sa kalagayan ni Rizal sa Dapitan?",
    options: ["Padre Pablo Pastells", "Padre Antonio Obach", "Padre Vicente Balaguer", "Padre Luis Visa"],
    answer: "Padre Pablo Pastells",
    explanation: "Si Padre Pablo Pastells ang superyor ng mga Heswita."
  },
  {
    id: 170,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang paring misyonero sa Dapitan na binanggit kaugnay ng pagpapatapon kay Rizal?",
    options: ["Padre Antonio Obach", "Padre Pablo Pastells", "Padre March", "Padre Villaclara"],
    answer: "Padre Antonio Obach",
    explanation: "Si Padre Antonio Obach ang paring misyonero doon."
  },
  {
    id: 171,
    topic: "Dapitan at Huling Araw",
    question: "Kailan dumating sa Dapitan ang ina ni Rizal at kapatid niyang si Maria?",
    options: ["Agosto 1893", "Setyembre 1892", "Marso 1896", "Hulyo 1892"],
    answer: "Agosto 1893",
    explanation: "Dumating sila noong Agosto 1893."
  },
  {
    id: 172,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang lawak ng lupang binanggit na tinamnan at pinagyaman ni Rizal sa Dapitan?",
    options: ["16 na ektarya", "10 ektarya", "20 ektarya", "25 ektarya"],
    answer: "16 na ektarya",
    explanation: "16 na ektarya ang lawak ng lupang pinagyaman niya."
  },
  {
    id: 173,
    topic: "Dapitan at Huling Araw",
    question: "Ano-ano ang mga pangunahing pananim ni Rizal sa kanyang lupain sa Dapitan?",
    options: ["Kakaw, kape, tubo, at niyog", "Palay, mais, at gulay", "Mangga, saging, at lansones", "Tabako at abaka"],
    answer: "Kakaw, kape, tubo, at niyog",
    explanation: "Kakaw, kape, tubo, at niyog ang kanyang mga pananim."
  },
  {
    id: 174,
    topic: "Dapitan at Huling Araw",
    question: "Anong buwan at taon napanalunan ni Rizal at ng mga kasama ang bahagi ng premyo sa Loteryang Manila?",
    options: ["Setyembre 1892", "Agosto 1893", "Hunyo 1892", "Hulyo 1892"],
    answer: "Setyembre 1892",
    explanation: "Nanalo sila noong Setyembre 1892."
  },
  {
    id: 175,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang isa sa mga kasamang may bahagi sa nanalong tiket sa loterya bukod kay Rizal at Carnicero?",
    options: ["Francisco Equilior", "Jose Ma. Basa", "Valentin Ventura", "Pio Valenzuela"],
    answer: "Francisco Equilior",
    explanation: "Si Francisco Equilior ang kasamang may bahagi sa tiket."
  },
  {
    id: 176,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pangalan ng samahang itinatag ni Rizal para sa kooperasyon ng mga magsasaka sa Dapitan noong 1895?",
    options: ["Sociedad de Agricultores Dapitanos", "La Liga Filipina", "Hermandad de la Paz y Caridad", "Asosasyong Internasyonal"],
    answer: "Sociedad de Agricultores Dapitanos",
    explanation: "Itinatag ito noong 1895."
  },
  {
    id: 177,
    topic: "Dapitan at Huling Araw",
    question: "Anong katutubong wika sa Mindanao ang pinag-aralan ni Rizal habang siya ay nasa Dapitan bilang 'linguista'?",
    options: ["Subanon", "Cebuano", "Ilonggo", "Waray"],
    answer: "Subanon",
    explanation: "Ang wikang Subanon ang kanyang pinag-aralan."
  },
  {
    id: 178,
    topic: "Dapitan at Huling Araw",
    question: "Sa anong edad nililok ni Rizal ang eskultura ng Kabanal-banalang Puso ni Hesus mula sa kahoy na baticuling?",
    options: ["Edad 14", "Edad 18", "Edad 21", "Edad 25"],
    answer: "Edad 14",
    explanation: "Nililok niya ito noong siya ay 14 taong gulang."
  },
  {
    id: 179,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pamagat ng likhang-sining ni Rizal na tumutukoy sa tauhan sa mitolohiyang Griyego na nagdusa?",
    options: ["Prometheus Bound", "Pananagumpay ng Agham sa Kamatayan", "Ang Paghihiganti ng Isang Ina", "Ang Babae ng Dapitan"],
    answer: "Prometheus Bound",
    explanation: "Prometheus Bound ang likhang-sining na ito."
  },
  {
    id: 180,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang kilalang pangalan sa Espanyol ng likhang-sining ni Rizal na 'Ang Paghihiganti ng Isang Ina'?",
    options: ["La venganza de la madre", "La madre doliente", "Madre y patria", "El dolor"],
    answer: "La venganza de la madre",
    explanation: "Kilala rin ito bilang La venganza de la madre."
  },
  {
    id: 181,
    topic: "Dapitan at Huling Araw",
    question: "Anong taon idineklarang National Cultural Treasure ang 'Ang Paghihiganti ng Isang Ina'?",
    options: ["2008", "1995", "2012", "2000"],
    answer: "2008",
    explanation: "Idineklara itong National Cultural Treasure noong 2008."
  },
  {
    id: 182,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pamagat ng isa pang likhang-sining ni Rizal na nagpapakita ng babaeng naglalaba sa Dapitan (kilala rin bilang Oyang Dapitana)?",
    options: ["Ang Babae ng Dapitan (Oyang Dapitana)", "Imahen ng Mahal na Birhen", "Mi Retiro", "Himno a Talisay"],
    answer: "Ang Babae ng Dapitan (Oyang Dapitana)",
    explanation: "Ito ang Ang Babae ng Dapitan."
  },
  {
    id: 183,
    topic: "Dapitan at Huling Araw",
    question: "Anong mga banyagang akda ang binanggit na nakaimpluwensya o inspirasyon sa mga isinulat ni Rizal?",
    options: ["Uncle Tom's Cabin at The Wandering Jew", "Don Quixote at Les Miserables", "Odyssey at Iliad", "Frankenstein at Dracula"],
    answer: "Uncle Tom's Cabin at The Wandering Jew",
    explanation: "Sila ang mga akdang binanggit na nagbigay inspirasyon."
  },
  {
    id: 184,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pamagat ng tulang naghahambing sa buhay at paglalakbay na puno ng pagbabago na isinulat sa Dapitan (Ang Awit ng Manlalakbay)?",
    options: ["El Canto del Viajero (Ang Awit ng Manlalakbay)", "Mi Retiro", "Himno a Talisay", "Mi Ultimo Adios"],
    answer: "El Canto del Viajero (Ang Awit ng Manlalakbay)",
    explanation: "El Canto del Viajero ang pamagat nito."
  },
  {
    id: 185,
    topic: "Dapitan at Huling Araw",
    question: "Kailan isinulat ang liham ni Rizal sa kanyang ina na nagbanggit sa sanggol nila ni Josephine Bracken na si Francisco?",
    options: ["Marso 12, 1896", "Hunyo 21, 1896", "Hulyo 31, 1896", "Disyembre 30, 1896"],
    answer: "Marso 12, 1896",
    explanation: "Marso 12, 1896 ang petsa ng liham."
  },
  {
    id: 186,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pangalan ng bapor na sinakyan ni Dr. Pio Valenzuela patungong Dapitan upang makipagkita kay Rizal?",
    options: ["Bapor Venus", "Bapor Cebu", "Bapor España", "Bapor Don Juan"],
    answer: "Bapor Venus",
    explanation: "Lulan si Pio Valenzuela ng Bapor Venus."
  },
  {
    id: 187,
    topic: "Dapitan at Huling Araw",
    question: "Kailan naganap ang pakikipagkita at pagbisita ni Pio Valenzuela kay Rizal sa Dapitan?",
    options: ["Hunyo 21, 1896", "Hulyo 31, 1896", "Marso 12, 1896", "Hunyo 26, 1892"],
    answer: "Hunyo 21, 1896",
    explanation: "Naganap ito noong Hunyo 21, 1896."
  },
  {
    id: 188,
    topic: "Dapitan at Huling Araw",
    question: "Kailan opisyal na lumisan si Rizal sa Dapitan upang maglingkod sana sa Cuba?",
    options: ["Hulyo 31, 1896", "Hunyo 21, 1896", "Oktubre 6, 1896", "Nobyembre 3, 1896"],
    answer: "Hulyo 31, 1896",
    explanation: "Lumisan siya noong Hulyo 31, 1896 sakay ng Bapor España."
  },
  {
    id: 189,
    topic: "Dapitan at Huling Araw",
    question: "Ilang araw pinanatili si Rizal sa Kruserang Castilla sa Look ng Maynila bago ang paglalayag patungong Espanya?",
    options: ["27 araw", "10 araw", "15 araw", "30 araw"],
    answer: "27 araw",
    explanation: "27 araw siyang nanatili sa Kruserang Castilla."
  },
  {
    id: 190,
    topic: "Dapitan at Huling Araw",
    question: "Anong barko ang sinakyan ni Rizal sa kanyang paglalayag na patungong Europa noong 1896 kung saan siya idinipensahan at dinala sa Espanya?",
    options: ["Isla de Panay", "S.S. Colón", "SS City of Rome", "S.S. Melbourne"],
    answer: "Isla de Panay",
    explanation: "Lulan siya ng Isla de Panay."
  },
  {
    id: 191,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang kapitan ng Isla de Panay na nagpadala ng liham kay Rizal sa paglalakbay?",
    options: ["A. Alemany", "Kapitan Delgras", "Pedro P. Roxas", "Santiago Mataix"],
    answer: "A. Alemany",
    explanation: "Si A. Alemany ang kapitan ng barko."
  },
  {
    id: 192,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang kapwa pasahero na bumaba sa Singapore habang si Rizal ay nagpatuloy sa paglalakbay?",
    options: ["Pedro P. Roxas", "Jose Ma. Basa", "Sixto Lopez", "Edmund Plauchut"],
    answer: "Pedro P. Roxas",
    explanation: "Si Pedro P. Roxas ang bumaba sa Singapore."
  },
  {
    id: 193,
    topic: "Dapitan at Huling Araw",
    question: "Saang lugar sa paglalakbay pinag-usapan ang posibilidad ng pagbaba o pag-alpas ni Rizal mula sa barko?",
    options: ["Malta", "Singapore", "Colombo", "Barcelona"],
    answer: "Malta",
    explanation: "Sa Malta pinag-usapan ang posibleng pagbaba niya."
  },
  {
    id: 194,
    topic: "Dapitan at Huling Araw",
    question: "Saang lungsod sa Espanya pansamantalang dinala si Rizal sa ilalim ng pagbabantay bago ikulong sa muog?",
    options: ["Barcelona", "Madrid", "Seville", "Valencia"],
    answer: "Barcelona",
    explanation: "Sa Barcelona siya dinala."
  },
  {
    id: 195,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pangalan ng tanggulan o muog sa Barcelona kung saan pansamantalang ikinulong si Rizal?",
    options: ["Muog ng Montjuïc", "Fort Santiago", "Cuartel de España", "Bilibid"],
    answer: "Muog ng Montjuïc",
    explanation: "Sa Muog ng Montjuïc siya ikinulong."
  },
  {
    id: 196,
    topic: "Dapitan at Huling Araw",
    question: "Kailan eksaktong ikinulong si Rizal sa Montjuïc sa Barcelona bago ibalik sa Maynila?",
    options: ["Oktubre 6, 1896", "Nobyembre 3, 1896", "Disyembre 30, 1896", "Hulyo 31, 1896"],
    answer: "Oktubre 6, 1896",
    explanation: "Ikinulong siya roon noong Oktubre 6, 1896."
  },
  {
    id: 197,
    topic: "Dapitan at Huling Araw",
    question: "Anong barkong panghukbo ang nagbalik kay Rizal sa Maynila bilang bihag at bilanggo?",
    options: ["S.S. Colón", "Isla de Panay", "Kruserang Castilla", "Bapor España"],
    answer: "S.S. Colón",
    explanation: "S.S. Colón ang nagbalik sa kanya sa Pilipinas."
  },
  {
    id: 198,
    topic: "Dapitan at Huling Araw",
    question: "Kailan dumating si Rizal sa Maynila mula Espanya sakay ng S.S. Colón?",
    options: ["Nobyembre 3, 1896", "Oktubre 6, 1896", "Disyembre 29, 1896", "Disyembre 30, 1896"],
    answer: "Nobyembre 3, 1896",
    explanation: "Dumating siya noong Nobyembre 3, 1896."
  },
  {
    id: 199,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang huwes panghukbo o opisyal na pinagdalhan ng resulta ng paunang pagsisiyasat ni Koronel Olive?",
    options: ["Rafael Dominguez", "Nicolas de la Peña", "Enrique de Alcocer", "Jose Togores Arjona"],
    answer: "Rafael Dominguez",
    explanation: "Si Rafael Dominguez ang huwes panghukbo."
  },
  {
    id: 200,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang hukom ng hukbo na nagpayo tungkol sa pormal na paglilitis kay Rizal?",
    options: ["Nicolas de la Peña", "Rafael Dominguez", "Koronel Olive", "Enrique de Alcocer"],
    answer: "Nicolas de la Peña",
    explanation: "Si Nicolas de la Peña ang nagbigay ng payo sa hukbo."
  },
  {
    id: 201,
    topic: "Dapitan at Huling Araw",
    question: "Kailan inilipat ang mga resulta ng paunang pagsisiyasat kay Rafael Dominguez?",
    options: ["Disyembre 2, 1896", "Disyembre 5, 1896", "Disyembre 10, 1896", "Disyembre 29, 1896"],
    answer: "Disyembre 2, 1896",
    explanation: "Inilipat ito noong Disyembre 2, 1896."
  },
  {
    id: 202,
    topic: "Dapitan at Huling Araw",
    question: "Kailan isinagawa ang pagsangguni sa hukom ng hukbo hinggil sa pormal na paglilitis?",
    options: ["Disyembre 5, 1896", "Disyembre 2, 1896", "Disyembre 10, 1896", "Disyembre 26, 1896"],
    answer: "Disyembre 5, 1896",
    explanation: "Isinagawa ito noong Disyembre 5, 1896."
  },
  {
    id: 203,
    topic: "Dapitan at Huling Araw",
    question: "Ilang opisyal ang nasa opisyal na listahan ng maaaring mapiling tagapagtanggol ni Rizal?",
    options: ["106 na opisyal", "50 na opisyal", "200 na opisyal", "75 na opisyal"],
    answer: "106 na opisyal",
    explanation: "106 na opisyal ang nasa listahan."
  },
  {
    id: 204,
    topic: "Dapitan at Huling Araw",
    question: "Kailan natanggap ang listahan ng mga posibleng tagapagtanggol ni Rizal?",
    options: ["Disyembre 10, 1896", "Disyembre 2, 1896", "Disyembre 5, 1896", "Disyembre 29, 1896"],
    answer: "Disyembre 10, 1896",
    explanation: "Natanggap ito noong Disyembre 10, 1896."
  },
  {
    id: 205,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang pangulo ng hukumang militar na lumitis kay Rizal?",
    options: ["Jose Togores Arjona", "Enrique de Alcocer", "Rafael Dominguez", "Nicolas de la Peña"],
    answer: "Jose Togores Arjona",
    explanation: "Si Jose Togores Arjona ang pangulo ng hukumang militar."
  },
  {
    id: 206,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang opisyal na tagapag-usig (fiscal) sa paglilitis kay Rizal?",
    options: ["Enrique de Alcocer", "Jose Togores Arjona", "Rafael Dominguez", "Koronel Olive"],
    answer: "Enrique de Alcocer",
    explanation: "Si Enrique de Alcocer ang nag-usig kay Rizal."
  },
  {
    id: 207,
    topic: "Dapitan at Huling Araw",
    question: "Saang lugar sa Intramuros isinagawa ang pormal na paglilitis kay Rizal noong 1896?",
    options: ["Cuartel de España", "Fort Santiago", "Palacio del Gobernador", "Katedral ng Maynila"],
    answer: "Cuartel de España",
    explanation: "Sa Cuartel de España isinagawa ang paglilitis."
  },
  {
    id: 208,
    topic: "Dapitan at Huling Araw",
    question: "Ano-ano ang mga kasong isinampa laban kay Rizal sa panahon ng kanyang paglilitis?",
    options: ["Rebelyon, sedisyon, at pagbuo ng ilegal na samahan", "Pagnanakaw at paninira", "Pagpatay at pagtataksil", "Pandaraya sa buwis"],
    answer: "Rebelyon, sedisyon, at pagbuo ng ilegal na samahan",
    explanation: "Rebelyon at sedisyon ang mga pangunahing paratang."
  },
  {
    id: 209,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang sagisag-panulat ni Rizal na ginamit sa liham na binanggit bilang bahagi ng ebidensya laban sa kanya?",
    options: ["Dimasalang (Dimasalang / Laong Laan)", "Teniuz", "Plaridel", "Tikbalang"],
    answer: "Dimasalang (Dimasalang / Laong Laan)",
    explanation: "Dimasalang ang sagisag-panulat na ginamit sa liham."
  },
  {
    id: 210,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang alyas o pangalang ginamit ni Juan Zulueta sa liham na binanggit sa ulat?",
    options: ["Teniuz", "Dimasalang", "Plaridel", "Jormas"],
    answer: "Teniuz",
    explanation: "Teniuz ang alyas ni Juan Zulueta."
  },
  {
    id: 211,
    topic: "Dapitan at Huling Araw",
    question: "Anong artikulo ng Kodigo Penal ng Espanya ang binanggit sa pagtalakay sa batayan ng kaso ni Rizal?",
    options: ["Artikulo 189", "Artikulo 250", "Artikulo 100", "Artikulo 300"],
    answer: "Artikulo 189",
    explanation: "Artikulo 189 ng Kodigo Penal ang binanggit."
  },
  {
    id: 212,
    topic: "Dapitan at Huling Araw",
    question: "Magkano ang halagang kabayarang binanggit sa hatol kay Rizal bilang danyos kung sakaling patawarin?",
    options: ["100,000 piso", "50,000 piso", "10,000 piso", "1,000,000 piso"],
    answer: "100,000 piso",
    explanation: "100,000 piso ang halagang binanggit sa hatol."
  },
  {
    id: 213,
    topic: "Dapitan at Huling Araw",
    question: "Kailan binasa kay Rizal ang hatol ng kamatayan sa kanyang selda sa Fort Santiago?",
    options: ["Disyembre 29, 1896", "Disyembre 30, 1896", "Disyembre 26, 1896", "Disyembre 28, 1896"],
    answer: "Disyembre 29, 1896",
    explanation: "Binasa ito noong Disyembre 29, 1896."
  },
  {
    id: 214,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang arsobispo ng Maynila na humiling na gabayan si Rizal ng mga Heswita sa kanyang mga huling oras?",
    options: ["Padre Bernardino Nozaleda", "Padre Vicente Balaguer", "Padre Luis Visa", "Padre March"],
    answer: "Padre Bernardino Nozaleda",
    explanation: "Si Arsobispo Padre Bernardino Nozaleda ang humiling nito."
  },
  {
    id: 215,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang katangian ng huling tulang iniwan ni Rizal bago siya barilin na nakilala bilang Mi Ultimo Adios?",
    options: ["Walang orihinal na pamagat", "May mahabang introduksyon", "Nakasulat sa wikang Kastila at Tagalog", "Ipinadala sa pahayagan noon din"],
    answer: "Walang orihinal na pamagat",
    explanation: "Wala itong orihinal na pamagat; pinamagatan lamang kalaunan."
  },
  {
    id: 216,
    topic: "Dapitan at Huling Araw",
    question: "Sino-sino ang mga huling sinulatan ni Rizal ng mga liham bago siya mamatay maliban kay Blumentritt?",
    options: ["Paciano Rizal, Francisco Mercado, at Teodora Alonso", "Valentin Ventura at Juan Luna", "Jose Ma. Basa at Sixto Lopez", "Pio Valenzuela at Andres Bonifacio"],
    answer: "Paciano Rizal, Francisco Mercado, at Teodora Alonso",
    explanation: "Sila ang kanyang huling sinulatan bukod kay Blumentritt."
  },
  {
    id: 217,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang arsobispo o mga paring Heswita na nakasama ni Rizal sa paglakad patungong Bagumbayan?",
    options: ["Padre March at Padre Villaclara", "Padre Balaguer at Padre Visa", "Padre Nozaleda at Padre Faura", "Padre Obach at Padre Pastells"],
    answer: "Padre March at Padre Villaclara",
    explanation: "Sina Padre March at Padre Villaclara ang naglakad kasama niya."
  },
  {
    id: 218,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang abogadong kaibigan ni Rizal na nakita niya sa daan patungong Bagumbayan?",
    options: ["Eduardo Gutierrez Repide", "Luis Taviel de Andrade", "Enrique de Alcocer", "Rafael Dominguez"],
    answer: "Eduardo Gutierrez Repide",
    explanation: "Si Eduardo Gutierrez Repide ang nakasalamuha niya sa daan."
  },
  {
    id: 219,
    topic: "Dapitan at Huling Araw",
    question: "Anong pintuan ng Intramuros ang dinaanan ng pangkat patungong Bagumbayan?",
    options: ["Postigo", "Real", "Isabel II", "Parian"],
    answer: "Postigo",
    explanation: "Sa Pintuan ng Postigo sila dumaan."
  },
  {
    id: 220,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang dating pangalan ng daang tinatawag ngayong Bonifacio Drive kung saan dumaan si Rizal patungong pagbaril?",
    options: ["Malecon", "Escolta", "Azcarraga", "Oroquieta"],
    answer: "Malecon",
    explanation: "Malecon ang dating pangalan nito."
  },
  {
    id: 221,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang doktor ng hukbo na sinabing sumuri sa pulso ni Rizal bago ang pagbaril?",
    options: ["Dr. Felipe Ruiz Castro o Castillo", "Dr. Lorenzo Marques", "Dr. Ariston Bautista", "Dr. Pio Valenzuela"],
    answer: "Dr. Felipe Ruiz Castro o Castillo",
    explanation: "Si Dr. Felipe Ruiz Castro o Castillo ang doktor ng hukbo."
  },
  {
    id: 222,
    topic: "Dapitan at Huling Araw",
    question: "Anong mga salitang Kastila ang binigkas ng mga opisyal bago isinagawa ang pagbaril (Preparen, Apunten, Fuego)?",
    options: ["Handa, Tutok, Barilin", "Sulong, Tigil, Putok", "Puntirya, Baril", "Alerto, Apuntem, Fuego"],
    answer: "Handa, Tutok, Barilin",
    explanation: "Preparen (Handa), Apunten (Tutok), Fuego (Barilin)."
  },
  {
    id: 223,
    topic: "Dapitan at Huling Araw",
    question: "Anong musika ang pinatugtog ng banda ng artilyeriya pagkatapos ng pagbaril kay Rizal?",
    options: ["Marche de Cadiz", "Marcha Real", "Himno Nacional", "Cadiz Anthem"],
    answer: "Marche de Cadiz",
    explanation: "Marche de Cadiz ang pinatugtog pagkatapos barilin si Rizal."
  },
  {
    id: 224,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang kapatid na naghanap sa lihim na libingan at bangkay ni Rizal sa Sementeryo ng Paco?",
    options: ["Narcisa Rizal", "Lucia Rizal", "Saturnina Rizal", "Trinidad Rizal"],
    answer: "Narcisa Rizal",
    explanation: "Si Narcisa Rizal ang matiyagang naghanap sa libingan."
  },
  {
    id: 225,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang taong pinagpagawaan ni Narcisa ng lapidang may lihim na inisyal?",
    options: ["Doroteo Ongjunco", "Doroteo Lopez", "Manuel Hidalgo", "Silvestre Ubaldo"],
    answer: "Doroteo Ongjunco",
    explanation: "Si Doroteo Ongjunco ang pinagpagawaan ng lapida."
  },
  {
    id: 226,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang mga inisyal na nakaukit nang pabaliktad sa lapida sa libingan ni Rizal?",
    options: ["RPJ", "JPR", "DA", "LL"],
    answer: "RPJ",
    explanation: "RPJ (Jose P. Rizal) ang inukit nang pabaliktad."
  },
  {
    id: 227,
    topic: "Dapitan at Huling Araw",
    question: "Sino-sino ang tatlong kasapi ng La Liga Filipina na inilista sa talaan ng sementeryo na binaril noong Enero 11, 1897?",
    options: ["Francisco Roxas, Moises Salvador at Antonio Salazar", "Andres Bonifacio, Emilio Jacinto, at Mabini", "Gomez, Burgos, at Zamora", "Pio Valenzuela, Deodato Arellano, at Franco"],
    answer: "Francisco Roxas, Moises Salvador at Antonio Salazar",
    explanation: "Sila sina Francisco Roxas, Moises Salvador, at Antonio Salazar."
  },
  {
    id: 228,
    topic: "Dapitan at Huling Araw",
    question: "Kailan binaril ang tatlong kasapi ng La Liga Filipina na nakatala sa sementeryo (Francisco Roxas, Moises Salvador at Antonio Salazar)?",
    options: ["Enero 11, 1897", "Disyembre 30, 1896", "Pebrero 17, 1872", "Hulyo 6, 1892"],
    answer: "Enero 11, 1897",
    explanation: "Binitay sila noong Enero 11, 1897."
  }
];

// --- ENUMERATION QUESTIONS ---
export interface EnumerationQuestion {
  question: string;
  requiredCount: number;
  answers: string[];
}
export const enumerationQuestions: EnumerationQuestion[] = [
  {
    question: "Ibigay ang buong pangalan ng tatlong paring martir na kilala bilang GOMBURZA.",
    requiredCount: 3,
    answers: ["Padre Mariano Gomez", "Padre Jose Burgos", "Padre Jacinto Zamora"],
  },
  {
    question: "Magbigay ng tatlong ispesimen ng hayop o insekto na natuklasan ni Rizal sa Dapitan at ipinangalan sa kanya.",
    requiredCount: 3,
    answers: ["Draco rizali", "Rhacophorus rizali", "Apogonia rizali"],
  },
  {
    question: "Magbigay ng apat sa mga pangunahing layunin o layon ng La Liga Filipina batay sa saligang-batas nito.",
    requiredCount: 4,
    answers: [
      "Pag-isahin ang buong kapuluan upang maging isang matatag at nagkakaisang katawan", 
      "Pagtataguyod ng proteksyon at pagtutulungan ng bawat kasapi", 
      "Pagtataguyod at pagsuporta sa edukasyon, agrikultura, at komersyo",
      "Pag-aaral at pagpapatupad ng mga reporma",
      "Paglaban sa lahat ng uri ng karahasan at kawalang-katarungan"
    ],
  },
  {
    question: "Magbigay ng apat na pangalan ng mga anak ng pamilyang Becket na tinuluyan ni Rizal sa London.",
    requiredCount: 4,
    answers: ["Gertrude", "Blanche", "Florence", "Grace"],
  },
  {
    question: "Magbigay ng limang pangunahing tauhan sa nobelang El Filibusterismo.",
    requiredCount: 5,
    answers: ["Simoun", "Basilio", "Isagani", "Kabesang Tales", "Maria Clara", "Paulita Gomez", "Padre Florentino", "Juanito Pelaez"],
  },
  {
    question: "Magbigay ng tatlong akda o sanaysay na isinulat ni Jose Rizal habang siya ay nasa Europa (Maliban sa mga nobela).",
    requiredCount: 3,
    answers: ["Filipinas Dentro de Cien Años", "Sobre la Indolencia de los Filipinos", "La Politica Colonial en Filipinas", "Two Eastern Fables", "Specimens of Tagalog Folklore"],
  },
  {
    question: "Magbigay ng tatlong opisyal o nagtatag ng La Liga Filipina na dumalo sa pagtitipon sa tahanan ni Doroteo Ongjunco.",
    requiredCount: 3,
    answers: ["Ambrosio Salvador", "Deodato Arellano", "Bonifacio Arevalo", "Agustin dela Rosa"],
  }
];

// --- IDENTIFICATION QUESTIONS (Exact mirror of Multiple Choice) ---
export interface IdentificationQuestion {
  question: string;
  answer: string;
}
export const identificationQuestions: IdentificationQuestion[] = multipleChoiceQuestions.map(q => ({
  question: q.question,
  answer: q.answer
}));

// --- FLASHCARD QUESTIONS (Exact mirror of Multiple Choice) ---
export interface FlashcardQuestion {
  front: string;
  back: string;
}
export const flashcardQuestions: FlashcardQuestion[] = multipleChoiceQuestions.map(q => ({
  front: q.question,
  back: `${q.answer}${q.explanation ? " — " + q.explanation : ""}`
}));

// --- MATCHING QUESTIONS (Exact mirror of Multiple Choice mapped to left/right) ---
export interface MatchingQuestion {
  id: string;
  left: string;
  right: string;
}
export const matchingQuestions: MatchingQuestion[] = multipleChoiceQuestions.map((q, index) => ({
  id: String(index + 1),
  left: q.question,
  right: q.answer
}));

// --- RECITATION QUESTIONS (In-depth reviewer) ---
export interface RecitationQuestion {
  question: string;
  keyPoints: string[];
}
export const recitationQuestions: RecitationQuestion[] = [
  {
    question: "Bakit pinili ni Rizal ang aklat ni Antonio de Morga (Sucesos de las Islas Filipinas) upang lagyan ng anotasyon kaysa sa mga isinulat ng mga prayle?",
    keyPoints: [
      "Si Morga ay may sekular at obhetibong pananaw bilang isang layko (layman) at hindi kabilang sa alinmang orden ng mga prayle.",
      "Si Morga ay direktang opisyal at saksi sa mga kaganapan at kalagayan sa Pilipinas noong maagang yugto ng pananakop ng mga Espanyol.",
      "Nais patunayan ni Rizal sa pamamagitan ng anotasyon na mayroon nang maunlad na sibilisasyon, sistema ng batas, panitikan, at kalakalan ang mga Pilipino bago dumating ang mga Kastila.",
    ],
  },
  {
    question: "Ano ang mga naging pangunahing kontribusyon, proyekto, at gawaing pang-agham ni Rizal sa panahon ng kanyang pagkakadestiyero sa Dapitan?",
    keyPoints: [
      "Nagtayo siya ng paaralan para sa mga batang lalaki kung saan nagturo siya ng mga aralin, wikang Espanyol at Ingles, heograpiya, at praktikal na kasanayan.",
      "Nagdisenyo at nagtayo ng sistema ng patubig (gravity waterworks) para sa suplay ng malinis na inuming tubig sa buong komunidad ng Dapitan nang walang pondo mula sa gobyerno.",
      "Nangolekta ng mga ispesimen ng halaman at hayop (tulad ng Draco rizali) at nagtatag ng kooperatiba ng mga magsasaka (Sociedad de Agricultores Dapitanos) upang mapaunlad ang agrikultura.",
    ],
  },
  {
    question: "Paano ipinakita sa El Filibusterismo ang pagkakaiba ng ideya ng rebolusyon at radikal na solusyon kumpara sa Noli Me Tangere?",
    keyPoints: [
      "Ang Noli Me Tangere ay naglalayong gisingin ang kamalayan ng bayan sa pamamagitan ng edukasyon, reporma, at mapayapang pamamaraan (tinawag na Aklat ng Puso).",
      "Ang El Filibusterismo ay nagdala ng madilim na tonong politikal na nagpapakita ng kabiguan ng mapayapang reporma at ang matinding panganib at kahihinatnan ng marahas na paghihiganti ni Simoun (tinawag na Aklat ng Isip).",
    ],
  },
  {
    question: "Ano ang naging layunin ng pagtatatag ng La Liga Filipina at bakit ito itinuring na malaking banta ng pamahalaang Espanyol?",
    keyPoints: [
      "Layunin nitong pag-isahin ang buong kapuluan, itaguyod ang pagtutulungan, suportahan ang edukasyon, agrikultura, at komersyo, at labanan ang kawalang-katarungan.",
      "Itinuring itong banta dahil sa kabila ng pagiging sibiko nito, may potensyal itong maging daan sa pagkakaisa at paglaya ng mga Pilipino mula sa pang-aapi ng kolonyalismo.",
    ],
  },
  {
    question: "Paano inilarawan sa mga ulat ang naging paglilitis kay Rizal noong 1896 at ano ang mga pangunahing ebidensyang ginamit laban sa kanya?",
    keyPoints: [
      "Ang paglilitis ay isinagawa sa Cuartel de España kung saan pinatunayan ng kanyang abugado na si Luis Taviel de Andrade ang kakulangan ng matibay at ligal na ebidensya.",
      "Ginamit laban sa kanya ang mga dokumento ng La Liga Filipina, ang kanyang mga nobela, at mga personal na liham na naglalaman ng mga sagisag-panulat tulad ng Dimasalang.",
    ],
  },
  {
    question: "Paano nakaapekto ang Krisis Agraryo sa Calamba sa personal na buhay ni Rizal at sa tonong ginamit niya sa pagsulat ng El Filibusterismo?",
    keyPoints: [
      "Ang sapilitang pagpapaalis at pagsunog sa mga bahay ng kanilang pamilya at mga kababayan sa utos ni Gobernador-Heneral Weyler ay nagdala ng matinding pighati kay Rizal.",
      "Ang pangyayaring ito ang nagbigay-daan sa madilim, seryoso, at mapanlaban na tonong politikal ng El Filibusterismo, na tumalikod na sa labis na romantisismo ng Noli.",
    ],
  },
  {
    question: "Ano ang kahalagahan ng pagbisita ni Dr. Pio Valenzuela kay Rizal sa Dapitan noong Hunyo 1896?",
    keyPoints: [
      "Si Dr. Pio Valenzuela ay sinugo ng Katipunan upang isangguni kay Rizal ang planong pagsisimula ng armadong pag-aalsa.",
      "Mariing tinutulan ni Rizal ang biglaan at armadong himagsikan dahil sa kawalan ng sapat na pondo, armas, at paghahanda ng mga Pilipino, na maaaring magbunga lamang ng malawakang kapahamakan.",
    ],
  }
];