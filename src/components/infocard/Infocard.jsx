import "./infocard.css"

function Infocard(props) {
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="" />
        <div className="card_content">
          <h3 className="card_title">{props.h3}</h3>
          <h4 className="card_text">{props.h4}</h4>
          <button className='read_button'>Read Now</button>
        </div>
      </div>
    </div>
  );
}

export default Infocard;
