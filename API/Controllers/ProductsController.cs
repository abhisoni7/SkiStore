using API.Data;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext storeContext;
        public ProductsController(StoreContext storeContext)
        {
            this.storeContext = storeContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> getProducts(){
            var products = await storeContext.Products.ToListAsync();

            return products;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> getProduct(int id){
            var product = await storeContext.Products.FindAsync(id);

            if ( product == null ){
                return NotFound();
            }
            return product;
        }
    }
}