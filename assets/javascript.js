//create a variable to retrieve the button
topButton = document.getElementById("toTopButton");

//When user scrolls down 76px from the top (Header size) of the document, show button
window.onscroll = function() {scrollFunction()};

//Scroll function
function scrollFunction()
{


    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
    {
        topButton.style.display = "inline-block";
    }
    else
    {
        topButton.style.display = "none";
    }
}

//Scroll to top of document, when the user clicks the button
function topFunction()
{
    document.body.scrollTop = 0; //Safari support
    document.documentElement.scrollTop = 0; //Chrome, Firefox, IE, and Opera support
}