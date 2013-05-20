var body = document.body,
	logo = body.querySelector( '.logo' ),
	logoOriginalClassName = logo.className,
	attachLogoStateToggler = function(element){
		element.addEventListener( 'mouseover', function(){
			logo.className += ' active';
		} );
		element.addEventListener( 'mouseout', function(){
			logo.className = logoOriginalClassName;
		} );
	};

/*attachLogoStateToggler(logo.querySelector( '.triangle-center' ));
attachLogoStateToggler(logo.querySelector( '.logo-initial' ));*/
attachLogoStateToggler(logo.querySelector( '.logo-link' ));

/*
 * <sarcasm> Some clear code below </sarcasm>
 * Equivalent to $('button').on('click', function(){ ... });
 */
Array.prototype.slice.call( body.getElementsByTagName( 'button' ), 0 ) //can't iterate over NodeList :/
	.forEach( function(button){
		button.addEventListener( 'click', function(){
			body.style.background = this.innerText;
	} )
} );