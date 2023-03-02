import { useState } from 'react';
import Link from 'next/link';

const Joke = ({ jokes }) => {

  const [visibility, setVisibility] = useState(false)
  const [index, setIndex] = useState(0)
  const [background, setBackground] = useState(0)

  function handleClick() {
    setVisibility(prevVis => !prevVis)
  }

  function newJoke() {
    setIndex(generateRandomIndex());
    setBackground(generateRandomIndex());
    setVisibility(false);
  }

  function generateRandomIndex() {
    return Math.floor(Math.random() * Object.keys(jokes).length);
  }

  var colors = [
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

  return (
    <div id="joke-wrap" className="h-[650px] outline outline-1 flex flex-col gap-7 justify-center items-center text-center" style={{backgroundColor: colors[background]
    }}>
      <h2 className='text-3xl max-w-2xl'>{jokes[index].setup}</h2>
      <div className='text-xl'>{visibility && <p>{jokes[index].punchline}</p>}</div>
      <div className='flex gap-5'>
        <button onClick={handleClick} className='px-8 py-2 border border-black rounded bg-black text-white hover:bg-transparent hover:text-black transition-all'>{visibility ? "Hide" : "Show"} Punchline</button>
        <button onClick={newJoke} className='px-8 py-2 border border-black rounded bg-black text-white hover:bg-transparent hover:text-black transition-all'>New Joke</button>
      </div>
      <Link href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent('' + jokes[index].setup + '\n\n' + jokes[index].punchline)} ><i className="bi bi-twitter text-4xl"></i></Link>
    </div>
  )
}

export default Joke;

// Joke.getInitialProps = async () => {
//     let joke = {};

//     try {
//       const res = await axios.get('https://official-joke-api.appspot.com/jokes/1');
//       joke = res.data;
//     } catch (e) {
//       console.error(e);
//     }
//     return { joke };
// }