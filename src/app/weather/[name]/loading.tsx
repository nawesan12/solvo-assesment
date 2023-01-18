export default function Loading() {

  const possibilities = [
    "Looking for data...", 
    "Checking weather...", 
    "Feeling the air...", 
    "Searching 'Weather' on Google...",
    "Asking mom...",
    "Opening the window...",
    "Asking somebody...",
    "Searching the weather channel on TV...",
    "Thinking..."
  ]
  const randomSelector = Math.floor(Math.random() * 10)

  return (
    <h4>{possibilities[randomSelector]}</h4>
  )
}