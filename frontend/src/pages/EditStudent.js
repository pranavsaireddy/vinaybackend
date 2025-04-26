import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import StudentForm from '../components/StudentForm'

export default function EditStudent() {
  const [student, setStudent] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`/students/${id}`)
      .then(res => setStudent(res.data))
  }, [id])

  return (
    <div>
      <h2>Edit Student</h2>
      {student && <StudentForm student={student} onSuccess={() => navigate('/')} />}
    </div>
  )
}