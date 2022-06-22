import React from "react"
import {Navigate} from "react-router-dom"

const  Discover = React.lazy(() => import("@/pages/discover/index"))
const MyMusic = React.lazy(() => import("@/pages/my-music/index"))
const Recommend = React.lazy(() => import("@/pages/discover/page/recommend/index"))
const Ranking = React.lazy(() => import("@/pages/discover/page/ranking/index"))

const routes = [
  {
    path:'/',
    element:<Navigate  to="/discover" />,
  },
  {
    path:'/discover',
    element:<Discover />,
    children:[
      {
        path:"",
        element:<Navigate  to="/discover/recommend" />
      },
      {
        path:"recommend",
        element:<Recommend />
      },
      {
        path:"ranking",
        element:<Ranking />
      },
    ]
  },
  {
    path:'/mine',
    element:<MyMusic />,
  }
]

export default routes