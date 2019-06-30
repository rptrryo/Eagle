<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js"></script>

<canvas id="polarChart" width="400" height="400"></canvas>
<script type="text/javascript">
  var pChart = document.getElementById("polarChart"),
    pChartAnimFlag = false;
  
  var fiveLabels = [1, 2, 3, 5, 4];
  var filveBgColors = ["#33658A", "#86BBD8", "#758E4F", "#F6AE2D", "#F26419"];
  var fiveDatas = [3,1,2,2,5];
  var chartTitle = '彼女は頭が悪いから';

  window.addEventListener('load', pChartAnim(fiveLabels, filveBgColors, fiveDatas, chartTitle)); // 読み込み時の処理
  window.addEventListener('scroll', pChartAnim(fiveLabels, filveBgColors, fiveDatas, chartTitle)); // スクロール時の処理
    
  // ポーラーチャート
  function pChartFunc (fiveLabels, filveBgColors, fiveDatas, chartTitle) {
	  var ctx = pChart.getContext('2d'),
	    chart = new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: [fiveLabels[0], fiveLabels[1], fiveLabels[2], fiveLabels[3], fiveLabels[4]],
          datasets: [{
            backgroundColor: [
              filveBgColors[0],
              filveBgColors[1],
              filveBgColors[2],
              filveBgColors[3],
              filveBgColors[4]
            ],
            data: [fiveDatas[0],fiveDatas[1],fiveDatas[2],fiveDatas[3],fiveDatas[4]]
          }]
        },
        options: {
          title: {
            display: true,
            text: chartTitle
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
  function pChartAnim (fiveLabels, filveBgColors, fiveDatas, chartTitle) {
	  var wy = window.pageYOffset,
      wb = wy + screen.height - 300, // ウィンドウの最下部位置を取得
      // 各チャートの位置を取得
      pChartPos = wy + pChart.getBoundingClientRect().top;
  
    // チャートの位置がウィンドウの最下部位置を超えたら起動
	  if ( wb > pChartPos && pChartAnimFlag == false ) {
      pChartFunc(fiveLabels, filveBgColors, fiveDatas, chartTitle);
      pChartAnimFlag = true;
	  }
  };
</script>