import { useState } from "react"
import Btn from "./components/Btn"

function App() {
  const [list, setList] = useState([])
  const [isDraw, setIsDraw] = useState(false)
  const [winner, setWinner] = useState("")
  const [formdata, setFormdata] = useState({name : ""})

  //tailwind
  const flex = `flex flex-col`
  const shadow = `shadow-lg shadow-indigo-700/30`
  
  const header = `bg-gradient-to-br from-indigo-400 via-indigo-300 to-violet-300
                  px-4 py-8 text-3xl font-bold text-center lg:mb-10 lg:text-4xl w-full`
  const input = `border-2 border-violet-300 rounded-lg py-2 px-4
                 font-semibold placeholder:text-violet-400
                 focus:outline-none
                 focus:ring-2 focus:ring-violet-300 focus:bg-violet-200
                 focus:shadow-lg focus:shadow-violet-200/50 focus:scale-105
                 hover:border-violet-400
                 transition-transform transition-colors transition-shadow duration-300 ease-in-out`
  const section = `mt-14 rounded-lg w-full p-4 bg-gradient-to-br from-indigo-200 to-violet-100`
  const ul = `list-decimal pl-5 mt-6 text-violet-700 font-bold marker:text-violet-500 lg:text-xl`

  //
  const listEl = list.map((l, i) => <li className="pl-2 text-indigo-700" key={i}>{l}</li>)

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
    <header className={`${header} ${shadow}`}><h1>👑<span>Raffle</span>👑</h1></header>
    <main className={`${flex} items-center w-11/12 gap-5 lg:w-8/12 xl:w-6/12`}>
      <section className={`${flex} ${section} ${shadow} items-center gap-4`}>
        <h2 className="text-xl font-bold lg:text-3xl">Enter the Raffle!</h2>
        <form className={`${flex} mt-4 gap-4 w-11/12`} onSubmit={handleSubmit}> 
          <input
            type="text"
            placeholder="Enter your name..."
            aria-label="Enter your name"
            value={formdata.name}
            onChange={handleChange}
            name="name"
            className={input}
          />
          <Btn type="submit" disabled={isDraw}>Enter Raffle</Btn>
        </form>
        <section className="mt-6 flex gap-2 w-11/12 mb-4">
          <Btn variant="red" onClick={handleDraw} disabled={list.length < 1 || isDraw}>Draw winner</Btn>
          <Btn variant="lime" onClick={handleReset} disabled={isDraw}>Reset</Btn>
        </section>
      </section>
      <section className={`${flex} ${section} ${shadow}`}>
        { isDraw ? 
           <div className={`${flex} gap-14 w-full py-4`}>
            <p className="text-center font-bold text-2xl">
              The winner is: <span className="text-yellow-700">{winner}</span> !🏆
            </p>
            <Btn onClick={handleRestart} variant="yellow" width="w-9/12 mx-auto">Ok</Btn>
           </div>:
          <>
            <h3 className="font-semibold text-lg text-center lg:text-2xl">Partecipants:</h3>
            {list.length > 0 ?
              <ul className={ul}>{listEl}</ul> :
              <p className="mt-6 italic">No partecipants yet...</p>} 
          </>
        }  
      </section>
    </main>
  </div>
  )
}

export default App
