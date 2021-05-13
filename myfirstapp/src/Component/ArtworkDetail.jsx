import React from "react";
import Data, { getData, getFilterData } from "../data";
import Product from "./Product";

export default class ArtWorkDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }
  componentDidMount() {
    const ID = this.props.selectedId;
    //    getFilterData(ID);

    getFilterData(ID).then((result) => {
      this.setState({ photos: result });
    });
  }
  componentWillUnmount() {
    this.setState({ photos: [] });
  }
  render() {
    // console.log(this.state.photos);
    return !this.state.photos.length ? (
      "Loading"
    ) : (
      <div className="container py-3">
        {/* <Products
key={this.state.photos[0].id}
imgsrc={this.state.photos[0].imageUrl}
title={this.state.photos[0].title}
price={this.state.photos[0].price}
genre={this.state.photos[0].genre}/>
 */}
        {this.state.photos.map((items) => {
          console.log("ID:" + items.id);
          return (
            <Product
              id={items.id}
              imgsrc={items.imageUrl}
              title={items.title}
              genre={items.genre}
              price={items.price}
              addProductToCart={this.props.addProductToCart}
              removeProductFromCart={this.props.removeProductFromCart}
            />
          );
        })}
      </div>
    );
  }
}
