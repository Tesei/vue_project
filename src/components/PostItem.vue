<template>

	<article class="goods__item card">
		<div
			class="card__bucket"
			@click="$emit('remove', post)"
		>
			<div class="card__bucket-picture">
				<img
					src="../images/icons/bucket.svg"
					alt="Удалить товар"
					class="card__bucketImage"
				>
			</div>
		</div>
		<div class="card__content">
			<div class="card__picture _ibg">
				<img
					:src="post.image"
					alt="Изображние товара"
					class="card__img"
				>
			</div>
			<div class="card__about">
				<span class="card__title">{{ post.title }}</span>
				<span class="card__text">{{ post.body }}</span>
				<span class="card__price">{{ post.price }} <span> руб.</span></span>
			</div>
		</div>
	</article>

</template>

<script>
export default {
	name: 'post-item',
	props: {
		post: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.card {
	position: relative;
	background: #FFFEFB;
	box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
	cursor: pointer;
	transition: all 0.3s ease 0s;

	@media (min-width: $md2) {
		&:hover {
			box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1), 0px 6px 10px rgba(0, 0, 0, 0.09);

			.card__bucket {
				opacity: 1;
			}
		}
	}

	// .card__bucket
	&__bucket {
		opacity: 0;
		transition: all 0.2s ease 0s;
		position: absolute;
		width: 32px;
		height: 32px;
		top: -10px;
		right: -10px;
		z-index: 3;
		cursor: pointer;

		background: #FF8484;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	// .card__bucket-picture
	&__bucket-picture {}

	// .card__bucketImage
	&__bucketImage {}

	// .card__content
	&__content {
		border-radius: 4px 4px 4px 4px;
		overflow: hidden;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	// .card__picture
	&__picture {
		padding-bottom: 60%;

		@media (max-width:$md2) {
			padding-bottom: 80%;
		}

		@media (max-width:$md3) {
			padding-bottom: 60%;
		}
	}

	// .card__img
	&__img {}

	// .card__about
	&__about {
		flex: 1 0 auto;
		word-wrap: break-word;
		color: #3F3F3F;
		padding: 16px 24px;
		max-width: 300px;
		display: flex;
		flex-direction: column;

		@media (max-width: $md2) {
			padding: 12px 18px;
		}
	}

	// .card__title
	&__title {
		display: block;
		font-style: normal;
		font-weight: 600;
		font-size: 2rem;
		line-height: 2.5rem;
		margin-bottom: 16px;
	}

	// .card__text
	&__text {
		display: block;
		font-style: normal;
		font-weight: 400;
		font-size: 1.6rem;
		line-height: 2rem;
		margin-bottom: 32px;
		flex: 1 0 auto;

		@media (max-width: $md2) {
			margin-bottom: 20px;
		}
	}

	// .card__price
	&__price {
		display: block;
		font-style: normal;
		font-weight: 600;
		font-size: 2.4rem;
		line-height: 3rem;
	}
}
</style>