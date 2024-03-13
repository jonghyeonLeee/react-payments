import '../../styles/card.css';
import { FC } from 'react';

export interface CardProps {
  title?: string;
  number?: number;
  expiredDate?: string;
  userName?: string;
}

const Card: FC<CardProps> = ({ title, number, expiredDate, userName }) => {
  return (
    <div className="card-box">
      <div className="small-card">
        <div className="card-top">
          <span className="card-text">{title}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{number}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{userName}</span>
            <span className="card-text">{expiredDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
