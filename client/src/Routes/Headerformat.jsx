import React from "react";
import "./header.css";
function HeaderF() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       
        <li class="nav-item">
          <a class="nav-link" href="/met">Courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/calendar">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Quizs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">LogOut</a>
        </li>
       
      </ul>
    </div>
  </nav>
  );
}

export default HeaderF;
