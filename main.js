canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

fondo = "download.jpg";

ancho1= 50;
alto1= 45;
auto1= "download.png";
auto1x= 10;
auto1y= 10;

ancho2= 50;
alto2= 45;
auto2= "download (1).png";
auto2x= 10;
auto2y= 400;

function add(){
    fondoimg= new Image();
    fondoimg.onload= subirfondo;
    fondoimg.src= fondo;

    auto1img= new Image();
    auto1img.onload= subirauto1;
    auto1img.src= auto1;

    auto2img= new Image();
    auto2img.onload= subirauto2;
    auto2img.src= auto2;
}
function subirfondo(){
    ctx.drawImage(fondoimg, 0, 0, canvas.width, canvas.height);
}
function subirauto1(){
    ctx.drawImage(auto1img, auto1x, auto1y, ancho1, alto1);
}
function subirauto2(){
    ctx.drawImage(auto2img, auto2x, auto2y, ancho2, alto2);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			
		}
		if(keyPressed == '40')
		{
			down();
			
		}
		if(keyPressed == '37')
		{
			left();
			
		}
		if(keyPressed == '39')
		{
			right();
			
		}
        if(keyPressed == '87')
		{
			up1();
			
		}
		if(keyPressed == '83')
		{
			down1();
			
		}
		if(keyPressed == '65')
		{
			left1();
			
		}
		if(keyPressed == '68')
		{
			right1();
			
		}
}

		
function up()
{
	if( auto1y>=0)
	{
		auto1y = auto1y - 10;
        subirfondo();
        subirauto1();
		 
	}
}
function down()
{
	if( auto1y<=500)
	{
		auto1y=auto1y + 10;
        subirfondo();
        subirauto1();
	}
}
function left()
{
	if( auto1x>= 0 )
	{
		auto1x =auto1x - 10;
		subirfondo();
        subirauto1();
	}
}
function right()
{
	if( auto1x<= 700)
	{
		auto1x=auto1x + 10;
		subirfondo();
        subirauto1();
   }
}
function up1()
{
	if( auto2y>=0)
	{
		auto2y = auto2y - 10;
        subirfondo();
        subirauto2();
		 
	}
}
function down1()
{
	if( auto2y<=500)
	{
		auto2y=auto2y + 10;
        subirfondo();
        subirauto2();
	}
}
function left1()
{
	if( auto2x>= 0 )
	{
		auto2x =auto2x - 10;
		subirfondo();
        subirauto2();
	}
}
function right1()
{
	if( auto2x<=700)
	{
		auto2x=auto2x + 10;
		subirfondo();
        subirauto2();
   }
}
	



