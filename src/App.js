import React from 'react';
import ProductName from './composants/Name';
import ProductPrice from './composants/Price';
import ProductDescription from './composants/Description';
import ProductImage from './composants/Image';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import product from './product';
import './App.css';
function App() {
  const name = "Mohamed Amine"; 
  const greeting = name ? `Bonjour, ${name}!` : 'Bonjour !';

  return (
    <div className="container mt-4">
       <div className="mt-3">
        <h3>{greeting}</h3>
        {name && <img src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/244994698_4608360265892239_1138612411120240375_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=o0o8QDgeWYIQ7kNvgF3AM9N&_nc_ht=scontent.ftun16-1.fna&oh=00_AYDozrbWgJyg8GxYYZF-T6673KeShfEi9D-J8G4JfJjZ2A&oe=66C01F67" alt="Profile" className='imgrd' />}
      </div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <ProductName name={product.name} />
          <ProductPrice price={product.price} />
          <ProductDescription description={product.description} />
          <ProductImage imageUrl={product.image} />
        </Card.Body>
      </Card>

    </div>
  );
};
export default App;
