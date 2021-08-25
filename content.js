const BOSS = 'Deniz Gürsoy';

function getElementsByText(str, tag = 'a') {
  return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => new RegExp(str, 'gi').test(el.textContent.trim()));
}

function alertDenizGursoy(elements) {
    elements.forEach(elem => {
        elem.innerHTML = elem.innerHTML.replace(new RegExp(BOSS, 'g'), `<font size="30px" color="red">${BOSS}</font>`);
    });
}


const items = [
    getElementsByText(BOSS, 'div'),
    getElementsByText(BOSS, 'span'),
    getElementsByText(BOSS, 'a'),
    getElementsByText(BOSS, 'b'),
];

items.forEach(alertDenizGursoy);