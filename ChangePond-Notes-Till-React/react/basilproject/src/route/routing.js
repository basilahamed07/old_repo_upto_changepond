// import path = require("path");
import { createBrowserRouter } from "react-router-dom";
// import MySliderComp from "../component/MySliderComp"
import Myimages from "../component/Myimages"
import Parancomp from "../component/parancomp";
import Confiction from "../component/confitionrencomp";
import Pagenotfound from "../component/Pagenotfound";
import ReactHookComp from "../Hooks/ReacHooksComp"
// import { Children } from "react";
import UserEffectHook from "../Hooks/UserEffectHook";
import UseStateHook from "../Hooks/UseStateHook";
import Maindashbord from "../layouts/Maindashbord";
const router = createBrowserRouter([
    // {path:"myslider", element:<MySliderComp/>},
    {path:"maindasshbord",element:<Maindashbord/>, children:[

    // 1) default routing
    {path:"", element:<Myimages/>},
    // 2) NAMING ROUTING
    {path:"myimage",element:<Parancomp></Parancomp>},

    // 3) parameterize function
    {path:"paramters",element:<Confiction></Confiction>},
    {path:"paramters/:id",element:<Confiction></Confiction>},



    {path:"dashbordreact",element:<ReactHookComp></ReactHookComp>,Children:[
        {path:"usereffect",element:<UserEffectHook></UserEffectHook>},
       {path:"usereffect",element:<UseStateHook></UseStateHook>},
    ]},

    

]},


// wild card function

    //child routing here and hooking concept
    {path:"*", element:<Pagenotfound></Pagenotfound>},

    //marndashbord
    

   
        
])

export default router