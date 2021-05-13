// import {reactLocalStorage} from 'reactjs-localstorage';
// import React,{Component} from 'react'
import React from "react";
import { Link } from "react-router-dom";

const cssStyle = {
  color: "#e24e4e",
};
// class Products extends Component{
//    constructor(props){
//        super(props);
//        this.state={
//            cartData:[]
//        }
//    }

//    AddBtnClick= async(ID)=>{
//        try{

//        console.log('CartData:'+this.state.cartData);
//        console.log("Id:" + ID);
//     var exist=false;
//     var list=[];
//        if(Array.isArray(!this.state.cartData)&& !this.state.cartData.length){
//       exist = this.state.cartData.some(item=>item.id===ID)
//     console.log(exist);
//     if(exist){
//         alert('Alredy exist');
//     }
//     else{
//      list= this.state.cartData.concat({id:this.props.id,image:this.props.imageUrl, title:this.props.title,price:this.props.price})
//     this.setState({
//         cartData:this.state.cartData.concat({id:this.props.id,image:this.props.imageUrl, title:this.props.title,price:this.props.price})
//     })

//      }
//    }
//    else{

//        list.push( {id:this.props.id,image:this.props.imageUrl, title:this.props.title,price:this.props.price})
//     this.setState({
//         cartData:list
//     })
//     console.log('list',JSON.stringify(list));
//     }
// }
// catch{
//     console.log("error");
// }
// finally{
// console.log("cartdata:",JSON.stringify(list));
//   await reactLocalStorage.set('CART_DATA',JSON.stringify(this.state.list))
// }

// }

//    componentDidMount(){
//      // reactLocalStorage.remove('CART_DATA')
//      var CartData = reactLocalStorage.get('CART_DATA');
//      this.setState({
//         cartData: CartData
//      })
//      console.log("CartData:" +CartData);
//    }
//     render(props){
//     console.log(props);
const Product = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-5">
          <img
            src={props.imgsrc}
            className="img-fluid w-70 h-50"
            alt="product"
          />
        </div>

        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize text-blue">
          <h2>{props.title}</h2>
          <h4> Genre:{props.genre}</h4>
          <h5 className="text-blue">
            <strong>
              price: <span style={cssStyle}> ${props.price}</span>
            </strong>
          </h5>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            Some info about product:
          </p>
          <p className="text-muted lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            officia dolor architecto dicta quidem facilis perspiciatis ex quas
            libero, quia magnam rem culpa tempora consequatur, temporibus iusto
            consequuntur neque. Impedit accusantium eveniet beatae dolorum
            aperiam quae, explicabo, sunt harum asperiores aut nulla eos at quis
            porro officiis repudiandae officia deserunt!
          </p>
          <div className="btn-options">
            {/* <Link to="/cart"><button onClick={()=>this.AddBtnClick(this.props.id)} className="add-products">add to cart</button></Link> */}

            <Link to="/cart">
              <button
                className="add-products"
                onClick={() =>
                  props.addProductToCart({
                    productId: props.productId,
                    productPrice: props.productPrice,
                    productTitle: props.productTitle,
                  })
                }
              >
                add to cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
