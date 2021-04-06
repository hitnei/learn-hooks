import React, { useState, useEffect, useRef, createContext, useMemo } from "react";
import useAboutableFetch from 'use-abortable-fetch';
import Toggle from "./Toggle";
import Counter from "./Counter";
import { useTitleInput } from "./hooks/useTitleInput";

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();
  const { data, loading } = useAboutableFetch('http://my-json-server.typicode.com/leveluptuts/fakeapi/dishes')
  if (!data) return null;

  const title = "Level Up Dishes"

  return (
    <UserContext.Provider
      value={{
        user: true,
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => ref.current.classList.add("new-fake-class")}>
          {title}
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

        {data.map((dish, index) => {
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
