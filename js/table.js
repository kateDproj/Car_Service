let priceList = {
    'Ремонт Ходовой': 'От 200 грн',
    'Развал-схождение': 'От 200 грн',
    'Ремонт Рулевой Рейки': 'От 200 грн',
    'Ремонт Бензинового двигателя': 'От 200 грн',
    'Ремонт Стартера': 'От 200 грн',
    'Ремонт Генератора': 'От 200 грн',
    'Диагностика Ходовой': 'От 200 грн',
    'Ремонт Ходовой': 'От 200 грн',
    'Компьютерная Диагностика': 'От 200 грн',
    'Замена Масла': 'От 200 грн',
    'Диагностика Сцепления': 'От 200 грн',
    'Диагностика Сцепления': 'От 200 грн',
}
let table = document.querySelector('.price-table');
let cellCount = 0;

for (let key in priceList) {
    cellCount++;
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdPrice = document.createElement('td');
    tdPrice.classList.add('text-center');
    if (cellCount % 2 != 0) {
        tr.style.background = '#8daeea';
    }

    tdName.innerHTML = key;
    tdPrice.innerHTML = priceList[key];
    tr.append(tdName);
    tr.append(tdPrice);

    table.append(tr);

}

// active page