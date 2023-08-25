import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryCard from './components/CategoryCard';
const data = 10
function App() {
  return (
    <div className="App">
      <h1> Hello Gomycode!</h1>
      <CategoryCard data ={data}/>
    </div>
  );
}

export default App;
