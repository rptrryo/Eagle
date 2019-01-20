<!DOCTYPE unspecified PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="Content-Style-Type" content="text/css" />
	<link href="css/sample.css" rel="stylesheet" type="text/css" media="all" />
	<title>Hello, World!!</title>
</head>
<body>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script type="text/javascript" src="js/public.js"></script>
	<script type="text/javascript" src="js/modal.js"></script>
	<form name="form1" id="form1" action="">
		<input type="text" id="firstName" value="" />
		<input type="text" id="lastName" value="" />
		<input type="text" id="cardName" value="" />
		<input type="button" onclick="buttonClick();" value="TEST" /><br/>
		<input type="text" class="sample" id="placeHoldreTest" value="" placeholder = "aaa" style = "color:#ff0000" />
	</form>
	<p><?php echo "Hello, I'm PHP!"; ?></p>

	<p><a id="modal-open" class="button-link">クリックするとモーダルウィンドウを開きます。</a></p>

	<div id="modal-content">
		<p>「閉じる」か「背景」をクリックするとモーダルウィンドウを終了します。</p>
		<p><a id="modal-close" class="button-link">閉じる</a></p>
	</div>
</body>
</html>
