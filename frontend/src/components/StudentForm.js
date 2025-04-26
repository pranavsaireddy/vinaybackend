import { useState, useEffect } from 'react'
import axios from 'axios'

export default function StudentForm({ student, onSuccess }) {
  const [form, setForm] = useState({
    name: '', rollNumber: '', department: '', year: ''
  })

  useEffect(() => {
    if (student) setForm(student)
  }, [student])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (student) {
      await axios.put(`/students/${student._id}`, form)
    } else {
      await axios.post('/students', form)
    }
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="rollNumber" value={form.rollNumber} onChange={handleChange} placeholder="Roll No" required />
      <input name="department" value={form.department} onChange={handleChange} placeholder="Department" required />
      <input name="year" value={form.year} onChange={handleChange} placeholder="Year" type="number" required />
      <button type="submit">{student ? 'Update' : 'Add'} Student</button>
    </form>
  )
}
