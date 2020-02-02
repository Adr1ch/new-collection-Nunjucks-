import config from '@config';

function getMovies(input, callback) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', `http://www.omdbapi.com/?apikey=6323b882&s=${input}`, true);
  xhr.send();

  xhr.onreadystatechange = function() {
      if(this.readyState != 4) return;

      if(this.status != 200) {
          alert("pomulka" + (this.status ? this.statusText : "zapros ne udalsa"));
          return;
      }

      callback(JSON.parse(this.responseText));
  }
}

export { getMovies };
