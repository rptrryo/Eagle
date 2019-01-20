PHPスクリプトを実行
<?php
/*
	サンプルプログラム
 */

$number = rand();
if ($number % 2 == 0) {
	echo $number, "は偶数だ！", PHP_EOL;
} else {
	echo $number, "は奇数だ。。", PHP_EOL;

}