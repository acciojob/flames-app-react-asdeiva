import { useState } from 'react';

function FlamesApp() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateRelationship = () => {
    if (name1 === '' || name2 === '') {
      setResult('Please Enter valid input');
      return;
    }

    let remainingName1 = name1;
    let remainingName2 = name2;

    for (let i = 0; i < name1.length; i++) {
      const char = name1.charAt(i);
      if (name2.includes(char)) {
        remainingName1 = remainingName1.replace(char, '');
        remainingName2 = remainingName2.replace(char, '');
      }
    }

    const totalLength = remainingName1.length + remainingName2.length;
    const flames = ['Siblings', 'Friends', 'Love', 'Affection', 'Marriage', 'Enemy'];
    setResult(flames[totalLength % 6]);
  };

  const clearInputs = () => {
    setName1('');
    setName2('');
    setResult('');
  };

  return (
    <div>
      <input type="text" value={name1} onChange={(e) => setName1(e.target.value)} data-testid="input1" />
      <input type="text" value={name2} onChange={(e) => setName2(e.target.value)} data-testid="input2" />
      <button onClick={calculateRelationship} data-testid="calculate_relationship">Calculate Relationship Future</button>
      <button onClick={clearInputs}>Clear</button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default FlamesApp;