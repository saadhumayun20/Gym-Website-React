import React from 'react';
import './Workouts.css';

const IntermediateWorkouts = () => {
  const workouts = [
    {
      title: 'Burpees',
      description: 'Burpees are a full-body exercise that improves strength and endurance. Do 3 sets of 12 reps.',
      videoUrl: 'https://www.youtube.com/watch?v=TU8QYVW0gDU',
    },
    {
      title: 'Lunges',
      description: 'Lunges help build leg and core strength. Do 3 sets of 15 reps on each leg.',
      videoUrl: 'https://www.youtube.com/watch?v=QOVaHwm-Q6U',
    },
    {
      title: 'Russian Twists',
      description: 'Russian twists target the core muscles. Do 3 sets of 20 reps.',
      videoUrl: 'https://www.youtube.com/watch?v=wkD8rjkodUI',
    },
  ];

  return (
    <div className="workouts-container">
      <h2>Intermediate Workouts</h2>
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

export default IntermediateWorkouts;