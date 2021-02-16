let path = window.location.pathname;
let page = path.split("/").pop();
console.log(page);
//***BEGIN  main-nav option's color changed when changing the page
if (page == 'price.html') {
    document.querySelector('.site-nav').children[2].firstChild.style.color = '#0fc7ee';
} else {
    document.querySelector('.site-nav').children[0].firstChild.style.color = '#0fc7ee';
}
//**END */ main-nav option's color changed when changing the page

const select = document.querySelector('select'); // Language select
const allLang = ['ru', 'ua']; // expected languages
let change = document.querySelectorAll('.lang'); // all places where language has to be changed
let table = document.querySelector('.table'); // table container
let cellCount = 0; // used for coloured table

select.addEventListener('change', changeURLLanguage); // changing url when language selected

// changing url when language selected
function changeURLLanguage() {
    let lang = select.value;
    location.href = `${window.location.pathname}#${lang}`; // read about it
    changeLanguage();
}
// changing actual text inside containers, table etc
function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = `${window.location.pathname}#ru`;
        location.reload();
    }
    select.value = hash; // chosen language assigned

    for (let key in langArr) {
        for (let elem of change) {
            if (elem.dataset.lang == key) // if attribute  matches the key, text is changed
                elem.innerHTML = langArr[key][hash];
        }
    }
    // out the table

    if (page == 'price.html') {
        let t = document.createElement('table');
        t.classList.add('price-table');
        table.innerHTML = '';
        //***BEGIN** create tables's header
        if (hash == 'ru') t.innerHTML += '<tr><th>Название</th><th>Цена</th></tr>'
        else t.innerHTML += '<tr><th>Назва</th><th>Ціна</th></tr>'
            //***END** create tables's header
            //***BEGIN** create tables's cells
        for (let key in tablePrice[hash]) {
            cellCount++;
            let tr = document.createElement('tr');
            let tdName = document.createElement('td');
            let tdPrice = document.createElement('td');
            tdPrice.classList.add('text-center');
            if (cellCount % 2 != 0) {
                tr.style.background = '#8daeea';
            }

            tdName.innerHTML = key;
            tdPrice.innerHTML = tablePrice[hash][key];
            tr.append(tdName);
            tr.append(tdPrice);
            t.append(tr);
        }
        //***END** create tables's cells
        table.append(t); // out the table inside div.table
    }

}
changeLanguage();