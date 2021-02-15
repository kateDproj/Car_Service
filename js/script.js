let path = window.location.pathname;
let page = path.split("/").pop();
console.log(page);

if (page == 'price.html') {
    document.querySelector('.site-nav').children[2].firstChild.style.color = '#0fc7ee';
} else {
    document.querySelector('.site-nav').children[0].firstChild.style.color = '#0fc7ee';
}