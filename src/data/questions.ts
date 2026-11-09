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
    question: "Sino ang Pilipinong bayani na nagsuri sa kasaysayan ng Pilipinas mula sa pananaw ng mga Pilipino sa pamamagitan ng anotasyon ng Sucesos?",
    options: ["Marcelo H. del Pilar", "Jose Rizal", "Graciano Lopez Jaena", "Antonio Luna"],
    answer: "Jose Rizal",
    explanation: "Si Jose Rizal ay nagsuri at nag-anotasyon ng kasaysayan upang iwasto ang mga maling pananaw ng mga Espanyol at patunayang may sarili nang maunlad na sibilisasyon, batas, at kalakalan ang mga Pilipino bago pa dumating ang mga Kastila."
  },
  {
    id: 2,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang orihinal na may-akda ng Sucesos de las Islas Filipinas na inilathala noong 1609 na nilagyan ni Rizal ng anotasyon?",
    options: ["Pedro Chirino", "Antonio de Morga", "Francisco Colin", "Salvador Font"],
    answer: "Antonio de Morga",
    explanation: "Si Antonio de Morga (ipinanganak sa Seville, 1559; naging Kapitan Heneral noong 1593 at hukom ng Audiencia noong 1598) ang orihinal na may-akda ng Sucesos de las Islas Filipinas (1609)."
  },
  {
    id: 3,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Noong anong taon unang inilimbag ang Sucesos de las Islas Filipinas sa Mexico City?",
    options: ["1593", "1609", "1890", "1907"],
    answer: "1609",
    explanation: "Unang lumabas at inilathala ang aklat na Sucesos de las Islas Filipinas sa Mexico City noong 1609 batay sa personal na karanasan ni Morga at mga dokumentasyon ng mga saksi."
  },
  {
    id: 4,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Taon at buwan kung kailan opisyal na inilathala ang anotasyong bersyon ni Rizal sa Sucesos de las Islas Filipinas sa Paris?",
    options: ["1888", "1889", "Enero 1890", "1891"],
    answer: "Enero 1890",
    explanation: "Inilathala ang anotasyong edisyon ng Sucesos sa Paris ng palimbagang Garnier Frères noong Enero 1890, na may paunang salita mula kay Prof. Ferdinand Blumentritt."
  },
  {
    id: 5,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Saang lungsod sa Pransiya inilathala ang anotasyong bersyon ng Sucesos ni Rizal sa pamamagitan ng Garnier Frères?",
    options: ["Marseilles", "Paris, France", "Biarritz", "Lyon"],
    answer: "Paris, France",
    explanation: "Sa Paris inilathala ng Garnier Frères ang aklat ni Morga na may anotasyon ni Rizal noong Enero 1890 matapos itong ayusin sa Blg. 45, Rue Maubeuge."
  },
  {
    id: 6,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Anong institusyong Ingles sa London ang pangunahing pinagkunan ni Rizal ng mga sangguniang pangkasaysayan para sa kanyang pagsasaliksik?",
    options: ["British Museum", "Bodleian Library", "Madrid Royal Library", "National Archives of UK"],
    answer: "British Museum",
    explanation: "Pinili ni Rizal na manirahan sa London dahil malapit ito sa British Museum, kung saan sinuri at kinopya niya ang mga lumang dokumento ukol sa kasaysayan ng Pilipinas."
  },
  {
    id: 7,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Anong barko ang sinakyan ni Rizal mula New York hanggang sa makarating sa daungan ng Liverpool sa Inglatera noong Disyembre 1888?",
    options: ["SS City of Rome", "S.S. Melbourne", "Bapor Don Juan", "Isla de Panay"],
    answer: "SS City of Rome",
    explanation: "Lulan ng SS City of Rome naglayag si Rizal patungong Liverpool, kung saan habang nasa biyahe ay ipinakita niya ang kanyang husay sa paglalaro ng yo-yo."
  },
  {
    id: 8,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino ang mag-asawang may-ari ng tinuluyang bahay ni Rizal sa London na nagpaupa ng halagang 45 pounds o 8 British pounds bawat buwan?",
    options: ["Charles at Georgina Becket", "George at Nellie Taufer", "Juan at Paz Luna", "Edmund at Tottie Plauchut"],
    answer: "Charles at Georgina Becket",
    explanation: "Sila ang mag-asawang nagmay-ari ng tinuluyan ni Rizal na malapit sa British Museum, na may dalawang anak na lalaki (Charles, Francis) at apat na babae."
  },
  {
    id: 9,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino sa mga anak ng pamilya Becket ang nagkaroon ng malalim na damdamin kay Rizal (na 27 taong gulang noon) na tinatawag ding 'Tottie'?",
    options: ["Blanche Becket", "Florence Becket", "Grace Becket", "Gertrude Becket"],
    answer: "Gertrude Becket",
    explanation: "Si Gertrude (Tottie, 18 taong gulang) ay nahulog ang loob kay Rizal kaya upang maiwasan ang komplikasyon ay nagpasya si Rizal na lumipat ng tirahan patungong Paris."
  },
  {
    id: 10,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Ano ang pangalan ng isa pang anak na babae ng pamilya Becket na binanggit sa liham ni Rizal noong Hunyo 12, 1888 na tinatawag na 'Sisi'?",
    options: ["Blanche Becket", "Florence Becket", "Grace Becket", "Georgina Becket"],
    answer: "Blanche Becket",
    explanation: "Si Blanche (Sisi) ang isa sa mga anak na babae ng pamilyang Beckett bukod kina Gertrude, Florence (Flory), at Grace."
  },
  {
    id: 11,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Ano ang buong pangalan ng dalawa pang anak na babae ng pamilya Becket bukod kina Gertrude (Tottie) at Blanche (Sisi)?",
    options: ["Florence at Grace", "Maria at Teresa", "Elena at Clara", "Ana at Sofia"],
    answer: "Florence at Grace",
    explanation: "Sila sina Florence (Flory) at Grace Becket, na kabilang sa apat na anak na babae ng pamilyang Beckett sa London."
  },
  {
    id: 12,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Ano ang pangalan ng dalawang anak na lalaki ng pamilya Becket bukod sa kanilang apat na anak na babae?",
    options: ["Charles at Francis", "George at Henry", "Edmund at Thomas", "John at William"],
    answer: "Charles at Francis",
    explanation: "Sina Charles at Francis ang dalawang anak na lalaki ng mag-asawang Charles at Georgina Becket sa London."
  },
  {
    id: 13,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Ano ang bansag sa hindi nakilalang seryal na mamamatay-tao na naghasik ng takot sa London noong panahong naroroon si Rizal?",
    options: ["Eminencia Negro", "Jack the Ripper", "Kardenal Moreno", "Pilibustero"],
    answer: "Jack the Ripper",
    explanation: "Si Jack the Ripper ang notorious na mamamatay-tao na naghasik ng lagim sa Whitechapel district ng London noong panahong naninirahan doon si Rizal."
  },
  {
    id: 14,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Anong akda ni Rizal sa London ang nagtatampok ng tatlong bahagi: mga kasabihan, palaisipan, at mga tula ng mga katutubong Pilipino?",
    options: ["Two Eastern Fables", "Specimens of Tagalog Folklore", "Makamisa", "Mi Retiro"],
    answer: "Specimens of Tagalog Folklore",
    explanation: "Inilathala sa Trübner's Record sa London, ang Specimens of Tagalog Folklore ay naglalaman ng mga katutubong karunungan at tula sa rekomendasyon ni Dr. Reinhold Rost."
  },
  {
    id: 15,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino ang librarian ng Ministry of Foreign Affairs at dalubhasa sa Malayan languages na tumawag kay Rizal ng 'Una perla de hombre'?",
    options: ["Dr. H. Kern", "Dr. Reinhold Rost", "Dr. Lorenzo P. Marques", "Ferdinand Blumentritt"],
    answer: "Dr. Reinhold Rost",
    explanation: "Si Dr. Reinhold Rost ay isang Anglo-German scholar na labis na humanga sa talino ni Rizal at tumawag sa kanya bilang 'isang perlas na tao'."
  },
  {
    id: 16,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Anong akademikong journal sa London ang naglathala sa mga pananaliksik ni Rizal tungkol sa Specimens of Tagalog Folklore at iba pa?",
    options: ["La Solidaridad", "Trübner's Record", "El Nuevo Regimen", "La Patria"],
    answer: "Trübner's Record",
    explanation: "Ang Trübner's Record ang naglathala ng mga pag-aaral ni Rizal sa katutubong panitikan ng Pilipinas."
  },
  {
    id: 17,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng pag-aaral at sanaysay ni Rizal noong Hulyo 1889 na naghahambing ng mga pabula ng Pilipinas at Japan?",
    options: ["Specimens of Tagalog Folklore", "Two Eastern Fables", "Filipinas Dentro de Cien Años", "Sobre la Indolencia"],
    answer: "Two Eastern Fables",
    explanation: "Ang Two Eastern Fables ay inilathala sa Trübner's Record noong Hulyo 1889 at naghahambing ng mga tradisyong-pabula ng dalawang bansa sa Asya."
  },
  {
    id: 18,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang Dutch na iskolar at dalubhasa na nagsuri sa Two Eastern Fables ni Rizal at naglahad nito sa International Congress of Orientalists?",
    options: ["Dr. H. Kern", "Dr. Reinhold Rost", "Edmund Plauchut", "Antonio Ma. Regidor"],
    answer: "Dr. H. Kern",
    explanation: "Si Dr. H. Kern (Nederlandes na dalubhasa) ang nag-analisa at naglathala ng monograpo ukol sa Two Eastern Fables ni Rizal sa Leyden noong 1889."
  },
  {
    id: 19,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Saang lungsod idinaos ang International Congress of Orientalists noong 1889 na nagtalakay sa akda ni Rizal tungkol sa mga pabula?",
    options: ["Paris", "Stockholm", "Leyden", "London"],
    answer: "Stockholm",
    explanation: "Sa Stockholm idinaos ang International Congress of Orientalists kung saan tinalakay ang kontribusyon at pag-aaral ni Rizal."
  },
  {
    id: 20,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino ang kaibigang nagpatuloy kay Rizal sa Paris sa adres na 45 Rue Maubeuge noong 1889 habang inayos niya ang anotasyon ng Sucesos?",
    options: ["Valentin Ventura", "Juan Luna", "Trinidad Pardo de Tavera", "Jose Ma. Basa"],
    answer: "Valentin Ventura",
    explanation: "Si Valentin Ventura ang nagpatuloy kay Rizal sa kanyang tahanan sa Paris sa 45 Rue Maubeuge, kung saan tinapos at inayos ang manuskrito ng Sucesos."
  },
  {
    id: 21,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino-sino ang magkapatid na Pardo de Tavera na dinalaw at nakasama ni Rizal sa Paris noong panahon ng Eksposisyong Unibersal?",
    options: ["Dr. Trinidad at Dr. Felix Pardo de Tavera", "Juan at Antonio Pardo de Tavera", "Paz at Trinidad Pardo de Tavera", "Jose at Felix Pardo de Tavera"],
    answer: "Dr. Trinidad at Dr. Felix Pardo de Tavera",
    explanation: "Sila ang mga kilalang Pilipinong iskolar sa Paris na malapit kay Rizal, kasama ang kanilang kapatid na si Paz Pardo de Tavera."
  },
  {
    id: 22,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino ang dakilang pintor na asawa ni Paz Pardo de Tavera na nagkaroon ng anak na pinag-ninuhan ni Rizal noong Hunyo 24, 1889?",
    options: ["Juan Luna", "Felix Hidalgo", "Valentin Ventura", "Sixto Lopez"],
    answer: "Juan Luna",
    explanation: "Si Juan Luna ang ama ng batang si Maria dela Paz Blanca Laureana Hermenigilda Juana Luna y Pardo de Tavera na pinag-ninuhan ni Rizal sa Paris."
  },
  {
    id: 23,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong taon isinilang si Antonio de Morga sa Seville, Spain ayon sa historikal na tala?",
    options: ["1559", "1593", "1598", "1636"],
    answer: "1559",
    explanation: "Si Antonio de Morga ay ipinanganak sa Seville, Spain noong 1559 bago kalaunang naging opisyal sa Pilipinas."
  },
  {
    id: 24,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong taon nagsilbi si Antonio de Morga bilang Kapitan Heneral ng Pilipinas?",
    options: ["1559", "1593", "1598", "1636"],
    answer: "1593",
    explanation: "Nagsilbi si Antonio de Morga bilang Kapitan Heneral ng Pilipinas simula taong 1593 bago naging hukom sa Audiencia noong 1598."
  },
  {
    id: 25,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong taon opisyal na naging hukom sa Audiencia si Antonio de Morga sa kolonyal na Maynila?",
    options: ["1593", "1598", "1609", "1868"],
    answer: "1598",
    explanation: "Si Morga ay itinalagang hukom sa Audiencia noong 1598, at kalaunan ay namatay noong 1636 matapos mapatunayang nagkasala ng korapsyon."
  },
  {
    id: 26,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Taon kung kailan lumipat si Antonio de Morga sa Mexico bilang pangulo ng Audiencia bago ang kanyang kamatayan noong 1636?",
    options: ["1615", "1609", "1598", "1593"],
    answer: "1615",
    explanation: "Si Antonio de Morga ay lumipat sa Mexico noong 1615 bilang pangulo ng Audiencia doon."
  },
  {
    id: 27,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong taon inilathala ang unang salin sa Ingles ng Sucesos de las Islas Filipinas na inilabas sa lungsod ng London?",
    options: ["1868", "1907", "1890", "1609"],
    answer: "1868",
    explanation: "Ang unang salin sa Ingles ng Sucesos de Morga ay inilathala sa London noong 1868, bago ang ikalawang kilalang salin nina Blair at Robertson noong 1907."
  },
  {
    id: 28,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang naglimbag ng sikat na Ingles na salin ng Sucesos (Blair and Robertson) na inilabas sa Cleveland noong 1907?",
    options: ["Garnier Frères", "Blair at Robertson", "Trübner", "Imprenta de Sucesores"],
    answer: "Blair at Robertson",
    explanation: "Sina Emma Helen Blair at James Alexander Robertson ang naglimbag ng kanilang sikat na multi-volume collection at salin sa Cleveland noong 1907."
  },
  {
    id: 29,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong tanyag na bahay-palimbagan sa Paris ang naglimbag ng anotasyong edisyon ni Rizal sa akda ni Morga noong Enero 1890?",
    options: ["Garnier Frères", "La Solidaridad", "Trübner's Record", "Imprenta Moderna"],
    answer: "Garnier Frères",
    explanation: "Ang Garnier Frères sa Paris ang naglimbag ng opisyal at bantog na anotasyong edisyon ni Rizal sa Sucesos de las Islas Filipinas."
  },
  {
    id: 30,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang kilalang historyador na nagtalakay sa apat na pangunahing dahilan kung bakit pinili ni Rizal ang akda ni Morga?",
    options: ["Ambrosio Rianzares", "Ambeth R. Ocampo", "Teodoro Agoncillo", "Renato Constantino"],
    answer: "Ambeth R. Ocampo",
    explanation: "Si Ambeth R. Ocampo ang naglahad na pinili ni Rizal si Morga dahil ito ay bihira, obhetibo (layko), mas simpatetiko sa mga Indio, at direktang saksi sa kasaysayan."
  },
  {
    id: 31,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng makasaysayang sulatin o sanaysay ni Rizal na may petsang Disyembre 8, 1888 hinggil sa sinaunang kalakalan ng Pilipinas?",
    options: ["Tawalisi ni Ibn Batuta", "Ma-yi", "Filipinas Dentro de Cien Años", "Sobre la Indolencia"],
    answer: "Ma-yi",
    explanation: "Ang 'Ma-yi' ay isinulat ni Rizal noong Disyembre 8, 1888 bilang pag-aaral sa mga sinaunang ugnayang pangkalakalan ng mga Pilipino bago dumating ang mga Espanyol."
  },
  {
    id: 32,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng sulatin o pag-aaral ni Rizal na may petsang Enero 7, 1889 tungkol sa tala ng manlalakbay na si Ibn Batuta?",
    options: ["Tawalisi ni Ibn Batuta", "Ma-yi", "Verdades Nuevas", "Ingratitudes"],
    answer: "Tawalisi ni Ibn Batuta",
    explanation: "Ang sulating 'Tawalisi ni Ibn Batuta' ay may petsang Enero 7, 1889 at tumatalakay sa mga sinaunang tala ng paglalakbay sa rehiyon."
  },
  {
    id: 33,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Saang opisyal na pahayagan ng kilusang repormista madalas ilathala ni Rizal ang Filipinas Dentro de Cien Años at iba pang mahahalagang sanaysay?",
    options: ["La Solidaridad", "La Patria", "El Heraldo de Madrid", "La Independencia"],
    answer: "La Solidaridad",
    explanation: "Ang La Solidaridad ang opisyal na pahayagan ng Propaganda Movement sa Espanya kung saan lumabas ang mga dakilang sanaysay ni Rizal."
  },
  {
    id: 34,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng mahabang sanaysay ni Rizal na sumusuri sa ugat at dahilan ng sinasabing 'katamaran' ng mga Pilipino?",
    options: ["Sobre la Indolencia de los Filipinos", "Filipinas Dentro de Cien Años", "La Politica Colonial", "Ingratitudes"],
    answer: "Sobre la Indolencia de los Filipinos",
    explanation: "Ang Sobre la Indolencia de los Filipinos (Hulyo-Setyembre 1890) ay nagpapatunay na ang katamaran ay bunga ng maling sistema ng pamahalaan, init ng klima, at nawalang sigla sa paggawa."
  },
  {
    id: 35,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng sulatin ni Rizal na tumatalakay sa mga patakarang kolonyal ng Espanya sa Pilipinas?",
    options: ["La Politica Colonial en Filipinas", "Historia de la Familia Rizal", "Los Pueblos del Archipelago", "Diferencias"],
    answer: "La Politica Colonial en Filipinas",
    explanation: "Ang La Politica Colonial en Filipinas ay naglalaman ng mga pagsusuri sa mga patakarang ipinatupad ng pamahalaang kolonyal."
  },
  {
    id: 36,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng sanaysay o tala ni Rizal na naglalahad ng kasaysayan ng pamilya Rizal sa Calamba?",
    options: ["Historia de la Familia Rizal de Calamba", "Los Pueblos del Archipelago Indico", "Ma-yi", "Tawalisi"],
    answer: "Historia de la Familia Rizal de Calamba",
    explanation: "Ang Historia de la Familia Rizal de Calamba ay ang personal na tala ni Rizal hinggil sa pinagmulan at karanasan ng kanilang pamilya."
  },
  {
    id: 37,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng talaan o akdang pangkasaysayan ni Rizal na may kinalaman sa mga mamamayan ng kapuluang Indian?",
    options: ["Los Pueblos del Archipelago Indico", "Historia de la Familia Rizal", "La Politica Colonial", "Diferencias"],
    answer: "Los Pueblos del Archipelago Indico",
    explanation: "Ang Los Pueblos del Archipelago Indico ay kabilang sa mga tala at akdang pangkasaysayan na pinag-aralan at sinulat ni Rizal."
  },
  {
    id: 38,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Noong anong buwan at taon binalak itatag ni Rizal ang Asosasyong Internasyonal ng mga Filipinohista sa Paris?",
    options: ["Agosto 1889", "Enero 1890", "Hulyo 1889", "Oktubre 1891"],
    answer: "Agosto 1889",
    explanation: "Itinatag ang balangkas ng Asosasyong Internasyonal ng mga Filipinohista noong Agosto 1889 upang pag-isahin ang mga iskolar sa pag-aaral ng kasaysayan ng Pilipinas."
  },
  {
    id: 39,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang napiling Pangulo ng Asosasyong Internasyonal ng mga Filipinohista na itinatag sa Paris?",
    options: ["Ferdinand Blumentritt", "Edmund Plauchut", "Dr. Reinhold Rost", "Dr. Antonio Ma. Regidor"],
    answer: "Ferdinand Blumentritt",
    explanation: "Si Prof. Ferdinand Blumentritt (Austriyanong iskolar) ang napiling Pangulo ng samahan, kasama si Edmund Plauchut bilang Pangalawang Pangulo."
  },
  {
    id: 40,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang Pranses na manunulat at iskolar na itinalaga bilang Pangalawang Pangulo ng Asosasyong Internasyonal ng mga Filipinohista?",
    options: ["Edmund Plauchut", "Ferdinand Blumentritt", "Valentin Ventura", "Antonio Ma. Regidor"],
    answer: "Edmund Plauchut",
    explanation: "Si Edmund Plauchut ang Pranses na Vice President ng samahan, habang si Rizal ang nagsilbing Kalihim nito."
  },
  {
    id: 41,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino-sino ang mga itinalagang tagapayo (advisers) ng Asosasyong Internasyonal ng mga Filipinohista?",
    options: ["Dr. Reinhold Rost at Dr. Antonio Ma. Regidor", "Juan Luna at Felix Pardo de Tavera", "Ambrosio Salvador at Deodato Arellano", "Valentin Ventura at Sixto Lopez"],
    answer: "Dr. Reinhold Rost at Dr. Antonio Ma. Regidor",
    explanation: "Sina Dr. Reinhold Rost at Dr. Antonio Ma. Regidor ang mga itinalagang tagapayo ng samahan na binubuo ng mga tanyag na intelektwal."
  },
  {
    id: 42,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong pamahalaan ang tumanggi at nagbawal sa planong pribadong kumbensyon ng mga Filipinohista sa Paris sa panahon ng Eksposisyon?",
    options: ["Pamahalaang Pranses", "Pamahalaang Espanyol", "Pamahalaang Ingles", "Pamahalaang Aleman"],
    answer: "Pamahalaang Pranses",
    explanation: "Hindi natuloy ang pampasinayang kumperensya dahil mahigpit na ipinagbawal ng Pamahalaang Pranses ang mga pribadong organisasyong magdaos ng malaking pagtitipon."
  },
  {
    id: 43,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong sanaysay ni Rizal noong Enero 15, 1890 ang tumugon sa paratang ng pamahalaan laban sa mga Pilipinong tinawag na 'mga anak na walang turing'?",
    options: ["Mga Kawalang Turing (Ingratitudes)", "Verdades Nuevas", "Diferencias", "Por Telefono"],
    answer: "Mga Kawalang Turing (Ingratitudes)",
    explanation: "Ang Ingratitudes ay inilathala sa La Solidaridad upang sagutin ang paratang ni Gov.-Gen. Valeriano Weyler sa mga nagrereklamong residente ng Calamba."
  },
  {
    id: 44,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang gobernador-heneral ng Pilipinas na naglabas ng paratang na 'mga anak na walang turing' laban sa mga nagrereklamong Pilipino?",
    options: ["Valeriano Weyler", "Eulogio Despujol", "Emilio Terrero", "Camilo de Polavieja"],
    answer: "Valeriano Weyler",
    explanation: "Si Gobernador-Heneral Valeriano Weyler ang nagbansag na 'mga anak na walang turing' sa mga mamamayang nag-aaklas laban sa pang-aabuso sa asyenda."
  },
  {
    id: 45,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong lumang bilangguan sa Maynila (itinatag noong 1847 at binuksan noong 1865 sa Oroquieta St.) ang binanggit ni Rizal sa kanyang pagtalakay sa katarungan?",
    options: ["Old Bilibid Prison", "Fort Santiago", "Montjuïc", "Cuartel de España"],
    answer: "Old Bilibid Prison",
    explanation: "Tinukoy ni Rizal ang Old Bilibid Prison (na kalaunan ay inilipat sa New Bilibid Prison sa Muntinlupa noong 1940) upang ilarawan ang piitan."
  },
  {
    id: 46,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong taon isinumite ng mga residente at ni Rizal ang mga pormal na reklamo hinggil sa katiwalian sa Hacienda de Calamba?",
    options: ["1887", "1888", "1889", "1890"],
    answer: "1887",
    explanation: "Noong 1887 sinimulan ang pagsusumite ng mga reklamo at imbestigasyon hinggil sa mataas na upa at kawalan ng resibo sa Hacienda de Calamba."
  },
  {
    id: 47,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Kailan isinagawa ang opisyal na pag-uusisa at imbestigasyon hinggil sa lawak, ani, at buwis ng mga lupa sa asyenda sa Calamba?",
    options: ["Disyembre 30, 1887", "Hulyo 3, 1892", "Enero 7, 1889", "Oktubre 7, 1891"],
    answer: "Disyembre 30, 1887",
    explanation: "Noong Disyembre 30, 1887 pormal na sinimulan ang imbestigasyon sa utos ni Gob.-Gen. Emilio Terrero upang siyasatin ang mga reklamo ng mga magsasaka."
  },
  {
    id: 48,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong relihiyosong orden ang may kontrol at nagmamay-ari sa pinagtatalunang Hacienda de Calamba?",
    options: ["Orden ng mga Dominikano", "Mga Heswita", "Mga Pransiskano", "Mga Augustinian"],
    answer: "Orden ng mga Dominikano",
    explanation: "Ang Orden ng mga Dominikano ang nagmamay-ari ng Hacienda de Calamba, na nagtaas ng upa at nagdulot ng malalim na krisis agraryo."
  },
  {
    id: 49,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pangunahing pandaigdigang sanhi ng pagkalugi ng asukal sa Calamba na nagtulak sa mga Dominikano na itaas ang upa sa lupa?",
    options: ["Pag-usbong at kompetisyon ng beet sugar sa Europa", "Pagbagsak ng mga barkong kargamento", "Pagkasira ng mga tubuhan dahil sa bagyo", "Pag-aangkat ng asukal mula sa Amerika"],
    answer: "Pag-usbong at kompetisyon ng beet sugar sa Europa",
    explanation: "Ang pag-usbong ng beet sugar sa Europa ang nagpabagsak sa presyo ng tubo sa merkado kaya pinilit ng mga prayle na bawiin ang lugi sa mga magsasaka."
  },
  {
    id: 50,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong ideya ang binigyang-diin ni Rizal sa paghubog sa mga kabataang may budhi, dangal, at katarungan sa lipunan?",
    options: ["Pananagutan ng mga guro", "Kahalagahan ng militarismo", "Pag-aaral ng wikang banyaga", "Pagpapalawak ng kalakalan"],
    answer: "Pananagutan ng mga guro",
    explanation: "Binigyang-diin ni Rizal ang malaking pananagutan ng mga tagapagturo at guro sa paggising sa kaisipan at moralidad ng kabataan."
  },
  {
    id: 51,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng sulating naglalahad ng puna sa pamamahala at katiwalian na inilathala sa ilalim ng inisyal na A.G.D.G.?",
    options: ["Ang Katotohanan Para sa Lahat", "Verdades Nuevas", "Por Telefono", "Diferencias"],
    answer: "Ang Katotohanan Para sa Lahat",
    explanation: "Ang Katotohanan Para sa Lahat ay tumuligsa sa katiwalian at maling sistema ng pamamahala sa ilalim ng kolonyalismong Espanyol."
  },
  {
    id: 52,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang mga inisyal ng naglathala ng sulating pinagtalunan sa 'Ang Katotohanan Para sa Lahat'?",
    options: ["A.G.D.G.", "J.P.R.", "M.H.P.", "G.L.J."],
    answer: "A.G.D.G.",
    explanation: "A.G.D.G. ang mga inisyal na ginamit ng may-akda sa paglalathala ng naturang sanaysay panunuli."
  },
  {
    id: 53,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong sanaysay ni Rizal noong Hulyo 31, 1889 ang direktang tumugon sa mga paratang at argumento ni Vicente Belloc y Sánchez?",
    options: ["Verdades Nuevas (Mga Bagong Katotohanan)", "Verdades Viejas", "Diferencias", "Ingratitudes"],
    answer: "Verdades Nuevas (Mga Bagong Katotohanan)",
    explanation: "Ang Verdades Nuevas ay inilathala sa La Solidaridad upang pabulaanan ang pagtatanggol ni Vicente Belloc y Sánchez sa konserbatibong patakaran."
  },
  {
    id: 54,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang Kastilang awtor at dating opisyal na naglathala ng artikulo sa La Patria laban sa reporma na tinugon ni Rizal sa Verdades Nuevas?",
    options: ["Don Vicente Belloc", "Salvador Font", "Antonio de Morga", "Wenceslao Retana"],
    answer: "Don Vicente Belloc",
    explanation: "Si Don Vicente Belloc y Sánchez ang naglathala ng pahayag na kung saan iginiit niyang masisira ang payapang kolonyalismo kapag binawasan ang kapangyarihan ng mga prayle."
  },
  {
    id: 55,
    topic: "Talahulugan at Terminolohiya",
    question: "Anong salitang Espanyol ang ginamit ni Rizal upang ilarawan ang sadyang pananatili ng mga prayle sa mga katutubo sa kamangmangan upang madali silang mapasunod?",
    options: ["Embrutecer", "Pilibustero", "Makiyabelismo", "Encomendero"],
    answer: "Embrutecer",
    explanation: "Ang 'embrutecer' ay tumutukoy sa patakaran ng pananatili ng mga mamamayan sa kamangmangan o 'pagpapatanga' upang mapanatili ang kontrol ng mga prayle at ng simbahan."
  },
  {
    id: 56,
    topic: "Talahulugan at Terminolohiya",
    question: "Anong terminolohiya ang tumutukoy sa sistema ng pamamahala kung saan ang kapangyarihan at pag-aari ng mga lupain ay ipinagkakaloob ng Hari ng Espanya sa mga mananakop?",
    options: ["Encomienda", "Audiencia", "Status Quo", "Pook-Sulat"],
    answer: "Encomienda",
    explanation: "Ang sistemang encomienda ay pinamahalaan ng mga encomendero, na sa tulong ng naunang mga prayle ay sinubukang pigilan ang labis na pang-aabuso sa mga nasasakupang lupa."
  },
  {
    id: 57,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng satirikong akda ni Rizal sa Barcelona (1889) na tuwirang tumutuligsa kay Padre Salvador Font sa pamamagitan ng telepono?",
    options: ["Por Telefono", "Makamisa", "Pobres Frailes", "Verdades Nuevas"],
    answer: "Por Telefono",
    explanation: "Ang Por Telefono ay isang nakakatawa ngunit mapanuring satirikong akda gamit ang sagisag-panulat na 'Dimas Alang' laban kay Fr. Salvador Font."
  },
  {
    id: 58,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong sanaysay ni Rizal ang sumagot sa panig ng konserbatibong pahayagang La Patria na naglathala ng 'Verdades Viejas'?",
    options: ["Mga Pagkaiba (Diferencias)", "Verdades Nuevas", "Ingratitudes", "La Politica Colonial"],
    answer: "Mga Pagkaiba (Diferencias)",
    explanation: "Ang Diferencias ay isinulat ni Rizal upang sagutin ang mga lumang paratang ng La Patria at iwasto maging ang maling paggamit ng gramatika at Latin ng kritiko."
  },
  {
    id: 59,
    topic: "Talahulugan at Terminolohiya",
    question: "Ano ang pangalan ng konserbatibong pahayagan sa Madrid na naging pangunahing katunggali ni Rizal sa pagtatalo tungkol sa reporma at pamamahala?",
    options: ["La Patria", "La Solidaridad", "El Heraldo de Madrid", "La Independencia"],
    answer: "La Patria",
    explanation: "Ang La Patria ang pahayagang naglathala ng mga artikulong kontra-reporma na tinugon ni Rizal sa pamamagitan ng kanyang mga sanaysay."
  },
  {
    id: 60,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng mga artikulo o paratang na inilathala sa La Patria (Agosto 4, 1889) na nagtatanggol sa lumang sistema ng kolonyalismo?",
    options: ["Verdades Viejas (Mga Lumang Katotohanan)", "Verdades Nuevas", "Ingratitudes", "Diferencias"],
    answer: "Verdades Viejas (Mga Lumang Katotohanan)",
    explanation: "Ang Verdades Viejas ang mga lumang pahayag at paratang ng La Patria na sinagot ni Rizal sa kanyang sanaysay na Diferencias."
  },
  {
    id: 61,
    topic: "Talahulugan at Terminolohiya",
    question: "Ano ang tawag sa mapayapang pagbabago sa pamahalaan at lipunan sa pamamagitan ng batas at edukasyon na buong-tapang na ipinaglalaban ng mga Repormista?",
    options: ["Reporma", "Rebolusyon", "Sedisyon", "Assimilation"],
    answer: "Reporma",
    explanation: "Ang reporma ang pangunahing mithiin ng Kilusang Propaganda bago napag-alamang ang mapayapang pamamaraan ay tila hindi pinakikinggan ng kolonyal na pamahalaan."
  },
  {
    id: 62,
    topic: "Talahulugan at Terminolohiya",
    question: "Sino ang mga makapangyarihang relihiyosong opisyal at prayle na madalas pinuna ni Rizal dahil sa labis na pakikialam sa pamahalaang sibil?",
    options: ["Prayle", "Paring Sekular", "Obispo", "Arsobispo"],
    answer: "Prayle",
    explanation: "Ang mga prayle ng iba't ibang orden ang tinutukoy sa labis na kapangyarihan (frailocracia) na nagpapatakbo sa pamahalaang sibil sa Pilipinas noon."
  },
  {
    id: 63,
    topic: "Talahulugan at Terminolohiya",
    question: "Ano ang tawag sa opisyal na pinuno ng pamahalaang pambayan noong panahon ng Kastila sa Pilipinas?",
    options: ["Gobernadorcillo", "Cabeza de Barangay", "Encomendero", "Alkalde Mayor"],
    answer: "Gobernadorcillo",
    explanation: "Ang gobernadorcillo ang namumuno sa bayan, na madalas ay naiipit sa utos ng kura paroko at ng pamahalaang panlalawigan."
  },
  {
    id: 64,
    topic: "Talahulugan at Terminolohiya",
    question: "Anong puwersang panseguridad at kapulisan ng pamahalaang kolonyal ang madalas banggitin sa mga ulat ukol sa pang-aabuso sa mga katutubo?",
    options: ["Guardia Civil", "Katipunan", "Cuerpo de Vigilancia", "Artilyeriya"],
    answer: "Guardia Civil",
    explanation: "Ang Guardia Civil ang sandatahang puwersa ng kolonyal na pamahalaan na madalas inirereklamo dahil sa kalupitan at pang-aabuso sa mga mamamayan."
  },
  {
    id: 65,
    topic: "Talahulugan at Terminolohiya",
    question: "Anong terminolohiya ang tumutukoy sa mapanlinlang, imoral, at walang prinsipyo na taktikang ginagamit upang mapanatili ang kapangyarihan?",
    options: ["Makiyabelismo", "Filibusterismo", "Embrutecer", "Status quo"],
    answer: "Makiyabelismo",
    explanation: "Ang Makiyabelismo ay tumutukoy sa pilosopiya ng pulitika kung saan 'ang layunin ay nagbibigay-katwiran sa pamamaraan', kahit pa ito ay labag sa moralidad."
  },
  {
    id: 66,
    topic: "Talahulugan at Terminolohiya",
    question: "Ano ang bansag o paratang na ipinapataw ng mga kolonyalista at prayle sa mga Pilipinong itinuturing na subersibo, may malayang isip, o kalaban ng pamahalaan?",
    options: ["Pilibustero", "Ilustrado", "Inquilino", "Tulisán"],
    answer: "Pilibustero",
    explanation: "Ang pilibustero ay ang salitang ginamit upang sindakin at tawaging kaaway ng simbahan at pamahalaan ang sinumang humihingi ng katarungan."
  },

  // --- GROUP 2: EL FILIBUSTERISMO AT OPTALMOLOHIYA ---
  {
    id: 67,
    topic: "El Filibusterismo",
    question: "Ano ang buong pamagat ng ikalawang nobela ni Jose Rizal na karugtong ng Noli Me Tangere?",
    options: ["El Filibusterismo", "Noli Me Tangere", "Makamisa", "Sucesos de las Islas Filipinas"],
    answer: "El Filibusterismo",
    explanation: "El Filibusterismo ang ikalawang obra maestra at nobelang politikal ni Rizal na inilimbag sa Ghent noong 1891."
  },
  {
    id: 68,
    topic: "El Filibusterismo",
    question: "Saang lungsod at kailan ganap na natapos ni Rizal ang buong manuskrito ng El Filibusterismo bago ito dalhin sa paglilimbag?",
    options: ["Biarritz, Pransiya — Marso 29, 1891", "Ghent, Belgium — Setyembre 18, 1891", "Paris, Pransiya — Enero 1890", "London, UK — Disyembre 1888"],
    answer: "Biarritz, Pransiya — Marso 29, 1891",
    explanation: "Natapos ni Rizal ang manuskrito ng El Filibusterismo sa Biarritz, Pransiya noong Marso 29, 1891 bago nagtungo sa Ghent para ipalimbag."
  },
  {
    id: 69,
    topic: "El Filibusterismo",
    question: "Ano naman ang uri ng nobela na iniuugnay sa Noli Me Tangere bilang katambal ng Fili?",
    options: ["Nobelang Romantiko", "Nobelang Politikal", "Nobelang Historikal", "Nobelang Rebolusyonaryo"],
    answer: "Nobelang Romantiko",
    explanation: "Ang Noli Me Tangere ay itinuturing na Nobelang Romantiko o 'Aklat ng Puso' dahil nakapokus ito sa pag-ibig, pag-asa, at mga sugat ng lipunan."
  },
  {
    id: 70,
    topic: "El Filibusterismo",
    question: "Paano inilalarawan ang Noli Me Tangere pagdating sa pagsusuri sa lipunang Pilipino noon?",
    options: ["Diagnosis ng sakit ng lipunan", "Lunas o reseta", "Pagsusuri sa ekonomiya", "Kasaysayan ng digmaan"],
    answer: "Diagnosis ng sakit ng lipunan",
    explanation: "Ang Noli ay nagisilbing diagnosis o paglalahad ng kanser ng lipunan, habang ang Fili naman ay ang reseta o babala sa madilim na kahihinatnan ng marahas na paghihimagsik."
  },
  {
    id: 71,
    topic: "El Filibusterismo",
    question: "Kaninong alaala inihandog ni Dr. Jose Rizal ang nobelang El Filibusterismo upang gunitain ang kanilang sakripisyo?",
    options: ["GOMBURZA", "Mga magsasaka ng Calamba", "Leonor Rivera", "Kanyang ama"],
    answer: "GOMBURZA",
    explanation: "Inihandog ni Rizal ang nobela sa tatlong paring martir (Gomez, Burgos, Zamora) na binitay sa garote noong Pebrero 17, 1872."
  },
  {
    id: 72,
    topic: "El Filibusterismo",
    question: "Sino ang matandang paring martir at kura ng Bacoor, Cavite na pinakamatanda sa GOMBURZA?",
    options: ["Padre Mariano Gomez", "Padre Jose Burgos", "Padre Jacinto Zamora", "Padre Pedro Pelaez"],
    answer: "Padre Mariano Gomez",
    explanation: "Si Padre Mariano Gomez (na ginamit ang baybay na Gomes) ay kura ng Bacoor, Cavite na nagtanggol sa mga karapatan ng mga paring Pilipino."
  },
  {
    id: 73,
    topic: "El Filibusterismo",
    question: "Sino ang matalinong paring martir na nagtaguyod sa reporma at karapatan ng mga paring sekular sa UST?",
    options: ["Padre Jose Burgos", "Padre Mariano Gomez", "Padre Jacinto Zamora", "Padre Pedro Pelaez"],
    answer: "Padre Jose Burgos",
    explanation: "Si Padre Jose Burgos ay kilalang lider ng mga paring sekular at tagapagtanggol ng klerong Pilipino laban sa mga prayleng regular."
  },
  {
    id: 74,
    topic: "El Filibusterismo",
    question: "Sino ang paring martir na nadawit sa maling paratang sa Pag-aalsa sa Cavite dahil lamang sa kanyang pagkahilig sa paglalaro ng poker o baraha?",
    options: ["Padre Jacinto Zamora", "Padre Mariano Gomez", "Padre Jose Burgos", "Padre Pedro Pelaez"],
    answer: "Padre Jacinto Zamora",
    explanation: "Si Padre Jacinto Zamora ay nahatulan at binitay matapos matagpuan ang isang paanyaya sa paglalaro ng baraha na maling binigyang-kahulugan ng mga awtoridad."
  },
  {
    id: 75,
    topic: "El Filibusterismo",
    question: "Kailan naganap ang araw ng pagbitay sa GOMBURZA sa Bagumbayan sa pamamagitan ng garote?",
    options: ["Pebrero 17, 1872", "Disyembre 30, 1896", "Hulyo 3, 1892", "Hunyo 26, 1892"],
    answer: "Pebrero 17, 1872",
    explanation: "Binitay ang GOMBURZA sa Bagumbayan noong Pebrero 17, 1872 (habang ang Cavite Mutiny ay naganap noong Enero 20, 1872)."
  },
  {
    id: 76,
    topic: "El Filibusterismo",
    question: "Anong brutal na pamamaraan ng pagbitay ang ginamit sa tatlong paring martir sa Bagumbayan noong 1872?",
    options: ["Garote", "Pagbaril", "Pagbitay sa bitayan", "Saksak"],
    answer: "Garote",
    explanation: "Ang garote (isang mekanismong pumipigil sa leeg hanggang mamatay) ang ginamit na pinarusa sa tatlong pari upang magsilbing babala sa taumbayan."
  },
  {
    id: 77,
    topic: "El Filibusterismo",
    question: "Anong pag-aalsa noong 1872 ang ginamit ng mga prayle at awtoridad bilang dahilan upang idiin at patawan ng kamatayan ang GOMBURZA?",
    options: ["Cavite Mutiny", "Pag-aalsa ni Dagohoy", "Rebolusyon sa Balintawak", "Pag-aalsa sa Basi"],
    answer: "Cavite Mutiny",
    explanation: "Ang Cavite Mutiny noong Enero 20, 1872 ang ginamit na huwad na batayan upang iugnay ang mga paring repormista sa pag-aalsa."
  },
  {
    id: 78,
    topic: "El Filibusterismo",
    question: "Sino ang naunang paring Pilipino at tagapagtaguyod ng sekularisasyon na pinagpatuluyan ng mga simulain ni Padre Burgos?",
    options: ["Padre Pedro Pelaez", "Padre Agaton", "Padre Florentino", "Padre Salvi"],
    answer: "Padre Pedro Pelaez",
    explanation: "Si Padre Pedro Pelaez ang nanguna sa laban para sa karapatan ng mga paring sekular bago siya nasawi sa lindol ng 1863, at sinundan ni Burgos."
  },
  {
    id: 79,
    topic: "El Filibusterismo",
    question: "Sino ang nakatatandang kapatid ni Jose Rizal na malapit na kaibigan ni Padre Burgos at nagmulat kay Jose sa mga kaganapan ng 1872?",
    options: ["Paciano Rizal", "Lucia Rizal", "Narcisa Rizal", "Trinidad Rizal"],
    answer: "Paciano Rizal",
    explanation: "Si Paciano Rizal ay estudyante at malapit na kaibigan ni Padre Burgos, kaya't malaki ang naging impluwensya niya kay Jose ukol sa nasyonalismo."
  },
  {
    id: 80,
    topic: "El Filibusterismo",
    question: "Sino ang kaibigang propagandista na pinadalhan ni Rizal ng mahalagang liham noong Abril 18, 1889 sa Paris tungkol sa epekto ng GOMBURZA?",
    options: ["Mariano Ponce", "Ferdinand Blumentritt", "Graciano Lopez Jaena", "Valentin Ventura"],
    answer: "Mariano Ponce",
    explanation: "Pinadalhan ni Rizal si Mariano Ponce ng liham sa Paris noong 1889 na naglalahad kung paano binago ng 1872 ang takbo ng kanyang kamalayan."
  },
  {
    id: 81,
    topic: "El Filibusterismo",
    question: "Anong malaking krisis at kawalang-katarungan sa Calamba ang nagbigay ng madilim, seryoso, at mapanlaban na tono sa El Filibusterismo?",
    options: ["Krisis Agraryo sa Calamba", "Sunog sa pamilihan", "Pag-aalsa ng mga magsasaka", "Pagpapatapon kay Paciano"],
    answer: "Krisis Agraryo sa Calamba",
    explanation: "Ang pagpapalayas sa kanilang pamilya at mga magsasaka sa utos ni Gob.-Gen. Weyler ang nagbigay ng madilim na kulay sa nobela."
  },
  {
    id: 82,
    topic: "El Filibusterismo",
    question: "Sino ang Gobernador-Heneral na nag-utos ng imbestigasyon sa mga asyenda at buwis sa lupa sa Calamba noong panahon ng paggapan ng Noli?",
    options: ["Gobernador-Heneral Emilio Terrero", "Gobernador-Heneral Valeriano Weyler", "Gobernador-Heneral Eulogio Despujol", "Gobernador-Heneral Camilo de Polavieja"],
    answer: "Gobernador-Heneral Emilio Terrero",
    explanation: "Si Gob.-Gen. Emilio Terrero ang nag-utos na siyasatin ang mga reklamo sa asyenda bago siya mapalitan ng konserbatibong si Weyler."
  },
  {
    id: 83,
    topic: "El Filibusterismo",
    question: "Anong mataas na hukuman sa Espanya ang kumampi sa mga Dominikano sa usapin ng pag-aangkin sa lupa at pagpapalayas sa mga taga-Calamba?",
    options: ["Korte Suprema ng Madrid", "Hukuman sa Seville", "Royal Audiencia", "Konseho ng Indya"],
    answer: "Korte Suprema ng Madrid",
    explanation: "Ang Korte Suprema ng Madrid ang nagpasya pabor sa mga Dominikano, na nagpatibay sa kawalan ng pag-asa ni Rizal sa hustisya sa Espanya."
  },
  {
    id: 84,
    topic: "El Filibusterismo",
    question: "Sino ang Gobernador-Heneral na nagpadala ng 50 sundalo at artilyero upang marahas na gibain at sunugin ang mga tahanan sa Calamba?",
    options: ["Valeriano Weyler", "Emilio Terrero", "Eulogio Despujol", "Camilo de Polavieja"],
    answer: "Valeriano Weyler",
    explanation: "Si Valeriano Weyler ang nagpatupad ng marahas na pagpapaalis at pagpapatapon sa mga magsasaka at kapamilya ni Rizal mula sa Calamba."
  },
  {
    id: 85,
    topic: "El Filibusterismo",
    question: "Sino ang dating kasintahan ni Rizal na nagpakasal kay Charles Henry Kipping na nag-ambag sa personal na kalungkutan sa buhay ni Rizal?",
    options: ["Leonor Rivera", "Nellie Boustead", "Josephine Bracken", "Suzanne Jacoby"],
    answer: "Leonor Rivera",
    explanation: "Si Leonor Rivera ang matagal na kasintahan ni Rizal na nagpakasal sa inhinyerong Ingles na si Kipping, na nagdulot sa kanya ng matinding pighati."
  },
  {
    id: 86,
    topic: "El Filibusterismo",
    question: "Ano ang tawag o bansag ng mga Kastila sa mga itinuturing na subersibo, kalaban ng pamahalaan, o may malayang kaisipan?",
    options: ["Filibustero", "Pilibustero", "Insurrecto", "Subversivo"],
    answer: "Filibustero",
    explanation: "Ang filibustero o pilibustero ang bansag sa mga taong gustong kumalas o bumangga sa bulok na sistema ng pamamahala."
  },
  {
    id: 87,
    topic: "El Filibusterismo",
    question: "Sino ang pangunahing tauhan sa El Filibusterismo na nagbalik na mayamang mag-aalahas upang maghasik ng paghihiwalay at rebolusyon?",
    options: ["Simoun", "Basilio", "Isagani", "Kabesang Tales"],
    answer: "Simoun",
    explanation: "Si Simoun ay si Crisostomo Ibarra na nagbalatkayo upang maghiganti at magtulak sa marahas na pagbagsak ng pamahalaang kolonyal."
  },
  {
    id: 88,
    topic: "El Filibusterismo",
    question: "Kailan lumisan si Rizal sa Pilipinas patungong Europa upang isulat ang nobela matapos ang pag-uusig sa Calamba?",
    options: ["Pebrero 3, 1888", "Nobyembre 20, 1891", "Oktubre 18, 1891", "Hulyo 15, 1892"],
    answer: "Pebrero 3, 1888",
    explanation: "Nilisan ni Rizal ang Pilipinas noong Pebrero 3, 1888 upang magtungo sa Hong Kong at Europa upang ipagpatuloy ang pakikipaglaban sa pamamagitan ng panulat."
  },
  {
    id: 89,
    topic: "El Filibusterismo",
    question: "Saang lungsod sa bansang Belgium inilimbag at inilathala ang nobelang El Filibusterismo?",
    options: ["Genta (Ghent), Belgium", "Brussels, Belgium", "Antwerp, Belgium", "Paris, France"],
    answer: "Genta (Ghent), Belgium",
    explanation: "Inilimbag ang El Filibusterismo sa Genta (Ghent), Belgium sa imprenta ng F. Meyer-Van Loo noong Setyembre 1891."
  },
  {
    id: 90,
    topic: "El Filibusterismo",
    question: "Kailan opisyal na nailimbag at lumabas sa imprenta ang nobelang El Filibusterismo sa Ghent?",
    options: ["Setyembre 18, 1891", "Oktubre 18, 1891", "Nobyembre 20, 1891", "Disyembre 30, 1896"],
    answer: "Setyembre 18, 1891",
    explanation: "Opisyal na natapos at lumabas ang aklat noong Setyembre 18, 1891 sa tulong pinansyal ni Valentin Ventura."
  },
  {
    id: 91,
    topic: "El Filibusterismo",
    question: "Sino ang bayani at kaibigang nagpadala ng pondo na sumagip sa pagpapalimbag ng El Filibusterismo nang maubusan ng pera si Rizal?",
    options: ["Valentin Ventura", "Maximo Viola", "Jose Alejandro", "Edilberto Evangelista"],
    answer: "Valentin Ventura",
    explanation: "Si Valentin Ventura ang nagpadala ng salaping nagpatuloy at nagligtas sa paglilimbag ng nobela nang ito ay muntik nang itigil at sunugin."
  },
  {
    id: 92,
    topic: "El Filibusterismo",
    question: "Sino ang kasama ni Rizal na nag-aaral ng inhinyeriya sa Genta na nakasama niya sa silid habang nagtitipid at kumakain ng biskwit?",
    options: ["Alejandro (Jose Alejandro)", "Edilberto Evangelista", "Mariano Ponce", "Sixto Lopez"],
    answer: "Alejandro (Jose Alejandro)",
    explanation: "Si Jose Alejandro ang kasama ni Rizal sa inuupahang kuwarto sa Genta kung saan naranasan nila ang matinding tipiran sa pagkain."
  },
  {
    id: 93,
    topic: "El Filibusterismo",
    question: "Sino ang isa pang Pilipinong iskolar at inhinyero na nakasama o nakatagpo ni Rizal sa Genta habang isinusulat ang nobela?",
    options: ["Edilberto Evangelista", "Jose Alejandro", "Valentin Ventura", "Maximo Viola"],
    answer: "Edilberto Evangelista",
    explanation: "Si Edilberto Evangelista ang isa pang iskolar sa Europa na nakasama at nakilala ni Rizal sa panahon ng paglilimbag sa Belgium."
  },
  {
    id: 94,
    topic: "El Filibusterismo",
    question: "Ilan ang orihinal na dami ng mga kabanata ng El Filibusterismo bago ibinaba upang makatipid sa gastusin?",
    options: ["44 na kabanata", "39 na kabanata", "40 na kabanata", "45 na kabanata"],
    answer: "44 na kabanata",
    explanation: "Ang orihinal na balangkas ng nobela ay binubuo ng 44 na kabanata, ngunit ibinaba ito sa 39 upang magkasya sa natitirang pondo sa imprenta."
  },
  {
    id: 95,
    topic: "El Filibusterismo",
    question: "Ilan ang kabanata na natira at nailimbag sa pinal na bersyon ng El Filibusterismo?",
    options: ["39 na kabanata", "44 na kabanata", "35 na kabanata", "37 na kabanata"],
    answer: "39 na kabanata",
    explanation: "39 na kabanata lamang ang nailimbag dahil kinulang sa pondo si Rizal habang isinasagawa ang pag-imprenta sa Ghent."
  },
  {
    id: 96,
    topic: "El Filibusterismo",
    question: "Anong mahalagang bahagi ng nobela ang tinanggal at hindi isinama ni Rizal sa paglilimbag upang makatipid sa gastos?",
    options: ["Paunang Salita", "Huling Kabanata", "Dahon ng Pamagat", "Tala ng mga Tauhan"],
    answer: "Paunang Salita",
    explanation: "Tinanggal ni Rizal ang Paunang Salita upang makatipid sa gastos sa imprenta, kaya't hindi ito matatagpuan sa orihinal na edisyong Genta."
  },
  {
    id: 97,
    topic: "El Filibusterismo",
    question: "Sino-sino ang mga pinadalhan ni Rizal ng mga unang sipi ng El Filibusterismo sa labas ng bansa (tulad sa Hong Kong)?",
    options: ["Jose Ma. Basa at Sixto Lopez", "Valentin Ventura at Maximo Viola", "Juan at Antonio Luna", "Ferdinand Blumentritt at Mariano Ponce"],
    answer: "Jose Ma. Basa at Sixto Lopez",
    explanation: "Sina Jose Ma. Basa at Sixto Lopez sa Hong Kong ang kabilang sa mga unang pinadalhan ng kopya ng bagong nobela."
  },
  {
    id: 98,
    topic: "El Filibusterismo",
    question: "Anong pahayagan sa Madrid ang naglathala ng mga serye ng El Filibusterismo noong Oktubre 1891?",
    options: ["El Nuevo Regimen", "La Solidaridad", "La Patria", "El Heraldo de Madrid"],
    answer: "El Nuevo Regimen",
    explanation: "Ang pahayagang El Nuevo Regimen sa Madrid ang naglathala ng mga serye mula sa nobela bilang pagpapalaganap ng mensahe nito."
  },
  {
    id: 99,
    topic: "El Filibusterismo",
    question: "Ano ang tawag sa unang edisyon ng El Filibusterismo na inilimbag sa Belgium?",
    options: ["Edisyong Genta", "Edisyong Paris", "Edisyong Madrid", "Edisyong London"],
    answer: "Edisyong Genta",
    explanation: "Edisyong Genta ang tawag sa unang edisyon ng aklat na inilimbag sa Ghent noong 1891."
  },
  {
    id: 100,
    topic: "El Filibusterismo",
    question: "Magkano ang napakataas na presyo o halaga na naabot ng ilang bihirang sipi ng El Filibusterismo dahil sa pagkumpiska?",
    options: ["400 pesetas", "100 pesetas", "200 pesetas", "500 pesetas"],
    answer: "400 pesetas",
    explanation: "Umabot sa 400 pesetas ang halaga ng ilang bihirang sipi dahil sa pagkaubos at mahigpit na pagkumpiska ng mga awtoridad."
  },
  {
    id: 101,
    topic: "El Filibusterismo",
    question: "Sino ang dakilang rebolusyonaryong bayani na malaki ang naging impluwensya ng El Filibusterismo sa pagtatag ng Katipunan?",
    options: ["Andres Bonifacio", "Emilio Aguinaldo", "Apolinario Mabini", "Antonio Luna"],
    answer: "Andres Bonifacio",
    explanation: "Si Andres Bonifacio ay labis na naimpluwensyahan ng mga aral at mensahe ng mga nobela ni Rizal sa pagtatag ng kilusang Katipunan."
  },
  {
    id: 102,
    topic: "El Filibusterismo",
    question: "Anong lihim at radikal na kilusang rebolusyonaryo ang iniuugnay sa pagpapalaganap ng diwa ng huling obra ni Rizal?",
    options: ["Katipunan", "La Liga Filipina", "Propaganda Movement", "Hermandad"],
    answer: "Katipunan",
    explanation: "Ang Katipunan ang lihim na samahang nagtaguyod ng armadong rebolusyon para sa ganap na kalayaan ng Pilipinas."
  },
  {
    id: 103,
    topic: "El Filibusterismo",
    question: "Ano ang pangalan ng mabagal at simbolikong sasakyang pandagat sa unang kabanata ng El Filibusterismo na naglalayag sa Ilog Pasig?",
    options: ["Bapor Tabo", "Bapor Don Juan", "Bapor Cebu", "Bapor España"],
    answer: "Bapor Tabo",
    explanation: "Ang Bapor Tabo ay sumisimbolo sa bulok, mabagal, at nahahati sa dalawang antas na sistema ng pamahalaang kolonyal."
  },
  {
    id: 104,
    topic: "El Filibusterismo",
    question: "Sino ang mag-aaral ng medisina sa nobela na ulila at inalok ni Simoun na makiisa sa paghihimagsik?",
    options: ["Basilio", "Isagani", "Kabesang Tales", "Juanito Pelaez"],
    answer: "Basilio",
    explanation: "Si Basilio ay ang masipag na mag-aaral ng medisina na nagbago ang pananaw matapos mamatay ang kasintahang si Huli."
  },
  {
    id: 105,
    topic: "El Filibusterismo",
    question: "Sino ang makata at idealistang mag-aaral sa nobela na kasintahan noon ni Paulita Gomez?",
    options: ["Isagani", "Basilio", "Juanito Pelaez", "Sandoval"],
    answer: "Isagani",
    explanation: "Si Isagani ang makatang mag-aaral na nagligtas sa mga tao sa piging sa pamamagitan ng paghahagis ng lampara sa ilog."
  },
  {
    id: 106,
    topic: "El Filibusterismo",
    question: "Sino ang magsasakang inagawan ng lupa at ginawang tulisan sa kabundukan matapos mabigo sa sistema ng katarungan?",
    options: ["Kabesang Tales", "Tandang Selo", "Simoun", "Basilio"],
    answer: "Kabesang Tales",
    explanation: "Si Kabesang Tales ay sumisimbolo sa biktima ng pang-aagaw ng lupa ng mga prayle na humantong sa paglaban sa pamamagitan ng dahas."
  },
  {
    id: 107,
    topic: "El Filibusterismo",
    question: "Sino ang dating kasintahan ni Ibarra sa Noli na pumasok sa kumbento ng Santa Clara at naging dahilan ng labis na pighati ni Simoun?",
    options: ["Maria Clara", "Paulita Gomez", "Juli", "Huli"],
    answer: "Maria Clara",
    explanation: "Si Maria Clara ay pumasok sa kumbento upang iligtas ang karangalan ng pamilya, at ang kanyang pagkamatay ang nagtulak kay Simoun sa sukdulang paghihiganti."
  },
  {
    id: 108,
    topic: "El Filibusterismo",
    question: "Sino ang mabait na paring Pilipino na tumanggap kay Simoun at nakinig sa kanyang huling mga sandali sa katapusan ng nobela?",
    options: ["Padre Florentino", "Padre Salvi", "Padre Camorra", "Padre Agaton"],
    answer: "Padre Florentino",
    explanation: "Si Padre Florentino ang nag-aral kay Simoun sa huling sandali at nagtapon ng kanyang kayamanan sa dagat."
  },
  {
    id: 109,
    topic: "El Filibusterismo",
    question: "Sino ang dalagang minahal ni Isagani ngunit piniling magpakasal kay Juanito Pelaez dahil sa mataas na estado sa lipunan?",
    options: ["Paulita Gomez", "Maria Clara", "Juli", "Ben Zayb"],
    answer: "Paulita Gomez",
    explanation: "Si Paulita Gomez ang magandang pamangkin ni Doña Victorina na ikinasal kay Juanito Pelaez."
  },
  {
    id: 110,
    topic: "El Filibusterismo",
    question: "Sino ang mapagpanggap na mag-aaral na mayaman na napangasawa ni Paulita Gomez sa katapusan ng kwento?",
    options: ["Juanito Pelaez", "Isagani", "Basilio", "Sandoval"],
    answer: "Juanito Pelaez",
    explanation: "Si Juanito Pelaez ang mapanlinlang na mag-aaral na nagustuhan sa lipunan at pinakasalan ni Paulita."
  },
  {
    id: 111,
    topic: "El Filibusterismo",
    question: "Ano ang tawag sa makapinsalang lampara na may dalang nitrogliserina na itinakda ni Simoun na sumabog sa marangyang piging?",
    options: ["Makapinsalang lampara (may nitro-gliserina)", "Lamparang tanso", "Lamparang de-langis", "Lamparang kristal"],
    answer: "Makapinsalang lampara (may nitro-gliserina)",
    explanation: "Ang lamparang may nitrogliserina ang instrumento ng pagsabog na gagamitin sana upang patayin ang mga opisyal sa piging."
  },
  {
    id: 112,
    topic: "El Filibusterismo",
    question: "Anong planong pang-edukasyon ng mga mag-aaral ang buong-pasiyang ipinaglaban ngunit kalaunan ay nabigo at ibinasura?",
    options: ["Akademya ng Wikang Kastila", "Paaralan sa Talisay", "Kolehiyo ng San Juan de Letran", "Unibersidad ng Santo Tomas"],
    answer: "Akademya ng Wikang Kastila",
    explanation: "Ang Akademya ng Wikang Kastila ang isinusulong ng mga estudyante upang madaling matututo ang mga Pilipino, ngunit ito ay ginawang biro at ibinasura."
  },
  {
    id: 113,
    topic: "El Filibusterismo",
    question: "Anong malungkot na balita ang dumating kay Simoun na nagpalala sa kanyang damdamin at nagtulak sa kanya upang itulak ang marahas na paghihiganti?",
    options: ["Pagkamatay ni Maria Clara", "Pagkamatay ni Juli", "Pagkamatay ni Kabesang Tales", "Pagkamatay ni Tandang Selo"],
    answer: "Pagkamatay ni Maria Clara",
    explanation: "Ang balita ng pagkamatay ni Maria Clara sa loob ng kumbento ang nag-alis sa natitirang pag-asa ni Simoun kaya't inilunsad niya ang pinal na plano."
  },
  {
    id: 114,
    topic: "El Filibusterismo",
    question: "Ano ang ipinakita ng kabiguan at kamatayan ni Simoun sa huli ng nobela pagdating sa paraan ng pagbabago?",
    options: ["Na ang marahas na paghihiganti ay hindi awtomatikong magdudulot ng katarungan", "Na ang edukasyon ay walang silbi", "Na ang simbahan ang magpapalaya sa bayan", "Na dapat sumuko sa mga Kastila"],
    answer: "Na ang marahas na paghihiganti ay hindi awtomatikong magdudulot ng katarungan",
    explanation: "Ipinakita sa wakas ng nobela na ang kasamaan ay hindi maitatama ng isa pang kasamaan o dahas."
  },
  {
    id: 115,
    topic: "El Filibusterismo",
    question: "Anong pambansang simbolismo ang iniuugnay sa katauhan at sinapit ni Maria Clara sa loob ng nobela?",
    options: ["Inang Bayan", "Simbahan", "Katarungan", "Katiwalian"],
    answer: "Inang Bayan",
    explanation: "Si Maria Clara ay sinisimbolo bilang ang inaapi at tahimik na Inang Bayan na nasasakdal sa loob ng sistema."
  },
  {
    id: 116,
    topic: "El Filibusterismo",
    question: "Sino ang kasama sa kilusang propaganda na nagkaroon ng hindi pagkakaunawaan kay Rizal kaya siya tumigil sa pagsulat sa La Solidaridad?",
    options: ["Marcelo H. del Pilar", "Graciano Lopez Jaena", "Mariano Ponce", "Antonio Luna"],
    answer: "Marcelo H. del Pilar",
    explanation: "Nagkaroon ng alitan sa pamumuno at patakaran sa pagitan nina Rizal at Marcelo H. del Pilar, kaya't nagpasya si Rizal na itigil ang pagsulat sa pahayagan."
  },
  {
    id: 117,
    topic: "El Filibusterismo",
    question: "Kailan pormal na ipinaalam ni Rizal kay Marcelo H. del Pilar na titigil na siyang sumulat para sa La Solidaridad?",
    options: ["Oktubre 7, 1891", "Nobyembre 20, 1891", "Enero 31, 1892", "Hulyo 3, 1892"],
    answer: "Oktubre 7, 1891",
    explanation: "Noong Oktubre 7, 1891 isinulat ni Rizal ang kanyang desisyong huwag nang tanggapin ang pondo at tumigil sa pagsulat para sa La Solidaridad."
  },
  {
    id: 118,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Kailan dumating si Rizal sa Hong Kong matapos lisanin ang Europa?",
    options: ["Nobyembre 20, 1891", "Disyembre 1, 1891", "Enero 31, 1892", "Hunyo 26, 1892"],
    answer: "Nobyembre 20, 1891",
    explanation: "Dumating si Rizal sa Hong Kong noong Nobyembre 20, 1891 at tinanggap ng mga kaibigang Pilipino doon."
  },
  {
    id: 119,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang tanyag na kaibigang nagpatuloy at tumulong kay Rizal sa kanyang pagdating sa Hong Kong?",
    options: ["Jose Ma. Basa", "Sixto Lopez", "Valentin Ventura", "Ferdinand Blumentritt"],
    answer: "Jose Ma. Basa",
    explanation: "Si Jose Ma. Basa ang sumalubong at tumulong kay Rizal sa pagtatag ng buhay at klinika sa Hong Kong."
  },
  {
    id: 120,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Ano ang eksaktong adres at tirahan ni Rizal sa Hong Kong ayon sa kasaysayan?",
    options: ["Blg. 5 D'Aguilar Street", "Blg. 2 Rednaxela Terrace", "45 Rue Maubeuge", "Kalye Ylaya"],
    answer: "Blg. 2 Rednaxela Terrace",
    explanation: "Blg. 5 D'Aguilar Street ang kanyang tirahan, habang ang kanyang klinika sa mata ay matatagpuan sa Blg. 2 Rednaxela Terrace."
  },
  {
    id: 121,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Ano ang eksaktong adres ng klinika ni Rizal sa mata sa Hong Kong?",
    options: ["Blg. 2 Rednaxela Terrace", "Blg. 5 D'Aguilar Street", "Rue Maubeuge", "Binondo"],
    answer: "Blg. 5 D'Aguilar Street",
    explanation: "Sa Blg. 2 Rednaxela Terrace binuksan ni Rizal ang kanyang klinika upang gamutin ang mga may sakit sa mata."
  },
  {
    id: 122,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Ano ang propesyon at espesyalisasyon ni Rizal na buong-husay niyang pinraktis sa Hong Kong upang kumita?",
    options: ["Optalmologo (manggagamot ng mga mata)", "Inhinyero", "Agri-kulturista", "Abugado"],
    answer: "Optalmologo (manggagamot ng mga mata)",
    explanation: "Si Rizal ay isang bantog na optalmologo kaya't mabilis siyang nakilala at nagtagumpay sa paggamot sa mga pasyente sa Hong Kong."
  },
  {
    id: 123,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang misyonerong Tyrolese na naging kalaro ni Rizal sa ahedres (chess) habang lulan ng Melbourne na inilarawan niyang 'isang Padre Damaso na walang pagyayabang'?",
    options: ["Padre Fuchs", "Padre Balaguer", "Padre Pastells", "Padre Obach"],
    answer: "Padre Fuchs",
    explanation: "Si Padre Fuchs ang misyonerong Tyrolese na nakasama ni Rizal sa paglalayag at nakalaro sa ahedres sa bapor Melbourne."
  },
  {
    id: 124,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Anong bahagi ng mata ng kanyang ina ang matagumpay na inoperahan ni Dr. Jose Rizal sa Hong Kong na nagbalik ng paningin nito?",
    options: ["Kaliwang mata (katarata)", "Kanang mata (glaucoma)", "Magkabilang mata (astigmatism)", "Retina"],
    answer: "Kaliwang mata (katarata)",
    explanation: "Matagumpay na inoperahan ni Rizal ang katarata sa kaliwang mata ng kanyang inang si Doña Teodora Alonso sa Hong Kong."
  },
  {
    id: 125,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang ina ni Rizal na matagumpay niyang inoperahan para sa sakit na katarata sa kaliwang mata sa Hong Kong?",
    options: ["Doña Teodora Alonso", "Lucia Rizal", "Narcisa Rizal", "Trinidad Rizal"],
    answer: "Doña Teodora Alonso",
    explanation: "Matagumpay na inoperahan ni Rizal ang katarata ng kanyang inang si Doña Teodora Alonso sa Hong Kong, na nagbalik ng paningin nito."
  },
  {
    id: 126,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang bayaw ni Rizal na nagbalita sa kanya sa Hong Kong tungkol sa malupit na deportasyon sa Calamba?",
    options: ["Manuel T. Hidalgo", "Silvestre Ubaldo", "Paciano Rizal", "Mariano Herbosa"],
    answer: "Manuel T. Hidalgo",
    explanation: "Si Manuel T. Hidalgo ang nagpadala ng balita hinggil sa pagpapatapon sa mga kamag-anak at magsasaka sa Calamba."
  },
  {
    id: 127,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Kailan natanggap at nabalitaan ni Rizal sa Hong Kong ang deportasyon ng 25 katao mula sa Calamba?",
    options: ["Disyembre 1, 1891", "Nobyembre 20, 1891", "Enero 31, 1892", "Oktubre 7, 1891"],
    answer: "Disyembre 1, 1891",
    explanation: "Noong Disyembre 1, 1891 natanggap ni Rizal ang liham mula kay Manuel Hidalgo na nagsasaad ng pagpapatapon sa 25 katao."
  },
  {
    id: 128,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Ilang katao mula sa Calamba ang sapilitang ipinatapon ng pamahalaang kolonyal ayon sa balitang natanggap ni Rizal?",
    options: ["25 katao", "10 katao", "50 katao", "100 katao"],
    answer: "25 katao",
    explanation: "25 katao kabilang ang mga kaanak ni Rizal ang ipinatapon sa iba't ibang lugar dahil sa isyu sa lupa."
  },
  {
    id: 129,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang bayaw ni Rizal na kasama niyang sumunod na pumunta sa Hong Kong upang magsama-sama ang pamilya?",
    options: ["Silvestre Ubaldo", "Manuel T. Hidalgo", "Antonino Lopez", "Mariano Herbosa"],
    answer: "Silvestre Ubaldo",
    explanation: "Si Silvestre Ubaldo ang kasamang lumikas patungong Hong Kong, kasama ang kanyang amang si Francisco Mercado at iba pa."
  },
  {
    id: 130,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang nagpadala kay Rizal ng mga aklat medikal tulad ng Diagnostic Pathology sa Hong Kong?",
    options: ["Dr. Ariston Bautista Lin", "Don Antonio Vergel de Dios", "G. Boustead", "Dr. Lorenzo Marques"],
    answer: "Dr. Ariston Bautista Lin",
    explanation: "Si Dr. Ariston Bautista Lin ang nagpadala ng mga makabagong aklat medikal upang mapakinabangan ni Rizal sa kanyang klinika."
  },
  {
    id: 131,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang nag-alok at tumulong kay Rizal sa pagbili ng mga instrumentong medikal sa Europa para sa klinika sa Hong Kong?",
    options: ["Don Antonio Vergel de Dios", "Dr. Ariston Bautista Lin", "Jose Ma. Basa", "G. Boustead"],
    answer: "Don Antonio Vergel de Dios",
    explanation: "Si Don Antonio Vergel de Dios ang nag-alok at tumulong sa pagkuha ng mga kagamitang medikal para kay Rizal."
  },
  {
    id: 132,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang ama ni Nellie na nagpadala kay Rizal ng liham ng pagpupuri sa kanyang tagumpay bilang doktor sa Hong Kong?",
    options: ["G. Boustead", "George Taufer", "Charles Becket", "Reinhold Rost"],
    answer: "G. Boustead",
    explanation: "Si G. Boustead ang ama ni Nellie Boustead na nagpadala ng paghanga sa tagumpay ng klinika ni Rizal sa Hong Kong."
  },

  // --- GROUP 3: IKALAWANG PAGBABALIK, DAPITAN, AT MGA HULING ARAW ---
  {
    id: 133,
    topic: "Dapitan at Huling Araw",
    question: "Kailan naganap ang ikalawang pagbabalik ni Rizal sa Pilipinas mula sa Hong Kong upang kausapin si Despujol at itatag ang La Liga?",
    options: ["Hunyo 26, 1892", "Hulyo 3, 1892", "Hulyo 6, 1892", "Hulyo 15, 1892"],
    answer: "Hunyo 26, 1892",
    explanation: "Dumating si Rizal sa Maynila kasama ang kapatid na si Lucia noong Hunyo 26, 1892 sakay ng bapor Don Juan."
  },
  {
    id: 134,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang kapatid na babae na kasama ni Rizal sa kanyang pagbalik sa Pilipinas noong Hunyo 1892?",
    options: ["Lucia Rizal", "Narcisa Rizal", "Saturnina Rizal", "Trinidad Rizal"],
    answer: "Lucia Rizal",
    explanation: "Si Lucia Rizal ang tanging kapatid na babae na sumama kay Rizal pabalik ng Maynila mula sa Hong Kong."
  },
  {
    id: 135,
    topic: "Dapitan at Huling Araw",
    question: "Anong barko ang sinakyan nina Rizal at Lucia mula Hong Kong patungong Maynila noong Hunyo 1892?",
    options: ["Bapor Don Juan", "Bapor Cebu", "Bapor España", "Isla de Panay"],
    answer: "Bapor Don Juan",
    explanation: "Lulan sila ng Bapor Don Juan nang dumating sa daungan ng Maynila noong Hunyo 26, 1892."
  },
  {
    id: 136,
    topic: "Dapitan at Huling Araw",
    question: "Saang hotel tumuloy sina Rizal at Lucia sa Maynila pagdating nila noong 1892?",
    options: ["Hotel de Oriente", "Manila Hotel", "Oriente Palace", "Hotel de Paris"],
    answer: "Hotel de Oriente",
    explanation: "Tumuloy sila sa Hotel de Oriente sa Binondo, kung saan nakatira sa Silid 22 na nakaharap sa simbahan."
  },
  {
    id: 137,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang numero ng silid ni Rizal sa Hotel de Oriente sa Binondo noong dumating siya sa Maynila?",
    options: ["Silid 22", "Silid 10", "Silid 45", "Silid 5"],
    answer: "Silid 22",
    explanation: "Silid 22 ang silid ni Rizal sa Hotel de Oriente kung saan binisita siya ng iba't ibang lider-sibiko at nmanmanan ng mga guardia civil."
  },
  {
    id: 138,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang gobernador-heneral ng Espanya sa Pilipinas na kinausap ni Rizal sa Malacañang matapos ang kanyang pagbabalik?",
    options: ["Eulogio Despujol", "Valeriano Weyler", "Camilo de Polavieja", "Ramon Blanco"],
    answer: "Eulogio Despujol",
    explanation: "Si Gob.-Gen. Eulogio Despujol ang nagbigay ng panayam kay Rizal ngunit kalaunan ay nagpasya ring dakpin at ipatapon ito."
  },
  {
    id: 139,
    topic: "Dapitan at Huling Araw",
    question: "Kailan isinagawa ang ikalawang panayam o pakikipag-usap ni Rizal kay Gobernador-Heneral Despujol kung saan pinag-usapan ang pagpapatapon?",
    options: ["Hunyo 29, 1892", "Hulyo 3, 1892", "Hunyo 26, 1892", "Hulyo 6, 1892"],
    answer: "Hunyo 29, 1892",
    explanation: "Nagkaroon ng mahalagang ikalawang panayam noong Hunyo 29, 1892 kung saan tinutulan ni Despujol ang pagtitipon sa Mindoro."
  },
  {
    id: 140,
    topic: "Dapitan at Huling Araw",
    question: "Sino-sino ang mga kapatid na babae na binisita ni Rizal sa kanyang pagbalik sa Maynila maliban kay Lucia?",
    options: ["Narcisa at Saturnina", "Trinidad at Josepha", "Olympia at Maria", "Maria at Paz"],
    answer: "Narcisa at Saturnina",
    explanation: "Binisita ni Rizal sina Narcisa at Saturnina upang makipagkita sa pamilya bago ang kanyang pag-aresto."
  },
  {
    id: 141,
    topic: "Dapitan at Huling Araw",
    question: "Kailan isinagawa ni Rizal ang kanyang makasaysayang paglalakbay sa Gitnang Luzon sakay ng tren?",
    options: ["Hunyo 27, 1892", "Hunyo 28, 1892", "Hulyo 3, 1892", "Hulyo 6, 1892"],
    answer: "Hunyo 27, 1892",
    explanation: "Noong Hunyo 27, 1892 naglakbay si Rizal sakay ng tren upang makipagkita sa mga kaibigan at palaganapin ang diwa ng reporma."
  },
  {
    id: 142,
    topic: "Dapitan at Huling Araw",
    question: "Saang tanyag na istasyon ng tren sa Maynila sumakay si Rizal patungong Gitnang Luzon?",
    options: ["Istasyon ng Tutuban", "Istasyon ng Paco", "Istasyon ng Caloocan", "Istasyon ng Binondo"],
    answer: "Istasyon ng Tutuban",
    explanation: "Sa Istasyon ng Tutuban sa Tondo sumakay si Rizal patungong Malolos, San Fernando, Tarlac, at Bacolor."
  },
  {
    id: 143,
    topic: "Dapitan at Huling Araw",
    question: "Ano-ano ang mga pangunahing bayan sa Gitnang Luzon na binisita ni Rizal noong Hunyo 1892 upang hikayatin ang mga kababayan?",
    options: ["Malolos, San Fernando, Tarlac, at Bacolor", "Calamba, Biñan, at Santa Rosa", "Vigan, Laoag, at Paoay", "Cavite, Imus, at Bacoor"],
    answer: "Malolos, San Fernando, Tarlac, at Bacolor",
    explanation: "Sila ang mga binisitang bayan sa Gitnang Luzon kung saan sinundan din ng mga guardia civil ang mga pinuntahang bahay."
  },
  {
    id: 144,
    topic: "Dapitan at Huling Araw",
    question: "Kailan naganap ang pagbabalik ni Rizal sa Maynila matapos ang kanyang paglalakbay sa Gitnang Luzon?",
    options: ["Hunyo 28, 1892", "Hunyo 29, 1892", "Hulyo 3, 1892", "Hulyo 6, 1892"],
    answer: "Hunyo 28, 1892",
    explanation: "Bumalik si Rizal sa Maynila noong Hunyo 28, 1892 upang maghanda sa pagtatatag ng La Liga Filipina."
  },
  {
    id: 145,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pangalan ng sibikong samahan na itinatag ni Rizal upang pag-isahin ang buong kapuluan at itaguyod ang reporma?",
    options: ["La Liga Filipina", "Katipunan", "Asosasyong Internasyonal", "Sociedad de Agricultores"],
    answer: "La Liga Filipina",
    explanation: "Ang La Liga Filipina ay itinatag ni Rizal noong Hulyo 3, 1892 upang itaguyod ang pagtutulungan, edukasyon, at reporma sa bansa."
  },
  {
    id: 146,
    topic: "Dapitan at Huling Araw",
    question: "Kailan opisyal na itinatag ang La Liga Filipina sa isang pagtitipon sa Tondo?",
    options: ["Hulyo 3, 1892", "Hunyo 26, 1892", "Hulyo 6, 1892", "Hulyo 15, 1892"],
    answer: "Hulyo 3, 1892",
    explanation: "Opisyal itong itinatag noong Hulyo 3, 1892 sa tulong ng 17 kataong dumalo sa Tondo."
  },
  {
    id: 147,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang may-ari ng tahanan sa Kalye Ylaya, Tondo kung saan itinatag ang La Liga Filipina?",
    options: ["Doroteo Ongjunco", "Ambrosio Salvador", "Deodato Arellano", "Bonifacio Arevalo"],
    answer: "Doroteo Ongjunco",
    explanation: "Si Doroteo Ongjunco ang may-ari ng bahay sa Kalye Ylaya, Tondo kung saan idinaos ang unang pagtitipon ng Liga."
  },
  {
    id: 148,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang unang nahalal na Pangulo ng La Liga Filipina sa unang pagtitipon nito?",
    options: ["Ambrosio Salvador", "Deodato Arellano", "Bonifacio Arevalo", "Agustin dela Rosa"],
    answer: "Ambrosio Salvador",
    explanation: "Si Ambrosio Salvador ang nahalal na Pangulo, kasama si Deodato Arellano bilang Kalihim."
  },
  {
    id: 149,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang naglingkod bilang Kalihim ng La Liga Filipina?",
    options: ["Deodato Arellano", "Bonifacio Arevalo", "Agustin dela Rosa", "Domingo Franco"],
    answer: "Deodato Arellano",
    explanation: "Si Deodato Arellano ang naglingkod bilang Kalihim sa pamunuan ng samahan."
  },
  {
    id: 150,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang naglingkod bilang Ingat-yaman (Treasurer) ng La Liga Filipina?",
    options: ["Bonifacio Arevalo", "Agustin dela Rosa", "Ambrosio Salvador", "Deodato Arellano"],
    answer: "Bonifacio Arevalo",
    explanation: "Si Bonifacio Arevalo ang ingat-yaman ng samahan na nangasiwa sa pondo."
  },
  {
    id: 151,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang naglingkod bilang Piskal ng La Liga Filipina sa lupon ng mga opisyal?",
    options: ["Agustin dela Rosa", "Domingo Franco", "Jose Ramos", "Moises Salvador"],
    answer: "Agustin dela Rosa",
    explanation: "Si Agustin dela Rosa ang naglingkod bilang Piskal sa opisyal na talaan ng Liga."
  },
  {
    id: 152,
    topic: "Dapitan at Huling Araw",
    question: "Sino-sino ang iba pang mga mahahalagang kasapi at tagapagtatag na dumalo sa pagtitipon ng La Liga Filipina maliban sa mga opisyal?",
    options: [
      "Andres Bonifacio, Apolinario Mabini, Domingo Franco, Pedro Serrano Laktaw, at iba pa",
      "Juan Luna, Valentin Ventura, at Trinidad Pardo de Tavera",
      "Pio Valenzuela, Jacinto, at Aguinaldo",
      "Morga, Blumentritt, at Rost"
    ],
    answer: "Andres Bonifacio, Apolinario Mabini, Domingo Franco, Pedro Serrano Laktaw, at iba pa",
    explanation: "Sila sina Andres Bonifacio, Apolinario Mabini (Katabay), Domingo Franco, at marami pang iba na naging haligi ng kilusan."
  },
  {
    id: 153,
    topic: "Dapitan at Huling Araw",
    question: "Magkano ang buwanang butaw na sinisingil sa bawat kasapi ng La Liga Filipina para sa pondo at tulong?",
    options: ["10 sentimos", "5 sentimos", "25 sentimos", "1 piso"],
    answer: "10 sentimos",
    explanation: "10 sentimos bawat buwan ang butaw para makatulong sa kapos na kasapi, puhunan sa negosyo, at edukasyon."
  },
  {
    id: 154,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang Latin na sagisag o moto ng La Liga Filipina na nangangahulugang 'Bawa't isa ay katulad ng lahat'?",
    options: ["Unus instar omnium", "Consummatum est", "Status quo", "Perla de hombre"],
    answer: "Unus instar omnium",
    explanation: "Ang 'Unus instar omnium' ang opisyal na kasabihan ng La Liga Filipina na nagtataguyod ng pagkakapantay-pantay at pagtutulungan."
  },
  {
    id: 155,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang kahulugan sa Tagalog ng Latin na moto ng La Liga Filipina na 'Unus instar omnium'?",
    options: ["Bawa't isa ay katulad ng lahat", "Ang kalayaan ay para sa lahat", "Pagkakaisa hanggang wakas", "Mabuhay ang Inang Bayan"],
    answer: "Bawa't isa ay katulad ng lahat",
    explanation: "Ito ay nangangahulugang ang bawat miyembro ay may pantay na halaga at tungkulin sa pagpapatakbo ng samahan."
  },
  {
    id: 156,
    topic: "Dapitan at Huling Araw",
    question: "Ano-ano ang mga pangunahing larangan na nais suportahan at itaguyod ng La Liga Filipina ayon sa saligang-batas nito?",
    options: ["Edukasyon, agrikultura, at komersyo", "Militarismo at pagtatanggol", "Sining at panitikan lamang", "Relihiyon at misyon"],
    answer: "Edukasyon, agrikultura, at komersyo",
    explanation: "Layunin ng Liga ang pagtataguyod ng edukasyon, pagpapabuti ng agrikultura, at pagpapalago ng komersyo ng mga Pilipino."
  },
  {
    id: 157,
    topic: "Dapitan at Huling Araw",
    question: "Kailan opisyal na dinakip si Rizal sa Maynila sa utos ni Despujol matapos itatag ang Liga?",
    options: ["Hulyo 6, 1892", "Hulyo 7, 1892", "Hulyo 15, 1892", "Hulyo 17, 1892"],
    answer: "Hulyo 6, 1892",
    explanation: "Dinakip si Rizal noong Hulyo 6, 1892 sa Malacañang matapos palabasing may natagpuang subersibong polyeto sa kanyang bagahe."
  },
  {
    id: 158,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pangalan ng anti-prayleng polyeto na ginamit ng pamahalaan bilang dahilan upang dakpin si Rizal?",
    options: ["Pobres Frailes", "Verdades Nuevas", "Por Telefono", "Ingratitudes"],
    answer: "Pobres Frailes",
    explanation: "Ang Pobres Frailes (mga dukhang prayle) ay isang akdang tumutuligsa sa napakalaking kayamanan ng mga Dominikano na isinulat sa ilalim ng sagisag na 'Padre Jacinto'."
  },
  {
    id: 159,
    topic: "Dapitan at Huling Araw",
    question: "Anong sagisag o pangalan ang ginamit ng may-akda sa loob ng polyetong Pobres Frailes?",
    options: ["Padre Jacinto", "Dimas Alang", "Laong Laan", "Teniuz"],
    answer: "Padre Jacinto",
    explanation: "Padre Jacinto ang sagisag na ginamit sa polyeto na umano'y natagpuan sa punda ng unan sa bagahe ni Lucia."
  },
  {
    id: 160,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang kapatid na babae ni Rizal na inuugnay sa bagahe kung saan sinabing natagpuan ang polyetong Pobres Frailes?",
    options: ["Lucia Rizal", "Narcisa Rizal", "Saturnina Rizal", "Trinidad Rizal"],
    answer: "Lucia Rizal",
    explanation: "Si Lucia Rizal ang kasama ni Rizal mula Hong Kong na pinagbintangang pinagtaguan ng mga polyeto."
  },
  {
    id: 161,
    topic: "Dapitan at Huling Araw",
    question: "Saang bantog na muog o bilangguan sa Maynila unang ikinulong si Rizal noong Hulyo 1892 bago itapon sa Dapitan?",
    options: ["Fort Santiago", "Bilibid", "Montjuïc", "Cuartel de España"],
    answer: "Fort Santiago",
    explanation: "Si Rizal ay ikinulong sa Fort Santiago (dating Real Fuerza de Santiago) sa loob ng 9 na araw bago ipinatapon."
  },
  {
    id: 162,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang pamangkin at ayudante ng gobernador-heneral na sumama at nagdala kay Rizal sa Fort Santiago?",
    options: ["Ramon Despujol", "Enrique Villamor", "Rafael Dominguez", "Koronel Olive"],
    answer: "Ramon Despujol",
    explanation: "Si Ramon Despujol ang naghatid kay Rizal sa loob ng Fort Santiago nang siya ay arestuhin."
  },
  {
    id: 163,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang opisyal na sumalubong sa pagdating ni Rizal sa Fort Santiago nang siya ay ikulong?",
    options: ["Enrique Villamor", "Ramon Despujol", "Koronel Olive", "Kapitan Delgras"],
    answer: "Enrique Villamor",
    explanation: "Si Enrique Villamor ang opisyal na sumalubong kay Rizal sa kanyang pagkakakulong sa muog."
  },
  {
    id: 164,
    topic: "Dapitan at Huling Araw",
    question: "Anong opisyal na pahayagan ng pamahalaan ang nagbalita tungkol sa pagkakadakip kay Rizal noong Hulyo 7, 1892?",
    options: ["Gaceta de Manila", "La Solidaridad", "El Heraldo de Madrid", "La Independencia"],
    answer: "Gaceta de Manila",
    explanation: "Ang Gaceta de Manila ang naglabas ng opisyal na balita hinggil sa pagkaaresto at pagpapatapon kay Rizal."
  },
  {
    id: 165,
    topic: "Dapitan at Huling Araw",
    question: "Kailan inilipat si Rizal mula sa Fort Santiago patungong Dapitan sa Mindanao sakay ng Bapor Cebu?",
    options: ["Hulyo 15, 1892", "Hulyo 6, 1892", "Hulyo 17, 1892", "Hunyo 26, 1892"],
    answer: "Hulyo 15, 1892",
    explanation: "Noong Hulyo 15, 1892 (12:30 n.u.) sinimulan ang paglalakbay ni Rizal patungong Dapitan kung saan siya nanatili ng ilang taon."
  },
  {
    id: 166,
    topic: "Dapitan at Huling Araw",
    question: "Anong bapor ang sinakyan ni Rizal sa kanyang pagpapatapon patungong Dapitan sa ilalim ng pagbabantay?",
    options: ["Bapor Cebu", "Bapor Don Juan", "Bapor España", "Isla de Panay"],
    answer: "Bapor Cebu",
    explanation: "Lulan si Rizal ng Bapor Cebu nang siya ay dalhin patungong Mindanao noong Hulyo 1892."
  },
  {
    id: 167,
    topic: "Dapitan at Huling Araw",
    question: "Kailan opisyal na dumating si Rizal sa Dapitan sakay ng Bapor Cebu?",
    options: ["Hulyo 17, 1892", "Hulyo 15, 1892", "Hulyo 6, 1892", "Agosto 1893"],
    answer: "Hulyo 17, 1892",
    explanation: "Dumating si Rizal sa Dapitan noong Hulyo 17, 1892 (7 n.g.) at ipinagkatiwala sa komandanteng Espanyol."
  },
  {
    id: 168,
    topic: "Dapitan at Huling Araw",
    question: "Saang dalampasigan lumunsad si Rizal nang dumating siya sa Dapitan noong Hulyo 17, 1892?",
    options: ["Dalampasigan ng Sta. Cruz", "Dalampasigan ng Talisay", "Maynila Bay", "Manila Port"],
    answer: "Dalampasigan ng Sta. Cruz",
    explanation: "Sa Dalampasigan ng Sta. Cruz lumunsad si Rizal sa kanyang pagdating sa Dapitan kasama si Kapitan Delgras."
  },
  {
    id: 169,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang kapitan ng barko na nagdala kay Rizal sa Dapitan bago siya inilipat sa pangangalaga ni Ricardo Carnicero?",
    options: ["Kapitan Delgras", "Kapitan Rafael Dominguez", "Ricardo Carnicero", "A. Alemany"],
    answer: "Kapitan Delgras",
    explanation: "Si Kapitan Delgras ang kumander ng barkong naghatid kay Rizal sa Dapitan."
  },
  {
    id: 170,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pangalan ng unang opisyal na tirahan at pinag-opisinahan ni Rizal sa Dapitan bago lumipat sa Talisay?",
    options: ["Casa Real", "Casa Residencia sa Talisay", "Hotel de Oriente", "Cuartel de España"],
    answer: "Casa Real",
    explanation: "Casa Real ang opisyal na tirahan ni Rizal sa simula ng kanyang pagpapatapon sa ilalim ng supervision ni Carnicero."
  },
  {
    id: 171,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang superyor ng mga Heswita na nakipag-ugnayan at nakipagtalastasan kay Rizal tungkol sa pananampalataya habang nasa Dapitan?",
    options: ["Padre Pablo Pastells", "Padre Antonio Obach", "Padre Vicente Balaguer", "Padre Luis Visa"],
    answer: "Padre Pablo Pastells",
    explanation: "Si Padre Pablo Pastells ang superyor ng mga Heswita na nakipagpalitan ng mahahalagang liham kay Rizal ukol sa relihiyon at pilosopiya."
  },
  {
    id: 172,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang paring misyonero sa Dapitan na tumanggi munang ikasal si Rizal kay Josephine Bracken nang walang pahintulot ng Obispo?",
    options: ["Padre Antonio Obach", "Padre Pablo Pastells", "Padre March", "Padre Villaclara"],
    answer: "Padre Antonio Obach",
    explanation: "Si Padre Antonio Obach ang paring Heswita sa Dapitan na nagtakda ng mga kondisyon bago isagawa ang kasalan."
  },
  {
    id: 173,
    topic: "Dapitan at Huling Araw",
    question: "Kailan dumating sa Dapitan ang ina ni Rizal na si Doña Teodora at kapatid niyang si Maria upang makapiling siya?",
    options: ["Agosto 1893", "Setyembre 1892", "Marso 1896", "Hulyo 1892"],
    answer: "Agosto 1893",
    explanation: "Dumating sina Doña Teodora at Maria sa Dapitan noong Agosto 1893 upang ipagamot ang mata ng ina kay Rizal."
  },
  {
    id: 174,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang lawak ng lupang binanggit na binili, tinamnan, at pinagyaman ni Rizal sa Talisay, Dapitan?",
    options: ["16 na ektarya", "10 ektarya", "20 ektarya", "25 ektarya"],
    answer: "16 na ektarya",
    explanation: "16 na ektarya ang lawak ng lupang binili ni Rizal sa Talisay kung saan nagpatayo siya ng bahay, paaralan, at klinika."
  },
  {
    id: 175,
    topic: "Dapitan at Huling Araw",
    question: "Ano-ano ang mga pangunahing pananim ni Rizal sa kanyang lupain sa Dapitan?",
    options: ["Kakaw, kape, tubo, at niyog", "Palay, mais, at gulay", "Mangga, saging, at lansones", "Tabako at abaka"],
    answer: "Kakaw, kape, tubo, at niyog",
    explanation: "Pinagyaman ni Rizal ang lupa sa pamamagitan ng pagtatanim ng kakaw, kape, tubo, at niyog, bukod pa sa pag-aalaga ng mga hayop."
  },
  {
    id: 176,
    topic: "Dapitan at Huling Araw",
    question: "Anong buwan at taon napanalunan ni Rizal at ng mga kasama ang bahagi ng premyo sa Loteryang Manila gamit ang tiket bilang 9736?",
    options: ["Setyembre 1892", "Agosto 1893", "Hunyo 1892", "Hulyo 1892"],
    answer: "Setyembre 1892",
    explanation: "Noong Setyembre 1892 napanalunan ni Rizal kasama sina Ricardo Carnicero at Francisco Equilior ang loterya."
  },
  {
    id: 177,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang isa sa mga kasamang may bahagi sa nanalong tiket sa loterya sa Dapitan bukod kay Rizal at Carnicero?",
    options: ["Francisco Equilior", "Jose Ma. Basa", "Valentin Ventura", "Pio Valenzuela"],
    answer: "Francisco Equilior",
    explanation: "Si Francisco Equilior ang kasosyo sa tiket bilang 9736 na nanalo sa Manila Lottery sa Dapitan."
  },
  {
    id: 178,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pangalan ng kooperatiba o samahang itinatag ni Rizal para sa mga magsasaka sa Dapitan noong 1895?",
    options: ["Sociedad de Agricultores Dapitanos", "La Liga Filipina", "Hermandad de la Paz y Caridad", "Asosasyong Internasyonal"],
    answer: "Sociedad de Agricultores Dapitanos",
    explanation: "Itinatag ang Sociedad de Agricultores Dapitanos noong 1895 upang mapabuti ang ani at kalakalan ng mga magsasaka."
  },
  {
    id: 179,
    topic: "Dapitan at Huling Araw",
    question: "Anong katutubong wika sa Mindanao ang pinag-aralan at sinuri ni Rizal habang siya ay nasa Dapitan bilang polyglot at linguista?",
    options: ["Subanon", "Cebuano", "Ilonggo", "Waray"],
    answer: "Subanon",
    explanation: "Bukod sa Bisaya-Cebuano, pinag-aralan din ni Rizal ang wikang Subanon bilang bahagi ng kanyang lingguwistikong pag-aaral."
  },
  {
    id: 180,
    topic: "Dapitan at Huling Araw",
    question: "Ano-ano ang tatlong siyentipikong uri ng hayop o insekto na natuklasan ni Rizal sa Dapitan na ipinangalan sa kanyang karangalan?",
    options: ["Draco rizali, Rhacophorus rizali, at Apogonia rizali", "Rizaliscus filipinus, Rana rizali, at Aedes rizali", "Python rizali, Gallus rizali, at Sus rizali", "Crocodilus rizali, Felis rizali, at Canis rizali"],
    answer: "Draco rizali, Rhacophorus rizali, at Apogonia rizali",
    explanation: "Si Rizal ay nakatuklas ng mga bagong uri ng hayop at insekto na pinangalanang Draco rizali, Rhacophorus rizali, at Apogonia rizali."
  },
  {
    id: 181,
    topic: "Dapitan at Huling Araw",
    question: "Sa anong edad nililok ni Rizal ang tanyag na eskultura ng Kabanal-banalang Puso ni Hesus mula sa kahoy na baticuling?",
    options: ["Edad 14", "Edad 18", "Edad 21", "Edad 25"],
    answer: "Edad 14",
    explanation: "Nililok niya ang Sacred Heart noong siya ay 14 taong gulang pa lamang habang nag-aaral sa Ateneo."
  },
  {
    id: 182,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pamagat ng likhang-sining ni Rizal sa Dapitan na tumutukoy sa tauhan sa mitolohiyang Griyego na pinarusahan ng mga diyos?",
    options: ["Prometheus Bound", "Pananagumpay ng Agham sa Kamatayan", "Ang Paghihiganti ng Isang Ina", "Ang Babae ng Dapitan"],
    answer: "Prometheus Bound",
    explanation: "Ang Prometheus Bound ay isa sa mga regalong ipinadala ni Rizal kay Blumentritt bilang patunay ng kanyang kahusayan sa sining."
  },
  {
    id: 183,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang kilalang pamagat sa Espanyol ng likhang-sining ni Rizal na 'Ang Paghihiganti ng Isang Ina'?",
    options: ["La venganza de la madre", "La madre doliente", "Madre y patria", "El dolor"],
    answer: "La venganza de la madre",
    explanation: "Ang La venganza de la madre ay naglalarawan ng isang ina na inililigtas ang anak mula sa kinakain ng buwaya."
  },
  {
    id: 184,
    topic: "Dapitan at Huling Araw",
    question: "Anong taon idineklarang National Cultural Treasure ang likhang-sining ni Rizal na 'Ang Paghihiganti ng Isang Ina'?",
    options: ["2008", "1995", "2012", "2000"],
    answer: "2008",
    explanation: "Idineklara itong National Cultural Treasure ng National Museum noong 2008."
  },
  {
    id: 185,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pamagat ng isa pang likhang-sining sa Dapitan na nagpapakita ng babaeng naglalaba (kilala rin bilang Oyang Dapitana)?",
    options: ["Ang Babae ng Dapitan (Oyang Dapitana)", "Imahen ng Mahal na Birhen", "Mi Retiro", "Himno a Talisay"],
    answer: "Ang Babae ng Dapitan (Oyang Dapitana)",
    explanation: "Ang Babae ng Dapitan o Oyang Dapitana ay isa pang kahanga-hangang obra ni Rizal sa panahon ng kanyang destiyero."
  },
  {
    id: 186,
    topic: "Dapitan at Huling Araw",
    question: "Anong mga banyagang akda ang binanggit na naging inspirasyon sa mga isinulat ni Rizal mula sa kanyang kabataan hanggang sa pagpapatapon?",
    options: ["Uncle Tom's Cabin at The Wandering Jew", "Don Quixote at Les Miserables", "Odyssey at Iliad", "Frankenstein at Dracula"],
    answer: "Uncle Tom's Cabin at The Wandering Jew",
    explanation: "Sina Harriet Beecher Stowe at Eugene Sue na may akda ng Uncle Tom's Cabin at The Wandering Jew ang nagbigay-inspirasyon sa kanyang panulat."
  },
  {
    id: 187,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pamagat ng tulang naglalarawan ng payapang buhay sa Dapitan na isinulat ni Rizal sa kahilingan ng inang si Doña Teodora?",
    options: ["Mi Retiro", "El Canto del Viajero", "Himno a Talisay", "Mi Ultimo Adios"],
    answer: "Mi Retiro",
    explanation: "Ang Mi Retiro (Aking Pahingahan) ay isinulat sa Dapitan noong 1895 sa kahilingan ng kanyang ina, naglalaman ng 24 saknong."
  },
  {
    id: 188,
    topic: "Dapitan at Huling Araw",
    question: "Kailan isinulat ang liham ni Rizal sa kanyang ina na nagbanggit sa isinilang na anak na lalaki nina Josephine Bracken na si Francisco na nabuhay lamang ng ilang oras?",
    options: ["Marso 12, 1896", "Hunyo 21, 1896", "Hulyo 31, 1896", "Disyembre 30, 1896"],
    answer: "Marso 12, 1896",
    explanation: "Noong Marso 12, 1896 isinulat ni Rizal ang tungkol sa naging anak nila ni Josephine na namatay agad pagkapanganak at inilibing sa Dapitan."
  },
  {
    id: 189,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pangalan ng bapor na sinakyan ni Dr. Pio Valenzuela patungong Dapitan upang makipagkita kay Rizal noong Hunyo 1896?",
    options: ["Bapor Venus", "Bapor Cebu", "Bapor España", "Bapor Don Juan"],
    answer: "Bapor Venus",
    explanation: "Lulan si Dr. Pio Valenzuela ng Bapor Venus nang siya ay suguin ng Katipunan upang ikonsulta kay Rizal ang planong rebolusyon."
  },
  {
    id: 190,
    topic: "Dapitan at Huling Araw",
    question: "Kailan naganap ang mahalagang pagbisita ni Dr. Pio Valenzuela kay Rizal sa Dapitan?",
    options: ["Hunyo 21, 1896", "Hulyo 31, 1896", "Marso 12, 1896", "Hunyo 26, 1892"],
    answer: "Hunyo 21, 1896",
    explanation: "Noong Hunyo 21, 1896 dumating si Pio Valenzuela kung saan tinutulan ni Rizal ang marahas na pag-aalsa dahil kulang sa armas at paghahanda."
  },
  {
    id: 191,
    topic: "Dapitan at Huling Araw",
    question: "Kailan opisyal na lumisan si Rizal sa Dapitan matapos tanggapin ang alok na maging doktor-militar sa Cuba?",
    options: ["Hulyo 31, 1896", "Hunyo 21, 1896", "Oktubre 6, 1896", "Nobyembre 3, 1896"],
    answer: "Hulyo 31, 1896",
    explanation: "Noong Hulyo 31, 1896 (hatinggabi) lumisan si Rizal sa Dapitan sakay ng Bapor España kasama sina Josephine Bracken at ilang kapamilya."
  },
  {
    id: 192,
    topic: "Dapitan at Huling Araw",
    question: "Ilang araw pinanatili si Rizal sa Kruserang Castilla sa Look ng Maynila bago ang paglalayag patungong Espanya noong 1896?",
    options: ["27 araw", "10 araw", "15 araw", "30 araw"],
    answer: "27 araw",
    explanation: "Nanatili si Rizal ng 27 araw sa Kruserang Castilla sa Cavite habang naghihintay ng susunod na barko patungong Europa."
  },
  {
    id: 193,
    topic: "Dapitan at Huling Araw",
    question: "Anong barko ang sinakyan ni Rizal sa kanyang paglalayag patungong Espanya noong Setyembre 1896 bago siya ibinalik bilang bilanggo?",
    options: ["Isla de Panay", "S.S. Colón", "SS City of Rome", "S.S. Melbourne"],
    answer: "Isla de Panay",
    explanation: "Lulan siya ng Isla de Panay patungong Barcelona, kung saan sa gitna ng daan ay inaresto at dinala sa muog."
  },
  {
    id: 194,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang kapitan ng barkong Isla de Panay na nag-abiso kay Rizal habang naglalakbay patungong Espanya?",
    options: ["A. Alemany", "Kapitan Delgras", "Pedro P. Roxas", "Santiago Mataix"],
    answer: "A. Alemany",
    explanation: "Si Kapitan A. Alemany ang kapitan ng Isla de Panay na nagpatupad ng utos na ikulong si Rizal sa kanyang kamarote sa pagdating sa Malta."
  },
  {
    id: 195,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang kapwa pasahero na bumaba sa Singapore habang si Rizal ay patuloy na naglakbay patungong Espanya noong 1896?",
    options: ["Pedro P. Roxas", "Jose Ma. Basa", "Sixto Lopez", "Edmund Plauchut"],
    answer: "Pedro P. Roxas",
    explanation: "Si Pedro P. Roxas ay bumaba sa Singapore at pinayuhang sumama sa pag-alpas, ngunit tumanggi si Rizal dahil sa kanyang palabra de honor."
  },
  {
    id: 196,
    topic: "Dapitan at Huling Araw",
    question: "Saang lugar sa paglalakbay pinag-usapan ang posibleng pagbaba o pag-alpas ni Rizal mula sa barko upang hindi na maaresto?",
    options: ["Malta", "Singapore", "Colombo", "Barcelona"],
    answer: "Malta",
    explanation: "Sa Malta at Singapore pinag-usapan ang pag-alpas, ngunit pinili ni Rizal na ipagpatuloy ang paglalakbay dahil wala siyang kasalanan."
  },
  {
    id: 197,
    topic: "Dapitan at Huling Araw",
    question: "Saang lungsod sa Espanya dinala si Rizal sa ilalim ng mabigat na pagbabantay bago ikulong sa muog?",
    options: ["Barcelona", "Madrid", "Seville", "Valencia"],
    answer: "Barcelona",
    explanation: "Pagdating sa Barcelona noong Oktubre 3, 1896, si Rizal ay dinala sa muog ng Montjuïc bago ibinalik sa Maynila."
  },
  {
    id: 198,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pangalan ng tanggulan o muog sa Barcelona kung saan pansamantalang ikinulong si Rizal bago isinakay sa S.S. Colón?",
    options: ["Muog ng Montjuïc", "Fort Santiago", "Cuartel de España", "Bilibid"],
    answer: "Muog ng Montjuïc",
    explanation: "Sa Muog ng Montjuïc ikinulong si Rizal sa Barcelona bago siya kinausap ni Despujol at isinakay pabalik ng Pilipinas."
  },
  {
    id: 199,
    topic: "Dapitan at Huling Araw",
    question: "Kailan eksaktong ikinulong si Rizal sa Montjuïc sa Barcelona bago ibinalik sa Maynila?",
    options: ["Oktubre 6, 1896", "Nobyembre 3, 1896", "Disyembre 30, 1896", "Hulyo 31, 1896"],
    answer: "Oktubre 6, 1896",
    explanation: "Noong Oktubre 6, 1896 dinala siya sa Montjuïc bago isinakay sa S.S. Colón patungong Maynila."
  },
  {
    id: 200,
    topic: "Dapitan at Huling Araw",
    question: "Anong barkong panghukbo ng Espanya ang nagbalik kay Rizal sa Maynila bilang bihag at bilanggo noong 1896?",
    options: ["S.S. Colón", "Isla de Panay", "Kruserang Castilla", "Bapor España"],
    answer: "S.S. Colón",
    explanation: "S.S. Colón ang barkong militar na nagdala kay Rizal pabalik ng Maynila bilang bihag."
  },
  {
    id: 201,
    topic: "Dapitan at Huling Araw",
    question: "Kailan dumating si Rizal sa Maynila sakay ng S.S. Colón upang humarap sa paglilitis?",
    options: ["Nobyembre 3, 1896", "Oktubre 6, 1896", "Disyembre 29, 1896", "Disyembre 30, 1896"],
    answer: "Nobyembre 3, 1896",
    explanation: "Dumating si Rizal sa Maynila noong Nobyembre 3, 1896 at direktang ikinulong sa Fort Santiago."
  },
  {
    id: 202,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang huwes panghukbo na tumanggap ng mga dokumento ng paunang pagsisiyasat mula kay Koronel Francisco Olive?",
    options: ["Rafael Dominguez", "Nicolas de la Peña", "Enrique de Alcocer", "Jose Togores Arjona"],
    answer: "Rafael Dominguez",
    explanation: "Si Kapitan Rafael Dominguez ang itinalagang huwes panghukbo upang suriin ang mga ebidensya laban kay Rizal."
  },
  {
    id: 203,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang tagapayo o hukom ng hukbo na nagbigay ng pinal na payo ukol sa kaso at paglilitis ni Rizal?",
    options: ["Nicolas de la Peña", "Rafael Dominguez", "Koronel Olive", "Enrique de Alcocer"],
    answer: "Nicolas de la Peña",
    explanation: "Si Don Nicolas de la Peña ang nagrekomenda na si Rizal ay litisin at samsaman ng ari-arian."
  },
  {
    id: 204,
    topic: "Dapitan at Huling Araw",
    question: "Kailan inilipat ang mga resulta ng paunang pagsisiyasat kay Rafael Dominguez?",
    options: ["Disyembre 2, 1896", "Disyembre 5, 1896", "Disyembre 10, 1896", "Disyembre 29, 1896"],
    answer: "Disyembre 2, 1896",
    explanation: "Inilipat ang mga dokumento kay Dominguez noong Disyembre 2, 1896 upang ihanda ang sakdal."
  },
  {
    id: 205,
    topic: "Dapitan at Huling Araw",
    question: "Kailan isinagawa ang pormal na pagsangguni sa hukom ng hukbo hinggil sa paghahanda ng paglilitis?",
    options: ["Disyembre 5, 1896", "Disyembre 2, 1896", "Disyembre 10, 1896", "Disyembre 26, 1896"],
    answer: "Disyembre 5, 1896",
    explanation: "Isinagawa ito noong Disyembre 5, 1896 kung saan pinagtibay ang paglilitis militar."
  },
  {
    id: 206,
    topic: "Dapitan at Huling Araw",
    question: "Ilang opisyal ang nakatala sa opisyal na listahan na ibinigay kay Rizal upang pagpilian ng kanyang magiging tagapagtanggol?",
    options: ["106 na opisyal", "50 na opisyal", "200 na opisyal", "75 na opisyal"],
    answer: "106 na opisyal",
    explanation: "Binigyan si Rizal ng listahan ng 106 na opisyal ng militar upang pagpilian ng kanyang abugado de officio."
  },
  {
    id: 207,
    topic: "Dapitan at Huling Araw",
    question: "Kailan opisyal na natanggap ang listahan ng mga opisyal na mapagpipiliang tagapagtanggol ni Rizal?",
    options: ["Disyembre 10, 1896", "Disyembre 2, 1896", "Disyembre 5, 1896", "Disyembre 29, 1896"],
    answer: "Disyembre 10, 1896",
    explanation: "Noong Disyembre 10, 1896 ipinapakita kay Rizal ang listahan kung saan pinili niya si Tenyente Luis Taviel de Andrade."
  },
  {
    id: 208,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang pangulo ng hukumang militar (tribunal) na lumitis kay Rizal noong Disyembre 26, 1896?",
    options: ["Jose Togores Arjona", "Enrique de Alcocer", "Rafael Dominguez", "Nicolas de la Peña"],
    answer: "Jose Togores Arjona",
    explanation: "Si Tenyente Koronel Jose Togores Arjona ang namuno bilang pangulo ng hukumang militar sa paglilitis."
  },
  {
    id: 209,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang opisyal na tagapag-usig (fiscal) sa hukumang militar na naghain ng paratang laban kay Rizal?",
    options: ["Enrique de Alcocer", "Jose Togores Arjona", "Rafael Dominguez", "Koronel Olive"],
    answer: "Enrique de Alcocer",
    explanation: "Si Enrique de Alcocer ang nag-usig at nagmatigas na si Rizal ay dapat parusahan ng kamatayan."
  },
  {
    id: 210,
    topic: "Dapitan at Huling Araw",
    question: "Saang gusali o kwartel sa Intramuros isinagawa ang pormal at madaliang paglilitis kay Rizal noong Disyembre 26, 1896?",
    options: ["Cuartel de España", "Fort Santiago", "Palacio del Gobernador", "Katedral ng Maynila"],
    answer: "Cuartel de España",
    explanation: "Sa Cuartel de España sa Intramuros idinaos ang paglilitis kung saan hinatulan si Rizal nang walang makatarungang pagkakataon."
  },
  {
    id: 211,
    topic: "Dapitan at Huling Araw",
    question: "Ano-ano ang mga pangunahing kasong isinampa at ipinaratang kay Rizal sa panahon ng kanyang paglilitis?",
    options: ["Rebelyon, sedisyon, at pagbuo ng ilegal na samahan", "Pagnanakaw at paninira", "Pagpatay at pagtataksil", "Pandaraya sa buwis"],
    answer: "Rebelyon, sedisyon, at pagbuo ng ilegal na samahan",
    explanation: "Ipinaratang kay Rizal ang mga kasong rebelyon, sedisyon, at pagtatag ng ilegal na samahan (La Liga Filipina / Katipunan)."
  },
  {
    id: 212,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang sagisag-panulat o alyas ni Rizal na ginamit sa mga liham at dokumento na ginamit ng prosekusyon bilang ebidensya laban sa kanya?",
    options: ["Dimasalang (Dimasalang / Laong Laan)", "Teniuz", "Plaridel", "Tikbalang"],
    answer: "Dimasalang (Dimasalang / Laong Laan)",
    explanation: "Ang sagisag na Dimasalang at Laong Laan ay ginamit sa mga liham na iprinisinta bilang patunay umano ng kanyang pakikisangkot."
  },
  {
    id: 213,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang alyas o pangalang ginamit ni Juan Zulueta sa mga dokumentong isinama sa mga ebidensya ng paglilitis?",
    options: ["Teniuz", "Dimasalang", "Plaridel", "Jormas"],
    answer: "Teniuz",
    explanation: "Teniuz ang alyas ni Juan Zulueta na lumitaw sa mga nakumpiskang dokumento sa kaso."
  },
  {
    id: 214,
    topic: "Dapitan at Huling Araw",
    question: "Anong artikulo ng Kodigo Penal ng Espanya ang ginamit sa pagtalakay sa parusa para sa pagtatag ng ilegal na samahan laban kay Rizal?",
    options: ["Artikulo 189", "Artikulo 250", "Artikulo 100", "Artikulo 300"],
    answer: "Artikulo 189",
    explanation: "Ayon sa Artikulo 189 ng Kodigo Penal, ang parusa sa nagtatag ng ilegal na samahan ay pagkakabilanggo lamang, kaya't pinilit nilang iugnay si Rizal sa rebelyon upang makuha ang hatol na kamatayan."
  },
  {
    id: 215,
    topic: "Dapitan at Huling Araw",
    question: "Magkano ang halagang kabayarang danyos na nakatala sa hatol laban kay Rizal kung sakaling siya ay patawarin?",
    options: ["100,000 piso", "50,000 piso", "10,000 piso", "1,000,000 piso"],
    answer: "100,000 piso",
    explanation: "Nag-utos ang hukuman ng multang 100,000 piso bilang danyos bukod pa sa hatol na kamatayan."
  },
  {
    id: 216,
    topic: "Dapitan at Huling Araw",
    question: "Kailan opisyal na binasa kay Rizal ang hatol ng kamatayan sa loob ng kanyang selda sa Fort Santiago?",
    options: ["Disyembre 29, 1896", "Disyembre 30, 1896", "Disyembre 26, 1896", "Disyembre 28, 1896"],
    answer: "Disyembre 29, 1896",
    explanation: "Noong Disyembre 29, 1896 binasa kay Rizal ang hatol na kamatayan sa pamamagitan ng pagbaril."
  },
  {
    id: 217,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang arsobispo ng Maynila na humiling at nagtulak na samahan si Rizal ng mga Heswita sa kanyang mga huling oras?",
    options: ["Padre Bernardino Nozaleda", "Padre Vicente Balaguer", "Padre Luis Visa", "Padre March"],
    answer: "Padre Bernardino Nozaleda",
    explanation: "Si Arsobispo Padre Bernardino Nozaleda ang nagpatrabaho sa mga paring Heswita upang subukang bawiin ni Rizal ang kanyang mga sinulat."
  },
  {
    id: 218,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang kakaibang katangian ng huling tulang iniwan ni Rizal bago siya mamatay na nakilala kalaunan bilang Mi Ultimo Adios?",
    options: ["Walang orihinal na pamagat", "May mahabang introduksyon", "Nakasulat sa wikang Kastila at Tagalog", "Ipinadala sa pahayagan noon din"],
    answer: "Walang orihinal na pamagat",
    explanation: "Ang huling tula ni Rizal ay walang orihinal na pamagat at isinulat sa maliit na lutuang de-alkohol bago ibinigay sa pamilya."
  },
  {
    id: 219,
    topic: "Dapitan at Huling Araw",
    question: "Sino-sino ang mga huling sinulatan ni Rizal ng mga liham pamamaalam bago siya mamatay maliban kay Blumentritt?",
    options: ["Paciano Rizal, Francisco Mercado, at Teodora Alonso", "Valentin Ventura at Juan Luna", "Jose Ma. Basa at Sixto Lopez", "Pio Valenzuela at Andres Bonifacio"],
    answer: "Paciano Rizal, Francisco Mercado, at Teodora Alonso",
    explanation: "Nag-iwan si Rizal ng mga huling liham para sa kanyang kapatid na si Paciano at sa kanyang mga magulang."
  },
  {
    id: 220,
    topic: "Dapitan at Huling Araw",
    question: "Sino-sino ang mga paring Heswita na naglakad at sumama kay Rizal sa kanyang huling hakbang patungong Bagumbayan?",
    options: ["Padre March at Padre Villaclara", "Padre Balaguer at Padre Visa", "Padre Nozaleda at Padre Faura", "Padre Obach at Padre Pastells"],
    answer: "Padre March at Padre Villaclara",
    explanation: "Sina Padre Jose March at Padre Luis Villaclara ang mga paring Heswita na naglakad kasama ni Rizal patungo sa lugar ng pagbitay."
  },
  {
    id: 221,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang abogadong kaibigan ni Rizal na nakita at binati niya sa daan habang naglalakad patungong Bagumbayan?",
    options: ["Eduardo Gutierrez Repide", "Luis Taviel de Andrade", "Enrique de Alcocer", "Rafael Dominguez"],
    answer: "Eduardo Gutierrez Repide",
    explanation: "Si Eduardo Gutierrez Repide ang abogadong nakasalamuha at binati ni Rizal sa kanyang paglakad patungong Bagumbayan."
  },
  {
    id: 222,
    topic: "Dapitan at Huling Araw",
    question: "Anong maliit na pintuan o lagusan ng Intramuros ang dinaanan ng martsa patungong Bagumbayan?",
    options: ["Postigo", "Real", "Isabel II", "Parian"],
    answer: "Postigo",
    explanation: "Sa Pintuan ng Postigo dumaan ang martsa palabas ng mga pader ng Intramuros patungong Bagumbayan."
  },
  {
    id: 223,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang dating pangalan ng kalsada ngayon na tinatawag na Bonifacio Drive kung saan dumaan si Rizal patungong pagbaril?",
    options: ["Malecon", "Escolta", "Azcarraga", "Oroquieta"],
    answer: "Malecon",
    explanation: "Malecon ang dating pangalan ng lansangan sa tabi ng dagat na tinahak ni Rizal patungong lugar ng pagbitay."
  },
  {
    id: 224,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang doktor ng hukbo na sumuri sa pulso ni Rizal bago isinagawa ang pagbaril at namangha sa kanyang kalmado?",
    options: ["Dr. Felipe Ruiz Castro o Castillo", "Dr. Lorenzo Marques", "Dr. Ariston Bautista", "Dr. Pio Valenzuela"],
    answer: "Dr. Felipe Ruiz Castro o Castillo",
    explanation: "Si Dr. Felipe Ruiz Castro ang medikong sumuri sa pulso ni Rizal at nakitang normal na normal ito sa kabila ng nalalapit na kamatayan."
  },
  {
    id: 225,
    topic: "Dapitan at Huling Araw",
    question: "Anong mga salitang Kastila ang sunod-sunod na binigkas ng mga opisyal bago pinaputukan si Rizal?",
    options: ["Preparen, Apunten, Fuego", "Handa, Tutok, Barilin", "Sulong, Tigil, Putok", "Alerto, Apuntem, Fuego"],
    answer: "Preparen, Apunten, Fuego",
    explanation: "'Preparen, Apunten, Fuego!' ang huling utos militar na nagtapos sa buhay ni Jose Rizal."
  },
  {
    id: 226,
    topic: "Dapitan at Huling Araw",
    question: "Anong musika ang pinatugtog ng banda ng artilyeriya pagkatapos na pagbarilin si Rizal upang ipagdiwang ang kamatayan?",
    options: ["Marche de Cadiz", "Marcha Real", "Himno Nacional", "Cadiz Anthem"],
    answer: "Marche de Cadiz",
    explanation: "Ang Marche de Cadiz ang masayang tugtog ng mga Kastila pagkatapos paslangin si Rizal."
  },
  {
    id: 227,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang matapang na kapatid na babae na matiyagang naghanap sa lihim na libingan at bangkay ni Rizal sa Sementeryo ng Paco?",
    options: ["Narcisa Rizal", "Lucia Rizal", "Saturnina Rizal", "Trinidad Rizal"],
    answer: "Narcisa Rizal",
    explanation: "Si Narcisa Rizal ang nag-ikot sa mga sementeryo hanggang matagpuan ang pinaglibingan kay Rizal nang walang kabaong."
  },
  {
    id: 228,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang taong pinagpagawaan ni Narcisa ng espesyal na lapida na may lihim na inisyal para sa libingan?",
    options: ["Doroteo Ongjunco", "Doroteo Lopez", "Manuel Hidalgo", "Silvestre Ubaldo"],
    answer: "Doroteo Ongjunco",
    explanation: "Si Doroteo Ongjunco ang pinagpagawaan ng lapida upang may palatandaan ang pinaglibingan kay Rizal."
  },
  {
    id: 229,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang mga inisyal na nakaukit nang pabaliktad sa lapida upang itago ang pagkakakilanlan sa libingan ni Rizal?",
    options: ["RPJ", "JPR", "DA", "LL"],
    answer: "RPJ",
    explanation: "RPJ (Rizal Pro Patria Jose, o pabaliktad na inisyal) ang ipinagawang marka ni Narcisa sa puntod."
  },
  {
    id: 230,
    topic: "Dapitan at Huling Araw",
    question: "Sino-sino ang tatlong kasapi ng La Liga Filipina na inilista sa sementeryo na binaril noong Enero 11, 1897?",
    options: ["Francisco Roxas, Moises Salvador at Antonio Salazar", "Andres Bonifacio, Emilio Jacinto, at Mabini", "Gomez, Burgos, at Zamora", "Pio Valenzuela, Deodato Arellano, at Franco"],
    answer: "Francisco Roxas, Moises Salvador at Antonio Salazar",
    explanation: "Sina Francisco Roxas, Moises Salvador, at Antonio Salazar ay mga kasapi ng Liga na sumunod ding binitay noong Enero 11, 1897."
  },
  {
    id: 231,
    topic: "Dapitan at Huling Araw",
    question: "Kailan binaril ang tatlong kasapi ng La Liga Filipina na sina Francisco Roxas, Moises Salvador, at Antonio Salazar?",
    options: ["Enero 11, 1897", "Disyembre 30, 1896", "Pebrero 17, 1872", "Hulyo 6, 1892"],
    answer: "Enero 11, 1897",
    explanation: "Binitay sila noong Enero 11, 1897 bilang pagpapatuloy ng pag-uusig sa mga repormista sa Pilipinas."
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
    question: "Magbigay ng apat na pangalan ng mga anak na babae ng pamilyang Becket na tinuluyan ni Rizal sa London.",
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

// --- IDENTIFICATION QUESTIONS ---
export interface IdentificationQuestion {
  question: string;
  answer: string;
}
export const identificationQuestions: IdentificationQuestion[] = multipleChoiceQuestions.map(q => ({
  question: q.question,
  answer: q.answer
}));

// --- FLASHCARD QUESTIONS ---
export interface FlashcardQuestion {
  front: string;
  back: string;
}
export const flashcardQuestions: FlashcardQuestion[] = multipleChoiceQuestions.map(q => ({
  front: q.question,
  back: `${q.answer}${q.explanation ? " — " + q.explanation : ""}`
}));

// --- MATCHING QUESTIONS ---
export interface MatchingQuestion {
  id: string;
  topic: Topic;
  left: string;
  right: string;
}
export const matchingQuestions: MatchingQuestion[] = multipleChoiceQuestions.map((q, index) => ({
  id: String(index + 1),
  topic: q.topic,
  left: q.question,
  right: q.answer
}));

// --- RECITATION QUESTIONS ---
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