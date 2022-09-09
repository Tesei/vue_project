<template>
    <aside class="main__aside aside">
        <div class="aside__content">
            <form class="aside__form form" @submit.prevent>

                <div class="aside__forms">
                    <my-input v-model.trim="post.title" :nameId="1" :req="true" :placeHolder="placeholders[0]"
                        :data-error="dataError" class="aside__forms-item">
                        Наименование товара
                    </my-input>

                    <my-textarea v-model.trim="post.body" :nameId="2" :req="false" :placeHolder="placeholders[1]"
                        :data-error="dataError" class="aside__forms-item">
                        Описание товара
                    </my-textarea>

                    <my-input v-model.trim="post.image" :nameId="3" :req="true" :placeHolder="placeholders[2]"
                        :data-error="dataError" class="aside__forms-item">
                        Ссылка на изображение товара
                    </my-input>
                    <my-input v-model.trim="somePrice" :nameId="4" :req="true" :placeHolder="placeholders[3]"
                        :data-error="dataError" :oninpShow="true" class="aside__forms-item">
                        Цена товара
                    </my-input>

                </div>

                <my-button @click="createPost" :hasAllData="checkAllData" class="aside__button">Добавить товар
                </my-button>
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
            },
            // todo Посмотреть переделку
            somePrice: '',
            placeholders: [
                'Введите наименование товара',
                'Введите описание товара',
                'Введите ссылку',
                'Введите цену'
            ],
            dataError: "Поле является обязательным"
        }
    },
    watch: {
        somePrice(newPrice) {
            this.post.price = newPrice.replace(/[^\d.,]/g, '').split('').reverse().join('').replace(/(.{3})/g, '$1 ').replace(/[,]/g, '.').split('').reverse().join('');
        }
    },
    computed: {
        checkAllData() {
            if (this.post.title && this.post.image && this.post.price) return true;
            else return false
        }
    },
    methods: {
        createPost() {
            let btnSend = document.querySelector('.aside__form .btn');
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
                    },
                        // todo Посмотреть переделку
                        this.somePrice = '';
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
    }
}
</script>

<style lang="scss" scoped>
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

    // .aside__forms-item
    &__forms-item {
        margin-bottom: 18px;
    }

    // .aside__button
    &__button {}
}
</style>