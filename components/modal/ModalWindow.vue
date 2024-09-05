<template>
    <div class="modal__bg fixed top-[0] left-[0] w-full h-screen bg-[rgba(0,_0,_0,_0.5)] flex items-center justify-center">
        <div class="modal__window bg-[white] p-[20px] relative max-w-[550px] w-full">
            <button 
            @click="emits('CloseModalWindow')"
            class="modal__close absolute top-[10px] right-[10px] w-[20px]"><img src="/img/close.png" alt="CloseButton"></button>
            <h2 class="modal__window-title text-center font-semibold text-[20px] mb-[10px]">Добавление записи</h2>
            <div class="modal__form flex flex-col gap-[10px]">
                <input 
                type="text" 
                placeholder="Введите заголовок" 
                required 
                class="modal__form-input px-[15px] py-[10px] text-[16px] border border-black-500"
                v-model="title"
                >
                <textarea 
                placeholder="Введите описание" 
                required 
                class="modal__form-textarea px-[15px] py-[10px] text-[16px] border border-black-500"
                v-model="descript"
                ></textarea>
                <input 
                type="number" 
                placeholder="Введите UserId" 
                required 
                class="modal__form-input px-[15px] py-[10px] text-[16px] border border-black-500"
                v-model="id"
                >
                <button 
                class="modal__form-button w-full px-0 py-[10px] text-center text-[16px] text-[white] bg-[black] rounded-[20px]"
                @click="SendDataToDb()"
                >Отправить</button>
                <p class="modal__form-ok px-0 py-[5px] w-full text-[10px] border border-green-500 text-center text-[green] mt-[5px]" v-if="postsStore.IsPostOk">Отправлено успешно</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { usepostsStore } from '~/stores/posts';

const postsStore = usepostsStore()

const emits = defineEmits(['CloseModalWindow'])

let title = ref('')
let descript = ref('')
let id = ref(0)

function SendDataToDb(){
    postsStore.SEND_DATA_TO_DB(title.value, descript.value, id.value)
}
</script>