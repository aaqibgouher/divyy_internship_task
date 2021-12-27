import MainComponentPage from '../pages/MainComponentPage';
import MainComponent from '../components/MainComponent';
import LoginComponent from '../components/LoginComponent';
import DashboardComponent from '../components/DashboardComponent';
import LogoutComponent from '../components/LogoutComponent';
import EditDetailComponent from '../components/EditDetailComponent';

const routes = [
    {
        path: '/',
        name: 'mainPage',
        component: MainComponentPage,
        children: [
            {
                path: '',
                name: 'main',
                component: MainComponent
            },
            {
                path: 'login',
                name: 'login',
                component: LoginComponent
            },
            {
                path: 'dashboard',
                name: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'logout',
                name: 'logout',
                component: LogoutComponent
            },
            {
                path: 'edit',
                name: 'edit_detail',
                component: EditDetailComponent
            }
        ]
    }
    
    
];

export default routes;