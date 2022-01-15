var variable = "" + 
"" + 
"        <!-- GOES HERE -->" + 
"          <script>" + 
"            function build_links(form) {" + 
"" + 
"              //assign variables from form elements" + 
"              var theurl = form.theurl.value;" + 
"              var thetext = form.thetext.value;" + 
"              var themedia = form.themedia.value;" + 
"" + 
"              //test" + 
"              theurl = encodeURIComponent(theurl);" + 
"              themedia = encodeURIComponent(themedia);" + 
"              thetext = encodeURIComponent(thetext);" + 
"                    " + 
"              //check for HTTPS" + 
"              if( thetext.indexOf('http') >= 0) {" + 
"                $('#generror').show();" + 
"              } else {" + 
"                $('#generror').hide();" + 
"              }" + 
"              " + 
"              //create links" + 
"              var pinterestlink = 'http://pinterest.com/pin/create/button/?url=' + theurl + '&media=' + themedia + '&description=' + thetext;" + 
"              var facebooklink = 'https://www.facebook.com/sharer/sharer.php?u=' + theurl;" + 
"              var twitterlink = 'https://twitter.com/intent/tweet?url=' + theurl + '&text=' + thetext;" + 
"              var linkedinlink = 'http://www.linkedin.com/shareArticle?mini=true&url=' + theurl + '&title=' + thetext;" + 
"              var redditlink = 'http://www.reddit.com/submit?url=' + theurl + '&title=' + thetext;" + 
"              var tumblrlink = 'http://www.tumblr.com/share?v=3&u=' + theurl + '&t=' + thetext;" + 
"              " + 
"              //update inputs" + 
"              form.pinterest.value = pinterestlink;" + 
"              form.facebook.value = facebooklink;" + 
"              form.twitter.value = twitterlink;" + 
"              form.linkedin.value = linkedinlink;" + 
"              form.tumblr.value = tumblrlink;" + 
"" + 
"              //show test links" + 
"              document.getElementById('pinteresttest').innerHTML = ' &nbsp; &nbsp; <a href=\"' + pinterestlink + '\"   target=\"_blank\">TEST <i class=\"fa fa-external-link\"></i></a>';" + 
"              document.getElementById('facebooktest').innerHTML = '  &nbsp; &nbsp; <a href=\"' + facebooklink + '\"   target=\"_blank\">TEST <i class=\"fa fa-external-link\"></i></a>';" + 
"              document.getElementById('twittertest').innerHTML = '  &nbsp; &nbsp; <a href=\"' + twitterlink + '\"   target=\"_blank\">TEST <i class=\"fa fa-external-link\"></i></a>';" + 
"              document.getElementById('linkedintest').innerHTML = '  &nbsp; &nbsp; <a href=\"' + linkedinlink + '\"   target=\"_blank\">TEST <i class=\"fa fa-external-link\"></i></a>';" + 
"              document.getElementById('tumblrtest').innerHTML = ' &nbsp; &nbsp; <a href=\"' + tumblrlink + '\"   target=\"_blank\">TEST <i class=\"fa fa-external-link\"></i></a>';" + 
"" + 
"            }" + 
"          </script>" + 
"          <p>" + 
"            <style>" + 
"              #generror {" + 
"                margin-top: 20px;" + 
"                display: none;" + 
"                font-size: 17px;" + 
"              }" + 
"              #genform h3 {" + 
"                width: 100%:" + 
"              }" + 
"              #genform h3 span {" + 
"                display: inline-block;" + 
"                float: right;" + 
"                margin-right: 1%;" + 
"              }" + 
"              #genform h3 span a {" + 
"                padding: 5px 9px;" + 
"                background-color: #EC8435; font-weight: bold;" + 
"                color: #fff;" + 
"                font-size: 12px;" + 
"                border-radius: 3px;" + 
"                vertical-align: top;" + 
"              }" + 
"              #genform h3 span .fa {" + 
"                font-size: 10px;" + 
"                padding-left: 5px;" + 
"                color: #fff;" + 
"                width: 15px;" + 
"              }" + 
"              #genform input::placeholder { " + 
"color: #bbb;" + 
"                font-size: 15px;" + 
"}" + 
"            </style>" + 
"            <form id=\"genform\" style=\"width: 100%; text-align: left; font-family: 'chaparral-pro';\">" + 
"              " + 
"              Link URL<br />" + 
"              <input placeholder=\"ex: https://mywebsite.com\" type=\"text\" name=\"theurl\" id=\"theurl\" style=\"border: 1px solid #aaa;width: 99%; padding: 5px; margin-bottom: 10px;\" /><br />" + 
"              " + 
"              Text <em>(optional, Twitter only)</em><br />" + 
"              <input placeholder=\"ex: Check out this amazing new product!\" type=\"text\" name=\"thetext\" id=\"thetext\" style=\"border: 1px solid #aaa;width: 99%; padding: 5px; margin-bottom: 10px;\" /><br />" + 
"             " + 
"              Thumbnail Image URL <em>(optional, Pinterest only)</em><br />" + 
"              <input placeholder=\"ex: https://mywebsite.com/photo.jpg\" type=\"text\" name=\"themedia\" id=\"themedia\" style=\"border: 1px solid #aaa;width: 99%; padding: 5px; margin-bottom: 10px;\" /><br />" + 
"              " + 
"              <INPUT NAME=\"calc\" VALUE=\"Build Sharing Links\" id=\"stashsubmit\" class=\"submit\" TYPE=\"BUTTON\" onClick=\"build_links(this.form);\" style=\"width: 99%; height: 40px; background-color: #EC8435; border-radius: 5px; border: 0px; color: white; height: auto; line-height: 18px;margin: 5px 0 15px 0px; padding: 12px 0px;\" />" + 
"              <div id=\"generror\" class=\"alert alert-danger\">" + 
"                <i class=\"fa fa-exclamation-circle\"></i> <b>Are your links not working?</b><br />Check your inputs. " + 
"                It looks like you might have a link URL in the \"text\" field." + 
"              </div>" + 
"              <br />" + 
"              " + 
"              <h3 style=\"padding: 5px 0;\"><i class=\"fa fa-twitter\"></i> Twitter <span id=\"twittertest\"></span></h3>" + 
"              <input type=\"text\" name=\"twitter\" id=\"twitter\" style=\"border: 1px solid #aaa; width: 99%; padding: 5px; margin-bottom: 10px; cursor: text;\" onclick=\"select()\" READONLY /><br />" + 
"              " + 
"              <h3 style=\"padding: 5px 0;\"><i class=\"fa fa-facebook\"></i> Facebook <span id=\"facebooktest\"></span></h3>" + 
"              <input type=\"text\" name=\"facebook\" id=\"facebook\" style=\"border: 1px solid #aaa;width: 99%; padding: 5px; margin-bottom: 10px; cursor: text;\" onclick=\"select()\" READONLY /><br />" + 
"              " + 
"              <h3 style=\"padding: 5px 0;\"><i class=\"fa fa-pinterest\"></i> Pinterest <span id=\"pinteresttest\"></span></h3>" + 
"              <input type=\"text\" name=\"pinterest\" id=\"pinterest\" style=\"border: 1px solid #aaa;width: 99%; padding: 5px; margin-bottom: 10px; cursor: text;\" onclick=\"select()\" READONLY /><br />" + 
"              " + 
"              <h3 style=\"padding: 5px 0;\"><i class=\"fa fa-linkedin\"></i> LinkedIn <span id=\"linkedintest\"></span></h3>" + 
"              <input type=\"text\" name=\"linkedin\" id=\"linkedin\" style=\"border: 1px solid #aaa;width: 99%; padding: 5px; margin-bottom: 10px; cursor: text;\" onclick=\"select()\" READONLY /><br />" + 
"              " + 
"              <input type=\"text\" name=\"tumblr\" id=\"tumblr\" style=\"border: 1px solid #aaa;width: 99%; padding: 5px; margin-bottom: 10px; cursor: text;\" onclick=\"select()\" READONLY /><br />" + 
"" + 
"            </form>" + 
"        </p>" + 
"        " + 
"  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js\"></script>" + 
"";
