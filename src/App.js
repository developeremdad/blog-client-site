import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import AuthProvider from './Pages/Context/AuthProvider';
import AddBlog from './Pages/Dashboard/AddBlog/AddBlog';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManagePosts from './Pages/Dashboard/ManagePosts/ManagePosts';
import ManageUserPost from './Pages/Dashboard/ManageUserPost/ManageUserPost';
import BlogDetails from "./Pages/Home/BlogDetails/BlogDetails";
import Home from "./Pages/Home/Home/Home";
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import './Style/Style.css';
function App() {
  return (
    <div className="App">
      
      <Router>
      <AuthProvider>
          <Routes>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
            <Route path="/dashboard" element={<DashboardHome></DashboardHome>}></Route>
            <Route path="/dashboard/makeAdmin" element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}></Route>
            <Route path="/dashboard/addBlog" element={<AdminRoute><AddBlog></AddBlog></AdminRoute>}></Route>
            <Route path="/dashboard/manageUserPost" element={<AdminRoute><ManageUserPost></ManageUserPost></AdminRoute>}></Route>
            <Route path="/dashboard/managePost" element={<AdminRoute><ManagePosts></ManagePosts></AdminRoute>}></Route>
            </Route>
            <Route path="/blogDetails/:postId" element={<BlogDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
          </AuthProvider>
      </Router>
      
      
    </div>
  );
}

export default App;
