import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ColumnChart = ({ data, labels }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    let chartInstance = null;
  
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');
      
      if (chartInstance) {
        chartInstance.destroy();
      }
  
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Percentage',
            data: data,
            backgroundColor: ['#023F6D']
          }]
        },
        options: {
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  let label = context.dataset.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed.y !== null) {
                    label += Math.round((context.parsed.y / context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0)) * 100) + '%';
                  }
                  return label;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  return value + '%';
                }
              }
            }
          }
        }
      });
    }
  
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data, labels]);
  

  return (
    <div className="w-full h-full">
      <canvas ref={chartContainer} />
    </div>
  );
};

export default ColumnChart;
