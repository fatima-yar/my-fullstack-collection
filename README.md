# Universal Book Collection

Welcome to Universal Book Collection, a full-stack application project where I manage a collection of books. This project explores building a robust system for tracking and interacting with book data.

## Project Steps

These are the steps I followed to develop the Universal Book Collection platform:

### Choosing Your Data Set

I selected books as the primary dataset for this project to maintain simplicity in data management.

### Building the Database

- Designed a database schema tailored for storing book details using SQLite3.
- Implemented database migrations and seeded initial data to populate the database using Knex.

### Building the API

- Developed robust API endpoints using Node.js to facilitate seamless data retrieval.


### Frontend Development

#### Setting the Stage

- Created a React component with static HTML to initialize the frontend interface.
- Applied CSS styling to enhance the visual appeal of the application.

#### Building the API Client

- Constructed an efficient API client within the frontend architecture using TypeScript to interact with backend endpoints.

#### Querying Data

- Utilized the `useQuery` hook in React to fetch and display book collection data dynamically.

#### Managing Data

##### Create Data

- Introduced a form component in React to add new books to the collection.
- Implemented data mutation using the `useMutation` hook in TypeScript for creating new entries via API.

##### Delete Data

- Integrated functionality in React to delete existing book entries securely.

##### Update Data

- Developed a form component in React for updating book details.
- Utilized the `useMutation` hook in TypeScript for seamless data updates via API.


