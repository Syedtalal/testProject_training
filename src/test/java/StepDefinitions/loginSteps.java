package StepDefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageFactory.login_Page;

public class loginSteps {
        WebDriver driver = null;
        login_Page login;


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
            login_Page login = new login_Page(driver);
            login.nav_to_login_page();
            System.out.println("Navigate to home page");

        }

        @Then("^User will be enter ID and Password$")
        public void userNameAndPassword(){
            login_Page login = new login_Page(driver);
            login.email_and_password("syedtalal88@yahoo.com","Pakistan123");
            System.out.println("User Enter ID and Password Successfully");
        }

        @And("^Click on Login Button$")
        public void clickLoginButton(){
            login_Page login = new login_Page(driver);
            login.click_on_login_button();
            System.out.println("Click on Login Button");
        }

        @Then("^Verify user is Navigate to the Your Store$")
        public void nav_homePage(){
            login_Page login = new login_Page(driver);
            login.getTitle();
            System.out.print("Navigate to My Account");
        }

}
