jQuery(document).ready(function($) {
    // Append the toggle icon inside the same container as the password field
    $("input[type='password']").each(function() {
        if (!this.id) {
            this.id = 'password-' + Math.random().toString(36).substr(2, 9);
        }
        $(this).wrap('<span class="password-wrapper" style="position: relative;"></span>');
        $(this).after("<span toggle='#" + this.id + "' class='field-icon toggle-password eye-open'></span>");
    });

    // Toggle the password visibility on click
    $(document).on('click', '.toggle-password', function() {
        $(this).toggleClass("eye-open eye-close");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
});
