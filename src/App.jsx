import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import Card from "./components/Card/Card";
import "boxicons";
import "./App.css";

function App() {
  const [cards, setCards] = useState([
    {
      id: 0,
      title: "Airbnb",
      image: "/images/airbnb.jpeg",
      date: "2023-01-02",
      link: "https://www.airbnb.com/",
    },
    {
      id: 1,
      title: "Asos",
      image: "/images/asos.jpeg",
      date: "2023-02-16",
      link: "https://www.asos.com/",
    },
    {
      id: 2,
      title: "Dropbox",
      image: "/images/dropbox.jpeg",
      date: "2023-03-30",
      link: "https://www.dropbox.com/",
    },
    {
      id: 3,
      title: "Freshbooks",
      image: "/images/freshbooks.jpeg",
      date: "2023-01-03",
      link: "https://www.freshbooks.com/",
    },
    {
      id: 4,
      title: "Hyer",
      image: "/images/hyer.jpeg",
      date: "2023-01-03",
      link: "https://www.flyhyer.com/",
    },
    {
      id: 5,
      title: "IBM",
      image: "/images/ibm.jpeg",
      date: "2023-01-03",
      link: "https://www.ibm.com/resources/activations/harmonic-state",
    },
    {
      id: 6,
      title: "Slack",
      image: "/images/slack.jpeg",
      date: "2023-01-03",
      link: "https://slack.com/",
    },
  ]);
  console.log(cards);

  const addCard = (newCard) => {
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    localStorage.setItem(
      "cards",
      JSON.stringify(updatedCards)
    );
  };

  const editCard = (oldCard, newValues) => {
    const updatedCards = cards.map((card) =>
      card.id === oldCard.id
        ? { ...card, ...newValues }
        : card
    );
    setCards(updatedCards);
    localStorage.setItem(
      "cards",
      JSON.stringify(updatedCards)
    );
  };

  const deleteCard = (cardToDelete) => {
    const updatedCards = cards.filter(
      (card) => card.id !== cardToDelete.id
    );
    setCards(updatedCards);
    localStorage.setItem(
      "cards",
      JSON.stringify(updatedCards)
    );
  };

  useEffect(() => {
    const storedCards =
      localStorage.getItem("cards");
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  return (
    <div className="container">
      <header>
        <h1 className="title">Showcase App</h1>
      </header>
      <div className="app-container">
        <Form onSubmit={addCard} />
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onEdit={editCard}
            onDelete={deleteCard}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
