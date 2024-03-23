import React,{useState} from 'react'
import Chart from 'react-apexcharts';

const Charts2_3 = () => {
    const [state, setState] = useState({
        options: {
          chart: {
            id: 'Likes_Retweets_Sum',
          },
          xaxis: {
            categories: [
              23,30,53,37,60,75,45,60,75,37,90,67,37,45,45,45
            ],
          },
        },
        series: [
          {
            name: 'facebook',
            data: [
                44941.7638888889, 44942.6145833333, 44943.5138888889, 44944.6180555556, 44945.5555555556, 44946.4791666667, 44947.5555555556, 44948.6041666667, 44949.6805555556, 44950.625, 
                44951.5520833333, 44952.7361111111, 44953.6736111111, 44954.8125, 44956.4791666667, 44957.4479166667
             
            ],
          }
        ],
      });
     
      return (
        <div>
    
    <h1>Posting Schedule for Facebook </h1>
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

export default Charts2_3