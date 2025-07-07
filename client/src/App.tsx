import { List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {
  const [activities, setActivties] = useState<Activity[]>([]);

  useEffect(() =>{
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivties(response.data))
  }, [])

  return (
  <>
    <Typography variant='h3' className="app">Reactivities</Typography>
    <List>
      {activities.map((activity) => (
        <ListItem key={activity.id}>
          <ListItemText>{activity.title}</ListItemText>
        </ListItem>
      ))}
    </List>
  </>
  )
}

export default App
