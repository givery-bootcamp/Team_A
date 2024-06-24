// Package openapi provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/deepmap/oapi-codegen version v1.16.3 DO NOT EDIT.
package openapi

import (
	"time"
)

// CreatePostRequest defines model for CreatePostRequest.
type CreatePostRequest struct {
	Body   string `json:"body"`
	Title  string `json:"title"`
	UserId int    `json:"user_id"`
}

// CreatePostResponse defines model for CreatePostResponse.
type CreatePostResponse struct {
	Body      *string    `json:"body,omitempty"`
	CreatedAt *time.Time `json:"createdAt,omitempty"`
	Id        *int64     `json:"id,omitempty"`
	Title     *string    `json:"title,omitempty"`
	UpdatedAt *time.Time `json:"updatedAt,omitempty"`
	UserId    *int       `json:"user_id,omitempty"`
}

// GetAllPostsResponse defines model for GetAllPostsResponse.
type GetAllPostsResponse = []Post

// GetPostResponse defines model for GetPostResponse.
type GetPostResponse = Post

// Post defines model for Post.
type Post struct {
	Body      string    `json:"body"`
	CreatedAt time.Time `json:"createdAt"`
	Id        int       `json:"id"`
	Title     string    `json:"title"`
	UpdatedAt time.Time `json:"updatedAt"`
	UserName  string    `json:"userName"`
}

// UpdatePostRequest defines model for UpdatePostRequest.
type UpdatePostRequest struct {
	Body  string `json:"body"`
	Title string `json:"title"`
}

// UpdatePostResponse defines model for UpdatePostResponse.
type UpdatePostResponse struct {
	Body      string    `json:"body"`
	CreatedAt time.Time `json:"createdAt"`
	Id        int64     `json:"id"`
	Title     string    `json:"title"`
	UpdatedAt time.Time `json:"updatedAt"`
	UserId    int       `json:"user_id"`
}

// User defines model for User.
type User struct {
	CreatedAt *time.Time `json:"createdAt,omitempty"`
	Id        *int       `json:"id,omitempty"`
	Name      *string    `json:"name,omitempty"`
	Password  *string    `json:"password,omitempty"`
	UpdatedAt *time.Time `json:"updatedAt,omitempty"`
}

// PostPostJSONRequestBody defines body for PostPost for application/json ContentType.
type PostPostJSONRequestBody = CreatePostRequest

// PutPostJSONRequestBody defines body for PutPost for application/json ContentType.
type PutPostJSONRequestBody = UpdatePostRequest
