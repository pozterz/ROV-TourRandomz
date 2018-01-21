// Note
// job 
// 1 = tank
// 2 = fighter
// 3 = jungle
// 4 = mage
// 5 = carry
// 6 = support


const Heroes = {
  data: [
    {
      "heroid": "106",
      "name": "Krixi",
      "title": "The Pixie",
      "job": 4
    },
    {
      "heroid": "107",
      "name": "Zephys",
      "title": "The Doomspear",
      "job": 2
    },
    {
      "heroid": "108",
      "name": "Gildur",
      "title": "The Gilded",
      "job": 1
    },
    {
      "heroid": "109",
      "name": "Veera",
      "title": "The Soul Harvester",
      "job": 4
    },
    {
      "heroid": "105",
      "name": "Toro",
      "title": "The Bull King",
      "job": 1
    },
    {
      "heroid": "111",
      "name": "Violet",
      "title": "The Pistol Assassin",
      "job": 5
    },
    {
      "heroid": "112",
      "name": "Yorn",
      "title": "The Hotshot",
      "job": 5
    },
    {
      "heroid": "113",
      "name": "Chaugnar",
      "title": "The Herald of the Void",
      "job": 6
    },
    {
      "heroid": "114",
      "name": "Omega",
      "title": "The Awoken Mech",
      "job": 1
    },
    {
      "heroid": "110",
      "name": "Kahlii",
      "title": "The Aspect of Vengeance",
      "job": 4
    },
    {
      "heroid": "116",
      "name": "Butterfly",
      "title": "Death's Whisper",
      "job": 3
    },
    {
      "heroid": "117",
      "name": "Ormarr",
      "title": "The Frenzy",
      "job": 2
    },
    {
      "heroid": "118",
      "name": "Alice",
      "title": "The Adorable Mystic",
      "job": 6
    },
    {
      "heroid": "119",
      "name": "Mganga",
      "title": "The Unspeakable",
      "job": 4
    },
    {
      "heroid": "120",
      "name": "Mina",
      "title": "The Reaper Queen",
      "job": 1
    },
    {
      "heroid": "123",
      "name": "Maloch",
      "title": "The Merciless",
      "job": 2
    },
    {
      "heroid": "115",
      "name": "Jinnar",
      "title": "The Incorruptible",
      "job": 4
    },
    {
      "heroid": "124",
      "name": "Ignis",
      "title": "The Anointed One",
      "job": 4
    },
    {
      "heroid": "127",
      "name": "Azzen'Ka",
      "title": "The Forgotten",
      "job": 4
    },
    {
      "heroid": "128",
      "name": "Lu Bu",
      "title": "The Great Warlord",
      "job": 2
    },
    {
      "heroid": "129",
      "name": "Zanis",
      "title": "The Dragoon",
      "job": 2
    },
    {
      "heroid": "130",
      "name": "Airi",
      "title": "The Kunoichi",
      "job": 2
    },
    {
      "heroid": "131",
      "name": "Murad",
      "title": "The Wanderer",
      "job": 3
    },
    {
      "heroid": "133",
      "name": "Valhein",
      "title": "The Demon Hunter",
      "job": 5
    },
    {
      "heroid": "134",
      "name": "Skud",
      "title": "The Smasher",
      "job": 2
    },
    {
      "heroid": "135",
      "name": "Thane",
      "title": "The Protector",
      "job": 1
    },
    {
      "heroid": "136",
      "name": "Ilumia",
      "title": "The Seer",
      "job": 4
    },
    {
      "heroid": "139",
      "name": "Kil'Groth",
      "title": "The Terror",
      "job": 2
    },
    {
      "heroid": "140",
      "name": "Superman",
      "title": "The Man of Steel",
      "job": 2
    },
    {
      "heroid": "141",
      "name": "Lauriel",
      "title": "The Archangel",
      "job": 4
    },
    {
      "heroid": "142",
      "name": "Natalya",
      "title": "The Nether Queen",
      "job": 4
    },
    {
      "heroid": "144",
      "name": "Taara",
      "title": "The War Hammer",
      "job": 1
    },
    {
      "heroid": "146",
      "name": "Zill",
      "title": "The Tempest",
      "job": 4
    },
    {
      "heroid": "148",
      "name": "Preyta",
      "title": "The Illest",
      "job": 4
    },
    {
      "heroid": "150",
      "name": "Nakroth",
      "title": "The Executioner's Blade",
      "job": 3
    },
    {
      "heroid": "152",
      "name": "Diaochan",
      "title": "The Crystal Lotus",
      "job": 4
    },
    {
      "heroid": "153",
      "name": "Batman",
      "title": "The Dark Knight",
      "job": 3
    },
    {
      "heroid": "156",
      "name": "Aleister",
      "title": "The Lord of Mischief",
      "job": 4
    },
    {
      "heroid": "157",
      "name": "Raz",
      "title": "The Fist",
      "job": 4
    },
    {
      "heroid": "162",
      "name": "Kriknak",
      "title": "The Scarabim",
      "job": 3
    },
    {
      "heroid": "163",
      "name": "Ryoma",
      "title": "The Ronin",
      "job": 2
    },
    {
      "heroid": "166",
      "name": "Mortos",
      "title": "The Chosen",
      "job": 2
    },
    {
      "heroid": "167",
      "name": "Wukong",
      "title": "The Monkey King",
      "job": 3
    },
    {
      "heroid": "168",
      "name": "Lumburr",
      "title": "The Elemental",
      "job": 6
    },
    {
      "heroid": "169",
      "name": "Slimz",
      "title": "The Trustworthy",
      "job": 5
    },
    {
      "heroid": "170",
      "name": "Moren",
      "title": "The Technowiz",
      "job": 5
    },
    {
      "heroid": "171",
      "name": "Cresht",
      "title": "The Mermidon",
      "job": 1
    },
    {
      "heroid": "173",
      "name": "Fennik",
      "title": "Vulpis Ignis",
      "job": 5
    },
    {
      "heroid": "174",
      "name": "The Joker",
      "title": "The Clown Prince of Crime",
      "job": 5
    },
    {
      "heroid": "175",
      "name": "Grakk",
      "title": "The Glutton",
      "job": 1
    },
    {
      "heroid": "177",
      "name": "Lindis",
      "title": "The Sentinel",
      "job": 5
    },
    {
      "heroid": "184",
      "name": "Peyna",
      "title": "Guardian of the Glade",
      "job": 6
    },
    {
      "heroid": "126",
      "name": "Arduin",
      "title": "The Spirit",
      "job": 2
    },
    {
      "heroid": "501",
      "name": "Tel'Annas",
      "title": "The Ageless",
      "job": 5
    },
    {
      "heroid": "502",
      "name": "Astrid",
      "title": "The Indomitable",
      "job": 2
    },
    {
      "heroid": "503",
      "name": "Zuka",
      "title": "The Pandharma Master",
      "job": 2
    },
    {
      "heroid": "504",
      "name": "Wonder Woman",
      "title": "Amazon of Themyscira",
      "job": 2
    },
    {
      "heroid": "149",
      "name": "Xeniel",
      "title": "The Immaculate",
      "job": 1
    }
  ]
}

export default Heroes;