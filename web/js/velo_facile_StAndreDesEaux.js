// Distance : 27.123 km
// Altitudes : Maxi 30 m  Mini 0 m
// Dénivelées : ~ +5 m  -5 m
// Type de trace : Vtt  Cyclotourisme

// 27km
// longe le marais de brière
// le golf de La Baule st denac

// à plus de 80% sur piste cyclable en stabilisé

// circuit réalisé par la communauté d'agglomération de St Nazaire (CARENE)

// Load the Visualization API and the columnchart package.
google.load('visualization', '1', {packages: ['columnchart']});

function initMap() {
  // The following path marks a path from Mt. Whitney, the highest point in the
  // continental United States to Badwater, Death Valley, the lowest point.
  var path = 
[{lat: 47.312050, lng:-2.308661},
{lat: 47.312062, lng:-2.308805},
{lat: 47.312117, lng:-2.308931},
{lat: 47.312172, lng:-2.309057},
{lat: 47.312258, lng:-2.309164},
{lat: 47.312331, lng:-2.309254},
{lat: 47.312404, lng:-2.309389},
{lat: 47.312465, lng:-2.309533},
{lat: 47.312533, lng:-2.309667},
{lat: 47.312844, lng:-2.308814},
{lat: 47.312789, lng:-2.308670},
{lat: 47.312722, lng:-2.308527},
{lat: 47.312655, lng:-2.308383},
{lat: 47.312594, lng:-2.308221},
{lat: 47.312539, lng:-2.308068},
{lat: 47.312490, lng:-2.307916},
{lat: 47.312447, lng:-2.307745},
{lat: 47.312410, lng:-2.307565},
{lat: 47.312374, lng:-2.307395},
{lat: 47.312337, lng:-2.307224},
{lat: 47.312301, lng:-2.307044},
{lat: 47.312264, lng:-2.306883},
{lat: 47.312227, lng:-2.306712},
{lat: 47.312191, lng:-2.306550},
{lat: 47.312154, lng:-2.306389},
{lat: 47.312117, lng:-2.306236},
{lat: 47.312087, lng:-2.306083},
{lat: 47.311800, lng:-2.304673},
{lat: 47.311769, lng:-2.304484},
{lat: 47.311732, lng:-2.304304},
{lat: 47.311702, lng:-2.304125},
{lat: 47.311665, lng:-2.303963},
{lat: 47.311641, lng:-2.303792},
{lat: 47.311622, lng:-2.303631},
{lat: 47.311622, lng:-2.303469},
{lat: 47.311635, lng:-2.303298},
{lat: 47.311677, lng:-2.303128},
{lat: 47.311720, lng:-2.302966},
{lat: 47.311751, lng:-2.302813},
{lat: 47.311781, lng:-2.302661},
{lat: 47.311800, lng:-2.302490},
{lat: 47.311787, lng:-2.302310},
{lat: 47.311757, lng:-2.302131},
{lat: 47.311714, lng:-2.301942},
{lat: 47.311671, lng:-2.301816},
{lat: 47.311641, lng:-2.301672},
{lat: 47.311604, lng:-2.301538},
{lat: 47.311213, lng:-2.299903},
{lat: 47.311170, lng:-2.299777},
{lat: 47.311127, lng:-2.299642},
{lat: 47.311073, lng:-2.299454},
{lat: 47.311018, lng:-2.299265},
{lat: 47.310956, lng:-2.299076},
{lat: 47.310920, lng:-2.298942},
{lat: 47.310859, lng:-2.298744},
{lat: 47.310822, lng:-2.298600},
{lat: 47.310779, lng:-2.298456},
{lat: 47.310743, lng:-2.298304},
{lat: 47.310694, lng:-2.298160},
{lat: 47.310651, lng:-2.298007},
{lat: 47.311066, lng:-2.296354},
{lat: 47.311140, lng:-2.296265},
{lat: 47.311237, lng:-2.296184},
{lat: 47.311347, lng:-2.296094},
{lat: 47.311451, lng:-2.296040},
{lat: 47.311580, lng:-2.295941},
{lat: 47.311653, lng:-2.295851},
{lat: 47.311696, lng:-2.295726},
{lat: 47.311641, lng:-2.295546},
{lat: 47.311598, lng:-2.295411},
{lat: 47.311561, lng:-2.295276},
{lat: 47.311512, lng:-2.295151},
{lat: 47.311470, lng:-2.295025},
{lat: 47.311433, lng:-2.294836},
{lat: 47.311457, lng:-2.294648},
{lat: 47.311580, lng:-2.294549},
{lat: 47.311696, lng:-2.294450},
{lat: 47.311787, lng:-2.294369},
{lat: 47.311873, lng:-2.294297},
{lat: 47.311958, lng:-2.294225},
{lat: 47.312074, lng:-2.294145},
{lat: 47.312166, lng:-2.294091},
{lat: 47.312276, lng:-2.294001},
{lat: 47.312356, lng:-2.292572},
{lat: 47.312325, lng:-2.292429},
{lat: 47.312282, lng:-2.292294},
{lat: 47.312252, lng:-2.292159},
{lat: 47.312209, lng:-2.291971},
{lat: 47.312172, lng:-2.291791},
{lat: 47.312136, lng:-2.291620},
{lat: 47.312099, lng:-2.291450},
{lat: 47.312081, lng:-2.291270},
{lat: 47.312056, lng:-2.291099},
{lat: 47.312032, lng:-2.290929},
{lat: 47.312013, lng:-2.290758},
{lat: 47.311995, lng:-2.290578},
{lat: 47.311983, lng:-2.290434},
{lat: 47.311964, lng:-2.290291},
{lat: 47.311940, lng:-2.290156},
{lat: 47.311916, lng:-2.290012},
{lat: 47.311891, lng:-2.289878},
{lat: 47.312417, lng:-2.288332},
{lat: 47.312514, lng:-2.288234},
{lat: 47.312624, lng:-2.288153},
{lat: 47.312728, lng:-2.288072},
{lat: 47.312832, lng:-2.287991},
{lat: 47.312936, lng:-2.287919},
{lat: 47.313034, lng:-2.287865},
{lat: 47.313144, lng:-2.287775},
{lat: 47.313254, lng:-2.287677},
{lat: 47.313388, lng:-2.287596},
{lat: 47.313480, lng:-2.287551},
{lat: 47.313602, lng:-2.287488},
{lat: 47.313724, lng:-2.287443},
{lat: 47.313858, lng:-2.287398},
{lat: 47.313956, lng:-2.287380},
{lat: 47.314097, lng:-2.287344},
{lat: 47.314194, lng:-2.287326},
{lat: 47.314335, lng:-2.287290},
{lat: 47.314433, lng:-2.287263},
{lat: 47.314567, lng:-2.287227},
{lat: 47.316314, lng:-2.287434},
{lat: 47.316443, lng:-2.287470},
{lat: 47.316559, lng:-2.287524},
{lat: 47.316662, lng:-2.287596},
{lat: 47.316779, lng:-2.287677},
{lat: 47.316870, lng:-2.287749},
{lat: 47.316962, lng:-2.287820},
{lat: 47.317060, lng:-2.287910},
{lat: 47.317170, lng:-2.287991},
{lat: 47.317261, lng:-2.288036},
{lat: 47.317396, lng:-2.288099},
{lat: 47.317518, lng:-2.288153},
{lat: 47.317609, lng:-2.288198},
{lat: 47.317744, lng:-2.288243},
{lat: 47.317872, lng:-2.288279},
{lat: 47.318006, lng:-2.288305},
{lat: 47.318135, lng:-2.288323},
{lat: 47.318959, lng:-2.286096},
{lat: 47.318953, lng:-2.285907},
{lat: 47.318923, lng:-2.285727},
{lat: 47.318911, lng:-2.285584},
{lat: 47.318904, lng:-2.285431},
{lat: 47.318911, lng:-2.285287},
{lat: 47.318923, lng:-2.285143},
{lat: 47.318929, lng:-2.284991},
{lat: 47.318935, lng:-2.284829},
{lat: 47.318947, lng:-2.284667},
{lat: 47.318941, lng:-2.284497},
{lat: 47.318605, lng:-2.281263},
{lat: 47.318599, lng:-2.281065},
{lat: 47.318587, lng:-2.280867},
{lat: 47.318587, lng:-2.280688},
{lat: 47.318581, lng:-2.280490},
{lat: 47.318568, lng:-2.280319},
{lat: 47.318550, lng:-2.280131},
{lat: 47.318544, lng:-2.279951},
{lat: 47.318532, lng:-2.279780},
{lat: 47.318520, lng:-2.279610},
{lat: 47.318501, lng:-2.279439},
{lat: 47.318507, lng:-2.279277},
{lat: 47.318575, lng:-2.274939},
{lat: 47.318575, lng:-2.274750},
{lat: 47.318568, lng:-2.274543},
{lat: 47.318568, lng:-2.274400},
{lat: 47.318562, lng:-2.274247},
{lat: 47.318562, lng:-2.274085},
{lat: 47.318556, lng:-2.273932},
{lat: 47.318550, lng:-2.273753},
{lat: 47.318544, lng:-2.273564},
{lat: 47.318538, lng:-2.273384},
{lat: 47.318526, lng:-2.273214},
{lat: 47.318520, lng:-2.273061},
{lat: 47.318513, lng:-2.272890},
{lat: 47.318501, lng:-2.272738},
{lat: 47.318495, lng:-2.272585},
{lat: 47.318336, lng:-2.269378},
{lat: 47.318324, lng:-2.269180},
{lat: 47.318318, lng:-2.268992},
{lat: 47.318324, lng:-2.268803},
{lat: 47.318318, lng:-2.268623},
{lat: 47.318318, lng:-2.268453},
{lat: 47.318318, lng:-2.268309},
{lat: 47.318312, lng:-2.268138},
{lat: 47.318300, lng:-2.267959},
{lat: 47.318294, lng:-2.267788},
{lat: 47.318294, lng:-2.267626},
{lat: 47.320169, lng:-2.266153},
{lat: 47.320261, lng:-2.266090},
{lat: 47.320358, lng:-2.266027},
{lat: 47.320450, lng:-2.265973},
{lat: 47.320542, lng:-2.265928},
{lat: 47.320633, lng:-2.265884},
{lat: 47.320737, lng:-2.265848},
{lat: 47.320847, lng:-2.265839},
{lat: 47.320957, lng:-2.265848},
{lat: 47.321055, lng:-2.265884},
{lat: 47.321146, lng:-2.265919},
{lat: 47.321262, lng:-2.265946},
{lat: 47.323858, lng:-2.265551},
{lat: 47.323907, lng:-2.265722},
{lat: 47.323968, lng:-2.265839},
{lat: 47.323993, lng:-2.265973},
{lat: 47.323956, lng:-2.270231},
{lat: 47.323889, lng:-2.270348},
{lat: 47.323889, lng:-2.270528},
{lat: 47.323907, lng:-2.270690},
{lat: 47.323907, lng:-2.270869},
{lat: 47.323944, lng:-2.271040},
{lat: 47.323919, lng:-2.271237},
{lat: 47.323913, lng:-2.271426},
{lat: 47.322515, lng:-2.274184},
{lat: 47.322490, lng:-2.274337},
{lat: 47.322466, lng:-2.274489},
{lat: 47.322441, lng:-2.274633},
{lat: 47.325508, lng:-2.279987},
{lat: 47.325544, lng:-2.280140},
{lat: 47.325593, lng:-2.280293},
{lat: 47.325630, lng:-2.280454},
{lat: 47.325666, lng:-2.280625},
{lat: 47.325709, lng:-2.280796},
{lat: 47.325746, lng:-2.280957},
{lat: 47.325782, lng:-2.281110},
{lat: 47.327914, lng:-2.286913},
{lat: 47.327945, lng:-2.287084},
{lat: 47.327963, lng:-2.287272},
{lat: 47.327981, lng:-2.287470},
{lat: 47.327999, lng:-2.287677},
{lat: 47.328006, lng:-2.287874},
{lat: 47.327993, lng:-2.288072},
{lat: 47.327963, lng:-2.288207},
{lat: 47.327926, lng:-2.288341},
{lat: 47.327883, lng:-2.288476},
{lat: 47.329978, lng:-2.288593},
{lat: 47.330070, lng:-2.288548},
{lat: 47.330186, lng:-2.288485},
{lat: 47.330296, lng:-2.288422},
{lat: 47.330388, lng:-2.288368},
{lat: 47.332281, lng:-2.290695},
{lat: 47.332372, lng:-2.290731},
{lat: 47.332464, lng:-2.290785},
{lat: 47.332574, lng:-2.290830},
{lat: 47.332690, lng:-2.290875},
{lat: 47.332794, lng:-2.290911},
{lat: 47.332904, lng:-2.290947},
{lat: 47.333026, lng:-2.290956},
{lat: 47.333154, lng:-2.290956},
{lat: 47.333276, lng:-2.290956},
{lat: 47.337014, lng:-2.289590},
{lat: 47.337099, lng:-2.289500},
{lat: 47.340738, lng:-2.287299},
{lat: 47.340836, lng:-2.287344},
{lat: 47.340928, lng:-2.287443},
{lat: 47.340989, lng:-2.287587},
{lat: 47.341001, lng:-2.287758},
{lat: 47.340995, lng:-2.287910},
{lat: 47.340989, lng:-2.288072},
{lat: 47.340983, lng:-2.288234},
{lat: 47.340977, lng:-2.288395},
{lat: 47.343077, lng:-2.290390},
{lat: 47.343120, lng:-2.290524},
{lat: 47.343163, lng:-2.290650},
{lat: 47.343272, lng:-2.290704},
{lat: 47.343376, lng:-2.290704},
{lat: 47.343486, lng:-2.290677},
{lat: 47.343608, lng:-2.290677},
{lat: 47.343724, lng:-2.290668},
{lat: 47.343822, lng:-2.290659},
{lat: 47.338412, lng:-2.293228},
{lat: 47.338510, lng:-2.293309},
{lat: 47.338601, lng:-2.293381},
{lat: 47.338681, lng:-2.293471},
{lat: 47.338791, lng:-2.293561},
{lat: 47.335676, lng:-2.295573},
{lat: 47.335579, lng:-2.295564},
{lat: 47.335475, lng:-2.295546},
{lat: 47.335371, lng:-2.295528},
{lat: 47.335230, lng:-2.295510},
{lat: 47.335133, lng:-2.295501},
{lat: 47.334992, lng:-2.295483},
{lat: 47.334852, lng:-2.295465},
{lat: 47.334754, lng:-2.295456},
{lat: 47.332043, lng:-2.296597},
{lat: 47.331951, lng:-2.296669},
{lat: 47.331841, lng:-2.296732},
{lat: 47.331731, lng:-2.296777},
{lat: 47.331640, lng:-2.296813},
{lat: 47.331517, lng:-2.296857},
{lat: 47.331407, lng:-2.296893},
{lat: 47.331291, lng:-2.296938},
{lat: 47.331181, lng:-2.296965},
{lat: 47.331065, lng:-2.297001},
{lat: 47.329783, lng:-2.301053},
{lat: 47.329807, lng:-2.301187},
{lat: 47.329838, lng:-2.301322},
{lat: 47.329862, lng:-2.301457},
{lat: 47.329887, lng:-2.301610},
{lat: 47.329209, lng:-2.305975},
{lat: 47.329209, lng:-2.306119},
{lat: 47.329209, lng:-2.306281},
{lat: 47.329221, lng:-2.306424},
{lat: 47.329221, lng:-2.306577},
{lat: 47.329215, lng:-2.306721},
{lat: 47.330021, lng:-2.311769},
{lat: 47.330094, lng:-2.311653},
{lat: 47.330168, lng:-2.311554},
{lat: 47.330241, lng:-2.311446},
{lat: 47.330302, lng:-2.311338},
{lat: 47.330363, lng:-2.311230},
{lat: 47.330424, lng:-2.311123},
{lat: 47.330485, lng:-2.311015},
{lat: 47.330552, lng:-2.310907},
{lat: 47.330668, lng:-2.310790},
{lat: 47.332446, lng:-2.314635},
{lat: 47.332397, lng:-2.314761},
{lat: 47.332330, lng:-2.314905},
{lat: 47.332281, lng:-2.315030},
{lat: 47.332226, lng:-2.315156},
{lat: 47.332146, lng:-2.315327},
{lat: 47.332085, lng:-2.315444},
{lat: 47.332030, lng:-2.315560},
{lat: 47.331963, lng:-2.315731},
{lat: 47.331908, lng:-2.315848},
{lat: 47.329105, lng:-2.319441},
{lat: 47.326552, lng:-2.323142},
{lat: 47.326650, lng:-2.323169},
{lat: 47.326784, lng:-2.323205},
{lat: 47.326876, lng:-2.323241},
{lat: 47.327016, lng:-2.323286},
{lat: 47.327114, lng:-2.323331},
{lat: 47.327212, lng:-2.323376},
{lat: 47.327346, lng:-2.323457},
{lat: 47.327450, lng:-2.323519},
{lat: 47.329850, lng:-2.326295},
{lat: 47.329948, lng:-2.326259},
{lat: 47.330046, lng:-2.326295},
{lat: 47.330143, lng:-2.326340},
{lat: 47.330247, lng:-2.326349},
{lat: 47.330345, lng:-2.326295},
{lat: 47.330467, lng:-2.326214},
{lat: 47.333056, lng:-2.324624},
{lat: 47.333185, lng:-2.324597},
{lat: 47.333307, lng:-2.324535},
{lat: 47.333404, lng:-2.324418},
{lat: 47.333502, lng:-2.324274},
{lat: 47.333612, lng:-2.324139},
{lat: 47.333728, lng:-2.324031},
{lat: 47.340854, lng:-2.322540},
{lat: 47.340891, lng:-2.322684},
{lat: 47.340928, lng:-2.322819},
{lat: 47.340958, lng:-2.322971},
{lat: 47.341007, lng:-2.323142},
{lat: 47.341038, lng:-2.323277},
{lat: 47.341087, lng:-2.323439},
{lat: 47.341135, lng:-2.323600},
{lat: 47.341178, lng:-2.323744},
{lat: 47.346759, lng:-2.321534},
{lat: 47.346850, lng:-2.321453},
{lat: 47.346942, lng:-2.321381},
{lat: 47.347034, lng:-2.321301},
{lat: 47.347119, lng:-2.321220},
{lat: 47.347241, lng:-2.321121},
{lat: 47.347351, lng:-2.321130},
{lat: 47.343279, lng:-2.330454},
{lat: 47.343163, lng:-2.330490},
{lat: 47.343040, lng:-2.330526},
{lat: 47.342924, lng:-2.330571},
{lat: 47.342808, lng:-2.330616},
{lat: 47.342705, lng:-2.330679},
{lat: 47.338314, lng:-2.339168},
{lat: 47.338210, lng:-2.339249},
{lat: 47.338113, lng:-2.339321},
{lat: 47.338009, lng:-2.339393},
{lat: 47.337911, lng:-2.339465},
{lat: 47.330534, lng:-2.346633},
{lat: 47.330430, lng:-2.346732},
{lat: 47.330320, lng:-2.346849},
{lat: 47.330217, lng:-2.346947},
{lat: 47.330113, lng:-2.347037},
{lat: 47.330015, lng:-2.347136},
{lat: 47.329917, lng:-2.347226},
{lat: 47.329813, lng:-2.347298},
{lat: 47.329716, lng:-2.347370},
{lat: 47.323712, lng:-2.350541},
{lat: 47.323577, lng:-2.350514},
{lat: 47.323455, lng:-2.350514},
{lat: 47.323327, lng:-2.350532},
{lat: 47.323205, lng:-2.350523},
{lat: 47.323064, lng:-2.350514},
{lat: 47.322924, lng:-2.350487},
{lat: 47.316669, lng:-2.349741},
{lat: 47.316559, lng:-2.349795},
{lat: 47.316455, lng:-2.349840},
{lat: 47.316351, lng:-2.349885},
{lat: 47.316247, lng:-2.349939},
{lat: 47.316149, lng:-2.349993},
{lat: 47.316045, lng:-2.350029},
{lat: 47.315954, lng:-2.350065},
{lat: 47.315856, lng:-2.350092},
{lat: 47.312826, lng:-2.345636},
{lat: 47.312808, lng:-2.345465},
{lat: 47.312789, lng:-2.345295},
{lat: 47.312771, lng:-2.345124},
{lat: 47.312759, lng:-2.344962},
{lat: 47.312740, lng:-2.344801},
{lat: 47.312716, lng:-2.344639},
{lat: 47.312698, lng:-2.344468},
{lat: 47.312679, lng:-2.344297},
{lat: 47.312661, lng:-2.344127},
{lat: 47.310963, lng:-2.334497},
{lat: 47.310956, lng:-2.334344},
{lat: 47.310956, lng:-2.334182},
{lat: 47.310956, lng:-2.334030},
{lat: 47.310950, lng:-2.333877},
{lat: 47.310950, lng:-2.333724},
{lat: 47.313058, lng:-2.328281},
{lat: 47.312966, lng:-2.328155},
{lat: 47.312905, lng:-2.328038},
{lat: 47.312826, lng:-2.327894},
{lat: 47.312722, lng:-2.327795},
{lat: 47.312624, lng:-2.327750},
{lat: 47.312527, lng:-2.327697},
{lat: 47.312435, lng:-2.327634},
{lat: 47.312337, lng:-2.327562},
{lat: 47.313425, lng:-2.323025},
{lat: 47.313547, lng:-2.322953},
{lat: 47.313651, lng:-2.322909},
{lat: 47.313736, lng:-2.322846},
{lat: 47.313865, lng:-2.322792},
{lat: 47.313974, lng:-2.322747},
{lat: 47.314084, lng:-2.322711},
{lat: 47.314188, lng:-2.322693},
{lat: 47.314298, lng:-2.322639},
{lat: 47.314396, lng:-2.322567},
{lat: 47.314482, lng:-2.322486},
{lat: 47.314201, lng:-2.318749},
{lat: 47.314237, lng:-2.318615},
{lat: 47.314292, lng:-2.318480},
{lat: 47.314353, lng:-2.318345},
{lat: 47.314420, lng:-2.318210},
{lat: 47.314488, lng:-2.318076},
{lat: 47.314549, lng:-2.317941},
{lat: 47.314598, lng:-2.317797},
{lat: 47.314628, lng:-2.317644},
{lat: 47.314622, lng:-2.317474},
{lat: 47.314592, lng:-2.317294},
{lat: 47.314549, lng:-2.317114},
{lat: 47.314506, lng:-2.316935},
{lat: 47.313974, lng:-2.314204},
{lat: 47.313919, lng:-2.314078},
{lat: 47.313858, lng:-2.313925},
{lat: 47.313791, lng:-2.313764},
{lat: 47.313724, lng:-2.313665},
{lat: 47.313651, lng:-2.313575},
{lat: 47.313559, lng:-2.313512},
{lat: 47.313828, lng:-2.312273},
{lat: 47.313895, lng:-2.312156},
{lat: 47.313840, lng:-2.312003},
{lat: 47.313785, lng:-2.311868},
{lat: 47.313736, lng:-2.311716},
{lat: 47.313687, lng:-2.311563},
{lat: 47.313638, lng:-2.311428},
{lat: 47.313522, lng:-2.311347},
{lat: 47.313412, lng:-2.311419},
{lat: 47.313290, lng:-2.311473},
{lat: 47.313168, lng:-2.311500},
{lat: 47.312789, lng:-2.310144},
{lat: 47.312753, lng:-2.309982},
{lat: 47.312667, lng:-2.309892},
{lat: 47.312600, lng:-2.309793},
{lat: 47.312172, lng:-2.309048},
{lat: 47.312117, lng:-2.308922},
{lat: 47.312062, lng:-2.308769}];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: path[1],
    mapTypeId: 'terrain'
  });

  // Create an ElevationService.
  var elevator = new google.maps.ElevationService;

  // Draw the path, using the Visualization API and the Elevation service.
  displayPathElevation(path, elevator, map);
}

function displayPathElevation(path, elevator, map) {
  // Display a polyline of the elevation path.
  new google.maps.Polyline({
    path: path,
    strokeColor: '#0000CC',
    opacity: 0.4,
    map: map
  });

  // Create a PathElevationRequest object using this array.
  // Ask for 256 samples along that path.
  // Initiate the path request.
  elevator.getElevationAlongPath({
    'path': path,
    'samples': 512
  }, plotElevation);
}

// Takes an array of ElevationResult objects, draws the path on the map
// and plots the elevation profile on a Visualization API ColumnChart.
function plotElevation(elevations, status) {
  var chartDiv = document.getElementById('elevation_chart');
  if (status !== google.maps.ElevationStatus.OK) {
    // Show the error code inside the chartDiv.
    chartDiv.innerHTML = 'Cannot show elevation: request failed because ' +
        status;
    return;
  }
  // Create a new chart in the elevation_chart DIV.
  var chart = new google.visualization.ColumnChart(chartDiv);

  // Extract the data from which to populate the chart.
  // Because the samples are equidistant, the 'Sample'
  // column here does double duty as distance along the
  // X axis.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Sample');
  data.addColumn('number', 'Elevation');
  for (var i = 0; i < elevations.length; i++) {
    data.addRow(['', elevations[i].elevation]);
  }

  // Draw the chart using the data within its DIV.
  chart.draw(data, {
    height: 150,
    legend: 'none',
    titleY: 'Elevation (m)'
  });
}

	
	var polyline = new google.maps.Polyline({
		path: points,
		strokeColor: curColor,
		strokeWeight: 3,
		strokeOpacity: .6,
		map: map
	});