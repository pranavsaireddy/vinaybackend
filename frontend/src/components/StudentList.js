import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function StudentList() {
  const [students, setStudents] = useState([])
  const navigate = useNavigate()

  const loadStudents = async () => {
    const res = await axios.get('/students')
    setStudents(res.data)
  }

  const deleteStudent = async (id) => {
    await axios.delete(`/students/${id}`)
    loadStudents()
  }

  useEffect(() => {
    loadStudents()
  }, [])

  return (
    <div>
      <h2>All Students</h2>
      <button onClick={() => navigate('/add')}>Add Student</button>
      <table>
        <thead>
          <tr><th>Name</th><th>Roll No</th><th>Dept</th><th>Year</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.rollNumber}</td>
              <td>{s.department}</td>
              <td>{s.year}</td>
              <td>
                <button onClick={() => navigate(`/edit/${s._id}`)}>Edit</button>
                <button onClick={() => deleteStudent(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
