import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from 'react-bootstrap';

const ShowTasks = ({ tasks }) => {
  return (
    <Container>
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Task Details</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Range</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{task.title}</td>
                <td>{task.subTitle}</td>
                <td>{task.start}</td>
                <td>{task.end}</td>
                <td>{task.status}</td>
                <td>{task.priority}</td>
                <td>{task.range}%</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default ShowTasks;
