package docs

import (
	"net/http"

	"github.com/gin-gonic/gin"
	scalar "github.com/MarceloPetrucio/go-scalar-api-reference"
)

// RegisterRoutes mounts the API documentation endpoints.
//   - GET /docs          → Scalar interactive API reference
//   - GET /docs/openapi.json → OpenAPI 3.0 JSON spec
func RegisterRoutes(r *gin.Engine) {
	r.GET("/docs/openapi.json", func(c *gin.Context) {
		c.Data(http.StatusOK, "application/json", []byte(OpenAPISpec()))
	})

	r.GET("/docs", func(c *gin.Context) {
		htmlContent, err := scalar.ApiReferenceHTML(&scalar.Options{
			SpecURL: "/docs/openapi.json",
			CustomOptions: scalar.CustomOptions{
				PageTitle: "ecomerce — API Reference",
			},
			DarkMode: true,
		})
		if err != nil {
			c.String(http.StatusInternalServerError, "%s", "Error generating docs: "+err.Error())
			return
		}
		c.Data(http.StatusOK, "text/html; charset=utf-8", []byte(htmlContent))
	})
}
