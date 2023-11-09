import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setuploadVideoStatus}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [video,setVideo]=useState(
    {
      id:"",
      caption:"",
      url:"",
      embedLink:""
    }
  )
  // console.log(video);

  const embedded=(e)=>
  {
    const {value}=e.target
    // console.log(value.slice(-11));
    const link=`https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embedLink:link})
  }
  console.log(video);

  const handleUpload=async ()=>
  {
    const {id,caption,url,embedLink}=video
    if(!id || !caption || !url || !embedLink)
    {
      toast.warning('Please fill the form completely')
    }
    else
    {
      const response = await uploadAllVideo(video)
      console.log(response);
      if(response.status>=200 && response.status<300)
      {
        toast.success(`${response.data.caption} is successfully uploaded`)

        // to change the value of uploadVideoStatus
        setuploadVideoStatus(response.data)
        // making the state value none
        setVideo({
          id:"",
          caption:"",
          url:"",
          embedLink:""
        })

        // to close the modal
        handleClose()
      }
      else
      {
        console.log(response);
        toast.error('something went wrong')
      }
    }
  }


  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-upload"></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film me-3 text-warning"></i>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>

          <form className="border border-secondary rounded p-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" name="id" onChange={(e)=>setVideo({...video,id:e.target.value})} placeholder="Enter Video id" />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" name="caption" onChange={(e)=>setVideo({...video,caption:e.target.value})} placeholder="Enter Video caption" />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" name="url" onChange={(e)=>setVideo({...video,url:e.target.value})} placeholder="Enter Video image url" />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" name="embedLink" onChange={embedded} placeholder="Enter youtube video link" />
           </Form.Group>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='light' autoClose='2000'/>
    </>
  )
}

export default Add


