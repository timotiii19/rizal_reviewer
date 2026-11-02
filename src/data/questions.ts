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
  // --- BATCH 1 (1-35) ---
  {
    id: 1,
    topic: "Dapitan at Huling Araw",
    question: "Anong bapor ang sinakyan ni Dr. Jose Rizal at ng kanyang kapatid na si Lucia pabalik sa Maynila noong Hunyo 26, 1892?",
    options: ["SS City of Rome", "Bapor Don Juan", "Bapor Cebu", "Isla de Panay"],
    answer: "Bapor Don Juan",
    explanation: "Dumating si Rizal sa Maynila mula Hongkong sakay ng Bapor Don Juan noong Hunyo 26, 1892."
  },
  {
    id: 2,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pamagat ng babasahing natagpuan diumano sa punda ng unan ni Lucia na ginamit na dahilan upang dakpin at ikulong si Rizal sa Fort Santiago?",
    options: ["Verdades Nuevas", "Makamisa", "Pobres Frailes", "Ingratitudes"],
    answer: "Pobres Frailes",
    explanation: "Ang Pobres Frailes (Mga Kaawa-awang Prayle) ay idinahilan ng mga Espanyol upang dakpin si Rizal dahil ito ay laban sa mga Dominiko."
  },
  {
    id: 3,
    topic: "Dapitan at Huling Araw",
    question: "Kaninong tahanan sa Tondo, Maynila ginanap ang pagtitipon para sa pagtatatag ng La Liga Filipina noong Hulyo 3, 1892?",
    options: ["Ambrosio Salvador", "Deodato Arellano", "Doroteo Ongjunco", "Pedro Serrano Laktaw"],
    answer: "Doroteo Ongjunco",
    explanation: "Sa tahanan ni Doroteo Ongjunco (isang mestisong Tsino-Pilipino) sa Kalye Ylaya ginanap ang pagtitipon ng mga makabayan."
  },
  {
    id: 4,
    topic: "Dapitan at Huling Araw",
    question: "Magkano ang inaasahang buwanang butaw na ibibigay ng bawat kasapi ng La Liga Filipina?",
    options: ["Limang sentimos", "Sampung sentimos", "Dalawampung sentimos", "Isang piso"],
    answer: "Sampung sentimos",
    explanation: "Inaasahan ang mga kasapi ng La Liga na mag-ambag ng sampung sentimos kada buwan."
  },
  {
    id: 5,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang pamagat ng hindi natapos na ikatlong nobela ni Rizal na nakasulat sa Tagalog na inilalarawan ang kultura sa bayan ng Tulig?",
    options: ["Sa Aking Mga Kabata", "Kundiman", "Makamisa", "Mi Retiro"],
    answer: "Makamisa",
    explanation: "Ang Makamisa ay hindi natapos na nobela ni Rizal na pumupuna sa mga kaugaliang panrelihiyon nang walang sapat na pag-unawa."
  },
  {
    id: 6,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang kura paroko ng bayan ng Tulig na kilala sa pagiging masayahin ngunit naging palaisipan ang biglaang pagkagalit sa nobelang Makamisa?",
    options: ["Padre Salvi", "Padre Camorra", "Padre Florentino", "Padre Agaton"],
    answer: "Padre Agaton",
    explanation: "Si Padre Agaton ang sentrong tauhan sa nobela na ang pagkagalit ay naging malaking usapin sa bayan ng Tulig."
  },
  {
    id: 7,
    topic: "Dapitan at Huling Araw",
    question: "Anong bapor ang sinakyan ni Rizal papuntang Dapitan noong Hulyo 15, 1892 upang umpisahan ang kanyang buhay-destiyero?",
    options: ["Bapor Cebu", "Bapor España", "Kruserang Castilla", "SS Colon"],
    answer: "Bapor Cebu",
    explanation: "Matapos makulong ng 9 na araw sa Fort Santiago, isinakay si Rizal sa Bapor Cebu patungong Dapitan."
  },
  {
    id: 8,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang Gobernador-Militar ng Dapitan na naging unang tagabantay ni Rizal at pinaghandugan niya ng isang tula noong Agosto 26, 1892?",
    options: ["Kapitan Delgras", "Kapitan Rafael Dominguez", "Ricardo Carnicero", "Eulogio Despujol"],
    answer: "Ricardo Carnicero",
    explanation: "Si Ricardo Carnicero ang kanyang naging tagabantay at pinaghandugan niya ng tulang 'Kay Don Ricardo Carnicero'."
  },
  {
    id: 9,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang numero ng panalong tiket sa Loteryang Manila na nagbigay kay Rizal ng pondong ginamit niya pambili ng lupain sa Talisay?",
    options: ["9736", "1892", "7369", "9273"],
    answer: "9736",
    explanation: "Ang tiket na 9736 ay nanalo sa Loteryang Manila; ito ay pinaghatian nina Rizal, Carnicero, at Equilior."
  },
  {
    id: 10,
    topic: "Dapitan at Huling Araw",
    question: "Alin sa mga sumusunod na ispesimen na natuklasan ni Rizal sa Dapitan ang tumutukoy sa isang uri ng flying lizard?",
    options: ["Apogonia rizali", "Draco rizali", "Rhacophorus rizali", "Nami rizali"],
    answer: "Draco rizali",
    explanation: "Ang Draco rizali ay isang flying lizard, ang Rhacophorus rizali ay palaka, at Apogonia rizali ay salagubang."
  },
  {
    id: 11,
    topic: "Dapitan at Huling Araw",
    question: "Anong tula ang isinulat ni Rizal sa ibabaw ng isang batong hugis-puso sa Dapitan bilang pagtugon sa kahilingan ng kanyang ina?",
    options: ["El Canto del Viajero", "Himno a Talisay", "Mi Retiro", "Sa Aking Mga Kabata"],
    answer: "Mi Retiro",
    explanation: "Isinulat niya ang 'Mi Retiro' upang ilarawan ang kanyang payapang buhay sa Dapitan ayon sa kahilingan ng ina."
  },
  {
    id: 12,
    topic: "Dapitan at Huling Araw",
    question: "Sinong kinatawan ng Katipunan ang bumisita kay Rizal sa Dapitan noong Hunyo 21, 1896 upang isangguni ang balak na himagsikan?",
    options: ["Andres Bonifacio", "Emilio Jacinto", "Deodato Arellano", "Pio Valenzuela"],
    answer: "Pio Valenzuela",
    explanation: "Inatasan ng Katipunan si Dr. Pio Valenzuela na humingi ng payo kay Rizal, ngunit tinutulan niya ito dahil sa kakulangan sa armas."
  },
  {
    id: 13,
    topic: "Dapitan at Huling Araw",
    question: "Habang naghihintay ng biyahe patungong Espanya upang maglingkod sa Cuba, saang barkong pandigma ikinulong si Rizal sa loob ng 27 araw?",
    options: ["Isla de Luzon", "Isla de Panay", "Kruserang Castilla", "S.S. Colon"],
    answer: "Kruserang Castilla",
    explanation: "Ikinulong siya sa Kruserang Castilla upang ihiwalay sa tensiyon ng lumalalang himagsikan sa Maynila."
  },
  {
    id: 14,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang opisyal na pinili ni Rizal mula sa listahan upang maging kanyang tagapagtanggol sa hukumang militar?",
    options: ["Jose Taviel de Andrade", "Luis Taviel de Andrade", "Enrique de Alcocer", "Rafael Dominguez"],
    answer: "Luis Taviel de Andrade",
    explanation: "Si Tinyente Luis Taviel de Andrade ang pinili niya. Kapatid ito ng kanyang naging unang tanod na si Jose."
  },
  {
    id: 15,
    topic: "Dapitan at Huling Araw",
    question: "Anong gamit ang ibinigay ni Rizal sa kanyang kapatid na si Trinidad na naglalaman pala ng nakatuping papel ng kanyang huling tula?",
    options: ["Isang aklat dasalan", "Kusinilya de alkohol", "Kuwintas ng rosaryo", "Isang kahoy na baticuling"],
    answer: "Kusinilya de alkohol",
    explanation: "Sa loob ng kusinilyang ito itinago ang nakatuping papel ng tulang nakilala bilang 'Mi Ultimo Adios'."
  },
  {
    id: 16,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang nagdagdag ng pamagat na 'Ultimo Adios' sa orihinal na tulang walang pamagat ni Rizal?",
    options: ["Mariano Ponce", "Charles Derbyshire", "Padre Mariano Dacanay at Sr. Vargas", "Andres Bonifacio"],
    answer: "Padre Mariano Dacanay at Sr. Vargas",
    explanation: "Habang nakakulong din sa Intramuros, sila ang nagbigay ng pamagat sa tulang ito."
  },
  {
    id: 17,
    topic: "Dapitan at Huling Araw",
    question: "Anong aklat ang inihandog ni Rizal kay Josephine Bracken na may dedikasyong 'To my dear and unhappy wife' bago siya bitayin?",
    options: ["Sucesos de las Islas Filipinas", "Imitacion de Cristo", "Traite Diagnostique", "Diagnostic Pathology"],
    answer: "Imitacion de Cristo",
    explanation: "Ibinigay ito bilang huling alaala kay Josephine bago siya maglakad papuntang Bagumbayan."
  },
  {
    id: 18,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang Gobernador-Heneral na lumagda at nagpatibay sa hatol na kamatayan ni Rizal noong Disyembre 28, 1896?",
    options: ["Ramon Blanco", "Valeriano Weyler", "Eulogio Despujol", "Camilo de Polavieja"],
    answer: "Camilo de Polavieja",
    explanation: "Si Gobernador-Heneral Polavieja ang nag-apruba ng hatol, kilala bilang masugid na kaalyado ng mga prayle."
  },
  {
    id: 19,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang huling salitang binigkas ni Rizal bago siya bumagsak sa Bagumbayan na hango sa mga huling salita ni Hesus?",
    options: ["Viva España!", "Morir es descansar!", "Consummatum est!", "Adios, Patria Adorada!"],
    answer: "Consummatum est!",
    explanation: "Ito ay nangangahulugang 'It is done' o 'Natapos na'."
  },
  {
    id: 20,
    topic: "Dapitan at Huling Araw",
    question: "Saan lihim na inilibing ang bangkay ni Rizal nang walang kabaong at seremonya pagkatapos ng kanyang eksekusyon?",
    options: ["Sementeryo ng Paco", "Sementeryo ng Binondo", "Katedral ng Maynila", "Bagumbayan"],
    answer: "Sementeryo ng Paco",
    explanation: "Lihim siyang inilibing dito upang hindi madiskubre ng mga Pilipino at gamitin ang kanyang bangkay bilang propaganda."
  },
  {
    id: 21,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang ipinaukit ni Narcisa sa lapida na inilagay sa puntod ni Rizal upang hindi ito makilala at mailipat ng mga Espanyol?",
    options: ["J.P.R.", "R.P.J.", "Dimas Alang", "Laong Laan"],
    answer: "R.P.J.",
    explanation: "Ito ay ang mga unang titik ng pangalan ng bayani na nakaukit na pabaliktad upang hindi makilala at mailipat muli ang himlayan."
  },
  {
    id: 22,
    topic: "El Filibusterismo",
    question: "Kaninong alaala inihandog ni Dr. Jose Rizal ang nobelang El Filibusterismo?",
    options: ["Sa mga magsasaka ng Calamba", "Kay Leonor Rivera", "Sa tatlong paring martir (GOMBURZA)", "Sa kanyang amang si Francisco Mercado"],
    answer: "Sa tatlong paring martir (GOMBURZA)",
    explanation: "Inihandog ni Rizal ang kanyang ikalawang nobela sa alaala ng tatlong paring martir na binitay sa Bagumbayan."
  },
  {
    id: 23,
    topic: "El Filibusterismo",
    question: "Sino ang pinakamatanda sa tatlong paring martir (85 o 72 taong gulang) na naging kura paroko ng Bacoor, Cavite?",
    options: ["Padre Jose Burgos", "Padre Jacinto Zamora", "Padre Pedro Pelaez", "Padre Mariano Gomez"],
    answer: "Padre Mariano Gomez",
    explanation: "Ayon sa ulat, si Padre Mariano Gomez ang pinakamatanda sa tatlong paring binitay sa Bagumbayan."
  },
  {
    id: 24,
    topic: "El Filibusterismo",
    question: "Sino ang Gobernador-Heneral na nagpadala ng 50 sundalo upang sunugin ang mga bahay at palayasin ang pamilya ni Rizal sa Calamba?",
    options: ["Valeriano Weyler", "Eulogio Despujol", "Emilio Terrero", "Ramon Blanco"],
    answer: "Valeriano Weyler",
    explanation: "Si Valeriano Weyler ay naging kilalang malupit na nag-utos na walang-awang sunugin ang mga bahay at palayasin ang pamilya ni Rizal."
  },
  {
    id: 25,
    topic: "El Filibusterismo",
    question: "Saang lungsod sa Pransiya ganap na tinapos ni Rizal ang buong manuskrito ng El Filibusterismo noong Marso 29, 1891?",
    options: ["Paris", "Marseilles", "Biarritz", "Madrid"],
    answer: "Biarritz",
    explanation: "Sa lugar na ito ganap na tinapos ni Rizal ang buong manuskrito ng nobela bago ipalimbag."
  },
  {
    id: 26,
    topic: "El Filibusterismo",
    question: "Bakit napilitan si Rizal na ilipat ang pagpapalimbag ng El Filibusterismo sa Genta (Ghent), Belgica?",
    options: ["Dahil mas mabilis ang mga imprenta doon", "Dahil mas mababa ang halaga at upang makaiwas kay Petite Suzanne", "Dahil nandoon ang pondo mula sa Kilusang Propaganda", "Dahil pinagbawalan siyang maglimbag sa Paris"],
    answer: "Dahil mas mababa ang halaga at upang makaiwas kay Petite Suzanne",
    explanation: "Pangunahing dahilan ay upang makatipid dahil sa mababang halaga ng imprenta, at upang umiwas na rin sa atensyon ni Petite Suzanne."
  },
  {
    id: 27,
    topic: "El Filibusterismo",
    question: "Sino ang nakasama ni Rizal sa inuupahang kwarto sa Genta na kahati niya sa rasyon ng biskwit upang makatipid?",
    options: ["Edilberto Evangelista", "Jose Alejandro", "Valentin Ventura", "Jose Ma. Basa"],
    answer: "Jose Alejandro",
    explanation: "Kasama niya si Jose Alejandro na mabilis umubos ng kanyang rasyon ng biskwit."
  },
  {
    id: 28,
    topic: "El Filibusterismo",
    question: "Sino ang kaibigan na nagpadala ng pondo upang matuloy ang naudlot na pagpapalimbag ng nobela noong Agosto 1891?",
    options: ["Valentin Ventura", "Ferdinand Blumentritt", "Maximo Viola", "Graciano Lopez Jaena"],
    answer: "Valentin Ventura",
    explanation: "Naging tagapagligtas ng El Filibusterismo si Valentin Ventura sa pamamagitan ng pagpapadala ng kinakailangang pondo."
  },
  {
    id: 29,
    topic: "El Filibusterismo",
    question: "Bunsod ng matinding kakulangan sa pondo, mula sa orihinal na 44 na kabanata, ilan na lamang ang natira sa nailimbag na El Filibusterismo?",
    options: ["35", "37", "39", "41"],
    answer: "39",
    explanation: "Napilitan siyang magkaltas ng kabanata hanggang sa umabot na lamang sa 39 na kabanata."
  },
  {
    id: 30,
    topic: "El Filibusterismo",
    question: "Ano ang tawag o bansag kay Simoun sa nobela dahil sa kanyang lihim na kapangyarihan at impluwensya bilang tagapayo ng Gobernador Heneral?",
    options: ["Kardenal Moreno", "Eminencia Negro", "Ang Filibustero", "Ibarra"],
    answer: "Eminencia Negro",
    explanation: "Tinawag siyang 'Eminencia Negro' dahil ginamit niya ang kanyang salapi upang maging matalik na tagapayo ng Gobernador Heneral sa likod ng kapangyarihan nito."
  },
  {
    id: 31,
    topic: "El Filibusterismo",
    question: "Sa aling lugar nagdaos ng pagtitipon ang mga mag-aaral upang tuligsain ang mga prayle matapos ibasura ang akademya ng wikang Kastila?",
    options: ["Sa Bapor Tabo", "Sa Kumbento ng Santa Clara", "Sa Panciteria ni Quiroga", "Sa Bahay ni Makaraig"],
    answer: "Sa Panciteria ni Quiroga",
    explanation: "Dito nagdaos ng pagtitipon ang mga mag-aaral upang tahasang magtalumpati at tuligsain ang mga prayle."
  },
  {
    id: 32,
    topic: "El Filibusterismo",
    question: "Sino ang tauhan na umagaw sa lamparang may nitro-gliserina at nagtapon nito sa ilog upang iligtas si Paulita Gomez?",
    options: ["Basilio", "Isagani", "Kabesang Tales", "Padre Florentino"],
    answer: "Isagani",
    explanation: "Dahil sa kanyang damdamin, inagaw niya ang lampara upang iligtas ang buhay ng minamahal na si Paulita."
  },
  {
    id: 33,
    topic: "El Filibusterismo",
    question: "Ayon sa paghahambing ng dalawang nobela, kung ang Noli Me Tangere ay isang 'Nobelang Romantiko', ano naman ang El Filibusterismo?",
    options: ["Nobelang Sosyolohikal", "Nobelang Historikal", "Nobelang Politikal", "Nobelang Kultural"],
    answer: "Nobelang Politikal",
    explanation: "Itinuturing ang Fili bilang Nobelang Politikal o aklat ng isip na nagsilbing lunas na naghahanap ng agarang solusyon sa pamamagitan ng pag-aaklas."
  },
  {
    id: 34,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang kaibigang manggagamot na tumulong kay Rizal upang maging matagumpay na optalmologo sa Hong Kong?",
    options: ["Dr. Ariston Bautista Lin", "Dr. Reinhold Rost", "Dr. Lorenzo P. Marques", "Dr. Felipe Ruiz Castro"],
    answer: "Dr. Lorenzo P. Marques",
    explanation: "Ipinasa ni Dr. Lorenzo P. Marques ang maraming pasyenteng may sakit sa mata kay Rizal dahil sa mataas na pagtingin nito sa kakayahan ng bayani."
  },
  {
    id: 35,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Saang kalye sa Hong Kong matatagpuan ang klinika na binuksan ni Rizal upang kumita para sa kanyang sarili at pamilya?",
    options: ["Blg. 5 Kalye D' Aguilar", "Blg. 2 Rednaxela Terrace", "Rue Maubeuge", "Blg. 45 Kalye Ylaya"],
    answer: "Blg. 2 Rednaxela Terrace",
    explanation: "Nagbukas siya ng sariling klinika sa Blg. 2 Rednaxela Terrace matapos tulungan ng kanyang mga kaibigan."
  },

  // --- BATCH 2 (36-70) ---
  {
    id: 36,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Anong epidemya ang tumama sa Hong Kong kung saan buong-husay na ginamot ni Rizal ang kanyang sariling pamilya at mga pasyente?",
    options: ["Kolera", "Bulutong (Smallpox)", "Trangkaso", "Tuberkulosis"],
    answer: "Trangkaso",
    explanation: "Tumama ang epidemya ng trangkaso, na naging dahilan upang alagaan niya pati na ang kanyang nahawang ina, bayaw, at kapatid."
  },
  {
    id: 37,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Anong barko ang sinakyan ni Rizal mula New York patungong Liverpool, kung saan pinahanga niya ang mga pasahero sa paggamit ng yo-yo?",
    options: ["SS City of Rome", "S.S. Melbourne", "Bapor Don Juan", "Isla de Panay"],
    answer: "SS City of Rome",
    explanation: "Lulan ng barkong ito, pinahanga niya ang mga kapwa pasahero sa kanyang galing sa paggamit ng yo-yo."
  },
  {
    id: 38,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino ang panganay na anak ng pamilyang Ingles na tinuluyan ni Rizal sa London na nahulog ang damdamin sa kanya?",
    options: ["Blanche Becket", "Florence Becket", "Grace Becket", "Gertrude Becket"],
    answer: "Gertrude Becket",
    explanation: "Si Gertrude Becket ay 18-taong gulang na umibig kay Rizal, bago pinili ng bayani na umiwas."
  },
  {
    id: 39,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang orihinal na may-akda ng aklat na 'Sucesos de las Islas Filipinas' (1609) na nilagyan ni Rizal ng sariling anotasyon?",
    options: ["Pedro Chirino", "Antonio de Morga", "Francisco Colin", "Salvador Font"],
    answer: "Antonio de Morga",
    explanation: "Si Antonio de Morga ay isang Kastilang opisyal na nakasaksi mismo sa mga pangyayari, na siyang nilagyan ng anotasyon ni Rizal."
  },
  {
    id: 40,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Alin sa mga sumusunod ang HINDI kabilang sa mga dahilan kung bakit napili ni Rizal ang aklat ni Morga para lagyan ng anotasyon?",
    options: ["Dahil bihira itong matagpuan", "Dahil sekular at obhetibo ang pananaw ni Morga bilang hindi pari", "Dahil si Morga mismo ang nakasaksi sa mga pangyayari", "Dahil si Morga ay isang Pilipinong manunulat bago dumating ang Kastila"],
    answer: "Dahil si Morga ay isang Pilipinong manunulat bago dumating ang Kastila",
    explanation: "Si Morga ay hindi Pilipino; isa siyang Kastilang Kapitan Heneral at hukom ng Audiencia."
  },
  {
    id: 41,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang binalak itatag ni Rizal sa Paris noong Agosto 1889 na layuning pag-aralan ang Pilipinas mula sa siyentipiko at pangkasaysayang pananaw?",
    options: ["La Liga Filipina", "Asosasyong Internasyonal ng mga Filipinohista", "Sociedad de Agricultores", "Hermandad de la Paz y Caridad"],
    answer: "Asosasyong Internasyonal ng mga Filipinohista",
    explanation: "Layunin ng asosasyong ito na mapag-aralan ang Pilipinas at naging pangulo nito si Dr. Ferdinand Blumentritt."
  },
  {
    id: 42,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong sanaysay ang isinulat ni Rizal bilang direktang tugon sa babala ni Gobernador-Heneral Weyler laban sa 'mga anak na walang turing'?",
    options: ["Verdades Nuevas", "Diferencias", "Ingratitudes (Mga Kawalang Turing)", "Sobre la Indolencia de los Filipinos"],
    answer: "Ingratitudes (Mga Kawalang Turing)",
    explanation: "Sa pamamagitan ng satirikal na tono, ipinagtanggol niya na ang pagpuna sa gobyerno ay hindi kawalang turing kundi pagmamahal sa bayan."
  },
  {
    id: 43,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sa sanaysay ukol sa 'Mga Kawalang Turing', sino ang bayaw ni Rizal ang sapilitang ipinatapon sa Bohol gamit ang administratibong deportasyon nang walang tamang paglilitis?",
    options: ["Paciano Rizal", "Manuel Hidalgo", "Silvestre Ubaldo", "Mariano Herbosa"],
    answer: "Manuel Hidalgo",
    explanation: "Ipinatapon ang kanyang bayaw na si Manuel Hidalgo sa Bohol gamit ang administratibong deportasyon nang walang tamang proseso sa batas."
  },
  {
    id: 44,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sa artikulong 'Ang Katotohanan Para sa Lahat', ipinaliwanag ni Rizal na may dalawang pangkat sa bawat bayan. Sino ang palaging pinapaboran ng mga kura?",
    options: ["Ang mga may pinag-aralan at naghahangad ng katarungan", "Ang mga dayuhang mangangalakal", "Ang mga tahimik na mamamayan na walang kinakampihan", "Ang mga sunud-sunuran na mas madaling kontrolin at hikayatin"],
    answer: "Ang mga sunud-sunuran na mas madaling kontrolin at hikayatin",
    explanation: "Ang mga sunud-sunuran ay mas pinapaboran dahil mas madali silang utusan at gamitin ng mga prayle sa kanilang mga balak."
  },
  {
    id: 45,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong artikulo ang inilathala ni Rizal sa La Solidaridad noong Hulyo 31, 1889 bilang tugon kay Vicente Belloc y Sanchez?",
    options: ["Verdades Viejas", "Verdades Nuevas (Mga Bagong Katotohanan)", "Por Telefono", "Diferencias"],
    answer: "Verdades Nuevas (Mga Bagong Katotohanan)",
    explanation: "Sa sanaysay na ito, kinuwestiyon ni Rizal ang pahayag na masisira ng mga reporma ang isang payapang pamahalaan."
  },
  {
    id: 46,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sa kanyang sanaysay na 'Mga Bagong Katotohanan', sinong mga naunang misyonero ang ginamit ni Rizal na batayan upang patunayang may mataas na sibilisasyon at sariling sistema ng pagsulat ang mga Pilipino bago dumating ang Espanyol?",
    options: ["P. Chirino at P. Colin", "P. Font at P. Salvi", "P. Burgos at P. Zamora", "P. Balaguer at P. March"],
    answer: "P. Chirino at P. Colin",
    explanation: "Ang mga tala nina P. Chirino at P. Colin ang nagpatunay na ang mga Pilipino ay may sariling sibilisasyon at hindi mga 'taong gubat'."
  },
  {
    id: 47,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang pamagat ng maikling satirikong polyeto na inilathala ni Rizal sa Barcelona noong 1889 upang tuyain si Fr. Salvador Font?",
    options: ["Makamisa", "Por Telefono", "Pobres Frailes", "La Politica Colonial en Filipinas"],
    answer: "Por Telefono",
    explanation: "Inilalarawan sa akdang ito ang isang nakakatawang pag-uusap sa telepono upang tuyain ang pagkukunwari ng mga prayle."
  },
  {
    id: 48,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang sagisag-panulat (pen name) na ginamit ni Rizal nang ilathala niya ang satirikong akdang 'Por Telefono'?",
    options: ["Laong Laan", "Plaridel", "Dimas Alang", "Agapito Bagumbayan"],
    answer: "Dimas Alang",
    explanation: "Ang polyetong ito ay nailimbag sa Barcelona sa ilalim ng kanyang sagisag-panulat na 'Dimas Alang'."
  },
  {
    id: 49,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong pahayagan sa Madrid ang naglathala ng 'Verdades Viejas' (Mga Lumang Katotohanan) at nagsilbing pangunahing boses ng mga konserbatibong Espanyol laban sa mga repormista?",
    options: ["La Patria", "La Independencia", "La Publicidad", "El Heraldo de Madrid"],
    answer: "La Patria",
    explanation: "Ang La Patria ang pahayagang naglabas ng sulat na nagsasabing sisira sa mapayapang pamamahala ang pagbibigay ng reporma."
  },
  {
    id: 50,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sa sanaysay na 'Diferencias' (Mga Pagkakaiba), anong terminong Latin ang ginamit ni Rizal sa kaukulang palayon upang itama ang maling gramatika ng mga manunulat ng La Patria na nagpilit isulat ito bilang 'estatu'?",
    options: ["Consummatum est", "Status quo", "Unus instar omnium", "Verdades viejas"],
    answer: "Status quo",
    explanation: "Ipinaliwanag ni Rizal na ang salitang 'status' ay kanyang ginamit bilang 'ablativo' sa gramatika, taliwas sa kamangmangan ng kanyang mga kritiko."
  },
  {
    id: 51,
    topic: "Dapitan at Huling Araw",
    question: "Anong oras dumating si Rizal sa Maynila kasama ang kanyang kapatid na si Lucia noong Hunyo 26, 1892?",
    options: ["10:00 ng umaga", "12:00 ng tanghali", "4:00 ng hapon", "7:00 ng gabi"],
    answer: "12:00 ng tanghali",
    explanation: "Eksaktong ika-12 ng tanghali nang sila ay makarating sakay ng Bapor Don Juan."
  },
  {
    id: 52,
    topic: "Dapitan at Huling Araw",
    question: "Saang numero ng silid sa Hotel de Oriente tumuloy si Rizal?",
    options: ["12", "22", "33", "45"],
    answer: "22",
    explanation: "Tumuloy siya sa silid bilang 22 ng hotel, na nakaharap sa simbahan ng Binondo."
  },
  {
    id: 53,
    topic: "Dapitan at Huling Araw",
    question: "Alin sa mga sumusunod na bayan ang binisita ni Rizal sa kanyang paglalakbay sa Gitnang Luzon noong Hunyo 27, 1892?",
    options: ["Malolos, San Fernando, Tarlac, at Bacolor", "Calamba, Biñan, at Santa Rosa", "Vigan, Laoag, at Paoay", "Kawit, Bacoor, at Imus"],
    answer: "Malolos, San Fernando, Tarlac, at Bacolor",
    explanation: "Ginamit niya ang tren upang bisitahin ang mga kababayan sa Gitnang Luzon para alamin ang kalagayan nila."
  },
  {
    id: 54,
    topic: "Dapitan at Huling Araw",
    question: "Sino sa mga sumusunod ang dumalo sa pagtitipon ng La Liga Filipina na kilala bilang isang mason at dentista?",
    options: ["Bonifacio Arevalo", "Deodato Arellano", "Domingo Franco", "Pedro Serrano Laktaw"],
    answer: "Bonifacio Arevalo",
    explanation: "Si Bonifacio Arevalo (Harem) ay isang mason at dentista na dumalo sa bahay ni Ongjunco."
  },
  {
    id: 55,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang nahalal bilang Ingat-yaman ng La Liga Filipina?",
    options: ["Ambrosio Salvador", "Deodato Arellano", "Bonifacio Arevalo", "Agustin dela Rosa"],
    answer: "Bonifacio Arevalo",
    explanation: "Sa unang pagtitipon, si Arevalo (isang dentista) ang itinalagang mag-ingat ng pondo."
  },
  {
    id: 56,
    topic: "Dapitan at Huling Araw",
    question: "Sa nobelang Makamisa, sino ang anak ni Kapitan Lucas na umuwi mula sa Maynila upang dumalo sa libing ng kanyang tiyahin?",
    options: ["Aling Anday", "Marcela", "Huli", "Paulita"],
    answer: "Marcela",
    explanation: "Si Marcela ay bumalik sa bayan ng Tulig para sa libing, kung saan makikita ang mga satiriko ni Rizal sa kulturang lokal."
  },
  {
    id: 57,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang Juez de Paz o hukom ng kapayapaan sa bayan ng Tulig sa nobelang Makamisa?",
    options: ["Teniente Tato", "Kapitan Tibo", "Don Segundo", "Kapitan Lucas"],
    answer: "Don Segundo",
    explanation: "Isa siya sa mga pangunahing opisyales na pumapaloob sa kapangyarihan ng kura paroko sa kwento."
  },
  {
    id: 58,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang literal na kahulugan ng salitang 'Dapitan' na hango sa salitang Bisaya na 'dapit'?",
    options: ["Lupa ng pangako", "Tagpuan ng walong daang mag-anak o nananahan", "Daungan ng mga bapor", "Paraiso sa Mindanao"],
    answer: "Tagpuan ng walong daang mag-anak o nananahan",
    explanation: "Ito ang naging matalinhagang salita para sa bayan kung saan nadestiyero ang bayani."
  },
  {
    id: 59,
    topic: "Dapitan at Huling Araw",
    question: "Saang partikular na lugar sa Dapitan bumili si Rizal ng lupain na tinaniman niya ng lanzones at mangga?",
    options: ["Talisay", "Santa Cruz", "Bacolor", "Malolos"],
    answer: "Talisay",
    explanation: "Dito siya nagtayo ng kanyang bahay, paaralan, at klinika gamit ang panalo niya sa loterya."
  },
  {
    id: 60,
    topic: "Dapitan at Huling Araw",
    question: "Anong kooperatiba ang itinatag ni Rizal noong 1895 upang mapaunlad ang produktong pang-agrikultura at matulungan ang mga magsasaka sa Dapitan?",
    options: ["La Liga Filipina", "Sociedad de Agricultores Dapitanos", "Hermandad de la Paz y Caridad", "Asosasyong Internasyonal ng mga Filipinohista"],
    answer: "Sociedad de Agricultores Dapitanos",
    explanation: "Itinatag ito upang mapaunlad ang produktong pang-agrikultura at matulungan ang mga magsasaka sa pamamagitan ng isang kooperatiba."
  },
  {
    id: 61,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang tawag sa panindi na yari sa kahoy at gumagana sa prinsipyo ng presyon ng hangin na inimbento ni Rizal at inihandog kay Ferdinand Blumentritt?",
    options: ["Kusinilya", "Sulpukan", "Lampara", "Ladrilyo"],
    answer: "Sulpukan",
    explanation: "Ito ay isa sa mga imbensyon ni Rizal na nagpapakita ng kanyang pagiging scientist kahit nasa destiyero."
  },
  {
    id: 62,
    topic: "Dapitan at Huling Araw",
    question: "Ilang ladrilyo ang kayang gawin sa loob ng isang araw ng makinang-kahoy na inimbento ni Rizal sa Dapitan?",
    options: ["1,000 ladrilyo", "3,000 ladrilyo", "6,000 ladrilyo", "10,000 ladrilyo"],
    answer: "6,000 ladrilyo",
    explanation: "Ang kanyang brick-making machine ay lumilikha ng hanggang anim na libong bloke kada araw."
  },
  {
    id: 63,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang inhenyerong Amerikano na nabulag at umampon kay Josephine Bracken?",
    options: ["George Taufer", "Charles Kipping", "Henry Kipping", "Edmund Plauchut"],
    answer: "George Taufer",
    explanation: "Si George Taufer ang dahilan kaya nakarating si Josephine Bracken sa Dapitan; nagpagamot siya sa sikat na optalmologo."
  },
  {
    id: 64,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang ipinangalan ni Rizal sa sanggol nila ni Josephine Bracken na nabuhay lamang ng tatlong oras?",
    options: ["Paciano", "Francisco", "Jose Jr.", "Vicente"],
    answer: "Francisco",
    explanation: "Ipinangalan niya itong 'Francisco' bilang parangal sa kanyang ama."
  },
  {
    id: 65,
    topic: "Dapitan at Huling Araw",
    question: "Nang dumating si Rizal sa Maynila mula Dapitan noong Agosto 6, 1896, anong bapor ang dapat sana niyang sasakyan patungong Espanya na nakaalis na?",
    options: ["Bapor Cebu", "Bapor España", "Isla de Luzon", "Isla de Panay"],
    answer: "Isla de Luzon",
    explanation: "Naantala siya sa pagdating kaya napilitan siyang maghintay sakay ng Kruserang Castilla hanggang sa susunod na byahe."
  },
  {
    id: 66,
    topic: "Dapitan at Huling Araw",
    question: "Matapos ikulong sa muog ng Montjuïc sa Barcelona, anong bapor-hukbo ang sinakyan ni Rizal pabalik sa Pilipinas bilang bihag?",
    options: ["S.S. Colón", "S.S. Melbourne", "Kruserang Castilla", "Isla de Panay"],
    answer: "S.S. Colón",
    explanation: "Isinakay siya rito upang muling harapin ang paglilitis at sentensya sa Pilipinas."
  },
  {
    id: 67,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang kaisa-isang kapatid na lalaki ni Rizal na pinahirapan gamit ang turnilyo sa mga daliri upang piliting lumagda laban sa kanya?",
    options: ["Manuel Hidalgo", "Silvestre Ubaldo", "Mariano Herbosa", "Paciano"],
    answer: "Paciano",
    explanation: "Subalit, matibay si Paciano; tiniis niya ang lahat ng sakit nang hindi nagbibigay ng kahit anong pahayag na makakasira sa kanyang kapatid."
  },
  {
    id: 68,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang naging Tagapag-usig (Fiscal) sa hukumang militar ni Rizal noong Disyembre 26, 1896?",
    options: ["Rafael Dominguez", "Enrique de Alcocer", "Jose Togores Arjona", "Nicolas de la Peña"],
    answer: "Enrique de Alcocer",
    explanation: "Si Alcocer ang opisyal na tagapag-usig na nagdiin kay Rizal sa sala na pagiging utak ng rebelyon."
  },
  {
    id: 69,
    topic: "Dapitan at Huling Araw",
    question: "Sino sa mga sumusunod na paring Heswita ang nagbigay kay Rizal ng rebulto ng Sagradong Puso ni Hesus sa araw ng kanyang kamatayan?",
    options: ["Padre Federico Faura", "Padre Jose Villaclara", "Padre Vicente Balaguer", "Padre Luis Visa"],
    answer: "Padre Luis Visa",
    explanation: "Hinugot ni Padre Visa ang naturang imahen sa kanyang bulsa at ibinigay kay Rizal noong huling araw niya."
  },
  {
    id: 70,
    topic: "Dapitan at Huling Araw",
    question: "Ano ang ginawa ni Rizal sa ilang itlog na kasama sa kanyang kahuli-hulihang almusal noong Disyembre 30, 1896?",
    options: ["Kinain niya ang lahat", "Ibinigay niya kay Luis Taviel de Andrade", "Itinapon sa gilid ng selda para sa mga daga", "Ibinalik sa mga nagbabantay na sundalo"],
    answer: "Itinapon sa gilid ng selda para sa mga daga",
    explanation: "Sabi niya kay Andrade, hayaan din mag-piyesta ang 'mga kaawa-awang daga' bago siya tuluyang mamatay."
  },
  // --- BATCH 4 (71-100) ---
  {
    id: 71,
    topic: "Dapitan at Huling Araw",
    question: "Anong samahang sekular mula sa Espanya ang tumanggal at namahala sa paglilibing sa bangkay ni Rizal matapos ang eksekusyon?",
    options: ["Cuerpo de Vigilancia", "Hermandad de la Paz y Caridad", "La Liga Filipina", "Katipunan"],
    answer: "Hermandad de la Paz y Caridad",
    explanation: "Ito ay isang samahang sekular mula sa Espanya na ang tungkulin ay umalalay sa mga bilanggong nahatulan ng kamatayan at mamahala sa kanilang paglilibing."
  },
  {
    id: 72,
    topic: "Dapitan at Huling Araw",
    question: "Sa anong pahayagan unang nailathala ang 'Mi Ultimo Adios' sa Pilipinas noong Setyembre 1898?",
    options: ["La Solidaridad", "La Independencia", "La Patria", "El Heraldo de Madrid"],
    answer: "La Independencia",
    explanation: "Nailabas at nakilala ang huling tula ni Rizal sa buong Pilipinas sa pamamagitan ng pahayagang ito."
  },
  {
    id: 73,
    topic: "El Filibusterismo",
    question: "Sa El Filibusterismo, maliban kina Don Mariano Gomez at Don Jose Burgos, sino pa ang ikatlong paring martir na pinaghandugan ni Rizal ng nobela?",
    options: ["Don Jacinto Zamora", "Don Pedro Pelaez", "Don Salvador Font", "Don Vicente Belloc"],
    answer: "Don Jacinto Zamora",
    explanation: "Sila ang bumubuo sa apelyidong GOMBURZA na idinawit at pinaslang dahil sa Cavite Mutiny noong 1872."
  },
  {
    id: 74,
    topic: "El Filibusterismo",
    question: "Sino sa tatlong paring martir ang pinalitan ang titik ng kanyang apelyido tungo sa 'S' upang ipakita na siya ay isang 'Tagalista'?",
    options: ["Padre Jose Burgos", "Padre Jacinto Zamora", "Padre Mariano Gomes", "Padre Pedro Pelaez"],
    answer: "Padre Mariano Gomes",
    explanation: "Ayon sa ulat, mula Gomez, ginawa niya itong Gomes."
  },
  {
    id: 75,
    topic: "El Filibusterismo",
    question: "Sino sa GOMBURZA ang malisyosong inakusahan dahil lamang sa kanyang simpleng hilig sa paglalaro ng poker at pagtaya sa sabong?",
    options: ["Padre Jose Burgos", "Padre Mariano Gomes", "Padre Jacinto Zamora", "Padre Pedro Pelaez"],
    answer: "Padre Jacinto Zamora",
    explanation: "Ginamit ang kanyang simpleng hilig sa paglalaro ng poker at pagtaya sa sabong bilang gawa-gawang ebidensya laban sa kanya."
  },
  {
    id: 76,
    topic: "El Filibusterismo",
    question: "Magkano ang biglaang itinaas ng presyo ng mga natirang sipi ng Edisyong Genta ng El Filibusterismo matapos itong makumpiska ng mga awtoridad?",
    options: ["100 pesetas", "200 pesetas", "300 pesetas", "400 pesetas"],
    answer: "400 pesetas",
    explanation: "Dahil ang karamihan sa mga sipi ay natuklasan at nakumpiska ng mga awtoridad, naging napakabihira nito at umabot sa 400 pesetas ang presyo."
  },
  {
    id: 77,
    topic: "El Filibusterismo",
    question: "Sino ang Intsik na may-ari ng Panciteria na pinagdausan ng pagtitipon ng mga mag-aaral sa El Filibusterismo?",
    options: ["Quiroga", "Makaraig", "Simoun", "Basilio"],
    answer: "Quiroga",
    explanation: "Ang lugar na ito ay ginamit sa nobela bilang tagpuan ng mga pambabatikos."
  },
  {
    id: 78,
    topic: "El Filibusterismo",
    question: "Ano ang mapanganib na kemikal na inilagay ni Simoun sa loob ng magarang lampara para sa kasal nina Juanito Pelaez at Paulita Gomez?",
    options: ["Asido", "Lason", "Nitro-gliserina", "Pulbura"],
    answer: "Nitro-gliserina",
    explanation: "Kapag tinaas ang mitsa nito, sasabog ito at papatayin ang lahat ng naka-attend sa elitistang kasal na iyon."
  },
  {
    id: 79,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang bayaw ni Rizal na nagpadala ng balita sa kanya sa Hong Kong tungkol sa malupit na deportasyon ng 25 katao sa Calamba?",
    options: ["Manuel T. Hidalgo", "Silvestre Ubaldo", "Mariano Herbosa", "Antonino Lopez"],
    answer: "Manuel T. Hidalgo",
    explanation: "Nakatanggap si Rizal ng liham mula kay Manuel T. Hidalgo noong Disyembre 1, 1891 tungkol sa kalupitan ni Weyler."
  },
  {
    id: 80,
    topic: "Paglalakbay sa Asya at Amerika",
    question: "Sino ang ama ni Nellie na nagpadala ng liham ng pagpupuri kay Rizal dahil sa kanyang tagumpay bilang optalmologo sa Hong Kong?",
    options: ["G. Boustead", "Dr. Ariston Bautista Lin", "Don Antonio Vergel de Dios", "Dr. Lorenzo P. Marques"],
    answer: "G. Boustead",
    explanation: "Ang pamilya Boustead ay isa sa mga dating naging malapit kay Rizal, at nagalak sa balitang umuunlad ang kanyang klinika."
  },
  {
    id: 81,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Magkano lamang ang kabuuang tulong pinansyal na natanggap ni Rizal mula sa Kilusang Propaganda mula Enero hanggang Oktubre, na nag-udyok sa kanyang huwag nang tumanggap ng pensiyon?",
    options: ["100 piso", "300 piso", "500 piso", "1,000 piso"],
    answer: "300 piso",
    explanation: "Ang kakulangan sa pinansyal ang isa sa mga rason ng sama ng loob niya at pormal na paghihiwalay sa kilusan."
  },
  {
    id: 82,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Anong barko ang sinakyan ni Rizal noong Oktubre 18, 1891 mula Marseilles patungong Hong Kong na may bitbit na 600 sipi ng El Filibusterismo?",
    options: ["S.S. Melbourne", "Bapor Don Juan", "S.S. Colón", "Kruserang Castilla"],
    answer: "S.S. Melbourne",
    explanation: "Ito ang biyahe kung saan nilarawan niya na 'parang nasa langit' kumpara sa paghihirap niya sa Europa."
  },
  {
    id: 83,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino ang Tyrolese na pari na kalaro ni Rizal ng ahedres sa barko na inilarawan niya bilang 'Padre Damaso na walang pagyayabang at malisya'?",
    options: ["Padre Balaguer", "Padre March", "Padre Fuchs", "Padre Florentino"],
    answer: "Padre Fuchs",
    explanation: "Nakapaglaro at nakasundo niya ang paring ito habang naglalakbay sakay ng S.S. Melbourne."
  },
  {
    id: 84,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Magkano ang ibinabayad ni Rizal bilang buwanang upa sa bahay ng pamilyang Becket sa London?",
    options: ["45 o 8 (British pounds)", "10 o 5 (British pounds)", "20 o 10 (British pounds)", "50 o 12 (British pounds)"],
    answer: "45 o 8 (British pounds)",
    explanation: "Ayon sa ulat, ang buwanang upa ni Rizal ay '45 o 8 (British pounds)' sa tahanan ng pamilya Becket."
  },
  {
    id: 85,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Anong bansag ang ibinigay sa seryal na pamamaslang sa mga kababaihan sa London habang naninirahan doon si Rizal?",
    options: ["Ang Filibustero", "Kardenal Moreno", "Jack the Ripper", "Eminencia Negro"],
    answer: "Jack the Ripper",
    explanation: "Isa ito sa malalaking balita at tagpo habang nakatira ang pambansang bayani sa London noong 1888."
  },
  {
    id: 86,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino ang librarian ng Ministry of Foreign Affairs at dalubhasa sa Malayan languages na tumawag kay Rizal na 'una perla de hombre'?",
    options: ["Dr. Reinhold Rost", "Dr. H. Kern", "Dr. Ferdinand Blumentritt", "Edmund Plauchut"],
    answer: "Dr. Reinhold Rost",
    explanation: "Siya ang kumilala sa katalinuhan ni Rizal at nagbigay ng endorsement para makapasok ang bayani sa British Museum."
  },
  {
    id: 87,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Anong pamagat ng akda ang inilathala ni Rizal noong Hulyo 1889 sa Trübner's Record na naghahambing sa folklore ng Japan at Pilipinas?",
    options: ["Specimens of Tagalog Folklore", "Two Eastern Fables", "Sucesos de las Islas Filipinas", "Filipinas Dentro de Cien Años"],
    answer: "Two Eastern Fables",
    explanation: "Tinawag itong 'Dalawang Pabulang Silangan' na kinagiliwan ng mga ethnologist sa Europa."
  },
  {
    id: 88,
    topic: "Pangalawang Paglalakbay sa Europa",
    question: "Sino ang inaanak ni Rizal sa Paris na anak nina Juan Luna at Paz Pardo de Tavera?",
    options: ["Maria dela Paz Blanca Laureana Hermenigilda Juana Luna y Pardo de Tavera", "Leoncio Lopez Rizal", "Mauricio Cruz", "Angelica Rizal"],
    answer: "Maria dela Paz Blanca Laureana Hermenigilda Juana Luna y Pardo de Tavera",
    explanation: "Naging malapit si Rizal sa pamilyang Luna nang siya ay manuluyan pansamantala sa Paris."
  },
  {
    id: 89,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Anong posisyon ang hinawakan ni Antonio de Morga sa Pilipinas noong 1593 bago siya naging hukom ng Audiencia?",
    options: ["Gobernadorcillo", "Kapitan Heneral", "Arsobispo ng Maynila", "Encomendero"],
    answer: "Kapitan Heneral",
    explanation: "Dahil sa kanyang matataas na puwesto sa gobyerno, makatarungan ang naibigay niyang obserbasyon tungkol sa Pilipinas noon."
  },
  {
    id: 90,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Saang lungsod nailathala ang unang edisyon ng aklat na 'Sucesos de las Islas Filipinas' ni Antonio de Morga noong 1609?",
    options: ["London", "Madrid", "Paris", "Mexico City"],
    answer: "Mexico City",
    explanation: "Dito inilimbag ang orihinal na talaan na nahukay ni Rizal paglipas ng halos 3 siglo."
  },
  {
    id: 91,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sino ang Pranses na itinalaga bilang Pangalawang Pangulo (Bise Presidente) ng binalak na Asosasyong Internasyonal ng mga Filipinohista?",
    options: ["Ferdinand Blumentritt", "Reinhold Rost", "Antonio Ma. Regidor", "Edmund Plauchut"],
    answer: "Edmund Plauchut",
    explanation: "Sila ang mga piling banyaga na kumilala at nagnanais mag-aral sa kultura ng Pilipinas kasama ni Rizal."
  },
  {
    id: 92,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Saang kalsada sa Maynila pormal na binuksan ang Old Bilibid Prison noong 1865 na tinukoy ni Rizal sa kanyang sanaysay?",
    options: ["Azcarraga Street", "Oroquieta Street", "San Marcelino Street", "Escolta Street"],
    answer: "Oroquieta Street",
    explanation: "Ito ang dating kinaroroonan ng Old Bilibid, simbolo noon ng malupit na hustisya ng mga Kastila."
  },
  {
    id: 93,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ano ang tawag sa mga nangungupahang magsasaka sa lupang kabilang sa Hacienda de Calamba na nagreklamo tungkol sa labis na pagtaas ng upa?",
    options: ["Encomendero", "Ilustrado", "Inquilino", "Gobernadorcillo"],
    answer: "Inquilino",
    explanation: "Ang mga iniquilino, gaya ng pamilya Rizal, ang tahasang naging biktima ng pangangamkam at panunupil ng mga paring Dominiko."
  },
  {
    id: 94,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sa sanaysay na 'Mga Bagong Katotohanan', anong salita ang ginamit upang ilarawan ang pagpapanatili ng mga prayle sa mga mamamayan sa kamangmangan upang mas madali silang makontrol?",
    options: ["Embrutecer", "Makiyabelismo", "Ablativo", "Status quo"],
    answer: "Embrutecer",
    explanation: "Sa salin, ibig sabihin nito'y 'to stupefy'. Sinadya nilang panatilihin na mangmang ang bayan upang mabilis itong utusan."
  },
  {
    id: 95,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sa artikulong 'Ang Katotohanan Para sa Lahat', ano ang naging pangunahing dahilan kung bakit ito isinulat ni Rizal?",
    options: ["Upang pabulaanan ang mga paratang na ang mga Pilipino ay walang dangal at masisipag sa kasamaan", "Upang hilingin ang pagbabalik ng kanyang pamilya sa Calamba", "Upang ideklara ang kalayaan ng Pilipinas", "Upang pormal na itatag ang La Liga Filipina"],
    answer: "Upang pabulaanan ang mga paratang na ang mga Pilipino ay walang dangal at masisipag sa kasamaan",
    explanation: "Binasag ni Rizal ang diskriminasyon at inatake ang pang-aapi at pamamahiya sa buong lahing Indio."
  },
  {
    id: 96,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Ayon sa sanaysay ni Rizal, sa anong bayan itinayo ang dalawang paaralan gamit ang gastos ng mga mamamayan ngunit ginamit bilang kuwartel at tribunal ng mga sundalo?",
    options: ["Calamba", "Los Baños", "Vigan", "Malolos"],
    answer: "Calamba",
    explanation: "Sa Calamba ay ginamit ang mga paaralan bilang kuwartel at tribunal, habang sa Los Baños naman ay ipinagawa ang pagamutan sa pamamagitan ng sapilitang paggawa."
  },
  {
    id: 97,
    topic: "Mga Sanaysay at Anotasyon",
    question: "Sa sanaysay na 'Diferencias' (Mga Pagkakaiba), paano ginamit ni Rizal ang salitang 'status' na pilit itinatama ng mga kritiko bilang 'estatu'?",
    options: ["Bilang pandiwa", "Bilang pang-uri", "Bilang 'ablativo' (palayon)", "Bilang panghalip"],
    answer: "Bilang 'ablativo' (palayon)",
    explanation: "Itinama ni Rizal ang mismong kastilang sumisita sa kanyang gramatika sa Latin upang mapatunayang mas matalino siya kaysa sa kanila."
  },
  {
    id: 98,
    topic: "Talahulugan at Terminolohiya",
    question: "Anong terminolohiya ang tumutukoy sa matinding panlilinlang, paggamit ng masasamang paraan, o kawalan ng moralidad upang protektahan ang sariling interes sa lipunan?",
    options: ["Embrutecer", "Makiyabelismo", "Ingratitudes", "Filibusterismo"],
    answer: "Makiyabelismo",
    explanation: "Ang salitang Italyanong Machiavellianism (Makiyabelismo) ang sumasalamin sa kasakiman sa kapangyarihan ng mga nanunupil noon."
  },
  {
    id: 99,
    topic: "Dapitan at Huling Araw",
    question: "Bukod sa kamatayan sa pamamagitan ng pagbaril, magkano ang ipinataw na parusang pinansyal na dapat bayaran ni Rizal sa pamahalaan para sa mga pinsala ayon sa kanyang hatol kung bibigyan ng kapatawaran?",
    options: ["P10,000", "P50,000", "P100,000", "P500,000"],
    answer: "P100,000",
    explanation: "Kung sakaling pagkalooban siya ng kapatawaran, magbabayad siya ng P100,000 para sa mga pinsala. Hiwalay pa ito sa naunang utos na pangangamkam ng ari-arian na hindi bababa sa isang milyong piso."
  },
  {
    id: 100,
    topic: "Dapitan at Huling Araw",
    question: "Sino ang Espanyol na mamamahayag ng El Heraldo de Madrid na dumalo upang makakuha ng panayam kay Rizal bago ang kanyang eksekusyon?",
    options: ["Vicente Belloc y Sanchez", "Santiago Mataix", "Enrique de Alcocer", "Wenceslao Retana"],
    answer: "Santiago Mataix",
    explanation: "Siya ay isang reporter na pumunta sa mismong piitan (Fort Santiago) upang interviewhin si Rizal sa kanyang mga huling araw."
  }
];

// --- IDENTIFICATION QUESTIONS ---
export interface IdentificationQuestion {
  question: string;
  answer: string;
}
export const identificationQuestions: IdentificationQuestion[] = [
  { question: "Sino ang nakasama ni Rizal sa inuupahang kwarto sa Genta na kahati niya sa rasyon ng biskwit upang makatipid?", answer: "Jose Alejandro" },
  { question: "Ano ang sagisag-panulat (pen name) na ginamit ni Rizal nang ilathala niya ang satirikong akdang 'Por Telefono'?", answer: "Dimas Alang" },
  { question: "Sino ang orihinal na may-akda ng aklat na 'Sucesos de las Islas Filipinas' na nilagyan ni Rizal ng sariling anotasyon?", answer: "Antonio de Morga" },
  { question: "Anong samahang sekular mula sa Espanya ang tumanggal at namahala sa paglilibing sa bangkay ni Rizal matapos ang eksekusyon?", answer: "Hermandad de la Paz y Caridad" },
  { question: "Sinong Gobernador-Heneral ang nagpadala ng 50 sundalo upang sunugin ang mga bahay at palayasin ang pamilya ni Rizal sa Calamba?", answer: "Valeriano Weyler" },
];

// --- ENUMERATION QUESTIONS ---
export interface EnumerationQuestion {
  question: string;
  requiredCount: number;
  answers: string[];
}
export const enumerationQuestions: EnumerationQuestion[] = [
  {
    question: "Ibigay ang pangalan ng tatlong paring martir na kilala bilang GOMBURZA.",
    requiredCount: 3,
    answers: ["Mariano Gomez", "Jose Burgos", "Jacinto Zamora"],
  },
  {
    question: "Magbigay ng tatlong ispesimen ng hayop na natuklasan ni Rizal sa Dapitan at ipinangalan sa kanya.",
    requiredCount: 3,
    answers: ["Draco rizali", "Rhacophorus rizali", "Apogonia rizali"],
  },
  {
    question: "Magbigay ng tatlong layunin ng La Liga Filipina batay sa saligang-batas nito.",
    requiredCount: 3,
    answers: [
      "Pag-isahin ang buong Pilipinas", 
      "Pagtataguyod ng mga reporma", 
      "Pagbibigay suporta sa edukasyon, agrikultura, at komersyo",
      "Paglaban sa karahasan at kawalang-katarungan",
      "Pagbibigay proteksyon at tulong sa bawat kasapi ng samahan"
    ],
  },
];

// --- FLASHCARD QUESTIONS ---
export interface FlashcardQuestion {
  front: string;
  back: string;
}
export const flashcardQuestions: FlashcardQuestion[] = [
  { front: "Ano ang ibig sabihin ng 'Eminencia Negro' sa El Filibusterismo?", back: "Isang idyoma para sa taong may malakas ngunit palihim na kapangyarihan; taguri kay Simoun." },
  { front: "Ano ang pamagat ng satirikong akda ni Rizal na tumutuligsa kay Fr. Salvador Font?", back: "Por Telefono" },
  { front: "Ano ang ibig sabihin ng 'Ablativo'?", back: "Kaukulang pambalarila na ginamit ni Rizal sa salitang 'status'." },
  { front: "Saan ipinatapon si Rizal noong Hulyo 1892?", back: "Dapitan" },
  { front: "Sino ang nagpadala ng pondo upang mailimbag ang El Filibusterismo?", back: "Valentin Ventura" },
];

// --- MATCHING QUESTIONS ---
export interface MatchingQuestion {
  id: string;
  left: string;
  right: string;
}
export const matchingQuestions: MatchingQuestion[] = [
  { id: "1", left: "Verdades Nuevas", right: "Mga Bagong Katotohanan" },
  { id: "2", left: "Sobre la Indolencia de los Filipinos", right: "Ang Katamaran ng mga Pilipino" },
  { id: "3", left: "Filipinas Dentro de Cien Años", right: "Ang Pilipinas sa Darating na Sandaang Taon" },
  { id: "4", left: "Por Telefono", right: "Sa Pamamagitan ng Telepono" },
  { id: "5", left: "Diferencias", right: "Mga Pagkakaiba" },
];

// --- RECITATION QUESTIONS ---
export interface RecitationQuestion {
  question: string;
  keyPoints: string[];
}
export const recitationQuestions: RecitationQuestion[] = [
  {
    question: "Paano naging isang ganap na 'Filibustero' si Simoun mula sa pagiging Juan Crisostomo Ibarra?",
    keyPoints: [
      "Bumalik siya sa Pilipinas na may hangaring makapaghiganti.",
      "Ginamit niya ang yaman upang palalain ang kabulukan ng pamahalaan.",
      "Nais niyang magpasimula ng madugong himagsikan.",
    ],
  },
  {
    question: "Ano ang mahahalagang ambag ni Rizal sa Dapitan?",
    keyPoints: [
      "Nagtayo siya ng paaralan at pumili ng mga batang lalaki bilang mag-aaral.",
      "Gumamit ng kaalaman sa inhenyeriya para sa gravity waterworks.",
      "Nangolekta ng mga ispesimen at nagpadala sa mga museo sa Europa.",
    ],
  },
  {
    question: "Bakit hindi nangangahulugan ng kawalan ng utang na loob ang pagpuna sa pamahalaan ayon sa Ingratitudes?",
    keyPoints: [
      "Hindi dapat manaig ang interes ng isang relihiyosong grupo kaysa sa interes ng bayan.",
      "Ang pagtanaw ng utang na loob ay hindi nangangahulugan ng pagtanggap sa kamangmangan.",
    ],
  },
];