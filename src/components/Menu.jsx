import React from 'react'
import {
  RiMenu3Fill,
  RiCloseFill,
  RiMoonClearFill,
  RiSunFill,
} from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import { useBlog } from '../hooks/useBlog'
import logoAzul from '../../public/assets/icons/logo-azul.svg'
import logorojo from '../../public/assets/icons/logo-rojo.svg'
import '../style/animaction.css'
import '../style/gradients.css'

function Menu() {
  const activeStyle = 'border-b-4 border-sky-500 up dark:border-orange-600'

  const { menuActive, themes, toggleMenu, toggleTheme } = useBlog()

  return (
    <header>
      <nav className="relative z-10 flex items-center justify-between bg-slate-100 px-5 dark:bg-slate-900 ">
        <section className="flex items-center space-x-3">
          <img src={themes ? logorojo : logoAzul} alt="mode change" />
          {themes ? (
            <RiMoonClearFill
              className="fade-in h-12 w-12 fill-orange-600 "
              onClick={toggleTheme}
            />
          ) : (
            <RiSunFill
              className="fade-in h-12 w-12 fill-sky-600 "
              onClick={toggleTheme}
            />
          )}
        </section>
        <section className="relative lg:hidden ">
          {!menuActive ? (
            <RiMenu3Fill
              className="absolute -bottom-4 right-0 h-8 w-8 dark:fill-slate-100 "
              onClick={toggleMenu}
            />
          ) : (
            <RiCloseFill
              className="fade-in-menu absolute -bottom-4 right-0 h-8 w-8 dark:fill-slate-100 "
              onClick={toggleMenu}
            />
          )}
        </section>

        <section className="z-10 hidden bg-slate-100 dark:bg-slate-900 lg:grid">
          <ul className="flex gap-7 font-carter text-2xl">
            {routes.map((routes) => {
              return (
                <MuneList
                  key={routes.to}
                  routes={routes}
                  activeStyle={activeStyle}
                />
              )
            })}
          </ul>
        </section>
      </nav>

      {!!menuActive && (
        <section className="relative z-10 grid h-screen justify-center bg-slate-100 dark:bg-slate-900">
          <div className="diamond scal sunlight absolute h-44 w-40"></div>
          <ul className="my-32 grid gap-1 font-carter text-2xl">
            {routes.map((routes) => {
              return (
                <MuneList
                  key={routes.to}
                  routes={routes}
                  activeStyle={activeStyle}
                  onClick={() => (toggleMenu(), window.scrollTo(0, 0))}
                />
              )
            })}
          </ul>
          <div className="diamond scal sunlight absolute bottom-14 right-0 h-44 w-40"></div>
        </section>
      )}
    </header>
  )
}

function MuneList({ routes, activeStyle, onClick }) {
  return (
    <li
      className="text-center font-normal dark:text-slate-100 "
      key={routes.text}
    >
      <NavLink
        className={({ isActive }) =>
          isActive
            ? activeStyle
            : 'up border-b-4 border-sky-500 border-transparent transition ease-in-out hover:border-b-4 hover:border-sky-500 dark:hover:border-b-4 dark:hover:border-orange-600'
        }
        to={routes.to}
        onClick={onClick}
      >
        {routes.text}
      </NavLink>
    </li>
  )
}

const routes = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/Blogs',
    text: 'Blogs',
  },
  {
    to: '/Events',
    text: 'Events',
  },
  {
    to: '/Projects',
    text: 'Projects',
  },
  {
    to: '/Contact',
    text: 'Contact',
  },
]

export { Menu, MuneList, routes }
