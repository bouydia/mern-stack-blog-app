import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  createRoutesFromElements,
  useLocation
} from 'react-router-dom'
import { Navbar, Footer } from './components'
import Home from './pages/Home'
import Login from './pages/Login'
import PostsPage from './pages/PostsPage'
import Register from './pages/Register'
import CreatePost from './pages/CreatePost'
import PostDetails from './pages/PostDetails'
import { ToastContainer } from 'react-toastify'
import Category from './pages/Category'
import Header from './components/Header'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import UsersTable from './pages/UsersTable'
import PostsTable from './pages/PostsTable'
import CategoryTable from './pages/CategoryTable'
import CommentsTable from './pages/CommentsTable'
import { NotFound } from './pages/NotFound'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'

const Layout = () => {
  const { pathname } = useLocation()
console.log(pathname);
  return (
    <>
      <Navbar />
      <ToastContainer theme="colored" position="top-center" />
      <div>
        <Outlet />
      </div>
      {(pathname == '/forget-password' ||
        pathname == '/reset-password' ||
        pathname == '/login' ||
        pathname == '/register')? '' :      <Footer />}

    </>
  )
}
    


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/posts/categories/:category" element={<Category />} />
      <Route path="posts/create" element={<CreatePost />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/users" element={<UsersTable />} />
      <Route path="/dashboard/posts" element={<PostsTable />} />
      <Route path="/dashboard/categories" element={<CategoryTable />} />
      <Route path="/dashboard/comments" element={<CommentsTable />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
