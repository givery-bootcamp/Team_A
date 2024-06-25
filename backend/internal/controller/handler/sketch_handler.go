package handler

import (
	"errors"
	"myapp/internal/openapi"
	"myapp/internal/usecase"

	"github.com/gin-gonic/gin"
)

type SketchHandler struct {
	su usecase.SketchUsecase
}

func NewSketchHandler(su usecase.SketchUsecase) SketchHandler {
	return SketchHandler{
		su: su,
	}
}

func (h *SketchHandler) GetSketches(ctx *gin.Context) {
	ps, err := h.su.GetSketches()
	var response openapi.GetAllSketchesResponse
	for _, p := range ps {
		response = append(response, openapi.Sketch{
			Id:        p.ID,
			ImageName: p.ImageName,
			UserId:    p.UserID,
			UserName:  p.UserName,
			CreatedAt: p.CreatedAt,
			UpdatedAt: p.UpdatedAt,
		})
	}

	if err != nil {
		handleError(ctx, 500, err)
	} else if response != nil {
		ctx.JSON(200, response)
	} else {
		handleError(ctx, 404, errors.New("not found"))
	}
}