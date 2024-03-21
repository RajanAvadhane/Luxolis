import "./App.css"
import Contact from "./assets/components/Contact"
import Background from "./assets/components/Background"

function App() {
  return (
    <>
      <div className="relative  w-full h-screen  bg-blue-700">
        <Background />
        <div className=" fixed z-[3] flex items-center  ">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
