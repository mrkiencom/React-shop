import React from 'react';

class Product extends React.Component {
    render() {
        return (
            <div class="product">
                <h3>({this.props.index}) Product </h3>
                <ul class="image">
                    {
                        this.props.list.map((x, index) => {
                            return <Image image={x.src} infor={x.infor} price={x.price} />
                        })
                    }
                </ul>
            </div >
        )
    }
}
class Image extends React.Component {
    render() {
        return (
            <li class="images">
                <img class="image" src={this.props.image} ></img>
                <p>{this.props.infor}</p>
                <p class="price">{this.props.price}</p>
                <div><button class="buy">Buy</button></div>
            </li >
        )
    }
}
export default Product;