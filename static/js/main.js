// Main Script

const reactor_url = 'https://reactor.api.64byte.com';

function get_post_token() {
  // console.log("Fetching post token");

  // disable form submit
  $('#contactSubmit').prop( "disabled", true );

  var xhr_token = new XMLHttpRequest();
  xhr_token.open('POST', reactor_url + '/mailer/token');
  xhr_token.onload = function() {

  		if (xhr_token.status === 200) {
  				data = JSON.parse(xhr_token.responseText);

          // Set the token field
          if( $('#post_token')[0] ) {
            $('#post_token')[0].value = data.token;
          }

          // enable form submit
          $('#contactSubmit').prop( "disabled", false );


      }
  };
  xhr_token.setRequestHeader("token_request", "null");
  xhr_token.send();

}


function post_contact_form(e) {
	if (e.preventDefault) e.preventDefault();

  // disable form submit
  $('#contactSubmit').prop( "disabled", true );

	var form = document.getElementById('contactForm');
	var formData = new FormData( form );
	var sent_title = '';
	var sent_message = '';

	var xhr_post = new XMLHttpRequest();
	xhr_post.open('POST', reactor_url + '/mailer/send?form=contact');
	xhr_post.onload = function() {
		if (xhr_post.status === 200) {
			//alert(xhr_post.status + ' ' + xhr_post.responseText)
			data = JSON.parse(xhr_post.responseText);
			//document.getElementById('contactForm').innerHTML = data.message;
			sent_message = data.message;
			sent_title = 'Thank You!';
		} else {
			//alert("Failed to submit. Unknown Reactor Error.")
			sent_message = "Unknown Reactor Error, please check to logs.";
			sent_title = "Error: Failed to submit.";
		}

		if(document.getElementById("messageBox") ) {
			document.getElementById("messageBox-body").innerHTML = sent_message;
			document.getElementById("messageBox-title").innerHTML = sent_title;
			//$("#messageBox").removeClass('inactive');
			$("#messageBox").fadeIn(500);
		}

	};
	xhr_post.setRequestHeader("X-CSRF-Token", $('#post_token')[0].value);
	xhr_post.send(formData);

	// Fetch a new post token
	get_post_token();

	return false;

}


// Get the client IP Address information if the page element exists
if( document.getElementById('ipaddr-geoip') ) {
	var xhr_ipaddr = new XMLHttpRequest();
	xhr_ipaddr.open('GET', reactor_url + '/ipaddr');
	xhr_ipaddr.onload = function() {
			if (xhr_ipaddr.status === 200) {
					data = JSON.parse(xhr_ipaddr.responseText);

					// Set the ipaddress values
				elems = document.getElementsByClassName('ipaddr-address');
				var i = elems.length;
				while(i--) { elems[i].innerHTML = data.ipaddress; }

				var geoiptable = '<table class="ipaddr-geoiptable"><tr><th colspan="2"><strong>GeoIP Data</strong></th></tr>';
				for(var key in data.geoip) {
					geoiptable += '<tr><td><b>' + key + ':</b></td><td>' + data.geoip[key] + '</td></tr>';
				}
				geoiptable += '</table>';
				document.getElementById('ipaddr-geoip').innerHTML = geoiptable;

	    };
	};
  xhr_ipaddr.setRequestHeader("Accept", "application/json");
	xhr_ipaddr.send();

}

if (document.getElementById('contactForm')) {
  document.addEventListener('DOMContentLoaded', function() {
  // Set contact form handler
  var form = document.getElementById('contactForm');
    if (form && form.attachEvent) {
        form.attachEvent("submit", post_contact_form);
    } else {
        form.addEventListener("submit", post_contact_form);
    }
  }, false);
  get_post_token();
}
