import React, { useState } from "react";
import { useMutation } from "react-query";
import {  useNavigate } from "react-router-dom";
import { baseUrl } from "../../config";


export default function Book() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  const [data, setData] = useState({
    checkIn: "",
    checkOut: "",
    hotelId:""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const headers = { token: `${token}` };
  const {mutate : loginMutation } = useMutation(
    async () => {
      const response = await fetch(`${baseUrl}/bookings`, {
        method: "POST",
        headers: {
          ...headers,
          'Content-Type': 'application/json',
      },
        body: JSON.stringify(data),
      });      
      const textResponse = await response.text();
      console.log(textResponse);
      return textResponse
    },
    {
      onSuccess: () => {
        navigate(`/`)
      },
      onError: () => {
        alert('upload failed');
      }
    }
  );


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation();
  };


  return (
  <div className="loginBg">
    <div className="container">
    <form style={{ paddingBottom: '100px', padding: '100px' }} onSubmit={handleSubmit}>
      <div className="add" style={{ backgroundColor: 'white', padding: '0px 20px', borderRadius: '15px' }}>
        <br /><br /><br />
        <h1 style={{ color: '#1A4550', textAlign: 'center' }}>Add Hostel</h1>
        <br /><br />
        <div className="form-group">
          <label htmlFor="Name" style={{ color: '#1A4550', fontSize: '1.5rem' }}>checkIn</label>
          <center><input style={{width:'30%'}} className='form-control' type="text" id="checkIn" name="checkIn" placeholder='checkIn' onChange={handleChange} /></center>
          
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="Description" style={{ color: '#1A4550', fontSize: '1.5rem' }}>checkOut</label>
          <center><input  style={{width:'30%'}} className='form-control' type="text" id="checkOut" name="checkOut" placeholder="checkOut" onChange={handleChange} /></center>
        </div>
        <br /><br />
        <div className="form-group">
          <label htmlFor="Location" style={{ color: '#1A4550', fontSize: '1.5rem' }}>hotelId</label>
          <center><input  style={{width:'30%'}} className='form-control' type="text" id="hotelId" name="hotelId" placeholder="hotelId" onChange={handleChange} /></center>
        </div>
        <br /><br />
       
        <button type="submit" className='btnMain2 btn-block'>Add</button>
      </div>
    </form>
    </div>    
  </div>

  );
}
