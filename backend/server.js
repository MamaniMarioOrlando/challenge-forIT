const express = require('express');
const cors = require('cors');
const taskRouter = require('./routes/taskRoute');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api',taskRouter);

app.listen(PORT, ()=>{
    console.log(`Server runnig on http://localhost:${PORT}`);
})
