import { expect, test } from "vitest";
import branchDivider from "./branchDivider.ts";

test("branchDivider", () => {
  expect(branchDivider(geometry)(l("Flb"))).toBe("c");
  expect(branchDivider(geometry)(l("Söö"))).toBe("c");
  expect(branchDivider(geometry)(l("Vhd"))).toBe("se");
  expect(branchDivider(geometry)(l("Nkv"))).toBe("sw");
  expect(branchDivider(geometry)(l("Må"))).toBe("nw");
});

function l(locationSignature) {
  return { latest: { LocationSignature: locationSignature } };
}

const geometry = {
  Alä: {
    AdvertisedShortLocationName: "Almnäs",
    Geometry: {
      SWEREF99TM: "POINT (643349 6561610)",
      WGS84: "POINT (17.507802824548527 59.169404149769846)",
    },
  },
  Arne: {
    AdvertisedShortLocationName: "Arlanda nedre",
    Geometry: {
      SWEREF99TM: "POINT (664813 6614137)",
      WGS84: "POINT (17.923106648878097 59.63271292158976)",
    },
  },
  Arns: {
    AdvertisedShortLocationName: "Arlanda S",
    Geometry: {
      SWEREF99TM: "POINT (665038 6615720)",
      WGS84: "POINT (17.92832852166955 59.646820357358884)",
    },
  },
  Arb: {
    AdvertisedShortLocationName: "Arboga",
    Geometry: {
      SWEREF99TM: "POINT (547732 6584582)",
      WGS84: "POINT (15.840525578708135 59.39718938751229)",
    },
  },
  B: {
    AdvertisedShortLocationName: "Björnlunda",
    Geometry: {
      SWEREF99TM: "POINT (623541 6549344)",
      WGS84: "POINT (17.154658166569 59.065550410038206)",
    },
  },
  Aä: {
    AdvertisedShortLocationName: "Alväng",
    Geometry: {
      SWEREF99TM: "POINT (532160 6582393)",
      WGS84: "POINT (15.566005650156104 59.37901056704983)",
    },
  },
  Arnc: {
    AdvertisedShortLocationName: "Arlanda",
    Geometry: {
      SWEREF99TM: "POINT (665036 6615971)",
      WGS84: "POINT (17.928489392445165 59.64907212086778)",
    },
  },
  Arnn: {
    AdvertisedShortLocationName: "Arlanda N",
    Geometry: {
      SWEREF99TM: "POINT (665100 6616247)",
      WGS84: "POINT (17.929839291864006 59.651521946991636)",
    },
  },
  Bdo: {
    AdvertisedShortLocationName: "Broddbo",
    Geometry: {
      SWEREF99TM: "POINT (582684 6650880)",
      WGS84: "POINT (16.481882451382702 59.98691585315015)",
    },
  },
  Bra: {
    AdvertisedShortLocationName: "Brista",
    Geometry: {
      SWEREF99TM: "POINT (661774 6611469)",
      WGS84: "POINT (17.867244912541 59.609974570890515)",
    },
  },
  Brh: {
    AdvertisedShortLocationName: "Brattheden",
    Geometry: {
      SWEREF99TM: "POINT (566295 6628396)",
      WGS84: "POINT (16.181052461125322 59.78803488900513)",
    },
  },
  Bjn: {
    AdvertisedShortLocationName: "Björnkulla",
    Geometry: {
      SWEREF99TM: "POINT (667224 6566413)",
      WGS84: "POINT (17.928581196472948 59.20375584268418)",
    },
  },
  Bvr: {
    AdvertisedShortLocationName: "Blackvreten",
    Geometry: {
      SWEREF99TM: "POINT (664059 6611304)",
      WGS84: "POINT (17.907555581954057 59.60760320890258)",
    },
  },
  Bgv: {
    AdvertisedShortLocationName: "Bälgviken",
    Geometry: {
      SWEREF99TM: "POINT (583297 6569101)",
      WGS84: "POINT (16.460636576860814 59.25267821131035)",
    },
  },
  Bro: {
    AdvertisedShortLocationName: "Bro",
    Geometry: {
      SWEREF99TM: "POINT (648991 6600050)",
      WGS84: "POINT (17.63295834870672 59.51230001368409)",
    },
  },
  Bva: {
    AdvertisedShortLocationName: "Barva",
    Geometry: {
      SWEREF99TM: "POINT (601963 6579665)",
      WGS84: "POINT (16.792764360140207 59.34341581743384)",
    },
  },
  Bkb: {
    AdvertisedShortLocationName: "Barkarby",
    Geometry: {
      SWEREF99TM: "POINT (662554 6588698)",
      WGS84: "POINT (17.86367834371055 59.4054464125127)",
    },
  },
  Brny: {
    AdvertisedShortLocationName: "Bro Nygård",
    Geometry: {
      SWEREF99TM: "POINT (651265 6598512)",
      WGS84: "POINT (17.672002311768015 59.49768936938677)",
    },
  },
  Bna: {
    AdvertisedShortLocationName: "Brunna",
    Geometry: {
      SWEREF99TM: "POINT (636027 6638465)",
      WGS84: "POINT (17.42894154212918 59.86135632825085)",
    },
  },
  Bt: {
    AdvertisedShortLocationName: "Baggetorp",
    Geometry: {
      SWEREF99TM: "POINT (561163 6541610)",
      WGS84: "POINT (16.06491302338619 59.00961559339919)",
    },
  },
  Bre: {
    AdvertisedShortLocationName: "Bränninge",
    Geometry: {
      SWEREF99TM: "POINT (650758 6558674)",
      WGS84: "POINT (17.63523655054902 59.14050116995778)",
    },
  },
  Bäl: {
    AdvertisedShortLocationName: "Bällsta",
    Geometry: {
      SWEREF99TM: "POINT (673739 6602430)",
      WGS84: "POINT (18.07156718518678 59.52411556085246)",
    },
  },
  Ebg: {
    AdvertisedShortLocationName: "Enstaberga",
    Geometry: {
      SWEREF99TM: "POINT (606991 6513804)",
      WGS84: "POINT (16.849075264036287 58.751014164260674)",
    },
  },
  Dån: {
    AdvertisedShortLocationName: "Dånviken",
    Geometry: {
      SWEREF99TM: "POINT (655058 6564353)",
      WGS84: "POINT (17.71433976088987 59.18989801084126)",
    },
  },
  Dt: {
    AdvertisedShortLocationName: "Dingtuna",
    Geometry: {
      SWEREF99TM: "POINT (578515 6604520)",
      WGS84: "POINT (16.389779014511614 59.57156442671425)",
    },
  },
  Dn: {
    AdvertisedShortLocationName: "Dagarn",
    Geometry: {
      SWEREF99TM: "POINT (540106 6641390)",
      WGS84: "POINT (15.717053946258057 59.908066683094674)",
    },
  },
  D: {
    AdvertisedShortLocationName: "Degerön",
    Geometry: {
      SWEREF99TM: "POINT (508797 6506825)",
      WGS84: "POINT (15.151806606000406 58.7015035633366)",
    },
  },
  Bål: {
    AdvertisedShortLocationName: "Bålsta",
    Geometry: {
      SWEREF99TM: "POINT (643031 6606187)",
      WGS84: "POINT (17.531884549633357 59.56943227548269)",
    },
  },
  Cst: {
    AdvertisedShortLocationName: "Stockholm C",
    Geometry: {
      SWEREF99TM: "POINT (673924 6580788)",
      WGS84: "POINT (18.057267018575825 59.329970842872264)",
    },
  },
  Et: {
    AdvertisedShortLocationName: "Eskilstuna",
    Geometry: {
      SWEREF99TM: "POINT (585559 6582152)",
      WGS84: "POINT (16.505455902288542 59.36938759161493)",
    },
  },
  Ep: {
    AdvertisedShortLocationName: "Enköping",
    Geometry: {
      SWEREF99TM: "POINT (617735 6613682)",
      WGS84: "POINT (17.088656482917344 59.64457984560813)",
    },
  },
  Duo: {
    AdvertisedShortLocationName: "Duvbo",
    Geometry: {
      SWEREF99TM: "POINT (666612 6585006)",
      WGS84: "POINT (17.932196987513084 59.37074867405395)",
    },
  },
  Eby: {
    AdvertisedShortLocationName: "Ekeby",
    Geometry: {
      SWEREF99TM: "POINT (654689 6629785)",
      WGS84: "POINT (17.7553140479258 59.776942406174726)",
    },
  },
  Er: {
    AdvertisedShortLocationName: "Ervalla",
    Geometry: {
      SWEREF99TM: "POINT (514052 6586511)",
      WGS84: "POINT (15.247585921008847 59.416983448109406)",
    },
  },
  Eko: {
    AdvertisedShortLocationName: "Ekolsund",
    Geometry: {
      SWEREF99TM: "POINT (633723 6610818)",
      WGS84: "POINT (17.370210482695857 59.61406263439008)",
    },
  },
  Fg: {
    AdvertisedShortLocationName: "Finspång",
    Geometry: {
      SWEREF99TM: "POINT (544931 6507709)",
      WGS84: "POINT (15.775494771471818 58.707198609971215)",
    },
  },
  Feb: {
    AdvertisedShortLocationName: "Fellingsbro",
    Geometry: {
      SWEREF99TM: "POINT (533756 6588400)",
      WGS84: "POINT (15.59503810973915 59.43282614654759)",
    },
  },
  Fas: {
    AdvertisedShortLocationName: "Farsta strand",
    Geometry: {
      SWEREF99TM: "POINT (677073 6570533)",
      WGS84: "POINT (18.104137121732695 59.23670496034276)",
    },
  },
  Fgc: {
    AdvertisedShortLocationName: "Fagersta",
    Geometry: {
      SWEREF99TM: "POINT (545497 6650639)",
      WGS84: "POINT (15.815465855713567 59.990548754843736)",
    },
  },
  Fgl: {
    AdvertisedShortLocationName: "Fågelsta",
    Geometry: {
      SWEREF99TM: "POINT (502298 6479775)",
      WGS84: "POINT (15.039382028679153 58.45864456118405)",
    },
  },
  Fi: {
    AdvertisedShortLocationName: "Fiskeby",
    Geometry: {
      SWEREF99TM: "POINT (565308 6496625)",
      WGS84: "POINT (16.123924534642104 58.60507461015913)",
    },
  },
  Flb: {
    AdvertisedShortLocationName: "Flemingsberg",
    Geometry: {
      SWEREF99TM: "POINT (668247 6568187)",
      WGS84: "POINT (17.947841798445623 59.21926148988484)",
    },
  },
  Fle: {
    AdvertisedShortLocationName: "Flen",
    Geometry: {
      SWEREF99TM: "POINT (590922 6547472)",
      WGS84: "POINT (16.58527823224592 59.056946593019575)",
    },
  },
  Fv: {
    AdvertisedShortLocationName: "Frövi",
    Geometry: {
      SWEREF99TM: "POINT (520611 6592180)",
      WGS84: "POINT (15.363694373556891 59.46761996907322)",
    },
  },
  Gn: {
    AdvertisedShortLocationName: "Gnesta",
    Geometry: {
      SWEREF99TM: "POINT (632674 6547755)",
      WGS84: "POINT (17.312841134340005 59.04854927680454)",
    },
  },
  Go: {
    AdvertisedShortLocationName: "Godegård",
    Geometry: {
      SWEREF99TM: "POINT (509559 6511704)",
      WGS84: "POINT (15.165163531307268 58.745305676713755)",
    },
  },
  Gi: {
    AdvertisedShortLocationName: "Gistad",
    Geometry: {
      SWEREF99TM: "POINT (553325 6482344)",
      WGS84: "POINT (15.914390095843844 58.478465933750286)",
    },
  },
  Gru: {
    AdvertisedShortLocationName: "Grundbro",
    Geometry: {
      SWEREF99TM: "POINT (619747 6574277)",
      WGS84: "POINT (17.102236921191274 59.29039081077763)",
    },
  },
  Fok: {
    AdvertisedShortLocationName: "Folkesta",
    Geometry: {
      SWEREF99TM: "POINT (580301 6585752)",
      WGS84: "POINT (16.414317837235856 59.402740779512925)",
    },
  },
  Ghu: {
    AdvertisedShortLocationName: "Gula huset",
    Geometry: {
      SWEREF99TM: "POINT (670685 6585712)",
      WGS84: "POINT (18.004324812598888 59.375450332677566)",
    },
  },
  Gau: {
    AdvertisedShortLocationName: "Garnudden",
    Geometry: {
      SWEREF99TM: "POINT (658267 6564870)",
      WGS84: "POINT (17.77081470259223 59.19335122369514)",
    },
  },
  Gib: {
    AdvertisedShortLocationName: "Grillby",
    Geometry: {
      SWEREF99TM: "POINT (625984 6612210)",
      WGS84: "POINT (17.233992978801197 59.62896063211938)",
    },
  },
  Gdv: {
    AdvertisedShortLocationName: "Gröndalsviken",
    Geometry: {
      SWEREF99TM: "POINT (668892 6532535)",
      WGS84: "POINT (17.931729038968886 58.89925320225162)",
    },
  },
  Fsö: {
    AdvertisedShortLocationName: "Flens övre",
    Geometry: {
      SWEREF99TM: "POINT (591460 6547998)",
      WGS84: "POINT (16.59487330032069 59.06155355922566)",
    },
  },
  Hgl: {
    AdvertisedShortLocationName: "Hagalund",
    Geometry: {
      SWEREF99TM: "POINT (670775 6585341)",
      WGS84: "POINT (18.005611850474132 59.37208683071199)",
    },
  },
  Gttu: {
    AdvertisedShortLocationName: "Gamla Tortuna",
    Geometry: {
      SWEREF99TM: "POINT (596811 6616343)",
      WGS84: "POINT (16.718895209887446 59.67384884019208)",
    },
  },
  Hel: {
    AdvertisedShortLocationName: "Helenelund",
    Geometry: {
      SWEREF99TM: "POINT (668181 6589289)",
      WGS84: "POINT (17.96311989514949 59.40853596468148)",
    },
  },
  Hh: {
    AdvertisedShortLocationName: "Hallstahammar",
    Geometry: {
      SWEREF99TM: "POINT (568847 6609130)",
      WGS84: "POINT (16.220194436890022 59.61465592812777)",
    },
  },
  Hgö: {
    AdvertisedShortLocationName: "Högsjö",
    Geometry: {
      SWEREF99TM: "POINT (541469 6545852)",
      WGS84: "POINT (15.722857462745507 59.050072589442934)",
    },
  },
  Hfa: {
    AdvertisedShortLocationName: "Hemfosa",
    Geometry: {
      SWEREF99TM: "POINT (670634 6551515)",
      WGS84: "POINT (17.976580294148828 59.06878868253162)",
    },
  },
  Hgv: {
    AdvertisedShortLocationName: "Häggvik",
    Geometry: {
      SWEREF99TM: "POINT (666342 6593076)",
      WGS84: "POINT (17.933708229792504 59.443229737156024)",
    },
  },
  Gtå: {
    AdvertisedShortLocationName: "Getå",
    Geometry: {
      SWEREF99TM: "POINT (573283 6503617)",
      WGS84: "POINT (16.263400115761858 58.66658319287491)",
    },
  },
  Hlö: {
    AdvertisedShortLocationName: "Hölö",
    Geometry: {
      SWEREF99TM: "POINT (645499 6545700)",
      WGS84: "POINT (17.534812607709043 59.02593382032083)",
    },
  },
  Hnd: {
    AdvertisedShortLocationName: "Handen",
    Geometry: {
      SWEREF99TM: "POINT (679149 6562777)",
      WGS84: "POINT (18.134083407444244 59.16628512713939)",
    },
  },
  Hpbg: {
    AdvertisedShortLocationName: "Hallsberg",
    Geometry: {
      SWEREF99TM: "POINT (506379 6547530)",
      WGS84: "POINT (15.111247817253778 59.06710905898814)",
    },
  },
  Huv: {
    AdvertisedShortLocationName: "Huvudsta",
    Geometry: {
      SWEREF99TM: "POINT (670580 6583400)",
      WGS84: "POINT (18.000647047100582 59.35475926458733)",
    },
  },
  Hu: {
    AdvertisedShortLocationName: "Huddinge",
    Geometry: {
      SWEREF99TM: "POINT (669888 6570098)",
      WGS84: "POINT (17.978043145418106 59.23574545252347)",
    },
  },
  Hrbg: {
    AdvertisedShortLocationName: "Hallsbergs rangerbangård",
    Geometry: {
      SWEREF99TM: "POINT (503403 6546585)",
      WGS84: "POINT (15.059332698873588 59.05865656514161)",
    },
  },
  Hnä: {
    AdvertisedShortLocationName: "Hälleforsnäs",
    Geometry: {
      SWEREF99TM: "POINT (585915 6559058)",
      WGS84: "POINT (16.50255929862843 59.16199646274857)",
    },
  },
  Hpn: {
    AdvertisedShortLocationName: "Hallsberg Posten",
    Geometry: {
      SWEREF99TM: "POINT (502655 6546200)",
      WGS84: "POINT (15.04628637056594 59.05520435892093)",
    },
  },
  Hsa: {
    AdvertisedShortLocationName: "Hovsta",
    Geometry: {
      SWEREF99TM: "POINT (512437 6578948)",
      WGS84: "POINT (15.218693351704676 59.34911820364725)",
    },
  },
  Hy: {
    AdvertisedShortLocationName: "Heby",
    Geometry: {
      SWEREF99TM: "POINT (603542 6646227)",
      WGS84: "POINT (16.853164760744242 59.94043449604126)",
    },
  },
  Häd: {
    AdvertisedShortLocationName: "Härad",
    Geometry: {
      SWEREF99TM: "POINT (608767 6581376)",
      WGS84: "POINT (16.913184715386098 59.35707314496891)",
    },
  },
  Jbo: {
    AdvertisedShortLocationName: "Jordbro",
    Geometry: {
      SWEREF99TM: "POINT (678848 6560092)",
      WGS84: "POINT (18.126627633514342 59.14233539839546)",
    },
  },
  Ist: {
    AdvertisedShortLocationName: "Isätra",
    Geometry: {
      SWEREF99TM: "POINT (597456 6645753)",
      WGS84: "POINT (16.744076539590626 59.93766490310803)",
    },
  },
  Jla: {
    AdvertisedShortLocationName: "Järlåsa",
    Geometry: {
      SWEREF99TM: "POINT (623296 6640658)",
      WGS84: "POINT (17.203120446229246 59.885027833296036)",
    },
  },
  Hål: {
    AdvertisedShortLocationName: "Hållsta",
    Geometry: {
      SWEREF99TM: "POINT (583078 6573835)",
      WGS84: "POINT (16.458614128862813 59.29522004440194)",
    },
  },
  Hön: {
    AdvertisedShortLocationName: "Högdalen",
    Geometry: {
      SWEREF99TM: "POINT (673424 6572669)",
      WGS84: "POINT (18.041982001377352 59.25736898830077)",
    },
  },
  Jbk: {
    AdvertisedShortLocationName: "Jädersbruk",
    Geometry: {
      SWEREF99TM: "POINT (545326 6585670)",
      WGS84: "POINT (15.798392368600274 59.40722470168111)",
    },
  },
  Jho: {
    AdvertisedShortLocationName: "Jakobshyttan",
    Geometry: {
      SWEREF99TM: "POINT (509210 6518688)",
      WGS84: "POINT (15.15942054779714 58.8080360293133)",
    },
  },
  Jkb: {
    AdvertisedShortLocationName: "Jakobsberg",
    Geometry: {
      SWEREF99TM: "POINT (660733 6590667)",
      WGS84: "POINT (17.833119618641522 59.42380587742837)",
    },
  },
  Jn: {
    AdvertisedShortLocationName: "Järna",
    Geometry: {
      SWEREF99TM: "POINT (647135 6553329)",
      WGS84: "POINT (17.568388900751486 59.09381755899731)",
    },
  },
  Kda: {
    AdvertisedShortLocationName: "Krigslida",
    Geometry: {
      SWEREF99TM: "POINT (675527 6556210)",
      WGS84: "POINT (18.0655526617058 59.108906680414336)",
    },
  },
  Km: {
    AdvertisedShortLocationName: "Kilsmo",
    Geometry: {
      SWEREF99TM: "POINT (530716 6547490)",
      WGS84: "POINT (15.535659066749187 59.065691496941184)",
    },
  },
  Kmy: {
    AdvertisedShortLocationName: "Kummelby",
    Geometry: {
      SWEREF99TM: "POINT (667775 6590278)",
      WGS84: "POINT (17.956751377736484 59.41756747147486)",
    },
  },
  Kla: {
    AdvertisedShortLocationName: "Kumla",
    Geometry: {
      SWEREF99TM: "POINT (508068 6554263)",
      WGS84: "POINT (15.140951223316394 59.12754604268638)",
    },
  },
  Kms: {
    AdvertisedShortLocationName: "Kimstad",
    Geometry: {
      SWEREF99TM: "POINT (556408 6488824)",
      WGS84: "POINT (15.96884942551882 58.53626912152928)",
    },
  },
  Khä: {
    AdvertisedShortLocationName: "Kallhäll",
    Geometry: {
      SWEREF99TM: "POINT (659134 6593781)",
      WGS84: "POINT (17.8072890439651 59.45234417653789)",
    },
  },
  Kju: {
    AdvertisedShortLocationName: "Kjula",
    Geometry: {
      SWEREF99TM: "POINT (594508 6578785)",
      WGS84: "POINT (16.661367442087332 59.337252490019715)",
    },
  },
  Kbä: {
    AdvertisedShortLocationName: "Kolbäck",
    Geometry: {
      SWEREF99TM: "POINT (569699 6603534)",
      WGS84: "POINT (16.233449467265874 59.56427506937709)",
    },
  },
  Kn: {
    AdvertisedShortLocationName: "Knivsta",
    Geometry: {
      SWEREF99TM: "POINT (656714 6624124)",
      WGS84: "POINT (17.78709920918859 59.725408895627695)",
    },
  },
  Jår: {
    AdvertisedShortLocationName: "Jönåker",
    Geometry: {
      SWEREF99TM: "POINT (599815 6512758)",
      WGS84: "POINT (16.72465792809279 58.743342573688565)",
    },
  },
  K: {
    AdvertisedShortLocationName: "Katrineholm",
    Geometry: {
      SWEREF99TM: "POINT (569475 6540292)",
      WGS84: "POINT (16.20918364756429 58.996511678685145)",
    },
  },
  Ke: {
    AdvertisedShortLocationName: "Karlberg",
    Geometry: {
      SWEREF99TM: "POINT (672231 6581859)",
      WGS84: "POINT (18.028410943790742 59.34026923540147)",
    },
  },
  Kng: {
    AdvertisedShortLocationName: "Kvarnängen",
    Geometry: {
      SWEREF99TM: "POINT (668503 6535864)",
      WGS84: "POINT (17.927513716982958 58.929263989097976)",
    },
  },
  Kör: {
    AdvertisedShortLocationName: "Kungsör",
    Geometry: {
      SWEREF99TM: "POINT (562586 6588208)",
      WGS84: "POINT (16.103102241021354 59.427798914452396)",
    },
  },
  Kp: {
    AdvertisedShortLocationName: "Köping",
    Geometry: {
      SWEREF99TM: "POINT (556979 6596853)",
      WGS84: "POINT (16.006600833998384 59.50621623962454)",
    },
  },
  Lgm: {
    AdvertisedShortLocationName: "Linghem",
    Geometry: {
      SWEREF99TM: "POINT (545842 6477552)",
      WGS84: "POINT (15.785130833051785 58.43628121931304)",
    },
  },
  Kon: {
    AdvertisedShortLocationName: "Kolmården",
    Geometry: {
      SWEREF99TM: "POINT (579014 6504633)",
      WGS84: "POINT (16.362527356141097 58.674698187520086)",
    },
  },
  Ksus: {
    AdvertisedShortLocationName: "Kvicksund",
    Geometry: {
      SWEREF99TM: "POINT (574877 6590991)",
      WGS84: "POINT (16.320647961765943 59.450774679861105)",
    },
  },
  Lmo: {
    AdvertisedShortLocationName: "Löcknamon",
    Geometry: {
      SWEREF99TM: "POINT (504102.7 6530408.6)",
      WGS84: "POINT (15.07123172663151 58.9133756901394)",
    },
  },
  Lm: {
    AdvertisedShortLocationName: "Liljeholmen",
    Geometry: {
      SWEREF99TM: "POINT (672275 6578362)",
      WGS84: "POINT (18.026391864198825 59.30889139708874)",
    },
  },
  Krn: {
    AdvertisedShortLocationName: "Krampen",
    Geometry: {
      SWEREF99TM: "POINT (532583 6622880)",
      WGS84: "POINT (15.579665070593638 59.74252751581795)",
    },
  },
  Kän: {
    AdvertisedShortLocationName: "Kungsängen",
    Geometry: {
      SWEREF99TM: "POINT (655929 6596521)",
      WGS84: "POINT (17.752825186759477 59.47812275142195)",
    },
  },
  Ld: {
    AdvertisedShortLocationName: "Lindesberg",
    Geometry: {
      SWEREF99TM: "POINT (512909 6606277)",
      WGS84: "POINT (15.228644833766962 59.59451622006108)",
    },
  },
  Lg: {
    AdvertisedShortLocationName: "Läggesta",
    Geometry: {
      SWEREF99TM: "POINT (623710 6569630)",
      WGS84: "POINT (17.169099180406807 59.24754847952218)",
    },
  },
  Koe: {
    AdvertisedShortLocationName: "Kolke",
    Geometry: {
      SWEREF99TM: "POINT (627013 6548663)",
      WGS84: "POINT (17.214767447065974 59.05841957265223)",
    },
  },
  Ksu: {
    AdvertisedShortLocationName: "Kvicksund",
    Geometry: {
      SWEREF99TM: "POINT (574227 6591798)",
      WGS84: "POINT (16.309467156943033 59.45813501090446)",
    },
  },
  Mdm: {
    AdvertisedShortLocationName: "Mariedamm",
    Geometry: {
      SWEREF99TM: "POINT (509349 6523681)",
      WGS84: "POINT (15.162035691610491 58.85287440436758)",
    },
  },
  Lub: {
    AdvertisedShortLocationName: "Lundby",
    Geometry: {
      SWEREF99TM: "POINT (608637 6614522)",
      WGS84: "POINT (16.927798317305335 59.654588773898396)",
    },
  },
  Lre: {
    AdvertisedShortLocationName: "Lästringe",
    Geometry: {
      SWEREF99TM: "POINT (634168 6528482)",
      WGS84: "POINT (17.32717274554208 58.87514083459249)",
    },
  },
  Mot: {
    AdvertisedShortLocationName: "Motala",
    Geometry: {
      SWEREF99TM: "POINT (502805 6488556)",
      WGS84: "POINT (15.048178636126666 58.537506804953296)",
    },
  },
  Mr: {
    AdvertisedShortLocationName: "Märsta",
    Geometry: {
      SWEREF99TM: "POINT (661368 6613430)",
      WGS84: "POINT (17.861556068154965 59.627719092214846)",
    },
  },
  Morp: {
    AdvertisedShortLocationName: "Munktorp",
    Geometry: {
      SWEREF99TM: "POINT (564142 6599977)",
      WGS84: "POINT (16.134057758303435 59.5332291421602)",
    },
  },
  Mlö: {
    AdvertisedShortLocationName: "Mellösa",
    Geometry: {
      SWEREF99TM: "POINT (589338 6552325)",
      WGS84: "POINT (16.55964778903859 59.10084758936241)",
    },
  },
  Lp: {
    AdvertisedShortLocationName: "Linköping",
    Geometry: {
      SWEREF99TM: "POINT (536474 6475311)",
      WGS84: "POINT (15.624342206193218 58.41703698401011)",
    },
  },
  Mby: {
    AdvertisedShortLocationName: "Malmby",
    Geometry: {
      SWEREF99TM: "POINT (616785 6580147)",
      WGS84: "POINT (17.05345151484165 59.343899341696144)",
    },
  },
  Nkp: {
    AdvertisedShortLocationName: "Närkes Kvarntorp",
    Geometry: {
      SWEREF99TM: "POINT (515100 6554200)",
      WGS84: "POINT (15.26379758753444 59.126788827407)",
    },
  },
  Nkt: {
    AdvertisedShortLocationName: "Näverkärret",
    Geometry: {
      SWEREF99TM: "POINT (529701 6614251)",
      WGS84: "POINT (15.527176207970545 59.66526139032396)",
    },
  },
  Nbr: {
    AdvertisedShortLocationName: "Nybybruk",
    Geometry: {
      SWEREF99TM: "POINT (582803 6588118)",
      WGS84: "POINT (16.459282015508744 59.423495961324484)",
    },
  },
  Nbt: {
    AdvertisedShortLocationName: "Norra bantorget",
    Geometry: {
      SWEREF99TM: "POINT (673188 6581494)",
      WGS84: "POINT (18.044917606512314 59.33660445660729)",
    },
  },
  Nvk: {
    AdvertisedShortLocationName: "Norrviken",
    Geometry: {
      SWEREF99TM: "POINT (665733 6594848)",
      WGS84: "POINT (17.924356611552174 59.459362194827804)",
    },
  },
  Mö: {
    AdvertisedShortLocationName: "Mölnbo",
    Geometry: {
      SWEREF99TM: "POINT (638726 6547837)",
      WGS84: "POINT (17.418288054007117 59.04736118461918)",
    },
  },
  Nst: {
    AdvertisedShortLocationName: "Stockholms norra",
    Geometry: {
      SWEREF99TM: "POINT (672483 6582680)",
      WGS84: "POINT (18.033491804221473 59.34752869986927)",
    },
  },
  Ngd: {
    AdvertisedShortLocationName: "Nynäsgård",
    Geometry: {
      SWEREF99TM: "POINT (669443 6534174)",
      WGS84: "POINT (17.942529489313543 58.913736221868994)",
    },
  },
  Nr: {
    AdvertisedShortLocationName: "Norrköping",
    Geometry: {
      SWEREF99TM: "POINT (568681 6495702)",
      WGS84: "POINT (16.181679029700245 58.596266416740335)",
    },
  },
  Ms: {
    AdvertisedShortLocationName: "Mosås",
    Geometry: {
      SWEREF99TM: "POINT (509290 6562086)",
      WGS84: "POINT (15.162633055324918 59.19777465022302)",
    },
  },
  Nh: {
    AdvertisedShortLocationName: "Norsholm",
    Geometry: {
      SWEREF99TM: "POINT (556637 6485560)",
      WGS84: "POINT (15.971970998843487 58.506928603690554)",
    },
  },
  Nks: {
    AdvertisedShortLocationName: "Nyköping södra",
    Geometry: {
      SWEREF99TM: "POINT (615777 6513679)",
      WGS84: "POINT (17.000752309621905 58.747626269926464)",
    },
  },
  Nkv: {
    AdvertisedShortLocationName: "Nykvarn",
    Geometry: {
      SWEREF99TM: "POINT (638984 6562488)",
      WGS84: "POINT (17.432080395575703 59.1787322753928)",
    },
  },
  Msj: {
    AdvertisedShortLocationName: "Malmsjö",
    Geometry: {
      SWEREF99TM: "POINT (657981 6560482)",
      WGS84: "POINT (17.762635393655522 59.15409762975881)",
    },
  },
  Nk: {
    AdvertisedShortLocationName: "Nyköping",
    Geometry: {
      SWEREF99TM: "POINT (615535 6514673)",
      WGS84: "POINT (16.997084943083745 58.75661275367473)",
    },
  },
  Nba: {
    AdvertisedShortLocationName: "Nyboda",
    Geometry: {
      SWEREF99TM: "POINT (672021 6577352)",
      WGS84: "POINT (18.021133062535558 59.299937470441385)",
    },
  },
  Myn: {
    AdvertisedShortLocationName: "Myrbacken",
    Geometry: {
      SWEREF99TM: "POINT (658020 6620679)",
      WGS84: "POINT (17.80770264584468 59.69401662762307)",
    },
  },
  Må: {
    AdvertisedShortLocationName: "Morgongåva",
    Geometry: {
      SWEREF99TM: "POINT (609611 6645563)",
      WGS84: "POINT (16.96136180078778 59.9329057877021)",
    },
  },
  Nsj: {
    AdvertisedShortLocationName: "Nyckelsjön",
    Geometry: {
      SWEREF99TM: "POINT (606969 6551327)",
      WGS84: "POINT (16.866786287292225 59.08782741209608)",
    },
  },
  Oxd: {
    AdvertisedShortLocationName: "Oxelösund",
    Geometry: {
      SWEREF99TM: "POINT (621785 6505271)",
      WGS84: "POINT (17.099949191978347 58.67051223945652)",
    },
  },
  Omb: {
    AdvertisedShortLocationName: "Ombenning",
    Geometry: {
      SWEREF99TM: "POINT (551709 6649648)",
      WGS84: "POINT (15.926542015088128 59.98091709980214)",
    },
  },
  Rlå: {
    AdvertisedShortLocationName: "Rällså",
    Geometry: {
      SWEREF99TM: "POINT (505473 6628805)",
      WGS84: "POINT (15.097524794485626 59.796973795235765)",
    },
  },
  Rmn: {
    AdvertisedShortLocationName: "Ramnäs",
    Geometry: {
      SWEREF99TM: "POINT (567838 6626390)",
      WGS84: "POINT (16.207883205469344 59.76977622087099)",
    },
  },
  Rs: {
    AdvertisedShortLocationName: "Rosersberg",
    Geometry: {
      SWEREF99TM: "POINT (662607 6608649)",
      WGS84: "POINT (17.879821813887027 59.58435991542243)",
    },
  },
  Rt: {
    AdvertisedShortLocationName: "Ransta",
    Geometry: {
      SWEREF99TM: "POINT (591990 6631411)",
      WGS84: "POINT (16.63995226743637 59.81019146076976)",
    },
  },
  Nyc: {
    AdvertisedShortLocationName: "Nynäshamn",
    Geometry: {
      SWEREF99TM: "POINT (669920 6532689)",
      WGS84: "POINT (17.949664205892567 58.90022886342229)",
    },
  },
  Rke: {
    AdvertisedShortLocationName: "Rekarne",
    Geometry: {
      SWEREF99TM: "POINT (576073 6588438)",
      WGS84: "POINT (16.34082857433631 59.42764005935918)",
    },
  },
  R: {
    AdvertisedShortLocationName: "Rotebro",
    Geometry: {
      SWEREF99TM: "POINT (665141 6596623)",
      WGS84: "POINT (17.915298260190166 59.475514234039295)",
    },
  },
  På: {
    AdvertisedShortLocationName: "Pålsboda",
    Geometry: {
      SWEREF99TM: "POINT (519501 6547214)",
      WGS84: "POINT (15.340060316891568 59.063873128113606)",
    },
  },
  Sde: {
    AdvertisedShortLocationName: "Sköldinge",
    Geometry: {
      SWEREF99TM: "POINT (583467 6544328)",
      WGS84: "POINT (16.45415369808121 59.03024423038165)",
    },
  },
  Sam: {
    AdvertisedShortLocationName: "Samnan",
    Geometry: {
      SWEREF99TM: "POINT (648462 6644534)",
      WGS84: "POINT (17.655060740975056 59.911514935381284)",
    },
  },
  Sci: {
    AdvertisedShortLocationName: "Stockholm City",
    Geometry: {
      SWEREF99TM: "POINT (674343 6581075)",
      WGS84: "POINT (18.06485202220192 59.332371652020754)",
    },
  },
  Sbl: {
    AdvertisedShortLocationName: "Skärblacka",
    Geometry: {
      SWEREF99TM: "POINT (552942 6493105)",
      WGS84: "POINT (15.910323851139843 58.57514825981841)",
    },
  },
  Rus: {
    AdvertisedShortLocationName: "Runsala",
    Geometry: {
      SWEREF99TM: "POINT (508831.7 6525473.4)",
      WGS84: "POINT (15.15314102084493 58.86898253815527)",
    },
  },
  Rön: {
    AdvertisedShortLocationName: "Rönninge",
    Geometry: {
      SWEREF99TM: "POINT (657205 6564844)",
      WGS84: "POINT (17.75222820335924 59.19351266247038)",
    },
  },
  Sba: {
    AdvertisedShortLocationName: "Spannarboda",
    Geometry: {
      SWEREF99TM: "POINT (528668 6604334)",
      WGS84: "POINT (15.507496877379213 59.57628476058226)",
    },
  },
  Ryb: {
    AdvertisedShortLocationName: "Ryssjöbrink",
    Geometry: {
      SWEREF99TM: "POINT (633358 6565713)",
      WGS84: "POINT (17.335702926296598 59.20947392236341)",
    },
  },
  Sgs: {
    AdvertisedShortLocationName: "Strängnäs",
    Geometry: {
      SWEREF99TM: "POINT (615260 6583042)",
      WGS84: "POINT (17.028206598634636 59.3702999656302)",
    },
  },
  Skg: {
    AdvertisedShortLocationName: "Skogås",
    Geometry: {
      SWEREF99TM: "POINT (679983 6568735)",
      WGS84: "POINT (18.15357186741919 59.219356858542994)",
    },
  },
  Sii: {
    AdvertisedShortLocationName: "Silinge",
    Geometry: {
      SWEREF99TM: "POINT (589965 6542478)",
      WGS84: "POINT (16.566558595964707 59.01231713473943)",
    },
  },
  Skb: {
    AdvertisedShortLocationName: "Skinnskatteberg",
    Geometry: {
      SWEREF99TM: "POINT (538770 6632973)",
      WGS84: "POINT (15.6915987074977 59.83261999016361)",
    },
  },
  Shr: {
    AdvertisedShortLocationName: "Surahammar",
    Geometry: {
      SWEREF99TM: "POINT (568627 6619365)",
      WGS84: "POINT (16.21962848329636 59.70657891121106)",
    },
  },
  Sh: {
    AdvertisedShortLocationName: "Stjärnhov",
    Geometry: {
      SWEREF99TM: "POINT (614920 6551010)",
      WGS84: "POINT (17.00528336867815 59.08291261404693)",
    },
  },
  Skby: {
    AdvertisedShortLocationName: "Skavstaby",
    Geometry: {
      SWEREF99TM: "POINT (663677 6604933)",
      WGS84: "POINT (17.895877592113234 59.550615770046676)",
    },
  },
  Smt: {
    AdvertisedShortLocationName: "Simonstorp",
    Geometry: {
      SWEREF99TM: "POINT (566886 6516570)",
      WGS84: "POINT (16.15699657244143 58.78392561801097)",
    },
  },
  Sta: {
    AdvertisedShortLocationName: "Stuvsta",
    Geometry: {
      SWEREF99TM: "POINT (670885 6572252)",
      WGS84: "POINT (17.997188639671837 59.25466170156521)",
    },
  },
  Snl: {
    AdvertisedShortLocationName: "Skanlog",
    Geometry: {
      SWEREF99TM: "POINT (582054 6586100)",
      WGS84: "POINT (16.445314694769007 59.405526758583285)",
    },
  },
  Sr: {
    AdvertisedShortLocationName: "Storå",
    Geometry: {
      SWEREF99TM: "POINT (507917 6620113)",
      WGS84: "POINT (15.140746230592448 59.718883901339424)",
    },
  },
  Skm: {
    AdvertisedShortLocationName: "Stenkumla",
    Geometry: {
      SWEREF99TM: "POINT (502504.3 6535755)",
      WGS84: "POINT (15.043540496106248 58.96140257422909)",
    },
  },
  So: {
    AdvertisedShortLocationName: "Solna",
    Geometry: {
      SWEREF99TM: "POINT (671076 6584623)",
      WGS84: "POINT (18.010330020813157 59.365525934131234)",
    },
  },
  Ssa: {
    AdvertisedShortLocationName: "Sjösa",
    Geometry: {
      SWEREF99TM: "POINT (621192 6517697)",
      WGS84: "POINT (17.096430406735053 58.78220230088201)",
    },
  },
  Sl: {
    AdvertisedShortLocationName: "Sala",
    Geometry: {
      SWEREF99TM: "POINT (589691 6644223)",
      WGS84: "POINT (16.60451664044467 59.925695407493045)",
    },
  },
  Skv: {
    AdvertisedShortLocationName: "Skebokvarn",
    Geometry: {
      SWEREF99TM: "POINT (598495 6548595)",
      WGS84: "POINT (16.717755282048962 59.06534638848358)",
    },
  },
  Spå: {
    AdvertisedShortLocationName: "Spånga",
    Geometry: {
      SWEREF99TM: "POINT (664563 6586405)",
      WGS84: "POINT (17.897261239158393 59.384100766747025)",
    },
  },
  Sst: {
    AdvertisedShortLocationName: "Stockholms Södra",
    Geometry: {
      SWEREF99TM: "POINT (674193 6578955)",
      WGS84: "POINT (18.060508539616663 59.313422739013326)",
    },
  },
  Skrp: {
    AdvertisedShortLocationName: "Skogstorp",
    Geometry: {
      SWEREF99TM: "POINT (583829 6577931)",
      WGS84: "POINT (16.4733846209059 59.331842555940774)",
    },
  },
  Slg: {
    AdvertisedShortLocationName: "Sällinge",
    Geometry: {
      SWEREF99TM: "POINT (527183 6598027)",
      WGS84: "POINT (15.480402696805758 59.51974983820795)",
    },
  },
  Sol: {
    AdvertisedShortLocationName: "Sollentuna",
    Geometry: {
      SWEREF99TM: "POINT (667293 6591402)",
      WGS84: "POINT (17.949147258050402 59.42783962168611)",
    },
  },
  Sp: {
    AdvertisedShortLocationName: "Sparreholm",
    Geometry: {
      SWEREF99TM: "POINT (604819 6549930)",
      WGS84: "POINT (16.828620214429925 59.07582222311673)",
    },
  },
  Ssh: {
    AdvertisedShortLocationName: "Strömsholm",
    Geometry: {
      SWEREF99TM: "POINT (571767 6596523)",
      WGS84: "POINT (16.267670411516967 59.50098262292828)",
    },
  },
  Snt: {
    AdvertisedShortLocationName: "Snyten",
    Geometry: {
      SWEREF99TM: "POINT (557116 6650923)",
      WGS84: "POINT (16.023763005988446 59.991648546326765)",
    },
  },
  Skms: {
    AdvertisedShortLocationName: "Skymossen",
    Geometry: {
      SWEREF99TM: "POINT (505104 6542280)",
      WGS84: "POINT (15.088890430516072 59.0199782095557)",
    },
  },
  Sod: {
    AdvertisedShortLocationName: "Sthlm Odenplan",
    Geometry: {
      SWEREF99TM: "POINT (673161 6582367)",
      WGS84: "POINT (18.04514491266581 59.34444415196133)",
    },
  },
  Spn: {
    AdvertisedShortLocationName: "Stolpstugan",
    Geometry: {
      SWEREF99TM: "POINT (577157 6542175)",
      WGS84: "POINT (16.34350394721599 59.012100756745205)",
    },
  },
  Srv: {
    AdvertisedShortLocationName: "Storvreta",
    Geometry: {
      SWEREF99TM: "POINT (651119 6649635)",
      WGS84: "POINT (17.70624373515717 59.95630278535516)",
    },
  },
  Ssä: {
    AdvertisedShortLocationName: "Segersäng",
    Geometry: {
      SWEREF99TM: "POINT (667991 6547018)",
      WGS84: "POINT (17.927110595566532 59.029504897567406)",
    },
  },
  Söö: {
    AdvertisedShortLocationName: "Södertälje S",
    Geometry: {
      SWEREF99TM: "POINT (651385 6561240)",
      WGS84: "POINT (17.647961677699406 59.163297667082155)",
    },
  },
  Söc: {
    AdvertisedShortLocationName: "Södertälje C",
    Geometry: {
      SWEREF99TM: "POINT (650142 6564295)",
      WGS84: "POINT (17.628350245585395 59.19114492012457)",
    },
  },
  Södy: {
    AdvertisedShortLocationName: "Söderby",
    Geometry: {
      SWEREF99TM: "POINT (659554 6565262)",
      WGS84: "POINT (17.793602828281763 59.196385520619955)",
    },
  },
  Söka: {
    AdvertisedShortLocationName: "Södertälje kanal",
    Geometry: {
      SWEREF99TM: "POINT (651057 6563613)",
      WGS84: "POINT (17.64387541309818 59.184702201969614)",
    },
  },
  Söu: {
    AdvertisedShortLocationName: "Södertälje Syd",
    Geometry: {
      SWEREF99TM: "POINT (651243 6561248)",
      WGS84: "POINT (17.645486487135074 59.163419995708246)",
    },
  },
  Tn: {
    AdvertisedShortLocationName: "Tannefors",
    Geometry: {
      SWEREF99TM: "POINT (538591 6473480)",
      WGS84: "POINT (15.660269524864816 58.400411375265186)",
    },
  },
  Tot: {
    AdvertisedShortLocationName: "Toresta",
    Geometry: {
      SWEREF99TM: "POINT (645591 6602293)",
      WGS84: "POINT (17.574479262092098 59.53361652325665)",
    },
  },
  Stö: {
    AdvertisedShortLocationName: "Strångsjö",
    Geometry: {
      SWEREF99TM: "POINT (569013 6530217)",
      WGS84: "POINT (16.198003964139417 58.90612562623948)",
    },
  },
  Tb: {
    AdvertisedShortLocationName: "Tillberga",
    Geometry: {
      SWEREF99TM: "POINT (591435 6617720)",
      WGS84: "POINT (16.62408747664672 59.68742415596676)",
    },
  },
  Tmö: {
    AdvertisedShortLocationName: "Tomteboda övre",
    Geometry: {
      SWEREF99TM: "POINT (671495 6583032)",
      WGS84: "POINT (18.016423862998142 59.351088102413044)",
    },
  },
  Sub: {
    AdvertisedShortLocationName: "Sundbyberg",
    Geometry: {
      SWEREF99TM: "POINT (668912 6584003)",
      WGS84: "POINT (17.971824561472314 59.360838317032425)",
    },
  },
  Säy: {
    AdvertisedShortLocationName: "Säby",
    Geometry: {
      SWEREF99TM: "POINT (651496 6635465)",
      WGS84: "POINT (17.702637227405763 59.829068148399806)",
    },
  },
  Söd: {
    AdvertisedShortLocationName: "Södertälje hamn",
    Geometry: {
      SWEREF99TM: "POINT (651279 6562834)",
      WGS84: "POINT (17.64721545709819 59.17763490847209)",
    },
  },
  Tm: {
    AdvertisedShortLocationName: "Tomteboda bangård",
    Geometry: {
      SWEREF99TM: "POINT (671743 6582437)",
      WGS84: "POINT (18.020304631522645 59.3456514379661)",
    },
  },
  Tba: {
    AdvertisedShortLocationName: "Tystberga",
    Geometry: {
      SWEREF99TM: "POINT (629016 6525340)",
      WGS84: "POINT (17.236070652701297 58.848522060712575)",
    },
  },
  wAll: {
    AdvertisedShortLocationName: "Alléparken",
    Geometry: {
      SWEREF99TM: "POINT (669195 6580426)",
      WGS84: "POINT (17.973987618728962 59.32864612844465)",
    },
  },
  Tåd: {
    AdvertisedShortLocationName: "Trångsund",
    Geometry: {
      SWEREF99TM: "POINT (678632 6569613)",
      WGS84: "POINT (18.13066308690351 59.2278010926431)",
    },
  },
  Tu: {
    AdvertisedShortLocationName: "Tumba",
    Geometry: {
      SWEREF99TM: "POINT (662096 6565716)",
      WGS84: "POINT (17.83838552404354 59.199494369094495)",
    },
  },
  Upv: {
    AdvertisedShortLocationName: "Upplands Väsby",
    Geometry: {
      SWEREF99TM: "POINT (664013 6601588)",
      WGS84: "POINT (17.899233873234227 59.52048495324485)",
    },
  },
  Vdv: {
    AdvertisedShortLocationName: "Vedevåg",
    Geometry: {
      SWEREF99TM: "POINT (515971 6598391)",
      WGS84: "POINT (15.282285132489159 59.52359597557751)",
    },
  },
  wKlv: {
    AdvertisedShortLocationName: "Klövervägen",
    Geometry: {
      SWEREF99TM: "POINT (669208 6579986)",
      WGS84: "POINT (17.973870734398464 59.32469495893034)",
    },
  },
  Udl: {
    AdvertisedShortLocationName: "Ulriksdal",
    Geometry: {
      SWEREF99TM: "POINT (670491 6586185)",
      WGS84: "POINT (18.00129058481793 59.3797706297159)",
    },
  },
  wGåh: {
    AdvertisedShortLocationName: "Gåshaga",
    Geometry: {
      SWEREF99TM: "POINT (683482 6584223)",
      WGS84: "POINT (18.22790226296775 59.356723541320626)",
    },
  },
  U: {
    AdvertisedShortLocationName: "Uppsala",
    Geometry: {
      SWEREF99TM: "POINT (648345 6638550)",
      WGS84: "POINT (17.64869381436992 59.85788169781748)",
    },
  },
  Una: {
    AdvertisedShortLocationName: "Uppsala norra",
    Geometry: {
      SWEREF99TM: "POINT (646262 6639501)",
      WGS84: "POINT (17.612216446551198 59.86715452731721)",
    },
  },
  Ts: {
    AdvertisedShortLocationName: "Tungelsta",
    Geometry: {
      SWEREF99TM: "POINT (674467 6555486)",
      WGS84: "POINT (18.046493774584693 59.10284954389717)",
    },
  },
  Ttu: {
    AdvertisedShortLocationName: "Tortuna",
    Geometry: {
      SWEREF99TM: "POINT (596928 6615899)",
      WGS84: "POINT (16.720767162038683 59.66983642782106)",
    },
  },
  Täl: {
    AdvertisedShortLocationName: "Tälle",
    Geometry: {
      SWEREF99TM: "POINT (501091 6545639)",
      WGS84: "POINT (15.019017352589032 59.05017312357227)",
    },
  },
  wGåb: {
    AdvertisedShortLocationName: "Gåshaga brygga",
    Geometry: {
      SWEREF99TM: "POINT (683822 6584256)",
      WGS84: "POINT (18.233900831405908 59.35687136347078)",
    },
  },
  wHöb: {
    AdvertisedShortLocationName: "Högberga",
    Geometry: {
      SWEREF99TM: "POINT (681615 6582752)",
      WGS84: "POINT (18.193876545373673 59.3443423712286)",
    },
  },
  Uts: {
    AdvertisedShortLocationName: "Utsikten",
    Geometry: {
      SWEREF99TM: "POINT (665389 6566261)",
      WGS84: "POINT (17.89637730060255 59.2031118281726)",
    },
  },
  wHlt: {
    AdvertisedShortLocationName: "Höglandstorget",
    Geometry: {
      SWEREF99TM: "POINT (667275 6579764)",
      WGS84: "POINT (17.939777900735383 59.323474134169345)",
    },
  },
  wBag: {
    AdvertisedShortLocationName: "Baggeby",
    Geometry: {
      SWEREF99TM: "POINT (678141 6583980)",
      WGS84: "POINT (18.133905338031912 59.35683449080269)",
    },
  },
  wAga: {
    AdvertisedShortLocationName: "Aga",
    Geometry: {
      SWEREF99TM: "POINT (679479 6582868)",
      WGS84: "POINT (18.15647602526266 59.346296449912714)",
    },
  },
  Vhe: {
    AdvertisedShortLocationName: "Västerhaninge",
    Geometry: {
      SWEREF99TM: "POINT (677618 6557882)",
      WGS84: "POINT (18.103366450191004 59.12303313879594)",
    },
  },
  wBod: {
    AdvertisedShortLocationName: "Bodal",
    Geometry: {
      SWEREF99TM: "POINT (678416 6583643)",
      WGS84: "POINT (18.13845561184383 59.35369647573072)",
    },
  },
  Vga: {
    AdvertisedShortLocationName: "Vega",
    Geometry: {
      SWEREF99TM: "POINT (679142 6565064.8)",
      WGS84: "POINT (18.135840879679357 59.186802676715665)",
    },
  },
  Vhd: {
    AdvertisedShortLocationName: "Vagnhärad",
    Geometry: {
      SWEREF99TM: "POINT (643765 6536707)",
      WGS84: "POINT (17.49878397536677 58.94583470022704)",
    },
  },
  wAlv: {
    AdvertisedShortLocationName: "Alvik",
    Geometry: {
      SWEREF99TM: "POINT (669627 6580979)",
      WGS84: "POINT (17.982003937832268 59.33343210533686)",
    },
  },
  wKäp: {
    AdvertisedShortLocationName: "Käppala",
    Geometry: {
      SWEREF99TM: "POINT (682924 6583742)",
      WGS84: "POINT (18.217695117662636 59.35265328738359)",
    },
  },
  wBvi: {
    AdvertisedShortLocationName: "Brevik",
    Geometry: {
      SWEREF99TM: "POINT (682149 6583230)",
      WGS84: "POINT (18.20365448512078 59.34839800536344)",
    },
  },
  Tul: {
    AdvertisedShortLocationName: "Tullinge",
    Geometry: {
      SWEREF99TM: "POINT (665884 6566571)",
      WGS84: "POINT (17.90526941954288 59.20569892752887)",
    },
  },
  wKoa: {
    AdvertisedShortLocationName: "Kottla",
    Geometry: {
      SWEREF99TM: "POINT (680828 6582722)",
      WGS84: "POINT (18.1800359947369 59.34441137966856)",
    },
  },
  wSkr: {
    AdvertisedShortLocationName: "Skärsätra",
    Geometry: {
      SWEREF99TM: "POINT (680279 6582579)",
      WGS84: "POINT (18.170278855757868 59.343364096459055)",
    },
  },
  wTov: {
    AdvertisedShortLocationName: "Torsvik",
    Geometry: {
      SWEREF99TM: "POINT (677200 6584504)",
      WGS84: "POINT (18.117810788530836 59.36192953892423)",
    },
  },
  xAre: {
    AdvertisedShortLocationName: "Arninge",
    Geometry: {
      SWEREF99TM: "POINT (678018 6595323)",
      WGS84: "POINT (18.141155544890534 59.45859480621608)",
    },
  },
  xEsa: {
    AdvertisedShortLocationName: "Ensta",
    Geometry: {
      SWEREF99TM: "POINT (673661 6594390)",
      WGS84: "POINT (18.06364723830495 59.45205241880546)",
    },
  },
  xF: {
    AdvertisedShortLocationName: "Faringe",
    Geometry: {
      SWEREF99TM: "POINT (674105 6646599)",
      WGS84: "POINT (18.114658699900897 59.920006289693745)",
    },
  },
  xAlp: {
    AdvertisedShortLocationName: "Altorp",
    Geometry: {
      SWEREF99TM: "POINT (674394 6589833)",
      WGS84: "POINT (18.07284721681037 59.410885681003634)",
    },
  },
  xEnb: {
    AdvertisedShortLocationName: "Enebyberg",
    Geometry: {
      SWEREF99TM: "POINT (673083 6591446)",
      WGS84: "POINT (18.051087404118764 59.42589122358702)",
    },
  },
  xFb: {
    AdvertisedShortLocationName: "Funbo",
    Geometry: {
      SWEREF99TM: "POINT (660154 6638106)",
      WGS84: "POINT (17.858906554137764 59.84949391758602)",
    },
  },
  Vån: {
    AdvertisedShortLocationName: "Västerås norra",
    Geometry: {
      SWEREF99TM: "POINT (589236 6613051)",
      WGS84: "POINT (16.583068638375146 59.645991203887846)",
    },
  },
  Vme: {
    AdvertisedShortLocationName: "VME",
    Geometry: {
      SWEREF99TM: "POINT (582093 6586133)",
      WGS84: "POINT (16.446014019975404 59.405815401145425)",
    },
  },
  Vr: {
    AdvertisedShortLocationName: "Vingåker",
    Geometry: {
      SWEREF99TM: "POINT (550295 6545070)",
      WGS84: "POINT (15.876508044889901 59.04210176467909)",
    },
  },
  xDje: {
    AdvertisedShortLocationName: "Djursholms Ekeby",
    Geometry: {
      SWEREF99TM: "POINT (673517 6590027)",
      WGS84: "POINT (18.057576876345586 59.41298784568663)",
    },
  },
  xDjö: {
    AdvertisedShortLocationName: "Djursholms Ösby",
    Geometry: {
      SWEREF99TM: "POINT (673613 6588236)",
      WGS84: "POINT (18.057816910970494 59.39688784270378)",
    },
  },
  wLab: {
    AdvertisedShortLocationName: "Larsberg",
    Geometry: {
      SWEREF99TM: "POINT (678873 6583309)",
      WGS84: "POINT (18.146203151896497 59.350508075964285)",
    },
  },
  Vn: {
    AdvertisedShortLocationName: "Värtan",
    Geometry: {
      SWEREF99TM: "POINT (675956 6583235)",
      WGS84: "POINT (18.094923050232673 59.3510713152609)",
    },
  },
  Vsg: {
    AdvertisedShortLocationName: "Valskog",
    Geometry: {
      SWEREF99TM: "POINT (553946 6589829)",
      WGS84: "POINT (15.951253655535792 59.443550861026786)",
    },
  },
  wÅlG: {
    AdvertisedShortLocationName: "Ålstens Gård",
    Geometry: {
      SWEREF99TM: "POINT (667956 6579464)",
      WGS84: "POINT (17.951494334883026 59.320513351606344)",
    },
  },
  xAlg: {
    AdvertisedShortLocationName: "Almunge",
    Geometry: {
      SWEREF99TM: "POINT (670409 6641513)",
      WGS84: "POINT (18.044469400578777 59.87594550761922)",
    },
  },
  Vre: {
    AdvertisedShortLocationName: "Vrena",
    Geometry: {
      SWEREF99TM: "POINT (598299 6525983)",
      WGS84: "POINT (16.704290020129495 58.86241050436821)",
    },
  },
  wSms: {
    AdvertisedShortLocationName: "Smedslätten",
    Geometry: {
      SWEREF99TM: "POINT (668649 6579546)",
      WGS84: "POINT (17.963717645341116 59.32097258620574)",
    },
  },
  wNob: {
    AdvertisedShortLocationName: "Nockeby",
    Geometry: {
      SWEREF99TM: "POINT (666042 6580298)",
      WGS84: "POINT (17.918552137083967 59.32874994453668)",
    },
  },
  Vå: {
    AdvertisedShortLocationName: "Västerås",
    Geometry: {
      SWEREF99TM: "POINT (587636 6608747)",
      WGS84: "POINT (16.552911395701365 59.60769591346944)",
    },
  },
  wOll: {
    AdvertisedShortLocationName: "Olovslund",
    Geometry: {
      SWEREF99TM: "POINT (666977 6580253)",
      WGS84: "POINT (17.934927046911895 59.32797762248713)",
    },
  },
  wÅls: {
    AdvertisedShortLocationName: "Ålstensgatan",
    Geometry: {
      SWEREF99TM: "POINT (668187 6579789)",
      WGS84: "POINT (17.955800675611837 59.323336105347906)",
    },
  },
  xBvv: {
    AdvertisedShortLocationName: "Bråvallavägen",
    Geometry: {
      SWEREF99TM: "POINT (673718 6589201)",
      WGS84: "POINT (18.06044409048147 59.40549795979893)",
    },
  },
  xEkg: {
    AdvertisedShortLocationName: "Ekskogen",
    Geometry: {
      SWEREF99TM: "POINT (681862 6615634)",
      WGS84: "POINT (18.226243736528897 59.639050979118394)",
    },
  },
  Vso: {
    AdvertisedShortLocationName: "Virsbo",
    Geometry: {
      SWEREF99TM: "POINT (560711 6637637)",
      WGS84: "POINT (16.084287806932494 59.871855109392925)",
    },
  },
  wRos: {
    AdvertisedShortLocationName: "Ropsten",
    Geometry: {
      SWEREF99TM: "POINT (676424 6584043)",
      WGS84: "POINT (18.10380268642855 59.35812116418682)",
    },
  },
  Våv: {
    AdvertisedShortLocationName: "Västerås västra",
    Geometry: {
      SWEREF99TM: "POINT (585115 6607342)",
      WGS84: "POINT (16.50769251598782 59.59560523584816)",
    },
  },
  xErn: {
    AdvertisedShortLocationName: "Ervalla NBVJ",
    Geometry: {
      SWEREF99TM: "POINT (514052 6587551)",
      WGS84: "POINT (15.247654109647817 59.426322622345715)",
    },
  },
  wNot: {
    AdvertisedShortLocationName: "Nockeby torg",
    Geometry: {
      SWEREF99TM: "POINT (666564 6580363)",
      WGS84: "POINT (17.927763741891816 59.32912728347937)",
    },
  },
  xB: {
    AdvertisedShortLocationName: "Bärby",
    Geometry: {
      SWEREF99TM: "POINT (657686 6638852)",
      WGS84: "POINT (17.815478304564717 59.85713295711729)",
    },
  },
  xBäl: {
    AdvertisedShortLocationName: "Bällsta",
    Geometry: {
      SWEREF99TM: "POINT (673774 6602296)",
      WGS84: "POINT (18.072075530118497 59.52289946609442)",
    },
  },
  xEvb: {
    AdvertisedShortLocationName: "Erstaviksbadet",
    Geometry: {
      SWEREF99TM: "POINT (687190 6575060)",
      WGS84: "POINT (18.28506986875821 59.27294412122426)",
    },
  },
  xFl: {
    AdvertisedShortLocationName: "Fyrislund",
    Geometry: {
      SWEREF99TM: "POINT (650213 6638686)",
      WGS84: "POINT (17.68210280746533 59.85842702610516)",
    },
  },
  xPh: {
    AdvertisedShortLocationName: "Pershyttan",
    Geometry: {
      SWEREF99TM: "POINT (500400 6595134)",
      WGS84: "POINT (15.007063891912594 59.494652613011944)",
    },
  },
  xHed: {
    AdvertisedShortLocationName: "Henriksdal",
    Geometry: {
      SWEREF99TM: "POINT (676913 6578951)",
      WGS84: "POINT (18.108213766779954 59.3122566315866)",
    },
  },
  xJbn: {
    AdvertisedShortLocationName: "Jagbacken",
    Geometry: {
      SWEREF99TM: "POINT (624558 6569712)",
      WGS84: "POINT (17.18400239656597 59.24803578067138)",
    },
  },
  xRdb: {
    AdvertisedShortLocationName: "Rydbo",
    Geometry: {
      SWEREF99TM: "POINT (680453 6596199)",
      WGS84: "POINT (18.18478441087183 59.465410150469886)",
    },
  },
  xGhn: {
    AdvertisedShortLocationName: "Gripsholmsviken",
    Geometry: {
      SWEREF99TM: "POINT (625883 6570823)",
      WGS84: "POINT (17.20785999454085 59.257613717601636)",
    },
  },
  xGpf: {
    AdvertisedShortLocationName: "Galoppfältet",
    Geometry: {
      SWEREF99TM: "POINT (674866 6593862)",
      WGS84: "POINT (18.084438120209207 59.446818060645725)",
    },
  },
  xLgn: {
    AdvertisedShortLocationName: "Läggesta nedre",
    Geometry: {
      SWEREF99TM: "POINT (624004 6569487)",
      WGS84: "POINT (17.174168067621 59.24617924200534)",
    },
  },
  xLöt: {
    AdvertisedShortLocationName: "Löt",
    Geometry: {
      SWEREF99TM: "POINT (664819 6640168)",
      WGS84: "POINT (17.943689544134624 59.86615226768196)",
    },
  },
  xMöb: {
    AdvertisedShortLocationName: "Mörby",
    Geometry: {
      SWEREF99TM: "POINT (673034 6587677)",
      WGS84: "POINT (18.047185484418566 59.39211340077091)",
    },
  },
  xNbp: {
    AdvertisedShortLocationName: "Näsbypark",
    Geometry: {
      SWEREF99TM: "POINT (675574 6592038)",
      WGS84: "POINT (18.09540968647935 59.430167197571265)",
    },
  },
  xJ: {
    AdvertisedShortLocationName: "Järle",
    Geometry: {
      SWEREF99TM: "POINT (508572 6591757)",
      WGS84: "POINT (15.151242964604952 59.46423990767993)",
    },
  },
  xKår: {
    AdvertisedShortLocationName: "Kårsta",
    Geometry: {
      SWEREF99TM: "POINT (684085 6617709)",
      WGS84: "POINT (18.267415831880122 59.65667839685008)",
    },
  },
  xLbr: {
    AdvertisedShortLocationName: "Länna bruk",
    Geometry: {
      SWEREF99TM: "POINT (666280 6641465)",
      WGS84: "POINT (17.9707806436961 59.87719770393878)",
    },
  },
  xLhl: {
    AdvertisedShortLocationName: "Lahäll",
    Geometry: {
      SWEREF99TM: "POINT (674397 6591300)",
      WGS84: "POINT (18.074093088593884 59.42403923512258)",
    },
  },
  xLna: {
    AdvertisedShortLocationName: "Länna",
    Geometry: {
      SWEREF99TM: "POINT (665631 6640838)",
      WGS84: "POINT (17.95870357923155 59.871835839420825)",
    },
  },
  xNka: {
    AdvertisedShortLocationName: "Nacka",
    Geometry: {
      SWEREF99TM: "POINT (678192 6578377)",
      WGS84: "POINT (18.130172547252563 59.3065721897222)",
    },
  },
  xMnb: {
    AdvertisedShortLocationName: "Molnby",
    Geometry: {
      SWEREF99TM: "POINT (674338 6606172)",
      WGS84: "POINT (18.085207687052996 59.55742081910097)",
    },
  },
  xHhn: {
    AdvertisedShortLocationName: "Hjorthagen",
    Geometry: {
      SWEREF99TM: "POINT (625552 6570708)",
      WGS84: "POINT (17.201992968372984 59.256680040461546)",
    },
  },
  xN: {
    AdvertisedShortLocationName: "Nora stad",
    Geometry: {
      SWEREF99TM: "POINT (502379 6597532)",
      WGS84: "POINT (15.042039186412211 59.51617995348818)",
    },
  },
  xGa: {
    AdvertisedShortLocationName: "Gunsta",
    Geometry: {
      SWEREF99TM: "POINT (658755 6638414)",
      WGS84: "POINT (17.834203816484763 59.852795645294066)",
    },
  },
  xHgä: {
    AdvertisedShortLocationName: "Hägernäs",
    Geometry: {
      SWEREF99TM: "POINT (677133 6594427)",
      WGS84: "POINT (18.124824565553563 59.450934820674334)",
    },
  },
  xLm: {
    AdvertisedShortLocationName: "Lilla Mon",
    Geometry: {
      SWEREF99TM: "POINT (507005 6592971)",
      WGS84: "POINT (15.123634971221357 59.47517066226475)",
    },
  },
  xMfd: {
    AdvertisedShortLocationName: "Mariefred",
    Geometry: {
      SWEREF99TM: "POINT (626510 6570972)",
      WGS84: "POINT (17.218934355225702 59.25876387594888)",
    },
  },
  xMl: {
    AdvertisedShortLocationName: "Marielund",
    Geometry: {
      SWEREF99TM: "POINT (661082 6637404)",
      WGS84: "POINT (17.8749046825506 59.842837837390014)",
    },
  },
  xNbe: {
    AdvertisedShortLocationName: "Näsbyallé",
    Geometry: {
      SWEREF99TM: "POINT (675008 6591696)",
      WGS84: "POINT (18.085168459974835 59.4273364078845)",
    },
  },
  xHön: {
    AdvertisedShortLocationName: "Härnön",
    Geometry: {
      SWEREF99TM: "POINT (630541 6569525)",
      WGS84: "POINT (17.288701123568067 59.24455597334636)",
    },
  },
  xKh: {
    AdvertisedShortLocationName: "Källarhalsen",
    Geometry: {
      SWEREF99TM: "POINT (503707 6594590)",
      WGS84: "POINT (15.065455007779068 59.48975132293166)",
    },
  },
  xLh: {
    AdvertisedShortLocationName: "Lövstahagen",
    Geometry: {
      SWEREF99TM: "POINT (661735 6637925)",
      WGS84: "POINT (17.886946736212263 59.847255404116495)",
    },
  },
  xMln: {
    AdvertisedShortLocationName: "Marielund",
    Geometry: {
      SWEREF99TM: "POINT (624675 6570224)",
      WGS84: "POINT (17.186346447888777 59.25259591778546)",
    },
  },
  xPgn: {
    AdvertisedShortLocationName: "Pershyttevägen",
    Geometry: {
      SWEREF99TM: "POINT (500948 6596473)",
      WGS84: "POINT (15.016747357269125 59.50667588441735)",
    },
  },
  xMg: {
    AdvertisedShortLocationName: "Moga",
    Geometry: {
      SWEREF99TM: "POINT (672167 6643785)",
      WGS84: "POINT (18.07770945502647 59.895588431425814)",
    },
  },
  xOta: {
    AdvertisedShortLocationName: "Ormsta",
    Geometry: {
      SWEREF99TM: "POINT (674070 6604910)",
      WGS84: "POINT (18.079438889749383 59.546216172473514)",
    },
  },
  xNeg: {
    AdvertisedShortLocationName: "Neglinge",
    Geometry: {
      SWEREF99TM: "POINT (687509 6576814)",
      WGS84: "POINT (18.29217669854955 59.288528260593466)",
    },
  },
  xKgl: {
    AdvertisedShortLocationName: "Kragstalund",
    Geometry: {
      SWEREF99TM: "POINT (674046 6600904)",
      WGS84: "POINT (18.07573843340895 59.51030452529331)",
    },
  },
  xL: {
    AdvertisedShortLocationName: "Löth",
    Geometry: {
      SWEREF99TM: "POINT (512637 6588400)",
      WGS84: "POINT (15.222766304686532 59.43399153171748)",
    },
  },
  xFsä: {
    AdvertisedShortLocationName: "Fisksätra",
    Geometry: {
      SWEREF99TM: "POINT (685420 6577335)",
      WGS84: "POINT (18.25601484493628 59.294120504032634)",
    },
  },
  xIgb: {
    AdvertisedShortLocationName: "Igelboda",
    Geometry: {
      SWEREF99TM: "POINT (686548 6576923)",
      WGS84: "POINT (18.275430036381575 59.28993051375122)",
    },
  },
  xLdm: {
    AdvertisedShortLocationName: "Lindholmen",
    Geometry: {
      SWEREF99TM: "POINT (675562 6609224)",
      WGS84: "POINT (18.109357019599226 59.584275202441916)",
    },
  },
  xLiä: {
    AdvertisedShortLocationName: "Lillängen",
    Geometry: {
      SWEREF99TM: "POINT (679979 6578300)",
      WGS84: "POINT (18.161444242312808 59.30512448060616)",
    },
  },
  xFsu: {
    AdvertisedShortLocationName: "Frösunda",
    Geometry: {
      SWEREF99TM: "POINT (678790 6613818)",
      WGS84: "POINT (18.170307313549305 59.624097014229065)",
    },
  },
  xHdt: {
    AdvertisedShortLocationName: "Hedlandet",
    Geometry: {
      SWEREF99TM: "POINT (627317 6569541)",
      WGS84: "POINT (17.232236307193496 59.24568090116602)",
    },
  },
  xMfå: {
    AdvertisedShortLocationName: "Mariefreds ångbåtsstation",
    Geometry: {
      SWEREF99TM: "POINT (626895 6570830)",
      WGS84: "POINT (17.225598082708178 59.25737440878134)",
    },
  },
  xSjl: {
    AdvertisedShortLocationName: "Saltsjö-Järla",
    Geometry: {
      SWEREF99TM: "POINT (679299 6578465)",
      WGS84: "POINT (18.14965748537283 59.30689302385171)",
    },
  },
  xSöy: {
    AdvertisedShortLocationName: "Sjöbygget",
    Geometry: {
      SWEREF99TM: "POINT (628309 6569474)",
      WGS84: "POINT (17.24957384488916 59.24478033749007)",
    },
  },
  xUö: {
    AdvertisedShortLocationName: "Uppsala Östra",
    Geometry: {
      SWEREF99TM: "POINT (648388 6638550)",
      WGS84: "POINT (17.64946062121286 59.857866265083686)",
    },
  },
  xÅs: {
    AdvertisedShortLocationName: "Årsta",
    Geometry: {
      SWEREF99TM: "POINT (651338 6639376)",
      WGS84: "POINT (17.702666420281403 59.864205632680964)",
    },
  },
  xVht: {
    AdvertisedShortLocationName: "Värdshuset",
    Geometry: {
      SWEREF99TM: "POINT (626683 6570880)",
      WGS84: "POINT (17.221912298683208 59.25788657615996)",
    },
  },
  xSm: {
    AdvertisedShortLocationName: "Stora Mon",
    Geometry: {
      SWEREF99TM: "POINT (504832 6593747)",
      WGS84: "POINT (15.085300168630395 59.48216976466724)",
    },
  },
  xTp: {
    AdvertisedShortLocationName: "Torpa",
    Geometry: {
      SWEREF99TM: "POINT (509642 6590354)",
      WGS84: "POINT (15.170058497470597 59.45161780122982)",
    },
  },
  xSik: {
    AdvertisedShortLocationName: "Sickla",
    Geometry: {
      SWEREF99TM: "POINT (677678 6578384)",
      WGS84: "POINT (18.121164786583147 59.306851383599756)",
    },
  },
  xSlä: {
    AdvertisedShortLocationName: "Selknä",
    Geometry: {
      SWEREF99TM: "POINT (662917 6638896)",
      WGS84: "POINT (17.908774109095056 59.85549931353879)",
    },
  },
  xUnv: {
    AdvertisedShortLocationName: "Universitetet",
    Geometry: {
      SWEREF99TM: "POINT (673411 6584650)",
      WGS84: "POINT (18.05137233663527 59.36481410690195)",
    },
  },
  xTäc: {
    AdvertisedShortLocationName: "Täby Centrum",
    Geometry: {
      SWEREF99TM: "POINT (674332 6593560)",
      WGS84: "POINT (18.074788735664004 59.44433186169102)",
    },
  },
  xTäl: {
    AdvertisedShortLocationName: "Täljö",
    Geometry: {
      SWEREF99TM: "POINT (683274 6597202)",
      WGS84: "POINT (18.23534063178873 59.47318107172185)",
    },
  },
  xSln: {
    AdvertisedShortLocationName: "Solsidan",
    Geometry: {
      SWEREF99TM: "POINT (687828 6574862)",
      WGS84: "POINT (18.29607324729065 59.27088626666877)",
    },
  },
  xVis: {
    AdvertisedShortLocationName: "Visinge",
    Geometry: {
      SWEREF99TM: "POINT (673574 6595559)",
      WGS84: "POINT (18.063063842676154 59.462571000760754)",
    },
  },
  xVlt: {
    AdvertisedShortLocationName: "Vallentuna",
    Geometry: {
      SWEREF99TM: "POINT (674166 6603570)",
      WGS84: "POINT (18.080036678438514 59.53416057661871)",
    },
  },
  xÖst: {
    AdvertisedShortLocationName: "Stockholms östra",
    Geometry: {
      SWEREF99TM: "POINT (674581 6582676)",
      WGS84: "POINT (18.07032540786386 59.34662991319712)",
    },
  },
  xÖsv: {
    AdvertisedShortLocationName: "Östervik",
    Geometry: {
      SWEREF99TM: "POINT (684249 6577390)",
      WGS84: "POINT (18.235536826198125 59.29512555145722)",
    },
  },
  xRvä: {
    AdvertisedShortLocationName: "Ringvägen",
    Geometry: {
      SWEREF99TM: "POINT (688109 6576244)",
      WGS84: "POINT (18.30219542991483 59.28315156796585)",
    },
  },
  xÖsk: {
    AdvertisedShortLocationName: "Österskär",
    Geometry: {
      SWEREF99TM: "POINT (687626 6596095)",
      WGS84: "POINT (18.311047418607 59.46133444391295)",
    },
  },
  xSa: {
    AdvertisedShortLocationName: "Skölsta",
    Geometry: {
      SWEREF99TM: "POINT (653610 6640610)",
      WGS84: "POINT (17.744099388332536 59.87443537007575)",
    },
  },
  xSsu: {
    AdvertisedShortLocationName: "Stocksund",
    Geometry: {
      SWEREF99TM: "POINT (672877 6586866)",
      WGS84: "POINT (18.043772668457464 59.3849052920553)",
    },
  },
  xTbl: {
    AdvertisedShortLocationName: "Tibble",
    Geometry: {
      SWEREF99TM: "POINT (673655 6593296)",
      WGS84: "POINT (18.062653782067116 59.44224479479556)",
    },
  },
  xTip: {
    AdvertisedShortLocationName: "Tippen",
    Geometry: {
      SWEREF99TM: "POINT (686682 6576280)",
      WGS84: "POINT (18.277223624061218 59.28410653085103)",
    },
  },
  xVev: {
    AdvertisedShortLocationName: "Vendevägen",
    Geometry: {
      SWEREF99TM: "POINT (674158 6588591)",
      WGS84: "POINT (18.067687906277655 59.3998461453414)",
    },
  },
  xÅru: {
    AdvertisedShortLocationName: "Åkers Runö",
    Geometry: {
      SWEREF99TM: "POINT (685210 6598130)",
      WGS84: "POINT (18.27025740560182 59.480651297017744)",
    },
  },
  xÄp: {
    AdvertisedShortLocationName: "Älvstorp",
    Geometry: {
      SWEREF99TM: "POINT (501974 6596975)",
      WGS84: "POINT (15.034877293498333 59.511180236294564)",
    },
  },
  xÖga: {
    AdvertisedShortLocationName: "Östberga",
    Geometry: {
      SWEREF99TM: "POINT (674491 6589068)",
      WGS84: "POINT (18.073931444756095 59.403985604310876)",
    },
  },
  xRnb: {
    AdvertisedShortLocationName: "Roslags Näsby",
    Geometry: {
      SWEREF99TM: "POINT (673421 6592556)",
      WGS84: "POINT (18.057934324630494 59.43570564946557)",
    },
  },
  xSdn: {
    AdvertisedShortLocationName: "Saltsjö-Duvnäs",
    Geometry: {
      SWEREF99TM: "POINT (682120 6577896)",
      WGS84: "POINT (18.19864428848485 59.300584934518255)",
    },
  },
  xSlu: {
    AdvertisedShortLocationName: "Slussen",
    Geometry: {
      SWEREF99TM: "POINT (674890 6579692)",
      WGS84: "POINT (18.07333110181467 59.31974366786051)",
    },
  },
  xTab: {
    AdvertisedShortLocationName: "Tattby",
    Geometry: {
      SWEREF99TM: "POINT (686976 6575730)",
      WGS84: "POINT (18.281899946391484 59.279045636673196)",
    },
  },
  xTug: {
    AdvertisedShortLocationName: "Tunagård",
    Geometry: {
      SWEREF99TM: "POINT (687375 6596904)",
      WGS84: "POINT (18.307335802628376 59.46869920972795)",
    },
  },
  xVbm: {
    AdvertisedShortLocationName: "Viggbyholm",
    Geometry: {
      SWEREF99TM: "POINT (675971 6594189)",
      WGS84: "POINT (18.104164877840077 59.44928897289631)",
    },
  },
  xSbn: {
    AdvertisedShortLocationName: "Saltsjöbaden",
    Geometry: {
      SWEREF99TM: "POINT (688749 6575814)",
      WGS84: "POINT (18.313033766495227 59.27901141961996)",
    },
  },
  xTäb: {
    AdvertisedShortLocationName: "Täby kyrkby",
    Geometry: {
      SWEREF99TM: "POINT (673601 6598947)",
      WGS84: "POINT (18.066293874857447 59.492940479861694)",
    },
  },
  xÅbg: {
    AdvertisedShortLocationName: "Åkersberga",
    Geometry: {
      SWEREF99TM: "POINT (686854 6598035)",
      WGS84: "POINT (18.299146775379395 59.47907091032556)",
    },
  },
  xStä: {
    AdvertisedShortLocationName: "Storängen",
    Geometry: {
      SWEREF99TM: "POINT (680916 6578396)",
      WGS84: "POINT (18.17795432262495 59.30558518054642)",
    },
  },
  xTx: {
    AdvertisedShortLocationName: "Taxinge-Näsby",
    Geometry: {
      SWEREF99TM: "POINT (631237 6569131)",
      WGS84: "POINT (17.300654057314397 59.24080551593884)",
    },
  },
  Äsg: {
    AdvertisedShortLocationName: "Älvsjö godsbangård",
    Geometry: {
      SWEREF99TM: "POINT (672044 6576364)",
      WGS84: "POINT (18.020750312361056 59.2910679753198)",
    },
  },
  Åks: {
    AdvertisedShortLocationName: "Åkers styckebruk",
    Geometry: {
      SWEREF99TM: "POINT (619480 6570019)",
      WGS84: "POINT (17.095204229938588 59.25225397190195)",
    },
  },
  Öa: {
    AdvertisedShortLocationName: "Ökna",
    Geometry: {
      SWEREF99TM: "POINT (541174 6584955)",
      WGS84: "POINT (15.72512713883171 59.40123119913266)",
    },
  },
  Tbg: {
    AdvertisedShortLocationName: "Tureberg",
    Geometry: {
      SWEREF99TM: "POINT (667190 6591572)",
      WGS84: "POINT (17.947466949712663 59.42940516998738)",
    },
  },
  Åbs: {
    AdvertisedShortLocationName: "Åby södra",
    Geometry: {
      SWEREF99TM: "POINT (568484 6502669)",
      WGS84: "POINT (16.180398683064023 58.65885604827068)",
    },
  },
  Äbgb: {
    AdvertisedShortLocationName: "Ängelsbergs bruk",
    Geometry: {
      SWEREF99TM: "POINT (556238 6648067)",
      WGS84: "POINT (16.007249206492432 59.966128699400635)",
    },
  },
  Öna: {
    AdvertisedShortLocationName: "Önaskogen",
    Geometry: {
      SWEREF99TM: "POINT (507034 6497910)",
      WGS84: "POINT (15.121105516818247 58.62146931337175)",
    },
  },
  Öso: {
    AdvertisedShortLocationName: "Ösmo",
    Geometry: {
      SWEREF99TM: "POINT (666805 6541950)",
      WGS84: "POINT (17.902643771807412 58.98451424987104)",
    },
  },
  Öb: {
    AdvertisedShortLocationName: "Örebro S",
    Geometry: {
      SWEREF99TM: "POINT (511541 6570134)",
      WGS84: "POINT (15.202467158375073 59.269992557053094)",
    },
  },
  Å: {
    AdvertisedShortLocationName: "Åsbro",
    Geometry: {
      SWEREF99TM: "POINT (503515 6539851)",
      WGS84: "POINT (15.061177971911832 58.998180290882345)",
    },
  },
  Åbyg: {
    AdvertisedShortLocationName: "Åby godsbangård",
    Geometry: {
      SWEREF99TM: "POINT (569427 6501536)",
      WGS84: "POINT (16.196300096510253 58.6485326098994)",
    },
  },
  Ör: {
    AdvertisedShortLocationName: "Örebro",
    Geometry: {
      SWEREF99TM: "POINT (512022 6571051)",
      WGS84: "POINT (15.210956333462374 59.2782140091467)",
    },
  },
  Öte: {
    AdvertisedShortLocationName: "Östertälje",
    Geometry: {
      SWEREF99TM: "POINT (651885 6563678)",
      WGS84: "POINT (17.658394772630633 59.184989919946844)",
    },
  },
  Ålg: {
    AdvertisedShortLocationName: "Ålsäng",
    Geometry: {
      SWEREF99TM: "POINT (540311 6586561)",
      WGS84: "POINT (15.710231760563884 59.41573563157777)",
    },
  },
  Äs: {
    AdvertisedShortLocationName: "Älvsjö",
    Geometry: {
      SWEREF99TM: "POINT (671567 6574951)",
      WGS84: "POINT (18.01126835235629 59.27859023113897)",
    },
  },
  Åba: {
    AdvertisedShortLocationName: "Ålberga",
    Geometry: {
      SWEREF99TM: "POINT (591344 6510404)",
      WGS84: "POINT (16.57740141981295 58.724083639244775)",
    },
  },
  Åbe: {
    AdvertisedShortLocationName: "Årstaberg",
    Geometry: {
      SWEREF99TM: "POINT (672397 6577311)",
      WGS84: "POINT (18.027693219158454 59.2994166097003)",
    },
  },
  Äbg: {
    AdvertisedShortLocationName: "Ängelsberg",
    Geometry: {
      SWEREF99TM: "POINT (556365 6647050)",
      WGS84: "POINT (16.009245690118707 59.95698077920842)",
    },
  },
  xVdl: {
    AdvertisedShortLocationName: "Vedalund",
    Geometry: {
      SWEREF99TM: "POINT (675032 6607414)",
      WGS84: "POINT (18.09849244082728 59.568267756760406)",
    },
  },
};
