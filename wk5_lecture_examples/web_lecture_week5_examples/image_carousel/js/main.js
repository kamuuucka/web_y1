var rotation = 0;
var angle = 0;

var imgArr = [ '1.jpg','1.jpg','1.jpg','1.jpg','1.jpg','1.jpg','1.jpg','1.jpg','1.jpg','1.jpg'];

$( document ).ready( doStuff );

function doStuff( e )
{
	for( var i = 0 ; i < imgArr.length ; i++ )
	{
		var card = $( '<div class="card"><img src="img/' + imgArr[i] + '" alt="" /></a></div>' );
		$( '.wrapper' ).append( card );
	}

	angle = Math.round( 360 / imgArr.length );
	setCards();

	$( '.next' ).click( nextCard );
	$( '.previous' ).click( previousCard );
}

function nextCard( e )
{
	rotation += angle;
	setCards();
}

function previousCard( e )
{
	rotation -= angle;
	setCards();
}

function setCards()
{
	cardsArray = $( '.card' );
	for( var i = 0 ; i < cardsArray.length ; i++ )
	{
		$( cardsArray[i] ).css( 'transform' , 'rotateY(' + ( i * angle + rotation ) + 'deg) translateZ(400px)' );
	}
	$( '.wrapper' ).addClass( 'visible' );
}
