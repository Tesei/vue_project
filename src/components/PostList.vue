<template>

    <section class="main__goods goods">
        <div class="goods__content">
            <div class="goods__grid">

                <!-- Ниже указан цикл, который забирает данные из массива данных и строит HTML строки -->
                <!-- v-bind он же :post - привязывает данные к компоненту, которые передадутся к нему как пропсы -->
                <post-item 
                v-for="post in posts" 
                :post="post" 
                />
            
            </div>
        </div>
    </section>
</template>

<script>
// Подключаем компоненты
import PostItem from "@/components/PostItem";

export default {
    
    // Регистрация компонентов
    components: {PostItem},

    // Вместо data(), мы используем динамические данные из родительского компонента
    // эти динамические данные подтягиваются как аргуманты у функции, данные аргументы называются пропсами (props)
    props: {
        // Указываем какие(название) данные нам нужно получить из родительского компонента данных
        posts: {
            // указываем тип данных
            type: Array,
            // указываем, что данные должны быть обязательными
            required: true
        }
    }
}

</script>

<style lang="scss" scoped>

    @import '../styles/variables';
	@import '../styles/fonts';
	@import '../styles/null';
	@import '../styles/base';
	@import '../styles/forms';

.goods {
		// .goods__content
		&__content {}

		// .goods__grid
		&__grid {
			display: grid;
			grid-template-columns: repeat(3, minmax(150px, 1fr));
			gap: 16px;

			@media (max-width: $md2){
			grid-template-columns: repeat(2, minmax(150px, 1fr));
			}
			@media (max-width: 600px){
			grid-template-columns: minmax(150px, 1fr);
			}
		}

		// .goods__item
		&__item {
        }
	}
	
</style>