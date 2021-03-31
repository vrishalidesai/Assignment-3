import React from 'react';
import img1 from '../assets/artwork_1.jpg';
import {Link} from 'react-router-dom';

 const cssStyle={
     color:"#e24e4e",
 }
export default function ArtWorkDetail() {
    return (
        <div className="container py-3">
        <div className="row">
            {/* <div className="col-10 mx-auto text-center text-slanted text-blue my-2">
                <h1>Title</h1>
            </div> */}
        </div>
            {/* Product info */}
            
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-5">
                    <img src={img1} className="img-fluid w-70 h-50" alt="product" />
                </div>

                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize text-blue">
                    <h2>Title</h2>
                   <h4>genre:Nature</h4> 
                   <h5 className="text-blue">
                       <strong>
                           price: <span style={cssStyle}>$50</span>
                       </strong>
                   </h5>
                   <p className="text-capitalize font-weight-bold mt-3 mb-0">Some info about product:</p>
                    <p className="text-muted lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione officia dolor architecto dicta quidem facilis perspiciatis ex quas libero, quia magnam rem culpa tempora consequatur, temporibus iusto consequuntur neque. Impedit accusantium eveniet beatae dolorum aperiam quae, explicabo, sunt harum asperiores aut nulla eos at quis porro officiis repudiandae officia deserunt!</p>
                    <div className="btn-options">
                        <Link to="/cart"><button className="add-products">add to cart</button></Link>
                    </div>
                    </div>

                    
                   
                </div>
                {/* Buttons */}
                {/* <Link to="/">
                    <ButtonContainer>back to products</ButtonContainer>
                </Link>
                <Link to="/cart">
                    <ButtonContainer>add to cart</ButtonContainer>
                </Link> */}
            </div>
        
    )
}
