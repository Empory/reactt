import './App.css';
import { sculptureList } from './data';
import { useRef, useState } from 'react';

const products = [
  {title: "Cabbage", id: 1},
  {title: "Garlic", id: 2},
  {title: "Apple", id: 3},
];
const divs = [
  {div: "a", id: 1},
  {div: "b", id: 2},
  {div: "c", id: 3},
];
const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];
const chemists = people.filter(person=>
  person.profession !== "chemist"
  );
  const listItems = chemists.map(person =>
    <li >
    <p>
      {person.name}
      </p>
     <p>
      
    {person.profession}
      </p> 
  </li>
  );
  const recipeLis = recipes.map(recipe =>
    <>
    <p>
      {recipe.name}


    </p>
    <ul>
      

      {recipe.ingredients.map(ingredient =>
        <li>

          {ingredient}
        </li>
          
          )}
      
    </ul>
    </>
    
    )
    const poem = {
      lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
      ]
    };
    const poemList =  poem.lines.map((line, index) =>
    <p key={index}>{line}<hr/>
      </p>
      )
      const listDivs = divs.map(div =>
        <div style={{display:'inline-block',backgroundColor: "red",margin:"10px"}} key={div.id}>
    {div.div}
  </div>
  );
  
  
  export default  function App() {
    // function handleClick(e){
      const [to, setTo] = useState("Alice");
      const [message, setMessage] = useState("Hello");
      function handleSubmit(e){
        e.preventDefault();
        setTimeout(()=>{
          alert(`you said ${message} to ${to}`)
        },500)
      }
      const [showMore, setShowMore] = useState(false);
      const [index, setIndex] = useState(0);
      const hasNext = index < sculptureList.length - 1;
      
      function handleNextClick() {
        {hasNext ? setIndex(index + 1) : setIndex(0)}
      }
      function handleMoreClick() {
        setShowMore(!showMore)
      }
      let sculpture = sculptureList[index]
      function Square(){
        return(
          
          <button className='square'>1</button>
          );
          
          
        }
        //   e.preventDefault();
    //   alert("You clicked me");
    // }
    const[count, setCount] = useState(0);
    const[type,setType] = useState("");
    const[types,setTypes] = useState([]);
    const addTodo = () =>{
      
      if (type !== "") {
          setTypes([...types, type])
          setType("")
        }
      }
      const deleteTodo = (text) =>{

        const newTodos = types.filter((type)=>{
          return type !== text;
        });
        setTypes(newTodos)
      }

      
      function setTyping(e) {
       setType( e.target.value)
      }
      function handleClick(e){
        e.preventDefault();
        
        setCount(count + 1);
      }
      function handleClickk(e){
        e.preventDefault();
        
        if(count > 0){
          setCount(count -1 )
        }
        else{

          setCount(count );
        }
        
      }
      
    
    
    return (
      <>
      <form onSubmit={handleSubmit}>
        <label>
          To:{" "}
          <select
            value={to}
            onChange={e =>  setTo(e.target.value)}>
              <option value="Alice">Alice</option>
              <option value="Bob">Bob</option>
          </select>
          </label>
          <textarea
          placeholder='Message'
          value={message}
          onChange={e => setMessage(e.target.value)}
          ></textarea>
          <button type='submit'>Send</button>
      </form>
<div className='App'>
  <button onClick={handleNextClick}>next</button>
  <h2>{sculpture.name}</h2>
  <button onClick={handleMoreClick}>{showMore ? "Hide" : "Show"} details</button>
  {showMore && <p>{sculpture.description}</p>}




 
</div>  
{/* <button onClick={handleClick}>{count}</button>
{count}
<button onClick={handleClick}>{count}</button> */}


</>

      
    );
      
      
        
        
      
    
  }




