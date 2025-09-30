import '../App.css';

function StudentCard({props}){
    return <div className="studentCard">
        <h3><strong>Name:</strong> {props.name}</h3>
        <p><strong>ID:</strong> {props.ID}</p>
        <p><strong>Department:</strong> {props.dept}</p>
    </div>;
}

export default StudentCard;