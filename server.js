const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse form data from POST
app.use(express.static('public'));
app.set('view engine', 'ejs');

let users = [
  { id: 1, name: "John Doe", email: "Johndoe@gmail.com" },
  { id: 2, name: "Anne Klutz", email: "Anne Klutz@gmail.com" },
  { id: 3, name: "Yuriya Mahi", email: "Yuriyamahi@gmail.com" },
];

// const users = [
//   { id: 1, name: "John Doe" },
//   { id: 2, name: "Anne Klutz" },
//   { id: 3, name: "Hi" },
// ];

// Routes
app.get('/', (req, res) => {
  res.send('HOMEPAGE');
});

// app.get('/users', (req, res) => {
//   res.json(users);
// });

app.get('/users', (req, res) => { // Get is for fetching or reading data
  res.render("index", { users });
});

app.get('/users/new', (req, res) => {
  res.render("new");
});

app.get('/users/:id/edit', (req, res) => { // Para sa edit part
  const user = users.find(u => u.id === parseInt(req.params.id));
  res.render("edit", { user });
});

app.post('/users/:id', (req, res) => {
  const { name, email } = req.body;
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    user.name = name;
    user.email = email;
  }
  res.redirect("/users");
});

app.post('/users', (req, res) => { // Ang post is for submitting
  const { name, email } = req.body;
  const newUser = {
    id: Date.now(),
    name,
    email
  };
  users.push(newUser);
  res.redirect("/users");
});

// app.put('/users/:id', (req, res) => { // Update user by ID or name
//   const user = users.find((u) => u.id === parseInt(req.params.id));
//   if (user) {
//     user.id = req.body.id;
//     user.name = req.body.name;
//     res.json(user);
//   } else
//     res.status(404).json({ message: 'User not found' });
// });

app.post('/users/:id/delete', (req, res) => {
  users = users.filter(user => user.id !== parseInt(req.params.id));
  res.redirect('/users');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
