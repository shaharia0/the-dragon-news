import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'
import bg1 from '../../../assets/bg1.png'

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login with</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle></FaGoogle> Login with google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub></FaGithub> Login with github
      </Button>
      <div>
        <h4 className="mt-2">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="mb-5 mt-3 rounded d-flex justify-content-center" style={{position: 'relative'}}>
        <img src={bg} alt="" />
        <img src={bg1} alt="" style={{position: 'absolute', top: '0', left: '0', zIndex: '1', opacity: '50%'}}/>
        <div style={{position: 'absolute', top: '0', left: '0', zIndex: '1'}}>
          <h4 className="text-white text-center fs-1 mt-5">Create an Amazing Newspaper</h4>
           <p className="fs-5 mt-3 text-white text-center p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           <div className="d-flex justify-content-center">
            <Button variant="danger" size="lg">Learn More</Button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
