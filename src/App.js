import React, { useState, useEffect, useRef, createContext, useMemo } from "react";
import Toggle from "./Toggle";
import Counter from "./Counter";
import { useTitleInput } from "./hooks/useTitleInput";

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();
  const [dishes, setDishes] = useState([])

  const fetchDishes = async () => {
    const res = await fetch('http://my-json-server.typicode.com/leveluptuts/fakeapi/dishes')
    const data = await res.json()
    setDishes(data)
  }

  useEffect(() => {
    fetchDishes()
  }, [])

  const reverseWord = word => {
    console.log('func called');
    return word.split("").reverse().join('');
  }

  const title = "Level Up Dishes"
  const TitleReversed = useMemo(() => reverseWord(title), [title])

  return (
    <UserContext.Provider
      value={{
        user: true,
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => ref.current.classList.add("new-fake-class")}>
          {TitleReversed}
        </h1>
        <Toggle />
        <Counter />
        <h3>{name}</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button>Submit</button>
        </form>

        {dishes.map((dish, index) => {
          return (
            <article key={index} className="dish-card dish-card--withImage">
              <h3>{dish.name}</h3>
              <p>{dish.desc}</p>
              <div className="ingredients">
                {dish.ingredients.map((ingredient, index) => {
                  return (
                    <span key={index}>{ingredient}</span>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
    </UserContext.Provider>
  );
};

export default App;
