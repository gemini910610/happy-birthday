happy = document.getElementById('happy');
birthday = document.getElementById('birthday');
happyShadow = '-1px 1px 0 rgb(92,157,77)';//rgb -38
birthdayShadow = '-1px 1px 0 rgb(217,132,47)';
for (i = 2; i < 20; i++)
{
	happyShadow += ',' + -i + 'px ' + i / 2 + 'px 0 rgb(92,157,77)';
	birthdayShadow += ',' + -i + 'px ' + i / 2 + 'px 0 rgb(217,132,47)';
}
happy.style.textShadow = happyShadow;
birthday.style.textShadow = birthdayShadow;

state = 0;
function cakeOnClick()
{
	if (state == 0)
	{
		state = 1;
		text3d = document.getElementsByClassName('text-3d')[0];
		text3d.style.opacity = 0;
		cake = document.getElementsByClassName('cake')[0];
		cake.style.transform = 'translateX(-200px)';
		gift = document.getElementsByClassName('gift')[0];
		gift.style.transform = 'translateX(200px)';
		ui = document.getElementsByClassName('ui')[0];
		ui.style.opacity = 1;
		keyboard = document.getElementsByClassName('keyboard')[0];
		keyboard.style.top = '200px';
		keyboard.style.opacity = 1;
		background = document.getElementsByClassName('background')[0];
		background.style.top = '88px';
		textfield = document.getElementsByClassName('textfield')[0];
		textfield.style.top = '100px';
		inputText.innerText = '';
		success = false;
	}
	else if (state == 1)
	{
		state = 0;
		text3d = document.getElementsByClassName('text-3d')[0];
		text3d.style.opacity = null;
		cake = document.getElementsByClassName('cake')[0];
		cake.style.transform = null;
		gift = document.getElementsByClassName('gift')[0];
		gift.style.transform = null;
		ui = document.getElementsByClassName('ui')[0];
		ui.style.opacity = null;
		keyboard = document.getElementsByClassName('keyboard')[0];
		keyboard.style.top = null;
		keyboard.style.opacity = null;
		background = document.getElementsByClassName('background')[0];
		background.style.top = null;
		textfield = document.getElementsByClassName('textfield')[0];
		textfield.style.top = null;
	}
	else
	{
		state = 0;
		text3d = document.getElementsByClassName('text-3d')[0];
		text3d.style.opacity = null;
		cake = document.getElementsByClassName('cake')[0];
		cake.style.transform = null;
		gift = document.getElementsByClassName('gift')[0];
		gift.style.transform = null;
		fireworks = document.getElementById('firework');
		fireworks.style.opacity = null;
		fireworkText = document.getElementsByClassName('firework-text');
		for (i = 0; i < fireworkText.length; i++)
		{
			fireworkText[i].style.transitionDelay = null;
			fireworkText[i].style.transform = null;
		}
	}
}

function giftOnClick()
{
	gift = document.getElementById('gift');
	if (gift.style.opacity == 1)
	{
		if (state == 0)
		{
			state = 2;
			text3d = document.getElementsByClassName('text-3d')[0];
			text3d.style.opacity = 0;
			cake = document.getElementsByClassName('cake')[0];
			cake.style.transform = 'translateX(-200px)';
			gift = document.getElementsByClassName('gift')[0];
			gift.style.transform = 'translateX(200px)';
			firework = document.getElementById('firework');
			firework.style.opacity = 1;
			fireworkText = document.getElementsByClassName('firework-text');
			for (i = 0; i < fireworkText.length; i++)
			{
				fireworkText[i].style.transitionDelay = (i+2)*0.5 + 's';
				fireworkText[i].style.transform = 'scale(1)';
			}
		}
		else if (state == 1)
		{
			state = 2;
			ui = document.getElementsByClassName('ui')[0];
			ui.style.opacity = null;
			keyboard = document.getElementsByClassName('keyboard')[0];
			keyboard.style.top = null;
			keyboard.style.opacity = null;
			background = document.getElementsByClassName('background')[0];
			background.style.top = null;
			textfield = document.getElementsByClassName('textfield')[0];
			textfield.style.top = null;
			firework = document.getElementById('firework');
			firework.style.opacity = 1;
			fireworkText = document.getElementsByClassName('firework-text');
			for (i = 0; i < fireworkText.length; i++)
			{
				fireworkText[i].style.transitionDelay = (i+2)*0.5 + 's';
				fireworkText[i].style.transform = 'scale(1)';
			}
		}
		else
		{
			state = 0;
			text3d = document.getElementsByClassName('text-3d')[0];
			text3d.style.opacity = null;
			cake = document.getElementsByClassName('cake')[0];
			cake.style.transform = null;
			gift = document.getElementsByClassName('gift')[0];
			gift.style.transform = null;
			fireworks = document.getElementById('firework');
			fireworks.style.opacity = null;
			fireworkText = document.getElementsByClassName('firework-text');
			for (i = 0; i < fireworkText.length; i++)
			{
				fireworkText[i].style.transitionDelay = null;
				fireworkText[i].style.transform = null;
			}
		}
	}
}

function unlockGift()
{
	gift = document.getElementById('gift');
	gift.style.opacity = 1;
	gift = document.getElementsByClassName('gift')[0];
	gift.style.cursor = 'pointer';
}