import { useState } from "react"
import Btn from "./components/Btn"

function App() {
  const [list, setList] = useState([])
  const [isDraw, setIsDraw] = useState(false)
  const [winner, setWinner] = useState("")
  const [formdata, setFormdata] = useState({name : ""})

  //tailwind
  const flex = `flex flex-col`
  
  const header = `bg-gradient-to-br from-indigo-400 via-indigo-300 to-violet-300
                  px-4 py-8 text-3xl font-bold text-center
                  shadow-lg shadow-indigo-700/30 w-full`
  const main = `items-center w-11/12 gap-5 `
  const form = `mt-4 gap-4 w-11/12`
  const input = `border-2 border-violet-300 rounded-lg py-2 px-4
                 font-semibold placeholder:text-violet-400
                 focus:outline-none
                 focus:ring-2 focus:ring-violet-300 focus:bg-violet-200
                 focus:shadow-lg focus:shadow-violet-200/50 focus:scale-105
                 hover:border-violet-400
                 transition-transform transition-colors transition-shadow duration-300 ease-in-out`
  const h2 = `text-xl font-bold`
  const section = `mt-14 rounded-lg w-full p-4 
                    bg-gradient-to-br from-indigo-200 to-violet-100 shadow-lg shadow-indigo-700/30`
  const sectionBtn = `mt-6 flex gap-2 w-11/12 mb-4`
  const h3 = `font-semibold text-lg text-center`
  const ul = `list-decimal pl-5 mt-6 text-violet-700 font-bold marker:text-violet-500`
  const li = ` pl-2 text-indigo-700`
  const p = ` mt-6 italic`
  const winnerP = `text-center font-bold text-xl  `
  const span = `text-rose-700`
  const div = `gap-14 w-full `
  //
  const listEl = list.map((l, i) => (
    <li className={li} key={i}>{l}</li>
  ))

  const handleChange = e => {
    const {name , value} = e.target 
    setFormdata(d => ({...d, [name] : value}))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setList(l => [...l, formdata.name])
    setFormdata({name : ""})
  }

  const handleDraw = () => {
    setIsDraw(true)
    setWinner(list[Math.floor(Math.random() * list.length)])
  }
  const handleReset = () => {
    setList([])
    setFormdata({name : ""})
  }
  const handleRestart = () => {
    setList([])
    setWinner("")
    setIsDraw(false)
    setFormdata({name : ""})
  }

  return (
  <div className={`${flex} items-center text-indigo-700`}>
    <header className={header}><h1>Raffle</h1></header>
    <main className={`${flex} ${main}`}>
      <section className={`${flex} ${section} items-center gap-4`}>
        <h2 className={h2}>Enter the Raffle!</h2>
        <form className={`${flex} ${form}`} onSubmit={handleSubmit}> 
          <input
            type="text"
            placeholder="Enter your name..."
            aria-label="Enter your name"
            value={formdata.name}
            onChange={handleChange}
            name="name"
            className={input}
          />
          <Btn type="submit">Enter Raffle</Btn>
        </form>
        <section className={sectionBtn}>
          <Btn variant="red" onClick={handleDraw}>Draw winner</Btn>
          <Btn variant="lime" onClick={handleReset}>Reset</Btn>
        </section>
      </section>
      <section className={`${flex} ${section}`}>
        { isDraw ? 
           <div className={`${flex} ${div}`}>
            <p className={winnerP}>The winner is: <span className={span}>{winner}</span> !</p>
            <Btn onClick={handleRestart} variant="yellow" width="w-9/12 mx-auto">Ok</Btn>
           </div>:
          <>
            <h3 className={h3}>Partecipants:</h3>
            {list.length > 0 ?
              <ul className={ul}>{listEl}</ul> :
              <p className={p}>No partecipants yet...</p>} 
          </>
        }  
      </section>
    </main>
  </div>
  )
}

export default App
