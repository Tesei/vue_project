<template>

    <section class="main__goods goods">
        <div class="goods__content">
            <div class="goods__grid">

                <post-item 
                v-for="post in posts" 
                :post="post" 
				:key="post.id"
        		@remove = "$emit('remove', post)"
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

    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}

</script>

<style lang="scss" scoped>
@import '../styles/index.scss';

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