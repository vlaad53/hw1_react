import './App.css';
function App() {
  const name = "Vlad";

  const image = {
    src: "https://picsum.photos/331",
    alt: "Зображення",
  };

  const favoriteSite = {
    name: "Google",
    url: "https://www.google.com/",
  };

  const a = 10;
  const b = 15;
  const sum = a + b;

  const colors = ["Червоний", "Синий", "Зеленый"];

  return (
    <div>
      <h1>{name}</h1>

      <p>Ласкаво просимо до нашого сайту!</p>

      <img src={image.src} alt={image.alt} />

      <p>
        Улюбленний сайт:{" "}
        <a href={favoriteSite.url} target="_blank" rel="noreferrer">
          {favoriteSite.name}
        </a>
      </p>

      <p>Сума чисел: {sum}</p>

      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;