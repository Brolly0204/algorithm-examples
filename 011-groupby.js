const studentsInGroups = students.reduce(
  (groups, student) => {
    groups[student.group_id] =
      [...( groups[student.group_id] || []), student]
    return groups
  },
  {}
)