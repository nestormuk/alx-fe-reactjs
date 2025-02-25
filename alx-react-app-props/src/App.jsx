import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";
import './App.css'


function App() {
  const userData = { name: "Jane Doe", email: 'jane.doe@gmail.com'};

return (
  <UserContext.Provider value={userData}>
    <ProfilePage />
  </UserContext.Provider>
);
}
export default App
