Blog.config({
    // syntaxHighLighting: true,
    // syntaxHighLightingTheme: 'github'
});

Accounts.onLogin(function() {
    adminUser();
});

function adminUser() {
    Meteor.call('adminUser', function(error, result) {
        if (error) {
            console.log("An error has occurred : " + error);
        } // end of if
        else {
            Session.set('isAdmin', result);
        } // end of else
    }); // end of Meteor.call
}; // end of adminUser

Template.header.helpers({
    isAdmin: function() {
        adminUser();
        return Session.get('isAdmin');
    }, // end of is Admin

}); // end of Template.header.helpers


/*


if (Meteor.userId() === "uwGHXYPr49hXPTq6i") {
            return true;
        } // end of if
        return false;

    adminUser: function() {
        Meteor.call('adminUser', function(error, result) {
            if (error) {
                console.log("An error has occurred : " + error);
            } // end of if
            else {
                Session.set('isAdmin', result);
            } // end of else
        }); // end of Meteor.call
    }, // end of adminUser
        

*/
