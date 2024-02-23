using Homies.Data;
using Homies.Data.Models;
using Homies.Models.Event;
using Homies.Services;
using Microsoft.EntityFrameworkCore;

namespace Homies.Tests
{
    [TestFixture]
    internal class EventServiceTests
    {
        private HomiesDbContext _dbContext;
        private EventService _eventService;

        [SetUp]
        public void Setup()
        {
            var options = new DbContextOptionsBuilder<HomiesDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()) // Use unique database name to avoid conflicts
                .Options;

            _dbContext = new HomiesDbContext(options);

            _eventService = new EventService(_dbContext);
        }

        [Test]
        public async Task AddEventAsync_ShouldAddEvent_WhenValidEventModelAndUserId()
        {
            // Step 1: Arrange - Set up the initial conditions for the test
            // Create a new event model with test data
            var eventModel = new EventFormModel
            {
                Name = "Test Event",
                Description = "Test Description",
                Start = DateTime.Now,
                End = DateTime.Now.AddHours(2)
            };
            // Define a user ID for testing purposes
            string userId = "testUserId";

            // Step 2: Act - Perform the action being tested
            // Call the service method to add the event
            await _eventService.AddEventAsync(eventModel, userId);

            // Step 3: Assert - Verify the outcome of the action
            // Retrieve the added event from the database

            var eventInDatabase = await _dbContext.Events.FirstOrDefaultAsync(x => x.Name == 
            eventModel.Name && x.OrganiserId == userId);

            // Assert that the added event is not null, indicating it was successfully added
            Assert.NotNull(eventInDatabase);

            // Assert that the description of the added event matches the description provided in the event model
            Assert.AreEqual(eventModel.Description, eventInDatabase.Description);

            //throw new NotImplementedException();
        }


        [Test]
        public async Task GetAllEventsAsync_ShouldReturnAllEvents()
        {
            // Step 1: Arrange - Set up the initial conditions for the test
            // Create two event models with test data
            var firstEventModel = new EventFormModel
            {
                Name = "First Test Event",
                Description = "First Test Description",
                Start = DateTime.Now,
                End = DateTime.Now.AddHours(2)
            };

            var secondEventModel = new EventFormModel
            {
                Name = "Second Test Event",
                Description = "Second Test Description",
                Start = DateTime.Now,
                End = DateTime.Now.AddHours(2)
            };


            // Define a user ID for testing purposes
            string userId = "testUserId";
            
            // Step 2: Act - Perform the action being tested
            // Add the two events to the database using the event service
            await _eventService.AddEventAsync(firstEventModel, userId);
            await _eventService.AddEventAsync(secondEventModel, userId);

            // Step 3: Act - Retrieve the count of events from the database
            var numberOfEvents = _dbContext.Events.Count();

            // Step 4: Assert - Verify the outcome of the action
            // Assert that the count of events in the database is equal to the expected count (2)
            Assert.AreEqual(numberOfEvents, 2);
           
            //throw new NotImplementedException();
        }



        [Test]
        public async Task AddTwoEvents_AddEventAsync_ShouldAddEvent_WhenValidEventModelAndUserId()
        {
            // Step 1: Arrange - Set up the initial conditions for the test
            // Create two event models with test data
            var firstEventModel = new EventFormModel
            {
                Name = "First Test Event",
                Description = "First Test Description",
                Start = DateTime.Now,
                End = DateTime.Now.AddHours(2)
            };

            var secondEventModel = new EventFormModel
            {
                Name = "Second Test Event",
                Description = "Second Test Description",
                Start = DateTime.Now,
                End = DateTime.Now.AddHours(2)
            };


            // Define a user ID for testing purposes
            string userId = "testUserId";

            // Step 2: Act - Perform the action being tested
            // Add the two events to the database using the event service
            await _eventService.AddEventAsync(firstEventModel, userId);
            await _eventService.AddEventAsync(secondEventModel, userId);

            // Step 3: Act - Retrieve the count of events from the database
            var numberOfEvents = _dbContext.Events.Count();

            var secondEventInDB = await _dbContext.Events.FirstOrDefaultAsync(x => x.Name ==
            secondEventModel.Name && x.OrganiserId == userId);

            // Step 4: Assert - Verify the outcome of the action
            // Assert that the count of events in the database is equal to the expected count (2)
            // Assert that the first event model is equal to first event model added in the Database
            // Assert that the second event model is equal to second event model added in the Database
            Assert.AreEqual(numberOfEvents, 2);
            Assert.AreEqual(secondEventModel.Description, secondEventInDB.Description);
            


            //throw new NotImplementedException();
        }

        [Test]
        public async Task userId_ShouldeturnUserIdOfEventOrganizer()
        {
            // Step 1: Arrange - Set up the initial conditions for the test
            // Create a new event model with test data
            var eventModel = new EventFormModel
            {
                Name = "Test Event",
                Description = "Test Description",
                Start = DateTime.Now,
                End = DateTime.Now.AddHours(2)
            };
            // Define a user ID for testing purposes
            string userId = "testUserId";

            // Step 2: Act - Perform the action being tested
            // Call the service method to add the event
            await _eventService.AddEventAsync(eventModel, userId);

            // Step 3: Assert - Verify the outcome of the action
            // Retrieve the added event from the database
            var eventOrganizer = await _dbContext.Events.FirstOrDefaultAsync(x => x.Description == 
            eventModel.Description && x.OrganiserId == userId);

            Assert.That(eventOrganizer.OrganiserId, Is.EqualTo(userId));
            
           


        }
    }
}
