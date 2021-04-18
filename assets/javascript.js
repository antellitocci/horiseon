//create a variable to retrieve the button
topButton = document.getElementById("toTopButton");

//When user scrolls down 500px from the top (Header size) of the document, show button
window.onscroll = function() {scrollFunction()};

//Scroll function to change display type of button when a user scrolls on the screen.
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