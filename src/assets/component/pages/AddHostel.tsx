import React, { useState } from "react";
import { useMutation } from "react-query";
import {  useNavigate } from "react-router-dom";
import { baseUrl } from "../../config";
import Form from 'react-bootstrap/Form';



export default function AddHostel() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    description: "",
    location:"",
    picture:""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const headers = { token: `${token}` };
  const {mutate : loginMutation } = useMutation(
    async () => {
      const response = await fetch(`${baseUrl}/hotels`, {
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
          <label htmlFor="Name" style={{ color: '#1A4550', fontSize: '1.5rem' }}>Name</label>
          <center><input style={{width:'30%'}} className='form-control' type="text" id="name" name="name" placeholder='name' onChange={handleChange} /></center>
          
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="Description" style={{ color: '#1A4550', fontSize: '1.5rem' }}>Description</label>
          <center><input  style={{width:'30%'}} className='form-control' type="text" id="description" name="description" placeholder="description" onChange={handleChange} /></center>
        </div>
        <br /><br />
        <div className="form-group">
          <label htmlFor="Location" style={{ color: '#1A4550', fontSize: '1.5rem' }}>Location</label>
          <center><input  style={{width:'30%'}} className='form-control' type="text" id="location" name="location" placeholder="location" onChange={handleChange} /></center>
        </div>
        <br /><br />
        <h2 style={{marginBottom: "20px"}}>Poster une image principal</h2>
        <center>
        <Form.Label>Choisir une image principal</Form.Label>
        <Form.Control style={{width:'30%'}} type="text" id="picture" name="picture" onChange={handleChange} placeholder="picture"/>
        <Form onSubmit={handleSubmit} className="mb-3">
            <Form.Label>Choisir une image principal</Form.Label>
            <Form.Control type="file" id="image" name="image"  />
        </Form>
        </center>
       
        <button type="submit" className='btnMain2 btn-block'>Add</button>
      </div>
    </form>
    </div>    
  </div>

  );
}
