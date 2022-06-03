<template>
    <aside class="main__aside aside">
        <div class="aside__content">
            <form class="aside__form form" @submit.prevent>

                <div class="aside__forms">
                    <div class="form__line">
                        <label for="1" class="form__label form__label_req">Наименование товара</label>
                        <!-- <my-input 
                            v-model="post.title"
                            id="1"
                            type="text"  
                            placeholder="Введите наименование товара"
                            data-error="Поле является обязательным"
                            class="input _req"
                        /> -->
                        <input v-model="post.title" id="1" autocomplete="off" type="text" name="form[]"
                            data-error="Поле является обязательным" placeholder="Введите наименование товара"
                            data-value="" class="input _req">
                    </div>
                    <div class="form__line">
                        <label for="2" class="form__label">Описание товара</label>
                        <textarea v-model="post.body" id="2" autocomplete="off" name="form[]"
                            placeholder="Введите описание товара" data-value="" class="input"></textarea>
                    </div>
                    <div class="form__line">
                        <label for="3" class="form__label form__label_req">Ссылка на изображение товара</label>
                        <input v-model="post.image" autocomplete="off" id="3" type="text" name="form[]"
                            data-error="Поле является обязательным" placeholder="Введите ссылку" data-value=""
                            class="input _req">
                    </div>
                    <div class="form__line">
                        <label for="4" class="form__label form__label_req">Цена товара</label>
                        <input v-model="post.price"
                            oninput="this.value = this.value.replace(/[^\d.,]/g, '').replace(/(.{3})/g, '$1 ').replace(/[,]/g, '.').trim();"
                            id="4" autocomplete="off" type="text" name="form[]" data-error="Поле является обязательным"
                            placeholder="Введите цену" data-value="" class="input _req">
                    </div>
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
        createPost() {
            let btnSend = document.querySelector('.btn');
            if (btnSend.classList.contains("_active")) {

                this.post.id = Date.now();
                // Отправляем данные в родительский компонент:
                this.$emit('create', this.post)
                // после отправки данных очищаем поля инпута:
                setTimeout(() => {
                    this.post = {
                        title: '',
                        body: '',
                        image: '',
                        price: ''
                    }
                }, 300)
            }
        },
        thousandSeparator(str) {
            var parts = (str + '').split('.'),
                main = parts[0],
                len = main.length,
                output = '',
                i = len - 1;

            while (i >= 0) {
                output = main.charAt(i) + output;
                if ((len - i) % 3 === 0 && i > 0) {
                    output = ' ' + output;
                }
                --i;
            }

            if (parts.length > 1) {
                output += '.' + parts[1];
            }
            return output;
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../styles/index.scss';

.main {

    // .main__aside
    &__aside {}
}

.aside {

    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 332px;

    @media (max-width: $md2) {
        width: 252px;
    }

    @media (max-width: $md3) {
        width: 100%;
    }

    @media (min-width:$md3) {
        position: fixed;
    }

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

    // .aside__forms
    &__forms {
        margin-bottom: 6px;
    }

    // .aside__button
    &__button {}
}
</style>