<script>
let index = 0;
showSlides(index);

function moveFunction(n) {
    showSlides(index += n);
}

function dotFunction(n) {
    showSlides(index = n);
}

function showSlides(n) {
    let i;
    let items = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("dot");
    if (n > items.length) {index = 1}
    if (n < 1) {index = items.length}
    for (i = 0 ; i < items.length ; i++) {
        items[i].style.display = "none";
    }
    for (i = 0 ; i < dots.length ; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    items[index-1].style.display = "block";
    dots[index-1].className += " active";
}
</script>
