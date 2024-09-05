export const usepostsStore = defineStore('posts', {
    state: () => ({
        posts: [],
        IsLoading: true,
        IsPostOk: false
    }),
    getters: {
    },
    actions: {
        async GET_ALL_POSTS_FROM_DB(page){
            this.IsLoading = true
            try {
                const config = useRuntimeConfig()
                const posts = await $fetch(`${config.public.Api}?_start=${(page - 1) * 10}&_limit=10`)

                this.posts = posts
                this.IsLoading = false
            } catch(err){
                console.log('Ошибка при получении постов')
                return err
            }
        },
        async SEND_DATA_TO_DB(title, descript, id){
            try {
                this.IsPostOk = false
                const config = useRuntimeConfig()
                const post = await $fetch(`${config.public.Api}`, {
                    method: 'POST',
                    body: JSON.stringify({
                        title: title,
                        body: descript,
                        userId: id,
                      }),
                    headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                if(post.id){
                    this.IsPostOk = true
                }
            } catch(err){
                console.log('Ошибка при отправке поста: ' + err)
                return err
            }
        }
    },
});
