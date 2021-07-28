function Card({ title, calories, index, setCard, cards }) {
  return (
    <div className="card">
      <h2>
        {title || "My Card"} -
        {calories > 150 ? " Danger" : calories < 140 ? " Safe" : " Normal"}
      </h2>
      <button
        onClick={() => {
          const newCard = cards.filter((el, i) => i != index);
          setCard(newCard);
        }}
      >
        Delete
      </button>
      <p>you have consumed {calories || 56} cals today</p>
    </div>
  );
}
export default function CalorieCard({ menu, setCard }) {
  return (
    <div>
      <h2>Calorie Read Only</h2>
      <div className="CardContainer">
        {menu.map((item, index) => {
          return (
            <Card
              title={item[0]}
              calories={item[1]}
              key={index}
              index={index}
              setCard={setCard}
              cards={menu}
            />
          );
        })}
      </div>
    </div>
  );
}
