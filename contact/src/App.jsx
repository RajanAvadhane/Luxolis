import "./App.css"
import Contact from "./assets/components/Contact"
import Background from "./assets/components/Background"

function App() {
  return (
    <>
      <div className=" flex justify-center items-center w-full h-screen  bg-blue-700 ">
        <Background />
        <div className=" fixed">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
