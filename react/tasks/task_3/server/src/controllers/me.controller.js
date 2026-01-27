import fs from "fs";

export const loginUser = async (req, res) => {
  const users = await fs.readFileSync("data/users.json").toString();
  const user = JSON.parse(users).find(
    (item) =>
      item.email === req.body.email && item.password === req.body.password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const { password, ...rest } = user;

  res.status(200).json({ data: rest, message: "Login successful" });
};

export const registerUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: "Invalid data" });
  }

  const users = await fs.readFileSync("data/users.json").toString();
  const user = JSON.parse(users).find(
    (item) =>
      item.name.toLowerCase() === req.body.name.toLowerCase() ||
      item.email === req.body.email
  );

  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  const userId = new Date().valueOf();
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    id: userId,
    role: "user",
    token: `${userId}_${req.body.name}`,
  };

  await fs.writeFileSync(
    "data/users.json",
    JSON.stringify([...JSON.parse(users), newUser], null, 2),
    "utf-8"
  );

  res.status(201).json({ message: "User created successfully" });
};

export const getUser = async (req, res) => {
  const token = req.body.token;

  const users = await fs.readFileSync("data/users.json").toString();
  const user = JSON.parse(users).find((item) => item.token === token);

  if (!user) {
    return res.status(401).json({ message: "Invalid token" });
  }
  const { password, ...restUser } = user;

  res.status(200).json({ data: restUser, message: "User finded successfully" });
};
