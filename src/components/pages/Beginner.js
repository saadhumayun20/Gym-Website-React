import React from 'react';
import './Beginner.css'; 

export default function Beginner() {
  return (
    <div className="beginner-container">
      <h1 className="beginner-title">Beginner Program</h1>
      <div className="workouts-list">
        <div className="workout-item">
          <div className="workout-info">
            <h2>Workout 1</h2>
            <p>Description for Workout 1</p>
          </div>
          <div className="video-card">
            <video src="/videos/video-.mp4" autoPlay loop muted />
          </div>
        </div>
        <div className="workout-item">
          <div className="workout-info">
            <h2>Workout 2</h2>
            <p>Description for Workout 2</p>
          </div>
          <div className="video-card">
            <video src="/videos/workout2.mp4" autoPlay loop muted />
          </div>
        </div>
      </div>
    </div>
  );
}
