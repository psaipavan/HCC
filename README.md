# HCC
Its the project regarding the human centric companion for emotional detection


steps to run the code:

1. You need to have an react js environment .If not download it and then proceed with the process

2. Then you need to access the App.jsx for rendering the codes

3. Furtherly , You will get the code as shown as follows
   
  import Dashboard from './components/Dashboard';
  import EmergencyAlert from './components/EmergencyAlert';
  import Login from './components/login';
  import Settings from './components/Settings';
  const App = () => {
  return (
    <div>
      <Dashboard />
      {/* <EmergencyAlert />
      <Login />
      <Settings /> */}
    </div>
  );
  };

  export default App;


4.With these interface you need to render whatever the page you want to render you need to remove it from the comments 

5. Then use the commanand npm run dev in the terminal

6. You'll get a link showing that the LocalServer is started then click on it

7.It will open in default web browser 

