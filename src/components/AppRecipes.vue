<template>

  <div class="jumbotron vertical-center">
      <div class = "container">
        <div class="title">
        <h1 style="background-color:#d2bb85;">Easy recipes with Pablo</h1>
        </div>
          <div class = "row">
              <div class = "col-sm-12">
                  <h1>Recipes</h1>
                  <hr />
                  <!-- Allert Message -->
        <b-alert v-if="showMessage" variant="success" show>{{
          message
        }}</b-alert>
        
        <!-- b-alert v-if="error" variant="danger" show>{{ error }}</b-alert-->

        <button
          type="button"
          class="btn btn-success btn-sm"
          v-b-modal.recipe-modal
        >
          Add Recipe
        </button>
                  <br /> <br />
                  <table class = "table table-hover">
                      <thead>
                          <tr>
                              <th scope = "col"> Name </th>
                              <th scope = "col"> Ingredients </th>
                              <th scope = "col"> Steps </th>
                              <th scope = "col" > Rate </th>
                              <th scope = "col"> Fav </th>
                            <th scope = "col"> Actions </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for= "recipe in recipes" :key = "recipe.id">
                              <td> {{ recipe.name }} </td>
                              <td> {{ recipe.ingredients }} </td>
                              <td> {{ recipe.instructions }} </td>
                              
                                <td> 
                                    <div>
                                        <p class="mt-2">{{recipe.rating}} ⭐ </p>
                                    </div> 
                                 </td>
                                 <td>
                                    <p v-if="recipe.favorite == true">❤️</p>
                                    <p v-else>🤍</p>
                                    
                                 
                                </td>
                              
                               <td> 
                                  <div class="btn-group" role="group">
                                      <button
                                      type="button"
                                      class="btn btn-info btn-sm"
                                      v-b-modal.edit-recipe-modal
                                      @click="editRecipe(recipe)"
                                      >
                                      Edit
                                      </button>
                                      <button
                                      type="button"
                                      class="btn btn-danger btn-sm"
                                      @click="deleteRecipe(recipe)"
                                      >
                                      Delete
                                      </button>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                 
              
              </div>
          </div>
          <!-- Beginning of Modal for Create Recipe-->
              <div>   
            <b-modal 
              ref = "addRecipeModal"
              id="recipe-modal"
              title="Add Recipe"
              hide-backdrop
              hide-footer
              >
              <b-form @submit="onSubmit" class="w-100">
              <b-form-group
                  id="form-name-group"
              label="Recipe Name:"
              label-for="form-name-input"
              description="Enter the name of the recipe."
              >
              <b-form-input
              id="form-name-input"
              type="text"
              v-model="createRecipeForm.name"
              placeholder="Recipe Name"
              required
              >
              </b-form-input>
              </b-form-group>
              <b-form-group
              id="form-ingredients-group"
              label="Recipe Ingredients:"
              label-for="form-ingredients-input"
              description="Enter the ingredients of the recipe."
              >
              <b-form-input
              id="form-ingredients-input"
              type="text"
              v-model="createRecipeForm.ingredients"
              placeholder="Recipe Ingredients"
              required
              ></b-form-input>
              </b-form-group>

              <b-form-group
              id="form-instructions-group"
              label="Recipe Instructions:"
              label-for="form-instructions-input"
              description="Enter the instructions of the recipe."
              >
              <b-form-input
              id="form-instructions-input"
              type="text"
              v-model="createRecipeForm.instructions"
              placeholder="Recipe Instructions"
              required
              ></b-form-input>
              </b-form-group>
              <b-form-group
              id="form-favorite-group"    
              label="Recipe Favorite:"
              label-for="form-favorite-input"
              description="Let us know if you want to favorite this recipe"
              >
              <b-form-checkbox
              id="form-favorite-input"
              v-model="createRecipeForm.favorite"
              switch button button-variant="outline-light"
              ><p v-if="createRecipeForm.favorite == true" >❤️</p><p v-else>🤍</p></b-form-checkbox>
              </b-form-group>
              <b-form-group
              id="form-rating-group"
              label="Recipe Rating:"
              label-for="form-rating-input"
              description="Rate this recipe from 1-5"
              >
              <b-form-rating
              id="form-rating-input"
              type="integer"
              v-model="createRecipeForm.rating"
              
              
              ></b-form-rating>
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
              </b-form>
          </b-modal>

          <!-- End of Modal for Create Recipe-->

          <!-- Beginning of Modal for Edit Recipe-->
     
                
          <b-modal
            ref = "editRecipeModal"
            id="edit-recipe-modal"
            title="Edit Recipe"
            hide-backdrop
            hide-footer
          >
          <b-form @submit="onSubmitUpdate" class="w-100">
          <b-form-group
          id="form-edit-name-group"
          label="Recipe Name:"
          label-for="form-edit-name-input"
          description="Enter the name of the recipe."
          >
          <b-form-input
          id="form-edit-name-input"
          type="text"
          v-model="updateRecipeForm.name"
            >
          </b-form-input>
          </b-form-group>
          <b-form-group
          id="form-edit-ingredients-group"
          label="Recipe Ingredients:"
          label-for="form-edit-ingredients-input"
          description="Enter the ingredients of the recipe."
          >
          <b-form-input
          id="form-edit-ingredients-input"
          type="text"
          v-model="updateRecipeForm.ingredients"
          
          >
          </b-form-input>
          </b-form-group>
          <b-form-group
          id="form-edit-instructions-group"
          label="Recipe Instructions:"
          label-for="form-edit-instructions-input"
          description="Enter the instructions of the recipe."
          >
          <b-form-input

          id="form-edit-instructions-input"
          type="text"
          v-model="updateRecipeForm.instructions"
          
          >
          </b-form-input>
          </b-form-group>

          <b-form-group

          id="form-edit-favorite-group"
          label="Recipe Favorite:"
          label-for="form-edit-favorite-input"
          description="Let us know if you want to favorite this recipe"
          >
          <b-form-checkbox
              id="form-favorite-input"
              v-model="updateRecipeForm.favorite"
              switch button button-variant="outline-light"
              ><p v-if="updateRecipeForm.favorite == true" >❤️</p><p v-else>🤍</p></b-form-checkbox>
          </b-form-group>
          <b-form-group
          id="form-edit-rating-group"
          label="Recipe Rating:"
          label-for="form-edit-rating-input"
          description="Rate this recipe from 1-5"
          >
          <b-form-rating
          id="form-edit-rating-input"
          type="integer"
          v-model="updateRecipeForm.rating"
          
          
          
          ></b-form-rating>
          </b-form-group>
          <b-button type="submit" variant="outline-info">Update</b-button>
          </b-form>
          </b-modal>
          <!-- End of Modal for Edit Recipe-->


      </div>
  
    <button class="btn btn-primary" @click=gotohome()>Back To Home</button>
  
  </div>
</div>
 
  

</template>

<script>


import axios from 'axios';
export default {
  name: 'AppRecipes',
  data(){
      return {
          recipes: [],
          createRecipeForm: {
                id: '',
                name: '',
                ingredients: '',
                instructions: '',
                favorite: false,
                rating: 0,
          },

          updateRecipeForm: {
                id: '',
                name: '',
                ingredients: '',
                instructions: '',
                favorite: false,
                rating: 0,
          },

          showMessage: false,
          message: '',

      };
  },
  methods: {

    gotohome(){
            this.$router.push('/')
        },

    /***************************************************
     * RESTful requests
     ***************************************************/
    
      //GET Recipes

      RESTgetRecipes() {
      const path = `${process.env.VUE_APP_ROOT_URL}/recipes`;
      axios
          .get(path)
          .then((response) => {
              this.recipes = response.data.recipes;
          })
          .catch((error) => {
              console.log(error);
          });
      },

      //POST Recipes
      RESTcreateRecipe(payload){
          const path = `${process.env.VUE_APP_ROOT_URL}/recipes`;
          axios
              .post(path,payload)
              .then((response) => {
                  this.RESTgetRecipes();
                  this.message = "Recipe created succesfully!";
                  // To actually show the message
                  this.showMessage = true;
                  // To hide the message after 3 seconds
                  setTimeout(() => {
                    this.showMessage = false;
                  }, 3000);
              })
              .catch((error) => {
                  console.log(error);
                  this.RESTgetRecipes()
              });
      },

      RESTupdateRecipe(payload, recipeId){
          const path = `${process.env.VUE_APP_ROOT_URL}/recipes/${recipeId}`;
          axios
              .put(path,payload)
              .then((response) => {
                  this.RESTgetRecipes();
                    this.message = "Recipe updated Successfully!"
                    this.showMessage = true;
                    setTimeout(() => {
                        this.showMessage = false;
                    }, 3000);
                    
              })
              .catch((error) => {
                  console.log(error);
                  this.RESTgetRecipes()
              });
      },


      RESTdeleteRecipe(id){
          const path = `${process.env.VUE_APP_ROOT_URL}/recipes/${id}`;
          axios
              .delete(path)
              .then((response) => {
                  this.RESTgetRecipes();
                  this.message = "Recipe deleted successfully!"
                  this.showMessage = true;
                  set.TimeOut(() => {
                      this.showMessage = false;
                  }, 3000);

              })
              .catch((error) => {
                  console.log(error);
                  this.RESTgetRecipes()
              });
      },

      initForm(){
          this.createRecipeForm = {
              name: '',
              ingredients: '',
              instructions: '',
              favorite: false,
              rating: 0
          };
          this.updateRecipeForm = {
              name: '',
              ingredients: '',
              instructions: '',
              favorite: false,
              rating: 0
          };

      },
      onSubmit(evt) {
          evt.preventDefault(); 
          this.$refs.addRecipeModal.hide(); 
          const payload = {
              name: this.createRecipeForm.name,
              ingredients: this.createRecipeForm.ingredients,
              instructions: this.createRecipeForm.instructions,
              favorite: this.createRecipeForm.favorite,
              rating: this.createRecipeForm.rating
          };
          this.RESTcreateRecipe(payload);
          this.initForm();
      },
      onSubmitUpdate(evt) {
          evt.preventDefault(); 
          this.$refs.editRecipeModal.hide(); 
          const payload = {
              name: this.updateRecipeForm.name,
              ingredients: this.updateRecipeForm.ingredients,
              instructions: this.updateRecipeForm.instructions,
              favorite: this.updateRecipeForm.favorite,
              rating: this.updateRecipeForm.rating
          };
          this.RESTupdateRecipe(payload, this.updateRecipeForm.id);
          this.initForm();
      },

      deleteRecipe(recipe) {
          this.RESTdeleteRecipe(recipe.id);
      },

      editRecipe(recipe) {
          this.updateRecipeForm = recipe;
      },

      

  },

   /***************************************************
 * LIFECYClE HOOKS
 ***************************************************/

  created() {
      this.RESTgetRecipes();
  },
};

</script>


<style> div.title{

  position: absolute;
    width: 100%;
    
  top: 5%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

h1{
    text-align: center;
    font-size: 50px;
    font-family: 'Lobster', cursive;
    color: rgb(6, 5, 3);
    text-shadow: 1px 2px 1px #d2bb85;
}</style>