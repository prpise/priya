package skeleton;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Registr {
	WebDriver driver; 
	@Given("User opens signup page")
	public void user_opens_signup_page() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\training_c2a.04.29\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://10.232.237.143:443/TestMeApp/");
		driver.manage().window().maximize();
		WebElement log=driver.findElement(By.xpath("//*[@id='header']/div[1]/div/div/div[2]/div/ul/li[2]/a"));
		log.click();
	}

	@When("User enters the un as <{string}>")
	public void user_enters_the_un_as(String string) {
		WebElement uname=driver.findElement(By.xpath("//*[@id='userName']"));
		uname.sendKeys(string);
				
	   
	}

	@When("User enters the fn as <{string}>")
	public void user_enters_the_fn_as(String string) {
		WebElement fname =driver.findElement(By.xpath("//*[@id='firstName']"));
		fname.sendKeys(string);
		
	  
	}

	@When("User enters the Ln as <{string}>")
	public void user_enters_the_Ln_as(String string) {
		WebElement lname =driver.findElement(By.xpath("//*[@id='lastName']"));
		lname.sendKeys(string);
	   
	}

	@When("User enters the pwd as <{string}>")
	public void user_enters_the_pwd_as(String string) {
		WebElement pwd =driver.findElement(By.xpath("//*[@id='password']"));
		pwd.sendKeys(string);
		
	    	}

	@When("User enters the confirmpwd as <{string}>")
	public void user_enters_the_confirmpwd_as(String string) {
		WebElement cpwd =driver.findElement(By.xpath("//*[@id='pass_confirmation']"));
		cpwd.sendKeys(string);
		
	    
	}

	@When("User select the gender")
	public void user_select_the_gender() {
		WebElement log=driver.findElement(By.xpath("//*[@id='gender']"));
		log.click();
	    
	}


	@When("User enters the mail as <{string}>")
	public void user_enters_the_mail_as(String string) {
		WebElement mail =driver.findElement(By.xpath("//*[@id='emailAddress']"));
		mail.sendKeys(string);
	    
	}	

	@When("User enters the mobile as <{string}>")
	public void user_enters_the_mobile_as(String string) {
		WebElement mob =driver.findElement(By.xpath("//*[@id='mobileNumber']"));
		mob.sendKeys(string);
	}

	@When("User enters dob as <{string}>")
	public void user_enters_dob_as(String string) {
		WebElement dob =driver.findElement(By.xpath("//*[@id='dob']"));
		dob.sendKeys(string);
	   
	}

	@When("User enters add as <{string}>")
	public void user_enters_add_as(String string) {
		WebElement add =driver.findElement(By.xpath("//*[@id='address']"));
		add.sendKeys(string);
	}

	//@When("User enters ques as <{string}>")
	//public void user_enters_ques_as(String string) {
		//WebElement ques =driver.findElement(By.xpath("//*[@id='securityQuestion']"));
		//ques.sendKeys(string);
	//}

	@When("User enters ans as <{string}>")
	public void user_enters_ans_as(String string) {
		WebElement ans =driver.findElement(By.xpath("//*[@id='answer']"));
		ans.sendKeys(string);
	    
	}

	@Then("click submit button as <{string}>")
	public void click_submit_button_as(String string) {
		WebElement submit =driver.findElement(By.xpath("/html/body/main/div/div/form/fieldset/div/div[13]/div/input[1]"));
		submit.click();
	}
	    
	    @Then("verify signup success message")
	    public void verify_signup_success_message() {
	    
	    }
	 
	      
	


	}




