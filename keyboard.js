shuffle = document.getElementById("shuffle");
inputText = document.getElementById("inputText");
function randomText()
{
    temp = inputText.innerText;
    for (i = 0; i < 13 - inputText.innerText.length; i++)
    {
        random = (Math.random() * 26 | 0) + 65;
        temp += String.fromCharCode(random);
    }
    shuffle.innerText = temp;
}

str = "HAPPYBIRTHDAY";
last = "";
success = false;
var timeout;
randomText();
interval = setInterval(randomText, 200);
document.onkeydown = function (event)
{
    ui = document.getElementsByClassName('ui')[0];
    if (ui.style.opacity == 1)
    {
        clearTimeout(timeout);
        key = event.key.toUpperCase();
        color = 'red';
        if (str.charAt(inputText.innerText.length) == key)
        {
            inputText.innerText += key;
            color = 'green';
        }
        else if (key == " ")
        {
            color = 'yellow';
        }
        element = document.getElementById(last);
        try
        {
            element.removeAttribute('style');
        }
        catch (e) { }
        if (key.charCodeAt() >= 65 && key.charCodeAt() <= 90)
        {
            last = key;
            element = document.getElementById(last);
            try
            {
                element.setAttribute('style', 'filter: drop-shadow(4px 4px 5px ' + color + ')');
                timeout = setTimeout('element.removeAttribute("style")', 500);
            }
            catch (e) { }
        }
        else if (key == " ")
        {
            inputText.innerText = "";
            randomText();
            clearInterval(interval);
            interval = setInterval(randomText, 200);
            last = "space";
            element = document.getElementById(last);
            element.setAttribute('style', 'filter: drop-shadow(4px 4px 5px ' + color + ')');
            timeout = setTimeout('element.removeAttribute("style")', 500);
            success = false;
        }
        randomText();
        if (inputText.innerText.length == 13 && !success)
        {
            shuffle.innerText = "HAPPYBIRTHDAY";
            unlockGift();
            func();
            success = true;
        }
    }
}