<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js"></script>

<canvas id="polarChart" width="400" height="400"></canvas>
<script type="text/javascript">
var pChart = document.getElementById("polarChart"),
	pChartAnimFlag = false;

var 5labels = ["読みやすさ", "深み", "新感覚", "すっきり", "収まり"];
var 5bgcolors = ["#33658A", "#86BBD8", "#758E4F", "#F6AE2D", "#F26419"];
var 5data = [3,1,2,2,5];
var chartTitle = '彼女は頭が悪いから';

// ポーラーチャート
function pChartFunc (5labels, 5bgcolors, 5data, chartTitle) {
	var ctx = pChart.getContext('2d'),
	chart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: [5labels[0], 5labels[1], 5labels[2], 5labels[3], 5labels[4]],
    datasets: [{
      backgroundColor: [
        5bgcolors[0],
        5bgcolors[1],
        5bgcolors[2],
        5bgcolors[3],
        5bgcolors[4]
      ],
      data: [5data[0],5data[1],5data[2],5data[3],5data[4]]
    }]
  },
options: {
            title: {
                display: true,
                text: chartTitle
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
function pChartAnim (5labels, 5bgcolors, 5data, chartTitle) {
	var wy = window.pageYOffset,
		wb = wy + screen.height - 300, // ウィンドウの最下部位置を取得
		// 各チャートの位置を取得
		pChartPos = wy + pChart.getBoundingClientRect().top;

	// チャートの位置がウィンドウの最下部位置を超えたら起動
	if ( wb > pChartPos && pChartAnimFlag == false ) {
		pChartFunc(5labels, 5bgcolors, 5data, chartTitle);
		pChartAnimFlag = true;
	}
};

window.addEventListener('load', pChartAnim(5labels, 5bgcolors, 5data, chartTitle)); // 読み込み時の処理
window.addEventListener('scroll', pChartAnim(5labels, 5bgcolors, 5data, chartTitle)); // スクロール時の処理
</script>  