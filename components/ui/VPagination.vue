<template>
    <section class="pagination">
        <div class="container">
            <div class="pagination__block flex justify-between items-center my-5">
                <button class="pagination__button" @click="emits('GoToNewPage', +route.query.page - 1)">Prev</button>
                <div class="pagination__current">{{ route.query.page }}</div>
                <button class="pagination__button" @click="emits('GoToNewPage', +route.query.page + 1)">Next</button>
            </div>
            
        </div>
    </section>
</template>
<script setup>
const route = useRoute()

const emits = defineEmits(['GoToNewPage'])

</script>