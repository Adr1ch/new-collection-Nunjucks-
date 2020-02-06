function getCountries() {
			return new Promise(resolve => {

				var xhr = new XMLHttpRequest();

				xhr.open('GET', 'https://restcountries.eu/rest/v2/all', true);
				xhr.send();

				xhr.onreadystatechange = function() {
					if(this.readyState != 4) return;

					if(this.status != 200) {
						alert("pomulka" + (this.status ? this.statusText : "zapros ne udalsa"));
						return;
					}

					resolve(JSON.parse(this.responseText));

				}
			})
		}
export { getCountries };
