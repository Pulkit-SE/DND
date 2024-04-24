import update from "immutability-helper";
import { useCallback, useState } from "react";

import Card from "../../components/Card";

import { CARD_DATA } from "../../utils/constants";
import "./style.css";

const Cards = () => {
  const [cards, setCards] = useState(CARD_DATA);
  const [pressedImageUrl, setPressedImageUrl] = useState("");

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  const handleImagePress = (url = "") => {
    return () => {
      setPressedImageUrl(url);
    };
  };

  const renderCard = useCallback((card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.title}
        moveCard={moveCard}
        imageUrl={card.image}
        onClick={handleImagePress}
      />
    );
  }, []);

  return (
    <div className="cardContainer">
      {cards.map((card, i) => renderCard(card, i))}
      {/* {pressedImageUrl && (
       
      )} */}
    </div>
  );
};

export default Cards;
