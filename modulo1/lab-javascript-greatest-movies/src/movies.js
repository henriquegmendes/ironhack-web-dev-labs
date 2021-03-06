// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => {
    return movie.director;
  });
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllUniqueDirectors = moviesArray => {
  // const newArray = [];

  // moviesArray.forEach(movie => {
  //   if (!newArray.includes(movie.director)) {
  //     newArray.push(movie.director);
  //   }
  // });

  const newArray = moviesArray.reduce((acc, movie) => {
    if (!acc.includes(movie.director)) {
      acc.push(movie.director);
    }

    return acc;
  }, []);

  return newArray;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = moviesArray => {
  const filteredMoviesArray = moviesArray.filter(movie => {
    return movie.director.toUpperCase() === 'STEVEN SPIELBERG' && movie.genre.includes('Drama');
  });

  return filteredMoviesArray.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const ratesSum = moviesArray.reduce(function(acc, element) {
    if (!element.rate){
      return acc + 0;
    }

    return acc + element.rate;
  }, 0);

  const avg = (ratesSum / moviesArray.length).toFixed(2);

  return +avg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = moviesArray => {
  if (moviesArray.length === 0) return 0;

  const dramaAvg = moviesArray.reduce((acc, movie) => {
    if (movie.genre.includes('Drama')) {
      acc.ratesSum += movie.rate;
      acc.dramaMoviesQuantity += 1;

      return acc;
    }

    return acc;
  }, { ratesSum: 0, dramaMoviesQuantity: 0 });

  if (dramaAvg.dramaMoviesQuantity === 0) return 0; 

  const avg = (dramaAvg.ratesSum / dramaAvg.dramaMoviesQuantity).toFixed(2);

  return +avg;  
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = JSON.parse(JSON.stringify(moviesArray));

  moviesCopy.sort((movie1, movie2) => {
    if (movie1.year < movie2.year) return -1;

    if (movie1.year > movie2.year) return 1;

    return movie1.title.localeCompare(movie2.title);
  });

  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = moviesArray => {
  const movieTitles = moviesArray.map(movie => movie.title);

  movieTitles.sort((movie1, movie2) => movie1.localeCompare(movie2));

  return movieTitles.slice(0, 20);

  // return moviesArray.map(movie => movie.title).sort((movie1, movie2) => movie1.localeCompare(movie2)).slice(0, 20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesCopy = JSON.parse(JSON.stringify(moviesArray));

  moviesCopy.forEach(movie => {
    let hoursToMinutes = 0;
    let minutes = 0;

    if (movie.duration.includes('h')) {
      const hours = movie.duration.slice(0, 1);

      hoursToMinutes += parseInt(hours) * 60;
    }

    if (movie.duration.includes('min')) {
      const indexMin = movie.duration.indexOf('min');

      const min = movie.duration.slice(indexMin - 2, indexMin);

      minutes = parseInt(min);
    }

    const totalTime = hoursToMinutes + minutes;

    movie.duration = totalTime;
  });

  return moviesCopy;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = moviesArray => {
  if (moviesArray.length === 0) return null;

  const moviesRatesByYear = {};

  moviesArray.forEach(function(movie) {
    if (!moviesRatesByYear[movie.year]) {
      moviesRatesByYear[movie.year] = { ratesSum: movie.rate, ratesQuantity: 1, year: movie.year };
    } else {
      moviesRatesByYear[movie.year].ratesSum += movie.rate;
      moviesRatesByYear[movie.year].ratesQuantity += 1;
    }
  });

  const moviesRatesByYearArray = Object.values(moviesRatesByYear);

  const moviesRatesAverage = moviesRatesByYearArray.map(yearMovie => {
    return {
      yearAverage: yearMovie.ratesSum / yearMovie.ratesQuantity,
      year: yearMovie.year,
    }
  });

  moviesRatesAverage.sort((year1, year2) => {
    if (year2.yearAverage < year1.yearAverage) return -1;

    if (year2.yearAverage > year1.yearAverage) return 1;

    if (year2.year > year1.year) return -1;

    if (year2.year < year1.year) return 1;
  });

  return `The best year was ${moviesRatesAverage[0].year} with an average rate of ${moviesRatesAverage[0].yearAverage}`;
};
