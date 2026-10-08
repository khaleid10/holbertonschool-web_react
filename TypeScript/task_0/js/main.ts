interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Khalid',
  lastName: 'Yousef',
  age: 32,
  location: 'Riyadh',
};

const student2: Student = {
  firstName: 'Ahmed',
  lastName: 'Mohammed',
  age: 24,
  location: 'Jeddah',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = table.insertRow();
  const nameCell: HTMLTableCellElement = row.insertCell();
  const locationCell: HTMLTableCellElement = row.insertCell();

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
