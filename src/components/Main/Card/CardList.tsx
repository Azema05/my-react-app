import { useEffect, useState } from 'react';
import Card from './Card';
import './CardList.css';

interface Comment {
  id: number;
  name: string;
  body: string;
}

export default function CardSection() {
  const [cards, setCards] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
      .then((res) => {
        if (!res.ok) throw new Error('Ошибка сети');
        return res.json();
      })
      .then((data: Comment[]) => {
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