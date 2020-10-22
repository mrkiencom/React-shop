import React from 'react';
import Product from './product'

class Size extends React.Component {
    constructor() {
        super()
        this.state = {
            value: "",
            check: false,
            listImage: [
                {
                    src: "./image/1.jpg", size: "X", infor: "Áo phông xám", price: "300.000đ"
                },
                {
                    src: "./image/2.jpg", size: "X", infor: "Áo Hoodie xám", price: "500.000đ"
                },
                {
                    src: "./image/3.jpg", size: "SX", infor: "Áo Hoodie vàng", price: "450.000đ"
                },
                {
                    src: "./image/4.jpg", size: "M", infor: "Áo Hoodie xanh", price: "400.000đ"
                },
                {
                    src: "./image/5.jpg", size: "L", infor: "Áo Hoodie animal", price: "600.000đ"
                },
                {
                    src: "./image/6.jpg", size: "ML", infor: "Áo Hoodie xám", price: "550.000đ"
                },
                {
                    src: "./image/7.jpg", size: "XXL", infor: "Áo Hoodie cam", price: "300.000đ"
                },
                {
                    src: "./image/8.jpg", size: "L", infor: "Áo phông xám", price: "300.000đ"
                },
                {
                    src: "./image/1.jpg", size: "XL", infor: "Áo phông xám", price: "300.000đ"
                },
                {
                    src: "./image/7.jpg", size: "L", infor: "Áo Hoodie cam", price: "300.000đ"
                },
                {
                    src: "./image/4.jpg", size: "ML", infor: "Áo Hoodie xanh", price: "400.000đ"
                },
                {
                    src: "./image/6.jpg", size: "XXL", infor: "Áo Hoodie xám", price: "550.000đ"
                },
                {
                    src: "./image/4.jpg", size: "L", infor: "Áo Hoodie xanh", price: "400.000đ"
                },
                {
                    src: "./image/5.jpg", size: "M", infor: "Áo Hoodie animal", price: "600.000đ"
                },
            ],
            list: "",
        }
    }
    show(value) {
        return (event) => {

            this.setState(
                {
                    list: this.state.listImage.filter((x) => {
                        return x.size == value;
                    }),
                    check: true,
                }
            )
        }
    }
    showall() {
        this.setState({
            index: this.state.list.length,
            list: this.state.listImage,
        })
    }
    render() {
        return (
            <div class="App">
                <div class="size">
                    <h3 class="title">Sizes:</h3>
                    <button onClick={this.show("X")}>X</button>
                    <button onClick={this.show("SX")}>SX</button>
                    <button onClick={this.show("M")}>M</button>
                    <button onClick={this.show("ML")}>ML</button>
                    <button onClick={this.show("L")}>L</button>
                    <button onClick={this.show("XL")}>XL</button>
                    <button onClick={this.show("XXL")}>XXL</button>
                    <button onClick={this.showall.bind(this)}>ALL</button>
                </div>
                { this.state.check && <Product list={this.state.list} index={this.state.list.length} />}
                { !this.state.check && <Product list={this.state.listImage} index={this.state.listImage.length} />}
            </div>
        )
    }
}
export default Size;