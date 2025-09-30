import '../App.css';

function StudentCard({student}){
    return <div className="studentCard">
        <h3><strong>Name:</strong> {student.name}</h3>
        <p><strong>ID:</strong> {student.ID}</p>
        <p><strong>Department:</strong> {student.dept}</p>
    </div>;
}

export default StudentCard;