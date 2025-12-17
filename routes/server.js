js
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);




js
app.use(express.json());
app.use(cors());
require("dotenv").config();