// Duomenų bazės valdymui
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Dokumento schema (vieno įrašo schema)
let taskSchema = new Schema(
    {
      taskTitle: {
          type: String
      },
      status: {
          type: Boolean
      }
    }
  );
  
  // Modelis, čia rašome Task, bet DB susikurs tasks.
  const Task = new model("Task", taskSchema);

  module.exports = Task;