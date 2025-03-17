import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { menuData } from './Data/MenuData';


function App() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Restaurant Menu</h1>
      {menuData.map((category, index) => (
        <div key={index} className="mb-5">
          <h2 className="mb-3">{category.category}</h2>
          <div className="row">
            {category.items.map((item, idx) => (
              <div key={idx} className="col-md-6 mb-4">
                <div className="card shadow-sm">
                  <img src={item.image} alt={item.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
