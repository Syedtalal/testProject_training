package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "classpath:src/test/resources/Features",
        glue = "StepDefinitions",
        plugin = "html:target/selenium-reports"
        )

public class TestRunner {

}
