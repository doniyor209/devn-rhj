import './App.css'
import Infocard from './components/infocard/Infocard';
import Usercard from './components/usercard/Usercard';

function App() {
  return (
    <div className='body'>
      <header>
        <div className='container'>
          <h1 className='h1'>User Card</h1>
          <div className="cardOta">
            <Usercard ism='Emiliy Johnson' kasbi='Product Manager' joyi='Product Development' rasmi='./a.png'></Usercard>
            <Usercard ism='Arjun Patel' kasbi='Software Engineer' joyi='Technology' rasmi='./c.png'></Usercard>
            <Usercard ism='Carlos Hernández' kasbi='UI Designer' joyi='Design' rasmi='./d.png'></Usercard>
            <Usercard ism='Amina Idris' kasbi='Marketing Specialist' joyi='Marketing' rasmi='./f.png'></Usercard>
            <Usercard ism='Takumi Sato' kasbi='HR Specialist' joyi='Human Resources' rasmi='./h.png'></Usercard>
            <Usercard ism='Chen Wei' kasbi='Data Analyst' joyi='Data Science' rasmi='./o.png'></Usercard>
            <Usercard ism='Emma Dubois' kasbi='Sales Manager' joyi='Sales' rasmi='./k.png'></Usercard>
            <Usercard ism='Igor Sokolov' kasbi='Quality Assurance' joyi='Quality Control' rasmi='./m.png'></Usercard>
          </div>
          <h1 className='h1'>Info Card</h1>
          <div className="cardOta2">
            <Infocard img="/w.png" h3="Discovering the World of Mountains" h4="In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. "></Infocard>
            <Infocard img="/r.png" h3="Exploring the Secrets of the Forest" h4="In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. "></Infocard>
            <Infocard img="/q.png" h3="Unraveling the Mysteries of the Ocean" h4="In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. "></Infocard>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
