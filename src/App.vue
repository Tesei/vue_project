<template>
	<div class="wrapper">

		<header class="header">
			<div class="header__content _container">
				<div class="header__row">
					<div class="header__column">
						<h1 class="header__title">Добавление товара</h1>
					</div>

					<div class="header__column">
						<!-- Создание поисковой строки -->
						<my-input v-model="searchQuery" :placeHolder="searchPlaceholder" :req="false"
							class="header__search">
						</my-input>
					</div>

					<div class="header__column">
						<my-select v-model="selectedSort" :options="sortOptions" v-model:order="selectedSortOrder"
							class="header__select" />
					</div>
				</div>
			</div>
		</header>
		<main class="main">
			<div class="main__content _container">
				<div class="main__row">
					<div class="main__column main__column_left">
						<div class="main__column-left-contant">
							<my-button @click="openForm" class="main__btn" id>{{ buttonFormOpenMessage
							? 'Закрыть форму' : 'Открыть форму'
							}}
							</my-button>
							<my-dialog :show="dialogVisible" :showForm="animationDialog">
								<post-form @create="createPost" />
							</my-dialog>
						</div>

					</div>

					<post-list v-bind:posts="sortedAndSearchedPosts" @remove="removePost"
						class="main__column main__column_right" />
				</div>
			</div>
		</main>

	</div>
</template>

<script>
// Подключаем компоненты
import PostForm from "./components/PostForm";
import PostList from "@/components/PostList";

export default {
	name: 'App',
	// Регистрация компонентов
	components: {
		PostList, PostForm,
	},

	data() {
		return {
			posts: [
				{ id: 1, image: 'https://tesei.github.io/sites/mockUp\'s/polaroid.jpg', title: 'Наименование товара', body: '3 Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '10 000' },
				{ id: 2, image: 'https://tesei.github.io/sites/mockUp\'s/polaroid.jpg', title: 'Наименование товара 2', body: '2 Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '12 000' },
				{ id: 3, image: 'https://tesei.github.io/sites/mockUp\'s/polaroid.jpg', title: 'Наименование товара 3', body: '1 Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '13 000' },
				{ id: 4, image: 'https://tesei.github.io/sites/mockUp\'s/polaroid.jpg', title: 'Наименование товара 4', body: '4 Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '14 000' },
				{ id: 5, image: 'https://tesei.github.io/sites/mockUp\'s/polaroid.jpg', title: 'Наименование товара 4', body: '4 Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '14 000' },
				{ id: 6, image: 'https://tesei.github.io/sites/mockUp\'s/polaroid.jpg', title: 'Наименование товара 4', body: '4 Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '14 000' },
				{ id: 7, image: 'https://tesei.github.io/sites/mockUp\'s/polaroid.jpg', title: 'Наименование товара 4', body: '4 Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '14 000' },
				{ id: 8, image: 'https://tesei.github.io/sites/mockUp\'s/polaroid.jpg', title: 'Наименование товара 4', body: '4 Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '14 000' },
			],
			// По умолчанию select будет та переменная которую мы назначили
			selectedSort: "",
			selectedSortOrder: "",
			searchQuery: "",
			searchPlaceholder: "Поиск ...",
			dialogVisible: true,
			animationDialog: true,
			buttonFormOpenMessage: true,
			sortOptions: [
				{ value: "title", name: "По названию" },
				{ value: "body", name: "По содержанию" },
				{ value: "price", name: "По цене min" },
				{ value: "price2", name: "По цене max" }
			]
		}
	},
	methods: {
		createPost(post) {
			this.posts.push(post);
		},
		removePost(post) {
			this.posts = this.posts.filter(p => p.id !== post.id)
		},
		openForm() {
			if (this.dialogVisible) {
				setTimeout(() => { this.dialogVisible = false }, 400);
				this.animationDialog = this.buttonFormOpenMessage = false;
			}
			else {
				this.dialogVisible = this.animationDialog = this.buttonFormOpenMessage = true;
			}
		}
	},
	computed: {
		sortedPosts() {
			if (this.selectedSortOrder === 4) return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])).reverse()
			else return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
		},
		sortedAndSearchedPosts() {
			return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
		}
	},
}

</script>

<style lang="scss">
#app {}

.header {
	margin: 31px 0px 16px 0px;

	// .header__content
	&__content {}

	// .header__row
	&__row {
		display: flex;
		flex-wrap: wrap;
		margin-right: -10px;
		margin-left: -10px;

		@media (min-width: $md3) {
			justify-content: space-between;
			align-items: center;
			flex-direction: row;
		}
	}

	// .header__column
	&__column {
		align-self: flex-start;
		margin-bottom: 15px;
		margin-right: 10px;
		margin-left: 10px;

		@media (max-width: $md3) {
			flex: 1 1 auto;

			&:last-child {
				margin-bottom: 0;
			}
		}

		@media (max-width: 600px) {
			&:first-child {
				order: 3;
				margin-bottom: 0;
			}

			&:last-child {
				margin-bottom: 15px;
			}
		}
	}

	// .header__title
	&__title {
		display: inline-block;
		font-style: normal;
		font-weight: 600;
		font-size: 28px;
		line-height: 35px;
		color: #3F3F3F;
		flex: 1 0 auto;
	}

	// .header__select
	&__select {
		flex: 0 1 30%;
	}

	// .header__search
	&__search {
		min-width: 250px;
		margin-top: -14px !important;

		@media (max-width: $md2) {
			min-width: 200px;
			margin: 0;
			margin-top: -14px;
			width: 100%;
		}
	}
}

.main {

	// .main__content
	&__content {}

	// main__row
	&__row {
		position: relative;

		@media (min-width:$md3) {
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
		}
	}

	// .main__column_left
	&__column_left {
		position: relative;
		flex: 0 0 332px;
		margin-right: 16px;

		@media (max-width: $md2) {
			flex: 0 0 252px;
		}

		@media (max-width:$md3) {
			margin: 0px 0px 16px 0px;
		}
	}

	// main__column-left-contant
	&__column-left-contant {
		@media (min-width:$md3) {
			position: fixed;
		}
	}

	// .main__column_right
	&__column_right {
		flex: 1 1 auto;
	}

	// .main__goods
	&__goods {}

	// .main__btn
	&__btn {
		margin-bottom: 25px !important;
		width: 332px;

		@media (max-width: $md2) {
			width: 252px;
		}

		@media (max-width: $md3) {
			width: 100%;
		}

		button.btn {
			color: #FFFFFF;
			background: #7BAE73;
		}
	}
}
</style>