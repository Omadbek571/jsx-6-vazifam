import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ToDolist from './components/ToDolist'

function App() {
  return (
    <>
      <Navbar />
      <main className='grow base-container border border-purple-400 h-full'>
        <ToDolist/>
      </main>
      <Footer />
    </>
  )
}

export default App