import React,{useState} from 'react'
import Chart from 'react-apexcharts';

const Charts2_2 = () => {
    const [state, setState] = useState({
        options: {
          chart: {
            id: 'Likes_Retweets_Sum',
          },
          xaxis: {
            categories: [
              45,50,75,90,22,45,53,67,60,45,45,45,75,53,83
            ],
          },
          colors: ['#00ff00'],
          
        },
        series: [
          {
            name: 'Twitter',
            data: [
                44941.5208333333, 44941.3645833333, 44942.3819444444, 44943.3333333333, 44944.4375, 44945.40625, 44946.0034722222, 44947.3611111111, 44948.3854166667, 44950.4791666667, 
                44951.75, 44952.5972222222, 44953.5208333333, 44954.6145833333, 44955.8472222222, 44956.7708333333
             
            ],
          }
        ],
      });
     
      return (
        <div>
    
    <h1>Posting Schedule for Twitter </h1>
         <div>
         <Chart
           options={state.options}
           series={state.series}
           type="line"
           width="1000"
         />
          2
       </div>
        </div> 
      )
  
}

export default Charts2_2