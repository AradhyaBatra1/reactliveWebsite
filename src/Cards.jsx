import React from 'react'
import './Cardss.css'
export default function Cards(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} className="card__img" />
          <div className="card__info">
            <span className="card__category">{props.titile}</span>
            <h3 className="card__title">{props.sname}</h3>
            <a href="" target="_blank"></a>
            <button className="button-51">Watch Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
