var CityGL = CityGL ||{};

// based on https://github.com/documentcloud/underscore/blob/bf657be243a075b5e72acc8a83e6f12a564d8f55/underscore.js#L767
CityGL.extend = function ( obj, source ) {

	// ECMAScript5 compatibility based on: http://www.nczonline.net/blog/2012/12/11/are-your-mixins-ecmascript-5-compatible/
	if ( Object.keys ) {

		var keys = Object.keys( source );

		for (var i = 0, il = keys.length; i < il; i++) {

			var prop = keys[i];
			Object.defineProperty( obj, prop, Object.getOwnPropertyDescriptor( source, prop ) );

		}

	} else {

		var safeHasOwnProperty = {}.hasOwnProperty;

		for ( var prop in source ) {

			if ( safeHasOwnProperty.call( source, prop ) ) {

				obj[prop] = source[prop];

			}

		}

	}

	return obj;

};
