const studentsWithGroupInfo = students.map(student => {
  const group = groups.find(g => g.id === student.group_id)
  return {
    ...student,
    groupName : group.name
  }
})
