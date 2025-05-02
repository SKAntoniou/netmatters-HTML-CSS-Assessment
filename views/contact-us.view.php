<?php require('partials/head.php') ?>
<?php require('partials/menu.php') ?>
<?php require('partials/header.php') ?>

<div class="site-path">
  <div class="container">
    <div>
      <a href="/">Home</a>
      <span>&nbsp;&#47;&nbsp;</span>
      <span>Our Offices</span>
    </div>
  </div>
</div>


<div class="contact-us-locations">

  <div class="page-heading">
    <div class="container">
      <h2>Our Offices</h2>
    </div>
  </div>

  <div class="container">

    <div class="offices">

      <div class="office">
        <img src="img/offices/cambridge.jpeg" alt="Cambridge Office Building">
        <div class="text">
          <a href="#"><h3>Cambridge Office</h3></a>
          <p>Unit 1.31, <br>
          St John's Innovation Centre, <br>
          Cowley Road, Milton, <br>
          Cambridge, <br>
          CB4 0WS</p>
          <a href="#"><h2>01223 37 57 72</h2></a>
          <a href="#" class="btn-viewmore">View More</a>
        </div>
      </div>

      <div class="office">
        <img src="img/offices/wymondham.jpeg" alt="Wymondham Office Building">
        <div class="text">
          <a href="#"><h3>Wymondham Office</h3></a>
          <p>Unit 15, <br>
            Penfold Drive,<br>
            Gateway 11 Business Park,<br>
            Wymondham, Norfolk,<br>
            NR18 0WZ</p>
          <a href="#"><h2>01603 70 40 20</h2></a>
          <a href="#" class="btn-viewmore">View More</a>
        </div>
      </div>

      <div class="office">
        <img src="img/offices/yarmouth-2.jpeg" alt="Yarmouth Office Building">
        <div class="text">
          <a href="#"><h3>Great Yarmouth Office</h3></a>
          <p>Suite F23, <br>
            Beacon Innovation Centre,<br>
            Beacon Park, Gorleston,<br>
            Great Yarmouth, Norfolk,<br>
            NR31 7RA</p>
          <a href="#"><h2>01493 60 32 04</h2></a>
          <a href="#" class="btn-viewmore">View More</a>
        </div>
      </div>

    </div>

  </div>
</div>

<div class="contact-form">
  <div class="container contact-form-grid">

    <div class="contact-details">
      <div class="business-hours">
        <strong>Email us on:</strong>
        <p><a href="#">sales&#64;netmatters.com</a></p>
        <strong>Speak to Sales on:</strong>
        <p><a href="#">01603 515007</a></p>
        <strong>Business hours:</strong>
        <strong>Monday - Friday 07:00 - 18:00</strong>
      </div>
      <div class="out-of-hours">
        <strong id="toggle-out-of-hours">Out of Hours IT Support<span class="icon-keyboard_arrow_down"></span></strong>
        <div id="toggle-out-of-hours-details">
          <p>Netmatters IT are offering an Out of Hours service for Emergency and Critical tasks.</p>
          <strong>Monday - Friday 18:00 - 22:00 <br>
            Saturday 08:00 - 16:00 <br>
            Sunday 10:00 - 18:00
          </strong>
          <p>To log a critical task, you will need to call our main line number and select Option 2 to leave an Out of Hours  voicemail. A technician will contact you on the number provided within 45 minutes of your call. 
          </p>
        </div>
      </div>
    </div>

    <form id="contact-form">
      <div class="form-grid">
        <div class="form-group">
          <label for="name" class="required-icon">Your Name</label>
          <input class="form-input-small required" type="text" id="name" name="name">
        </div>
        <div class="form-group">
          <label for="company-name">Company Name</label>
          <input class="form-input-small" type="text" id="company-name" name="company-name">
        </div>
        <div class="form-group">
          <label for="email" class="required-icon">Your Email</label>
          <input class="form-input-small required" type="email" id="email" name="email">
        </div>
        <div class="form-group">
          <label for="phone-number" class="required-icon">Your Telephone Number</label>
          <input class="form-input-small required" type="tel" id="phone-number" name="phone-number">
        </div>
      </div>
      <div  class="form-group">
        <label for="message" class="required-icon">Message</label>
        <textarea class="form-input-large required" id="message" name="message"></textarea>
      </div>

      <div  class="form-group form-checkbox-marketing">
        <label for="marketing"><span class="icon-checkbox-unchecked"></span><span>Please tick this box if you wish to receive marketing information from us. Please see our <a href="#">Privacy Policy</a> for more information on how we keep your data safe.</span></label>
        <input type="checkbox" id="marketing" name="marketing">
      </div>

      <p>This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.</p>

      <div class="form-bottom">
        <input class="form-button" type="submit" value="SEND ENQUIRY">
        <div class="text">
          <span class="required-icon"></span>
          <p>Fields Required</p>
        </div>
      </div>
    </form>

  </div>
</div>


<?php require('partials/footer.php') ?>