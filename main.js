
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_object= "";

function block_update(image_block){

    fabric.Image.fromURL(image_block,function(IMG){
        block_object  = IMG;

        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);

        block_object.set({
            top : block_y,
            left : block_x
        });

        canvas.add(block_object);

    });


}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{	block_x = 10
		// upload red ranger
		block_update("rr.jpg");
		console.log("red ranger");
	}
	if(keyPressed == '71')
	{
		block_x = 250;
		// upload green ranger
		block_update("gr.png");
		console.log("green ranger");

	}
	
	if(keyPressed == '89')
	{
		block_x =400;
		// upload yellow ranger
		block_update("yr.png");
		console.log("yellow ranger");
	}
	if(keyPressed == '80')
	{
		block_x = 670;
		// upload pink ranger
		block_update("pr.png");
		console.log("pink ranger");
	}
	if(keyPressed == '66')
	{
		block_x = 800;
	// upload blue ranger
	block_update("br.png");
		console.log("blue ranger");
	}
	
}

