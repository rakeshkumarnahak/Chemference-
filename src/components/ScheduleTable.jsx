import styles from './ScheduleTable.module.css'; // Import CSS module for table styling

const ScheduleTable = () => {
  return (
    <div className={styles.scheduleCard}>
      <h2>Tentative Schedule</h2>
      <div className={styles.tableContainer}>
        <table className={styles.scheduleTable}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:00 AM - 10:00 AM</td>
              <td>Registration</td>
            </tr>
            <tr>
              <td>10:00 AM - 11:30 AM</td>
              <td>Opening Ceremony</td>
            </tr>
            <tr>
              <td>11:30 AM - 1:00 PM</td>
              <td>Keynote Speeches</td>
            </tr>
            <tr>
              <td>1:00 PM - 2:00 PM</td>
              <td>Lunch Break</td>
            </tr>
            <tr>
              <td>2:00 PM - 3:30 PM</td>
              <td>Panel Discussions</td>
            </tr>
            <tr>
              <td>3:30 PM - 4:30 PM</td>
              <td>Networking Session</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div className={styles.buttonsContainer}>
        <a className={styles.dayButton}>Day 1</a>
        <a className={styles.dayButton}>Day 2</a>
        <a className={styles.dayButton}>Day 3</a>
      </div>
    </div>
  );
}

export default ScheduleTable;
