    // import path =. require("path");
import { createBrowserRouter } from "react-router-dom";
// import MySliderComp from "../component/MySliderComp"
import Myimages from "../Components/Myimages"
// import Parancomp from "../components/parancomp";
// import Confiction from "../components/confitionrencomp";
import Pagenotfound from "../Components/Pagenotfound";
import ReactHookComp from "../Hooks/ReacHooksComp"
// import { Children } from "react";
import UserEffectHook from "../Hooks/UserEffectHook";
import UseStateHook from "../Hooks/UseStateHook";
// import Parancomp from "../components/parancomp";
// import Confiction from "../components/confitionrencomp";
import Maindashbord from "../Layout/Maindashbord"
import Dashboard from "../Components/Dashboard";
import VirtualDom from "../Components/VirtualDom";
import FormValComp from "../Components/FormValComp"
import Taggledimage from "../task/Taggledimage"
import Multipleimage from "../task/multipleimage"
import Userbutton from "../Components/Userbutton"
import ProductAddComp from "../CRED/ProductAddComp";
import ProductUpdateComp from "../CRED/ProductUpdateComp";
import ProductDashboardComp from "../CRED/ProductDashboardComp"
import ProtectedRouting from "../Routing/PeotectedRouting"
import Login from "../Components/login";


//  in class
const router = createBrowserRouter([
   
//     // {path:"myslider", element:<MySliderComp/>},

//     {path:"maindasshbord",element:<Maindashbord/>, children:[

//     // 1) default routing
//     {path:"", element:<Myimages/>},
//     // 2) NAMING ROUTING
//     {path:"myimage",element:<Parancomp></Parancomp>},

//     // 3) parameterize function
//     {path:"paramters",element:<Confiction></Confiction>},
//     {path:"paramters/:id",element:<Confiction></Confiction>},



//     {path:"dashbordreact",element:<ReactHookComp></ReactHookComp>,Children:[
//         {path:"usereffect",element:<UserEffectHook></UserEffectHook>},
//        {path:"usereffect",element:<UseStateHook></UseStateHook>},
//     ]}
    

// ]},


// wild card function

    //child routing here and hooking concept

    {path:"", element:<Login/>},
    {path:"logout", element:<Login/>},
    {path:"Maindashbord",
        // here we are using the prodacted routing {that not go inside the maindashbord nu using the url}
        element:<ProtectedRouting Components={Maindashbord} />,
        children:[
        {path:"userdtate",element:<Userbutton/>},
            {path:"FormValComp",element:<FormValComp/>},
            {path:"virtualdom",element:<VirtualDom/>},
            {path:"productadd",element:<ProductAddComp></ProductAddComp>},
            {path:"productdashbord",element:<ProductDashboardComp></ProductDashboardComp>},
            {path:"productUpdate",element:<ProductUpdateComp></ProductUpdateComp>},

         
    ]},

    //marndashbord
    
{path:"virtualdom",element:<VirtualDom/>,children:[
    {path:"insidebuttion",element:<Userbutton></Userbutton>},
  {path:"userdtate",element:<UseStateHook/>} ,
  {path:"usereffect",element:<UserEffectHook/>},
  {path:"FormValComp",element:<FormValComp/>},
]},
   
 // in home work
{path:"mydashbord",element:<Dashboard></Dashboard>,children:[
    {path:"myimage",element:<Myimages></Myimages>},
]},

    {path:"task1",element:<Taggledimage></Taggledimage>},
    {path:"task2",element:<Multipleimage></Multipleimage>},

{path:"*",element:<Pagenotfound></Pagenotfound>}

])






export default router