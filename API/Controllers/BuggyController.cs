using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController: BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound(){
            return NotFound();
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest(){
            return BadRequest(new ProblemDetails{Title ="This is a Bad Request"});
        }

        [HttpGet("unauthorized")]
        public ActionResult GetUnAuthorized(){
            return Unauthorized();
        }

        [HttpGet("validation-error")]
        public ActionResult GetValidationError(){
            ModelState.AddModelError("Problem 1", "This is first error");
            ModelState.AddModelError("Problem 2", "This is second error");
            ModelState.AddModelError("Problem 3", "This is third error");
            return ValidationProblem();
        }

        [HttpGet("server-error")]
        public ActionResult GetServerError(){
            throw new Exception("This is server error");
        }
        
    }
}