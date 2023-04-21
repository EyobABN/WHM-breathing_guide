import React from 'react';
import './Table.css';

const TimeTable = ({ times }) => {
  const average = Math.floor(times.reduce((a, b) => a + b, 0) / times.length);

  const formattedTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displaySeconds = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;

    return `${displayMinutes}:${displaySeconds}`;
  }
  return (
    <table>
      <tbody>
        {times.map((time, index) => (
          <tr key={index}>
            <td>{`Round ${index + 1}`}</td>
            <td>{formattedTime(time)}</td>
          </tr>
        ))}
        <tr>
          <td>Average</td>
          <td>{formattedTime(average)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TimeTable;
