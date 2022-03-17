var toppings = [
	{
		id: "bacon",
		price: 2.50,
		url: 'image/bacon.gif'
	},
	{
		id: "salad",
		price: 1.50,
		url: 'image/salad.gif'
	},
	{
		id: "tomato",
		price: 1.50,
		url: 'image/tomato.gif'
	},
	{
		id: "cheese",
		price: 2,
		url: 'image/chees.gif'
	},
	{
		id: "meat",
		price: 3.5,
		url: 'image/meat.gif'
	},
	{
		id: "ketchup",
		price: 0.50,
		url: 'image/ketchup.gif'
	}
];

var total;

$(document).ready( doStuff );

function doStuff ()
{
	for ( var i = 0 ; i < toppings.length ; i++ )
	{
		createButton( toppings[i] , i );
	}
}

function createButton( obj, id )
{
	var name = obj.id;
	var url = obj.url;

	var button = $( '<button data-name="' + name + '" class="' + name + '">' + name + '</button>' );
	var topping = $( '<span class="' + name + '"><img src="' + url + '" alt=""></span>' );

	button.click( buttonClicked );
	topping.insertBefore( '.bottom' );

	$('.buttons').append(button);
}

function buttonClicked( e )
{
	var name = $( this ).attr( 'data-name' ) ;
	$( '.' + name ).toggleClass( 'active' );
	countCost();
}

function countCost()
{
	total = 0;
	var but = $( '.buttons .active' );

	for ( var i = 0 ; i < but.length ; i++ )
	{
		var name = $( but[i] ).attr( 'data-name' );
		for ( var j = 0 ; j < toppings.length ; j++ )
		{
			if( name == toppings[j].id )
			{
				total += toppings[j].price;
				break;
			}
		}
	}

	$( '.cost' ).html( 'This burger cost: &euro;' + total );
}

