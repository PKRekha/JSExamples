var obj={
    "city": {
        "id": 4930956,
        "name": "Boston",
        "coord": {
            "lon": -71.0583,
            "lat": 42.3603
        },
        "country": "US",
        "population": 617594,
        "timezone": -14400
    },
    "cod": "200",
    "message": 21.6109226,
    "cnt": 5,
    "list": [{
        "dt": 1569081600,
        "sunrise": 1569061814,
        "sunset": 1569105878,
        "temp": {
            "day": 26.92,
            "min": 15.87,
            "max": 30.26,
            "night": 17.8,
            "eve": 27.48,
            "morn": 15.87
        },
        "pressure": 1021.87,
        "humidity": 55,
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
        }],
        "speed": 1,
        "deg": 28,
        "clouds": 0
    }, {
        "dt": 1569168000,
        "sunrise": 1569148277,
        "sunset": 1569192171,
        "temp": {
            "day": 25.35,
            "min": 14.82,
            "max": 28.79,
            "night": 19.28,
            "eve": 26.83,
            "morn": 14.82
        },
        "pressure": 1019.24,
        "humidity": 47,
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
        }],
        "speed": 3.18,
        "deg": 213,
        "clouds": 0
    }, {
        "dt": 1569254400,
        "sunrise": 1569234741,
        "sunset": 1569278463,
        "temp": {
            "day": 27.46,
            "min": 19.54,
            "max": 29.24,
            "night": 19.54,
            "eve": 28.57,
            "morn": 20.75
        },
        "pressure": 1009.88,
        "humidity": 58,
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "speed": 5.48,
        "deg": 228,
        "clouds": 25,
        "rain": 2.81
    }, {
        "dt": 1569340800,
        "sunrise": 1569321204,
        "sunset": 1569364756,
        "temp": {
            "day": 21.55,
            "min": 12.71,
            "max": 23.45,
            "night": 12.71,
            "eve": 19.45,
            "morn": 14.75
        },
        "pressure": 1006.8,
        "humidity": 53,
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "speed": 3.58,
        "deg": 285,
        "clouds": 0,
        "rain": 0.75
    }, {
        "dt": 1569427200,
        "sunrise": 1569407668,
        "sunset": 1569451050,
        "temp": {
            "day": 17.15,
            "min": 8.91,
            "max": 21.25,
            "night": 11.72,
            "eve": 20.86,
            "morn": 8.91
        },
        "pressure": 1009.8,
        "humidity": 53,
        "weather": [{
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }],
        "speed": 2.13,
        "deg": 334,
        "clouds": 69
    }]
}

var k1=Object.values(obj)
for(k2 of k1){
	console.log(k2)
}
VM1193:3 {id: 4930956, name: "Boston", coord: {…}, country: "US", population: 617594, …}
VM1193:3 200
VM1193:3 21.6109226
VM1193:3 5
VM1193:3 (5) [{…}, {…}, {…}, {…}, {…}]



var keyss=Object.keys(obj)
for(var keyy of keyss){
	console.log(keyy)
}
VM1202:3 city
VM1202:3 cod
VM1202:3 message
VM1202:3 cnt
VM1202:3 list





for (var i = 0; i < obj.list.length; i++) {
  console.log(obj.list[i]);
}


for(o1 in obj){
    obj.list
}

for (o1 in obj) {
  obj.list.map(obj1 => {
    return obj1.temp;
  });
}

//all possible iterations:
console.log(obj.city)
console.log(obj.city.id)
console.log(obj.city.name)
console.log(obj.city.coord)
console.log(obj.city.coord.lon)
console.log(obj.city.coord.lat)
console.log(obj.city.country)
console.log(obj.city.populatio)
console.log(obj.city.timezone)
console.log(obj.cod)
console.log(obj.message)
console.log(obj.cnt)
console.log(obj.list)

var a=0
for(var i=0;i<obj.list.length;i++){
    a=obj.list[i];
    console.log(a);
}

var a=0,b=0
for(var i=0;i<obj.list.length;i++){
    for(var j=0;j<obj.list.length;j++){
        a=obj.list[i];
        b=obj.list[i].weather[j];
    }
}

for(key in obj){
    var value=obj[key];
    console.log(value);
}