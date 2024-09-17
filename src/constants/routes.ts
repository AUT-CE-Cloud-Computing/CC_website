import {Assignments} from '../pages/Assignmets'
import { Presentations } from '../pages/Presentation'
import { Schedule } from '../pages/Schedule'
import {HomePage} from '../pages/Home';
import { UsefulContent } from '../pages/Usefulcontent';
import { routePath } from './routPath';



const spring2024 = {
    "name": "spring2024",
    key:134,
    paths: [
        {
            path: routePath.Assignments,
            component: Assignments,
            exact: false,
            key: 123
        },
        {
            path: routePath.Presentations,
            component: Presentations,
            exact: false,
            key: 122
        },
        {
            path: routePath.Schedule,
            component: Schedule,
            exact: false,
            key: 133
        },
        {
            path: routePath.Home,
            component: HomePage,
            exact: true,
            key: 103
        },
        {
            path: routePath.UsefulContent,
            component: UsefulContent,
            exact: false,
            key: 104
        },
    ]
   
}

const fall2024 = {
    "name": "fall2024",
    key:135,
    paths: [
        {
            path: routePath.Assignments,
            component: Assignments,
            exact: false,
            key: 123
        },
        {
            path: routePath.Presentations,
            component: Presentations,
            exact: false,
            key: 122
        },
        {
            path: routePath.Schedule,
            component: Schedule,
            exact: false,
            key: 133
        },
        {
            path: routePath.Home,
            component: HomePage,
            exact: true,
            key: 103
        },
        {
            path: routePath.UsefulContent,
            component: UsefulContent,
            exact: false,
            key: 104
        },
    ]
   
}

export const default_path = fall2024.name

export const routes = [spring2024, fall2024]