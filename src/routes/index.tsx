import { FC } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { default_path, routes } from "../constants/routes";
import { NotFound } from "../pages/404";

export const Routing:FC = () =>{

    

    Object.entries(routes).forEach((_, route) => {
        Object.entries(route).forEach((path, comp) => console.log(path[0], comp)
        )
        
    })
    return (<BrowserRouter>
        
        
          <Routes>
            {/* <Route path="" element={<Layout />}> */}
              <Route index element={<Navigate to={default_path} />} />
                {
                  routes.map(semester => 
                      <Route key={semester.key} path={semester.name} element={<Layout />}>
                        {
                              semester.paths.map(path => <Route index={path.exact} key={path.key} path={path.path} element={<path.component />} />)
                        }
                      </Route>
                  )
                }
              <Route path="admin" element= {<h2>admin</h2>} />
              <Route path="*" element={<NotFound />}/>
            {/* </Route> */}
          </Routes>
          
        </BrowserRouter>
      )
}