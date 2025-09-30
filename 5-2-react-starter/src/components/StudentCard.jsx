import '../App.css';

// StudentCard component to display individual student informationßß

function StudentCard(props){
    return <div className="studentCard">
        <h3><strong>Name:</strong> {props.name}</h3>
        <p><strong>ID:</strong> {props.studentId}</p>
        <p><strong>Department:</strong> {props.dept}</p>
    </div>;
}

export default StudentCard;