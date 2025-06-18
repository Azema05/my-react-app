import './styles.css';

interface CardProps {
  name: string;
  body: string;
}

export default function Card({ name, body }: CardProps) {
  return (
    <div className="card">
      <p className="card_text">{body}</p>
      <div className="card_footer">
        <img className="card_avatar" src="/img/image 9.png" alt="avatar" />
        <p className="card_person">
          <span className="card_person-name">{name}</span>
          <small className="card_person-type">User</small>
        </p>
      </div>
    </div>
  );
}