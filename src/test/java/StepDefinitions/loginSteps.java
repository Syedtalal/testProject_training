package StepDefinitions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageFactory.login_Page;


public class loginSteps {
        WebDriver driver = null;
        login_Page login;
        Scenario scn;

        @After
        public void cleanup(){
//            TakesScreenshot scrnshot = (TakesScreenshot)driver;
//            byte[] data = scrnshot.getScreenshotAs(OutputType.BYTES);
//            scn.embed(data, "image/png");

            driver.quit();
            scn.write("Browser is closed");
        }


        @Before
        public void setup(Scenario s) {
        this.scn = s;
    }

        @Given("^User will be open browser and launch Application$")
        public void launchBrowser() {

            System.setProperty("webdriver.chrome.driver","src/chromedriver/chromedriver.exe");
            driver = new ChromeDriver();
            driver.navigate().to("https://demo.opencart.com/index.php?route=common/home");
            driver.manage().window().maximize();
            System.out.println("Browser Launch Successfully and lOgin page Displayed..");

        }

        @When("^User will be click on My Account tab and click on Login$")
        public void nav_to_homepage(){
            login_Page login = new login_Page(driver,scn);
            login.nav_to_login_page();
            System.out.println("Navigate to home page");

        }

        @Then("^User will be enter ID and Password$")
        public void userNameAndPassword(){
            login_Page login = new login_Page(driver,scn);
            login.email_and_password("syedtalal88@yahoo.com","Pakistan123");
            System.out.println("User Enter ID and Password Successfully");
        }

        @And("^Click on Login Button$")
        public void clickLoginButton(){
            login_Page login = new login_Page(driver,scn);
            login.click_on_login_button();
            System.out.println("Click on Login Button");
        }

        @Then("^Verify user is Navigate to the Your Store$")
        public void nav_homePage(){
            login_Page login = new login_Page(driver,scn);
            login.getTitle();
            System.out.print("Navigate to My Account");
        }

}
