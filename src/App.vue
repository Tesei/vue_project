<template>
	<div class="wrapper">

		<header class="header">
			<div class="header__content _container">
				<div class="header__row">
					<div class="header__column">
						<h1 class="header__title">Добавление товара</h1>
					</div>

<<<<<<< HEAD
							<div @click="sortNameCards" class="form__line">
								<select name="form[]" class="form header__select">
									<option value="1" selected="selected">По-умолчанию</option>
									<option value="2">По цене min</option>
									<option value="3">По цене max</option>
									<option value="4">По наименованию</option>
								</select>
							</div>
							
=======
					<div class="header__column">
						<!-- Создание поисковой строки -->
						<my-input v-model="searchQuery" placeholder="Поиск ..." class="header__search" />
					</div>

					<div class="header__column">
						<my-select v-model="selectedSort" :options="sortOptions" v-model:order="selectedSortOrder" />
>>>>>>> newFeatches
					</div>
				</div>
			</div>
		</header>
		<main class="main">
			<div class="main__content _container">
				<div class="main__row">
					<div class="main__column main__column_left">
						<post-form @create="createPost" />
					</div>

					<div class="main__column main__column_right">
						<post-list v-bind:posts="sortedAndSearchedPosts" @remove="removePost" />
					</div>

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
	// Регистрация компонентов
	components: {
		PostList, PostForm,
	},

<<<<<<< HEAD
    // Регистрация компонентов
    components: {
        PostList, PostForm
    },

    data(){
        return{
           posts:[
               {id: 1, image: 'https://tesei.github.io/sites/mockUp\'s/polaroid.jpg', title: 'Наименование товара', body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '10 000'},
               {id: 2, image: 'https://tesei.github.io/sites/mockUp\'s/polaroid.jpg', title: 'Наименование товара 4', body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '12 000'},
               {id: 3, image: 'https://tesei.github.io/sites/mockUp\'s/polaroid.jpg', title: 'Наименование товара 3', body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '13 000'},
               {id: 4, image: 'https://tesei.github.io/sites/mockUp\'s/polaroid.jpg', title: 'Наименование товара 2', body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '14 000'},
           ],
        }
    },
    methods: {
        createPost(post){
            this.posts.push(post);
        },
        removePost(post){
            this.posts = this.posts.filter(p=> p.id !== post.id)
        },
		sortNameCards(){
			// console.log("hi lady");
			// let selOptions = document.querySelector('.header__column .select__options')
			// let var = document.querySelector('.header__column .select__options');
			// selOptions.addEventListener("click", function(event) {
			// 	if(event.target.closest)
			// });
			
			// let newPostArr = []
			// let someArr = []

			// posts.forEach(element => {
			// 	someArr.push(element.title)
			// });

			// someArr.forEach(element => {
			// 	posts.forEach(item => {
			// 		if(item.title === element){
			// 			newPostArr.push(item);
			// 		}		
			// 	});	
			// });
			// posts = newPostArr
		}

    }
=======
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
>>>>>>> newFeatches
}

</script>

<style lang="scss">
@import './styles/index.scss';

#app {}

.header {
	margin: 31px 0px 16px 0px;

	// .header__content
	&__content {}

	// .header__row
	&__row {
		display: flex;
		flex-direction: column;

		@media (min-width: $md3) {
			justify-content: space-between;
			align-items: center;
			flex-direction: row;
		}
	}

	// .header__column
	&__column {
		@media (max-width: $md3) {
			&:first-child {
				order: 3;
				margin-bottom: 0;
			}

			margin-bottom: 15px;
		}
	}

	// .header__title
	&__title {
		font-style: normal;
		font-weight: 600;
		font-size: 28px;
		line-height: 35px;
		color: #3F3F3F;
		flex: 1 0 auto;

		@media (max-width: $md3+px) {}
	}

	// .header__input
	&__input {
		position: relative;
		background: #FFFEFB;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		height: 36px;
	}

	// .header__search
	&__search {
		min-width: 250px;
		margin: 10px 20px 10px 0px;

		@media (max-width: $md2) {
			min-width: 200px;
			margin: 0;
			width: 100%;
		}
	}
}

.main {

	// .main__content
	&__content {}

	// main__row
	&__row {
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

	// .main__goods
	&__goods {}
}
</style>