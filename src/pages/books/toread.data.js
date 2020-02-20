const TO_READ = [
  {
    id: 1,
    title: 'Books To Read',
    items: [
      {
        "id":1,
        "author": "Giacomo Leopardi",
        "country": "Italy",
        "imageLink": "images/poems-giacomo-leopardi.jpg",
        "language": "Italian",
        "link": "\n",
        "pages": 184,
        "title": "Poems",
        "year": 1818
      },
      {
        "id":2,
        "author": "Doris Lessing",
        "country": "United Kingdom",
        "imageLink": "images/the-golden-notebook.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Golden_Notebook\n",
        "pages": 688,
        "title": "The Golden Notebook",
        "year": 1962
      },
      {
        "id":3,
        "author": "Astrid Lindgren",
        "country": "Sweden",
        "imageLink": "images/pippi-longstocking.jpg",
        "language": "Swedish",
        "link": "https://en.wikipedia.org/wiki/Pippi_Longstocking\n",
        "pages": 160,
        "title": "Pippi Longstocking",
        "year": 1945
      },
      {
        "id":4,
        "author": "Lu Xun",
        "country": "China",
        "imageLink": "images/diary-of-a-madman.jpg",
        "language": "Chinese",
        "link": "https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n",
        "pages": 389,
        "title": "Diary of a Madman",
        "year": 1918
      },
      {
        "id":5,
        "author": "Naguib Mahfouz",
        "country": "Egypt",
        "imageLink": "images/children-of-gebelawi.jpg",
        "language": "Arabic",
        "link": "https://en.wikipedia.org/wiki/Children_of_Gebelawi\n",
        "pages": 355,
        "title": "Children of Gebelawi",
        "year": 1959
      },
      {
        "id":6,
        "author": "Thomas Mann",
        "country": "Germany",
        "imageLink": "images/buddenbrooks.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/Buddenbrooks\n",
        "pages": 736,
        "title": "Buddenbrooks",
        "year": 1901
      },
      {
        "id":7,
        "author": "Thomas Mann",
        "country": "Germany",
        "imageLink": "images/the-magic-mountain.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/The_Magic_Mountain\n",
        "pages": 720,
        "title": "The Magic Mountain",
        "year": 1924
      },
      {
        "id":8,
        "author": "Herman Melville",
        "country": "United States",
        "imageLink": "images/moby-dick.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Moby-Dick\n",
        "pages": 378,
        "title": "Moby Dick",
        "year": 1851
      },
      {
        "id":9,
        "author": "Michel de Montaigne",
        "country": "France",
        "imageLink": "images/essais.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Essays_(Montaigne)\n",
        "pages": 404,
        "title": "Essays",
        "year": 1595
      },
      {
        "id":10,
        "author": "Elsa Morante",
        "country": "Italy",
        "imageLink": "images/history.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/History_(novel)\n",
        "pages": 600,
        "title": "History",
        "year": 1974
      },
      {
        "id":11,
        "author": "Toni Morrison",
        "country": "United States",
        "imageLink": "images/beloved.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Beloved_(novel)\n",
        "pages": 321,
        "title": "Beloved",
        "year": 1987
      },
      {
        "id":12,
        "author": "Murasaki Shikibu",
        "country": "Japan",
        "imageLink": "images/the-tale-of-genji.jpg",
        "language": "Japanese",
        "link": "https://en.wikipedia.org/wiki/The_Tale_of_Genji\n",
        "pages": 1360,
        "title": "The Tale of Genji",
        "year": 1006
      },
      {
        "id":13,
        "author": "Robert Musil",
        "country": "Austria",
        "imageLink": "images/the-man-without-qualities.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n",
        "pages": 365,
        "title": "The Man Without Qualities",
        "year": 1931
      },
      {
        "id":14,
        "author": "Vladimir Nabokov",
        "country": "Russia/United States",
        "imageLink": "images/lolita.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Lolita\n",
        "pages": 317,
        "title": "Lolita",
        "year": 1955
      },
      {
        "id":15,
        "author": "George Orwell",
        "country": "United Kingdom",
        "imageLink": "images/nineteen-eighty-four.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n",
        "pages": 272,
        "title": "Nineteen Eighty-Four",
        "year": 1949
      },
      {
        "id":16,
        "author": "Ovid",
        "country": "Roman Empire",
        "imageLink": "images/the-metamorphoses-of-ovid.jpg",
        "language": "Classical Latin",
        "link": "https://en.wikipedia.org/wiki/Metamorphoses\n",
        "pages": 576,
        "title": "Metamorphoses",
        "year": 100
      },
      {
        "id":17,
        "author": "Fernando Pessoa",
        "country": "Portugal",
        "imageLink": "images/the-book-of-disquiet.jpg",
        "language": "Portuguese",
        "link": "https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n",
        "pages": 272,
        "title": "The Book of Disquiet",
        "year": 1928
      },
      {
        "id":18,
        "author": "Edgar Allan Poe",
        "country": "United States",
        "imageLink": "images/tales-and-poems-of-edgar-allan-poe.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n",
        "pages": 842,
        "title": "Tales",
        "year": 1950
      },
      {
        "id":19,
        "author": "Marcel Proust",
        "country": "France",
        "imageLink": "images/a-la-recherche-du-temps-perdu.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n",
        "pages": 2408,
        "title": "In Search of Lost Time",
        "year": 1920
      },
      {
        "id":20,
        "author": "Fran\u00e7ois Rabelais",
        "country": "France",
        "imageLink": "images/gargantua-and-pantagruel.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n",
        "pages": 623,
        "title": "Gargantua and Pantagruel",
        "year": 1533
      }
    ]
  }
];

export default TO_READ;