import { FC } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { routes } from "../constants/routes";

export const Routing:FC = () =>{

    const default_path = "/spring2024"

    Object.entries(routes).forEach((sem, route) => {
        console.log(sem);
        Object.entries(route).forEach((path, comp) => console.log(path[0], comp)
        )
        
    })
      {/* <Route path="spring2024" >
                <Route index element={<h2>Home</h2>} />
                <Route path="Assignments" element={<h2>Assignments</h2>} />
              </Route> */}
    

    return (
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Layout />}>
              <Route index element={<Navigate to={default_path} />} />
             
              {
                routes.map(semester => 
                    <Route key={semester.key} path={semester.name}>
                        {/* <Route path="Assignments" element={<h2>Assignments</h2>} /> */}
                       {
                            semester.paths.map(path => <Route index={path.exact} key={path.key} path={path.path} element={<path.component />} />)
                       }
                    </Route>
                )
              }
            </Route>
          </Routes>
        </BrowserRouter>
      )
}