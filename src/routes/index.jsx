import Following from '~/Pages/Following'
import Home from '~/Pages/Home';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';

//public routes
const publicRoute = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/following',
        component: Following
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/upload',
        component: Upload,
        layout: null
    }
]
const privateRoute = [

]

export { publicRoute, privateRoute };