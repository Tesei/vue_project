<template>
	<div class="wrapper">

		<header class="header">
			<div class="header__content _container">
				<div class="header__row">
					<div class="header__column">
						<h2 class="header__title">Добавление товара</h2>
					</div>
					<div class="header__column">

						<!-- 14. навзвание класса селекта, преобразуется в модефикатор -->
						<!-- <form class="header__form "> -->
							<div class="form__line">
								<!-- <label for=""></label> -->
								<select name="form[]" class="form header__select">
								<!-- <select name="form[]" class="form header__select select"> -->
									<option value="1" selected="selected">По-умолчанию</option>
									<option value="2">По-умолчанию 2</option>
									<option value="3">По-умолчанию 3</option>
									<option value="4">По-умолчанию 4</option>
								</select>
							</div>
							
						<!-- </form> -->

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

					<!-- v-bind - привязывает данные к компоненту, которые передадутся к нему как пропсы -->
					<post-list 
					v-bind:posts="posts"
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

export default{

    // Регистрация компонентов
    components: {
        PostList, PostForm
    },

	// Тут храняться данные:
    data(){
        return{
           posts:[
               {id: 1, image: '../images/polaroid.jpg', title: 'Наименование товара', body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '10 000'},
               {id: 2, image: '../images/polaroid.jpg', title: 'Наименование товара 2', body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '12 000'},
               {id: 3, image: '../images/polaroid.jpg', title: 'Наименование товара 3', body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '13 000'},
               {id: 4, image: '../images/polaroid.jpg', title: 'Наименование товара 4', body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '14 000'},
           ],
        }
    },
    // Тут мы указываем методы, которые вызываем из HTML
    methods: {
        createPost(post){
            this.posts.push(post);
        },
    }
}

</script>

<style lang="scss">
	@import './styles/variables';
	@import './styles/fonts';
	@import './styles/null';
	@import './styles/base';
	@import './styles/forms';

	#app {
	}

	.header {

		// .header__content
		&__content {}

		// .header__row
		&__row {
			margin: 31px 0px 16px 0px;

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