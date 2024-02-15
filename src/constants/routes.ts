import {Assignments} from '../pages/Assignmets'
import { Presentations } from '../pages/Presentation'
import { Schedule } from '../pages/Schedule'
import {HomePage} from '../pages/Home';


const spring2024 = {
    "name": "spring2024",
    key:134,
    paths: [
        {
            path: 'Assignments',
            component: Assignments,
            exact: false,
            key: 123
        },
        {
            path: 'Presentations',
            component: Presentations,
            exact: false,
            key: 122
        },
        {
            path: 'Schedule',
            component: Schedule,
            exact: false,
            key: 133
        },
        {
            path: '',
            component: HomePage,
            exact: true,
            key: 103
        },
    ]
   
}

export const default_path = spring2024.name

export const routes = [spring2024]