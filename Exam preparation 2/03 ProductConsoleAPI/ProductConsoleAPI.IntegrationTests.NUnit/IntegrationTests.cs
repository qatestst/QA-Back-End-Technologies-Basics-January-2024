using Microsoft.EntityFrameworkCore;
using ProductConsoleAPI.Business;
using ProductConsoleAPI.Business.Contracts;
using ProductConsoleAPI.Data.Models;
using ProductConsoleAPI.DataAccess;
using System.ComponentModel.DataAnnotations;

namespace ProductConsoleAPI.IntegrationTests.NUnit
{
    public  class IntegrationTests
    {
        private TestProductsDbContext dbContext;
        private IProductsManager productsManager;

        [SetUp]
        public void SetUp()
        {
            this.dbContext = new TestProductsDbContext();
            this.productsManager = new ProductsManager(new ProductsRepository(this.dbContext));
        }


        [TearDown]
        public void TearDown()
        {
            this.dbContext.Database.EnsureDeleted();
            this.dbContext.Dispose();
        }


        //positive test
        [Test]
        public async Task AddProductAsync_ShouldAddNewProduct()
        {
            var newProduct = new Product()
            {
                OriginCountry = "Bulgaria",
                ProductName = "TestProduct",
                ProductCode = "AB12C",
                Price = 1.25m,
                Quantity = 100,
                Description = "Anything for description"
            };

            await productsManager.AddAsync(newProduct);

            var dbProduct = await this.dbContext.Products.FirstOrDefaultAsync(p => p.ProductCode == newProduct.ProductCode);

            Assert.NotNull(dbProduct);
            Assert.AreEqual(newProduct.ProductName, dbProduct.ProductName);
            Assert.AreEqual(newProduct.Description, dbProduct.Description);
            Assert.AreEqual(newProduct.Price, dbProduct.Price);
            Assert.AreEqual(newProduct.Quantity, dbProduct.Quantity);
            Assert.AreEqual(newProduct.OriginCountry, dbProduct.OriginCountry);
            Assert.AreEqual(newProduct.ProductCode, dbProduct.ProductCode);
        }

        //Negative test
        [Test]
        public async Task AddProductAsync_TryToAddProductWithInvalidCredentials_ShouldThrowException()
        {
            var newProduct = new Product()
            {
                OriginCountry = "Bulgaria",
                ProductName = "TestProduct",
                ProductCode = "AB12C",
                Price = -1m,
                Quantity = 100,
                Description = "Anything for description"
            };

            var ex = Assert.ThrowsAsync<ValidationException>(async () => await productsManager.AddAsync(newProduct));
            var actual = await dbContext.Products.FirstOrDefaultAsync(c => c.ProductCode == newProduct.ProductCode);

            Assert.IsNull(actual);
            Assert.That(ex?.Message, Is.EqualTo("Invalid product!"));

        }

        [Test]
        public async Task DeleteProductAsync_WithValidProductCode_ShouldRemoveProductFromDb()
        {
            // Arrange
            var newProduct = new Product()
            {
                OriginCountry = "Bulgaria",
                ProductName = "TestProduct",
                ProductCode = "AB12C",
                Price = 1.25m,
                Quantity = 100,
                Description = "Anything for description"
            };

            await productsManager.AddAsync(newProduct);
            await productsManager.DeleteAsync(newProduct.ProductCode);
            
            //Act & Assert
            var dbProduct = await this.dbContext.Products.FirstOrDefaultAsync(p => p.ProductCode == newProduct.ProductCode);
            Assert.IsNull(dbProduct);
           
            
        }

        [Test]
        public async Task DeleteProductAsync_TryToDeleteWithNullOrWhiteSpaceProductCode_ShouldThrowException()
        {
            // Act & Assert
            var ex = Assert.ThrowsAsync<ArgumentException>(() => productsManager.DeleteAsync(""));
            Assert.That(ex.Message, Is.EqualTo("Product code cannot be empty."));

            var ex1 = Assert.ThrowsAsync<ArgumentException>(() => productsManager.DeleteAsync(" "));
            Assert.That(ex1.Message, Is.EqualTo("Product code cannot be empty."));

        }

        [Test]
        public async Task GetAllAsync_WhenProductsExist_ShouldReturnAllProducts()
        {
                      
           var firstProduct = new Product()
           {
               OriginCountry = "Bulgaria",
               ProductName = "TestProduct",
               ProductCode = "AB12C",
               Price = 1.25m,
               Quantity = 100,
               Description = "Anything for description"
           };

           var secondProduct = new Product()
            {
                OriginCountry = "Germany",
                ProductName = "Second Product",
                ProductCode = "GE123456",
                Price = 1000,
                Quantity = 100,
                Description = "Second product description"
            };

            await productsManager.AddAsync(firstProduct);
            await productsManager.AddAsync(secondProduct);

            // Act
            var allproducts = await productsManager.GetAllAsync();

            // Assert

            Assert.That(allproducts.Count, Is.EqualTo(2));

            var firstProductFromResults = allproducts.FirstOrDefault(x => x.ProductCode == firstProduct.ProductCode);

            Assert.That(firstProductFromResults.ProductCode, Is.EqualTo(firstProduct.ProductCode));
            Assert.That(firstProductFromResults.Id, Is.EqualTo(firstProduct.Id));
            Assert.That(firstProductFromResults.ProductName, Is.EqualTo(firstProduct.ProductName));
            Assert.That(firstProductFromResults.Quantity, Is.EqualTo(firstProduct.Quantity));
            Assert.That(firstProductFromResults.OriginCountry, Is.EqualTo(firstProduct.OriginCountry));
            Assert.That(firstProductFromResults.Price, Is.EqualTo(firstProduct.Price));
            

        }

        [Test]
        public async Task GetAllAsync_WhenNoProductsExist_ShouldThrowKeyNotFoundException()
        {
            // Arrange

            // Act & Assert
            var ex = Assert.ThrowsAsync<KeyNotFoundException>( () => productsManager.GetAllAsync());
            Assert.That(ex.Message, Is.EqualTo("No product found."));
        }

        [Test]
        public async Task SearchByOriginCountry_WithExistingOriginCountry_ShouldReturnMatchingProducts()
        {
            // Arrange
            var firstProduct = new Product()
            {
                OriginCountry = "Bulgaria",
                ProductName = "TestProduct",
                ProductCode = "AB12C",
                Price = 1.25m,
                Quantity = 100,
                Description = "Anything for description"
            };

            var secondProduct = new Product()
            {
                OriginCountry = "Germany",
                ProductName = "Second Product",
                ProductCode = "GE123456",
                Price = 1000,
                Quantity = 100,
                Description = "Second product description"
            };

            await productsManager.AddAsync(firstProduct);
            await productsManager.AddAsync(secondProduct);
            // Act

            var result = await productsManager.SearchByOriginCountry(firstProduct.OriginCountry);

            var productFromResult = result.FirstOrDefault();

            // Assert
            Assert.That(result, Is.Not.Null);
            Assert.That(productFromResult.ProductName, Is.EqualTo(firstProduct.ProductName));
            Assert.That(productFromResult.Quantity, Is.EqualTo(firstProduct.Quantity));
            Assert.That(productFromResult.ProductCode, Is.EqualTo(firstProduct.ProductCode));
            Assert.That(productFromResult.Description, Is.EqualTo(firstProduct.Description));
            Assert.That(productFromResult.OriginCountry, Is.EqualTo(firstProduct.OriginCountry));
            Assert.That(productFromResult.Price, Is.EqualTo(firstProduct.Price));

        }

        [Test]
        public async Task SearchByOriginCountryAsync_WithNonExistingOriginCountry_ShouldThrowKeyNotFoundException()
        {


            // Act & Assert
            var ex = Assert.ThrowsAsync<KeyNotFoundException>( ()=> productsManager.SearchByOriginCountry("non existing country") );
            Assert.That(ex.Message, Is.EqualTo("No product found with the given first name."));

            var ex1 = Assert.ThrowsAsync<ArgumentException>(() => productsManager.SearchByOriginCountry(""));
            Assert.That(ex1.Message, Is.EqualTo("Country name cannot be empty."));
        }

        [Test]
        public async Task GetSpecificAsync_WithValidProductCode_ShouldReturnProduct()
        {
            // Arrange
            var firstProduct = new Product()
            {
                OriginCountry = "Bulgaria",
                ProductName = "TestProduct",
                ProductCode = "AB12C",
                Price = 1.25m,
                Quantity = 100,
                Description = "Anything for description"
            };

            var secondProduct = new Product()
            {
                OriginCountry = "Germany",
                ProductName = "Second Product",
                ProductCode = "GE123456",
                Price = 1000,
                Quantity = 100,
                Description = "Second product description"
            };

            await productsManager.AddAsync(firstProduct);
            await productsManager.AddAsync(secondProduct);

            // Act

            var result = await productsManager.GetSpecificAsync(firstProduct.ProductCode);

            // Assert
            Assert.NotNull(result);
            Assert.AreEqual(result.ProductName, firstProduct.ProductName);
            Assert.AreEqual(result.Description, firstProduct.Description);
            Assert.AreEqual(result.Price, firstProduct.Price);
            Assert.AreEqual(result.Quantity, firstProduct.Quantity);
            Assert.AreEqual(result.OriginCountry, firstProduct.OriginCountry);
            Assert.AreEqual(result.ProductCode, firstProduct.ProductCode);


        }

        [Test]
        public async Task GetSpecificAsync_WithInvalidProductCode_ShouldThrowKeyNotFoundException()
        {

            // Act &  Assert
            var invalidCode = "GE123456";
            var ex = Assert.ThrowsAsync<KeyNotFoundException>(()=> productsManager.GetSpecificAsync(invalidCode) );
            Assert.That(ex.Message, Is.EqualTo($"No product found with product code: {invalidCode}"));

            
        }

        [Test]
        public async Task UpdateAsync_WithValidProduct_ShouldUpdateProduct()
        {
            // Arrange
            
            var firstProduct = new Product()
            {
                OriginCountry = "Bulgaria",
                ProductName = "TestProduct",
                ProductCode = "AB12C",
                Price = 1.25m,
                Quantity = 100,
                Description = "Anything for description"
            };

            var secondProduct = new Product()
            {
                OriginCountry = "Germany",
                ProductName = "Second Product",
                ProductCode = "GE123456",
                Price = 1000,
                Quantity = 100,
                Description = "Second product description"
            };

            await productsManager.AddAsync(firstProduct);

            // Act
            firstProduct.OriginCountry = secondProduct.OriginCountry;
            firstProduct.ProductName = secondProduct.ProductName;

            await productsManager.UpdateAsync(firstProduct);

            //var result = await productsManager.GetSpecificAsync(firstProduct.ProductCode);
            
            var result = await dbContext.Products.FirstOrDefaultAsync(p => p.ProductCode == firstProduct.ProductCode);
            
            // Assert
            Assert.NotNull(result);
            Assert.AreEqual(result.ProductName, "Second Product");
            Assert.AreEqual(result.Description, firstProduct.Description);
            Assert.AreEqual(result.Price, firstProduct.Price);
            Assert.AreEqual(result.Quantity, firstProduct.Quantity);
            Assert.AreEqual(result.OriginCountry, "Germany");
            Assert.AreEqual(result.ProductCode, firstProduct.ProductCode);

        }

        [Test]
        public async Task UpdateAsync_WithInvalidProduct_ShouldThrowValidationException()
        {
            // Arrange
            
            
            var invalidProduct = new Product()
            {
                OriginCountry = "Bulgaria",
                ProductName = "TestProduct",
                ProductCode = "AB12C",
                Price = -1m,
                Quantity = 100,
                Description = "Anything for description"
            };

            // Act & Assert


            var ex = Assert.ThrowsAsync<ValidationException>( ()=> productsManager.UpdateAsync(invalidProduct) );
            Assert.That(ex.Message, Is.EqualTo("Invalid prduct!"));
            
        }
    }
}
