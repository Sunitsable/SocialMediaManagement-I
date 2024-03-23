import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Charts = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: 'Sales',
      },
      xaxis: {
        categories: [
          30, 11, 20, 27, 32, 38, 10, 22, 26, 35,
          17, 16, 12, 24, 39, 19, 33, 30, 34, 31,
          17, 25, 27, 42, 17, 46, 31, 30, 49, 26,
          12, 47, 13, 26, 36, 49, 32, 11, 24, 48,
          39, 22, 15, 35, 33, 45, 21, 22, 17 
        ],
      },
    },
    series: [
      {
        name: 'Instagram',
        data: [
          48, 47, 79, 72, 87, 22, 74, 96, 56, 88, 72, 23, 95, 42, 22, 77, 26,
          96, 51, 34, 73, 54, 29, 40, 30, 53, 81, 64, 67, 72, 86, 93, 38, 76,
          78, 73, 82, 55, 30, 88, 66, 69, 69, 45, 69, 85, 84, 72, 91
        ],
      },
      {
        name: 'Facebook',
        data:[
          44, 44, 40, 42, 79, 29, 24, 63, 37, 65, 
          41, 33, 39, 94, 57, 53, 38, 49, 30, 35, 
          78, 62, 23, 82, 36, 93, 92, 88, 71, 76, 
          24, 92, 31, 66, 87, 73, 32, 36, 22, 40, 
          37, 78, 74, 63, 76, 43, 88, 32, 47
        ]
      },
      {
        name:"Youtube",
        data:[
          53, 52, 73, 41, 32, 72, 73, 45, 43, 53, 
    20, 76, 3, 13, 29, 39, 71, 36, 56, 56, 
    63, 1, 44, 38, 26, 17, 60, 2, 2, 17, 
    58, 55, 19, 60, 51, 27, 46, 54, 51, 
    9, 4, 3, 45, 60, 61, 45, 23, 27, 37
        ]
      }
    ],
  });

  return (
    <div>

    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="1000"
      />
    </div>
     <div>
     <Chart
       options={state.options}
       series={state.series}
       type="line"
       width="1000"
     />
   </div>
   </div> 
  );
};

export default Charts;
