import Image from "next/image"; 
//import Testimonial from './Testimonial'; // Ajusta la ruta según donde tengas el archivo Testimonial.js o Testimonial.jsx

//import styles from "./page.module.css";

//import './js/bootstrap-bundle-min'; 
//import './js/easin-min.js'; 
//import './js/waypoints-min.js'; 
//import './js/jquery-min.js';   
//import './js/owl-carousel-min.js'; 
//import './js/lightbox-min.js';    

//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
//import {} from '@fortawesome/free-solid-svg-icons'; 
//import React, { useState, useEffect } from 'react';

const Testimonial = () => (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h5 className="text-primary text-uppercase">Testimonial1</h5>
          <h1 className="display-3 text-uppercase mb-0">Our Clients Say</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="owl-carousel testimonial-carousel">
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  {/* Testimonial items go here */}
                </div>
              </div>
              <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev">
                  <i className="fa fa-angle-left"></i>
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <i className="fa fa-angle-right"></i>
                </button>
              </div>
              <div className="owl-dots">
                <button role="button" className="owl-dot active">
                  <span></span>
                </button>
                <button role="button" className="owl-dot">
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Table component */}
        <div className="mt-5">
          <h3>Recipes Information</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>30</td>
                <td>john.doe@example.com</td>
                <td>(123) 456-7890</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ); 
  
  interface PostObject {
    id: number;
    userId: number;
    title: string;
    body: string;
  }
export default function Home() {


  return (
    
    <main>
        <div className="container-fluid page-header py-5">
            <h1 className="text-center text-white display-6">Testimonial</h1>
            <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item active text-white">Testimonial</li>
            </ol>
        </div>

        <div className="container-fluid testimonial py-5">
            <div className="container py-5">
                <div className="testimonial-header text-center">
                    <h4 className="text-primary">Our Testimonial</h4>
                    <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
                </div>
                <div className="owl-carousel testimonial-carousel owl-loaded owl-drag">
                    
                    
                    
                <div className="owl-stage-outer">
                <div className="owl-stage" style={{ transform: 'translate3d(-1981px, 0px, 0px)',
                    transition: 'all 2s ease 0s', width: '4624px' }} >
                    <div className="owl-item cloned" style={{ width: '635.5px', marginRight: '25px' }}>
                        <div className="testimonial-item img-border-radius bg-light rounded p-4">
                        <div className="position-relative">
                            <i className="fa fa-quote-right fa-2x text-secondary position-absolute" 
                            style={{ bottom: '30px', right: '0' }}></i>
                            <div className="mb-4 pb-4 border-bottom border-secondary">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap">
                                <div className="bg-secondary rounded">
                                    <Image
                                        src="/images/testimonial-1.jpg" 
                                        className="img-fluid rounded" 
                                        width={100}
                                        height={100}
                                        style={{ width: '100px', height: '100px' }} 
                                        alt=""  
                                    />
                                </div>
                                <div className="ms-4 d-block">
                                    <h4 className="text-dark">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="owl-item cloned" style= {{ width: '635.5px', marginRight: '25px' }}>
                        <div className="testimonial-item img-border-radius bg-light rounded p-4">
                        <div className="position-relative">
                            <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: '0' }}></i>
                            <div className="mb-4 pb-4 border-bottom border-secondary">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap">
                                <div className="bg-secondary rounded">
                                <Image
                                    src="/images/testimonial-1.jpg" 
                                    width={100}  
                                    height={100}
                                    className="img-fluid rounded" 
                                    style={{ width: '100px', height: '100px' }} 
                                    alt="" 
                                />
                                </div>
                                <div className="ms-4 d-block">
                                    <h4 className="text-dark">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="owl-item" style={{ width: '635.5px', marginRight: '25px' }}>
                        <div className="testimonial-item img-border-radius bg-light rounded p-4">
                        <div className="position-relative">
                            <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: '0' }}></i>
                            <div className="mb-4 pb-4 border-bottom border-secondary">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap">
                                <div className="bg-secondary rounded">
                                <Image 
                                    src="/images/testimonial-1.jpg" 
                                    className="img-fluid rounded"
                                    width={100} 
                                    height={100}
                                    style={{ width: '100px', height: '100px' }} 
                                    alt="" 
                                />
                                </div>
                                <div className="ms-4 d-block">
                                    <h4 className="text-dark">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="owl-item active" style={{ width: '635.5px', marginRight: '25px' }}>
                        <div className="testimonial-item img-border-radius bg-light rounded p-4">
                        <div className="position-relative">
                            <i className="fa fa-quote-right fa-2x text-secondary position-absolute"
                            style={{ bottom: '30px', right: '0' }}></i>
                            <div className="mb-4 pb-4 border-bottom border-secondary">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap">
                                <div className="bg-secondary rounded">
                                <Image 
                                    src="/images/testimonial-1.jpg" 
                                    width={100}
                                    height={100}
                                    className="img-fluid rounded" 
                                    style={{ width: '100px', height: '100px' }} 
                                    alt="" 
                                />
                                </div>
                                <div className="ms-4 d-block">
                                    <h4 className="text-dark">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div><div className="owl-item active" style={{ width: '635.5px', marginRight: '25px' }}><div className="testimonial-item img-border-radius bg-light rounded p-4">
                        <div className="position-relative">
                            <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: '0' }}></i>
                            <div className="mb-4 pb-4 border-bottom border-secondary">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap">
                                <div className="bg-secondary rounded">
                                <Image 
                                    src="/images/testimonial-1.jpg"  
                                    width={100}
                                    height={100}
                                    className="img-fluid rounded" 
                                    style={{ width: '100px', height: '100px' }} 
                                    alt="" 
                                />
                                </div>
                                <div className="ms-4 d-block">
                                    <h4 className="text-dark">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div><div className="owl-item cloned" style={{ width: '635.5px', marginRight: '25px' }} ><div className="testimonial-item img-border-radius bg-light rounded p-4">
                        <div className="position-relative">
                            <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: '0' }}></i>
                            <div className="mb-4 pb-4 border-bottom border-secondary">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap">
                                <div className="bg-secondary rounded">
                                <Image 
                                    src="/images/testimonial-1.jpg" 
                                    width={100}
                                    height={100}
                                    className="img-fluid rounded" 
                                    style={{ width: '100px', height: '100px' }} 
                                    alt="" 
                                />
                                </div>
                                <div className="ms-4 d-block">
                                    <h4 className="text-dark">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div><div className="owl-item cloned" style={{ width: '635.5px', marginRight: '25px' }}><div className="testimonial-item img-border-radius bg-light rounded p-4">
                        <div className="position-relative">
                            <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: '0' }}></i>
                            <div className="mb-4 pb-4 border-bottom border-secondary">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap">
                                <div className="bg-secondary rounded">
                                <Image
                                    src="/images/testimonial-1.jpg" 
                                    width={100}
                                    height={100}
                                    className="img-fluid rounded" 
                                    style={{ width: '100px', height: '100px' }} 
                                    alt="" 
                                />
                                </div>
                                <div className="ms-4 d-block">
                                    <h4 className="text-dark">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    <div className="owl-nav">
                        <div className="owl-prev"><i className="bi bi-arrow-left"></i></div>
                        <div className="owl-next"><i className="bi bi-arrow-right"></i>
                        </div>
                    </div>
                    <div className="owl-dots">
                        <div className="owl-dot active">
                            <span></span>
                        </div>
                        <div className="owl-dot">
                            <span></span>
                        </div>
                </div>
                </div>
            </div>
        </div>

        <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top" style={{ display: 'none' }}><i className="fa fa-arrow-up"></i></a>   
        <div id="lightboxOverlay" tabIndex={-1}  className="lightboxOverlay" style={{ display: 'none' }}></div>
        <div id="lightbox" tabIndex={-1}  className="lightbox" style={{ display: 'none' }}><div className="lb-outerContainer">
            <div className="lb-container">
            <div className="lb-nav">
                <a className="lb-prev" role="button" tabIndex={0}  aria-label="Previous image" href="">
                    </a><a className="lb-next" role="button" tabIndex={0}  aria-label="Next image" href=""></a>
                    </div>
                    <div className="lb-loader">
                        <a className="lb-cancel" role="button" tabIndex={0} ></a>
                </div>
            </div>
        </div>
            <div className="lb-dataContainer">
                <div className="lb-data">
                    <div className="lb-details">
                        <span className="lb-caption"></span>
                        <span className="lb-number"></span>
                        </div>
                        <div className="lb-closeContainer">
                            <a className="lb-close" role="button" tabIndex={0} >
                                </a>
                     </div>
                </div>
            </div>
        </div> 
        <Testimonial></Testimonial>
    </main>
        
  );
} 


