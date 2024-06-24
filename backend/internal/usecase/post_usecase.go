package usecase

import (
	"myapp/internal/entity"
	"myapp/internal/usecase/repository"
)

type PostUsecase struct {
	postRepository repository.PostRepository
}

func NewPostUsecase(pr repository.PostRepository) PostUsecase {
	return PostUsecase{
		postRepository: pr,
	}
}

func (u *PostUsecase) GetPosts() ([]entity.Post, error) {
	return u.postRepository.GetAll()
}

func (u *PostUsecase) GetPost(id int) (*entity.Post, error) {
	return u.postRepository.Get(id)
}

func (u *PostUsecase) CreatePost(post entity.Post) (entity.Post, error) {
	return u.postRepository.CreatePost(&post)
}

func (u *PostUsecase) UpdatePost(id int, title string, body string) (*entity.Post, error) {
	return u.postRepository.UpdatePost(id, title, body)
}

func (u *PostUsecase) DeletePost(id int) error {
	return u.postRepository.DeletePost(id)
}
