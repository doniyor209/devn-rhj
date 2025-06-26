import './usercard.css'

function Usercard(props) {
  return (
    <div>
            <div className="cardBola">
              <img src={props.rasmi} alt="" />
              <h2>{props.ism}</h2>
              <p>{props.kasbi} <br />
                {props.joyi}
              </p>
              <div className="img2">
                <img src="./s.png" alt="" />
              </div>
            </div>
    </div>
  )
}

export default Usercard