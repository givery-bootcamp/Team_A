// Package openapi provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/deepmap/oapi-codegen version v1.16.3 DO NOT EDIT.
package openapi

import (
	"time"
)

// GetAllPostsResponse defines model for GetAllPostsResponse.
type GetAllPostsResponse = []Post

// GetPostResponse defines model for GetPostResponse.
type GetPostResponse = Post

// Post defines model for Post.
type Post struct {
	Body      *string `json:"body,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Id        *int    `json:"id,omitempty"`
	Title     *string `json:"title,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	UserName  *string `json:"userName,omitempty"`
}

// User defines model for User.
type User struct {
	CreatedAt *time.Time `json:"createdAt,omitempty"`
	Id        *int       `json:"id,omitempty"`
	Name      *string    `json:"name,omitempty"`
	Password  *string    `json:"password,omitempty"`
	UpdatedAt *time.Time `json:"updatedAt,omitempty"`
}
