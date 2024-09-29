const busRoutes = [
  {
    route: 1,
    stops: [
      "Railway Station",
      "Ek Moriya",
      "Nawaz Sharif Hospital",
      "Kashmiri Gate",
      "Lari Adda",
      "Azadi Chowk",
      "Texali Chowk",
      "Bhatti Chowk",
    ],
  },

  {
    route: 2,
    stops: [
      "Samanabad Morr",
      "Corporation Chowk",
      "Taj Company",
      "Sanda",
      "Double Sarkan",
      "Moon Market",
      "Ganda Nala",
      "Bhatti Chowk",
    ],
  },
  {
    route: 3,
    stops: [
      "Railway Station",
      "Ek Moriya",
      "Nawaz Sharif Hospital",
      "Kashmiri Gate",
      "Lari Adda",
      "Azadi Chowk",
      "Timber Market",
      "METRO",
      "Niazi Chowk",
      "Shahdara Metro Station",
      "Shahdara Lari Adda",
    ],
  },
  {
    route: 4,
    stops: [
      "R.A Bazar",
      "Nadeem Chowk",
      "Defence Morr",
      "Shareef Market",
      "Walton",
      "Qainchi",
      "Ghazi Chowk",
      "Chungi Amar Sidhu",
    ],
  },
  {
    route: 5,
    stops: [
      "Shad Bagh Underpass",
      "Rajput Park",
      "Madina Chowk",
      "Lohay Wali Pulley",
      "Badami Bagh",
      "Lari Adda Gol Chakar",
      "Azadi Chowk",
      "Taxali Chowk",
      "Bhatti Chowk",
    ],
  },
  {
    route: 6,
    stops: [
      "Babu Sabu",
      "Niazi Adda",
      "City Bus Stand",
      "Chowk Yateem Khana",
      "Bhala Stop",
      "Samanabad Morr",
      "Chauburji",
      "Riwaz Garden",
      "M.A.O College",
      "Firdous Cinema",
      "Raj Garh Chowk",
    ],
  },
  {
    route: 7,
    stops: [
      "Bagrian",
      "Depot Chowk",
      "Minhaj University",
      "Hamdard Chowk",
      "Rehmat Eye Hospital",
      "Pindi Stop",
      "Peco Morr",
      "Kot Lakhpat Railway Station",
      "Phatak Mandi",
      "Qainchi",
      "Ghazi Chowk",
      "Chungi Amar Sidhu",
    ],
  },
  {
    route: 8,
    stops: [
      "Doctor Hospital",
      "Wafaqi Colony",
      "IBA Stop",
      "Hailey College",
      "Campus Pull",
      "Barkat Market",
      "Kalma Chowk",
      "Qaddafi Stadium",
      "Canal",
    ],
  },
  {
    route: 9,
    stops: [
      "Railway Station",
      "Haji Camp",
      "Shimla Pahari",
      "Lahore Zoo",
      "Chairing Cross",
      "Ganga Ram Hospital",
      "Qartaba Chowk",
      "Chauburji",
      "Sham Nagar",
    ],
  },
  {
    route: 10,
    stops: [
      "Multan Chungi",
      "Mustafa Town",
      "Karim Block Market",
      "PU Examination Center",
      "Bhekewal Morr",
      "Wahdat Colony",
      "Naqsha Stop",
      "Canal",
      "Ichra",
      "Shama",
      "Qartaba Chowk",
    ],
  },
  {
    route: 11,
    stops: [
      "Babu Sabu",
      "Niazi Adda",
      "City Bus Stand",
      "Chowk Yateem Khana",
      "Scheme Morr",
      "Flat Stop",
      "Dubai Chowk",
      "Bhekewal Morr",
      "Sheikh Zaid Hospital",
      "Campus Pull",
      "Barkat Market",
      "Kalma Chowk",
      "Liberty Chowk",
      "Hafeez Center",
      "Mini Market",
      "Main Market, Gulberg",
    ],
  },
  {
    route: 12,
    stops: [
      "R.A Bazar",
      "PAF Market",
      "Girja Chowk",
      "Afshan Chowk",
      "Fortress Stadium",
      "Gymkhana",
      "Aitchison College",
      "PC Hotel",
      "Lahore Zoo",
      "Chairing Cross",
      "GPO",
      "Anarkali",
      "Civil Secretariat",
    ],
  },
  {
    route: 13,
    stops: [
      "Bagrian",
      "Ghazi Chowk",
      "UMT Stop",
      "Khokhar Chowk",
      "Akbar Chowk",
      "Pindi Stop",
      "Peco Morr",
      "Phatak Mandi",
      "Ittefaq Hospital",
      "Model Town",
      "Kalma Chowk",
    ],
  },
  {
    route: 14,
    stops: [
      "R.A Bazar",
      "Fauji Foundation",
      "Ali View Garden",
      "Bhatta Chowk",
      "DHA Nursery",
      "LESCO",
      "Chota Ishara Stop",
      "Naka Stop",
      "Ghazi Chowk",
      "Chungi Amar Sidhu",
    ],
  },
  {
    route: 15,
    stops: [
      "Qartba Chowk",
      "Hakeem M. Ajmal Khan Road",
      "Gulshan Ravi Road",
      "Kacha Ferozepur Road",
      "Babu Sabu",
    ],
  },
  {
    route: 16,
    stops: ["Railway Station", "Circular Road", "Ek Moriya", "Bhatti Chowk"],
  },
  {
    route: 17,
    stops: [
      "Canal",
      "Main Boulevard Shadman",
      "Davis Road",
      "Shimla Pahari",
      "Haji Camp",
      "Railway Station",
    ],
  },
  {
    route: 18,
    stops: [
      "Bhatti Chowk",
      "Circular Road",
      "Nisbat Road",
      "Abbot Road",
      "Shimla Pahari",
    ],
  },
  {
    route: 19,
    stops: [
      "Main Market",
      "Jail Road",
      "Lytton Road",
      "Crust Road",
      "Lower Mall Road",
      "Bhatti Chowk",
    ],
  },
  {
    route: 20,
    stops: [
      "Jain Mandar",
      "Al-Mumtaz Road",
      "Poonch Road",
      "Lake Road",
      "Chowk Yateem Khana",
    ],
  },
  {
    route: 21,
    stops: [
      "Depot Chowk",
      "Madar-e-Millat Road",
      "Ali Road",
      "Baig Road",
      "Canal Bank Road",
      "Thokar Niaz Baig",
    ],
  },
  {
    route: 22,
    stops: [
      "Depot Chowk",
      "Madar-e-Millat Road",
      "Sutlej Avenue",
      "Shahrah Nazria-e-Pakistan Avenue",
      "Thokar Niaz Baig",
    ],
  },
  {
    route: 23,
    stops: [
      "Valencia",
      "Valencia Main Boulevard",
      "Khayaban-e-Jinnah",
      "Raiwind Road",
      "Thokar Niaz Baig",
    ],
  },
  {
    route: 24,
    stops: [
      "Multan Chungi",
      "College Road",
      "Maulana Shaukat Ali Road",
      "Wahdat Road",
      "Ghazi Chowk",
    ],
  },
  {
    route: 25,
    stops: [
      "R.A Bazar",
      "Lahore-Bedian Road",
      "Allama Iqbal Road",
      "Railway Station",
    ],
  },
  {
    route: 26,
    stops: [
      "R.A Bazar",
      "G.T Road",
      "Shalimar Link Road",
      "Tufail Road",
      "Sarfraz Rafique Road",
      "Daroghawala",
    ],
  },
  {
    route: 27,
    stops: ["BataPur", "GT Road", "Daroghawala"],
  },
  {
    route: 28,
    stops: [
      "Quaid e Azam Interchange",
      "Harbanspura Road",
      "Zarar Shaheed Road",
      "Airport",
    ],
  },
  {
    route: 29,
    stops: [
      "Niazi Interchange",
      "Lahore Ring Road",
      "Band Road",
      "Sue Wala Road",
      "Salamat Pura",
    ],
  },
  {
    route: 30,
    stops: [
      "Daroghawala",
      "G.T. Road",
      "Shalimar Link Road",
      "Sarfraz Rafique Road",
    ],
  },
];

// now i started to get stops from arary and put on dropdown options
const startPointDropdown = document.getElementById("startPoint");
const endPointDropdown = document.getElementById("endPoint");
const searchBtn = document.getElementById("searchBtn");

function showDropdown(routesArray) {
  const allStops = new Set();
  for (let i = 0; i < routesArray.length; i++) {
    routesArray[i].stops.forEach((stop) => {
      allStops.add(stop);
    });
  }
  // console.log(allStops);
  allStops.forEach((stop) => {
    const startOptions = document.createElement("option");
    startOptions.value = stop;
    startOptions.textContent = stop;
    startPointDropdown.appendChild(startOptions);

    const endOptions = document.createElement("option");
    endOptions.value = stop;
    endOptions.textContent = stop;
    endPointDropdown.appendChild(endOptions);
  });
}

showDropdown(busRoutes);

// now started actual logic function

function FindRoutesWithStops(startPoint, destinationPoint, FullArray) {
  let result = [];
  for (let i = 0; i < FullArray.length; i++) {
    let stops = FullArray[i].stops;
    let startIndex = stops.indexOf(startPoint);
    let destinationIndex = stops.indexOf(destinationPoint);
    if (
      startIndex !== -1 &&
      destinationIndex !== -1 &&
      startIndex < destinationIndex
    ) {
      result.push(FullArray[i]);
    }
  }
  return result;
}

// function for search button and event listners
function SearchHandle() {
  const selectedStart = startPointDropdown.value;
  const selectedDestination = endPointDropdown.value;
  if (
    selectedStart == "" ||
    selectedDestination == "" ||
    selectedStart === selectedDestination
  ) {
    alert(
      "Please select both start and destination point && Not select both points same"
    );
    return;
  }
  const matchingResult = FindRoutesWithStops(
    selectedStart,
    selectedDestination,
    busRoutes
  );
  let resultPara = document.getElementById("result");

  if (matchingResult.length > 0) {
    console.log(matchingResult);
    resultPara.innerHTML = `Matching Routes:  ${matchingResult
      .map(function (routes) {
        return ` Route ${
          routes.route
        } and stops are : <br>  ${routes.stops.join(" - ")}  `;
      })
      .join("<br> <br> ")}`;
    resultPara.style.display = "block";
    // alert("Matching routes found. Check the console for details.");
  } else {
    console.log("Result not found");
    // alert("No routes found for the selected start and destination.");
    resultPara.innerHTML = `No Matching Routes Found`;
    resultPara.style.display = "block";
  }
}
searchBtn.addEventListener("click", SearchHandle);

// console.log(busRoutes[2].stops.length)
// let start = "Railway Station";
// let destination = "Lari Adda";
// console.log(busRoutes[0].stops.indexOf("Texali Chowk"))

// function FindRoutesWithStops(startPoint, destinationPoint, FullArray) {
//   let result = [];
//   for (let i = 0; i < FullArray.length; i++) {
//     let stops = FullArray[i].stops;
//     // let startIndex;
//     // if(startPoint===stops[startIndex]){
//     //     startIndex=stops.indexOf(startPoint);
//     // }
//     let startIndex = stops.indexOf(startPoint);
//     // console.log(startIndex)
//     let destinationIndex = stops.indexOf(destinationPoint);
//     if (
//       startIndex !== -1 &&
//       destinationIndex !== -1 &&
//       startIndex < destinationIndex
//     ) {
//       result.push(FullArray[i]);
//     }
//   }
//   return result;
// }

// let matchingRoutes = FindRoutesWithStops(start, destination, busRoutes);
// if (matchingRoutes.length > 0) {
//   console.log(matchingRoutes);
// } else {
//   console.log("Result not found");
// }

// code has bug when start index is greater than destination index like shuffle start point and end point
// const busRoutes = [
//   {
//     route: 1,
//     stops: [
//       "Railway Station",
//       "Ek Moriya",
//       "Nawaz Sharif Hospital",
//       "Kashmiri Gate",
//       "Lari Adda",
//       "Azadi Chowk",
//       "Texali Chowk",
//       "Bhatti Chowk",
//     ],
//   },

//   {
//     route: 2,
//     stops: [
//       "Samanabad Morr",
//       "Corporation Chowk",
//       "Taj Company",
//       "Sanda",
//       "Double Sarkan",
//       "Moon Market",
//       "Ganda Nala",
//       "Bhatti Chowk",
//     ],
//   },
//   {
//     route: 3,
//     stops: [
//       "Railway Station",
//       "Ek Moriya",
//       "Nawaz Sharif Hospital",
//       "Kashmiri Gate",
//       "Lari Adda",
//       "Azadi Chowk",
//       "Timber Market",
//       "METRO",
//       "Niazi Chowk",
//       "Shahdara Metro Station",
//       "Shahdara Lari Adda",
//     ],
//   },
//   {
//     route: 4,
//     stops: [
//       "R.A Bazar",
//       "Nadeem Chowk",
//       "Defence Morr",
//       "Shareef Market",
//       "Walton",
//       "Qainchi",
//       "Ghazi Chowk",
//       "Chungi Amar Sidhu",
//     ],
//   },
// ];

// // console.log(busRoutes[2].stops.length)
// let start = "Railway Station";
// let destination = "Lari Adda";

// function FindRoutesWithStops(startPoint, destinationPoint, FullArray) {
//   let result = [];
//   for (let i = 0; i < FullArray.length; i++) {
//     let stops = FullArray[i].stops;
//     if (stops.includes(startPoint) && stops.includes(destinationPoint)) {
//       result.push(FullArray[i]);
//     }
//   }
//   return result;
// }

// let matchingRoutes = FindRoutesWithStops(start, destination, busRoutes);
// if (matchingRoutes.length > 0) {
//   console.log(matchingRoutes);
// } else {
//   console.log("Result not found");
// }
