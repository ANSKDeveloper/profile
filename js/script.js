function Close() {
    var a = document.getElementById('Menu').style.left = "-100%";


}

function Open() {
    document.getElementById('Menu').style.left = "0";
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});