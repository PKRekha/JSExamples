var obj = {
  city: {
    id: 4930956,
    name: "Boston",
    coord: {
      lon: -71.0583,
      lat: 42.3603
    },
    country: "US",
    population: 617594,
    timezone: -14400
  },
  cod: "200",
  message: 21.6109226,
  cnt: 5,
  list: [
    {
      dt: 1569081600,
      sunrise: 1569061814,
      sunset: 1569105878,
      temp: {
        day: 26.92,
        min: 15.87,
        max: 30.26,
        night: 17.8,
        eve: 27.48,
        morn: 15.87
      },
      pressure: 1021.87,
      humidity: 55,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "sky is clear",
          icon: "01d"
        }
      ],
      speed: 1,
      deg: 28,
      clouds: 0
    },
    {
      dt: 1569168000,
      sunrise: 1569148277,
      sunset: 1569192171,
      temp: {
        day: 25.35,
        min: 14.82,
        max: 28.79,
        night: 19.28,
        eve: 26.83,
        morn: 14.82
      },
      pressure: 1019.24,
      humidity: 47,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "sky is clear",
          icon: "01d"
        }
      ],
      speed: 3.18,
      deg: 213,
      clouds: 0
    },
    {
      dt: 1569254400,
      sunrise: 1569234741,
      sunset: 1569278463,
      temp: {
        day: 27.46,
        min: 19.54,
        max: 29.24,
        night: 19.54,
        eve: 28.57,
        morn: 20.75
      },
      pressure: 1009.88,
      humidity: 58,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      speed: 5.48,
      deg: 228,
      clouds: 25,
      rain: 2.81
    },
    {
      dt: 1569340800,
      sunrise: 1569321204,
      sunset: 1569364756,
      temp: {
        day: 21.55,
        min: 12.71,
        max: 23.45,
        night: 12.71,
        eve: 19.45,
        morn: 14.75
      },
      pressure: 1006.8,
      humidity: 53,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      speed: 3.58,
      deg: 285,
      clouds: 0,
      rain: 0.75
    },
    {
      dt: 1569427200,
      sunrise: 1569407668,
      sunset: 1569451050,
      temp: {
        day: 17.15,
        min: 8.91,
        max: 21.25,
        night: 11.72,
        eve: 20.86,
        morn: 8.91
      },
      pressure: 1009.8,
      humidity: 53,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      speed: 2.13,
      deg: 334,
      clouds: 69
    }
  ]
};


var a2 = Object.values(obj);
for (a22 of a2) {
  console.log(a22[2]);
}

var a2=Object.keys(obj)
    for(a21 of a2){
        console.log(a21)
    }


for (var i in obj) {
  console.log(obj[i]);
}

for(a in obj){
    console.log(a)
}


function getObject(obj){
    
    for (a in obj) {
      console.log(obj[a]);
    }
    
}

getObject(obj);

function getObject(obj) {
  for (a in obj) {
    console.log(obj[a].country)
  }
}

getObject(obj);