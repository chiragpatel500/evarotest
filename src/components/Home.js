import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";


const element = <FontAwesomeIcon icon={faClock} />

const Home = () => {
  const [timer, setTimer] = useState(3595)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(increment.current)
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <div className="Home">
      <h3>React Stopwatch {element}</h3>
      <div className='stopwatch-card'>
        <p>{formatTime()}</p>
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Pause</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

// function Home(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   Home("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   Home("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   Home("Eclair", 262, 16.0, 24, 6.0),
//   Home("Cupcake", 305, 3.7, 67, 4.3),
//   Home("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }






const element = <FontAwesomeIcon icon={faClock} />

const Home = () => {
  const [timer, setTimer] = useState(3595)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(increment.current)
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <div className="app">
      <h3>React Stopwatch {element}</h3>
      <div className='stopwatch-card'>
        <p>{formatTime()}</p>
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Pause</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Home;