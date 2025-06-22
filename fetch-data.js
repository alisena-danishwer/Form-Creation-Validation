// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: Set the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch the data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 6: Create the <ul> list
        const userList = document.createElement('ul');

        // Step 7: Loop through users and create <li> for each
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 8: Append the <ul> to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 9: Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Step 10: Run function after DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
