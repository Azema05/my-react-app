import { useEffect, useState } from 'react';
import Card from './Card';
import './CardList.css';

export default function CardSection() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
      .then((res) => {
        if (!res.ok) throw new Error('Ошибка сети');
        return res.json();
      })
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Загрузка карточек...</p>;
  if (error) return <p className="error">Ошибка: {error}</p>;

  return (
    <div className="cards">
      {cards.map((card) => (
        <Card key={card.id} name={card.name} body={card.body} />
      ))}
    </div>
  );
}