var adjust = require( "./adjustModel.js" );

// 入力
var initialGlucouseInput = document.getElementById('initial-glucouse-level-input');
var secondGlucouseInput = document.getElementById('second-glucose-level-input');
var submitButton = document.getElementById('button-submit');

// 出力
var insulinOutput = document.getElementById('insulin-value');

// 開始時投与量
var initialInsulin = 1.0;

var calculateInsulin = function() {
	var initialGlucouse = parseInt(initialGlucouseInput.value);
	var secondGlucouse = parseInt(secondGlucouseInput.value);

	var insulinAdjustA;
	var insulinAdjustB;

	insulinAdjustA = adjust.getAdjustA(parseInt(secondGlucouse));

	insulinAdjustB = adjust.getAdjustB(parseInt(initialGlucouse), parseInt(secondGlucouse));

	// フォームに何も入力されていないときは出力しない
	if (!Number.isFinite(initialGlucouse) || !Number.isFinite(secondGlucouse)) {
		insulinOutput.innerHTML = "";
	}
	else {
		insulinOutput.innerHTML = Math.max(0, Math.round((initialInsulin+insulinAdjustA+insulinAdjustB)*10)/10);
	}
};

submitButton.addEventListener('click', calculateInsulin);


