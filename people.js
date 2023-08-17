// Function to count students
function countStudents(data) {
  return data.filter(person => person.isStudent).length;
}

// Function to calculate average age
function calculateAverageAge(data) {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  return totalAge / data.length;
}

// Function to describe the JSON data
function describeData(data) {
  const studentCount = countStudents(data);
  const avgAge = calculateAverageAge(data);

  return `Number of Students: ${studentCount}, Average Age: ${avgAge.toFixed(2)}`;
}

// Fetch JSON data and display description
async function fetchAndDisplayData() {
  try {
    const response = await fetch('people.json');
    const data = await response.json();

    const namesList = data.map(person => `<li>${person.name}</li>`).join(''); // Create a list of names
    const listContainer = document.getElementById('namesList'); // Assuming you have an element with the id "namesList"
    listContainer.innerHTML = `<ul>${namesList}</ul>`; // Append the list to the container

    console.log('JSON Data:', data);
    data.forEach(person => {
      console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.address.city}, State: ${person.address.state}`);
    });
    console.log(describeData(data)); // Display description
  } catch (error) {
    console.error('Error fetching JSON data:', error);
  }
}

fetchAndDisplayData();
