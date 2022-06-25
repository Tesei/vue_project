<template>
    <div class="wrap-dialog">

        <transition name="slide-fade">
            <div v-show="showForm">
                <slot></slot>
            </div>
        </transition>

    </div>

</template>


<script>

export default {
    name: 'my-dialog',
    props: {
        showForm: {
            type: Boolean,
        },
    },
}
</script>


<style scoped lang="scss">
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}
</style>