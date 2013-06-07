/*
 * File: app/view/ContactAdd.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Simplereg.view.ContactAdd', {
    extend: 'Ext.window.Window',

    id: 'ContactAdd',
    width: 400,
    closeAction: 'hide',
    iconCls: 'icon-add',
    title: 'Add Contact',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    defaults: {
                        anchor: '1'
                    },
                    bodyPadding: 10,
                    header: false,
                    title: 'Contact Data',
                    api: { submit: "Simplereg.controller.Person.addContactFromDialog" },
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            hidden: true,
                            itemId: 'person_id',
                            fieldLabel: 'Person Id',
                            name: 'personId',
                            readOnly: true
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Type',
                            name: 'ctype',
                            allowBlank: false,
                            editable: false,
                            displayField: 'name',
                            queryMode: 'local',
                            store: 'ContactType',
                            valueField: 'value'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Address',
                            name: 'address',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Phone',
                            name: 'phoneNumber'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'reset_dialog',
                                    iconCls: 'icon-reset',
                                    text: 'Reset'
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'cancel_dialog',
                                    iconCls: 'icon-cancel',
                                    text: 'Cancel'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'submit_dialog',
                                    iconCls: 'icon-add',
                                    text: 'Add Contact'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});