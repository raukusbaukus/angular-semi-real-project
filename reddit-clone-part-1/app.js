(function() {
  'use strict'

  angular.module('app', [])
    .component('newPost', {

      controller: function() {
        const vm = this

        vm.$onInit = function $onInit() {
          vm.showNew = false
        }

        vm.toggleNew = function toggleNew() {
          vm.showNew = !vm.showNew
        }

        vm.addPost = function addPost() {
          console.log('adding post', vm.post)
        }
      },

      template: `
      <button ng-click="$ctrl.toggleNew()">New Post</button>
      <form novalidate name="$ctrl.new_post_form" ng-if="$ctrl.showNew == true" ng-submit="$ctrl.addPost()">
          <p><label for="title">Title</label></p><p><input id="title" name="title" type="text" ng-model="$ctrl.post.title" required ng-minlength=5 ng-maxlength=50 /></p>
          <div class="error-container" ng-show="$ctrl.new_post_form.title.$dirty && $ctrl.new_post_form.title.$invalid">
            <small class="error" ng-show="$ctrl.new_post_form.title.$error.required">Please input a Title.</small>
            <small class="error" ng-show="$ctrl.new_post_form.title.$error.minlength">Title is required to be at least 5 characters.</small>
            <small class="error" ng-show="$ctrl.new_post_form.title.$error.maxlength">Title cannot be longer than 50 characters.</small>
          </div>
          <p><label for="author">Author</label></p><p><input id="author" name="author" type="text" ng-model="$ctrl.post.author" required ng-minlength=3 ng-maxlength=20 /></p>
          <div class="error-container" ng-show="$ctrl.new_post_form.author.$dirty && $ctrl.new_post_form.author.$invalid">
            <small class="error" ng-show="$ctrl.new_post_form.author.$error.required">Please input an Author name.</small>
            <small class="error" ng-show="$ctrl.new_post_form.author.$error.minlength">Author name is required to be at least 3 characters.</small>
            <small class="error" ng-show="$ctrl.new_post_form.author.$error.maxlength">Author name cannot be longer than 20 characters.</small>
          </div>
          <p><label for="description">Body</label></p><p><textarea id="description" name="description" type="text" ng-model="$ctrl.post.description" required ng-minlength=10 ng-maxlength=500 ></textarea></p>
          <div class="error-container" ng-show="$ctrl.new_post_form.description.$dirty && $ctrl.new_post_form.description.$invalid">
            <small class="error" ng-show="$ctrl.new_post_form.description.$error.required">Please input a Title.</small>
            <small class="error" ng-show="$ctrl.new_post_form.description.$error.minlength">Title is required to be at least 10 characters.</small>
            <small class="error" ng-show="$ctrl.new_post_form.description.$error.maxlength">Title cannot be longer than 500 characters.</small>
          </div>
          <p><label for="image">Image URL</label></p><p><input id="image" name="image" type="url" ng-model="$ctrl.post.image" required /></p>
          <div class="error-container" ng-show="$ctrl.new_post_form.image.$dirty && $ctrl.new_post_form.image.$invalid">
            <small class="error" ng-show="$ctrl.new_post_form.description.$error.url">Please input a valid image URL.</small>
          </div>
          <p><button type="submit" ng-disabled="$ctrl.new_post_form.$invalid" >Add Post</button></p>
      </form>`
    })

    .component('postList', {
      controller: function() {
        const vm = this

        vm.$onInit = function $onInit() {
          vm.posts = [{
            title: 'Post Title',
            author: 'Post Author',
            description: 'This is a description of the post.',
            image: 'https://www.bigstockphoto.com/images/homepage/2016_bigstock_picks.jpg'
          }]
        }

        vm.displayPosts = function displayPosts(e, post) {
          e.preventDefault()
          console.log('displayPosts', post)
        }
      },

      template: `
      <div ng-repeat="post in $ctrl.posts">
        <p>{{post.title}}</p>
        <p>{{post.author}}</p>
        <p>{{post.description}}</p>
        <p><img src="{{post.image}}"></img></p>
      </div>`
    })

})();
