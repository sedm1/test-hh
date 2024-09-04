<template>
    <UiVLoader v-if="postsStore.IsLoading"></UiVLoader>
    <main v-else>
        <section class="main mt-10">
            <div class="container">
                <h2 class="section__title">Посты</h2>
                <div class="main__block flex flex-col gap-y-2.5 mt-5">
                    <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md" 
                    v-for="PostItem in postsStore.posts"
                    :key='PostItem.id'
                    >
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ PostItem.title }}</h2>
                        <p class="mb-5 font-light text-gray-500 ">{{PostItem.body}}</p>
                    </article> 
                </div>
            </div>
        </section>
        <UiVPagination
        @GoToNewPage="NavigateToNewPage"
        ></UiVPagination>
    </main>
</template>
<script setup>
import { usepostsStore } from '~/stores/posts';

const postsStore = usepostsStore()
const route = useRoute()
const router = useRouter()

definePageMeta({
  middleware: "main"
})

useSeoMeta({
    title: 'Все посты'
})

onMounted(() => {
    postsStore.GET_ALL_POSTS_FROM_DB(route.query.page)
})


function NavigateToNewPage(NewPage){
    if (NewPage >= 1){
        router.push({path: '/', query: {page: NewPage}})
        postsStore.GET_ALL_POSTS_FROM_DB(NewPage)
    }
    
    
}
</script>