// import React, { useState } from 'react';
// import axios from 'axios';

// const TrackPerfom = () => {
//     const [formData, setFormData] = useState({
//         days: '',
//         max_bid_cpm: '',
//         impressions: '',
//         cost: ''
//     });

//     const [predictedClicks, setPredictedClicks] = useState(null);
//     const [error, setError] = useState(null);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://127.0.0.1:5000/performance', formData);
//             console.log('Response from backend:', response.data);

//             if (response.data.success) {
//                 setPredictedClicks(response.data.predictedClicks);
//                 setError(null);
//             } else {
//                 setError(response.data.error);
//                 setPredictedClicks(null);
//             }
//         } catch (error) {
//             console.error('Error:', error.message);
//             setError('An error occurred while processing the request.');
//             setPredictedClicks(null);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="days">days</label>
//                     <input type="number" className="form-control" id="days" name="days" value={formData.days} onChange={handleChange} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="max_bid_cpm">max_bid_cpm</label>
//                     <input type="number" className="form-control" id="max_bid_cpm" name="max_bid_cpm" value={formData.max_bid_cpm} onChange={handleChange} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="impressions">Impressions</label>
//                     <input type="number" className="form-control" id="impressions" name="impressions" value={formData.impressions} onChange={handleChange} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="cost">Media Cost</label>
//                     <input type="number" className="form-control" id="cost" name="cost" value={formData.cost} onChange={handleChange} />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//             {predictedClicks !== null && <div>Predicted Clicks/Performance: {predictedClicks}</div>}
//             {error && <div className="text-danger">{error}</div>}
//         </div>
//     );
// }

// export default TrackPerfom;




import React, { useState } from 'react';
import axios from 'axios';
import Charts from './Charts';
import "./TrackPerformance.css"
const TrackPerfom = () => {
    const [formData, setFormData] = useState({
        days: '',
        max_bid_cpm: '',
        impressions: '',
        cost: ''
    });

    const [predictedClicks, setPredictedClicks] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/performance', formData);
            console.log('Response from backend:', response.data);

            if (response.data.success) {
                setPredictedClicks(response.data.predictedClicks);
                setError(null);
            } else {
                setError(response.data.error);
                setPredictedClicks(null);
            }
        } catch (error) {
            console.error('Error:', error.message);
            setError('An error occurred while processing the request.');
            setPredictedClicks(null);
        }
    };

    return (
        <div>
            <h1>Track Your Performance</h1>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className="form-group">
                    <label htmlFor="days">No of Days</label>
                    <input type="number" className="form-control" id="days" name="days" value={formData.days} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="max_bid_cpm">Max_bid_cpm</label>
                    <input type="number" className="form-control" id="max_bid_cpm" name="max_bid_cpm" value={formData.max_bid_cpm} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="impressions">Impressions</label>
                    <input type="number" className="form-control" id="impressions" name="impressions" value={formData.impressions} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="cost">Media Cost</label>
                    <input type="number" className="form-control" id="cost" name="cost" value={formData.cost} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {predictedClicks !== null && <div style={{fontSize:'40px',fontFamily:'cursive'}}>Performance: {predictedClicks}</div>}
            {error && <div className="text-danger">{error}</div>}
            <Charts/>
        </div>
    );
}

export default TrackPerfom;