<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js"></script>

<canvas id="polarChart" width="400" height="400"></canvas>
<script type="text/javascript">
var chartEl1 = document.getElementById("polarChart"),
	chartFlag1 = false;

// １つ目のチャート
var chart1Func = function() {
	var ctx = chartEl1.getContext('2d'),
	chart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ["読みやすさ", "深み", "新感覚", "すっきり", "収まり"],
    datasets: [{
      backgroundColor: [
        "#33658A",
        "#86BBD8",
        "#758E4F",
        "#F6AE2D",
        "#F26419"
      ],
      data: [3, 1, 2, 2, 5]
    }]
  },
options: {
            title: {
                display: true,
                text: '彼女は頭が悪いから'
            },
            scale:{
                ticks:{
                    suggestedMin: 0,
                    suggestedMax: 5,
                    stepSize: 1
                }
            }
        }
});
};

// スクロール処理
var pieGraphAnim = function() {
	var wy = window.pageYOffset,
		wb = wy + screen.height - 300, // ウィンドウの最下部位置を取得
		// 各チャートの位置を取得
		chartElPos1 = wy + chartEl1.getBoundingClientRect().top;

	// チャートの位置がウィンドウの最下部位置を超えたら起動
	if ( wb > chartElPos1 && chartFlag1 == false ) {
		chart1Func();
		chartFlag1 = true;
	}
};

window.addEventListener('load', pieGraphAnim); // 読み込み時の処理
window.addEventListener('scroll', pieGraphAnim); // スクロール時の処理
</script>  