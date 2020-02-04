import { arrayValue } from './index';

function renderCountries(array) {
    array.forEach(country => {		
        let li = document.createElement("li");
            let butn = document.createElement("BUTTON");
            butn.className = "country";
            butn.value = `${country.name} calling code is: ${country.callingCodes}`;
            butn.addEventListener("click", e => {
                arrayValue.push(butn.value);
                butn.setAttribute("disabled", "disabled");
            })
            li.append(butn);
                let block = document.createElement("div");
                block.className = "flag__wrap";
                butn.append(block);
                    let img = document.createElement("IMG");
                    img.className = "flag";
                    img.src = country.flag;
                    block.append(img);
                let block2 = document.createElement("div");
                block2.className = "count__namewrap";
                butn.append(block2);
                    let countName = document.createElement("p");
                    countName.className = "country__name";
                    countName.innerText = country.name;
                    block2.append(countName);
        countlist.append(li);
    })
}
export { renderCountries };