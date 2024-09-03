import React from 'react';
import './Workouts.css';

const AdvancedWorkouts = () => {
  const workouts = [
    {
      title: 'Handstand Push-Ups',
      description: 'Handstand push-ups build upper body and core strength. Aim for 3 sets of 8 reps.',
      videoUrl: 'https://www.youtube.com/watch?v=FaRge9WFzWg',
    },
    {
      title: 'Pistol Squats',
      description: 'Pistol squats are a challenging single-leg exercise. Do 3 sets of 8 reps on each leg.',
      videoUrl: 'https://www.youtube.com/watch?v=vq5-vdgJc0I',
    },
    {
      title: 'Dragon Flag',
      description: 'The dragon flag is an advanced core exercise. Aim for 3 sets of 5 reps.',
      videoUrl: 'https://www.youtube.com/watch?v=pvz7k5gO-DE',
    },
  ];

  return (
    <div className="workouts-container">
      <h2>Advanced Workouts</h2>
      <div className="workouts-cards">
        {workouts.map((workout, index) => (
          <div key={index} className="workout-card">
            <h3 className="workout-title">{workout.title}</h3>
            <p className="workout-description">{workout.description}</p>
            <a href={workout.videoUrl} target="_blank" rel="noopener noreferrer" className="workout-video-link">
              Watch Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedWorkouts;