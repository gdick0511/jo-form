import './App.css';
import Select from 'react-select';
import { useState } from 'react'


function App() {

  function handleChange(e){
   setSelectedOption(e)
  }

  const [selectedOption, setSelectedOption] = useState(null)

  const data = [
    {
      value: 1,
      label: "cerulean"
    },
    {
      value: 2,
      label: "fuchsia rose"
    },
    {
      value: 3,
      label: "true red"
    },
    {
      value: 4,
      label: "aqua sky"
    },
    {
      value: 5,
      label: "tigerlily"
    },
    {
      value: 6,
      label: "blue turquoise"
    }
  ]

  return (
    <div className="App">
      <h1>Sign Up For A Discovery Call</h1>
        <form>
          <label> First Name:
            <input>
            </input>
          </label>
          <label> Last Name:
            <input>
            </input>
          </label>
          <label> Email:
            <input>
            </input>
          </label>
          <label> Phone:
            <input>
            </input>
          </label>
          <label> 
            What Services Are You Interested In? *
            <Select placeholder="Select One"
              value={selectedOption}
              options={data}
              onChange={handleChange}
            /> 
          </label>
          <label>
              INSTAGRAM *
              <textarea />
          </label>
          <label>
              LOCATION *
              <textarea />
          </label>
          <label>
            PREFERRED DAY/TIME FOR A CALL *
            <Select placeholder="Select One"
              value={selectedOption}
              options={data}
              onChange={handleChange}
            /> 
          </label>
        </form>
    </div>
  );
}

export default App;
