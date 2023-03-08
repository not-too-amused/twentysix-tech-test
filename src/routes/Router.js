import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Profile } from ".";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);
