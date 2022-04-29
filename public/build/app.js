/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/font-awesome/css/font-awesome.css":
/*!********************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/material-design-icons/iconfont/material-icons.css":
/*!************************************************************************!*\
  !*** ./node_modules/material-design-icons/iconfont/material-icons.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack-icons-installer/bootstrap/bootstrap.css":
/*!*********************************************************!*\
  !*** (webpack)-icons-installer/bootstrap/bootstrap.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/webpack-icons-installer/icons.js":
/*!******************************************!*\
  !*** (webpack)-icons-installer/icons.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./bootstrap/bootstrap.css */ "./node_modules/webpack-icons-installer/bootstrap/bootstrap.css");
__webpack_require__(/*! font-awesome/css/font-awesome.css */ "./node_modules/font-awesome/css/font-awesome.css");
__webpack_require__(/*! material-design-icons/iconfont/material-icons.css */ "./node_modules/material-design-icons/iconfont/material-icons.css");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons sync recursive \\.(png|jpg|jpeg|gif|ico|svg|webp)$":
/*!******************************************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons sync \.(png|jpg|jpeg|gif|ico|svg|webp)$ ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./alien.png": "./public/assets/SCEditor_wysiwyg/emoticons/alien.png",
	"./angel.png": "./public/assets/SCEditor_wysiwyg/emoticons/angel.png",
	"./angry.png": "./public/assets/SCEditor_wysiwyg/emoticons/angry.png",
	"./blink.png": "./public/assets/SCEditor_wysiwyg/emoticons/blink.png",
	"./blush.png": "./public/assets/SCEditor_wysiwyg/emoticons/blush.png",
	"./cheerful.png": "./public/assets/SCEditor_wysiwyg/emoticons/cheerful.png",
	"./cool.png": "./public/assets/SCEditor_wysiwyg/emoticons/cool.png",
	"./cwy.png": "./public/assets/SCEditor_wysiwyg/emoticons/cwy.png",
	"./devil.png": "./public/assets/SCEditor_wysiwyg/emoticons/devil.png",
	"./dizzy.png": "./public/assets/SCEditor_wysiwyg/emoticons/dizzy.png",
	"./ermm.png": "./public/assets/SCEditor_wysiwyg/emoticons/ermm.png",
	"./face.png": "./public/assets/SCEditor_wysiwyg/emoticons/face.png",
	"./getlost.png": "./public/assets/SCEditor_wysiwyg/emoticons/getlost.png",
	"./grin.png": "./public/assets/SCEditor_wysiwyg/emoticons/grin.png",
	"./happy.png": "./public/assets/SCEditor_wysiwyg/emoticons/happy.png",
	"./heart.png": "./public/assets/SCEditor_wysiwyg/emoticons/heart.png",
	"./kissing.png": "./public/assets/SCEditor_wysiwyg/emoticons/kissing.png",
	"./laughing.png": "./public/assets/SCEditor_wysiwyg/emoticons/laughing.png",
	"./ninja.png": "./public/assets/SCEditor_wysiwyg/emoticons/ninja.png",
	"./pinch.png": "./public/assets/SCEditor_wysiwyg/emoticons/pinch.png",
	"./pouty.png": "./public/assets/SCEditor_wysiwyg/emoticons/pouty.png",
	"./sad.png": "./public/assets/SCEditor_wysiwyg/emoticons/sad.png",
	"./shocked.png": "./public/assets/SCEditor_wysiwyg/emoticons/shocked.png",
	"./sick.png": "./public/assets/SCEditor_wysiwyg/emoticons/sick.png",
	"./sideways.png": "./public/assets/SCEditor_wysiwyg/emoticons/sideways.png",
	"./silly.png": "./public/assets/SCEditor_wysiwyg/emoticons/silly.png",
	"./sleeping.png": "./public/assets/SCEditor_wysiwyg/emoticons/sleeping.png",
	"./smile.png": "./public/assets/SCEditor_wysiwyg/emoticons/smile.png",
	"./tongue.png": "./public/assets/SCEditor_wysiwyg/emoticons/tongue.png",
	"./unsure.png": "./public/assets/SCEditor_wysiwyg/emoticons/unsure.png",
	"./w00t.png": "./public/assets/SCEditor_wysiwyg/emoticons/w00t.png",
	"./wassat.png": "./public/assets/SCEditor_wysiwyg/emoticons/wassat.png",
	"./whistling.png": "./public/assets/SCEditor_wysiwyg/emoticons/whistling.png",
	"./wink.png": "./public/assets/SCEditor_wysiwyg/emoticons/wink.png",
	"./wub.png": "./public/assets/SCEditor_wysiwyg/emoticons/wub.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./public/assets/SCEditor_wysiwyg/emoticons sync recursive \\.(png|jpg|jpeg|gif|ico|svg|webp)$";

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/alien.png":
/*!************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/alien.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/alien.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/angel.png":
/*!************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/angel.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/angel.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/angry.png":
/*!************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/angry.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/angry.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/blink.png":
/*!************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/blink.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/blink.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/blush.png":
/*!************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/blush.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/blush.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/cheerful.png":
/*!***************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/cheerful.png ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/cheerful.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/cool.png":
/*!***********************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/cool.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/cool.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/cwy.png":
/*!**********************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/cwy.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/cwy.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/devil.png":
/*!************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/devil.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/devil.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/dizzy.png":
/*!************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/dizzy.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/dizzy.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/ermm.png":
/*!***********************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/ermm.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/ermm.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/face.png":
/*!***********************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/face.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/face.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/getlost.png":
/*!**************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/getlost.png ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/getlost.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/grin.png":
/*!***********************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/grin.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/grin.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/happy.png":
/*!************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/happy.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/happy.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/heart.png":
/*!************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/heart.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/heart.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/kissing.png":
/*!**************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/kissing.png ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/kissing.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/laughing.png":
/*!***************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/laughing.png ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/laughing.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/ninja.png":
/*!************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/ninja.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/ninja.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/pinch.png":
/*!************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/pinch.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/pinch.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/pouty.png":
/*!************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/pouty.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/pouty.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/sad.png":
/*!**********************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/sad.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/sad.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/shocked.png":
/*!**************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/shocked.png ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/shocked.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/sick.png":
/*!***********************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/sick.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/sick.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/sideways.png":
/*!***************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/sideways.png ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/sideways.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/silly.png":
/*!************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/silly.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/silly.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/sleeping.png":
/*!***************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/sleeping.png ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/sleeping.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/smile.png":
/*!************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/smile.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/smile.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/tongue.png":
/*!*************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/tongue.png ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/tongue.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/unsure.png":
/*!*************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/unsure.png ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/unsure.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/w00t.png":
/*!***********************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/w00t.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/w00t.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/wassat.png":
/*!*************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/wassat.png ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/wassat.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/whistling.png":
/*!****************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/whistling.png ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/whistling.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/wink.png":
/*!***********************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/wink.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/wink.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/emoticons/wub.png":
/*!**********************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/emoticons/wub.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "emoticons/wub.png");

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/minified/formats/xhtml.js":
/*!******************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/minified/formats/xhtml.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* SCEditor v2.1.3 | (C) 2017, Sam Clarke | sceditor.com/license */
!function (y) {
  "use strict";

  var t = y.ie,
      E = t && t < 11,
      C = y.dom,
      e = y.utils,
      S = C.css,
      n = C.attr,
      T = C.is,
      A = C.removeAttr,
      i = C.convertElement,
      r = e.extend,
      a = e.each,
      N = e.isEmptyObject,
      l = y.command.get,
      s = {
    bold: {
      txtExec: ["<strong>", "</strong>"]
    },
    italic: {
      txtExec: ["<em>", "</em>"]
    },
    underline: {
      txtExec: ['<span style="text-decoration:underline;">', "</span>"]
    },
    strike: {
      txtExec: ['<span style="text-decoration:line-through;">', "</span>"]
    },
    subscript: {
      txtExec: ["<sub>", "</sub>"]
    },
    superscript: {
      txtExec: ["<sup>", "</sup>"]
    },
    left: {
      txtExec: ['<div style="text-align:left;">', "</div>"]
    },
    center: {
      txtExec: ['<div style="text-align:center;">', "</div>"]
    },
    right: {
      txtExec: ['<div style="text-align:right;">', "</div>"]
    },
    justify: {
      txtExec: ['<div style="text-align:justify;">', "</div>"]
    },
    font: {
      txtExec: function txtExec(t) {
        var e = this;

        l("font")._dropDown(e, t, function (t) {
          e.insertText('<span style="font-family:' + t + ';">', "</span>");
        });
      }
    },
    size: {
      txtExec: function txtExec(t) {
        var e = this;

        l("size")._dropDown(e, t, function (t) {
          e.insertText('<span style="font-size:' + t + ';">', "</span>");
        });
      }
    },
    color: {
      txtExec: function txtExec(t) {
        var e = this;

        l("color")._dropDown(e, t, function (t) {
          e.insertText('<span style="color:' + t + ';">', "</span>");
        });
      }
    },
    bulletlist: {
      txtExec: ["<ul><li>", "</li></ul>"]
    },
    orderedlist: {
      txtExec: ["<ol><li>", "</li></ol>"]
    },
    table: {
      txtExec: ["<table><tr><td>", "</td></tr></table>"]
    },
    horizontalrule: {
      txtExec: ["<hr />"]
    },
    code: {
      txtExec: ["<code>", "</code>"]
    },
    image: {
      txtExec: function txtExec(t, e) {
        var o = this;

        l("image")._dropDown(o, t, e, function (t, e, n) {
          var i = "";
          e && (i += ' width="' + e + '"'), n && (i += ' height="' + n + '"'), o.insertText("<img" + i + ' src="' + t + '" />');
        });
      }
    },
    email: {
      txtExec: function txtExec(t, n) {
        var i = this;

        l("email")._dropDown(i, t, function (t, e) {
          i.insertText('<a href="mailto:' + t + '">' + (e || n || t) + "</a>");
        });
      }
    },
    link: {
      txtExec: function txtExec(t, n) {
        var i = this;

        l("link")._dropDown(i, t, function (t, e) {
          i.insertText('<a href="' + t + '">' + (e || n || t) + "</a>");
        });
      }
    },
    quote: {
      txtExec: ["<blockquote>", "</blockquote>"]
    },
    youtube: {
      txtExec: function txtExec(t) {
        var n = this;

        l("youtube")._dropDown(n, t, function (t, e) {
          n.insertText('<iframe width="560" height="315" src="https://www.youtube.com/embed/{id}?wmode=opaque&start=' + e + '" data-youtube-id="' + t + '" frameborder="0" allowfullscreen></iframe>');
        });
      }
    },
    rtl: {
      txtExec: ['<div stlye="direction:rtl;">', "</div>"]
    },
    ltr: {
      txtExec: ['<div stlye="direction:ltr;">', "</div>"]
    }
  };

  function z() {
    var o = this,
        n = {},
        p = {};

    function t(t, e, n) {
      var i,
          o,
          h,
          r,
          a,
          l,
          s,
          c,
          u,
          d,
          f,
          g,
          v,
          x,
          m = n.createElement("div");
      return m.innerHTML = e, S(m, "visibility", "hidden"), n.body.appendChild(m), o = m, C.traverse(o, function (t) {
        var e = t.nodeName.toLowerCase();
        b("*", t), b(e, t);
      }, !0), h = m, C.traverse(h, function (t) {
        var e,
            n = t.nodeName.toLowerCase(),
            i = t.parentNode,
            o = t.nodeType,
            r = !C.isInline(t),
            a = t.previousSibling,
            l = t.nextSibling,
            s = i === h,
            c = !a && !l,
            u = "iframe" !== n && function t(e, n) {
          var i,
              o = e.childNodes,
              r = e.nodeName.toLowerCase(),
              a = e.nodeValue,
              l = o.length,
              s = z.allowedEmptyTags || [];
          if (n && "br" === r) return !0;
          if (T(e, ".sceditor-ignore")) return !0;
          if (-1 < s.indexOf(r) || "td" === r || !C.canHaveChildren(e)) return !1;
          if (a && /\S|\u00A0/.test(a)) return !1;

          for (; l--;) {
            if (!t(o[l], n && !e.previousSibling && !e.nextSibling)) return !1;
          }

          return !e.getBoundingClientRect || !e.className && !e.hasAttributes("style") || !(i = e.getBoundingClientRect()).width || !i.height;
        }(t, s && c && "br" !== n),
            d = t.ownerDocument,
            f = z.allowedTags,
            g = t.firstChild,
            v = z.disallowedTags;

        if (3 !== o && (4 === o ? n = "!cdata" : "!" !== n && 8 !== o || (n = "!comment"), 1 === o && T(t, ".sceditor-nlf") && (!g || !E && 1 === t.childNodes.length && /br/i.test(g.nodeName) ? u = !0 : (t.classList.remove("sceditor-nlf"), t.className || A(t, "class"))), u ? e = !0 : f && f.length ? e = f.indexOf(n) < 0 : v && v.length && (e = -1 < v.indexOf(n)), e)) {
          if (!u) {
            for (r && a && C.isInline(a) && i.insertBefore(d.createTextNode(" "), t); t.firstChild;) {
              i.insertBefore(t.firstChild, l);
            }

            r && l && C.isInline(l) && i.insertBefore(d.createTextNode(" "), l);
          }

          i.removeChild(t);
        }
      }, !0), r = m, g = (f = z.allowedAttribs) && !N(f), x = (v = z.disallowedAttribs) && !N(v), p = {}, C.traverse(r, function (t) {
        if (t.attributes && (a = t.nodeName.toLowerCase(), c = t.attributes.length)) for (p[a] || (p[a] = g ? w(f["*"], f[a]) : w(v["*"], v[a])); c--;) {
          l = t.attributes[c], s = l.name, u = p[a][s], d = !1, g ? d = null !== u && (!Array.isArray(u) || u.indexOf(l.value) < 0) : x && (d = null === u || Array.isArray(u) && -1 < u.indexOf(l.value)), d && t.removeAttribute(s);
        }
      }), t || function (t) {
        var e;
        C.removeWhiteSpace(t);
        var n,
            i = t.firstChild;

        for (; i;) {
          n = i.nextSibling, C.isInline(i) && !T(i, ".sceditor-ignore") ? (e || (e = t.ownerDocument.createElement("p"), i.parentNode.insertBefore(e, i)), e.appendChild(i)) : e = null, i = n;
        }
      }(m), i = new y.XHTMLSerializer().serialize(m, !0), n.body.removeChild(m), i;
    }

    function b(t, i) {
      n[t] && n[t].forEach(function (n) {
        n.tags[t] ? a(n.tags[t], function (t, e) {
          i.getAttributeNode && (!(t = i.getAttributeNode(t)) || e && e.indexOf(t.value) < 0 || n.conv.call(o, i));
        }) : n.conv && n.conv.call(o, i);
      });
    }

    function w(t, e) {
      var n = {};
      return t && r(n, t), e && a(e, function (t, e) {
        Array.isArray(e) ? n[t] = (n[t] || []).concat(e) : n[t] || (n[t] = null);
      }), n;
    }

    o.init = function () {
      N(z.converters || {}) || a(z.converters, function (t, e) {
        a(e.tags, function (t) {
          n[t] || (n[t] = []), n[t].push(e);
        });
      }), this.commands = r(!0, {}, s, this.commands);
    }, o.toSource = t.bind(null, !1), o.fragmentToSource = t.bind(null, !0);
  }

  y.XHTMLSerializer = function () {
    var i = {
      indentStr: "\t"
    },
        o = [],
        d = 0;

    function f(t) {
      var e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        " ": "&nbsp;"
      };
      return t ? t.replace(/[&<>"\xa0]/g, function (t) {
        return e[t] || t;
      }) : "";
    }

    function g(t, e) {
      switch (t.nodeType) {
        case 1:
          "!" === t.nodeName.toLowerCase() ? n(t) : function (t, e) {
            var n,
                i,
                o,
                r = t.nodeName.toLowerCase(),
                a = "iframe" === r,
                l = t.attributes.length,
                s = t.firstChild,
                c = e || /pre(?:\-wrap)?$/i.test(S(t, "whiteSpace")),
                u = !t.firstChild && !C.canHaveChildren(t) && !a;
            if (T(t, ".sceditor-ignore")) return;
            v("<" + r, !e && h(t));

            for (; l--;) {
              i = t.attributes[l], o = i.value, v(" " + i.name.toLowerCase() + '="' + f(o) + '"', !1);
            }

            v(u ? " />" : ">", !1), a || (n = s);

            for (; n;) {
              d++, g(n, c), n = n.nextSibling, d--;
            }

            u || v("</" + r + ">", !c && !a && h(t) && s && h(s));
          }(t, e);
          break;

        case 3:
          !function (t, e) {
            var n = t.nodeValue;
            e || (n = n.replace(/[\r\n]/, " ").replace(/[^\S|\u00A0]+/g, " "));
            n && v(f(n), !e && h(t));
          }(t, e);
          break;

        case 4:
          v("<![CDATA[" + f(t.nodeValue) + "]]>");
          break;

        case 8:
          n(t);
          break;

        case 9:
        case 11:
          !function (t) {
            var e = t.firstChild;

            for (; e;) {
              g(e), e = e.nextSibling;
            }
          }(t);
      }
    }

    function n(t) {
      v("\x3c!-- " + f(t.nodeValue) + " --\x3e");
    }

    function v(t, e) {
      var n = d;
      if (!1 !== e) for (o.length && o.push("\n"); n--;) {
        o.push(i.indentStr);
      }
      o.push(t);
    }

    function h(t) {
      var e = t.previousSibling;
      return 1 !== t.nodeType && e ? !C.isInline(e) : !e && !C.isInline(t.parentNode) || !C.isInline(t);
    }

    this.serialize = function (t, e) {
      if (o = [], e) for (t = t.firstChild; t;) {
        g(t), t = t.nextSibling;
      } else g(t);
      return o.join("");
    };
  }, z.converters = [{
    tags: {
      "*": {
        width: null
      }
    },
    conv: function conv(t) {
      S(t, "width", n(t, "width")), A(t, "width");
    }
  }, {
    tags: {
      "*": {
        height: null
      }
    },
    conv: function conv(t) {
      S(t, "height", n(t, "height")), A(t, "height");
    }
  }, {
    tags: {
      li: {
        value: null
      }
    },
    conv: function conv(t) {
      A(t, "value");
    }
  }, {
    tags: {
      "*": {
        text: null
      }
    },
    conv: function conv(t) {
      S(t, "color", n(t, "text")), A(t, "text");
    }
  }, {
    tags: {
      "*": {
        color: null
      }
    },
    conv: function conv(t) {
      S(t, "color", n(t, "color")), A(t, "color");
    }
  }, {
    tags: {
      "*": {
        face: null
      }
    },
    conv: function conv(t) {
      S(t, "fontFamily", n(t, "face")), A(t, "face");
    }
  }, {
    tags: {
      "*": {
        align: null
      }
    },
    conv: function conv(t) {
      S(t, "textAlign", n(t, "align")), A(t, "align");
    }
  }, {
    tags: {
      "*": {
        border: null
      }
    },
    conv: function conv(t) {
      S(t, "borderWidth", n(t, "border")), A(t, "border");
    }
  }, {
    tags: {
      applet: {
        name: null
      },
      img: {
        name: null
      },
      layer: {
        name: null
      },
      map: {
        name: null
      },
      object: {
        name: null
      },
      param: {
        name: null
      }
    },
    conv: function conv(t) {
      n(t, "id") || n(t, "id", n(t, "name")), A(t, "name");
    }
  }, {
    tags: {
      "*": {
        vspace: null
      }
    },
    conv: function conv(t) {
      S(t, "marginTop", n(t, "vspace") - 0), S(t, "marginBottom", n(t, "vspace") - 0), A(t, "vspace");
    }
  }, {
    tags: {
      "*": {
        hspace: null
      }
    },
    conv: function conv(t) {
      S(t, "marginLeft", n(t, "hspace") - 0), S(t, "marginRight", n(t, "hspace") - 0), A(t, "hspace");
    }
  }, {
    tags: {
      hr: {
        noshade: null
      }
    },
    conv: function conv(t) {
      S(t, "borderStyle", "solid"), A(t, "noshade");
    }
  }, {
    tags: {
      "*": {
        nowrap: null
      }
    },
    conv: function conv(t) {
      S(t, "whiteSpace", "nowrap"), A(t, "nowrap");
    }
  }, {
    tags: {
      big: null
    },
    conv: function conv(t) {
      S(i(t, "span"), "fontSize", "larger");
    }
  }, {
    tags: {
      small: null
    },
    conv: function conv(t) {
      S(i(t, "span"), "fontSize", "smaller");
    }
  }, {
    tags: {
      b: null
    },
    conv: function conv(t) {
      i(t, "strong");
    }
  }, {
    tags: {
      u: null
    },
    conv: function conv(t) {
      S(i(t, "span"), "textDecoration", "underline");
    }
  }, {
    tags: {
      s: null,
      strike: null
    },
    conv: function conv(t) {
      S(i(t, "span"), "textDecoration", "line-through");
    }
  }, {
    tags: {
      dir: null
    },
    conv: function conv(t) {
      i(t, "ul");
    }
  }, {
    tags: {
      center: null
    },
    conv: function conv(t) {
      S(i(t, "div"), "textAlign", "center");
    }
  }, {
    tags: {
      font: {
        size: null
      }
    },
    conv: function conv(t) {
      S(t, "fontSize", S(t, "fontSize")), A(t, "size");
    }
  }, {
    tags: {
      font: null
    },
    conv: function conv(t) {
      i(t, "span");
    }
  }, {
    tags: {
      "*": {
        type: ["_moz"]
      }
    },
    conv: function conv(t) {
      A(t, "type");
    }
  }, {
    tags: {
      "*": {
        _moz_dirty: null
      }
    },
    conv: function conv(t) {
      A(t, "_moz_dirty");
    }
  }, {
    tags: {
      "*": {
        _moz_editor_bogus_node: null
      }
    },
    conv: function conv(t) {
      t.parentNode.removeChild(t);
    }
  }], z.allowedAttribs = {}, z.disallowedAttribs = {}, z.allowedTags = [], z.disallowedTags = [], z.allowedEmptyTags = [], y.formats.xhtml = z;
}(sceditor);

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/minified/icons/monocons.js":
/*!*******************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/minified/icons/monocons.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* SCEditor v2.1.3 | (C) 2017, Sam Clarke | sceditor.com/license */
!function (h, a) {
  "use strict";

  var c = a.dom,
      v = {
    bold: '<text x="50%" y="50%" text-anchor="middle" dy=".5ex" font-family="Dejavu Sans, Helvetica, Arial, sans-serif" font-size="15" font-weight="bold">B</text>',
    bulletlist: '<path d="M6 2h9v2H6zm0 5h9v2H6zm0 5h9v2H6z"/><circle cx="3" cy="3" r="1.75"/><circle cx="3" cy="8" r="1.75"/><circle cx="3" cy="13" r="1.75"/>',
    center: '<path d="M1 1h14v2H1zm2 4h10v2H3zM1 9h14v2H1zm2 4h10v2H3z"/>',
    code: '<path d="M7 6L4 9l3 3v-1.5L5.5 9 7 7.5zm2 0v1.5L10.5 9 9 10.5V12l3-3zM2.406 1A.517.517 0 0 0 2 1.5v13c0 .262.238.5.5.5h11a.52.52 0 0 0 .5-.5V4.375c.002-.102-.13-.193-.156-.219l-3-3A.506.506 0 0 0 10.5 1zM3 2h7v2.5c0 .262.238.5.5.5H13v9H3zm8 .688L12.313 4H11z"/>',
    color: '<text x="50%" y="8" text-anchor="middle" dy=".5ex" font-family="Dejavu Sans, Helvetica, Arial, sans-serif" font-size="13" font-weight="bold">A</text><path class="sce-color" d="M2 13h12v2H2z"/>',
    copy: '<path d="M6.404 5.002a.5.5 0 0 0-.406.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V8.596a.492.492 0 0 0 0-.094.662.662 0 0 0 0-.063v-.063l-.031-.063v-.031a.557.557 0 0 0-.094-.094l-.031-.031-2.875-2.844a.498.498 0 0 0-.125-.156.5.5 0 0 0-.344-.156h-5a.59.59 0 0 0-.094.001c-.239.046.031-.003 0 0zm.594 1h4v2.5a.5.5 0 0 0 .5.5h2.5v6h-7v-9zm5 .687l1.313 1.313h-1.313V6.689zM1.406.002a.517.517 0 0 0-.406.5v10c0 .262.238.5.5.5H7V6l3-.063V3.596a.492.492 0 0 0 0-.094.331.331 0 0 0 0-.063v-.063c-.009-.021-.02-.041-.031-.062v-.031a.597.597 0 0 0-.094-.094l-.031-.031L6.969.314a.484.484 0 0 0-.125-.156A.506.506 0 0 0 6.5.002h-5a.492.492 0 0 0-.094 0c-.229.044.032-.003 0 0zm.594 1h4v2.5c0 .262.238.5.5.5H9v1.029L7 5 6 6v4l-4 .002v-9zm5 .687l1.313 1.313H7V1.689z"/>',
    cut: '<path d="M3 .5c0 2.936 3.774 7.73 3.938 7.938l-1.813 2.844A2.46 2.46 0 0 0 4 11c-1.375 0-2.5 1.125-2.5 2.5S2.625 16 4 16s2.5-1.125 2.5-2.5c0-.444-.138-.856-.344-1.22L8 9.845l1.844 2.438A2.473 2.473 0 0 0 9.5 13.5c0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5S13.375 11 12 11a2.46 2.46 0 0 0-1.125.28L9.062 8.439C9.226 8.232 13 3.437 13 .5h-1L8 6.78 4 .5H3zM4 12c.834 0 1.5.666 1.5 1.5S4.834 15 4 15s-1.5-.666-1.5-1.5S3.166 12 4 12zm8 0c.834 0 1.5.666 1.5 1.5S12.834 15 12 15s-1.5-.666-1.5-1.5.666-1.5 1.5-1.5z"/>',
    date: '<path d="M8.1 7v1h2.7v1H8.094v3H11.7v-1H9v-1h2.7V7zM4.5 7v1h.8v3h-.8v1h2.7v-1h-.9V7zM.9 1v14h14.4V1h-1.8v2h-2.7V1H5.4v2H2.7V1zm.9 4h12.6v9H1.8z"/>',
    email: '<path d="M1 4.5v8c0 .262.238.5.5.5h13a.52.52 0 0 0 .5-.5V4.594C15 4 15 4 14.5 4H1.563C1 4 1 4 1 4.5zM2 5h12v7H2V5zm-.187-.906l-.625.812 6.5 5 .312.219.313-.219 6.5-5-.625-.813L8 8.844l-6.187-4.75z"/>',
    emoticon: '<path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 8 2zM6 5c-.546 0-1 .454-1 1s.454 1 1 1 1-.454 1-1-.454-1-1-1zm4 0c-.547 0-1 .454-1 1s.453 1 1 1c.547 0 1-.454 1-1s-.453-1-1-1zM4.5 9.5s-.002.652.469 1.281C5.44 11.409 6.389 12 8 12c1.611 0 2.561-.591 3.031-1.219.47-.629.469-1.281.469-1.281h-1s-.002.314-.281.688c-.279.374-.83.813-2.219.813-1.389 0-1.94-.44-2.219-.813C5.502 9.814 5.5 9.5 5.5 9.5z"/>',
    font: '<path d="M7.953 9.75h-4.06l-.395 1.141c-.132.381-.254.752-.368 1.109H.7c.391-1.119.762-2.154 1.113-3.105a104.642 104.642 0 0 1 2.024-5.079 52.23 52.23 0 0 1 1.016-2.212h2.218a80.63 80.63 0 0 1 2.011 4.605c.337.84.105.338.458 1.288s-1.455 2.63-1.587 2.253zM5.912 3.959c-.052.151-.129.357-.229.616-.1.26-.215.56-.343.901-.129.341-.273.716-.431 1.125-.159.409-.32.839-.484 1.288h2.972c-.159-.45-.312-.882-.461-1.292a46.81 46.81 0 0 0-.425-1.127c-.135-.34-.252-.641-.354-.9-.1-.26-.182-.463-.245-.611zm6.949 10.042a36.325 36.325 0 0 0-.35-1.037l-.371-1.063H8.352l-.368 1.064A41.69 41.69 0 0 0 7.64 14H5.373c.365-1.045.711-2.01 1.039-2.896.328-.886.648-1.723.962-2.506.313-.786.623-1.53.927-2.235.305-.705.62-1.393.948-2.065h2.069c.318.672.634 1.36.941 2.065.311.705.621 1.449.936 2.235.314.783.636 1.619.964 2.506.327.888.676 1.853 1.041 2.896l-2.339.001zm-2.625-7.504c-.049.141-.118.333-.213.576-.094.242-.2.521-.319.84-.121.317-.254.668-.402 1.051-.147.382-.299.783-.45 1.201h2.772c-.147-.42-.291-.822-.433-1.205a43.073 43.073 0 0 0-.396-1.053c-.125-.317-.233-.598-.33-.84a13.884 13.884 0 0 0-.229-.57z"/>',
    format: '<path d="M10.5 2v1.5H12c.235 0 .401-.009.5 0 .008.088 0 .279 0 .5v2H14V3.437c0-.237-.01-.409-.031-.593-.022-.185-.067-.42-.25-.594s-.407-.2-.594-.219A5.693 5.693 0 0 0 12.5 2zm0-2L7.187 2.5 10.5 5zm.5 5.187L13.5 8.5 16 5.187zm-.958-.339h-2.03l-3.234 8.456c-.154.392-.336.994-.854 1.022v.518h2.744v-.518c-.644-.168-.658-.462-.434-1.036l.784-2.086h3.43l.854 2.086c.238.574.308.924-.406 1.036v.518h3.276v-.518c-.434-.056-.546-.364-.686-.728l-3.444-8.75M7.424 10l1.26-3.318L10 10H7.424M4.912.975h-1.63L.686 7.764c-.124.314-.27.798-.686.82V9h2.203v-.416c-.517-.135-.528-.37-.348-.832l.629-1.674h2.754l.685 1.674c.192.461.248.742-.325.832V9c1.73.137 1.837-.002 2.079-1L4.912.975M2.81 5.11l1.012-2.664L4.878 5.11H2.81"/>',
    grip: '<path d="M14.656 5.156l-10 10 .688.688 10-10-.688-.688zm0 3l-7 7 .688.688 7-7-.688-.688zm0 3l-4 4 .688.688 4-4-.688-.688z"/>',
    horizontalrule: '<path d="M2 2v1h12V2H2zm0 2v1h9V4H2zm0 2v1h12V6H2zm0 2v2h12V8H2z"/>',
    image: '<path d="M.5 2.5v11h15v-11H.5zm1 1h13v9h-13v-9z"/><circle cx="4" cy="6" r="1.25"/><path d="M1 11h14v2H1z"/><path d="M5 12l2-4 2 4z"/><path d="M7 12l4-7 4 7z"/>',
    indent: '<path d="M1 1h14v2H1zm5 4h9v2H6zm0 4h9v2H6zm-5 4h14v2H1zm4-5L1 5v6z"/>',
    italic: '<text x="50%" y="50%" text-anchor="middle" dy=".5ex" font-family="Dejavu Sans, Helvetica, Arial, sans-serif" font-weight="bold" font-size="15" font-style="italic">i</text>',
    justify: '<path d="M1 1h14v2H1zm0 4h14v2H1zm0 4h14v2H1zm0 4h14v2H1z"/>',
    left: '<path d="M1 1h14v2H1zm0 4h10v2H1zm0 4h14v2H1zm0 4h10v2H1z"/>',
    link: '<path d="M2 4c-.625 0-1.009.438-1.188.75s-.269.63-.344.969c-.15.677-.219 1.476-.219 2.28s.068 1.605.219 2.282c.075.339.165.625.344.938s.563.78 1.188.78h4v-2H2.469c-.022-.065-.042-.06-.063-.155-.1-.447-.156-1.15-.156-1.844s.057-1.396.156-1.844c.02-.088.042-.092.063-.156H6V4H2zm8 0v2h3.531c.021.064.043.068.063.156.1.448.156 1.149.156 1.844s-.057 1.396-.156 1.844c-.021.096-.041.09-.063.156H10v2h4c.625 0 1.009-.47 1.188-.781s.269-.6.344-.938c.15-.678.219-1.476.219-2.281s-.068-1.604-.219-2.281c-.075-.34-.165-.656-.344-.97S14.625 4 14 4h-4zM5.719 7c-.523.074-.949.602-.875 1.125S5.477 9.074 6 9h4c.528.01 1-.472 1-1s-.472-1.007-1-1H6a.593.593 0 0 0-.188 0h-.093z"/>',
    ltr: '<path d="M10.313 1.937c-.98 0-1.752.284-2.344.813-.592.529-.906 1.228-.906 2.094 0 .811.275 1.467.781 1.969.506.497 1.227.792 2.156.906V14h2V3h1v11h1V1.939zM2 4v8l4-4z"/>',
    maximize: '<path d="M2 7l1.75-1.75-2-2L0 5V0h5L3.25 1.75l2 2L7 2v5H2zm9 9l1.75-1.75-2-2L9 14V9h5l-1.75 1.75 2 2L16 11v5h-5zm-6 0l-1.75-1.75 2-2L7 14V9H2l1.75 1.75-2 2L0 11v5h5zm6-16l1.75 1.75-2 2L9 2v5h5l-1.75-1.75 2-2L16 5V0h-5z"/>',
    orderedlist: '<path d="M6 2h9v2H6zm0 5h9v2H6zm0 5h9v2H6zm-2.799.846q.392.1.594.352.205.25.205.636 0 .576-.441.877-.441.298-1.287.298-.298 0-.599-.05-.298-.046-.591-.142v-.77q.28.14.555.212.277.07.545.07.396 0 .607-.137.212-.138.212-.394 0-.265-.218-.4-.215-.137-.638-.137h-.4v-.644h.421q.376 0 .56-.116.185-.12.185-.36 0-.224-.18-.346-.178-.122-.505-.122-.242 0-.488.055-.246.054-.49.16v-.731q.295-.083.586-.125.29-.041.57-.041.756 0 1.13.249.375.246.375.744 0 .34-.179.558-.179.215-.529.304zm-.905-3.609H4v.734H1.186v-.734L2.599 7.99q.19-.172.28-.335.091-.163.091-.34 0-.272-.184-.438-.182-.166-.485-.166-.234 0-.511.101-.278.099-.594.296v-.851q.337-.112.667-.169.329-.06.645-.06.696 0 1.08.307.386.306.386.853 0 .317-.163.592-.164.272-.688.731l-.827.726zM1.228 4.276h.903V1.714l-.927.19V1.21l.922-.191h.971v3.258H4v.706H1.228v-.706z"/>',
    outdent: '<path d="M1 1h14v2H1zm0 4h9v2H1zm0 4h9v2H1zm0 4h14v2H1zm10-5l4-3v6z"/>',
    paste: '<path d="M4.406 0A.5.5 0 0 0 4 .5V1H1.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5H6v2.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.594a.492.492 0 0 0 0-.094.436.436 0 0 0 0-.125.916.916 0 0 0-.031-.063v-.031a.749.749 0 0 0-.063-.063.749.749 0 0 0-.063-.063l-2.875-2.844a.498.498 0 0 0-.125-.156A.498.498 0 0 0 11.5 4H10V1.5a.5.5 0 0 0-.5-.5H7V.5a.5.5 0 0 0-.5-.5h-2a.492.492 0 0 0-.094 0c-.239.045.032-.003 0 0zM2 2h1v.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V2h1v2H6.5a.64.64 0 0 0-.062 0 .493.493 0 0 0-.094.031.474.474 0 0 0-.125.063l-.031.031-.031.031a.916.916 0 0 0-.063.031.47.47 0 0 0-.031.094l-.031.031A.506.506 0 0 0 6 4.5V11H2V2zm5 3h4v2.5a.5.5 0 0 0 .5.5H14v6H7v-2.406a.492.492 0 0 0 0-.094V5zm5 .688L13.313 7H12V5.688zM4.406 0A.5.5 0 0 0 4 .5V1H1.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V5h2.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H7V.5a.5.5 0 0 0-.5-.5h-2a.492.492 0 0 0-.094 0c-.239.045.032-.003 0 0zM2 2h1v.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V2h1v2H6.5a.5.5 0 0 0-.5.5V11H2V2zm4.406 2A.5.5 0 0 0 6 4.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.594a.492.492 0 0 0 0-.094.331.331 0 0 0 0-.063v-.063a.916.916 0 0 0-.031-.063V7.28a.523.523 0 0 0-.094-.094l-.031-.031-2.875-2.844a.498.498 0 0 0-.125-.156A.503.503 0 0 0 11.5 4h-5a.492.492 0 0 0-.094 0c-.239.045.032-.003 0 0zM7 5h4v2.5a.5.5 0 0 0 .5.5H14v6H7V5zm5 .688L13.313 7H12V5.688zM8 12h5v1H8v-1zm0-2h5v1H8v-1zm0-2h5v1H8V8zm0-2h3v1H8V6z"/>',
    pastetext: '<path d="M4.406 0A.5.5 0 0 0 4 .5V1H1.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5H6v2.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.594a.492.492 0 0 0 0-.094.436.436 0 0 0 0-.125.916.916 0 0 0-.031-.063v-.031a.749.749 0 0 0-.063-.063.749.749 0 0 0-.063-.063l-2.875-2.844a.498.498 0 0 0-.125-.156A.498.498 0 0 0 11.5 4H10V1.5a.5.5 0 0 0-.5-.5H7V.5a.5.5 0 0 0-.5-.5h-2a.492.492 0 0 0-.094 0zM2 2h1v.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V2h1v2H6.5a.64.64 0 0 0-.062 0 .493.493 0 0 0-.094.031.474.474 0 0 0-.125.063l-.031.031-.031.031a.916.916 0 0 0-.063.031.47.47 0 0 0-.031.094l-.031.031A.506.506 0 0 0 6 4.5V11H2V2zm5 3h4v2.5a.5.5 0 0 0 .5.5H14v6H7v-2.406a.492.492 0 0 0 0-.094V5zm5 .688L13.313 7H12V5.688zM4.406 0A.5.5 0 0 0 4 .5V1H1.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V5h2.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H7V.5a.5.5 0 0 0-.5-.5h-2a.492.492 0 0 0-.094 0zM2 2h1v.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V2h1v2H6.5a.5.5 0 0 0-.5.5V11H2V2zm4.406 2A.5.5 0 0 0 6 4.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.594a.492.492 0 0 0 0-.094.331.331 0 0 0 0-.063v-.062a.916.916 0 0 0-.031-.063v-.031a.523.523 0 0 0-.094-.094l-.031-.031-2.875-2.844a.498.498 0 0 0-.125-.156A.5.5 0 0 0 11.5 4h-5a.492.492 0 0 0-.094 0zM7 5h4v2.5a.5.5 0 0 0 .5.5H14v6H7V5zm5 .688L13.313 7H12V5.688z"/>',
    print: '<path d="M4 1v3H1v8h2V6h10v6h2V4h-3V1zm1 1h6v2H5zM4 7v8h8V7zm1 1h6v6H5zm1 1v1h4V9zm0 2v1h4v-1z"/><path d="M4 1v3H1v8h2V6h10v6h2V4h-3V1zm1 1h6v2H5zM4 7v8h8V7zm1 1h6v6H5zm1 1v1h4V9zm0 2v1h4v-1z"/>',
    quote: '<path d="M8 2.013c-1.998 0-3.818.382-5.188 1.125S.499 5.054.499 6.513c0 1.237.926 2.345 2.281 3.156s3.197 1.344 5.219 1.344c.344 0 .563.019.906 0l5.875 2.938c.377.18.854-.32.656-.688l-1.813-3.656c1.242-.79 1.875-2.014 1.875-3.094 0-1.46-.943-2.632-2.313-3.375S9.998 2.013 8 2.013z"/>',
    redo: '<path d="M9 7l5-5v5z"/><path d="M9.553 2.205c1 .268 1.932.796 2.69 1.553l.706.707-1.414 1.414-.707-.707a3.995 3.995 0 0 0-3.863-1.035 3.995 3.995 0 0 0-2.828 2.828 3.995 3.995 0 0 0 1.035 3.863l.707.707-1.414 1.414-.707-.707a6.003 6.003 0 0 1-1.553-5.795 6.003 6.003 0 0 1 7.348-4.242z"/>',
    removeformat: '<path d="M8.781 2l-.125.125L3.781 7l-.125.125-3 3-.313.313.25.344 3 4 .156.219h2.47l.125-.156 3-3 .313-.313 4.688-4.688.313-.313-.25-.344-3-4-.156-.188H8.781zm.407 1h.594l-4 4h-.594l4-4zm1.75.25l2.406 3.188-4.281 4.28-2.406-3.187 4.281-4.281z"/>',
    right: '<path d="M1 1h14v2H1zm4 4h10v2H5zM1 9h14v2H1zm4 4h10v2H5z"/>',
    rtl: '<path d="M5.344 2.001c-.98 0-1.783.284-2.375.813-.592.529-.875 1.227-.875 2.093 0 .811.244 1.467.75 1.969.506.497 1.227.792 2.156.906V14h2V3.001L8 3v11h1V2zM14 4l-4 4 4 4z"/>',
    size: '<path d="M12.5.656L10 4h5L12.5.656zM4.594 4.5a49.476 49.476 0 0 0-.875 1.906c-.277.65-.581 1.334-.875 2.063-.286.729-.572 1.52-.875 2.344S1.338 12.53 1 13.5h2.094c.095-.313.2-.64.313-.97.121-.328.262-.64.375-.968h3.5c.113.329.231.64.344.969.121.329.217.656.313.969h2.188c-.338-.971-.666-1.864-.969-2.688s-.611-1.615-.906-2.344a56.045 56.045 0 0 0-.844-2.063c-.286-.66-.581-1.282-.875-1.906H4.594zM10 6l2.5 3.313L15 6h-5zm-4.5.53c.052.13.132.307.219.532.086.225.2.486.313.78.121.296.245.614.375.97s.268.734.406 1.125H4.25c.139-.391.245-.77.375-1.125.139-.355.293-.674.406-.97s.194-.555.281-.78c.087-.224.145-.401.188-.531z"/>',
    source: '<path d="M4.937 3.939L1 8.499l3.937 4.564L6 12 3 8.499 6 5zm6.126 0L10 5.002l3 3.503-3 3.497 1.063 1.063L15 8.505z"/>',
    strike: '<text x="50%" y="50%" text-anchor="middle" dy=".5ex" font-family="Dejavu Sans, Helvetica, Arial, sans-serif" font-size="15" font-weight="bold">S</text><path d="M1 7v1h14V7H1z"/>',
    subscript: '<path d="M11 10v1h3v1h-3v3h4v-1h-3v-1h3v-3zM1 3l3 5-3 5h2l3-5H4l3 5h2L6 8l3-5H7L4 8h2L3 3z"/>',
    superscript: '<path d="M11 1v1h3v1h-3v3h4V5h-3V4h3V1zM1 3l3 5-3 5h2l3-5H4l3 5h2L6 8l3-5H7L4 8h2L3 3z"/>',
    table: '<path d="M1 2h14v2H1zm0 2v10h14V4H1zm1 1h3.5v2H2V5zm4.5 0h3v2h-3V5zm4 0H14v2h-3.5V5zM2 8h3.5v2H2V8zm4.5 0h3v2h-3V8zm4 0H14v2h-3.5V8zM2 11h3.5v2H2v-2zm4.5 0h3v2h-3v-2zm4 0H14v2h-3.5v-2z"/>',
    time: '<path d="M8 0C3 0 0 4 0 8s3 8 8 8 8-4 8-8-3-8-8-8zm0 2c3.461 0 6 2.539 6 6s-2.539 6-6 6c-3.46 0-6-2.539-6-6s2.54-6 6-6zM7 3v6l2.5 2L11 9.5 9 8V3z"/>',
    underline: '<text x="50%" y="50%" text-anchor="middle" dy=".5ex" font-family="Dejavu Sans, Helvetica, Arial, sans-serif" font-weight="bold" font-size="15" text-decoration="underline">U</text>',
    undo: '<path d="M2 7h5L2 2z"/><path d="M6.447 2.205c-1 .268-1.932.796-2.69 1.553l-.706.707 1.414 1.414.707-.707a3.995 3.995 0 0 1 3.863-1.035 3.995 3.995 0 0 1 2.828 2.828 3.995 3.995 0 0 1-1.035 3.863l-.707.707 1.414 1.414.707-.707a6.003 6.003 0 0 0 1.553-5.795 6.003 6.003 0 0 0-7.348-4.242z"/>',
    unlink: '<path d="M2 4c-.625 0-1.009.438-1.188.75s-.269.63-.344.969c-.15.677-.219 1.476-.219 2.28s.068 1.605.219 2.282c.075.339.165.625.344.938s.563.78 1.188.78h4v-2H2.469c-.022-.065-.042-.06-.063-.155-.1-.447-.156-1.15-.156-1.844s.057-1.396.156-1.844c.02-.088.042-.092.063-.156H6V4H2zm8 0v2h3.531c.021.064.043.068.063.156.1.448.156 1.149.156 1.844s-.057 1.396-.156 1.844c-.021.095-.041.09-.063.156H10v2h4c.625 0 1.009-.47 1.188-.781s.269-.6.344-.938c.15-.678.219-1.476.219-2.281s-.068-1.604-.219-2.281c-.075-.34-.165-.656-.344-.97S14.625 4 14 4h-4z"/>',
    youtube: '<path d="M2 2C1 2 0 3 0 4v8c0 1 1 2 2 2h12c1 0 2-1 2-2V4c0-1-1-2-2-2H2zm4 3l6 3-6 3V5z"/>'
  };
  a.icons.monocons = function () {
    var z,
        t = {};
    return {
      create: function create(h) {
        return h in v && (t[h] = a.dom.parseHTML('<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" unselectable="on">' + v[h] + "</svg>").firstChild, "color" === h && (z = t[h].querySelector(".sce-color"))), t[h];
      },
      update: function update(h, a) {
        if (z) {
          var v = "inherit";
          !h && a && (v = a.ownerDocument.queryCommandValue("forecolor"), parseInt(v) === v && (v = "#" + ("000000" + (v = (255 & v) << 16 | 65280 & v | (16711680 & v) >>> 16).toString(16)).slice(-6))), c.css(z, "fill", v);
        }
      },
      rtl: function rtl(h) {
        var a = t.grip;

        if (a) {
          var v = h ? "scaleX(-1)" : "";
          c.css(a, "transform", v), c.css(a, "msTransform", v), c.css(a, "webkitTransform", v);
        }
      }
    };
  }, a.icons.monocons.icons = v;
}(document, sceditor);

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/minified/sceditor.min.js":
/*!*****************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/minified/sceditor.min.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* SCEditor v2.1.3 | (C) 2017, Sam Clarke | sceditor.com/license */
!function () {
  "use strict";

  function e(e, t) {
    return _typeof(t) === e;
  }

  var be = e.bind(null, "string"),
      xe = e.bind(null, "undefined"),
      we = e.bind(null, "function"),
      o = e.bind(null, "number");

  function t(e) {
    return !Object.keys(e).length;
  }

  function Ce(e, t) {
    for (var n = e === !!e, o = n ? 2 : 1, r = n ? t : e, i = !!n && e; o < arguments.length; o++) {
      var a = arguments[o];

      for (var l in a) {
        var c = a[l];

        if (!xe(c)) {
          var s = null !== c && "object" == _typeof(c) && Object.getPrototypeOf(c) === Object.prototype,
              u = Array.isArray(c);
          r[l] = i && (s || u) ? Ce(!0, r[l] || (u ? [] : {}), c) : c;
        }
      }
    }

    return r;
  }

  function ke(e, t) {
    var n = e.indexOf(t);
    -1 < n && e.splice(n, 1);
  }

  function Se(t, n) {
    if (Array.isArray(t) || "length" in t && o(t.length)) for (var e = 0; e < t.length; e++) {
      n(e, t[e]);
    } else Object.keys(t).forEach(function (e) {
      n(e, t[e]);
    });
  }

  var i = {},
      Ee = 1,
      Te = 3;

  function a(e) {
    return e = parseFloat(e), isFinite(e) ? e : 0;
  }

  function De(e, t, n) {
    var o = (n || document).createElement(e);
    return Se(t || {}, function (e, t) {
      "style" === e ? o.style.cssText = t : e in o ? o[e] = t : o.setAttribute(e, t);
    }), o;
  }

  function Me(e, t) {
    for (var n = e || {}; (n = n.parentNode) && !/(9|11)/.test(n.nodeType);) {
      if (!t || We(n, t)) return n;
    }
  }

  function Ne(e, t) {
    return We(e, t) ? e : Me(e, t);
  }

  function Re(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }

  function Fe(e, t) {
    e.appendChild(t);
  }

  function He(e, t) {
    return e.querySelectorAll(t);
  }

  var _e = !0;

  function ze(n, e, o, r, i) {
    e.split(" ").forEach(function (e) {
      var t;
      be(o) ? (t = r["_sce-event-" + e + o] || function (e) {
        for (var t = e.target; t && t !== n;) {
          if (We(t, o)) return void r.call(t, e);
          t = t.parentNode;
        }
      }, r["_sce-event-" + e + o] = t) : (t = o, i = r), n.addEventListener(e, t, i || !1);
    });
  }

  function Oe(n, e, o, r, i) {
    e.split(" ").forEach(function (e) {
      var t;
      be(o) ? t = r["_sce-event-" + e + o] : (t = o, i = r), n.removeEventListener(e, t, i || !1);
    });
  }

  function Ae(e, t, n) {
    if (arguments.length < 3) return e.getAttribute(t);
    null == n ? r(e, t) : e.setAttribute(t, n);
  }

  function r(e, t) {
    e.removeAttribute(t);
  }

  function Be(e) {
    Pe(e, "display", "none");
  }

  function Ie(e) {
    Pe(e, "display", "");
  }

  function Le(e) {
    Je(e) ? Be(e) : Ie(e);
  }

  function Pe(n, e, t) {
    if (arguments.length < 3) {
      if (be(e)) return 1 === n.nodeType ? getComputedStyle(n)[e] : null;
      Se(e, function (e, t) {
        Pe(n, e, t);
      });
    } else {
      var o = (t || 0 === t) && !isNaN(t);
      n.style[e] = o ? t + "px" : t;
    }
  }

  function Ve(e, t, n) {
    var o = arguments.length,
        r = {};

    if (e.nodeType === Ee) {
      if (1 === o) return Se(e.attributes, function (e, t) {
        /^data\-/i.test(t.name) && (r[t.name.substr(5)] = t.value);
      }), r;
      if (2 === o) return Ae(e, "data-" + t);
      Ae(e, "data-" + t, String(n));
    }
  }

  function We(e, t) {
    var n = !1;
    return e && e.nodeType === Ee && (n = (e.matches || e.msMatchesSelector || e.webkitMatchesSelector).call(e, t)), n;
  }

  function je(e, t) {
    return t.parentNode.insertBefore(e, t);
  }

  function l(e) {
    return e.className.trim().split(/\s+/);
  }

  function qe(e, t) {
    return We(e, "." + t);
  }

  function Ue(e, t) {
    var n = l(e);
    n.indexOf(t) < 0 && n.push(t), e.className = n.join(" ");
  }

  function $e(e, t) {
    var n = l(e);
    ke(n, t), e.className = n.join(" ");
  }

  function Ye(e, t, n) {
    (n = xe(n) ? !qe(e, t) : n) ? Ue(e, t) : $e(e, t);
  }

  function Ke(e, t) {
    if (xe(t)) {
      var n = getComputedStyle(e),
          o = a(n.paddingLeft) + a(n.paddingRight),
          r = a(n.borderLeftWidth) + a(n.borderRightWidth);
      return e.offsetWidth - o - r;
    }

    Pe(e, "width", t);
  }

  function Xe(e, t) {
    if (xe(t)) {
      var n = getComputedStyle(e),
          o = a(n.paddingTop) + a(n.paddingBottom),
          r = a(n.borderTopWidth) + a(n.borderBottomWidth);
      return e.offsetHeight - o - r;
    }

    Pe(e, "height", t);
  }

  function Ge(e, t, n) {
    var o;
    we(window.CustomEvent) ? o = new CustomEvent(t, {
      bubbles: !0,
      cancelable: !0,
      detail: n
    }) : (o = e.ownerDocument.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(o);
  }

  function Je(e) {
    return !!e.getClientRects().length;
  }

  function Qe(e, t, n, o, r) {
    for (e = r ? e.lastChild : e.firstChild; e;) {
      var i = r ? e.previousSibling : e.nextSibling;
      if (!n && !1 === t(e) || !o && !1 === Qe(e, t, n, o, r) || n && !1 === t(e)) return !1;
      e = i;
    }
  }

  function Ze(e, t, n, o) {
    Qe(e, t, n, o, !0);
  }

  function et(e, t) {
    var n = (t = t || document).createDocumentFragment(),
        o = De("div", {}, t);

    for (o.innerHTML = e; o.firstChild;) {
      Fe(n, o.firstChild);
    }

    return n;
  }

  function tt(e) {
    return e && (!We(e, "p,div") || e.className || Ae(e, "style") || !t(Ve(e)));
  }

  function nt(e, t) {
    var n = De(t, {}, e.ownerDocument);

    for (Se(e.attributes, function (e, t) {
      try {
        Ae(n, t.name, t.value);
      } catch (e) {}
    }); e.firstChild;) {
      Fe(n, e.firstChild);
    }

    return e.parentNode.replaceChild(n, e), n;
  }

  var c = "|body|hr|p|div|h1|h2|h3|h4|h5|h6|address|pre|form|table|tbody|thead|tfoot|th|tr|td|li|ol|ul|blockquote|center|";

  function ot(e) {
    return !!/11?|9/.test(e.nodeType) && "|iframe|area|base|basefont|br|col|frame|hr|img|input|wbr|isindex|link|meta|param|command|embed|keygen|source|track|object|".indexOf("|" + e.nodeName.toLowerCase() + "|") < 0;
  }

  function rt(e, t) {
    var n,
        o = (e || {}).nodeType || Te;
    return o !== Ee ? o === Te : "code" === (n = e.tagName.toLowerCase()) ? !t : c.indexOf("|" + n + "|") < 0;
  }

  function s(e, t) {
    t.style.cssText = e.style.cssText + t.style.cssText;
  }

  function it(e) {
    Qe(e, function (e) {
      var t,
          n,
          o = !rt(e, !0);

      if (o && rt(e.parentNode, !0)) {
        var r = function (e) {
          for (; rt(e.parentNode, !0);) {
            e = e.parentNode;
          }

          return e;
        }(e),
            i = u(r, e),
            a = e;

        s(r, a), je(i, r), je(a, r);
      }

      if (o && We(e, "ul,ol") && We(e.parentNode, "ul,ol")) {
        var l = (t = "li", n = e.previousElementSibling, t && n ? We(n, t) ? n : null : n);
        l || je(l = De("li"), e), Fe(l, e);
      }
    });
  }

  function d(e, t) {
    return e ? (t ? e.previousSibling : e.nextSibling) || d(e.parentNode, t) : null;
  }

  function at(e) {
    var t,
        n,
        o,
        r,
        i,
        a,
        l,
        c = Pe(e, "whiteSpace"),
        s = /line$/i.test(c),
        u = e.firstChild;
    if (!/pre(\-wrap)?$/i.test(c)) for (; u;) {
      if (a = u.nextSibling, t = u.nodeValue, (n = u.nodeType) === Ee && u.firstChild && at(u), n === Te) {
        for (o = d(u), r = d(u, !0), l = !1; qe(r, "sceditor-ignore");) {
          r = d(r, !0);
        }

        if (rt(u) && r) {
          for (i = r; i.lastChild;) {
            for (i = i.lastChild; qe(i, "sceditor-ignore");) {
              i = d(i, !0);
            }
          }

          l = i.nodeType === Te ? /[\t\n\r ]$/.test(i.nodeValue) : !rt(i);
        }

        t = t.replace(/\u200B/g, ""), r && rt(r) && !l || (t = t.replace(s ? /^[\t ]+/ : /^[\t\n\r ]+/, "")), o && rt(o) || (t = t.replace(s ? /[\t ]+$/ : /[\t\n\r ]+$/, "")), t.length ? u.nodeValue = t.replace(s ? /[\t ]+/g : /[\t\n\r ]+/g, " ") : Re(u);
      }

      u = a;
    }
  }

  function u(e, t) {
    var n = e.ownerDocument.createRange();
    return n.setStartBefore(e), n.setEndAfter(t), n.extractContents();
  }

  function lt(e) {
    for (var t = 0, n = 0; e;) {
      t += e.offsetLeft, n += e.offsetTop, e = e.offsetParent;
    }

    return {
      left: t,
      top: n
    };
  }

  function f(e, t) {
    var n,
        o,
        r = e.style;

    if (i[t] || (i[t] = t.replace(/^-ms-/, "ms-").replace(/-(\w)/g, function (e, t) {
      return t.toUpperCase();
    })), o = r[t = i[t]], "textAlign" === t) {
      if (n = r.direction, o = o || Pe(e, t), Pe(e.parentNode, t) === o || "block" !== Pe(e, "display") || We(e, "hr,th")) return "";
      if (/right/i.test(o) && "rtl" === n || /left/i.test(o) && "ltr" === n) return "";
    }

    return o;
  }

  var n,
      p,
      m,
      ct = {
    toolbar: "bold,italic,underline,strike,subscript,superscript|left,center,right,justify|font,size,color,removeformat|cut,copy,pastetext|bulletlist,orderedlist,indent,outdent|table|code,quote|horizontalrule,image,email,link,unlink|emoticon,youtube,date,time|ltr,rtl|print,maximize,source",
    toolbarExclude: null,
    style: "jquery.sceditor.default.css",
    fonts: "Arial,Arial Black,Comic Sans MS,Courier New,Georgia,Impact,Sans-serif,Serif,Times New Roman,Trebuchet MS,Verdana",
    colors: "#000000,#44B8FF,#1E92F7,#0074D9,#005DC2,#00369B,#b3d5f4|#444444,#C3FFFF,#9DF9FF,#7FDBFF,#68C4E8,#419DC1,#d9f4ff|#666666,#72FF84,#4CEA5E,#2ECC40,#17B529,#008E02,#c0f0c6|#888888,#FFFF44,#FFFA1E,#FFDC00,#E8C500,#C19E00,#fff5b3|#aaaaaa,#FFC95F,#FFA339,#FF851B,#E86E04,#C14700,#ffdbbb|#cccccc,#FF857A,#FF5F54,#FF4136,#E82A1F,#C10300,#ffc6c3|#eeeeee,#FF56FF,#FF30DC,#F012BE,#D900A7,#B20080,#fbb8ec|#ffffff,#F551FF,#CF2BE7,#B10DC9,#9A00B2,#9A00B2,#e8b6ef",
    locale: Ae(document.documentElement, "lang") || "en",
    charset: "utf-8",
    emoticonsCompat: !1,
    emoticonsEnabled: !0,
    emoticonsRoot: "",
    emoticons: {
      dropdown: {
        ":)": "emoticons/smile.png",
        ":angel:": "emoticons/angel.png",
        ":angry:": "emoticons/angry.png",
        "8-)": "emoticons/cool.png",
        ":'(": "emoticons/cwy.png",
        ":ermm:": "emoticons/ermm.png",
        ":D": "emoticons/grin.png",
        "<3": "emoticons/heart.png",
        ":(": "emoticons/sad.png",
        ":O": "emoticons/shocked.png",
        ":P": "emoticons/tongue.png",
        ";)": "emoticons/wink.png"
      },
      more: {
        ":alien:": "emoticons/alien.png",
        ":blink:": "emoticons/blink.png",
        ":blush:": "emoticons/blush.png",
        ":cheerful:": "emoticons/cheerful.png",
        ":devil:": "emoticons/devil.png",
        ":dizzy:": "emoticons/dizzy.png",
        ":getlost:": "emoticons/getlost.png",
        ":happy:": "emoticons/happy.png",
        ":kissing:": "emoticons/kissing.png",
        ":ninja:": "emoticons/ninja.png",
        ":pinch:": "emoticons/pinch.png",
        ":pouty:": "emoticons/pouty.png",
        ":sick:": "emoticons/sick.png",
        ":sideways:": "emoticons/sideways.png",
        ":silly:": "emoticons/silly.png",
        ":sleeping:": "emoticons/sleeping.png",
        ":unsure:": "emoticons/unsure.png",
        ":woot:": "emoticons/w00t.png",
        ":wassat:": "emoticons/wassat.png"
      },
      hidden: {
        ":whistling:": "emoticons/whistling.png",
        ":love:": "emoticons/wub.png"
      }
    },
    width: null,
    height: null,
    resizeEnabled: !0,
    resizeMinWidth: null,
    resizeMinHeight: null,
    resizeMaxHeight: null,
    resizeMaxWidth: null,
    resizeHeight: !0,
    resizeWidth: !0,
    dateFormat: "year-month-day",
    toolbarContainer: null,
    enablePasteFiltering: !1,
    disablePasting: !1,
    readOnly: !1,
    rtl: !1,
    autofocus: !1,
    autofocusEnd: !0,
    autoExpand: !1,
    autoUpdate: !1,
    spellcheck: !0,
    runWithoutWysiwygSupport: !1,
    startInSourceMode: !1,
    id: null,
    plugins: "",
    zIndex: null,
    bbcodeTrim: !1,
    disableBlockRemove: !1,
    parserOptions: {},
    dropDownCss: {}
  },
      g = navigator.userAgent,
      h = function () {
    for (var e = 3, t = document, n = t.createElement("div"), o = n.getElementsByTagName("i"); n.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e", o[0];) {
      ;
    }

    return t.documentMode && t.all && window.atob && (e = 10), 4 === e && t.documentMode && (e = 11), 4 < e ? e : void 0;
  }(),
      st = ("-ms-ime-align" in document.documentElement.style),
      ut = /iPhone|iPod|iPad| wosbrowser\//i.test(g),
      dt = ((m = document.createElement("div")).contentEditable = !0, "contentEditable" in document.documentElement && "true" === m.contentEditable && (p = /Opera Mobi|Opera Mini/i.test(g), /Android/i.test(g) && (p = !0, /Safari/.test(g) && (p = !(n = /Safari\/(\d+)/.exec(g)) || !n[1] || n[1] < 534)), / Silk\//i.test(g) && (p = !(n = /AppleWebKit\/(\d+)/.exec(g)) || !n[1] || n[1] < 534), ut && (p = /OS [0-4](_\d)+ like Mac/i.test(g)), /Firefox/i.test(g) && (p = !1), /OneBrowser/i.test(g) && (p = !1), "UCWEB" === navigator.vendor && (p = !1), h <= 9 && (p = !0), !p)),
      v = /^(https?|s?ftp|mailto|spotify|skype|ssh|teamspeak|tel):|(\/\/)|data:image\/(png|bmp|gif|p?jpe?g);/i;

  function ft(e) {
    return e.replace(/([\-.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }

  function pt(e, t) {
    if (!e) return e;
    var n = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "  ": "&nbsp; ",
      "\r\n": "<br />",
      "\r": "<br />",
      "\n": "<br />"
    };
    return !1 !== t && (n['"'] = "&#34;", n["'"] = "&#39;", n["`"] = "&#96;"), e = e.replace(/ {2}|\r\n|[&<>\r\n'"`]/g, function (e) {
      return n[e] || e;
    });
  }

  var y = {
    html: '<!DOCTYPE html><html{attrs}><head><style>.ie * {min-height: auto !important} .ie table td {height:15px} @supports (-ms-ime-align:auto) { * { min-height: auto !important; } }</style><meta http-equiv="Content-Type" content="text/html;charset={charset}" /><link rel="stylesheet" type="text/css" href="{style}" /></head><body contenteditable="true" {spellcheck}><p></p></body></html>',
    toolbarButton: '<a class="sceditor-button sceditor-button-{name}" data-sceditor-command="{name}" unselectable="on"><div unselectable="on">{dispName}</div></a>',
    emoticon: '<img src="{url}" data-sceditor-emoticon="{key}" alt="{key}" title="{tooltip}" />',
    fontOpt: '<a class="sceditor-font-option" href="#" data-font="{font}"><font face="{font}">{font}</font></a>',
    sizeOpt: '<a class="sceditor-fontsize-option" data-size="{size}" href="#"><font size="{size}">{size}</font></a>',
    pastetext: '<div><label for="txt">{label}</label> <textarea cols="20" rows="7" id="txt"></textarea></div><div><input type="button" class="button" value="{insert}" /></div>',
    table: '<div><label for="rows">{rows}</label><input type="text" id="rows" value="2" /></div><div><label for="cols">{cols}</label><input type="text" id="cols" value="2" /></div><div><input type="button" class="button" value="{insert}" /></div>',
    image: '<div><label for="link">{url}</label> <input type="text" id="image" dir="ltr" placeholder="https://" /></div><div><label for="width">{width}</label> <input type="text" id="width" size="2" dir="ltr" /></div><div><label for="height">{height}</label> <input type="text" id="height" size="2" dir="ltr" /></div><div><input type="button" class="button" value="{insert}" /></div>',
    email: '<div><label for="email">{label}</label> <input type="text" id="email" dir="ltr" /></div><div><label for="des">{desc}</label> <input type="text" id="des" /></div><div><input type="button" class="button" value="{insert}" /></div>',
    link: '<div><label for="link">{url}</label> <input type="text" id="link" dir="ltr" placeholder="https://" /></div><div><label for="des">{desc}</label> <input type="text" id="des" /></div><div><input type="button" class="button" value="{ins}" /></div>',
    youtubeMenu: '<div><label for="link">{label}</label> <input type="text" id="link" dir="ltr" placeholder="https://" /></div><div><input type="button" class="button" value="{insert}" /></div>',
    youtube: '<iframe width="560" height="315" frameborder="0" allowfullscreen src="https://www.youtube.com/embed/{id}?wmode=opaque&start={time}" data-youtube-id="{id}"></iframe>'
  };

  function mt(e, t, n) {
    var o = y[e];
    return Object.keys(t).forEach(function (e) {
      o = o.replace(new RegExp(ft("{" + e + "}"), "g"), t[e]);
    }), n && (o = et(o)), o;
  }

  var b = h && h < 11;

  function x(e) {
    if ("mozHidden" in document) for (var t, n = e.getBody(); n;) {
      if ((t = n).firstChild) t = t.firstChild;else {
        for (; t && !t.nextSibling;) {
          t = t.parentNode;
        }

        t && (t = t.nextSibling);
      }
      3 === n.nodeType && /[\n\r\t]+/.test(n.nodeValue) && (/^pre/.test(Pe(n.parentNode, "whiteSpace")) || Re(n)), n = t;
    }
  }

  var gt = {
    bold: {
      exec: "bold",
      tooltip: "Bold",
      shortcut: "Ctrl+B"
    },
    italic: {
      exec: "italic",
      tooltip: "Italic",
      shortcut: "Ctrl+I"
    },
    underline: {
      exec: "underline",
      tooltip: "Underline",
      shortcut: "Ctrl+U"
    },
    strike: {
      exec: "strikethrough",
      tooltip: "Strikethrough"
    },
    subscript: {
      exec: "subscript",
      tooltip: "Subscript"
    },
    superscript: {
      exec: "superscript",
      tooltip: "Superscript"
    },
    left: {
      state: function state(e) {
        if (e && 3 === e.nodeType && (e = e.parentNode), e) {
          var t = "ltr" === Pe(e, "direction"),
              n = Pe(e, "textAlign");
          return "left" === n || n === (t ? "start" : "end");
        }
      },
      exec: "justifyleft",
      tooltip: "Align left"
    },
    center: {
      exec: "justifycenter",
      tooltip: "Center"
    },
    right: {
      state: function state(e) {
        if (e && 3 === e.nodeType && (e = e.parentNode), e) {
          var t = "ltr" === Pe(e, "direction"),
              n = Pe(e, "textAlign");
          return "right" === n || n === (t ? "end" : "start");
        }
      },
      exec: "justifyright",
      tooltip: "Align right"
    },
    justify: {
      exec: "justifyfull",
      tooltip: "Justify"
    },
    font: {
      _dropDown: function _dropDown(t, e, n) {
        var o = De("div");
        ze(o, "click", "a", function (e) {
          n(Ve(this, "font")), t.closeDropDown(!0), e.preventDefault();
        }), t.opts.fonts.split(",").forEach(function (e) {
          Fe(o, mt("fontOpt", {
            font: e
          }, !0));
        }), t.createDropDown(e, "font-picker", o);
      },
      exec: function exec(e) {
        var t = this;

        gt.font._dropDown(t, e, function (e) {
          t.execCommand("fontname", e);
        });
      },
      tooltip: "Font Name"
    },
    size: {
      _dropDown: function _dropDown(t, e, n) {
        var o = De("div");
        ze(o, "click", "a", function (e) {
          n(Ve(this, "size")), t.closeDropDown(!0), e.preventDefault();
        });

        for (var r = 1; r <= 7; r++) {
          Fe(o, mt("sizeOpt", {
            size: r
          }, !0));
        }

        t.createDropDown(e, "fontsize-picker", o);
      },
      exec: function exec(e) {
        var t = this;

        gt.size._dropDown(t, e, function (e) {
          t.execCommand("fontsize", e);
        });
      },
      tooltip: "Font Size"
    },
    color: {
      _dropDown: function _dropDown(t, e, n) {
        var o = De("div"),
            r = "",
            i = gt.color;
        i._htmlCache || (t.opts.colors.split("|").forEach(function (e) {
          r += '<div class="sceditor-color-column">', e.split(",").forEach(function (e) {
            r += '<a href="#" class="sceditor-color-option" style="background-color: ' + e + '" data-color="' + e + '"></a>';
          }), r += "</div>";
        }), i._htmlCache = r), Fe(o, et(i._htmlCache)), ze(o, "click", "a", function (e) {
          n(Ve(this, "color")), t.closeDropDown(!0), e.preventDefault();
        }), t.createDropDown(e, "color-picker", o);
      },
      exec: function exec(e) {
        var t = this;

        gt.color._dropDown(t, e, function (e) {
          t.execCommand("forecolor", e);
        });
      },
      tooltip: "Font Color"
    },
    removeformat: {
      exec: "removeformat",
      tooltip: "Remove Formatting"
    },
    cut: {
      exec: "cut",
      tooltip: "Cut",
      errorMessage: "Your browser does not allow the cut command. Please use the keyboard shortcut Ctrl/Cmd-X"
    },
    copy: {
      exec: "copy",
      tooltip: "Copy",
      errorMessage: "Your browser does not allow the copy command. Please use the keyboard shortcut Ctrl/Cmd-C"
    },
    paste: {
      exec: "paste",
      tooltip: "Paste",
      errorMessage: "Your browser does not allow the paste command. Please use the keyboard shortcut Ctrl/Cmd-V"
    },
    pastetext: {
      exec: function exec(e) {
        var t,
            n = De("div"),
            o = this;
        Fe(n, mt("pastetext", {
          label: o._("Paste your text inside the following box:"),
          insert: o._("Insert")
        }, !0)), ze(n, "click", ".button", function (e) {
          (t = He(n, "#txt")[0].value) && o.wysiwygEditorInsertText(t), o.closeDropDown(!0), e.preventDefault();
        }), o.createDropDown(e, "pastetext", n);
      },
      tooltip: "Paste Text"
    },
    bulletlist: {
      exec: function exec() {
        x(this), this.execCommand("insertunorderedlist");
      },
      tooltip: "Bullet list"
    },
    orderedlist: {
      exec: function exec() {
        x(this), this.execCommand("insertorderedlist");
      },
      tooltip: "Numbered list"
    },
    indent: {
      state: function state(e, t) {
        var n, o, r;
        return We(t, "li") ? 0 : We(t, "ul,ol,menu") && (o = (n = this.getRangeHelper().selectedRange()).startContainer.parentNode, r = n.endContainer.parentNode, o !== o.parentNode.firstElementChild || We(r, "li") && r !== r.parentNode.lastElementChild) ? 0 : -1;
      },
      exec: function exec() {
        var e = this.getRangeHelper().getFirstBlockParent();
        this.focus(), Ne(e, "ul,ol,menu") && this.execCommand("indent");
      },
      tooltip: "Add indent"
    },
    outdent: {
      state: function state(e, t) {
        return Ne(t, "ul,ol,menu") ? 0 : -1;
      },
      exec: function exec() {
        Ne(this.getRangeHelper().getFirstBlockParent(), "ul,ol,menu") && this.execCommand("outdent");
      },
      tooltip: "Remove one indent"
    },
    table: {
      exec: function exec(e) {
        var r = this,
            i = De("div");
        Fe(i, mt("table", {
          rows: r._("Rows:"),
          cols: r._("Cols:"),
          insert: r._("Insert")
        }, !0)), ze(i, "click", ".button", function (e) {
          var t = Number(He(i, "#rows")[0].value),
              n = Number(He(i, "#cols")[0].value),
              o = "<table>";
          0 < t && 0 < n && (o += Array(t + 1).join("<tr>" + Array(n + 1).join("<td>" + (b ? "" : "<br />") + "</td>") + "</tr>"), o += "</table>", r.wysiwygEditorInsertHtml(o), r.closeDropDown(!0), e.preventDefault());
        }), r.createDropDown(e, "inserttable", i);
      },
      tooltip: "Insert a table"
    },
    horizontalrule: {
      exec: "inserthorizontalrule",
      tooltip: "Insert a horizontal rule"
    },
    code: {
      exec: function exec() {
        this.wysiwygEditorInsertHtml("<code>", (b ? "" : "<br />") + "</code>");
      },
      tooltip: "Code"
    },
    image: {
      _dropDown: function _dropDown(t, e, n, o) {
        var r = De("div");
        Fe(r, mt("image", {
          url: t._("URL:"),
          width: t._("Width (optional):"),
          height: t._("Height (optional):"),
          insert: t._("Insert")
        }, !0));
        var i = He(r, "#image")[0];
        i.value = n, ze(r, "click", ".button", function (e) {
          i.value && o(i.value, He(r, "#width")[0].value, He(r, "#height")[0].value), t.closeDropDown(!0), e.preventDefault();
        }), t.createDropDown(e, "insertimage", r);
      },
      exec: function exec(e) {
        var r = this;

        gt.image._dropDown(r, e, "", function (e, t, n) {
          var o = "";
          t && (o += ' width="' + t + '"'), n && (o += ' height="' + n + '"'), r.wysiwygEditorInsertHtml("<img" + o + ' src="' + e + '" />');
        });
      },
      tooltip: "Insert an image"
    },
    email: {
      _dropDown: function _dropDown(n, e, o) {
        var r = De("div");
        Fe(r, mt("email", {
          label: n._("E-mail:"),
          desc: n._("Description (optional):"),
          insert: n._("Insert")
        }, !0)), ze(r, "click", ".button", function (e) {
          var t = He(r, "#email")[0].value;
          t && o(t, He(r, "#des")[0].value), n.closeDropDown(!0), e.preventDefault();
        }), n.createDropDown(e, "insertemail", r);
      },
      exec: function exec(e) {
        var n = this;

        gt.email._dropDown(n, e, function (e, t) {
          n.focus(), !n.getRangeHelper().selectedHtml() || t ? n.wysiwygEditorInsertHtml('<a href="mailto:' + e + '">' + (t || e) + "</a>") : n.execCommand("createlink", "mailto:" + e);
        });
      },
      tooltip: "Insert an email"
    },
    link: {
      _dropDown: function _dropDown(t, e, n) {
        var o = De("div");
        Fe(o, mt("link", {
          url: t._("URL:"),
          desc: t._("Description (optional):"),
          ins: t._("Insert")
        }, !0));
        var r = He(o, "#link")[0];

        function i(e) {
          r.value && n(r.value, He(o, "#des")[0].value), t.closeDropDown(!0), e.preventDefault();
        }

        ze(o, "click", ".button", i), ze(o, "keypress", function (e) {
          13 === e.which && r.value && i(e);
        }, _e), t.createDropDown(e, "insertlink", o);
      },
      exec: function exec(e) {
        var n = this;

        gt.link._dropDown(n, e, function (e, t) {
          n.focus(), t || !n.getRangeHelper().selectedHtml() ? (t = t || e, n.wysiwygEditorInsertHtml('<a href="' + e + '">' + t + "</a>")) : n.execCommand("createlink", e);
        });
      },
      tooltip: "Insert a link"
    },
    unlink: {
      state: function state() {
        return Ne(this.currentNode(), "a") ? 0 : -1;
      },
      exec: function exec() {
        var e = Ne(this.currentNode(), "a");

        if (e) {
          for (; e.firstChild;) {
            je(e.firstChild, e);
          }

          Re(e);
        }
      },
      tooltip: "Unlink"
    },
    quote: {
      exec: function exec(e, t, n) {
        var o = "<blockquote>",
            r = "</blockquote>";
        t ? (o = o + (n = n ? "<cite>" + n + "</cite>" : "") + t + r, r = null) : "" === this.getRangeHelper().selectedHtml() && (r = (b ? "" : "<br />") + r), this.wysiwygEditorInsertHtml(o, r);
      },
      tooltip: "Insert a Quote"
    },
    emoticon: {
      exec: function exec(f) {
        var p = this,
            m = function m(e) {
          var t,
              n,
              o = p.opts,
              r = o.emoticonsRoot || "",
              i = o.emoticonsCompat,
              a = p.getRangeHelper(),
              l = i && " " !== a.getOuterText(!0, 1) ? " " : "",
              c = i && " " !== a.getOuterText(!1, 1) ? " " : "",
              s = De("div"),
              u = De("div"),
              d = Ce({}, o.emoticons.dropdown, e ? o.emoticons.more : {});
          return Fe(s, u), n = Math.sqrt(Object.keys(d).length), ze(s, "click", "img", function (e) {
            p.insert(l + Ae(this, "alt") + c, null, !1).closeDropDown(!0), e.preventDefault();
          }), Se(d, function (e, t) {
            Fe(u, De("img", {
              src: r + (t.url || t),
              alt: e,
              title: t.tooltip || e
            })), u.children.length >= n && (u = De("div"), Fe(s, u));
          }), !e && o.emoticons.more && (Fe(t = De("a", {
            className: "sceditor-more"
          }), document.createTextNode(p._("More"))), ze(t, "click", function (e) {
            p.createDropDown(f, "more-emoticons", m(!0)), e.preventDefault();
          }), Fe(s, t)), s;
        };

        p.createDropDown(f, "emoticons", m(!1));
      },
      txtExec: function txtExec(e) {
        gt.emoticon.exec.call(this, e);
      },
      tooltip: "Insert an emoticon"
    },
    youtube: {
      _dropDown: function _dropDown(i, e, a) {
        var l = De("div");
        Fe(l, mt("youtubeMenu", {
          label: i._("Video URL:"),
          insert: i._("Insert")
        }, !0)), ze(l, "click", ".button", function (e) {
          var t = He(l, "#link")[0].value,
              n = t.match(/(?:v=|v\/|embed\/|youtu.be\/)(.{11})/),
              o = t.match(/[&|?](?:star)?t=((\d+[hms]?){1,3})/),
              r = 0;
          o && Se(o[1].split(/[hms]/), function (e, t) {
            "" !== t && (r = 60 * r + Number(t));
          }), n && /^[a-zA-Z0-9_\-]{11}$/.test(n[1]) && a(n[1], r), i.closeDropDown(!0), e.preventDefault();
        }), i.createDropDown(e, "insertlink", l);
      },
      exec: function exec(e) {
        var n = this;

        gt.youtube._dropDown(n, e, function (e, t) {
          n.wysiwygEditorInsertHtml(mt("youtube", {
            id: e,
            time: t
          }));
        });
      },
      tooltip: "Insert a YouTube video"
    },
    date: {
      _date: function _date(e) {
        var t = new Date(),
            n = t.getYear(),
            o = t.getMonth() + 1,
            r = t.getDate();
        return n < 2e3 && (n = 1900 + n), o < 10 && (o = "0" + o), r < 10 && (r = "0" + r), e.opts.dateFormat.replace(/year/i, n).replace(/month/i, o).replace(/day/i, r);
      },
      exec: function exec() {
        this.insertText(gt.date._date(this));
      },
      txtExec: function txtExec() {
        this.insertText(gt.date._date(this));
      },
      tooltip: "Insert current date"
    },
    time: {
      _time: function _time() {
        var e = new Date(),
            t = e.getHours(),
            n = e.getMinutes(),
            o = e.getSeconds();
        return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), o < 10 && (o = "0" + o), t + ":" + n + ":" + o;
      },
      exec: function exec() {
        this.insertText(gt.time._time());
      },
      txtExec: function txtExec() {
        this.insertText(gt.time._time());
      },
      tooltip: "Insert current time"
    },
    ltr: {
      state: function state(e, t) {
        return t && "ltr" === t.style.direction;
      },
      exec: function exec() {
        var e = this.getRangeHelper(),
            t = e.getFirstBlockParent();
        (this.focus(), t && !We(t, "body") || (this.execCommand("formatBlock", "p"), (t = e.getFirstBlockParent()) && !We(t, "body"))) && Pe(t, "direction", "ltr" === Pe(t, "direction") ? "" : "ltr");
      },
      tooltip: "Left-to-Right"
    },
    rtl: {
      state: function state(e, t) {
        return t && "rtl" === t.style.direction;
      },
      exec: function exec() {
        var e = this.getRangeHelper(),
            t = e.getFirstBlockParent();
        (this.focus(), t && !We(t, "body") || (this.execCommand("formatBlock", "p"), (t = e.getFirstBlockParent()) && !We(t, "body"))) && Pe(t, "direction", "rtl" === Pe(t, "direction") ? "" : "rtl");
      },
      tooltip: "Right-to-Left"
    },
    print: {
      exec: "print",
      tooltip: "Print"
    },
    maximize: {
      state: function state() {
        return this.maximize();
      },
      exec: function exec() {
        this.maximize(!this.maximize());
      },
      txtExec: function txtExec() {
        this.maximize(!this.maximize());
      },
      tooltip: "Maximize",
      shortcut: "Ctrl+Shift+M"
    },
    source: {
      state: function state() {
        return this.sourceMode();
      },
      exec: function exec() {
        this.toggleSourceMode();
      },
      txtExec: function txtExec() {
        this.toggleSourceMode();
      },
      tooltip: "View source",
      shortcut: "Ctrl+Shift+S"
    },
    ignore: {}
  },
      w = {};

  function ht(i) {
    var r = this,
        a = [],
        l = function l(e) {
      return "signal" + e.charAt(0).toUpperCase() + e.slice(1);
    },
        e = function e(_e2, t) {
      _e2 = [].slice.call(_e2);
      var n,
          o,
          r = l(_e2.shift());

      for (n = 0; n < a.length; n++) {
        if (r in a[n] && (o = a[n][r].apply(i, _e2), t)) return o;
      }
    };

    r.call = function () {
      e(arguments, !1);
    }, r.callOnlyFirst = function () {
      return e(arguments, !0);
    }, r.hasHandler = function (e) {
      var t = a.length;

      for (e = l(e); t--;) {
        if (e in a[t]) return !0;
      }

      return !1;
    }, r.exists = function (e) {
      return e in w && "function" == typeof (e = w[e]) && "object" == _typeof(e.prototype);
    }, r.isRegistered = function (e) {
      if (r.exists(e)) for (var t = a.length; t--;) {
        if (a[t] instanceof w[e]) return !0;
      }
      return !1;
    }, r.register = function (e) {
      return !(!r.exists(e) || r.isRegistered(e)) && (e = new w[e](), a.push(e), "init" in e && e.init.call(i), !0);
    }, r.deregister = function (e) {
      var t,
          n = a.length,
          o = !1;
      if (!r.isRegistered(e)) return o;

      for (; n--;) {
        a[n] instanceof w[e] && (o = !0, "destroy" in (t = a.splice(n, 1)[0]) && t.destroy.call(i));
      }

      return o;
    }, r.destroy = function () {
      for (var e = a.length; e--;) {
        "destroy" in a[e] && a[e].destroy.call(i);
      }

      a = [], i = null;
    };
  }

  ht.plugins = w;

  var C = h && h < 11,
      k = function k(e, t, n) {
    var o,
        r,
        i,
        a,
        l,
        c = "",
        s = e.startContainer,
        u = e.startOffset;

    for (s && 3 !== s.nodeType && (s = s.childNodes[u], u = 0), i = a = u; n > c.length && s && 3 === s.nodeType;) {
      o = s.nodeValue, r = n - c.length, l && (a = o.length, i = 0), l = s, t ? (u = i = Math.max(a - r, 0), c = o.substr(i, a - i) + c, s = l.previousSibling) : (u = i + (a = Math.min(r, o.length)), c += o.substr(i, a), s = l.nextSibling);
    }

    return {
      node: l || s,
      offset: u,
      text: c
    };
  };

  function vt(i, e) {
    var a,
        l,
        c = e || i.contentDocument || i.document,
        s = "sceditor-start-marker",
        u = "sceditor-end-marker",
        y = this;
    y.insertHTML = function (e, t) {
      var n, o;
      if (!y.selectedRange()) return !1;

      for (t && (e += y.selectedHtml() + t), o = De("p", {}, c), n = c.createDocumentFragment(), o.innerHTML = e; o.firstChild;) {
        Fe(n, o.firstChild);
      }

      y.insertNode(n);
    }, l = function l(e, t, n) {
      var o,
          r = c.createDocumentFragment();

      if ("string" == typeof e ? (t && (e += y.selectedHtml() + t), r = et(e)) : (Fe(r, e), t && (Fe(r, y.selectedRange().extractContents()), Fe(r, t))), o = r.lastChild) {
        for (; !rt(o.lastChild, !0);) {
          o = o.lastChild;
        }

        if (ot(o) ? o.lastChild || Fe(o, document.createTextNode("​")) : o = r, y.removeMarkers(), Fe(o, a(s)), Fe(o, a(u)), n) {
          var i = De("div");
          return Fe(i, r), i.innerHTML;
        }

        return r;
      }
    }, y.insertNode = function (e, t) {
      var n = l(e, t),
          o = y.selectedRange(),
          r = o.commonAncestorContainer;
      if (!n) return !1;
      o.deleteContents(), r && 3 !== r.nodeType && !ot(r) ? je(n, r) : o.insertNode(n), y.restoreRange();
    }, y.cloneSelected = function () {
      var e = y.selectedRange();
      if (e) return e.cloneRange();
    }, y.selectedRange = function () {
      var e,
          t,
          n = i.getSelection();

      if (n) {
        if (n.rangeCount <= 0) {
          for (t = c.body; t.firstChild;) {
            t = t.firstChild;
          }

          (e = c.createRange()).setStartBefore(t), n.addRange(e);
        }

        return 0 < n.rangeCount && (e = n.getRangeAt(0)), e;
      }
    }, y.hasSelection = function () {
      var e = i.getSelection();
      return e && 0 < e.rangeCount;
    }, y.selectedHtml = function () {
      var e,
          t = y.selectedRange();
      return t ? (Fe(e = De("p", {}, c), t.cloneContents()), e.innerHTML) : "";
    }, y.parentNode = function () {
      var e = y.selectedRange();
      if (e) return e.commonAncestorContainer;
    }, y.getFirstBlockParent = function (e) {
      var t = function t(e) {
        return rt(e, !0) && (e = e ? e.parentNode : null) ? t(e) : e;
      };

      return t(e || y.parentNode());
    }, y.insertNodeAt = function (e, t) {
      var n = y.selectedRange(),
          o = y.cloneSelected();
      if (!o) return !1;
      o.collapse(e), o.insertNode(t), y.selectRange(n);
    }, a = function a(e) {
      y.removeMarker(e);
      var t = De("span", {
        id: e,
        className: "sceditor-selection sceditor-ignore",
        style: "display:none;line-height:0"
      }, c);
      return t.innerHTML = " ", t;
    }, y.insertMarkers = function () {
      var e = y.selectedRange(),
          t = a(s);
      y.removeMarkers(), y.insertNodeAt(!0, t), e && e.collapsed ? t.parentNode.insertBefore(a(u), t.nextSibling) : y.insertNodeAt(!1, a(u));
    }, y.getMarker = function (e) {
      return c.getElementById(e);
    }, y.removeMarker = function (e) {
      var t = y.getMarker(e);
      t && Re(t);
    }, y.removeMarkers = function () {
      y.removeMarker(s), y.removeMarker(u);
    }, y.saveRange = function () {
      y.insertMarkers();
    }, y.selectRange = function (e) {
      var t,
          n = i.getSelection(),
          o = e.endContainer;

      if (!C && e.collapsed && o && !rt(o, !0)) {
        for (t = o.lastChild; t && We(t, ".sceditor-ignore");) {
          t = t.previousSibling;
        }

        if (We(t, "br")) {
          var r = c.createRange();
          r.setEndAfter(t), r.collapse(!1), y.compare(e, r) && (e.setStartBefore(t), e.collapse(!0));
        }
      }

      n && (y.clear(), n.addRange(e));
    }, y.restoreRange = function () {
      var e,
          t = y.selectedRange(),
          n = y.getMarker(s),
          o = y.getMarker(u);
      if (!n || !o || !t) return !1;
      e = n.nextSibling === o, (t = c.createRange()).setStartBefore(n), t.setEndAfter(o), e && t.collapse(!0), y.selectRange(t), y.removeMarkers();
    }, y.selectOuterText = function (e, t) {
      var n,
          o,
          r = y.cloneSelected();
      if (!r) return !1;
      r.collapse(!1), n = k(r, !0, e), o = k(r, !1, t), r.setStart(n.node, n.offset), r.setEnd(o.node, o.offset), y.selectRange(r);
    }, y.getOuterText = function (e, t) {
      var n = y.cloneSelected();
      return n ? (n.collapse(!e), k(n, e, t).text) : "";
    }, y.replaceKeyword = function (e, t, n, o, r, i) {
      n || e.sort(function (e, t) {
        return e[0].length - t[0].length;
      });
      var a,
          l,
          c,
          s,
          u,
          d,
          f,
          p,
          m = "(^|[\\s    ])",
          g = e.length,
          h = r ? 1 : 0,
          v = o || e[g - 1][0].length;

      for (r && v++, i = i || "", u = (a = y.getOuterText(!0, v)).length, a += i, t && (a += y.getOuterText(!1, v)); g--;) {
        if (p = (f = e[g][0]).length, s = Math.max(0, u - p - h), c = -1, r ? (l = a.substr(s).match(new RegExp(m + ft(f) + m))) && (c = l.index + s + l[1].length) : c = a.indexOf(f, s), -1 < c && c <= u && u <= c + p + h) return d = u - c, y.selectOuterText(d, p - d - (/^\S/.test(i) ? 1 : 0)), y.insertHTML(e[g][1]), !0;
      }

      return !1;
    }, y.compare = function (e, t) {
      return t || (t = y.selectedRange()), e && t ? 0 === e.compareBoundaryPoints(Range.END_TO_END, t) && 0 === e.compareBoundaryPoints(Range.START_TO_START, t) : !e && !t;
    }, y.clear = function () {
      var e = i.getSelection();
      e && (e.removeAllRanges ? e.removeAllRanges() : e.empty && e.empty());
    };
  }

  var yt = window,
      bt = document,
      xt = h,
      wt = xt && xt < 11,
      Ct = /^image\/(p?jpe?g|gif|png|bmp)$/i;

  function kt(l, e) {
    var a,
        w,
        u,
        c,
        i,
        m,
        d,
        s,
        f,
        p,
        g,
        h,
        t,
        v,
        r,
        y,
        b,
        x,
        C,
        n,
        o,
        k,
        S,
        E,
        T,
        D,
        M,
        N,
        R,
        F,
        H,
        _,
        z,
        O,
        A,
        B,
        I,
        L,
        P,
        V,
        W,
        j,
        q,
        U,
        $,
        Y,
        K,
        X,
        G,
        J,
        Q,
        Z,
        ee,
        te,
        ne,
        oe,
        re,
        ie,
        _ae,
        le,
        _ce,
        se,
        ue,
        de = this,
        fe = {},
        pe = [],
        me = [],
        ge = {},
        he = {},
        ve = {};

    de.commands = Ce(!0, {}, e.commands || gt);
    var ye = de.opts = Ce(!0, {}, ct, e);
    de.opts.emoticons = e.emoticons || ct.emoticons, M = function M() {
      l._sceditor = de, ye.locale && "en" !== ye.locale && z(), je(w = De("div", {
        className: "sceditor-container"
      }), l), Pe(w, "z-index", ye.zIndex), xt && Ue(w, "ie ie" + xt), n = l.required, l.required = !1;
      var e = kt.formats[ye.format];
      "init" in (a = e ? new e() : {}) && a.init.call(de), _(), L(), O(), H(), A(), B(), dt || de.toggleSourceMode(), J();

      var t = function t() {
        Oe(yt, "load", t), ye.autofocus && ne(), ue(), Z(), r.call("ready"), "onReady" in a && a.onReady.call(de);
      };

      ze(yt, "load", t), "complete" === bt.readyState && t();
    }, _ = function _() {
      var e = ye.plugins;
      e = e ? e.toString().split(",") : [], r = new ht(de), e.forEach(function (e) {
        r.register(e.trim());
      });
    }, z = function z() {
      var e;
      (t = kt.locale[ye.locale]) || (e = ye.locale.split("-"), t = kt.locale[e[0]]), t && t.dateFormat && (ye.dateFormat = t.dateFormat);
    }, H = function H() {
      s = De("textarea"), c = De("iframe", {
        frameborder: 0,
        allowfullscreen: !0
      }), ye.startInSourceMode ? (Ue(w, "sourceMode"), Be(c)) : (Ue(w, "wysiwygMode"), Be(s)), ye.spellcheck || Ae(w, "spellcheck", "false"), "https:" === yt.location.protocol && Ae(c, "src", "javascript:false"), Fe(w, c), Fe(w, s), de.dimensions(ye.width || Ke(l), ye.height || Xe(l));
      var e = xt ? "ie ie" + xt : "";
      e += ut ? " ios" : "", (d = c.contentDocument).open(), d.write(mt("html", {
        attrs: ' class="' + e + '"',
        spellcheck: ye.spellcheck ? "" : 'spellcheck="false"',
        charset: ye.charset,
        style: ye.style
      })), d.close(), m = d.body, i = c.contentWindow, de.readOnly(!!ye.readOnly), (ut || st || xt) && (Xe(m, "100%"), xt || ze(m, "touchend", de.focus));
      var t = Ae(l, "tabindex");
      Ae(s, "tabindex", t), Ae(c, "tabindex", t), v = new vt(i), Be(l), de.val(l.value);
      var n = ye.placeholder || Ae(l, "placeholder");
      n && (s.placeholder = n, Ae(m, "placeholder", n));
    }, A = function A() {
      ye.autoUpdate && (ze(m, "blur", se), ze(s, "blur", se)), null === ye.rtl && (ye.rtl = "rtl" === Pe(s, "direction")), de.rtl(!!ye.rtl), ye.autoExpand && (ze(m, "load", ue, _e), ze(m, "input keyup", ue)), ye.resizeEnabled && I(), Ae(w, "id", ye.id), de.emoticons(ye.emoticonsEnabled);
    }, B = function B() {
      var e = l.form,
          t = "compositionstart compositionend",
          n = "keydown keyup keypress focus blur contextmenu",
          o = "onselectionchange" in d ? "selectionchange" : "keyup focus blur contextmenu mouseup touchend click";
      ze(bt, "click", X), e && (ze(e, "reset", U), ze(e, "submit", de.updateOriginal, _e)), ze(m, "keypress", q), ze(m, "keydown", W), ze(m, "keydown", j), ze(m, "keyup", Z), ze(m, "blur", le), ze(m, "keyup", _ce), ze(m, "paste", P), ze(m, t, Y), ze(m, o, ee), ze(m, n, K), ye.emoticonsCompat && yt.getSelection && ze(m, "keyup", re), ze(m, "blur", function () {
        de.val() || Ue(m, "placeholder");
      }), ze(m, "focus", function () {
        $e(m, "placeholder");
      }), ze(s, "blur", le), ze(s, "keyup", _ce), ze(s, "keydown", W), ze(s, t, Y), ze(s, n, K), ze(d, "mousedown", $), ze(d, o, ee), ze(d, "beforedeactivate keyup mouseup", F), ze(d, "keyup", Z), ze(d, "focus", function () {
        p = null;
      }), ze(w, "selectionchanged", te), ze(w, "selectionchanged", J), ze(w, "selectionchanged valuechanged nodechanged pasteraw paste", K);
    }, O = function O() {
      var i,
          a = de.commands,
          l = (ye.toolbarExclude || "").split(","),
          e = ye.toolbar.split("|");
      u = De("div", {
        className: "sceditor-toolbar",
        unselectable: "on"
      }), ye.icons in kt.icons && (D = new kt.icons[ye.icons]()), Se(e, function (e, t) {
        i = De("div", {
          className: "sceditor-group"
        }), Se(t.split(","), function (e, t) {
          var n,
              o,
              r = a[t];

          if (r && !(-1 < l.indexOf(t))) {
            if (o = r.shortcut, n = mt("toolbarButton", {
              name: t,
              dispName: de._(r.name || r.tooltip || t)
            }, !0).firstChild, D && D.create) D.create(t) && (je(D.create(t), n.firstChild), Ue(n, "has-icon"));
            n._sceTxtMode = !!r.txtExec, n._sceWysiwygMode = !!r.exec, Ye(n, "disabled", !r.exec), ze(n, "click", function (e) {
              qe(n, "disabled") || R(n, r), J(), e.preventDefault();
            }), ze(n, "mousedown", function (e) {
              de.closeDropDown(), e.preventDefault();
            }), r.tooltip && Ae(n, "title", de._(r.tooltip) + (o ? " (" + o + ")" : "")), o && de.addShortcut(o, t), r.state ? me.push({
              name: t,
              state: r.state
            }) : be(r.exec) && me.push({
              name: t,
              state: r.exec
            }), Fe(i, n), he[t] = n;
          }
        }), i.firstChild && Fe(u, i);
      }), Fe(ye.toolbarContainer || w, u);
    }, I = function I() {
      var o,
          r,
          i,
          a,
          t,
          _n,
          e = De("div", {
        className: "sceditor-grip"
      }),
          l = De("div", {
        className: "sceditor-resize-cover"
      }),
          c = "touchmove mousemove",
          s = "touchcancel touchend mouseup",
          u = 0,
          d = 0,
          f = 0,
          p = 0,
          m = 0,
          g = 0,
          h = Ke(w),
          v = Xe(w),
          y = !1,
          b = de.rtl();

      if (o = ye.resizeMinHeight || v / 1.5, r = ye.resizeMaxHeight || 2.5 * v, i = ye.resizeMinWidth || h / 1.25, a = ye.resizeMaxWidth || 1.25 * h, t = function t(e) {
        "touchmove" === e.type ? (e = yt.event, f = e.changedTouches[0].pageX, p = e.changedTouches[0].pageY) : (f = e.pageX, p = e.pageY);
        var t = g + (p - d),
            n = b ? m - (f - u) : m + (f - u);
        0 < a && a < n && (n = a), 0 < i && n < i && (n = i), ye.resizeWidth || (n = !1), 0 < r && r < t && (t = r), 0 < o && t < o && (t = o), ye.resizeHeight || (t = !1), (n || t) && de.dimensions(n, t), e.preventDefault();
      }, _n = function n(e) {
        y && (y = !1, Be(l), $e(w, "resizing"), Oe(bt, c, t), Oe(bt, s, _n), e.preventDefault());
      }, D && D.create) {
        var x = D.create("grip");
        x && (Fe(e, x), Ue(e, "has-icon"));
      }

      Fe(w, e), Fe(w, l), Be(l), ze(e, "touchstart mousedown", function (e) {
        "touchstart" === e.type ? (e = yt.event, u = e.touches[0].pageX, d = e.touches[0].pageY) : (u = e.pageX, d = e.pageY), m = Ke(w), g = Xe(w), y = !0, Ue(w, "resizing"), Ie(l), ze(bt, c, t), ze(bt, s, _n), e.preventDefault();
      });
    }, L = function L() {
      var e = ye.emoticons,
          n = ye.emoticonsRoot || "";
      e && (ve = Ce({}, e.more, e.dropdown, e.hidden)), Se(ve, function (e, t) {
        ve[e] = mt("emoticon", {
          key: e,
          url: n + (t.url || t),
          tooltip: t.tooltip || e
        }), ye.emoticonsEnabled && pe.push(De("img", {
          src: n + (t.url || t)
        }));
      });
    }, ne = function ne() {
      var e,
          t,
          n = m.firstChild,
          o = !!ye.autofocusEnd;

      if (Je(w)) {
        if (de.sourceMode()) return t = o ? s.value.length : 0, void s.setSelectionRange(t, t);
        if (at(m), o) for ((n = m.lastChild) || (n = De("p", {}, d), Fe(m, n)); n.lastChild;) {
          n = n.lastChild, !wt && We(n, "br") && n.previousSibling && (n = n.previousSibling);
        }
        e = d.createRange(), ot(n) ? e.selectNodeContents(n) : (e.setStartBefore(n), o && e.setStartAfter(n)), e.collapse(!o), v.selectRange(e), x = e, o && (m.scrollTop = m.scrollHeight), de.focus();
      }
    }, de.readOnly = function (e) {
      return "boolean" != typeof e ? !s.readonly : (m.contentEditable = !e, s.readonly = !e, G(e), de);
    }, de.rtl = function (e) {
      var t = e ? "rtl" : "ltr";
      return "boolean" != typeof e ? "rtl" === Ae(s, "dir") : (Ae(m, "dir", t), Ae(s, "dir", t), $e(w, "rtl"), $e(w, "ltr"), Ue(w, t), D && D.rtl && D.rtl(e), de);
    }, G = function G(n) {
      var o = de.inSourceMode() ? "_sceTxtMode" : "_sceWysiwygMode";
      Se(he, function (e, t) {
        Ye(t, "disabled", n || !t[o]);
      });
    }, de.width = function (e, t) {
      return e || 0 === e ? (de.dimensions(e, null, t), de) : Ke(w);
    }, de.dimensions = function (e, t, n) {
      return t = !(!t && 0 !== t) && t, !1 === (e = !(!e && 0 !== e) && e) && !1 === t ? {
        width: de.width(),
        height: de.height()
      } : (!1 !== e && (!1 !== n && (ye.width = e), Ke(w, e)), !1 !== t && (!1 !== n && (ye.height = t), Xe(w, t)), de);
    }, de.height = function (e, t) {
      return e || 0 === e ? (de.dimensions(null, e, t), de) : Xe(w);
    }, de.maximize = function (e) {
      var t = "sceditor-maximize";
      return xe(e) ? qe(w, t) : ((e = !!e) && (E = yt.pageYOffset), Ye(bt.documentElement, t, e), Ye(bt.body, t, e), Ye(w, t, e), de.width(e ? "100%" : ye.width, !1), de.height(e ? "100%" : ye.height, !1), e || yt.scrollTo(0, E), ue(), de);
    }, ue = function ue() {
      ye.autoExpand && !S && (S = setTimeout(de.expandToContent, 200));
    }, de.expandToContent = function (e) {
      if (!de.maximize()) {
        if (clearTimeout(S), S = !1, !k) {
          var t = ye.resizeMinHeight || ye.height || Xe(l);
          k = {
            min: t,
            max: ye.resizeMaxHeight || 2 * t
          };
        }

        var n = bt.createRange();
        n.selectNodeContents(m);
        var o = n.getBoundingClientRect(),
            r = d.documentElement.clientHeight - 1,
            i = o.bottom - o.top,
            a = de.height() + 1 + (i - r);
        e || -1 === k.max || (a = Math.min(a, k.max)), de.height(Math.ceil(Math.max(a, k.min)));
      }
    }, de.destroy = function () {
      if (r) {
        r.destroy(), r = p = v = null, f && Re(f), Oe(bt, "click", X);
        var e = l.form;
        e && (Oe(e, "reset", U), Oe(e, "submit", de.updateOriginal)), Re(s), Re(u), Re(w), delete l._sceditor, Ie(l), l.required = n;
      }
    }, de.createDropDown = function (e, t, n, o) {
      var r,
          i = "sceditor-" + t;
      de.closeDropDown(!0), f && qe(f, i) || (!1 !== o && Se(He(n, ":not(input):not(textarea)"), function (e, t) {
        t.nodeType === Ee && Ae(t, "unselectable", "on");
      }), r = Ce({
        top: e.offsetTop,
        left: e.offsetLeft,
        marginTop: e.clientHeight
      }, ye.dropDownCss), Pe(f = De("div", {
        className: "sceditor-dropdown " + i
      }), r), Fe(f, n), Fe(w, f), ze(f, "click focusin", function (e) {
        e.stopPropagation();
      }), setTimeout(function () {
        if (f) {
          var e = He(f, "input,textarea")[0];
          e && e.focus();
        }
      }));
    }, X = function X(e) {
      3 !== e.which && f && !e.defaultPrevented && (se(), de.closeDropDown());
    }, P = function P(e) {
      var t,
          n,
          o = xt || st,
          r = m,
          i = e.clipboardData;

      if (i && !o) {
        var a = {},
            l = i.types,
            c = i.items;
        e.preventDefault();

        for (var s = 0; s < l.length; s++) {
          if (yt.FileReader && c && Ct.test(c[s].type)) return t = i.items[s].getAsFile(), n = void 0, (n = new FileReader()).onload = function (e) {
            V({
              html: '<img src="' + e.target.result + '" />'
            });
          }, void n.readAsDataURL(t);
          a[l[s]] = i.getData(l[s]);
        }

        a.text = a["text/plain"], a.html = a["text/html"], V(a);
      } else if (!T) {
        var u = r.scrollTop;

        for (v.saveRange(), T = bt.createDocumentFragment(); r.firstChild;) {
          Fe(T, r.firstChild);
        }

        setTimeout(function () {
          var e = r.innerHTML;
          r.innerHTML = "", Fe(r, T), r.scrollTop = u, T = !1, v.restoreRange(), V({
            html: e
          });
        }, 0);
      }
    }, V = function V(e) {
      var t = De("div", {}, d);
      r.call("pasteRaw", e), Ge(w, "pasteraw", e), e.html ? (t.innerHTML = e.html, it(t)) : t.innerHTML = pt(e.text || "");
      var n = {
        val: t.innerHTML
      };
      "fragmentToSource" in a && (n.val = a.fragmentToSource(n.val, d, y)), r.call("paste", n), Ge(w, "paste", n), "fragmentToHtml" in a && (n.val = a.fragmentToHtml(n.val, y)), r.call("pasteHtml", n), de.wysiwygEditorInsertHtml(n.val, null, !0);
    }, de.closeDropDown = function (e) {
      f && (Re(f), f = null), !0 === e && de.focus();
    }, de.wysiwygEditorInsertHtml = function (e, t, n) {
      var o,
          r,
          i,
          a = Xe(c);
      de.focus(), !n && Ne(b, "code") || (v.insertHTML(e, t), v.saveRange(), N(), Ie(o = He(m, "#sceditor-end-marker")[0]), r = m.scrollTop, i = lt(o).top + 1.5 * o.offsetHeight - a, Be(o), (r < i || i + a < r) && (m.scrollTop = i), _ae(!1), v.restoreRange(), Z());
    }, de.wysiwygEditorInsertText = function (e, t) {
      de.wysiwygEditorInsertHtml(pt(e), pt(t));
    }, de.insertText = function (e, t) {
      return de.inSourceMode() ? de.sourceEditorInsertText(e, t) : de.wysiwygEditorInsertText(e, t), de;
    }, de.sourceEditorInsertText = function (e, t) {
      var n,
          o,
          r = s.selectionStart,
          i = s.selectionEnd;
      n = s.scrollTop, s.focus(), o = s.value, t && (e += o.substring(r, i) + t), s.value = o.substring(0, r) + e + o.substring(i, o.length), s.selectionStart = r + e.length - (t ? t.length : 0), s.selectionEnd = s.selectionStart, s.scrollTop = n, s.focus(), _ae();
    }, de.getRangeHelper = function () {
      return v;
    }, de.sourceEditorCaret = function (e) {
      return s.focus(), e ? (s.selectionStart = e.start, s.selectionEnd = e.end, this) : {
        start: s.selectionStart,
        end: s.selectionEnd
      };
    }, de.val = function (e, t) {
      return be(e) ? (de.inSourceMode() ? de.setSourceEditorValue(e) : (!1 !== t && "toHtml" in a && (e = a.toHtml(e)), de.setWysiwygEditorValue(e)), de) : de.inSourceMode() ? de.getSourceEditorValue(!1) : de.getWysiwygEditorValue(t);
    }, de.insert = function (e, t, n, o, r) {
      if (de.inSourceMode()) return de.sourceEditorInsertText(e, t), de;

      if (t) {
        var i = v.selectedHtml();
        !1 !== n && "fragmentToSource" in a && (i = a.fragmentToSource(i, d, y)), e += i + t;
      }

      return !1 !== n && "fragmentToHtml" in a && (e = a.fragmentToHtml(e, y)), !1 !== n && !0 === r && (e = e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")), de.wysiwygEditorInsertHtml(e), de;
    }, de.getWysiwygEditorValue = function (e) {
      for (var t, n = De("div", {}, d), o = m.childNodes, r = 0; r < o.length; r++) {
        Fe(n, o[r].cloneNode(!0));
      }

      return Fe(m, n), it(n), Re(n), t = n.innerHTML, !1 !== e && a.hasOwnProperty("toSource") && (t = a.toSource(t, d)), t;
    }, de.getBody = function () {
      return m;
    }, de.getContentAreaContainer = function () {
      return c;
    }, de.getSourceEditorValue = function (e) {
      var t = s.value;
      return !1 !== e && "toHtml" in a && (t = a.toHtml(t)), t;
    }, de.setWysiwygEditorValue = function (e) {
      e || (e = "<p>" + (xt ? "" : "<br />") + "</p>"), m.innerHTML = e, N(), Z(), _ae(), ue();
    }, de.setSourceEditorValue = function (e) {
      s.value = e, _ae();
    }, de.updateOriginal = function () {
      l.value = de.val();
    }, N = function N() {
      var e, s, u, d, t, f, p;
      ye.emoticonsEnabled && (e = m, s = ve, u = ye.emoticonsCompat, d = e.ownerDocument, t = "(^|\\s| | | | |$)", f = [], p = {}, Me(e, "code") || (Se(s, function (e) {
        p[e] = new RegExp(t + ft(e) + t), f.push(e);
      }), f.sort(function (e, t) {
        return t.length - e.length;
      }), function e(t) {
        for (t = t.firstChild; t;) {
          if (t.nodeType !== Ee || We(t, "code") || e(t), t.nodeType === Te) for (var n = 0; n < f.length; n++) {
            var o = t.nodeValue,
                r = f[n],
                i = u ? o.search(p[r]) : o.indexOf(r);

            if (-1 < i) {
              var a = o.indexOf(r, i),
                  l = et(s[r], d),
                  c = o.substr(a + r.length);
              l.appendChild(d.createTextNode(c)), t.nodeValue = o.substr(0, a), t.parentNode.insertBefore(l, t.nextSibling);
            }
          }
          t = t.nextSibling;
        }
      }(e)));
    }, de.inSourceMode = function () {
      return qe(w, "sourceMode");
    }, de.sourceMode = function (e) {
      var t = de.inSourceMode();
      return "boolean" != typeof e ? t : ((t && !e || !t && e) && de.toggleSourceMode(), de);
    }, de.toggleSourceMode = function () {
      var e = de.inSourceMode();
      !dt && e || (e || (v.saveRange(), v.clear()), de.blur(), e ? de.setWysiwygEditorValue(de.getSourceEditorValue()) : de.setSourceEditorValue(de.getWysiwygEditorValue()), p = null, Le(s), Le(c), Ye(w, "wysiwygMode", e), Ye(w, "sourceMode", !e), G(), J());
    }, Q = function Q() {
      return s.focus(), s.value.substring(s.selectionStart, s.selectionEnd);
    }, R = function R(e, t) {
      de.inSourceMode() ? t.txtExec && (Array.isArray(t.txtExec) ? de.sourceEditorInsertText.apply(de, t.txtExec) : t.txtExec.call(de, e, Q())) : t.exec && (we(t.exec) ? t.exec.call(de, e) : de.execCommand(t.exec, t.hasOwnProperty("execParam") ? t.execParam : null));
    }, F = function F() {
      xt && (p = v.selectedRange());
    }, de.execCommand = function (e, t) {
      var n = !1,
          o = de.commands[e];

      if (de.focus(), !Ne(v.parentNode(), "code")) {
        try {
          n = d.execCommand(e, !1, t);
        } catch (e) {}

        !n && o && o.errorMessage && alert(de._(o.errorMessage)), J();
      }
    }, ee = function ee() {
      function e() {
        if (i.getSelection() && i.getSelection().rangeCount <= 0) x = null;else if (v && !v.compare(x)) {
          if ((x = v.cloneSelected()) && x.collapsed) {
            var e = x.startContainer,
                t = x.startOffset;

            for (t && e.nodeType !== Te && (e = e.childNodes[t]); e && e.parentNode !== m;) {
              e = e.parentNode;
            }

            e && rt(e, !0) && (v.saveRange(), n = d, Qe(m, function (e) {
              rt(e, !0) ? (o || je(o = De("p", {}, n), e), e.nodeType === Te && "" === e.nodeValue || Fe(o, e)) : o = null;
            }, !1, !0), v.restoreRange());
          }

          Ge(w, "selectionchanged");
        }
        var n, o;
        C = !1;
      }

      C || (C = !0, "onselectionchange" in d ? e() : setTimeout(e, 100));
    }, te = function te() {
      var e,
          t = v.parentNode();
      y !== t && (e = y, y = t, b = v.getFirstBlockParent(t), Ge(w, "nodechanged", {
        oldNode: e,
        newNode: y
      }));
    }, de.currentNode = function () {
      return y;
    }, de.currentBlockNode = function () {
      return b;
    }, J = function J() {
      var e,
          t,
          n = "active",
          o = d,
          r = de.sourceMode();
      if (de.readOnly()) Se(He(u, n), function (e, t) {
        $e(t, n);
      });else {
        r || (t = v.parentNode(), e = v.getFirstBlockParent(t));

        for (var i = 0; i < me.length; i++) {
          var a = 0,
              l = he[me[i].name],
              c = me[i].state,
              s = r && !l._sceTxtMode || !r && !l._sceWysiwygMode;

          if (be(c)) {
            if (!r) try {
              -1 < (a = o.queryCommandEnabled(c) ? 0 : -1) && (a = o.queryCommandState(c) ? 1 : 0);
            } catch (e) {}
          } else s || (a = c.call(de, t, e));

          Ye(l, "disabled", s || a < 0), Ye(l, n, 0 < a);
        }

        D && D.update && D.update(r, t, e);
      }
    }, q = function q(e) {
      if (!e.defaultPrevented && (de.closeDropDown(), 13 === e.which)) {
        if (!We(b, "li,ul,ol") && tt(b)) {
          p = null;
          var t = De("br", {}, d);

          if (v.insertNode(t), !wt) {
            var n = t.parentNode,
                o = n.lastChild;
            o && o.nodeType === Te && "" === o.nodeValue && (Re(o), o = n.lastChild), !rt(n, !0) && o === t && rt(t.previousSibling) && v.insertHTML("<br>");
          }

          e.preventDefault();
        }
      }
    }, Z = function Z() {
      Ze(m, function (e) {
        if (e.nodeType === Ee && !/inline/.test(Pe(e, "display")) && !We(e, ".sceditor-nlf") && tt(e)) {
          var t = De("p", {}, d);
          return t.className = "sceditor-nlf", t.innerHTML = wt ? "" : "<br />", Fe(m, t), !1;
        }

        if (3 === e.nodeType && !/^\s*$/.test(e.nodeValue) || We(e, "br")) return !1;
      });
    }, U = function U() {
      de.val(l.value);
    }, $ = function $() {
      de.closeDropDown(), p = null;
    }, de._ = function () {
      var n = arguments;
      return t && t[n[0]] && (n[0] = t[n[0]]), n[0].replace(/\{(\d+)\}/g, function (e, t) {
        return void 0 !== n[t - 0 + 1] ? n[t - 0 + 1] : "{" + t + "}";
      });
    }, K = function K(t) {
      r && r.call(t.type + "Event", t, de);
      var e = (t.target === s ? "scesrc" : "scewys") + t.type;
      fe[e] && fe[e].forEach(function (e) {
        e.call(de, t);
      });
    }, de.bind = function (e, t, n, o) {
      for (var r = (e = e.split(" ")).length; r--;) {
        if (we(t)) {
          var i = "scewys" + e[r],
              a = "scesrc" + e[r];
          n || (fe[i] = fe[i] || [], fe[i].push(t)), o || (fe[a] = fe[a] || [], fe[a].push(t)), "valuechanged" === e[r] && (_ae.hasHandler = !0);
        }
      }

      return de;
    }, de.unbind = function (e, t, n, o) {
      for (var r = (e = e.split(" ")).length; r--;) {
        we(t) && (n || ke(fe["scewys" + e[r]] || [], t), o || ke(fe["scesrc" + e[r]] || [], t));
      }

      return de;
    }, de.blur = function (e, t, n) {
      return we(e) ? de.bind("blur", e, t, n) : de.sourceMode() ? s.blur() : m.blur(), de;
    }, de.focus = function (e, t, n) {
      if (we(e)) de.bind("focus", e, t, n);else if (de.inSourceMode()) s.focus();else {
        if (He(d, ":focus").length) return;
        var o,
            r = v.selectedRange();
        x || ne(), !wt && r && 1 === r.endOffset && r.collapsed && (o = r.endContainer) && 1 === o.childNodes.length && We(o.firstChild, "br") && (r.setStartBefore(o.firstChild), r.collapse(!0), v.selectRange(r)), i.focus(), m.focus(), p && (v.selectRange(p), p = null);
      }
      return J(), de;
    }, de.keyDown = function (e, t, n) {
      return de.bind("keydown", e, t, n);
    }, de.keyPress = function (e, t, n) {
      return de.bind("keypress", e, t, n);
    }, de.keyUp = function (e, t, n) {
      return de.bind("keyup", e, t, n);
    }, de.nodeChanged = function (e) {
      return de.bind("nodechanged", e, !1, !0);
    }, de.selectionChanged = function (e) {
      return de.bind("selectionchanged", e, !1, !0);
    }, de.valueChanged = function (e, t, n) {
      return de.bind("valuechanged", e, t, n);
    }, oe = function oe(e) {
      var n = 0,
          o = de.emoticonsCache,
          t = String.fromCharCode(e.which);
      Ne(b, "code") || (o || (o = [], Se(ve, function (e, t) {
        o[n++] = [e, t];
      }), o.sort(function (e, t) {
        return e[0].length - t[0].length;
      }), de.emoticonsCache = o, de.longestEmoticonCode = o[o.length - 1][0].length), v.replaceKeyword(de.emoticonsCache, !0, !0, de.longestEmoticonCode, ye.emoticonsCompat, t) && (ye.emoticonsCompat && /^\s$/.test(t) || e.preventDefault()));
    }, re = function re() {
      !function (e, t) {
        var n = /[^\s\xA0\u2002\u2003\u2009\u00a0]+/,
            o = e && He(e, "img[data-sceditor-emoticon]");
        if (e && o.length) for (var r = 0; r < o.length; r++) {
          var i = o[r],
              a = i.parentNode,
              l = i.previousSibling,
              c = i.nextSibling;

          if (l && n.test(l.nodeValue.slice(-1)) || c && n.test((c.nodeValue || "")[0])) {
            var s = t.cloneSelected(),
                u = -1,
                d = s.startContainer,
                f = l.nodeValue;
            null === f && (f = l.innerText || ""), f += Ve(i, "sceditor-emoticon"), d === c && (u = f.length + s.startOffset), d === e && e.childNodes[s.startOffset] === c && (u = f.length), d === l && (u = s.startOffset), c && c.nodeType === Te || (c = a.insertBefore(a.ownerDocument.createTextNode(""), c)), c.insertData(0, f), Re(l), Re(i), -1 < u && (s.setStart(c, u), s.collapse(!0), t.selectRange(s));
          }
        }
      }(b, v);
    }, de.emoticons = function (e) {
      if (!e && !1 !== e) return ye.emoticonsEnabled;
      (ye.emoticonsEnabled = e) ? (ze(m, "keypress", oe), de.sourceMode() || (v.saveRange(), N(), _ae(!1), v.restoreRange())) : (Se(He(m, "img[data-sceditor-emoticon]"), function (e, t) {
        var n = Ve(t, "sceditor-emoticon"),
            o = d.createTextNode(n);
        t.parentNode.replaceChild(o, t);
      }), Oe(m, "keypress", oe), _ae());
      return de;
    }, de.css = function (e) {
      return o || (o = De("style", {
        id: "inline"
      }, d), Fe(d.head, o)), be(e) ? (o.styleSheet ? o.styleSheet.cssText = e : o.innerHTML = e, de) : o.styleSheet ? o.styleSheet.cssText : o.innerHTML;
    }, W = function W(e) {
      var t = [],
          n = {
        "`": "~",
        1: "!",
        2: "@",
        3: "#",
        4: "$",
        5: "%",
        6: "^",
        7: "&",
        8: "*",
        9: "(",
        0: ")",
        "-": "_",
        "=": "+",
        ";": ": ",
        "'": '"',
        ",": "<",
        ".": ">",
        "/": "?",
        "\\": "|",
        "[": "{",
        "]": "}"
      },
          o = {
        109: "-",
        110: "del",
        111: "/",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9"
      },
          r = e.which,
          i = {
        8: "backspace",
        9: "tab",
        13: "enter",
        19: "pause",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "insert",
        46: "del",
        91: "win",
        92: "win",
        93: "select",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9",
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12",
        144: "numlock",
        145: "scrolllock",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
      }[r] || String.fromCharCode(r).toLowerCase();
      (e.ctrlKey || e.metaKey) && t.push("ctrl"), e.altKey && t.push("alt"), e.shiftKey && (t.push("shift"), o[r] ? i = o[r] : n[i] && (i = n[i])), i && (r < 16 || 18 < r) && t.push(i), t = t.join("+"), ge[t] && !1 === ge[t].call(de) && (e.stopPropagation(), e.preventDefault());
    }, de.addShortcut = function (e, t) {
      return e = e.toLowerCase(), be(t) ? ge[e] = function () {
        return R(he[t], de.commands[t]), !1;
      } : ge[e] = t, de;
    }, de.removeShortcut = function (e) {
      return delete ge[e.toLowerCase()], de;
    }, j = function j(e) {
      var t, n, o;

      if (!ye.disableBlockRemove && 8 === e.which && (n = v.selectedRange()) && (t = n.startContainer, 0 === n.startOffset && (o = ie()) && !We(o, "body"))) {
        for (; t !== o;) {
          for (; t.previousSibling;) {
            if ((t = t.previousSibling).nodeType !== Te || t.nodeValue) return;
          }

          if (!(t = t.parentNode)) return;
        }

        de.clearBlockFormatting(o), e.preventDefault();
      }
    }, ie = function ie() {
      for (var e = b; !tt(e) || rt(e, !0);) {
        if (!(e = e.parentNode) || We(e, "body")) return;
      }

      return e;
    }, de.clearBlockFormatting = function (e) {
      return !(e = e || ie()) || We(e, "body") || (v.saveRange(), e.className = "", p = null, Ae(e, "style", ""), We(e, "p,div,td") || nt(e, "p"), v.restoreRange()), de;
    }, _ae = function ae(e) {
      if (r && (r.hasHandler("valuechangedEvent") || _ae.hasHandler)) {
        var t,
            n = de.sourceMode(),
            o = !n && v.hasSelection();
        e = (g = !1) !== e && !d.getElementById("sceditor-start-marker"), h && (clearTimeout(h), h = !1), o && e && v.saveRange(), (t = n ? s.value : m.innerHTML) !== _ae.lastVal && (_ae.lastVal = t, Ge(w, "valuechanged", {
          rawValue: n ? de.val() : t
        })), o && e && v.removeMarkers();
      }
    }, le = function le() {
      h && _ae();
    }, _ce = function ce(e) {
      var t = e.which,
          n = _ce.lastChar,
          o = 13 === n || 32 === n,
          r = 8 === n || 46 === n;
      _ce.lastChar = t, g || (13 === t || 32 === t ? o ? _ce.triggerNext = !0 : _ae() : 8 === t || 46 === t ? r ? _ce.triggerNext = !0 : _ae() : _ce.triggerNext && (_ae(), _ce.triggerNext = !1), clearTimeout(h), h = setTimeout(function () {
        g || _ae();
      }, 1500));
    }, Y = function Y(e) {
      (g = /start/i.test(e.type)) || _ae();
    }, se = function se() {
      de.updateOriginal();
    }, M();
  }

  kt.locale = {}, kt.formats = {}, kt.icons = {}, kt.command = {
    get: function get(e) {
      return gt[e] || null;
    },
    set: function set(e, t) {
      return !(!e || !t) && ((t = Ce(gt[e] || {}, t)).remove = function () {
        kt.command.remove(e);
      }, gt[e] = t, this);
    },
    remove: function remove(e) {
      return gt[e] && delete gt[e], this;
    }
  }, window.sceditor = {
    command: kt.command,
    commands: gt,
    defaultOptions: ct,
    ie: h,
    ios: ut,
    isWysiwygSupported: dt,
    regexEscape: ft,
    escapeEntities: pt,
    escapeUriScheme: function escapeUriScheme(e) {
      var t,
          n = window.location;
      return e && /^[^\/]*:/i.test(e) && !v.test(e) ? ((t = n.pathname.split("/")).pop(), n.protocol + "//" + n.host + t.join("/") + "/" + e) : e;
    },
    dom: {
      css: Pe,
      attr: Ae,
      removeAttr: r,
      is: We,
      closest: Ne,
      width: Ke,
      height: Xe,
      traverse: Qe,
      rTraverse: Ze,
      parseHTML: et,
      hasStyling: tt,
      convertElement: nt,
      blockLevelList: c,
      canHaveChildren: ot,
      isInline: rt,
      copyCSS: s,
      fixNesting: it,
      findCommonAncestor: function findCommonAncestor(e, t) {
        for (; e = e.parentNode;) {
          if ((n = e) !== (o = t) && n.contains && n.contains(o)) return e;
        }

        var n, o;
      },
      getSibling: d,
      removeWhiteSpace: at,
      extractContents: u,
      getOffset: lt,
      getStyle: f,
      hasStyle: function hasStyle(e, t, n) {
        var o = f(e, t);
        return !!o && (!n || o === n || Array.isArray(n) && -1 < n.indexOf(o));
      }
    },
    locale: kt.locale,
    icons: kt.icons,
    utils: {
      each: Se,
      isEmptyObject: t,
      extend: Ce
    },
    plugins: ht.plugins,
    formats: kt.formats,
    create: function create(e, t) {
      t = t || {}, Me(e, ".sceditor-container") || (t.runWithoutWysiwygSupport || dt) && new kt(e, t);
    },
    instance: function instance(e) {
      return e._sceditor;
    }
  };
}();

/***/ }),

/***/ "./public/assets/SCEditor_wysiwyg/minified/themes/default.min.css":
/*!************************************************************************!*\
  !*** ./public/assets/SCEditor_wysiwyg/minified/themes/default.min.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./public/assets/bootstrap-datepicker-1.6.4-dist/css/bootstrap-datepicker.css":
/*!************************************************************************************!*\
  !*** ./public/assets/bootstrap-datepicker-1.6.4-dist/css/bootstrap-datepicker.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./public/assets/bootstrap-datepicker-1.6.4-dist/js/bootstrap-datepicker.js":
/*!**********************************************************************************!*\
  !*** ./public/assets/bootstrap-datepicker-1.6.4-dist/js/bootstrap-datepicker.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Datepicker for Bootstrap v1.6.4 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($, undefined) {
  function UTCDate() {
    return new Date(Date.UTC.apply(Date, arguments));
  }

  function UTCToday() {
    var today = new Date();
    return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
  }

  function isUTCEquals(date1, date2) {
    return date1.getUTCFullYear() === date2.getUTCFullYear() && date1.getUTCMonth() === date2.getUTCMonth() && date1.getUTCDate() === date2.getUTCDate();
  }

  function alias(method) {
    return function () {
      return this[method].apply(this, arguments);
    };
  }

  function isValidDate(d) {
    return d && !isNaN(d.getTime());
  }

  var DateArray = function () {
    var extras = {
      get: function get(i) {
        return this.slice(i)[0];
      },
      contains: function contains(d) {
        // Array.indexOf is not cross-browser;
        // $.inArray doesn't work with Dates
        var val = d && d.valueOf();

        for (var i = 0, l = this.length; i < l; i++) {
          if (this[i].valueOf() === val) return i;
        }

        return -1;
      },
      remove: function remove(i) {
        this.splice(i, 1);
      },
      replace: function replace(new_array) {
        if (!new_array) return;
        if (!$.isArray(new_array)) new_array = [new_array];
        this.clear();
        this.push.apply(this, new_array);
      },
      clear: function clear() {
        this.length = 0;
      },
      copy: function copy() {
        var a = new DateArray();
        a.replace(this);
        return a;
      }
    };
    return function () {
      var a = [];
      a.push.apply(a, arguments);
      $.extend(a, extras);
      return a;
    };
  }(); // Picker object


  var Datepicker = function Datepicker(element, options) {
    $(element).data('datepicker', this);

    this._process_options(options);

    this.dates = new DateArray();
    this.viewDate = this.o.defaultViewDate;
    this.focusDate = null;
    this.element = $(element);
    this.isInput = this.element.is('input');
    this.inputField = this.isInput ? this.element : this.element.find('input');
    this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
    this.hasInput = this.component && this.inputField.length;
    if (this.component && this.component.length === 0) this.component = false;
    this.isInline = !this.component && this.element.is('div');
    this.picker = $(DPGlobal.template); // Checking templates and inserting

    if (this._check_template(this.o.templates.leftArrow)) {
      this.picker.find('.prev').html(this.o.templates.leftArrow);
    }

    if (this._check_template(this.o.templates.rightArrow)) {
      this.picker.find('.next').html(this.o.templates.rightArrow);
    }

    this._buildEvents();

    this._attachEvents();

    if (this.isInline) {
      this.picker.addClass('datepicker-inline').appendTo(this.element);
    } else {
      this.picker.addClass('datepicker-dropdown dropdown-menu');
    }

    if (this.o.rtl) {
      this.picker.addClass('datepicker-rtl');
    }

    this.viewMode = this.o.startView;
    if (this.o.calendarWeeks) this.picker.find('thead .datepicker-title, tfoot .today, tfoot .clear').attr('colspan', function (i, val) {
      return parseInt(val) + 1;
    });
    this._allow_update = false;
    this.setStartDate(this._o.startDate);
    this.setEndDate(this._o.endDate);
    this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
    this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted);
    this.setDatesDisabled(this.o.datesDisabled);
    this.fillDow();
    this.fillMonths();
    this._allow_update = true;
    this.update();
    this.showMode();

    if (this.isInline) {
      this.show();
    }
  };

  Datepicker.prototype = {
    constructor: Datepicker,
    _resolveViewName: function _resolveViewName(view, default_value) {
      if (view === 0 || view === 'days' || view === 'month') {
        return 0;
      }

      if (view === 1 || view === 'months' || view === 'year') {
        return 1;
      }

      if (view === 2 || view === 'years' || view === 'decade') {
        return 2;
      }

      if (view === 3 || view === 'decades' || view === 'century') {
        return 3;
      }

      if (view === 4 || view === 'centuries' || view === 'millennium') {
        return 4;
      }

      return default_value === undefined ? false : default_value;
    },
    _check_template: function _check_template(tmp) {
      try {
        // If empty
        if (tmp === undefined || tmp === "") {
          return false;
        } // If no html, everything ok


        if ((tmp.match(/[<>]/g) || []).length <= 0) {
          return true;
        } // Checking if html is fine


        var jDom = $(tmp);
        return jDom.length > 0;
      } catch (ex) {
        return false;
      }
    },
    _process_options: function _process_options(opts) {
      // Store raw options for reference
      this._o = $.extend({}, this._o, opts); // Processed options

      var o = this.o = $.extend({}, this._o); // Check if "de-DE" style date is available, if not language should
      // fallback to 2 letter code eg "de"

      var lang = o.language;

      if (!dates[lang]) {
        lang = lang.split('-')[0];
        if (!dates[lang]) lang = defaults.language;
      }

      o.language = lang; // Retrieve view index from any aliases

      o.startView = this._resolveViewName(o.startView, 0);
      o.minViewMode = this._resolveViewName(o.minViewMode, 0);
      o.maxViewMode = this._resolveViewName(o.maxViewMode, 4); // Check that the start view is between min and max

      o.startView = Math.min(o.startView, o.maxViewMode);
      o.startView = Math.max(o.startView, o.minViewMode); // true, false, or Number > 0

      if (o.multidate !== true) {
        o.multidate = Number(o.multidate) || false;
        if (o.multidate !== false) o.multidate = Math.max(0, o.multidate);
      }

      o.multidateSeparator = String(o.multidateSeparator);
      o.weekStart %= 7;
      o.weekEnd = (o.weekStart + 6) % 7;
      var format = DPGlobal.parseFormat(o.format);

      if (o.startDate !== -Infinity) {
        if (!!o.startDate) {
          if (o.startDate instanceof Date) o.startDate = this._local_to_utc(this._zero_time(o.startDate));else o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
        } else {
          o.startDate = -Infinity;
        }
      }

      if (o.endDate !== Infinity) {
        if (!!o.endDate) {
          if (o.endDate instanceof Date) o.endDate = this._local_to_utc(this._zero_time(o.endDate));else o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
        } else {
          o.endDate = Infinity;
        }
      }

      o.daysOfWeekDisabled = o.daysOfWeekDisabled || [];
      if (!$.isArray(o.daysOfWeekDisabled)) o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
      o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function (d) {
        return parseInt(d, 10);
      });
      o.daysOfWeekHighlighted = o.daysOfWeekHighlighted || [];
      if (!$.isArray(o.daysOfWeekHighlighted)) o.daysOfWeekHighlighted = o.daysOfWeekHighlighted.split(/[,\s]*/);
      o.daysOfWeekHighlighted = $.map(o.daysOfWeekHighlighted, function (d) {
        return parseInt(d, 10);
      });
      o.datesDisabled = o.datesDisabled || [];

      if (!$.isArray(o.datesDisabled)) {
        o.datesDisabled = [o.datesDisabled];
      }

      o.datesDisabled = $.map(o.datesDisabled, function (d) {
        return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
      });

      var plc = String(o.orientation).toLowerCase().split(/\s+/g),
          _plc = o.orientation.toLowerCase();

      plc = $.grep(plc, function (word) {
        return /^auto|left|right|top|bottom$/.test(word);
      });
      o.orientation = {
        x: 'auto',
        y: 'auto'
      };
      if (!_plc || _plc === 'auto') ; // no action
      else if (plc.length === 1) {
          switch (plc[0]) {
            case 'top':
            case 'bottom':
              o.orientation.y = plc[0];
              break;

            case 'left':
            case 'right':
              o.orientation.x = plc[0];
              break;
          }
        } else {
          _plc = $.grep(plc, function (word) {
            return /^left|right$/.test(word);
          });
          o.orientation.x = _plc[0] || 'auto';
          _plc = $.grep(plc, function (word) {
            return /^top|bottom$/.test(word);
          });
          o.orientation.y = _plc[0] || 'auto';
        }

      if (o.defaultViewDate) {
        var year = o.defaultViewDate.year || new Date().getFullYear();
        var month = o.defaultViewDate.month || 0;
        var day = o.defaultViewDate.day || 1;
        o.defaultViewDate = UTCDate(year, month, day);
      } else {
        o.defaultViewDate = UTCToday();
      }
    },
    _events: [],
    _secondaryEvents: [],
    _applyEvents: function _applyEvents(evs) {
      for (var i = 0, el, ch, ev; i < evs.length; i++) {
        el = evs[i][0];

        if (evs[i].length === 2) {
          ch = undefined;
          ev = evs[i][1];
        } else if (evs[i].length === 3) {
          ch = evs[i][1];
          ev = evs[i][2];
        }

        el.on(ev, ch);
      }
    },
    _unapplyEvents: function _unapplyEvents(evs) {
      for (var i = 0, el, ev, ch; i < evs.length; i++) {
        el = evs[i][0];

        if (evs[i].length === 2) {
          ch = undefined;
          ev = evs[i][1];
        } else if (evs[i].length === 3) {
          ch = evs[i][1];
          ev = evs[i][2];
        }

        el.off(ev, ch);
      }
    },
    _buildEvents: function _buildEvents() {
      var events = {
        keyup: $.proxy(function (e) {
          if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1) this.update();
        }, this),
        keydown: $.proxy(this.keydown, this),
        paste: $.proxy(this.paste, this)
      };

      if (this.o.showOnFocus === true) {
        events.focus = $.proxy(this.show, this);
      }

      if (this.isInput) {
        // single input
        this._events = [[this.element, events]];
      } else if (this.component && this.hasInput) {
        // component: input + button
        this._events = [// For components that are not readonly, allow keyboard nav
        [this.inputField, events], [this.component, {
          click: $.proxy(this.show, this)
        }]];
      } else {
        this._events = [[this.element, {
          click: $.proxy(this.show, this),
          keydown: $.proxy(this.keydown, this)
        }]];
      }

      this._events.push( // Component: listen for blur on element descendants
      [this.element, '*', {
        blur: $.proxy(function (e) {
          this._focused_from = e.target;
        }, this)
      }], // Input: listen for blur on element
      [this.element, {
        blur: $.proxy(function (e) {
          this._focused_from = e.target;
        }, this)
      }]);

      if (this.o.immediateUpdates) {
        // Trigger input updates immediately on changed year/month
        this._events.push([this.element, {
          'changeYear changeMonth': $.proxy(function (e) {
            this.update(e.date);
          }, this)
        }]);
      }

      this._secondaryEvents = [[this.picker, {
        click: $.proxy(this.click, this)
      }], [$(window), {
        resize: $.proxy(this.place, this)
      }], [$(document), {
        mousedown: $.proxy(function (e) {
          // Clicked outside the datepicker, hide it
          if (!(this.element.is(e.target) || this.element.find(e.target).length || this.picker.is(e.target) || this.picker.find(e.target).length || this.isInline)) {
            this.hide();
          }
        }, this)
      }]];
    },
    _attachEvents: function _attachEvents() {
      this._detachEvents();

      this._applyEvents(this._events);
    },
    _detachEvents: function _detachEvents() {
      this._unapplyEvents(this._events);
    },
    _attachSecondaryEvents: function _attachSecondaryEvents() {
      this._detachSecondaryEvents();

      this._applyEvents(this._secondaryEvents);
    },
    _detachSecondaryEvents: function _detachSecondaryEvents() {
      this._unapplyEvents(this._secondaryEvents);
    },
    _trigger: function _trigger(event, altdate) {
      var date = altdate || this.dates.get(-1),
          local_date = this._utc_to_local(date);

      this.element.trigger({
        type: event,
        date: local_date,
        dates: $.map(this.dates, this._utc_to_local),
        format: $.proxy(function (ix, format) {
          if (arguments.length === 0) {
            ix = this.dates.length - 1;
            format = this.o.format;
          } else if (typeof ix === 'string') {
            format = ix;
            ix = this.dates.length - 1;
          }

          format = format || this.o.format;
          var date = this.dates.get(ix);
          return DPGlobal.formatDate(date, format, this.o.language);
        }, this)
      });
    },
    show: function show() {
      if (this.inputField.prop('disabled') || this.inputField.prop('readonly') && this.o.enableOnReadonly === false) return;
      if (!this.isInline) this.picker.appendTo(this.o.container);
      this.place();
      this.picker.show();

      this._attachSecondaryEvents();

      this._trigger('show');

      if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
        $(this.element).blur();
      }

      return this;
    },
    hide: function hide() {
      if (this.isInline || !this.picker.is(':visible')) return this;
      this.focusDate = null;
      this.picker.hide().detach();

      this._detachSecondaryEvents();

      this.viewMode = this.o.startView;
      this.showMode();
      if (this.o.forceParse && this.inputField.val()) this.setValue();

      this._trigger('hide');

      return this;
    },
    destroy: function destroy() {
      this.hide();

      this._detachEvents();

      this._detachSecondaryEvents();

      this.picker.remove();
      delete this.element.data().datepicker;

      if (!this.isInput) {
        delete this.element.data().date;
      }

      return this;
    },
    paste: function paste(evt) {
      var dateString;

      if (evt.originalEvent.clipboardData && evt.originalEvent.clipboardData.types && $.inArray('text/plain', evt.originalEvent.clipboardData.types) !== -1) {
        dateString = evt.originalEvent.clipboardData.getData('text/plain');
      } else if (window.clipboardData) {
        dateString = window.clipboardData.getData('Text');
      } else {
        return;
      }

      this.setDate(dateString);
      this.update();
      evt.preventDefault();
    },
    _utc_to_local: function _utc_to_local(utc) {
      return utc && new Date(utc.getTime() + utc.getTimezoneOffset() * 60000);
    },
    _local_to_utc: function _local_to_utc(local) {
      return local && new Date(local.getTime() - local.getTimezoneOffset() * 60000);
    },
    _zero_time: function _zero_time(local) {
      return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
    },
    _zero_utc_time: function _zero_utc_time(utc) {
      return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
    },
    getDates: function getDates() {
      return $.map(this.dates, this._utc_to_local);
    },
    getUTCDates: function getUTCDates() {
      return $.map(this.dates, function (d) {
        return new Date(d);
      });
    },
    getDate: function getDate() {
      return this._utc_to_local(this.getUTCDate());
    },
    getUTCDate: function getUTCDate() {
      var selected_date = this.dates.get(-1);

      if (typeof selected_date !== 'undefined') {
        return new Date(selected_date);
      } else {
        return null;
      }
    },
    clearDates: function clearDates() {
      if (this.inputField) {
        this.inputField.val('');
      }

      this.update();

      this._trigger('changeDate');

      if (this.o.autoclose) {
        this.hide();
      }
    },
    setDates: function setDates() {
      var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
      this.update.apply(this, args);

      this._trigger('changeDate');

      this.setValue();
      return this;
    },
    setUTCDates: function setUTCDates() {
      var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
      this.update.apply(this, $.map(args, this._utc_to_local));

      this._trigger('changeDate');

      this.setValue();
      return this;
    },
    setDate: alias('setDates'),
    setUTCDate: alias('setUTCDates'),
    remove: alias('destroy'),
    setValue: function setValue() {
      var formatted = this.getFormattedDate();
      this.inputField.val(formatted);
      return this;
    },
    getFormattedDate: function getFormattedDate(format) {
      if (format === undefined) format = this.o.format;
      var lang = this.o.language;
      return $.map(this.dates, function (d) {
        return DPGlobal.formatDate(d, format, lang);
      }).join(this.o.multidateSeparator);
    },
    getStartDate: function getStartDate() {
      return this.o.startDate;
    },
    setStartDate: function setStartDate(startDate) {
      this._process_options({
        startDate: startDate
      });

      this.update();
      this.updateNavArrows();
      return this;
    },
    getEndDate: function getEndDate() {
      return this.o.endDate;
    },
    setEndDate: function setEndDate(endDate) {
      this._process_options({
        endDate: endDate
      });

      this.update();
      this.updateNavArrows();
      return this;
    },
    setDaysOfWeekDisabled: function setDaysOfWeekDisabled(daysOfWeekDisabled) {
      this._process_options({
        daysOfWeekDisabled: daysOfWeekDisabled
      });

      this.update();
      this.updateNavArrows();
      return this;
    },
    setDaysOfWeekHighlighted: function setDaysOfWeekHighlighted(daysOfWeekHighlighted) {
      this._process_options({
        daysOfWeekHighlighted: daysOfWeekHighlighted
      });

      this.update();
      return this;
    },
    setDatesDisabled: function setDatesDisabled(datesDisabled) {
      this._process_options({
        datesDisabled: datesDisabled
      });

      this.update();
      this.updateNavArrows();
    },
    place: function place() {
      if (this.isInline) return this;
      var calendarWidth = this.picker.outerWidth(),
          calendarHeight = this.picker.outerHeight(),
          visualPadding = 10,
          container = $(this.o.container),
          windowWidth = container.width(),
          scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
          appendOffset = container.offset();
      var parentsZindex = [];
      this.element.parents().each(function () {
        var itemZIndex = $(this).css('z-index');
        if (itemZIndex !== 'auto' && itemZIndex !== 0) parentsZindex.push(parseInt(itemZIndex));
      });
      var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
      var offset = this.component ? this.component.parent().offset() : this.element.offset();
      var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
      var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
      var left = offset.left - appendOffset.left,
          top = offset.top - appendOffset.top;

      if (this.o.container !== 'body') {
        top += scrollTop;
      }

      this.picker.removeClass('datepicker-orient-top datepicker-orient-bottom ' + 'datepicker-orient-right datepicker-orient-left');

      if (this.o.orientation.x !== 'auto') {
        this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
        if (this.o.orientation.x === 'right') left -= calendarWidth - width;
      } // auto x orientation is best-placement: if it crosses a window
      // edge, fudge it sideways
      else {
          if (offset.left < 0) {
            // component is outside the window on the left side. Move it into visible range
            this.picker.addClass('datepicker-orient-left');
            left -= offset.left - visualPadding;
          } else if (left + calendarWidth > windowWidth) {
            // the calendar passes the widow right edge. Align it to component right side
            this.picker.addClass('datepicker-orient-right');
            left += width - calendarWidth;
          } else {
            // Default to left
            this.picker.addClass('datepicker-orient-left');
          }
        } // auto y orientation is best-situation: top or bottom, no fudging,
      // decision based on which shows more of the calendar


      var yorient = this.o.orientation.y,
          top_overflow;

      if (yorient === 'auto') {
        top_overflow = -scrollTop + top - calendarHeight;
        yorient = top_overflow < 0 ? 'bottom' : 'top';
      }

      this.picker.addClass('datepicker-orient-' + yorient);
      if (yorient === 'top') top -= calendarHeight + parseInt(this.picker.css('padding-top'));else top += height;

      if (this.o.rtl) {
        var right = windowWidth - (left + width);
        this.picker.css({
          top: top,
          right: right,
          zIndex: zIndex
        });
      } else {
        this.picker.css({
          top: top,
          left: left,
          zIndex: zIndex
        });
      }

      return this;
    },
    _allow_update: true,
    update: function update() {
      if (!this._allow_update) return this;
      var oldDates = this.dates.copy(),
          dates = [],
          fromArgs = false;

      if (arguments.length) {
        $.each(arguments, $.proxy(function (i, date) {
          if (date instanceof Date) date = this._local_to_utc(date);
          dates.push(date);
        }, this));
        fromArgs = true;
      } else {
        dates = this.isInput ? this.element.val() : this.element.data('date') || this.inputField.val();
        if (dates && this.o.multidate) dates = dates.split(this.o.multidateSeparator);else dates = [dates];
        delete this.element.data().date;
      }

      dates = $.map(dates, $.proxy(function (date) {
        return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
      }, this));
      dates = $.grep(dates, $.proxy(function (date) {
        return !this.dateWithinRange(date) || !date;
      }, this), true);
      this.dates.replace(dates);
      if (this.dates.length) this.viewDate = new Date(this.dates.get(-1));else if (this.viewDate < this.o.startDate) this.viewDate = new Date(this.o.startDate);else if (this.viewDate > this.o.endDate) this.viewDate = new Date(this.o.endDate);else this.viewDate = this.o.defaultViewDate;

      if (fromArgs) {
        // setting date by clicking
        this.setValue();
      } else if (dates.length) {
        // setting date by typing
        if (String(oldDates) !== String(this.dates)) this._trigger('changeDate');
      }

      if (!this.dates.length && oldDates.length) this._trigger('clearDate');
      this.fill();
      this.element.change();
      return this;
    },
    fillDow: function fillDow() {
      var dowCnt = this.o.weekStart,
          html = '<tr>';

      if (this.o.calendarWeeks) {
        this.picker.find('.datepicker-days .datepicker-switch').attr('colspan', function (i, val) {
          return parseInt(val) + 1;
        });
        html += '<th class="cw">&#160;</th>';
      }

      while (dowCnt < this.o.weekStart + 7) {
        html += '<th class="dow';
        if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) > -1) html += ' disabled';
        html += '">' + dates[this.o.language].daysMin[dowCnt++ % 7] + '</th>';
      }

      html += '</tr>';
      this.picker.find('.datepicker-days thead').append(html);
    },
    fillMonths: function fillMonths() {
      var localDate = this._utc_to_local(this.viewDate);

      var html = '',
          i = 0;

      while (i < 12) {
        var focused = localDate && localDate.getMonth() === i ? ' focused' : '';
        html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i++] + '</span>';
      }

      this.picker.find('.datepicker-months td').html(html);
    },
    setRange: function setRange(range) {
      if (!range || !range.length) delete this.range;else this.range = $.map(range, function (d) {
        return d.valueOf();
      });
      this.fill();
    },
    getClassNames: function getClassNames(date) {
      var cls = [],
          year = this.viewDate.getUTCFullYear(),
          month = this.viewDate.getUTCMonth(),
          today = new Date();

      if (date.getUTCFullYear() < year || date.getUTCFullYear() === year && date.getUTCMonth() < month) {
        cls.push('old');
      } else if (date.getUTCFullYear() > year || date.getUTCFullYear() === year && date.getUTCMonth() > month) {
        cls.push('new');
      }

      if (this.focusDate && date.valueOf() === this.focusDate.valueOf()) cls.push('focused'); // Compare internal UTC date with local today, not UTC today

      if (this.o.todayHighlight && date.getUTCFullYear() === today.getFullYear() && date.getUTCMonth() === today.getMonth() && date.getUTCDate() === today.getDate()) {
        cls.push('today');
      }

      if (this.dates.contains(date) !== -1) cls.push('active');

      if (!this.dateWithinRange(date)) {
        cls.push('disabled');
      }

      if (this.dateIsDisabled(date)) {
        cls.push('disabled', 'disabled-date');
      }

      if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1) {
        cls.push('highlighted');
      }

      if (this.range) {
        if (date > this.range[0] && date < this.range[this.range.length - 1]) {
          cls.push('range');
        }

        if ($.inArray(date.valueOf(), this.range) !== -1) {
          cls.push('selected');
        }

        if (date.valueOf() === this.range[0]) {
          cls.push('range-start');
        }

        if (date.valueOf() === this.range[this.range.length - 1]) {
          cls.push('range-end');
        }
      }

      return cls;
    },
    _fill_yearsView: function _fill_yearsView(selector, cssClass, factor, step, currentYear, startYear, endYear, callback) {
      var html, view, year, steps, startStep, endStep, thisYear, i, classes, tooltip, before;
      html = '';
      view = this.picker.find(selector);
      year = parseInt(currentYear / factor, 10) * factor;
      startStep = parseInt(startYear / step, 10) * step;
      endStep = parseInt(endYear / step, 10) * step;
      steps = $.map(this.dates, function (d) {
        return parseInt(d.getUTCFullYear() / step, 10) * step;
      });
      view.find('.datepicker-switch').text(year + '-' + (year + step * 9));
      thisYear = year - step;

      for (i = -1; i < 11; i += 1) {
        classes = [cssClass];
        tooltip = null;

        if (i === -1) {
          classes.push('old');
        } else if (i === 10) {
          classes.push('new');
        }

        if ($.inArray(thisYear, steps) !== -1) {
          classes.push('active');
        }

        if (thisYear < startStep || thisYear > endStep) {
          classes.push('disabled');
        }

        if (thisYear === this.viewDate.getFullYear()) {
          classes.push('focused');
        }

        if (callback !== $.noop) {
          before = callback(new Date(thisYear, 0, 1));

          if (before === undefined) {
            before = {};
          } else if (typeof before === 'boolean') {
            before = {
              enabled: before
            };
          } else if (typeof before === 'string') {
            before = {
              classes: before
            };
          }

          if (before.enabled === false) {
            classes.push('disabled');
          }

          if (before.classes) {
            classes = classes.concat(before.classes.split(/\s+/));
          }

          if (before.tooltip) {
            tooltip = before.tooltip;
          }
        }

        html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + thisYear + '</span>';
        thisYear += step;
      }

      view.find('td').html(html);
    },
    fill: function fill() {
      var d = new Date(this.viewDate),
          year = d.getUTCFullYear(),
          month = d.getUTCMonth(),
          startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
          startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
          endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
          endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
          todaytxt = dates[this.o.language].today || dates['en'].today || '',
          cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
          titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
          tooltip,
          before;
      if (isNaN(year) || isNaN(month)) return;
      this.picker.find('.datepicker-days .datepicker-switch').text(DPGlobal.formatDate(d, titleFormat, this.o.language));
      this.picker.find('tfoot .today').text(todaytxt).toggle(this.o.todayBtn !== false);
      this.picker.find('tfoot .clear').text(cleartxt).toggle(this.o.clearBtn !== false);
      this.picker.find('thead .datepicker-title').text(this.o.title).toggle(this.o.title !== '');
      this.updateNavArrows();
      this.fillMonths();
      var prevMonth = UTCDate(year, month - 1, 28),
          day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
      prevMonth.setUTCDate(day);
      prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7) % 7);
      var nextMonth = new Date(prevMonth);

      if (prevMonth.getUTCFullYear() < 100) {
        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
      }

      nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
      nextMonth = nextMonth.valueOf();
      var html = [];
      var clsName;

      while (prevMonth.valueOf() < nextMonth) {
        if (prevMonth.getUTCDay() === this.o.weekStart) {
          html.push('<tr>');

          if (this.o.calendarWeeks) {
            // ISO 8601: First week contains first thursday.
            // ISO also states week starts on Monday, but we can be more abstract here.
            var // Start of current week: based on weekstart/current date
            ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
                // Thursday of this week
            th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
                // First Thursday of year, year from thursday
            yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),
                // Calendar week: ms between thursdays, div ms per day, div 7 days
            calWeek = (th - yth) / 864e5 / 7 + 1;
            html.push('<td class="cw">' + calWeek + '</td>');
          }
        }

        clsName = this.getClassNames(prevMonth);
        clsName.push('day');

        if (this.o.beforeShowDay !== $.noop) {
          before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
          if (before === undefined) before = {};else if (typeof before === 'boolean') before = {
            enabled: before
          };else if (typeof before === 'string') before = {
            classes: before
          };
          if (before.enabled === false) clsName.push('disabled');
          if (before.classes) clsName = clsName.concat(before.classes.split(/\s+/));
          if (before.tooltip) tooltip = before.tooltip;
        } //Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)
        //Fallback to unique function for older jquery versions


        if ($.isFunction($.uniqueSort)) {
          clsName = $.uniqueSort(clsName);
        } else {
          clsName = $.unique(clsName);
        }

        html.push('<td class="' + clsName.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + prevMonth.getUTCDate() + '</td>');
        tooltip = null;

        if (prevMonth.getUTCDay() === this.o.weekEnd) {
          html.push('</tr>');
        }

        prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
      }

      this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
      var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
      var months = this.picker.find('.datepicker-months').find('.datepicker-switch').text(this.o.maxViewMode < 2 ? monthsTitle : year).end().find('span').removeClass('active');
      $.each(this.dates, function (i, d) {
        if (d.getUTCFullYear() === year) months.eq(d.getUTCMonth()).addClass('active');
      });

      if (year < startYear || year > endYear) {
        months.addClass('disabled');
      }

      if (year === startYear) {
        months.slice(0, startMonth).addClass('disabled');
      }

      if (year === endYear) {
        months.slice(endMonth + 1).addClass('disabled');
      }

      if (this.o.beforeShowMonth !== $.noop) {
        var that = this;
        $.each(months, function (i, month) {
          var moDate = new Date(year, i, 1);
          var before = that.o.beforeShowMonth(moDate);
          if (before === undefined) before = {};else if (typeof before === 'boolean') before = {
            enabled: before
          };else if (typeof before === 'string') before = {
            classes: before
          };
          if (before.enabled === false && !$(month).hasClass('disabled')) $(month).addClass('disabled');
          if (before.classes) $(month).addClass(before.classes);
          if (before.tooltip) $(month).prop('title', before.tooltip);
        });
      } // Generating decade/years picker


      this._fill_yearsView('.datepicker-years', 'year', 10, 1, year, startYear, endYear, this.o.beforeShowYear); // Generating century/decades picker


      this._fill_yearsView('.datepicker-decades', 'decade', 100, 10, year, startYear, endYear, this.o.beforeShowDecade); // Generating millennium/centuries picker


      this._fill_yearsView('.datepicker-centuries', 'century', 1000, 100, year, startYear, endYear, this.o.beforeShowCentury);
    },
    updateNavArrows: function updateNavArrows() {
      if (!this._allow_update) return;
      var d = new Date(this.viewDate),
          year = d.getUTCFullYear(),
          month = d.getUTCMonth();

      switch (this.viewMode) {
        case 0:
          if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()) {
            this.picker.find('.prev').css({
              visibility: 'hidden'
            });
          } else {
            this.picker.find('.prev').css({
              visibility: 'visible'
            });
          }

          if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()) {
            this.picker.find('.next').css({
              visibility: 'hidden'
            });
          } else {
            this.picker.find('.next').css({
              visibility: 'visible'
            });
          }

          break;

        case 1:
        case 2:
        case 3:
        case 4:
          if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2) {
            this.picker.find('.prev').css({
              visibility: 'hidden'
            });
          } else {
            this.picker.find('.prev').css({
              visibility: 'visible'
            });
          }

          if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2) {
            this.picker.find('.next').css({
              visibility: 'hidden'
            });
          } else {
            this.picker.find('.next').css({
              visibility: 'visible'
            });
          }

          break;
      }
    },
    click: function click(e) {
      e.preventDefault();
      e.stopPropagation();
      var target, dir, day, year, month, monthChanged, yearChanged;
      target = $(e.target); // Clicked on the switch

      if (target.hasClass('datepicker-switch')) {
        this.showMode(1);
      } // Clicked on prev or next


      var navArrow = target.closest('.prev, .next');

      if (navArrow.length > 0) {
        dir = DPGlobal.modes[this.viewMode].navStep * (navArrow.hasClass('prev') ? -1 : 1);

        if (this.viewMode === 0) {
          this.viewDate = this.moveMonth(this.viewDate, dir);

          this._trigger('changeMonth', this.viewDate);
        } else {
          this.viewDate = this.moveYear(this.viewDate, dir);

          if (this.viewMode === 1) {
            this._trigger('changeYear', this.viewDate);
          }
        }

        this.fill();
      } // Clicked on today button


      if (target.hasClass('today') && !target.hasClass('day')) {
        this.showMode(-2);

        this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
      } // Clicked on clear button


      if (target.hasClass('clear')) {
        this.clearDates();
      }

      if (!target.hasClass('disabled')) {
        // Clicked on a day
        if (target.hasClass('day')) {
          day = parseInt(target.text(), 10) || 1;
          year = this.viewDate.getUTCFullYear();
          month = this.viewDate.getUTCMonth(); // From last month

          if (target.hasClass('old')) {
            if (month === 0) {
              month = 11;
              year = year - 1;
              monthChanged = true;
              yearChanged = true;
            } else {
              month = month - 1;
              monthChanged = true;
            }
          } // From next month


          if (target.hasClass('new')) {
            if (month === 11) {
              month = 0;
              year = year + 1;
              monthChanged = true;
              yearChanged = true;
            } else {
              month = month + 1;
              monthChanged = true;
            }
          }

          this._setDate(UTCDate(year, month, day));

          if (yearChanged) {
            this._trigger('changeYear', this.viewDate);
          }

          if (monthChanged) {
            this._trigger('changeMonth', this.viewDate);
          }
        } // Clicked on a month


        if (target.hasClass('month')) {
          this.viewDate.setUTCDate(1);
          day = 1;
          month = target.parent().find('span').index(target);
          year = this.viewDate.getUTCFullYear();
          this.viewDate.setUTCMonth(month);

          this._trigger('changeMonth', this.viewDate);

          if (this.o.minViewMode === 1) {
            this._setDate(UTCDate(year, month, day));

            this.showMode();
          } else {
            this.showMode(-1);
          }

          this.fill();
        } // Clicked on a year


        if (target.hasClass('year') || target.hasClass('decade') || target.hasClass('century')) {
          this.viewDate.setUTCDate(1);
          day = 1;
          month = 0;
          year = parseInt(target.text(), 10) || 0;
          this.viewDate.setUTCFullYear(year);

          if (target.hasClass('year')) {
            this._trigger('changeYear', this.viewDate);

            if (this.o.minViewMode === 2) {
              this._setDate(UTCDate(year, month, day));
            }
          }

          if (target.hasClass('decade')) {
            this._trigger('changeDecade', this.viewDate);

            if (this.o.minViewMode === 3) {
              this._setDate(UTCDate(year, month, day));
            }
          }

          if (target.hasClass('century')) {
            this._trigger('changeCentury', this.viewDate);

            if (this.o.minViewMode === 4) {
              this._setDate(UTCDate(year, month, day));
            }
          }

          this.showMode(-1);
          this.fill();
        }
      }

      if (this.picker.is(':visible') && this._focused_from) {
        $(this._focused_from).focus();
      }

      delete this._focused_from;
    },
    _toggle_multidate: function _toggle_multidate(date) {
      var ix = this.dates.contains(date);

      if (!date) {
        this.dates.clear();
      }

      if (ix !== -1) {
        if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive) {
          this.dates.remove(ix);
        }
      } else if (this.o.multidate === false) {
        this.dates.clear();
        this.dates.push(date);
      } else {
        this.dates.push(date);
      }

      if (typeof this.o.multidate === 'number') while (this.dates.length > this.o.multidate) {
        this.dates.remove(0);
      }
    },
    _setDate: function _setDate(date, which) {
      if (!which || which === 'date') this._toggle_multidate(date && new Date(date));
      if (!which || which === 'view') this.viewDate = date && new Date(date);
      this.fill();
      this.setValue();

      if (!which || which !== 'view') {
        this._trigger('changeDate');
      }

      if (this.inputField) {
        this.inputField.change();
      }

      if (this.o.autoclose && (!which || which === 'date')) {
        this.hide();
      }
    },
    moveDay: function moveDay(date, dir) {
      var newDate = new Date(date);
      newDate.setUTCDate(date.getUTCDate() + dir);
      return newDate;
    },
    moveWeek: function moveWeek(date, dir) {
      return this.moveDay(date, dir * 7);
    },
    moveMonth: function moveMonth(date, dir) {
      if (!isValidDate(date)) return this.o.defaultViewDate;
      if (!dir) return date;
      var new_date = new Date(date.valueOf()),
          day = new_date.getUTCDate(),
          month = new_date.getUTCMonth(),
          mag = Math.abs(dir),
          new_month,
          test;
      dir = dir > 0 ? 1 : -1;

      if (mag === 1) {
        test = dir === -1 // If going back one month, make sure month is not current month
        // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
        ? function () {
          return new_date.getUTCMonth() === month;
        } // If going forward one month, make sure month is as expected
        // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
        : function () {
          return new_date.getUTCMonth() !== new_month;
        };
        new_month = month + dir;
        new_date.setUTCMonth(new_month); // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11

        if (new_month < 0 || new_month > 11) new_month = (new_month + 12) % 12;
      } else {
        // For magnitudes >1, move one month at a time...
        for (var i = 0; i < mag; i++) {
          // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
          new_date = this.moveMonth(new_date, dir);
        } // ...then reset the day, keeping it in the new month


        new_month = new_date.getUTCMonth();
        new_date.setUTCDate(day);

        test = function test() {
          return new_month !== new_date.getUTCMonth();
        };
      } // Common date-resetting loop -- if date is beyond end of month, make it
      // end of month


      while (test()) {
        new_date.setUTCDate(--day);
        new_date.setUTCMonth(new_month);
      }

      return new_date;
    },
    moveYear: function moveYear(date, dir) {
      return this.moveMonth(date, dir * 12);
    },
    moveAvailableDate: function moveAvailableDate(date, dir, fn) {
      do {
        date = this[fn](date, dir);
        if (!this.dateWithinRange(date)) return false;
        fn = 'moveDay';
      } while (this.dateIsDisabled(date));

      return date;
    },
    weekOfDateIsDisabled: function weekOfDateIsDisabled(date) {
      return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
    },
    dateIsDisabled: function dateIsDisabled(date) {
      return this.weekOfDateIsDisabled(date) || $.grep(this.o.datesDisabled, function (d) {
        return isUTCEquals(date, d);
      }).length > 0;
    },
    dateWithinRange: function dateWithinRange(date) {
      return date >= this.o.startDate && date <= this.o.endDate;
    },
    keydown: function keydown(e) {
      if (!this.picker.is(':visible')) {
        if (e.keyCode === 40 || e.keyCode === 27) {
          // allow down to re-show picker
          this.show();
          e.stopPropagation();
        }

        return;
      }

      var dateChanged = false,
          dir,
          newViewDate,
          focusDate = this.focusDate || this.viewDate;

      switch (e.keyCode) {
        case 27:
          // escape
          if (this.focusDate) {
            this.focusDate = null;
            this.viewDate = this.dates.get(-1) || this.viewDate;
            this.fill();
          } else this.hide();

          e.preventDefault();
          e.stopPropagation();
          break;

        case 37: // left

        case 38: // up

        case 39: // right

        case 40:
          // down
          if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7) break;
          dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;

          if (this.viewMode === 0) {
            if (e.ctrlKey) {
              newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
              if (newViewDate) this._trigger('changeYear', this.viewDate);
            } else if (e.shiftKey) {
              newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
              if (newViewDate) this._trigger('changeMonth', this.viewDate);
            } else if (e.keyCode === 37 || e.keyCode === 39) {
              newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
            } else if (!this.weekOfDateIsDisabled(focusDate)) {
              newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
            }
          } else if (this.viewMode === 1) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }

            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
          } else if (this.viewMode === 2) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }

            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
          }

          if (newViewDate) {
            this.focusDate = this.viewDate = newViewDate;
            this.setValue();
            this.fill();
            e.preventDefault();
          }

          break;

        case 13:
          // enter
          if (!this.o.forceParse) break;
          focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;

          if (this.o.keyboardNavigation) {
            this._toggle_multidate(focusDate);

            dateChanged = true;
          }

          this.focusDate = null;
          this.viewDate = this.dates.get(-1) || this.viewDate;
          this.setValue();
          this.fill();

          if (this.picker.is(':visible')) {
            e.preventDefault();
            e.stopPropagation();
            if (this.o.autoclose) this.hide();
          }

          break;

        case 9:
          // tab
          this.focusDate = null;
          this.viewDate = this.dates.get(-1) || this.viewDate;
          this.fill();
          this.hide();
          break;
      }

      if (dateChanged) {
        if (this.dates.length) this._trigger('changeDate');else this._trigger('clearDate');

        if (this.inputField) {
          this.inputField.change();
        }
      }
    },
    showMode: function showMode(dir) {
      if (dir) {
        this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + dir));
      }

      this.picker.children('div').hide().filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName).show();
      this.updateNavArrows();
    }
  };

  var DateRangePicker = function DateRangePicker(element, options) {
    $(element).data('datepicker', this);
    this.element = $(element);
    this.inputs = $.map(options.inputs, function (i) {
      return i.jquery ? i[0] : i;
    });
    delete options.inputs;
    datepickerPlugin.call($(this.inputs), options).on('changeDate', $.proxy(this.dateUpdated, this));
    this.pickers = $.map(this.inputs, function (i) {
      return $(i).data('datepicker');
    });
    this.updateDates();
  };

  DateRangePicker.prototype = {
    updateDates: function updateDates() {
      this.dates = $.map(this.pickers, function (i) {
        return i.getUTCDate();
      });
      this.updateRanges();
    },
    updateRanges: function updateRanges() {
      var range = $.map(this.dates, function (d) {
        return d.valueOf();
      });
      $.each(this.pickers, function (i, p) {
        p.setRange(range);
      });
    },
    dateUpdated: function dateUpdated(e) {
      // `this.updating` is a workaround for preventing infinite recursion
      // between `changeDate` triggering and `setUTCDate` calling.  Until
      // there is a better mechanism.
      if (this.updating) return;
      this.updating = true;
      var dp = $(e.target).data('datepicker');

      if (typeof dp === "undefined") {
        return;
      }

      var new_date = dp.getUTCDate(),
          i = $.inArray(e.target, this.inputs),
          j = i - 1,
          k = i + 1,
          l = this.inputs.length;
      if (i === -1) return;
      $.each(this.pickers, function (i, p) {
        if (!p.getUTCDate()) p.setUTCDate(new_date);
      });

      if (new_date < this.dates[j]) {
        // Date being moved earlier/left
        while (j >= 0 && new_date < this.dates[j]) {
          this.pickers[j--].setUTCDate(new_date);
        }
      } else if (new_date > this.dates[k]) {
        // Date being moved later/right
        while (k < l && new_date > this.dates[k]) {
          this.pickers[k++].setUTCDate(new_date);
        }
      }

      this.updateDates();
      delete this.updating;
    },
    remove: function remove() {
      $.map(this.pickers, function (p) {
        p.remove();
      });
      delete this.element.data().datepicker;
    }
  };

  function opts_from_el(el, prefix) {
    // Derive options from element data-attrs
    var data = $(el).data(),
        out = {},
        inkey,
        replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
    prefix = new RegExp('^' + prefix.toLowerCase());

    function re_lower(_, a) {
      return a.toLowerCase();
    }

    for (var key in data) {
      if (prefix.test(key)) {
        inkey = key.replace(replace, re_lower);
        out[inkey] = data[key];
      }
    }

    return out;
  }

  function opts_from_locale(lang) {
    // Derive options from locale plugins
    var out = {}; // Check if "de-DE" style date is available, if not language should
    // fallback to 2 letter code eg "de"

    if (!dates[lang]) {
      lang = lang.split('-')[0];
      if (!dates[lang]) return;
    }

    var d = dates[lang];
    $.each(locale_opts, function (i, k) {
      if (k in d) out[k] = d[k];
    });
    return out;
  }

  var old = $.fn.datepicker;

  var datepickerPlugin = function datepickerPlugin(option) {
    var args = Array.apply(null, arguments);
    args.shift();
    var internal_return;
    this.each(function () {
      var $this = $(this),
          data = $this.data('datepicker'),
          options = _typeof(option) === 'object' && option;

      if (!data) {
        var elopts = opts_from_el(this, 'date'),
            // Preliminary otions
        xopts = $.extend({}, defaults, elopts, options),
            locopts = opts_from_locale(xopts.language),
            // Options priority: js args, data-attrs, locales, defaults
        opts = $.extend({}, defaults, locopts, elopts, options);

        if ($this.hasClass('input-daterange') || opts.inputs) {
          $.extend(opts, {
            inputs: opts.inputs || $this.find('input').toArray()
          });
          data = new DateRangePicker(this, opts);
        } else {
          data = new Datepicker(this, opts);
        }

        $this.data('datepicker', data);
      }

      if (typeof option === 'string' && typeof data[option] === 'function') {
        internal_return = data[option].apply(data, args);
      }
    });
    if (internal_return === undefined || internal_return instanceof Datepicker || internal_return instanceof DateRangePicker) return this;
    if (this.length > 1) throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');else return internal_return;
  };

  $.fn.datepicker = datepickerPlugin;
  var defaults = $.fn.datepicker.defaults = {
    assumeNearbyYear: false,
    autoclose: false,
    beforeShowDay: $.noop,
    beforeShowMonth: $.noop,
    beforeShowYear: $.noop,
    beforeShowDecade: $.noop,
    beforeShowCentury: $.noop,
    calendarWeeks: false,
    clearBtn: false,
    toggleActive: false,
    daysOfWeekDisabled: [],
    daysOfWeekHighlighted: [],
    datesDisabled: [],
    endDate: Infinity,
    forceParse: true,
    format: 'mm/dd/yyyy',
    keyboardNavigation: true,
    language: 'en',
    minViewMode: 0,
    maxViewMode: 4,
    multidate: false,
    multidateSeparator: ',',
    orientation: "auto",
    rtl: false,
    startDate: -Infinity,
    startView: 0,
    todayBtn: false,
    todayHighlight: false,
    weekStart: 0,
    disableTouchKeyboard: false,
    enableOnReadonly: true,
    showOnFocus: true,
    zIndexOffset: 10,
    container: 'body',
    immediateUpdates: false,
    title: '',
    templates: {
      leftArrow: '&laquo;',
      rightArrow: '&raquo;'
    }
  };
  var locale_opts = $.fn.datepicker.locale_opts = ['format', 'rtl', 'weekStart'];
  $.fn.datepicker.Constructor = Datepicker;
  var dates = $.fn.datepicker.dates = {
    en: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: "Today",
      clear: "Clear",
      titleFormat: "MM yyyy"
    }
  };
  var DPGlobal = {
    modes: [{
      clsName: 'days',
      navFnc: 'Month',
      navStep: 1
    }, {
      clsName: 'months',
      navFnc: 'FullYear',
      navStep: 1
    }, {
      clsName: 'years',
      navFnc: 'FullYear',
      navStep: 10
    }, {
      clsName: 'decades',
      navFnc: 'FullDecade',
      navStep: 100
    }, {
      clsName: 'centuries',
      navFnc: 'FullCentury',
      navStep: 1000
    }],
    isLeapYear: function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },
    getDaysInMonth: function getDaysInMonth(year, month) {
      return [31, DPGlobal.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },
    validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
    nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
    parseFormat: function parseFormat(format) {
      if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function') return format; // IE treats \0 as a string end in inputs (truncating the value),
      // so it's a bad format delimiter, anyway

      var separators = format.replace(this.validParts, '\0').split('\0'),
          parts = format.match(this.validParts);

      if (!separators || !separators.length || !parts || parts.length === 0) {
        throw new Error("Invalid date format.");
      }

      return {
        separators: separators,
        parts: parts
      };
    },
    parseDate: function parseDate(date, format, language, assumeNearby) {
      if (!date) return undefined;
      if (date instanceof Date) return date;
      if (typeof format === 'string') format = DPGlobal.parseFormat(format);
      if (format.toValue) return format.toValue(date, format, language);
      var part_re = /([\-+]\d+)([dmwy])/,
          parts = date.match(/([\-+]\d+)([dmwy])/g),
          fn_map = {
        d: 'moveDay',
        m: 'moveMonth',
        w: 'moveWeek',
        y: 'moveYear'
      },
          dateAliases = {
        yesterday: '-1d',
        today: '+0d',
        tomorrow: '+1d'
      },
          part,
          dir,
          i,
          fn;

      if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
        date = new Date();

        for (i = 0; i < parts.length; i++) {
          part = part_re.exec(parts[i]);
          dir = parseInt(part[1]);
          fn = fn_map[part[2]];
          date = Datepicker.prototype[fn](date, dir);
        }

        return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
      }

      if (typeof dateAliases[date] !== 'undefined') {
        date = dateAliases[date];
        parts = date.match(/([\-+]\d+)([dmwy])/g);

        if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
          date = new Date();

          for (i = 0; i < parts.length; i++) {
            part = part_re.exec(parts[i]);
            dir = parseInt(part[1]);
            fn = fn_map[part[2]];
            date = Datepicker.prototype[fn](date, dir);
          }

          return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
        }
      }

      parts = date && date.match(this.nonpunctuation) || [];
      date = new Date();

      function applyNearbyYear(year, threshold) {
        if (threshold === true) threshold = 10; // if year is 2 digits or less, than the user most likely is trying to get a recent century

        if (year < 100) {
          year += 2000; // if the new year is more than threshold years in advance, use last century

          if (year > new Date().getFullYear() + threshold) {
            year -= 100;
          }
        }

        return year;
      }

      var parsed = {},
          setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
          setters_map = {
        yyyy: function yyyy(d, v) {
          return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
        },
        yy: function yy(d, v) {
          return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
        },
        m: function m(d, v) {
          if (isNaN(d)) return d;
          v -= 1;

          while (v < 0) {
            v += 12;
          }

          v %= 12;
          d.setUTCMonth(v);

          while (d.getUTCMonth() !== v) {
            d.setUTCDate(d.getUTCDate() - 1);
          }

          return d;
        },
        d: function d(_d, v) {
          return _d.setUTCDate(v);
        }
      },
          val,
          filtered;
      setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
      setters_map['dd'] = setters_map['d'];
      date = UTCToday();
      var fparts = format.parts.slice(); // Remove noop parts

      if (parts.length !== fparts.length) {
        fparts = $(fparts).filter(function (i, p) {
          return $.inArray(p, setters_order) !== -1;
        }).toArray();
      } // Process remainder


      function match_part() {
        var m = this.slice(0, parts[i].length),
            p = parts[i].slice(0, m.length);
        return m.toLowerCase() === p.toLowerCase();
      }

      if (parts.length === fparts.length) {
        var cnt;

        for (i = 0, cnt = fparts.length; i < cnt; i++) {
          val = parseInt(parts[i], 10);
          part = fparts[i];

          if (isNaN(val)) {
            switch (part) {
              case 'MM':
                filtered = $(dates[language].months).filter(match_part);
                val = $.inArray(filtered[0], dates[language].months) + 1;
                break;

              case 'M':
                filtered = $(dates[language].monthsShort).filter(match_part);
                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                break;
            }
          }

          parsed[part] = val;
        }

        var _date, s;

        for (i = 0; i < setters_order.length; i++) {
          s = setters_order[i];

          if (s in parsed && !isNaN(parsed[s])) {
            _date = new Date(date);
            setters_map[s](_date, parsed[s]);
            if (!isNaN(_date)) date = _date;
          }
        }
      }

      return date;
    },
    formatDate: function formatDate(date, format, language) {
      if (!date) return '';
      if (typeof format === 'string') format = DPGlobal.parseFormat(format);
      if (format.toDisplay) return format.toDisplay(date, format, language);
      var val = {
        d: date.getUTCDate(),
        D: dates[language].daysShort[date.getUTCDay()],
        DD: dates[language].days[date.getUTCDay()],
        m: date.getUTCMonth() + 1,
        M: dates[language].monthsShort[date.getUTCMonth()],
        MM: dates[language].months[date.getUTCMonth()],
        yy: date.getUTCFullYear().toString().substring(2),
        yyyy: date.getUTCFullYear()
      };
      val.dd = (val.d < 10 ? '0' : '') + val.d;
      val.mm = (val.m < 10 ? '0' : '') + val.m;
      date = [];
      var seps = $.extend([], format.separators);

      for (var i = 0, cnt = format.parts.length; i <= cnt; i++) {
        if (seps.length) date.push(seps.shift());
        date.push(val[format.parts[i]]);
      }

      return date.join('');
    },
    headTemplate: '<thead>' + '<tr>' + '<th colspan="7" class="datepicker-title"></th>' + '</tr>' + '<tr>' + '<th class="prev">&laquo;</th>' + '<th colspan="5" class="datepicker-switch"></th>' + '<th class="next">&raquo;</th>' + '</tr>' + '</thead>',
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot>' + '<tr>' + '<th colspan="7" class="today"></th>' + '</tr>' + '<tr>' + '<th colspan="7" class="clear"></th>' + '</tr>' + '</tfoot>'
  };
  DPGlobal.template = '<div class="datepicker">' + '<div class="datepicker-days">' + '<table class="table-condensed">' + DPGlobal.headTemplate + '<tbody></tbody>' + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-months">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-years">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-decades">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-centuries">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '</div>';
  $.fn.datepicker.DPGlobal = DPGlobal;
  /* DATEPICKER NO CONFLICT
  * =================== */

  $.fn.datepicker.noConflict = function () {
    $.fn.datepicker = old;
    return this;
  };
  /* DATEPICKER VERSION
   * =================== */


  $.fn.datepicker.version = '1.6.4';
  /* DATEPICKER DATA-API
  * ================== */

  $(document).on('focus.datepicker.data-api click.datepicker.data-api', '[data-provide="datepicker"]', function (e) {
    var $this = $(this);
    if ($this.data('datepicker')) return;
    e.preventDefault(); // component click requires us to explicitly show it

    datepickerPlugin.call($this, 'show');
  });
  $(function () {
    datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
  });
});

/***/ }),

/***/ "./public/assets/css/bootstrap-grid.min.css":
/*!**************************************************!*\
  !*** ./public/assets/css/bootstrap-grid.min.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./public/assets/css/bootstrap-reboot.min.css":
/*!****************************************************!*\
  !*** ./public/assets/css/bootstrap-reboot.min.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./public/assets/css/bootstrap.min.css":
/*!*********************************************!*\
  !*** ./public/assets/css/bootstrap.min.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./public/assets/js/bootstrap.bundle.min.js":
/*!**************************************************!*\
  !*** ./public/assets/js/bootstrap.bundle.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? e(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t, e) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function c(r) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? arguments[t] : {},
          e = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function (t) {
        return Object.getOwnPropertyDescriptor(o, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, i;
        e = r, i = o[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i;
      });
    }

    return r;
  }

  for (var r, n, o, a, l, f, h, u, d, p, g, m, _, v, E, y, b, T, C, w, I, D, A, S, O, N, k, L, P, x, j, M, R, H, W, F, U, B, K, V, Q, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, ot, st, at, lt, ct, ft, ht, ut, dt, pt, gt = function (i) {
    var e = "transitionend";

    function t(t) {
      var e = this,
          n = !1;
      return i(this).one(l.TRANSITION_END, function () {
        n = !0;
      }), setTimeout(function () {
        n || l.triggerTransitionEnd(e);
      }, t), this;
    }

    var l = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function getUID(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {
          ;
        }

        return t;
      },
      getSelectorFromElement: function getSelectorFromElement(t) {
        var e = t.getAttribute("data-target");
        e && "#" !== e || (e = t.getAttribute("href") || "");

        try {
          return 0 < i(document).find(e).length ? e : null;
        } catch (t) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
        if (!t) return 0;
        var e = i(t).css("transition-duration");
        return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0;
      },
      reflow: function reflow(t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(t) {
        i(t).trigger(e);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      },
      isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(t, e, n) {
        for (var i in n) {
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i],
                o = e[i],
                s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
            if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".');
          }
        }

        var a;
      }
    };
    return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function handle(t) {
        if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      }
    }, l;
  }(e = e && e.hasOwnProperty("default") ? e["default"] : e), mt = (n = "alert", a = "." + (o = "bs.alert"), l = (r = e).fn[n], f = {
    CLOSE: "close" + a,
    CLOSED: "closed" + a,
    CLICK_DATA_API: "click" + a + ".data-api"
  }, h = "alert", u = "fade", d = "show", p = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.close = function (t) {
      var e = this._element;
      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      r.removeData(this._element, o), this._element = null;
    }, t._getRootElement = function (t) {
      var e = gt.getSelectorFromElement(t),
          n = !1;
      return e && (n = r(e)[0]), n || (n = r(t).closest("." + h)[0]), n;
    }, t._triggerCloseEvent = function (t) {
      var e = r.Event(f.CLOSE);
      return r(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;

      if (r(e).removeClass(d), r(e).hasClass(u)) {
        var t = gt.getTransitionDurationFromElement(e);
        r(e).one(gt.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      r(t).detach().trigger(f.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = r(this),
            e = t.data(o);
        e || (e = new i(this), t.data(o, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }]), i;
  }(), r(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), r.fn[n] = p._jQueryInterface, r.fn[n].Constructor = p, r.fn[n].noConflict = function () {
    return r.fn[n] = l, p._jQueryInterface;
  }, p), _t = (m = "button", v = "." + (_ = "bs.button"), E = ".data-api", y = (g = e).fn[m], b = "active", T = "btn", w = '[data-toggle^="button"]', I = '[data-toggle="buttons"]', D = "input", A = ".active", S = ".btn", O = {
    CLICK_DATA_API: "click" + v + E,
    FOCUS_BLUR_DATA_API: (C = "focus") + v + E + " blur" + v + E
  }, N = function () {
    function n(t) {
      this._element = t;
    }

    var t = n.prototype;
    return t.toggle = function () {
      var t = !0,
          e = !0,
          n = g(this._element).closest(I)[0];

      if (n) {
        var i = g(this._element).find(D)[0];

        if (i) {
          if ("radio" === i.type) if (i.checked && g(this._element).hasClass(b)) t = !1;else {
            var r = g(n).find(A)[0];
            r && g(r).removeClass(b);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !g(this._element).hasClass(b), g(i).trigger("change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !g(this._element).hasClass(b)), t && g(this._element).toggleClass(b);
    }, t.dispose = function () {
      g.removeData(this._element, _), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(_);
        t || (t = new n(this), g(this).data(_, t)), "toggle" === e && t[e]();
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }]), n;
  }(), g(document).on(O.CLICK_DATA_API, w, function (t) {
    t.preventDefault();
    var e = t.target;
    g(e).hasClass(T) || (e = g(e).closest(S)), N._jQueryInterface.call(g(e), "toggle");
  }).on(O.FOCUS_BLUR_DATA_API, w, function (t) {
    var e = g(t.target).closest(S)[0];
    g(e).toggleClass(C, /^focus(in)?$/.test(t.type));
  }), g.fn[m] = N._jQueryInterface, g.fn[m].Constructor = N, g.fn[m].noConflict = function () {
    return g.fn[m] = y, N._jQueryInterface;
  }, N), vt = (L = "carousel", x = "." + (P = "bs.carousel"), j = ".data-api", M = (k = e).fn[L], R = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0
  }, H = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean"
  }, W = "next", F = "prev", U = "left", B = "right", K = {
    SLIDE: "slide" + x,
    SLID: "slid" + x,
    KEYDOWN: "keydown" + x,
    MOUSEENTER: "mouseenter" + x,
    MOUSELEAVE: "mouseleave" + x,
    TOUCHEND: "touchend" + x,
    LOAD_DATA_API: "load" + x + j,
    CLICK_DATA_API: "click" + x + j
  }, V = "carousel", Q = "active", Y = "slide", G = "carousel-item-right", q = "carousel-item-left", z = "carousel-item-next", X = "carousel-item-prev", J = {
    ACTIVE: ".active",
    ACTIVE_ITEM: ".active.carousel-item",
    ITEM: ".carousel-item",
    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
    INDICATORS: ".carousel-indicators",
    DATA_SLIDE: "[data-slide], [data-slide-to]",
    DATA_RIDE: '[data-ride="carousel"]'
  }, Z = function () {
    function o(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = k(t)[0], this._indicatorsElement = k(this._element).find(J.INDICATORS)[0], this._addEventListeners();
    }

    var t = o.prototype;
    return t.next = function () {
      this._isSliding || this._slide(W);
    }, t.nextWhenVisible = function () {
      !document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(F);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), k(this._element).find(J.NEXT_PREV)[0] && (gt.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;
      this._activeElement = k(this._element).find(J.ACTIVE_ITEM)[0];

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) k(this._element).one(K.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = n < t ? W : F;

        this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      k(this._element).off(x), k.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = c({}, R, t), gt.typeCheckConfig(L, t, H), t;
    }, t._addEventListeners = function () {
      var e = this;
      this._config.keyboard && k(this._element).on(K.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && (k(this._element).on(K.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(K.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), ("ontouchstart" in document.documentElement) && k(this._element).on(K.TOUCHEND, function () {
        e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
          return e.cycle(t);
        }, 500 + e._config.interval);
      }));
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;

        case 39:
          t.preventDefault(), this.next();
      }
    }, t._getItemIndex = function (t) {
      return this._items = k.makeArray(k(t).parent().find(J.ITEM)), this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === W,
          i = t === F,
          r = this._getItemIndex(e),
          o = this._items.length - 1;

      if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
      var s = (r + (t === F ? -1 : 1)) % this._items.length;
      return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(k(this._element).find(J.ACTIVE_ITEM)[0]),
          r = k.Event(K.SLIDE, {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });

      return k(this._element).trigger(r), r;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        k(this._indicatorsElement).find(J.ACTIVE).removeClass(Q);

        var e = this._indicatorsElement.children[this._getItemIndex(t)];

        e && k(e).addClass(Q);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          r,
          o = this,
          s = k(this._element).find(J.ACTIVE_ITEM)[0],
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          c = this._getItemIndex(l),
          f = Boolean(this._interval);

      if (t === W ? (n = q, i = z, r = U) : (n = G, i = X, r = B), l && k(l).hasClass(Q)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
        this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(l);
        var h = k.Event(K.SLID, {
          relatedTarget: l,
          direction: r,
          from: a,
          to: c
        });

        if (k(this._element).hasClass(Y)) {
          k(l).addClass(i), gt.reflow(l), k(s).addClass(n), k(l).addClass(n);
          var u = gt.getTransitionDurationFromElement(s);
          k(s).one(gt.TRANSITION_END, function () {
            k(l).removeClass(n + " " + i).addClass(Q), k(s).removeClass(Q + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
              return k(o._element).trigger(h);
            }, 0);
          }).emulateTransitionEnd(u);
        } else k(s).removeClass(Q), k(l).addClass(Q), this._isSliding = !1, k(this._element).trigger(h);

        f && this.cycle();
      }
    }, o._jQueryInterface = function (i) {
      return this.each(function () {
        var t = k(this).data(P),
            e = c({}, R, k(this).data());
        "object" == _typeof(i) && (e = c({}, e, i));
        var n = "string" == typeof i ? i : e.slide;
        if (t || (t = new o(this, e), k(this).data(P, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        } else e.interval && (t.pause(), t.cycle());
      });
    }, o._dataApiClickHandler = function (t) {
      var e = gt.getSelectorFromElement(this);

      if (e) {
        var n = k(e)[0];

        if (n && k(n).hasClass(V)) {
          var i = c({}, k(n).data(), k(this).data()),
              r = this.getAttribute("data-slide-to");
          r && (i.interval = !1), o._jQueryInterface.call(k(n), i), r && k(n).data(P).to(r), t.preventDefault();
        }
      }
    }, s(o, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return R;
      }
    }]), o;
  }(), k(document).on(K.CLICK_DATA_API, J.DATA_SLIDE, Z._dataApiClickHandler), k(window).on(K.LOAD_DATA_API, function () {
    k(J.DATA_RIDE).each(function () {
      var t = k(this);

      Z._jQueryInterface.call(t, t.data());
    });
  }), k.fn[L] = Z._jQueryInterface, k.fn[L].Constructor = Z, k.fn[L].noConflict = function () {
    return k.fn[L] = M, Z._jQueryInterface;
  }, Z), Et = (tt = "collapse", nt = "." + (et = "bs.collapse"), it = ($ = e).fn[tt], rt = {
    toggle: !0,
    parent: ""
  }, ot = {
    toggle: "boolean",
    parent: "(string|element)"
  }, st = {
    SHOW: "show" + nt,
    SHOWN: "shown" + nt,
    HIDE: "hide" + nt,
    HIDDEN: "hidden" + nt,
    CLICK_DATA_API: "click" + nt + ".data-api"
  }, at = "show", lt = "collapse", ct = "collapsing", ft = "collapsed", ht = "width", ut = "height", dt = {
    ACTIVES: ".show, .collapsing",
    DATA_TOGGLE: '[data-toggle="collapse"]'
  }, pt = function () {
    function a(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));

      for (var n = $(dt.DATA_TOGGLE), i = 0; i < n.length; i++) {
        var r = n[i],
            o = gt.getSelectorFromElement(r);
        null !== o && 0 < $(o).filter(t).length && (this._selector = o, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var t = a.prototype;
    return t.toggle = function () {
      $(this._element).hasClass(at) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;

      if (!this._isTransitioning && !$(this._element).hasClass(at) && (this._parent && 0 === (t = $.makeArray($(this._parent).find(dt.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = $(t).not(this._selector).data(et)) && e._isTransitioning))) {
        var i = $.Event(st.SHOW);

        if ($(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call($(t).not(this._selector), "hide"), e || $(t).data(et, null));

          var r = this._getDimension();

          $(this._element).removeClass(lt).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && $(this._triggerArray).removeClass(ft).attr("aria-expanded", !0), this.setTransitioning(!0);
          var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
              s = gt.getTransitionDurationFromElement(this._element);
          $(this._element).one(gt.TRANSITION_END, function () {
            $(n._element).removeClass(ct).addClass(lt).addClass(at), n._element.style[r] = "", n.setTransitioning(!1), $(n._element).trigger(st.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;

      if (!this._isTransitioning && $(this._element).hasClass(at)) {
        var e = $.Event(st.HIDE);

        if ($(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();

          if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", gt.reflow(this._element), $(this._element).addClass(ct).removeClass(lt).removeClass(at), 0 < this._triggerArray.length) for (var i = 0; i < this._triggerArray.length; i++) {
            var r = this._triggerArray[i],
                o = gt.getSelectorFromElement(r);
            if (null !== o) $(o).hasClass(at) || $(r).addClass(ft).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";
          var s = gt.getTransitionDurationFromElement(this._element);
          $(this._element).one(gt.TRANSITION_END, function () {
            t.setTransitioning(!1), $(t._element).removeClass(ct).addClass(lt).trigger(st.HIDDEN);
          }).emulateTransitionEnd(s);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      $.removeData(this._element, et), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = c({}, rt, t)).toggle = Boolean(t.toggle), gt.typeCheckConfig(tt, t, ot), t;
    }, t._getDimension = function () {
      return $(this._element).hasClass(ht) ? ht : ut;
    }, t._getParent = function () {
      var n = this,
          t = null;
      gt.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = $(this._config.parent)[0];
      var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
      return $(t).find(e).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      if (t) {
        var n = $(t).hasClass(at);
        0 < e.length && $(e).toggleClass(ft, !n).attr("aria-expanded", n);
      }
    }, a._getTargetFromElement = function (t) {
      var e = gt.getSelectorFromElement(t);
      return e ? $(e)[0] : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = $(this),
            e = t.data(et),
            n = c({}, rt, t.data(), "object" == _typeof(i) && i ? i : {});

        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(et, e)), "string" == typeof i) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
          e[i]();
        }
      });
    }, s(a, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return rt;
      }
    }]), a;
  }(), $(document).on(st.CLICK_DATA_API, dt.DATA_TOGGLE, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var n = $(this),
        e = gt.getSelectorFromElement(this);
    $(e).each(function () {
      var t = $(this),
          e = t.data(et) ? "toggle" : n.data();

      pt._jQueryInterface.call(t, e);
    });
  }), $.fn[tt] = pt._jQueryInterface, $.fn[tt].Constructor = pt, $.fn[tt].noConflict = function () {
    return $.fn[tt] = it, pt._jQueryInterface;
  }, pt), yt = "undefined" != typeof window && "undefined" != typeof document, bt = ["Edge", "Trident", "Firefox"], Tt = 0, Ct = 0; Ct < bt.length; Ct += 1) {
    if (yt && 0 <= navigator.userAgent.indexOf(bt[Ct])) {
      Tt = 1;
      break;
    }
  }

  var wt = yt && window.Promise ? function (t) {
    var e = !1;
    return function () {
      e || (e = !0, window.Promise.resolve().then(function () {
        e = !1, t();
      }));
    };
  } : function (t) {
    var e = !1;
    return function () {
      e || (e = !0, setTimeout(function () {
        e = !1, t();
      }, Tt));
    };
  };

  function It(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }

  function Dt(t, e) {
    if (1 !== t.nodeType) return [];
    var n = getComputedStyle(t, null);
    return e ? n[e] : n;
  }

  function At(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }

  function St(t) {
    if (!t) return document.body;

    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;

      case "#document":
        return t.body;
    }

    var e = Dt(t),
        n = e.overflow,
        i = e.overflowX,
        r = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + r + i) ? t : St(At(t));
  }

  var Ot = yt && !(!window.MSInputMethodContext || !document.documentMode),
      Nt = yt && /MSIE 10/.test(navigator.userAgent);

  function kt(t) {
    return 11 === t ? Ot : 10 === t ? Nt : Ot || Nt;
  }

  function Lt(t) {
    if (!t) return document.documentElement;

    for (var e = kt(10) ? document.body : null, n = t.offsetParent; n === e && t.nextElementSibling;) {
      n = (t = t.nextElementSibling).offsetParent;
    }

    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === Dt(n, "position") ? Lt(n) : n : t ? t.ownerDocument.documentElement : document.documentElement;
  }

  function Pt(t) {
    return null !== t.parentNode ? Pt(t.parentNode) : t;
  }

  function xt(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? t : e,
        r = n ? e : t,
        o = document.createRange();
    o.setStart(i, 0), o.setEnd(r, 0);
    var s,
        a,
        l = o.commonAncestorContainer;
    if (t !== l && e !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && Lt(s.firstElementChild) !== s ? Lt(l) : l;
    var c = Pt(t);
    return c.host ? xt(c.host, e) : xt(t, Pt(e).host);
  }

  function jt(t) {
    var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = t.nodeName;

    if ("BODY" === n || "HTML" === n) {
      var i = t.ownerDocument.documentElement;
      return (t.ownerDocument.scrollingElement || i)[e];
    }

    return t[e];
  }

  function Mt(t, e) {
    var n = "x" === e ? "Left" : "Top",
        i = "Left" === n ? "Right" : "Bottom";
    return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10);
  }

  function Rt(t, e, n, i) {
    return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], kt(10) ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0);
  }

  function Ht() {
    var t = document.body,
        e = document.documentElement,
        n = kt(10) && getComputedStyle(e);
    return {
      height: Rt("Height", t, e, n),
      width: Rt("Width", t, e, n)
    };
  }

  var Wt = function Wt(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  },
      Ft = function () {
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    return function (t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    };
  }(),
      Ut = function Ut(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  },
      Bt = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
    }

    return t;
  };

  function Kt(t) {
    return Bt({}, t, {
      right: t.left + t.width,
      bottom: t.top + t.height
    });
  }

  function Vt(t) {
    var e = {};

    try {
      if (kt(10)) {
        e = t.getBoundingClientRect();
        var n = jt(t, "top"),
            i = jt(t, "left");
        e.top += n, e.left += i, e.bottom += n, e.right += i;
      } else e = t.getBoundingClientRect();
    } catch (t) {}

    var r = {
      left: e.left,
      top: e.top,
      width: e.right - e.left,
      height: e.bottom - e.top
    },
        o = "HTML" === t.nodeName ? Ht() : {},
        s = o.width || t.clientWidth || r.right - r.left,
        a = o.height || t.clientHeight || r.bottom - r.top,
        l = t.offsetWidth - s,
        c = t.offsetHeight - a;

    if (l || c) {
      var f = Dt(t);
      l -= Mt(f, "x"), c -= Mt(f, "y"), r.width -= l, r.height -= c;
    }

    return Kt(r);
  }

  function Qt(t, e) {
    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = kt(10),
        r = "HTML" === e.nodeName,
        o = Vt(t),
        s = Vt(e),
        a = St(t),
        l = Dt(e),
        c = parseFloat(l.borderTopWidth, 10),
        f = parseFloat(l.borderLeftWidth, 10);
    n && "HTML" === e.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
    var h = Kt({
      top: o.top - s.top - c,
      left: o.left - s.left - f,
      width: o.width,
      height: o.height
    });

    if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
      var u = parseFloat(l.marginTop, 10),
          d = parseFloat(l.marginLeft, 10);
      h.top -= c - u, h.bottom -= c - u, h.left -= f - d, h.right -= f - d, h.marginTop = u, h.marginLeft = d;
    }

    return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (h = function (t, e) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
          i = jt(e, "top"),
          r = jt(e, "left"),
          o = n ? -1 : 1;
      return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t;
    }(h, e)), h;
  }

  function Yt(t) {
    if (!t || !t.parentElement || kt()) return document.documentElement;

    for (var e = t.parentElement; e && "none" === Dt(e, "transform");) {
      e = e.parentElement;
    }

    return e || document.documentElement;
  }

  function Gt(t, e, n, i) {
    var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        o = {
      top: 0,
      left: 0
    },
        s = r ? Yt(t) : xt(t, e);
    if ("viewport" === i) o = function (t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          n = t.ownerDocument.documentElement,
          i = Qt(t, n),
          r = Math.max(n.clientWidth, window.innerWidth || 0),
          o = Math.max(n.clientHeight, window.innerHeight || 0),
          s = e ? 0 : jt(n),
          a = e ? 0 : jt(n, "left");
      return Kt({
        top: s - i.top + i.marginTop,
        left: a - i.left + i.marginLeft,
        width: r,
        height: o
      });
    }(s, r);else {
      var a = void 0;
      "scrollParent" === i ? "BODY" === (a = St(At(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
      var l = Qt(a, s, r);
      if ("HTML" !== a.nodeName || function t(e) {
        var n = e.nodeName;
        return "BODY" !== n && "HTML" !== n && ("fixed" === Dt(e, "position") || t(At(e)));
      }(s)) o = l;else {
        var c = Ht(),
            f = c.height,
            h = c.width;
        o.top += l.top - l.marginTop, o.bottom = f + l.top, o.left += l.left - l.marginLeft, o.right = h + l.left;
      }
    }
    return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o;
  }

  function qt(t, e, i, n, r) {
    var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var s = Gt(i, n, o, r),
        a = {
      top: {
        width: s.width,
        height: e.top - s.top
      },
      right: {
        width: s.right - e.right,
        height: s.height
      },
      bottom: {
        width: s.width,
        height: s.bottom - e.bottom
      },
      left: {
        width: e.left - s.left,
        height: s.height
      }
    },
        l = Object.keys(a).map(function (t) {
      return Bt({
        key: t
      }, a[t], {
        area: (e = a[t], e.width * e.height)
      });
      var e;
    }).sort(function (t, e) {
      return e.area - t.area;
    }),
        c = l.filter(function (t) {
      var e = t.width,
          n = t.height;
      return e >= i.clientWidth && n >= i.clientHeight;
    }),
        f = 0 < c.length ? c[0].key : l[0].key,
        h = t.split("-")[1];
    return f + (h ? "-" + h : "");
  }

  function zt(t, e, n) {
    var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return Qt(n, i ? Yt(e) : xt(e, n), i);
  }

  function Xt(t) {
    var e = getComputedStyle(t),
        n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
        i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
    return {
      width: t.offsetWidth + i,
      height: t.offsetHeight + n
    };
  }

  function Jt(t) {
    var e = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }

  function Zt(t, e, n) {
    n = n.split("-")[0];
    var i = Xt(t),
        r = {
      width: i.width,
      height: i.height
    },
        o = -1 !== ["right", "left"].indexOf(n),
        s = o ? "top" : "left",
        a = o ? "left" : "top",
        l = o ? "height" : "width",
        c = o ? "width" : "height";
    return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[Jt(a)], r;
  }

  function $t(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }

  function te(t, n, e) {
    return (void 0 === e ? t : t.slice(0, function (t, e, n) {
      if (Array.prototype.findIndex) return t.findIndex(function (t) {
        return t[e] === n;
      });
      var i = $t(t, function (t) {
        return t[e] === n;
      });
      return t.indexOf(i);
    }(t, "name", e))).forEach(function (t) {
      t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var e = t["function"] || t.fn;
      t.enabled && It(e) && (n.offsets.popper = Kt(n.offsets.popper), n.offsets.reference = Kt(n.offsets.reference), n = e(n, t));
    }), n;
  }

  function ee(t, n) {
    return t.some(function (t) {
      var e = t.name;
      return t.enabled && e === n;
    });
  }

  function ne(t) {
    for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
      var r = e[i],
          o = r ? "" + r + n : t;
      if ("undefined" != typeof document.body.style[o]) return o;
    }

    return null;
  }

  function ie(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }

  function re(t, e, n, i) {
    n.updateBound = i, ie(t).addEventListener("resize", n.updateBound, {
      passive: !0
    });
    var r = St(t);
    return function t(e, n, i, r) {
      var o = "BODY" === e.nodeName,
          s = o ? e.ownerDocument.defaultView : e;
      s.addEventListener(n, i, {
        passive: !0
      }), o || t(St(s.parentNode), n, i, r), r.push(s);
    }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n;
  }

  function oe() {
    var t, e;
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, ie(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
      t.removeEventListener("scroll", e.updateBound);
    }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e));
  }

  function se(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }

  function ae(n, i) {
    Object.keys(i).forEach(function (t) {
      var e = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && se(i[t]) && (e = "px"), n.style[t] = i[t] + e;
    });
  }

  function le(t, e, n) {
    var i = $t(t, function (t) {
      return t.name === e;
    }),
        r = !!i && t.some(function (t) {
      return t.name === n && t.enabled && t.order < i.order;
    });

    if (!r) {
      var o = "`" + e + "`",
          s = "`" + n + "`";
      console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
    }

    return r;
  }

  var ce = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      fe = ce.slice(3);

  function he(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = fe.indexOf(t),
        i = fe.slice(n + 1).concat(fe.slice(0, n));
    return e ? i.reverse() : i;
  }

  var ue = {
    FLIP: "flip",
    CLOCKWISE: "clockwise",
    COUNTERCLOCKWISE: "counterclockwise"
  };

  function de(t, r, o, e) {
    var s = [0, 0],
        a = -1 !== ["right", "left"].indexOf(e),
        n = t.split(/(\+|\-)/).map(function (t) {
      return t.trim();
    }),
        i = n.indexOf($t(n, function (t) {
      return -1 !== t.search(/,|\s/);
    }));
    n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var l = /\s*,\s*|\s+/,
        c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
    return (c = c.map(function (t, e) {
      var n = (1 === e ? !a : a) ? "height" : "width",
          i = !1;
      return t.reduce(function (t, e) {
        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, i = !0, t) : i ? (t[t.length - 1] += e, i = !1, t) : t.concat(e);
      }, []).map(function (t) {
        return function (t, e, n, i) {
          var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              o = +r[1],
              s = r[2];
          if (!o) return t;

          if (0 === s.indexOf("%")) {
            var a = void 0;

            switch (s) {
              case "%p":
                a = n;
                break;

              case "%":
              case "%r":
              default:
                a = i;
            }

            return Kt(a)[e] / 100 * o;
          }

          if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
          return o;
        }(t, n, r, o);
      });
    })).forEach(function (n, i) {
      n.forEach(function (t, e) {
        se(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1));
      });
    }), s;
  }

  var pe = {
    placement: "bottom",
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];

          if (i) {
            var r = t.offsets,
                o = r.reference,
                s = r.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                f = {
              start: Ut({}, l, o[l]),
              end: Ut({}, l, o[l] + o[c] - s[c])
            };
            t.offsets.popper = Bt({}, s, f[i]);
          }

          return t;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: function fn(t, e) {
          var n = e.offset,
              i = t.placement,
              r = t.offsets,
              o = r.popper,
              s = r.reference,
              a = i.split("-")[0],
              l = void 0;
          return l = se(+n) ? [+n, 0] : de(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t;
        },
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(t, i) {
          var e = i.boundariesElement || Lt(t.instance.popper);
          t.instance.reference === e && (e = Lt(e));
          var n = ne("transform"),
              r = t.instance.popper.style,
              o = r.top,
              s = r.left,
              a = r[n];
          r.top = "", r.left = "", r[n] = "";
          var l = Gt(t.instance.popper, t.instance.reference, i.padding, e, t.positionFixed);
          r.top = o, r.left = s, r[n] = a, i.boundaries = l;
          var c = i.priority,
              f = t.offsets.popper,
              h = {
            primary: function primary(t) {
              var e = f[t];
              return f[t] < l[t] && !i.escapeWithReference && (e = Math.max(f[t], l[t])), Ut({}, t, e);
            },
            secondary: function secondary(t) {
              var e = "right" === t ? "left" : "top",
                  n = f[e];
              return f[t] > l[t] && !i.escapeWithReference && (n = Math.min(f[e], l[t] - ("right" === t ? f.width : f.height))), Ut({}, e, n);
            }
          };
          return c.forEach(function (t) {
            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
            f = Bt({}, f, h[e](t));
          }), t.offsets.popper = f, t;
        },
        priority: ["left", "right", "top", "bottom"],
        padding: 5,
        boundariesElement: "scrollParent"
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(t) {
          var e = t.offsets,
              n = e.popper,
              i = e.reference,
              r = t.placement.split("-")[0],
              o = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(r),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
          return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(t, e) {
          var n;
          if (!le(t.instance.modifiers, "arrow", "keepTogether")) return t;
          var i = e.element;

          if ("string" == typeof i) {
            if (!(i = t.instance.popper.querySelector(i))) return t;
          } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;

          var r = t.placement.split("-")[0],
              o = t.offsets,
              s = o.popper,
              a = o.reference,
              l = -1 !== ["left", "right"].indexOf(r),
              c = l ? "height" : "width",
              f = l ? "Top" : "Left",
              h = f.toLowerCase(),
              u = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = Xt(i)[c];
          a[d] - p < s[h] && (t.offsets.popper[h] -= s[h] - (a[d] - p)), a[h] + p > s[d] && (t.offsets.popper[h] += a[h] + p - s[d]), t.offsets.popper = Kt(t.offsets.popper);

          var g = a[h] + a[c] / 2 - p / 2,
              m = Dt(t.instance.popper),
              _ = parseFloat(m["margin" + f], 10),
              v = parseFloat(m["border" + f + "Width"], 10),
              E = g - t.offsets.popper[h] - _ - v;

          return E = Math.max(Math.min(s[c] - p, E), 0), t.arrowElement = i, t.offsets.arrow = (Ut(n = {}, h, Math.round(E)), Ut(n, u, ""), n), t;
        },
        element: "[x-arrow]"
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(p, g) {
          if (ee(p.instance.modifiers, "inner")) return p;
          if (p.flipped && p.placement === p.originalPlacement) return p;
          var m = Gt(p.instance.popper, p.instance.reference, g.padding, g.boundariesElement, p.positionFixed),
              _ = p.placement.split("-")[0],
              v = Jt(_),
              E = p.placement.split("-")[1] || "",
              y = [];

          switch (g.behavior) {
            case ue.FLIP:
              y = [_, v];
              break;

            case ue.CLOCKWISE:
              y = he(_);
              break;

            case ue.COUNTERCLOCKWISE:
              y = he(_, !0);
              break;

            default:
              y = g.behavior;
          }

          return y.forEach(function (t, e) {
            if (_ !== t || y.length === e + 1) return p;
            _ = p.placement.split("-")[0], v = Jt(_);
            var n,
                i = p.offsets.popper,
                r = p.offsets.reference,
                o = Math.floor,
                s = "left" === _ && o(i.right) > o(r.left) || "right" === _ && o(i.left) < o(r.right) || "top" === _ && o(i.bottom) > o(r.top) || "bottom" === _ && o(i.top) < o(r.bottom),
                a = o(i.left) < o(m.left),
                l = o(i.right) > o(m.right),
                c = o(i.top) < o(m.top),
                f = o(i.bottom) > o(m.bottom),
                h = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && f,
                u = -1 !== ["top", "bottom"].indexOf(_),
                d = !!g.flipVariations && (u && "start" === E && a || u && "end" === E && l || !u && "start" === E && c || !u && "end" === E && f);
            (s || h || d) && (p.flipped = !0, (s || h) && (_ = y[e + 1]), d && (E = "end" === (n = E) ? "start" : "start" === n ? "end" : n), p.placement = _ + (E ? "-" + E : ""), p.offsets.popper = Bt({}, p.offsets.popper, Zt(p.instance.popper, p.offsets.reference, p.placement)), p = te(p.instance.modifiers, p, "flip"));
          }), p;
        },
        behavior: "flip",
        padding: 5,
        boundariesElement: "viewport"
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              r = i.popper,
              o = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
          return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = Jt(e), t.offsets.popper = Kt(r), t;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(t) {
          if (!le(t.instance.modifiers, "hide", "preventOverflow")) return t;
          var e = t.offsets.reference,
              n = $t(t.instance.modifiers, function (t) {
            return "preventOverflow" === t.name;
          }).boundaries;

          if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
            if (!0 === t.hide) return t;
            t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === t.hide) return t;
            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
          }

          return t;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(t, e) {
          var n = e.x,
              i = e.y,
              r = t.offsets.popper,
              o = $t(t.instance.modifiers, function (t) {
            return "applyStyle" === t.name;
          }).gpuAcceleration;
          void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
          var s = void 0 !== o ? o : e.gpuAcceleration,
              a = Vt(Lt(t.instance.popper)),
              l = {
            position: r.position
          },
              c = {
            left: Math.floor(r.left),
            top: Math.round(r.top),
            bottom: Math.round(r.bottom),
            right: Math.floor(r.right)
          },
              f = "bottom" === n ? "top" : "bottom",
              h = "right" === i ? "left" : "right",
              u = ne("transform"),
              d = void 0,
              p = void 0;
          if (p = "bottom" === f ? -a.height + c.bottom : c.top, d = "right" === h ? -a.width + c.right : c.left, s && u) l[u] = "translate3d(" + d + "px, " + p + "px, 0)", l[f] = 0, l[h] = 0, l.willChange = "transform";else {
            var g = "bottom" === f ? -1 : 1,
                m = "right" === h ? -1 : 1;
            l[f] = p * g, l[h] = d * m, l.willChange = f + ", " + h;
          }
          var _ = {
            "x-placement": t.placement
          };
          return t.attributes = Bt({}, _, t.attributes), t.styles = Bt({}, l, t.styles), t.arrowStyles = Bt({}, t.offsets.arrow, t.arrowStyles), t;
        },
        gpuAcceleration: !0,
        x: "bottom",
        y: "right"
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(t) {
          var e, n;
          return ae(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
          }), t.arrowElement && Object.keys(t.arrowStyles).length && ae(t.arrowElement, t.arrowStyles), t;
        },
        onLoad: function onLoad(t, e, n, i, r) {
          var o = zt(r, e, t, n.positionFixed),
              s = qt(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
          return e.setAttribute("x-placement", s), ae(e, {
            position: n.positionFixed ? "fixed" : "absolute"
          }), n;
        },
        gpuAcceleration: void 0
      }
    }
  },
      ge = function () {
    function o(t, e) {
      var n = this,
          i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      Wt(this, o), this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }, this.update = wt(this.update.bind(this)), this.options = Bt({}, o.Defaults, i), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(Bt({}, o.Defaults.modifiers, i.modifiers)).forEach(function (t) {
        n.options.modifiers[t] = Bt({}, o.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
        return Bt({
          name: t
        }, n.options.modifiers[t]);
      }).sort(function (t, e) {
        return t.order - e.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && It(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
      }), this.update();
      var r = this.options.eventsEnabled;
      r && this.enableEventListeners(), this.state.eventsEnabled = r;
    }

    return Ft(o, [{
      key: "update",
      value: function value() {
        return function () {
          if (!this.state.isDestroyed) {
            var t = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {}
            };
            t.offsets.reference = zt(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = qt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = Zt(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = te(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
          }
        }.call(this);
      }
    }, {
      key: "destroy",
      value: function value() {
        return function () {
          return this.state.isDestroyed = !0, ee(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ne("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      }
    }, {
      key: "enableEventListeners",
      value: function value() {
        return function () {
          this.state.eventsEnabled || (this.state = re(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      }
    }, {
      key: "disableEventListeners",
      value: function value() {
        return oe.call(this);
      }
    }]), o;
  }();

  ge.Utils = ("undefined" != typeof window ? window : global).PopperUtils, ge.placements = ce, ge.Defaults = pe;

  var me,
      _e,
      ve,
      Ee,
      ye,
      be,
      Te,
      Ce,
      we,
      Ie,
      De,
      Ae,
      Se,
      Oe,
      Ne,
      ke,
      Le,
      Pe,
      xe,
      je,
      Me,
      Re,
      He,
      We,
      Fe,
      Ue,
      Be,
      Ke,
      Ve,
      Qe,
      Ye,
      Ge,
      qe,
      ze,
      Xe,
      Je,
      Ze,
      $e,
      tn,
      en,
      nn,
      rn,
      on,
      sn,
      an,
      ln,
      cn,
      fn,
      hn,
      un,
      dn,
      pn,
      gn,
      mn,
      _n,
      vn,
      En,
      yn,
      bn,
      Tn,
      Cn,
      wn,
      In,
      Dn,
      An,
      Sn,
      On,
      Nn,
      kn,
      Ln,
      Pn,
      xn,
      jn,
      Mn,
      Rn,
      Hn,
      Wn,
      Fn,
      Un,
      Bn,
      Kn,
      Vn,
      Qn,
      Yn,
      Gn,
      qn,
      zn,
      Xn,
      Jn,
      Zn,
      $n,
      ti,
      ei,
      ni,
      ii,
      ri,
      oi,
      si,
      ai,
      li,
      ci,
      fi,
      hi,
      ui,
      di,
      pi,
      gi,
      mi,
      _i,
      vi,
      Ei,
      yi,
      bi,
      Ti = (_e = "dropdown", Ee = "." + (ve = "bs.dropdown"), ye = ".data-api", be = (me = e).fn[_e], Te = new RegExp("38|40|27"), Ce = {
    HIDE: "hide" + Ee,
    HIDDEN: "hidden" + Ee,
    SHOW: "show" + Ee,
    SHOWN: "shown" + Ee,
    CLICK: "click" + Ee,
    CLICK_DATA_API: "click" + Ee + ye,
    KEYDOWN_DATA_API: "keydown" + Ee + ye,
    KEYUP_DATA_API: "keyup" + Ee + ye
  }, we = "disabled", Ie = "show", De = "dropup", Ae = "dropright", Se = "dropleft", Oe = "dropdown-menu-right", Ne = "position-static", ke = '[data-toggle="dropdown"]', Le = ".dropdown form", Pe = ".dropdown-menu", xe = ".navbar-nav", je = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Me = "top-start", Re = "top-end", He = "bottom-start", We = "bottom-end", Fe = "right-start", Ue = "left-start", Be = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic"
  }, Ke = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string"
  }, Ve = function () {
    function l(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var t = l.prototype;
    return t.toggle = function () {
      if (!this._element.disabled && !me(this._element).hasClass(we)) {
        var t = l._getParentFromElement(this._element),
            e = me(this._menu).hasClass(Ie);

        if (l._clearMenus(), !e) {
          var n = {
            relatedTarget: this._element
          },
              i = me.Event(Ce.SHOW, n);

          if (me(t).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof ge) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
              var r = this._element;
              "parent" === this._config.reference ? r = t : gt.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && me(t).addClass(Ne), this._popper = new ge(r, this._menu, this._getPopperConfig());
            }

            "ontouchstart" in document.documentElement && 0 === me(t).closest(xe).length && me(document.body).children().on("mouseover", null, me.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), me(this._menu).toggleClass(Ie), me(t).toggleClass(Ie).trigger(me.Event(Ce.SHOWN, n));
          }
        }
      }
    }, t.dispose = function () {
      me.removeData(this._element, ve), me(this._element).off(Ee), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;
      me(this._element).on(Ce.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = c({}, this.constructor.Default, me(this._element).data(), t), gt.typeCheckConfig(_e, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = l._getParentFromElement(this._element);

        this._menu = me(t).find(Pe)[0];
      }

      return this._menu;
    }, t._getPlacement = function () {
      var t = me(this._element).parent(),
          e = He;
      return t.hasClass(De) ? (e = Me, me(this._menu).hasClass(Oe) && (e = Re)) : t.hasClass(Ae) ? e = Fe : t.hasClass(Se) ? e = Ue : me(this._menu).hasClass(Oe) && (e = We), e;
    }, t._detectNavbar = function () {
      return 0 < me(this._element).closest(".navbar").length;
    }, t._getPopperConfig = function () {
      var e = this,
          t = {};
      "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = c({}, t.offsets, e._config.offset(t.offsets) || {}), t;
      } : t.offset = this._config.offset;
      var n = {
        placement: this._getPlacement(),
        modifiers: {
          offset: t,
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (n.modifiers.applyStyle = {
        enabled: !1
      }), n;
    }, l._jQueryInterface = function (e) {
      return this.each(function () {
        var t = me(this).data(ve);

        if (t || (t = new l(this, "object" == _typeof(e) ? e : null), me(this).data(ve, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, l._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = me.makeArray(me(ke)), n = 0; n < e.length; n++) {
        var i = l._getParentFromElement(e[n]),
            r = me(e[n]).data(ve),
            o = {
          relatedTarget: e[n]
        };

        if (r) {
          var s = r._menu;

          if (me(i).hasClass(Ie) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && me.contains(i, t.target))) {
            var a = me.Event(Ce.HIDE, o);
            me(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && me(document.body).children().off("mouseover", null, me.noop), e[n].setAttribute("aria-expanded", "false"), me(s).removeClass(Ie), me(i).removeClass(Ie).trigger(me.Event(Ce.HIDDEN, o)));
          }
        }
      }
    }, l._getParentFromElement = function (t) {
      var e,
          n = gt.getSelectorFromElement(t);
      return n && (e = me(n)[0]), e || t.parentNode;
    }, l._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || me(t.target).closest(Pe).length)) : Te.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !me(this).hasClass(we))) {
        var e = l._getParentFromElement(this),
            n = me(e).hasClass(Ie);

        if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = me(e).find(je).get();

          if (0 !== i.length) {
            var r = i.indexOf(t.target);
            38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus();
          }
        } else {
          if (27 === t.which) {
            var o = me(e).find(ke)[0];
            me(o).trigger("focus");
          }

          me(this).trigger("click");
        }
      }
    }, s(l, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Be;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ke;
      }
    }]), l;
  }(), me(document).on(Ce.KEYDOWN_DATA_API, ke, Ve._dataApiKeydownHandler).on(Ce.KEYDOWN_DATA_API, Pe, Ve._dataApiKeydownHandler).on(Ce.CLICK_DATA_API + " " + Ce.KEYUP_DATA_API, Ve._clearMenus).on(Ce.CLICK_DATA_API, ke, function (t) {
    t.preventDefault(), t.stopPropagation(), Ve._jQueryInterface.call(me(this), "toggle");
  }).on(Ce.CLICK_DATA_API, Le, function (t) {
    t.stopPropagation();
  }), me.fn[_e] = Ve._jQueryInterface, me.fn[_e].Constructor = Ve, me.fn[_e].noConflict = function () {
    return me.fn[_e] = be, Ve._jQueryInterface;
  }, Ve),
      Ci = (Ye = "modal", qe = "." + (Ge = "bs.modal"), ze = (Qe = e).fn[Ye], Xe = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  }, Je = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  }, Ze = {
    HIDE: "hide" + qe,
    HIDDEN: "hidden" + qe,
    SHOW: "show" + qe,
    SHOWN: "shown" + qe,
    FOCUSIN: "focusin" + qe,
    RESIZE: "resize" + qe,
    CLICK_DISMISS: "click.dismiss" + qe,
    KEYDOWN_DISMISS: "keydown.dismiss" + qe,
    MOUSEUP_DISMISS: "mouseup.dismiss" + qe,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + qe,
    CLICK_DATA_API: "click" + qe + ".data-api"
  }, $e = "modal-scrollbar-measure", tn = "modal-backdrop", en = "modal-open", nn = "fade", rn = "show", on = {
    DIALOG: ".modal-dialog",
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    STICKY_CONTENT: ".sticky-top",
    NAVBAR_TOGGLER: ".navbar-toggler"
  }, sn = function () {
    function r(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = Qe(t).find(on.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
    }

    var t = r.prototype;
    return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;

      if (!this._isTransitioning && !this._isShown) {
        Qe(this._element).hasClass(nn) && (this._isTransitioning = !0);
        var n = Qe.Event(Ze.SHOW, {
          relatedTarget: t
        });
        Qe(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Qe(document.body).addClass(en), this._setEscapeEvent(), this._setResizeEvent(), Qe(this._element).on(Ze.CLICK_DISMISS, on.DATA_DISMISS, function (t) {
          return e.hide(t);
        }), Qe(this._dialog).on(Ze.MOUSEDOWN_DISMISS, function () {
          Qe(e._element).one(Ze.MOUSEUP_DISMISS, function (t) {
            Qe(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
        var n = Qe.Event(Ze.HIDE);

        if (Qe(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = Qe(this._element).hasClass(nn);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Qe(document).off(Ze.FOCUSIN), Qe(this._element).removeClass(rn), Qe(this._element).off(Ze.CLICK_DISMISS), Qe(this._dialog).off(Ze.MOUSEDOWN_DISMISS), i) {
            var r = gt.getTransitionDurationFromElement(this._element);
            Qe(this._element).one(gt.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      Qe.removeData(this._element, Ge), Qe(window, document, this._element, this._backdrop).off(qe), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = c({}, Xe, t), gt.typeCheckConfig(Ye, t, Je), t;
    }, t._showElement = function (t) {
      var e = this,
          n = Qe(this._element).hasClass(nn);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && gt.reflow(this._element), Qe(this._element).addClass(rn), this._config.focus && this._enforceFocus();

      var i = Qe.Event(Ze.SHOWN, {
        relatedTarget: t
      }),
          r = function r() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, Qe(e._element).trigger(i);
      };

      if (n) {
        var o = gt.getTransitionDurationFromElement(this._element);
        Qe(this._dialog).one(gt.TRANSITION_END, r).emulateTransitionEnd(o);
      } else r();
    }, t._enforceFocus = function () {
      var e = this;
      Qe(document).off(Ze.FOCUSIN).on(Ze.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === Qe(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;
      this._isShown && this._config.keyboard ? Qe(this._element).on(Ze.KEYDOWN_DISMISS, function (t) {
        27 === t.which && (t.preventDefault(), e.hide());
      }) : this._isShown || Qe(this._element).off(Ze.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;
      this._isShown ? Qe(window).on(Ze.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : Qe(window).off(Ze.RESIZE);
    }, t._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
        Qe(document.body).removeClass(en), t._resetAdjustments(), t._resetScrollbar(), Qe(t._element).trigger(Ze.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (Qe(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = Qe(this._element).hasClass(nn) ? nn : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = tn, n && Qe(this._backdrop).addClass(n), Qe(this._backdrop).appendTo(document.body), Qe(this._element).on(Ze.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), n && gt.reflow(this._backdrop), Qe(this._backdrop).addClass(rn), !t) return;
        if (!n) return void t();
        var i = gt.getTransitionDurationFromElement(this._backdrop);
        Qe(this._backdrop).one(gt.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        Qe(this._backdrop).removeClass(rn);

        var r = function r() {
          e._removeBackdrop(), t && t();
        };

        if (Qe(this._element).hasClass(nn)) {
          var o = gt.getTransitionDurationFromElement(this._backdrop);
          Qe(this._backdrop).one(gt.TRANSITION_END, r).emulateTransitionEnd(o);
        } else r();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var r = this;

      if (this._isBodyOverflowing) {
        Qe(on.FIXED_CONTENT).each(function (t, e) {
          var n = Qe(e)[0].style.paddingRight,
              i = Qe(e).css("padding-right");
          Qe(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px");
        }), Qe(on.STICKY_CONTENT).each(function (t, e) {
          var n = Qe(e)[0].style.marginRight,
              i = Qe(e).css("margin-right");
          Qe(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px");
        }), Qe(on.NAVBAR_TOGGLER).each(function (t, e) {
          var n = Qe(e)[0].style.marginRight,
              i = Qe(e).css("margin-right");
          Qe(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px");
        });
        var t = document.body.style.paddingRight,
            e = Qe(document.body).css("padding-right");
        Qe(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px");
      }
    }, t._resetScrollbar = function () {
      Qe(on.FIXED_CONTENT).each(function (t, e) {
        var n = Qe(e).data("padding-right");
        "undefined" != typeof n && Qe(e).css("padding-right", n).removeData("padding-right");
      }), Qe(on.STICKY_CONTENT + ", " + on.NAVBAR_TOGGLER).each(function (t, e) {
        var n = Qe(e).data("margin-right");
        "undefined" != typeof n && Qe(e).css("margin-right", n).removeData("margin-right");
      });
      var t = Qe(document.body).data("padding-right");
      "undefined" != typeof t && Qe(document.body).css("padding-right", t).removeData("padding-right");
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = $e, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, r._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = Qe(this).data(Ge),
            e = c({}, Xe, Qe(this).data(), "object" == _typeof(n) && n ? n : {});

        if (t || (t = new r(this, e), Qe(this).data(Ge, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n](i);
        } else e.show && t.show(i);
      });
    }, s(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Xe;
      }
    }]), r;
  }(), Qe(document).on(Ze.CLICK_DATA_API, on.DATA_TOGGLE, function (t) {
    var e,
        n = this,
        i = gt.getSelectorFromElement(this);
    i && (e = Qe(i)[0]);
    var r = Qe(e).data(Ge) ? "toggle" : c({}, Qe(e).data(), Qe(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var o = Qe(e).one(Ze.SHOW, function (t) {
      t.isDefaultPrevented() || o.one(Ze.HIDDEN, function () {
        Qe(n).is(":visible") && n.focus();
      });
    });

    sn._jQueryInterface.call(Qe(e), r, this);
  }), Qe.fn[Ye] = sn._jQueryInterface, Qe.fn[Ye].Constructor = sn, Qe.fn[Ye].noConflict = function () {
    return Qe.fn[Ye] = ze, sn._jQueryInterface;
  }, sn),
      wi = (ln = "tooltip", fn = "." + (cn = "bs.tooltip"), hn = (an = e).fn[ln], un = "bs-tooltip", dn = new RegExp("(^|\\s)" + un + "\\S+", "g"), mn = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !(gn = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    }),
    selector: !(pn = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)"
    }),
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent"
  }, vn = "out", En = {
    HIDE: "hide" + fn,
    HIDDEN: "hidden" + fn,
    SHOW: (_n = "show") + fn,
    SHOWN: "shown" + fn,
    INSERTED: "inserted" + fn,
    CLICK: "click" + fn,
    FOCUSIN: "focusin" + fn,
    FOCUSOUT: "focusout" + fn,
    MOUSEENTER: "mouseenter" + fn,
    MOUSELEAVE: "mouseleave" + fn
  }, yn = "fade", bn = "show", Tn = ".tooltip-inner", Cn = ".arrow", wn = "hover", In = "focus", Dn = "click", An = "manual", Sn = function () {
    function i(t, e) {
      if ("undefined" == typeof ge) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    var t = i.prototype;
    return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = an(t.currentTarget).data(e);
        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), an(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (an(this.getTipElement()).hasClass(bn)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), an.removeData(this.element, this.constructor.DATA_KEY), an(this.element).off(this.constructor.EVENT_KEY), an(this.element).closest(".modal").off("hide.bs.modal"), this.tip && an(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;
      if ("none" === an(this.element).css("display")) throw new Error("Please use show on visible elements");
      var t = an.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        an(this.element).trigger(t);
        var n = an.contains(this.element.ownerDocument.documentElement, this.element);
        if (t.isDefaultPrevented() || !n) return;
        var i = this.getTipElement(),
            r = gt.getUID(this.constructor.NAME);
        i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && an(i).addClass(yn);

        var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
            s = this._getAttachment(o);

        this.addAttachmentClass(s);
        var a = !1 === this.config.container ? document.body : an(this.config.container);
        an(i).data(this.constructor.DATA_KEY, this), an.contains(this.element.ownerDocument.documentElement, this.tip) || an(i).appendTo(a), an(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new ge(this.element, i, {
          placement: s,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Cn
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          },
          onUpdate: function onUpdate(t) {
            e._handlePopperPlacementChange(t);
          }
        }), an(i).addClass(bn), "ontouchstart" in document.documentElement && an(document.body).children().on("mouseover", null, an.noop);

        var l = function l() {
          e.config.animation && e._fixTransition();
          var t = e._hoverState;
          e._hoverState = null, an(e.element).trigger(e.constructor.Event.SHOWN), t === vn && e._leave(null, e);
        };

        if (an(this.tip).hasClass(yn)) {
          var c = gt.getTransitionDurationFromElement(this.tip);
          an(this.tip).one(gt.TRANSITION_END, l).emulateTransitionEnd(c);
        } else l();
      }
    }, t.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = an.Event(this.constructor.Event.HIDE),
          r = function r() {
        e._hoverState !== _n && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), an(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };

      if (an(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (an(n).removeClass(bn), "ontouchstart" in document.documentElement && an(document.body).children().off("mouseover", null, an.noop), this._activeTrigger[Dn] = !1, this._activeTrigger[In] = !1, this._activeTrigger[wn] = !1, an(this.tip).hasClass(yn)) {
          var o = gt.getTransitionDurationFromElement(n);
          an(n).one(gt.TRANSITION_END, r).emulateTransitionEnd(o);
        } else r();

        this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      an(this.getTipElement()).addClass(un + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || an(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = an(this.getTipElement());
      this.setElementContent(t.find(Tn), this.getTitle()), t.removeClass(yn + " " + bn);
    }, t.setElementContent = function (t, e) {
      var n = this.config.html;
      "object" == _typeof(e) && (e.nodeType || e.jquery) ? n ? an(e).parent().is(t) || t.empty().append(e) : t.text(an(e).text()) : t[n ? "html" : "text"](e);
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, t._getAttachment = function (t) {
      return gn[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) an(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== An) {
          var e = t === wn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === wn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          an(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }
        an(i.element).closest(".modal").on("hide.bs.modal", function () {
          return i.hide();
        });
      }), this.config.selector ? this.config = c({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));

      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || an(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), an(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? In : wn] = !0), an(e.getTipElement()).hasClass(bn) || e._hoverState === _n ? e._hoverState = _n : (clearTimeout(e._timeout), e._hoverState = _n, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === _n && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || an(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), an(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? In : wn] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = vn, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === vn && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, t._getConfig = function (t) {
      return "number" == typeof (t = c({}, this.constructor.Default, an(this.element).data(), "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), gt.typeCheckConfig(ln, t, this.constructor.DefaultType), t;
    }, t._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, t._cleanTipClass = function () {
      var t = an(this.getTipElement()),
          e = t.attr("class").match(dn);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("x-placement") && (an(t).removeClass(yn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = an(this).data(cn),
            e = "object" == _typeof(n) && n;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), an(this).data(cn, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return mn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return ln;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return cn;
      }
    }, {
      key: "Event",
      get: function get() {
        return En;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return fn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return pn;
      }
    }]), i;
  }(), an.fn[ln] = Sn._jQueryInterface, an.fn[ln].Constructor = Sn, an.fn[ln].noConflict = function () {
    return an.fn[ln] = hn, Sn._jQueryInterface;
  }, Sn),
      Ii = (Nn = "popover", Ln = "." + (kn = "bs.popover"), Pn = (On = e).fn[Nn], xn = "bs-popover", jn = new RegExp("(^|\\s)" + xn + "\\S+", "g"), Mn = c({}, wi.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }), Rn = c({}, wi.DefaultType, {
    content: "(string|element|function)"
  }), Hn = "fade", Fn = ".popover-header", Un = ".popover-body", Bn = {
    HIDE: "hide" + Ln,
    HIDDEN: "hidden" + Ln,
    SHOW: (Wn = "show") + Ln,
    SHOWN: "shown" + Ln,
    INSERTED: "inserted" + Ln,
    CLICK: "click" + Ln,
    FOCUSIN: "focusin" + Ln,
    FOCUSOUT: "focusout" + Ln,
    MOUSEENTER: "mouseenter" + Ln,
    MOUSELEAVE: "mouseleave" + Ln
  }, Kn = function (t) {
    var e, n;

    function i() {
      return t.apply(this, arguments) || this;
    }

    n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
    var r = i.prototype;
    return r.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, r.addAttachmentClass = function (t) {
      On(this.getTipElement()).addClass(xn + "-" + t);
    }, r.getTipElement = function () {
      return this.tip = this.tip || On(this.config.template)[0], this.tip;
    }, r.setContent = function () {
      var t = On(this.getTipElement());
      this.setElementContent(t.find(Fn), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Un), e), t.removeClass(Hn + " " + Wn);
    }, r._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, r._cleanTipClass = function () {
      var t = On(this.getTipElement()),
          e = t.attr("class").match(jn);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = On(this).data(kn),
            e = "object" == _typeof(n) ? n : null;

        if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), On(this).data(kn, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Mn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Nn;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return kn;
      }
    }, {
      key: "Event",
      get: function get() {
        return Bn;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Ln;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Rn;
      }
    }]), i;
  }(wi), On.fn[Nn] = Kn._jQueryInterface, On.fn[Nn].Constructor = Kn, On.fn[Nn].noConflict = function () {
    return On.fn[Nn] = Pn, Kn._jQueryInterface;
  }, Kn),
      Di = (Qn = "scrollspy", Gn = "." + (Yn = "bs.scrollspy"), qn = (Vn = e).fn[Qn], zn = {
    offset: 10,
    method: "auto",
    target: ""
  }, Xn = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  }, Jn = {
    ACTIVATE: "activate" + Gn,
    SCROLL: "scroll" + Gn,
    LOAD_DATA_API: "load" + Gn + ".data-api"
  }, Zn = "dropdown-item", $n = "active", ti = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: ".active",
    NAV_LIST_GROUP: ".nav, .list-group",
    NAV_LINKS: ".nav-link",
    NAV_ITEMS: ".nav-item",
    LIST_ITEMS: ".list-group-item",
    DROPDOWN: ".dropdown",
    DROPDOWN_ITEMS: ".dropdown-item",
    DROPDOWN_TOGGLE: ".dropdown-toggle"
  }, ei = "offset", ni = "position", ii = function () {
    function n(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + ti.NAV_LINKS + "," + this._config.target + " " + ti.LIST_ITEMS + "," + this._config.target + " " + ti.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Vn(this._scrollElement).on(Jn.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }

    var t = n.prototype;
    return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? ei : ni,
          r = "auto" === this._config.method ? t : this._config.method,
          o = r === ni ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Vn.makeArray(Vn(this._selector)).map(function (t) {
        var e,
            n = gt.getSelectorFromElement(t);

        if (n && (e = Vn(n)[0]), e) {
          var i = e.getBoundingClientRect();
          if (i.width || i.height) return [Vn(e)[r]().top + o, n];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      Vn.removeData(this._element, Yn), Vn(this._scrollElement).off(Gn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = c({}, zn, "object" == _typeof(t) && t ? t : {})).target) {
        var e = Vn(t.target).attr("id");
        e || (e = gt.getUID(Qn), Vn(t.target).attr("id", e)), t.target = "#" + e;
      }

      return gt.typeCheckConfig(Qn, t, Xn), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var r = this._offsets.length; r--;) {
          this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();

      var t = this._selector.split(",");

      t = t.map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      });
      var n = Vn(t.join(","));
      n.hasClass(Zn) ? (n.closest(ti.DROPDOWN).find(ti.DROPDOWN_TOGGLE).addClass($n), n.addClass($n)) : (n.addClass($n), n.parents(ti.NAV_LIST_GROUP).prev(ti.NAV_LINKS + ", " + ti.LIST_ITEMS).addClass($n), n.parents(ti.NAV_LIST_GROUP).prev(ti.NAV_ITEMS).children(ti.NAV_LINKS).addClass($n)), Vn(this._scrollElement).trigger(Jn.ACTIVATE, {
        relatedTarget: e
      });
    }, t._clear = function () {
      Vn(this._selector).filter(ti.ACTIVE).removeClass($n);
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = Vn(this).data(Yn);

        if (t || (t = new n(this, "object" == _typeof(e) && e), Vn(this).data(Yn, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return zn;
      }
    }]), n;
  }(), Vn(window).on(Jn.LOAD_DATA_API, function () {
    for (var t = Vn.makeArray(Vn(ti.DATA_SPY)), e = t.length; e--;) {
      var n = Vn(t[e]);

      ii._jQueryInterface.call(n, n.data());
    }
  }), Vn.fn[Qn] = ii._jQueryInterface, Vn.fn[Qn].Constructor = ii, Vn.fn[Qn].noConflict = function () {
    return Vn.fn[Qn] = qn, ii._jQueryInterface;
  }, ii),
      Ai = (si = "." + (oi = "bs.tab"), ai = (ri = e).fn.tab, li = {
    HIDE: "hide" + si,
    HIDDEN: "hidden" + si,
    SHOW: "show" + si,
    SHOWN: "shown" + si,
    CLICK_DATA_API: "click" + si + ".data-api"
  }, ci = "dropdown-menu", fi = "active", hi = "disabled", ui = "fade", di = "show", pi = ".dropdown", gi = ".nav, .list-group", mi = ".active", _i = "> li > .active", vi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Ei = ".dropdown-toggle", yi = "> .dropdown-menu .active", bi = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.show = function () {
      var n = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && ri(this._element).hasClass(fi) || ri(this._element).hasClass(hi))) {
        var t,
            i,
            e = ri(this._element).closest(gi)[0],
            r = gt.getSelectorFromElement(this._element);

        if (e) {
          var o = "UL" === e.nodeName ? _i : mi;
          i = (i = ri.makeArray(ri(e).find(o)))[i.length - 1];
        }

        var s = ri.Event(li.HIDE, {
          relatedTarget: this._element
        }),
            a = ri.Event(li.SHOW, {
          relatedTarget: i
        });

        if (i && ri(i).trigger(s), ri(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          r && (t = ri(r)[0]), this._activate(this._element, e);

          var l = function l() {
            var t = ri.Event(li.HIDDEN, {
              relatedTarget: n._element
            }),
                e = ri.Event(li.SHOWN, {
              relatedTarget: i
            });
            ri(i).trigger(t), ri(n._element).trigger(e);
          };

          t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      ri.removeData(this._element, oi), this._element = null;
    }, t._activate = function (t, e, n) {
      var i = this,
          r = ("UL" === e.nodeName ? ri(e).find(_i) : ri(e).children(mi))[0],
          o = n && r && ri(r).hasClass(ui),
          s = function s() {
        return i._transitionComplete(t, r, n);
      };

      if (r && o) {
        var a = gt.getTransitionDurationFromElement(r);
        ri(r).one(gt.TRANSITION_END, s).emulateTransitionEnd(a);
      } else s();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        ri(e).removeClass(di + " " + fi);
        var i = ri(e.parentNode).find(yi)[0];
        i && ri(i).removeClass(fi), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      if (ri(t).addClass(fi), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), gt.reflow(t), ri(t).addClass(di), t.parentNode && ri(t.parentNode).hasClass(ci)) {
        var r = ri(t).closest(pi)[0];
        r && ri(r).find(Ei).addClass(fi), t.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = ri(this),
            e = t.data(oi);

        if (e || (e = new i(this), t.data(oi, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }]), i;
  }(), ri(document).on(li.CLICK_DATA_API, vi, function (t) {
    t.preventDefault(), bi._jQueryInterface.call(ri(this), "show");
  }), ri.fn.tab = bi._jQueryInterface, ri.fn.tab.Constructor = bi, ri.fn.tab.noConflict = function () {
    return ri.fn.tab = ai, bi._jQueryInterface;
  }, bi);

  !function (t) {
    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = gt, t.Alert = mt, t.Button = _t, t.Carousel = vt, t.Collapse = Et, t.Dropdown = Ti, t.Modal = Ci, t.Popover = Ii, t.Scrollspy = Di, t.Tab = Ai, t.Tooltip = wi, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./public/assets/js/bootstrap.min.js":
/*!*******************************************!*\
  !*** ./public/assets/js/bootstrap.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? e(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t, e, c) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function h(r) {
    for (var t = 1; t < arguments.length; t++) {
      var s = null != arguments[t] ? arguments[t] : {},
          e = Object.keys(s);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(s).filter(function (t) {
        return Object.getOwnPropertyDescriptor(s, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, i;
        e = r, i = s[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i;
      });
    }

    return r;
  }

  e = e && e.hasOwnProperty("default") ? e["default"] : e, c = c && c.hasOwnProperty("default") ? c["default"] : c;

  var r,
      n,
      s,
      a,
      l,
      u,
      f,
      d,
      _,
      g,
      m,
      p,
      v,
      E,
      y,
      T,
      C,
      I,
      A,
      D,
      b,
      S,
      w,
      N,
      O,
      k,
      P,
      L,
      j,
      R,
      H,
      W,
      M,
      x,
      U,
      K,
      F,
      V,
      Q,
      B,
      Y,
      G,
      q,
      z,
      X,
      J,
      Z,
      $,
      tt,
      et,
      nt,
      it,
      rt,
      st,
      ot,
      at,
      lt,
      ht,
      ct,
      ut,
      ft,
      dt,
      _t,
      gt,
      mt,
      pt,
      vt,
      Et,
      yt,
      Tt,
      Ct,
      It,
      At,
      Dt,
      bt,
      St,
      wt,
      Nt,
      Ot,
      kt,
      Pt,
      Lt,
      jt,
      Rt,
      Ht,
      Wt,
      Mt,
      xt,
      Ut,
      Kt,
      Ft,
      Vt,
      Qt,
      Bt,
      Yt,
      Gt,
      qt,
      zt,
      Xt,
      Jt,
      Zt,
      $t,
      te,
      ee,
      ne,
      ie,
      re,
      se,
      oe,
      ae,
      le,
      he,
      ce,
      ue,
      fe,
      de,
      _e,
      ge,
      me,
      pe,
      ve,
      Ee,
      ye,
      Te,
      Ce,
      Ie,
      Ae,
      De,
      be,
      Se,
      we,
      Ne,
      Oe,
      ke,
      Pe,
      Le,
      je,
      Re,
      He,
      We,
      Me,
      xe,
      Ue,
      Ke,
      Fe,
      Ve,
      Qe,
      Be,
      Ye,
      Ge,
      qe,
      ze,
      Xe,
      Je,
      Ze,
      $e,
      tn,
      en,
      nn,
      rn,
      sn,
      on,
      an,
      ln,
      hn,
      cn,
      un,
      fn,
      dn,
      _n,
      gn,
      mn,
      pn,
      vn,
      En,
      yn,
      Tn,
      Cn = function (i) {
    var e = "transitionend";

    function t(t) {
      var e = this,
          n = !1;
      return i(this).one(l.TRANSITION_END, function () {
        n = !0;
      }), setTimeout(function () {
        n || l.triggerTransitionEnd(e);
      }, t), this;
    }

    var l = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function getUID(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {
          ;
        }

        return t;
      },
      getSelectorFromElement: function getSelectorFromElement(t) {
        var e = t.getAttribute("data-target");
        e && "#" !== e || (e = t.getAttribute("href") || "");

        try {
          return 0 < i(document).find(e).length ? e : null;
        } catch (t) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
        if (!t) return 0;
        var e = i(t).css("transition-duration");
        return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0;
      },
      reflow: function reflow(t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(t) {
        i(t).trigger(e);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      },
      isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(t, e, n) {
        for (var i in n) {
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i],
                s = e[i],
                o = s && l.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
            if (!new RegExp(r).test(o)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".');
          }
        }

        var a;
      }
    };
    return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function handle(t) {
        if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      }
    }, l;
  }(e),
      In = (n = "alert", a = "." + (s = "bs.alert"), l = (r = e).fn[n], u = {
    CLOSE: "close" + a,
    CLOSED: "closed" + a,
    CLICK_DATA_API: "click" + a + ".data-api"
  }, f = "alert", d = "fade", _ = "show", g = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.close = function (t) {
      var e = this._element;
      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      r.removeData(this._element, s), this._element = null;
    }, t._getRootElement = function (t) {
      var e = Cn.getSelectorFromElement(t),
          n = !1;
      return e && (n = r(e)[0]), n || (n = r(t).closest("." + f)[0]), n;
    }, t._triggerCloseEvent = function (t) {
      var e = r.Event(u.CLOSE);
      return r(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;

      if (r(e).removeClass(_), r(e).hasClass(d)) {
        var t = Cn.getTransitionDurationFromElement(e);
        r(e).one(Cn.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      r(t).detach().trigger(u.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = r(this),
            e = t.data(s);
        e || (e = new i(this), t.data(s, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, o(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }]), i;
  }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())), r.fn[n] = g._jQueryInterface, r.fn[n].Constructor = g, r.fn[n].noConflict = function () {
    return r.fn[n] = l, g._jQueryInterface;
  }, g),
      An = (p = "button", E = "." + (v = "bs.button"), y = ".data-api", T = (m = e).fn[p], C = "active", I = "btn", D = '[data-toggle^="button"]', b = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {
    CLICK_DATA_API: "click" + E + y,
    FOCUS_BLUR_DATA_API: (A = "focus") + E + y + " blur" + E + y
  }, k = function () {
    function n(t) {
      this._element = t;
    }

    var t = n.prototype;
    return t.toggle = function () {
      var t = !0,
          e = !0,
          n = m(this._element).closest(b)[0];

      if (n) {
        var i = m(this._element).find(S)[0];

        if (i) {
          if ("radio" === i.type) if (i.checked && m(this._element).hasClass(C)) t = !1;else {
            var r = m(n).find(w)[0];
            r && m(r).removeClass(C);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !m(this._element).hasClass(C), m(i).trigger("change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(C)), t && m(this._element).toggleClass(C);
    }, t.dispose = function () {
      m.removeData(this._element, v), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = m(this).data(v);
        t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]();
      });
    }, o(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }]), n;
  }(), m(document).on(O.CLICK_DATA_API, D, function (t) {
    t.preventDefault();
    var e = t.target;
    m(e).hasClass(I) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle");
  }).on(O.FOCUS_BLUR_DATA_API, D, function (t) {
    var e = m(t.target).closest(N)[0];
    m(e).toggleClass(A, /^focus(in)?$/.test(t.type));
  }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function () {
    return m.fn[p] = T, k._jQueryInterface;
  }, k),
      Dn = (L = "carousel", R = "." + (j = "bs.carousel"), H = ".data-api", W = (P = e).fn[L], M = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0
  }, x = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean"
  }, U = "next", K = "prev", F = "left", V = "right", Q = {
    SLIDE: "slide" + R,
    SLID: "slid" + R,
    KEYDOWN: "keydown" + R,
    MOUSEENTER: "mouseenter" + R,
    MOUSELEAVE: "mouseleave" + R,
    TOUCHEND: "touchend" + R,
    LOAD_DATA_API: "load" + R + H,
    CLICK_DATA_API: "click" + R + H
  }, B = "carousel", Y = "active", G = "slide", q = "carousel-item-right", z = "carousel-item-left", X = "carousel-item-next", J = "carousel-item-prev", Z = {
    ACTIVE: ".active",
    ACTIVE_ITEM: ".active.carousel-item",
    ITEM: ".carousel-item",
    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
    INDICATORS: ".carousel-indicators",
    DATA_SLIDE: "[data-slide], [data-slide-to]",
    DATA_RIDE: '[data-ride="carousel"]'
  }, $ = function () {
    function s(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0], this._addEventListeners();
    }

    var t = s.prototype;
    return t.next = function () {
      this._isSliding || this._slide(U);
    }, t.nextWhenVisible = function () {
      !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(K);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), P(this._element).find(Z.NEXT_PREV)[0] && (Cn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;
      this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0];

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) P(this._element).one(Q.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = n < t ? U : K;

        this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      P(this._element).off(R), P.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = h({}, M, t), Cn.typeCheckConfig(L, t, x), t;
    }, t._addEventListeners = function () {
      var e = this;
      this._config.keyboard && P(this._element).on(Q.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(Q.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function () {
        e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
          return e.cycle(t);
        }, 500 + e._config.interval);
      }));
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;

        case 39:
          t.preventDefault(), this.next();
      }
    }, t._getItemIndex = function (t) {
      return this._items = P.makeArray(P(t).parent().find(Z.ITEM)), this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === U,
          i = t === K,
          r = this._getItemIndex(e),
          s = this._items.length - 1;

      if ((i && 0 === r || n && r === s) && !this._config.wrap) return e;
      var o = (r + (t === K ? -1 : 1)) % this._items.length;
      return -1 === o ? this._items[this._items.length - 1] : this._items[o];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),
          r = P.Event(Q.SLIDE, {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });

      return P(this._element).trigger(r), r;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);

        var e = this._indicatorsElement.children[this._getItemIndex(t)];

        e && P(e).addClass(Y);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          r,
          s = this,
          o = P(this._element).find(Z.ACTIVE_ITEM)[0],
          a = this._getItemIndex(o),
          l = e || o && this._getItemByDirection(t, o),
          h = this._getItemIndex(l),
          c = Boolean(this._interval);

      if (t === U ? (n = z, i = X, r = F) : (n = q, i = J, r = V), l && P(l).hasClass(Y)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
        this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
        var u = P.Event(Q.SLID, {
          relatedTarget: l,
          direction: r,
          from: a,
          to: h
        });

        if (P(this._element).hasClass(G)) {
          P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n);
          var f = Cn.getTransitionDurationFromElement(o);
          P(o).one(Cn.TRANSITION_END, function () {
            P(l).removeClass(n + " " + i).addClass(Y), P(o).removeClass(Y + " " + i + " " + n), s._isSliding = !1, setTimeout(function () {
              return P(s._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(f);
        } else P(o).removeClass(Y), P(l).addClass(Y), this._isSliding = !1, P(this._element).trigger(u);

        c && this.cycle();
      }
    }, s._jQueryInterface = function (i) {
      return this.each(function () {
        var t = P(this).data(j),
            e = h({}, M, P(this).data());
        "object" == _typeof(i) && (e = h({}, e, i));
        var n = "string" == typeof i ? i : e.slide;
        if (t || (t = new s(this, e), P(this).data(j, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        } else e.interval && (t.pause(), t.cycle());
      });
    }, s._dataApiClickHandler = function (t) {
      var e = Cn.getSelectorFromElement(this);

      if (e) {
        var n = P(e)[0];

        if (n && P(n).hasClass(B)) {
          var i = h({}, P(n).data(), P(this).data()),
              r = this.getAttribute("data-slide-to");
          r && (i.interval = !1), s._jQueryInterface.call(P(n), i), r && P(n).data(j).to(r), t.preventDefault();
        }
      }
    }, o(s, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return M;
      }
    }]), s;
  }(), P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function () {
    P(Z.DATA_RIDE).each(function () {
      var t = P(this);

      $._jQueryInterface.call(t, t.data());
    });
  }), P.fn[L] = $._jQueryInterface, P.fn[L].Constructor = $, P.fn[L].noConflict = function () {
    return P.fn[L] = W, $._jQueryInterface;
  }, $),
      bn = (et = "collapse", it = "." + (nt = "bs.collapse"), rt = (tt = e).fn[et], st = {
    toggle: !0,
    parent: ""
  }, ot = {
    toggle: "boolean",
    parent: "(string|element)"
  }, at = {
    SHOW: "show" + it,
    SHOWN: "shown" + it,
    HIDE: "hide" + it,
    HIDDEN: "hidden" + it,
    CLICK_DATA_API: "click" + it + ".data-api"
  }, lt = "show", ht = "collapse", ct = "collapsing", ut = "collapsed", ft = "width", dt = "height", _t = {
    ACTIVES: ".show, .collapsing",
    DATA_TOGGLE: '[data-toggle="collapse"]'
  }, gt = function () {
    function a(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));

      for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) {
        var r = n[i],
            s = Cn.getSelectorFromElement(r);
        null !== s && 0 < tt(s).filter(t).length && (this._selector = s, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var t = a.prototype;
    return t.toggle = function () {
      tt(this._element).hasClass(lt) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;

      if (!this._isTransitioning && !tt(this._element).hasClass(lt) && (this._parent && 0 === (t = tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = tt(t).not(this._selector).data(nt)) && e._isTransitioning))) {
        var i = tt.Event(at.SHOW);

        if (tt(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call(tt(t).not(this._selector), "hide"), e || tt(t).data(nt, null));

          var r = this._getDimension();

          tt(this._element).removeClass(ht).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && tt(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0);
          var s = "scroll" + (r[0].toUpperCase() + r.slice(1)),
              o = Cn.getTransitionDurationFromElement(this._element);
          tt(this._element).one(Cn.TRANSITION_END, function () {
            tt(n._element).removeClass(ct).addClass(ht).addClass(lt), n._element.style[r] = "", n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN);
          }).emulateTransitionEnd(o), this._element.style[r] = this._element[s] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;

      if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
        var e = tt.Event(at.HIDE);

        if (tt(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();

          if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Cn.reflow(this._element), tt(this._element).addClass(ct).removeClass(ht).removeClass(lt), 0 < this._triggerArray.length) for (var i = 0; i < this._triggerArray.length; i++) {
            var r = this._triggerArray[i],
                s = Cn.getSelectorFromElement(r);
            if (null !== s) tt(s).hasClass(lt) || tt(r).addClass(ut).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";
          var o = Cn.getTransitionDurationFromElement(this._element);
          tt(this._element).one(Cn.TRANSITION_END, function () {
            t.setTransitioning(!1), tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN);
          }).emulateTransitionEnd(o);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      tt.removeData(this._element, nt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = h({}, st, t)).toggle = Boolean(t.toggle), Cn.typeCheckConfig(et, t, ot), t;
    }, t._getDimension = function () {
      return tt(this._element).hasClass(ft) ? ft : dt;
    }, t._getParent = function () {
      var n = this,
          t = null;
      Cn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = tt(this._config.parent)[0];
      var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
      return tt(t).find(e).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      if (t) {
        var n = tt(t).hasClass(lt);
        0 < e.length && tt(e).toggleClass(ut, !n).attr("aria-expanded", n);
      }
    }, a._getTargetFromElement = function (t) {
      var e = Cn.getSelectorFromElement(t);
      return e ? tt(e)[0] : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = tt(this),
            e = t.data(nt),
            n = h({}, st, t.data(), "object" == _typeof(i) && i ? i : {});

        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(nt, e)), "string" == typeof i) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
          e[i]();
        }
      });
    }, o(a, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return st;
      }
    }]), a;
  }(), tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var n = tt(this),
        e = Cn.getSelectorFromElement(this);
    tt(e).each(function () {
      var t = tt(this),
          e = t.data(nt) ? "toggle" : n.data();

      gt._jQueryInterface.call(t, e);
    });
  }), tt.fn[et] = gt._jQueryInterface, tt.fn[et].Constructor = gt, tt.fn[et].noConflict = function () {
    return tt.fn[et] = rt, gt._jQueryInterface;
  }, gt),
      Sn = (pt = "dropdown", Et = "." + (vt = "bs.dropdown"), yt = ".data-api", Tt = (mt = e).fn[pt], Ct = new RegExp("38|40|27"), It = {
    HIDE: "hide" + Et,
    HIDDEN: "hidden" + Et,
    SHOW: "show" + Et,
    SHOWN: "shown" + Et,
    CLICK: "click" + Et,
    CLICK_DATA_API: "click" + Et + yt,
    KEYDOWN_DATA_API: "keydown" + Et + yt,
    KEYUP_DATA_API: "keyup" + Et + yt
  }, At = "disabled", Dt = "show", bt = "dropup", St = "dropright", wt = "dropleft", Nt = "dropdown-menu-right", Ot = "position-static", kt = '[data-toggle="dropdown"]', Pt = ".dropdown form", Lt = ".dropdown-menu", jt = ".navbar-nav", Rt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Ht = "top-start", Wt = "top-end", Mt = "bottom-start", xt = "bottom-end", Ut = "right-start", Kt = "left-start", Ft = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic"
  }, Vt = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string"
  }, Qt = function () {
    function l(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var t = l.prototype;
    return t.toggle = function () {
      if (!this._element.disabled && !mt(this._element).hasClass(At)) {
        var t = l._getParentFromElement(this._element),
            e = mt(this._menu).hasClass(Dt);

        if (l._clearMenus(), !e) {
          var n = {
            relatedTarget: this._element
          },
              i = mt.Event(It.SHOW, n);

          if (mt(t).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
              var r = this._element;
              "parent" === this._config.reference ? r = t : Cn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && mt(t).addClass(Ot), this._popper = new c(r, this._menu, this._getPopperConfig());
            }

            "ontouchstart" in document.documentElement && 0 === mt(t).closest(jt).length && mt(document.body).children().on("mouseover", null, mt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), mt(this._menu).toggleClass(Dt), mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n));
          }
        }
      }
    }, t.dispose = function () {
      mt.removeData(this._element, vt), mt(this._element).off(Et), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;
      mt(this._element).on(It.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = h({}, this.constructor.Default, mt(this._element).data(), t), Cn.typeCheckConfig(pt, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = l._getParentFromElement(this._element);

        this._menu = mt(t).find(Lt)[0];
      }

      return this._menu;
    }, t._getPlacement = function () {
      var t = mt(this._element).parent(),
          e = Mt;
      return t.hasClass(bt) ? (e = Ht, mt(this._menu).hasClass(Nt) && (e = Wt)) : t.hasClass(St) ? e = Ut : t.hasClass(wt) ? e = Kt : mt(this._menu).hasClass(Nt) && (e = xt), e;
    }, t._detectNavbar = function () {
      return 0 < mt(this._element).closest(".navbar").length;
    }, t._getPopperConfig = function () {
      var e = this,
          t = {};
      "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = h({}, t.offsets, e._config.offset(t.offsets) || {}), t;
      } : t.offset = this._config.offset;
      var n = {
        placement: this._getPlacement(),
        modifiers: {
          offset: t,
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (n.modifiers.applyStyle = {
        enabled: !1
      }), n;
    }, l._jQueryInterface = function (e) {
      return this.each(function () {
        var t = mt(this).data(vt);

        if (t || (t = new l(this, "object" == _typeof(e) ? e : null), mt(this).data(vt, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, l._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) {
        var i = l._getParentFromElement(e[n]),
            r = mt(e[n]).data(vt),
            s = {
          relatedTarget: e[n]
        };

        if (r) {
          var o = r._menu;

          if (mt(i).hasClass(Dt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && mt.contains(i, t.target))) {
            var a = mt.Event(It.HIDE, s);
            mt(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && mt(document.body).children().off("mouseover", null, mt.noop), e[n].setAttribute("aria-expanded", "false"), mt(o).removeClass(Dt), mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s)));
          }
        }
      }
    }, l._getParentFromElement = function (t) {
      var e,
          n = Cn.getSelectorFromElement(t);
      return n && (e = mt(n)[0]), e || t.parentNode;
    }, l._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || mt(t.target).closest(Lt).length)) : Ct.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !mt(this).hasClass(At))) {
        var e = l._getParentFromElement(this),
            n = mt(e).hasClass(Dt);

        if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = mt(e).find(Rt).get();

          if (0 !== i.length) {
            var r = i.indexOf(t.target);
            38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus();
          }
        } else {
          if (27 === t.which) {
            var s = mt(e).find(kt)[0];
            mt(s).trigger("focus");
          }

          mt(this).trigger("click");
        }
      }
    }, o(l, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Ft;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Vt;
      }
    }]), l;
  }(), mt(document).on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API + " " + It.KEYUP_DATA_API, Qt._clearMenus).on(It.CLICK_DATA_API, kt, function (t) {
    t.preventDefault(), t.stopPropagation(), Qt._jQueryInterface.call(mt(this), "toggle");
  }).on(It.CLICK_DATA_API, Pt, function (t) {
    t.stopPropagation();
  }), mt.fn[pt] = Qt._jQueryInterface, mt.fn[pt].Constructor = Qt, mt.fn[pt].noConflict = function () {
    return mt.fn[pt] = Tt, Qt._jQueryInterface;
  }, Qt),
      wn = (Yt = "modal", qt = "." + (Gt = "bs.modal"), zt = (Bt = e).fn[Yt], Xt = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  }, Jt = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  }, Zt = {
    HIDE: "hide" + qt,
    HIDDEN: "hidden" + qt,
    SHOW: "show" + qt,
    SHOWN: "shown" + qt,
    FOCUSIN: "focusin" + qt,
    RESIZE: "resize" + qt,
    CLICK_DISMISS: "click.dismiss" + qt,
    KEYDOWN_DISMISS: "keydown.dismiss" + qt,
    MOUSEUP_DISMISS: "mouseup.dismiss" + qt,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + qt,
    CLICK_DATA_API: "click" + qt + ".data-api"
  }, $t = "modal-scrollbar-measure", te = "modal-backdrop", ee = "modal-open", ne = "fade", ie = "show", re = {
    DIALOG: ".modal-dialog",
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    STICKY_CONTENT: ".sticky-top",
    NAVBAR_TOGGLER: ".navbar-toggler"
  }, se = function () {
    function r(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = Bt(t).find(re.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
    }

    var t = r.prototype;
    return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;

      if (!this._isTransitioning && !this._isShown) {
        Bt(this._element).hasClass(ne) && (this._isTransitioning = !0);
        var n = Bt.Event(Zt.SHOW, {
          relatedTarget: t
        });
        Bt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Bt(document.body).addClass(ee), this._setEscapeEvent(), this._setResizeEvent(), Bt(this._element).on(Zt.CLICK_DISMISS, re.DATA_DISMISS, function (t) {
          return e.hide(t);
        }), Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function () {
          Bt(e._element).one(Zt.MOUSEUP_DISMISS, function (t) {
            Bt(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
        var n = Bt.Event(Zt.HIDE);

        if (Bt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = Bt(this._element).hasClass(ne);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Bt(document).off(Zt.FOCUSIN), Bt(this._element).removeClass(ie), Bt(this._element).off(Zt.CLICK_DISMISS), Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS), i) {
            var r = Cn.getTransitionDurationFromElement(this._element);
            Bt(this._element).one(Cn.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      Bt.removeData(this._element, Gt), Bt(window, document, this._element, this._backdrop).off(qt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = h({}, Xt, t), Cn.typeCheckConfig(Yt, t, Jt), t;
    }, t._showElement = function (t) {
      var e = this,
          n = Bt(this._element).hasClass(ne);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Cn.reflow(this._element), Bt(this._element).addClass(ie), this._config.focus && this._enforceFocus();

      var i = Bt.Event(Zt.SHOWN, {
        relatedTarget: t
      }),
          r = function r() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, Bt(e._element).trigger(i);
      };

      if (n) {
        var s = Cn.getTransitionDurationFromElement(this._element);
        Bt(this._dialog).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
      } else r();
    }, t._enforceFocus = function () {
      var e = this;
      Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === Bt(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;
      this._isShown && this._config.keyboard ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function (t) {
        27 === t.which && (t.preventDefault(), e.hide());
      }) : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;
      this._isShown ? Bt(window).on(Zt.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : Bt(window).off(Zt.RESIZE);
    }, t._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
        Bt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), Bt(t._element).trigger(Zt.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (Bt(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = Bt(this._element).hasClass(ne) ? ne : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = te, n && Bt(this._backdrop).addClass(n), Bt(this._backdrop).appendTo(document.body), Bt(this._element).on(Zt.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), n && Cn.reflow(this._backdrop), Bt(this._backdrop).addClass(ie), !t) return;
        if (!n) return void t();
        var i = Cn.getTransitionDurationFromElement(this._backdrop);
        Bt(this._backdrop).one(Cn.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        Bt(this._backdrop).removeClass(ie);

        var r = function r() {
          e._removeBackdrop(), t && t();
        };

        if (Bt(this._element).hasClass(ne)) {
          var s = Cn.getTransitionDurationFromElement(this._backdrop);
          Bt(this._backdrop).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
        } else r();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var r = this;

      if (this._isBodyOverflowing) {
        Bt(re.FIXED_CONTENT).each(function (t, e) {
          var n = Bt(e)[0].style.paddingRight,
              i = Bt(e).css("padding-right");
          Bt(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px");
        }), Bt(re.STICKY_CONTENT).each(function (t, e) {
          var n = Bt(e)[0].style.marginRight,
              i = Bt(e).css("margin-right");
          Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px");
        }), Bt(re.NAVBAR_TOGGLER).each(function (t, e) {
          var n = Bt(e)[0].style.marginRight,
              i = Bt(e).css("margin-right");
          Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px");
        });
        var t = document.body.style.paddingRight,
            e = Bt(document.body).css("padding-right");
        Bt(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px");
      }
    }, t._resetScrollbar = function () {
      Bt(re.FIXED_CONTENT).each(function (t, e) {
        var n = Bt(e).data("padding-right");
        "undefined" != typeof n && Bt(e).css("padding-right", n).removeData("padding-right");
      }), Bt(re.STICKY_CONTENT + ", " + re.NAVBAR_TOGGLER).each(function (t, e) {
        var n = Bt(e).data("margin-right");
        "undefined" != typeof n && Bt(e).css("margin-right", n).removeData("margin-right");
      });
      var t = Bt(document.body).data("padding-right");
      "undefined" != typeof t && Bt(document.body).css("padding-right", t).removeData("padding-right");
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = $t, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, r._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = Bt(this).data(Gt),
            e = h({}, Xt, Bt(this).data(), "object" == _typeof(n) && n ? n : {});

        if (t || (t = new r(this, e), Bt(this).data(Gt, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n](i);
        } else e.show && t.show(i);
      });
    }, o(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Xt;
      }
    }]), r;
  }(), Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function (t) {
    var e,
        n = this,
        i = Cn.getSelectorFromElement(this);
    i && (e = Bt(i)[0]);
    var r = Bt(e).data(Gt) ? "toggle" : h({}, Bt(e).data(), Bt(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var s = Bt(e).one(Zt.SHOW, function (t) {
      t.isDefaultPrevented() || s.one(Zt.HIDDEN, function () {
        Bt(n).is(":visible") && n.focus();
      });
    });

    se._jQueryInterface.call(Bt(e), r, this);
  }), Bt.fn[Yt] = se._jQueryInterface, Bt.fn[Yt].Constructor = se, Bt.fn[Yt].noConflict = function () {
    return Bt.fn[Yt] = zt, se._jQueryInterface;
  }, se),
      Nn = (ae = "tooltip", he = "." + (le = "bs.tooltip"), ce = (oe = e).fn[ae], ue = "bs-tooltip", fe = new RegExp("(^|\\s)" + ue + "\\S+", "g"), ge = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !(_e = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    }),
    selector: !(de = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)"
    }),
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent"
  }, pe = "out", ve = {
    HIDE: "hide" + he,
    HIDDEN: "hidden" + he,
    SHOW: (me = "show") + he,
    SHOWN: "shown" + he,
    INSERTED: "inserted" + he,
    CLICK: "click" + he,
    FOCUSIN: "focusin" + he,
    FOCUSOUT: "focusout" + he,
    MOUSEENTER: "mouseenter" + he,
    MOUSELEAVE: "mouseleave" + he
  }, Ee = "fade", ye = "show", Te = ".tooltip-inner", Ce = ".arrow", Ie = "hover", Ae = "focus", De = "click", be = "manual", Se = function () {
    function i(t, e) {
      if ("undefined" == typeof c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    var t = i.prototype;
    return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = oe(t.currentTarget).data(e);
        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (oe(this.getTipElement()).hasClass(ye)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), oe.removeData(this.element, this.constructor.DATA_KEY), oe(this.element).off(this.constructor.EVENT_KEY), oe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && oe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;
      if ("none" === oe(this.element).css("display")) throw new Error("Please use show on visible elements");
      var t = oe.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        oe(this.element).trigger(t);
        var n = oe.contains(this.element.ownerDocument.documentElement, this.element);
        if (t.isDefaultPrevented() || !n) return;
        var i = this.getTipElement(),
            r = Cn.getUID(this.constructor.NAME);
        i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && oe(i).addClass(Ee);

        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
            o = this._getAttachment(s);

        this.addAttachmentClass(o);
        var a = !1 === this.config.container ? document.body : oe(this.config.container);
        oe(i).data(this.constructor.DATA_KEY, this), oe.contains(this.element.ownerDocument.documentElement, this.tip) || oe(i).appendTo(a), oe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, i, {
          placement: o,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Ce
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          },
          onUpdate: function onUpdate(t) {
            e._handlePopperPlacementChange(t);
          }
        }), oe(i).addClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().on("mouseover", null, oe.noop);

        var l = function l() {
          e.config.animation && e._fixTransition();
          var t = e._hoverState;
          e._hoverState = null, oe(e.element).trigger(e.constructor.Event.SHOWN), t === pe && e._leave(null, e);
        };

        if (oe(this.tip).hasClass(Ee)) {
          var h = Cn.getTransitionDurationFromElement(this.tip);
          oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h);
        } else l();
      }
    }, t.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = oe.Event(this.constructor.Event.HIDE),
          r = function r() {
        e._hoverState !== me && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), oe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };

      if (oe(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (oe(n).removeClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().off("mouseover", null, oe.noop), this._activeTrigger[De] = !1, this._activeTrigger[Ae] = !1, this._activeTrigger[Ie] = !1, oe(this.tip).hasClass(Ee)) {
          var s = Cn.getTransitionDurationFromElement(n);
          oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
        } else r();

        this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      oe(this.getTipElement()).addClass(ue + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || oe(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = oe(this.getTipElement());
      this.setElementContent(t.find(Te), this.getTitle()), t.removeClass(Ee + " " + ye);
    }, t.setElementContent = function (t, e) {
      var n = this.config.html;
      "object" == _typeof(e) && (e.nodeType || e.jquery) ? n ? oe(e).parent().is(t) || t.empty().append(e) : t.text(oe(e).text()) : t[n ? "html" : "text"](e);
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, t._getAttachment = function (t) {
      return _e[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) oe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== be) {
          var e = t === Ie ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === Ie ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          oe(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }
        oe(i.element).closest(".modal").on("hide.bs.modal", function () {
          return i.hide();
        });
      }), this.config.selector ? this.config = h({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));

      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ae : Ie] = !0), oe(e.getTipElement()).hasClass(ye) || e._hoverState === me ? e._hoverState = me : (clearTimeout(e._timeout), e._hoverState = me, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === me && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ae : Ie] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = pe, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === pe && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, t._getConfig = function (t) {
      return "number" == typeof (t = h({}, this.constructor.Default, oe(this.element).data(), "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Cn.typeCheckConfig(ae, t, this.constructor.DefaultType), t;
    }, t._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, t._cleanTipClass = function () {
      var t = oe(this.getTipElement()),
          e = t.attr("class").match(fe);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("x-placement") && (oe(t).removeClass(Ee), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = oe(this).data(le),
            e = "object" == _typeof(n) && n;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), oe(this).data(le, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, o(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return ge;
      }
    }, {
      key: "NAME",
      get: function get() {
        return ae;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return le;
      }
    }, {
      key: "Event",
      get: function get() {
        return ve;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return he;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return de;
      }
    }]), i;
  }(), oe.fn[ae] = Se._jQueryInterface, oe.fn[ae].Constructor = Se, oe.fn[ae].noConflict = function () {
    return oe.fn[ae] = ce, Se._jQueryInterface;
  }, Se),
      On = (Ne = "popover", ke = "." + (Oe = "bs.popover"), Pe = (we = e).fn[Ne], Le = "bs-popover", je = new RegExp("(^|\\s)" + Le + "\\S+", "g"), Re = h({}, Nn.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }), He = h({}, Nn.DefaultType, {
    content: "(string|element|function)"
  }), We = "fade", xe = ".popover-header", Ue = ".popover-body", Ke = {
    HIDE: "hide" + ke,
    HIDDEN: "hidden" + ke,
    SHOW: (Me = "show") + ke,
    SHOWN: "shown" + ke,
    INSERTED: "inserted" + ke,
    CLICK: "click" + ke,
    FOCUSIN: "focusin" + ke,
    FOCUSOUT: "focusout" + ke,
    MOUSEENTER: "mouseenter" + ke,
    MOUSELEAVE: "mouseleave" + ke
  }, Fe = function (t) {
    var e, n;

    function i() {
      return t.apply(this, arguments) || this;
    }

    n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
    var r = i.prototype;
    return r.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, r.addAttachmentClass = function (t) {
      we(this.getTipElement()).addClass(Le + "-" + t);
    }, r.getTipElement = function () {
      return this.tip = this.tip || we(this.config.template)[0], this.tip;
    }, r.setContent = function () {
      var t = we(this.getTipElement());
      this.setElementContent(t.find(xe), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ue), e), t.removeClass(We + " " + Me);
    }, r._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, r._cleanTipClass = function () {
      var t = we(this.getTipElement()),
          e = t.attr("class").match(je);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = we(this).data(Oe),
            e = "object" == _typeof(n) ? n : null;

        if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), we(this).data(Oe, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, o(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Re;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Ne;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Oe;
      }
    }, {
      key: "Event",
      get: function get() {
        return Ke;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ke;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return He;
      }
    }]), i;
  }(Nn), we.fn[Ne] = Fe._jQueryInterface, we.fn[Ne].Constructor = Fe, we.fn[Ne].noConflict = function () {
    return we.fn[Ne] = Pe, Fe._jQueryInterface;
  }, Fe),
      kn = (Qe = "scrollspy", Ye = "." + (Be = "bs.scrollspy"), Ge = (Ve = e).fn[Qe], qe = {
    offset: 10,
    method: "auto",
    target: ""
  }, ze = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  }, Xe = {
    ACTIVATE: "activate" + Ye,
    SCROLL: "scroll" + Ye,
    LOAD_DATA_API: "load" + Ye + ".data-api"
  }, Je = "dropdown-item", Ze = "active", $e = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: ".active",
    NAV_LIST_GROUP: ".nav, .list-group",
    NAV_LINKS: ".nav-link",
    NAV_ITEMS: ".nav-item",
    LIST_ITEMS: ".list-group-item",
    DROPDOWN: ".dropdown",
    DROPDOWN_ITEMS: ".dropdown-item",
    DROPDOWN_TOGGLE: ".dropdown-toggle"
  }, tn = "offset", en = "position", nn = function () {
    function n(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + $e.NAV_LINKS + "," + this._config.target + " " + $e.LIST_ITEMS + "," + this._config.target + " " + $e.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Ve(this._scrollElement).on(Xe.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }

    var t = n.prototype;
    return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? tn : en,
          r = "auto" === this._config.method ? t : this._config.method,
          s = r === en ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ve.makeArray(Ve(this._selector)).map(function (t) {
        var e,
            n = Cn.getSelectorFromElement(t);

        if (n && (e = Ve(n)[0]), e) {
          var i = e.getBoundingClientRect();
          if (i.width || i.height) return [Ve(e)[r]().top + s, n];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      Ve.removeData(this._element, Be), Ve(this._scrollElement).off(Ye), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = h({}, qe, "object" == _typeof(t) && t ? t : {})).target) {
        var e = Ve(t.target).attr("id");
        e || (e = Cn.getUID(Qe), Ve(t.target).attr("id", e)), t.target = "#" + e;
      }

      return Cn.typeCheckConfig(Qe, t, ze), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var r = this._offsets.length; r--;) {
          this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();

      var t = this._selector.split(",");

      t = t.map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      });
      var n = Ve(t.join(","));
      n.hasClass(Je) ? (n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze), n.addClass(Ze)) : (n.addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS + ", " + $e.LIST_ITEMS).addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)), Ve(this._scrollElement).trigger(Xe.ACTIVATE, {
        relatedTarget: e
      });
    }, t._clear = function () {
      Ve(this._selector).filter($e.ACTIVE).removeClass(Ze);
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = Ve(this).data(Be);

        if (t || (t = new n(this, "object" == _typeof(e) && e), Ve(this).data(Be, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, o(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return qe;
      }
    }]), n;
  }(), Ve(window).on(Xe.LOAD_DATA_API, function () {
    for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--;) {
      var n = Ve(t[e]);

      nn._jQueryInterface.call(n, n.data());
    }
  }), Ve.fn[Qe] = nn._jQueryInterface, Ve.fn[Qe].Constructor = nn, Ve.fn[Qe].noConflict = function () {
    return Ve.fn[Qe] = Ge, nn._jQueryInterface;
  }, nn),
      Pn = (on = "." + (sn = "bs.tab"), an = (rn = e).fn.tab, ln = {
    HIDE: "hide" + on,
    HIDDEN: "hidden" + on,
    SHOW: "show" + on,
    SHOWN: "shown" + on,
    CLICK_DATA_API: "click" + on + ".data-api"
  }, hn = "dropdown-menu", cn = "active", un = "disabled", fn = "fade", dn = "show", _n = ".dropdown", gn = ".nav, .list-group", mn = ".active", pn = "> li > .active", vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', En = ".dropdown-toggle", yn = "> .dropdown-menu .active", Tn = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.show = function () {
      var n = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && rn(this._element).hasClass(cn) || rn(this._element).hasClass(un))) {
        var t,
            i,
            e = rn(this._element).closest(gn)[0],
            r = Cn.getSelectorFromElement(this._element);

        if (e) {
          var s = "UL" === e.nodeName ? pn : mn;
          i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1];
        }

        var o = rn.Event(ln.HIDE, {
          relatedTarget: this._element
        }),
            a = rn.Event(ln.SHOW, {
          relatedTarget: i
        });

        if (i && rn(i).trigger(o), rn(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
          r && (t = rn(r)[0]), this._activate(this._element, e);

          var l = function l() {
            var t = rn.Event(ln.HIDDEN, {
              relatedTarget: n._element
            }),
                e = rn.Event(ln.SHOWN, {
              relatedTarget: i
            });
            rn(i).trigger(t), rn(n._element).trigger(e);
          };

          t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      rn.removeData(this._element, sn), this._element = null;
    }, t._activate = function (t, e, n) {
      var i = this,
          r = ("UL" === e.nodeName ? rn(e).find(pn) : rn(e).children(mn))[0],
          s = n && r && rn(r).hasClass(fn),
          o = function o() {
        return i._transitionComplete(t, r, n);
      };

      if (r && s) {
        var a = Cn.getTransitionDurationFromElement(r);
        rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a);
      } else o();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        rn(e).removeClass(dn + " " + cn);
        var i = rn(e.parentNode).find(yn)[0];
        i && rn(i).removeClass(cn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      if (rn(t).addClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Cn.reflow(t), rn(t).addClass(dn), t.parentNode && rn(t.parentNode).hasClass(hn)) {
        var r = rn(t).closest(_n)[0];
        r && rn(r).find(En).addClass(cn), t.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = rn(this),
            e = t.data(sn);

        if (e || (e = new i(this), t.data(sn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, o(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }]), i;
  }(), rn(document).on(ln.CLICK_DATA_API, vn, function (t) {
    t.preventDefault(), Tn._jQueryInterface.call(rn(this), "show");
  }), rn.fn.tab = Tn._jQueryInterface, rn.fn.tab.Constructor = Tn, rn.fn.tab.noConflict = function () {
    return rn.fn.tab = an, Tn._jQueryInterface;
  }, Tn);

  !function (t) {
    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = Cn, t.Alert = In, t.Button = An, t.Carousel = Dn, t.Collapse = bn, t.Dropdown = Sn, t.Modal = wn, t.Popover = On, t.Scrollspy = kn, t.Tab = Pn, t.Tooltip = Nn, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ "./public/assets/js/main.js":
/*!**********************************!*\
  !*** ./public/assets/js/main.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(/*! ../scss/global.scss */ "./public/assets/scss/global.scss"); // CSS


__webpack_require__(/*! ../css/bootstrap.min.css */ "./public/assets/css/bootstrap.min.css");

__webpack_require__(/*! ../css/bootstrap-grid.min.css */ "./public/assets/css/bootstrap-grid.min.css");

__webpack_require__(/*! ../css/bootstrap-reboot.min.css */ "./public/assets/css/bootstrap-reboot.min.css"); // JS


__webpack_require__(/*! ./bootstrap.bundle.min.js */ "./public/assets/js/bootstrap.bundle.min.js");

__webpack_require__(/*! ./bootstrap.min.js */ "./public/assets/js/bootstrap.min.js"); //SCEditor WhatYouSeeIsWhatYouGet


__webpack_require__(/*! ../SCEditor_wysiwyg/minified/themes/default.min.css */ "./public/assets/SCEditor_wysiwyg/minified/themes/default.min.css");

__webpack_require__(/*! ../SCEditor_wysiwyg/minified/sceditor.min.js */ "./public/assets/SCEditor_wysiwyg/minified/sceditor.min.js");

__webpack_require__(/*! ../SCEditor_wysiwyg/minified/icons/monocons.js */ "./public/assets/SCEditor_wysiwyg/minified/icons/monocons.js");

__webpack_require__(/*! ../SCEditor_wysiwyg/minified/formats/xhtml.js */ "./public/assets/SCEditor_wysiwyg/minified/formats/xhtml.js");

var imagesContext = __webpack_require__("./public/assets/SCEditor_wysiwyg/emoticons sync recursive \\.(png|jpg|jpeg|gif|ico|svg|webp)$");

imagesContext.keys().forEach(imagesContext); // loads the jquery package from node_modules

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

global.$ = $;
global.jQuery = $; // DatePicker

__webpack_require__(/*! ../bootstrap-datepicker-1.6.4-dist/css/bootstrap-datepicker.css */ "./public/assets/bootstrap-datepicker-1.6.4-dist/css/bootstrap-datepicker.css");

__webpack_require__(/*! ../bootstrap-datepicker-1.6.4-dist/js/bootstrap-datepicker.js */ "./public/assets/bootstrap-datepicker-1.6.4-dist/js/bootstrap-datepicker.js"); // Icons


__webpack_require__(/*! webpack-icons-installer */ "./node_modules/webpack-icons-installer/icons.js");

console.info('Your script is loaded.');
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./public/assets/scss/global.scss":
/*!****************************************!*\
  !*** ./public/assets/scss/global.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });