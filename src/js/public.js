function buttonClick(){

	var firstName = document.form1.firstName.value;
	var lastName = document.form1.lastName.value;

	//全角→半角 & trim
	firstName = firstName.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
		return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
	}).trim();
	lastName = lastName.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
		return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
	}).trim();

	//複数半角スペースを排除
	firstName = firstName.replace(/\s+/g, " ");
	lastName = lastName.replace(/\s+/g, " ");

	//大文字化
	firstName = firstName.toUpperCase();
	lastName = lastName.toUpperCase();

	//NO LAST NAMEがあればブランクへ変換
	lastName = lastName.replace("NO LAST NAME", "");

	//結合(姓名の間に半角スペース付与)後、21文字以上は切り捨て
	var cardName = "";
	if (firstName !== "" && lastName !== "") {
		cardName = (firstName + " " + lastName).substr(0,20);
	} else {
		cardName = (firstName + lastName).substr(0,20);
	}

	//最終アウトプット
	document.form1.cardName.value = cardName;
}