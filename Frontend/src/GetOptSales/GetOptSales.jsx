// import React from 'react'
// import "./GetOptSales.css"
// import BgImage from "../Components/BgImage";
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TvIcon from '@mui/icons-material/Tv';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./getopts.css"
// const GetOptSales = () => {
//   return (
//     <BgImage>

//     <div className='getOpt'>
//       <div className='gapbada'>
//         <h1>Get Optimal Sales Of Social Media Websites </h1>

      
      
//       <div className='Instagram'>
//         <InstagramIcon/>
//         <input type="text" className="inputbox1" placeholder='Instagram'/>
//       </div>
      // <div className='Facebook'>
      //   <FacebookIcon/>
      //   <input type="text" className="inputbox1" placeholder='Facebook'/>
      // </div>
      // <div className='Youtube'>
      //   <YouTubeIcon/>
      //   <input type="text" className="inputbox1" placeholder='Youtube'/>
      // </div>
      // <div className='Twitter'>
      //   <TvIcon/>
      //   <input type="text" className="inputbox1" placeholder='Twitter'/>
      // </div>
      // <div className='Telegram'>
      //   <TvIcon/>
      //   <input type="text" className="inputbox1" placeholder='Telegram'/>
      // </div>
      // <div className='Whatsapp'>
      //   <TvIcon/>
      //   <input type="text" className="inputbox1" placeholder='Whatsapp'/>
      // </div>
      // <div className='TikTok'>
      //   <TvIcon/>
      //   <input type="text" className="inputbox1" placeholder='TikTok'/>
      // </div>
      // <div className='Radio'>
      //   <TvIcon/>
      //   <input type="text" className="inputbox1" placeholder='Radio'/>
      // </div>
      // <div className='TV'>
      //   <TvIcon/>
      //   <input type="text" className="inputbox1" placeholder='TV'/>
      // </div>
      // <div className='Newspaper'>
      //   <TvIcon/>
      //   <input type="text" className="inputbox1" placeholder='Newspaper'/>
      // </div>
      // <div className='Website'>
      //   <TvIcon/>
      //   <input type="text" className="inputbox1" placeholder='Website'/>
      // </div>

//       <Button as="a" variant="primary"> Submit</Button>
//       </div>
//     </div>
//     </BgImage>
//   )
// }

// export default GetOptSales
import React, { useState } from 'react';
import axios from 'axios';
import BgImage from "../Components/BgImage";
import FacebookIcon from '@mui/icons-material/Facebook';
import TvIcon from '@mui/icons-material/Tv';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./getopts.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RadioIcon from '@mui/icons-material/Radio';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LanguageIcon from '@mui/icons-material/Language';

const SalesDisplay = ({saleProp}) => {
  return(
    <div>
    <h2>Sales Display</h2>
    <ul>
      {Object.keys(saleProp).map((key) => (
        <li key={key}>
          <strong>{key}:</strong> 
          <div>{saleProp[key]}</div>
        </li>
        // <h1>Hello World</h1>
      ))}
    </ul>
  </div>
  ) 
}

const GetOptSales = () => {
    const [formData, setFormData] = useState({
        instagram: '',
        facebook: '',
        youtube: '',
        twitter: '',
        telegram: '',
        whatsapp: '',
        tiktok: '',
        radio: '',
        tv: '',
        newspaper: '',
        website: ''
    });

    const [sales, setSales] = useState({});
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/budget', formData);
            console.log('Response from backend:', response.data);

            if (response.data.success) {
                setSales(response.data.sales);
                setError(null);
            } else {
                setError(response.data.error);
                setSales({});
            }
        } catch (error) {
            console.error('Error:', error.message);
            setError('An error occurred while processing the request.');
            setSales({});
        }
    };

    return (
        <BgImage>
            <div className='getOpt'>
                <div className='gapbada'>
                    <h1>Get Optimal Sales Of Social Media Websites</h1>

                    <div className='Instagram'>
                        <InstagramIcon />
                        <input type="text" className="inputbox1" name="instagram" placeholder='instagram' value={formData.instagram} onChange={handleChange} />
                    </div>
                    <div className='Facebook'>
        <FacebookIcon/>
        <input type="text" className="inputbox1" name="facebook" placeholder='facebook' value={formData.facebook} onChange={handleChange} />
      </div>
      <div className='Youtube'>
        <YouTubeIcon/>
        <input type="text" className="inputbox1" name="youtube" placeholder='youtube' value={formData.youtube} onChange={handleChange} />
      </div>
      <div className='Twitter'>
        <TwitterIcon/>
        <input type="text" className="inputbox1" name="twitter" placeholder='twitter' value={formData.twitter} onChange={handleChange} />
      </div>
      <div className='Telegram'>
        <TelegramIcon/>
        <input type="text" className="inputbox1" name="telegram" placeholder='telegram' value={formData.telegram} onChange={handleChange} />
      </div>
      <div className='Whatsapp'>
        <WhatsAppIcon/>
        <input type="text" className="inputbox1" name="whatsapp" placeholder='whatsapp' value={formData.whatsapp} onChange={handleChange} />
      </div>
      <div className='TikTok'>
        <AccountCircleIcon/>
        <input type="text" className="inputbox1" name="tiktok" placeholder='tiktok' value={formData.tiktok} onChange={handleChange} />
      </div>
      <div className='Radio'>
        <RadioIcon/>
        <input type="text" className="inputbox1" name="radio" placeholder='radio' value={formData.radio} onChange={handleChange} />
      </div>
      <div className='TV'>
        <TvIcon/>
        <input type="text" className="inputbox1" name="tv" placeholder='tv' value={formData.tv} onChange={handleChange} />
      </div>
      <div className='Newspaper'>
        <NewspaperIcon/>
        <input type="text" className="inputbox1" name="newspaper" placeholder='newspaper' value={formData.newspaper} onChange={handleChange} />
      </div>
      <div className='Website'>
        <LanguageIcon/>
        <input type="text" className="inputbox1" name="website" placeholder='website' value={formData.website} onChange={handleChange} />
      </div>
                    <Button as="a" variant="primary" onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
            {sales && (
                <div className="sales-info">
                    {/* <h2>Sales Information</h2> */}
                    {/* <div>Instagram: {sales.instagram}</div>
                    <div>Facebook: {sales.facebook}</div>
                    <div>Youtube: {sales.youtube}</div>
                    <div>Twitter: {sales.twitter}</div>
                    <div>Telegram: {sales.telegram}</div>
                    <div>Whatsapp: {sales.whatsapp}</div>
                    <div>Radio: {sales.radio}</div>
                    <div>TV: {sales.tv}</div>
                    <div>Newspaper: {sales.newspaper}</div>
                    <div>Website: {sales.website}</div> */}
                    <SalesDisplay saleProp ={sales}/>                   
                </div>
            )}
            {error && <div className="text-danger">{error}</div>}
        </BgImage>
    );
}

export default GetOptSales;
