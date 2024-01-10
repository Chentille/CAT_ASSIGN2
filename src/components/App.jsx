// Importing React library for creating React components
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing custom components for different routes
import AboutUs from './AboutUs';
import Team from './Team';
import Contact from './Contact';
import LionAchievements from './LionAchievements';
import DragonAchievements from './DragonAchievements';

// Main App component
function App() {
  return (
    <Router>
      {/* Switch component to only render the first Route that matches the current location */}
      <Switch>
        <Route path="/Team" component={Team} />
        <Route path="/Contact" component={Contact} />
        <Route path="/LionAchievements" component={LionAchievements} />
        <Route path="/DragonAchievements" component={DragonAchievements} />
        {/* Default route for the 'AboutUs' component, rendered when no other route matches */}
        <Route path="/" component={AboutUs} />
      </Switch>
    </Router>
  );
}

// Exporting the App component
export default App;
