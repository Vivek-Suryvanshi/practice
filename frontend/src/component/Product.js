import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img className="card-img" src={product.image} alt={product.name} />
      </Link>
      <Card.Body>
        <div className="product-info">
          <Link to={`/product/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
          <Card.Text>${product.price}</Card.Text>
          <Button>Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
