import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 7,
    title: 'It Starts with Us',
    description: "Before It Ends with Us, it started with Atlas."
  },
  {
    id: 'p2',
    price: 9,
    title: 'Babel',
    description: "#1 NEW YORK TIMES BESTSELLER"
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) =>(
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
