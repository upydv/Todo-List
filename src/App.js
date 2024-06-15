// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

function App() {
  
  return (
    <div className='App'> 
    {/* { <h1>good morning {changeName()}</h1> }
     <h1>good morning {person.firstName +" "+person.lastName}</h1>
     <h1>good morning {firstName +lastName}</h1>
     <button onClick={callthealert}>hello</button>*/}
     <Header/> 
     <Content color="ligthblue"/>
     <Footer/>
    </div>
  );
}

export default App;
