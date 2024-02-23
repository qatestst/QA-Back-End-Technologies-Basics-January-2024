using ContactsConsoleAPI.Business;
using ContactsConsoleAPI.Business.Contracts;
using ContactsConsoleAPI.Data.Models;
using ContactsConsoleAPI.DataAccess;
using ContactsConsoleAPI.DataAccess.Contrackts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactsConsoleAPI.IntegrationTests.NUnit
{
    public class IntegrationTests
    {
        private TestContactDbContext dbContext;
        private IContactManager contactManager;

        [SetUp]
        public void SetUp()
        {
            this.dbContext = new TestContactDbContext();
            this.contactManager = new ContactManager(new ContactRepository(this.dbContext));
        }


        [TearDown]
        public void TearDown()
        {
            this.dbContext.Database.EnsureDeleted();
            this.dbContext.Dispose();
        }


        //positive test
        [Test]
        public async Task AddContactAsync_ShouldAddNewContact()
        {
            //Arrange
            var newContact = new Contact()
            {
                FirstName = "TestFirstName",
                LastName = "TestLastName",
                Address = "Anything for testing address",
                Contact_ULID = "1ABC23456HH", //must be minimum 10 symbols - numbers or Upper case letters
                Email = "test@gmail.com",
                Gender = "Male",
                Phone = "0889933779"
            };

            //Act

            await contactManager.AddAsync(newContact);
            var dbContact = await dbContext.Contacts.FirstOrDefaultAsync(c => c.Contact_ULID == newContact.Contact_ULID);

            //Assert 

            Assert.NotNull(dbContact);
            Assert.AreEqual(newContact.FirstName, dbContact.FirstName);
            Assert.AreEqual(newContact.LastName, dbContact.LastName);
            Assert.AreEqual(newContact.Phone, dbContact.Phone);
            Assert.AreEqual(newContact.Email, dbContact.Email);
            Assert.AreEqual(newContact.Address, dbContact.Address);
            Assert.AreEqual(newContact.Contact_ULID, dbContact.Contact_ULID);
            Assert.AreEqual(newContact.Gender, dbContact.Gender);
        }

        //Negative test
        [Test]
        public async Task AddContactAsync_TryToAddContactWithInvalidCredentials_ShouldThrowException()
        {
            //Arrange

            var newContact = new Contact()
            {
                FirstName = "TestFirstName",
                LastName = "TestLastName",
                Address = "Anything for testing address",
                Contact_ULID = "1ABC23456HH", //must be minimum 10 symbols - numbers or Upper case letters
                Email = "invalid_Mail", //invalid email
                Gender = "Male",
                Phone = "0889933779"
            };

            //Act & Assert 

            var ex = Assert.ThrowsAsync<ValidationException>(async () => await contactManager.AddAsync(newContact));
            var actual = await dbContext.Contacts.FirstOrDefaultAsync(c => c.Contact_ULID == newContact.Contact_ULID);

            Assert.IsNull(actual);
            Assert.That(ex?.Message, Is.EqualTo("Invalid contact!"));

        }

        [Test]
        public async Task DeleteContactAsync_WithValidULID_ShouldRemoveContactFromDb()
        {
            // Arrange
            var newContact = new Contact()
            {
                FirstName = "TestFirstName",
                LastName = "TestLastName",
                Address = "Anything for testing address",
                Contact_ULID = "1ABC23456HH", //must be minimum 10 symbols - numbers or Upper case letters
                Email = "test@gmail.com",
                Gender = "Male",
                Phone = "0889933779"
            };
            
            await contactManager.AddAsync(newContact);
            
            //dbContext.Contacts.Add(newContact);

            // Get data from db and assert.
            // Act
            await contactManager.DeleteAsync(newContact.Contact_ULID);

            // Assert
            var contactInDb = await dbContext.Contacts.FirstOrDefaultAsync(x => x.Contact_ULID == newContact.Contact_ULID);
            Assert.IsNull(contactInDb);
        }

        [TestCase(null)]
        [TestCase("")]
        [TestCase(" ")]
        public async Task DeleteContactAsync_TryToDeleteWithNullOrWhiteSpaceULID_ShouldThrowException(string invalidULID)
        {
                       
            // Act & Assert
            Assert.ThrowsAsync<ArgumentException>(async () => await contactManager.DeleteAsync(invalidULID));
            //Assert.ThrowsAsync<ArgumentException>(async () => await contactManager.DeleteAsync(""));
            //Assert.ThrowsAsync<ArgumentException>(async () => await contactManager.DeleteAsync(" "));

            var exMessage = Assert.ThrowsAsync<ArgumentException>(async () => await contactManager.DeleteAsync(invalidULID));
            Assert.AreEqual(exMessage.Message, "ULID cannot be empty.");

        }

        [Test]

        public async Task GetAllAsync_WhenContactsExist_ShouldReturnAllContacts()
        {
            // Arrange
            var firstContact = new Contact()
            {
                FirstName = "TestFirstName",
                LastName = "TestLastName",
                Address = "Anything for testing address",
                Contact_ULID = "1ABC23456HH", //must be minimum 10 symbols - numbers or Upper case letters
                Email = "test@gmail.com",
                Gender = "Male",
                Phone = "0889933779"
            };

            var secondContact = new Contact()
            {
                FirstName = "SecondTestFirstName",
                LastName = "SecondTestLastName",
                Address = "Second Anything for testing address",
                Contact_ULID = "2ABC23456HH", //must be minimum 10 symbols - numbers or Upper case letters
                Email = "secondtest@gmail.com",
                Gender = "Male",
                Phone = "0889933999"
            };
            // Act
            await contactManager.AddAsync(firstContact);
            await contactManager.AddAsync(secondContact);
            
            var result = await contactManager.GetAllAsync();

            // Assert
            Assert.That(result.Count(), Is.EqualTo(2));
            
        }

        [Test]
        public async Task GetAllAsync_WhenNoContactsExist_ShouldThrowKeyNotFoundException()
        {
            // Arrange

            // Act & Assert
            Assert.ThrowsAsync<KeyNotFoundException>(() => contactManager.GetAllAsync());
            var exMessage = Assert.ThrowsAsync<KeyNotFoundException>(() => contactManager.GetAllAsync());
            Assert.That(exMessage.Message, Is.EqualTo("No contact found."));
        }

        [Test]
        public async Task SearchByFirstNameAsync_WithExistingFirstName_ShouldReturnMatchingContacts()
        {
            
            // Arrange
            var newContact = new Contact()
            {
                FirstName = "TestFirstName",
                LastName = "TestLastName",
                Address = "Anything for testing address",
                Contact_ULID = "1ABC23456HH", //must be minimum 10 symbols - numbers or Upper case letters
                Email = "test@gmail.com",
                Gender = "Male",
                Phone = "0889933779"
            };
            var secondContact = new Contact()
            {
                FirstName = "SecondTestFirstName",
                LastName = "SecondTestLastName",
                Address = "Second Anything for testing address",
                Contact_ULID = "2ABC23456HH", //must be minimum 10 symbols - numbers or Upper case letters
                Email = "secondtest@gmail.com",
                Gender = "Male",
                Phone = "0889933999"
            };
            // Act
            await contactManager.AddAsync(newContact);
            await contactManager.AddAsync(secondContact);
            var result = await contactManager.SearchByFirstNameAsync(secondContact.FirstName);
            var itemInTheDb = result.First();

            // Assert
            Assert.That(result.Count, Is.EqualTo(1));
           
            Assert.That(itemInTheDb.FirstName, Is.EqualTo(secondContact.FirstName));
            Assert.That(itemInTheDb.LastName, Is.EqualTo(secondContact.LastName));
            Assert.That(itemInTheDb.Email, Is.EqualTo(secondContact.Email));
            Assert.That(itemInTheDb.Id, Is.EqualTo(secondContact.Id));
            Assert.That(itemInTheDb.Contact_ULID, Is.EqualTo(secondContact.Contact_ULID));

        }

        [Test]
        public async Task SearchByFirstNameAsync_WithNonExistingFirstName_ShouldThrowKeyNotFoundException()
        {
            // Arrange

            // Act & Assert
            var exMessage = Assert.ThrowsAsync<KeyNotFoundException>(() => contactManager.SearchByFirstNameAsync("Non existing name"));
            Assert.That(exMessage.Message, Is.EqualTo("No contact found with the given first name."));
            

        }

        [Test]
        public async Task SearchByLastNameAsync_WithExistingLastName_ShouldReturnMatchingContacts()
        {
            // Arrange
            
            var newContact = new Contact()
            {
                FirstName = "TestFirstName",
                LastName = "TestLastName",
                Address = "Anything for testing address",
                Contact_ULID = "1ABC23456HH", //must be minimum 10 symbols - numbers or Upper case letters
                Email = "test@gmail.com",
                Gender = "Male",
                Phone = "0889933779"
            };
            await contactManager.AddAsync(newContact);
            // Act
            var result = await contactManager.SearchByLastNameAsync(newContact.LastName);
            var firstObjectFromResult = result.First();

            // Assert
            Assert.That(result.Count(), Is.EqualTo(1));
            Assert.That(firstObjectFromResult.LastName, Is.EqualTo(newContact.LastName));
        }

        [Test]
        public async Task SearchByLastNameAsync_WithNonExistingLastName_ShouldThrowKeyNotFoundException()
        {
            // Act & Assert
            var exMessage = Assert.ThrowsAsync<KeyNotFoundException>(() => contactManager.SearchByFirstNameAsync("non existin name"));
            Assert.That(exMessage.Message, Is.EqualTo("No contact found with the given first name."));
        }

        [Test]
        public async Task GetSpecificAsync_WithValidULID_ShouldReturnContact()
        {
            // Arrange
            var newContact = new Contact()
            {
                FirstName = "TestFirstName",
                LastName = "TestLastName",
                Address = "Anything for testing address",
                Contact_ULID = "1ABC23456HH", //must be minimum 10 symbols - numbers or Upper case letters
                Email = "test@gmail.com",
                Gender = "Male",
                Phone = "0889933779"
            };
            await contactManager.AddAsync(newContact);

            // Act
            var result = await contactManager.GetSpecificAsync(newContact.Contact_ULID);

            // Assert
            Assert.That(newContact.Contact_ULID, Is.EqualTo(result.Contact_ULID));
        }

        [Test]
        public async Task GetSpecificAsync_WithInvalidULID_ShouldThrowKeyNotFoundException()
        {

            // Act & Assert
            var exMessage = Assert.ThrowsAsync<KeyNotFoundException>( ()=> contactManager.GetSpecificAsync("dfdfASDD") );
            Assert.That(exMessage.Message, Is.EqualTo($"No contact found with ULID: dfdfASDD"));

            var exMessage1 = Assert.ThrowsAsync<ArgumentException>(() => contactManager.GetSpecificAsync(""));
            Assert.That(exMessage1.Message, Is.EqualTo($"ULID cannot be empty."));

            var exMessage2 = Assert.ThrowsAsync<ArgumentException>(() => contactManager.GetSpecificAsync(null));
            Assert.That(exMessage2.Message, Is.EqualTo($"ULID cannot be empty."));

        }

        [Test]
        public async Task UpdateAsync_WithValidContact_ShouldUpdateContact()
        {
            // Arrange
            var newContact = new Contact()
            {
                FirstName = "TestFirstName",
                LastName = "TestLastName",
                Address = "Anything for testing address",
                Contact_ULID = "1ABC23456HH", //must be minimum 10 symbols - numbers or Upper case letters
                Email = "test@gmail.com",
                Gender = "Male",
                Phone = "0889933779"
            };
            var secondContact = new Contact()
            {
                FirstName = "SecondTestFirstName",
                LastName = "SecondTestLastName",
                Address = "Second Anything for testing address",
                Contact_ULID = "2ABC23456HH", //must be minimum 10 symbols - numbers or Upper case letters
                Email = "secondtest@gmail.com",
                Gender = "Male",
                Phone = "0889933999"
            };
            // Act
            await contactManager.AddAsync(newContact);
            await contactManager.AddAsync(secondContact);

            var modifiedContact = newContact;
            modifiedContact.FirstName = "UPDATED!";
            await contactManager.UpdateAsync(modifiedContact);
            
            //var modifiedContactFromDB = dbContext.Contacts.Where(c => c.Contact_ULID == newContact.Contact_ULID).FirstOrDefault();
            var modifiedContactFromDB = await dbContext.Contacts.FirstOrDefaultAsync(c => c.Contact_ULID == modifiedContact.Contact_ULID);
            // Assert
            Assert.NotNull(modifiedContactFromDB);
            Assert.That(modifiedContactFromDB.FirstName, Is.EqualTo(modifiedContact.FirstName));
        }

        [Test]
        public async Task UpdateAsync_WithInvalidContact_ShouldThrowValidationException()
        {
            // Act & Assert
            var exMessage = Assert.ThrowsAsync<ValidationException>( ()=> contactManager.UpdateAsync(new Contact()));
            Assert.That(exMessage.Message, Is.EqualTo("Invalid contact!"));
        }
    }
}
