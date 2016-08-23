import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    // code to run on server at startup
});

Blog.config({
    rss: {
        title: 'My Portfolio',
        description: 'Examples of my Work'
    },
});

Meteor.methods({
    adminUser: function() {
        if (this.userId !== "uwGHXYPr49hXPTq6i") {
            return false;
        } // end of if
        else {
            return true;
        }
    }, // end of admin
}); // end of Meteor.methods
