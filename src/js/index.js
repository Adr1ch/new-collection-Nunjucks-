import '@babel/polyfill';
import { getMovies } from './http';
import { renderCountries } from './country-render';
import { getCountries } from './country-callback';

// send.addEventListener("click", e => {
//   movieList.innerHTML = "";

//   getMovies(filmname.value, respon => {
//       respon.Search.forEach(element => {
//           console.log(element);
//           let filmWrap = document.createElement("li");
//           filmWrap.className = "film";
//               let posterWrap = document.createElement("div");
//               posterWrap.className = "poster";
//               filmWrap.append(posterWrap);
//                   let poster = document.createElement("div");
//                   poster.className = "poster-img";
//                   poster.style.backgroundImage = `url(${element.Poster})`;
//                   posterWrap.append(poster);
//               let filmTitle = document.createElement("div");
//               filmTitle.className = "title";
//               filmTitle.innerText = element.Title;
//               filmWrap.append(filmTitle);

//               let filmYear = document.createElement("div");
//               filmYear.className = "year";
//               filmYear.innerText = element.Year;
//               filmWrap.append(filmYear);

//           movieList.append(filmWrap);
//       });
//   });
// });

let arrayValue = [];

export { arrayValue };

getCountries(respon => {
    renderCountries(respon);
})

btn.addEventListener("click", e => {
    dropDown.classList.add("show");
})

results.addEventListener("click", e => {
    result.innerText = arrayValue.join(" --- ");
})
