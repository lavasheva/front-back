function  OpenFormButton(){
    var popup = document.querySelector('.forma_obr');
    popup.style.display='flex';
}

function CloseFormButton(){
    var closeup = document.querySelector('.forma_obr');
    closeup.style.display='none';
}

window.onscroll = function() {
    const scrollButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

