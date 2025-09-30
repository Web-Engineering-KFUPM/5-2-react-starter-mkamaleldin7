import './App.css'
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <StudentCard className= "studentCard" name= "Mohamed Kamaleldin" ID= "202338790" dept= "Information and Computer Science"/>
          <StudentCard className= "studentCard" name= "Almaan Khan" ID= "20233890" dept= "Computer Engineering"/>
        </div>
      </main>
    </div>
  )
}

export default App
