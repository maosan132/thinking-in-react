import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const ProductRow = props => {
  <tr>
  <td align="left">{product.name}</td>
  <td align="right">{product.price}</td>
  {/* <td>{product.stocked}</td> */}
</tr>
}

const ProductTable = props => {
  const { products } = props;
  // const rows = [];

  const rows = products.map(product => (
    <ProductRow product={product} key={product.name}/>
  ))

  return (
    <table>
      <thead>
        <tr style={{color: "blue"}}>
          <th align="left">Name</th>
          <th align="right">Price</th>
          {/* <th>Stock</th> */}
        </tr>
      </thead>
      <tbody>
      {rows}
      </tbody>
    </table>
  )
}

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search..."/>
      {" "}
      <p>
        <input type="checkbox" />
        <span style={{color: "green", fontSize: "smaller"}}>
          Only show products in stock!
        </span>
      </p>
    </form>
  )
}

const FilterableProductTable = props => {
  const { products } = props;

  return (
    <div style={{fontFamily: "sans-serif"}}>
      <SearchBar />
      <ProductTable products={products}/>
    </div>
  )
}

const PRODUCTS = [
	{	category: "Sporting Goods",
			 price: "$49.99",
		 stocked: true,
				name: "Football" },
	{	category: "Sporting Goods",
			 price: "$9.99",
		 stocked: true,
				name: "Baseball" },
	{	category: "Sporting Goods",
			 price: "$29.99",
		 stocked: false,
				name: "Basketball" },
	{	category: "Electronics",
			 price: "$99.99",
		 stocked: true,
				name: "iPod Touch" },
	{	category: "Electronics",
			 price: "$399.99",
		 stocked: false,
				name: "iPhone 5" },
	{	category: "Electronics",
			 price: "$199.99",
		 stocked: true,
				name: "Nexus 7" }
];

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
