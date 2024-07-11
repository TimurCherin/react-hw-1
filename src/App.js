import logo from './logo.svg';
import './App.css';
const name = "Timur"
const path = "./img/logo192.png"
const explaining = "Це фото"
const favoriteWebsite = { name: "Google", url: "https://www.google.com/" }
const number1 = 23
const number2 = 29
const colors = ["Червоний", "Синій", "Зелений", "Жовтий"]
const colorsList = ({ colors }) => (
  <ul>
    {colors.map(color => (
      <li>{color}</li>
    ))}
  </ul>
);
function App() {
  return (
    <div>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={path} alt={explaining}></img>
      <a href={favoriteWebsite.url}>{favoriteWebsite.name}</a>
      <p>{number1 + number2}</p>
      <p>{colorsList({ colors })}</p>
    </div>
  );
}

export default App;
