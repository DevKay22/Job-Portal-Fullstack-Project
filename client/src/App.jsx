import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Toaster } from 'react-hot-toast' 
import LandingPage from "./pages/LandingPage/LandingPage";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import JobSeekerDashboard from "./pages/JobSeeker.jsx/JobSeekerDashboard";
import JobDetails from "./pages/JobSeeker.jsx/JobDetails";
import SavedJobs from "./pages/JobSeeker.jsx/SavedJobs";
import UserProfile from "./pages/JobSeeker.jsx/UserProfile";
import ProtectedRoute from "./routes/ProtectedRoute";
import EmployerDashboard from "./pages/Employer/EmployerDashboard";
import JobPosting from "./pages/Employer/JobPosting";
import ManageJobs from "./pages/Employer/ManageJobs";
import ApplicationViewer from "./pages/Employer/ApplicationViewer";
import EmployerProfilePage from "./pages/Employer/EmployerProfilePage";

const App = () => {
  return (
    <div>

      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/find-jobs" element={<JobSeekerDashboard />} />
          <Route path="/job/:jobId" element={<JobDetails />} />
          <Route path="/saved-jobs" element={<SavedJobs />} />
          <Route path="/profile" element={<UserProfile />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute requiredRole="employer"/>}>
            <Route path="/employer-dashboard" element={<EmployerDashboard />} />
            <Route path="/post-job" element={<JobPosting />} />
            <Route path="/manage-jobs" element={<ManageJobs />} />
            <Route path="/applicants" element={<ApplicationViewer />} />
            <Route path="/company-profile" element={<EmployerProfilePage />} />

          </Route>

          {/* Catch all routes */}
          <Route path="*" element={<Navigate to="/" replace/>}/>

        </Routes>
      </Router>

      <Toaster 
        toastOptions={
          {
            className: "",
            style: {
              fontSize: "13px"
            }
          }
        }
      />
      
    </div>
  )
}

export default App
