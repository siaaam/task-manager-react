import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Analysis = ({ tasks, total }) => {
  return (
    <Container>
      <div>
        <h4>Total: {total}</h4>
        <h4>New:</h4>
        <h4>In Progress:</h4>
        <h4>Completed:</h4>
      </div>
    </Container>
  );
};

export default Analysis;
