import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Main from './Components/Main';
import School from './Components/School/School';
import TownSchool from './Components/School/TownSchool';
import Area from './Components/School/Area';
import AreaDetails from './Components/School/AreaDetails';
import SchoolPage from './Components/SchoolPage/SchoolPage';
import Login from './Components/Login/Login';
import AddSchool from './Components/Admin/AddSchool';
import AdminArticle from './Components/Admin/AdminArticle';
import ModeratorControl from './Components/Admin/ModeratorControl';
import MoreArticle from './Components/article/MoreArticle';
import DeleteArticle from './Components/Admin/DeleteArticle';
import ExtraDeleteArticle from './Components/Admin/ExtraDeletArticle';
import { ToastContainer } from 'react-toastify';
import Registration from './Components/Login/Registration';
import Test from './Components/Membership/Test';
import Compare from './Components/Compare/Compare';
import FeaturesSchool from './Components/SearchSchool/FeaturesSchool';
import ShowCompare from './Components/Compare/ShowCompare';
import UpdateArticle from './Components/Admin/UpdateArticle';
import UpdateSchool from './Components/Admin/UpdateSchool';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoute';
import Filter from './Components/Filter/Filter';

import AdminGiveAds from './Components/advertisment/AdminGiveAds';
import CityAds from './Components/advertisment/CityAds';
import Advertisment from './Components/advertisment/Advertisment';
import TownAds from './Components/advertisment/TownAds';
import GiveAds from './Components/Admin/GiveAds';
import AlArticle from './Components/article/AlArticle';



function App() {
  const router=createBrowserRouter(

    [

      {
        path: '/',
        element: <Main></Main>,
        children: [

          {
            path: '/',
            element:  <Home></Home>
          },
          {
            path: '/school',
            element: <School></School>,
          },
          {
            path: '/FeaturesSchool',
            element: <FeaturesSchool></FeaturesSchool>,
          },
          {
            path: '/login',
            element: <Login></Login>,
          },
          {
            path: '/registration',
            element: <Registration></Registration>,
          },
          {
            path: '/adminschool',
            element: <AddSchool></AddSchool>,
          },
          {
            path: '/adminarticle',
            element: <AdminArticle></AdminArticle>,
          },
          {
            path: '/compare',
            element: <Compare></Compare>,
          },
          {
            path: '*',
           element:   <Home></Home>
          },
          {
            path: '/testok',
            element: <Test></Test>,
          },
          {
            path: '/compare',
            element:  <Compare></Compare>
          },
          {
            path: '/adminmoderator',
            element: <ModeratorControl></ModeratorControl>,
          },
          
          {
            path: '/darticle',
            element: <ExtraDeleteArticle></ExtraDeleteArticle>,
          },
          {
            path: '/title/:id',
            element:  <TownSchool></TownSchool>,
            loader:({params})=>fetch(`https://d-azure.vercel.app/title/${params.id}`)
          },
          {
            path: '/aread/:id',
            element:  <Area></Area>,
            loader:({params})=>fetch(`https://d-azure.vercel.app/aread/${params.id}`)
          },
          {
            path: '/school/:id',
            element:   <SchoolPage></SchoolPage>, 
            loader:({params})=>fetch(`https://d-azure.vercel.app/school/${params.id}`)
          },
          {
            path: '/UpdateSchool/:id',
            element:  <UpdateSchool></UpdateSchool>,
            loader:({params})=>fetch(`https://d-azure.vercel.app/schoolupdateid/${params.id}`)
          },
          {
            path: '/schoolCompareShow/:id',
            element:  <ShowCompare></ShowCompare>,
            loader:({params})=>fetch(`https://d-azure.vercel.app/school/${params.id}`)
          },

          

          {
            path: '/area/:id',
            element:  <Area></Area>,
            loader:({params})=>fetch(`https://d-azure.vercel.app/area/${params.id}`)
          },
          {
            path: '/recentarticled/:url',
            element: <MoreArticle />,
            loader: ({ params }) =>
              fetch(`https://d-azure.vercel.app/recentarticled/${params.url}`),
          },
          
          {
            path: '/updatearticleid/:id',
            element:  <UpdateArticle></UpdateArticle>,
            loader:({params})=>fetch(`https://d-azure.vercel.app/recentarticled/${params.id}`)
          },
          {
            path: '/filter',
            element: <Filter></Filter>
          },
        
          {
            path: '/giveads',
            element: <AdminGiveAds></AdminGiveAds>
          },
          {
            path: '/article',
            element: <AlArticle></AlArticle>
          },
          {
            path: '/cityid/:id',
            element: <CityAds></CityAds>,
            loader:({params})=>fetch(`https://d-azure.vercel.app/cityid/${params.id}`)
          },
          
          {
            path: '/adsvertiesment/:id',
            element: <Advertisment></Advertisment>,
            loader:({params})=>fetch(`https://d-azure.vercel.app/adsvertiesment/${params.id}`)
          },
          {
            path: '/townid/:id',
            element:  <TownAds></TownAds>,
            loader:({params})=>fetch(`https://d-azure.vercel.app/townid/${params.id}`)
          },

        {
            path: '/GiveAds',
            element: <GiveAds></GiveAds>
          },
          // {
          //   path: '/recievecomment/:id',
          //   element:   <ShowComment></ShowComment>,
          //   loader:({params})=>fetch(`https://d-azure.vercel.app/recievecomment/${params.id}`)
          // },
        
         
        
       
       
         
         

          
         


        ]
      }
      

    ]
    
  )
  
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>

     <ToastContainer/>
     
    </div>
  );
}

export default App;