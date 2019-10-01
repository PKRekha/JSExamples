/*var obj=[
{
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
]



obj[0].list[0].temp.night
17.8

*/



var a = [{
        id: 1,

        name: "Jimi Hendrix",

        cover: "jimi_hendrix",

        bio: "James Marshall Jimi Hendrix was an American rock guitarist, singer, and songwriter. ",

        albums: [{
                albumId: "a1",

                title: "Electric Ladyland",

                year: 1968,

                cover: "electric-ladyland",

                price: 20
            },

            {
                albumId: "a2",

                title: "Experience",

                year: 1971,

                cover: "experienced",

                price: 25
            },

            {
                albumId: "a3",

                title: "Isle of Wright",

                year: 1971,

                cover: "isle_of_wright",

                price: 15
            },

            {
                albumId: "a4",

                title: "Band of Gypsys",

                year: 1970,

                cover: "band_of_gypsys",

                price: 10
            }
        ],

        genre: "rock, blues"
    },

    {
        id: 2,

        name: "Madonna",

        cover: "madonna",

        bio: "Madonna Louise Ciccone is an American singer, songwriter, actress, and businesswoman.",

        albums: [{
                albumId: "b1",

                title: "Like a Virgin",

                year: 1984,

                cover: "like_a_virgin",

                price: 20
            },

            {
                albumId: "b2",

                title: "True Blue",

                year: 1986,

                cover: "true_blue",

                price: 25
            },

            {
                albumId: "b3",

                title: "Erotica",

                year: 1994,

                cover: "erotica",

                price: 15
            },

            {
                albumId: "b4",

                title: "Ray of Light",

                year: 1998,

                cover: "ray_of_light",

                price: 10
            }
        ],

        genre: "pop"
    },

    {
        id: 3,

        name: "Johnny Cash",

        cover: "johnny_cash",

        bio: "John R. Cash was an American singer-songwriter, guitarist, actor, and author.",

        albums: [{
                albumId: "c1",

                title: "Ain't No Grave",

                year: 2010,

                cover: "no_grave",

                price: 20
            },

            {
                albumId: "c2",

                title: "Out Among the Stars",

                year: 2014,

                cover: "among_stars",

                price: 25
            },

            {
                albumId: "c3",

                title: "Solitary Man",

                year: 2000,

                cover: "solitary_man",

                price: 15
            },

            {
                albumId: "c4",

                title: "The Man Comes Around",

                year: 2002,

                cover: "man_comes_around",

                price: 10
            }
        ],

        genre: "pop"
    },

    {
        id: 4,

        name: "Pink Floyd",

        cover: "pink_floyd",

        bio: "Pink Floyd were an English rock band formed in London in 1965. They achieved international acclaim with their progressive and psychedelic music. ",

        albums: [{
                albumId: "d1",

                title: "The Wall",

                year: 1979,

                cover: "the_wall",

                price: 20
            },

            {
                albumId: "d2",

                title: "The Dark Side of the Moon",

                year: 1973,

                cover: "dark_side",

                price: 25
            },

            {
                albumId: "d3",

                title: "Animals",

                year: 1977,

                cover: "animals",

                price: 15
            }
        ],

        genre: "Rock"
    }
];

for(var i=0;i<a.length;i++){
console.log('value of i is :'+a[i].name);
for(var j=0;j<a[i].albums.length;j++){
console.log('value of j is :'+ a[i].albums[j].title)
}
}
VM6211:2 value of i is :Jimi Hendrix
VM6211:4 value of j is :Electric Ladyland
VM6211:4 value of j is :Experience
VM6211:4 value of j is :Isle of Wright
VM6211:4 value of j is :Band of Gypsys
VM6211:2 value of i is :Madonna
VM6211:4 value of j is :Like a Virgin
VM6211:4 value of j is :True Blue
VM6211:4 value of j is :Erotica
VM6211:4 value of j is :Ray of Light
VM6211:2 value of i is :Johnny Cash
VM6211:4 value of j is :Ain't No Grave
VM6211:4 value of j is :Out Among the Stars
VM6211:4 value of j is :Solitary Man
VM6211:4 value of j is :The Man Comes Around
VM6211:2 value of i is :Pink Floyd
VM6211:4 value of j is :The Wall
VM6211:4 value of j is :The Dark Side of the Moon
VM6211:4 value of j is :Animals
undefined