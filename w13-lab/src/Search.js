import React from 'react'

function Search({ types, selection, setSelection }) {
  const handleF = (e) => {
    const { value } = e.target;
    if (selection.includes(value)) {
      setSelection(selection.filter(type => type !== value));
    } else {
      setSelection([...selection, value]);
    }
  }

  return (
    <div>
      {
        types.map(type => (
          <>
            <input
              key={type}
              type="checkbox"
              id={type}
              name={type}
              value={type}
              onChange={handleF} />
            <label htmlFor={type}>{type}</label>
            <br />
          </>
        ))
      }</div>
  )
}

export default Search