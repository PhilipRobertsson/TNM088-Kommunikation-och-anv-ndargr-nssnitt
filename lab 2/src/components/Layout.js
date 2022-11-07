import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <nav className='HomeButton'>
        <Link to='/' style={{ textDecoration: 'none', color: 'aliceblue' }}>Home</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
