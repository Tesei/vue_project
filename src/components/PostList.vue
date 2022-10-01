<template>

    <section class="main__goods goods">
        <div class="goods__content">
            <div
                v-if="posts.length > 0"
                class="goods__grid"
            >

                <transition-group name="post-list">
                    <post-item
                        v-for="post in posts"
                        :post="post"
                        :key="post.id"
                        @remove="$emit('remove', post)"
                    />
                </transition-group>

            </div>
            <span
                v-else
                class="goods__text"
            >Список товаров пуст</span>
        </div>
    </section>
</template>

<script>
// Подключаем компоненты
import PostItem from "@/components/PostItem";

export default {
    // Регистрация компонентов
    components: { PostItem },
    name: 'post-list',

    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}

</script>

<style lang="scss" scoped>
.goods {

    // .goods__content
    &__content {}

    // .goods__grid
    &__grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(150px, 1fr));
        gap: 16px;

        @media (max-width: $md2) {
            grid-template-columns: repeat(2, minmax(150px, 1fr));
        }

        @media (max-width: 600px) {
            grid-template-columns: minmax(150px, 1fr);
        }
    }

    // .goods__item
    &__item {}

    // .goods__text
    &__text {
        font-size: 2.4rem;
        font-weight: 600;
    }
}

.post-list-item {
    display: inline-block;
    margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
    transition: all .5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}

/* анимация стилей для сортировки по селект */
.post-list-move {
    transition: transform 0.4s ease;
}
</style>