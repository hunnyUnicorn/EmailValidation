import AuthPage from './pages/auth'
import MainLayout from './containers/layout/MainLayout'
import Sidebar from './containers/layout/Sidebar'
import './App.css'

function App() {
  return (
    <MainLayout>
      <AuthPage/>
      <Sidebar></Sidebar>
    </MainLayout>
  );
}

export default App;
