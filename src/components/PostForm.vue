<template>
    <aside class="main__aside aside">
        <div class="aside__content">
            <form class="aside__form form" @submit.prevent>

                <div class="form__line">
                    <label for="1" class="form__label">Наименование товара<span> *</span></label>
                    <input v-model="post.title" id="1" autocomplete="off" type="text" name="form[]" data-error=""
                        placeholder="" 
                        data-value="Введите наименование товара"
                        class="input _req">
                </div>
                <div class="form__line">
                    <label for="2" class="form__label">Описание товара</label>
                    <textarea v-model="post.body" id="2" autocomplete="off" name="form[]" placeholder="Введите описание товара"
                        data-value="Введите описание товара" class="input"></textarea>
                </div>
                <div class="form__line">
                    <label for="3" class="form__label">Ссылка на изображение товара<span> *</span></label>
                    <input v-model="post.image" autocomplete="off" id="3" type="text" name="form[]" data-error="" placeholder="Введите ссылку"
                        data-value="Введите ссылку" class="input _req">
                </div>
                <div class="form__line">
                    <label for="4" class="form__label">Цена товара<span> *</span></label>
                        <input v-model="post.price" oninput="this.value = this.value.replace(/[^\d.,]/g, '').replace(/(.{3})/g, '$1 ').replace(/[,]/g, '.').trim();" id="4" autocomplete="off" type="text" name="form[]" data-error="Обязательное поле, только цифры" placeholder="Введите цену"
                        data-value="" class="input _req">
                </div>
                <div class="button">
                    <button @click="createPost" type="submit" class="aside__button btn">Добавить товар</button>         
                </div>                
            </form>
        </div>
    </aside>
</template>

<script>

export default {
	
    data() {
        return {
            post: {
                title: '',
                body: '',
				image: '',
				price: ''
            }
        }        
    },
    methods: {
        createPost(){
            let btnSend = document.querySelector('.btn');
            if (btnSend.classList.contains("_active")){

                this.post.id = Date.now();
                // Отправляем данные в родительский компонент:
                this.$emit('create', this.post)
                // после отправки данных очищаем поля инпута:
                setTimeout(()=>{
                    this.post = {
                    title: '',
                    body: '',
                    image: '',
                    price: ''
                }
                },300)  
            } 
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../styles/variables';
	@import '../styles/fonts';
	@import '../styles/null';
	@import '../styles/base';
	@import '../styles/forms';

	.main {
		// .main__aside
		&__aside {
			flex: 0 0 332px;
			margin-right: 16px;	

			@media (max-width: $md2){
			flex: 0 0 252px;
			}

			@media (max-width:$md3){
				margin: 0px 0px 16px 0px;				
			}	
		}		
	}

    .aside {

		background: #FFFEFB;
		box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;

		// .aside__content
		&__content {
			padding: 24px;
			width: 100%;
		}

		// .aside__form
		&__form {
			display: flex;
			flex-direction: column;
		}

		// .aside__button
		&__button {}
	}

</style>