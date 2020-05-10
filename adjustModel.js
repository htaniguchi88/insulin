var insulinObjectA = require( "./insulinA.json" );
var insulinObjectB = require( "./insulinB.json" );

function isBetween(min, value, max) {
	return min <= value && value <=max;
}

exports.getAdjustA = function(glucouse2){
	var result = null;
	Object.keys(insulinObjectA).forEach(function(key){
		if (isBetween(parseInt(insulinObjectA[key].min), glucouse2, parseInt(insulinObjectA[key].max))){
			result = parseFloat(insulinObjectA[key].insulinAdjust);
		}
	});
	if (result == null){
		console.error("A表の範囲外です");
	}
	return result;
}

exports.getAdjustB = function(glucouse1, glucouse2){
	var result = null;
	Object.keys(insulinObjectB).forEach(function(key){
		if (isBetween(parseInt(insulinObjectB[key].min), glucouse2-glucouse1, parseInt(insulinObjectB[key].max))){
			result = parseFloat(insulinObjectB[key].insulinAdjust);
		}
	});
	if (result == null){
		console.error("B表の範囲外です");
	}
	return result;
}
