import React from 'react';
import { Chart, Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-doughnut-innertext';
import ReactDOM from 'react-dom';
// import ChartListWae from 'assets/js/ChartListWae';
// import { Chart } from 'react-chartjs-2';
// import { Chart } from 'react-chartjs-2';
let akucenter = {
  afterUpdate: function (chart) {
    if (chart.config.options.elements.center) {
      var helpers = Chart.helpers;
      var centerConfig = chart.config.options.elements.center;
      var globalConfig = Chart.defaults.global;
      var ctx = chart.chart.ctx;

      var fontStyle = helpers.getValueOrDefault(
        centerConfig.fontStyle,
        globalConfig.defaultFontStyle
      );
      var fontFamily = helpers.getValueOrDefault(
        centerConfig.fontFamily,
        globalConfig.defaultFontFamily
      );

      if (centerConfig.fontSize) var fontSize = centerConfig.fontSize;
      // figure out the best font size, if one is not specified
      else {
        ctx.save();
        var fontSize = helpers.getValueOrDefault(centerConfig.minFontSize, 1);
        var maxFontSize = helpers.getValueOrDefault(
          centerConfig.maxFontSize,
          256
        );
        var maxText = helpers.getValueOrDefault(
          centerConfig.maxText,
          centerConfig.text
        );

        do {
          ctx.font = helpers.fontString(fontSize, fontStyle, fontFamily);
          var textWidth = ctx.measureText(maxText).width;

          // check if it fits, is within configured limits and that we are not simply toggling back and forth
          if (textWidth < chart.innerRadius * 2 && fontSize < maxFontSize)
            fontSize += 1;
          else {
            // reverse last step
            fontSize -= 1;
            break;
          }
        } while (true);
        ctx.restore();
      }

      // save properties
      chart.center = {
        font: helpers.fontString(fontSize, fontStyle, fontFamily),
        fillStyle: helpers.getValueOrDefault(
          centerConfig.fontColor,
          globalConfig.defaultFontColor
        ),
      };
    }
  },
  afterDraw: function (chart) {
    if (chart.center) {
      var centerConfig = chart.config.options.elements.center;
      var ctx = chart.chart.ctx;

      ctx.save();
      ctx.font = chart.center.font;
      ctx.fillStyle = chart.center.fillStyle;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
      ctx.fillText(centerConfig.text, centerX, centerY);
      ctx.restore();
    }
  },
};
let wow = {
  afterUpdate: function (chart) {
    if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
      var arc =
        chart.getDatasetMeta(0).data[
          chart.config.options.elements.arc.roundedCornersFor
        ];
      arc.round = {
        x: (chart.chartArea.left + chart.chartArea.right) / 2,
        y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
        radius: (chart.outerRadius + chart.innerRadius) / 2,
        thickness: (chart.outerRadius - chart.innerRadius) / 2 - 1,
        backgroundColor: arc._model.backgroundColor,
      };
    }
  },
  afterDraw: function (chart) {
    if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
      var ctx = chart.chart.ctx;
      var arc =
        chart.getDatasetMeta(0).data[
          chart.config.options.elements.arc.roundedCornersFor
        ];
      var startAngle = Math.PI / 2 - arc._view.startAngle;
      var endAngle = Math.PI / 2 - arc._view.endAngle;

      ctx.save();
      ctx.translate(arc.round.x, arc.round.y);
      console.log(arc.round.startAngle);
      ctx.fillStyle = arc.round.backgroundColor;
      ctx.beginPath();
      ctx.arc(
        arc.round.radius * Math.sin(startAngle),
        arc.round.radius * Math.cos(startAngle),
        arc.round.thickness,
        0,
        2 * Math.PI
      );
      ctx.arc(
        arc.round.radius * Math.sin(endAngle),
        arc.round.radius * Math.cos(endAngle),
        arc.round.thickness,
        0,
        2 * Math.PI
      );
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  },
};
export const ContentRight = () => {
  return (
    <div
      className="
                    container
                    d-flex
                    flex-lg-column flex-column-reverse
                    col-xl-3
                  "
    >
      <div id="task-done">
        <div
          className="
                      d-sm-flex
                      align-items-center
                      justify-content-between
                      mb-4
                    "
        >
          <h1 className="h3 mb-0 text-gray-800 font-weight-bold">
            Telah Selesai
          </h1>
        </div>
        <div className="row">
          <div className="mb-4">
            <div className="card shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      Service motor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="card shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      Rakit PC
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="task-done">
        <div
          className="
                      d-sm-flex
                      align-items-center
                      justify-content-between
                      mb-4
                    "
        >
          <h1 className="h3 mb-0 text-gray-800 font-weight-bold">Pencapaian</h1>
        </div>
        <div className="col-lg flex-grow-1" id="padding-left-right-none">
          <div className="card shadow mb-4">
            <div className="card-body">
              <div className="chart-pie mb-4" id="height-auto">
                <Doughnut
                  data={{
                    labels: ['Sedang Berlangsung', 'Sedang Berlangsung'],
                    datasets: [
                      {
                        data: [35, 65],
                        backgroundColor: ['#5C62EC', '#E3DDDD'],
                        hoverBackgroundColor: ['#5C62EC', '#E3DDDD'],
                      },
                    ],
                  }}
                  options={{
                    legend: { display: false },
                    cutoutPercentage: 80,
                    centerText: {
                      color: '#000',
                      value: 340,
                      fontSizeAdjust: 0.2, // increase font size 20% based on default font size
                    },
                    elements: {
                      arc: {
                        roundedCornersFor: 0,
                      },
                      center: {
                        // the longest text that could appear in the center
                        maxText: '100%',
                        text: '67%',
                        fontColor: '#5B5959',
                        fontFamily:
                          "'Poppins', 'Helvetica', 'Arial', sans-serif",
                        fontStyle: 'bold',
                        fontSize: 18,
                        minFontSize: 1,
                        maxFontSize: 256,
                      },
                    },
                  }}
                  plugins={[wow, akucenter]}
                />
              </div>
              <div className="mt-4 text-center small mb-4 d-flex flex-column">
                <span className="mr-2">
                  <i className="fas fa-circle done"></i> Sedang Berlangsung
                </span>
                <span className="mr-2">
                  <i className="fas fa-circle not-done"></i> Sedang Berlangsung
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentRight;
