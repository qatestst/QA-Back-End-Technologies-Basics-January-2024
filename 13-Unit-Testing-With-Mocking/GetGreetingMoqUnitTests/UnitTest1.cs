using Castle.Components.DictionaryAdapter;
using GetGreeting;
using Moq;

namespace GetGreetingMoqUnitTests
{
    [TestFixture]
        
    public class GreetingTests
    {
        private Mock<ITimeProvider> mockTimeProvider;
        private GreetingProvider greetingProvider;
        


        [SetUp]
        public void Setup()
        {
            mockTimeProvider = new Mock<ITimeProvider>();
            greetingProvider = new GreetingProvider(mockTimeProvider.Object);
        }

        [Test]
        public void GreetingAt9AMShouldBeGoodMorning()
        {
            //Arrange
            mockTimeProvider.Setup(x => x.GetCurrentTime()).Returns(new DateTime(2024,1,1,9,0,0));
            //Act
            string result = greetingProvider.GetGreeting();
           //Assert
           Assert.That(result, Is.EqualTo("Good morning!"));

        }   


        [TestCase("Good morning!", 9)]
        [TestCase("Good afternoon!", 12)]
        [TestCase("Good afternoon!", 14)]
        [TestCase("Good afternoon!", 17)]
        [TestCase("Good evening!", 18)]
        [TestCase("Good evening!", 20)]
        [TestCase("Good evening!", 21)]
        [TestCase("Good night!", 22)]
        [TestCase("Good night!", 00)]

        public void GreetingAtMornigAfternoonEveningNightShouldReturnCorrectMessage(string expected, int hour)
        {
            //Arrange
            mockTimeProvider.Setup(x => x.GetCurrentTime()).Returns(new DateTime(2024, 1, 1, hour, 30, 30));
            //Act
            string result = greetingProvider.GetGreeting();
            //Assert
            Assert.That(result, Is.EqualTo(expected));

        }
    }
}