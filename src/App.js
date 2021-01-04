import './App.css';
import React, {useState, useEffect, useRef} from 'react';

function App() {
  const [item, setItem] = useState('');
  const inputField = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!item) {
      alert("Please enter value!");
    }else {
      alert(`There are ${countVowel(item)} vowels!`);
      setItem('');
    }
  }

  useEffect(() => {
    inputField.current.focus();
  }, [item]);

  const countVowel = (item) => {
    const regex = /[a,á,e,é,i,í,o,ó,ö,ő,u,ú,ü,ű,A,Á,E,É,I,Í,O,Ó,Ö,Ő,U,Ú,Ü,Ű]/g;
    if(!item.match(regex)) {
      return 0;
    }else {
      return item.match(regex).length;
    }
  }

  return (
    <section>
      <h1>Vowel Counter</h1>
      <form className="form">
        <textarea 
          name="area" 
          id="area" 
          cols="100" 
          rows="3"
          value={item}
          ref={inputField}
          onChange={(e) => setItem(e.target.value)}
        ></textarea>
        <div className="button-container">
          <button type="submit" className="btn" onClick={handleSubmit}>Check</button>
        </div>
      </form>
    </section>
  );
}

export default App;
