var w,h,points=[],bodies=[],dir,t=255,pts=255/10;
var G=6.67408e-20;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  w=width;
  h=height;
  points=[];
  //body(name,color,radius,mass,x,y,z,vx,vy,vz)
  bodies=[
      new body("Sun",color(255,255,200),695700,1988500e24,-1.068000648301820E+06, -4.176802125684930E+05,  3.084467020687090E+04,  9.305300847631915E-03, -1.283176670344807E-02, -1.631528028381386E-04),
      new body("Jupiter",color(140,140,100),69911,1898.13e24,5.978411588543636E+08,  4.387049129308410E+08, -1.520170148446965E+07, -7.892632330758821E+00,  1.115034520921672E+01,  1.305097532924950E-01),
      new body("Saturn",color(230,170,125),58232,5.6834e26,9.576383364778246E+08,  9.821475307691972E+08, -5.518981181329101E+07, -7.419580383283150E+00,  6.725982472902061E+00,  1.775012040472701E-01),
      new body("Uranus",color(184,215,242),25362,86.813e24,2.157706702828831E+09, -2.055242911807622E+09, -3.559264256520975E+07,  4.646953712646178E+00,  4.614361110490073E+00, -4.301340943493193E-02),
      new body("Neptune",color(64,151,227),24624,102.413e24,2.513785502564252E+09, -3.739265198070839E+09,  1.907031307341528E+07,  4.475107876260091E+00,  3.062850727543816E+00, -1.667289047123263E-01),
      new body("Earth",color(83,139,145),6371.01,5.97219e24,-2.627892928682480E+07,  1.445102393586391E+08,  3.022818135935813E+04, -2.983052803283506E+01, -5.220465685407924E+00, -1.014621798034465E-04),
      new body("Venus",color(242,218,196),6051.84,48.685e23,-1.085735509178141E+08, -3.784200933160055E+06,  6.190064472977990E+06,  8.984651054838754E-01, -3.517203950794635E+01, -5.320225582712421E-01),
      new body("Mars",color(210,160,85),3389.92,6.4171e23,2.069270543147017E+08, -3.560689745239088E+06, -5.147936537447235E+06,  1.304308833322233E+00,  2.628158890420931E+01,  5.188465740839767E-01),
      new body("Ganymede",color(200,200,180),2634.1,1482e20,5.968054281104712E+08,  4.384332667767492E+08, -1.522334823708719E+07, -5.113764653294198E+00,  6.421550571838693E-01, -2.272620736444524E-01),
      new body("Titan",color(230,230,140),2575.5,13455.3e19,9.568613822948571E+08,  9.830500946779513E+08, -5.557947771220148E+07, -1.169879712511013E+01,  3.942276827684097E+00,  2.034192806410284E+00),
      new body("Mercury",color(100),2439.7,3.302e23,-2.212062175862221E+07, -6.682431829610253E+07, -3.461601353176080E+06,  3.666229236478603E+01, -1.230266986781422E+01, -4.368336051784789E+00),

      new body("Callisto",color(186,148,143),2403,1076e20,5.985071536953070E+08,  4.404607788863851E+08, -1.513558474691284E+07, -1.555591399528942E+01,  1.411983398700690E+01,  1.260807701802191E-01),
      new body("Io",color(184, 180, 68),1821.3,893.3e20,5.978859511926628E+08,  4.382846342872659E+08, -1.521595181406739E+07,  9.292667104479822E+00,  1.302536635856758E+01,  4.581573986898553E-01),
      new body("Moon",color(230),1737.53,7.349e22,-2.659657952880802E+07,  1.442683561835989E+08,  6.678400538153946E+04, -2.926974096953943E+01, -6.020397947517719E+00, -1.740793458484102E-03),
      new body("Europa",color(237,202,145),1565,479.7e20,5.972090771817015E+08,  4.389225841531876E+08, -1.520474443357745E+07, -1.226471792801061E+01, -1.925435825460625E+00, -2.954047642836232E-01),
      new body("Triton",color(230),1352.6,214.7e20,2.513485302886966E+09, -3.739285451508122E+09,  1.925838278513193E+07,  5.752030722532645E+00,  6.502688633888694E+00,  2.243347569134719E+00),
      new body("Pluto",color(230),1188.3,1.307e22,-1.478626340724678E+09, -4.182878118662979E+09,  8.753002592760717E+08,  5.271230989790396E+00, -2.661751411789654E+00, -1.242036206632027E+00),
      new body("Eris",color(230),1163,16.7e21,1.322243110870202E+10,  4.601936414763955E+09, -3.903714549949867E+09, -3.432740932761868E-01,  1.676320271701464E+00,  1.504411524027339E+00),
      new body("Haumea",color(230),798,4.006e21,-6.881091040497869E+09, -7.662747017766662E+08,  3.348851375450475E+09,  8.350739808477889E-01, -3.584005976136049E+00,  6.370596374245071E-01),
      new body("Titania",color(230),788.9,35.27e20,2.157796534835606E+09, -2.055321557264454E+09, -3.601157707079530E+07,  1.162364712566031E+00,  5.256539569270866E+00, -9.184467829991749E-01),
      new body("Rhea",color(230),764.5,230.9e19,9.572178737883351E+08,  9.824452301918745E+08, -5.530361390037769E+07, -1.248447479895971E+01,  9.420143885002257E-01,  3.746822337280829E+00),
      new body("Oberon",color(230),761.4,30.14e20,2.157185896153312E+09, -2.055165500677734E+09, -3.584412574793208E+07,  3.387995817974851E+00,  5.285396465069921E+00,  2.766783649934617E+00),
      new body("Iapetus",color(230),734.5,180.59e19,9.547036831226707E+08,  9.802383132558823E+08, -5.414901508745444E+07, -5.596413867486061E+00,  4.130576027635693E+00,  4.256133128317086E-01),
      new body("Makemake",color(230),715,4.4e21,-6.520228832179061E+09,  1.716867947066155E+09,  3.727707169877112E+09, -1.217985017892816E+00, -3.661226367968196E+00,  2.919151551813599E-01),
      new body("2007 OR10",color(230),615,1.75e21,1.051059642726635E+10, -6.616661330332912E+09, -1.162266184886216E+09,  2.349978783028555E+00,  1.098909323924172E+00,  1.153392524738409E+00),
      new body("Charon",color(230),605,1.53e21,-1.478626381629830E+09, -4.182888525791242E+09,  8.752836534670407E+08,  5.107250690301193E+00, -2.789785042147744E+00, -1.161429450701579E+00),
      new body("Umbriel",color(230),584.7,11.72e21,2.157944697488786E+09, -2.055308981761433E+09, -3.569337395390940E+07,  2.778973864036194E+00,  4.435888756698066E+00, -4.302014902970738E+00),
      new body("Ariel",color(230),579,13.53e20,2.157823020849339E+09, -2.055247448263577E+09, -3.544134626099598E+07,  8.861434274365276E+00,  3.235074605340979E+00, -3.313339122257013E+00),
      new body("Dione",color(230),562.5,109.572e19,9.574596345892345E+08,  9.818603374734230E+08, -5.502202388721240E+07,  1.379410834159040E+00,  2.173907719118488E+00,  1.704792595357602E+00),
      new body("Quaoar",color(230),560.5,1.4e21,-2.509470447883734E+09, -5.959053288257437E+09,  7.718306161747596E+08,  4.218945248645490E+00, -1.556219457039755E+00,  3.075951452229478E-01),
      new body("Tethys",color(230),536.3,61.76e19,9.574216765313864E+08,  9.819793131971315E+08, -5.508198482326096E+07,  1.977556491001859E-01, -1.088632517188188E+00,  3.294225170457716E+00),
      new body("Sedna",color(230),497.5,0.5e21,9.266929576684046E+09,  9.555428836711725E+09, -2.780925755359698E+09, -3.917782619972957E+00,  1.548504271019760E+00,  2.157590502721703E-01),
      new body("Ceres",color(230),469.7,0.939e21,-3.567414773716888E+08,  1.193768644542298E+08,  6.927036595980538E+07, -6.233326524696016E+00, -1.832962558073848E+01,  5.850328029221981E-01),
      new body("2002 MS4",color(230),467,0.6e21,-1.051114894176661E+09, -6.868462802075814E+09,  1.573507020527465E+09,  3.912121522967744E+00, -2.679712568856799E-01,  8.039998226998822E-01),
      new body("Orcus",color(230),458,0.641e21,-5.257718421760192E+09,  4.293404770356354E+09, -2.012058118897372E+09, -2.458050117854932E+00, -2.842594398548450E+00, -8.957229626014243E-01),
      new body("Salacia",color(230),446.5,0.4922e21,5.609841069520637E+09, -2.248704875097790E+09,  2.276133733819829E+09,  1.705842654869924E+00,  3.999028313911337E+00,  1.056396875231174E+00),



      new body("2002 AW197",color(230),384,3e20,-4.623643030500104E+09,  5.371081917027529E+09, -7.358271230232749E+08, -2.484406078975067E+00, -3.097489332928160E+00, -1.646888284501735E+00),
      new body("Varda",color(230),378,2.664e20,-3.532699879001182E+09, -5.995807801577412E+09,  2.257630186582763E+09,  3.819412409029667E+00, -1.378315941872443E+00,  6.494045047756599E-01),
      new body("2013 FY27",color(230),370,2.5e20,-1.089182320790220E+10,  4.132655031609718E+09, -3.548288013727268E+09, -9.187469238252930E-01, -2.066443009611235E+00,  1.264348550024358E+00),
      new body("2004 GV9",color(230),340,2e20,-5.159043144487278E+09, -2.079500098364438E+09, -1.685647262047249E+09,  1.372559490443248E+00, -4.621886679943867E+00,  1.142165567482779E+00),
      new body("2005 RN43",color(230),339.5,3.7e20,4.420565644036809E+09, -3.917176333821123E+09,  1.547454759297676E+09,  3.188236542501174E+00,  3.307795589471165E+00, -1.011829429957856E+00),
      new body("2015 RR245",color(230),335,3.5e20,1.070361036666907E+10, -4.872129574520273E+08,  8.019202172294115E+08, -1.980222824956060E+00,  3.118092988779863E+00, -4.896854713760905E-01),
      new body("Varuna",color(230),334,3.7e20,-9.665633213602618E+08,  6.357892485206325E+09,  4.668086375762510E+07, -4.320901995236902E+00, -4.188827021514273E-01,  1.341110633715027E+00),
      new body("2002 UX25",color(230),332.5,1.25e20,6.031696646648212E+09,  2.256444523904770E+09,  1.631460742787498E+08, -2.044327318072285E+00,  3.742805772785900E+00, -1.500946152200333E+00),
      new body("Gǃkúnǁʼhòmdímà",color(230),319,1.361e20,4.769446794716092E+09,  4.738959863579417E+09, -2.897732607909683E+09, -4.390501369386377E+00,  2.054169228587328E+00,  8.430282007975003E-01),
      new body("2014 UZ224",color(230),317.5,1.2e20,1.071035764265199E+10,  7.746236018163155E+09, -6.645728074021093E+09, -2.892671031001480E+00,  8.605997928958760E-01,  8.169423350928786E-01),
      new body("Ixion",color(230),308.5,1e20,-2.864000889730670E+09, -5.854295050765127E+09,  2.872862999210763E+08,  3.917163691577946E+00, -9.297382036045891E-01, -1.429096297896840E+00),
      new body("Chaos",color(230),307.5,1e20,3.351552260031047E+09,  5.377370234101646E+09,  1.899966413464544E+08, -4.127243490174473E+00,  2.129176405077815E+00,  9.657884683336433E-01),
      new body("2014 EZ51",color(230),307.5,1e20,-7.592736173777466E+07, -3.088593764151649E+08, -1.052289828633713E+08,  1.779437646158409E+01, -3.955897615567084E+00,  1.055837379026465E+00),
      new body("2010 RF43",color(230),305.5,1e20,5.617509957002004E+09, -3.587552461628972E+09, -3.344444841936346E+09,  3.304243428677758E+00,  2.539785633139368E+00,  5.226708062007249E-01),
      new body("2007 JJ43",color(230),305,1e20,-4.306689672339117E+09, -4.630706357294450E+09, -9.626054361219943E+08,  3.758869592773681E+00, -2.880857993794569E+00,  7.751003964489027E-01),
      new body("2006 QH181",color(230),303.5,1e20,5.603710415188473E+09,  1.045456048109368E+10, -8.578174616024928E+08, -1.703436382796238E+00,  2.366403326050643E+00,  7.958781195426481E-01),
      new body("2002 TC302",color(230),295.5,1e20,6.586382299965587E+09,  3.225041543785052E+09,  2.004056998647425E+08, -2.715636935181097E+00,  2.610470547395236E+00,  2.444221425472016E+00),


      new body("2002 XW93",color(230),293.5,1e20,),
      new body("2010 KZ39",color(230),287,1e20,),
      new body("2010 JO179",color(230),287,1e20,),
      new body("2014 KW509",color(230),287,1e20,),
      new body("2010 RE64",color(230),280.5,1e20,),
      new body("2014 AN55",color(230),280.5,1e20,),
      new body("2013 FZ27",color(230),280,1e20,),
      new body("2004 XR190",color(230),274.6,1e20,),
      new body("2002 XV93",color(230),274.6,1e20,),
      new body("2008 ST291",color(230),274.5,1e20,),
      new body("2004 XA192",color(230),274.5,1e20,),
      new body("2010 FX86",color(230),274.5,1e20,),
      new body("2003 VS2",color(230),274.15,1e20,),
      new body("2003 UZ413",color(230),268,1e20,),
      new body("2014 YA50",color(230),268,1e20,),
      new body("2014 FC69",color(230),266.5,1e20,),
      new body("2017 OF69",color(230),266.5,1e20,),
      new body("2001 UR163",color(230),265.7,1e20,),

      new body("Vesta",color(230),262.7,2.59e20,),
      new body("2005 RM43",color(230),262,1e20,),
      new body("Pallas",color(230),256,2.11e20,),
      new body("2004 TY364",color(230),256,1e20,),
      new body("2010 VK201",color(230),252.5,1e20,),
      new body("2003 QX113",color(230),252.5,1e20,),
      new body("2011 FW62",color(230),251.5,1e20,),
      new body("Enceladus",color(230),252.1,1.08e20,),
      new body("2018 VG18",color(230),250,0.9e20,),
      new body("2005 UQ513",color(230),249,0.8e20,),
      new body("2004 NT33",color(230),241.26,0.6e20,),
      new body("2014 UM33",color(230),239,0.5e20,),
      new body("Vanth",color(230),237.5,0.4e20,),
      new body("Miranda",color(230),235.8,0.659e20,),
      new body("Dziewanna",color(230),235,0.5e20,),
      new body("2015 AM281",color(230),234,0.5e20,),
      new body("2005 TB190",color(230),232,0.5e20,),
      new body("1999 DE9",color(230),230.5,0.5e20,),
      new body("2003 FY128",color(230),230,0.5e20,),
      new body("2000 YW134",color(230),227.5,0.5e20,),
      new body("2012 VP113",color(230),225,0.5e20,),
      new body("2002 VR128",color(230),224.25,0.5e20,),
      new body("2011 GM27",color(230),223,0.5e20,),
      new body("2010 TJ",color(230),221.5,0.5e20,),
      new body("Hygiea",color(230),217,0.832e20,),
      new body("1999 CD158",color(230),210.13,0.5e20,),
      new body("Proteus",color(230),210,0.44e20,),
      new body("2005 QU182",color(230),208,0.3e20,),
      new body("2002 KX14",color(230),207.5,0.3e20,),
      new body("2001 QF298",color(230),204.1,0.3e20,),
      new body("2004 PF115",color(230),203.15,0.3e20,),
      new body("Huya",color(230),203,0.3e20,),
      new body("2010 VZ98",color(230),200.67,0.3e20,),

      new body("2004 UX10",color(230),199,30e18,),
      new body("Miamus",color(230),198.2,37.49e18,),
      new body("1998 SN165",color(230),196.5,20e18,),
      new body("Ilmare",color(230),180.5,20e18,),
      new body("Nereid",color(230),170,20e18,),
      new body("1996 TL66",color(230),169.5,20e18,),
      new body("2002 WC19",color(230),169,77e18,),
      new body("2010 TY53",color(230),164.5,20e18,),
      new body("Hi'iaka",color(230),160,17.9e18,),
      new body("Interamnia",color(230),153.157,32.8e18,),
      new body("Europa (52)",color(230),151.959,23.8e18,),
      new body("2004 EW95",color(230),145.5,15e18,),
      new body("Davida",color(230),145.218,33.8e18,),
      new body("1995 SN55",color(230),145,10e18,),
      new body("Sylvia",color(230),143,14.78e18,),
      new body("Actaea",color(230),143,5e18,),
      new body("Hyperion",color(230),138.6,5.62e18,),
      new body("Lempo",color(230),136,5e18,),
      new body("1998 SM165",color(230),134,6.87e18,),
      new body("Euphrosyne",color(230),133.54,12.7e18,),
      new body("Chariklo",color(230),130.175,5e18,),
      new body("Eunomia",color(230),128.205,31.4e18,),
      new body("2005 RR43",color(230),126,5e18,),
      new body("Hiisi",color(230),125.5,5e18,),
      new body("Hektor",color(230),125,7.9e18,),
      new body("Sila",color(230),124.5,10.8e18,),
      new body("2007 RW10",color(230),123.5,5e18,),
      new body("Juno",color(230),123.298,27.3e18,),
      new body("Altjira",color(230),123,5e18,),
      new body("Cybele",color(230),118.63,13.6e18,),
      new body("Nunam",color(230),118,5e18,),
      new body("2001 QC298",color(230),117.5,11.88e18,),
      new body("Psyche",color(230),116.667,24.1e18,),
      new body("Paltienia",color(230),112.86,10.9e18,),
      new body("2014 NW65",color(230),112.5,5e18,),
      new body("Celto",color(230),111.5,5.4e18,),
      new body("2001 FP185",color(230),111.295,5e18,),
      new body("Hurculina",color(230),111.195,5e18,),
      new body("S/2007 (148780) 1",color(230),110.5,5e18,),
      new body("Bamberga",color(230),110.346,10.3e18,),
      new body("Doris",color(230),108.237,6.12e18,),
      new body("Chiron",color(230),107.8,5e18,),
      new body("Egeria",color(230),107.365,8.882e18,),
      new body("Iris",color(230),107,13.75e18,),
      new body("Phoebe",color(230),106.56,8.298e18,),
      new body("S/2012 (38628) 1",color(230),106.5,5e18,),
      new body("Deucalion",color(230),106,5e18,),
      new body("2015 TH365",color(230),105.5,5e18,),
      new body("Camillia",color(230),105.185,11.2e18,),
      new body("Fortuna",color(230),103.45,8.6e18,),
      new body("Thisbe",color(230),102.2,15.3e18,),
      new body("Eugenia",color(230),101.164,5.63e18,),

      new body("Chicago",color(230),99.385,5.06e18,),
      new body("Bienor",color(230),99,5e18,),
      new body("Themis",color(230),97,756,5.89e18,),
      new body("Larissa",color(230),97,4.2e18,),
      new body("Ursula",color(230),96.815,8.45e18,),
      new body("Amphirite",color(230),94.779,12.9e18,),
      new body("Daphne",color(230),94.5,6.31e18,),
      new body("Aurora",color(230),93.75,6.23e18,),
      new body("Hermione",color(230),93.5,4.97e18,),
      new body("Bertha",color(230),93.425,9.19e18,),
      new body("Hebe",color(230),92.59,13.9e18,),
      new body("Metis",color(230),91.506,8.39e18,),
      new body("Elektra",color(230),90.326,6.6e18,),
      new body("Loreley",color(230),90.042,19.1e18,),
      new body("Janus",color(230),89.5,1.898e18,),
      new body("Teharohiawako",color(230),89,2,44e18,),
      new body("Nemesis",color(230),88.97,5.97e18,),
      new body("Aegle",color(230),88.887,6.48e18,),
      new body("Diotima",color(230),87.929,6.91e18,),

      new body("Galatea",color(230),87.4,2.12e18,),
      new body("Aletheia",color(230),87.159,7.79e18,),
      new body("Phorcys",color(230),87,1.67e18,),

      new body("Hilda",color(230),85.315,1e18,),
      new body("Pretoria",color(230),85.185,4.58e18,),
      new body("Himalia",color(230),85,4.2e18,),
      new body("Namaka",color(230),85,1.79e18,),

      new body("Weywot",color(230),85,1e18,),
      new body("Rhadamanthus",color(230),84,1e18,),

      new body("Amalthea",color(230),83.5,2.08e18,),
      new body("Agamemnon",color(230),83.33,1e18,),

      new body("Sycorax",color(230),82.5,1e18,),
      new body("Puck",color(230),81,1e18,),

      new body("Manwe",color(230),80,1.94e18,),

      new body("Despina",color(230),78,1e18,),

      new body("Io 85",color(230),77.395,2.57e18,),

      new body("Patroclus",color(230),70.181,1.36e18,),

      new body("Portia",color(230),67.6,1e18,),

      new body("Achiles",color(230),65.049,1e18,),
      new body("Anchises",color(230),60.245,1e18,),
      new body("Paris",color(230),59.395,1e18,),
      new body("Deiphobus",color(230),59.11,1e18,),
      new body("Aneas",color(230),59.01,1e18,),
      new body("Diomedes",color(230),58.893,1e18,),

      new body("Epimetheus",color(230),58.1,5.266e18,),

      new body("Odysseus",color(230),57.312,1e18,),
      new body("Alchathous",color(230),56.841,1e18,),
      new body("Nester",color(230),56.16,1e18,),
      new body("Makhaon",color(230),55.828,1e18,),

      new body("Antilochus",color(230),54.421,1e18,),

      new body("Troilus",color(230),50.239,1e18,),

      new body("Thebe",color(230),49.3,100e15,),
      new body("Juliet",color(230),46.8,100e15,),
      new body("Prometheus",color(230),43.1,159.5e15,),
      new body("Elara",color(230),43,150e15,),
      new body("Pandora",color(230),40.7,137.1e15,),
      new body("Thalassa",color(230),40.7,100e15,),
      new body("Belinda",color(230),40.3,100e15,),
      new body("Cressida",color(230),39.8,100e15,),
      new body("Rosalinda",color(230),36,100e15,),
      new body("Caliban",color(230),36,50e15,),
      new body("Desdemona",color(230),32,50e15,),
      new body("Halimede",color(230),31,50e15,),
      new body("Naiad",color(230),30.2,50e15,),
      new body("Neso",color(230),30,100e15,),
      new body("Bianca",color(230),27,50e15,),
      new body("Prospero",color(230),25,50e15,),
      new body("Setebos",color(230),24,50e15,),
      new body("Carme",color(230),23,130e15,),
      new body("Sao",color(230),22,50e15,),
      new body("Meis",color(230),21.5,119.893e15,),
      new body("Ophelia",color(230),21.4,50e15,),
      new body("Laomedia",color(230),21,50e15,),
      new body("Cordelia",color(230),20.1,50e15,),

      new body("Pasiphae",color(230),20,50e15,),
      new body("Siarnaq",color(230),20,50e15,),
      new body("Psamathe",color(230),20,50e15,),

      new body("Hydra",color(230),19.65,48e15,),
      new body("Nix",color(230),19.017,45e15,),
      new body("Sinope",color(230),19,10e15,),
      new body("Lysithea",color(230),18,10e15,),
      new body("Helene",color(230),17.6,10e15,),
      new body("Hippocamp",color(230),17.4,50e15,),
      new body("Albiorix",color(230),16,5e15,),
      new body("Stephano",color(230),16,5e15,),

      new body("Ida",color(230),15.7,42e15,),

      new body("Atlas",color(230),15.1,6.6e15,),
      new body("Pan",color(230),14.1,4.95e15,),
      new body("Ananke",color(230),14,3e15,),
      new body("Perdita",color(230),13,3e15,),
      new body("Telesto",color(230),12.4,3e15,),
      new body("Mab",color(230),12,3e15,),

      new body("Phobos",color(230),11.267,10.659e15,2.069321721543608E+08, -3.553309714039974E+06, -5.150101792160033E+06, -2.368742384373939E-01,  2.757687588862674E+01,  1.326425169336574E+00),

      new body("Paaliaq",color(230),11,3e15,),
      new body("Francisco",color(230),11,3e15,),
      new body("Calypso",color(230),10.7,3e15,),
      new body("Leda",color(230),10,3e15,),
      new body("Margaret",color(230),10,3e15,),
      new body("Ferdinand",color(230),10,3e15,),

      new body("Euler",color(230),9.887,3e15,),

      new body("Cupid",color(230),9,3e15,),
      new body("Ymir",color(230),9,3e15,),
      new body("Trinculo",color(230),9,3e15,),

      new body("Romulus",color(230),9,93.19e15,),
      new body("Eros",color(230),8.42,6.687e15,),

      new body("Adrastea",color(230),8.2,3e15,),
      new body("Kivuq",color(230),8,3e15,),

      new body("Tarvos",color(230),7.5,3e15,),

      new body("Kerberos",color(230),6.333,16e15,),

      new body("Deimos",color(230),6.2,1.476e15,2.069078452791673E+08, -3.552199204991873E+06, -5.137479041260836E+06,  8.403785206215839E-01,  2.502391499509857E+01,  6.871254361062284E-01),

      new body("Ijiraq",color(230),6,1e15,),

      new body("Halley's Commet",color(230),5.5,22e15,-2.601883243824225E+09,  2.539468994390954E+09, -1.133567990651788E+09, -2.081803025577760E+00,  3.781514230504282E+00, -1.197131836691762E+00),

      new body("Styx",color(230),5.5,7.63e15,),

      new body("Erriapus",color(230),5,0.1e15,),
      new body("Callirhoe",color(230),4.3,0.1e15,),

      new body("Misterrogers",color(230),,0.1e15,),

      new body("Themisto",color(230),4,0.1e15,),

      new body("Daphnis",color(230),3.8,0.077e15,),
      new body("Bestla",color(230),3.5,0.1e15,),

      new body("Tempel 1 (9P)",color(230),,0.1e15,),
      new body("Tempel 2 (10P)",color(230),,0.1e15,),

      new body("Annefrank",color(230),2.4,0.1e15,),

      new body("Cruithne",color(230),1.036,0.01e15,),

      new body("2010 TK7",color(230),189.5,30e9,),
      new body("2010 SO16",color(230),178.5,30e9,),
      new body("Kamo'oalewa",color(230),41,0.5e9,),

      new body("Solar System Barycenter (SSB)",color(0),0,0,),
      new body("Mercury Barycenter",color(0),0,0,),
      new body("Venus Barycenter",color(0),0,0,),
      new body("Earth-Moon Barycenter (SMB)",color(0),0,0,),
      new body("Mars Barycenter",color(0),0,0,),
      new body("Jupiter Barycenter",color(0),0,0,),
      new body("Saturn Barycenter",color(0),0,0,),
      new body("Uranus Barycenter",color(0),0,0,),
      new body("Neptune Barycenter",color(0),0,0,),
      new body("Pluto Barycenter",color(0),0,0,),

      //new body(w/6   ,h/2,80000,0, -6,color(255,0,0)),
      //new body(w*5/6,h/2,160000,0, 3,color(50,150,250)),
      //new body(w/2   ,h/2,3,0, 0,color(0,200,0)),
      //new body(w/3   ,h/3,1,-3, 0,color(255,0,0)),
      //new body(w*2/3   ,h*2/3,0.5,3, 0,color(50,150,250)),
      //new body(w*11/12,h/2,1,0,-3,color(50,150,250)),

      //new body("2002 AW",color(230),384,3e20,-1.604458904014602E+08,  7.423705729773158E+07, -2.170340085078478E+05, -5.149833263865792E+00, -2.554488985956115E+01,  2.556986405650736E-01),
      //new body(w/2   ,h/2,3,0, 0,color(0,200,0)),
  ];
  dir=createVector(0,0);

  textSize(30);
  textFont("monospace");
}
var KM_AU=1.496e+8;
var tickspf=100;

var currentDate=946713600000;

//var scle=5e-7;
//var bubble=1e4;
//var mlt=1;
var scle=5e-7;
var bubble=2e7;
var mlt=15;

var thetas=[0,0];
var focusBody=0;
var speed=1/tickspf/30*60*60*24*365.25/12;
//speed/=1000;
var sensi=1;
var trails=true;
var sunCenter=false;
var showNames=true;
var extrude=true;
var trailSize=1;
var trailsPerFrame=2;
var continuousTrail=true;
var FB;

var sml=1;
function draw() {
  FB=bodies[focusBody];
  background(0);
  textAlign(LEFT,TOP);
  fill(255);
  var dat=new Date(currentDate);
  text(dat.toString().split(' ').splice(0,5).join(' ')+"\n"+bodies[focusBody].name,5,5);
  if(mouseIsPressed){
    thetas[0]-=(mouseX - pmouseX)/100*sensi;
    thetas[1]+=(mouseY - pmouseY)/100*sensi;
  }
  if(sunCenter){
    thetas[0]=-atan2(bodies[focusBody].pos.y-bodies[0].pos.y,bodies[focusBody].pos.x-bodies[0].pos.x)*sml+Math.PI/2;
  }
  textAlign(CENTER,TOP);
  translate(w/2,h/2);
  scale(scle);
  t++;

  var t=[bodies[focusBody].pos.x,bodies[focusBody].pos.y,bodies[focusBody].pos.z];

  t=[t[0]*cos(thetas[0])-t[1]*sin(thetas[0]),t[0]*sin(thetas[0])+t[1]*cos(thetas[0]),t[2]];

  t=[t[0],t[1]*cos(thetas[1])-t[2]*sin(thetas[1]),t[1]*sin(thetas[1])+t[2]*cos(thetas[1])];

  translate(-t[0],-t[1]);

  bodies.sort((a,b)=>{
    var t=[a.pos.x,a.pos.y,a.pos.y];

    t=[t[0]*cos(thetas[0])-t[1]*sin(thetas[0]),t[0]*sin(thetas[0])+t[1]*cos(thetas[0]),t[2]];

    t=[t[0],t[1]*cos(thetas[1])-t[2]*sin(thetas[1]),t[1]*sin(thetas[1])+t[2]*cos(thetas[1])];
    var v1=t[2];
    var t=[b.pos.x,b.pos.y,b.pos.y];

    t=[t[0]*cos(thetas[0])-t[1]*sin(thetas[0]),t[0]*sin(thetas[0])+t[1]*cos(thetas[0]),t[2]];

    t=[t[0],t[1]*cos(thetas[1])-t[2]*sin(thetas[1]),t[1]*sin(thetas[1])+t[2]*cos(thetas[1])];
    return t[2]-v1;
  });

  noStroke();
  if(trails){
    for(var i=0;i<bodies.length;i++){
      bodies[i].drawTrail();
    }
  }
  for(i=0;i<bodies.length;i++){
    bodies[i].draw();
  }

  bodies.sort((a,b)=>b.m-a.m);

  for(var j=0;j<tickspf;j++){
    for(var i=0;i<bodies.length;i++){
      bodies[i].changeV(i);
    }
    for(var i=0;i<bodies.length;i++){
      bodies[i].move(false);
    }
  }
  for(var i=0;i<bodies.length;i++){
    bodies[i].changeV(i);
  }
  for(var i=0;i<bodies.length;i++){
    bodies[i].move(true);
  }
}

function spher(x,y,z,d,c,name){
  var t=[x,y,z];

  t=[t[0]*cos(thetas[0])-t[1]*sin(thetas[0]),t[0]*sin(thetas[0])+t[1]*cos(thetas[0]),t[2]];

  t=[t[0],t[1]*cos(thetas[1])-t[2]*sin(thetas[1]),t[1]*sin(thetas[1])+t[2]*cos(thetas[1])];

  if(name&&showNames){
    push();
    translate(t[0],t[1]);
    scale(d/30);
    fill(0);
    var tw=textWidth(name+"  ");
    rect(-tw/2,15,tw,40);
    fill(255);
    text(name,0,20);
    pop();
    fill(c);
  }
  else if(c){fill(c);}
  ellipse(t[0],t[1],d,d);
};
function vert3d(x,y,z,d){
  var t=[x,y,z];

  t=[t[0]*cos(thetas[0])-t[1]*sin(thetas[0]),t[0]*sin(thetas[0])+t[1]*cos(thetas[0]),t[2]];

  t=[t[0],t[1]*cos(thetas[1])-t[2]*sin(thetas[1]),t[1]*sin(thetas[1])+t[2]*cos(thetas[1])];

  vertex(t[0],t[1],d,d);
};
/*
function line3d(x1,y1,z1,x2,y2,z2,d,c){
  var t=[x1,y1,z1];

  t=[t[0]*cos(thetas[0])-t[1]*sin(thetas[0]),t[0]*sin(thetas[0])+t[1]*cos(thetas[0]),t[2]];

  t=[t[0],t[1]*cos(thetas[1])-t[2]*sin(thetas[1]),t[1]*sin(thetas[1])+t[2]*cos(thetas[1])];
  tt=[t[0],t[1]];
  t=[x2,y2,z2];

  t=[t[0]*cos(thetas[0])-t[1]*sin(thetas[0]),t[0]*sin(thetas[0])+t[1]*cos(thetas[0]),t[2]];

  t=[t[0],t[1]*cos(thetas[1])-t[2]*sin(thetas[1]),t[1]*sin(thetas[1])+t[2]*cos(thetas[1])];

  if(c){stroke(c);}
  strokeWeight(d);
  line(t[0],t[1],tt[0],tt[1]);
  noStroke();
}*/
var id=0;
var body=function(name,c,r,mass,x,y,z,vx,vy,vz){
  this.name=name;
  this.pos=createVector(x,y,z);//position
  this.m=mass*(1+Math.random()*1e-11);//mass
  this.v=createVector(vx,vy,vz);//velocity
  this.c=c;//color
  this.r=r;//radius
  this.hide=false;
  this.id=id++;
  this.counter=0;

  this.bodytpos=[x,y,z];
  this.bodytv=[vx,vy,vz];
  points[this.id]=[];
  while(points[this.id].length<pts){points[this.id].push([-1,-1]);}
}
body.prototype.reset=function(){
  this.pos.x=this.bodytpos[0];
  this.pos.y=this.bodytpos[1];
  this.pos.z=this.bodytpos[2];
  this.v.x=this.bodytv[0];
  this.v.y=this.bodytv[1];
  this.v.z=this.bodytv[2];
}
body.prototype.draw=function(){
    if(this.hide){return;}
    spher(this.pos.x,this.pos.y,this.pos.z,this.r*mlt+bubble,this.c,this.name);
    //ellipse(this.pos.x,this.pos.y,Math.sqrt(this.m)*mlt+bubble,Math.sqrt(this.m)*mlt+bubble);
}
body.prototype.drawTrail=function(){
  if(this.hide){return;}
  if(continuousTrail){strokeWeight(1/scle*trailSize);stroke(this.c);noFill();beginShape();}
  for(i=0;i<points[this.id].length;i++){
    if(extrude){
      if(continuousTrail){
        vert3d(
          points[this.id][i][0]-points[FB.id][i][0]+FB.pos.x,
          points[this.id][i][1]-points[FB.id][i][1]+FB.pos.y,
          points[this.id][i][2]-points[FB.id][i][2]+FB.pos.z);
        /*line3d(
          points[this.id][i-1][0]-points[FB.id][i-1][0]+FB.pos.x,
          points[this.id][i-1][1]-points[FB.id][i-1][1]+FB.pos.y,
          points[this.id][i-1][2]-points[FB.id][i-1][2]+FB.pos.z,
          points[this.id][i][0]-points[FB.id][i][0]+FB.pos.x,
          points[this.id][i][1]-points[FB.id][i][1]+FB.pos.y,
          points[this.id][i][2]-points[FB.id][i][2]+FB.pos.z,
          1/scle*trailSize,this.c);*/
      }
      else{
        spher(
          points[this.id][i][0]-points[FB.id][i][0]+FB.pos.x,
          points[this.id][i][1]-points[FB.id][i][1]+FB.pos.y,
          points[this.id][i][2]-points[FB.id][i][2]+FB.pos.z,
          1/scle*trailSize,this.c);
      }
    }
    else{
      if(continuousTrail){
        vert3d(
          points[this.id][i][0],
          points[this.id][i][1],
          points[this.id][i][2]);
        /*
        line3d(
          points[this.id][i-1][0],
          points[this.id][i-1][1],
          points[this.id][i-1][2],
          points[this.id][i][0],
          points[this.id][i][1],
          points[this.id][i][2],
          1/scle*trailSize,this.c);
          */
      }
      else{
        spher(
          points[this.id][i][0],
          points[this.id][i][1],
          points[this.id][i][2],
          1/scle*trailSize,this.c);
      }
      //spher(points[this.id][i][0],points[this.id][i][1],points[this.id][i][2],1/scle*trailSize);
    }
    //point(points[i][0],points[i][1]);
  }
  if(continuousTrail){endShape();noStroke();}
}
body.prototype.move=function(pt){
  this.v.mult(speed);
  this.pos.add(this.v);
  this.v.div(speed);
  if(pt||this.counter++>tickspf/trailsPerFrame){
    points[this.id].push([this.pos.x,this.pos.y,this.pos.z]);
    while(points[this.id].length>pts){points[this.id].shift();}
    this.counter=0;
  }
}
body.prototype.changeV=function(id){
/*

    dir.x=bodies[i].x-this.x;
    dir.y=bodies[i].y-this.y;
    dir.normalize();
    dir.mult(bodies[i].m*( (bodies[i].x-this.x)*(bodies[i].x-this.x)+(bodies[i].y-this.y)*(bodies[i].y-this.y) ));
    this.v.add(dir);
*/
    if(id===0){
      currentDate+=speed*1000;
      return;
    }
    var tv=this.v.y;
    for(var i=0;i<bodies.length;i++){
        if(i!=id){
            dir.x=bodies[i].pos.x-this.pos.x;
            dir.y=bodies[i].pos.y-this.pos.y;
            dir.z=bodies[i].pos.z-this.pos.z;
            //var dis=dir.x*dir.x+dir.y*dir.y+dir.z*dir.z;
            var dis=dir.mag();
            dis*=dis;
            dir.normalize();
            dir.mult(speed*G*bodies[i].m/dis);
            this.v.add(dir);
        }
    }
}
function resetbodies(){
  currentDate=946713600000;
  for(var i=0;i<bodies.length;i++){
    bodies[i].reset(i);
  }
}
function goToDate(goTo,stepSize,precision){
  speed=stepSize?stepSize:360*6;
  var Precision=precision?precision:3;
  resetbodies();
  var j=0
  if(currentDate>goTo){
    speed*=-1;
    while(currentDate>goTo){
      for(var i=0;i<bodies.length;i++){
        bodies[i].changeV(i);
      }
      for(var i=0;i<bodies.length;i++){
        bodies[i].move(false);
      }
    }
    speed/=-10;
    j++;
  }
  for(;j<Precision;j++){
    while(currentDate<goTo){
      for(var i=0;i<bodies.length;i++){
        bodies[i].changeV(i);
      }
      for(var i=0;i<bodies.length;i++){
        bodies[i].move(false);
      }
    }
    speed/=-10;
    while(currentDate>goTo){
      for(var i=0;i<bodies.length;i++){
        bodies[i].changeV(i);
      }
      for(var i=0;i<bodies.length;i++){
        bodies[i].move(false);
      }
    }
    speed/=-10;
  }
  speed=1/tickspf/30;
}
function step(seconds){
  tspeed=speed;
  speed=seconds?seconds:speed;
  for(var i=0;i<bodies.length;i++){
    bodies[i].changeV(i);
  }
  for(var i=0;i<bodies.length;i++){
    bodies[i].move(false);
  }
  speed=tspeed;
}
function getNextApproach(bodya,bodyb,initialStepSize,precision){
  var stepSize=initialStepSize?initialStepSize:360;

  var ldis=bodies[bodya].pos.dist(bodies[bodyb].pos);
  step(stepSize);
  var dis=bodies[bodya].pos.dist(bodies[bodyb].pos);
  while(dis>ldis){
  	step(stepSize);
  	ldis=dis;
  	dis=bodies[bodya].pos.dist(bodies[bodyb].pos);
  }
  var Precision=precision?precision:5;
  for(var i=0;i<Precision;i++){
    ldis=bodies[bodya].pos.dist(bodies[bodyb].pos);
    step(stepSize);
    dis=bodies[bodya].pos.dist(bodies[bodyb].pos);
    while(dis<ldis){
    	step(stepSize);
    	ldis=dis;
    	dis=bodies[bodya].pos.dist(bodies[bodyb].pos);
    }
    stepSize/=-10;
    ldis=bodies[bodya].pos.dist(bodies[bodyb].pos);
    step(stepSize);
    dis=bodies[bodya].pos.dist(bodies[bodyb].pos);
    while(dis<ldis){
    	step(stepSize);
    	ldis=dis;
    	dis=bodies[bodya].pos.dist(bodies[bodyb].pos);
    }
    stepSize/=-10;
  }
  console.log(bodies[bodya].name+" is closest to "+bodies[bodyb].name+" on\n"+new Date(currentDate).toString().split(' ').splice(0,5).join(' ')+" at a distance of\n"+dis+" km, or\n"+dis/KM_AU+" AU");
  return dis;
};
var shifting=false;
var holding=[{},{}];
function keyReleased() {
  holding[0][key]=false;
  holding[1][keyCode]=false;
}
function keyPressed() {
  if(holding[1][UP_ARROW]){
    if (key === "w") {
      tickspf*=1.5;
    }
    else if (key === "t") {
      trailsPerFrame*=1.5;
    }
    else if (key === "T") {
      trailSize*=1.5;
    }
  }
  else if(holding[1][DOWN_ARROW]){
    if (key === "w") {
      tickspf/=1.5;
    }
    else if (key === "t") {
      trailsPerFrame/=1.5;
    }
    else if (key === "T") {
      trailSize/=1.5;
    }
  }
  else if(holding[0]["w"]){
    if (keyCode === UP_ARROW) {
      tickspf*=1.5;
    }
    else if (keyCode === DOWN_ARROW) {
      tickspf/=1.5;
      if(tickspf<1){tickspf=1;}
    }
    else if (keyCode === LEFT_ARROW) {
      tickspf=1;
    }
    else if (keyCode === RIGHT_ARROW) {
      tickspf=1000;
    }
  }
  else if(holding[0]["t"]){
    if (keyCode === UP_ARROW) {
      trailsPerFrame*=1.5;
    }
    else if (keyCode === DOWN_ARROW) {
      trailsPerFrame/=1.5;
    }
    else if (keyCode === LEFT_ARROW) {
      trailsPerFrame=1;
    }
    else if (keyCode === RIGHT_ARROW) {
      trailsPerFrame/=10;
    }
  }
  else if(holding[0]["T"]){
    if (keyCode === UP_ARROW) {
      trailSize*=1.5;
    }
    else if (keyCode === DOWN_ARROW) {
      trailSize/=1.5;
    }
  }
  else if (holding[1][SHIFT]){
    if (key === " ") {
      speed=1/tickspf/30*60*60*24*30;
    }
    else if (keyCode === BACKSPACE) {
      scle=5e-7;
      bubble=2e7;
      mlt=15;
    }
    else if (keyCode === CONTROL) {
      thetas[1]=-Math.PI/2;
    }
    else if (key === "E") {
      bubble*=15;
    }
    else if (key === "D") {
      bubble/=15;
    }
    else if (key === "T") {
      continuousTrail=!continuousTrail;
    }
    else if (key === "Q") {
      sensi*=1.5;
    }
    else if (key === "A") {
      sensi/=1.5;
    }
    else if (key === "R") {
      resetbodies();
    }
    else if (key === "N") {
      showNames=!showNames;
    }
    else if (key === "H") {
      for(var i=0;i<bodies.length;i++){
        bodies[i].hide=!bodies[i].hide;
      }
      bodies[focusBody].hide=false;
    }
    else if (key === "Z") {
      thetas=[0,0];
    }
  }
  else if (key === " ") {
    speed=1/tickspf/30;
  }
  else if (keyCode === BACKSPACE) {
    bubble=1;
    mlt=1;
  }
  else if (keyCode === CONTROL) {
    thetas[1]=0;
  }
  else if (key === "z") {
    thetas=[0,0];
    scle=5e-7;
    bubble=1;
    mlt=1;
  }
  else if (key === "o") {
    pts*=1.5;
    if(pts>1e10){pts=1e10;}
    for(var i=0;i<points.length;i++){
      while(points[i].length<pts){points[i].unshift([-1,-1]);}
    }
  }
  else if (key === "l") {
    pts/=1.5;
    if(pts<1){pts=1;}
    for(var i=0;i<points.length;i++){
      while(points[i].length>pts){points[i].shift();}
    }
  }
  else if (key === "r") {
    focusBody++;
    if(focusBody>=bodies.length){
      focusBody=0;
    }
  }
  else if (key === "f") {
    focusBody--;
    if(focusBody<0){
      focusBody=bodies.length-1;
    }
  }
  else if (key === "q") {
    mlt*=1.5;
  }
  else if (key === "a") {
    mlt/=1.5;
  }
  else if (key === "w") {
    speed*=1.5;
  }
  else if (key === "s") {
    speed/=1.5;
  }
  else if (key === "e") {
    bubble*=1.5;
  }
  else if (key === "d") {
    bubble/=1.5;
  }
  else if (key === "h") {
    bodies[focusBody].hide=!bodies[focusBody].hide;
  }
  else if (key === "n") {
    goToDate(new Date().getTime(),360*6);
  }
  else if (key === "1") {
    sunCenter=!sunCenter;
  }
  else if (key === "b") {
    extrude=!extrude;
  }
  else if (key === "t") {
    trails=!trails;
  }
  else if (keyCode === LEFT_ARROW) {
    speed*=-1;
  }
  else if (keyCode === UP_ARROW) {
    scle*=1.5;
    bubble/=1.5;
  }
  else if (keyCode === DOWN_ARROW) {
    scle/=1.5;
    bubble*=1.5;
  }
  holding[0][key]=true;
  holding[1][keyCode]=true;
}
/*
function touchBodyted () {
  var fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
}

/* full screening will change the size of the canvas */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  w=width;
  h=height;
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
document.ontouchmove = function(event) {
    event.preventDefault();
}
/*cool*/
