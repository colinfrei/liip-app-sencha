Ext.define('LiipApp.view.ContactPage', {
    extend: 'Ext.Panel',
    config: {
        title: 'Contact',
        iconCls: 'home',
        align: 'center',
        padding: 30,
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            title: 'Contact'
        }, {
            xtype: 'panel',
            html: [
                '<div class="contactAddress">',
                '<h1>Liip Z&uuml;rich</h1>',
                "<p>Feldstrasse 133<br />",
                "8004 Z&uuml;rich</p>",
                "<p>+41 43 500 39 80</p>",
                '</div>'
            ].join("")
        }, {
            xtype: 'button',
            ui: 'normal',
            text: 'Add to Contacts',
            margin: 20,
            listeners: {
                tap: function() {
                    var address = new ContactAddress();
                    address.type = 'work';
                    address.formatted = 'Feldstrasse 133, 8004 Zürich',
                        address.streetAddress = 'Feldstrasse 133';
                    address.postalCode = '8004';
                    address.locality = 'Zürich';
                    address.country = 'Switzerland';

                    var phoneNumber = new ContactField('work', '+41435003980', true);
                    var organization = new ContactOrganization('work', 'Liip AG');
                    organization.type = 'work';
                    organization.name = 'Liip AG';

                    var contact = navigator.contacts.create({
                        displayName: "Liip",
                        phoneNumbers: [phoneNumber],
                        addresses: [address],
                        organizations: [organization]
                    });

                    contact.save(function(contact) {
                        alert('added Contact');
                    }, function(contactError) {
                        alert("Error adding contact: " + contactError.code);
                    });
                }
            }
        }]
    }
});