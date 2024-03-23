import React, { useState } from 'react';
import axios from 'axios';
import BgImage from "../Components/BgImage"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Generate.css';

const Generate = () => {
    const [formData, setFormData] = useState({
        Gender: '',
        DOB: '',
        City: '',
        Country: ''
    });

    const [responseData, setResponseData] = useState({
        content: { text: '' },
        imageUrl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/contents', formData);
            console.log('Response from backend:', response.data);

            if (response.data.success) {
                setResponseData(response.data);
            } else {
                console.error('Error:', response.data.error);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
      <div className='Generatee'>
          <BgImage>
          <h1>Generate Content</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group" style={{
                  display:"flex",
                  
                }}>
                    <label htmlFor="gender" className='label'>Gender</label>
                    <input type="text" className={"form-control"}id="gender" name="gender" value={formData.gender} onChange={handleChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="dob" className='label'>Date of Birth</label>
                    <input type="date" className="form-control" id="DOB" name="DOB" value={formData.DOB} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="city" className='label'>City</label>
                    <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="country" className='label'>Country</label>
                    <input type="text" className="form-control" id="country" name="country" value={formData.country} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="gender" className='label'>Product Description</label>
                    <input type="text" className="form-control" id="product_description" name="product_description" value={formData.product_description} onChange={handleChange} />
                </div>
                <Button type="submit" variant="primary" className='btn'>Submit</Button>
            </form>
            <div className="response-container" style={{
              display:"flex",
              flexDirection:"column"
            }}>
                <div className='img-holder'>
                  {responseData.imageUrl && <img src={responseData.imageUrl} alt="Generated Image" className='img'/>}
                </div>
                <div className="response-text">{responseData.content.text}</div>
            </div>
      </BgImage>
        </div>
    );
}

export default Generate;
