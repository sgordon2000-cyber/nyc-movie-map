// 1. Initialize the Map
mapboxgl.accessToken = 'MAPBOX_TOKEN_PLACEHOLDER'
const map = new mapboxgl.Map({
    container: 'map-container', // Matches the ID in index.html
    style: 'mapbox://styles/mapbox/standard',
    center: [-73.98824, 40.73617], // Centered on NYC
    zoom: 11
});

// 2. Your raw diary data (paste your full converted JSON here)
const rawDiaryData = [
  {
    "watchdate": "2023-10-24",
    "name": "Center Stage",
    "letterboxdlink": "https://boxd.it/53d8rH",
    "rating": "",
    "theatername": "metrograph",
    "lat": 40.71526495,
    "long": -73.9911467,
    "tags": "metrograph, jen, seneca, zzz"
  },
  {
    "watchdate": "2023-10-25",
    "name": "Perfect Blue",
    "letterboxdlink": "https://boxd.it/53vKod",
    "rating": 5,
    "theatername": "metrograph",
    "lat": 40.71526495,
    "long": -73.9911467,
    "tags": "metrograph"
  },
  {
    "watchdate": "2023-11-15",
    "name": "The Killer",
    "letterboxdlink": "https://boxd.it/5auvsb",
    "rating": 2,
    "theatername": "jfk",
    "lat": 40.64551469,
    "long": -73.77914496,
    "tags": "jfk"
  },
  {
    "watchdate": "2023-12-18",
    "name": "Danger: Diabolik",
    "letterboxdlink": "https://boxd.it/5lNqyl",
    "rating": "",
    "theatername": "moma",
    "lat": 40.7614477,
    "long": -73.97759987,
    "tags": "moma"
  },
  {
    "watchdate": "2024-01-12",
    "name": "Poor Things",
    "letterboxdlink": "https://boxd.it/5zUxal",
    "rating": 3,
    "theatername": "regal union",
    "lat": 40.73437843,
    "long": -73.99044269,
    "tags": "wj, regal union, jen, avery"
  },
  {
    "watchdate": "2024-01-28",
    "name": "Trafic",
    "letterboxdlink": "https://boxd.it/5I6sc3",
    "rating": 5,
    "theatername": "lincoln center",
    "lat": 40.77418957,
    "long": -73.98410546,
    "tags": "lincoln center, charlotte"
  },
  {
    "watchdate": "2024-02-22",
    "name": "Wheel of Fortune and Fantasy",
    "letterboxdlink": "https://boxd.it/5TzHpN",
    "rating": 4.5,
    "theatername": "metrograph",
    "lat": 40.71526495,
    "long": -73.9911467,
    "tags": "jen, metrograph"
  },
  {
    "watchdate": "2024-03-07",
    "name": "Dune: Part Two",
    "letterboxdlink": "https://boxd.it/606pyx",
    "rating": 2.5,
    "theatername": "bam",
    "lat": 40.68659391,
    "long": -73.97767931,
    "tags": "bam, jen, charlotte"
  },
  {
    "watchdate": "2024-04-10",
    "name": "La Chimera",
    "letterboxdlink": "https://boxd.it/6fQjLR",
    "rating": 3,
    "theatername": "bam",
    "lat": 40.68659391,
    "long": -73.97767931,
    "tags": "jen, charlotte, bam, jackson"
  },
  {
    "watchdate": "2024-04-29",
    "name": "Challengers",
    "letterboxdlink": "https://boxd.it/6nrEPR",
    "rating": 2,
    "theatername": "bam",
    "lat": 40.68659391,
    "long": -73.97767931,
    "tags": "adi, wj, bam"
  },
  {
    "watchdate": "2024-05-21",
    "name": "Evil Does Not Exist",
    "letterboxdlink": "https://boxd.it/6woL9X",
    "rating": 3.5,
    "theatername": "bam",
    "lat": 40.68659391,
    "long": -73.97767931,
    "tags": "jen, bam"
  },
  {
    "watchdate": "2024-07-25",
    "name": "Atlantics",
    "letterboxdlink": "https://boxd.it/6XF9ip",
    "rating": 3.5,
    "theatername": "eflux",
    "lat": 40.69471533,
    "long": -73.96139744,
    "tags": "eflux, julia"
  },
  {
    "watchdate": "2024-07-25",
    "name": "The Third Body",
    "letterboxdlink": "https://boxd.it/6XVkLz",
    "rating": "",
    "theatername": "eflux",
    "lat": 40.69471533,
    "long": -73.96139744,
    "tags": "eflux, julia"
  },
  {
    "watchdate": "2024-07-29",
    "name": "A Dirty Story",
    "letterboxdlink": "https://boxd.it/6ZPPcL",
    "rating": 2,
    "theatername": "anthology",
    "lat": 40.72613785,
    "long": -73.99022688,
    "tags": "anthology, julia"
  },
  {
    "watchdate": "2024-09-30",
    "name": "Lancelot of the Lake",
    "letterboxdlink": "https://boxd.it/7rJj9Z",
    "rating": 3.5,
    "theatername": "film forum",
    "lat": 40.72853163,
    "long": -74.00438365,
    "tags": "film forum"
  },
  {
    "watchdate": "2024-10-01",
    "name": "Moving",
    "letterboxdlink": "https://boxd.it/7s8hTh",
    "rating": 4,
    "theatername": "metrograph",
    "lat": 40.71526495,
    "long": -73.9911467,
    "tags": "jen, charlotte, metrograph"
  },
  {
    "watchdate": "2024-10-16",
    "name": "Daytime Revolution",
    "letterboxdlink": "https://boxd.it/7zwi6L",
    "rating": "",
    "theatername": "quad",
    "lat": 40.73670984,
    "long": -73.99626196,
    "tags": "quad, emma"
  },
  {
    "watchdate": "2024-10-22",
    "name": "Megalopolis",
    "letterboxdlink": "https://boxd.it/7CDTgp",
    "rating": "",
    "theatername": "angelika",
    "lat": 40.73166719,
    "long": -73.98646549,
    "tags": "angelika, caroline"
  },
  {
    "watchdate": "2024-10-28",
    "name": "The Substance",
    "letterboxdlink": "https://boxd.it/7FOsWd",
    "rating": 0.5,
    "theatername": "williamsburg cinema",
    "lat": 40.71431475,
    "long": -73.95983755,
    "tags": "williamsburg cinema, jen, charlotte, emma"
  },
  {
    "watchdate": "2024-10-29",
    "name": "Shadows of Forgotten Ancestors",
    "letterboxdlink": "https://boxd.it/7GqpXt",
    "rating": 4,
    "theatername": "lincoln center",
    "lat": 40.77418957,
    "long": -73.98410546,
    "tags": "lincoln center, jen, charlotte"
  },
  {
    "watchdate": "2024-11-12",
    "name": "Arabesques on the Pirosmani Theme",
    "letterboxdlink": "https://boxd.it/7NumNB",
    "rating": "",
    "theatername": "anthology",
    "lat": 40.72613785,
    "long": -73.99022688,
    "tags": "anthology, adam"
  },
  {
    "watchdate": "2024-11-12",
    "name": "The Legend of Suram Fortress",
    "letterboxdlink": "https://boxd.it/7Nunen",
    "rating": "",
    "theatername": "anthology",
    "lat": 40.72613785,
    "long": -73.99022688,
    "tags": "anthology, adam"
  },
  {
    "watchdate": "2024-11-19",
    "name": "All We Imagine as Light",
    "letterboxdlink": "https://boxd.it/7QYTNV",
    "rating": "",
    "theatername": "film forum",
    "lat": 40.72853163,
    "long": -74.00438365,
    "tags": "jen, charlotte, adi, film forum"
  },
  {
    "watchdate": "2024-11-23",
    "name": "The Social Life of Small Urban Spaces",
    "letterboxdlink": "https://boxd.it/7SVdCD",
    "rating": 5,
    "theatername": "anthology",
    "lat": 40.72613785,
    "long": -73.99022688,
    "tags": "anthology"
  },
  {
    "watchdate": "2024-11-23",
    "name": "The Road to Magnasanti",
    "letterboxdlink": "https://boxd.it/7SVnj7",
    "rating": "",
    "theatername": "anthology",
    "lat": 40.72613785,
    "long": -73.99022688,
    "tags": "anthology"
  },
  {
    "watchdate": "2024-11-23",
    "name": "The Girl Chewing Gum",
    "letterboxdlink": "https://boxd.it/7SVo0P",
    "rating": "",
    "theatername": "anthology",
    "lat": 40.72613785,
    "long": -73.99022688,
    "tags": "anthology"
  },
  {
    "watchdate": "2024-12-08",
    "name": "The Umbrellas of Cherbourg",
    "letterboxdlink": "https://boxd.it/80rpYj",
    "rating": 4,
    "theatername": "film forum",
    "lat": 40.72853163,
    "long": -74.00438365,
    "tags": "film forum, ben, zzz"
  },
  {
    "watchdate": "2024-12-12",
    "name": "A Traveler's Needs",
    "letterboxdlink": "https://boxd.it/82nazj",
    "rating": "",
    "theatername": "film forum",
    "lat": 40.72853163,
    "long": -74.00438365,
    "tags": "charlotte, film forum"
  },
  {
    "watchdate": "2025-01-04",
    "name": "The Room Next Door",
    "letterboxdlink": "https://boxd.it/8jYiSv",
    "rating": 3,
    "theatername": "lincoln center",
    "lat": 40.77418957,
    "long": -73.98410546,
    "tags": "wj, jen, emma, asja, lincoln center"
  },
  {
    "watchdate": "2025-01-25",
    "name": "The Twelve Tasks of Asterix",
    "letterboxdlink": "https://boxd.it/8C0Plv",
    "rating": "",
    "theatername": "l'alliance",
    "lat": 40.76391051,
    "long": -73.97032596,
    "tags": "l'alliance, wj, charlotte, julia"
  },
  {
    "watchdate": "2025-01-27",
    "name": "Meshes of the Afternoon",
    "letterboxdlink": "https://boxd.it/8E7jg1",
    "rating": "",
    "theatername": "anthology",
    "lat": 40.72613785,
    "long": -73.99022688,
    "tags": "jen, charlotte, bridget, anthology"
  },
  {
    "watchdate": "2025-01-27",
    "name": "A Dream Longer Than the Night",
    "letterboxdlink": "https://boxd.it/8E7pgh",
    "rating": 5,
    "theatername": "anthology",
    "lat": 40.72613785,
    "long": -73.99022688,
    "tags": "jen, charlotte, bridget, zzz, anthology, teary"
  },
  {
    "watchdate": "2025-01-31",
    "name": "Picnic at Hanging Rock",
    "letterboxdlink": "https://boxd.it/8GJNZf",
    "rating": 3,
    "theatername": "ifc",
    "lat": 40.73215319,
    "long": -74.00193214,
    "tags": "ifc, caroline, zzz"
  },
  {
    "watchdate": "2025-02-09",
    "name": "The Eve of Ivan Kupalo",
    "letterboxdlink": "https://boxd.it/8MTqgl",
    "rating": "",
    "theatername": "lincoln center",
    "lat": 40.77418957,
    "long": -73.98410546,
    "tags": "charlotte, lincoln center, zzz"
  },
  {
    "watchdate": "2025-02-12",
    "name": "Bob Wilson's Life & Death of Marina Abramovic",
    "letterboxdlink": "https://boxd.it/8ONysP",
    "rating": "",
    "theatername": "anthology",
    "lat": 40.72613785,
    "long": -73.99022688,
    "tags": "ben, asja, anthology"
  },
  {
    "watchdate": "2025-03-06",
    "name": "Queendom",
    "letterboxdlink": "https://boxd.it/92XulB",
    "rating": "",
    "theatername": "hunter",
    "lat": 40.7684568,
    "long": -73.96477093,
    "tags": "seneca, hunter, q&a, teary"
  },
  {
    "watchdate": "2025-03-11",
    "name": "The Lonedale Operator",
    "letterboxdlink": "https://boxd.it/96RFsn",
    "rating": "",
    "theatername": "light industry",
    "lat": 40.7107378,
    "long": -73.9342603,
    "tags": "charlotte, zzz, talk"
  },
  {
    "watchdate": "2025-03-13",
    "name": "The Falling Sky",
    "letterboxdlink": "https://boxd.it/97mGJ7",
    "rating": 2,
    "theatername": "moma",
    "lat": 40.7614477,
    "long": -73.97759987,
    "tags": "seneca, eugenia, moma, zzz"
  },
  {
    "watchdate": "2025-03-22",
    "name": "A Star Is Born",
    "letterboxdlink": "https://boxd.it/9cYsFB",
    "rating": 3.5,
    "theatername": "momi",
    "lat": 40.75820783,
    "long": -73.92376824,
    "tags": "emma, caroline, momi, talk"
  },
  {
    "watchdate": "2025-03-30",
    "name": "The River",
    "letterboxdlink": "https://boxd.it/9hcuLl",
    "rating": "",
    "theatername": "metrograph",
    "lat": 40.71526495,
    "long": -73.9911467,
    "tags": "wj, adam, metrograph, zzz"
  },
  {
    "watchdate": "2025-04-10",
    "name": "What's softest in the world rushes and runs over what's hardest in the world.",
    "letterboxdlink": "https://boxd.it/9njm3j",
    "rating": "",
    "theatername": "eflux",
    "lat": 40.69471533,
    "long": -73.96139744,
    "tags": "eflux"
  },
  {
    "watchdate": "2025-04-10",
    "name": "Daguerréotypes",
    "letterboxdlink": "https://boxd.it/9njp9f",
    "rating": 5,
    "theatername": "eflux",
    "lat": 40.69471533,
    "long": -73.96139744,
    "tags": "eflux"
  },
  {
    "watchdate": "2025-04-21",
    "name": "The Gospel According to St. Matthew",
    "letterboxdlink": "https://boxd.it/9uc0JV",
    "rating": "",
    "theatername": "metrograph",
    "lat": 40.71526495,
    "long": -73.9911467,
    "tags": "jen, charlotte, adi, bronwyn, zzz, metrograph"
  },
  {
    "watchdate": "2025-04-25",
    "name": "25 Watts",
    "letterboxdlink": "https://boxd.it/9wCJp7",
    "rating": "",
    "theatername": "spectacle",
    "lat": 40.71289452,
    "long": -73.96294175,
    "tags": "spectacle, seneca, adam, emma r, eugenia"
  },
  {
    "watchdate": "2025-09-01",
    "name": "Brazil",
    "letterboxdlink": "https://boxd.it/aWARq1",
    "rating": 3,
    "theatername": "film forum",
    "lat": 40.72853163,
    "long": -74.00438365,
    "tags": "film forum, charlotte"
  },
  {
    "watchdate": "2025-09-18",
    "name": "Portrait of a Lazy Woman",
    "letterboxdlink": "https://boxd.it/b6VuRZ",
    "rating": "",
    "theatername": "moma",
    "lat": 40.7614477,
    "long": -73.97759987,
    "tags": "adrian, moma"
  },
  {
    "watchdate": "2025-09-18",
    "name": "Je Tu Il Elle",
    "letterboxdlink": "https://boxd.it/b6VvMh",
    "rating": "",
    "theatername": "moma",
    "lat": 40.7614477,
    "long": -73.97759987,
    "tags": "adrian, moma, zzz"
  },
  {
    "watchdate": "2025-09-26",
    "name": "Lawrence of Arabia",
    "letterboxdlink": "https://boxd.it/bbkTiL",
    "rating": "",
    "theatername": "paris",
    "lat": 40.7639889,
    "long": -73.97416356,
    "tags": "paris, charlotte, emma, adi"
  },
  {
    "watchdate": "2025-09-29",
    "name": "The Social Life of Small Urban Spaces",
    "letterboxdlink": "https://boxd.it/beM6xv",
    "rating": 5,
    "theatername": "anthology",
    "lat": 40.72613785,
    "long": -73.99022688,
    "tags": "anthology, charlotte, emma, wagner"
  },
  {
    "watchdate": "2025-10-05",
    "name": "One Battle After Another",
    "letterboxdlink": "https://boxd.it/bhAA1R",
    "rating": 3.5,
    "theatername": "bam",
    "lat": 40.68659391,
    "long": -73.97767931,
    "tags": "charlotte, emma, bridget, kyle, bam"
  },
  {
    "watchdate": "2025-11-20",
    "name": "I'm Not Everything I Want to Be",
    "letterboxdlink": "https://boxd.it/bNGvRj",
    "rating": "",
    "theatername": "metrograph",
    "lat": 40.71526495,
    "long": -73.9911467,
    "tags": "metrograph"
  },
  {
    "watchdate": "2025-12-02",
    "name": "Peter Hujar's Day",
    "letterboxdlink": "https://boxd.it/bUQetn",
    "rating": "",
    "theatername": "film forum",
    "lat": 40.72853163,
    "long": -74.00438365,
    "tags": "max, zzz, film forum"
  },
  {
    "watchdate": "2025-12-04",
    "name": "Buddies",
    "letterboxdlink": "https://boxd.it/bW1Eqv",
    "rating": "",
    "theatername": "wagner",
    "lat": 40.73657815,
    "long": -73.98793752,
    "tags": "wagner, teary, q&a"
  },
  {
    "watchdate": "2025-12-18",
    "name": "Sentimental Value",
    "letterboxdlink": "https://boxd.it/c6VRh9",
    "rating": 3.5,
    "theatername": "angelika",
    "lat": 40.73166719,
    "long": -73.98646549,
    "tags": "angelika, charlotte b, zzz"
  },
  {
    "watchdate": "2025-12-22",
    "name": "Sympathy for Mr. Vengeance",
    "letterboxdlink": "https://boxd.it/cbdlMB",
    "rating": 2.5,
    "theatername": "metrograph",
    "lat": 40.71526495,
    "long": -73.9911467,
    "tags": "metrograph, jen, zzz"
  },
  {
    "watchdate": "2025-12-30",
    "name": "No Other Choice",
    "letterboxdlink": "https://boxd.it/ckPwgj",
    "rating": "",
    "theatername": "bam",
    "lat": 40.68659391,
    "long": -73.97767931,
    "tags": "jen, victoria, bam"
  },
  {
    "watchdate": "2026-01-20",
    "name": "The Testament of Ann Lee",
    "letterboxdlink": "https://boxd.it/cKvelz",
    "rating": 1.5,
    "theatername": "bam",
    "lat": 40.68659391,
    "long": -73.97767931,
    "tags": "bam, charlotte, emma, zzz"
  },
  {
    "watchdate": "2026-01-31",
    "name": "Water Lilies",
    "letterboxdlink": "https://boxd.it/cVlOWP",
    "rating": "",
    "theatername": "metrograph",
    "lat": 40.71526495,
    "long": -73.9911467,
    "tags": "livi, metrograph"
  },
  {
    "watchdate": "2026-02-12",
    "name": "B.F. Skinner Plays Himself",
    "letterboxdlink": "https://boxd.it/d6xmr3",
    "rating": 2,
    "theatername": "bisr",
    "lat": 40.70281401,
    "long": -73.98673764,
    "tags": "bisr, livi, zzz, q&a"
  },
  {
    "watchdate": "2026-02-21",
    "name": "All About Lily Chou-Chou",
    "letterboxdlink": "https://boxd.it/dfbQn3",
    "rating": 4,
    "theatername": "momi",
    "lat": 40.75820783,
    "long": -73.92376824,
    "tags": "momi, charlotte, wj, edward"
  },
  {
    "watchdate": "2026-04-01",
    "name": "2001: A Space Odyssey",
    "letterboxdlink": "https://boxd.it/dNQDPh",
    "rating": "",
    "theatername": "ifc",
    "lat": 40.73215319,
    "long": -74.00193214,
    "tags": "ifc, charlotte, logan"
  },
  {
    "watchdate": "2026-04-15",
    "name": "The Taking of Pelham One Two Three",
    "letterboxdlink": "https://letterboxd.com/film/the-taking-of-pelham-1-2-3/",
    "rating": 5,
    "theatername": "bam",
    "theatername": "bam",
    "lat": 40.68659391,
    "long": -73.97767931,
    "tags": "bam, adrian"
  }
];

// 3. Create an empty object to group our data
const groupedTheaters = {};

// 4. Group the raw data by Theater
rawDiaryData.forEach(entry => {
    // Skip rows that don't have a theater or GPS coordinates
    if (!entry.theatername || !entry.lat) return;

    // If we haven't seen this theater yet, create a container for it
    if (!groupedTheaters[entry.theatername]) {
        groupedTheaters[entry.theatername] = {
            lat: entry.lat,
            lng: entry.long,
            movies: []
        };
    }
    // Add the movie watch to this theater's list
    groupedTheaters[entry.theatername].movies.push(entry);
});

// 5. Loop through our newly grouped theaters to calculate stats and map them
Object.keys(groupedTheaters).forEach(theaterName => {
    const theater = groupedTheaters[theaterName];
    const movies = theater.movies;

    // Filter out movies that don't have a numeric rating
    const ratedMovies = movies.filter(m => m.rating !== "" && m.rating !== null && !isNaN(m.rating));

    let popupHTML = `<h3>${theaterName}</h3>`;
    let markerColor = '#808080'; // Default to Gray if no ratings exist

    if (ratedMovies.length > 0) {
        // --- WE HAVE RATINGS ---
        
        // Find Best and Worst using reduce()
        let bestMovie = ratedMovies.reduce((max, m) => (parseFloat(m.rating) > parseFloat(max.rating) ? m : max), ratedMovies[0]);
        let worstMovie = ratedMovies.reduce((min, m) => (parseFloat(m.rating) < parseFloat(min.rating) ? m : min), ratedMovies[0]);

        // Calculate Average
        let totalScore = ratedMovies.reduce((sum, m) => sum + parseFloat(m.rating), 0);
        let avgRating = totalScore / ratedMovies.length;

        // Determine Color based on Average Score
        if (avgRating >= 4) {
            markerColor = '#2ca02c'; // Green for Great (4-5)
        } else if (avgRating >= 2.5) {
            markerColor = '#ff7f0e'; // Orange for Okay (2.5-3.9)
        } else {
            markerColor = '#d62728'; // Red for Bad (< 2.5)
        }

        // Build the HTML for the popup
        popupHTML += `
            <p><strong>Avg Rating:</strong> ${avgRating.toFixed(1)} / 5</p>
            <p style="color: #2ca02c;"><strong>Best:</strong> ${bestMovie.name} (${bestMovie.rating}/5)</p>
            <p style="color: #d62728;"><strong>Worst:</strong> ${worstMovie.name} (${worstMovie.rating}/5)</p>
        `;
    } else {
        // --- NO RATINGS EXIST ---
        
        // Sort by Date to find the most recent
        let recentMovie = movies.reduce((latest, m) => {
            let mDate = new Date(m.watchDate);
            let latestDate = new Date(latest.watchDate);
            return mDate > latestDate ? m : latest;
        }, movies[0]);

        popupHTML += `
            <p style="color: #808080;"><em>No ratings recorded.</em></p>
            <p><strong>Most Recent:</strong> ${recentMovie.name}</p>
        `;
    }

    // 6. Create the Popup and Marker
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupHTML);

    new mapboxgl.Marker({ color: markerColor })
        .setLngLat([theater.lng, theater.lat]) // Longitude goes first!
        .setPopup(popup)
        .addTo(map);
});