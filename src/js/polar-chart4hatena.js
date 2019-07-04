<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js"></script>
<canvas id="polarChart" width="400" height="400"></canvas>
<script type="text/javascript">
  var pChart = document.getElementById("polarChart"),
    pChartAnimFlag = false;

  // ポーラーチャート
var pChartFunc = function () {
	  var ctx = pChart.getContext('2d'),
	    chart = new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: ["観やすさ", "深み", "爽快感", "闇が深い", "収まり"],
          datasets: [{
            backgroundColor: [
              "#93B5C6", "#DDEDAA", "#F0CF65", "#D7816A", "#BD4F6C"
            ],
            data: [3,3,4,5,4]
          }]
        },
        options: {
          title: {
            display: true,
            text: 'スノーデン'
          },
          scale:{
            ticks: {
              suggestedMin: 0,
              suggestedMax: 5,
              stepSize: 1
            }
          }
          }
      });
  };

  // スクロール処理
var pChartAnim = function () {
	  var wy = window.pageYOffset,
      wb = wy + screen.height - 300, // ウィンドウの最下部位置を取得
      // 各チャートの位置を取得
      pChartPos = wy + pChart.getBoundingClientRect().top;
  
    // チャートの位置がウィンドウの最下部位置を超えたら起動
	  if ( wb > pChartPos && pChartAnimFlag == false ) {
      pChartFunc();
      pChartAnimFlag = true;
	  }
  };
  window.addEventListener('load', pChartAnim); // 読み込み時の処理
  window.addEventListener('scroll', pChartAnim); // スクロール時の処理
</script>