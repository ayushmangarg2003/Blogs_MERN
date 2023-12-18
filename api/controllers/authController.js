import User from "../models/authModel.cjs"


export const register = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const user = await User.register(name, email, password)
    res.status(200).json({ email })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

};

export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.login(email, password)
    res.status(200).json({ user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

export const logout = (req, res) => {
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true
  }).status(200).json("User has been logged out.")
};