<template>
	<div class="wrapper">

		<header class="header">
			<div class="header__content _container">
				<div class="header__row">
					<div class="header__column">
						<h1 class="header__title">Добавление товара</h1>
					</div>
					<div class="header__column">
							<my-select
								v-model="selectedSort"
								:options="sortOptions"
								v-model:order ="selectedSortOrder"
							/>							
					</div>
				</div>
			</div>
		</header>
		<main class="main">
			<div class="main__content _container">
				<div class="main__row">
				
					<post-form
					@create="createPost"
					/>
					
					<post-list 
					v-bind:posts="sortedPosts"
					@remove="removePost"
					/> 

				</div>
			</div>
		</main>

	</div>
</template>

<script>
// Подключаем компоненты
import PostForm from "./components/PostForm";
import PostList from "@/components/PostList";
import MySelect from "@/components/UI/MySelect";

export default{
    // Регистрация компонентов
    components: {
        PostList, PostForm, MySelect
    },

    data(){
        return{
           posts:[
               {id: 1, image: 'https://tesei.github.io/sites/mockUp\'s/polaroid.jpg', title: 'Наименование товара', body: '3 Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '10 000'},
               {id: 2, image: 'https://tesei.github.io/sites/mockUp\'s/polaroid.jpg', title: 'Наименование товара 2', body: '2 Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '12 000'},
               {id: 3, image: 'https://tesei.github.io/sites/mockUp\'s/polaroid.jpg', title: 'Наименование товара 3', body: '1 Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '13 000'},
               {id: 4, image: 'https://tesei.github.io/sites/mockUp\'s/polaroid.jpg', title: 'Наименование товара 4', body: '4 Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '14 000'},
           ],
        	// По умолчанию select будет та переменная которую мы назначили
				selectedSort: "",
				selectedSortOrder: "",
				sortOptions: [
					{value: "title", name: "По названию"},
					{value: "body", name: "По содержанию"},
					{value: "price", name: "По цене min"},
					{value: "price2", name: "По цене max"}
				]
        }
    },
    methods: {
        createPost(post){
            this.posts.push(post);
        },
        removePost(post){
            this.posts = this.posts.filter(p=> p.id !== post.id)
        }
    },
    computed: {
        sortedPosts(){			
			if(this.selectedSortOrder === 4) return [...this.posts].sort((post1,post2)=> post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])).reverse()
            else return [...this.posts].sort((post1,post2)=> post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        }
    },
}

</script>

<style lang="scss">
	@import './styles/index.scss';

	#app {
	}

	.header {
		margin: 31px 0px 16px 0px;

		// .header__content
		&__content {}

		// .header__row
		&__row {			
			@media (min-width: 600px){
			display: flex;
			justify-content: space-between;
			align-items: center;
			}
		}

		// .header__column
		&__column {
			@media (max-width: 600px){
				&:first-child{
					margin-bottom: 16px;				
				}			
			}
		}

		// .header__title
		&__title {
			font-style: normal;
			font-weight: 600;
			font-size: 28px;
			line-height: 35px;
			color: #3F3F3F;
		}

		// .header__input
		&__input {
			position: relative;
			background: #FFFEFB;
			box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
			border-radius: 4px;
			height: 36px;
		}
	}

	.main {

		// .main__content
		&__content {}

		// main__row
		&__row {
			@media (min-width:$md3){
				display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			}			
		}

		// .main__goods
		&__goods {}
	}
	
</style>