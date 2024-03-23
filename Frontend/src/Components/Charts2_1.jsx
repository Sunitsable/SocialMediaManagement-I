import React,{useState} from 'react'
import Chart from 'react-apexcharts';

const Charts2_1 = () => {
    const [state, setState] = useState({
        options: {
          chart: {
            id: 'Likes_Retweets_Sum',
          },
          xaxis: {
            categories: [
              60, 37, 45, 67, 83, 45, 23, 90, 45, 23,
              90, 45, 45, 53, 75, 53, 90, 67, 37, 60
            ],
          },
          colors: ['#ff5722'],
        },
        series: [
          {
            name: 'Instagram',
            data: [
                44941.65625, 44941.8298611111, 44942.8125, 44943.6354166667, 44945.7152777778, 44946.6354166667, 44948.5, 44949.8229166667, 44950.7291666667,44952.40625, 44953.8333333333, 44954.375, 44955.7083333333, 44956.65625, 44957.7916666667
             
            ],
          }
        ],
      });
     
      return (
        <div>
    
        <h1>Posting Schedule for Instagram </h1>
         <div>
         <Chart
           options={state.options}
           series={state.series}
           type="line"
           width="1000"
         />
          
       </div>
        </div> 
      )
  
}

export default Charts2_1