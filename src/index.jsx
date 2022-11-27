import React from "react";
import { createRoot } from "react-dom/client";
import { Router } from "react-router-dom";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
