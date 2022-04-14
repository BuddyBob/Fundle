import React from 'react';
import Plot from 'react-plotly.js';

const BarChart = () => {
    let { tries } = JSON.parse(localStorage.getItem("stats"))
    let triesData = []
    for (let i = 0; i < Object.keys(tries).length; i++) {triesData.push(tries[i+1])}
    console.log(triesData)
    const data={
      type: 'bar', 
      x: triesData, y: [1,2,3,4,5,6], 
      orientation: 'h',
      marker: {
        color: '#474747',
      },
      hoverinfo: 'none',
    };
  return (
    <Plot
      data={[data]}
      layout={{
        width: 300, 
        height: 150,
        margin: {
          l: 40,
          r: 20,
          b: 30,
          t: 30,
          pad: 3
        },
        plot_bgcolor:"1f1f1f",
        paper_bgcolor:"#1f1f1f",
        font:{
          color:"white",
          family: 'Oswald, monospace',
        },
        title: {
          text: 'Guess Distribution',
          font: {
            size: 20
          }
        },
        yaxis: {
          title: {
            text: 'Attempt',
            font: {
              size: 12
            }
          }
        },
        xaxis: {
          title: {
            text: 'Count',
            font: {
              size: 12
            }
          }
        }
      }}
      />
      
  )
}

export default BarChart