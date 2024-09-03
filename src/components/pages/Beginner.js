import React from 'react';
import './Workouts.css';

const Workouts = () => {
  const workouts = [
    {
      title: 'Push-Ups',
      description: 'Push-ups help build upper body strength. Start with 3 sets of 10 reps.',
      videoUrl: 'https://www.youtube.com/watch?v=_l3ySVKYVJ8',
    },
    {
      title: 'Bodyweight Squats',
      description: 'Bodyweight squats are great for building leg strength. Do 3 sets of 15 reps.',
      videoUrl: 'https://www.youtube.com/watch?v=aclHkVaku9U',
    },
    {
      title: 'Plank',
      description: 'The plank is an excellent core exercise. Hold for 30 seconds and repeat 3 times.',
      videoUrl: 'https://www.youtube.com/watch?v=pSHjTRCQxIw',
    },
  ];

  return (
    <div className="workouts-container">
      <h2>Beginner Workouts</h2>
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

export default Workouts;