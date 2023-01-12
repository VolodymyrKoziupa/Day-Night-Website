function toggleTheme() {
    let theme = document.getElementsByTagName('link')[0];


    if (theme.getAttribute('href') == 'css/style1.css') {
        theme.setAttribute('href', 'css/style2.css');
    } else {
        theme.setAttribute('href', 'css/style1.css');
    }
}