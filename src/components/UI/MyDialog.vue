<template>
    <div class="wrap-dialog">
        <div v-show="show === true" :class="{ 'animation-left': noActivated, 'animation-right': !noActivated }">
            <slot></slot>
        </div>
    </div>

</template>


<script>

export default {
    name: 'my-dialog',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        noActivated: {
            type: Boolean,
        },
    },
}
</script>


<style scoped lang="scss">
.animation-left {
    animation: ani-left 0.4s ease-out;
}

.animation-right {
    animation: ani-right 0.4s ease-in;
}

@keyframes ani-left {
    from {
        transform: translate(-100%, 0);
        opacity: 0;
    }

    to {
        transform: translate(0, 0);
        opacity: 1;
    }
}

@keyframes ani-right {
    from {
        transform: translate(0, 0);
        opacity: 1;
    }

    to {
        transform: translate(-100%, 0);
        opacity: 0;
    }
}
</style>