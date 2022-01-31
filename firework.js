style = document.querySelector('style');
for (i = 1; i < 13; i++)
{
    style.innerHTML += '.explosion:nth-child(' + i + '){transform: rotate(' + (i - 1) * 30 + 'deg) translateY(-15px);}'
}
colors = ["#df2020", "#df8020", "#dfdf20", "#20df20", "#20dfdf", "#5020df"];
for (j = 0; j < 30; j++)
{
    html = '<div class="firework" id="firework' + j + '" ';
    left = ((Math.random() * 8 | 0) + 1) * 10;
    Top = ((Math.random() * 8 | 0) + 1) * 10;
    scale = ((Math.random() * 10 | 0) + 5) * 0.1;
    html += 'style="left:' + left + '%;top:' + Top + '%;transform:scale(' + scale + ');';
    z = Math.random() * 4 | 0;
    if (z == 0)
    {
        html += 'z-index:1';
    }
    html += '">';
    for (i = 0; i < 12; i++)
    {
        html += '<div class="explosion"></div>';
    }
    html += '</div>';
    document.write(html);
    style.innerHTML += '#firework' + j + ' .explosion::before {animation: explosion 2.5s ';
    delay = (Math.random() * 30 | 0) * 0.1;
    style.innerHTML += delay + 's ease-in-out infinite;background-color:' + colors[j % 6] + ';}';
}