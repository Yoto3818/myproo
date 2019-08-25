export default {
    path : '/Film',
    component : () => import('@/views/Film'),
    
    children:[
        {
            path:'city',
            component : () => import('@/components/City')
        },
        {
            path:'NowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path:'willPlaying',
            component : () => import('@/components/WillPlaying')
        },
        {
            path:'search',
            component : () => import('@/components/Search'),
        },
        {
            path:"detail/1/:movieId",
            components:{
                default : ()=> import('@/components/NowPlaying'),  //默认加载这个
                detail:()=> import('@/views/Film/detail')                   
            },
            //可以在详情页 拿到参数
            props : {
                detail : true
            }
        },
        {
            path : 'detail/2/:movieId',
            components : {
                default : ()=> import('@/components/WillPlaying'),
                detail : ()=> import('@/views/Film/detail')
            },
            props : {
                detail : true
            }
        },
        //重定向
        {
            path : '/Film',
            redirect : '/Film/nowPlaying'
        }
        
       
    ]

}