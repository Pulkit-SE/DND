import update from "immutability-helper";
import { useCallback, useState } from "react";

import Card from "../../components/Card";

import { CARD_DATA } from "../../utils/constants";
import "./style.css";

const Cards = () => {
  const [cards, setCards] = useState(CARD_DATA);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      // Mutate a copy of data without changing the original source
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  const renderCard = useCallback((card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.title}
        moveCard={moveCard}
        imageUrl={card.image}
      />
    );
  }, []);

  return (
    <div className="cardContainer">
      {cards.map((card, i) => renderCard(card, i))}
    </div>
  );
};

export default Cards;
