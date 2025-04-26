import StudentForm from '../components/StudentForm'
import { useNavigate } from 'react-router-dom'

export default function AddStudent() {
  const navigate = useNavigate()
  return (
    <div>
      <h2>Add Student</h2>
      <StudentForm onSuccess={() => navigate('/')} />
    </div>
  )
}