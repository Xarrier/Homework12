window.addEventListener('load', function () {
    var spanClass;
    function toggle(event) {
        var targetClick = event.target, spanClass = document.querySelector('.active');
            if (targetClick.matches('p span') && (spanClass !="null")) {
                targetClick.classList.add('active');
                spanClass.classList.remove('active');
            }
        }
    document.body.addEventListener('click',toggle);
});
