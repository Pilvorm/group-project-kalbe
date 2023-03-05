import { useState } from 'react';
import Link from 'next/link';

export default function Joke ({ jokes }) {

  const [visibility, setVisibility] = useState(false)
  const [index, setIndex] = useState(0)
  const [color, setColor] = useState(generateRandomIndex())

  function handleClick() {
    setVisibility(prevVis => !prevVis)
  }

  function newJoke() {
    setIndex(generateRandomIndex());
    setColor(generateRandomIndex());
    setVisibility(false);
  }

  function generateRandomIndex() {
    return Math.floor(Math.random() * Object.keys(jokes).length);
  }

  const colorVariants = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
  ];

  // const textColor = {
  //   [colorVariants[color]]: 'text-[' + colorVariants[color] + ']'
  // }
  // console.log(textColor[colorVariants[color]])

  return (
    <div id="joke-wrap"
      className="h-[700px] flex flex-col gap-14 justify-center items-center text-center"
      style={{ backgroundColor: colorVariants[color] }}>
      <h2 className='setup text-4xl max-w-2xl text-white'>{jokes[index].setup}</h2>
      <div className='punchline text-3xl text-white'>{visibility && <p>{jokes[index].punchline}</p>}</div>
      <div className='flex gap-5'>

        <button
          onClick={handleClick}
          className={`px-8 py-2 border border-white rounded bg-white hover:bg-transparent hover:text-white transition-all text`}
          style={{ color: colorVariants[color] }}>
          {visibility ? "Hide" : "Show"} Punchline
        </button>

        <button
          onClick={newJoke}
          className={`px-8 py-2 border border-white rounded bg-white hover:bg-transparent hover:text-white transition-all`}
          style={{ color: colorVariants[color] }}>
          New Joke
        </button>

      </div>

      <div>
        <Link
          href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent('' + jokes[index].setup + '\n\n' + jokes[index].punchline)}
          className="social"><i className="bi bi-twitter text-4xl text-white"></i>
        </Link>
        <p className='share text-white'>Share to Twitter</p>
      </div>
      {/* <h3>Want to submit your own joke?</h3>
      <Link href="/submit" className='link-btn px-8 py-2 border border-white rounded bg-white hover:bg-transparent hover:text-black transition-all' style={{ color: colorVariants[color] }}>Submit Joke</Link> */}
    </div>
  )
}